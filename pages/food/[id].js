import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { provideProduct } from "../../redux/reducers/getProduct";
export const getStaticPaths = async () => {
  const res = await fetch("https://task-api-eosin.vercel.app/api/categories");
  const data = await res.json();
  const paths = data.map((product) => {
    return {
      params: {
        id: product.ID.toString(),
      },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://task-api-eosin.vercel.app/api/products?catID=" + id
  );
  const data = await res.json();
  return { props: { products: data } };
};

const product = ({ products }) => {
  const dispatch = useDispatch();
  return (
    <div id="products">
      <br />
      <div className="row">
        {products.map((product) => (
          <div className="col-12 col-md-3" key={product.ID}>
            <div className="card mb-4">
              <img
                src={`${product.ImagePath}`}
                className="card-img-top"
                alt="dd"
              />
              <div className="productname">
                <div
                  onClick={() => {
                    dispatch(provideProduct({ product: product }));
                  }}
                  className="btn"
                >
                  <Link href="/food/product">
                  <a  className="row">
                    <il className="pname col">{product.Name}</il>
                    <il className="pprice col">{product.DefaultPrice} SAR</il>
                  </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default product;
