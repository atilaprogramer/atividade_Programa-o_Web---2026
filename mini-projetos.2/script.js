const input = document.getElementById('taskInput')
const lista = document.getElementById('taskList')

function addTask(){
    const texto = input.value;

    if(texto.trim() === ''){
        alert("Digite uma tarefa");
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");

    span.textContent = texto;

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";

    li.appendChild(span)
    li.appendChild(btnEditar)
    li.appendChild(btnExcluir)

    lista.appendChild(li)

    input.value = ''

    btnExcluir.addEventListener('click', function(){
        lista.removeChild(li)
    })

    btnEditar.addEventListener('click', function(){
        const novoTexto = prompt("Edite sua tarefa", span.textContent)

        if(novoTexto !== null && novoTexto.trim() !== ""){
            span.textContent = novoTexto
        }
        else{
            alert("Adicione texto quando for editar")
        }
    })

}