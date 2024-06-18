
document.addEventListener('DOMContentLoaded', (event) => {
    function typeWriter(element, textArray, delay = 100) {
        let i = 0, j = 0;
        let currentText = '';
        function type() {
            if (i < textArray[j].length) {
                currentText += textArray[j].charAt(i);
                element.placeholder = currentText;
                i++;
                setTimeout(type, delay);
            } else {
                setTimeout(() => {
                    i = 0;
                    currentText = '';
                    element.placeholder = currentText;
                    j = (j + 1) % textArray.length;
                    type();
                }, 2000);
            }
        }
        type();
    }

    const nameField = document.querySelector('input[name="name"]');
    const facultyField = document.querySelector('input[name="facu"]');
    const commentField = document.querySelector('textarea[name="comment"]');

    typeWriter(nameField, ["Henry Medina"]);
    typeWriter(facultyField, ["FIIS"]);
    typeWriter(commentField, ["Me encanta la página"]);
});
