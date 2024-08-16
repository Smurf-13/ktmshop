document.addEventListener("DOMContentLoaded", function() {

    // Fonction pour afficher une section spécifique et masquer les autres
    function showSection(sectionId) {
        const sections = document.querySelectorAll('main > section');
        sections.forEach(section => {
            section.style.display = 'none'; // Masquer toutes les sections
        });
        document.getElementById(sectionId).style.display = 'block'; // Afficher la section sélectionnée
    }

    // Fonction pour gérer l'affichage des onglets dans une catégorie
    function openTab(evt, tabName) {
        const tabcontent = document.querySelectorAll('.tabcontent');
        tabcontent.forEach(content => {
            content.style.display = 'none'; // Masquer tous les contenus d'onglet
        });

        const tablinks = document.querySelectorAll('.tab button');
        tablinks.forEach(link => {
            link.className = link.className.replace(' active', ''); // Retirer la classe "active" de tous les onglets
        });

        document.getElementById(tabName).style.display = 'block'; // Afficher le contenu de l'onglet sélectionné
        evt.currentTarget.className += ' active'; // Ajouter la classe "active" à l'onglet sélectionné
    }

    // Fonction pour gérer l'affichage des catégories
    function openCategory(evt, categoryName) {
        const categories = document.querySelectorAll('.category-content');
        categories.forEach(content => {
            content.style.display = 'none'; // Masquer toutes les catégories
        });

        document.getElementById(categoryName).style.display = 'block'; // Afficher la catégorie sélectionnée
        evt.currentTarget.className += ' active'; // Ajouter la classe "active" à l'onglet de la catégorie sélectionnée
    }

    // Fonction pour vérifier que les images se chargent correctement
    function checkImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.onerror = function() {
                console.error(`Image not found or failed to load: ${this.src}`);
                this.style.display = 'none'; // Masquer l'image si elle ne se charge pas
            };
            img.onload = function() {
                this.style.display = 'block'; // S'assurer que l'image est visible si elle se charge correctement
            };
        });
    }

    // Ajouter des écouteurs d'événements aux liens du menu pour afficher la section appropriée
    document.querySelector('a[href="#categories-section"]').addEventListener('click', function() {
        showSection('categories-section');
    });

    document.querySelector('a[href="#contact-section"]').addEventListener('click', function() {
        showSection('contact-section');
    });

    document.querySelector('a[href="#home"]').addEventListener('click', function() {
        showSection('home');
    });

    // Rendre les fonctions disponibles globalement pour être utilisées dans les attributs onclick
    window.openTab = openTab;
    window.openCategory = openCategory;

    // Afficher la section Accueil par défaut au chargement de la page
    showSection('home');

    // Vérifier les images une fois que le DOM est complètement chargé
    checkImages();
});
