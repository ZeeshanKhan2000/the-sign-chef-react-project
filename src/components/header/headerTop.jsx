import React from 'react';
import styles from "./styles.module.css";
import { FaPlus } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HeaderTop = () => {
  return (
    <Container fluid className={styles.bgGreen} >
        <Row>
            <Col>
                <h1 className={styles.topHeader}><FaPlus /> Free Shipping NationWide <FaPlus /></h1>
            </Col>
        </Row>
    </Container>
  )
}

export default HeaderTop;
