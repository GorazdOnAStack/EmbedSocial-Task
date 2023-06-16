let global_index = 4
let list = document.querySelector('ul')
let data = []
const root = document.querySelector(':root');
fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        data = json
        for (let i = 0; i < 4; i++) {
            let date_formatted = dateformat(data[i].date)
            list.insertAdjacentHTML('beforeend', `
                <li>
                    <div>
                        <div class="captionP">
                            <a href="${data[i].source_link}"><img class="profile" src="${data[i].profile_image}"  alt=""></a>
                            <div style="font-size: 22px" onload="dateformat()">${data[i].name}<br><span class="date_format">${date_formatted}</span></div>
                        </div>

                        <img class="off" src="${data[i].image}" onclick="enlarge(event)" style="max-width: 509px">
                        <div class="likes_grouped">
                            <div class="likes"><img src="https://purepng.com/public/uploads/large/heart-icon-y1k.png" alt="" width="30px" height="30px"></div>
                            <div class="likes_text">Liked by ${data[i].likes} users</div>
                        </div>
                        <div class="captionT">${data[i].caption}</div>
                    </div>
                </li>`)
        }
        console.log(data[1])
    })

function load(index) {

    for (let i = index; i < index + 4 && i < data.length; i++) {
        let date_formatted = dateformat(data[i].date)
        list.insertAdjacentHTML('beforeend', `
                <li>
                    <div>
                        <div class="captionP">
                            <a href="${data[i].source_link}"><img class="profile" src="${data[i].profile_image}"  alt=""></a>
                            <div style="font-size: 22px" onload="dateformat()">${data[i].name}<br><span class="date_format">${date_formatted}</span></div>
                        </div>

                        <img class="off" src="${data[i].image}" onclick="enlarge(event)" style="max-width: 509px">
                        <div class="likes_grouped">
                            <div class="likes"><img src="https://purepng.com/public/uploads/large/heart-icon-y1k.png" alt="" width="30px" height="30px"></div>
                            <div class="likes_text">Liked by ${data[i].likes} users</div>
                        </div>
                        <div class="captionT">${data[i].caption}</div>
                    </div>
                </li>`)
    }
    global_index += 4
    if (global_index >= data.length) {
        document.getElementById('btn1').style.display = 'none'
    }
}

function enlarge(event) {
    if (event.target.className === 'off') {
        event.target.classList.toggle('off')
        event.target.style.transform = 'scale(1.2)'
        event.target.style.transition = "transform 0.25s ease"
    } else {
        event.target.classList.toggle('off')
        event.target.style.transform = 'scale(1.0)'
        event.target.style.transition = "transform 0.25s ease"
        event.target.style.transform = null;
        event.target.style.transition = null;
    }
}

function dateformat(dateTmp) {
    var date = new Date(dateTmp)
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    var formattedDate = day + '-' + month + '-' + year

    return new Intl.DateTimeFormat('en-GB', {month: 'long', day: 'numeric', year: 'numeric'}).format(date)
}

function switchTheme() {
    let body = document.getElementsByTagName('body')[0]
    body.classList.toggle('dark')
    if (body.classList.contains('dark')) {
        root.style.setProperty('--CPcolor', '#f9fafd')
        root.style.setProperty('--CTcolor', '#9d9d9d')
        root.style.setProperty('--box_shadow1', '1px 2px 2px 10px #5b5b5b')
        root.style.setProperty('--box_shadow2', '1px 0px 10px 20px #5b5b5b')
        root.style.setProperty('--border_li', '2px solid #5b5b5b')
        root.style.setProperty('--li_bg', '#262626')
    } else {
        root.style.setProperty('--CPcolor', 'black')
        root.style.setProperty('--CTcolor', '#4c4c4c')
        root.style.setProperty('--box_shadow1', '1px 2px 2px 10px #ededed')
        root.style.setProperty('--box_shadow2', '1px 0px 10px 20px #ededed')
        root.style.setProperty('--li_bg', 'white')
    }

}