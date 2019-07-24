import { annotateSelected } from "../js/annotateSelected";

const inputList = ["Kookboeken", "Psychologie", "Muziek", "Outlet"];
const outputList = [
  { name: "Kookboeken", checked: true, styling: "selected" },
  { name: "Psychologie", checked: true, styling: "selected" },
  { name: "Muziek", checked: true, styling: "selected" },
  { name: "Outlet", checked: true, styling: "selected" }
];

test("array list with strings will be converted to array with objects", () => {
  expect(annotateSelected(inputList, true, "selected")).toStrictEqual(
    outputList
  );
});
