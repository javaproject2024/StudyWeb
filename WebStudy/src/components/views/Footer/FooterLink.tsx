import React from "react";
import "./_footer.scss";
import { contentProps } from "./TitleData";

function FooterLink(
  props: contentProps,
) {
  return (
    <div>
      <div className="footer-title">
        {props.title}
      </div>
      <ul className="list-unstyled text-small link-title">
        {props.data.map(
          (item, index) => {
            return (
              <li key={index}>
                <a href={item.linkTo}>
                  {item.content}
                </a>
              </li>
            );
          },
        )}
      </ul>
    </div>
  );
}

export default FooterLink;
