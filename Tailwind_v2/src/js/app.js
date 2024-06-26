document.addEventListener('DOMContentLoaded', function () {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
});

let bodyHTML = document.body;
let pHTML = document.querySelectorAll('p');
let h2HTML = document.querySelectorAll('h2');
let aHTML = document.querySelectorAll('a');
let pDivHTML = document.querySelectorAll('.bg-white p');

let lightSwitches = document.querySelectorAll('.light-switch');
if (lightSwitches.length > 0) {
    lightSwitches.forEach((lightSwitch, i) => {
        if (localStorage.getItem('dark-mode') === 'true') {
            lightSwitch.checked = true;
        }
        lightSwitch.addEventListener('change', () => {
            console.log("Cambio de color")
            const { checked } = lightSwitch;
            lightSwitches.forEach((el, n) => {
                if (n !== i) {
                    el.checked = checked;
                }
            });
            if (lightSwitch.checked) {
                localStorage.setItem('dark-mode', true);
                document.documentElement.classList.add('dark');

                bodyHTML.classList.add("dark:bg-black");
                pHTML.forEach(p => {
                    p.classList.add("text-white");
                });
                h2HTML.forEach(h2 => {
                    h2.classList.add("text-white");
                });
                aHTML.forEach(a => {
                    a.classList.add("text-white");
                });
                pDivHTML.forEach(p => {
                    p.classList.remove("text-white");
                });


            } else {
                localStorage.setItem('dark-mode', false);
                document.documentElement.classList.remove('dark');

                bodyHTML.classList.remove("dark:bg-black");
                pHTML.forEach(p => {
                    p.classList.remove("text-white");
                });
                h2HTML.forEach(h2 => {
                    h2.classList.remove("text-white");
                });
                aHTML.forEach(a => {
                    a.classList.remove("text-white");
                });
                pDivHTML.forEach(p => {
                    p.classList.remove("text-white");
                });
            }
        });
    });
}