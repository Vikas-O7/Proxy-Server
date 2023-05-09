import express from 'express';
import fetch from "node-fetch";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const { name, content } = req.query; // extract the name and content from query parameters
  var myHeaders = new Headers();
  myHeaders.append(
    "authorization",
    "Bearer eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE2ODM2MjIyMTI1NDVfMTI0ZjUxMGQtZjdiYi00MDJkLTkxYzAtOWQ2YTY5MDRlOTBjX3VlMSIsIm9yZyI6Ijk3NUQwMTcyNUQ1QTZCMUMwQTQ5NUVGNUBBZG9iZU9yZyIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiI0OThjMzgyMDJmMGQ0NzVlYjkwZTM1MjdjZDcwYzY5NiIsInVzZXJfaWQiOiJERTUwMjhCNzY0NTkyRTREMEE0OTVDRDBAdGVjaGFjY3QuYWRvYmUuY29tIiwiYXMiOiJpbXMtbmExIiwiYWFfaWQiOiJERTUwMjhCNzY0NTkyRTREMEE0OTVDRDBAdGVjaGFjY3QuYWRvYmUuY29tIiwiY3RwIjozLCJtb2kiOiI5ODFhZGY1YSIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsImNyZWF0ZWRfYXQiOiIxNjgzNjIyMjEyNTQ1Iiwic2NvcGUiOiJvcGVuaWQsQWRvYmVJRCx0YXJnZXRfc2RrLGFkZGl0aW9uYWxfaW5mby5yb2xlcyxyZWFkX29yZ2FuaXphdGlvbnMsYWRkaXRpb25hbF9pbmZvLnByb2plY3RlZFByb2R1Y3RDb250ZXh0In0.DgZoqSSSgtxuj3jfDv0X5Va501FKbB0np6HFMcjlSx0ly485PeB45XwtOgTVTiOrkO82Y0De27KJjUNz8XCOYzCSJpP_GYBCuKuWzp98NY_a8xsGgJB74AgwgMjFbECCO0VvEVGEqymTL0xiVD6MClvD_ljRt_EQeg8ebn6xxJp7Xxpmgym-Kb7ZlwtoqjRVjzpwCuZ8O7MeZW_kvzrt67JfjiT0dI5I2Cwu76ex7mrnnGlKb3hcDk_jurElJJ05xzV1Xu4uw1upLzPf26K-kUCGFUb7Z1cWHi552NuQJeiVbox7hwA5LqayDIbWG48_YUo9J0BvhWGJD9Xvu5Sk-Q"
  );
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