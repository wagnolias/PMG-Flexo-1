import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Não foi possível encontrar o elemento root');
}

try {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} catch (error) {
  console.error('Erro ao renderizar a aplicação:', error);
  rootElement.innerHTML = `
    <div style="padding: 20px; color: red; font-family: sans-serif;">
      <h1>Erro ao carregar o site</h1>
      <p>Ocorreu um erro técnico. Por favor, verifique o console do navegador (F12).</p>
      <pre>${error instanceof Error ? error.message : String(error)}</pre>
    </div>
  `;
}
