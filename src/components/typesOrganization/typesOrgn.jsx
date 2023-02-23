import React from 'react'
import styles from './styles.module.css'
import { FaAngleDoubleRight } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const TypesOrganization = () => {
    return (
        <section className={styles.TypesOrganizationSection}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.typesOrganizationHeading}>
                            <h1>Types of organizations we serve:</h1>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className={styles.typesOrganizationContent}>
                            <ul>
                                <li><FaAngleDoubleRight />Startups </li>
                                <li><FaAngleDoubleRight />Contractors </li>
                                <li><FaAngleDoubleRight />Small Businesses </li>
                                <li><FaAngleDoubleRight />Large Corporation</li>
                                <li><FaAngleDoubleRight />Licensed Professionals </li>
                            </ul>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div className={styles.typesOrganizationContent}>
                            <ul>
                                <li><FaAngleDoubleRight />Universities & Colleges</li>
                                <li><FaAngleDoubleRight />Churches</li>
                                <li><FaAngleDoubleRight />Religious Organizations </li>
                                <li><FaAngleDoubleRight />Non-Profits</li>
                                <li><FaAngleDoubleRight />Neighborhood Entrances</li>
                            </ul>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div className={styles.typesOrganizationContent}>
                            <ul>
                                <li><FaAngleDoubleRight />Fortune 500 Companies</li>
                                <li><FaAngleDoubleRight />Federal Government</li>
                                <li><FaAngleDoubleRight />U.S. Military Bases</li>
                                <li><FaAngleDoubleRight />ity & State Agencies</li>
                                <li><FaAngleDoubleRight /> Public & Private Schools</li>
                            </ul>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default TypesOrganization;