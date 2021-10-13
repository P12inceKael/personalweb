import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from './asset/img/yeah.jpg'
import pic2 from './asset/img/yeah2.jpg'


function App() {

  const arrayProject = [
    {
      name: "a",
      description: "abcdefg",
      Image: pic1
    },

    {
      name: "b",
      description: "abcdefg",
      Image: pic2
    },

    {
      name: "c",
      description: "abcdefg",
      Image: pic1
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <body>
        <div className="HomePage">
          <div className="Content1">
            <div className="title">
              <div className="titleNama">
                Kidung Ardana
              </div>
              <div className="titleDesc">
                I'am a Student of Computer Science from Bina Nusantara University with GPA of 2.97. Currently working as Frontend Web Developer. I have a depth interest in HTML, CSS, and Javascript Vanilla or React. Also, I have a decent knowledge of Software Engineering and Application Development Cycle.
              </div>
            </div>
            <div className="pic1">
              <img className="pictureprofile" src={pic1}></img>
            </div>
          </div>

          <div className="section2">
            <div className="title2"> PORTOFOLIO </div>
            
          </div>

          <div className="kotakkotak">
              {
                arrayProject.map((val, idx) => {
                  return(
                    <Card className="berak" style={{ width: '18rem' }} >
                      <Card.Img variant="top" src={val.Image} className="imageProject" />
                      <Card.Body>
                        <Card.Title>{val.name}</Card.Title>
                        <Card.Text>
                          {val.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  )
                })
              }
            </div>



        </div>
      </body>
    </div>
  );
}

export default App;
