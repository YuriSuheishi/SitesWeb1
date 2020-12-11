function validar(){
    
    const marca = document.getElementById('marca');
    const model = document.getElementById('model');
    const ano = document.getElementById('ano');
    const preco = document.getElementById('preco');
    const cor = document.getElementById('cor');
    const desc = document.getElementById('descricao');

    console.log(ano.value);
    if(marca.value == " "){
        alert("Selecione uma Marca");
        return false;       
    }
    else if(model.value.length<2){
        alert("Modelo Inválido");
        return false;       
    }
    else if(ano.value>2020){
        alert("Ano Inválido");
        return false;       
    }
    else if(ano.value<1900){
        alert("Ano Inválido");
        return false;       
    }
    else if(preco.value>100000000){
        alert("Preço Inválido");
        return false;       
    }
    else if(preco.value<1){
        alert("Preço Inválido");
        return false;       
    }
    else if(cor.value == " "){
        alert("Selecione uma Cor");
        return false;       
    }
    else if(desc.value == ""){
        alert("Descrição é Obrigatória");
        return false;       
    }
    else{
        return true;
    }

}




/*
const masks = {
    model (value){
        return value
            .replace(/0/,'1')
        
    }
}


document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js 

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})
*/

 
  /* mascara
  (function() {
    // #maskMoney
    VMasker(document.getElementById("default")).maskMoney();
    VMasker(document.getElementById("defaultValues")).maskMoney();
    VMasker(document.getElementById("zeroCents")).maskMoney({zeroCents: true});
    VMasker(document.getElementById("unit")).maskMoney({unit: 'R$'});
    VMasker(document.getElementById("suffixUnit")).maskMoney({suffixUnit: 'R$'});
    VMasker(document.getElementById("delimiter")).maskMoney({delimiter: ','});
    VMasker(document.getElementById("separator")).maskMoney({separator: '.'});
    VMasker(document.getElementById("showSignal")).maskMoney({showSignal: true});

    // #maskNumber
    VMasker(document.getElementById("numbers")).maskNumber();

    // #maskPattern
    VMasker(document.getElementById("phone")).maskPattern('(99) 9999-9999');
    VMasker(document.getElementById("phoneValues")).maskPattern('(99) 9999-9999');
    VMasker(document.getElementById("leadingPlus")).maskPattern('+1 (999) 999-9999');
    VMasker(document.getElementById("date")).maskPattern('99/99/9999');
    VMasker(document.getElementById("doc")).maskPattern('999.999.999-99');
    VMasker(document.getElementById("carPlate")).maskPattern('AAA-9999');
    VMasker(document.getElementById("model")).maskPattern('SS.SS.SSSSS.S.S.SSSSSS');
    
    
    VMasker(document.getElementById("marca")).maskPattern('SS.SS.SSSSS.S.S.SSSSSS');
    VMasker(document.getElementById("model")).maskPattern('SS.SS.SSSSS.S.S.SSSSSS');
    VMasker(document.getElementById("ano")).maskPattern('2020');
    VMasker(document.getElementById("preco")).maskMoney({delimiter: '100000000,1'});  
    VMasker(document.getElementById("foto")).maskPattern('SS.SS.SSSSS.S.S.SSSSSS');
    VMasker(document.getElementById("cor")).maskPattern('SS.SS.SSSSS.S.S.SSSSSS');
    VMasker(document.getElementById("descricao")).maskPattern('SS.SS.SSSSS.S.S.SSSSSS');
    
  })();
  */

  /*
    const marca = document.getElementById('marca')
    const model = document.getElementById('model')
    const ano = document.getElementById('ano')
    const preco = document.getElementById('preco')
    const foto = document.getElementById('foto')
    const cor = document.getElementById('cor')
    const desc = document.getElementById('descricao')

    form.addEventListener('submit', (e) =>{
      let messages= []
      if(marca.value == '--Selecione--'){
        alert('Necessário selecionar uma marca');
        return false;

      }
      e.preventDefault()
    })

    */