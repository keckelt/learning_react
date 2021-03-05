'use strict';

import { Message } from './Message.js'; // react component:

class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Message, {
      headline: "Hi React",
      text: "Hej"
    }), /*#__PURE__*/React.createElement(Message, {
      headline: "Bye React",
      text: "Hej d\xE5"
    }));
  }

}

const domTarget = document.querySelector('#react-app');
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), domTarget);