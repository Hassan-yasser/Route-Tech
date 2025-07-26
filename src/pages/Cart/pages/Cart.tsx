import ProductContainer from "../../../compoents/containeres/ProductContainer";

const Cart = () => {
  return (
    <div className="mainPadding space-y-4 ">
      <ProductContainer
        products={"cart"}
        message={`No Products Found in Your Cart`}
      />
    </div>
  );
};

export default Cart;
