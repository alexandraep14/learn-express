window.onload = () => {
    // after the page loads

    console.log('Page loaded')

    // what is fetch?
    // is a builtin way of fetching data from a server, such as ours from
    // localhost:3000/users

    fetch('http://localhost:3000/real-users/all')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let listElem = document.getElementById('userList')
            // DOM
            // listElem.textContent = JSON.stringify(data)
            for (const user of data) {
                // cream element html
                let listItemElem = document.createElement('li')
                listItemElem.textContent = `${user.name} has the following hobbies: ${user.hobbies}`
                listElem.appendChild(listItemElem);
            }
        })
    fetch('http://localhost:3000/hobbies/all')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let listHobbies = document.getElementById('listOfHobbies')
            for (const hobby of data) {
                let hobbyParagraph = document.createElement('p')
                // add text content to hobby
                hobbyParagraph.textContent = `${hobby} :)`
                // append hobby to div
                listHobbies.appendChild(hobbyParagraph);
            }
        })

    fetch('http://localhost:3000/music/all')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let liOfmusic = document.getElementById('listMonsuusic')
            for (const music of data) {
                let musicParagraph = document.createElement('p')
                // add text content to hobby
                musicParagraph.textContent = `${music} :)`
                // append hobby to div
                liOfmusic.appendChild(musicParagraph);
            }
        })


    // TODO
    //  use fetch to fetch data from     real-users/all
    //  and the other url you implement
}