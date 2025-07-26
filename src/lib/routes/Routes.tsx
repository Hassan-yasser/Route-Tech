import { Routes as ReactRoutes, Route } from "react-router-dom";
import ErrorPage from "../../compoents/ResponseStatus/ErrorPage";
import AllProducts from "../../pages/all-products/pages/AllProducts";
import Favorites from "../../pages/favorite-products/pages/Favorites";
import Cart from "../../pages/Cart/pages/Cart";
import ProductDetails from "../../pages/all-products/pages/subPages/page/ProductDetails";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<AllProducts />} />
      <Route path="/products/:id/view/details" element={<ProductDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<ErrorPage />} />
    </ReactRoutes>
  );
};

export default Routes;
