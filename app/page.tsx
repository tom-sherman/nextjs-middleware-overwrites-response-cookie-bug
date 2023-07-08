import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { Display } from "./Display";

async function updateAction(form: FormData) {
  "use server";
  cookies().set("component-cookie", form.get("component-cookie") as string, {
    httpOnly: true,
  });
}

async function deleteAction(form: FormData) {
  "use server";
  cookies().delete("component-cookie");
  revalidatePath("/");
}

export default function Page() {
  return (
    <>
      <p>Page:</p>
      <Display />
      <form action={updateAction}>
        <input name="component-cookie" />
        <button type="submit">Submit</button>
        <button formAction={deleteAction}>Delete</button>
      </form>
    </>
  );
}
