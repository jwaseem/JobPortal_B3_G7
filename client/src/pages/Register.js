import DefaultLayout from "../components/DefaultLayout";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { register } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function Register({ navigate }) {
  const [email, setEmail] = useState("");
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  navigate = useNavigate();

  const userRegister = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else dispatch(register(username, email, password, role));
  };

  const handleSelect = (e) => {
    console.log(e);
    setRole(e);
  };

  return (
    <div>
      <DefaultLayout>
        <br></br>
        <h1>Register</h1>

        <div className="loginContainer">
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                value={username}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
              {/* <Form.Text className="error">{formErrorValues.name}</Form.Text> */}
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <Form.Text className="error">{formErrorValues.email}</Form.Text> */}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <Form.Text className="error">
                {formErrorValues.password}
              </Form.Text> */}
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmpassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {/* <Form.Text className="error">
                {formErrorValues.confirmpassword}
              </Form.Text> */}
            </Form.Group>
            <br></br>
            <DropdownButton
              title="Select role"
              value={role}
              id="dropdown-menu-align-right"
              onSelect={handleSelect}
            >
              <Dropdown.Item eventKey="JobSeeker">JobSeeker</Dropdown.Item>
              <Dropdown.Item eventKey="Employer">Employer</Dropdown.Item>
              <Dropdown.Item eventKey="Faculty">Faculty</Dropdown.Item>
            </DropdownButton>
            <h5>{role}</h5>
            <br></br>
            <br></br>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
          <Row className="py-3">
            <Col>
              Have an Account ? <Link to="/login">Login</Link>
            </Col>
          </Row>
        </div>
      </DefaultLayout>
    </div>
  );
}

export default Register;
