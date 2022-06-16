const express = require('express');
const md5 = require('md5');
const { json } = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
app.use(json());

let url = 'mongodb://127.0.0.1:27017';
//查询
app.get('/users', async (req, res) => {
    let conn = null;
    try {
        conn = await MongoClient.connect(url);
        const users = conn.db('ques').collection('users')
        const where = {};
        if (req.query.username) {
            where['username'] = req.query.username;
        }
        const r = await users.find(where).toArray();
        res.send(r);
    } catch (error) {
        console.log(error.massage);
    } finally {
        conn.close();
    }
});
//添加
app.post('/users/:id', async (req, res) => {
    let conn = null;
    try {
        conn = await MongoClient.connect(url);
        const users = conn.db('ques').collection('users');

        if (!req.body.username) {
            throw (new Error('用户名必须填写'))
        }
        const usernameR = await users.find({ username: req.body.username }).toArray();
        if (usernameR.length > 0) {
            throw (new Error('用户名已存在'))
        }
        if (!req.body.age) {
            throw (new Error('年龄必须填写'))
        }
        if (!req.body.phone) {
            throw (new Error('手机必须填写'))
        }
        if (!req.body.email) {
            throw (new Error('邮箱必须填写'))
        }
        if (!req.body.password) {
            throw (new Error('密码必须填写'))
        }
        if (!req.body.gender) {
            req.body.gender = '1';
        }

        req.body.password = md5(req.body.password)

        await users.insertOne(req.body);
        res.send('添加成功');
    } catch (error) {
        console.log(error.massage);
    } finally {
        conn.close();
    }
});
//更新
app.put('/users/:id', async (req, res) => {
    let conn = null;
    try {
        conn = await MongoClient.connect(url);
        const users = conn.db('ques').collection('users');
        if (!req.body.id) {
            throw (new Error('请输入用户id'));
        }

        if (req.body.username) {
            if (req.body.username === '') {
                throw (new Error('用户不能为空'));
            }else{
                const usernameR = await users.find({username:req.body.username}).toArray();
                if(usernameR.length > 0){
                    throw(new Erroe('用户名已存在'));
                }
            }
        }

        await users.updateOne({ _id: ObjectId(req.params.id)}, {
            $set: req.body,
        });
        res.send('更新成功');
    } catch (error) {
        console.log(error.massage)
    } finally {
        conn.close();
    }
});
//删除
app.delete('/users/:id', async (req, res) => {
    let conn = null;
    try {
        conn = await MongoClient.connect(url);
        const users = conn.db('ques').collection('users');
        await users.deleteOne({ _id: ObjectId(req.params.id) });
        res.send('删除成功')
    } catch (error) {
        console.log(error.massage)
    } finally {
        conn.close();
    }
});



app.listen(3000, () => {
    console.log('http://127.0.0.1:3000');
})