import chalk from "chalk";
import figlet from "figlet";
import clear from "clear";
import ora from "ora";
import blessed from "blessed";
import inquirer from "inquirer";
import events from "events";
import { IUsername } from "./interfaces";

const getUsername = async (): Promise<string> => {
  const answers: IUsername = await inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "Enter your username"
    }
  ]);

  return answers.username;
};

const main = async () => {
  clear();
  console.log(
    chalk.yellow(figlet.textSync("Chat", { horizontalLayout: "full" }))
  );
  const username = await getUsername();
  console.log(username);
  clear();
  console.log(
    chalk.yellow(figlet.textSync("Chat", { horizontalLayout: "full" }))
  );
  const messageBus = new events.EventEmitter();

  const screen = blessed.screen({
    smartCSR: true,
    title: "Terminal Chat Client"
  });

  let messageList = blessed.list({
    align: "left",
    mouse: true,
    keys: true,
    width: "100%",
    height: "90%",
    top: 0,
    left: 0,
    scrollbar: {
      ch: " "
    },
    items: []
  });

  // Append our box to the screen.
  let input = blessed.textarea({
    bottom: 0,
    height: "10%",
    inputOnFocus: true,
    padding: {
      top: 1,
      left: 2
    },
    style: {
      fg: "#787878",
      bg: "#454545",

      focus: {
        fg: "#f6f6f6",
        bg: "#353535"
      }
    }
  });

  input.key("enter", function (this: any) {
    const currentVal = this.getValue();
    console.log(currentVal);
    try {
    } catch (err) {
      // error handling
    } finally {
      screen.render();
    }
  });

  // Append our box to the screen.
  screen.key(["escape", "q", "C-c"], function () {
    return process.exit(0);
  });

  screen.append(messageList);
  screen.append(input);

  input.focus();

  screen.render();
};

main();
