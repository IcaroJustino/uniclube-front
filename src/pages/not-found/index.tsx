import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-white to-gray-400">
      <div className="p-5 bg-white shadow-lg text-center rounded-lg">
        <h1 className="text-2xl font-bold">404 - Página não encontrada</h1>
        <button
          onClick={handleReturn}
          className="mt-5 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700 cursor-pointer"
        >
          Retornar
        </button>
      </div>
    </div>
  );
}
