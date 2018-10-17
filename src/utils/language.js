import Langlate from 'react-langlate';

let language = "en_US";
const translations = window.translations;

function setLanguage(newLanguage="en_US") {
    language = newLanguage;
}

function getLanguage() {
    return language;
}

function translate(key) {
    if(!translations[key]) return "Translation not found";

    return Langlate.raw(translations[key], getLanguage());
}

export {translate, getLanguage, setLanguage};