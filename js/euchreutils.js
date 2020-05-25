const CARD_REGEX = /^(A|K|Q|J|[2-9]|10)(C|D|H|S)$/;
const FACE_CARDS = {A: 14, K: 13, Q: 12, J:11};
const COLOR = {C: 'black', D: 'red', H: 'red', S: 'black'};

function decodeCard(cardString) {
  const match = cardString.match(CARD_REGEX);
  if (match) {
    const value = match[1];
    const suit = match[2];
    return {suit: suit, value: FACE_CARDS[value] || parseInt(value)};
  }
  else {
    throw new Error(`Invalid card: ${cardString}`);
  }
}

function cardValue(card, trump) {
  let value = card.value;
  if (card.suit === trump) {
    value += 13;
    if (card.value === FACE_CARDS.J) {
      value = 29;  // right bower
    }
  }
  else if (card.value === FACE_CARDS.J && COLOR[trump] === COLOR[card.suit]) {
    value = 28;  // left bower
  }
  return value;
}

function isTrump(card, trump) {
  return card.suit === trump || (card.value === FACE_CARDS.J && COLOR[trump] === COLOR[card.suit]);
}

export function orderHand(hand, trump) {
  const getSortVector = (cardString) => {
    const card = decodeCard(cardString);
    return [isTrump(card, trump) ? 'A' : card.suit, cardValue(card, trump) * -1];
  };
  const cmp = (a, b) => {
    const av = getSortVector(a);
    const bv = getSortVector(b);
    let cmpVal = 0;
    for (let i = 0; i < av.length; i++) {
      cmpVal = 10 * cmpVal + -(av[i] < bv[i]) || +(av[i] > bv[i]);
    }
    return cmpVal;
  }
  const orderedHand = [...hand];
  return orderedHand.sort(cmp);
}
