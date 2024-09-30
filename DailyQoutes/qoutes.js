var y=Math.random()*30
let mat=Math.ceil(y)
fetch(`https://dummyjson.com/quotes/${mat}`).then((data)=>{
    return data.json();
}).then((data)=>{
    console.log(data);

    document.querySelector('.main').innerHTML += `         
    <div class="card">
                <h4>For  Author : <span>${data.author}</span></h4>
                <p>${data.quote}</p>
                <div class="tool">
                <div class="copy">
                <i class="fa fa-copy" onclick="copy()"></i>
                </div>
                <i class="fa fa-refresh" onclick="refresh()"></i>
            </div>
    </div>`;

    // document.write(`<h2>Oute id is : ${data.id}</h2><p>this Quote is : ${data.quote}</p>`);

});
function copy() {
    let text = document.querySelector('p').innerHTML;
    navigator.clipboard.writeText(text);

    var element = document.querySelector(".copy"); // Define the element
    var notification = document.createElement("div"); // Create the notification element
    notification.textContent = "Text copied to clipboard";
    notification.classList.add("copy-notification");
    element.appendChild(notification);
    element.innerHTML="coppied";
    setTimeout(()=> {
        notification.remove();
        element.innerHTML='<i class="fa fa-copy" onclick="copy()"></i>';
    },2000);
}


function refresh(){
    window.location.reload();
    location.reload(true);

}
    




