"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var figlet_1 = __importDefault(require("figlet"));
var clear_1 = __importDefault(require("clear"));
var blessed_1 = __importDefault(require("blessed"));
var inquirer_1 = __importDefault(require("inquirer"));
var events_1 = __importDefault(require("events"));
var getUsername = function () { return __awaiter(void 0, void 0, void 0, function () {
    var answers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                    {
                        type: "input",
                        name: "username",
                        message: "Enter your username"
                    }
                ])];
            case 1:
                answers = _a.sent();
                return [2 /*return*/, answers.username];
        }
    });
}); };
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var username, messageBus, screen, messageList, input;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                clear_1.default();
                console.log(chalk_1.default.yellow(figlet_1.default.textSync("Chat", { horizontalLayout: "full" })));
                return [4 /*yield*/, getUsername()];
            case 1:
                username = _a.sent();
                console.log(username);
                clear_1.default();
                console.log(chalk_1.default.yellow(figlet_1.default.textSync("Chat", { horizontalLayout: "full" })));
                messageBus = new events_1.default.EventEmitter();
                screen = blessed_1.default.screen({
                    smartCSR: true,
                    title: "Terminal Chat Client"
                });
                messageList = blessed_1.default.list({
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
                input = blessed_1.default.textarea({
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
                input.key("enter", function () {
                    var currentVal = this.getValue();
                    console.log(currentVal);
                    try {
                    }
                    catch (err) {
                        // error handling
                    }
                    finally {
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
                return [2 /*return*/];
        }
    });
}); };
main();
