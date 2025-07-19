const express = require("express");
const app = express();
const port = 3030;
const os = require("os");

app.get("/", (req, res) => {
  const hostname = os.hostname();
  const message = `
    <h1>¡Hola desde el servidor ${hostname}!</h1>
    <p>Esta respuesta viene del contenedor: <strong>${hostname}</strong></p>
    <p>Timestamp: ${new Date().toISOString()}</p>
  `;
  res.send(message);
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    hostname: os.hostname(),
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
  console.log(`Hostname: ${os.hostname()}`);
});
