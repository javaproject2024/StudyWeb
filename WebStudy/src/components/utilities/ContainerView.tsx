export default function ContainerView({
  children,
}) {
  return (
    <div
      className="container"
      style={{ maxWidth: "1170px" }}
    >
      <div className="row">
        {children}
      </div>
    </div>
  );
}
