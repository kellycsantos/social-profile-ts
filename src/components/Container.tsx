import { ReactNode } from "react"

type TChildren = {
    children: ReactNode
}

export default function Container({children} : TChildren ){
    return(
    <>
   
    <div className="container">
        {children}
    </div>
    </>
    )
}