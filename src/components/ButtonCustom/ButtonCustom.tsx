import { Button, Form } from "antd";
import React from "react";

type Props = {
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  type?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
  danger?: boolean;
  loading?: boolean;
  shape?: "default" | "circle" | "round" | undefined;
  icon?: React.ReactNode;
  fontSize?: string;
};

const ButtonCustom = ({
  children,
  htmlType = "button",
  type,
  danger,
  loading,
  shape,
  icon,
  fontSize,
  onClick,
}: Props) => {
  return (
    <Form.Item>
      <Button
        htmlType={htmlType}
        type={type}
        danger={danger}
        loading={loading}
        shape={shape}
        icon={icon}
        onClick={onClick}
        style={{ fontSize }}
      >
        {children}
      </Button>
    </Form.Item>
  );
};

export default ButtonCustom;
