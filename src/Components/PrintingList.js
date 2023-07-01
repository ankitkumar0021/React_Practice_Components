import { useState } from "react";

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 },
];

export default function PrintingList() {
  const [Name, setName] = useState(users);
  return (
    <>
      <h3>User names</h3>
      {Name.map((user) => (
        <h1>{user.name}</h1>
      ))}
      ;
    </>
  );
}
