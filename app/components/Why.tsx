import React from "react";
import Image from "next/image";
import placeholder from "../../public/samuel-ferrara-1527pjeb6jg-unsplash.jpg";

const Why = () => {
  return (
    <section className="bg-neutral py-10 px-32">
      <div className="flex justify-center">
        <Image src={placeholder} width={600} alt="Why Integrate" />
      </div>

      <div className="grid grid-cols-3 mt-10">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <Image src={placeholder} width={500} alt="Money" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <Image src={placeholder} width={500} alt="Money" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <Image src={placeholder} width={500} alt="Money" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
