import express from 'express';
import fetch from "node-fetch";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const { name, content } = req.query; // extract the name and content from query parameters
  const myHeaders = new Headers();
  myHeaders.append(
    "authorization",
    "Bearer eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE2ODM1NjYxODQxNzdfYThmZTk0Y2QtMTFkYS00MGZjLTliYzMtOWVhNWRhYTJlNjkwX3VlMSIsIm9yZyI6Ijk3NUQwMTcyNUQ1QTZCMUMwQTQ5NUVGNUBBZG9iZU9yZyIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiI0OThjMzgyMDJmMGQ0NzVlYjkwZTM1MjdjZDcwYzY5NiIsInVzZXJfaWQiOiJERTUwMjhCNzY0NTkyRTREMEE0OTVDRDBAdGVjaGFjY3QuYWRvYmUuY29tIiwiYXMiOiJpbXMtbmExIiwiYWFfaWQiOiJERTUwMjhCNzY0NTkyRTREMEE0OTVDRDBAdGVjaGFjY3QuYWRvYmUuY29tIiwiY3RwIjozLCJtb2kiOiJlOWZlZDc2ZCIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsInNjb3BlIjoib3BlbmlkLEFkb2JlSUQsdGFyZ2V0X3NkayxhZGRpdGlvbmFsX2luZm8ucm9sZXMscmVhZF9vcmdhbml6YXRpb25zLGFkZGl0aW9uYWxfaW5mby5wcm9qZWN0ZWRQcm9kdWN0Q29udGV4dCIsImNyZWF0ZWRfYXQiOiIxNjgzNTY2MTg0MTc3In0.Az2douqgZ0ozJwvFtX-oC7uX47Aco88cLMhf3aK-3HRXC4hZkZ53NJUIzIyH7aYRH4819cqDoHcQXM6wcdfgXQF2Ezx7JAlNJcgOd7cdwhjW_tk6Uw7M6ei-LzC4QBGN7OWnuVkjZWSToSWS-vFkGML5cOuBPAtFPwc7p_QY1ILSFQAMUvL-iimPRhVaokOYU_3uhtA4-8Jcc3_e7fuv2WFhXjfY_9AIetGlzWjXpKFA-_e9ORI2QSLabkXiSL63ldmxJLZXdlf2NjedeSzRLYTd7cJACrYLF5nnJHo1i-a77LgFVJWkkJXSGeWBCuqdZnkMsgA51Iwh7ZqPYjjYeg"
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