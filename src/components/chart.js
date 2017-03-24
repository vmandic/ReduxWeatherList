import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

let avg = (data) => Math.round(data.reduce((a, b) => a + b) / data.length);

export default (props) =>
  <div>
    <Sparklines height={ 60 } width={ 180 } data={ props.data }>
      <SparklinesLine color={ props.color } />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>{ avg(props.data) } { props.units }</div>
  </div>;