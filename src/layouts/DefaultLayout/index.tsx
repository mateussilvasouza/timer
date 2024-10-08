import { Outlet } from "react-router-dom";
import { Home } from "../../pages/Home";
import { LayoutContainer } from "./style";

export function DefaultLayout(){
  return (
    <LayoutContainer>
      <Home/>
      <Outlet/>
    </LayoutContainer>
  )
}