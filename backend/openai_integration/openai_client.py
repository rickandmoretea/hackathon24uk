from openai import OpenAI
import time

class OpenAPIClient:
    def __init__(self, assistant_id):
        self.client = OpenAI() # api = api
        self.assistant_id = assistant_id

    def create_thread(self):
        thread = self.client.beta.threads.create()
        return thread

    def send_message(self, thread_id, content):
        message = self.client.beta.threads.messages.create(
            thread_id=thread_id,
            role="user",
            content=content
        )
        return message

    def getResponse(self, thread_id, run_id):
        while True:
            run = self.client.beta.threads.runs.retrieve(
                thread_id=thread_id,
                run_id=run_id)
            if run.status == "completed":
                return run
            else:
                time.sleep(5)