class User {

    message;
    username;

    constructor(){
        this.message = "Hello World"
        console.log(this.message)
    }

    setUsername(name)
    {
        this.username = name;
    }

    getUserName(){
        return this.username;
    }

    getUserStatus(){}
}

module.exports = User;