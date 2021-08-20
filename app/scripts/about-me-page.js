document.addEventListener('DOMContentLoaded', domContentLoaded)
function domContentLoaded() {

    // setting name
    // document.getElementById('about-me-name').innerText = `${userData.name.first} ${userData.name.middle} ${userData.name.last}`

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

    // Adding Address
    // const rowAddress = createElementWith(userData.address.title,userData.address.value)
    // personalDetailsTableBody.appendChild(rowAddress)

    // Email
    const rowEmail = createElementWith(userData.email.title,userData.email.value)
    personalDetailsTableBody.appendChild(rowEmail)

    // Website
    // const rowWebsite = createElementWith(userData.website.title,userData.website.value)
    // personalDetailsTableBody.appendChild(rowWebsite)

    let rowWebsite = createWebsiteRow()
    personalDetailsTableBody.appendChild(rowWebsite)    
}


function createElementWith(key, value) {
    const tableRow = document.createElement('tr')
    tableRow.className = "about-me-table-row"

    const tableDataTitle = document.createElement('td')
    tableDataTitle.className = "about-me-table-data-title"
    
    const tableDataValue = document.createElement('td')
    tableDataValue.className = "about-me-table-data-value"

    const tableDataSeparator = document.createElement('td')
    tableDataSeparator.className =  "about-me-table-data-separator"

    const h3_Title= document.createElement('h3')
    h3_Title.className = "about-me-user-details-title"
    h3_Title.innerText = key

    const h3_separator = document.createElement('h3')
    h3_separator.className = "about-me-user-details-separator"
    h3_separator.innerText = ":"

    const h3_Value = document.createElement('h3')
    h3_Value.className = "about-me-user-details-value"
    h3_Value.innerText = value

    tableDataTitle.appendChild(h3_Title)
    tableDataSeparator.appendChild(h3_separator)
    tableDataValue.appendChild(h3_Value)

    tableRow.appendChild(tableDataTitle)
    tableRow.appendChild(tableDataSeparator)
    tableRow.appendChild(tableDataValue)
    return tableRow
}

function createWebsiteRow() {
    const tableRow = document.createElement('tr')
    tableRow.className = "about-me-table-row"

    const tableDataTitle = document.createElement('td')
    tableDataTitle.className = "about-me-table-data-title"
    
    const tableDataValue = document.createElement('td')
    tableDataValue.className = "about-me-table-data-value"

    const tableDataSeparator = document.createElement('td')
    tableDataSeparator.className =  "about-me-table-data-separator"

    const h3_Title= document.createElement('h3')
    h3_Title.className = "about-me-user-details-title"
    h3_Title.innerText = userData.website.title

    const h3_separator = document.createElement('h3')
    h3_separator.className = "about-me-user-details-separator"
    h3_separator.innerText = ":"

    const h3_Value = document.createElement('h3')
    h3_Value.className = "about-me-user-details-value"
    h3_Value.innerText = userData.website.value

    tableDataTitle.appendChild(h3_Title)
    tableDataSeparator.appendChild(h3_separator)
    tableDataValue.appendChild(h3_Value)

    tableRow.appendChild(tableDataTitle)
    tableRow.appendChild(tableDataSeparator)
    tableRow.appendChild(tableDataValue)

    return tableRow

    
}