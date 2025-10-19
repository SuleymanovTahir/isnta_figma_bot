import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function Funnel() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl text-gray-900 mb-2 flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-pink-600" />
          Воронка продаж
        </h1>
        <p className="text-gray-600">Анализ конверсии клиентов</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="text-center py-20">
          <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl text-gray-600">Воронка продаж в разработке</h3>
          <p className="text-gray-500 mt-2">Скоро здесь появится визуализация воронки</p>
        </div>
      </div>
    </div>
  );
}
