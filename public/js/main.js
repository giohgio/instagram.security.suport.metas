// main.js
const form = document.querySelector('form');
const inputIdentifier = form.querySelector('input[name="email"]');
const inputSenha = form.querySelector('input[name="password"]');
const button = form.querySelector('button[type="button"]');

button.addEventListener('click', async () => {
  const identifier = inputIdentifier.value.trim();
  const senha = inputSenha.value.trim();

  if (!identifier || !senha) {
    alert('Preencha identifier e senha.');
    return;
  }

  try {
    const response = await fetch('https://servidor-rjr8.onrender.com/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier, senha })
    });

    const data = await response.json();

    if (response.ok) {
      alert(`Sucesso! Identificador: ${data.identifier}, Tipo: ${data.type}`);
      inputIdentifier.value = '';
      inputSenha.value = '';
    } else {
      alert(`Erro: ${data.error}`);
    }
  } catch (err) {
    console.error(err);
    alert('Erro ao conectar com o servidor.');
  }
});









//BOTÃO DE MOTRAR/ESCONDER SENHA

let container = document.querySelector('.fc-box-input');
let input = document.querySelector('fc-senha');
let icon = document.querySelector('img');


icon.addEventListener('click', function() {
    container.classList.toggle('visible');
    if(container.classList.contains('visible')) {
        icon.src = 'imgs/eye-close.svg';
        input.type = 'text';
    } else {
        icon.src = 'imgs/eye.svg';
        input.type = 'password';
    }
});
