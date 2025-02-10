import { useState } from "react";
import sandwichmenu from "../../../icons/orange-menu.svg";
import orangearrow from "../../../icons/orange-arrow.svg";
import menujson from "../../../config/menuOptions.json";
import loadingImage from "../../../static/loadingimage.svg";
import seemore from "../../../static/seemore.svg";
export default function SubmenuDesktop() {
  const [showMenu, setShowmenu] = useState(false);

  const HandleShowmenu = () => {
    setShowmenu(!showMenu);
  };

  const submenu = showMenu && (
    <div className="absolute top-full mt-0.5 h-fit left-1/2 transform -translate-x-1/2 w-[80%] rounded-[12px]  bg-white flex flex-col shadow-sm">
      <div className="flex flex-row justify-evenly p-5 ">
        <div className="grid grid-cols-3 grid-rows-2 gap-[40px] gap-x-20 text-[#737373]">
          {menujson.departamentos.map((departamento, index) => (
            <div key={index} className=" flex flex-col justify-evenly gap-y-2">
              <span className="text-lg font-semibold hover:text-black cursor-pointer ">
                {departamento.nome}
              </span>
              {departamento.categorias.map((categoria, index) => (
                <div key={index}>
                  <span className="cursor-pointer hover:text-black">
                    {categoria}
                  </span>
                </div>
              ))}
              <div className="flex flex-row gap-x-2 justify-start mt-2 text-sm font-semibold">
                <span className="cursor-pointer hover:text-[#2e2d2d]">
                  Ver mais
                </span>
                <img src={orangearrow} className="w-[16px] mt-[5px]" />
              </div>
            </div>
          ))}
        </div>
        <div className="text-[v#737373] ">
          {menujson.extras.map((departamento, index) => (
            <div key={index} className=" flex flex-col justify-evenly gap-y-2 ">
              <span className="text-lg font-semibold hover:text-black cursor-pointer ">
                {departamento.nome}
              </span>
              {departamento.categorias.map((categoria, index) => (
                <div key={index}>
                  <span className="cursor-pointer hover:text-black text-[#737373]">
                    {categoria}
                  </span>
                </div>
              ))}
              <span className="underline font-normal text-[#737373] cursor-pointer hover:text-[#2e2d2d]">
                Ver todos os departamentos
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="  bg-[#FAF7F4] py-10 w-full  flex  ">
        <div className=" w-[80%] m-auto h-fit flex flex-row justify-start hover:text-black">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className=" flex flex-col justify-evenly m-auto cursor-pointer "
            >
              <img src={loadingImage} className="w-[90px] h-[90px] m-auto " />
              <span className="text-center w-1/2  m-auto text-[#737373] text-base font-semibold ">
                Loren Ipsum
              </span>
            </div>
          ))}
          <div className=" flex flex-col justify-evenly  cursor-pointer">
            <img src={seemore} className="w-[90px] h-[90px] m-auto flex" />
            <span className="text-center w-1/2  m-auto text-[#737373] text-base font-semibold ">
              Ver mais empresas
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-[#EAE0D5] relative">
      <div className="w-[80%]  mx-auto    flex justify-between py-[15px] ">
        <div className="flex flex-row">
          <button
            onClick={HandleShowmenu}
            className="flex flex-row gap-x-3 w-fit   cursor-pointer "
          >
            <img src={sandwichmenu} className="w-[20px]" />
            <span>Departamentos</span>
            {showMenu ? (
              <img src={orangearrow} className="rotate-180 my-auto" />
            ) : (
              <img src={orangearrow} className="my-auto" />
            )}
          </button>
          <div className="h-full w-[3px] mx-5 bg-[#070605] opacity-50"></div>
          <span className="text-[#3F3F3F] font-normal text-base my-auto ">
            Descontos Cliente Unimed Natal
          </span>
        </div>
        <span className="text-base font-normal  text-[#737373] hover:text-black cursor-pointer">
          Venda no Uniclube
        </span>
      </div>
      {submenu}
    </div>
  );
}
