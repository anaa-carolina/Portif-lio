document.addEventListener('DOMContentLoaded', function () {
    // Function to scroll to a specific section
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Event listeners for navigation links
    document.querySelectorAll('.header ul li a, #contatoButton').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetSectionId = this.getAttribute('href').substring(1);
            scrollToSection(targetSectionId);
        });
    });

    // Event listener for 'Entre em contato' button
    var contatoButton = document.getElementById('contatoButton');
    if (contatoButton) {
        contatoButton.addEventListener('click', function (event) {
            event.preventDefault();
            scrollToSection('contato');
        });
    }

    // Event listeners for opening modals
    var openModalBtns = document.querySelectorAll('.button-card');
    var modalOverlays = document.querySelectorAll('.modal');

    openModalBtns.forEach(function (btn, index) {
        btn.addEventListener('click', function () {
            modalOverlays[index].style.display = 'flex';
        });
    });

    // Function to show details of a project in the modal
    window.mostrarDetalhes = function (projetoId) {
        var modal = document.getElementById(projetoId + 'Modal');
        var modalContent = modal.querySelector('.details-project');
        var projectDetails = document.getElementById('open-modal-btn-' + projetoId).getAttribute('data-detalhes');

        modalContent.innerHTML = projectDetails;
        modal.style.display = 'flex';
        scrollToSection(projetoId + 'Modal');
    };

    // Event listeners for close buttons in modals
    document.querySelectorAll('.close-btn').forEach(function (closeBtn) {
        closeBtn.addEventListener('click', function () {
            var modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });

    // Function to close a modal by its ID
    window.fecharModal = function (modal) {
        var modal = document.getElementById(modal);
        modal.style.display = 'none';
    };

    // Ensure that the Bootstrap carousel is initialized
    $('#carousel-hackathon').carousel();
});