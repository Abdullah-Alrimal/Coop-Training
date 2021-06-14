export const addItem = payload => {
  console.log ('@payload', payload);
  return {
    type: 'ADD_ITEM',
    payload,
  };
};

/**
 * type => reducer type
 * payload => data from action
 */
// export const add = (payload) => ({
//     type: 'ADD_ITEM',
//     payload
// })
