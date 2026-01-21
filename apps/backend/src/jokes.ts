export interface Joke {
  _id: string;
  type: string;
  setup: string;
  punchline: string;
}

export const jokes: Joke[] = [
  { _id: '1', type: 'general', setup: "Why don't scientists trust atoms?", punchline: 'Because they make up everything!' },
  { _id: '2', type: 'general', setup: 'Why did the scarecrow win an award?', punchline: 'He was outstanding in his field!' },
  { _id: '3', type: 'general', setup: "I'm reading a book about anti-gravity.", punchline: "It's impossible to put down!" },
  { _id: '4', type: 'general', setup: "Why don't eggs tell jokes?", punchline: "They'd crack each other up!" },
  { _id: '5', type: 'general', setup: 'What do you call a fake noodle?', punchline: 'An impasta!' },
  { _id: '6', type: 'general', setup: 'Why did the bicycle fall over?', punchline: 'Because it was two-tired!' },
  { _id: '7', type: 'general', setup: 'What do you call a bear with no teeth?', punchline: 'A gummy bear!' },
  { _id: '8', type: 'general', setup: "Why can't you give Elsa a balloon?", punchline: 'Because she will let it go!' },
  { _id: '9', type: 'general', setup: 'What do you call a fish without eyes?', punchline: 'A fsh!' },
  { _id: '10', type: 'general', setup: 'Why did the coffee file a police report?', punchline: 'It got mugged!' },
  { _id: '11', type: 'general', setup: 'What do you call a dinosaur that crashes their car?', punchline: 'Tyrannosaurus Wrecks!' },
  { _id: '12', type: 'general', setup: "I used to hate facial hair, but then it grew on me.", punchline: '' },
  { _id: '13', type: 'general', setup: 'Why do chicken coops only have two doors?', punchline: "Because if they had four, they'd be chicken sedans!" },
  { _id: '14', type: 'general', setup: 'What do you call a factory that makes okay products?', punchline: 'A satisfactory!' },
  { _id: '15', type: 'general', setup: "I'm afraid for the calendar.", punchline: "Its days are numbered!" },
  { _id: '16', type: 'general', setup: 'Why do fathers take an extra pair of socks when they go golfing?', punchline: 'In case they get a hole in one!' },
  { _id: '17', type: 'general', setup: "I don't trust stairs.", punchline: "They're always up to something!" },
  { _id: '18', type: 'general', setup: 'What did the ocean say to the beach?', punchline: "Nothing, it just waved!" },
  { _id: '19', type: 'general', setup: 'Why do bees have sticky hair?', punchline: 'Because they use honeycombs!' },
  { _id: '20', type: 'general', setup: 'What do you call a dog that does magic tricks?', punchline: 'A Labracadabrador!' },
  { _id: '21', type: 'programming', setup: 'Why do programmers prefer dark mode?', punchline: 'Because light attracts bugs!' },
  { _id: '22', type: 'programming', setup: 'Why do Java developers wear glasses?', punchline: "Because they don't C#!" },
  { _id: '23', type: 'programming', setup: 'A SQL query walks into a bar, walks up to two tables and asks...', punchline: 'Can I join you?' },
  { _id: '24', type: 'programming', setup: 'Why was the JavaScript developer sad?', punchline: "Because he didn't Node how to Express himself!" },
  { _id: '25', type: 'programming', setup: "There are only 10 kinds of people in this world:", punchline: 'Those who understand binary and those who don\'t.' },
  { _id: '26', type: 'knock-knock', setup: 'Knock knock. Who\'s there? Interrupting cow. Interrupting cow wh--', punchline: 'MOO!' },
  { _id: '27', type: 'knock-knock', setup: "Knock knock. Who's there? Boo. Boo who?", punchline: "Don't cry, it's just a joke!" },
  { _id: '28', type: 'knock-knock', setup: "Knock knock. Who's there? Lettuce. Lettuce who?", punchline: "Lettuce in, it's cold out here!" },
  { _id: '29', type: 'general', setup: 'Did you hear about the claustrophobic astronaut?', punchline: 'He just needed a little space!' },
  { _id: '30', type: 'general', setup: 'What did the grape do when it got stepped on?', punchline: 'Nothing, it just let out a little wine!' },
];
