import React, { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import MyModal from "./MyModal";
import LoginForm from "./LoginForm";
import logo from "../images/logo.png"
import Form from "react-bootstrap/Form";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const Login = useContext(LoginContext);

  return (
    <>
      <Navbar dir="rtl" expand="lg" className="mb-5 px-5" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand className="ps-4 m-0" href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">
                خانه
              </Nav.Link>
            </Nav>
            <Nav className="me-auto gap-3">
              <Form className="d-flex gap-2">
                <Form.Control
                  type="search"
                  placeholder="جستجو"
                  aria-label="Search"
                />
                <Button variant="outline-warning">جستجو</Button>
              </Form>
              {Login.isLogin ? (
                <Navbar.Text>پیمان خوش آمدی</Navbar.Text>
              ) : (
                <Button
                  onClick={() => setShowModal(true)}
                  variant="outline-warning"
                >
                  ورود
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <MyModal
        modalTitle={"ورود"}
        showModal={showModal}
        setShowModal={setShowModal}
        modalForm={<LoginForm setShowModal={setShowModal} />}
      />
    </>
  );
};

export default NavBar;
