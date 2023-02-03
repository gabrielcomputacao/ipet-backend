
const database = require('../infra/database/databaseMysql')

exports.getProprietario = async function(stateUser){
const dataB = await database();
    try {

        
        const sql = "SELECT nome from proprietario WHERE id_user= ?";
        let values = [stateUser];
        const [rows] = await dataB.query(sql, values);
        /* await dataB.end(); */
        return rows;

    } catch (error) {
        console.log(error)
    }finally{
        dataB.release();
    }
}
