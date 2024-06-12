import React from "react";

function WeatherDisplay({ weather }) {
    return (
        <>
            <p style={{color: weather.temperature > 20 ? 'red': 'blue'}}>Temperature: {weather.temperature}</p>
            <p>Conditions: {weather.conditions}</p>
        </>
    )
}

export default WeatherDisplay