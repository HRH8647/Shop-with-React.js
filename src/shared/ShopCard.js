import React, { useContext } from 'react';
import Card from './Card';
import { cardContext } from '../context/CardContextProvider';
import { Link } from 'react-router-dom';
import styles from './ShopCard.module.css';
import { useToasts } from 'react-toast-notifications';


const ShopCard = () => {
    const { addToast } = useToasts();
    const { state, dispath } = useContext(cardContext);
    const clickCheckoutHandler = () => {
        dispath({ type: "CHECKOUT" });
        addToast('Checkout Successfully', { appearance: 'success', autoDismiss: true });
    }
    return (
        
            <div className={styles.container}>
            <div>
                {state.selectedItem.map(item => <Card key={item.id} data={item} />)}
            </div>
            {
                state.itemCounter > 0 && <div className={styles.box}>
                    <p className={styles.header}><span>Total Items : </span> {state.itemCounter}</p>
                    <p className={styles.header}><span>Total Payment : </span> {state.total} $</p>
                    <div>
                        <button className={styles.checkout} onClick={ clickCheckoutHandler}>Checkout</button>
                        <button className={styles.clear} onClick={() => dispath({ type: "CLEAR" })}>Clear</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div className={styles.successcheckout}>
                    <h3>Checked Out Successfully</h3>
                    <Link to="/product">Buy more</Link>
                </div>
            }
            {
                !state.checkout && state.itemCounter === 0 && <div className={styles.successclear}>
                    <h3>Want to buy ?</h3>
                    <Link to="/product">Go to shop</Link>
                </div>
            }
        </div>
    )
}

export default ShopCard
