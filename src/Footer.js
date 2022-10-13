import "./Footer.css"
import logo from './logo.png';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function Footer(){
    return(
        <footer>
            <div classsName="footer-box">
            <div className="footer1">
                    <div className="footer_left">
                        <div className="left">
                            <img src={logo} alt='logo' />
                            <p>TravelDetails.org is a platform where we are providing every minor detail about their
journey in Nepal where customers can expect a comfortable, safe and enriching experience,
excitement, cultural exposure, authentic Nepali foods and many more. 
                            </p>
                        </div>

                        <div className="right">
                            <p>Company</p>
                            <ul>
                                <li><Link className="link" to="/about">About Us</Link></li>
                                <li><Link className="link" to="/careers">Carrers</Link></li>
                                {/* <li><Link className="link" to="">Support</Link></li>
                                <li><Link className="link" to="">Testimonials</Link></li> */}
                                <li><Link className="link" to="">Privacy Policies</Link></li>
                                <li><Link className="link" to="">Terms of Service</Link></li>
                                <li><Link className="link" to="">FAQ</Link></li>
                            </ul>
                        </div>
                    </div>
                
                    <div className="footer_right">
                        <div className="left1">
                            <p className="contact_title footer_right_title">Contact</p>
                            <div className="footer_contact">
                                <div className="footer_list">
                                    <svg className="contacts_icon" width="29" height="34" viewBox="0 0 29 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.5 18.5C17.0888 18.5 19.1875 16.4853 19.1875 14C19.1875 11.5147 17.0888 9.5 14.5 9.5C11.9112 9.5 9.8125 11.5147 9.8125 14C9.8125 16.4853 11.9112 18.5 14.5 18.5Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M14.5 2C11.1848 2 8.00537 3.26428 5.66117 5.51472C3.31696 7.76516 2 10.8174 2 14C2 16.838 2.62812 18.695 4.34375 20.75L14.5 32L24.6562 20.75C26.3719 18.695 27 16.838 27 14C27 10.8174 25.683 7.76516 23.3388 5.51472C20.9946 3.26428 17.8152 2 14.5 2V2Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                    <p className="contacts_p">Chhireshwornath, Dhanausha, Nepal</p>
                                </div>

                                <div className="footer_list">
                                    <svg className="contacts_icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.1337 13.3663C19.0177 13.2501 18.8799 13.1579 18.7283 13.095C18.5767 13.0321 18.4141 12.9998 18.2499 12.9998C18.0858 12.9998 17.9232 13.0321 17.7716 13.095C17.6199 13.1579 17.4822 13.2501 17.3662 13.3663L15.3737 15.3588C14.4499 15.0838 12.7262 14.4588 11.6337 13.3663C10.5412 12.2738 9.91618 10.55 9.64118 9.62626L11.6337 7.63376C11.7499 7.51777 11.842 7.38002 11.9049 7.22837C11.9678 7.07673 12.0002 6.91417 12.0002 6.75001C12.0002 6.58584 11.9678 6.42328 11.9049 6.27164C11.842 6.12 11.7499 5.98224 11.6337 5.86626L6.63368 0.866257C6.51769 0.750075 6.37994 0.657903 6.2283 0.595014C6.07665 0.532126 5.9141 0.499756 5.74993 0.499756C5.58576 0.499756 5.42321 0.532126 5.27156 0.595014C5.11992 0.657903 4.98216 0.750075 4.86618 0.866257L1.47618 4.25626C1.00118 4.73126 0.733679 5.38376 0.743679 6.05001C0.772429 7.83001 1.24368 14.0125 6.11618 18.885C10.9887 23.7575 17.1712 24.2275 18.9524 24.2575H18.9874C19.6474 24.2575 20.2712 23.9975 20.7437 23.525L24.1337 20.135C24.2499 20.019 24.342 19.8813 24.4049 19.7296C24.4678 19.578 24.5002 19.4154 24.5002 19.2513C24.5002 19.0871 24.4678 18.9245 24.4049 18.7729C24.342 18.6212 24.2499 18.4835 24.1337 18.3675L19.1337 13.3663ZM18.9749 21.7563C17.4149 21.73 12.0774 21.3113 7.88368 17.1163C3.67618 12.9088 3.26868 7.55251 3.24368 6.02376L5.74993 3.51751L8.98243 6.75001L7.36618 8.36626C7.21926 8.51307 7.11123 8.69418 7.05187 8.89322C6.99251 9.09226 6.98368 9.30295 7.02618 9.50626C7.05618 9.65001 7.78993 13.0588 9.86493 15.1338C11.9399 17.2088 15.3487 17.9425 15.4924 17.9725C15.6956 18.0162 15.9065 18.0081 16.1057 17.9489C16.305 17.8897 16.4861 17.7813 16.6324 17.6338L18.2499 16.0175L21.4824 19.25L18.9749 21.7563Z" fill="white"/>
                                    </svg>

                                    <p className="contacts_p">+977-9844187965</p>
                                </div>

                                <div className="footer_list">
                                    <svg className="contacts_icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.75 5H6.25C5.25544 5 4.30161 5.39509 3.59835 6.09835C2.89509 6.80161 2.5 7.75544 2.5 8.75V21.25C2.5 22.2446 2.89509 23.1984 3.59835 23.9017C4.30161 24.6049 5.25544 25 6.25 25H23.75C24.7446 25 25.6984 24.6049 26.4017 23.9017C27.1049 23.1984 27.5 22.2446 27.5 21.25V8.75C27.5 7.75544 27.1049 6.80161 26.4017 6.09835C25.6984 5.39509 24.7446 5 23.75 5ZM22.9125 7.5L15 13.4375L7.0875 7.5H22.9125ZM23.75 22.5H6.25C5.91848 22.5 5.60054 22.3683 5.36612 22.1339C5.1317 21.8995 5 21.5815 5 21.25V9.0625L14.25 16C14.4664 16.1623 14.7295 16.25 15 16.25C15.2705 16.25 15.5336 16.1623 15.75 16L25 9.0625V21.25C25 21.5815 24.8683 21.8995 24.6339 22.1339C24.3995 22.3683 24.0815 22.5 23.75 22.5Z" fill="white"/>
                                    </svg>

                                    <p className="contacts_p">traveldetails.sauravsvt@gmail.com</p>
                                </div>

                                <div className="footer_list">
                                    <svg className="contacts_icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_102_544)">
                                        <path d="M30 15V14.9925C30 10.5537 28.0675 6.5675 24.9988 3.82625L24.9838 3.81375C24.9459 3.77289 24.9035 3.73641 24.8575 3.705L24.855 3.70375C22.1295 1.31066 18.6245 -0.00581892 14.9975 0.00124902C11.2075 0.00124902 7.7475 1.40875 5.11 3.73125L5.12625 3.7175C5.09446 3.74161 5.06515 3.76883 5.03875 3.79875V3.8C3.45316 5.20399 2.184 6.92886 1.31533 8.86036C0.446657 10.7919 -0.00168361 12.8859 4.75083e-06 15.0037C4.75083e-06 19.4412 1.93 23.4275 4.99625 26.17L5.01125 26.1825C5.05096 26.2275 5.09538 26.2682 5.14375 26.3037L5.14626 26.305C7.87105 28.6946 11.3734 30.0091 14.9975 30.0025C18.6386 30.0081 22.1559 28.6814 24.8863 26.2725L24.87 26.2862C26.4831 24.8838 27.7761 23.1513 28.6616 21.2058C29.5471 19.2604 30.0044 17.1475 30.0025 15.01V15.0012L30 15ZM24.4225 24.7563C23.6795 24.1552 22.8804 23.6269 22.0363 23.1787L21.955 23.1388C22.7213 20.93 23.1825 18.3837 23.2263 15.735V15.715H28.5525C28.3729 19.1417 26.8979 22.3722 24.4263 24.7525L24.4225 24.7563ZM15.715 22.875C17.3188 22.9612 18.8175 23.3138 20.2 23.8875L20.11 23.855C19.0025 26.38 17.4438 28.115 15.715 28.4963V22.875ZM15.715 21.445V15.715H21.8C21.7517 18.0878 21.3403 20.4393 20.58 22.6875L20.6288 22.5237C19.0768 21.8859 17.4262 21.5213 15.75 21.4462L15.7163 21.445H15.715ZM15.715 14.285V8.555C17.4365 8.47643 19.1312 8.09959 20.7238 7.44125L20.625 7.4775C21.3188 9.50125 21.745 11.8337 21.8 14.2587V14.285H15.715ZM15.715 7.125V1.50625C17.4438 1.8875 19.0025 3.615 20.11 6.1475C18.8175 6.685 17.3188 7.03625 15.7513 7.12375L15.715 7.125ZM19.2825 2.125C20.7554 2.61629 22.133 3.35707 23.355 4.315L23.3263 4.2925C22.7725 4.7275 22.1513 5.1375 21.4963 5.49375L21.4263 5.52875C20.897 4.27966 20.1693 3.12434 19.2713 2.1075L19.2825 2.12125V2.125ZM14.2825 1.51V7.125C12.7406 7.04634 11.2236 6.70388 9.7975 6.1125L9.8875 6.145C11 3.62 12.5563 1.88625 14.285 1.505L14.2825 1.51ZM8.5725 5.525C7.89491 5.16044 7.24929 4.73937 6.6425 4.26625L6.6725 4.28875C7.85892 3.35894 9.1934 2.6355 10.62 2.14875L10.715 2.12C9.84052 3.10929 9.12798 4.23064 8.60375 5.4425L8.5725 5.52375V5.525ZM14.285 8.55375V14.2837H8.2C8.255 11.8325 8.68125 9.5 9.42375 7.3125L9.375 7.47625C10.9263 8.11309 12.576 8.47719 14.2513 8.5525L14.285 8.55375ZM14.285 15.7137V21.4438C12.5635 21.5223 10.8688 21.8992 9.27625 22.5575L9.375 22.5212C8.68125 20.4988 8.255 18.165 8.2 15.74V15.7137H14.285ZM14.285 22.8737V28.4925C12.5563 28.1112 10.9975 26.3837 9.89001 23.8512C11.1825 23.3137 12.6813 22.9638 14.2488 22.8763L14.285 22.875V22.8737ZM10.7225 27.8737C9.24994 27.3839 7.87243 26.6448 6.65 25.6888L6.68 25.7113C7.23375 25.2763 7.855 24.8662 8.51 24.51L8.58 24.475C9.10486 25.7246 9.83257 26.8789 10.7338 27.8913L10.7225 27.8787V27.8737ZM21.4275 24.4738C22.1525 24.8675 22.7738 25.2763 23.3575 25.7325L23.3275 25.71C22.1411 26.6398 20.8066 27.3633 19.38 27.85L19.285 27.8787C20.1595 26.8899 20.872 25.769 21.3963 24.5575L21.4275 24.4762V24.4738ZM28.5525 14.285H23.2263C23.1879 11.6987 22.7416 9.13463 21.9038 6.6875L21.955 6.86C22.838 6.39508 23.674 5.84585 24.4513 5.22L24.4213 5.2425C26.8878 7.61379 28.3633 10.8323 28.55 14.2487L28.5513 14.2837L28.5525 14.285ZM5.5775 5.24375C6.2975 5.82875 7.10625 6.365 7.96375 6.82125L8.045 6.86125C7.27875 9.07 6.8175 11.6162 6.77376 14.265V14.285H1.44625C1.62587 10.8582 3.10082 7.62776 5.5725 5.2475L5.57625 5.24375H5.5775ZM1.4475 15.715H6.77376C6.81207 18.3013 7.2584 20.8654 8.09626 23.3125L8.045 23.14C7.10625 23.6387 6.29876 24.175 5.54875 24.78L5.57875 24.7575C3.11218 22.3862 1.63671 19.1677 1.45 15.7512L1.44875 15.7162L1.4475 15.715Z" fill="white"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_102_544">
                                        <rect width="30" height="30" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>

                                    <p className="contacts_p"> ShriSin Softwares Pvt. Ltd.</p>
                                </div>
                            </div>
                        </div>

                        <div className="right2">

                            <div className="payment">
                                <p className="footer_right_title">Payment Methods</p>
                                <div className="payment_icons">
                                    <Link>
                                        <svg className="payment_icon" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25 47.3959C37.3688 47.3959 47.3958 37.369 47.3958 25.0001C47.3958 12.6312 37.3688 2.60425 25 2.60425C12.6311 2.60425 2.60413 12.6312 2.60413 25.0001C2.60413 37.369 12.6311 47.3959 25 47.3959Z" fill="#27AE60"/>
                                        <path d="M34.0521 28.9062C33.8098 30.3438 33.1903 31.6914 32.257 32.8113C31.3237 33.9313 30.1099 34.7836 28.7396 35.2812C26.6813 36.0263 24.4114 35.925 22.4276 34.9995C20.4438 34.074 18.9078 32.3997 18.1563 30.3437L16.323 25.302C15.5778 23.2437 15.6792 20.9739 16.6047 18.99C17.5302 17.0062 19.2044 15.4703 21.2605 14.7187V14.7187C23.3188 13.9736 25.5886 14.0749 27.5725 15.0004C29.5563 15.9259 31.0923 17.6002 31.8438 19.6562L32.7605 22.177L17.2396 27.8229M47.3959 25H39.0625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </Link>


                                    <Link>
                                        <svg className="payment_icon" width="44" height="32" viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.6875 0C2.11719 0 0 2.11719 0 4.6875V26.5625C0 29.1328 2.11719 31.25 4.6875 31.25H39.0625C41.6328 31.25 43.75 29.1328 43.75 26.5625V4.6875C43.75 2.11719 41.6328 0 39.0625 0H4.6875ZM4.6875 3.125H39.0625C39.9453 3.125 40.625 3.80469 40.625 4.6875V26.5625C40.625 27.4453 39.9453 28.125 39.0625 28.125H4.6875C3.80469 28.125 3.125 27.4453 3.125 26.5625V4.6875C3.125 3.80469 3.80469 3.125 4.6875 3.125ZM27.1969 9.96094C24.1875 9.96094 22.6078 11.4453 22.6078 13.3297C22.6078 16.7406 26.6078 16.2672 26.6078 18.0172C26.6078 18.3188 26.3578 18.9969 24.7016 18.9969C23.0453 18.9969 21.9672 18.4109 21.9672 18.4109L21.4828 20.6609C21.4828 20.6609 22.5063 21.2938 24.5609 21.2938C26.6078 21.2938 29.4891 19.7188 29.4891 17.4344C29.4891 14.6906 25.4844 14.5094 25.4844 13.2859C25.4844 12.6609 26.0156 12.1609 27.4375 12.1609C28.3656 12.1609 29.3906 12.8953 29.3906 12.8953L29.8813 10.5047C29.8813 10.5047 28.5219 9.96563 27.1937 9.96563L27.1969 9.96094ZM14.3562 10.1562L11.7188 17.8719C11.7188 17.8719 11.5875 17.2031 11.5234 16.7969C10.0312 13.4531 7.61719 12.2063 7.61719 12.2063L9.91406 20.9469H13.0391L17.4297 10.1562H14.3594H14.3562ZM18.5547 10.1562L16.8453 20.9469H19.7297L21.4375 10.1562H18.5547ZM34.0828 10.1562L29.3953 20.9469H32.2266L32.8125 19.4344H36.4266L36.7188 20.9469H39.3063L37.1094 10.1562H34.0812H34.0828ZM4.44219 10.2031C4.44219 10.2031 10.0625 11.9297 11.3766 16.1625L10.4031 11.2797C10.4031 11.2797 9.97344 10.2016 8.84062 10.2016H4.44375L4.44219 10.2031ZM35.1562 13.2812L35.9844 17.3344H33.6406L35.1562 13.2812Z" fill="#2D9CDB"/>
                                        </svg> 
                                    </Link>      
                                </div>
                            </div>    

                            <div className="follow">
                                <p className="footer_right_title">Follow Us</p>
                                <div className="follow_icons">

                                    <Link>
                                        <svg className="follow_icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_96_526)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.0838C0 22.5413 5.41625 28.7425 12.5 30V19.1663H8.75V15H12.5V11.6663C12.5 7.91625 14.9163 5.83375 18.3337 5.83375C19.4163 5.83375 20.5837 6 21.6663 6.16625V10H19.75C17.9163 10 17.5 10.9163 17.5 12.0837V15H21.5L20.8337 19.1663H17.5V30C24.5837 28.7425 30 22.5425 30 15.0838C30 6.7875 23.25 0 15 0C6.75 0 0 6.7875 0 15.0838Z" fill="#222222"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_96_526">
                                        <rect width="30" height="30" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </Link>    

                                    <Link>
                                        <svg className="follow_icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.0212 2.5H9.93375C7.96269 2.50232 6.07304 3.28643 4.67941 4.6803C3.28578 6.07416 2.50198 7.96394 2.5 9.935L2.5 20.0225C2.50232 21.9936 3.28643 23.8832 4.6803 25.2768C6.07416 26.6705 7.96394 27.4543 9.935 27.4562H20.0225C21.9936 27.4539 23.8832 26.6698 25.2768 25.276C26.6705 23.8821 27.4543 21.9923 27.4562 20.0212V9.93375C27.4539 7.96269 26.6698 6.07304 25.276 4.67941C23.8821 3.28578 21.9923 2.50198 20.0212 2.5V2.5ZM24.9463 20.0212C24.9463 20.668 24.8189 21.3084 24.5714 21.906C24.3239 22.5035 23.9611 23.0464 23.5038 23.5038C23.0464 23.9611 22.5035 24.3239 21.906 24.5714C21.3084 24.8189 20.668 24.9463 20.0212 24.9463H9.93375C8.62778 24.9459 7.3754 24.4269 6.45206 23.5033C5.52871 22.5797 5.01 21.3272 5.01 20.0212V9.93375C5.01033 8.62778 5.52936 7.3754 6.45294 6.45206C7.37652 5.52871 8.62903 5.01 9.935 5.01H20.0225C21.3285 5.01033 22.5808 5.52936 23.5042 6.45294C24.4275 7.37652 24.9463 8.62903 24.9463 9.935V20.0225V20.0212Z" fill="#222222"/>
                                        <path d="M14.9775 8.52368C13.2668 8.52633 11.6269 9.20716 10.4174 10.4169C9.20786 11.6267 8.52734 13.2667 8.52502 14.9774C8.52701 16.6886 9.20755 18.3291 10.4174 19.5392C11.6272 20.7493 13.2676 21.4301 14.9788 21.4324C16.6901 21.4304 18.3308 20.7497 19.541 19.5396C20.7511 18.3295 21.4318 16.6888 21.4338 14.9774C21.4311 13.2663 20.7499 11.626 19.5396 10.4164C18.3293 9.20681 16.6887 8.52658 14.9775 8.52493V8.52368ZM14.9775 18.9224C13.9316 18.9224 12.9285 18.5069 12.1889 17.7673C11.4493 17.0277 11.0338 16.0246 11.0338 14.9787C11.0338 13.9327 11.4493 12.9296 12.1889 12.19C12.9285 11.4504 13.9316 11.0349 14.9775 11.0349C16.0235 11.0349 17.0266 11.4504 17.7662 12.19C18.5058 12.9296 18.9213 13.9327 18.9213 14.9787C18.9213 16.0246 18.5058 17.0277 17.7662 17.7673C17.0266 18.5069 16.0235 18.9224 14.9775 18.9224Z" fill="#222222"/>
                                        <path d="M21.4451 10.1189C22.299 10.1189 22.9913 9.42659 22.9913 8.57262C22.9913 7.71865 22.299 7.02637 21.4451 7.02637C20.5911 7.02637 19.8988 7.71865 19.8988 8.57262C19.8988 9.42659 20.5911 10.1189 21.4451 10.1189Z" fill="#222222"/>
                                        </svg>
                                    </Link>    

                                    <Link>
                                        <svg className="follow_icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_96_533)">
                                        <path d="M25 9.41406C24.2708 9.73958 23.4831 9.96094 22.6367 10.0781C23.5221 9.55729 24.1276 8.79557 24.4531 7.79297C23.6068 8.28776 22.7344 8.61979 21.8359 8.78906C21.0417 7.92969 20.0456 7.5 18.8477 7.5C17.7148 7.5 16.748 7.90039 15.9473 8.70117C15.1465 9.50195 14.7461 10.4688 14.7461 11.6016C14.7461 11.9792 14.7786 12.2917 14.8438 12.5391C13.1641 12.4479 11.5885 12.0247 10.1172 11.2695C8.64583 10.5143 7.39583 9.50521 6.36719 8.24219C5.98958 8.89323 5.80078 9.58333 5.80078 10.3125C5.80078 11.7969 6.39323 12.9362 7.57812 13.7305C6.96615 13.7174 6.3151 13.5482 5.625 13.2227V13.2617C5.625 14.2383 5.95052 15.1074 6.60156 15.8691C7.2526 16.6309 8.05339 17.1029 9.00391 17.2852C8.6263 17.3893 8.29427 17.4414 8.00781 17.4414C7.83854 17.4414 7.58464 17.4154 7.24609 17.3633C7.51953 18.1836 8.00456 18.8607 8.70117 19.3945C9.39779 19.9284 10.1888 20.2018 11.0742 20.2148C9.5638 21.3867 7.86458 21.9727 5.97656 21.9727C5.63802 21.9727 5.3125 21.9531 5 21.9141C6.92708 23.138 9.02344 23.75 11.2891 23.75C12.7474 23.75 14.1146 23.5189 15.3906 23.0566C16.6667 22.5944 17.7604 21.9759 18.6719 21.2012C19.5833 20.4264 20.3678 19.5345 21.0254 18.5254C21.6829 17.5163 22.1712 16.4616 22.4902 15.3613C22.8092 14.2611 22.9688 13.1641 22.9688 12.0703C22.9688 11.8359 22.9622 11.6602 22.9492 11.543C23.7695 10.957 24.4531 10.2474 25 9.41406ZM30 5.625V24.375C30 25.9245 29.4499 27.2493 28.3496 28.3496C27.2493 29.4499 25.9245 30 24.375 30H5.625C4.07552 30 2.75065 29.4499 1.65039 28.3496C0.55013 27.2493 0 25.9245 0 24.375V5.625C0 4.07552 0.55013 2.75065 1.65039 1.65039C2.75065 0.55013 4.07552 0 5.625 0H24.375C25.9245 0 27.2493 0.55013 28.3496 1.65039C29.4499 2.75065 30 4.07552 30 5.625Z" fill="#222222"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_96_533">
                                        <rect width="30" height="30" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </Link>    

                                    <Link>
                                        <svg className="follow_icon" width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_184_317)">
                                        <path d="M16.2584 20.8259V24.3583C16.2584 25.106 16.0408 25.4799 15.6055 25.4799C15.3488 25.4799 15.0977 25.3571 14.8522 25.1116V20.0725C15.0977 19.827 15.3488 19.7042 15.6055 19.7042C16.0408 19.7042 16.2584 20.0781 16.2584 20.8259ZM21.9169 20.8426V21.6127H20.4102V20.8426C20.4102 20.0837 20.6613 19.7042 21.1635 19.7042C21.6658 19.7042 21.9169 20.0837 21.9169 20.8426ZM5.74501 17.1931H7.53631V15.6194H2.31309V17.1931H4.07091V26.7188H5.74501V17.1931ZM10.5664 26.7188H12.0564V18.4487H10.5664V24.7768C10.2316 25.2455 9.91354 25.4799 9.6122 25.4799C9.41131 25.4799 9.29412 25.3627 9.26064 25.1283C9.24948 25.0949 9.2439 24.8996 9.2439 24.5424V18.4487H7.75394V24.9944C7.75394 25.5413 7.79858 25.9487 7.88787 26.2165C8.0218 26.6295 8.34546 26.8359 8.85885 26.8359C9.39457 26.8359 9.96376 26.4955 10.5664 25.8147V26.7188ZM17.7484 24.2411V20.9431C17.7484 20.1283 17.6981 19.5759 17.5977 19.2857C17.408 18.6607 17.0118 18.3482 16.4091 18.3482C15.851 18.3482 15.3321 18.6496 14.8522 19.2522V15.6194H13.3622V26.7188H14.8522V25.9152C15.3544 26.529 15.8734 26.8359 16.4091 26.8359C17.0118 26.8359 17.408 26.529 17.5977 25.9152C17.6981 25.6138 17.7484 25.0558 17.7484 24.2411ZM23.4068 24.0737V23.856H21.8834C21.8834 24.4252 21.8722 24.7656 21.8499 24.8772C21.7718 25.279 21.5486 25.4799 21.1803 25.4799C20.6669 25.4799 20.4102 25.0949 20.4102 24.3248V22.8683H23.4068V21.144C23.4068 20.2623 23.2562 19.615 22.9548 19.202C22.5196 18.6328 21.928 18.3482 21.1803 18.3482C20.4214 18.3482 19.8243 18.6328 19.389 19.202C19.0765 19.615 18.9202 20.2623 18.9202 21.144V24.0402C18.9202 24.9219 19.0821 25.5692 19.4057 25.9821C19.841 26.5513 20.4437 26.8359 21.2138 26.8359C22.0173 26.8359 22.62 26.5402 23.0218 25.9487C23.2227 25.6473 23.3399 25.346 23.3734 25.0446C23.3957 24.9442 23.4068 24.6205 23.4068 24.0737ZM13.2283 8.78906V5.27344C13.2283 4.50335 12.9883 4.1183 12.5084 4.1183C12.0285 4.1183 11.7885 4.50335 11.7885 5.27344V8.78906C11.7885 9.57031 12.0285 9.96094 12.5084 9.96094C12.9883 9.96094 13.2283 9.57031 13.2283 8.78906ZM25.2651 21.3616C25.2651 23.9732 25.12 25.9263 24.8298 27.221C24.6736 27.8795 24.3499 28.4319 23.8589 28.8783C23.3678 29.3248 22.7986 29.5815 22.1513 29.6484C20.0977 29.8828 17.0006 30 12.86 30C8.71934 30 5.62224 29.8828 3.56867 29.6484C2.92135 29.5815 2.34937 29.3248 1.85271 28.8783C1.35606 28.4319 1.03519 27.8795 0.890102 27.221C0.599923 25.971 0.454834 24.0179 0.454834 21.3616C0.454834 18.75 0.599923 16.7969 0.890102 15.5022C1.04635 14.8438 1.37001 14.2913 1.86108 13.8449C2.35216 13.3984 2.92693 13.1362 3.58541 13.058C5.62782 12.8348 8.71934 12.7232 12.86 12.7232C17.0006 12.7232 20.0977 12.8348 22.1513 13.058C22.7986 13.1362 23.3706 13.3984 23.8672 13.8449C24.3639 14.2913 24.6847 14.8438 24.8298 15.5022C25.12 16.7522 25.2651 18.7054 25.2651 21.3616ZM8.55751 0H10.2651L8.23943 6.67969V11.2165H6.56532V6.67969C6.40907 5.85379 6.06867 4.67076 5.54412 3.13058C5.13117 1.98103 4.76845 0.9375 4.45595 0H6.2305L7.41912 4.4029L8.55751 0ZM14.7517 5.57478V8.50446C14.7517 9.40848 14.5955 10.067 14.283 10.4799C13.8589 11.0491 13.2673 11.3337 12.5084 11.3337C11.7606 11.3337 11.1747 11.0491 10.7506 10.4799C10.4381 10.0558 10.2818 9.39732 10.2818 8.50446V5.57478C10.2818 4.68192 10.4381 4.02902 10.7506 3.61607C11.1747 3.04688 11.7606 2.76228 12.5084 2.76228C13.2673 2.76228 13.8589 3.04688 14.283 3.61607C14.5955 4.02902 14.7517 4.68192 14.7517 5.57478ZM20.36 2.86272V11.2165H18.8365V10.2958C18.245 10.9877 17.6702 11.3337 17.1122 11.3337C16.5988 11.3337 16.2696 11.1272 16.1245 10.7143C16.0352 10.4464 15.9905 10.0279 15.9905 9.4587V2.86272H17.514V9.0067C17.514 9.375 17.5196 9.57031 17.5307 9.59263C17.5642 9.83817 17.6814 9.96094 17.8823 9.96094C18.1836 9.96094 18.5017 9.72098 18.8365 9.24107V2.86272H20.36Z" fill="#222222"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_184_317">
                                        <rect width="25.72" height="30" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </Link>    




                                </div>
                            </div> 

                        </div>
                        
                    </div>
                </div>

                <div className="footer2">
                    <svg className="copyright" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_96_502)">
                    <path d="M15 0C6.71484 0 0 6.71484 0 15C0 23.2852 6.71484 30 15 30C23.2852 30 30 23.2852 30 15C30 6.71484 23.2852 0 15 0ZM15 27.1875C8.2793 27.1875 2.8125 21.7201 2.8125 15C2.8125 8.27988 8.2793 2.8125 15 2.8125C21.7207 2.8125 27.1875 8.27988 27.1875 15C27.1875 21.7201 21.7207 27.1875 15 27.1875ZM14.9473 10.3125C16.1812 10.3125 17.3449 10.7995 18.2186 11.6824C18.7679 12.2299 19.6559 12.2391 20.209 11.6916C20.7601 11.1441 20.7638 10.2543 20.2181 9.70113C18.8119 8.28199 16.9398 7.50035 14.9476 7.50035C14.9476 7.50035 14.9495 7.50035 14.9476 7.50035C12.9572 7.50035 11.0834 8.28199 9.67711 9.70113C6.78023 12.6238 6.78023 17.3769 9.67711 20.3007C11.0834 21.7199 12.9572 22.5015 14.9476 22.5015C14.9495 22.5015 14.9476 22.5015 14.9476 22.5015C16.9398 22.5015 18.8119 21.7199 20.2181 20.3007C20.7638 19.7477 20.7601 18.8582 20.209 18.3103C19.656 17.7647 18.7682 17.7701 18.2186 18.3195C17.3449 19.2019 16.1812 19.6894 14.9473 19.6894C14.9473 19.6894 14.9491 19.6894 14.9473 19.6894C13.7115 19.6894 12.5479 19.2023 11.6725 18.3195C9.85957 16.4902 9.85957 13.513 11.6725 11.6808C12.5508 10.7988 13.7109 10.3125 14.9473 10.3125Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_96_502">
                    <rect width="30" height="30" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

                    <p>Copyrights 2022 - TravelDetails</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;