export function matchStocks(state, value) {
    return (
      state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
      state.abbr.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }