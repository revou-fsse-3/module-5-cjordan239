

import { NavBar } from "@/Component"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const Layout = ({ children } : Props) => {

    return (
        <>
            <NavBar />
            <div>

                {children}
              
            </div>
        </>
    )
}

export default Layout