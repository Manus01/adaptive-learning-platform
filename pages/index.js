import { useState } from 'react';
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { ChatBubbleLeftRightIcon } from "lucide-react";

export default function AdaptiveLearningPlatform() {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleSend = async () => {
        if (userInput.trim() === '') return;

        const newMessage = { sender: 'User', text: userInput };
        setChatHistory(prevHistory => [...prevHistory, newMessage]);
        setUserInput('');

        // Simulating AI response
        const aiResponse = { sender: 'AI', text: `Analyzing: ${userInput}...` };
        setTimeout(() => {
            setChatHistory(prevHistory => [...prevHistory, aiResponse]);
        }, 1500);
    };

    return (
        <div className="flex flex-col items-center p-6">
            <h1 className="text-2xl font-bold">Adaptive Digital Marketing Learning</h1>
            <Card className="w-full max-w-2xl mt-4 p-4">
                <CardContent>
                    <div className="h-64 overflow-y-auto border rounded-lg p-4 bg-gray-100">
                        {chatHistory.map((msg, index) => (
                            <div key={index} className={`mb-2 ${msg.sender === 'User' ? 'text-right' : 'text-left'}`}> 
                                <span className={`inline-block px-4 py-2 rounded-lg ${msg.sender === 'User' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                                    {msg.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
            <div className="mt-4 w-full max-w-2xl flex gap-2">
                <Input 
                    value={userInput} 
                    onChange={(e) => setUserInput(e.target.value)} 
                    placeholder="Ask about digital marketing..." 
                    className="flex-1"
                />
                <Button onClick={handleSend} className="bg-blue-600 hover:bg-blue-700 flex items-center">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" /> Send
                </Button>
            </div>
        </div>
    );
}
