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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var protocol_sdk_1 = require("@zoralabs/protocol-sdk");
var viem_1 = require("viem");
var chains_1 = require("viem/chains");
function createForFree(_a) {
    var walletClient = _a.walletClient, publicClient = _a.publicClient, creatorAccount = _a.creatorAccount;
    return __awaiter(this, void 0, void 0, function () {
        var premintClient, createdPremint, premintUid, premintCollectionAddress;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    premintClient = (0, protocol_sdk_1.createPremintClient)({ chain: walletClient.chain, publicClient: publicClient });
                    return [4 /*yield*/, premintClient.createPremint({
                            walletClient: walletClient,
                            creatorAccount: creatorAccount,
                            // if true, will validate that the creator is authorized to create premints on the contract.
                            checkSignature: true,
                            // collection info of collection to create
                            collection: {
                                contractAdmin: creatorAccount,
                                contractName: "Testing Contract",
                                contractURI: "ipfs://bafkreiainxen4b4wz4ubylvbhons6rembxdet4a262nf2lziclqvv7au3e",
                            },
                            // token info of token to create
                            tokenCreationConfig: {
                                tokenURI: "ipfs://bafkreice23maski3x52tsfqgxstx3kbiifnt5jotg3a5ynvve53c4soi2u",
                            },
                        })];
                case 1:
                    createdPremint = _b.sent();
                    premintUid = createdPremint.uid;
                    premintCollectionAddress = createdPremint.verifyingContract;
                    return [2 /*return*/, {
                            // unique id of created premint, which can be used later to
                            // update or delete the premint
                            uid: premintUid,
                            tokenContractAddress: premintCollectionAddress,
                        }];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var client, blockNumber, wc, _a, uid, tokenContractAddress;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    client = (0, viem_1.createPublicClient)({
                        chain: chains_1.baseSepolia,
                        transport: (0, viem_1.http)(),
                    });
                    return [4 /*yield*/, client.getBlockNumber()];
                case 1:
                    blockNumber = _b.sent();
                    console.log('blockNumber', blockNumber);
                    wc = (0, viem_1.createWalletClient)({
                        chain: chains_1.baseSepolia,
                        transport: (0, viem_1.http)()
                    });
                    return [4 /*yield*/, createForFree({
                            walletClient: wc,
                            publicClient: client,
                            // address of the token contract
                            creatorAccount: '0xe16Bd85C59f7A75350350676D798A1C193F9e7f0'
                        })];
                case 2:
                    _a = _b.sent(), uid = _a.uid, tokenContractAddress = _a.tokenContractAddress;
                    console.log('uid', uid);
                    console.log('tokenContractAddress', tokenContractAddress);
                    return [2 /*return*/];
            }
        });
    });
}
main();
