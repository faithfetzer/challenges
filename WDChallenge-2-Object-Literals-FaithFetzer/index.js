const movieChallenge = {
    name: 'Anne of Green Gables',
    runTime: 199,
    genre: 'drama',
    characters: [
      {name: 'Anne Shirley',
      age: 12,
      items: ["Tomorrow is always fresh, with no mistakes in it.",
      "It is impolite to pass a person without at least nodding, and so I nod out of elementary good breeding, nothing more.",
      "My life is a perfect graveyard of buried hopes. That's a sentence I read once and I say it over to comfort myself in these times that try the soul.",
      "I know I chatter on far too much but if you only knew how many things I want to say and don't. Give me some credit."],
      },
      {name: 'Marilla Cuthbert',
      age: 48,
      items: ["My current wine is famous all over the island, Rachel Lynde, as you very well know. And the Reverend Allen himself is not opposed to taking a bit when he comes calling. And as for Christian virtue: making a little wine for a refreshment is far less sinful than meddling in other people's affairs!",
      "Anne Shirley, I've heard all about it. Now you open your door at once!",
      "I think you may be a kindred spirit after all."],
      },
      {name: 'Gilbert Blythe',
      age: 13,
      items: ["Can't we be friends now? This childishness has gone on long enough, don't you think?",
      "Anne Shirley. What in heck are you doing here?",
      "Anne, wait! I'm sorry for teasing you about your hair. Don't be mad at me for keeps."]
      },
    ],
};

// You can use this scratch area to see whether you can access the properties correctly
for (character in movieChallenge.characters) {
  console.log(`Hello, my name is ${movieChallenge.characters[character].name}, I am ${movieChallenge.characters[character].age} years old. I was once quoted as saying "${movieChallenge.characters[character].items[2]}"`);
}
// Please do not manipulate this line
module.exports = movieChallenge;