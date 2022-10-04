import "./Article3.css"

import Annapurna2 from "./Trip/Annapurna.png"
import Paragliding from "./pic/Paragliding.png"
import Everest2 from "./pic/Everest2.png"


function Article3() {

    function starClick(){
        alert("Star icon clicked");
    }

    return(
        <div className="article3">
                <p className="topic">Best Sellers in the year</p>
                <div className="line">
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div>

                
                    
                <div className="best-seller-list">

                    {/* Best seller of the year(1)*/}

                    <div className="imgs-icons">
                        <img src={Annapurna2} />
                        <svg onClick={starClick} className="star" width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 1.90928L24.0139 14.4954L24.1249 14.8435H24.4903H37.5053L26.9679 22.6434L26.6803 22.8563L26.7891 23.1972L30.809 35.8022L20.2975 28.0214L20 27.8012L19.7025 28.0214L9.19098 35.8022L13.2109 23.1972L13.3197 22.8563L13.0321 22.6434L2.49474 14.8435H15.5097H15.8751L15.9861 14.4954L20 1.90928Z" fill="white" stroke="#F2C94C"/>
                        </svg>

                        <svg className="clock-icon" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 28.9128C22.2487 28.9128 28.125 22.9259 28.125 15.5408C28.125 8.15558 22.2487 2.1687 15 2.1687C7.75126 2.1687 1.875 8.15558 1.875 15.5408C1.875 22.9259 7.75126 28.9128 15 28.9128Z" stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 7.89966V15.5408L18.75 19.3614" stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className="clock-text">11-14D</p>

                        <svg className="location-icon" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 16.6436C17.0711 16.6436 18.75 14.9331 18.75 12.823C18.75 10.713 17.0711 9.00244 15 9.00244C12.9289 9.00244 11.25 10.713 11.25 12.823C11.25 14.9331 12.9289 16.6436 15 16.6436Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 2.63477C12.3478 2.63477 9.8043 3.70817 7.92893 5.61883C6.05357 7.5295 5 10.1209 5 12.823C5 15.2325 5.5025 16.8091 6.875 18.5539L15 28.1054L23.125 18.5539C24.4975 16.8091 25 15.2325 25 12.823C25 10.1209 23.9464 7.5295 22.0711 5.61883C20.1957 3.70817 17.6522 2.63477 15 2.63477V2.63477Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className="location-text">Pokhara</p>

                        <div className="card">
                            <p className="title">Annapurna Santuary</p>
                            <div className="stars-text">
                                <div className="stars">
                                    <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                    </svg>

                                    <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                    </svg>

                                    <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                    </svg>

                                    <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                    </svg>

                                    <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                    </svg>
                                </div>

                                <p className="rating">133 Rating(s)</p>

                                <div className="price">
                                    <p className="price1">$ 6000 per person</p>
                                    <p className="price2">$ 5500 per person</p>
                                    <button className="price-button">Inquire Now</button>
                                </div>
                            </div>
                        </div>    
                    </div>

                    {/* Best seller of the year(2)*/}

                    <div className="imgs-icons">
                        <img src={Paragliding} />
                        <svg onClick={starClick} className="star" width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 1.90928L24.0139 14.4954L24.1249 14.8435H24.4903H37.5053L26.9679 22.6434L26.6803 22.8563L26.7891 23.1972L30.809 35.8022L20.2975 28.0214L20 27.8012L19.7025 28.0214L9.19098 35.8022L13.2109 23.1972L13.3197 22.8563L13.0321 22.6434L2.49474 14.8435H15.5097H15.8751L15.9861 14.4954L20 1.90928Z" fill="white" stroke="#F2C94C"/>
                        </svg>

                        <svg className="clock-icon" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 28.9128C22.2487 28.9128 28.125 22.9259 28.125 15.5408C28.125 8.15558 22.2487 2.1687 15 2.1687C7.75126 2.1687 1.875 8.15558 1.875 15.5408C1.875 22.9259 7.75126 28.9128 15 28.9128Z" stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 7.89966V15.5408L18.75 19.3614" stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className="clock-text">6-8D</p>

                        <svg className="location-icon" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 16.6436C17.0711 16.6436 18.75 14.9331 18.75 12.823C18.75 10.713 17.0711 9.00244 15 9.00244C12.9289 9.00244 11.25 10.713 11.25 12.823C11.25 14.9331 12.9289 16.6436 15 16.6436Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 2.63477C12.3478 2.63477 9.8043 3.70817 7.92893 5.61883C6.05357 7.5295 5 10.1209 5 12.823C5 15.2325 5.5025 16.8091 6.875 18.5539L15 28.1054L23.125 18.5539C24.4975 16.8091 25 15.2325 25 12.823C25 10.1209 23.9464 7.5295 22.0711 5.61883C20.1957 3.70817 17.6522 2.63477 15 2.63477V2.63477Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className="location-text">Pokhara</p>

                        <div className="card">
                            <p className="title">Pokhara Tour</p>
                            <div className="stars-text">
                                <div className="stars">
                                    <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                    </svg>

                                    <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                    </svg>

                                    <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                    </svg>

                                    <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                    </svg>

                                    <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                    </svg>
                                </div>

                                <p className="rating">80 Rating(s)</p>

                                <div className="price">
                                    <p className="price1">$ 3500 per person</p>
                                    <p className="price2">$ 3500 per person</p>
                                    <button className="price-button">Inquire Now</button>
                                </div>
                            </div>
                        </div>    
                    </div>

                    {/* Best seller of the year(3)*/}

                    <div className="imgs-icons">
                        <img src={Everest2} />
                        <svg onClick={starClick} className="star" width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 1.90928L24.0139 14.4954L24.1249 14.8435H24.4903H37.5053L26.9679 22.6434L26.6803 22.8563L26.7891 23.1972L30.809 35.8022L20.2975 28.0214L20 27.8012L19.7025 28.0214L9.19098 35.8022L13.2109 23.1972L13.3197 22.8563L13.0321 22.6434L2.49474 14.8435H15.5097H15.8751L15.9861 14.4954L20 1.90928Z" fill="white" stroke="#F2C94C"/>
                        </svg>

                        <svg className="clock-icon" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 28.9128C22.2487 28.9128 28.125 22.9259 28.125 15.5408C28.125 8.15558 22.2487 2.1687 15 2.1687C7.75126 2.1687 1.875 8.15558 1.875 15.5408C1.875 22.9259 7.75126 28.9128 15 28.9128Z" stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 7.89966V15.5408L18.75 19.3614" stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className="clock-text">11-14D</p>

                        <svg className="location-icon" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 16.6436C17.0711 16.6436 18.75 14.9331 18.75 12.823C18.75 10.713 17.0711 9.00244 15 9.00244C12.9289 9.00244 11.25 10.713 11.25 12.823C11.25 14.9331 12.9289 16.6436 15 16.6436Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 2.63477C12.3478 2.63477 9.8043 3.70817 7.92893 5.61883C6.05357 7.5295 5 10.1209 5 12.823C5 15.2325 5.5025 16.8091 6.875 18.5539L15 28.1054L23.125 18.5539C24.4975 16.8091 25 15.2325 25 12.823C25 10.1209 23.9464 7.5295 22.0711 5.61883C20.1957 3.70817 17.6522 2.63477 15 2.63477V2.63477Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className="location-text">Pokhara</p>

                        <div className="card">
                            <p className="title">Annapurna Santuary</p>
                            <div className="stars-text">
                                <div className="stars">
                                    <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                    </svg>

                                    <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                    </svg>

                                    <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                    </svg>

                                    <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                    </svg>

                                    <svg className="rate-star" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0.822021L10.4375 5.85246L15.875 6.68026L11.9375 10.5645L12.875 16.1044L8 13.4936L3.125 16.1044L4.0625 10.5645L0.125 6.68026L5.5625 5.85246L8 0.822021Z" fill="#FFCA28"/>
                                    </svg>
                                </div>

                                <p className="rating">133 Rating(s)</p>

                                <div className="price">
                                    <p className="price1">$ 6000 per person</p>
                                    <p className="price2">$ 5500 per person</p>
                                    <button className="price-button">Inquire Now</button>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                
                <a href="#" className="explore">Explore All</a>

            </div>
    )
}

export default Article3;