export const onlineClass = {
  title: "Khoá học online",
  data: [
    {
      content: "IELTS General Reading",
      linkTo: "",
    },
    {
      content: "IELTS General Writing",
      linkTo: "",
    },
    {
      content: "Complete TOEIC",
      linkTo: "",
    },
    {
      content: "IELTS Fundamentals",
      linkTo: "",
    },
    {
      content:
        "IELTS Intensive Listening",
      linkTo: "",
    },
    {
      content:
        "IELTS Intensive Reading",
      linkTo: "",
    },
    {
      content:
        "IELTS Intensive Speaking",
      linkTo: "",
    },
    {
      content:
        "IELTS Intensive Writing",
      linkTo: "",
    },
  ],
};

export const resources = {
  title: "Tài nguyên",
  data: [
    {
      content: "Lịch khai giảng",
      linkTo: "",
    },
    {
      content: "Thư viện đề thi",
      linkTo: "",
    },
    {
      content: "Bài viết",
      linkTo: "",
    },
    {
      content: "Kho tài liệu",
      linkTo: "",
    },
    {
      content: "Live class",
      linkTo: "",
    },
    {
      content: "Study classes",
      linkTo: "",
    },
  ],
};

export const support = {
  title: "Hỗ trợ",
  data: [
    {
      content: "Hướng dẫn sử dụng",
      linkTo: "",
    },
    {
      content: "Hướng dẫn mua hàng",
      linkTo: "",
    },
    {
      content: "Chăm sóc khách hàng",
      linkTo: "",
    },
    {
      content: "Phản hồi khiếu nại",
      linkTo: "",
    },
  ],
};
export const aboutUs = {
  title: "Về chúng tôi",
  data: [
    {
      content: "Về chúng tôi",
      linkTo: "",
    },
    {
      content: "Liên hệ",
      linkTo: "",
    },
    {
      content: "Điều khoản bảo mật",
      linkTo: "",
    },
    {
      content: "Điều khoản sử dụng",
      linkTo: "",
    },
    {
      content:
        "Điều khoản và Điều Kiện Giao Dịch",
      linkTo: "",
    },
  ],
};

export type dataProps = [
  {
    content: string;
    linkTo: string;
  },
];
export type contentProps = {
  title: string;
  data: dataProps;
};
