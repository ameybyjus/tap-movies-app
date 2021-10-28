import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import {Button,Card,Container} from 'react-bootstrap';

function Listsection() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovie();
    }, [])

    const fetchMovie=async()=>{
        try {
            const response = await axios.get('http://localhost:4000/');
            setMovies(response.data);
          } catch (error) {
            console.error(error);
          }
    }

    return (
        <Container className="d-flex flex-wrap">
            {movies.map(({title,year_of_release,poster})=> <>          <Card className="m-4" style={{ width: '18rem',display:"flex",justifyContent:"center" }}>
  <Card.Img variant="top" src={poster} width="240px" height="320px" />

    <Card.Title>{title}</Card.Title>
  
  <Card.Body>
      <p>{year_of_release}</p>
    <Button>More Details</Button>
  </Card.Body>
</Card></>)}
        </Container>
    )
}

export default Listsection;
