const content = "Loading...";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 300)

var time = 3250;

	setTimeout(function(){
        // ms시간 후에 진행 될 코드 작성
		location.href='ex.html';
		}, time);