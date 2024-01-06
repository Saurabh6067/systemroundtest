import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './component.css'

function Home() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm="3 p-0 left-sidebar">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="card mb-3 mt-5 card-body-main">
                                        <div className="row g-0">
                                            <div className="col-md-4 text-center mt-3">
                                                <img src="img/card_img.jpeg" alt="" className='card-img ms-2' />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">This is a wider card with.</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>

                                    <div className="card text-center mb-3">
                                        <div className="card-body">
                                            <h4 className="card-title">View Toggle</h4>
                                            <p className="card-text">
                                                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                                    <button type="button" className="btn btn-light p-2"><i className="bi bi-card-list p-3"></i></button>
                                                    <button type="button" className="btn btn-light"><i className="bi bi-list-ul p-3"></i></button>
                                                </div>
                                            </p>
                                        </div>
                                    </div>

                                </Col>
                            </Row>

                            <Row>
                                <Col>

                                    <div className="card text-center mb-3">
                                        <div className="card-body">
                                            <h4 className="card-title">Whats Your Feedback</h4>
                                            <p className="card-text">
                                                <button className='btn btn-info p-2'>
                                                    <h3>We're Listning</h3>
                                                </button>
                                            </p>
                                        </div>
                                    </div>

                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col sm="9">

                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Home
