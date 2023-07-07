import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Navigation from "./pages/navigation/navigation";
import Authentication from "./pages/authentication/authentication";

const Shop = () => {
  return <h1>Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
