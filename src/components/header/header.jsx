import React from 'react';
import styles from "./styles.module.css";
import { FaShoppingCart } from "react-icons/fa";
import headerImage from "../../assets/images/header-footer/header.png" 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderTop from './headerTop'


const Header = () => {

    return (
        <>

        <HeaderTop />
        <Container fluid className={styles.bgBlue}>
            <Row>
                <Col md={6}>
                   <div className={styles.header}>
                     <img className={styles.headerLogo} src={headerImage} alt="header logo" />
                     <h4>MAIN MENU</h4>
                      <form action="">
                        <input type="text" placeholder='SEARCH' />
                      </form>
                   </div>
                </Col>
                <Col md={6}>
                    <div className={styles.headerRight}>
                        <h6>Sales@TheSignChef.com</h6>
                        <h6>800.899.6275</h6>
                        <h6>FREE QUOTES</h6>
                    </div>

                    <div className={styles.headerRightLinks}>
                        <h6>gregh aderson - Active  <span><FaShoppingCart />  </span> </h6>
                    </div>
                </Col>
            </Row>
        </Container>
        </>


    )

}

export default Header;
