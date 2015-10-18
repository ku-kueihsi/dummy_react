/// <reference path="./typings/react/react.d.ts" />
/// <reference path="./typings/react-dom/react-dom.d.ts" />

// import React = __React;
// 
// interface HelloWorldProps extends React.Props<any> {
//   name: string;
// }
// 
// class HelloMessage extends React.Component<HelloWorldProps, {}> {
//   render() {
//     return <div>Hello {this.props.name}</div>;
//   }
// }
// 
// React.Dom.render(<HelloMessage name="John" />, document.getElementById('example'));
// tutorial1.js
import React = __React;
import ReactDom = __ReactDom;

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

ReactDom.render(
  <CommentBox />,
  document.getElementById('content')
);
