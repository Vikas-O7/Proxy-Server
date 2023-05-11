import express from 'express'
import fetch from "node-fetch";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "authorization",
    "Bearer eyJhbGciOiJSUzI1NiJ9.eyJleHAiOjE2ODM4ODE5ODgsImlzcyI6Ijk3NUQwMTcyNUQ1QTZCMUMwQTQ5NUVGNUBBZG9iZU9yZyIsInN1YiI6IkM5MTEyOEUxNjQ1MEI2NzcwQTQ5NUNFN0B0ZWNoYWNjdC5hZG9iZS5jb20iLCJodHRwczovL2ltcy1uYTEuYWRvYmVsb2dpbi5jb20vcy9lbnRfbWFya2V0aW5nX3NkayI6dHJ1ZSwiYXVkIjoiaHR0cHM6Ly9pbXMtbmExLmFkb2JlbG9naW4uY29tL2MvMGUzY2IyMzA4ZWVmNGU0MWFiYzE4N2EzZTIxMjhiZTIifQ.RNb35ISZf5Z4jNSivm8W_3fo4U4Cl18Uk9JdsQsvcrA4VhH0WMCsi2NJk9wm1WRIURjJqxHkQdfZEE_ALUXGgrYqXxdwPD6GmO3dBlOZ9CKLt7NuOivJdjsb7a2ucuogZl6ByzKVQRzEGJjHEto6SUqjebA_Lonib9_uASMzPXJF-e-wyFCO5_KeA2wj2tOZlaJPMQcUz7vzZde-6j1_1BDevRRHzeVRJqanRb9cd4vBs27uGnEYGNWTxG1MHC6pPFGu2fZsyKAowYLozv0h6YvbZ7NAfUD0jw2ZP0iLvJBHbbhubQAp8AIkf6FKfIITpZDQgDTad-OdgHkVZRBeZw"
  );
  myHeaders.append("cache-control", "no-cache");
  myHeaders.append("content-type", "application/vnd.adobe.target.v2+json");
  myHeaders.append("x-api-key", "0e3cb2308eef4e41abc187a3e2128be2");

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
