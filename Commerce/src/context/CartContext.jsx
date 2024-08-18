import {createContext,useContext} from "react";
import axios  from "axios";
import { AuthContext } from "./AuthContext";
export const CartContext =  createContext();

export default function CartContextProvider({children}){

const {accessToken} = useContext(AuthContext);
const endpoint = `https://ecommerce.routemisr.com/api/v1/cart`


const headers = {
        token : accessToken,
};


    async function addToCart(productId) {
        try {
        const {data} = await axios.post(endpoint, {productId},{headers});
        console.log(data);
        return data
        
        } catch (error) {
            console.log(error);
            return error
        }
    }


    return (

        <CartContext.Provider value={{ addToCart }}>
        {children}

    </CartContext.Provider>
    );
} 