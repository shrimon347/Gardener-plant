import Categorylist from "../../components/category/Categorylist"
import { Plantfeatures } from "../../components/plant/Plantfeatures"
import Navbar from "../../components/navbar/Navbar"
import Slider from "../../components/slider/Slider"
import BrandUsed from "../../components/footer/BrandUsed"
import AskQuestion from "../../components/askquestion/AskQuestion"
import Airtcle from "../../components/airtcle/Airtcle"
import Footer from "../../components/footer/Footer"
import Feedback from "../../components/map/Feedback"
import Title from "../../components/navbar/Title"


const Home = () => {
  Title('Home')
  return (
    <div>
        <Navbar />
        <Slider />
        <Categorylist />
        <Plantfeatures />
        <Airtcle />
        <AskQuestion />
        <BrandUsed />
        <Feedback />
        <Footer />
    </div>
  )
}

export default Home