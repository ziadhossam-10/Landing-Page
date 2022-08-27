/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navMenu = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();

/**
 * End Global Variables*/



// build the nav
sections.forEach(section => {
    // storing number of the section in secID
    let secID = section.getAttribute('data-nav');
    // creating links for each section
    let a = document.createElement('a');
    // adding Eventlisnter to the link for scrolling into the selected section  using (scrollIntoView) function
    a.addEventListener('click',function(){
        section.scrollIntoView({behavior: 'smooth'})});
    // crating li element
    let li = document.createElement('li');
    // making links have same text like sections
    var textNode = document.createTextNode(secID);
    // appending the text to a element
    a.appendChild(textNode);
    // appending a element to the li element
    li.appendChild(a);
    // appending li to fragment for better performance
    fragment.appendChild(li);
})
// appending the fragment to the ul element
navMenu.appendChild(fragment);
// End Of the Nav



// Start to get Active Section and Active links


//adding EventLisnter for listening for user's scrolling
window.addEventListener('scroll',()=>{
    // adding forEach loop for the sections
    sections.forEach(section => {
        // geting properties of DOMRect using getBoundingClientRect(); function and storing it in a variable to detect sections viewport
        let viewSec = section.getBoundingClientRect();
        // selecting created links and storing it in a variable
        let links = document.querySelectorAll('a');
            // making the condition for detecting the viewport if user scrolled to specified section 
            if(viewSec.top >=0 && viewSec.bottom < window.innerHeight + 100){

                //   Adding   Active Section

                sections.forEach(sec => {
                     //removing "your-active-class" class from unactivated section
                     sec.classList.remove('your-active-class');
                     })
                     // adding  "your-active-class" class to the activated section
                     section.classList.add('your-active-class');

                //    Adding   Active Link

                 links.forEach(link=>{
                     // extracting data-nav and storing it in a variable
                    let secID = section.getAttribute('data-nav');
                     // setting "if condition" to select the link for the currently active section
                        if(secID == link.textContent) {
                            links.forEach(a => {
                                // removing "your-active-link" class from unactivated link
                                a.classList.remove('your-active-link');
                              })
                                // "your-active-link" class from unactivated link
                                link.classList.add('your-active-link');
                             }
                    
                    })
                }}
            )
        })


// End Of Making Acvtive Sections And Links