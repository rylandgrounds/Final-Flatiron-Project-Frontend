import { useState, useEffect } from "react";

export default function useCorona() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setData(
        await fetch("https://api.covid19api.com/summary")
          .then((res) => res.json())
          .then((res) => res.Countries)
      );
    }
    fetchData();
  }, []);

  return data;
}
