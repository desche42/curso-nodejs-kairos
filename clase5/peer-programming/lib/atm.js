/**
 * Function to count something
 */
const ALLOWED_NOTES= [50, 20, 10, 5];

module.exports = function atm (amount = 4) {
  const isBareNote = ALLOWED_NOTES.includes(amount);

  if (isBareNote) { return amount }

  if ((amount % 5) !== 0) { return null }

  return calculateNotes(amount);
}

function calculateNotes (amount, result) {
  result = result || [];
  const note = ALLOWED_NOTES.find(note => amount >= note);

  if (note) {
    result.push(note);
    amount -= note;
    calculateNotes(amount, result);
  }
  return result.sort((a,b) => a > b);
}