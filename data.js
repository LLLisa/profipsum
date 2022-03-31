const profisms = [
  'Exactly!',
  "I'm spinning.",
  'Good question!',
  'Use the defaults!',
  'No copy & pasting!',
  "What's the intent?",
  '...one, two, three.',
  'I always forget this.',
  'This ends up breaking.',
  "Do not use 'includes'.",
  'Are we recording this?',
  "Let's get this to work.",
  '...and we get an error.',
  'Did you write this code?',
  'I like the muscle memory.',
  "Nothing's preventing you.",
  'Always look at the intent.',
  'Start with your data layer.',
  'Build it out incrementally.',
  "You know what, let's do this.",
  "There's nothing stopping you.",
  "...then I'm gonna CD into it.",
  'Gonna need 100% participation.',
  "I'm gonna cheat a little here...",
  "I'm just gonna destructure this.",
  'Someone in the chat real quick...',
  'You could end up getting an error.',
  "We're gonna go nice and slow here.",
  "You could end up using 'includes'.",
  "...and there's our horizontal rule.",
  'Eric Katz here, also known as Prof.',
  "What we're gonna end up doing here...",
  "That's not the error I was expecting.",
  "I'm gonna get you out on time tonight.",
  "You eiether have the data, or you don't.",
  "What's the simplest element we can show?",
  "There's no law that says you can't do that.",
  'Go into your breakout rooms, talk about it...',
  "You could write the proverbial 'hello world'.",
  "That's right, a horizontal rule, that's right.",
  'You could end up destructuring if you want to.',
  'When I end up doing this and going over here...',
  "There's one thing we could end up looking at...",
  "...then we call super(), because that's the law.",
  'You could end up putting your questions in the Slack.',
  'And what do we look for to make sure we are connected?',
  "If I had  nickel for every time I've written this line...",
  "You're not gonna need this, but I think it's pretty cool.",
  "...and I've got my horizontal rule, so I know I'm connected.",
  "You don't have to call it that, you can call it whatever you like.",
];

const loremGen = (numOfSentences) => {
  const structure = [];
  for (let x = 0; x < numOfSentences; x++) {
    let rand = Math.floor(Math.random() * profisms.length);
    while (structure.includes(rand)) {
      rand = Math.floor(Math.random() * profisms.length);
    }
    structure.push(rand);
  }
  for (let i = 0; i < structure.length; i++) {
    structure[i] = profisms[structure[i]];
  }
  return structure.join(' ');
};

export default loremGen;
