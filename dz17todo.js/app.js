const input = document.getElementById("textInput")
const addBtn = document.getElementById("addTaskBtn")
const list = document.getElementById("taskList")

addBtn.addEventListener("click", () => {
    let text = input.value.trim();
    if (text === "") return;
        let li = document.createElement("li");
        li.className = "task_item";

    li.innerHTML = `
        <span class="task-text">${text}</span>
        <div class="task-buttons">
        <button class="important-btn">Важное</button>
        <button class="delete-btn">Удалить</button>
        </div>
      `

        list.appendChild(li)
        input.value = ""
    })

    list.addEventListener("click", (event) => {
        let target = event.target

        if (target.classList.contains("delete-btn")) {
            target.closest(".task_item").remove()
      }

        if (target.classList.contains("important-btn")) {
            target.closest(".task_item").classList.toggle("important")
      }
    })