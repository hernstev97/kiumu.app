"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function login(formData: FormData) {
    const enteredPassword = formData.get("previewPassword") as string;
    const previewPassword = process.env.PREVIEW_PASSWORD;

    if (enteredPassword !== previewPassword) {
        redirect("/login");
    } else {
        const cookieStore = await cookies();
        cookieStore.set("preview-authorized", "true", {
            httpOnly: true,
            sameSite: "lax",
            path: "/",
            secure: process.env.NODE_ENV === "production",
          });
        redirect("/");
    }
};