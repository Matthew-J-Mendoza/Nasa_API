let dataInject = document.getElementById("dataInject")




// These funcitons below will generate our elements
function displayData() {

    //Image
    let imgCol = document.createElement("div")
    imgCol.className = "col-12 text-center"

    let img = document.createElement("img")
    img.setAttribute('src', "N/A")
    img.className = "img-fluid maxHeigth";

    imgCol.appendChild(img)


    //Text
    let textCol = document.createElement('div');
    textCol.className = "col-12 text-center";

    let cameraType = document.createElement('h2')
    cameraType.innerText = "View: " + "N/A"

    let roverName = document.createElement('h3')
    roverName.innerText = "Rover: " + "N/A"

    let roverStatus = document.createElement('h3')
    roverStatus.innerText = "Status: " + "N/A"

    textCol.appendChild(cameraType);
    textCol.appendChild(roverName);
    textCol.appendChild(roverStatus);

    //putting the pieces together

    dataInject.appendChild(imgCol);
    dataInject.appendChild(textCol);
    dataInject.appendChild(document.createElement('hr'));

}

function doesNotExist()
{
    let dataInject = document.getElementById("dataInject")
    let textCol = document.createElement('div');
    textCol.className = "col-12 text-center";

    let text = document.createElement('h2')
    text.innerText = "No Data Found"
    textCol.appendChild(text);
    dataInject.appendChild(textCol);
}