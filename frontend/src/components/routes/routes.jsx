// import ErrorPage from "../pages/view/ErrorPage";
import Dashboard from "../pages/Dashboard";

import Category from "../pages/view/category/Index";
import CategoryForm from "../pages/view/category/PageForm";
const routes = [ 
    {
        path: "/category",
        exact: true,
        auth: true,
        component: <Category title="Category" />
    },
    {
        path: "/category/form",
        exact: true,
        auth: true,
        component: <CategoryForm title="Category Form" />
    }, 
    {
        path: "/dashboard",
        exact: true,
        auth: true,
        component: <Dashboard title="Dashboard" />
    },     
    {
        path: "/",
        exact: true,
        auth: false,
        component: <Dashboard title="Dashboard" />
    },
    // {
    //     path: "*",
    //     exact: true,
    //     auth: false,
    //     component: <ErrorPage title="Error 404" />
    // },

]

export default routes;