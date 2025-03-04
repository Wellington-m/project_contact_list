const registerForm = document.getElementById("registerForm");
const contacts = [];

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    registerContact();
});

const registerContact = () => {
    const inputName = document.getElementById("name");
    const inputTelefone = document.getElementById("telefone");

    if (isNaN(inputTelefone.value)) {
        return alert("Digite um telefone válido");
    }

    let contact = `<tr>`;
    contact += `<td>${inputName.value}</td>`;
    contact += `<td>${inputTelefone.value}</td>`;
    contact += `</tr>`;

    const contentForm = document.querySelector("tbody");
    contentForm.innerHTML += contact;
};
