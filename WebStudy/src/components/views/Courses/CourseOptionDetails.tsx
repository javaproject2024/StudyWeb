import styled from "styled-components";
import CourseInfo from "./CourseInfo";
import ContainerView from "@/components/utilities/ContainerView";

const ContentBlockStyled = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.65rem;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 0 0
    rgba(143, 156, 173, 0.2);
`;

export default function CourseOptionDetails() {
  return (
    <div className="d-flex flex-column position-relative">
      <ContainerView>
        <div className="col-12 col-md-9">
          <ContentBlockStyled>
            <div>#Toeic</div>
            <h1>
              Practice Set 2023 TOEIC
              Test 1
            </h1>
            <CourseInfo />
          </ContentBlockStyled>
        </div>
        <div className="col-12 col-md-3">
          Some content here
        </div>
      </ContainerView>
    </div>
  );
}
