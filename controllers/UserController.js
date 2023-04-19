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
        jobTitle: faker.name.jobTitle(),
    };
    console.log("Single User sent !")
    res.json(user);
};

// GENERATE 5 USERS

export const generateUsers = (req, res) => {
    const users = Array.from({ length: 5 }, () => ({
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
        jobTitle: faker.name.jobTitle(),
    }));
    console.log('Users list sent !')
    res.json(users);
};