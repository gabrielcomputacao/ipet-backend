const database = require("../infra/database/databaseMysql")

exports.insertUsers = async function(user){
const dataB = await database();
    try{

        
        const sql = 'INSERT INTO usuario(nome,email,senha,tipo,idendereco) VALUES (?,?,?,?,?);';
        const values = [user.nome,user.email,user.senha,user.tipo,user.idendereco];
        const userResponse = await dataB.query(sql,values)
       /*  await dataB.end(); */

        return userResponse;
    }catch(ex){
        console.log(ex)
    }

}