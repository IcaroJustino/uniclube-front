import Logo from "../../static/Logo.svg";
import Search from "../../icons/search.svg";
import Location from "../../icons/location.svg";
import User from "../../icons/user.svg";
import Shopcart from "../../icons/shopcart.svg";
import { useState } from "react";

export default function Header() {
  const [CepboxVisible, setCepboxVisible] = useState(false);
  const [LoginBoxVisible, setLoginBoxVisible] = useState(false);

  const toggleCepBox = () => {
    setLoginBoxVisible(false);
    setCepboxVisible(!CepboxVisible);
  };

  const toggleLoginBox = () => {
    setCepboxVisible(false);
    setLoginBoxVisible(!LoginBoxVisible);
  };

  const cepBox = CepboxVisible && (
    <div className="mt-2 p-5 border border-gray-500 mr-10 bg-[#EAE0D5] w-[280px]  lg:absolute relative left-1/2 transform -translate-x-1/2 translate-y-2 transition-all ease-out duration-300 opacity-100 rounded-lg shadow-lg">
      <label
        htmlFor="cep"
        className="block text-sm font-medium text-gray-700"
      ></label>
      <div className="relative w-full mb-2 ">
        <input
          type="text"
          id="cep"
          name="cep"
          placeholder="Digite seu CEP"
          className="mt-1 p-2 px-4 border border-gray-300 w-full  rounded-4xl bg-white"
        />
        <button className="bg-orange-400 absolute w-[70px] h-[42px] rounded-4xl right-0 top-1">
          <span className="p-1 text-sm line-clamp-2">Buscar</span>
        </button>
      </div>
      <span className="p-2 mt-2">Cep</span>
      <div className="absolute -top-2 left-25 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#554b40]"></div>
    </div>
  );

  const loginBox = LoginBoxVisible && (
    <div className="mt-2 p-5 border border-gray-500 mr-10 bg-[#EAE0D5] lg:w-[350px]  lg:absolute relative left-1/2 transform -translate-x-1/2 translate-y-2 transition-all ease-out duration-300 opacity-100 rounded-lg shadow-lg">
      <label
        htmlFor="cep"
        className="block text-sm font-medium text-gray-700"
      ></label>
      <div className="relative w-full ">
        <input
          type="text"
          id="cep"
          name="cep"
          placeholder="Digite seu e-mail ou CPF"
          className="mt-1 p-2 px-4 border border-gray-300 w-full  rounded-4xl bg-white"
        />
        <button className="bg-orange-400 absolute w-[80px] h-[42px] text-center rounded-4xl right-0 top-1">
          <span className="p-1 text-sm line-clamp-2">Prosseguir</span>
        </button>
      </div>
      <div className="absolute -top-2 left-29 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#554b40]"></div>
    </div>
  );

  return (
    <div>
      <div className="w-full bg-header relative min-h-28 h-full flex flex-col">
        <hr className="bg-[#F47920] h-[8px] w-full"></hr>
        <section className=" h-full   w-full justify-center flex lg:flex-row flex-col my-auto lg:gap-x-[2rem]  ">
          <div className="flex lg:w-[60%] lg:flex-row flex-col gap-x-5">
            <img
              src={Logo}
              alt="Logo"
              className=" my-5 lg:mx-0 mx-4 h-fit lg:w-auto w-[20rem] lg:my-auto cursor-pointer  hover:opacity-70  "
            />
            <form className="my-auto w-full">
              <div className=" shadow-sm rounded-4xl relative px-2 bg-white lg:max-w-full max-w-[95%] lg:mx-0 mx-auto  ">
                <input
                  className=" h-[54px] w-full focus:outline-0 px-4 text-graytext  border-none "
                  type="search"
                  placeholder="O que você gostaria hoje?"
                ></input>
                <button type="submit" className="cursor-pointer z-50  ">
                  <img
                    src={Search}
                    alt="Buscar"
                    className="absolute right-0 top-0 z-50 bg-white p-[1.1rem] rounded-3xl  "
                  />
                </button>
              </div>
            </form>
          </div>
          <nav className="mr-0 my-auto  ">
            <ol className="  lg:flex-row flex-col lg:flex hidden  gap-x-5 w-[100%]">
              <li className="relative ">
                <button
                  onClick={toggleCepBox}
                  className="flex flex-row cursor-pointer"
                >
                  <div className="rounded-full w-[46px] h-[46px] bg-[#F7F3EE] flex justify-center">
                    <img src={Location} alt="" className="w-[20px]" />
                  </div>
                  <text className="text-base flex-1 flex flex-col text-start ml-1">
                    <span className="font-semibold inline-block">Onde</span>você
                    está?
                  </text>
                </button>
                {cepBox}
              </li>
              <li className="relative  ">
                <button
                  onClick={toggleLoginBox}
                  className="flex flex-row cursor-pointer "
                >
                  <div className="rounded-full w-[46px] h-[46px] bg-[#F7F3EE] flex justify-center">
                    <img src={User} alt="" className="w-[20px]" />
                  </div>
                  <text className="text-base flex-1 flex flex-col text-start ml-2">
                    <span className="font-semibold inline-block">
                      Faça Login
                    </span>
                    ou cadastre-se?
                  </text>
                </button>
                {loginBox}
              </li>
              <li className="relative   cursor-pointer">
                <div className="rounded-full w-[46px] h-[46px] bg-[#F7F3EE] flex justify-center">
                  <img src={Shopcart} alt="" className="w-[20px] h-[48px] " />
                </div>
              </li>
            </ol>
          </nav>
        </section>
      </div>
    </div>
  );
}
