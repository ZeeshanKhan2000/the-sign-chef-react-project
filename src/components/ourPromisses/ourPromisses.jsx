import React from 'react'
import styles from './styles.module.css'
import { FaAngleDoubleRight } from "react-icons/fa";
import InnerOurPromisses from '../../assets/images/ourPormisses/promisses.png'
import InnerOurPromisses2 from '../../assets/images/ourPormisses/promisses2.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SmillingShif from './smilingshef'
import OwnerProfileData from './ownerProfile'




const OurPromisses = () => {
    return (
        <>
            <section className={styles.ourPromissesSection}>
                <Container fluid>
                    <Row>
                        <Col md={6} className={'px-0'}>
                            <div className={styles.ourPromissesContent}>
                                <h2>Our Promise To You</h2>
                                <div className={styles.ourPromissesPoints}>
                                    <h6><FaAngleDoubleRight /> </h6>
                                    <h6>Workmanship and materials are guaranteed against product defects.</h6>
                                </div>

                                <div className={styles.ourPromissesPoints}>
                                    <h6><FaAngleDoubleRight /> </h6>
                                    <h6>You will be Absolutely Delighted with your Final Design or your money back!</h6>
                                </div>

                                <div className={styles.ourPromissesPoints}>
                                    <h6><FaAngleDoubleRight /> </h6>
                                    <h6>Order Specifications are Guaranteed to be 100% Accurate.</h6>
                                </div>

                                <div className={styles.ourPromissesPoints}>
                                    <h6><FaAngleDoubleRight /> </h6>
                                    <h6>Online Security Independently Verified by Authorize.net & SecureTrust.</h6>
                                </div>

                            </div>
                        </Col>
                        <Col md={6} className={'px-0'}>
                            <div className={styles.ourPromissesImage}>
                                <img src={InnerOurPromisses} alt="our pormisses dp" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <SmillingShif />
            <OwnerProfileData />
            <section className={styles.ourPromissesSection}>
                <Container fluid>
                    <Row>
                        <Col md={6} className={'px-0'}>
                            <div className={styles.ourPromissesImagetable}>
                                <img src={InnerOurPromisses2} alt="our pormisses dp" />
                            </div>
                        </Col>
                        <Col md={6} className={'px-0'}>
                            <div className={styles.ourPromissesContenttable}>
                                <h2>Here’s what the SignChef brings to the table …</h2>
                                <div className={styles.ourPromissesPoints2}>
                                    <h6><FaAngleDoubleRight /> </h6>
                                    <h6>35 year of real-world sign manufacturing experience.</h6>
                                </div>

                                <div className={styles.ourPromissesPoints2}>
                                    <h6><FaAngleDoubleRight /> </h6>
                                    <h6>In-depth product knowledge gained by producing. over a million, unique, custom signs, one by one.</h6>
                                </div>

                                <div className={styles.ourPromissesPoints2}>
                                    <h6><FaAngleDoubleRight /> </h6>
                                    <h6>A unique, Online Tracking System that will show you the progress of you order throughout the production process</h6>
                                </div>

                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default OurPromisses;