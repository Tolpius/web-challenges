import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(text: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(`${text}\n> `, (response: string) => resolve(response));
  });
}

function isValidNumber(value: unknown): value is number {
  return typeof value === "number" && !isNaN(value);
}

async function main(): Promise<void> {
  //Get the Check
  let check = Number(await question("How high is the check? (e.g., 50.00)"));
  while (true) {
    if (isValidNumber(check)) {
      break;
    }
    check = Number(
      await question("Your Check needs to be a number. (e.g., 50.00)")
    );
  }
  //Get the tip Percentage
  let percentage = Number(
    await question("What percentage of tip will you give? (e.g., 15 for 15%)")
  );
  while (true) {
    if (isValidNumber(percentage)) {
      break;
    }
    percentage = Number(
      await question(
        "Your tip percentage needs to be a number. (e.g., 15 for 15%)"
      )
    );
  }
  //Split the Check among multiple people?

  let isSplit = String(
    await question("Should the bill be split among multiple people? (yes/no)")
  ).toLowerCase();
  while (true) {
    if (isSplit === "yes" || isSplit === "no") {
      break;
    }
    isSplit = String(
      await question(
        `Should the bill be split among multiple people?\nPlease write  "yes" or "no"`
      )
    ).toLowerCase();
  }
  //Split between how many people?
  let splitAmount = 1;
  if (isSplit === "yes") {
    splitAmount = Number(
      await question("How many people will split the bill?")
    );
    while (true) {
      if (isValidNumber(splitAmount)) {
        break;
      }
      splitAmount = Number(
        await question(
          "How many people will split the bill?\nYour Answer needs to be a number (e.g. 5)"
        )
      );
    }
  }
  const tipAmount = ((check / 100) * percentage).toFixed(2);
  const total = (check + Number(tipAmount)).toFixed(2);
  const totalEach = (check / splitAmount).toFixed(2);

  console.log(`--- Tip Calculation Summary ---
Check Amount: $${check}
Tip Percentage: ${percentage}%
Tip Amount: $${tipAmount}
Total Bill: $${total}
Divide among people: ${isSplit}
Split between how many people: ${splitAmount}
Each person pays: $${totalEach}
-----------------------------`);
  rl.close();
}
main();
