'use client'

import { useState, useEffect } from "react";
import "./weatherWidget.css";

interface WeatherData {
    location: {
        name: string;
        region: string;
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
    forecast?: {
        forecastday: Array<{
            day: {
                daily_chance_of_rain: number;
            };
        }>;
    };
}

export default function WeatherWidget() {
    const weatherApiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY || process.env.WEATHER_API_KEY;

    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    console.log("Weather API Key:", weatherApiKey);

    useEffect(() => {
        // Fetch weather data from an API
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=11207&days=1&aqi=no&alerts=no`);
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
        <div className="w-full max-w-[1200px] rounded-lg shadow-md p-6 bg-white text-center">
            <h3 className="text-center">Weather Data for {weatherData.location.name}, {weatherData.location.region}</h3>

            <div className="flex justify-center mb-[-24]">
                <img
                    src={weatherData.current?.condition?.icon}
                    alt={weatherData.current?.condition?.text}
                    className="h-40 w-40"
                    />
            </div>
            

            <h3>{weatherData.current?.temp_f} °F</h3>
            <p>{weatherData.current?.condition?.text}</p>
            <p>Feels Like {weatherData.current?.feelslike_f} °C</p>
            <p> Chance of rain: {weatherData.forecast?.forecastday?.[0]?.day?.daily_chance_of_rain ?? "N/A"} % </p>
            
            <br />
            


            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div>
                    <p className="font-semibold">Precipitation</p>
                    <p>{weatherData.current?.precip_in} in</p>
                </div>
                <div>
                    <p className="font-semibold">Humidity</p>
                    <p>{weatherData.current?.humidity} %</p>
                </div>
                <div>
                    <p className="font-semibold">Wind</p>
                    <p>{weatherData.current?.wind_kph} kph {weatherData.current?.wind_dir}</p>
                </div>
                <div>
                    <p className="font-semibold">UV Index</p>
                    <p>{weatherData.current?.uv}</p>
                </div>
            </div>
        </div>
    );
}
