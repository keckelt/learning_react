import React from 'react';

import './Paragraph.css';

export function Paragraph (props) {
  const myStyle={
    color: 'green'
  };
  return <p className="paragraph" style={myStyle} >{props.text} World!</p>;
}