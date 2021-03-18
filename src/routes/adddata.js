import * as path from 'path';
import * as fs from 'fs';
import {init} from '@lib/sql';

const DATE_RE = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;

export async function post(req, res) {
    const date = new Date().toISOString().match(DATE_RE).slice(1).join('-');
    const file = path.join(process.cwd(), 'static/uploads', `${date}.jpg`);
    const url = `/uploads/${date}.jpg`;
    const {cat} = req.query;
    req.pipe(fs.createWriteStream(file)).once('finish', async () => {
        const {connection} = await init();
        connection.query('INSERT INTO posts (image, category) VALUES (?, ?)', [url, cat], function(err, rows){
            if(err) {
              console.log(err);
              res.writeHead(500);
              res.end();
              return;
            }
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });   
            res.end(JSON.stringify({rows}));
        });
    });
}

export async function put(req, res) {
    const {id} = req.query;
    const {title, subtitle, text, customfield} = req.body.data;
    const {connection} = await init();
    connection.query(`UPDATE posts SET title = ?, subtitle = ?, text = ?, customfield = ? WHERE id = ?`, [title, subtitle, text, customfield, id], (err, result) => {
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