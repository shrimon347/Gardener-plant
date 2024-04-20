/* eslint-disable react/prop-types */


const Category = ({category}) => {
    const {logo,category_name} = category
  return (
    <div> 
        <div  data-aos="flip-left">
            <img src={logo} alt="" />
            <p className="text-center text-green-900 font-semibold text-xl p-3">{category_name}</p>
        </div>
    </div>
  )
}

export default Category