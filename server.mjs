import express from 'express';
import fetch from "node-fetch";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const { name, content } = req.query; // extract the name and content from query parameters
  const myHeaders = new Headers();
  myHeaders.append(
    "authorization",
    "Bearer eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE2ODM1NDA2Nzg3MjBfNzg4NjgxZTEtYTk0NS00Zjk2LTkyNTEtMTY2ZDhhYmQ1NDBmX3VlMSIsIm9yZyI6Ijk3NUQwMTcyNUQ1QTZCMUMwQTQ5NUVGNUBBZG9iZU9yZyIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiJmNTMyYWQzZTFiNWM0ZjZkOGYxZTc4YjU5YjIzNGFkNiIsInVzZXJfaWQiOiI3QkM0MjhGRjY0NTU0Mzk3MEE0OTVFREJAdGVjaGFjY3QuYWRvYmUuY29tIiwiYXMiOiJpbXMtbmExIiwiYWFfaWQiOiI3QkM0MjhGRjY0NTU0Mzk3MEE0OTVFREJAdGVjaGFjY3QuYWRvYmUuY29tIiwiY3RwIjozLCJtb2kiOiIyNzgyNDljYSIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsImNyZWF0ZWRfYXQiOiIxNjgzNTQwNjc4NzIwIiwic2NvcGUiOiJvcGVuaWQsQWRvYmVJRCx0YXJnZXRfc2RrLGFkZGl0aW9uYWxfaW5mby5yb2xlcyxyZWFkX29yZ2FuaXphdGlvbnMsYWRkaXRpb25hbF9pbmZvLnByb2plY3RlZFByb2R1Y3RDb250ZXh0In0.AWKKIxiq3tTll1tDZEBCWlfAPIYQq0NJBUSH_I7zuaKGbkesZ-O2EyX_NN33IQu4XZrktZJMcnA8ArGDOylxWWlUcHY0W1SRv-PqtuaFoTldvhcZLPdMu0yQ6fonZGjXffbJzZNWHyNIWnJ2PmlNIniCs1dmIxbpmXZVZAHoHO9xIgu2gTWrb52Ly7inNB3mlpTRQG261TGS5KeGesEaEBFR-Z0zVPWOOknTAZq9xaf3DyCnt-B8vVhqLHcd6yWII2GvZ1LJf4h0YtTMoNp65TKW9FYK-x0eQtsDGjMrfzdsCS98HLLbZ73DIyUs-Rxz5smBXpmJZFG4TkkliRc6cg"
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
