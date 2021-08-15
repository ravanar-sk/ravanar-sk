document.addEventListener('DOMContentLoaded', domContentLoaded)
function domContentLoaded() {

    //  Adding project data

    addingEducationData()
}

function addingEducationData() {

    const educationMainContainer = document.getElementById('education-container')

    const arrayEducationElements = userData.education.map((educationData, index) => {
        return createEducationItem(educationData)
    })

    for (let index = 0; index < arrayEducationElements.length; index++) {
        let educationElement = arrayEducationElements[index]
        educationMainContainer.appendChild(educationElement)

        if ((arrayEducationElements.length > 1) &&
            (index != (arrayEducationElements.length - 1))) {
            let horizontalSeparator = createSeparatorElement()
            educationMainContainer.appendChild(horizontalSeparator)
        }
    }
}

function createEducationItem(data) {
    const rootView = document.createElement('div')
    rootView.className = "education-item-root"

    const header2_GraduationYear = document.createElement('h2')
    header2_GraduationYear.className = "education-item-graduation-year"
    header2_GraduationYear.innerText = `${data.graduationYear}`

    const view_verticalSeparator = document.createElement('div')
    view_verticalSeparator.className = "education-item-vertical-separator"

    const view_educationDetailsRoot = document.createElement('div')
    view_educationDetailsRoot.className = "education-item-education-details-root"

    const header2_InstitutionName = document.createElement('h2')
    header2_InstitutionName.className = "education-item-institution-name"
    header2_InstitutionName.innerText = `${data.institutionName} (${data.university})`

    const header3_CourseName = document.createElement('h3')
    header3_CourseName.className = "education-item-course-name"
    header3_CourseName.innerText = `${data.subjects}`

    const header4_Marks = document.createElement('h4')
    header4_Marks.className = "education-item-marks"
    header4_Marks.innerText = `${data.marksWithUnit}`

    view_educationDetailsRoot.appendChild(header2_InstitutionName)
    view_educationDetailsRoot.appendChild(header3_CourseName)
    view_educationDetailsRoot.appendChild(header4_Marks)



    rootView.appendChild(header2_GraduationYear)
    rootView.appendChild(view_verticalSeparator)
    rootView.appendChild(view_educationDetailsRoot)


    return rootView
}

function createSeparatorElement() {

    const rootView = document.createElement('div')
    rootView.className = "education-separator-root"

    const offsetView = document.createElement('div')
    offsetView.className = "education-separator-offset-view"

    const separatorView = document.createElement('div')
    separatorView.className = "education-separator-vertical"

    rootView.appendChild(offsetView)
    rootView.appendChild(separatorView)

    return rootView
}