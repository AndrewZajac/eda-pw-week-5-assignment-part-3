console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line


let myCollection = [];

function addToCollection(collection, title, artist, yearPublished){
  let record = {
      collection,
      title,
      artist,
      yearPublished
    }
    collection.push(record);
    return record;
}

// myCollection.push(record)


console.log(myCollection);


function showCollection(collection){
  for(let i = 0; i < collection.length; i++){
    // myCollection.record 
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`)
  }
}
console.log(showCollection(myCollection));

function findByArtist(collection, artist){
  let album = [];
  for(let i = 0; i < collection.length; i++){
    if(collection[i].artist === artist){
      album.push(collection[i]);
    }
  }
  return album;
}

console.log(findByArtist(myCollection, 'Jon Pardi'));

let searchObject = {artist: 'Ray Charles', year: 1957 }

function search(collection, searchCriteria){
  let mostCriteria = [];
  console.log(`inside search function${mostCriteria}`);
  for(let i = 0; i < collection.length; i++){
    if(collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.year){
      mostCriteria.push(collection[i]);
    }
  } 
  return mostCriteria;
}

console.log(search(myCollection, 'Jon Pardi', 2019))


console.log(addToCollection(myCollection, 'Heartache Medication', 'Jon Pardi', 2019))
console.log(addToCollection(myCollection, 'Heartache on the Dance Floor', 'Jon Pardi', 2018))
console.log(addToCollection(myCollection, 'White Iverson', 'Post Malone', 2016))
console.log(addToCollection(myCollection, 'Black Betty', 'Ram Jam', 2004))
console.log(addToCollection(myCollection, 'Pump It Harder', 'Black Eyed Peas', 2009))
console.log(addToCollection(myCollection, 'Colder Weather', 'Zac Brown Band', 2010))

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
