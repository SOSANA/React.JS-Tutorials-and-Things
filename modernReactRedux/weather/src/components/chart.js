import React, { Component } from 'react';
// importing sparklines component module
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  );
};
