const reactElement = React.createElement(
  'p', //create a paragraph
  {},
  `I'm a react element!`
);


ReactDOM.render(
  reactElement,
  document.querySelector('#react-app')
)