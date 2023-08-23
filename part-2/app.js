// app.js
function App() {
    return (
      <div>
        <FirstComponent />
        <NamedComponent name="John" />
        <Tweet
          username="user1"
          name="User One"
          date="August 20, 2023"
          message="Hello, this is a tweet!"
        />
        <Tweet
          username="user2"
          name="User Two"
          date="August 21, 2023"
          message="Just testing the tweet component."
        />
        <Tweet
          username="user3"
          name="User Three"
          date="August 22, 2023"
          message="React is awesome!"
        />
      </div>
    );
  }
  
  // Render the App component
  ReactDOM.render(<App />, document.getElementById('root'));
  