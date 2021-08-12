import React from 'react'
import './MainContent.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MainDisplay from '../MainDisplay/MainDisplay'


export default function MainContent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchItems();
    }, [])

    const fetchItems = () => {
        axios.get("/api/1/news?apikey=pub_805204e7ffdceb98adfebe5e06ea7f73a31&q=disaster")
            .then(function (response) {
                setData(response.data.results);
            })
    }
    return (
        <>
            {data.map((item) => {
                if(item.description!=null){
                return <MainDisplay key={item.pubDate} item={item} />;
                }
            })}
        </>
    )
}
