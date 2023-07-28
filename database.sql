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
VALUES 
('Logan', 'M', '12', 'true', 'Born in Guatemala'),
('Connor', 'M', '6', 'true', 'Allergic to lots of lava'), 
('Kendall', 'M', '5', 'false', 'Loves listening to Paula Abdul'), 
('Shiv', 'F', '4', 'false', 'Loves the sauna'), 
('Roman', 'M', '2', 'true', 'Favorite band is Nirvana'), 
('Stewie', 'M', '5', 'true', 'Has a pet iguana');