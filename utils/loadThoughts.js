import fs from "fs";

const loadThoughts = () => {
  const data = fs.readFileSync("data/data.json");
  return JSON.parse(data);
};

export default loadThoughts;
