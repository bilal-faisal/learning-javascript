const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
};
// Create an object called 'scorers' which contains the names of
// the players who scored as properties, and the number of goals
// as the value. In this game, it will look like this:
// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
// }
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
