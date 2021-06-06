document.addEventListener('DOMContentLoaded', domContentLoaded)
function domContentLoaded() {

    //  Adding project data

    addingProjectData()
}

function addingProjectData() {
    const projectGridLayout = document.getElementById('projects-grid-layout')
    const arrayProjectElements = projects.map(projectData => {
        return createProjectElement(projectData)
    })
    
    for (let index = 0; index < arrayProjectElements.length; index++) {
        let node = arrayProjectElements[index] 
        projectGridLayout.appendChild(node)
    }
}

const iconApple = "https://raw.githubusercontent.com/ravanar-sk/MyProfile-assets/main/iconApple.png"
const iconAndroid = "https://raw.githubusercontent.com/ravanar-sk/MyProfile-assets/main/iconAndroid.png"
const iconWeb = "https://raw.githubusercontent.com/ravanar-sk/MyProfile-assets/main/iconWeb.png"
const iconReactNative = "https://raw.githubusercontent.com/ravanar-sk/MyProfile-assets/181cc1027485d870fbbef196955c1af9d37ca09b/iconReactNative.svg"

function createProjectElement(projectData) {

    const divGridItem = document.createElement('div')
    const imgBGImage = document.createElement('img')
    const divContent = document.createElement('div')
    const h1Title = document.createElement('h1')

    divGridItem.classList = "projects-grid-item"

    imgBGImage.classList = "projects-grid-item-bg-image"
    if (projectData.icon == null ||
        projectData.icon == undefined ||
        projectData.icon.length == 0)
        imgBGImage.src = "https://raw.githubusercontent.com/ravanar-sk/MyProfile-assets/main/placeholderImage.png"
    else
        imgBGImage.src = projectData.icon

    divContent.classList = "projects-grid-item-content-container"

    h1Title.classList = "projects-grid-title"
    h1Title.innerText = projectData.title


    divGridItem.appendChild(imgBGImage)
    divGridItem.appendChild(divContent)
    divContent.appendChild(h1Title)


    const divProjectTagsContainer = document.createElement('div')
    divProjectTagsContainer.className = "projects-tags-container"

    const divProjectTagsRow = document.createElement('div')
    divProjectTagsRow.className = "projects-tags-row"

    if (projectData.projectData.type === "mobile") {

        if (projectData.projectData.isReactNative === true) {
            const divProjectTagsItemRN = document.createElement('img')
            divProjectTagsItemRN.className = "projects-tags-item"
            divProjectTagsItemRN.src = iconReactNative
            divProjectTagsRow.appendChild(divProjectTagsItemRN)
        }

        if (projectData.projectData.ios) {
            const divProjectTagsItemApple = document.createElement('img')
            divProjectTagsItemApple.className = "projects-tags-item"
            divProjectTagsItemApple.src = iconApple

            if (projectData.projectData.ios.url.length > 0) {
                const hyperTextElement = document.createElement('a')
                hyperTextElement.href = projectData.projectData.ios.url
                hyperTextElement.appendChild(divProjectTagsItemApple)
                divProjectTagsRow.appendChild(hyperTextElement)
            } else {
                divProjectTagsRow.appendChild(divProjectTagsItemApple)
            }
        }

        if (projectData.projectData.android) {
            const divProjectTagsItemAndroid = document.createElement('img')
            divProjectTagsItemAndroid.className = "projects-tags-item"
            divProjectTagsItemAndroid.src = iconAndroid

            if (projectData.projectData.android.url.length > 0) {
                const hyperTextElement = document.createElement('a')
                hyperTextElement.href = projectData.projectData.android.url
                hyperTextElement.appendChild(divProjectTagsItemAndroid)
                divProjectTagsRow.appendChild(hyperTextElement)
            } else {
                divProjectTagsRow.appendChild(divProjectTagsItemAndroid)
            }
        }

        

    } else if (projectData.projectData.type === "web") {
        const divProjectTagsItem = document.createElement('img')
        divProjectTagsItem.className = "projects-tags-item"
        divProjectTagsItem.src = iconWeb
        divProjectTagsRow.appendChild(divProjectTagsItem)
    }

    
    divProjectTagsContainer.appendChild(divProjectTagsRow)
    divGridItem.appendChild(divProjectTagsContainer)

    return divGridItem
}