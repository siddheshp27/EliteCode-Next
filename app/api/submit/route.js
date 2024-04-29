"use server";
import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";
// import { v4 } from "uuid";
export async function addInQueue(messageBody) {
  //Creating a function to send message to SQS queue
  // messageBody.id = v4();
  console.log(messageBody);
  // return 0;
  const sqsClient = new SQSClient({ region: "ap-south-1" });
  const command = new SendMessageCommand({
    QueueUrl:
      "https://sqs.ap-south-1.amazonaws.com/471112533947/elitecode_fifo_queue.fifo",
    MessageBody: JSON.stringify(messageBody),
    MessageGroupId: "1",
  });
  const sqsReply = await sqsClient.send(command);
  console.log(sqsReply);

  if (sqsReply) {
    return { success: "Message sent successfully" };
  } else {
    return { error: "Error sending message" };
  }
}
