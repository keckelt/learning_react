import React from 'react';
import {Message} from './Message';

// react component:
export class App extends React.Component {
  render() {
    return (
      <div>
        <Message headline="Hi React" text='Hej'/>
        <Message headline="Bye React" text='Hej då'/>
      </div>
      );
  }
}
