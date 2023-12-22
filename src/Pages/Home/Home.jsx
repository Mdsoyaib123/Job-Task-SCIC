import Banner from "../../Component/Banner/Banner";
import Contact from "../../Component/Contact/Contact";
import Faq from "../../Component/FAQ/FAQ.JSX";

import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";

const Home = () => {
    return (
        <div id="home">
            <Navbar></Navbar>
            <Banner></Banner>
            <Faq></Faq>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;