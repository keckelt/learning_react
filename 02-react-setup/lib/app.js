// react element:
const reactElement = React.createElement('p', //create a paragraph
{}, `I'm a react element!`); // react component:

const jsxElement = /*#__PURE__*/React.createElement("p", {
  id: "jsx-elem"
}, "I'm a React component."); // will be translated to a create element

ReactDOM.render(jsxElement, // use reactElement or jsxElement
document.querySelector('#react-app'));