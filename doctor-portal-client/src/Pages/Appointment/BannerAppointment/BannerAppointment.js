import React from "react";
import chair from "../../../Assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const BannerAppointment = ({selectedDate, setSelectedDate}) => {

  return (
    <div className="bg-base-200">
      <div className="hero bg-base-200 py-10">
        <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center gap-20">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                modifiersClassNames={{
                    selected: 'my-selected',
                    today: 'my-today'
                  }}
                  modifiersStyles={{
                    selected: {
                        backgroundColor: '#057AFF',
                        color: 'white'
                    }
                  }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAppointment;
