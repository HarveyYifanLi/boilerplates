// function that checks if a string/char is alphanumeric
// by using RegExp instance and method
function isAlphanumeric(str){
  return /^[a-zA-Z0-9]+$/.test(str);
}

// function that deletes all spaces from a string using RegExp
function deleteSpaces(str){
  return str.replace(/\s+/g, ''); // with 'g' added, will replace all matches globally, otherwise, only replace the first matched instance
}
// function that deletes all spaces from a string using array method
function deleteSpaces(str){
  return str.split('').forEach(char => char.trim()).join();
}
