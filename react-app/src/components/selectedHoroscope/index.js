import React from "react";
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { useState } from "react";


const SelectedHoroscope = () => {
    const params = useParams();
    const sunSignName = params.name;
    const [details, setHoroscope] = useState([]);
    var captitalizedName = sunSignName.slice(0,1).toUpperCase() + sunSignName.slice(1, sunSignName.length);
    var fetchDetails = "http://localhost:3000/horoscope/" + captitalizedName;

    // const buffer = details.photo;
    //const b64 = new Buffer.from(buffer).toString('base64')

    axios.get(fetchDetails).then(({data}) => {
      setHoroscope(data);
    });
    
    console.table(details.photo)

    return (
        <div class="jumbotron mybackpage">
            Zodiac Sign: <h3>{captitalizedName}</h3>
            <br/><br/><br/><br/><br/><br/> 
            <div class="container myhoroscopedetails">
            <p><b>Name:</b> {details.name}</p>
            <p><b>Description:</b> {details.description}</p></div> 
            {/* <img src={`data:image/png;base64,${b64}`} /> */}
            
        </div>
    )
}

export default SelectedHoroscope;