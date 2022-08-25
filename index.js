const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function pageTransitions() {
    for (let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', (e) => {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList.remove("active-btn");
            secBtn[i].classList.add("active-btn");
            // console.log(e.target.dataset.id);

            sections.forEach((section) => {
                if (section.id === e.target.dataset.id) {
                    // console.log(section);
                    const activePage = document.querySelectorAll('.active');
                    // console.log(activePage[0]);
                    activePage[0].classList.remove('active');
                    section.classList.add('active');
                }
            });

        });
    }

}

pageTransitions();
