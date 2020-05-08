import Index from "../pages/index/index";
import Detail from "../pages/detail/detail";

export default [
    {
        path: "/", component: Index
    },
    {
        path: "/detail/:id", component: Detail
    }
]