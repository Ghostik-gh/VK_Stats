const token = '6c857c7502850f1fd06bd4de84dfdf4bb1a90b77795104e1cc2d29fcff3196dee35247277eefbb6770b9b';
// https://oauth.vk.com/authorize?client_id=8074443&display=page&redirect_uri=https://ghostik-gh.github.io&scope=friends&response_type=token&v=5.131&state=123456
// https://api.vk.com/method/friends.getOnline?v=5.131&access_token=dc678159de047caa96002fae5f76f548c75448c7313946b5b743fff06c830c9149f952741c6d828cafe67
const client_id = 8074443;

async function getResponse(){
    let url = new URL('https://api.vk.com/method/users.get?v=5.131&access_token=6c857c7502850f1fd06bd4de84dfdf4bb1a90b77795104e1cc2d29fcff3196dee35247277eefbb6770b9b');

    let response = fetch(url, {mode: "no-cors"});
    // console.log(response);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        // let object = await response.json().then(console.log);
        return response;
    } else {
        alert("HTTP-Error: " + response.status);
    }

}


function getResponseF(){
    let url = new URL('https://api.vk.com/method/users.get?v=5.131&access_token=6c857c7502850f1fd06bd4de84dfdf4bb1a90b77795104e1cc2d29fcff3196dee35247277eefbb6770b9b');

    let response = fetch(url, {mode: "no-cors"});
    console.log(response);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let object = response.json().then(console.log);
        console.log(object);
    } else {
        alert("HTTP-Error: " + response.status);
    }
    let object = response.json().then(console.log);
    console.log(object);
}

const formGetId = document.getElementById('formUserId');
formGetId.addEventListener('submit', getFormValue);
function getFormValue(e){
    e.preventDefault();
    userIdName = formGetId.querySelector('[name="id"]');
    userId = userIdName.value;
    console.log(userId)
} // Получили User ID но только внутри функции 

let user_token = ''
const hash = window.location.hash;
flag = false
for (let char of hash){
    if (char == '&') break;
    if (flag) user_token += char;
    if (char == '=') flag = true; 
}

console.log(user_token)

// console.log(params);
// console.log('token --> ', params.get('access_token'));

// fetch('https://api.vk.com/method/users.get?v=5.131&access_token=6c857c7502850f1fd06bd4de84dfdf4bb1a90b77795104e1cc2d29fcff3196dee35247277eefbb6770b9b', {mode: "no-cors"}).then(res => res.json()).then(console.log);

// fetch(url, {mode: "no-cors"}) .then(res => res.json()) .then(console.log);
