import "./Article2.css"
import Kathmandu from "./pic/Kathmandu.png"
import Pokhara from "./pic/Pokhara.png"
import Bhaktapur from "./pic/Bhaktapur.png"
import Chitwan from "./pic/Chitwan.png"
import Annapurna from "./pic/Annapurna.png"
import Everest from "./pic/Everest.png"

function Article2(){
    return(
        <div className="article2">
                <p>Popular things to do</p>
                <div className="line">
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div>
                <div className="ttd">
                    <div className="container">
                        <img src={Kathmandu}/>
                        <p>Religious Tour</p>
                    </div>
                    <div className="container">
                        <img src={Chitwan}/>
                        <p>Sightseeing in NP</p>
                    </div>
                    <div className="container">
                        <img src={Bhaktapur}/>
                        <p>Cultural</p>
                    </div>
                    <div className="container">
                        <img src={Everest}/>
                        <p>Basecamp Trek</p>
                    </div>
                    <div className="container">
                        <img src={Everest}/>
                        <p>Hiking</p>
                    </div>
                </div>     
            </div>
    )
}

export default Article2;