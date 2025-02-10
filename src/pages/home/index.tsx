import { useState, useEffect } from "react";
import Loading from "../loading-page";
import Header from "../../components/header";
import { Carousel } from "../../components/carrousel";
import Departamentos from "../../components/departamentos";
import Products from "../../components/products";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setTimeout(() => setLoading(false), 500);

    if (document.readyState === "complete") {
      setTimeout(() => setLoading(false), 500);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <main className="">
      <Header />
      <Carousel />
      <Departamentos />
      <Products />
    </main>
  );
}
