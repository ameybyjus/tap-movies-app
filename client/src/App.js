
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Listsection from "./components/Listsection";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <>
    <Header/>
    <main>
      <Container>
        <Searchbar/>
        <Listsection/>
      </Container>
    </main>
    </>
  );
}

export default App;
