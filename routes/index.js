var express = require('express');
var router = express.Router();
const request = require("request");
const db = require("../public/model/index.js");

/* GET home page. */
router.get('/*', async function(req, res, next) {
  var informacion;
  await request('https://www.datos.gov.co/resource/gt2j-8ykr.json',(err,response,body)=>{
    if (!err){
      informacion = JSON.parse(body);
      informacion.slice(1, 2).forEach(it => {
        const insertar = {};
        Object.keys(it).forEach(k => {
          insertar[k] = it[k];
        });
        console.log(JSON.stringify(db));
        db.create(insertar).then(data => console.log('Guardado en la nueva db')).catch(err => console.log("Erro guardar en la db ", JSON.stringify(err)));
      });
      res.send('Guardado satisfactoriamente...');
    } else {
      res.send([]);
    }
  });
});

module.exports = router;
