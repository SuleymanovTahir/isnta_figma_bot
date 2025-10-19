import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Chat() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl text-gray-900 mb-2 flex items-center gap-3">
          <MessageCircle className="w-8 h-8 text-pink-600" />
          Чат с клиентами
        </h1>
        <p className="text-gray-600">Общение с клиентами в реальном времени</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 h-[600px]">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl text-gray-600">Чат в разработке</h3>
            <p className="text-gray-500 mt-2">Скоро здесь появится функционал чата</p>
          </div>
        </div>
      </div>
    </div>
  );
}
