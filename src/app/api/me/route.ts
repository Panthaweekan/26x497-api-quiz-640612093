import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export type MeGetResponse = {
  studentId: string;
  firstName: string;
  lastName: string;
};

export const GET = async () => {
  //1. write your name & id
  return NextResponse.json<MeGetResponse>({
    studentId: "640612093",
    firstName: "Panthaweekan",
    lastName: "Somngam",
  });
};
