import React, { useState } from "react";
import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelecition] = useState(false);
  const [multiArray, setMultiArray] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected((prevSelected) =>
      prevSelected === getCurrentId ? null : getCurrentId
    );
  }

  function handleMultiSelection(getCurrentId) {
    let copyMulti = [...multiArray];
    const findIndexofCurrentId = copyMulti.indexOf(getCurrentId);

    if (findIndexofCurrentId === -1) {
      copyMulti.push(getCurrentId);
    } else {
      copyMulti.splice(findIndexofCurrentId, 1);
    }
    setMultiArray(copyMulti);
  }

  return (
    <div className="wrapper border-4 border-dotted border-red-300 h-[100vh] flex flex-col items-center">
      <div className="heading font-bold text-2xl">
        <h1>This is Accordion Element</h1>
      </div>

      <div className="accordion w-[40%]">
        <button
          className="button border-l-orange-600 bg-amber-600 hover:bg-amber-700 text-white text-xl p-2"
          onClick={() => setEnableMultiSelecition(!enableMultiSelection)}
        >
          {enableMultiSelection ? "Enabled ! " : "Disabled ! "} Multi Selection
        </button>

        <div>
          {data && data.length > 0 ? (
            data.map((dataitem) => (
              <div
                className="item border p-2 bg-amber-400 hover:bg-amber-500 cursor-auto"
                key={dataitem.id}
              >
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataitem.id)
                      : () => handleSingleSelection(dataitem.id)
                  }
                >
                  <h3 className="title font-medium flex justify-between items-center cursor-pointer">
                    {dataitem.question}
                    <span className="expand">
                      {enableMultiSelection
                        ? multiArray.includes(dataitem.id)
                          ? "-"
                          : "+"
                        : selected === dataitem.id
                        ? "-"
                        : "+"}
                    </span>
                  </h3>
                </div>

                {/* Conditional rendering for answers */}
                {enableMultiSelection
                  ? multiArray.includes(dataitem.id) && (
                      <div className="content h-auto flex justify-between items-start">{dataitem.answer}</div>
                    )
                  : selected === dataitem.id && (
                      <div className="content h-auto">{dataitem.answer}</div>
                    )}
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </div>
  );
}
