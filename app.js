const heading = React.createElement('h1', {id:'heading',xyz:'hai'}, 'Hello world using React');
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)