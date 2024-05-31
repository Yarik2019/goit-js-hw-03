function slugify(title) {
  const titleLowerCase = title.toLowerCase();
  const titleArray = titleLowerCase.split(" ");
  const titleDash = titleArray.join("-");
  return titleDash;
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
