import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"
import Contact from './components/Contact'
import { createBrowserRouter ,RouterProvider ,Outlet} from "react-router-dom";
import Error from "./components/Error";

const AppComponent = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children:[
      {
        path:'/',
        element:<Body />
    }
      ,
      {path:'/about',
        element:<About/>
      },
      {path:'/contact',
        element:<Contact/>
      }
    ],
    errorElement:<Error/>
  }
]);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<RouterProvider router={AppRouter}/>);
