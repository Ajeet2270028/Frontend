import React, { useEffect, useState } from "react";
import "./RelatedProduct.css";
//import data_product from "../Assets/data";
import Item from "../Item/Item";

const RelatedProduct = () => {
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4200/popularinwomen")
      .then((response) => response.json())
      .then((data) => setRelatedProduct(data));
  }, []);
  return (
    <div className="relatedproduct">
      <h1>Related Products</h1>
      <hr />
      <div className="related-product-item">
        {relatedProduct.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
