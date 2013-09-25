/* testing features - ugly code */

/* should mark class by name with class 'mark' */
function mark(className) {
    window.addEventListener('impress:stepenter', function() {
      $('span.'+className).addClass('mark');
    });
// this should be made global - each step leave unmarks
//    window.addEventListener('impress:stepleave', function() {
//      $('span.'+className).removeClass('mark');
//    });

});
