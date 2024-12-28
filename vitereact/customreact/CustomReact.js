// isme mein apan khud ka react element bnakr dekhnge

function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(const prop in reactElement.props){
        if (prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

// ye element apan ne bnaya, ab apan ye expect kr rhe ki issi type m bnaynge 
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        targer:'_blank'
    },
    children:"click here "
    }
const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)
