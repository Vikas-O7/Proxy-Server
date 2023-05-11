import express from 'express'
import fetch from "node-fetch";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "authorization",
    "eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE2ODM3OTY4NjAwODZfNmYzZDU5NjgtMmRlZC00OTAwLTkwZTgtYjYxMzk3NDg1ZDhkX3VlMSIsIm9yZyI6Ijk3NUQwMTcyNUQ1QTZCMUMwQTQ5NUVGNUBBZG9iZU9yZyIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiI0OThjMzgyMDJmMGQ0NzVlYjkwZTM1MjdjZDcwYzY5NiIsInVzZXJfaWQiOiJERTUwMjhCNzY0NTkyRTREMEE0OTVDRDBAdGVjaGFjY3QuYWRvYmUuY29tIiwiYXMiOiJpbXMtbmExIiwiYWFfaWQiOiJERTUwMjhCNzY0NTkyRTREMEE0OTVDRDBAdGVjaGFjY3QuYWRvYmUuY29tIiwiY3RwIjozLCJtb2kiOiI3NzExYTRjZSIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsInNjb3BlIjoib3BlbmlkLEFkb2JlSUQsdGFyZ2V0X3NkayxhZGRpdGlvbmFsX2luZm8ucm9sZXMscmVhZF9vcmdhbml6YXRpb25zLGFkZGl0aW9uYWxfaW5mby5wcm9qZWN0ZWRQcm9kdWN0Q29udGV4dCIsImNyZWF0ZWRfYXQiOiIxNjgzNzk2ODYwMDg2In0.VvNAiganPG5l-UGJTeSKPkZIQKEJNY6g8rWNtvwptfc5DQrU8LHVwU14Z4F7NVFwGuQuX58Vo6T-Su1wm1bRwXvvop_kzBLl9JrOpWm2mWso3GulaAwmNXsyBhjCZZ4P3kbC8bUynorRwOYPCHV4cyE_mRS2VqXEFjuAPVh43HCLVygo9l5NepYfVofwctH4Lc8zqGzgwcAzo8vtUEmNDlUBEAdXHJPXnLcAwivz6_amFmYzqIaHBYprkfy6vpHlWHLUVJ15b2SnOsRiSiwV3O7aRnh6eXOg3cTmoxNzxDPC_arM6vAa92jBiYSH4bNC9xjenR3gqc-xXn45nPsZMA"
  );
  myHeaders.append("cache-control", "no-store");
  myHeaders.append("content-type", "application/vnd.adobe.target.v2+json");
  myHeaders.append("x-api-key", "498c38202f0d475eb90e3527cd70c696");

  var raw = JSON.stringify({
    name: "New Offer - CORS",
    content: "<div>The content of the offer</div>",
  });

  var requestOptions = {
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
