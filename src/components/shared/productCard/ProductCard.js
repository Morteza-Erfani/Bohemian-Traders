import React, { useState } from "react";

const ProductCard = ({ data }) => {
  console.log(data.products[0]);
  const product = data.products[0];
  const { productImage, modelImage, name, prices, sizes } = product;
  const allSize = [];
  sizes.map((size) => allSize.push(size.name));
  console.log(allSize);

  const [image, setImage] = useState(productImage.url);

  const changeImage = (image) => {
    setImage(image.url);
  };

  return (
    <div>
      <div>
        <img
          src={image}
          alt={name}
          onMouseOver={() => changeImage(modelImage)}
          onMouseLeave={() => changeImage(productImage)}
        />
        <p>QUICK VIEW</p>
        <p>{allSize.map((size) => size)}</p>
      </div>
      <h3>{name}</h3>
      <h2>BOHEMIAN TRADERS</h2>
      <p>$US {prices}</p>
    </div>
  );
};

export default ProductCard;
