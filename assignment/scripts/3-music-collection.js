console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line


// let album = title + artist + yearPublished;
let myCollection = [
  {
    title: 'Heartache Medication',
    artist: "Jon Pardi",
    yearPublished: 2019 
  },
  {
    title: 'Heartache on the Dance Floor',
    artist: "Jon Pardi",
    yearPublished: 2018 
  },
  {
    title: 'White Iverson',
    artist: "Post Malone",
    yearPublished: 2016 
  },
  {
    title: 'Black Betty',
    artist: "Ram Jam",
    yearPublished: 2004 
  },
  {
    title: 'Pump It Harder',
    artist: "Black Eyed Peas",
    yearPublished: 2009 
  },
  {
    title: 'Colder Weather',
    artist: "Zac Brown Band",
    yearPublished: 2010 
  }
]

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

// function showCollection(collection){
//   for(i === 0; i )
// }






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
