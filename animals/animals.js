import { animals } from '../data.js';
import { findById } from '../utils.js';
//import { renderListItem } from '../render-utils.js';

const dataStuff = new URLSearchParams(window.location.search);
const animal = findById(dataStuff.get('id'), animals);
const anImg = document.getElementById('img');

const name = document.getElementById('name');
const says = document.getElementById('says');
//console.log('says');

name.textContent = animal.name;
says.textContent = animal.says;
anImg.src = `../assets/${animal.type}.svg`;
