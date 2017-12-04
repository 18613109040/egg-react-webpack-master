export const ADD = "ADD";
export const DEL = "DEL";
export const LIST = "LIST";

export const add = item => {
  console.log('item', item);
  return {
    type: ADD,
    item
  }
}

export const del = id => {
  return {
    type: DEL,
    id
  }
}

