function askPassword(ok, fail) {
    let password = prompt('Password?', '');
    if(password === "rockstar") ok();
    else fail();
}

let user = {
    name: "John",

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    }
};

// askPassword(user.loginOk, user.loginFail);

//1. Wrap
// askPassword(() => user.loginOk(), () => user.loginFail());

//2.Call
// askPassword(() => user.loginOk.call(user), () => user.loginFail(user));

//3.Apply
// askPassword(() => user.loginOk.apply(user), () => user.loginFail(user));

//4.Bind
askPassword(() => user.loginOk.bind(user)(), () => user.loginFail(user)());