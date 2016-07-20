'use strict';

const _ = require('lodash');
const Vue = require('vue');

let bag = _.range(1,37);
bag = _.shuffle(bag);
console.log('bag:', bag);

let played = [];

module.exports = function KarubaTilesApplication(){
    return new Vue({
      el: '#app',
      data: {
          bag: bag,
          played: played
      },
      methods: {
        drawTile: function () {
            console.log('drawing tile...');
            let tile
            if(bag.length){
                tile = _.pullAt(bag,0);
            }else{
                tile = 'NO MORE TILES';
            }
            played.push(tile);
        },
        reset: function () {
            console.log('resetting game state...');
        }
      }
    })
};