/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let table = document.createElement('table');

    for (var i = 0; i < 10; i++) {
        let row = table.insertRow();

        row.insertCell();

        document.querySelector('#target').appendChild(table);
    }
    
    
/*
    let table = document.createElement('table');

    for (var i = 0; i < 10; i++) {
        let row = table.insertRow();
        console.log(row);
        let column = row.insertCell();
        console.log(column);
        document.getElementById('target').appendChild(table);
    }
*/

})();
