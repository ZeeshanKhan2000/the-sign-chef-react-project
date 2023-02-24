import React from 'react'
import styles from './styles.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DetailSign = () => {
    return(
        <section className={styles.DetailSignsection}>
            <Container>
                <Row>
                    <Col >
                        <div className={styles.DetailSignContent}>
                        <h3>How will you convey your ideas & aspirations to ensure <br /> your new sign is made exactly like you want it?</h3>

                        <h1>We specialize in transforming intangible ideas <br /> into beautifully designed custom signs!</h1>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default DetailSign;