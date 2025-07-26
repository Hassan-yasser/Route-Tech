import ProductContainer from "../../../compoents/containeres/ProductContainer";

const Favorites = () => {
  return (
    <div className="mainPadding space-y-4 ">
      <ProductContainer
        message={`No Favorite Products Found`}
        products={"favorite"}
      />
    </div>
  );
};

export default Favorites;
