function retornoPromessaFetch(resposta) {
  let promessaBody = resposta.json();
  return promessaBody;
}

function retornoPromessaBody(body) {
    body.forEach(function (pessoa) {
      console.log(pessoa);
      lista.innerHTML = lista.innerHTML + "<li>" + pessoa.nome + "</li>";
    });
}

let promessa = fetch("https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa");

promessa.then(retornoPromessaFetch).then(retornoPromessaBody);
