import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

export default function Grid() {
    const [nasaData, setNasaData] = useState([]);

    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => {
            const nasaData = res.data;
            console.log(res.data);
            setNasaData(nasaData);
        })
    }, []);

    return (
        <div className="container">
            <Card
            key={nasaData.id}
            id={nasaData.id}
            title={nasaData.title}
            date={nasaData.date}
            explanation={nasaData.explanation}
            url={nasaData.url}
            />
        </div>
    );
}