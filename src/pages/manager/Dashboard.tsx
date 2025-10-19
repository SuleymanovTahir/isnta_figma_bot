import React from 'react';
import { LayoutDashboard, MessageSquare, Users, TrendingUp } from 'lucide-react';

export default function ManagerDashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl text-gray-900 mb-2">Панель менеджера</h1>
        <p className="text-gray-600">Управление клиентами и сообщениями</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <MessageSquare className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-2xl text-gray-900 mb-1">42</h3>
          <p className="text-gray-600 text-sm">Новых сообщений</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-2xl text-gray-900 mb-1">128</h3>
          <p className="text-gray-600 text-sm">Активных клиентов</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-2xl text-gray-900 mb-1">+18%</h3>
          <p className="text-gray-600 text-sm">Рост конверсии</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
            <LayoutDashboard className="w-6 h-6 text-pink-600" />
          </div>
          <h3 className="text-2xl text-gray-900 mb-1">94%</h3>
          <p className="text-gray-600 text-sm">Удовлетворенность</p>
        </div>
      </div>
    </div>
  );
}
