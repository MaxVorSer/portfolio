import { ListCard } from './ListCard1';
import { products } from './products';
import { createRoot } from 'react-dom/client';

import './main.css';

// const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

// TODO: Реализовать компонент ProductList



const div = document.getElementById("root");
const reactRoot1 = createRoot(div);
reactRoot1.render( < ListCard / > );