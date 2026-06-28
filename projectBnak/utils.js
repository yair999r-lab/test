import input from "analiza-sync";
const accountTypes = ["regular", "premium", "student"];


export function checkNumber(id) {
  if (typeof id === "string" && id.trim() === "") {
    return false;
  }
  const number = Number(id);
  if (Number.isNaN(number) || number < 0) {
    return false;
  }
  return number;
}

export function checkString(name) {
  if (typeof name !== "string" || name.trim().length < 2) {
    return false;
  }
  return name.trim();
}

export function chackTypeAcoount(type) {
  const normalizedType = type.trim().toLowerCase();
  if(accountTypes.includes(normalizedType)){
    return normalizedType
  }
  return false
}



export function getValidInput(promptMessage, validationCallback, errorMessage){
  while(true){
  const userInput = input(promptMessage)

  const isValid = validationCallback(userInput)

  if(isValid){
    return isValid
  }
  console.log(errorMessage);}
  
}
