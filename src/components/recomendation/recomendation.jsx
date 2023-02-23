import React from 'react'
import styles from './styles.module.css'
import { FaStar } from "react-icons/fa";
import recommendationImage from '../../assets/images/recommendation/12.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Recommendation = () => {
    return (
        <section className={styles.RecommendationSection}>
            <Container fluid>
                <Row>
                    <Col md={4} className={`px-0 ${styles.sddf}`} >
                        <div className={styles.recommendationContent}>
                            <img src={recommendationImage} alt="" />
                        </div>
                    </Col>

                    <Col md={8} className='px-0' >
                        <div className={styles.recommendationHeading}>
                            <h6>Highly Recommended by <br /> Local Business Professionals Nationwide.</h6>
                        </div>
                        <div className={styles.recommendationMainContent}>
                            <div className={styles.recommendationStar}>
                                <span><FaStar />  </span>
                                <span><FaStar />  </span>
                                <span><FaStar />  </span>
                                <span><FaStar />  </span>
                                <span><FaStar />  </span>
                            </div>
                            <h4>"Excellent service! We love our logo. Crystal was very professional and <br /> patient! Highly recommended!"</h4>
                            <h6>Sagit Attia</h6>
                            <h6>Medisafe</h6>
                            <p>Updated January 18, 2022</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Recommendation;