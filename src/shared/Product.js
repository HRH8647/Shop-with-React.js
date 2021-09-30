import React, {useContext} from 'react';
import styles from './Product.module.css';
//awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
//func
import { shorten } from '../helper/function';
import { isInCard } from '../helper/function';
import { I_D } from '../helper/function';
//react-router-dom
import { Link } from 'react-router-dom';
//context
import { cardContext } from '../context/CardContextProvider';

const Product = ({dataProduct}) => {
    const {state , dispath} = useContext(cardContext);
    return (
        <div className={styles.container}>
            <img src={dataProduct.image} alt="Product" />
            <h3>{shorten(dataProduct.title)}</h3>
            <h4>{dataProduct.price} $</h4>
            <div>
                <Link to={`/product/${dataProduct.id}`}>More</Link>
                <div>
                    {I_D(state , dataProduct.id) > 1 && <button onClick={() => dispath({type: "DECREASE" , payload: dataProduct})}>-</button>}
                    {I_D(state, dataProduct.id) === 1 && <button onClick={() => dispath({type: "REMOVE_ITEM" , payload: dataProduct})}><FontAwesomeIcon icon={faTrash} /></button>}
                    {I_D(state, dataProduct.id) > 0 && <span className={styles.counter}>{I_D(state, dataProduct.id)}</span>}
                    {isInCard(state , dataProduct.id) ?
                        <button onClick= {() => dispath({type: "INCREASE" , payload: dataProduct})}>+</button> :
                        <button onClick= {() => dispath({type: "ADD_ITEM" , payload: dataProduct})}>Add to card</button>    
                    }
                </div>
            </div>
        </div>
    )
}

export default Product
