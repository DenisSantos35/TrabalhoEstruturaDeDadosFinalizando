 if(novaPalavra === null){
        console.log('Erro...Digite um nome valido')
        tratamentoNome()
    }else if(nome === nome[0].repeat(nome.length)){1
        console.log('Erro... Digite um nome valido');
        tratamentoNome();

    }else{
        let nova = novaPalavra.join('');        
        if(nova === auxNome){
            return nome;            
        }else if(nova !== nome){
            console.log('Erro...Digite um nome valido')
            tratamentoNome();
        }
        
    }