
const database = require("../infra/database/databaseMysql")


exports.getListaVacina = async function (iduser){
const dataB = await database();
    try {
        
        
        const sql = "SELECT *FROM aplicacao WHERE iduser = ?";
        const values = [iduser]
        const [rows] = await dataB.query(sql,values);
        /* await dataB.end(); */

        return rows;

    } catch (error) {
        console.log(error)
    }
}
