import mongoose from "mongoose"

const QuoteSchema = new mongoose.Schema({
    author: {type: String, required: true},
    snippet: {type: String, required: true},
    body: {type: String, required: true},
    },
    {timestamps: true}
)

export const Quote = mongoose.model("Quote",QuoteSchema);