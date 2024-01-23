const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin: "http://localhost:3001",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
