import React from 'react'
import styles from './styles.module.css'
import footerLogo from '../../assets/images/header-footer/footer.png'
import { FaGlobe } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Copywrite from './copywrite'


const Footer = () => {
    return (
        <>
        <footer className={styles.footerInfoSection}>
            <Container>
                <Row>
                    <Col md={10} className={'mx-auto'}>
                        <Row>
                            <Col md={3}>
                                <div className={styles.footerLinks}>
                                    <h5>COMPANY</h5>
                                    <p>About Us</p>
                                    <p>Design Satisfaction Guaranteed</p>
                                    <h6>GUIDANCE & SUPPORT</h6>
                                    <div className={styles.footerSocialLinks}>
                                        <ul>
                                            <li>800.899.6272</li>
                                            <li>Service@TheSignChef.com</li>
                                            <li>Free Layouts</li>
                                            <li>Free Consultation</li>
                                            <li>Free Estimates</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className={styles.footerLinks}>
                                    <h5>NAVIGATION</h5>
                                    <div className={styles.footerSocialLinks}>
                                        <ul>
                                            <li>Shop All Signs</li>
                                            <li>Outdoor Signs</li>
                                            <li>Indoor Signs</li>
                                            <li>3D Letters & Logo</li>
                                            <li>Truck & Van Lettering</li>
                                            <li>Dry Erase Boards (Branded)</li>
                                            <li>Vinyl Banners</li>
                                            <li>Vinyl Application Instructions</li>
                                            <li>Sitemap</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className={styles.footerLinks}>
                                    <h5>RESOURCES</h5>
                                    <div className={styles.footerSocialLinks}>
                                        <ul>
                                            <li>Artwork Submission Guide</li>
                                            <li>Sign Buyer</li>
                                            <li>Sign Design - Best Practices</li>
                                            <li>Letter Sizing Calculator</li>
                                            <li>Sign Strength Comparisons</li>
                                            <li>Estimated Production Times</li>
                                            <li>Sign Glossary</li>
                                            <li>Vinyl Application Instructions</li>
                                            <li>Installation Guide</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className={styles.footerLinks}>
                                    <h5>LEGAL</h5>
                                    <div className={styles.footerSocialLinks}>
                                        <ul>
                                            <li>Terms & Conditions</li>
                                            <li>Warranty</li>
                                            <li>Return Policy</li>
                                            <li>Privacy Policy</li>
                                            <li>Online Security</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className={styles.footerLinks}>
                                    <h5>CONTACT US</h5>
                                    <img src={footerLogo} alt="footer dp" />
                                    <div className={styles.footerIcons}>
                                        <h6> <FaGlobe /></h6>
                                        <p>Service@TheSignChef.com </p>
                                    </div>
                                    <div className={styles.footerIcons}>
                                        <h6><FaPhone /></h6>
                                        <p>843.552.5252</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                    <div className={styles.footerLocation}>
                        <p>TheSignChef.com</p>
                        <p>7360 Cross County Road, Suite 103</p>
                        <p>North Charleston, SC 29418-8473</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </footer>
        < Copywrite />

        </>
        
    )
}


export default Footer;