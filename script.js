document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = this.elements[0].value;
  const telefone = this.elements[1].value;
  const servico = this.elements[2].value;
  const data = this.elements[3].value;

  const mensagem = `Olá, meu nome é ${nome}. Gostaria de agendar um serviço: ${servico} para o dia ${data}. Meu contato: ${telefone}`;

  const url = `https://wa.me/55SEUNUMERO?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
});
