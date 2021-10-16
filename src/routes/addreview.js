import {init} from '@lib/sql';

export async function post(req, res) {
    const {user, text} = req.body.data;
    const {connection} = await init();
    connection.query(`INSERT INTO reviews (text, user) VALUES (?, ?)`, [text, user], (err, result) => {
        if(err) {
            console.log('Ошибка записи случился');
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