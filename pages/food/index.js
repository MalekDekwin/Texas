import React from "react";
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch(
      "https://task-api-eosin.vercel.app/api/categories"
    );
    const data = await res.json();
  
    return {
      props: { cats: data },
    };

  };
const Food = ({cats}) =>{
return (
    <div  id="categories">
        <br />
         <div className="row">
        {cats.map((cat) => (
          <div className="col-12 col-md-3" key={cat.ID}>
            <div className="card mb-4">
              <img
                src={`${cat.ImagePath}`}
                className="card-img-top"
                alt="dd"
              />
              <div className="">
                <Link href={`/food/${cat.ID}`}>
                  <a className="btn cbtn">{cat.Name}</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
)
}
export default Food;