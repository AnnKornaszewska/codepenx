const ReactDOM = {
  render: function(comp, elem) { 
    elem.innerHTML = comp;
  }
}

const App = () => {
  return '<h1>Hello world</h1>';
}

ReactDOM.render(App(), document.querySelector('#app'));