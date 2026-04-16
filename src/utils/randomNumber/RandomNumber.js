/**
 * @description Function for generating a random number between 0 and max
 * @param {number} max - Maximum number to generate
 * @returns {number} Random number between 0 and max
 */
export function randomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}
