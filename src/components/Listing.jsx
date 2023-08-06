import React,{useState, useEffect} from "react";
import { Card } from "./Card";
import {mockData} from '../mockData';
import axios from "axios";


export const Listing = () => {
  const [products, setProducts] = useState(mockData);
  const [count, SetCount] = useState(0);
  const [loading,setLoading] = useState(false);

  return (
    <div>
      {loading ? (<p>Loading...</p>
        ) : (
              <>
                <div className="Firstdiv">
                  <input type="button" value="Electricity" className="btn-electricity"/>
                  <input type="button" value="Filter" className="btn-filter" />
                </div>
                <div style={{padding:"2px 15px"}}>
                  <p><span id="info">&#8505;</span> Initial recommendations are based on average medium usage as determined by relevant energy regulators, please view the information hover next to the estimated cost box for more information. For a more accurate comparision relevant to your circumstances, please use the Bill Details tab on the results page to enter your most recent energy bill details.</p>
                </div>
                <div>
                    {products.map((product)=>{
                        return <Card key={product.id} products={product} />
                    })}
                </div>
                {/* <Card products={products[0]} />
                <Card products={products[1]} /> */}
              </>
            )
      }
    </div>
  );
};