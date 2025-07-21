"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const postData = async () => {
    try {
      const res = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "My new todo",
          password: "12345",
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log("POST successful:", data);
      router.push("/todo");
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      console.error("POST failed:", error.message);
    }
  };

  return (
    <div>
      <div>Todo-App - frontend</div>
      <Button onClick={postData} variant={"outline"}>
        Click
      </Button>
    </div>
  );
}
