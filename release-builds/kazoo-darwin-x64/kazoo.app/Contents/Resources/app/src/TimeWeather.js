import React from 'react';
import './TimeWeather.css';

export class TimeWeather extends React.Component {
	render() {
		return(
			<div id="time-weather">
				<div>
      		<div id="long-date">Friday, September 22</div>
        	<div class="center">
          	<img src="sunny.png"></img>
            <br/>
    				3:28<span id="am-pm">PM</span>
          </div>
          <div class="city">San Francisco, CA</div>
          <div class="temperature">72&deg;</div>
        </div>
	  	</div>
		)
	}
}