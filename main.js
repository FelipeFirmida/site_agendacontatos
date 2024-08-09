const form = document.getElementById('forms');
const nomes = [];
const tel = [];

let linhas = '';

function formatarTelefone(){
    document.getElementById("tel-contato").addEventListener("input", function() {
        let tel = this.value.replace(/\D/g, ''); // Remove non-digit characters
        if (tel.length > 4) {
            tel = tel.slice(0, 4) + '-' + tel.slice(4);
        }
        this.value = tel;
    });
}

    formatarTelefone();

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('tel-contato');
    if (nomes.includes(inputNomeContato.value) ) {
        alert(`O nome ${inputNomeContato.value} já está incluído na lista de contatos`)
    }

    else if (tel.includes(inputTelContato.value) ) {
        alert(`O telefone ${inputTelContato.value} já está incluído na lista de contatos`)
    }

    else {
        nomes.push(inputNomeContato.value);
        tel.push(inputTelContato.value);

        let linha = "<tr>";
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += `</tr>`

        linhas += linha;

        inputNomeContato.value = '';
        inputTelContato.value = '';
}}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}