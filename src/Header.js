import logo from "./logo.png"
import background from  "./background.png"
import "./Header.css"

function Header() {
  const Explore = () => {
    alert("We are working on it")
  }

    return(
    <div className="body"> 
        <header>
        </header>
        <main>
          <div className="sub-main1">
            <h1>Explore New Places</h1>
            <p>Welcome to TravelDetails: <br></br> An initiative to build one stop travel information site</p>
            <button onClick={Explore}> Explore Now </button>
          </div>

          <div className="sub-main2">
            <h1>Search for the best trip</h1>
            <div className="flex">
              <input placeholder="We are working on finding you the best trip! Hold tight, come back soon" />
             
             
              
            </div>
          </div>
        </main>
      </div>
    )
   }
   
   export default Header;
   