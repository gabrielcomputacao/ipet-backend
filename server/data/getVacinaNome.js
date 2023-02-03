const database = require("../infra/database/databaseMysql")

exports.getVacinaNome = async function(){
const dataB = await database();
    try {
        
        
        const sql = "SELECT *from vacina";
        
        const [rows] = await dataB.query(sql);
        /* await dataB.end(); */
        return rows;

    } catch (error) {
        console.log(error)
    }

}