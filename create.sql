DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
    "_id" integer NOT NULL,
    "name" varchar(20) NOT NULL, 
    "email" varchar(25) NOT NULL,
    CONSTRAINT "user_link" PRIMARY KEY ("_id")
);

DROP TABLE IF EXISTS ingredients;
CREATE TABLE ingredients (
    "_id" serial NOT NULL,
    "name" varchar(25) NOT NULL,
    "genre" VARCHAR NOT NULL,
    "user_id" integer NOT NULL,
    CONSTRAINT "ingredients_linkuser" PRIMARY KEY ("_id")
);

ALTER TABLE ingredients ADD CONSTRAINT "ingredientslinkuser0" FOREIGN KEY ("user_id") REFERENCES  users("_id");


INSERT INTO users (_id, name, email) VALUES (1, 'Omar', 'omar@omar.com');
INSERT INTO users (_id, name, email) VALUES (2, 'Tre', 'tre@tre.org');
INSERT INTO ingredients (name, genre, user_id) VALUES ('gin', 'drink', 1);
INSERT INTO ingredients (name, genre, user_id) VALUES ('vodka', 'drink', 1);
INSERT INTO ingredients (name, genre, user_id) VALUES ('limes', 'drink', 1);
