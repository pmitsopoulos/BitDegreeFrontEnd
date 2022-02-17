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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const isCustomerItem = (variableToCheck) => {
    return variableToCheck.company !== undefined;
};
const url = 'https://jsonplaceholder.typicode.com/users';
const imgUrl = 'https://jsonplaceholder.typicode.com/albums/1/photos';
//const jsonDummyData = "./customers.json"
const fetchCustomers = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, node_fetch_1.default)(url).then(response => response.json());
    return response.map((item) => {
        if (isCustomerItem(item)) {
            return {
                id: item.id,
                name: item.name,
                street: `${item.address.suite} ${item.address.street}`,
                company: item.company.name
            };
        }
        else {
            return {
                album_id: item.id,
                title: item.title
            };
        }
    });
});
fetchCustomers(imgUrl).then(users => { console.log(users); });
fetchCustomers(url).then(users => { console.log(users); });
console.log("---------------------------------------------------");
