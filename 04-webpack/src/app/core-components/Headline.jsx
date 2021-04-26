import React from 'react';

import './Headline.css'
export class Headline extends React.Component {
  render() {
    return (
      // use className instead of class! class is a reserved JS keyword
      <h1 className="headline">{this.props.headline}</h1>
    );
  }
}