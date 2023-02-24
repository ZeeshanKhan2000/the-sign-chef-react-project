import React from 'react'
import styles from './styles.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Copywrite = () => {
    return (
        <section>
            <Container fluid>
                <Row>
                    <Col md={12} className={styles.bgFooter}>
                        <div className={styles.footercopywrite}>
                            <p>Copyright © 2022 TheSignChe</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Copywrite;
