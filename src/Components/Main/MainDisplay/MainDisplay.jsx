import React from 'react'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'

export default function MainDisplay({ item }) {
    return (
        <Link to={{pathname:"/artical", state:item}} style={{color:"black"}}>
        <Row className="news" justify="center">
            <Col span={18}>
                <p className="author">{item.creator==null?"Anonymous":item.creator}</p>
                <p className="title-news">{item.title}</p>
                <p className="desc">{item.description.length>250?item.description.substring(1, 250)+"...":item.description}</p>
            </Col>
            <Col><img className="ss" src={item.image_url==null?"https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-no-image-available-icon-flat-vector.jpg":item.image_url} alt="" /></Col>
        </Row>
        </Link>
    )
}
