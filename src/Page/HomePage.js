import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Product from "../components/Product";
import data from '../data/data';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () =>{
      try{
        setLoading(true);
        const {data} = await axios.get('/api/products');
        setLoading(false);
        setProducts(data);
      } catch (err){
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  },[])
    return (
        <div>
          {/* {loading? (
            <LoadingBox></LoadingBox>
          ) : error ? (
           <MessageBox>{error}</MessageBox>
          ):( */}
          <div className="row center">
            {data.products.map(product => (
              <Product key={product._id} product={product}></Product>
            ))}           
          </div>
        </div>
        );  
}