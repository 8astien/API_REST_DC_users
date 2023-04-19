## API REST pour les utilisateurs

Cette API permet de générer des utilisateurs fictifs à l'aide de Faker.js.

## Routes

### UTILISATEURS

#### 1. Obtenir un utilisateur unique

- **Méthode HTTP :** GET
- **URL :** `localhost:3000/api/user`
- **Description :** Renvoie un utilisateur aléatoire.

#### 2. Obtenir un tableau de 5 utilisateurs

- **Méthode HTTP :** GET
- **URL :** `localhost:3000/api/user/list`
- **Description :** Renvoie un tableau contenant 8 utilisateurs aléatoires.


#### 3. Obtenir une équipe de 2 joueurs

- **Méthode HTTP :** GET
- **URL :** `localhost:3000/api/team/2`
- **Description :** Renvoie une équipe aléatoire composée de 2 joueurs.

#### 4. Obtenir une équipe de 4 joueurs

- **Méthode HTTP :** GET
- **URL :** `localhost:3000/api/team/4`
- **Description :** Renvoie une équipe aléatoire composée de 4 joueurs.

### MATCHS

#### 5. Obtenir un match 1v1

- **Méthode HTTP :** GET
- **URL :** `localhost:3000/api/match/duel`
- **Description :** Renvoie un match aléatoire composé de 2 joueurs.

#### 6. Obtenir un match 2v2

- **Méthode HTTP :** GET
- **URL :** `localhost:3000/api/match/duo`
- **Description :** Renvoie un match aléatoire composé de 2 équipes de 2 joueurs.

#### 7. Obtenir un match 4v4

- **Méthode HTTP :** GET
- **URL :** `localhost:3000/api/match/quad`
- **Description :** Renvoie un match aléatoire composé de 2 équipes de 4 joueurs.

### DIVERS

#### Healthcheck 

- **Méthode HTTP :** GET
- **URL :** `localhost:3000/`
- **Description :** Renvoie un message 'Healthcheck Ok!'.