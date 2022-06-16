const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();

let url = 'mongodb://127.0.0.1:27017';
//查询
app.get('/users', async (req, res) => {
    let conn = null;
    try {
        conn = await MongoClient.connect(url);
        const users = conn.db('ques').collection('users');
        const r = await users.find().toArray();
        res.send(r)
    } catch (error) {
        console.log(error.massage)
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
        await users.insertOne({ 
            name: 'tom', 
            age: 20, 
            gender: 1, 
            email: 'tom@qq.com', 
            phone: '180138329443', 
            password: '123123' 
        });
        res.send('添加成功');
    } catch (error) {
        console.log(error.massage)
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
        await users.updateOne({_id:ObjectId('')}, {
            $set:{ 
                name: 'lili', 
                age: 21,
                gender: 1, 
                email: 'lili@qq.com', 
                phone: '180138329324', 
                password: '234234' 
            }
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
        await users.deleteOne({ _id:ObjectId('62a953905c0688de6b95a2e9')});
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