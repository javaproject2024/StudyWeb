import "../scss/_courseLists.scss";
import CourseItems from "./CourseItems";

function CourseLists() {
  return (
    <div className="container">
      <h2 className="home-h2">
        Khoá học online nổi bật
      </h2>
      <div className="w-100 mx-auto p-0 z-1 position-relative overflow-hidden list-unstyled swiper-container-pointer-events">
        <div className="d-flex position-relative w-100 h-100 z-1 swiper-wrapper">
          <CourseItems />
        </div>
      </div>
    </div>
  );
}

export default CourseLists;
