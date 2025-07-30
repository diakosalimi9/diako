import "./ul.css"
export default function UL({classname, children}){
    return(
        <ul className={classname}>{children}</ul>
    )
}