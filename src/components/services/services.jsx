import React from 'react';
import styles from "./styles.module.css";
import servicesImage from "../../assets/images/services/1.png"
import servicesImage2 from "../../assets/images/services/2.png"
import servicesImage3 from "../../assets/images/services/3.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const Services = () => {
    return (
        <section className={styles.servicesSection}>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className={styles.servicesData}>
                            <div className={styles.servicesContent}>
                                <img src={servicesImage} alt="services Dp" />
                                <h6>Beautiful Signs</h6>
                                <p>Carefully designed to match the image & style you are looking for.</p>

                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className={styles.servicesContent}>
                            <img src={servicesImage2} alt="services Dp" />
                            <h6>Custom-Made</h6>
                            <p>Carefully designed to match the image & style you are looking for.</p>

                        </div>

                    </Col>

                    <Col md={4}>
                        <div className={styles.servicesContent}>
                            <img src={servicesImage3} alt="services Dp" />
                            <h6>Built-to-Last</h6>
                            <p>Carefully designed to match the image & style you are looking for.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}


export default Services;