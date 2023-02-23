import React from 'react';
import styles from "./styles.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Banner = () => {
    return(
        <section className={styles.bannerSection}>
        <Container>
            <Row>
                <Col md={6}>
                    <div className={styles.bannerContent}>
                        <h5>Outdoor</h5>
                        <h1>Signs & Letters</h1>
                        <h6>Custom Made for You!</h6>
                        <div className={styles.bannerBtn}>
                            <a href="#" className={styles.bannerActive}>SHOP ALL PRODUCTS</a><br/> <br/>
                            <a href="#">FREE QUOTES</a>
                        </div>
                    </div>
                </Col>
                 
                {/* <Col md={6}>
                    <div className={styles.bannerimage} >
                        <img  src={bannerPhoto} alt="bannnerContent" />
                    </div>
                 
                </Col> */}


            </Row>
        </Container>





        </section>
    )

}


export default Banner;