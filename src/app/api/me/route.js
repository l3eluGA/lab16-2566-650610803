import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Rungthip Phongsupasa",
    studentId: "650610803",
  });
};
