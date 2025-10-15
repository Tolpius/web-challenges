import * as path from "node:path";
import {
  writeFile,
  access,
  constants,
  mkdir,
  unlink,
  readFile,
} from "node:fs/promises";

const LOG_DIR = path.join(__dirname, "..", "..", "logs"); //PATH/logs
const LOG_FILE = path.join(LOG_DIR, "log.txt");

export async function createFile(filePath = LOG_FILE, content = "") {
  try {
    const dirPath = path.join(filePath, "..")
    if (!(await pathExists(dirPath))){
await createDir(dirPath);
    }
    await writeFile(filePath, content, { encoding: "utf-8" });
    console.log(`File successfully created: ${filePath}`);
  } catch (error) {
    console.error(error);
  }
}

export async function createDir(path = LOG_DIR) {
  try {
    await mkdir(path, { recursive: true });
    console.log(`Directory successfully created: ${path}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteFile(path: string): Promise<void> {
  try {
    if (await pathExists(path)) {
      await access(path, constants.W_OK)
      await unlink(path);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function pathExists(path = LOG_FILE): Promise<boolean> {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

export async function readThisFile(path = ""):Promise<string> {
  try{
if (path){
   await access(path, constants.R_OK)
  return await readFile(path, {encoding: "utf-8"})
}
throw Error("cannot find FilePath or read file: " + path)
  }
  catch (error){
console.error(error)
return ""
  }
}