import React, { useState } from "react";
import { GoVerified } from "react-icons/go";
import { MdVerifiedUser } from "react-icons/md";
const Vitrin = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      <h1 className="text-3xl font-semibold w-full border-b border-gray-600 py-2 mt-10 ">
        Showcase
      </h1>
      <div className="flex grid  grid-cols-4  grid-rows-2 gap-6 justify-between mt-5">
        {data.length !== 0
          ? data?.map((product, i) => (
              <div class="card w-72 h-[400px] bg-base-100 shadow-lg shadow-emerald-500  border border-emerald-400 mt-2 hover:scale-[103%]  hover:-translate-y-2 transition-transform duration-500 hover:shadow-emerald-300   relative  group">
                <figure>
                  <img src={data.picture} alt="Shoes" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    {data.title}
                    <div class="badge badge-secondary">NEW</div>
                  </h2>
                  <p className="line-clamp-2">{data.description}</p>
                  <div class="card-actions justify-between items-center">
                    <div className="text-lg font-semibold flex items-center text-2xl gap-2">
                      <GoVerified className="text-primary" />
                      <MdVerifiedUser />
                    </div>
                    <div className="text-lg font-semibold">
                      Price:{" "}
                      <span className="text-green-600">{data.price}</span>{" "}
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-0 rounded-b-md bg-orange-500   opacity-0 px-9 group-hover:opacity-90  duration-700 group-hover:h-7  items-center justify-center text-white font-semibold">
                  {" "}
                  View
                </div>
              </div>
            ))
          : [...Array(8).keys()].map((skeleton, i) => (
              <div class="card w-72 h-[400px] bg-base-100 shadow-lg shadow-emerald-500  border border-emerald-400 mt-2 hover:scale-[103%]  hover:-translate-y-2 transition-transform duration-500 hover:shadow-emerald-300   relative  group">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg  "
                    alt="Shoes"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    Shoes!
                    <div class="badge badge-secondary">NEW</div>
                  </h2>
                  <p className="line-clamp-2">
                    If a dog chews shoes whose shoes does he choose?
                  </p>
                  <div class="card-actions justify-between items-center">
                    <div className="text-lg font-semibold flex items-center text-2xl gap-2">
                      <GoVerified className="text-primary" />
                      <MdVerifiedUser />
                    </div>
                    <div className="text-lg font-semibold">
                      Price: <span className="text-green-600">30$</span>{" "}
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-0 rounded-b-md bg-orange-500   opacity-0 px-9 group-hover:opacity-90  duration-700 group-hover:h-7  items-center justify-center text-white font-semibold">
                  {" "}
                  View
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Vitrin;
