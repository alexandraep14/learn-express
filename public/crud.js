function readAllSongs(){
    fetch(`http://localhost:3000/songs/all`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let allSongsDiv = document.getElementById('getAllSongs')
            allSongsDiv.textContent = JSON.stringify(data)
        })


}
// using async-await with fetch
async function readAllSongs(){
    let res = await fetch(`http://localhost:3000/songs/all`)
    let data = await res.json()

    console.log(data)
    let allSongsDiv = document.getElementById('getAllSongs')
    allSongsDiv.textContent = JSON.stringify(data)


}
window.onload = readAllSongs;

function onReadSong(){

    let input = document.getElementById('songIndex')
    let songIndex = input.value;
    fetch(`http://localhost:3000/songs/one/${songIndex}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let songDiv = document.getElementById('readSong')
            songDiv.textContent = JSON.stringify(data)
            // TODO Json <-> String
            //    se face cu JSON.stringify(234) JSON.loads('{"name": "Alexandra"}')
        })
}

function onUpdateSong() {
    console.log('submitting')
    let updateForm = document.getElementById('updateForm')
    let formData = new FormData(updateForm)
    let data = new URLSearchParams(formData)

    fetch(`http://localhost:3000/songs/update/${formData.get('index')}`,
        {
            method: 'PUT',
            body: data
        })
        .then(res => res.text())
        .then(text => console.log(text))
}

function onDeleteSong() {
    console.log('submitting')
    let deleteForm = document.getElementById('deleteForm')
    let formData = new FormData(deleteForm)

    fetch(`http://localhost:3000/songs/delete/${formData.get('deleteIndex')}`,
        {
            method: 'DELETE'
        })
        .then(res => res.text())
        .then(text => console.log(text))
}