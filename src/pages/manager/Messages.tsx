import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function Messages() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl text-gray-900 mb-2 flex items-center gap-3">
          <MessageSquare className="w-8 h-8 text-pink-600" />
          Сообщения
        </h1>
        <p className="text-gray-600">Входящие сообщения от клиентов</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="text-center py-20">
          <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl text-gray-600">Сообщения в разработке</h3>
          <p className="text-gray-500 mt-2">Скоро здесь появится система сообщений</p>
        </div>
      </div>
    </div>
  );
}
