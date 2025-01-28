import BannerPhoto from '../images/banner.png'
import '../Css/Banner.css'
function Banner() {
    return (
        <div className="banner-container">
            <img src={BannerPhoto} alt="Banner" className="banner-image" />
        </div>
    )
}

export default Banner
