import CaresoualHeader from '../Compenents/CaresoualHeader';
import LatestBooks from '../Compenents/LatestBooks';
import SectionTop from '../Compenents/SectionTop';
import TopSeller from '../Compenents/TopSeller';
import Header from '../Compenents/Header';
import ScrollToTop from '../Compenents/ScrollToTop';
import Banner from '../Compenents/Banner';


function Index() {
    return (
        <div>
            <Header />
            <CaresoualHeader />
            <SectionTop />
            <LatestBooks />
            <TopSeller />
            <Banner />
            <ScrollToTop />
        </div>
    )
}

export default Index