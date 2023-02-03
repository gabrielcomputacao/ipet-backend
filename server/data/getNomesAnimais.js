
const database = require("../infra/database/databaseMysql")

exports.getNomeAnimal = async function (iduser){
const dataB = await database();
    try {

        
        const sql = "SELECT *FROM animal WHERE cod_usuario = ?";
        let values = [iduser] ;
        const [rows] = await dataB.query(sql,values);
        /* await dataB.end(); */
        return rows;
        
    } catch (error) {
        console.log(error)
    }finally{
        dataB.release();
    }



}




