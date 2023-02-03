
const database = require("../infra/database/databaseMysql")


exports.getAnimais = async function(iduser){

    try {
        const dataB = await database();
        const sql = "SELECT *from animal WHERE cod_usuario = ?";
        const values = [iduser]
        const [rows] = await dataB.query(sql,values);

        /* await dataB.end(); */

        return rows;
        
    } catch (error) {
        console.log(error)
    }finally{
        dataB.release();
    }


}


