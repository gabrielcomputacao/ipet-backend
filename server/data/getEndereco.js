const database = require("../infra/database/poolDatabase")


exports.getEnderecoId = async function(idend){
const dataB = await database();
    try {

        
        const sql = "SELECT id_endereco from endereco WHERE id_userend=$1";
        let values = [idend.idusuario]
        const dados = await dataB.query(sql,values) ;
        await dataB.end();
        return dados;

    } catch (error) {
        console.log(error)
    }
}