import Button from "../../../../components/shared/ux/Button"
import { ValidationErrIcon } from "../../../../components/shared/ux/ValidationIcon"
import { inputCls, niceScrollbarCls, inputClsError } from "../../ux/cls"
const FormRow = ({ label, onChange = (f) => f, value }) => {
  return (
    <div className="flex  items-center p-2 px-2">
      <div className="w-[70px]">
        <label className="font-bold">{label}</label>
      </div>
      <div className="flex-grow">
        <input className={inputCls} value={value} onChange={onChange} />
      </div>
    </div>
  )
}

const FormRowValidation = ({ label, onChange = (f) => f, value, validationErrors, fieldname, autofocus = false, useTextArea = false, className = "" }) => {
  return (
    <div className="flex  items-center p-2 px-2">
      <div className="w-[70px]">
        <label className="font-bold">{label}</label>
      </div>
      <div className="flex-grow">
        <div className="relative">
          {useTextArea ? (
            <textarea
              className={`${validationErrors[fieldname] ? inputClsError : inputCls}  ${niceScrollbarCls} ${fieldname} ${className} min-h-[128px]`}
              value={value}
              onChange={onChange}
              autofocus={autofocus} /*eslint-disable*/
            ></textarea>
          ) : (
            <input
              className={`${validationErrors[fieldname] ? inputClsError : inputCls} ${fieldname} ${className}`}
              value={value}
              onChange={onChange}
              autofocus={autofocus} /*eslint-disable*/
            />
          )}
          {validationErrors[fieldname] && <ValidationErrIcon absolute="yes" />}
        </div>

        {validationErrors[fieldname] && <p className="text-sm text-red-600 mt-2">{validationErrors[fieldname].message}</p>}
      </div>
    </div>
  )
}

const FormRowImageValidation = ({ label, onChange, validationErrors, fieldname, className = "", inputRef, imageUrl, validImage }) => {
  return (
    <div className="flex  p-2 px-2">
      <div className="w-[80px]">
        <label className="font-bold">{label}</label>
      </div>
      <div className="flex-grow relative pl-2">
        <div className="absolute flex flex-row justify-end w-full items-center px-2">
          <Button
            icon="fa fa-upload"
            caption="Upload Image"
            className={`${fieldname}`}
            onClick={(e) => {
              // inputRef.current.value = ""
              inputRef.current.click()
            }}
          />
        </div>
        <div className="">
          <div className="h-{30px} w-{30px} bg-white"></div>
          <input type="file" ref={inputRef} className={`hidden ${inputCls}`} onChange={onChange} />

          {validImage ? (
            <div className="flex-grow rounded rounded-md overflow-hidden mb-2">
              <img src={`${imageUrl}`} />
            </div>
          ) : null}
        </div>
        <div className="flex">
          {validationErrors[fieldname] && <ValidationErrIcon absolute="no" />}
          {validationErrors[fieldname] && <p className="text-sm text-red-600 mt-0">{validationErrors[fieldname].message}</p>}
        </div>
      </div>
    </div>
  )
}

export { FormRow, FormRowValidation, FormRowImageValidation }
