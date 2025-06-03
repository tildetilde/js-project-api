import fs from "fs";

const saveThoughts = (thoughts) => {
  fs.writeFileSync("data/data.json", JSON.stringify(thoughts, null, 2));
};

export default saveThoughts;
