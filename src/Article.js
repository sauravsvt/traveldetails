import "./Article.css"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
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
                    <Link><img src={Kathmandu} alt="kathmandu" title="sdsdghygkhvmhv yhv y" /></Link>
                    <Link><img src={Pokhara} alt="Pokhara" /></Link>
                    <Link><img src={Bhaktapur} alt="Bhaktapur" /></Link>
                    <Link><img src={Chitwan} alt="Chitwan" /></Link>
                    <Link><img src={Annapurna} alt="Annapurna" /></Link>
                    <Link><img src={Everest} alt="Everest" /></Link>
                </div>
            </div>   
        </article>
    )
}


export default Article;

