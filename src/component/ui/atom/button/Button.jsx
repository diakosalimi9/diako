import "./button.css"
export default function Button({children ,onClick,classname}) {
    return <button className={classname} onClick={onClick}>{children}</button>
}