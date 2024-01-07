import React from "react";
import css from "./Layout.module.css";
import { Layout as AntLayout } from "antd";
import Header from "../header/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={css.main}>
      <Header />
      <AntLayout.Content style={{ height: "100%" }}>
        {children}
      </AntLayout.Content>
    </div>
  );
};

export default Layout;
