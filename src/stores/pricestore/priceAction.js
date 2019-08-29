export const PriceAction = (data) => dispatch => {
  dispatch({
    type: 'PRICE_ACTION',
    payload: data
  })
}