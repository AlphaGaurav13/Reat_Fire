function customRender(reactElement, container) {
  /*const domElement =document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.childeren;
  domElement.setAttribute('href', reactElement.props.href);
  domElement.setAttribute('target', reactElement.props.target);
  */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.childeren;

  //now here we will use the loop so that we can multiple props as much required
  for(const prop in reactElement.props) {
    if(prop === 'childern') continue;
    domElement.setAttribute(prop, reactElement.props[prop]);

  }

  container.appendChild(domElement);
}
const reactElement = {
  type: 'a',
  props: {
    href : 'https://google.com',
    target: '_blank'
  },
  childeren: 'Google'
}

const mainContainer = document.querySelector('#root')

//Here we are injecting the elements and injecting it into the maincontainer
customRender(reactElement, mainContainer)