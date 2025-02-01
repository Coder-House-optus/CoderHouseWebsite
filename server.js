const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/leetcode", async (req, res) => {
  try {
    const response = await axios.get("https://leetcode.com/api/problems/all/");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch LeetCode data" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
