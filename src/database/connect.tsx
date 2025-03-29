import Database from "@tauri-apps/plugin-sql";

async function connectToDB() {
  try {
    // Load SQLite database
    const db = await Database.load("sqlite:file_manager.db");

    console.log("Database connected successfully!");
    return db;
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}
export default connectToDB;
