import React from "react";

function ApiCallData(props) {
  return props.stockData.map((items) => (
    <div key={items.mic}>
      <h3>{items.longName}</h3>
      <h4>This acronym is: {items.mic}</h4>
    </div>
  ));
}

export default ApiCallData;
