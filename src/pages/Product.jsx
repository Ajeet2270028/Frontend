import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../componants/Breadcrum/Breadcrum";
import ProductDisplay from "../componants/ProductDisplay/ProductDisplay";
import DescriptionBox from "../componants/DescriptionBox/DescriptionBox";
import RelatedProduct from "../componants/RelatedProduct/RelatedProduct";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox></DescriptionBox>
      <RelatedProduct></RelatedProduct>
    </div>
  );
};

export default Product;
