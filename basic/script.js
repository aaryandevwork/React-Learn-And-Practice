console.log("hello");

let root = document.querySelector(".root");
console.log(root);

// console.log(document);
// console.log(React);

let h1 = React.createElement("div",{},`<div class="box">
        <div class="name">
            <h1>sd</h1>
            <h1>sddd</h1>
            <h1>sdddddd</h1>
        </div>
    </div>`);
// console.log(h1);

let reactRoot = ReactDOM.createRoot(root).render(h1);