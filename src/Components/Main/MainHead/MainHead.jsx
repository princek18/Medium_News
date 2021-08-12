import React from 'react'
import { Col, Row } from 'antd'
import './MainHead.css'

export default function MainHead() {
    return (
        <Row className="main-div">
            <Col offset={1} lg={11} sm={22} className="main-head">
                <p style={{ fontSize: "4rem", margin: "0px", lineHeight: "1.2" }}>Medium is a place to write, read, and connect.</p>
                <p style={{ fontSize: "1.2rem", margin:"0px"}}>It's easy and free to post your thinking on any topic and connect with millions of readers</p>
                <button className="write">Start Writing</button>
            </Col>
        </Row>
    )
}
