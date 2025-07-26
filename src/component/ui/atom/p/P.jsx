import "./p.css"
export default function P({children ,classname}) {
    return <p className={classname}>{children}</p>
}