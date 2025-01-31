import { Schema, model, models } from "mongoose";

const PromptShema = new Schema({
  creator: {
    ref: "User",
    type: Schema.Types.ObjectId,
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required."],
  },
  tag: {
    type: String,
    required: [true, "Tag is required."],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptShema);

export default Prompt;
