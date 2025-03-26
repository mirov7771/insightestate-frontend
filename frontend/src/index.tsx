import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

// Найти контейнер для рендера
const container = document.getElementById('root');

// Убедиться, что контейнер существует перед рендером
if (container) {
  const root = createRoot(container); // Создаем корневой узел
  root.render(<App />);
} else {
  console.error('Контейнер root не найден. Проверьте index.html.');
}
