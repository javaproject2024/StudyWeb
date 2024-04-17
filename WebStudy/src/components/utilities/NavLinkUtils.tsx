import {
  Link,
  NavLink,
} from "react-router-dom";
import styled from "styled-components";
import * as PATH from "@/configs/routeConfig.tsx";

const LinkStyled = styled(Link)`
  padding: 4px 15px;
  background-color: #f8f9fa;
  border-radius: 25px;
  white-space: nowarp;
  color: #1a1a1a;
`;

export default function NavLinkUtils({
  title,
}) {
  return (
    <>
      <li className="nav-item w-auto">
        <LinkStyled
          className="nav-link"
          to={PATH.TEST_PATH_TITLE.replace(
            ":title",
            title,
          )}
        >
          {title}
        </LinkStyled>
      </li>
    </>
  );
}
