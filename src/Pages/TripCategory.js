import './TripCategory.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Basecamp from "../Trip/basecamp.png"
import Hike from "../Trip/hike.png"
import Unexpolred from '../Trip/Unexplored.jpg'
import Hill from "../Trip/hill.png"

function TripCategory(){
    return(
        <>
            <div className="trip-box">
                <h1>Trip Categories</h1>


                <div className="line">
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div>


                <div className="tripcategory-images">
                    <div className="trip-image">
                        <Link><img src={Basecamp} /></Link>
                        <p>BASECAMP TREK</p>
                    </div>

                    <div className="trip-image">
                    <Link><img src={Hill} /></Link>
                        <p>SIGHTSEEING IN HILLY REGION</p>
                    </div>

                    <div className="trip-image">
                    <Link><img src={Hike} /></Link>
                        <p>HIKING</p>
                    </div>

                    <div className="trip-image">
                    <Link><img src={Basecamp} /></Link>
                        <p>BASECAMP TREK</p>
                    </div>

                    <div className="trip-image">
                    <Link><img src={Hill} /></Link>
                        <p>SIGHTSEEING IN HILLY REGION</p>
                    </div>

                    <div className="trip-image">
                    <Link><img src={Hike} /></Link>
                        <p>HIKING</p>
                    </div>

                    <div className="trip-image">
                    <Link><img src={Unexpolred} /></Link>
                        <p>Unexplored Places</p>
                    </div>
                </div>    
            </div>
        </>
    )
}

export default TripCategory;