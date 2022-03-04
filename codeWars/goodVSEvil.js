const goodVsEvil = (good, evil) => {
  good = good.split(" ");
  evil = evil.split(" ");

  const goodPoints = [1, 2, 3, 3, 4, 10];
  const evilPoints = [1, 2, 2, 2, 3, 5, 10];

  let goodScore = 0;
  let evilScore = 0;

  for (let i = 0; i < good.length; i++) {
    goodScore += good[i] * goodPoints[i];
  }
  for (let i = 0; i < evil.length; i++) {
    evilScore += evil[i] * evilPoints[i];
  }

  console.log(goodScore, evilScore);

  if (goodScore > evilScore) {
    return "Battle Result: Good triumphs over Evil";
  } else if (goodScore < evilScore) {
    return "Battle Result: Evil eradicates all trace of Good";
  } else {
    return "Battle Result: No victor on this battle field";
  }
};

//goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1");
//goodVsEvil("1 2 3 4 5 6", "1 1 1 1 1 1 1");
// goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')
console.log(goodVsEvil('707 423 584 293 572 62', '136 864 0 626 15 152 121'))
//console.log(goodVsEvil('0 0 0 0 1 1', '1 0 0 0 0 0 1'))
