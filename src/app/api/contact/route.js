
// app/api/contact/route.js
export async function POST(req) {
  const body = await req.json();

  console.log("Body is:",body);
  // simulate delay
//   await new Promise((res) => setTimeout(res, 1500));

//   if (!body.email) {
//     return Response.json(
//       { error: "Email is required" },
//       { status: 400 }
//     );
//   }

  return Response.json({
    message: "Form submitted successfully",
  });
}