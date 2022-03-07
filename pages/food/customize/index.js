import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
const customize = () => {
  const ingredients = useSelector(
    (state) => state.getProducts.value.Ingridents
  );
  const product = useSelector((state) => state.getProducts.value);
  return (
    <div id="custom">
      <h1 className="title">{product.Name}</h1>
      <h4 className="sub">{product.Description}</h4>
      <br />
      <h3>Ingridents</h3>
      <br />
      <div className="container">
        {ingredients.map((ing) => (
          <div className="row">
            <div className="col">
              {" "}
              <Image src={ing.ImagePath} alt="" width={50} height={50} />
            </div>
            <div className="col">{ing.Name}</div>
            <div className="col">{ing.Price}   {" "} SAR</div>
            <div className="col">
              <input onClick={()=>{
                  
              }} className="dicr" type="submit" value="-"/> 
              <input className="qty" type="number"  value={ing.Quantity} />
              <input className="incr" type="submit" value="+"/> 
            </div>

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
export default customize;
