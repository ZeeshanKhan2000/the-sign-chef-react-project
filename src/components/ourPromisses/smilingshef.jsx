import React from 'react'
import styles from './styles.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SmillingShif = () => {
    return (

        <section className={styles.smillingshifSection}>
            <Container fluid>
                <Row>
                    <Col md={8}>
                        <div className={styles.smillingShifContent}>
                            <p>"It's not just the quality of the sign materials that matter ... The real secret is in how all the ingredients are skillfully blended together!"</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        
    )
}

export default SmillingShif;