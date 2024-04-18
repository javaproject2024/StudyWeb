import React from "react";
import { useSearchParams } from "react-router-dom";

export default function PracticePage() {
  const [
    searchParams,
    setSearchParams,
  ] = useSearchParams();
  const path =
    searchParams.getAll("path");
  console.log(
    "🚀 ~ PracticePage ~ path:",
    path,
  );
  const timeLimit = searchParams.get(
    "time_limit",
  );
  console.log(
    "🚀 ~ PracticePage ~ timeLimit:",
    timeLimit,
  );

  return <div>PracticePage</div>;
}
