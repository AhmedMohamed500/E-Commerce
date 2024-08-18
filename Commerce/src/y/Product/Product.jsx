import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";

export default function Product({product}) {

  const {addToCart} = useContext(CartContext);

  async function addProductToCart(productId) {
    const Resp =  await addToCart(productId);
    console.log(Resp);
    if(Resp.status === "success"){
    toast.success(Resp.message)
    }else{
    toast.success("something went wrong")

  }

  }
    
  return (
    <>
    
    <div className="w-1/6 px-4 mb-4 product">
    <Link to={`/product-details/${product.id}/${product.category.name}`}>

    <img className="mb-2" src={product.imageCover} alt="" />
                  <span className="text-center mb-2 text-green-500">{product.category.name}</span>
                  <h2 className="mb-2 font-bold">{product.title}</h2>
                  <div className="flex justify-between">
                    <span className="font-bold">{product.price} EGP</span>
                    <div>
                      <i className="fas fa-star text-yellow-300"></i>
                      <span>{product.ratingsAverage}</span>
                    </div>

                  </div>    
    </Link>

      <button onClick={() => addProductToCart(product.id)} className="btn btn-green w-full">Add To Cart</button>
    </div>
    </>
  )
}
