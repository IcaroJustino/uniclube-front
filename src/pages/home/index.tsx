import { useState, useEffect } from "react";
import Loading from "../loading-page";
import Header from "../../components/header";
import { Carousel } from "../../components/carrousel";
import Departamentos from "../../components/departamentos";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verifica se a página já carregou
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <main className="">
      <Header />
      <Carousel />
      <Departamentos />
    </main>
  );
}
