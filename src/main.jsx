import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import PortfolioApp from './PortfolioApp.jsx';
import { AppTheme } from './theme/AppTheme.jsx';

import './i18n';

createRoot(document.getElementById('root')).render(
    <AppTheme>
        <PortfolioApp />
    </AppTheme>
);
