import express from 'express';
import fetch from "node-fetch";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const { name, content } = req.query; // extract the name and content from query parameters
  var myHeaders = new Headers();
  myHeaders.append(
    "authorization",
    "Bearer eyJhbGciOiJSUzI1NiJ9.eyJleHAiOjE2ODM4MzExNjQsImlzcyI6Ijk3NUQwMTcyNUQ1QTZCMUMwQTQ5NUVGNUBBZG9iZU9yZyIsInN1YiI6IjQyOUUyODg0NjQ0QjkwMEEwQTQ5NUMzREB0ZWNoYWNjdC5hZG9iZS5jb20iLCJodHRwczovL2ltcy1uYTEuYWRvYmVsb2dpbi5jb20vcy9lbnRfbWFya2V0aW5nX3NkayI6dHJ1ZSwiYXVkIjoiaHR0cHM6Ly9pbXMtbmExLmFkb2JlbG9naW4uY29tL2MvZjY0MjllMzc3YzlmNGI2ZDlhOTBkYzMyYWEzYWY5MzkifQ.yPr6w3zLXHZg-u_Sm2cMPFYbn-HilpC1VAHzUlu_rnSMWTM3PGwHGvWtEn6DRJwNfEfgG3mWeLyjND6ZbcYUU9LVNW458-t-hyvMqUI9lYmcGo2ub4gXOFz7oNRFN2YUd7P1VFb06j5mmsFQpczkzQuZGl-aKQJX0L6Gx1r3FoGFrVCs5KjrP-KTfSha6nTGLOWjHEKunZf4ndB5BGK-hVB709n1MKwPu3DIxmKEhLKBgM6P0LmAdZWgqc7HwVl4euPYC74YJ9yDc05pRD33u96gFzun5mToZ9uSp9EXXY7lS15B7pGKbeutXfYqoP1MzgvlusIrTbg9SFbihz2gEg"
  ); 

  myHeaders.append("cache-control", "no-cache");
  myHeaders.append("content-type", "application/vnd.adobe.target.v2+json");
  myHeaders.append("x-api-key", "f6429e377c9f4b6d9a90dc32aa3af939");

  const raw = JSON.stringify({
    name,
    content: <img src={content}/>,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://mc.adobe.io/agisinternal/target/offers/content",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((error) => {
      console.log("error", error);
      res.send(error);
    });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});