import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = ({ data, color }) => {
  return (
    <div>
      <Sparklines height={120} width={300} data={data}>
        <SparklinesLine color={color} />
      </Sparklines>
    </div>
  );
};

export default Chart;
