import "./Article1.css"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Basecamp from "./Trip/basecamp.png"
import Hike from "./Trip/hike.png"
import Hill from "./Trip/hill.png"

function Article1(){
    return(
        <div className="article1">
                <p>Trip Categories</p>
                <div className="line">
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div>
                <div className="trip-img">
                    <div className="slide-img">
                        <Link><img src={Basecamp} /></Link>
                        <p>BASECAMP TREK</p>
                    </div>

                    <div className="slide-img">
                    <Link><img src={Hill} /></Link>
                        <p>SIGHTSEEING IN HILLY REGION</p>
                    </div>

                    <div className="slide-img">
                    <Link><img src={Hike} /></Link>
                        <p>HIKING</p>
                    </div>

                    <div className="slide-img">
                    <Link><img src={Basecamp} /></Link>
                        <p>BASECAMP TREK</p>
                    </div>

                    <div className="slide-img">
                    <Link><img src={Hill} /></Link>
                        <p>SIGHTSEEING IN HILLY REGION</p>
                    </div>

                    <div className="slide-img">
                    <Link><img src={Hike} /></Link>
                        <p>HIKING</p>
                    </div>
                </div>    
            </div>

    )
}

export default Article1;