/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import User from "../../../icons/user.svg";
import Shopcart from "../../../icons/shopcart.svg";
import logo from "../../../static/Logo.svg";

export default function MobileMenu() {
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

  const toggleLoginBox = () => {
    setLoginBoxVisible(!LoginBoxVisible);
  };

  const closeLoginBox = () => {
    setLoginBoxVisible(false);
  };

  const loginBox = LoginBoxVisible && (
    <div className="bg-black/50  h-full  z-[99]  top-0 absolute w-screen right-0 px-2 ">
      <div className="w-[60%]  absolute  flex flex-col justify-start h-full right-0  bg-header">
        <hr className="bg-[#F47920] h-[10px] w-full flex flex-row "></hr>
        <div className="p-5">
          <div className="flex flex-row justify-between">
            <img src={logo} alt="" className="w-[60%]" />
            <button
              className="text-[#F47920] hover:text-black font-bold text-4xl mx-4 cursor-pointer"
              onClick={closeLoginBox}
            >
              X
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <label className="flex flex-col mt-4">
              <span className="font-semibold">Faça login</span>
              <span>ou cadastre-se</span>
            </label>
            <div className="relative w-full mt-2">
              <input
                type="text"
                id="cep"
                name="cep"
                placeholder="Digite seu e-mail ou CPF"
                className=" p-2 px-4 border border-gray-300 w-full  rounded-4xl bg-white"
              />
              <button
                type="submit"
                className="bg-orange-400 absolute w-[80px] h-[42px] text-center rounded-4xl right-0 top-0"
              >
                <span className="p-1 text-sm line-clamp-2">Prosseguir</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <nav className="mr-0 my-auto flex flex-row">
      <ol className=" flex-row  flex  w-fit m-auto gap-x-4">
        <li className=" inline-block ">
          <button
            onClick={toggleLoginBox}
            className=" flex-row cursor-pointer my-auto flex"
          >
            <div className="rounded-full w-[40px] h-[40px]  bg-[#F7F3EE] flex justify-center">
              <img src={User} alt="" className="w-[20px]" />
            </div>
          </button>
          {loginBox}
        </li>
        <li className="relative  inline-block  cursor-pointer">
          <div className="rounded-full w-[40px] h-[40px]  bg-[#F7F3EE] flex justify-center">
            <img src={Shopcart} alt="" className="w-[24px] h-[44px] " />
          </div>
        </li>
      </ol>
    </nav>
  );
}
