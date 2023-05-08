import express from 'express';
import fetch from "node-fetch";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const { name, content } = req.query; // extract the name and content from query parameters
  const myHeaders = new Headers();
  myHeaders.append(
    "authorization",
    "Bearer eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE2ODM1NjEwMzMyNzFfZGVmMTVjNzEtMTZmZS00MDZmLTg1MWItYjE1NmU2ZjI4OGNhX3VlMSIsIm9yZyI6Ijk3NUQwMTcyNUQ1QTZCMUMwQTQ5NUVGNUBBZG9iZU9yZyIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiJhNjYxM2FjZmYwNjY0NzRmOTlhZTk4MjFkOTc4MGYxOCIsInVzZXJfaWQiOiJFMDhBMjhBMjY0NTkxQTM0MEE0OTVDRkVAdGVjaGFjY3QuYWRvYmUuY29tIiwiYXMiOiJpbXMtbmExIiwiYWFfaWQiOiJFMDhBMjhBMjY0NTkxQTM0MEE0OTVDRkVAdGVjaGFjY3QuYWRvYmUuY29tIiwiY3RwIjozLCJtb2kiOiJmMGJlOTg5MCIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsInNjb3BlIjoib3BlbmlkLEFkb2JlSUQsdGFyZ2V0X3NkayxhZGRpdGlvbmFsX2luZm8ucm9sZXMscmVhZF9vcmdhbml6YXRpb25zLGFkZGl0aW9uYWxfaW5mby5wcm9qZWN0ZWRQcm9kdWN0Q29udGV4dCIsImNyZWF0ZWRfYXQiOiIxNjgzNTYxMDMzMjcxIn0.g4MPF3nls1bh5BlINGouds-2r_gDJW6zkYmNO8n320J-vVbxs304Kw5PUof93TIMVHHqgFMN5Jy4Pdor6RvXMAS-uqc5oPXa9qhW1yzO0AVDLd4NUD9AMXuFj6Cgwdu0FPlsQtrYT0ot_FdNgr0nGFpskpZN-FU5n_0NqbHtUWCbs8tXwmHf38p0mofApAxNaVQj0Gjq3kmvtYA1KzcMG19Sizr_MPqWZRxlOymMGGpbwRbxwti2EbQPVCLxK7pDNZMt_l0KfBsQ2i3Xl5AfcDNHovfkvmATcjypfMi2m8y2R_8Zpe7AMlBK7i1FEBmM8MVjQDj_cq9A0aDCj5Tq7Q"
  );
  myHeaders.append("cache-control", "no-cache");
  myHeaders.append("content-type", "application/vnd.adobe.target.v2+json");
  myHeaders.append("x-api-key", "a6613acff066474f99ae9821d9780f18");

  const raw = JSON.stringify({
    name,
    content,
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