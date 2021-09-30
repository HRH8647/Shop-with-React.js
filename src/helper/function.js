const shorten = (title) => {
    const nowTitle = title.split(" ");
    const newTitle = `${nowTitle[0]} ${nowTitle[1]}`;
    return newTitle;
}

const isInCard = (state , id) => {
    const result = !!state.selectedItem.find(item => item.id === id);
    return result;
}

const I_D = (state , id) => {
    const index = state.selectedItem.findIndex(item => item.id === id);
    if(index === -1) {
        return false
    } else {
        return state.selectedItem[index].quantity;
    }
}

export {shorten, isInCard , I_D};