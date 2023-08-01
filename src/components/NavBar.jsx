import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import MyModal from "./MyModal";
import LoginForm from "./LoginForm";
import logo from "../images/logo.png";
import { BsSearch } from "react-icons/bs";

const NavBar = () => {
  const Login = useContext(LoginContext);
  const [searchIcon, setSerachIcon] = useState('/search')
  const [showModal, setShowModal] = useState(false); 
  const navigate = useNavigate();

  const handleSearchButton = () => {
    if (searchIcon === "/search") {
      setSerachIcon("/");
      navigate('/search')      
    } else {
      setSerachIcon("/search");
      navigate('/')      
    }
  }

  return (
    <>
      <Navbar dir="rtl" expand="lg" className="px-5" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand as={Link} className="ps-4 m-0" to="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                خانه
              </Nav.Link>
            </Nav>
            <Nav className="me-auto gap-3">
              <button onClick={handleSearchButton}>
                <BsSearch size="1.8em" fill="#FFC107" className="my-auto" />
              </button>
              
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
