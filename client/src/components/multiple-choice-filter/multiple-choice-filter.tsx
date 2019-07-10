import { Button } from "components/button";
import { CheckboxInput } from "components/checkbox-input";
import { Filter } from "components/filter";
import { SearchInput } from "components/search-input";
import { css } from "emotion";
import React, { useEffect, useState } from "react";

type MultipleChoiceFilterProps = {
  items: string[];
};

export const MultipleChoiceFilter: React.FC<MultipleChoiceFilterProps> = ({
  items,
}) => {
  const [filter, setFilter] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState<string[]>(
    items.filter(item => item.toLowerCase().includes(filter.toLowerCase()))
  );

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  useEffect(() => {
    if (!!filter) {
      setFilteredItems(
        items.filter(item => item.toLowerCase().includes(filter.toLowerCase()))
      );
    } else {
      setFilteredItems(items);
    }
  }, [filter, items]);

  return (
    <Filter label="Productgroep">
      <SearchInput
        placeholder="Zoek op..."
        value={filter}
        onChange={({ target: { value } }) => setFilter(value)}
      />
      <div
        className={css`
          margin: 18px 0;
        `}
      >
        {selectedItems.map((item, index) => (
          <CheckboxInput
            key={`${index}-${item.toLowerCase()}`}
            onChange={() =>
              setSelectedItems(
                selectedItems.filter(selectedItem => selectedItem !== item)
              )
            }
            checked={true}
          >
            {item}
          </CheckboxInput>
        ))}
        {filteredItems.map(
          (item, index) =>
            !selectedItems.includes(item) && (
              <CheckboxInput
                key={`${index}-${item.toLowerCase()}`}
                onChange={() => setSelectedItems(selectedItems.concat(item))}
                checked={false}
              >
                {item}
              </CheckboxInput>
            )
        )}
      </div>
      <Button onClick={() => {}}>Toepassen</Button>
    </Filter>
  );
};
