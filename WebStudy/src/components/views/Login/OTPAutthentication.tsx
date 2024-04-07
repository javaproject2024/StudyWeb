import { Button, Form } from "antd";
import { InputOTP } from "antd-input-otp";

// import {
//   // LockOutlined,
//   UserOutlined,
// } from "@ant-design/icons";

export default function OTPAutthentication() {
  const onFinish = (values: never) => {
    const { otp } = values;
    if (
      !otp ||
      otp.includes(undefined) ||
      otp.includes("")
    )
      return form.setFields([
        {
          name: "otp",
          errors: ["OTP is invalid."],
        },
      ]);
    console.log(`OTP: ${otp}`);
    console.log(
      "Received values of form: ",
      values,
    );
    // navigate("/otp");
  };
  const [form] = Form.useForm();

  return (
    <div className="justify-content center ">
      <div className=" d-flex flex-column justify-content-center align-items-center w-100 py-5 ">
        <div className="d-flex flex-column border p-5">
          <h3 className="mb-1">OTP</h3>
          <p className="mb-5">
            Please enter the OTP number
            from your email to active
            account
          </p>

          <Form
            form={form}
            // name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            // onSubmit
          >
            <Form.Item
              name="otp"
              className="center-error-message"
              rules={[
                {
                  validator: async () =>
                    Promise.resolve(),
                },
              ]}
            >
              <InputOTP
                autoFocus
                inputType="numeric"
                length={6}
              />
            </Form.Item>
            <Form.Item noStyle>
              <Button
                block
                htmlType="submit"
                type="primary"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
