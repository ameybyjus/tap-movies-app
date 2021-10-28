const express = require('express');
const router = express.Router();

const movies=[ {
  "id": 1,
  "title": "Lemony Snicket's A Series of Unfortunate Events",
  "year_of_release": "1991",
  "rating": 7.95,
  "poster": "http://dummyimage.com/118x100.png/dddddd/000000",
  "earning": 27559892,
  "genre": "Adventure|Children|Comedy|Fantasy"
},
{
  "id": 2,
  "title": "Battle in Outer Space",
  "year_of_release": "2010",
  "rating": 2.7,
  "poster": "http://dummyimage.com/213x100.png/ff4444/ffffff",
  "earning": 96388817,
  "genre": "Adventure|Sci-Fi"
},
{
  "id": 3,
  "title": "Until Death",
  "year_of_release": "1964",
  "rating": 2.25,
  "poster": "http://dummyimage.com/194x100.png/cc0000/ffffff",
  "earning": 75322351,
  "genre": "Action|Drama|Thriller"
},
{
  "id": 4,
  "title": "Star, The",
  "year_of_release": "2004",
  "rating": 2.68,
  "poster": "http://dummyimage.com/124x100.png/dddddd/000000",
  "earning": 86645717,
  "genre": "Drama"
},
{
  "id": 5,
  "title": "Waiting to Exhale",
  "year_of_release": "2002",
  "rating": 7.23,
  "poster": "http://dummyimage.com/151x100.png/5fa2dd/ffffff",
  "earning": 51365195,
  "genre": "Comedy|Drama|Romance"
},
{
  "id": 6,
  "title": "Howling V: The Rebirth",
  "year_of_release": "1986",
  "rating": 8.92,
  "poster": "http://dummyimage.com/132x100.png/ff4444/ffffff",
  "earning": 54544704,
  "genre": "Horror"
},
{
  "id": 7,
  "title": "She Wouldn't Say Yes",
  "year_of_release": "1994",
  "rating": 2.13,
  "poster": "http://dummyimage.com/155x100.png/cc0000/ffffff",
  "earning": 23190259,
  "genre": "Comedy|Romance"
},
{
  "id": 8,
  "title": "Somersault",
  "year_of_release": "2001",
  "rating": 8.17,
  "poster": "http://dummyimage.com/120x100.png/dddddd/000000",
  "earning": 16036963,
  "genre": "Drama"
},
{
  "id": 9,
  "title": "City Dark, The",
  "year_of_release": "2000",
  "rating": 4.82,
  "poster": "http://dummyimage.com/233x100.png/cc0000/ffffff",
  "earning": 3133135,
  "genre": "Documentary"
},]
/* GET home page. */
router.get('/', (req, res) =>{
  res.json(movies).status(200);
});

module.exports = router;
