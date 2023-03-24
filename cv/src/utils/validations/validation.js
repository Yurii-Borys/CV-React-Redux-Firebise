export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) !== null;
};

export const returnFirstError = (array) => {
    let newA = []
    array.forEach((item) => {
        if (item.valid) {
            newA.push(item.label)
        }
    })
    return newA[0] ? newA[0] : "";
}

export const validateImageFormat = (image) => {
     if (!image?.name.match(/\.(jpg|jpeg|png)$/)) {
        return false;
    }
    return true;
}