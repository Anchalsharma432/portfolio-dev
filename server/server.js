import express from "express";
import cors from "cors";
import { spawn } from "child_process";

const app = express();
app.use(cors());
app.use(express.json());

// POST /api/chat → runs Ollama locally
app.post("/api/chat", async (req, res) => {
const { message } = req.body;
console.log("💬 Received:", message);

// Run Ollama command: ollama run gemma:2b "message"
const ollama = spawn("ollama", ["run", "gemma:2b"], { stdio: ["pipe", "pipe", "pipe"] });

let reply = "";
ollama.stdout.on("data", (data) => {
reply += data.toString();
});

ollama.stderr.on("data", (data) => {
console.error("⚠️ Ollama error:", data.toString());
});

ollama.on("close", (code) => {
console.log("✅ Ollama exited with code", code);
res.json({ reply: reply.trim() || "No response from AI." });
});

// Send user message to Ollama model
ollama.stdin.write(message + "\n");
ollama.stdin.end();
});

app.listen(5000, () => console.log("🧠 AI server running on http://localhost:5000"));