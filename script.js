class Produto {

    constructor(){
        this.id = 1;
        this.arrayProd = [];
    }

    salvar(){
       let produto = this.lerProd();

       if(this.valCampo(produto)){
           this.addProd(produto);

       };

        this.listTab();

    }

    listTab(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayProd.length; i++ ) {
            let tr = tbody.insertRow();

            let td_codigo = tr.insertCell();
            let td_descricao = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_codigo.innerText = this.arrayProd[i].codProd;
            td_descricao.innerText = this.arrayProd[i].descProd;

            td_acoes.classList.add('center');

            let imgDel = document.createElement("img");
            imgDel.src = 'img/excluir.png';
            imgDel.setAttribute("onclick", "produto.deletar("+ this.arrayProd[i].id +")");

            td_acoes.appendChild(imgDel);

            console.log(this.arrayProd);
        }
    }

    addProd(produto){
        this.arrayProd.push(produto);
        this.id++;
    }

    lerProd(){
        let produto = {}

        produto.id = this.id;
        produto.codProd = document.getElementById('codigo').value;
        produto.descProd = document.getElementById('descricao').value;

        return produto;
    }

    valCampo(produto){
        let msg = '';

        if(produto.codProd == ''){
            msg += '- Informe o código do Produto!';
        }

        if(produto.descProd == ''){
            msg += '-Informe a descrição do Produto!';
        }

        if(msg != ''){
            alert(msg);
            return false
        }

        return true;
    }

    deletar(id){

        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayProd.length; i++) {
            if(this.arrayProd[i].id == id) {
                this.arrayProd.splice(i, 1);
                tbody.deleteRow(i);
            }
        }
    }

}

var produto = new Produto();