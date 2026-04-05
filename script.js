let form = document.getElementById('formulario');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let valido = true;

    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let peso = document.getElementById('peso').value;
    let tipoSanguineo = document.getElementById('tipo_sanguineo').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let estado = document.getElementById('estado').value;
    let cidade = document.getElementById('cidade').value;

    
   if (nome === '') {
        alert('Por favor, preencha o campo nome.');
        valido = false;
    }

    if (idade === '' || idade < 16) {
        alert('Por favor, preencha o campo idade e certifique-se de que tenha ao menos 16 anos.');
        valido = false;
    }

    if (peso === '' || peso < 50) {
        alert('Por favor, preencha o campo peso e certifique-se de que tenha ao menos 50 kg.');
        valido = false;
    }

    if (tipoSanguineo === '') {
        alert('Por favor, selecione um tipo sanguíneo.');
        valido = false;
    }

    if (email === ''|| !email.includes('@') || !email.includes('.') || email.length < 5) {
        alert('Por favor, preencha o campo email.');
        valido = false;
    }

    if (telefone === '' || telefone.length < 10) {
        alert('Por favor, preencha o campo telefone com um número válido.');
        valido = false;
    }

    if (estado === '') {
        alert('Por favor, selecione um estado.');
        valido = false;
    }

    if (cidade === '' || cidade.length < 3) {
        alert('Por favor, preencha o campo cidade.');
        valido = false;
    }  

    if (valido) {

        alert('Formulário enviado com sucesso!');

         let resultado = document.getElementById('resultado');

        resultado.innerHTML = `

        Dados enviados: <br>
        Nome: ${nome} <br>
        Idade: ${idade} <br>
        Peso: ${peso} kg <br>
        Tipo Sanguíneo: ${tipoSanguineo} <br>
        Email: ${email} <br>
        Telefone: ${telefone} <br>
        Estado: ${estado} <br>
        Cidade: ${cidade} <br>
        `;

        form.reset();
    }

});

