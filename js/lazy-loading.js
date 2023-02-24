// Sections reveal
//----------------

//selecting sections

const allSections = document.querySelectorAll('.section')

const revealSection = function(entries, observer)
{
    const [entry] = entries;
    console.log(entry);
    if(!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    //unobserving sections
    observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver
(revealSection,{
    root:null,
    threshold: 0.05
})

//looping on all sections to add hidden class

allSections.forEach(function(section){
    sectionObserver.observe(section)
    section.classList.add('section--hidden');
});