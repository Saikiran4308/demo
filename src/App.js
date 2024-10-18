import "./App.css";
import Display from "./Display";

function App() {
  const students = [
    {
      name: "Hari",
      age: 16,
      class: "10th Grade",
      grade: "A",
    },
    {
      name: "Krish",
      age: 15,
      class: "9th Grade",
      grade: "B+",
    },
    {
      name: "Jack",
      age: 17,
      class: "11th Grade",
      grade: "A-",
    },
  ];

  return (
    <div>
      {students.map((student, index) => (
        <Display
          key={index}
          name={student.name}
          age={student.age}
          classLevel={student.class} // 'class' is a reserved word in JS, so we rename it as classLevel
          grade={student.grade}
        />
      ))}
    </div>
  );
}

export default App;
