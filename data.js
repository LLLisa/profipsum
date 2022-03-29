const fullSentences = [
  'Did you write this code?',
  "You could end up using 'includes'.",
  "Do not use 'includes'.",
  'I like the muscle memory.',
  "You could write the proverbial 'hello world'",
  'You could end up getting an error',
  "That's not the error I was expecting.",
  'Exactly!',
  'Good question!',
  'Start with your data layer.',
  "There's nothing stopping you.",
  'You could end up putting your questions in the Slack.',
  'Build it out incrementally.',
  "I'm gonna get you out on time tonight.",
  'Gonna need 100% participation.',
  "You're not gonna need this, but I think it's pretty cool.",
  "What's the intent?",
  'Always look at the intent.',
  'No copy & pasting!',
  'This ends up breaking.',
  "Nothing's preventing you.",
  'Someone in tha chat real quick.',
  "You don't have to call it that, you can call it whatever you like.",
  "I'm just gonna destructure this.",
  "What's the simplest element we can show?",
  'and what do we look for to make sure we are connected?',
  "That's right horizontal rule, that's right.",
  //starts
  'Go into your breakout rooms, talk about it...',
  "There's one thing we could end up looking at...",
  "I'm gonna cheat a little here...",
  'When I end up doing this and going over here...',
  "What we're gonna end up doing here...",
  "If I had  nickel for every time I'v written this line...",
  //ends
  "...then I'm gonna CD into it.",
  '...one, two, three.',
  "...and there's our horizontal rule.",
  '...and we get an error.',
  //middles
];

const startSentences = [
  'Go into your breakout rooms, talk about it...',
  "There's one thing we could end up looking at...",
  "I'm gonna cheat a little here...",
  'When I end up doing this and going over here...',
  "What we're gonna end up doing here...",
];

const endSentences = ["...then I'm gonna CD into it.", '...one, two, three.'];

const loremGen = (sentences, paragraphs = 1) => {
  const structure = [];
  const result = [];
  for (let n = 0; n < paragraphs; n++) {
    for (let x = 0; x < sentences; x++) {
      let rand = Math.floor(Math.random() * fullSentences.length);
      while (structure.includes(rand)) {
        rand = Math.floor(Math.random() * fullSentences.length);
      }
      structure.push(rand);
    }
    for (let i = 0; i < structure.length; i++) {
      structure[i] = fullSentences[structure[i]];
    }
    result.push(structure.join(' '));
  }
  return result.join('\n');
};

console.log(loremGen(6));
