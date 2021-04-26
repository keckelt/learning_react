import React from 'react';
import { Headline } from "./core-components/Headline";
import { Paragraph } from "./core-components/Paragraph";

export class Message extends React.Component {
  render() {
    return (
      <div>
        <Headline headline={this.props.headline} />
        <Paragraph text={this.props.text} />
      </div>
    );
  }
}