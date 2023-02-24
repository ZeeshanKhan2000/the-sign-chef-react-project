import React from 'react'
import styles from './styles.module.css'
import BrandDeserveimage from '../../assets/images/brand-deserve/1.png'
import BrandDeserveimage2 from '../../assets/images/brand-deserve/2.png'
import BrandDeserveimage3 from '../../assets/images/brand-deserve/3.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const BrandDeserve = () => {
    return (
        <section className={styles.BrandDeserveSection}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.BrandDeserveHeading}>
                            <h1>Get the Extraordinary Signage <br /> Your Brand Deserves.</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div className={styles.BrandDeserveMain}>
                            <div className={styles.BrandDeserveContent}>
                                <img src={BrandDeserveimage} alt="brand page" />
                                <h6>Direct Line to Experts</h6>
                            </div>
                            <div className={styles.BrandDeservePara}>
                                <p>When questions suddenly pop up, you’ll have direct access to the Sign Specialist dedicated to your account - from start to ﬁnish.</p>
                                <p>You’ll receive the supportive guidance you need throughout every step of the process. Nothing will be left to chance</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.BrandDeserveMain2}>
                            <div className={styles.BrandDeserveContent}>
                                <img src={BrandDeserveimage2} alt="brand page" />
                                <h6>Direct Line to Experts</h6>
                            </div>
                            <div className={styles.BrandDeservePara}>
                                <p>When questions suddenly pop up, you’ll have direct access to the Sign Specialist dedicated to your account - from start to ﬁnish.</p>
                                <p>You’ll receive the supportive guidance you need throughout every step of the process. Nothing will be left to chance</p>
                                <p>You’ll receive the supportive guidance you need throughout every step of the process. Nothing will be left to chance</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.BrandDeserveMain2}>
                            <div className={styles.BrandDeserveContent}>
                                <img src={BrandDeserveimage3} alt="brand page" />
                                <h6>Direct Line to Experts</h6>
                            </div>
                            <div className={styles.BrandDeservePara}>
                                <p>When questions suddenly pop up, you’ll have direct access to the Sign Specialist dedicated to your account - from start to ﬁnish.</p>
                                <p>You’ll receive the supportive guidance you need throughout every step of the process. Nothing will be left to chance</p>
                                <p>You’ll receive the supportive guidance you need throughout every step of the process. Nothing will be left to chance</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BrandDeserve;