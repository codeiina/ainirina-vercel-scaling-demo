export default function handler(req, res) {
  let sum = 0;
  for (let i = 0; i < 1e7; i++) sum += i;
  res.status(200).json({
    sum,
    time: new Date().toISOString(),
  });
}
