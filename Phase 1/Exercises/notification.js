const notifyByEmail = (email) => {
    return 'Email sent to ' + email;
}

const notifyByText = (phone) => {
    return 'Text sent to ' + phone;
}

const notify = (numberOrEmail, notifyFunction) => {
    return notifyFunction(numberOrEmail);
}

notify('+10000000000', notifyByText);
notify('hello@makers.tech.test', notifyByEmail);
