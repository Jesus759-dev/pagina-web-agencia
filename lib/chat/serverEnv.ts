/**
 * Loads the chatbot secrets from a private file outside the deploy folder.
 *
 * Hostinger rebuilds the whole app folder on every push, so a `.env` placed
 * there is wiped by the next deploy. The secrets live instead in
 * `~/.config/neurovia/chat.env` on the hosting account (override the path with
 * CHAT_SECRETS_FILE). Plain `KEY=value` lines. Real env vars always win.
 * The repo is public: never commit that file or its values.
 */
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const file = process.env.CHAT_SECRETS_FILE || join(homedir(), ".config", "neurovia", "chat.env");

try {
  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^(["'])(.*)\1$/, "$2");
  }
} catch {
  // No file: fall back to whatever the environment provides (lite mode if nothing).
}
