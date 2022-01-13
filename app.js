const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const {insert, getData, getByObjId, insertOne, update, deleteItem} = require('./testDb.js');
const data = require('./samplefile.json');


const db = 'sample';

async function main() {
    const client = new MongoClient(url);
    await client.connect();

    const results = await insert(data);
    //console.log(results.insertedCount);
    const d = await getData(data[1]);
    // console.log(d);
    const d1 = await getByObjId(d[0]._id);
    // console.log(d1);
    //const result = await insertOne(singleItem);
    //console.log(result);
    const updatedResult = await update(d[0]._id, singleItem);
    //console.log(updatedResult);
    const deleteResult = await deleteItem(d[0]._id);
    console.log(deleteResult);
    //const admin = client.db(db).admin();
    //   console.log(await admin.serverStatus());
    // console.log(await admin.listDatabases());
    await client.db(db).dropDatabase();
    client.close();
}

main();



const singleItem = {
    "title": "weqwe",
    "description": "gweqwehj",
    "location": "Hermannplatz 5-6, 10967 Berlin, Germany",
    "lng": 0,
    "lat": 0,
    "userId": 4051,
    "name": "manoj",
    "isdeleted": false,
    "profilePicture": "Images/9b291404-bc2e-4806-88c5-08d29e65a5ad.png",
    "videoUrl": null,
    "images": null,
    "mediatype": 0,
    "imagePaths": null,
    "feedsComment": null,
    "commentCount": 0,
    "multiMedia": [
        {
            "id": 3240,
            "name": "",
            "description": null,
            "url": "http://www.youtube.com/embed/mPhboJR0Llc",
            "mediatype": 2,
            "likeCount": 0,
            "place": null,
            "createAt": "0001-01-01T00:00:00"
        }
    ],
    "likeDislike": {
        "likes": 0,
        "dislikes": 0,
        "userAction": 2
    },
    "createdAt": "2020-01-02T13:32:16.7480006",
    "code": 0,
    "msg": null
}