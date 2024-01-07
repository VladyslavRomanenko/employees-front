import { Card, Form, Row, Space, Typography } from "antd";
import Layout from "../../components/layout/Layout";
import InputCustom from "../../components/InputCustom/InputCustom";
import PasswordInputCustom from "../../components/PasswordInputCustom/PasswordInputCustom";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import { Link } from "react-router-dom";
import { Paths } from "../../paths/paths";

const Login = () => {
  return (
    <div>
      <Layout>
        <Row align="middle" justify="center">
          <Card title="SIGN IN" style={{ width: "30rem", textAlign: "center" }}>
            <Form onFinish={() => null}>
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
            </Space>
          </Card>
        </Row>
      </Layout>
    </div>
  );
};

export default Login;
