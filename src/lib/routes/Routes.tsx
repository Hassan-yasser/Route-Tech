import { Routes as ReactRoutes, Route } from "react-router-dom";
import ErrorPage from "../../compoents/ResponseStatus/ErrorPage";
import ProductDetails from "../../pages/all-products/pages/subPages/ProductDetails";
import AllProducts from "../../pages/all-products/pages/AllProducts";
import Favorites from "../../pages/favorite-products/pages/Favorites";
import Cart from "../../pages/Cart/pages/Cart";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/products" element={<AllProducts />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<ErrorPage />} />
    </ReactRoutes>
  );
};

export default Routes;
