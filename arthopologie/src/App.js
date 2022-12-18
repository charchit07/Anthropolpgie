
import "./App.css";
  // import Cart from "./Components/Carts/Cart";
  // import Cardetails from "./Components/Carts/Cardetails";
import NavbarFinal from "./Components/NavbarFinal";
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
   <NavbarFinal/>
    <AllRoutes/>
    <Footer/>
    {/* <Cart/> */}
    {/* <Cardetails/> */}
    </div>
  );
}

export default App;
