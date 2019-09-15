const awaitHeaven = async function(client, myCol) {
    result = await myCol.insertMany(docArray);
    console.log("Inserted teh following doucment into the collection:");
    console.log(docArray);

    
}