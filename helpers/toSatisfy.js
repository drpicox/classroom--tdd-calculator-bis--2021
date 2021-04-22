// DO NOT MODIFY THIS FILE
export function toSatisfy(calculator, sequence) {
  validate(sequence, calculator, this.utils);
  return { message: () => "passed", pass: true };
}

global.eval = undefined;
function validate(sequence, calculator, utils) {
  let position = 0;
  try {
    while (position < sequence.length) {
      const code = sequence[position];
      switch (code) {
        case " ":
          break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "C":
        case "M":
        case "m":
        case "+":
        case "±":
        case "x":
        case "<":
        case "=":
          calculator.pressButton(code);
          break;
        case "[":
          position = validateOutput(sequence, calculator, position, utils);
          break;
        case "#":
          return;
        default:
          throw new Error(`Unkown sequence character "${code}"`);
      }
      position += 1;
    }
  } catch (e) {
    const spaces = Array(position + 1).join(" ");
    e.message +=
      "\n\n" +
      `Error raised at: "${sequence}"\n` +
      `                  ${spaces}^\n\n`;
    throw e;
  }
}

function validateOutput(sequence, calculator, position, utils) {
  const end = sequence.indexOf("]", position);
  const number = +sequence.slice(position + 1, end);

  const display = calculator.getDisplay();
  if (typeof display !== "number") {
    throw new Error(
      `Display expected to be a number, but it is a ${typeof display}.`,
    );
  }
  if (display !== number) {
    throw new Error(
      `Display shows an incorrect number.\n\n` +
        `Expected: ${utils.printExpected(number)}\n` +
        `Received: ${utils.printReceived(display)}`,
    );
  }

  return end;
}
