import { faLightbulb } from "@fortawesome/free-solid-svg-icons/faLightbulb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
} from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as PATH from "@/configs/routeConfig.tsx";

const plainOptions = [
  "Apple",
  "Pear",
  "Orange",
];
const { Option } = Select;

export default function CourseSelect() {
  const navigate = useNavigate();
  function onFinish(values) {
    console.log(
      "Received values of form: ",
      values,
    );
    const { items, timeLimit } = values;
    const test = items.join("&path=");
    // const part = items.map(
    //   (item, index) => {
    //     return `${index}=${item}`;
    //   },
    // );
    // console.log(
    //   "🚀 ~ onFinish ~ part:",
    //   part,
    // );
    const result = `?path=${test}`;

    navigate(
      `${PATH.PRACTICE_PATH}${result}&time_limit=${timeLimit}`,
    );
  }

  const [form] = Form.useForm();
  const [value, setValue] = useState(
    [],
  );

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
      {/* <Form
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
      </Form> */}

      <Form
        name="complex-form"
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        form={form}
      >
        <Form.Item
          name="items"
          valuePropName="value"
        >
          <Checkbox.Group
            value={value}
            className="d-flex flex-column "
          >
            {plainOptions.map(
              (option, idx) => (
                <>
                  <div className="mb-2">
                    <Checkbox
                      key={idx}
                      value={option}
                      onChange={(e) => {
                        const isChecked =
                          e.target
                            .checked;
                        if (isChecked)
                          setValue([
                            ...value,
                            option,
                          ]);
                        else {
                          setValue(
                            value.filter(
                              (v) => {
                                return (
                                  v !==
                                  option
                                );
                              },
                            ),
                          );
                        }
                      }}
                    >
                      {option}
                    </Checkbox>
                  </div>
                  <label className="mb-2">
                    Content here
                  </label>
                </>
              ),
            )}
          </Checkbox.Group>
        </Form.Item>
        <Form.Item name="timeLimit">
          <label className="mb-1">
            Giới hạn thời gian (Để trống
            để làm bài không giới hạn)
          </label>
          <Select
            placeholder="Select a option and change input text above"
            allowClear
            options={[
              {
                value: 5,
                label: "5 minutes",
              },
              {
                value: 10,
                label: "10 minutes",
              },
              {
                value: 15,
                label: "15 minutes",
              },
              {
                value: 20,
                label: "20 minutes",
              },
            ]}
          ></Select>
        </Form.Item>
        <Form.Item colon={false}>
          <Button
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
