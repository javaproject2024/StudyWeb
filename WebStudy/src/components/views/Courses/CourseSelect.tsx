import { faLightbulb } from "@fortawesome/free-solid-svg-icons/faLightbulb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form } from "antd";

export default function CourseSelect() {
  function onFinish(values) {
    console.log(
      "Received values of form: ",
      values,
    );
  }
  const [form] = Form.useForm();
  return (
    <>
      <div className="alert alert-success ">
        <div>
          <span className="me-2">
            <FontAwesomeIcon
              icon={faLightbulb}
            />
          </span>
          Pro tips: Hình thức luyện tập
          từng phần và chọn mức thời
          gian phù hợp sẽ giúp bạn tập
          trung vào giải đúng các câu
          hỏi thay vì phải chịu áp lực
          hoàn thành bài thi.
        </div>
        <br />
      </div>
      <Form
        form={form}
        onFinish={onFinish}
      >
        <Form.Item className="">
          <label>
            Chọn phần thi bạn muốn làm
          </label>
        </Form.Item>
        <Form.Item></Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button mx-auto"
          >
            Luyện tập
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
