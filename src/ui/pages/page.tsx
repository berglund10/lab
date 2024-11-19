import { ReactNode } from "react";
import { PageTitle } from "./pagetitle";
import { Main } from "./main";

type Props = {
    title: string;
    children: ReactNode;
  }
  
export function Page({title, children} : Props) {
    return (
    <Main>
    <PageTitle text={title}/>
    {children}
    </Main>
    )
  }
  //HIgher order compnent