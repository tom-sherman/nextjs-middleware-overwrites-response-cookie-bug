import { cookies } from "next/headers";

async function action(form: FormData) {
  "use server";
  cookies().set("some-cookie", form.get("some-cookie") as string);
}

export default function Page() {
  return (
    <>
      <p>some-cookie: {cookies().get("some-cookie")?.value || "No data"}</p>
      <p>other-cookie: {cookies().get("other-cookie")?.value || "No data"}</p>
      <form action={action}>
        <input name="some-cookie" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
