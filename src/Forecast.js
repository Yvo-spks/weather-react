import React from "react";
import "./Forecast.css";

export default function Forecast() {
    return(
        <div className="Forecast">
      <div className="row">
        <div class="col-3">
          Sun
          <br />
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/043/189/original/Mostly_Sunny.png?1660058235"
            alt=""
          />
          <div className="row">
            <div className="col">
              23°|14°
              <br />
            </div>
          </div>
        </div>
        <div className="col-3">
          Mon
          <br />
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/043/189/original/Mostly_Sunny.png?1660058235"
            alt=""
          />
          <div className="row">
            <div className="col">
              19°|8°
              <br />
            </div>
          </div>
        </div>
        <div className="col-3">
          Tue
          <br />
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/043/189/original/Mostly_Sunny.png?1660058235"
            alt=""
          />
          <div className="row">
            <div className="col">
              19°|8°
              <br />
            </div>
          </div>
        </div>
        <div className="col-3">
          Wed
          <br />
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/043/189/original/Mostly_Sunny.png?1660058235"
            alt=""
          />
          <div className="row">
            <div className="col">
              19°|8°
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
    
}


