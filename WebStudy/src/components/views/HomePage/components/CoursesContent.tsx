import {
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  List,
  Space,
} from "antd";
import React, {
  ReactNode,
} from "react";
import styled from "styled-components";

const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: "https://ant.design",
  title: `ant design part ${i}`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content: `Content ${i}`,
}));

// type ListItemProps = {
//   renderItem?: (
//     item: ItemProps,
//     index: number,
//   ) => React.ReactNode;
// };

type ItemProps = {
  title: string;
  avatar: string;
  href: string;
  content: string;
  description: string;
};

const ContentStyle: React.CSSProperties = styled(
  List,
)`
  .ant-list-items {
    display: flex;
    justify-content: center;
    gap: 3rem;
  }
`;

const ListContent = styled(List.Item)`
  .ant-list-item
    ant-list-item-no-flex
    ul {
    background: black;
  }
`;

const DivSubContent = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const IconText = ({
  icon,
  text,
}: {
  icon: React.FC;
  text: string;
}) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const CoursesContent = () => (
  <ContentStyle
    itemLayout="vertical"
    size="large"
    // bordered
    grid={{
      gutter: 16,
      xs: 1,
      sm: 1,
      md: 3,
      lg: 3,
      xl: 3,
      xxl: 3,
    }}
    split={false}
    pagination={{
      onChange: (page: ReactNode) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={data}
    // footer={
    //   <div>
    //     <b>ant design</b> footer part
    //   </div>
    // }

    renderItem={(
      item: ItemProps,
      index: number,
    ) => (
      <ListContent
        style={{
          border: "1px solid black",
          cursor: "pointer",
        }}
        onClick={() => {
          console.log(index);
        }}
        key={item.title}
        actions={[
          <div>
            <IconText
              icon={StarOutlined}
              text="156"
              key="list-vertical-star-o"
            />
            ,
            <IconText
              icon={LikeOutlined}
              text="156"
              key="list-vertical-like-o"
            />
            ,
            <IconText
              icon={MessageOutlined}
              text="2"
              key="list-vertical-message"
            />
            ,
          </div>,
        ]}
        // extra={
        //   <img
        //     width={272}
        //     alt="logo"
        //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        //   />
        // }
      >
        {/* <List.Item.Meta
          avatar={
            <Avatar src={item.avatar} />
          }
          title={
            <a href={item.href}>
              {item.title}
            </a>
          }
          description={item.description}
        /> */}
        {item.content}
      </ListContent>
    )}
  />
);

export default CoursesContent;
