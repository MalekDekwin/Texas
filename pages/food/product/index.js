import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";

const singleProduct = () => {
  const value = useSelector((state) => state.getProducts.value);
  return (
    <div className="container " id="SingleProduct">
      <div className="row">
        <div className="col">
          <center>
            <br /> <br /> <br /> <br />
            <h1>{value.Name}</h1>
            <p className="disc">{value.Description}</p>
            <h5>{value.Name}</h5>
            <h4 className="price">{value.DefaultPrice}  SAR</h4>
            <br /> <br /> <br />
            <Link href="/food">
              <a className="cbtn">Back</a>
            </Link>
            <Link href="/food/customize">
              <a className="cbtn">Order</a>
            </Link>
          </center>
        </div>
        <div className="col">
          <Image
            src={value.ImagePath}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};
export default singleProduct;
