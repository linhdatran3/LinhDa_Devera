const express = require('express');
const router = express.Router();
const fs = require('fs');
const outputs = require('./output.json');
router.post('/', (req, res) => {
    const body = req.body;
    console.log("TYPE BODY: ", typeof body)
    console.log("CURRENT DIR: ", __dirname);
    // fs.writeFile(`${__dirname}/output.json`, JSON.stringify(body), err => {
    fs.writeFile(`${__dirname}/output.json`, JSON.stringify(body), err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("WRITE FIEL SUCCESS!")
        // file written successfully
    });
});


//Create api to delete data having “country” filter.
router.delete('/:country',async(req,res)=>{
    const country=req.params.country
    let temp=[];
    outputs.filter((output,index)=>{
        if(output.country == country){
            outputs.slice(index,1)
            temp.push(index.toString())
        }
    })
    if(temp.length>0)
        res.send(`Deleted the element with index:${temp}`);         
    else
        res.send("Delete failure")

})
//Create a cache to avoid reading the file “output.json" multiple times.
{

}

//Apis from (3) supports pagination request. these two parameters pageNumber pageSize will be appended to the request url. ex: …?pageNumber=2&pageSize=10
router.get('/filters',(req,res)=>{
    // const pageNumber=req.query.pageNumber;
    // const pageSize=req.query.pageSize;
    const {pageNumber,pageSize}=req.query;
    const n = parseInt(pageNumber);
    const s = parseInt(pageSize);
    res.send(`Filter: ${n} and ${s}`);
})

//Create api to get the data with “country” filter parameter.
router.get('/:country',async(req,res)=>{
    const country=req.params.country
    // console.log(country)
    outputs.filter(output=>{
        if(output.country === country){
            res.send(output)
        }
    })
    res.send("No people")
})

//Create api to get all data from “output.json”.
router.get('/', (req, res) => {
    res.send(outputs);
})

module.exports = router;