import * as React from "react";

import SelectItem from "./SelectItem";

export interface Item {
  name: string;
  selected: boolean;
}

interface State {
  items: Item[];
}

class SelectList extends React.Component<{}, State> {
  state: State = { items: [] };

  componentDidMount() {
    fetch("http://127.0.0.1:3090/")
      .then(response => response.json())
      .then(({ data }) => {
        this.setState({
          items: data.map((item: string) => ({
            name: item.replace(/&amp;/g, "&"),
            selected: false
          }))
        });
      });
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;

    const { items } = this.state;

    const itemIndex = items.findIndex(el => el.name === name);

    items.splice(itemIndex, 1);

    if (checked) {
      items.unshift({ name, selected: true });
    } else {
      items.push({ name, selected: false });
    }

    this.setState({
      items
    });
  };

  render() {
    const { items } = this.state;

    return (
      <React.Fragment>
        {items.map(item => (
          <SelectItem
            key={item.name}
            item={item}
            onChange={this.handleChange}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default SelectList;
