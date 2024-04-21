// Import the mongoose module
const mongoose = require("mongoose");

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDB = process.env.MONGODB_URL;

// Wait for database to connect, logging an error if there is a problem
main();

async function main() {
    try
    {
        await mongoose.connect(mongoDB);
        const db = mongoose.connection.db;
        const dbName = db.databaseName;
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log("Database name: " + dbName);
        console.log("Collections: ");
        collections.forEach((collection) => {
            console.log(collection.name);
        })
    }
    catch (err)
    {
        console.error(err);
    }
}
// log if connected to the database
mongoose.connection.on("connected", () => {
    console.log("Connected to the database");
});
