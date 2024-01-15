import re

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


