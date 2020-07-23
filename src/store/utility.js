export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const sortCartByCreatedAt = (cart) => {
    return cart.sort((first, next) => {
        let firstCreatedAt = new Date(first.createdAt);
        let nextCreateAt = new Date(next.createdAt);

        return firstCreatedAt - nextCreateAt;
    })
};