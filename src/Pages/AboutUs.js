import './AboutUs.css'
import pic from '../pic/Abhishek Shakya CV.PNG'
function AboutUs(){
    return(
        <>
            <div className='contact-box'>
                <div className='contact-header'>
                    <p>We are TravelDetails<p>'A team dedicated to creating <p>One Stop travel information'</p></p></p>
                    <div className='founders'>
                        <div className='founder1'>
                            <img src={pic}/>
                            <h4>Newtan Sigh</h4>
                            <p>CEO, Co-Founder</p>
                        </div> 

                         <div className='founder2'>
                            <img src={pic} />
                            <p>Newtan Sigh</p>
                            <p>CEO, Co-Founder</p>
                        </div> 

                         <div className='founder3'>
                            <img src={pic} />
                            <p>Newtan Sigh</p>
                            <p>CEO, Co-Founder</p>
                        </div>    
                    </div>
                </div>

                <div className='about-content'>
                    <h1>About Us</h1>
                    <p>All that clicking between websites, making reservations and bookings, and having so little
                        information about the new location can make travelling rather exhausting. With the assistance of
                        TravelDetails, however, travelling can be fun and meaningful. Founded in 2079 B.S (2022 A.D.),
                        our company provides high-quality travel information for everyone at no cost.
                    </p>

                    <p>Our objective at Travel Details is to deliver unique, meaningful, and affordable travel
                        experiences for you. From all the details concerning local accommodations, transport services,
                        unknown and undocumented attractions, local delicacies, and local customs, to the details of
                        legal and regulatory requirements, everything is here for you. Our company offers you with
                        everything you need to have an excellent, enjoyable, and fulfilling experience.
                    </p>

                    <p>We also help you with inter-city bookings and reservations by providing services ranging from
                        ticket booking for sightseeing, museums, tourist attractions, to ticket bookings for boating,
                        paragliding, and other activities. With our free transportation service, we ensure you arrive at
                        your destinations on time. We also provide you with required gears and equipment for your
                        expedition as well as emergency medical services.
                    </p>

                    <p>With all these services and more, our company promises you authentic experiences and lifetime
                        memories.
                    </p>
                </div>

                <div className='team'>
                    <h1>Meet The Team</h1>
                    <div className='members'>

                        <div className='center'>
                            <div className='member'>
                                <div className='member-head'>
                                    <img src={pic} />
                                </div>

                                <div className='member-name'>
                                    <h4>Newtan Singh</h4>
                                    <p>Cheif Executive Officer</p>
                                </div>    
                            </div>
                        </div>

                        <div className='center'>
                            <div className='member'>
                                <div className='member-head'>
                                    <img src={pic} />
                                </div>

                                <div className='member-name'>
                                    <h4>Saurav Shriwastav</h4>
                                    <p>Cheif Technology Officer</p>
                                </div>    
                            </div>
                        </div>

                        <div className='center'>
                            <div className='member'>
                                <div className='member-head'>
                                    <img src={pic} />
                                </div>

                                <div className='member-name'>
                                    <h4>Mukesh Yadav</h4>
                                    <p>Cheif Design Officer</p>
                                </div>    
                            </div>
                        </div>

                        <div className='center'>
                            <div className='member'>
                                <div className='member-head'>
                                    <img src={pic} />
                                </div>

                                <div className='member-name'>
                                    <h4>Komal Raj Bhattrai</h4>
                                    <p>Research and Development</p>
                                </div>    
                            </div>
                        </div>

                        <div className='center'>
                            <div className='member'>
                                <div className='member-head'>
                                    <img src={pic} />
                                </div>

                                <div className='member-name'>
                                    <h4>Abhishek Shakya</h4>
                                    <p>Fullstack Developer</p>
                                </div>    
                            </div>
                        </div>

                        <div className='center'>
                            <div className='member'>
                                <div className='member-head'>
                                    <img src={pic} />
                                </div>

                                <div className='member-name'>
                                    <h4>Rodip Duwal</h4>
                                    <p>Backend Developer</p>
                                </div>    
                            </div>
                        </div>

                        <div className='center'>
                            <div className='member'>
                                <div className='member-head'>
                                    <img src={pic} />
                                </div>

                                <div className='member-name'>
                                    <h4>Prajina Suwar</h4>
                                    <p>Content Writer</p>
                                </div>    
                            </div>
                        </div>

                        <div className='center'>
                            <div className='member'>
                                <div className='member-head'>
                                    <img src={pic} />
                                </div>

                                <div className='member-name'>
                                    <h4>Mirnal Chaudhary</h4>
                                    <p>Fullstack Developer</p>
                                </div>    
                            </div>
                        </div>

                        <div className='center'>
                            <div className='member'>
                                <div className='member-head'>
                                    <img src={pic} />
                                </div>

                                <div className='member-name'>
                                    <h4>Aashutosh Shah</h4>
                                    <p>Frontend Developer</p>
                                </div>    
                            </div>
                        </div>
                    </div>
                    
                    <br/>

                    <p>Connect with us:</p>
                    <p>+977-9844187965</p>
                    <p>traveldetails.saurav@gmail.com</p>

                </div>
                    

            </div>
        </>
    )
}

export default AboutUs;