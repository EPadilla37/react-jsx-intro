function App() {
    const people = [
      { name: 'John', age: 25, hobbies: ['Reading', 'Cooking'] },
      { name: 'Jane', age: 17, hobbies: ['Painting', 'Swimming'] },
      { name: 'Mike', age: 30, hobbies: ['Gaming', 'Traveling'] }
    ];
  
    const displayPeople = people.map((person, index) => (
      <Person
        key={index}
        name={person.name}
        age={person.age}
        hobbies={person.hobbies}
      />
    ));
  
    return <div>{displayPeople}</div>;
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
  