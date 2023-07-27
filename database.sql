CREATE TABLE "koalas"(
	"id" serial primary key,
	"name" varchar (80) not null,
	"gender" varchar (1) not null,
	"age" integer,
	"ready_to_transfer" BOOLEAN DEFAULT FALSE,
	"notes" varchar(150) not null
);

INSERT INTO "koalas" (
	"name", "gender", "age", "ready_to_transfer", "notes")
VALUES ('Scotty', 'M', '4', 'true', 'Born in Guatemala');
INSERT INTO "koalas" (
	"name", "gender", "age", "ready_to_transfer", "notes")
VALUES ('Jean', 'F', '5', 'true', 'Allergic to lots of lava'), ('Ororo', 'F', '7', 'false', 'Loves listening to Paula Abdul'), ('Logan', 'M', '15', 'false', 'Loves the sauna'), ('Charlie', 'M', '9', 'true', 'Favorite band is Nirvana'), ('Betsy', 'F', '4', 'true', 'Has a pet iguana');