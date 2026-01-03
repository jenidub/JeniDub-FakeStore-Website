const SESSION_KEY = "currentCart";

export const loadState = () => {
    const currentCart = localStorage.getItem(SESSION_KEY);

    if (currentCart && currentCart !== "undefined" && currentCart !== "null") {
        return JSON.parse(currentCart)
    } else {
        return undefined;
    }
}

export const saveState = (state: any) => {
    const updatedState = JSON.stringify(state);
    localStorage.setItem(SESSION_KEY, updatedState);
}
