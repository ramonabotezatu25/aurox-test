export const formatSymbol = (symbol, formatter) => {
    return `${symbol}${formatter}`;
};

export const formatAsksArray = (array, maxLength) => {
    const result = [];
    let formattedPrice = 0;
    let formattedQantity = 0;
    let total = 0;

    if (array) {
        const SIZE = maxLength > array?.length ? array?.length : maxLength;
        for (let i = 0; i < SIZE; i++) {
            formattedPrice = formatToCustomDecimal(array[i][0],4);
            formattedQantity = formatToCustomDecimal(array[i][1],4);
            total = (parseFloat(formattedPrice)*parseFloat(formattedQantity)).toFixed(5);
            result?.push(
                {
                    price: formattedPrice,
                    quantity: formattedQantity,
                    total: total
                });
        }
    }
    console.warn(result);
    return result;
};


export const orderStreamMessages = (oldArray, newArr, maxLenght) => {
    /*
    Let's assume that we have a queue
    - when receiving a message through websocket, the amount of elements
     we receive for asks/bids will be removed for current array.
     new elements will be added at the end of the array
   */
    const newArrFiltered = filteredArrayBasedOnQauntity(newArr);
    const SIZE = newArrFiltered?.length < maxLenght ? newArrFiltered?.length : maxLenght;
    for (let i = 0; i < SIZE; i++) {
        oldArray?.shift();
        oldArray?.push(newArrFiltered[i]);

    }
    return oldArray;
};

export const generateRandomKey = () => {
    return (Math.random() * 100);
};

//remove all items that quantity is <= 0.
export const filteredArrayBasedOnQauntity = (arr) => {
    return arr?.filter((item) => Math.fround(parseFloat(item[1])) > Math.fround(0));
};

export const formatToCustomDecimal = (value, decimal) => {
    return parseFloat(value).toFixed(decimal);
};
