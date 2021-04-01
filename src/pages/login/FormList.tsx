import { Form, Input, Button, Checkbox } from 'antd';
import { connect, Dispatch } from 'umi'
import React from 'react'

const FormList = ({ dispatch }: { dispatch: Dispatch }) => {
    const onFinish = (values: any) => {
        dispatch({
            type: "login/login",
            payload: {
                username: values.username,
                password: values.password
            }
        })
    };
    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名' }]}
            >
                <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
            >
                <Input.Password placeholder="请输入密码" />
            </Form.Item>

            <Form.Item name="remember" >
                <Checkbox>记住密码</Checkbox>
            </Form.Item>

            <Form.Item >
                <Button type="primary" htmlType="submit">
                    登录
                </Button>
            </Form.Item>
        </Form>
    );
};


export default connect()(FormList)
