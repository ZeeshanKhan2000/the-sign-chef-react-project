import  React from 'react';
import styles from "./styles.module.css"
import productImage from "../../assets/images/product/1.png"
import productImage2 from "../../assets/images/product/2.png"
import productImage3 from "../../assets/images/product/3.png"
import productImage4 from "../../assets/images/product/4.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Product = () => {
    return(
        <section className={styles.productSection}>
            <Container>
                <Row>
                    <Col md={3}>
                        <div className={styles.productContent}>
                            <img src={productImage}  alt="product dp" />
                            <h4>Outdoor Signs</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        </div>
                    </Col>

                    <Col md={3}>
                    <div className={styles.productContent}>
                            <img src={productImage2}  alt="product dp" />
                            <h4>Outdoor Signs</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        </div>
                    </Col>

                    <Col md={3}>
                    <div className={styles.productContent}>
                            <img src={productImage3}  alt="product dp" />
                            <h4>Outdoor Signs</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        </div>
                    </Col>

                    <Col md={3}>
                    <div className={styles.productContent}>
                            <img src={productImage4}  alt="product dp" />
                            <h4>Outdoor Signs</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Product;