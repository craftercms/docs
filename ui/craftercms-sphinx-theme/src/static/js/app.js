import $ from 'jquery';

import { addCopyBtns } from './lib/copyCode';

const _$ = $.noConflict(true);

$.getQueryParameters = function(str) {
  return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n=n.split("="),this[n[0]]=n[1],this;}.bind({}))[0];
};

if (_$) {
  _$.getQueryParameters = $.getQueryParameters;
}

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

// window.App = { $: $ };
// window.$ = $;


$(function() {
  addCopyBtns('.highlight > pre');
});
