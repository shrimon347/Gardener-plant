import brand1 from  "../../assets/brand_img/logo-gardenista-4.png"
import brand2 from  "../../assets/brand_img/fa.png"
import brand3 from  "../../assets/brand_img/faa.png"
import brand4 from  "../../assets/brand_img/logo-ad-4.webp"
import brand5 from  "../../assets/brand_img/logo-at-3.webp"
import brand6 from  "../../assets/brand_img/logo-gh-2.png"
import brand7 from  "../../assets/brand_img/gaa.png"

const BrandUsed = () => {
  return (
    <div className="bg-green-100 mx-auto">
        <div>
            <p className="text-green-900 font-bold text-xl text-center py-10 ">AS SEEN IN</p>
        </div>
        <div className="grid grid-cols-2 max-w-7xl md:grid-cols-4 mx-auto place-items-center">
            <img className="w-[50%] " src={brand1} alt="" />
            <img className="w-[50%] " src={brand2} alt="" />
            <img className="w-[50%] " src={brand3} alt="" />
            <img className="w-[50%] " src={brand4} alt="" />
            <img className="w-[50%] " src={brand5} alt="" />
            <img className="w-[50%] " src={brand6} alt="" />
            <img className="w-[50%] " src={brand7} alt="" />
            <img className="w-[50%] " src={brand3} alt="" />
        </div>
        <div className="py-5">

        </div>
    </div>
  )
}

export default BrandUsed