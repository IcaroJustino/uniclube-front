import { useState, useEffect } from "react";
import Loading from "../loading-page";
import Header from "../../components/header";

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
    <main className="h-[1000vh]">
      <Header />
    </main>
  );
}
