import { NextResponse } from 'next/server'
//Importing packages for aws sqs

import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";


// const SQS_QUEUE_URL = "https://sqs.ap-south-1.amazonaws.com/935018077921/ProcessingQueue.fifo";
export async function POST(req) {
    //Creating a function to send message to SQS queue
    const sendMessage = async () => {
        const messageBody = req.body;
        const sqsClient = new SQSClient({ region: "ap-south-1" });
        const command = new SendMessageCommand({
            QueueUrl: "https://sqs.ap-south-1.amazonaws.com/935018077921/ProcessingQueue.fifo",
            MessageBody: `${messageBody}`,
            MessageGroupId: "1",
            MessageDeduplicationId: "1",
        });
        const sqsReply = await sqsClient.send(command)
        console.log(sqsReply);
        return sqsReply;
    }
    sendMessage();

    if (sendMessage) {
        return NextResponse.json({ message: "Message sent successfully" });
    } else {
        return NextResponse.json({ message: "Error sending message" });

    }

}