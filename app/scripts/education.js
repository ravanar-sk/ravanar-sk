document.addEventListener('DOMContentLoaded', domContentLoaded)
function domContentLoaded() {

    //  Adding project data

    addingEducationData()
}

function addingEducationData() {

    const educationMainContainer = document.getElementById('education-container')

    const arrayEducationElements = userData.education.map((educationData, index) => {

        if (index == 0) {
            return createEducationElement(educationData, true, false)
        } else if (index == (userData.education.length - 1)) {
            return createEducationElement(educationData, false, true)
        } else {
            return createEducationElement(educationData)
        }

    })

    for (let index = 0; index < arrayEducationElements.length; index++) {
        let educationElement = arrayEducationElements[index]
        educationMainContainer.appendChild(educationElement)
    }
}

function createEducationElement(educationData, isFirst = false, isLast = false) {

    const educationItemContainer = document.createElement('div')
    educationItemContainer.className = "education-item-container"

    const educationItemMainContainer = document.createElement('div')
    educationItemMainContainer.className = "education-item-main-container"

    const educationItemGraduationYear = document.createElement('h4')
    educationItemGraduationYear.className = "education-item-graduation-year"

    const educationItemMainTitle = document.createElement('h2')
    educationItemMainTitle.className = "education-item-main-title"

    const educationItemCircleIndicatorContainer = document.createElement('div')
    educationItemCircleIndicatorContainer.className = "education-item-circle-indicator-container"

    const educationItemCircleIndicator = document.createElement('div')
    educationItemCircleIndicator.className = "education-item-circle-indicator"

    const educationItemCircleBGLine = document.createElement('div')
    if (isFirst) {
        educationItemCircleBGLine.className = "education-item-circle-bg-line education-item-circle-bg-line-bottom-aligned"
    } else if (isLast) {
        educationItemCircleBGLine.className = "education-item-circle-bg-line education-item-circle-bg-line-top-aligned"
    } else {
        educationItemCircleBGLine.className = "education-item-circle-bg-line education-item-circle-bg-line-full-height"
    }


    educationItemMainContainer.appendChild(educationItemGraduationYear)
    educationItemMainContainer.appendChild(educationItemCircleIndicatorContainer)
    educationItemMainContainer.appendChild(educationItemMainTitle)

    educationItemCircleIndicatorContainer.appendChild(educationItemCircleBGLine)
    educationItemCircleIndicatorContainer.appendChild(educationItemCircleIndicator)

    educationItemContainer.appendChild(educationItemMainContainer)

    educationItemGraduationYear.innerText = educationData.graduationYear
    educationItemMainTitle.innerText = educationData.institutionName



    const educationItemSubContainer = document.createElement('div')
    educationItemSubContainer.className = "education-item-sub-container"

    const educationItemBGLineContainer = document.createElement('div')
    educationItemBGLineContainer.className = "education-item-bg-line-container"

    const educationItemBGLine = document.createElement('div')
    educationItemBGLine.className = "education-item-bg-line"

    const educationItemGraduationYearDummy = document.createElement('h4')
    educationItemGraduationYearDummy.className = "education-item-graduation-year"

    const educationItemSubTitle = document.createElement('h4')

    if (isLast) {
        educationItemSubTitle.className = "education-item-sub-title"
    } else {
        educationItemSubTitle.className = "education-item-sub-title-with-bottom-margin"
    }

    educationItemSubContainer.appendChild(educationItemGraduationYearDummy)
    educationItemSubContainer.appendChild(educationItemBGLineContainer)
    educationItemSubContainer.appendChild(educationItemSubTitle)

    if (!isLast) {
        educationItemBGLineContainer.appendChild(educationItemBGLine)
    }

    educationItemContainer.appendChild(educationItemSubContainer)

    educationItemSubTitle.innerText = `${educationData.university}  |  ${educationData.marksWithUnit}  |  ${educationData.subjects}`

    return educationItemContainer
}