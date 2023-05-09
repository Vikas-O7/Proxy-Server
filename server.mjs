import express from 'express';
import fetch from "node-fetch";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const { name, content } = req.query; // extract the name and content from query parameters
  var myHeaders = new Headers();
  myHeaders.append(
    "authorization",
    "Bearer eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE2ODM2MzAzNTE4MzJfMTRhYTExNTAtMGRhNC00MWE0LThkODctNWY3Yzg3MzIyZjNjX3VlMSIsIm9yZyI6Ijk3NUQwMTcyNUQ1QTZCMUMwQTQ5NUVGNUBBZG9iZU9yZyIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiI0OThjMzgyMDJmMGQ0NzVlYjkwZTM1MjdjZDcwYzY5NiIsInVzZXJfaWQiOiJERTUwMjhCNzY0NTkyRTREMEE0OTVDRDBAdGVjaGFjY3QuYWRvYmUuY29tIiwiYXMiOiJpbXMtbmExIiwiYWFfaWQiOiJERTUwMjhCNzY0NTkyRTREMEE0OTVDRDBAdGVjaGFjY3QuYWRvYmUuY29tIiwiY3RwIjozLCJtb2kiOiJkMTcyZmExYyIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsImNyZWF0ZWRfYXQiOiIxNjgzNjMwMzUxODMyIiwic2NvcGUiOiJvcGVuaWQsQWRvYmVJRCx0YXJnZXRfc2RrLGFkZGl0aW9uYWxfaW5mby5yb2xlcyxyZWFkX29yZ2FuaXphdGlvbnMsYWRkaXRpb25hbF9pbmZvLnByb2plY3RlZFByb2R1Y3RDb250ZXh0In0.SnujpHpWSFmC5fXJOJo5645rjgid6Zzkv6_-Wvv3jqQxNLSUVaxZdE_h2CErU6XXUutH-ZG12QT1XLxxAbI52RrFw1c7k5uttiJ5u4D0lzDdRCZ-9GoEw6lGBzZuaWDAJC9CRu5IjnpYdbjTuYOuKGlkMjgD-eWpt2qze_2e1IHxUtRj8z5JXKbE3dRZIFfzpv-htGqqrs2spaPj_SNARLgutcTy4f3lWZ0O_z2Zctq2RQb4dkhc8kKMfl4SSh94_a2ug3CFirLdcsL0azlWMI1Z1k7WDZjXnQiWdlv175X0GPHJ4SNE3r6EXcnFUWq9Njw6tb-q1T4rfRjiqQ3IDA"
  );
  var request_length = token_request.length;

  myHeaders.append("Content-length", "request_length");
  myHeaders.append("cache-control", "no-cache");
  myHeaders.append("content-type", "application/vnd.adobe.target.v2+json");
  myHeaders.append("x-api-key", "498c38202f0d475eb90e3527cd70c696");

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