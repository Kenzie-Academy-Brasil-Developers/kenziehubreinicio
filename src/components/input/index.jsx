import { forwardRef } from "react"

export const Input = forwardRef(({label, id, error, ...rest }, ref) => {
    return(
        <>
            {label ? <label htmlFor={id}>{label}</label> : null}
            <input id={id} ref={ref} {...rest} />
            {error ? <span>{error}</span> : null}
        </>
    )
})