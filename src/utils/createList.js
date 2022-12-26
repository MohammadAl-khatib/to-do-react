 const createList = (setList, list) => {
    setList(list);
    localStorage.list = JSON.stringify(list);
}

export default createList;