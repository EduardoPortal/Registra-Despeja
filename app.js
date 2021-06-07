class Despesa {
    constructor(ano, mes, dia , tipo , descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i]=='' || this[i] == null){
                return false
            }
        }
        return true
    }
}

class Bd{

    constructor(){
        let id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id', 0)
        }
    }

    getProximoId(){
        let proximoId = localStorage.getItem('id') //null
       return parseInt(proximoId) + 1
        }

    gravar(d){
        
       let id = this.getProximoId()

       localStorage.setItem(id, JSON.stringify(d))

        localStorage.setItem('id', id)
    }
}

let bd = new Bd()

function cadastrarDespesa(){

    let ano = document.getElementById('ano')
    let mes =  document.getElementById('mes')
    let dia =  document.getElementById('dia')
    let tipo =  document.getElementById('tipo')
    let descricao =  document.getElementById('descricao')
    let valor =  document.getElementById('valor')


    let despesa = new Despesa(ano.value, mes.value ,dia.value, tipo.value, descricao.value, valor.value)

    if(despesa.validarDados()){
    bd.gravar(despesa)

    document.getElementById('modal_titulo').innerHTML = 'Registro com Sucesso'
    document.getElementById('modal_titulo_div').className = 'modal-header text-success'
    document.getElementById('modal_conteudo').innerHTML = 'Despeja cadastrada com legalidade'
    document.getElementById('modal_botao').innerHTML=' voltar'
    document.getElementById('modal_botao').className=' btn btn-success'
    
    //dialog de sucesso
    $('#modalRegistraDespesa').modal('show')
    }else{

        document.getElementById('modal_titulo').innerHTML = 'Erro na inclusão'
        document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
        document.getElementById('modal_conteudo').innerHTML = 'Despeja não cadastrada'
        document.getElementById('modal_botao').innerHTML=' voltar e corrigir'
        document.getElementById('modal_botao').className=' btn btn-danger'

    //dialog fracasso
        $('#modalRegistraDespesa').modal('show') 
    }
}