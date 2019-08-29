export default (state = {}, action) => {
  switch (action.type) {
    case 'PRICE_ACTION':
      return {
        result: action.payload
      }
    default:
      return {
        result: {
          id: 6,
          partialPrice: Math.floor(Math.random() * 1000),
          fullPrice: Math.floor(Math.random() * 1000),
          myPrice: Math.floor(Math.random() * 1000),
          selected: 6
        }
      }
  }
}