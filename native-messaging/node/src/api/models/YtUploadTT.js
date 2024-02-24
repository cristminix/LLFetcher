import { calculateOffset, calculateTotalPages } from "../libs/utils.js"

class YtUploadTT {
  constructor(uploadId, id, title, description, thumbnail) {
    this.uploadId = uploadId
    this.id = id
    this.title = title
    this.description = description
    this.thumbnail = thumbnail
  }
}
export class YtUploadTTValidation {
  model = null
  constructor(model) {
    this.model = model
  }
}
export class MYtUploadTT {
  ds = null
  manager = null

  constructor(ds) {
    this.ds = ds
    this.manager = ds.manager
  }

  async create(uploadId, title, description, thumbnail) {
    const ytuploadtt = new YtUploadTT()
    ytuploadtt.uploadId = uploadId
    ytuploadtt.title = title
    ytuploadtt.description = description
    ytuploadtt.thumbnail = thumbnail

    let record = null

    try {
      record = await this.manager.save(ytuploadtt)
    } catch (err) {
      // console.log(err)
    }
    return record
  }

  async getByPk(pk) {
    let id = pk
    let record = null
    try {
      const ytuploadtt = await this.manager.findOne(YtUploadTT, { where: { id } })

      record = ytuploadtt
    } catch (e) {
      // console.error(e)
    }

    return record
  }

  async update(pk, row) {
    let id = pk
    let record = null
    try {
      const ytuploadtt = await this.manager.findOne(YtUploadTT, { where: { id } })
      if (ytuploadtt) {
        this.manager.merge(YtUploadTT, ytuploadtt, row)

        record = await this.manager.save(ytuploadtt)
      }
    } catch (e) {
      // console.error(e)
    }
    return record
  }

  async delete(pk) {
    let id = pk
    let record = null
    try {
      const ytuploadtt = await this.manager.findOne(YtUploadTT, { where: { id } })
      if (ytuploadtt) {
        record = await this.manager.remove(ytuploadtt)
      }
    } catch (e) {
      // console.error(e)
    }
    return record
  }
  async getState(uploadId, limit = 5, page = null, filter = null) {
    if (!limit) {
      limit = 5
    }

    try {
      const record = await this.ds.createQueryBuilder(YtUploadTT, "a").select(["COUNT(a.id) count"]).where("a.uploadId = :uploadId", { uploadId }).getRawOne()
      //   console.log(record)
      const total_records = record.count
      let records = []
      const total_pages = calculateTotalPages(total_records, limit)
      if (page && page !== null) {
        const offset = calculateOffset(page, limit)
        records = await this.ds
          .getRepository(YtUploadTT)
          .createQueryBuilder("a")
          .select(["a.id id"])
          .where("a.uploadId = :uploadId", { uploadId })
          .limit(limit)
          .offset(offset)
          .getRawMany()
      }
      return { limit, total_pages, total_records, record_count: records.length }
    } catch (e) {
      // console.error(e)
      //   res.send(e)
    }
    return { limit, total_pages: 0, total_records: 0, record_count: 0 }
  }
  async getList(uploadId = null, page = 1, limit = 5, order_by = "id", order_dir = "asc", filter = null) {
    if (!limit) {
      limit = 5
    }

    if (!page) {
      page = 1
    }

    if (!order_by) {
      order_by = "id"
    }
    if (order_dir) {
      order_dir = order_dir.toLowerCase()
    }
    if (!["asc", "desc"].includes(order_dir)) {
      order_dir = "asc"
    }
    try {
      const record = await this.ds
        .createQueryBuilder(YtUploadTT, "a")
        .select(["COUNT(a.id) count"])
        .orderBy(`a.${order_by}`, order_dir.toUpperCase())
        .where("a.uploadId = :uploadId", { uploadId })
        .getRawOne()
      const total_records = record.count
      const total_pages = calculateTotalPages(total_records, limit)
      const offset = calculateOffset(page, limit)

      const records = await this.ds
        .createQueryBuilder(YtUploadTT, "a")
        .select(["a.id", "a.title", "a.description", "a.thumbnail"]) //,title,description,category,tags,video,createDate,owner")
        .orderBy(`a.${order_by}`, order_dir.toUpperCase())
        .where("a.uploadId = :uploadId", { uploadId })
        .skip(offset)
        .take(limit)
        .getMany()

      return { page, limit, order_by, order_dir, records, total_pages, total_records }
    } catch (e) {
      // res.send(e)
    }
    return { page, limit, order_by, order_dir, records: [], total_pages: 0, total_records: 0 }
  }
}
export default YtUploadTT
