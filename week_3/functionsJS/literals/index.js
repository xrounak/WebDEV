const users = [
    { name: "Rounak", age: 20 },
    { name: "Neha", age: 22 },
    {name: "Ravi", age: 23 },
    { name: "Riya", age: 24 },
    { name: "Rohit", age: 25 },
  ];

  users.forEach((user) => {
    const userHtlm = document.createElement("li");
    userHtlm.innerText = `Name = ${user.name}, Age = ${user.age}`
    document.getElementsByTagName("ul")[0].appendChild(userHtlm);
  }
)

  