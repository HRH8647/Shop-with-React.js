import React, {useContext} from 'react';
import { cardContext } from '../context/CardContextProvider';
import { shorten } from '../helper/function';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './Card.module.css';

const Card = (props) => {
    const {dispath} = useContext(cardContext); 
    const {image , price , title , quantity} = props.data;
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="product" />
            <div>
                <h3 className={styles.title}>{shorten(title)}</h3>
                <p className={styles.price}>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div>
                {quantity > 1 ? 
                    <button onClick={() => dispath({type: "DECREASE" , payload: props.data})}>-</button> :
                    <button onClick={() => dispath({type: "REMOVE_ITEM" , payload: props.data})}>{<FontAwesomeIcon icon={faTrash} />}</button>   
                }
                <button onClick={() => dispath({type: "INCREASE" , payload: props.data})}>+</button>
            </div>
        </div>
    )
}

export default Card
