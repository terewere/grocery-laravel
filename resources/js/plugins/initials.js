import Vue from 'vue'

Vue.filter('initials', function (value) {
    return getInitials(value)
})

Vue.directive('bg', {
    bind(el, binding, vnode) {
        var colours = [
            "#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#bdc3c7", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50",
            "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#16a085", "#7f8c8d"
        ],
            charIndex, colourIndex, initials;

        initials = getInitials(binding.value)

        charIndex = (initials == '?' ? 72 : initials.charCodeAt(0)) - 64;
        colourIndex = charIndex % 20;  
        console.log(colourIndex);
        console.log(colours[colourIndex - 1]);
              

        el.style.backgroundColor = colours[colourIndex - 1];
    }
})

function getInitials(value) {

    var nameSplit = String(value).toUpperCase().split(' ');


    if (nameSplit.length == 1) {
        return nameSplit[0] ? nameSplit[0].charAt(0) : '?';

    }
    return nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
}

