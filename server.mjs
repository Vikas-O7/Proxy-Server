import express from 'express';
import fetch from "node-fetch";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const { name, content } = req.query; // extract the name and content from query parameters
  const myHeaders = new Headers();
  myHeaders.append(
    "authorization",
    "Bearer eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE2ODM1NjAxMTUyNDVfNWYxMjdlODctNGEwMC00M2JiLWJlNmMtMjhhYTc0NzhiZTNhX3VlMSIsIm9yZyI6Ijk3NUQwMTcyNUQ1QTZCMUMwQTQ5NUVGNUBBZG9iZU9yZyIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiJmNTMyYWQzZTFiNWM0ZjZkOGYxZTc4YjU5YjIzNGFkNiIsInVzZXJfaWQiOiI3QkM0MjhGRjY0NTU0Mzk3MEE0OTVFREJAdGVjaGFjY3QuYWRvYmUuY29tIiwiYXMiOiJpbXMtbmExIiwiYWFfaWQiOiI3QkM0MjhGRjY0NTU0Mzk3MEE0OTVFREJAdGVjaGFjY3QuYWRvYmUuY29tIiwiY3RwIjozLCJtb2kiOiIyYzk3NjE4ZSIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsImNyZWF0ZWRfYXQiOiIxNjgzNTYwMTE1MjQ1Iiwic2NvcGUiOiJvcGVuaWQsQWRvYmVJRCx0YXJnZXRfc2RrLGFkZGl0aW9uYWxfaW5mby5yb2xlcyxyZWFkX29yZ2FuaXphdGlvbnMsYWRkaXRpb25hbF9pbmZvLnByb2plY3RlZFByb2R1Y3RDb250ZXh0In0.ctNwUkbo3wXBCMEeuOuibeU9Di4Wvb7K-gOA580PBo-PQ8bILA4k9ASJJ-VivuwCopTIE-ZqX3YEaLCZa1j8HFxlbTWHWOFpLSVsQBDdRIvDaLwGtVBRRV5Br_WiLuNFKYy7uTM-qJ-YA7sOULsOzuhVZaIIqPOcj_6KbEwy7h5E1XugaLnkKEbcYqKuGPfWsZ9xCFPi4JgObpchHBen5jf-qbT7n0JWWrjPq6HCw3BNzPXfhvoST4vppgGDx2K1w_aJfdtgBxgFv-0oagxkXoT3sVNBg29fIMFzpQ1f9FBqh355xVzSNwI3D0vg_jypHVx5G4xKP62jmK0US_PIgA"
  );
  myHeaders.append("cache-control", "no-cache");
  myHeaders.append("content-type", "application/vnd.adobe.target.v2+json");
  myHeaders.append("x-api-key", "f532ad3e1b5c4f6d8f1e78b59b234ad6");

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