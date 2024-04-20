import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast";
const Root = () => {
  return (
    <div >
        <Outlet></Outlet>
        <Toaster />
    </div>
  )
}

export default Root