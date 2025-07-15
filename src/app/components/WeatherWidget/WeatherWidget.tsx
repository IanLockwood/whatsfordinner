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
    const tabs = [
        { label: "Daily", value: "daily" },
        { label: "Hourly", value: "hourly" },
        { label: "10-Day", value: "10day" },
        { label: "14-Day", value: "14day" },
    ];

    const [activeTab, setActiveTab] = useState("daily");
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
        <div className="w-full max-w-[1200px]">
            <div className="w-full max-w-[1200px] rounded-lg shadow-md p-4 mb-4 bg-white text-center">
                <div className="flex justify-between items-center">

                    {/* Temperature Unit Selector */}
                    <div className="flex items-center gap-2">
                        <label htmlFor="unit-selector" className="font-semibold">Unit:</label>
                        <select
                            id="unit-selector"
                            value={weatherData ? (weatherData.current.temp_f ? "F" : "C") : "F"}
                            onChange={e => {
                                // State Stuff Here
                            }}
                            className="border rounded px-2 py-1"
                        >
                            <option value="F">Fahrenheit (°F)</option>
                            <option value="C">Celsius (°C)</option>
                        </select>
                    </div>

                    {/* Zip Code Input */}
                    <div className="flex items-center gap-2">
                        <label htmlFor="zip-input" className="font-semibold">Zip Code:</label>
                        <input
                            id="zip-input"
                            type="text"
                            maxLength={10}
                            placeholder="Enter zip code"
                            className="border rounded px-2 py-1"
                            onChange={e => {
                                // State Stuff Here
                            }}
                        />
                        <button
                            type="button"
                            className="border rounded px-3 py-1 bg-blue-400 text-white font-semibold hover:bg-blue-500"
                            onClick={() => {
                                // Submit stuff here
                            }}
                        >
                            Go
                        </button>
                    </div>
                </div>
            </div>

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

            <div className="w-full max-w-[1200px] rounded-lg shadow-md p-4 bg-white mt-4">
                <div>
                    <div className="grid grid-cols-4 w-full border-b">
                        {tabs.map(tab => (
                            <button
                                key={tab.value}
                                className={`w-full px-4 py-2 focus:outline-none ${
                                    activeTab === tab.value
                                        ? "border-b-2 border-blue-500 font-semibold text-blue-600"
                                        : "text-gray-500"
                                }`}
                                onClick={() => setActiveTab(tab.value)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <div className="mt-4">
                        {activeTab === "daily" &&
                            <div className="flex justify-between gap-4 border-b border-gray-300 pb-2">
                                <div className="flex-1">Today</div>
                                <div className="flex-1">201º/12º</div>
                                <div className="flex-2 flex gap-2">
                                    <img
                                        src={weatherData.current?.condition?.icon}
                                        alt={weatherData.current?.condition?.text}
                                        className="h-8 w-8"
                                    />
                                    <div>Scattered Thunderstorms</div>
                                </div>
                                <div className="flex-1">💧 140%</div>
                                <div className="flex-1">Humidity 99%</div>
                            </div>
                        }

                        {activeTab === "hourly" &&
                        <div>Hourly forecast goes here.</div>
                        }

                        {activeTab === "10day" &&
                        <div>10-Day forecast goes here.</div>
                        }

                        {activeTab === "14day" &&
                        <div>14-Day forecast goes here.</div>
                        }

                    </div>
                </div>
            </div>

        </div>
    );
}
