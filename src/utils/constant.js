
export const authDetails = {
    baseURL: "https://dummyapi.io/data/v1/user",
    appID: "61c46490b73b1ae6c46e37ff",
    GET: 'get',
    POST: 'post'
}

export const ButtonStrings = {
    LOGIN: 'Login',
}

export const Routes = {
    Dashboard: 'Dashboard',
    Login: 'Login'
}

export const appString = {
    Login: 'Login'
}

export const placeHolderString = {
    EMAIL_ADDRESS: 'Enter Email Address',
    PASSWORD: 'Please Enter Password'
}
export const validationString = {
    email_empty: 'Please enter email address',
    email_valid: 'Please enter valid email address',
    email_not_record: 'User is not register',
    password_empty: 'Please enter password',
    password_valid: 'Please enter valid password',
    password_wrong: 'Email and password are not match'
}

export const checkEmailValid = (emailAddress) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(emailAddress) === false) {
        return false;
    } else {
        return true;
    }
}