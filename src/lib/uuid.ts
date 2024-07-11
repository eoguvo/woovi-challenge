import { v4 as uuidv4 } from "uuid";

const uuid = function(separator: boolean = false) {
  const id = uuidv4();
  if (!separator) {
    return id.replace(/-/g, "");
  }
  return id;
};

export default uuid;
