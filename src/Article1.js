import "./Article1.css"
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
                        <img src={Basecamp} />
                        <p>BASECAMP TREK</p>
                    </div>

                    <div className="slide-img">
                        <img src={Hill} />
                        <p>SIGHTSEEING IN HILLY REGION</p>
                    </div>

                    <div className="slide-img">
                        <img src={Hike} />
                        <p>HIKING</p>
                    </div>

                    <div className="slide-img">
                        <img src={Basecamp} />
                        <p>BASECAMP TREK</p>
                    </div>

                    <div className="slide-img">
                        <img src={Hill} />
                        <p>SIGHTSEEING IN HILLY REGION</p>
                    </div>

                    <div className="slide-img">
                        <img src={Hike} />
                        <p>HIKING</p>
                    </div>
                </div>    
            </div>

    )
}

export default Article1;