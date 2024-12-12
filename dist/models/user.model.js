"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const UserSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
    },
    description: {
        type: Schema.Types.String,
    },
    price: {
        type: Schema.Types.Number,
        required: true,
    },
    image_url: {
        type: Schema.Types.String,
        default: "ads.jpg",
    },
});
