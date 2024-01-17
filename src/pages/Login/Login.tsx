import { Card, Form, Row, Space, Typography } from "antd";
import Layout from "../../components/layout/Layout";
import InputCustom from "../../components/InputCustom/InputCustom";
import PasswordInputCustom from "../../components/PasswordInputCustom/PasswordInputCustom";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import { Link } from "react-router-dom";
import { Paths } from "../../paths/paths";
import { useLoginMutation } from "../../app/services/auth";
import { UserData } from "../../app/services/auth";
import { isErrorWithMessage } from "../../utils/is-error-with-message";
import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Login = () => {
  const [loginUser, loginUserResult] = useLoginMutation();
  const [error, setError] = useState("");

  const onLogin = async (data: UserData) => {
    try {
      await loginUser(data).unwrap();
    } catch (err) {
      const isError = isErrorWithMessage(err);
      if (isError) {
        setError(err.data.message);
      } else {
        setError("Login failed");
      }
    }
  };

  return (
    <div>
      <Layout>
        <Row align="middle" justify="center">
          <Card title="SIGN IN" style={{ width: "30rem", textAlign: "center" }}>
            <Form onFinish={onLogin}>
              <InputCustom name="email" placeholder="Your email" type="email" />
              <PasswordInputCustom
                name="password"
                placeholder="Your password"
              />
              <ButtonCustom type="primary" htmlType="submit">
                Login
              </ButtonCustom>
            </Form>
            <Space direction="vertical" size="large">
              <Typography.Text>
                No account? <Link to={Paths.register}>Sign up</Link>
              </Typography.Text>
              <ErrorMessage message={error} />
            </Space>
          </Card>
        </Row>
      </Layout>
    </div>
  );
};

export default Login;
