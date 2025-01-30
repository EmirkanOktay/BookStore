import CaresoualHeader from '../Compenents/CaresoualHeader';
import LatestBooks from '../Compenents/LatestBooks';
import SectionTop from '../Compenents/SectionTop';
import TopSeller from '../Compenents/TopSeller';
import Header from '../Compenents/Header';
import ScrollToTop from '../Compenents/ScrollToTop';
import Banner from '../Compenents/Banner';
import Section from '../Compenents/Section';
import SectionSecond from '../Compenents/SectionSecond';
import Footer from '../Compenents/Footer';


function Index() {
    return (
        <div>
            <Header />
            <CaresoualHeader />
            <SectionTop />
            <LatestBooks />
            <TopSeller />
            <Banner />
            <Section />
            <SectionSecond />
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default Index