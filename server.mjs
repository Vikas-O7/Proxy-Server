import express from 'express'
import fetch from "node-fetch";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "authorization",
    "Bearer eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE2ODM0MDM3MzMwNzZfMTUwMjNkMTItYWFkYi00ZWFkLTgzNTMtNTBkZWI1MGYzNjFkX3VlMSIsIm9yZyI6Ijk3NUQwMTcyNUQ1QTZCMUMwQTQ5NUVGNUBBZG9iZU9yZyIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiJmNTMyYWQzZTFiNWM0ZjZkOGYxZTc4YjU5YjIzNGFkNiIsInVzZXJfaWQiOiI3QkM0MjhGRjY0NTU0Mzk3MEE0OTVFREJAdGVjaGFjY3QuYWRvYmUuY29tIiwiYXMiOiJpbXMtbmExIiwiYWFfaWQiOiI3QkM0MjhGRjY0NTU0Mzk3MEE0OTVFREJAdGVjaGFjY3QuYWRvYmUuY29tIiwiY3RwIjozLCJtb2kiOiIxMGRkNjJkNiIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsInNjb3BlIjoib3BlbmlkLEFkb2JlSUQsdGFyZ2V0X3NkayxhZGRpdGlvbmFsX2luZm8ucm9sZXMscmVhZF9vcmdhbml6YXRpb25zLGFkZGl0aW9uYWxfaW5mby5wcm9qZWN0ZWRQcm9kdWN0Q29udGV4dCIsImNyZWF0ZWRfYXQiOiIxNjgzNDAzNzMzMDc2In0.WrOoFMuook3IbA1KCuw9iIsOnj4767UbLehiqHvvd8veHQuksM-n-I9S-xX8xwKmGjVWIVUF1wZvOTjpG1DBSPTUujV5W9Ih53qhemqtYT_NsjYmMFLun_d7qvgo9OMvCwakRKoOU9hoC1d5N7cxin_J9z7azS6yHgRucbgmA4ZMv2J4QuackwPq9eJA5JTeq6QEjgcAFZL42OGc2RDcbLHN_8zoBLN1AQLwMgnrYweEckGlV1hOowuJ0DzDjwKysjq46QaWt-WMqNUrYTE_6a6SySw5Qnrm0l1nJH9QMF2vejfAfsJd5NEkSI5CRhrNV9i8zdgEcIns2i0Ga8UnGA"
  );
  myHeaders.append("cache-control", "no-cache");
  myHeaders.append("content-type", "application/vnd.adobe.target.v2+json");
  myHeaders.append("x-api-key", "f532ad3e1b5c4f6d8f1e78b59b234ad6");

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
