import OpenAI from "openai";

const openai = new OpenAI({
    apiKey:"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",
    dangerouslyAllowBrowser: true
}
);
export async function getResponse(massage) {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: massage }],
        model: "gpt-3.5-turbo",
        max_tokens: 256,
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });
    return completion.choices[0].message.content
}


// export async function getResponse(massage) {
//   const response = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: massage,
//     max_tokens: 256,
//     temperature: 0.7,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0
//   });
//   return response.data.choices[0].text;
// }