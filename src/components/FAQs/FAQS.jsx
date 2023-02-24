import React from 'react'
import styles from './styles.module.css'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FaqsPage = () => {
    return (
        <section className={styles.faqsMainsection}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.faqsHeading}>
                            <h1>Frequently Asked Questions About Ordering <br /> Custom Business Signs</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={10} className={'mx-auto'}>
                        <Accordion defaultActiveKey="0">
                            <Row>
                                <Col md={6}>
                                    <div className={styles.FaqsContent}>

                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>How do I get started?</Accordion.Header>
                                            <Accordion.Body>
                                            It's easy! Click on the button to fill out a quote from or give us a call at 800.899.6872. Our friendly sign specialists will guide you through the process from start to finish, ensuring you receive the awesome signage you deserve.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>How long does the design process take?</Accordion.Header>
                                            <Accordion.Body>
                                            It's easy! Click on the button to fill out a quote from or give us a call at 800.899.6872. Our friendly sign specialists will guide you through the process from start to finish, ensuring you receive the awesome signage you deserve.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className={styles.FaqsContent}>

                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>What drives up the cost sign?</Accordion.Header>
                                            <Accordion.Body>
                                            It's easy! Click on the button to fill out a quote from or give us a call at 800.899.6872. Our friendly sign specialists will guide you through the process from start to finish, ensuring you receive the awesome signage you deserve.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>I already have a design. can you use it?</Accordion.Header>
                                            <Accordion.Body>
                                            It's easy! Click on the button to fill out a quote from or give us a call at 800.899.6872. Our friendly sign specialists will guide you through the process from start to finish, ensuring you receive the awesome signage you deserve.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>How do I prepare & load my artwork?</Accordion.Header>
                                            <Accordion.Body>
                                            It's easy! Click on the button to fill out a quote from or give us a call at 800.899.6872. Our friendly sign specialists will guide you through the process from start to finish, ensuring you receive the awesome signage you deserve.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>What if I don't have a logo?</Accordion.Header>
                                            <Accordion.Body>
                                            It's easy! Click on the button to fill out a quote from or give us a call at 800.899.6872. Our friendly sign specialists will guide you through the process from start to finish, ensuring you receive the awesome signage you deserve.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </div>
                                </Col>
                            </Row>
                        </Accordion>
                        <div className={styles.faqsLoadMoreBtn}>
                            <button>
                                Load More
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default FaqsPage;