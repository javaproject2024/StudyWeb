import CourseAdviseForm from "./components/CourseAdviseForm";
import CourseLists from "./components/CourseLists";
import CoursesContent from "./components/CoursesContent";
import SlideMainContainer from "./components/SlideMainContainer";

function HomePage() {
  return (
    <div className="position-relative pt-5">
      <div className="py-0 bg-white d-flex flex-column position-relative">
        <div className="py-3 pt-0">
          <SlideMainContainer />
        </div>
        <div className="py-3">
          <CoursesContent />
        </div>
        <div className="py-3">
          <CourseLists />
        </div>
        <div className="py-3">
          <CourseAdviseForm />
        </div>
        {/* <div className="py-3">
          CONTENT 5
        </div>
        <div className="py-3 ">
          CONTENT 5
        </div> */}
      </div>
    </div>
  );
}

export default HomePage;
