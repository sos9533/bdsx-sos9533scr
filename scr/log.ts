import * as fs from "fs";
import { makeFile } from "../functions";
import { log_json, UseLog } from "../setting";


makeFile(log_json);

export function addlog(content: string) {
  if (UseLog) {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    
    const log_data = fs.readFileSync(log_json);
    
    const log = log_data+`\n[${month}/${day}/${hours}/${minutes}/${seconds}] ${content}`

    fs.writeFile(log_json, log , err => {
      if (err) {
        console.error(err)
        return
      }
    })
    
  }
}

