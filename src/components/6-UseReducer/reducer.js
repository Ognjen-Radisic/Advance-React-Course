export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload]
    return {
      ...state,
      people: newPeople,
      isShowModal: true,
      modalContent: 'Item added',
    }
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isShowModal: true,
      modalContent: 'No input value',
    }
  }

  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isShowModal: false,
    }
  }

  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter((i) => i.id !== action.payload)
    return {
      ...state,
      people: newPeople,
      isShowModal: true,
      modalContent: 'Item removed successfuly',
    }
  }

  throw new Error('No matching action type')
}
