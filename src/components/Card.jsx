import starIcon from "../images/icon-star.svg";
import { useState } from "react";

export const Card = ({ Setpuntuacion, SetmostrarOcultar }) => {
  return (
    <div className="bg-Dark-Blue h-[360px] w-[325px] rounded-2xl grid items-center justify-center p-8 md:w-[410px] md:h-[415px]">
      <div className="circulo-boton md:mb-3">
        <img className="w-4" src={starIcon} alt="" />
      </div>

      <h2 className="text-White text-2xl md:text-3xl font-bold">
        How did we do?
      </h2>
      <p className="text-Medium-Grey text-[14px] md:text-[16px] md:mb-3 ">
        {" "}
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="text-Light-Grey grid grid-cols-5 gap-5">
        {Array.from({ length: 5 }, (v, i) => (
          <button
            className="circulo-boton"
            value={i + 1}
            onClick={(e) => Setpuntuacion(e.target.value)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button
        className="text-White w-[278px] md:w-[340px] h-[45px] bg-Orange rounded-3xl mt-4 tracking-[1px] font-semibold text-sm hover:scale-110 ease-in duration-200 hover:bg-White hover:text-Orange"
        type="submit"
        onClick={() => SetmostrarOcultar(true)}
      >
        SUBMIT
      </button>
    </div>
  );
};
