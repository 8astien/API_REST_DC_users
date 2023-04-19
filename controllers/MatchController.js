import { faker } from '@faker-js/faker';

const generateTeam = (teamSize) => {
  const team = [];

  for (let i = 0; i < teamSize; i++) {
    const player = {
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      avatar: faker.internet.avatar(),
    };
    team.push(player);
  }

  return team;
};

const generatePlayer = () => {
    const player = {
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
    }
    return player;
}

export const generateDuel = (req, res) => {
    const match = {
      id: faker.datatype.uuid(),
      date: faker.date.past(),
      status: 'Terminé',
      playerA: generatePlayer(),
      playerB: generatePlayer(),
      score: {
        playerA: faker.datatype.number({ min: 0, max: 10 }),
        playerB: faker.datatype.number({ min: 0, max: 10 }),
      },
    };
  
    res.json(match);
  };

export const generateMatchTeamOf2 = (req, res) => {
  const match = {
    id: faker.datatype.uuid(),
    date: faker.date.past(),
    status: 'Terminé',
    teamA: {
      name: faker.company.name(),
      players: generateTeam(2),
    },
    teamB: {
      name: faker.company.name(),
      players: generateTeam(2),
    },
    score: {
      teamA: faker.datatype.number({ min: 0, max: 10 }),
      teamB: faker.datatype.number({ min: 0, max: 10 }),
    },
  };

  res.json(match);
};

export const generateMatchTeamOf4 = (req, res) => {
    const match = {
      id: faker.datatype.uuid(),
      date: faker.date.past(),
      status: 'Terminé',
      teamA: {
        name: faker.company.name(),
        players: generateTeam(4),
      },
      teamB: {
        name: faker.company.name(),
        players: generateTeam(4),
      },
      score: {
        teamA: faker.datatype.number({ min: 0, max: 10 }),
        teamB: faker.datatype.number({ min: 0, max: 10 }),
      },
    };
  
    res.json(match);
  };
