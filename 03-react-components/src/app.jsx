'use strict';

import {Message} from './Message.js';

// react component:
class App extends React.Component {
  render() {
    return (
      <div>
        <Message headline="Hi React" text='Hej'/>
        <Message headline="Bye React" text='Hej då'/>
      </div>
      );
  }
}


const domTarget = document.querySelector('#react-app');
ReactDOM.render(
  <App />,
  domTarget
)