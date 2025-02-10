/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProductCardProps } from "../../config/interface/product";
import potes from "../../static/products/potes.png";
import bonecas from "../../static/products/dolls.png";
import garrafas from "../../static/products/garrafas.png";
import bolsas from "../../static/products/panelas.png";
import galinhas from "../../static/products/galinhas.png";
import ProductCard from "./product-card/product-card";

export default function Products() {
  const products: ProductCardProps[] = [
    {
      id: 1,
      image: garrafas,
      title: "Garrafa de areia colorida",
      favorite: false,
      price: 29.61,
      discount: 10,
      parcelas: 3,
      valorParcela: 6.33,
      valorPix: 18.5,
      vendedor: "Sr. Castanha",
    },
    {
      id: 2,
      image: bolsas,
      title: "Bolsas variadas de fibra de Açaí",
      favorite: true,
      price: 49.9,
      discount: 0,
      parcelas: 2,
      valorParcela: 24.95,
      valorPix: 49.9,
      vendedor: "Dandara",
    },
    {
      id: 3,
      image: galinhas,
      title: "Galinha e pintinhos de barro feitas à mão",
      favorite: false,
      price: 14.9,
      discount: 10,
      parcelas: 0,
      valorParcela: 0,
      valorPix: 13.0,
      vendedor: "Patrícia Arte",
    },
    {
      id: 4,
      image: potes,
      title: "Panelas de barro de São Gonçalo do Amarante",
      favorite: true,
      price: 29.9,
      discount: 0,
      parcelas: 2,
      valorParcela: 16.95,
      valorPix: 23.9,
      vendedor: "Sebastião Salgado",
    },
    {
      id: 5,
      image: bonecas,
      title: "Artesanato de bonecas negras feitas à mão",
      favorite: false,
      price: 9.91,
      discount: 0,
      parcelas: 2,
      valorParcela: 7.45,
      valorPix: 9.9,
      vendedor: "Manu Intimates",
    },
  ];

  return (
    <div
      className="lg:p-10 p-2 lg:max-w-[80%] max-w-[90%] my-[30px] mb-[100px] m-auto rounded-4xl min-h-[530px] bg-cover "
      style={{
        backgroundImage: `url(/unimedbackground.png)`,
      }}
    >
      <div className="text-white lg:text-3xl text-xl lg:p-0 p-2 mb-5">
        <h2 className="text-white text-3xl "></h2>
        Desconto cliente <span className="font-bold">Unimed Natal</span>
      </div>
      <div className="flex flex-wrap flex-row justify-between gap-5">
        {products.map((product) => (
          <ProductCard
            title={product.title}
            discount={product.discount}
            favorite={product.favorite}
            id={product.id}
            image={product.image}
            parcelas={product.parcelas}
            price={product.price}
            valorParcela={product.valorParcela}
            valorPix={product.valorPix}
            vendedor={product.vendedor}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}
