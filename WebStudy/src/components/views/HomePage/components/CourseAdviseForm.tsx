// import { Image } from "antd";
import {
  useForm,
  SubmitHandler,
} from "react-hook-form";

function CourseAdviseForm() {
  const form = useForm();
  const {
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<any> = (
    data,
  ) => {
    console.log(data);
  };
  return (
    <div>
      {/* <Image
        className="z-1"
        src="/static/media/home/HomeBanner/students.jpg"
        preview={false}
        width={"100%"}
        height={400}
      ></Image> */}

      <form
        className="z-10"
        onSubmit={form.handleSubmit(
          onSubmit,
        )}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input
          defaultValue="test"
          {...form.register("example")}
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          {...form.register(
            "exampleRequired",
            { required: true },
          )}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && (
          <span>
            This field is required
          </span>
        )}
        <input type="submit" />
      </form>
    </div>
  );
}

export default CourseAdviseForm;
