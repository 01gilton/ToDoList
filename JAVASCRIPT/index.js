const campoEntrada = document.getElementById("campoEntrada");
const formTarefa = document.getElementById("formTarefa");
const listaTarefas = document.getElementById("listaTarefas");




function novaTarefa(){
  const nomeTarefa = campoEntrada.value.trim();

  if(nomeTarefa === ""){
    campoEntrada.classList.add("input-erro");
    setTimeout(() => campoEntrada.classList.remove("input-erro"),1500);
    return;
  }

  const itemTarefa = document.createElement("li");
  const span = document.createElement("span");
  const btnExcluir = document.createElement("button");

  span.innerText = nomeTarefa;
  btnExcluir.innerHTML = "<i class = 'bi bi-trash' > </i>";
  btnExcluir.setAttribute("arial-label", "Excluir tarefa");

  span.onclick = (evento) => {
    evento.target.classList.toggle("concluida");
  };

  btnExcluir.onclick = () => {
    listaTarefas.removeChild(itemTarefa);
  };

  itemTarefa.appendChild(span);
  itemTarefa.appendChild(btnExcluir);
  listaTarefas.appendChild(itemTarefa);
  campoEntrada.value = ""; // limpa o campo de entrada

}
formTarefa.addEventListener("submit", (evento) => {
  evento.preventDefault();
  novaTarefa();
});

