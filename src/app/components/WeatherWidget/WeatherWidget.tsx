'use client'

import { useState, useEffect } from "react";

export default function WeatherWidget() {
    const weatherApiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY
    const [weatherData, setWeatherData] = useState(null);

    console.log("Weather API Key:", weatherApiKey);

    useEffect(() => {
        // Fetch weather data from an API
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=London`);
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchWeatherData();
    }, []);
    if (!weatherData) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <p>{JSON.stringify(weatherData)}</p>
        </div>
    );
}
