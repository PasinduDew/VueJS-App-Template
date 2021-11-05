import config from "../../config";

// Console Logging
export function log(message, data = null, type = "debug") {
  if (config.IS_DEBUGGING === false) return;
  if (type === "debug") {
    console.debug(message, data);
  } else if (type === "error") {
    console.error(message, data);
  }
}
