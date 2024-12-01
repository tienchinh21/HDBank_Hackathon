import { lazy } from "react";

const routers = [
    {
        path: "/",
        components: lazy(() => import('@components/HomePage/HomePage'))
    },
    {
        path: "/confirmInfo",
        components: lazy(() => import('@components/ConfirmInfo/ConfirmInfo'))
    },
]

export default routers;