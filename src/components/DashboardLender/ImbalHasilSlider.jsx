import React, { useState } from "react";
import { RangeSlider } from "flowbite-react";
import { FormatMataUang } from "../../utils/FormatMataUang";

const ImbalHasilSlider = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <div className="flex flex-col gap-2">
        <div>{FormatMataUang(value)}</div>
        <div>
          <RangeSlider
            onChange={(e) => setValue(e.target.value)}
            id="default-range"
            min="1000000"
            max="4000000"
            step="500000"
          />
        </div>
        <div className="flex flex-row justify-between">
          <p>Rp1.000.000</p>
          <p>Rp4.000.000</p>
        </div>
      </div>
    </>
  );
};

export default ImbalHasilSlider;
