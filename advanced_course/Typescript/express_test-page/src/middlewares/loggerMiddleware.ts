import type { Request, Response, NextFunction } from "express";
import { access, writeFile, constants, appendFile } from "node:fs/promises";
import * as path from "node:path";

const LOG_DIR = path.join(__dirname, "..", "..", "logs");
const LOG_FILE = path.join(LOG_DIR, "log.txt");

async function addLogMessage(message: string): Promise<void> {
  try {
    if (message.length > 0) {
      await appendFile(LOG_FILE, `${message}\n`);
    } else {
      throw Error("message is not as expected. Please check format");
    }
  } catch (error) {
    console.error(error);
  }
}

async function fileExists(file = LOG_FILE): Promise<boolean> {
  try {
    await access(file, constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
}

async function createLogFile(): Promise<void> {
  try {
    await writeFile(path.join(LOG_DIR, "log.txt"), "", {
      encoding: "utf-8",
    });
  } catch (error) {
    console.error(error);
  }
}

fileExists()
  .then(async (fileExists: boolean) => {
    if (!fileExists) {
      await createLogFile();
    }
  })
  .catch((error) => console.log(error));

/**
 * Definition of log entry
 *
 * fields:
 * - Current date & time
 * - HTTP Method
 * - IP adress
 * - Url
 *
 */
export async function logger(req: Request, res: Response, next: NextFunction) {
  const dateTime = new Date().toISOString();
  const { method, ip, originalUrl: url } = req;
  const logString = `${dateTime}: ${method} by ${ip} at ${url}`;
  console.log(logString);
  addLogMessage(logString);
  next();
}
