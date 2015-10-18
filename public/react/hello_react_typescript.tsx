/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react-dom/react-dom.d.ts" />

import React = __React;
import ReactDom = __ReactDom;

class CommentList extends React.Component<{}, {}> {
  render() {
    return <div className="commentList"> Hello, world! I am a CommentList. </div>;
  }
};

class CommentForm extends React.Component<{}, {}> {
  render() {
    return <div className="commentForm"> Hello, world! I am a CommentForm. </div>;
  }
};

interface CommentBoxProps extends React.Props<any> {
  name: string;
}

class CommentBox extends React.Component<CommentBoxProps, {}> {
  output = 'Hello, world! I am ' + this.props.name + '.';
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
        {this.output}
      </div>);
  }
};

ReactDom.render(
  <CommentBox name='John'/>,
  document.getElementById('content')
);