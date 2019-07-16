const defaultState: string[] = [];

type ItemState = string[];

const ItemReducer = (state = defaultState, _action: any): ItemState => {
  return state;
};

export default ItemReducer;
