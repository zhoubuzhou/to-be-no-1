// const mongodb = require('mongodb')
const { MongoClient,ObjectId } = require('mongodb');
//MongoClient连接

(async () => {
    const url = 'mongodb://127.0.0.1:27017';
    let conn = null;
    try {
        conn = await MongoClient.connect(url);
    } catch (error) {
        console.log(error.massage);
    }
    const users = conn.db('ques').collection('users');

    await users.updateMany({//编辑
        _id:ObjectId('62a9539ce47cd27cbdcf22cc'),
        // name:'jack'//要编辑的查询条件，都找出来编辑
    },{
        $set:{
            name:'tom',
            age:22,
            gender:0
        }
    })

    await users.deleteOne({name:'lucy'})

    const r = await users.find().toArray();
    // users.insertOne({
    //     name:'jack',
    //     age:20,
    //     gender:1,
    // })
    console.log(r);
    conn.close();
})();