import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faUserPen } from "@fortawesome/free-solid-svg-icons/faUserPen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tabs } from "antd";
import CourseSelect from "./CourseSelect";
import CourseFullTest from "./CourseFullTest";

const { TabPane } = Tabs;

export default function CourseInfo() {
  return (
    <div>
      <div>
        <span className="me-2">
          <FontAwesomeIcon
            icon={faClock}
          />
        </span>
        Thời gian làm bài: 120 phút | 7
        phần thi | 200 câu hỏi | 2499
        bình luận
      </div>
      <div>
        <span className="me-2">
          <FontAwesomeIcon
            icon={faUserPen}
          />
        </span>
        1559148 người đã luyện tập đề
        thi này
      </div>
      <p className="text-danger mt-2">
        Chú ý: để được quy đổi sang
        scaled score (ví dụ trên thang
        điểm 990 cho TOEIC hoặc 9.0 cho
        IELTS), vui lòng chọn chế độ làm
        FULL TEST.
      </p>
      <br />
      <Tabs
        defaultActiveKey="1"
        type="card"
      >
        <TabPane
          key="1"
          tab="Luyện tập"
        >
          <CourseSelect />
        </TabPane>
        <TabPane
          key="2"
          tab="Làm full test"
        >
          <CourseFullTest />
        </TabPane>
        <TabPane
          key="3"
          tab="Thảo luận"
        ></TabPane>
      </Tabs>
    </div>
  );
}
