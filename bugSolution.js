```javascript
// Correct use of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({"_id": ObjectId("650e5a765715678901234567")}, {"$inc": {"count": 1}});
```