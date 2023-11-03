import { ReactNode } from "react"

type ContainerProps = {
    children:ReactNode;
}

export const Container = ({children}:ContainerProps) =>{
    return (
        <section>
            {children}
        </section>
    )
}