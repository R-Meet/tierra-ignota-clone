import type { ReactNode } from "react";
import { Navbar } from "../../components/navbar";


const ProjectLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
    <Navbar/>
      {children}
    </>
  )
}

export { ProjectLayout };