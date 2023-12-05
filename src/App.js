import "./index.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


import {
  Home, InstallationPage, ComponentList, Alert, Avatar, Button, Card, Image, Input, Lists
} from "./componentRoutes.jsx";

const AllcomponentRoutes = [
{
  name: "Alert",
  path: "components/alert",
  route: <Alert />,
},
{
  name: "Avatar",
  path: "components/avatar",
  route: <Avatar />,
},
{
  name: "Button",
  path: "components/button",
  route: <Button />,
},
{
  name: "Card",
  path: "components/card",
  route: <Card />,
},
{
  name: "Image",
  path: "components/image",
  route: <Image />,
},
{
  name: "Input",
  path: "components/input",
  route: <Input />,
},
{
  name: "Lists",
  path: "components/lists",
  route: <Lists />,
},  
];

const pathRoutes = [
{
  name: "Home",
  path: "/",
  route: <Home/>,
},
{
  name: "Installation",
  path: "/installation",
  route: <InstallationPage />,
},
{
  name: "Components",
  path: "/componentlist",
  route: <ComponentList/>,
},
...AllcomponentRoutes,
];

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      {
        pathRoutes.map(({path, route}, index)=>(
          <Route path={path} element={route} key={index}></Route>
        ))
      }
      </Routes>
      <Footer />
    </div>
  );
}


export {AllcomponentRoutes};