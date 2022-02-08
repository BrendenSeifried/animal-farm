import { animals } from '../data.js';
import { findById } from '../utils.js';

const dataStuff = new URLSearchParams(window.location.search);
const animal = findById(dataStuff.get('id'), animals);

const name = document.getElementById('name');
const says = document.getElementById('says');


name.textContent = animal.name;
says.textContent = animal.says;