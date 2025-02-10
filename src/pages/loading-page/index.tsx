export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-200"></div>
        <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-400"></div>
      </div>
    </div>
  );
}
