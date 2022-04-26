import List from "./Views/List"
import Home from "./Views/Home"



var LayoutRoute = [
    {
        path: "/list/:id",
        name: "List",
        component: List
    },
    {
        path: "/",
        name: "Home",
        exact: true,
        component: Home
    },
   
  


];

export default LayoutRoute