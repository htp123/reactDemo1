import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
/* var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
ReactDOM.render(element, document.getElementById('root')); */
/*  function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
  }  */
/*   function Clock(props) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }  */
   class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>现在时间 {this.props.date.toLocaleTimeString()}.</h2>
          <p data-myattribute = "somevalue">这是一个很不错的 JavaScript 库!</p>
        </div>
      );
    }
  }
   
  function tick() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('root')
    );
  }
   
setInterval(tick, 1000);   
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
