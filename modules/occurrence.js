const str = "apple banana orange apple";

function strOccurrence(str) {
  str = str.concat(" ");

  const strMap = new Map();

  let firstIndex = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      const currentStr = str.slice(firstIndex, i);

      firstIndex = i + 1;

      strMap.has(currentStr)
        ? strMap.set(currentStr, strMap.get(currentStr) + 1)
        : strMap.set(currentStr, 1);
    }
  }

  return strMap;
}

const result = strOccurrence(str);

console.log(result);

// создать хранилище ключ-значение = слово-количествоПовторений
// пройтись циклом по строке
// внутри цикла определить и взять слово
// при наличии слова в хранилище - добавить к значению 1, иначе - создать новую пару
