import { faker } from '@faker-js/faker';

// GENERATE SINGLE USER
export const generateUser = (req, res) => {
    const user = {
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            country: faker.address.country(),
            zipcode: faker.address.zipCode(),
        },
    };
    console.log("Single User sent !")
    res.json(user);
};

// GENERATE 8 USERS

export const generateUsers = (req, res) => {
    const users = Array.from({ length: 8 }, () => ({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            country: faker.address.country(),
            zipcode: faker.address.zipCode(),
        },
    }));
    console.log('Users list sent !')
    res.json(users);
};