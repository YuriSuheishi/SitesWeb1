function editar(chave){
    localStorage.setItem('editar',chave);
    window.location.href="editar.html";
    window.close;
}

function excluir(chave){

    var r=confirm("Realmente deseja excluir esse carro")
    if(r==true){
        
    localStorage.removeItem(chave);
    localStorage.removeItem(chave + 'foto');
    localStorage.removeItem(chave + 'model');
    localStorage.removeItem(chave + 'ano');
    localStorage.removeItem(chave + 'preco');
    localStorage.removeItem(chave + 'cor');
    localStorage.removeItem(chave + 'desc');
    alert("Carro Excluido com Sucesso");
    window.location.reload();
    }

}