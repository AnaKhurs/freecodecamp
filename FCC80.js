//80
var count = 0;

function cc(card) {
  // Only change code below this line
switch(card){
  case 2:
  count += 1;
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  break;
  case 3:
  count += 1;
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  break;
  case 4:
  count += 1;
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  break;
  case 5:
  count += 1;
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  break;
case 6:
  count += 1;
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  break;
case 7:
  count += 0;
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  break;
case 8:
  count += 0;
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  break;
case 9:
  count += 0;
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  break;
  case 10:
  count -= 1;
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  break;
    case "J":
  count -= 1;
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  break;
    case "Q":
  count -= 1;
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  break;
      case "K":
  count -= 1;
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  break;
      case "A":
  count -= 1;
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  break;
}
  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');