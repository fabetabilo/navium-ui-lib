// Import styles
import './styles/variables.css';
import './styles/base.css';

// Import components
import Button from './components/Button/Button.jsx';
import Footer from './components/Footer/Footer.jsx';
import FormGroup from './components/FormGroup/FormGroup.jsx';
import Toast from './components/Toast/Toast.jsx';
import ToastContainer, { ToastProvider, useToast } from './components/Toast/ToastContainer.jsx';
import Spinner from './components/Spinner/Spinner.jsx';
import EmptyState from './components/EmptyState/EmptyState.jsx';

// Export components
export { 
    Button, 
    Footer, 
    FormGroup, 
    Toast, 
    ToastContainer, 
    ToastProvider, 
    useToast,
    Spinner,
    EmptyState
};
