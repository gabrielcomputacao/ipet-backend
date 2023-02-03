const database = require("../infra/database/databaseMysql")


exports.getEnd = async function(endereco){

    const dataB =  await database();
    try {
        
        const sql = "SELECT id_endereco from endereco WHERE rua=? AND cep=? AND numero=?";
        let values = [endereco.rua , endereco.cep , endereco.numero];
        const [rows] = await dataB.query(sql , values);
        /* await dataB.end(); */

        console.log(rows)

        return rows;

    } catch (error) {
         console.log(error)
    }finally{
        dataB.release();
    }
}