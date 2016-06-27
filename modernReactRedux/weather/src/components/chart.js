import _ from 'lodash';
import React from 'react';
// importing sparklines component module
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default (props) => { // eslint-disable-line
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
};
