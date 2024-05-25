import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./layoutStyle.css";
import LayoutSite from './layouts/LayoutSide/index.jsx';
import { useRoutes } from 'react-router-dom';
import LayoutAdmin from './layouts/LayoutAdmin';
import NoPage from './pages/NoPage.jsx';
import RouterApp from './routers'; 

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <LayoutSite/>,
      children: RouterApp.RouterSite,
    },
    { 
      path: "admin",
      element: <LayoutAdmin/> ,
      children: RouterApp.RouterAdmin,
    },
    {
      path:"*",
      element:<NoPage/>
    }
  ]);

  return element;
}
export default App;