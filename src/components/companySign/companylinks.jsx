import React from 'react'
import styles from './styles.module.css'
import conpanySignFooterImage from '../../assets/images/banner/canpanylinks.png'
// import { FaAngleDoubleRight } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CompanyLinks = () => {
    return (
        <section className={styles.copmanyLinksSection}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.capanySignFooter}>
                            <img src={conpanySignFooterImage} alt="SignFooterImage" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CompanyLinks;
