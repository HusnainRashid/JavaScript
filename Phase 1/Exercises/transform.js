const lowercaseMessage = (message) => {
    return message.toLowerCase();
}

const transform = (string, transformation) => {
    return transformation(string);
}

transform('WHY ARE YOU SHOUTING?', lowercaseMessage);
