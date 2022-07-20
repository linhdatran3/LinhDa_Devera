const express = require('express');
const router = express.Router();
const users = require('./user-data.json');

router.get('/', (req, res) => {
    res.send(users);
});

router.get('/filters', (req, res) => {
    const query = req.query;
    const name = query.name;
    const age = Number(query.age);
    console.log(typeof age);
    const resUser = users.filter(e => {
        if (e.name === name && e.age === age) {
            return true;
        } else {
            return false;
        }

    })
    res.send(resUser);
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    console.log("ID: ", id);
    // 1. Cach 1 dung filter
    // const resUser = users.filter(e => {
    //     if (e.id === id) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // })
    // 2. Cach 2 dung vong lap for
    let resUser = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            resUser.push(users[i]);
            break;
        }
    }
    res.send(resUser);
})

router.post('', (req, res) => {
    const body = req.body;
    res.send(body);
})


router.get('/about', (req, res) => {
    res.send('Users about')
});

module.exports = router;