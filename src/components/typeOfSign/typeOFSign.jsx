import React from 'react'
import styles from './styles.module.css'
import typesOfSignbanner from '../../assets/images/types-of-sign/typeOfSign.png'
import { FaAngleDoubleRight } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DetailSign from './typesOfSignDetail'

const TypesOfSign = () => {
    return (
        <section className={styles.typesOfSignSection}>
            <Container fluid>
                <Row>
                    <Col md={6} className={'px-0 '}>
                        <div className={styles.typesOfSignContent}>
                            <h2>Tracking down the right type of sign to buy can be surprisingly difficult!</h2>
                            <h4>With so many unusual sign materials available, confusion is common place in the business world.</h4>
                            <div className={styles.typesOfSignContentLinks}>
                                <h6><FaAngleDoubleRight /> </h6>
                                <h6> Scouring the internet for answers will only take you so far.</h6>
                            </div>
                            <div className={styles.typesOfSignContentLinks}>
                                <h6><FaAngleDoubleRight /> </h6>
                                <h6>You might even be the victim of poor service from another sign  shop which has led you here.</h6>
                            </div>
                            <div className={styles.typesOfSignContentLinks}>
                                <h6><FaAngleDoubleRight /> </h6>
                                <h6>At some point, you are going to need some professional help!</h6>
                            </div>
                            <div className={styles.typesOfSignContentLinks}>
                                <h6><FaAngleDoubleRight /> </h6>
                                <h6>But who can you turn to for immediate assistance?</h6>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className={'px-0 '}>
                        <div className={styles.typesOfSignImage}>
                            <img  src={typesOfSignbanner} alt="typesOfSignSect" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <DetailSign />
        </section>
    )
}

export default TypesOfSign;