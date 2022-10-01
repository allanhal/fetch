function retornoPromessa1(response) {
  return response.json();
}
function retornoPromessa2(body) {
  console.log(body);
}
let promessa1 = fetch("https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa"); //promessa1
console.log(promessa1);
let promessa2 = promessa1.then(retornoPromessa1); //promessa2
console.log(promessa2);
promessa2.then(retornoPromessa2);

fetch("https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa")
  .then(function (response) {
    //magica => transforma o body da response em uma nova promessa
    return response.json();
  })
  .then(function (body) {
    console.log(body);
  });
