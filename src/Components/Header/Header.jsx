import { Col, Row } from 'antd'
import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    const LinkColor = {
        color: "black"
    }
    return (
        <Row className="head-page" align="middle">
            <Col push={1} lg={3} md={3} sm={12} xs={12} className="name"><Link style={LinkColor} to="/">Medium</Link></Col>
            <Col  lg={{offset:11, span:2}} md={{offset:11, span:2}} sm={0} xs={0}><Link className="cnt" style={LinkColor} to="/story">Our Story</Link></Col>
            <Col className="cnt" lg={{span:2}} md={{span:2}} sm={0} xs={0}><Link className="cnt" style={LinkColor} to="/member">Membership</Link></Col>
            <Col className="cnt" lg={{span:2}} md={{span:2}} sm={0} xs={0}><Link className="cnt" style={LinkColor} to="/write">Write</Link></Col>
            <Col className="cnt" lg={{span:2}} md={{span:2}} sm={0} xs={0}><Link className="cnt" style={LinkColor} to="signin">Sign In</Link></Col>
            <Col className="cnt" lg={{offset:0, span:1}} md={{offset:0, span:1}} sm={{offset:4, span:8}} xs={{offset:4, span:8}}><Link to="/getstarted"><button className="started">Get started</button></Link></Col>
        </Row>
    )
}
