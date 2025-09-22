const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 Hello from Node.js CI/CD Demo App! by NUNAVATHU Govinda Raju");
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});

