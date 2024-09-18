
let showweb = document.getElementById("data-list-wrapper");
let next = document.getElementById("next-details");
let data1 = []
let currentIndex = 0;
function myfunction() {
    fetch("http://localhost:3000/Detail")
        .then((res) => {
            return res.json();
        }).then((data) => {
            display(data);
            data1 = data
        }).catch((err) => {
            console.log("error 404", err)
        })
}

myfunction()

function display(data) {
    if (currentIndex < data.length) {
        let showhtml = show(data[currentIndex].image, data[currentIndex].name, data[currentIndex].category, data[currentIndex].description);
        showweb.innerHTML += showhtml;
        currentIndex++;
        console.log(data)
    }
}

function show(image, name, category, description, id) {
    let showdata = `<div class="card" data-id="${id}">
            <div class="card-img">
                <img src="${image}" alt="${name}">
            </div>
            <div class="card-body">
                <h1 class="card-name">${name}</h1>
                <p class="card-category">${category}</p>
                <p class="description">${description}</p>
            </div>
        </div>`
    return showdata;
}

next.addEventListener('click', () => {
    display(data1);
})

