import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './component.css'


function FavCardList() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm="4"></Col>
                    <Col sm="4 mt-5">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4 text-center mt-5">
                                    <i class="bi bi-heart-fill fav-icon fav-icon-color"></i>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a .</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm="4"></Col>
                </Row>
                <Row>
                    <Col sm="4"></Col>
                    <Col sm="4 mt-2">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4 text-center mt-5">
                                    <i class="bi bi-heart-fill fav-icon fav-icon-color"></i>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a .</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm="4"></Col>
                </Row>
                <Row>
                    <Col sm="4"></Col>
                    <Col sm="4 mt-2">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4 text-center mt-5">
                                    <i class="bi bi-heart-fill fav-icon fav-icon-color"></i>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a .</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm="4"></Col>
                </Row>
            </Container>
        </div>
    )
}

export default FavCardList;
