'use client'

import { useState, useEffect } from "react";

interface WeatherData {
    location: {
        name: string;
        country: string;
    };
    current: {
        temp_c: number;
        temp_f: number;
        condition: {
            text: string;
            icon: string;
        };
        feelslike_c: number;
        feelslike_f: number;
        humidity: number;
        wind_kph: number;
        wind_dir: string;
        pressure_mb: number;
        precip_mm: number;
        precip_in: number;
        cloud: number;
        uv: number;
        vis_km: number;
        last_updated: string;
    };
}

export default function WeatherWidget() {
    const weatherApiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY

    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    console.log("Weather API Key:", weatherApiKey);

    useEffect(() => {
        // Fetch weather data from an API
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=London`);
                const data = await response.json();
                setWeatherData(data);
                console.log("Weather Data:", data);
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
            <h3>Weather Data for {weatherData.location.name}, {weatherData.location.country}</h3>

            <img src={weatherData.current?.condition?.icon} alt={weatherData.current?.condition?.text} />
            <p>{weatherData.current?.condition?.text}</p>
            <p>{weatherData.current?.temp_f} °F</p>
            <p>Feels Like {weatherData.current?.feelslike_f} °C</p>
            
            <br />
            
            <p>Precipitation: {weatherData.current?.precip_in} in</p>
            <p>Humidity: {weatherData.current?.humidity} %</p>
            
            <br />

            <p>Wind: {weatherData.current?.wind_kph} kph {weatherData.current?.wind_dir}</p>
            <p>UV Index: {weatherData.current?.uv}</p>
        </div>
    );
}
