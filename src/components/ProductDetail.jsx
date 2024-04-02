import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import "./pd.css";
import Product from "./Product";

function ProductDetail() {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts]=useState([])
  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setProduct(filterProduct[0]);

    const relatedProducts = items.filter((e)=>e.category===product.category)
    // console.log("RelatedProduct = ",relatedProducts)
    setRelatedProducts(relatedProducts)
  }, [id, product.category]);

  return (
    <div>
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div>
          <div className="text-center">
            <h1 className="card-title">{product.title}</h1>
            <p className="card-text">{product.description}</p>
            <button className="btn btn-primary mx-3">{product.price}</button>
            <button className="btn btn-warning">Add To Cart</button>
          </div>
        </div>
      </div>
      <h2 className="text-center">Related Product</h2>
      <Product items={relatedProducts} />
    </div>

  );
}

export default ProductDetail;
