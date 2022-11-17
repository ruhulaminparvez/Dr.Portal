import React from "react";

const TestimonialsCard = ({ testimonial }) => {
  const { name, from, feedback, img } = testimonial;
  return (
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{feedback}</p>
        </div>
        <div className="flex items-center px-10 pb-5">
          <img className="w-16 h-16 rounded-full" src={img} alt="" />
          <div className="ml-4">
            <h4 className="text-lg font-bold">{name}</h4>
            <p className="text-sm text-gray-400">{from}</p>
          </div>
        </div>
      </div>
  );
};

export default TestimonialsCard;
