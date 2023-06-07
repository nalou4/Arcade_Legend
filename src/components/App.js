import '../style.css';
import Home from './Home';
import Games from './Games';

import { Routes, Route } from 'react-router-dom';

const App = () => {

    window.onload = function () {
        /* ANIMATIONS */
        /* title */
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            })
        })

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        /* navigation dropdown */
        const toggleBtn = document.querySelector('.toggle_btn');
        const toggleBtnIcon = document.querySelector('.toggle_btn i');
        const dropDownMenu = document.querySelector('.dropdown_menu');

        toggleBtn.onclick = function () {
            dropDownMenu.classList.toggle('open');
            const isOpen = dropDownMenu.classList.contains('open');

            toggleBtnIcon.classList = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'
        }
    };

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Games />} />
            </Routes>
        </>
    )
}

export default App;