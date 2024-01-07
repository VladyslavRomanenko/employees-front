import { Card, Form, Row, Space, Typography } from "antd";
import Layout from "../../components/layout/Layout";
import InputCustom from "../../components/InputCustom/InputCustom";
import PasswordInputCustom from "../../components/PasswordInputCustom/PasswordInputCustom";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import { Link } from "react-router-dom";
import { Paths } from "../../paths/paths";

const Register = () => {
  return (
    <div>
      <Layout>
        <Row align="middle" justify="center">
          <Card title="SIGN UP" style={{ width: "30rem", textAlign: "center" }}>
            <Form onFinish={() => null}>
              <InputCustom name="name" placeholder="Your name" />
              <InputCustom name="email" placeholder="Your email" type="email" />
              <PasswordInputCustom
                name="password"
                placeholder="Your password"
              />
              <PasswordInputCustom
                name="confirmPassword"
                placeholder="Repeat password"
              />
              <ButtonCustom type="primary" htmlType="submit">
                Register
              </ButtonCustom>
            </Form>

            <Space direction="vertical" size="large">
              <Typography.Text>
                Have account? <Link to={Paths.login}>Sign in</Link>
              </Typography.Text>
            </Space>
          </Card>
        </Row>
      </Layout>
    </div>
  );
};

export default Register;
