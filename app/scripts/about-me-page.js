document.addEventListener('DOMContentLoaded', domContentLoaded)
function domContentLoaded() {

    // setting name
    document.getElementById('about-me-name').innerText = `${userData.name.first} ${userData.name.middle} ${userData.name.last}`

    // Setting description
    document.getElementById('about-me-description').innerText = userData.about_me

    //  Adding Personal Details
    addingPersonalData()
}

function addingPersonalData() {

    const personalDetailsTableBody = document.getElementById('about-me-personal-details-table-body')

    // Adding birthDay
    const rowBirthday = createElementWith(userData.birthday.title,userData.birthday.value)
    personalDetailsTableBody.appendChild(rowBirthday)

    // Adding Age
    const rowAge = createElementWith(userData.age.title,userData.age.value)
    personalDetailsTableBody.appendChild(rowAge)

    // Adding Address
    const rowAddress = createElementWith(userData.address.title,userData.address.value)
    personalDetailsTableBody.appendChild(rowAddress)

    // Email
    const rowEmail = createElementWith(userData.email.title,userData.email.value)
    personalDetailsTableBody.appendChild(rowEmail)

    // Website
    const rowWebsite = createElementWith(userData.website.title,userData.website.value)
    personalDetailsTableBody.appendChild(rowWebsite)
    
}


function createElementWith(key, value) {
    const tableRow = document.createElement('tr')
    const tableDataTitle = document.createElement('td')
    const tableDataValue = document.createElement('td')

    const paragraphTitle= document.createElement('p')
    paragraphTitle.className = "about-me-personal-details-title"
    paragraphTitle.innerText = `${key}: `

    const paragraphValue = document.createElement('p')
    paragraphValue.className = "about-me-personal-details-value"
    paragraphValue.innerText = value


    tableDataTitle.appendChild(paragraphTitle)
    tableDataValue.appendChild(paragraphValue)

    tableRow.appendChild(tableDataTitle)
    tableRow.appendChild(tableDataValue)
    return tableRow
}