import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

const average = data =>
  Math.round(
    data.reduce(function(a, b) {
      return a + b;
    }) / data.length
  );

const Chart = ({ data, color }) => {
  return (
    <div>
      <Sparklines height={120} width={300} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <p>{average(data)}</p>
    </div>
  );
};

export default Chart;
