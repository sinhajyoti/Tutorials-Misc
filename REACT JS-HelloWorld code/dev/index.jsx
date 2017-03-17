import React from "react";
import ReactDOM from "react-dom";
 
var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>Welcome {this.props.name}!</p>
    );
  }
});
 
ReactDOM.render(
  <div>
    <HelloWorld name="Jyoti"/>
    <HelloWorld name="Sinha"/>
    
  </div>,
  document.querySelector("#container")
);  