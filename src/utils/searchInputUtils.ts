type searchHandlerType = {
  searchInputValue: string;
  originalArray: any[];
  searchItem: string;
};

export const searchHandler = ({
  searchInputValue,
  originalArray,
  searchItem,
}: searchHandlerType) => {
  let result: typeof originalArray = [];
  originalArray.map((item) =>
    searchInputValue.split(' ').map((word) => {
      if (item[searchItem].label.indexOf(word) !== -1) {
        if (
          !result
            .map((resultItem) => resultItem[searchItem].label)
            .includes(item[searchItem].label)
        ) {
          result.push(item);
        }
      }
    })
  );
  return result;
};
