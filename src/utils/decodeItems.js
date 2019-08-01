import he from "he";

export function decodeItems(rawItems) {
  return rawItems.map(item => {
    return he.decode(item);
  });
}
