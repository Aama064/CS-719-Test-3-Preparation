-- Populating the pokemon table
DROP TABLE IF EXISTS pokemons;

CREATE TABLE IF NOT EXISTS pokemons (
    id INTEGER NOT NULL,
    name VARCHAR NOT NULL,
    dexNumber INTEGER NOT NULL,
    dexEntry VARCHAR NOT NULL,
    imageUrl VARCHAR NOT NULL,
    maxHp INTEGER NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO pokemons (name, dexNumber, dexEntry, imageUrl, maxHp) VALUES
    ('Bulbasaur', 1, 'A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png', 100),
    ('Charmander', 4, 'Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png', 100),
    ('Squirtle', 7, 'After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png', 100),
    ('Pikachu', 25, 'It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you.', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png', 100),
    ('Gengar', 94, 'Under a full moon, this Pokémon likes to mimic the shadows of people and laugh at their fright.', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/94.png', 100),
    ('Lapras', 131, 'A gentle soul that can understand human speech. It can ferry people across the sea on its back.', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/131.png', 100),
    ('Eevee', 133, 'Possessing an unbalanced and unstable genetic makeup, it conceals many possible evolutions.', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/133.png', 100),
    ('Snorlax', 143, 'Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/143.png', 100);
