import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import Modal from "./Modal";

export default function Grid() {
    const [nasaData, setNasaData] = useState([]);

    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=LNNCIJIz8LC1fgpl0iG9KWVzQjTHqyT1WTZSbfN3")
        .then(res => {
            console.log(res.data);
            setNasaData(res.data);
        })
    }, []);

    return (
        <div className="container">
            <Card
            key={nasaData.id}
            id={nasaData.id}
            url={nasaData.url}
            />
            <Modal
            key={nasaData.ida}
            ida={nasaData.ida}
            title={nasaData.title}
            date={nasaData.date}
            explanation={nasaData.explanation}
            />
        </div>
    );
}