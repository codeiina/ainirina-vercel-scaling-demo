// api/heavy.js
export default async function handler(req, res) {
  // simulasi proses berat
  await new Promise((resolve) => setTimeout(resolve, 5000)); // delay 5s

  res.status(200).json({
    message: "Heavy task selesai!",
    finishedAt: new Date().toISOString(),
  });
}
