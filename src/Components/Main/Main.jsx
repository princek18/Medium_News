import React from 'react'
import MainHead from './MainHead/MainHead'
import './Main.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MainDisplay from './MainDisplay/MainDisplay'
import Loader from '../Loader/Loader'

export default function Main() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchItems();
    }, [])

    const fetchItems = () => {
        axios.get("https://newsdata.io/api/1/news?apikey=pub_826b29c6f69c0b9e4225b860b3621c54d47&q=disaster")
            .then(function (response) {
                setData(response.data.results);
            })
    }

    return (
        <>
        {data.length!==0?[
        <MainHead/>,
            data.map((item) => {
                if(item.description!=null){
                return <MainDisplay key={item.pubDate} item={item} />;
                }
            })]:<Loader/>
        }
        </>
    )
}
