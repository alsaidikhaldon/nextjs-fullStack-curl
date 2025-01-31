import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// GET read prompt
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const { id } = await params;
    const prompt = await Prompt.findById({ _id: id }).populate("creator");
    if (!prompt) return new Response("Prompt not found !", { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 201 });
  } catch (error) {
    return new Response("Faild to fetch all prompts !", { status: 500 });
  }
};

// PATCH upoqte promp
export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();
  try {
    await connectToDB();
    const { id } = await params;
    
    const existingPrompt = await Prompt.findById({ _id: id });
   
    if (!existingPrompt)
      return new Response("Prompt not found !", { status: 404 });
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Faild to update  prompt !", { status: 500 });
  }
};

// DELET delete promp
export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();
    
    const { id } = await params;
    console.log(id);
   await Prompt.findOneAndDelete({ _id: id});
  
    
    return new Response("Prompt deleted successfully.", { status: 200 });
  } catch (error) {
    return new Response("Faild to fetch all prompts !", { status: 500 });
  }
};
