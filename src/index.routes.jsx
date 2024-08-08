import Add from "./Pages/Admin/Add";
import AdminHome from "./Pages/Admin/AdminHome";
import AdminRoot from "./Pages/Admin/AdminRoot";
import Edit from "./Pages/Admin/Edit";
import Basket from "./Pages/Client/Basket";
import Detail from "./Pages/Client/Detail";
import Favorites from "./Pages/Client/Favorites";
import {Home} from "./pages/Home";
import MainRoot from "./Pages/Client/MainRoot";

const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                index:true,
                element:<Home/>
            },
            {
                path:"Basket",
                element:<Basket/>
            },
            {
                path:"Favorites",
                element:<Favorites/>
            },
            {
                path:"/product/:id",
                element:<Detail/>
            },
        ]
    },
    {
        path:'/admin',
        element:<AdminRoot/>,
        children:[
            {
                path:"",
                index:true,
                element:<AdminHome/>
            },
            {
                path:"Add",
                element:<Add/>
            },
            // {
            //     path:"/edit/:id",
            //     element:<Edit/>
            // },

        ]
    }
]

export default ROUTES