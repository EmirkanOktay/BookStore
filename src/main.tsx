import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './Redux/Store';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import Router from './Router/Router';
import { MemberProvider } from './Redux/UserStatusSlicer';
import { FavoritesProvider } from './Redux/FavoritesSlicer';
import { CartProvider } from './Redux/CartSlicer';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <BrowserRouter>
      <ReduxProvider store={store}>
        <MemberProvider>
          <CartProvider>
            <FavoritesProvider>
              <App />
              <Router />
            </FavoritesProvider>
          </CartProvider>
        </MemberProvider>
      </ReduxProvider>

    </BrowserRouter>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
