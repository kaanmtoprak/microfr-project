import { HomePage, NotFoundPage } from "../../pages"

const routes = [
    {
        path: "/",
        component: < HomePage/>,
    },
    {
        path: "*",
        component: < NotFoundPage/>,
    }
    
]

export {routes};