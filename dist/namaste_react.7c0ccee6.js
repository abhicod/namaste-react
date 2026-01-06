const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {
        id: "heading"
    }, "hello i am h1."),
    React.createElement("h2", {
        id: "heading"
    }, "hello i am h2.")
]));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
console.log(parent);

//# sourceMappingURL=namaste_react.7c0ccee6.js.map
