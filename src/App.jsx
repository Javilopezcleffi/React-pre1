import "./App.css";
import Login from "./components/page/login/Login";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/page/Items/ItemListContainer";

const App = () => {

  return (
    <>
     <Navbar/>
     <Login/>
      <ItemListContainer greeting={"Hola"} nombre={"Juan"}/>
    </>
  );
}

export default App
