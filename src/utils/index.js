/** Used to generate unique IDs. */
let idCounter = {};

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 * Credit: lodasg
 */
export function uniqueId(prefix = "$lodash$") {
  if (!idCounter[prefix]) {
    idCounter[prefix] = 0;
  }

  const id = ++idCounter[prefix];
  if (prefix === "$lodash$") {
    return `${id}`;
  }

  return `${prefix + id}`;
}
