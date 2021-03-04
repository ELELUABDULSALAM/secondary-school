import React from "react";

export default function Test() {
  const year = new Date().getFullYear();
  const years = Array.from(new Array(20), (val, index) => index + year);
  return (
    <div>
      <select>
        {years.map((year, index) => {
          return (
            <option key={`year${index}`} value={year}>
              {year}
            </option>
          );
        })}
      </select>
    </div>
  );
}
