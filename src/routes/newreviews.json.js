import {init} from '@lib/sql';

export async function get(req, res){
    const {status} = req.query;
    const {connection} = await init();
    if(status == 'true'){
        connection.query('SELECT * FROM reviews ORDER BY orderf', function(err, rows){
            if (err) console.log(err);
            res.writeHead(200, {
              'Content-Type': 'application/json'
            });   
            res.end(JSON.stringify(rows));
          });
    }
    if(status == 'false'){
        connection.query('SELECT * FROM reviews WHERE status = true ORDER BY orderf', function(err, rows){
            if (err) console.log(err);
            res.writeHead(200, {
              'Content-Type': 'application/json'
            });   
            res.end(JSON.stringify(rows));
          });
    }
}