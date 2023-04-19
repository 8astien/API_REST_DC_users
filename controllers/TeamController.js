import { faker } from '@faker-js/faker';

const generatePlayer = () => ({
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
});

export const generateTeamOfTwo = (req, res) => {
    const team = {
        id: faker.datatype.uuid(),
        name: faker.company.name(),
        logo: faker.image.abstract(),
        members: [generatePlayer(), generatePlayer()],
    };

    res.json(team);
};

export const generateTeamOfFour = (req, res) => {
    const team = {
        id: faker.datatype.uuid(),
        name: faker.company.name(),
        logo: faker.image.abstract(),
        members: [generatePlayer(), generatePlayer(), generatePlayer(), generatePlayer()],
    };

    res.json(team);
};