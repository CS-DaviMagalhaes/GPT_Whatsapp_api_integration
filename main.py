import openai
import keys

openai.api_key = keys.gpt_api_key

messages = [{"role": "system", "content": "Tienes que responderme como si fueras un adolescente muy agresivo y sarcastico"}]

while input != "quit()":
    message = input()
    messages.append({"role": "user", "content": message})
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages)
    reply = response["choices"][0]["message"]["content"]
    messages.append({"role": "assistant", "content": reply})
    print("\n" + reply + "\n")

