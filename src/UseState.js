import { useState } from "react";

const initState = {
  fname: "Petar",
  lname: "Petrovic",
};

function UseState() {
  const [person, setPerson] = useState(initState);

  const changeName = () => {
    person.fname = "Marko";
    person.lname = "Markovic";
    setPerson(person);

    // const newPerson = { ...person };
    // newPerson.fname = "Marko";
    // newPerson.lname = "Markovic";
    // setPerson(newPerson);
  };

  console.log("rendered");

  return (
    <div>
      <button onClick={changeName}>
        {person.fname} {person.lname}
      </button>
    </div>
  );
}

export default UseState;
