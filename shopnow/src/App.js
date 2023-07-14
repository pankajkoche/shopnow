import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";

import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";



const Layout=()=>{
  return(
    <div>
      <Header/>
      <HeaderBottom/>
      <ScrollRestoration />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/'element={<Layout/>}></Route>
    </Route>
  )
)

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
