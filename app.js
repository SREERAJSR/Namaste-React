import React from 'react';
import ReactDOM from 'react-dom/client';


const parent = React.createElement('div', { id: 'parent' },
    [React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'Iam first child'),
            React.createElement('h2', {}, "Iam 2nd child ")]
    ), React.createElement('div', { id: 'chld2' },
        [React.createElement('h1', {}, 'I   first child'),
        React.createElement('h2', {}, "I love you  nimisha")]
    )]
)  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)