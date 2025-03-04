const registerForm = document.getElementById("registerForm");
const contacts = [];

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputName = document.getElementById("name");
    const inputTelefone = document.getElementById("telefone");

    let contact = `<tr>`;
    contact += `<td>${inputName.value}</td>`;
    contact += `<td>${inputTelefone.value}</td>`;
    contact += `</tr>`;

    const contentForm = document.querySelector("tbody");
    contentForm.innerHTML += contact;
});
