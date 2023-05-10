import express from 'express'
import fetch from "node-fetch";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "authorization",
    "Bearer eyJhbGciOiJSUzI1NiJ9.eyJleHAiOjE2ODM4MzIyMDksImlzcyI6Ijk3NUQwMTcyNUQ1QTZCMUMwQTQ5NUVGNUBBZG9iZU9yZyIsInN1YiI6IjQyOUUyODg0NjQ0QjkwMEEwQTQ5NUMzREB0ZWNoYWNjdC5hZG9iZS5jb20iLCJodHRwczovL2ltcy1uYTEuYWRvYmVsb2dpbi5jb20vcy9lbnRfbWFya2V0aW5nX3NkayI6dHJ1ZSwiYXVkIjoiaHR0cHM6Ly9pbXMtbmExLmFkb2JlbG9naW4uY29tL2MvZjY0MjllMzc3YzlmNGI2ZDlhOTBkYzMyYWEzYWY5MzkifQ.NG1qr7-JYr_ePAwhggX52l_r8Ov5FzpLRW3qMJYt8mWoBrHHSJrpiObKFaUkdMoqalvlwpJ3a235ju3V8rFd5Xd5qblyZwci8U5dvIV7ivSqRfo2t9jl8Qw8gUrO_PtbsWvWx49VRpgg2RzIZzVfLjAqAq5aklpetVhwKV-P8bje0cch1MezIkFBYw72j6x2NZOofxK6cDDRcEZH4bhPSe4WanNzSJIoviykkm-z7HAAAAM0JluGZyabCo3gj3NVycN4jsUvkZSsbDRNdNwdMSDZ9U2C7ikRT5Sl91gEfgUBjFAxQYCg3nGeimuNXQFYm6lLt_bBTdGSDoCQ0YrxaQ"
  );
  myHeaders.append("cache-control", "no-cache");
  myHeaders.append("content-type", "application/vnd.adobe.target.v2+json");
  myHeaders.append("x-api-key", "f6429e377c9f4b6d9a90dc32aa3af939");

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
