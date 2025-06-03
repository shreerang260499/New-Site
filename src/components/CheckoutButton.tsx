// filepath: f:\Shreerangdesigns\New-Site\backend\server.ts
app.post("/api/payment", async (req, res) => {
  const { amount, orderId } = req.body;

  // Example PhonePe API request payload
  const payload = {
    merchantId: "yourMerchantId",
    transactionId: orderId,
    amount: amount * 100, // Convert to paise
    redirectUrl: "https://your-frontend-url.com/payment-success",
  };

  // Make API call to PhonePe (use axios or fetch)
  try {
    const response = await fetch("https://api.phonepe.com/v3/transaction/initiate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer your-api-key",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});