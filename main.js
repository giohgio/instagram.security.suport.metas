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
    const response = await fetch('https://servidor-rj58.onrender/register', {
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
