import { useEffect, useState } from "react";

export const Shop = () => {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.slip.advice);
        setAdvice(json.slip.advice);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="p-6 bg-green-400 rounded-lg text-2xl">Совет: {advice}</div>
        <button className="p-6 bg-red-400 text-2xl">Нажми</button>
      </div>
    </>
  );
};
