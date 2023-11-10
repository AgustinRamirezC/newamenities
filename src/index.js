import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDGdDJ0878xcS_2KK8IHlcosIvDjq-W0VU",
  authDomain: "new-amenities.firebaseapp.com",
  projectId: "new-amenities",
  storageBucket: "new-amenities.appspot.com",
  messagingSenderId: "301473864739",
  appId: "1:301473864739:web:f88b7db2d7ebb8391f2596"
};
  
  // Inicializa Firebase con la configuración
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export { firebase, db };



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <App />
</BrowserRouter>,
document.getElementById('root')
);

