import React from 'react'
import styles from './styles.module.css'
// import copanyBanner from '../../assets/images/banner/banner.png'
import { FaAngleDoubleRight } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CompanyLinks from './companylinks'


const CompanyDetails = () => {
    return (
        <>
            <section className={styles.companySignSection}>
                <Container >
                    <Row>
                        <Col md={10}>
                            <div className={styles.companySignContent}>
                                <h6>celebrating 35 years</h6>
                                <h1>america`s local Sign Company</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, architecto.</p>

                                <div className={styles.companySignLinksMain}>

                                    <div className={styles.companySignLinksHeader}>
                                        <div className={styles.companySignLinks}>
                                            <h6><FaAngleDoubleRight /> </h6>
                                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                        </div>
                                        <div className={styles.companySignLinks}>
                                            <h6><FaAngleDoubleRight /> </h6>
                                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                        </div>
                                        <div className={styles.companySignLinks}>
                                            <h6><FaAngleDoubleRight /> </h6>
                                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                        </div>
                                        <div className={styles.companySignLinks}>
                                            <h6><FaAngleDoubleRight /> </h6>
                                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                        </div>
                                        <div className={styles.companySignLinks}>
                                            <h6><FaAngleDoubleRight /> </h6>
                                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                        </div>
                                        <div className={styles.companySignLinks}>
                                            <h6><FaAngleDoubleRight /> </h6>
                                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                        </div>
                                    </div>

                                    <div className={styles.companySignLinksHeader2}>
                                        <div className={styles.companySignLinks}>
                                            <h6><FaAngleDoubleRight /> </h6>
                                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                        </div>
                                        <div className={styles.companySignLinks}>
                                            <h6><FaAngleDoubleRight /> </h6>
                                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                        </div>
                                        <div className={styles.companySignLinks}>
                                            <h6><FaAngleDoubleRight /> </h6>
                                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                        </div>
                                        <div className={styles.companySignLinks}>
                                            <h6><FaAngleDoubleRight /> </h6>
                                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                        </div>
                                        <div className={styles.companySignLinks}>
                                            <h6><FaAngleDoubleRight /> </h6>
                                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                        </div>
                                        <div className={styles.companySignLinks}>
                                            <h6><FaAngleDoubleRight /> </h6>
                                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            < CompanyLinks />
        </>
    )
}

export default CompanyDetails;