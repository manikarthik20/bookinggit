import './Featured.css';
import img3 from '../../pics/MicrosoftTeams-image3.png';
import img2 from '../../pics/MicrosoftTeams-image2.png';
import img1 from '../../pics/MicrosoftTeams-image1.png';

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img
                    src={img3}
                    alt="featured1"
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img
                    src={img2}
                    alt="featured2"
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Reno</h1>
                    <h2>533 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src={img1}
                         alt="featured3"
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>532 properties</h2>
                </div>
            </div>
        </div>
    )
};

export default Featured;