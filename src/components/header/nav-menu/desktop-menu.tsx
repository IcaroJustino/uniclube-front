/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import Location from "../../../icons/location.svg";
import User from "../../../icons/user.svg";
import Shopcart from "../../../icons/shopcart.svg";

export default function Navmenu() {
  const [CepboxVisible, setCepboxVisible] = useState(false);
  const [LoginBoxVisible, setLoginBoxVisible] = useState(false);

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
    setLoginBoxVisible(false);
    setCepboxVisible(!CepboxVisible);
  };

  const toggleLoginBox = () => {
    setCepboxVisible(false);
    setLoginBoxVisible(!LoginBoxVisible);
  };

  const cepBox = CepboxVisible && (
    <div className=" z-50 mt-2 p-5 border border-gray-500 mr-10 bg-[#EAE0D5] w-[280px] absolute lg:left-1/2 left-30 transform -translate-x-1/2 translate-y-2 transition-all ease-out duration-300 opacity-100 rounded-lg shadow-lg">
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
        <button
          type="submit"
          className="bg-orange-400 absolute w-[70px] h-[42px] rounded-4xl right-0 top-1"
        >
          <span className="p-1 text-sm line-clamp-2">Buscar</span>
        </button>
      </form>
      <span className="p-2 mt-2">{UserCPF}</span>
      <div className="absolute -top-2 lg:left-25 left-10 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#554b40]"></div>
    </div>
  );

  const loginBox = LoginBoxVisible && (
    <div className="z-50  mt-2 p-5 border border-gray-500 mr-10 bg-[#EAE0D5] lg:w-[350px]  lg:absolute relative left-1/2 transform -translate-x-1/2 translate-y-2 transition-all ease-out duration-300 opacity-100 rounded-lg shadow-lg">
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
    <>
      <nav className="mr-0 my-auto  ">
        <ol className="  lg:flex-row  flex  gap-x-5 w-full">
          <li className="relative lg:m-0 m-5  lg:w-auto w-1/3 ">
            <button
              onClick={toggleCepBox}
              className="flex flex-row cursor-pointer"
            >
              <div className="rounded-full w-[46px] h-[46px] bg-[#F7F3EE] flex justify-center">
                <img src={Location} alt="" className="w-[20px]" />
              </div>
              {UserCPF == "" ? (
                <p className="lg:text-base text-sm w-full flex my-auto gap-x-0.5 ml-1">
                  <span className="font-semibold inline-block">Onde</span> você
                  está?
                </p>
              ) : (
                <span className="my-auto ml-2">{UserCPF}</span>
              )}
            </button>
            {cepBox}
          </li>
          <li className="lg:relative lg:inline-block  hidden">
            <button
              onClick={toggleLoginBox}
              className=" flex-row cursor-pointer lg:flex hidden"
            >
              <div className="rounded-full w-[46px] h-[46px] bg-[#F7F3EE] flex justify-center">
                <img src={User} alt="" className="w-[20px]" />
              </div>
              <p className="text-base flex-1 flex flex-col text-start ml-2">
                <span className="font-semibold inline-block">Faça Login</span>
                ou cadastre-se?
              </p>
            </button>
            <button
              onClick={toggleLoginBox}
              className=" flex-row cursor-pointer lg:hidden flex "
            >
              <div className="rounded-full w-[46px] h-[46px] bg-[#F7F3EE] flex justify-center">
                <img src={User} alt="" className="w-[20px]" />
              </div>
              <p className="text-base flex-1 flex flex-col text-start ml-2">
                <span className="font-semibold inline-block">Faça Login</span>
                ou cadastre-se?
              </p>
            </button>
            {loginBox}
          </li>
          <li className="relative  lg:inline-block hidden cursor-pointer">
            <div className="rounded-full w-[46px] h-[46px] bg-[#F7F3EE] flex justify-center">
              <img src={Shopcart} alt="" className="w-[20px] h-[48px] " />
            </div>
          </li>
        </ol>
      </nav>
    </>
  );
}
