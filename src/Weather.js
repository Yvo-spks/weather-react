import React from  "react";
import axios from "axios";
import {Audio} from "react-loader-spinner";

export default function Weather (props) {
function handleSubmit(response){
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}℃`)
}
    let apiKey = "22600970cc1e19a65b9eea57b485b5ac";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleSubmit);

    return (
        <div className="Weather">
       <Audio
  height="80"
  width="80"
  radius="9"
  color="white"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
        </div>
    );
}