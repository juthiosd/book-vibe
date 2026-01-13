import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";


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
          element: <BookDetails></BookDetails>
        }
    ]
  },
]);

export default router;