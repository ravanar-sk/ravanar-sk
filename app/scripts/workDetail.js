document.addEventListener('DOMContentLoaded', domContentLoaded)
function domContentLoaded() {

    //  Adding Work data

    addingWorkDetails()
}

function addingWorkDetails() {

    const workMainContainer = document.getElementById('work-container')

    const arrayWorkElements = workData.map((data) => {
        return createWorkElement(data)
    })

    for (let index = 0; index < arrayWorkElements.length; index++) {
        let workElement = arrayWorkElements[index]
        workMainContainer.appendChild(workElement)

        if ((arrayWorkElements.length > 1) && 
            (index < (arrayWorkElements.length - 1))) {
                let horizontalSeparator = createWorkSeparatorElement()
                workMainContainer.appendChild(horizontalSeparator)
            }
    }
}

function createWorkElement(data) {

    const div_Root = document.createElement('div')
    div_Root.className = "workdetails-item-root"

    const div_durationRoot = document.createElement('div')
    div_durationRoot.className = "workdetails-item-duration-root"

    const h2_startYear = document.createElement('h3')
    h2_startYear.className = "workdetails-item-duration-year"
    h2_startYear.innerText = `${data.startDate}`

    const h2_separatorSymbol = document.createElement('h3')
    h2_separatorSymbol.className = "workdetails-item-duration-year"
    h2_separatorSymbol.innerText = "-"

    const h2_endYear = document.createElement('h3')
    h2_endYear.className = "workdetails-item-duration-year"
    h2_endYear.innerText = `${data.endDate}`

    const div_verticalSeparator = document.createElement('div')
    div_verticalSeparator.className = "workdetails-item-vertical-separator"

    const div_detailsRoot = document.createElement('div')
    div_detailsRoot.className = "workdetails-item-details-root"

    const div_position = document.createElement('div')
    div_position.className = "workdetails-item-position"
    div_position.innerText = `${data.position}`

    const h3_organizationName = document.createElement('h3')
    h3_organizationName.className = "workdetails-item-organization-name"
    h3_organizationName.innerText = `${data.organizationName}`

    const h4_skills = document.createElement('h4')
    h4_skills.className = "workdetails-item-skills"
    h4_skills.innerText = `${data.skills.join(' | ')}`

    const div_description = document.createElement('div')
    div_description.className = "workdetails-item-description"
    div_description.innerText = `${data.description}`

    div_durationRoot.appendChild(h2_startYear)
    div_durationRoot.appendChild(h2_separatorSymbol)
    div_durationRoot.appendChild(h2_endYear)

    div_detailsRoot.appendChild(div_position)
    div_detailsRoot.appendChild(h3_organizationName)
    div_detailsRoot.appendChild(h4_skills)
    div_detailsRoot.appendChild(div_description)

    div_Root.appendChild(div_durationRoot)
    div_Root.appendChild(div_verticalSeparator)
    div_Root.appendChild(div_detailsRoot)

    return div_Root
}


function createWorkSeparatorElement() {

    const rootView = document.createElement('div')
    rootView.className = "workdetails-separator-root"

    const offsetView = document.createElement('div')
    offsetView.className = "workdetails-separator-offset-view"

    const separatorView = document.createElement('div')
    separatorView.className = "workdetails-separator-vertical"

    rootView.appendChild(offsetView)
    rootView.appendChild(separatorView)

    return rootView
}