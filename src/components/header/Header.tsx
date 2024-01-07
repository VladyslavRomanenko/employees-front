import { Layout, Space } from "antd";
import css from "./Header.module.css";
import { LoginOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import { Link } from "react-router-dom";
import { Paths } from "../../paths/paths";

const Header = () => {
  return (
    <Layout.Header className={css.header}>
      <Space>
        <Link to={Paths.home}>
          <ButtonCustom fontSize="20px" type="text" icon={<TeamOutlined />}>
            Employees
          </ButtonCustom>
        </Link>
      </Space>
      <Space>
        <Link to={Paths.register}>
          <ButtonCustom type="text" icon={<UserOutlined />}>
            Registration
          </ButtonCustom>
        </Link>
        <Link to={Paths.login}>
          <ButtonCustom type="text" icon={<LoginOutlined />}>
            Login
          </ButtonCustom>
        </Link>
      </Space>
    </Layout.Header>
  );
};

export default Header;
