import mime from "mime-types"
import jwt from "jsonwebtoken"

function sendMessageToChrome(output, logger) {
  let outputMessage = JSON.stringify(output)
  const buf = Buffer.alloc(4) // 32 bits.
  try {
    buf.writeInt32LE(outputMessage.length, 0) // Use writeInt32BE if you're running on a big-endian architecture.

    process.stdout.write(buf)
    process.stdout.write(outputMessage)
  } catch (e) {
    logger.error(e.toString)
  }

  logger.info("Mengirim pesan di stdout: " + buf + outputMessage)
}
const controllerPrefixMatch = (cmd, ctrl) => {
  const regex = new RegExp(`^${ctrl.prefix}`)
  return regex.test(cmd)
}
function getFileExtensionFromMimeType(mimeType) {
  const extension = mime.extension(mimeType)

  return extension || "unknown"
}

function generateAccessToken(identity, TOKEN_SECRET) {
  return jwt.sign({ name: identity }, TOKEN_SECRET, { expiresIn: 60 * 60 })
}
function validateImageFile(fieldname, files, logger, maxFileSizeMb = 1) {
  let errors = []
  let filteredFiles = files.filter((item) => item.fieldname == fieldname)
  if (filteredFiles.length == 0) {
    errors.push({
      type: "field",
      path: fieldname,
      msg: `${fieldname} is required`,
    })
  } else {
    const [file] = filteredFiles
    const validMime = file.mimetype === "image/png" || file.mimetype === "image/jpeg" || file.mimetype === "image/webp"
    if (!validMime) {
      errors.push({
        path: fieldname,

        type: "mimetype",
        msg: `${fieldname} must be a valid image file`,
      })
    }

    const validSize = file.size <= 1024 * 1024 * maxFileSizeMb // 1MB
    if (!validSize) {
      errors.push({
        path: fieldname,
        type: "filesize",
        msg: `${fieldname} must be less than 1MB`,
      })
    }
    if (errors.length > 0) {
      logger.info("validateImageFile delete file")
      fs.unlink(file.path, (err) => {
        if (err) {
          logger.info("Error deleting file:", err)
        } else {
          logger.info("File deleted successfully!")
        }
      })
    }
  }
  return errors
}
export { sendMessageToChrome, controllerPrefixMatch, getFileExtensionFromMimeType, generateAccessToken, validateImageFile }
