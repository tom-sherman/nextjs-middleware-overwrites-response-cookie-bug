import { cookies } from "next/headers";

export function Display() {
  return (
    <>
      <p>
        component-cookie:{" "}
        {cookies().get("component-cookie")?.value || "No data"}
      </p>
      <p>
        middleware-cookie:{" "}
        {cookies().get("middleware-cookie")?.value || "No data"}
      </p>
    </>
  );
}
