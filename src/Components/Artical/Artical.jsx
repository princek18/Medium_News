import { Row, Col } from 'antd'
import React from 'react'
import './Artical.css'
import { useEffect } from 'react'

export default function Artical(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    const {state} = props.location;
    return (
        <>
            <Row justify="center">
                <Col lg={18} md={18} sm={20} xs={20}>
                    <p className="title-news-1">{state.title}</p>
                    <p className="author-1">{state.creator==null?"Anonymous":state.creator}</p>
                    <p style={{fontSize:"1.5rem"}}>{state.description.length>250?state.description.substring(1, 250)+"...":state.description}</p>
                </Col>
            </Row>
            <Row justify="center">
                <img className="title-image" src={state.image_url==null?"https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-no-image-available-icon-flat-vector.jpg":state.image_url} alt="" />
            </Row>
            <Row style={{marginTop:"2rem", fontSize:"1.5rem"}} justify="center">
                <Col lg={18} md={18} sm={20} xs={20}>
                    {state.content}
                </Col>
            </Row>
        </>
    )
}
