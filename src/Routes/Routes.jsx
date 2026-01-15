import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children:[
        {
            path:'/',
            index: true,
            element:<Home></Home>

        },
        {
          path: '/book/:id',
          loader: async () =>{
            const res = await fetch("/bookdata.json");
            return res.json();
          },
          element: <BookDetails></BookDetails>
          
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path:'/login',
          element: <Login></Login>
        }
    ]
  },
]);

export default router;