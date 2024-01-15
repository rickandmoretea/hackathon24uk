from openai import OpenAI
import time
import re
import json

client = OpenAI()
ASSISTANT_ID = "<assistant-id>"

# Create a new thread
thread = client.beta.threads.create()

def normalize_userdata_for_ai(skin_type, primary_concerns, secondary_concerns, allergies, current_products, budget, product_preference, location):
    return (
        "Provide a personalized skincare routine for the following details: \n"
        f"Skin Type; {skin_type}\n"
        f"Primary Skin Concerns: {primary_concerns}\n"
        f"Secondary Skin Concerns: {secondary_concerns}\n"
        f"Known Allergies/Sensitivities: {allergies}\n"
        f"Current Products Used: {current_products}\n"
        f"Budget Range: {budget}\n"
        f"Preference for Product Type: {product_preference}\n"
        f"Geographical Location: {location}\n\n"
    )


test = normalize_userdata_for_ai(skin_type="Oily", primary_concerns="Whitehead", secondary_concerns="Irregular Texture", allergies="None", current_products="N/A", budget="1,000 THB", product_preference="N/A", location="Bangkok")

message = client.beta.threads.messages.create(
    thread_id=thread.id,
    role="user",
    content=test
)

run = client.beta.threads.runs.create(
    thread_id=thread.id,
    assistant_id=ASSISTANT_ID)

print("checking assistant status. ")
while True:
    run = client.beta.threads.runs.retrieve(
        thread_id=thread.id,
        run_id=run.id)
    if run.status == "completed":
        print("Assistant completed")
        messages = client.beta.threads.messages.list(thread_id=thread.id)

        print("Messages: ")
        for message in messages:
            assert message.content[0].type == "text"
            print(message.content[0].text.value)
        
        break
    else:
        print("Assistant still running")
        time.sleep(5)


#Class to normalize AI personalized data from OpenAI to be used as API 
class NormalizeDataDermAI:
    def getCleanserRecommendation(self, output_text) -> tuple:
        match = re.search(r"Cleanser Recommendation:\s*(.*?)\((.*?)\)\s*-\s*(.*?)(?=\n\n|\Z)", output_text, re.DOTALL)
        return (match.group(1).strip(), match.group(3).strip()) if match else ("No product", "No description")

    @staticmethod
    def getTonerRecommendation(output_text) -> tuple:
        match = re.search(r"Toner Recommendation:\s*(.*?)\((.*?)\)\s*-\s*(.*?)(?=\n\n|\Z)", output_text, re.DOTALL)
        return (match.group(1).strip(), match.group(3).strip()) if match else ("No product", "No description")

    @staticmethod
    def getSerumRecommendation(output_text):
        match = re.search(r"Serum Recommendation:\s*(.*?)(?=\n\n\d|\Z)", output_text, re.DOTALL)
        return (match.group(1).strip(),) if match else ("No product",)

    @staticmethod
    def getMoisturizerRecommendation(output_text) -> tuple:
        match = re.search(r"Moisturizer Recommendation:\s*(.*?)\((.*?)\)\s*-\s*(.*)", output_text, re.DOTALL)
        return (match.group(1).strip(), match.group(3).strip()) if match else ("No product", "No description")

    @staticmethod
    def getSunscreenRecommendation(output_text) -> tuple:
        match = re.search(r"Sunscreen Recommendation:\s*(.*?)\((.*?)\)\s*-\s*(.*?)(?=\n\d|\n\nRoutine Schedule|\Z)", output_text, re.DOTALL)
        return (match.group(1).strip(), match.group(3).strip()) if match else ("No product", "No description")

    @staticmethod
    def getAdditionalRecommendation(output_text) -> tuple:
        match = re.search(r"Additional Treatments:\s*(.*?)(?=\n\nRoutine Schedule|\Z)", output_text, re.DOTALL)
        return (match.group(1).strip(),) if match else ("No description",)

    @staticmethod
    def getMorningRoutineRecommendation(output_text) -> str:
        match = re.search(r"Morning Routine: (.*?)\n", output_text)
        return match.group(1) if match else "No routine found"

    @staticmethod
    def getEveningRoutineRecommendation(output_text) -> str:
        match = re.search(r"Evening Routine: (.*?)\n", output_text)
        return match.group(1) if match else "No routine found"

    @staticmethod
    def getSpecialInstructions(output_text) -> str:
        match = re.search(r"Special Instructions: (.*?)\n", output_text)
        return match.group(1) if match else "No instructions found"


