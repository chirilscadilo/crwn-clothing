import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Navigation from "./pages/navigation/navigation";
import SignIn from "./pages/sign-in/sign-in";

const Shop = () => {
  return <h1>Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
