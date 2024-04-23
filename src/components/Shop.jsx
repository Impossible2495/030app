import { useState } from "react";

export const Shop = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="p-6 bg-green-400 rounded-lg text-2xl">Количество кликов {count}</div>
        <button
          className="p-6 bg-red-400 text-2xl"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Нажми
        </button>
      </div>
    </>
  );
};
