import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        logIn(email, password);
    }

  return (
    <Form>
        <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control value={email} type='email' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} type='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant='outline-info' type='submit' onClick={onSubmit}>Log in</Button>
    </Form>
  )
}

export default Login