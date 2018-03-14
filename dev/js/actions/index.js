export const selectUser = (user) => {
    console.log("You clicked on item: ", user.name);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
