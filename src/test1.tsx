import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export type Test1props = {
    home: string;
    link: string;
}

const Test1 = (props: Test1props) => {
    const { home, link } = props
    return (
      <div>

      <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Ryo Taguchi</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="https://prog-8.com/">{home}</Nav.Link>
                        <Nav.Link href="#link">{link}</Nav.Link>
                        <NavDropdown title="プロフィール" id="basic-nav-dropdown" >
                            <NavDropdown.Item href="https://github.com/">自己紹介</NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.2">趣味</NavDropdown.Item> */}
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="http://localhost:3000//3.3">職務経歴</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">趣味.特技</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">資格</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>  
    )
}
export default Test1