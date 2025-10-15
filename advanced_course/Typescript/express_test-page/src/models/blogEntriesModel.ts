import * as fsCRUD from "../fs/fsCrudOperations";
import * as path from "node:path";
import { BlogEntries } from "../types/models";

const FILE_PATH = path.join(__dirname, "..", "data", "entries.json");

export async function getAllBlogEntries():Promise<BlogEntries> {
  try {
    const blogEntries = await fsCRUD.readThisFile(FILE_PATH);
    if (blogEntries.length === 0) {
      return [];
    } else {
      return JSON.parse(blogEntries);
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}
