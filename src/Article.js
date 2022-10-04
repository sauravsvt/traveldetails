import "./Article.css"
import Kathmandu from "./pic/Kathmandu.png"
import Pokhara from "./pic/Pokhara.png"
import Bhaktapur from "./pic/Bhaktapur.png"
import Chitwan from "./pic/Chitwan.png"
import Annapurna from "./pic/Annapurna.png"
import Everest from "./pic/Everest.png"



function Article(){

    return(
        <article >
            <div className="article">
                <p>Top Destination in Nepal</p>
                <div className="line">
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div>
                <div className="destinations-img">
                    <img src={Kathmandu} alt="kathmandu" />
                    <img src={Pokhara} alt="Pokhara" />
                    <img src={Bhaktapur} alt="Bhaktapur" />
                    <img src={Chitwan} alt="Chitwan" />
                    <img src={Annapurna} alt="Annapurna" />
                    <img src={Everest} alt="Everest" />
                </div>
            </div>   
        </article>
    )
}


export default Article;

