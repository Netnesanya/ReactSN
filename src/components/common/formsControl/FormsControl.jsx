import f from './FormsControl.module.css'




export const TextArea = ({input, meta, child, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={f.formControl + '' + (hasError ? f.error : '')}>
            <textarea {...input} {...props} />
            <div className={f.formControl + '' +( hasError ? f.error : '')}>
                {hasError  && <span> {meta.error} </span>}
            </div>
        </div>
    )
}

export const Input = ({input, meta, child, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={f.formControl + '' +( hasError ? f.error : '')}>
            <input {...input} {...props} />
            <div className={f.formControl + '' +( hasError ? f.error : '')}>
                {hasError  && <span> {meta.error} </span>}
            </div>
        </div>
    )
}