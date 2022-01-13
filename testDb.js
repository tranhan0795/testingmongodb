const {MongoClient, ObjectId} = require('mongodb');
const url = 'mongodb://localhost:27017';
const db = 'sample';

function insert(data) {
    return new Promise(async (res, rej) => {
        const client = new MongoClient(url);
        try {
            await client.connect();
            const results = await client.db(db).collection('video').insertMany(data);
            res(results);
            client.close();
        } catch (err) {
            rej(err);
        }
    }
    )
}
function getData(query) {
    return new Promise(async (res, rej) => {
        const client = new MongoClient(url);
        try {
            await client.connect();
            const data = client.db(db).collection('video').find(query);
            res(await data.toArray());
            client.close();
        } catch (err) {
            rej(err);
        }
    }
    )
}

function getByObjId(objId) {
    return new Promise(async (res, rej) => {
        const client = new MongoClient(url);
        try {
            await client.connect();
            const data = await client.db(db).collection('video').findOne({_id: new ObjectId(objId)});
            res(data);
            client.close();
        } catch (err) {
            rej(err);
        }
    }
    )
}

function insertOne(data) {
    return new Promise(async (res, rej) => {
        const client = new MongoClient(url);
        try {
            await client.connect();
            const result = await client.db(db).collection('video').insertOne(data);
            res(result);
            client.close();
        } catch (err) {
            rej(err);
        }
    }
    )
}

function update(id, newItem) {
    return new Promise(async (res, rej) => {
        const client = new MongoClient(url);
        try {
            await client.connect();
            const result = await client.db(db).collection('video').findOneAndReplace({_id: ObjectId(id)}, newItem);
            res(result);
            client.close();
        } catch (err) {
            rej(err);
        }
    }
    )
}

function deleteItem(id) {
    return new Promise(async (res, rej) => {
        const client = new MongoClient(url);
        try {
            await client.connect();
            const result = await client.db(db).collection('video').deleteOne({_id: ObjectId(id)});
            res(result);
            client.close();
        } catch (err) {
            rej(err);
        }
    }
    )
}


module.exports = {
    insert,
    getData,
    getByObjId,
    insertOne,
    update,
    deleteItem
}



