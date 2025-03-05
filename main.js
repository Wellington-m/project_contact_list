const registerForm = document.getElementById("registerForm");
const contacts = [];

let total = 0;

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    registerContact();
});

const registerContact = () => {
    const inputName = document.getElementById("name");
    const inputTelefone = document.getElementById("telefone");

    if (!isValidTelefone(inputTelefone.value)) {
        return alert("Digite um telefone válido");
    }

    let contact = `<tr>`;
    contact += `<td>${inputName.value}</td>`;
    contact += `<td>${inputTelefone.value}</td>`;
    contact += `</tr>`;

    const contentForm = document.querySelector("tbody");
    contentForm.innerHTML += contact;

    inputName.value = "";
    inputTelefone.value = "";
    updateTotalContacts();
};

const isValidTelefone = (telefone) => {
    const telefoneLength = telefone.length;

    return !isNaN(telefone) && telefoneLength === 11;
};

const updateTotalContacts = () => {
    const contactsTotal = document.getElementById("contactsTotal");

    total += 1;

    contactsTotal.innerHTML = total;
};
