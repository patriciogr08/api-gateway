import * as fs from 'fs';

export function getJSONData(filePath: string): ServiceConfig[] {
  const data = fs.readFileSync(filePath, 'utf8');
  const jsonData = JSON.parse(data) as ServiceConfig[];
  return jsonData;
}