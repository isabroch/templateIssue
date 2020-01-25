
const list = ['list1', 'list2', 'list3', 'list4',]
const subList = ['sublist', 'sublist', 'sublist', 'sublist',]

list.forEach(element => {
    const outerTemplate = document.querySelector('.outerTemplate').content.cloneNode(true);
    const outerItem = outerTemplate.querySelector('.outerItem');
    const innerContainer = outerTemplate.querySelector('.innerContainer');

    outerItem.prepend(document.createTextNode(element));

    subList.forEach(element => {
        const innerTemplate = outerTemplate.querySelector('.innerTemplate').content.cloneNode(true)
        const innerItem = innerTemplate.querySelector('.innerItem')
        innerItem.textContent = element
        innerContainer.appendChild(innerTemplate)
    })

    document.querySelector('.outerContainer').appendChild(outerTemplate)
});

// ul #

// template *
//     li
//     ul

// template
//     li
// /template

// /template

// append template* to ul#