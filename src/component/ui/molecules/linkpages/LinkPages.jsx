import React from "react"
import P from "../../atom/p/P"
import { Link } from "react-router"

const linkpages = [
    {tilte:"صفحه نخست" , href:"/"},
    {tilte:"آرشیو بلاگ", href:"/archive"},
    {tilte:"فروشگاه", href:"/store"},
    {tilte:"سوالات متداول", href:"/questions"},
]
export default function LinkPages(){
    return(
        <>
            {linkpages.map((item, index)=>(
                <React.Fragment key={index}>
                    <Link to={item.href}>
                        <P classname={"text-p"}>{item.tilte}</P>
                    </Link>
                </React.Fragment>
            ))}
        </>
    )
}