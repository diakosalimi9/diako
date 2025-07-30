import "./li.css"
export default function Li({classname, children}){
    return(
        <li className={classname}>{children}</li>
    )
}