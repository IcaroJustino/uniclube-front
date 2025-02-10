/* eslint-disable @typescript-eslint/no-unused-vars */
import Logo from "../../static/Logo.svg";
import Search from "../../icons/search.svg";
import Navmenu from "./nav-menu/desktop-menu";
import mobileMenu from "../../icons/orange-menu.svg";
import LocationIcon from "../../icons/location.svg";
import MobileMenu from "./nav-menu/mobile-menu";
import { useEffect, useState } from "react";
import SubmenuDesktop from "./suheader/desktop";
import menujson from "../../config/menuOptions.json";

export default function Header() {
  const [CepboxVisible, setCepboxVisible] = useState(false);
  const [ShowSideMenu, setShowSideMenu] = useState(false);

  const [UserCPF, setUserCPF] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const cpf = formData.get("cep") as string;
    setUserCPF(cpf);
    localStorage.setItem("cep", cpf);
  };

  useEffect(() => {
    const cep = localStorage.getItem("cep");
    if (cep) {
      setUserCPF(cep);
    }
  }, []);

  const toggleCepBox = () => {
    setCepboxVisible(!CepboxVisible);
  };

  const cepBox = CepboxVisible && (
    <div className="  mt-2 p-5 border z-[99] border-gray-500 mr-10 bg-[#EAE0D5] w-[280px] absolute left-35 transform -translate-x-1/2 translate-y-2 transition-all ease-out duration-300 opacity-100 rounded-lg shadow-lg">
      <label
        htmlFor="cep"
        className="block text-sm font-medium text-gray-700"
      ></label>
      <form onSubmit={handleSubmit} className="relative w-full mb-2 ">
        <input
          type="text"
          id="cep"
          name="cep"
          placeholder="Digite seu CEP"
          className="mt-1 p-2 px-4 border border-gray-300 w-full  rounded-4xl bg-white"
        />
        <button className="bg-orange-400 absolute w-[70px] h-[42px] rounded-4xl right-0 top-1 cursor-pointer">
          <span className="p-1 text-sm line-clamp-2  cursor-pointer">
            Buscar
          </span>
        </button>
      </form>
      <span className="p-2 mt-2">{UserCPF}</span>
      <div className="absolute -top-2 left-5 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#554b40]"></div>
    </div>
  );

  const mobileSideMenu = ShowSideMenu && (
    <div className="bg-black/50  h-full z-[99] top-0 fixed w-full left-0  ">
      <div className="w-[60%]  absolute  flex flex-col justify-start h-full left-0  bg-header ">
        <button
          className="text-[#F47920] hover:text-black font-bold text-4xl mx-4 cursor-pointer absolute right-0"
          onClick={() => setShowSideMenu(false)}
        >
          X
        </button>
        <div className="flex flex-col  h-full gap-y-4 overflow-y-scroll ">
          <h1 className="p-5 text-[#3F3F3F] font-semibold ">Departamentos</h1>
          {menujson.departamentos.map((item, index) => (
            <div
              className="flex flex-col outline-1 p-5 font-semibold text-[#3F3F3F] cursor-pointer hover:bg-black/20"
              key={index}
            >
              {item.nome}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-header lg:fixed lg:top-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-full m-auto z-[99] ">
      <div className="w-full relative z-[99] min-h-28 h-full flex-col lg:flex hidden">
        <hr className="bg-[#F47920] h-[8px] w-full"></hr>
        <section className=" h-full py-5 w-full justify-center flex lg:flex-row flex-col my-auto lg:gap-x-[2rem]  ">
          <div className="flex lg:w-[60%] lg:flex-row flex-col gap-x-5">
            <img
              src={Logo}
              alt="Logo"
              className=" my-5 lg:mx-0 mx-4 h-fit lg:w-auto w-[20rem] lg:my-auto cursor-pointer  hover:opacity-70  "
            />
            <form className="lg:my-auto my-4 w-full">
              <div className=" shadow-sm rounded-4xl relative px-2 bg-white lg:max-w-full max-w-[95%] lg:mx-0 mx-auto  ">
                <input
                  className=" h-[54px] w-full focus:outline-0 px-4 text-graytext  border-none "
                  type="search"
                  placeholder="O que você gostaria hoje?"
                ></input>
                <button type="submit" className="cursor-pointer z-99  ">
                  <img
                    src={Search}
                    alt="Buscar"
                    className="absolute right-0 top-0 z-99 bg-white p-[1.1rem] rounded-3xl  "
                  />
                </button>
              </div>
            </form>
          </div>
          <Navmenu />
        </section>
        <section>
          <SubmenuDesktop />
        </section>
      </div>
      {/* menu responsivo */}
      <div className="lg:hidden flex flex-col w-full">
        <hr className="bg-[#F47920] h-[10px] w-full flex flex-row "></hr>
        <div className="flex flex-row px-2">
          <div className=" h-full w-full my-auto">
            <div className="flex flex-row justify-items-start">
              <button
                className="cursor-pointer"
                onClick={() => setShowSideMenu(true)}
              >
                <img src={mobileMenu} className="ml-2 w-[2rem]" />
              </button>
              {mobileSideMenu}
              <img
                src={Logo}
                alt="Logo"
                className="  lg:mx-0 mx-4 h-fit lg:w-auto w-[10rem] my-6 cursor-pointer hover:opacity-70  "
              />
            </div>
          </div>
          <div className="flex my-auto flex-row justify-end px-5  w-1/2">
            <MobileMenu />
          </div>
        </div>
        <form className="  w-full">
          <div className=" shadow-sm rounded-4xl relative px-2 bg-white lg:max-w-full  mx-2 ">
            <input
              className=" h-[34px] w-full focus:outline-0 px-4 text-graytext  border-none "
              type="search"
              placeholder="O que você gostaria hoje?"
            ></input>
            <button type="submit" className="cursor-pointer z-99  ">
              <img
                src={Search}
                alt="Buscar"
                className="absolute right-0 top-0  z-50 bg-white p-2 rounded-3xl  "
              />
            </button>
          </div>
        </form>
        <div className="relative mx-2 my-4 w-full  ">
          <button
            onClick={toggleCepBox}
            className="flex flex-row cursor-pointer w-full"
          >
            <div className="rounded-full w-[40px] h-[40px]  bg-[#F7F3EE] flex justify-center">
              <img src={LocationIcon} alt="" className="w-[15px]" />
            </div>
            {UserCPF == "" ? (
              <p className="lg:text-base text-sm  flex my-auto gap-x-0.5 ml-1">
                <span className="font-semibold inline-block">Onde</span> você
                está?
              </p>
            ) : (
              <span className="my-auto ml-2">{UserCPF}</span>
            )}
          </button>
          {cepBox}
        </div>
      </div>
    </div>
  );
}
