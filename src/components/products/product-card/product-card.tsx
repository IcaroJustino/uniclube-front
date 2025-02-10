/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ProductCardProps } from "../../../config/interface/product";
import favorite from "../../../icons/favorite.svg";
import unfavorite from "../../../icons/unfavorite.svg";

export default function ProductCard(product: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(product.favorite);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="max-w-[206px] lg:m-0 m-auto w-full  flex flex-col rounded-md bg-white cursor-pointer truncate">
      <div className="relative">
        {product && <img src={product.image} alt={product.title} />}
        <button
          onClick={toggleFavorite}
          className="absolute bottom-2 right-2 cursor-pointer w-[26px] h-[26px]"
        >
          {isFavorite ? <img src={favorite} /> : <img src={unfavorite} />}
        </button>
      </div>
      <section className=" m-auto p-2 h-full flex flex-col">
        <span className="text-lg text-[#3F3F3F]  w-full text-wrap truncate py-2">
          {product.title}
        </span>
        {product.discount && product.discount != 0 ? (
          <div className="flex flex-row justify-start gap-x-2">
            <span className="line-through text-sm text-[#737373] ">
              {product.price}
            </span>
            <span className="text-[#CC0A12] text-[12px] my-[1.2px]">
              {product.discount}% OFF
            </span>
          </div>
        ) : (
          <span className=" text-[#737373] text-sm">A partir de</span>
        )}
        <span className="text-[#3F3F3F] text-[26px]  font-semibold">
          R$ {product.price}
        </span>
        <span className="text-[#737373] font-semibold text-sm my-2 truncate overflow-hidden text-wrap">
          em até 3x de R$ {(product.price / 3).toFixed(2)} sem juros no cartão
        </span>
        <span className="text-[#737373] font-semibold text-sm my-0">
          ou R$ {product.valorPix} no pix
        </span>
        <span className=" text-[#737373] text-sm truncate text-nowrap ">
          Vendido por {product.vendedor}
        </span>
      </section>
    </div>
  );
}
