import Product from "../pages/backend/Product";
import Category from "../pages/backend/Category";
const RouterAdmin=[
    {
        path: "product",
        element: <Product />,
      },
      { 
        path: "category",
       element: <Category />
     },
];
export default RouterAdmin;