import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";


export const GET = async (request) => {
    try {
        await connectToDB();

        const prompts = await Prompt.find({}).populate('creator');
        return new Response(JSON.stringify(prompts) , { status : 201})
    } catch (error) {
        return new Response('Faild to fetch all prompts !', { status : 500})
    }
}