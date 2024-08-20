// Função para redirecionar para a página home
function redirectToHome(event) {
  event.preventDefault(); // Impede o envio padrão do formulário, evitando que a página seja recarregada
  window.location.href = "home.html"; // Redireciona o usuário para a página home.html
}

// Função para aplicar a máscara de CPF
function maskCPF(input) {
  let value = input.value.replace(/\D/g, ""); // Remove todos os caracteres que não sejam números
  if (value.length <= 11) {
    // Aplica a máscara ao CPF conforme o usuário digita
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Insere o primeiro ponto após os primeiros três dígitos
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Insere o segundo ponto após os próximos três dígitos
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Insere o traço antes dos dois últimos dígitos
  }
  input.value = value; // Atualiza o valor do campo de entrada com a máscara aplicada
}

// Obtém os parâmetros da URL
const url = new URLSearchParams(window.location.search);
const cpf = url.get("CPF");

// Verifica se o cpf foi passado e, se sim, preenche o campo CPF
if (cpf) {
  document.getElementById("CPF").value = cpf;
}
