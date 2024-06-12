import React from "react";

function WeatherDisplay({ weather }) {
    return (
        <p>
            <span style={{color: weather.temperature > 20 ? 'red': 'blue'}}>Temperature: {weather.temperature}</span> &nbsp;
            Conditions: {weather.conditions}
        </p>
    )
}

export default WeatherDisplay