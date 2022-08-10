import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import ProperList from '../../components/propertyList/ProperList'
import '../home/Home.css'

const Home = () => {
  return (
    <div >
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">
          Browse by property type
        </h1>
        <ProperList/>
        <h1 className="homeTitle">
          Homes Guests love
        </h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home