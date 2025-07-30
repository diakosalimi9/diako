import Header1 from "../../ui/organism/header1/Header1";
import Header2 from "../../ui/organism/header2/Header2";
import NavBar from "../../ui/organism/navbar/NavBar";

export default function Layout({ children }) {
    return (
        <>
            <div>
                <Header1 />
                <Header2 />
                <NavBar />
            </div>

            <div>{children}</div>

            <div>
                
            </div>
        </>
    )
}