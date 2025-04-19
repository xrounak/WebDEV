
const ToDos = document.getElementsByClassName("cardBox");



document.getElementsByTagName("button")[0].addEventListener("click",
   function () {
      const task = document.getElementsByTagName("input")[0];
      const taskText = task.value;
      console.log(taskText);
      if (taskText === "") {
         alert("Please enter a task");
         return;
      }
      const li = document.createElement("li");
      li.innerText = taskText;
      li.className = "card";
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.className = "deleteButton";
      deleteButton.addEventListener("click", function () {
         li.remove();
      });
      li.appendChild(deleteButton);
      document.getElementsByTagName("ul")[0].appendChild(
        li
      );
      task.value = "";
   }
)