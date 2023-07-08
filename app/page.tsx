import { redirect } from "next/navigation";
import { cookies } from "next/headers";

async function updateAction(form: FormData) {
  "use server";
  cookies().set("component-cookie", form.get("component-cookie") as string, {
    httpOnly: true,
  });
}

async function deleteAction() {
  "use server";
  cookies().delete("component-cookie");
  redirect("/");
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
      <form action={updateAction}>
        <input name="component-cookie" />
        <button type="submit">Submit</button>
        <button formAction={deleteAction}>Delete</button>
      </form>
    </>
  );
}
