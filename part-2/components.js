// components.js
function FirstComponent() {
    return <h1>My very first component</h1>;
  }
  
  function NamedComponent(props) {
    return <p>My name is {props.name}</p>;
  }
  
  function Tweet(props) {
    return (
      <div>
        <p>Username: {props.username}</p>
        <p>Name: {props.name}</p>
        <p>Date: {props.date}</p>
        <p>Message: {props.message}</p>
      </div>
    );
  }
  