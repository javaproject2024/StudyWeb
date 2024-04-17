import NavLinkUtils from "@/components/utilities/NavLinkUtils";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Tabs } from "antd";
import CourseItems from "../HomePage/components/CourseItems";

const titleArr = [
  "Tất cả",
  "TOEIC",
  "IELTS Academic",
  "IELTS General",
  "HSK 1",
  "HSK 2",
  "HSK 3",
  "HSK 4",
  "HSK 5",
  "HSK 6",
  "Tiếng anh THPTQG",
  "Toán THPTQG",
  "Sinh học THPTQG",
  "Hoá học THPTQG",
  "Vật lý THPTQG",
  "NEW SAT",
  "ACT",
];
const { TabPane } = Tabs;

export default function TestPage() {
  return (
    <>
      <div
        className="p-3 "
        style={{
          backgroundColor: "#f8f9fa",
        }}
      >
        <div
          className="container "
          //   style={{
          //     maxWidth: "1170px",

          //   }}
        >
          <div className="row ">
            <div className="col-12 col-md-3 order-md-2">
              USER INFO HERE
            </div>
            <div className="col-12 col-md-9 order-md-1">
              <h1>Thư viện đề thi</h1>

              <div
                style={{
                  boxSizing:
                    "border-box",
                }}
              >
                <ul className="nav nav-pills flex-wrap">
                  {titleArr.map(
                    (title) => (
                      <NavLinkUtils
                        title={title}
                      />
                    ),
                  )}
                </ul>
              </div>
              <br />
              <form>
                <div className="row mb-3">
                  <div className="col-12">
                    <div
                      style={{
                        boxSizing:
                          "border-box",
                      }}
                    >
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          name="term"
                        />
                        <span className="input-group-text">
                          {/* <FontAwesomeIcon
                            icon={
                              faMagnifyingGlass as IconProp
                            }
                          /> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-search"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div>
                      <button className="btn btn-primary">
                        Tìm kiếm
                      </button>
                    </div>
                  </div>
                </div>
                <div></div>
              </form>
              {/* <ul className="nav nav-tabs">
                <NavLinkUtils
                  title="Tất cả"
                  active={true}
                />
                <NavLinkUtils title="Rút gọn" />
              </ul> */}
              <Tabs
                defaultActiveKey="1"
                type="card"
              >
                <TabPane
                  tab="Tất cả"
                  key="1"
                >
                  <CourseItems />
                </TabPane>
                <TabPane
                  tab="Dề rút gọn"
                  key="2"
                ></TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
