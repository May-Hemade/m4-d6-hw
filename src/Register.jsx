import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"

const Register = () => {
  const [valid, setValid] = useState(false)

  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (event) => {
    console.log(
      "handleChange -> " + event.target.name + " : " + event.target.value
    )

    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }
  useEffect(() => {
    console.log(values)

    validateForm()
  }, [values])

  const validateForm = () => {
    let nameValid = values.name.length >= 2
    let surnameValid = values.surname.length >= 3
    let emailValid = /\S+@\S+\.\S+/.test(values.email)
    let passwordValid = /^(?=.*\d)(?=.*[a-zA-Z])([a-zA-Z0-9]{8,})$/.test(
      values.password
    )
    let confirmPasswordValid = values.password === values.confirmPassword

    let formValid =
      nameValid &&
      surnameValid &&
      emailValid &&
      passwordValid &&
      confirmPasswordValid

    console.log(`Form Valid: ${formValid}`)

    setValid(formValid)
  }

  //   const validateEmail = (email) => {
  //     return String(email)
  //       .toLowerCase()
  //       .match(
  //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //       )
  //   }

  //   const validatePassword = (password) => {
  //     return String(password).match(/^(?=.*\d)(?=.*[a-zA-Z])([a-zA-Z0-9]{8,})$/)
  //   }

  return (
    <div>
      <Container
        className="text-left 
      "
      >
        <Form>
          <Form.Label className="mt-2">Name</Form.Label>
          <Form.Control
            name="name"
            onChange={handleChange}
            placeholder="First name"
          />
          <Form.Label className="mt-2">Surname</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="surname"
            placeholder="Surname"
          />
          <Form.Group controlId="formGroupEmail">
            <Form.Label className="mt-2">Email address</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label className="mt-2">Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
            />
            <Form.Label className="mt-2"> Confirm Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={!valid}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default Register
