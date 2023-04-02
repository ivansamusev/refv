function createLi(email, password) {
  const markup = `
    <li>Email: ${email} , password: ${password}
    </li>
    `;
  return markup;
}

function createLiStorage(VALUES_KEY) {
  if (localStorage.getItem(VALUES_KEY)) {
    const values = localStorage.getItem(VALUES_KEY);
    const parseValue = JSON.parse(values);

   const itemMap = parseValue.map(({ email, password }) => {
      const markupMap = `
    <li>Email: ${email}, password: ${password}
    </li>`;
      return markupMap;
    });
    return itemMap
  }
}
export { createLi, createLiStorage };
