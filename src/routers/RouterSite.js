import Home from "../pages/frontend/Home.jsx";
import Contact from "../pages/frontend/Contact.jsx"
const RouterSite=[
    {
        index:true,
        element: <Home />
    },
    {
    path: "contact", 
    element: <Contact /> 
},
];
export default RouterSite;