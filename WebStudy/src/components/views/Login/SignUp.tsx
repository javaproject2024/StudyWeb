import {
  Button,
  Form,
  Input,
} from "antd";
import {
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Link,
  useNavigate,
} from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const onFinish = (values: never) => {
    console.log(
      "Received values of form: ",
      values,
    );
    navigate("/otp");
  };
  return (
    <div className="justify-content center ">
      <div className=" d-flex flex-column justify-content-center align-items-center w-100 py-5 ">
        <div className="d-flex flex-column border p-5">
          <h3 className="mb-1">
            Register
          </h3>
          <p className="mb-5">
            Register an account to study
          </p>
          <Form
            // name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            // onSubmit
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message:
                    "Please input your email!",
                },
              ]}
            >
              <Input
                prefix={
                  <UserOutlined className="site-form-item-icon" />
                }
                placeholder="email"
              />
            </Form.Item>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message:
                    "Please input your username!",
                },
              ]}
            >
              <Input
                prefix={
                  <UserOutlined className="site-form-item-icon" />
                }
                placeholder="username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message:
                    "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={
                  <LockOutlined className="site-form-item-icon" />
                }
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item
                name="remember"
                valuePropName="checked"
                noStyle
              >
                {/* <Checkbox>
                  Remember me
                </Checkbox> */}
              </Form.Item>

              {/* <Link
                className="login-form-forgot"
                to=""
              >
                Forgot password
              </Link> */}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button mx-auto w-100"
              >
                Register
              </Button>
            </Form.Item>

            <Form.Item>
              <span>
                Already have an account
                ?
              </span>{" "}
              <Link to="/login">
                Sign in now !
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
