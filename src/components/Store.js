import React, {useContext} from 'react';
import Product from '../shared/Product';
import { contextProduct } from '../context/ContextProductsProvider';
import styles from './Store.module.css';

const Store = () => {
    const products = useContext(contextProduct);

    return (
        <div className={styles.container}>
            {products.map(item => <Product key={item.id} dataProduct={item} /> )}
        </div>
    )
}

export default Store
