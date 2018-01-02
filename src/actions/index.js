export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property (i.e. the action's purpose)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
