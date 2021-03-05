'use strict';

const domTarget = document.querySelector('#react-app'); // react component:

class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("p", null, "My class-based react component.");
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), domTarget);