/// <reference path="./typings/tsd.d.ts" />
/// <reference path="./custom.d.ts" />
/// <reference path='./greeter.tsx' />

import React = require('react');
import ReactDom = require('react-dom');
import greet = require('./greeter');

// Hack to tell tsc/webpack, this Detector is globally define. Both compilers
// will be happy. Put the lib js in the html then the bundle.js will look for
// it and just work.
// Hacky but working. This is the only way I can find.
declare var Detector: any;

class Scene extends React.Component<{}, {}> {
  test1:string = Detector.webgl ? 'webgl' : 'nowebgl';
  test2:string = greet('John');
  render() {
    return (
      <div className="scene">
        <h1>Comments {this.test1 + ' ' + this.test2}</h1>
      </div>);
  }
};

function render(): void {
  ReactDom.render(
    <Scene />,
    document.getElementById('content')
  );
};

render();