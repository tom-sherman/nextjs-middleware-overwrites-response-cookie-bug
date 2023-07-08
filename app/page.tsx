import { cookies } from "next/headers";

async function action(form: FormData) {
  "use server";
  cookies().set("component-cookie", form.get("component-cookie") as string);
}

export default function Page() {
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
      <form action={action}>
        <input name="component-cookie" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
