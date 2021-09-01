import {init} from '@lib/sql';

export async function post(req, res) {
    const {table, delid} = req.body.data;
    const {connection} = await init();
    connection.query(`UPDATE ${table} SET status = true WHERE id = ?`, [delid], (err, result) => {
        if(err) {
            console.log(err);
            res.writeHead(500);
            res.end();
            return;
        }
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });   
        res.end(JSON.stringify(result));
    });
}