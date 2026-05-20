import { Outlet } from "react-router"
import { CustomHeader } from "../compoents/CustomHeader"
import { CustomFooter } from "../compoents/CustomFooter"

export const ShopLayout = () => {
  return (
    <div className="min-h-screen bg-background">

      <CustomHeader />
      
    <Outlet/>

    <CustomFooter />
    </div>
  )
}