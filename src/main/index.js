"use strict";

import { debounce } from "../utils/debounce.js";
import { annotateSelected } from "../utils/annotateSelected";
import { decodeItems } from "../utils/decodeItems";

class ProductSearch {
  // maybe divide this file into more sub files
  LOCALSTORE_PRODUCTS = "bol_products";
  listCheckedProperty;
  renderList;

  constructor(selectID, searchID, saveID) {
    this.multiSelectList = document.getElementById(selectID);
    this.searchField = document.getElementById(searchID);
    this.saveButton = document.getElementById(saveID);
    this.start();
    this.registerEventListeners();
  }

  async start() {
    // retrieve data products
    const response = await fetch("../src/assets/items.json");
    const { data } = await response.json();
    const productList = decodeItems(data);
    this.listCheckedProperty = annotateSelected(productList, false, "");
    const localStorageData = JSON.parse(
      localStorage.getItem(this.LOCALSTORE_PRODUCTS)
    );
    if (!localStorageData) {
      this.renderList = this.listCheckedProperty;
      this.setItemsInDOM(this.renderList);
    } else {
      this.renderList = localStorageData;
      this.setItemsInDOM(this.renderList);
    }
  }

  setItemsInDOM(list) {
    // replace this with jsx or template literals
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
      this.multiSelectList.appendChild(wrapperElement);
    }
  }

  registerEventListeners() {
    this.searchField.addEventListener(
      "keyup",
      debounce(this.filterList.bind(this), 250)
    );
    this.multiSelectList.addEventListener(
      "mouseup",
      this.handleCheckBoxClick.bind(this)
    );
    this.saveButton.addEventListener(
      "click",
      this.saveDataToLocalStorage.bind(this)
    );
  }

  filterList() {
    this.renderList = this.listCheckedProperty;
    const searchTag = this.searchField.value;
    const selectedList = this.registerCheckedBoxes();
    const duplicateList = selectedList.map(item => {
      return item.name;
    });
    const filteredList = this.renderList.filter(item => {
      return (
        item.name.toLowerCase().includes(searchTag) &&
        !duplicateList.includes(item.name)
      );
    });
    this.renderList = [...selectedList, ...filteredList];
    this.multiSelectList.innerHTML = "";
    this.setItemsInDOM(this.renderList);
  }

  handleCheckBoxClick(event) {
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

    this.registerCheckedBoxes();
  }

  registerCheckedBoxes() {
    const checkedDOMList = this.multiSelectList.querySelectorAll(
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

  saveDataToLocalStorage() {
    this.filterList();
    window.localStorage.setItem(
      this.LOCALSTORE_PRODUCTS,
      JSON.stringify(this.renderList)
    );
  }
}

new ProductSearch("multi-select", "search-input", "saveButton");
