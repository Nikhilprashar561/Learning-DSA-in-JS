// Do Practice here and build a storg logic

let player = {
  name: "Jadeja",
  runs: 35,
  balls: 20,
  totalRuns: 2000,
  innings: 80,
  notOuts: 10,
  runsConceded: 1500,
  overs: 200,
};

if (player === null || player === undefined || !player.name) return null;

let strikerate = 0;
strikerate = (player.runs / player.balls) * 100;

let economy = 0;
economy = player.runsConceded / player.overs;

let battingAvg = 0;
battingAvg = player.totalRuns / (player.innings - player.notOuts);

let isAllRounder = false;
if (battingAvg > 30 && economy < 8) {
  isAllRounder = true;
} else {
  isAllRounder = false;
}
return {
  name: player.name,
  strikeRate: Number(strikerate.toFixed(2)),
  economy: Number(economy.toFixed(2)),
  battingAvg: Number(battingAvg.toFixed(2)),
  isAllRounder,
};
