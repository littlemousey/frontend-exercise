export function annotateSelected(list, value, styling) {
  const listWithCheckedProperty = list.map(item => {
    return { name: item, checked: value, styling };
  });
  return listWithCheckedProperty;
}
