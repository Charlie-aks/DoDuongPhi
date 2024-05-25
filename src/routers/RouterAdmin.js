import Product from "../pages/backend/Product";
import Category from "../pages/backend/Category";
import Banner from "../pages/backend/Banner";
import Brand from "../pages/backend/Brand";
import Contact from "../pages/backend/Contact";
import Topic from "../pages/backend/Topic";
import Menu from "../pages/backend/Menu";
import User from "../pages/backend/User";
const RouterAdmin=[
    {
        path: "product",
        element: <Product />,
      },
      { 
        path: "category",
       element: <Category />
     },
     {
      path: "brand",
      element:<Brand/>
     },
     {
      path: "banner",
      element:<Banner/>
     },
     {
      path: "contact",
      element:<Contact/>
     },
     {
      path: "topic",
      element:<Topic/>
     },
     {
      path: "menu",
      element:<Menu/>
     },
     {
      path: "user",
      element:<User/>
     }
   
];
export default RouterAdmin;