/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react-dom/react-dom.d.ts" />

import React = __React;
import ReactDom = __ReactDom;

interface CommentBoxProps extends React.Props<any> {
  name: string;
}

class CommentBox extends React.Component<CommentBoxProps, {}> {
  output = 'Hello, world! I am ' + this.props.name + '.';
  render() {
    return <div className="commentBox">{this.output}</div>;
  }
};

ReactDom.render(
  <CommentBox name='John'/>,
  document.getElementById('content')
);