import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FakeStore() {
    const [categories,setCategories]=useState([]);
    const [products,setProducts]=useState([{id:0,title:'',price:0,category:'',description:'',image:'',rating:{rate:0,count:0}}]);
    const [cartItems,setCartItems]=useState([]);
    const [cartCount,setCartCount]=useState(cartItems.length);

    function LoadCategories(){
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(response=>{
            response.data.unshift('all');
            setCategories(response.data);
        })        
    }
    function handleCategoryChange(e){
        if(e.target.value==='all'){
            LoadProduct(`https://fakestoreapi.com/product`);

        }
        else{
            LoadProduct(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }
    function LoadProduct(url){
        axios.get(url)
        .then(response=>{
            setProducts(response.data);
        })

    }
    useEffect(()=>{
        LoadCategories();
        LoadProduct(`https://fakestoreapi.com/products`);
    },[])
    function handleAddToCartClick(product){
        cartItems.push(product);
        setCartCount(cartItems.length);
        alert(`${product.title}\n Added to Cart`);

    }

  return (
    <>
      <div className="container-fluid">
        <header className="d-flex justify-content-between p-2 bg-success text-black mt-3">
          <div className="h3">Fakestore</div>
          <div>
            <span><a href="#" className="text-black text-decoration-none">Home</a></span>
            <span><a href="#" className="mx-3 text-black text-decoration-none">Electronics</a></span>
            <span><a href="#" className="text-black text-decoration-none">Jewelery</a></span>
          </div>
          <div>
            <button data-bs-toggle="modal" data-bs-target="#cart" className="btn bi bi-cart4 position-relative text-black" style={{ border: "none" }} aria-label="Cart">
           <span className="badge bg-danger position-absolute rounded rounded-circle">{cartCount}</span>
            </button>

            <div className="modal fade"id="cart">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Your Cart Items</h3>
                            <button className="btn btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Preview</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItems.map(item=><tr key={item.id}>
                                            <td>{item.title}</td>
                                            <td>
                                                <img width="50"height="50" src={item.image} alt="" />
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
          </div>
        </header>
        <section className="mt-4 row">
            <nav className="col-2">
                <div>
                    <label >Select Category</label>
                    <div>
                        <select className="form-select" onChange={handleCategoryChange}>{
                            categories.map((category)=>
                                <option value={category}key={category}>{category.toUpperCase()}</option>
                            )
                        }

                        </select>
                    </div>
                </div>

            </nav>
            <main className="col-10 d-flex flex-wrap overflow-auto" style={{height:'450px'}}>
                {
                products.map(product=>
                    <div key={product.id} className="card m-2 p-2" style={{width:"200px"}}>
                        <img src={product.image} className="card-img-top"height="120px" />
                        <div className="card-header"style={{height:'100px'}} >
                            {product.title}
                        </div>
                        <div>
                            <dl>
                                <dt>Price</dt>
                                <dd>{product.price}</dd>
                                <dt>Rating</dt>
                                <dd>{product.rating.rate}<span className="bi bi-star-fill text-success"></span></dd>
                            </dl>
                        </div>
                        <div className="card-footer">
                            <button onClick={()=>handleAddToCartClick(product)} className="btn btn-warning bi bi-cart4 w-100">Add to Cart</button>

                        </div>
                    </div>
                )
                }
            </main>

        </section>
      </div>
    </>
  );
}
