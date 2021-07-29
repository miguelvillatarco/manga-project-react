import { useEffect, useState } from "react";
import { getHotManga } from "./api.js";
import { MangaGrid } from "./MangaGrid.js";

export default function App() {
  const [mangas, setMangas] = useState([]);

  const getMangas = async () => {
    try {
      const data = await getHotManga();
      setMangas(data);
    } catch (err) {}
  };

  useEffect(() => {
    getMangas();
  }, []);

  return (
    <div className="max-w-2xl flex flex-col mx-auto p-4">
      <div>
        <h1 className="text-2xl text-center bg-red-700">Hot Mangas {""}</h1>
      </div>
      <MangaGrid mangas={mangas} />
    </div>
  );
}
