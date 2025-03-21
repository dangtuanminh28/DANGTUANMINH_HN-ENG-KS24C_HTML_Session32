let inputTask = document.getElementById('inputTask');
let addBtn = document.getElementById('add');
let list = document.getElementById('myUL');
addBtn.onclick = function () {
    let taskContent = inputTask.value;
    if (taskContent === "") {
        alert("Nhiệm vụ không được để trống");
        return;
    }
    list.innerHTML += `<li>${taskContent} <button class="del">X</button></li>`
    deleteTask();
}
function deleteTask() {
    let deleteBtn = document.querySelectorAll('.del');
    deleteBtn.forEach(button => {
        button.onclick = function () {
            let confirmDelete = confirm(`Bạn có chắc muốn xóa không?`);
            if (confirmDelete) {
                button.parentElement.remove()
            }
        };
    });
}

deleteTask();