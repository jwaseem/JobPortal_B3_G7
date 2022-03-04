import React from 'react'
import {Row, Col, Form, Input, Button} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import {loginUser} from '../redux/actions/userActions';
import  {useDispatch} from 'react-redux';

function Login() {
  const dispatch = useDispatch()
        function login(values){
          dispatch(loginUser(values))
        }
  return (
      <div className='login'>
          
          <Row justify='center'>
              <Col lg={10} sm={24} className='bs p-2'>
              <h1>Login</h1>
                <Form layout='vertical' onFinish={login}>
               <Form.Item label="username" name='username' rules={[{required:true}]}>
                <Input/>
               </Form.Item>
               <Form.Item label="password" name='password' rules={[{required:true}]}>
                <Input/>
               </Form.Item>
               <Button htmlType='submit'>Login</Button>
               </Form>
              </Col>
          </Row>
      </div>
    
  )
}

export default Login