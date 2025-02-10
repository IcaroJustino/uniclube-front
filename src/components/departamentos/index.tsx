/* eslint-disable @typescript-eslint/no-unused-vars */
import baby from "../../icons/Departamentos/baby.svg";
import book from "../../icons/Departamentos/Book.svg";
import fit from "../../icons/Departamentos/fit.svg";
import glass from "../../icons/Departamentos/glass.svg";
import heart from "../../icons/Departamentos/heart.svg";
import key from "../../icons/Departamentos/Key.svg";
import mirror from "../../icons/Departamentos/Mirror-2.svg";
import sofa from "../../icons/Departamentos/Sofa.svg";
import ticket from "../../icons/Departamentos/ticket.svg";
import tshirt from "../../icons/Departamentos/T-Shirt.svg";

export default function Departamentos() {
  const departamentos = [
    {
      image: book,
      title: "Arte,Papelaria e Armarinhos",
    },
    {
      image: heart,
      title: "Saude",
    },
    {
      image: tshirt,
      title: "Calçados Roupas e Bolsas",
    },
    {
      image: baby,
      title: "Bebês",
    },
    {
      image: sofa,
      title: "Casa Moveis Decoração",
    },
    {
      image: fit,
      title: "Esportes e Fitness",
    },
    {
      image: mirror,
      title: "Beleza e Cuidado Pessoal",
    },
    {
      image: key,
      title: "Imóveis",
    },
    {
      image: glass,
      title: "Óculos",
    },
    {
      image: ticket,
      title: "Serviços",
    },
  ];

  return (
    <div className="w-[80%] mx-auto my-[50px] gap-x-10 flex flex-row justify-evenly text-wrap custom-scrollbar overflow-x-auto">
      {departamentos &&
        departamentos.map((departamento) => {
          return (
            <div className="flex max-w-[150px]  w-full flex-col justify-start hover:text-black">
              <div className="w-[96px] h-[96px] rounded-full mx-auto bg-[#EAE0D5] hover:bg-[#F47920]/50 flex justify-center">
                <img
                  src={departamento.image}
                  className="w-[50px] h-[50px] m-auto hover:fill-white hover:text-white"
                  alt={departamento.title}
                />
              </div>
              <span className="text-[#737373] w-[110px] h-fit text-wrap m-auto text-center   hover:text-black font-normal mt-[7px]">
                {departamento.title}
              </span>
            </div>
          );
        })}
    </div>
  );
}
