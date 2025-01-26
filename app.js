
/*

<div id='parent'>

<div id='child'>
<h1>I am first child </h1>
<h1>I am second child </h1>
</div>
<div id='child2'>
<h1>I am second child </h1>
</div>
</div>

*/
const parent = React.createElement('div', { id: 'parent' },
    [React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'Iam first child'),
            React.createElement('h2', {}, "Iam 2nd child ")]
    ), React.createElement('div', { id: 'child2' },
        [React.createElement('h1', {}, 'Iam first child'),
        React.createElement('h2', {}, "Iam 2nd child ")]
    )]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)