function readAllSongs() {
    fetch(`http://localhost:3000/songs/all`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let allSongsDiv = document.getElementById('getAllSongs')
            allSongsDiv.textContent = JSON.stringify(data)
        })


}

// using async-await with fetch
async function readAllSongs() {
    let res = await fetch(`http://localhost:3000/songs/all`)
    let data = await res.json()

    console.log(data)
    let allSongsDiv = document.getElementById('getAllSongs')
    allSongsDiv.textContent = JSON.stringify(data)


}

window.addEventListener("load", readAllSongs);

function onReadSong() {

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

function isFormValid(form) {
    for (let field of form.querySelectorAll('input,textarea')) {
        if (field.checkValidity() === false) {
            return false;
        }
    }
    return true;
}

function setValidityMessage(input, message) {
    input.addEventListener('input', e => {
        if (!input.validity.valid) {
            input.setCustomValidity(message);
            input.reportValidity();
        } else {
            input.setCustomValidity('')
        }
    })

}

window.addEventListener('load', e => {
    let index = document.getElementById('index')
    let title = document.getElementById('title')
    let genre = document.getElementById('genre')

    setValidityMessage(index, 'required')
    setValidityMessage(title, 'required')
    setValidityMessage(genre, 'At least 3 characters for the genre')
})

async function onUpdateSong() {
    console.log('submitting')
    let updateForm = document.getElementById('updateForm')
    if (isFormValid(updateForm)) {
        let formData = new FormData(updateForm)
        let requestData = new URLSearchParams(formData)

        console.log()

        let res = await fetch(
            `http://localhost:3000/songs/update/${formData.get('index')}`,
            {
                method: 'PUT',
                body: requestData
            })
        let responseData = await res.text();
        console.log(responseData)
    } else {
        alert('The form does not validate, so you cannot send the data')
    }
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