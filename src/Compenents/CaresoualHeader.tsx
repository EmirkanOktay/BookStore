import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Carousel1 from '../images/careousal1.webp'
import Carousel2 from '../images/careousal2.webp'
import '../Css/CaresoualHeader.css'

function CaresoualHeader() {

    return (
        <Carousel className="Carousel"
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            showIndicators={false}
            interval={6000}>
            <div className="images-div">
                <img src={Carousel1} alt="" />
            </div>
            <div>
                <img src={Carousel2} />
            </div>
        </Carousel>

    )
}

export default CaresoualHeader