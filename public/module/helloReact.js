function HelloMessage(props) {
    return <h1>Hello {props.name}!</h1>; // 使用props获取属性
}
 
const element = <HelloMessage name="Runoob"/>;
 
ReactDOM.render(
    element,
    document.getElementById('example')
);

/* //定义组件
function HelloMessage(props) {
    return <h1>Hello World!</h1>;
}
 
const element = <HelloMessage />; // 用户自定义组件 */
 
ReactDOM.render(
    element,
    document.getElementById('example')
);
/* var arr = [
    <h1>菜鸟教程</h1>,
    <h2>学的不仅是技术，更是梦想！</h2>,
  ];
  ReactDOM.render(
    <div>{arr}</div>,
    document.getElementById('example')
  ); */
/* ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById("example")
);  */

// export default helloReact;