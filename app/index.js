'use strict';

const _ = require('lodash');
const Jump = require('jump.js')
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
                tile = 'DONE';
            }
            played.push(tile);
            Vue.nextTick(()=>{
                if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
                    Jump('footer');
                }
            });
        },
        reset: function () {
            console.log('resetting game state...');
        }
      }
    })
};