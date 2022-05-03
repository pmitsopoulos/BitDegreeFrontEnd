-- Step 2
-- Create the database
use 'cinema'

-- Step 3
-- Create Collection "movies"
-- db.createCollection('movies',
-- {
--      movie_title:<string>,
--      movie_runtime:<number>,
--      movie_author:<string>,
--      movie_year:<number>
-- })
db.createCollection('movies')

-- Step 4
-- Add 10 entries in the movies collection
db.movies.insertMany([
    {
        movie_title:"Zack Snyder's Justice League",
        movie_runtime:240,
        movie_author:"Zack Snyder",
        movie_year:2021
    },
    {
        movie_title:"Batman V Superman Dawn Of Justice",
        movie_runtime:180,
        movie_author:"Zack Snyder",
        movie_year:2016
    },
    {
        movie_title:"Man Of Steel",
        movie_runtime:160,
        movie_author:"Zack Snyder",
        movie_year:2013
    },
    {
        movie_title:"The Batman",
        movie_runtime:180,
        movie_author:"Matt Reeves",
        movie_year:2022
    },
    {
        movie_title:"Aquaman",
        movie_runtime:160,
        movie_author:"James Wan",
        movie_year:2018
    },
    {
        movie_title:"Wonder Woman",
        movie_runtime:140,
        movie_author:"Patty Jenkins",
        movie_year:2017
    },
    {
        movie_title:"Wonder Woman",
        movie_runtime:140,
        movie_author:"Patty Jenkins",
        movie_year:2017
    },
    {
        movie_title:"The Dark Knight",
        movie_runtime:180,
        movie_author:"Christopher Nolan",
        movie_year:2008
    },
    {
        movie_title:"The Dark Knight Rises",
        movie_runtime:190,
        movie_author:"Christopher Nolan",
        movie_year:2012
    },
    {
        movie_title:"Batman Begins",
        movie_runtime:140,
        movie_author:"Christopher Nolan",
        movie_year:2005
    },
])

-- Step 5
-- Retrieve a movie with a certain title
db.movies.find({movie_title:"Batman Begins"})

-- Step 6
-- Update the retrieved movie of Step 5
db.movies.update({movie_title:"Batman Begins"},
{$set: {
    movie_title:"Harry Potter and The Goblet of Fire",
    movie_author:"J.K Rowling",
    movie_runtime:125,
    movie_year:2005
}})

-- Step 7
-- Delete a movie
--db.movies.remove({movie_title:"Wonder Woman"},1)
db.movies.deleteOne({movie_title:"Wonder Woman"})

-- Step 8
-- Add a price "column" in the movies collection
-- db.movies.updateMany({},{$set: {movie_price:<number>}})
-- Step 9
db.movies.updateMany({},{$set: {movie_price:5}})
db.movies.updateMany({movie_author:"Zack Snyder"}, {$set:{movie_price:10}})


-- Step 10
-- Retrieve movies with price less than 6
db.movies.find({movie_price:{$lt:6}})

-- Step 11
-- Delete the movies collection and then delete the database as well
db.movies.drop()
db.dropDatabase()
