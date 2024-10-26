function toggleMenu() {
    const buttons = document.getElementById('nav-buttons');
    buttons.classList.toggle('show');
}

const header = document.getElementById('header');
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const maxScroll = window.innerHeight; 
    const opacity = Math.max(0.3, 1 - scrollTop / maxScroll);
    header.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
});

document.getElementById('calorie-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const sexe = document.getElementById('sexe').value;
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseFloat(document.getElementById('age').value);

    let bmr;
    if (sexe === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161; 
    }

    document.getElementById('calorie-result').innerText = `Besoin calorique de maintenance: ${Math.round(bmr)} calories`;
});