import Link from "next/link";
import React from "react";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price, category } }) => {
  const { setQty } = useStateContext();
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card" onClick={() => setQty(1)}>
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">Rs {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
