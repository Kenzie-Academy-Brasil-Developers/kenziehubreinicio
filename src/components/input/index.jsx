import { forwardRef } from "react"

export const Input = forwardRef(({label, error, id, ...rest }, ref) => {
    return(
        <div>
            {label ? <label htmlFor={id}>{label}</label> : null}
            <input id={id} ref={ref} {...rest} />
            {error ? <p>{error}</p> : null}
        </div>
    )
})