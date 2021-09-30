import React, {useState , useEffect} from 'react';
// API
import { get_Products } from '../services/api';

export const contextProduct = React.createContext();

const ContextProductsProvider = ({children}) => {
    
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const fetchApi = async () => {
            setProducts(await get_Products());
        }

        fetchApi();
    })

    
    return (
        <contextProduct.Provider value={products}>
            {children}
        </contextProduct.Provider>
    )
}

export default ContextProductsProvider
