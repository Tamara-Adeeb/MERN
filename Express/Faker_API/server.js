const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

class User {
    constructor(){
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();

    }
}
class Company{
    constructor(){
        this.id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = `${faker.address.streetAddress()}, ${faker.address.city()}`
    }
}

const user1 = new User();
const company1 = new Company();

app.get("/api/users/new", (req, res)=> {
    res.json(user1);
})

app.get("/api/companies/new", (req, res)=> {
    res.json(company1);
})

app.get("/api/user/company", (req, res)=> {
    res.json({"user": user1,
                "company":company1});
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );