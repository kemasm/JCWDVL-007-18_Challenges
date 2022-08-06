function generateHashtag(str) {
  let result = str.split(" ").filter((t) => t !== "");

  if (!result) {
    return false;
  }

  const capitalizeWord = (str) => str[0].toUpperCase() + str.slice(1);

  result = result.map((t) => capitalizeWord(t)).join("");

  if (!result) {
    return false;
  }

  if (result.length > 139) {
    return false;
  }

  return `#${result}`;
}

export { generateHashtag };
