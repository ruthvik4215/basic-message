interface User {
    userName: string;
    fullName: string;
    age: number;
    dob: Date;
}

const getUserDetails = (user: User)=> {
    console.log(JSON.stringify(user));
}

const user: User = {
    userName: "Ruthvik4215",
    fullName: "Ruthvik Bemidi",
    age: 18,
    dob: new Date()
};

getUserDetails(user);