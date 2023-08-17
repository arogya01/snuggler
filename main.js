const axios = require('axios');
const { execSync } = require('child_process');

// Set your server URL and API key here
const SERVER_URL = 'https://snuggler-server.onrender.com';

// Function to execute shell commands
const runCommand = (command) => {
    return execSync(command, { encoding: 'utf-8' });
};

// Function to collect and push messages
const collectAndPushMessages = async () => {
    while (true) {
        try {
            // Collect SMS messages using ADB
            const result = runCommand('adb shell content query --uri content://sms');

            // Push messages to the Appwrite server
            const messages = result.trim().split('\n');
            console.log('messages are',messages);
            // for (const message of messages) {
            //     const data = {
            //         message: message.trim(),
            //         timestamp: Math.floor(Date.now() / 1000)
            //     };

            //     const response = await axios.post(SERVER_URL, data, { headers });
            //     if (response.status === 201) {
            //         console.log('Message pushed successfully:', message);
            //     } else {
            //         console.log('Failed to push message:', message);
            //     }
            // }

            // Wait before collecting and pushing again
            await new Promise(resolve => setTimeout(resolve, 60000)); // Adjust interval as needed

        } catch (error) {
            console.error('An error occurred:', error);
        }
    }
};

collectAndPushMessages();
