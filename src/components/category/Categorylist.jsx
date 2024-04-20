import { useEffect } from "react"
import { useState } from "react"
import Category from "./Category"


const Categorylist = () => {
    const [categorys, setCategorys] = useState([])

    useEffect(()=>{
        fetch('category.json')
        .then(res => res.json())
        .then(data => setCategorys(data))
    },[])
  return (
    <div  className="max-w-7xl mx-auto p-5">
        <div>
        <p className="text-3xl font-bold text-green-900 text-center mt-[100px]">
            More Ways to Find Your Perfect Plant Categorys
        </p>
        <p className="text-center text-sm text-green-700 mt-5">
        Follow along on a Bird of Paradise’s journey from our greenhouse to your home, and learn how we care for your plant every step of the way
        </p>
      </div>
      <div >
        <div className="grid grid-cols-1 gap-10 justify-items-center mt-10 md:grid-cols-4">
          {categorys.map((category) => (<Category key={category.id} category={category}/>))}
        </div>
      </div>
    </div>
  )
}

export default Categorylist