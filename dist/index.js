"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(e);!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===o&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(".selectDk{background-color:#4d5198;border-radius:5px;color:pink;display:block;font-size:18px;height:3.5vh;margin:10px auto;position:relative;width:100%}.selectDk .children{line-height:3.5vh;margin-left:5px}.selectDk .children:focus{border:none;outline:3px solid pink}.selectDk .children:hover{cursor:pointer}.selectDk .optionsContainer{transform:scale(0)}.selectDk .open,.selectDk .optionsContainer{max-height:20vh;overflow:auto;transition:transform .3s}.selectDk .open{margin-top:1px;scrollbar-color:#daf2dc #4d5198;scrollbar-width:thin;width:100%;z-index:100}.selectDk .open,.selectDk .options{background-color:#4d5198;border-radius:5px;position:relative}.selectDk .options{border-bottom:1px solid pink;height:3.5vh;line-height:3vh;padding-left:5px;z-index:2}.selectDk .options:hover{background-color:#daf2dc;color:#4d5198}.selectDk .arrowUp{transform:translateY(-45%)}.selectDk .arrowDown,.selectDk .arrowUp{position:absolute;right:15px;top:50%;transition:transform .3s}.selectDk .arrowDown{transform:translateY(-55%) rotate(180deg)}");const r=require("prop-types"),n=t=>{console.log(typeof t.datas);const[r,n]=e.useState(!1);return o.default.createElement("div",{role:"listbox",style:t.listBoxStyle,id:t.id,className:"selectDk",onClick:()=>{n(!r)}},o.default.createElement("span",{className:"children"},t.child),o.default.createElement("div",{className:r?"open":"optionsContainer",style:t.optionsContainerStyle},t.datas.map(((e,r)=>o.default.createElement("div",{role:"option","aria-selected":!0,onClick:()=>t.update(e),style:t.optionsStyle,key:r,className:"options",id:"options"},e.label)))),o.default.createElement("span",{style:t.arrowStyle,className:r?"arrowDown":"arrowUp"},"^"))};n.propTypes={listBoxStyle:r.object,id:r.string,child:r.string,datas:r.array,optionsContainerStyle:r.object,update:r.func.isRequired,optionsStyle:r.object,arrowStyle:r.object},exports.SelectDk=n;
