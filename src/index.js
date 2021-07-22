import 'normalize.css';
import './style.css';

const scrollStats = (() => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.offsetHeight;
    const winHeight = window.innerHeight;
    const percent = () => (scrollTop / (docHeight - winHeight)) * 100;
    const percentRounded = () => Math.round(percent());
    return {
        scrollTop,
        percent,
        percentRounded,
    };
});

window.onload = function () {
    if (scrollStats().percent() > 0) {
        showSite();
    }
}

window.addEventListener('wheel', function (e) {
    if (scrollStats().percent() <= 49.5 && e.deltaY > 0) {
        landingPageTransition('in');
        return;
    } else if (scrollStats().percent() === 0 && e.deltaY < 0) {
        landingPageTransition('out');
    }
});

window.addEventListener('touchmove', function (e) {
    if (scrollStats().percent() <= 49.5 && e.deltaY > 0) {
        landingPageTransition('in');
        return;
    } else if (scrollStats().percent() === 0 && e.deltaY < 0) {
        landingPageTransition('out');
    }
});

function showSite() {
    document.body.style = 'overflow-y: scroll';
}

function hideSite() {
    document.body.style = 'overflow-y: hidden';
}

function landingPageTransition(status) {
    const landingPage = document.querySelector('#landing-page');
    if (status === 'in') {
        landingPage.style = 'height: 0';
        showSite();
    } else if (status === 'out') {
        landingPage.style = 'height: 100vh';
        hideSite();
    }
}