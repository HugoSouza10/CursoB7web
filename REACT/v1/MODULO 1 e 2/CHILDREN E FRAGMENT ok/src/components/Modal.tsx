import { ReactNode } from "react"

type Props = {
    children:ReactNode
}

export const Modal = ({children}:Props)=>{
    return (
        <>
          {children}
        </>
    )
}