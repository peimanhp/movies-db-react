import React, { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import MyModal from "./MyModal";
import LoginForm from "./LoginForm";


const NavBar = () => {

  const [showModal, setShowModal] = useState(false);

  const Login = useContext(LoginContext)  

  return (
    <div id="menu">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">فیلم خور</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className="me-3" href="/">
              خانه
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            {Login.isLogin ? (
              <Navbar.Text>پیمان خوش آمدی</Navbar.Text>
            ) : (
              <Button
                onClick={() => setShowModal(true)}
                variant="outline-light"
              >
                ورود
              </Button>
            )}
          </Nav>
        </Container>
      </Navbar>
      <MyModal
        modalTitle={"ورود"}
        showModal={showModal}
        setShowModal={setShowModal}
        modalForm={<LoginForm setShowModal={setShowModal} />}
      />      
    </div>
  );
};

export default NavBar;
