import React from 'react'
import styles from './styles.module.css'
import ownerProfileImage from '../../assets/images/the-shef/SignChef.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const OwnerProfileData = () => {
    return (
        <section className={styles.ownerProfileSection}>
            <Container>
                <Row>
                    <Col >
                        <div className={styles.profileDetails}>
                            <img src={ownerProfileImage} alt="profile detail" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OwnerProfileData;

