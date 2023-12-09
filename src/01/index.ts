import { readFile, readFileSync } from "fs";
import { join } from "path";

const partOne = (input: string) => {
  return input
    .split("\n")
    .map((line) => line.match(/\d/g))
    .map((res) => (!res ? 0 : parseInt(`${res[0]}${res[res.length - 1]}`)))
    .reduce((acc, curr) => acc + curr, 0);
};

const digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

const toDigit = (v: string) => {
  const idx = digits.indexOf(v);
  return idx > -1 ? idx : parseInt(v, 10);
};

const partTwo = (input: string) => {
  return input
    .split("\n")
    .map((line) => line.match(/(\d|one|two|three|four|five|six|seven|eight|nine)/g))
    .map((res) => (!res ? 0 : parseInt(`${toDigit(res[0])}${toDigit(res[res.length - 1])}`, 10)))
    .reduce((acc, curr) => acc + curr, 0);
};

const text = readFileSync(join(import.meta.dir, "./input.txt"), "utf8");

console.log(partOne(text));
console.log(partTwo(text));
