const AssistantGreeting = () => {
  return (
    <div className="flex items-center justify-center h-full text-center p-6 pt-0">
      <div className="text-gray-800 p-6 pt-0 rounded-lg  max-w-md">
        <div className="flex justify-center mb-4">
          <img className="w-40" src="src\assets\images\chatbot-icon.png" />
        </div>
        <h2 className="text-lg font-semibold">👋 Welcome to Our Chat!</h2>
        <p className="text-sm mt-2">
          I'm here to assist you. Feel free to ask me anything, and I'll do my
          best to assist!
        </p>
      </div>
    </div>
  );
};

export default AssistantGreeting;
