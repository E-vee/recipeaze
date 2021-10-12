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
