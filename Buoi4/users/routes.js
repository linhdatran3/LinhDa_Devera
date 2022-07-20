const express = require('express');
const router = express.Router();
//const users = require('./user-data.json');
const client = require('../database/pg');


// TODO: Update user with parameter user's id
router.put('/:id',async(req,res)=>{
  try {
    const id= req.params.id;
    const user=await client.query(`select* from users where id=${id}`)
    if(user){
      await client.query(`
        UPDATE users
        SET name='${body.name?body.name:user.name}', age='${body.age?body.age:user.age}', address='${body.address?body.address:user.address}'
        WHERE id = '${id}';
      `)
      res.send("Update complete!")
    }else{
      res.send("Update failure!")
    }
  } catch (error) {
    res.send(error);
  }
 
  
})
// TODO: Delete user with parameter user's id
router.delete('/:id',async(req,res)=>{
  try {
    const id=req.params.id;
    const user=await client.query(`select* from users where id=${id}`)
    if(user){
      await client.query(`
        DELETE FROM users
        WHERE id='${id}';
      `)
      res.send("Delete complete!")
    }else{
      res.send("Delete failure!")
    }
  } catch (error) {
    res.send(error);
  }
})

router.post('', async (req, res) => {
  const body = req.body;
  const result = await client.query(`
    INSERT INTO users(name, age, address)
    VALUES ('${body.name}', ${body.age}, '${body.address}')
  `);
  res.send(result);
});

router.get('', async(req, res) => {
  const result = await client.query(`
    SELECT *
    FROM users
  `);
  res.send(result.rows);
});
module.exports = router;