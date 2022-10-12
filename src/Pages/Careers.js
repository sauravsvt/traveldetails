import {useState} from 'react';
import './Careers.css'

function Careers(){
    // const [message, setMessage] = useState('');
    // const [error, setError] = useState(null);
  
    // function isValidEmail(email) {
    //   return /\S+@\S+\.\S+/.test(email);
    // }
  
    // const handleChange = event => {
    //   if (!isValidEmail(event.target.value)) {
    //     setError('Email is invalid');
    //   } else {
    //     setError(null);
    //   }
  
    //   setMessage(event.target.value);
    // };
  
    // return (
    //   <div>
    //     <input
    //       id="message"
    //       name="message"
    //       value={message}
    //       onChange={handleChange}
    //     />
  
    //     {error && <h2 style={{color: 'red'}}>{error}</h2>}
    //   </div>
    // );
  

    
    const[email, setEmail] = useState('');
    const[error, setError] = useState('');
    const err = document.querySelector('h6');
    let inputFile = document.getElementById('file-input');
    let fileNameField = document.getElementById('file-name');

    const inputChange=(e)=>{
        let uploadedFileName = e.target.files[0].name;
        fileNameField.innerHTML = uploadedFileName;
    }    

    function isValidEmail(email){
      return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange=(e)=>{

        if(!isValidEmail(e.target.value)){
            setError("Email is invalid");
            e.target.style.outline = "1px solid red";
        }else{
            setError(null);
            e.target.style.outline = "none";
        }

        setEmail(e.target.value);
    }


    return(
        <>
            <div className='form-box'>
                <h1>CV Submission</h1>
                <p>Do you want to work with us? Please fill in your details below</p>
                <br/>
                <br/>
                <hr/>

                <div className='form-items'>
                    <p>First Name</p>
                    <input />
                </div>

                <div className='form-items'>
                    <p>Last Name</p>
                    <input />
                </div>

                <div className='form-items'>
                    <p>Email Address</p>
                    <div className='email'>
                    <input value={email} onChange={handleChange}/>
                    <h6>{error}</h6>
                    </div>
                </div>

                <div className='form-items'>
                    <p>Position Applying For</p>
                    <input />
                </div>

                <div className='form-items'>
                    <p>Additional Information</p>
                    <textarea />
                </div>

                <div className='form-items'>
                    <p>Upload your CV Here</p>
                    <div className='cv-input'>
                        <input id='file-input' onChange={inputChange} type='file' />
                        <label for="file-input">
                            <svg width="151" height="156" viewBox="0 0 151 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M121.618 65.5508C117.344 43.1977 98.3002 26.4167 75.4221 26.4167C57.258 26.4167 41.4822 37.0425 33.6257 52.5925C14.7073 54.6658 0 71.1877 0 91.2083C0 112.654 16.9071 130.083 37.7111 130.083H119.418C136.765 130.083 150.844 115.57 150.844 97.6875C150.844 80.5825 137.96 66.7171 121.618 65.5508ZM87.9925 84.7292V110.646H62.8518V84.7292H43.9963L75.4221 52.3333L106.848 84.7292H87.9925Z" fill="#414040"/>
                            </svg>

                            <p>Browse files</p>
                            <p>Drag and drop files here</p>
                        </label>
                        <p id='file-name'></p>
                    </div>
                </div>

                <button>Submit</button>
            </div>
        </>
    )
}
export default Careers;