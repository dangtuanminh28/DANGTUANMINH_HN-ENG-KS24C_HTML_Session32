function addSubject() {
    let input=document.getElementById("subjectInput");
    let subjectName=input.value.trim();

    if (subjectName==="") {
        alert("Tên môn học không được để trống!");
        return;
    }

    let list=document.getElementById("subjectList");
    let newItem=document.createElement("li");
    newItem.textContent=subjectName;
    list.appendChild(newItem);
    input.value="";
}