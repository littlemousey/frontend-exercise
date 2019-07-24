"use strict";

// index.js code before implementing the class/module pattern

import { debounce } from "./debounce.js";
import { annotateSelected } from "./annotateSelected";
import { decodeItems } from "./decodeItems";

const multiSelectList = document.getElementById("multi-select");
const searchField = document.getElementById("search-input");
const saveButton = document.getElementById("saveButton");
let listCheckedProperty, renderList;
const LOCALSTORE_PRODUCTS = "bol_products";

async function start() {
  // retrieve data products
  const response = await fetch("/assets/items.json");
  const { data } = await response.json();
  const productList = decodeItems(data);
  listCheckedProperty = annotateSelected(productList, false, "");
  const localStorageData = JSON.parse(
    localStorage.getItem(LOCALSTORE_PRODUCTS)
  );
  if (!localStorageData) {
    renderList = listCheckedProperty;
    setItemsInDOM(renderList);
  } else {
    renderList = localStorageData;
    setItemsInDOM(renderList);
  }
}

function setItemsInDOM(list) {
  for (let { name, checked, styling } of list) {
    const wrapperElement = document.createElement("div");
    const inputElement = document.createElement("input");
    const styledInputElement = document.createElement("span");
    const labelElement = document.createElement("label");
    inputElement.id = name;
    inputElement.type = "checkbox";
    inputElement.checked = checked;
    inputElement.name = name;
    styledInputElement.classList.add("styled-checkbox");
    labelElement.textContent = name;
    labelElement.htmlFor = name;
    labelElement.className = styling;
    wrapperElement.classList.add("checkbox");
    labelElement.appendChild(inputElement);
    labelElement.appendChild(styledInputElement);
    wrapperElement.appendChild(labelElement);
    multiSelectList.appendChild(wrapperElement);
  }
}

start();

// event listeners
searchField.addEventListener("keyup", debounce(filterList, 250));
multiSelectList.addEventListener("mouseup", handleCheckBoxClick);
saveButton.addEventListener("click", saveDataToLocalStorage);

function filterList() {
  renderList = listCheckedProperty;
  const searchTag = searchField.value;
  const selectedList = registerCheckedBoxes();
  const duplicateList = selectedList.map(item => {
    return item.name;
  });
  const filteredList = renderList.filter(item => {
    return (
      item.name.toLowerCase().includes(searchTag) &&
      !duplicateList.includes(item.name)
    );
  });
  renderList = [...selectedList, ...filteredList];
  multiSelectList.innerHTML = "";
  setItemsInDOM(renderList);
}

function handleCheckBoxClick(event) {
  // set styling for label
  const clickedElement = event.target;
  if (
    clickedElement.localName == "label" &&
    !clickedElement.classList.contains("selected")
  ) {
    clickedElement.classList.add("selected");
  } else {
    clickedElement.classList.remove("selected");
  }

  registerCheckedBoxes();
}

function registerCheckedBoxes() {
  const checkedDOMList = multiSelectList.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  const retrievedList = Array.from(checkedDOMList).map(
    checkbox => checkbox.labels[0].textContent
  );
  const listWithCheckedProperty = annotateSelected(
    retrievedList,
    true,
    "selected"
  );
  return listWithCheckedProperty;
}

function saveDataToLocalStorage() {
  filterList();
  localStorage.setItem(LOCALSTORE_PRODUCTS, JSON.stringify(renderList));
}
