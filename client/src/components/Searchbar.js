import React from 'react'
import { Container ,Form,Button} from 'react-bootstrap'

function Searchbar() {
    return (
        <Container className="d-flex flex-wrap m-3">
            <Form.Control type="text" placeholder="Search movie..." style={{width:"80%",} }/>
            <Button variant="primary m-1" >Search</Button>{' '}
            <Button variant="success m-1">Reset</Button>
        </Container>
    )
}

export default Searchbar
