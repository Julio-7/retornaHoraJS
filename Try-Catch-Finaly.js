// try {
//     console.log('Abri um arquivo')
//     console.log('Manipulei o arquivo e gerou erro')
//     console.log('Fechei o arquivo')
// } catch (e) {
//     console.log('Tratando o erro')
// } finally{
//     console.log('FINALLY: Sempre sou executado')
// }


function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de Date')
    }

    if(!data){
        data = new Date()
    }

    return data.toLocaleTimeString('pt-Br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try{
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(data)
    console.log(hora)
}catch(e){
    console.log(e)
}finally{
    console.log('Tenha um bom dia')
}

