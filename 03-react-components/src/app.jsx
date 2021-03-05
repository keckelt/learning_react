'use strict';

const domTarget = document.querySelector('#react-app');


// react component:
class App extends React.Component {
  render() {
    return <p>My class-based react component.</p>
  }
}


ReactDOM.render(
  <App />,
  domTarget
)