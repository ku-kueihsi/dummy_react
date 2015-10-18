/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react-dom/react-dom.d.ts" />

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
