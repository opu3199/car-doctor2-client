import Banner from "../Component/Banner";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Services from "../Component/Services";

const Home = () => {
    return (
        <div className="space-y-10">
            <div className="lg:mx-40 space-y-10">
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Services></Services>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;