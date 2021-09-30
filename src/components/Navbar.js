import React, {useContext} from 'react';
import styles from './Navbar.module.css';
//context
import { cardContext } from '../context/CardContextProvider';
//react-router-dom
import { Link } from 'react-router-dom';
//awesome 5
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    const {state} = useContext(cardContext);
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <Link to="/product" className={styles.product}>Products</Link>
                <div className={styles.shop}>
                    <Link to="/shopcard"><FontAwesomeIcon className={styles.icon} icon={faShoppingCart} /></Link>
                    <span className={styles.counter}>{state.itemCounter}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
