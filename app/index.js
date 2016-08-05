'use strict';

const Vue = require('vue');
const Jump = require('jump.js');

/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

let bag = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37];
shuffle(bag);

let played = [];

module.exports = function KarubaTilesApplication(){
    return new Vue({
      el: '#app',
      data: {
          bag: bag,
          played: played
      },
      methods: {
        drawTile: function(){
            let tile
            if(bag.length){
                tile = bag.pop();
            }else{
                return;
            }
            played.push(tile);
            Vue.nextTick(function(){
                if ((window.innerHeight + window.scrollY) <= document.body.offsetHeight) {
                    Jump('footer');
                }
            });
        },
        reset: function() {
            console.log('resetting game state...');
        }
      }
    })
};