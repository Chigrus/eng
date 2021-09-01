import {init} from '@lib/sql';
import keys from '@lib/keys';

const { createHash, } = require('crypto');
const jwt = require('jsonwebtoken');

export async function post(req, res) {
    const hash = createHash('sha256');
    const {login, password} = req.body.data;

    hash.update(password);

    const {connection} = await init();
    connection.query('SELECT * FROM users WHERE user_login = ?', [login], (err, result) =>{
      if (err) console.log(err);
      if(result.length === 0){
            res.json({
                message: 'Такого пользователя нет'
            })
        }
        else{
            if(hash.digest('hex') == result[0].user_pass){
                const token = jwt.sign({
                    id: result[0].ID,
                    role: result[0].user_role
                }, keys.jwt, {expiresIn: 3600 * 60 * 1});
                res.cookie('token', token, {
                    maxAge: 3600 * 4 * 1000,
                    httpOnly: true,
                })
                res.json({
                    token: token
                })
            } else{
                res.json({
                    message: 'Введен неверный пароль'
                })
            }
        }
    });
}