//"matches": ["<all_urls>"] for all URL's

//function that creates the solver button
function createButton() {
    var w = document.getElementsByClassName('brn-qpage-next-question-box')[0]
    var t = document.createElement('div');
    t.className = 'brainlyfreebtn';
    t.innerHTML = '<h1>Unlock Answers with <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Brainly_logo_with_B.svg/1024px-Brainly_logo_with_B.svg.png"> Solver</h1>'
    w.append(t)
    t.addEventListener('click', displayAnswers)
    c = document.createElement('style');
    c.innerHTML = '.brainlyfreebtn { height: 60px; width: 200px; background: #60d399; border-radius: 50px; padding: 15px 15px; text-align: center; display: flex; flex-direction: row; flex-wrap: wrap; align-content: center; justify-content: center; align-items: center; } .brainlyfreebtn h1 { color: white; font-size: 17px; } .brainlyfreebtn img { width: 15px; } .brainlyfreebtn:hover { cursor: pointer; }'
    document.body.append(c)
}

//setting the timeout for creating the button (1 second)
setTimeout(function(){
    createButton();
}, 1000);

//function to display the hidden answers
function displayAnswers() {
    console.clear()
    console.log('Brainly solver Started')


    data = (document.getElementsByClassName('js-main-question js-react-question-box')[0]).getAttribute('data-z')
    JSONdata = JSON.parse(data);
    console.log(JSONdata)
    if(JSONdata['responses'].length > 0) {
        responses = JSONdata['responses'];
        for (var i = 0; i < responses.length; i++) {
            var f = document.createElement('div');
            f.className = 'brainlyfreeansbx';
            f.innerHTML = `
            <div class="brainlyfreeans">
            <div class="toprow">
                <div class="profile">
            <div class="sg-avatar avtr"><div class="sg-avatar__image sg-avatar__image--icon"><div class="sg-icon sg-icon--gray-light sg-icon--x32 sg-avatar__icon"><svg class="sg-icon__svg"><use xlink:href="#icon-profile"></use></svg></div></div></div>
            <div class="username" onclick="location.href='https://brainly.com/app/profile/${responses[i].userId}'">Creator</div>
            <div class="datecreated">${(responses[i].created).substring(0,10)}</div></div><div onclick="( document.getElementsByClassName('brainlyfreeansbx')[${i}] ).remove();" class="collapse">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.677 18.52c.914 1.523-.183 3.472-1.967 3.472h-19.414c-1.784 0-2.881-1.949-1.967-3.472l9.709-16.18c.891-1.483 3.041-1.48 3.93 0l9.709 16.18z"></path></svg>
            </div>
            </div>
            <div class="ans_txt">
                ${responses[i]['content']}
            </div>
            </div>`
            l = document.getElementsByClassName('js-main-question')[0];
            l.append(f)
            cc = document.createElement('style');
            cc.innerHTML = '.brainlyfreebox { display: flex; flex-direction: row; flex-wrap: wrap; align-content: center; justify-content: center; align-items: center; } .brainlyfreeansbx { } .brainlyfreeansbx { width: 608px; transition: 0.3s; background: #4fb3f6; border-radius: 20px; } .brainlyfreeans { margin-bottom: 10px;padding: 20px; display: flex; flex-wrap: wrap; flex-direction: row; align-content: center; align-items: center; } .ans_txt { color: white; width: 608px; } .username:hover { cursor: pointer; } .profile { color: white; display: flex; justify-self: flex-start; justify-content: space-between; width: 225px; flex-wrap: wrap; flex-direction: row; padding-bottom: 20px; margin: 0px; align-content: center; align-items: center; } .username { font-weight: bold; text-decoration: 1px underline; font-size: 25px; } .collapse svg { color: white; fill: white; width: 20px; display: flex; } .collapse { display: flex; flex-direction: row; flex-wrap: wrap; align-content: center; align-items: center; justify-content: flex-end; justify-self: flex-end; margin-bottom: 25px; } .toprow { display: flex; flex-direction: row; flex-wrap: wrap; align-content: center; justify-content: space-between; align-items: center; width: 100%; }'
            document.body.append(cc)            
        }
    }
    else{
        return
    }  



}