import './styles/resets.scss'
import './styles/app.scss'
import {ViewController} from './js/ViewController'

document.addEventListener('DOMContentLoaded', function(){
    const form          = document.getElementById('dino-compare');
    const grid          = document.getElementById('grid');
    const name          = document.getElementById('name');
    const weight        = document.getElementById('weight');
    const heightFeet    = document.getElementById('feet');
    const heightInches  = document.getElementById('inches');
    const diet          = document.getElementById('diet');
    let button          = document.getElementById('btn');
    ViewController.bindDOM(form,grid,button,name,heightFeet,heightInches,weight,diet);
    button.addEventListener('click', function(){
        ViewController.togglePage();
    });
});

