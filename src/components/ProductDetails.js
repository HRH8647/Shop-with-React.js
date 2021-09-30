import React, { useContext } from 'react';
import { contextProduct } from '../context/ContextProductsProvider';
import { Link } from 'react-router-dom';
import styles from './ProductDetails.module.css';

const ProductDetails = props => {
    const id = props.match.params.id;
    const data = useContext(contextProduct);
    const product = data[id - 1];
    const { image, title, category, description, price } = product;
    return (
        <div className={styles.container}>
            <img src={image} alt="product" />
            <div className={styles.box}>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span style={{color: "#1753ad"}}>category : </span>{category}</p>
                <div>
                    <span className={styles.price}>Price : {price} $</span>
                    <Link className={styles.goto} to="/product">Go to Shop</Link>
                </div>
            </div>


        </div>
    )
}

export default ProductDetails
