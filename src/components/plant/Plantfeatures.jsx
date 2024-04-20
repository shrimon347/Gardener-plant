import { useEffect } from "react";
import { useState } from "react";
import Plant from "./Plant";

export const Plantfeatures = () => {
    const [plants, setPlant] = useState([])

    useEffect(()=> {
        fetch('plant.json')
        .then(res => res.json())
        .then(data => setPlant(data))
    }, [])
  return (
    <div className="max-w-7xl mx-auto p-5">
      <div>
        <p className="text-3xl font-bold text-green-900 text-center mt-[100px]">
          Housewarming Gifts for Plant Lovers and features plants
        </p>
        <p className="text-center text-sm text-green-700 mt-5">
          Whether your loved one just bought their first home or moved into a
          brand-new apartment, congratulations are certainly in order! Here are
          our picks for the best housewarming gifts for every plant lover in
          your life.
        </p>
      </div>
      <div className="mt-5 ">
        {
          plants.map((plant) => (<Plant key={plant.id} plant={plant} />) )
        }
      </div>
    </div>
  );
};
