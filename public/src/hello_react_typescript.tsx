/// <reference path="./typings/tsd.d.ts" />

import React = require('react');
import ReactDom = require('react-dom');
import marked = require('marked');

module HelloReact {
  var data: {author: string; text: string; id: number}[]= [
    {author: "Pete Hunt", text: "This is one comment", id: 0},
    {author: "Jordan Walke", text: "This is *another* comment", id: 1}
  ];

  class Comment extends React.Component<any, {}> {
    key: number;
    rawMarkup() {
      var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
      return { __html: rawMarkup };
    };

    render() {
      return (
        <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          <span dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
      );
    };
  };

  interface CommentListProps extends React.Props<{author: string; text: string; id: number}[]> {
    data: {author: string; text: string; id: number}[];
  }

  class CommentList extends React.Component<CommentListProps, {}> {
    commentNodes = this.props.data.map(function (comment) {
        return (
          <Comment author={comment.author} key={comment.id}>
             {comment.text}
          </Comment>
        );
      });
    render() {
      return (
        <div className="commentList">
          {this.commentNodes}
        </div>
      );
    }
  };

  class CommentForm extends React.Component<{}, {}> {
    render() {
      return <div className="commentForm"> Hello, world! I am a CommentForm. </div>;
    }
  };

  interface CommentBoxProps extends React.Props<{author: string; text: string; id: number}[]> {
    data: {author: string; text: string; id: number}[];
  }

  export class CommentBox extends React.Component<CommentBoxProps, {}> {
    render() {
      return (
        <div className="commentBox">
          <h1>Comments</h1>
          <CommentList data={this.props.data}/>
          <CommentForm />
        </div>);
    }
  };
  
  export function render(): void {
    ReactDom.render(
      <CommentBox data={data}/>,
      document.getElementById('content')
    );
  };
}

HelloReact.render();