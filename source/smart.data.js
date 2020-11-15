
/* Smart UI v8.1.0 (2020-Nov) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=27)}({27:function(e,t){Smart.DataAdapter=window.smartDataAdapter=class{constructor(e){e||(e={});const t=Object.assign(this,e);t.key=(65536*(1+Math.random())|0).toString(16).substring(1),t.$document=Smart.Utilities.Extend(document),t.boundSource=!1===t.observable||t.virtualDataSource?[]:new Smart.ObservableArray,t.dataItemById=[],void 0===t.allowAdd&&(t.allowAdd=!0),void 0===t.allowRemove&&(t.allowRemove=!0),void 0===t.allowUpdate&&(t.allowUpdate=!0),void 0===t.mapChar&&(t.mapChar="."),void 0!==e.observable||t.virtualDataSource?t.observable=!1:t.observable=!0,t._expandedRowIds=[],e.dataSource||(t.dataSource=[]),e.dataFields||(t.dataFields=[]),e.dataSourceType||(t.dataSourceType="array"),e.id||(t.id=null),e.autoFetch||(t.autoFetch=!0),e.dataFields&&(t.dataFields=e.dataFields),Object.defineProperty(t,"groupBy",{configurable:!1,enumerable:!0,get:()=>t._groupBy?t._groupBy:[],set(e){const a=()=>{t.boundHierarchy=null,t.refreshHierarchy(),t.onGroup&&t.onGroup()};t._groupBy=new Smart.ObservableArray(e),t._groupBy.notify((function(){a()})),t.isInitialized&&a()}}),e.groupBy?e.groupBy.toArray?t.groupBy=e.groupBy.toArray():t.groupBy=e.groupBy:t.groupBy=[],e&&!1!==e.autoBind&&t.dataBind(),t.isInitialized=!0}get dataFields(){return this._dataFields}set dataFields(e){return this._dataFields=this._getDataFieldObjects(e),this._dataFields}_getDataFieldObjects(e){let t=[];if("number"==typeof e){const a="A".charCodeAt(0);let r="",n=0;for(let o=0;o<e;o++){const e=String.fromCharCode(a+n);n++;const o=r+e;t.push({name:o,dataType:"string"}),n>=26&&(n=0,r+="A")}}else if(Array.isArray(e)&&e.length>0)for(let a=0;a<e.length;a++){const r=e[a];if("string"==typeof r){const e=r.split(":"),a=e[0].trim(),n=e.length>1?e[1].trim():"string";t.push({name:a,dataType:n})}else t.push(r)}return t}get dataSource(){const e=this;return e._dataSource||(e._dataSource=[]),e._dataSource}set dataSource(e){const t=this;t._dataSource=e,t.isInitialized&&(t.boundSource=!1===t.observable||t.virtualDataSource?[]:new Smart.ObservableArray,t.dataItemById=[],t.bindingCompleted=!1,t.dataBind(),t.refreshIndexes())}get canNotify(){const e=this;return void 0===e._canNotify&&(e._canNotify=!0),e._canNotify}set canNotify(e){this._canNotify=e}_notify(e){const t=this;t.canNotify&&t.notifyFn&&t.notifyFn(e)}notify(e){e&&(this.notifyFn=e)}toArray(){const e=this;return!1===e.observable?e.boundSource:e.boundSource.toArray()}dataBind(){const e=this;e.clear();const t=()=>{e.observable&&(e.boundSource.notify||(e.boundSource=new Smart.ObservableArray),e.boundSource.notify((function(t){if("update"===t.action&&t.path&&t.path.indexOf(".")>=0&&-1===t.path.indexOf("children")&&-1===t.path.indexOf("loaded")&&-1===t.path.indexOf("level")&&-1===t.path.indexOf("leaf")&&-1===t.path.indexOf("expanded")){let a=!1;for(let r=0;r<e.dataFields.length;r++){const n=e.dataFields[r].name;t.path.indexOf(n)>=0&&(a=!0)}e._notify&&a&&e._notify({action:"update",data:t.target,index:t.index})}}))),e._onBindingComplete()};"string"==typeof e.dataSource&&(e.dataSource.indexOf(".json")>=0||"json"===e.dataSourceType)?(e.url=e.dataSource,e.dataSourceType="json",new a(e,t=>{e.dataSource=t,e._bindToJSON()})):"string"==typeof e.dataSource&&e.dataSource.indexOf(".xlsx")>=0?(e.url=e.dataSource,e.dataSourceType="xlsx",new a(e,a=>{if(!a[0])return a=[],e._bindToArray(),void t();const r=Object.keys(a[0]),n={},o=[];if(!1!==e.exportHeader){let t=0;for(let a in r){n[r[a]]=e.dataFields[t++].name}for(let e=1;e<a.length;e++){const t=a[e],i={};for(let e in r){const a=r[e];i[n[a]]=t[a]}o.push(i)}e.dataSource=o}e._bindToArray(),t()})):"string"==typeof e.dataSource&&e.dataSource.indexOf(".csv")>=0?(e.dataSourceType="csv",new a(e,()=>{e._bindToArray()})):"string"==typeof e.dataSource&&e.dataSource.indexOf(".tsv")>=0?(e.dataSourceType="tsv",new a(e,()=>{})):"array"===e.dataSourceType?(e._bindToArray(),t()):"json"===e.dataSourceType&&(e._bindToJSON(),t())}_onBindingComplete(){const e=this;e._buildHierarchy(),e.onBindingComplete&&e.onBindingComplete({data:e.boundSource}),e._notify&&e._notify({action:"bindingComplete",data:e.boundSource}),e.bindingCompleted=!0}refreshHierarchy(){this._buildHierarchy()}find(){return this.boundSource.find.apply(this.boundSource,arguments)}onVirtualDataSourceRequested(e,t){const a=this;let r=t?t.first:1/0,n=t?t.last:1/0,o=t?t.row:null;if(void 0===r&&(r=1/0),void 0===n&&(n=1/0),a.virtualFirstIndex=r,a.virtualLastIndex=n,a.virtualDataSource){const i=function(n){void 0!==n.virtualDataSourceLength&&(a.virtualDataSourceLength=n.virtualDataSourceLength),new Smart.DataAdapter({dataSource:n.dataSource,dataFields:n.dataFields||a.dataFields,data:t,keyDataField:n.keyDataField,parentDataField:n.parentDataField,observable:!1,id:n.id||a.id,onBindingComplete(n){if(void 0===t.result&&(t.result=!0),a.virtualDataSourceOnExpand&&o)return a.groupBy.length>0?n.data&&n.data.length>0&&a.add(n.data):n.data&&n.data.length>0?a.add(n.data,o.$.id):o.leaf=!0,a.onFilter&&a.onFilter(),void e(t);r===1/0?a.add(n.data):"filter"===t.action||"group"===t.action?(a.canNotify=!1,a.dataSource=n.data,a.canNotify=!0):("add"===t.action||"update"===t.action||t.action,a.canNotify=!1,a.dataSource=n.data,a.canNotify=!0),a.onFilter&&a.onFilter(),e(t)}})};let l={};if(t.sorting&&t.sorting.length>0){let e=[];for(let a in t.sorting)e.push(a+" "+t.sorting[a].sortOrder.toUpperCase());const a=" ORDER BY "+e.join(", ");l.orderBy=a}else l.orderBy="";if(void 0===r||void 0===n||0===r&&0===n)l.limit="";else{const e=" LIMIT "+(n-r)+" OFFSET "+r;l.limit=e}if(t.grouping&&t.grouping.length>0){const e=" GROUP BY "+t.grouping[0];l.groupBy=e}else l.groupBy="";if(t.filtering&&t.filtering.length>0){const e=(e,t)=>{switch(t.condition){case"EMPTY":return e+" = ''";case"NOT_EMPTY":return e+" != ''";case"EQUAL":return e+" = '"+t.value+"'";case"NOT_EQUAL":return e+" != '"+t.value+"'";case"CONTAINS_CASE_SENSITIVE":case"CONTAINS":return e+" LIKE '%"+t.value+"%'";case"DOES_NOT_CONTAIN_CASE_SENSITIVE":case"DOES_NOT_CONTAIN":return e+" NOT LIKE '%"+t.value+"%'";case"STARTS_WITH_CASE_SENSITIVE":case"STARTS_WITH":return e+" LIKE '"+t.value+"%'";case"ENDS_WITH_CASE_SENSITIVE":case"ENDS_WITH":return e+" LIKE '%"+t.value+"'";case"NULL":return e+" IS NULL";case"NOT_NULL":return e+" IS NOT NULL"}},a=(e,t)=>{switch(t.condition){case"EQUAL":return e+" = "+t.value;case"NOT_EQUAL":return e+" != "+t.value;case"GREATER_THAN":return e+" > "+t.value;case"GREATER_THAN_OR_EQUAL":return e+" >= "+t.value;case"LESS_THAN":return e+" < "+t.value;case"LESS_THAN_OR_EQUAL":return e+" <= "+t.value;case"NULL":return e+" IS NULL";case"NOT_NULL":return e+" IS NOT NULL";case"RANGE":return"("+e+" >= "+t.value+" and "+e+" <= "+t.valueTo+")"}},r=(e,t,a)=>{if(a.operator){var r=e(t,a.condition1),n=e(t,a.condition2);return"("+r+" "+a.operator+" "+n+")"}return e(t,a)};let n=[];for(let o in t.filtering){const i=t.filtering[o];let l=i.filters,d=[],s=" AND ";for(let t=0;t<l.length;t++){const n=l[t];switch(n.type){case"stringFilter":d.push(r(e,o,n));break;case"numericFilter":case"dateFilter":case"booleanFilter":d.push(r(a,o,n))}1===i.logicalOperators[t]&&(s=" OR ")}n.push("("+d.join(s)+")")}n.length>0?l.where=" WHERE "+n.join(" AND "):l.where=""}else l.where="";if("dataBind"===t.action&&a.virtualDataSourceOnExpand&&a.keyDataField&&a.parentDataField&&(l.where?l.where+=" AND "+a.parentDataField+" IS NULL":l.where=" WHERE "+a.parentDataField+" IS NULL"),"update"===t.action){const e=[];for(let r in t.edit.row)"$"!==r&&r!==a.id&&e.push(r+"='"+t.edit.row[r]+"'");l.update=" SET "+e.join(", ")+" WHERE "+a.id+"="+t.edit.row[a.id]}if("remove"===t.action){const e=[];for(let r in t.edit.row)"$"!==r&&r!==a.id&&e.push(r+" = '"+t.edit.row[r]+"'");l.remove=" WHERE "+a.id+"="+t.edit.row[a.id]}if("add"===t.action){const e=[],a=[];for(let r in t.edit.row)"$"!==r&&(a.push(r),e.push("'"+t.edit.row[r]+"'"));l.add=" ("+a.join(", ")+")  VALUES ("+e.join(", ")+")"}"expand"===t.action?(a.groupDataField?l.where?l.where+=" AND "+a.groupDataField+" = '"+o[a.groupDataField]+"'":l.where=" WHERE "+a.groupDataField+" = '"+o[a.groupDataField]+"'":a.keyDataField&&a.parentDataField?l.where?l.where+=" AND "+a.parentDataField+" = "+o[a.keyDataField]:l.where=" WHERE "+a.parentDataField+" = "+o[a.keyDataField]:l.where?l.where+=" AND "+o.groupDataField+" = '"+o.label+"'":l.where=" WHERE "+o.groupDataField+" = '"+o.label+"'",l.limit="",l.groupBy="",a.virtualDataSourceOnExpand(i,{first:r,last:n,row:t.row,sorting:t.sorting,filtering:t.filtering,grouping:t.grouping,action:t.action,query:l})):a.virtualDataSource(i,{first:r,last:n,sorting:t.sorting,filtering:t.filtering,filterOperator:t.filterOperator||"and",grouping:t.grouping,action:t.action,query:l})}else e()}add(e,t){const a=this;if(!e)return;let r=!0;const n=function(e){const n=a._getDataItem(e,a.boundSource.length);if(a.dataItemById[n.$.id])return void 0!==t&&(n.$.parentId=t),null;a[a.boundSource.length]=n,a.dataItemById[n.$.id]=n;const o=a.boundSource.push(n);return void 0!==t&&(n.$.parentId=t),o||(r=!1),n};if(e.length){let t=[];for(let a=0;a<e.length;a++){const r=n(e[a]);r&&t.push(r)}a._notify({action:"add",data:t})}else{const t=n(e);a._notify({action:"add",data:t})}return a.refreshHierarchy(),r}refreshIndexes(){const e=this;for(let t=0;t<e.boundSource.length;t++)e[t]=e.boundSource[t],e[t].$.index=t,e.dataItemById[e[t].$.id]=e[t];let t=e.boundSource.length;for(;e[t];)delete e[t],t++}removeLast(){delete this[this.boundSource.length-1];const e=this.boundSource.pop();return delete this.dataItemById[e.$.id],this._notify({action:"removeLast",data:e}),this.refreshHierarchy(),e}removeAt(e){const t=this.boundSource[e];if(!t)throw new Error("Invalid Item Index");this.boundSource.splice(e,1),delete this.dataItemById[t.$.id],this.refreshIndexes(),this._notify({action:"remove",index:e,data:t}),this.refreshHierarchy()}update(e,t){const a=this;if(Smart.Utilities.Types.isArray(e)&&Smart.Utilities.Types.isArray(t)&&0===e.length&&0===t.length)return void a.refreshHierarchy();if(t.length&&e.length){let r=[];for(let n=0;n<e.length;n++){const o=a._getDataItem(t[n],e[n]),i=e[n];r.push(o),a.boundSource[i]=o,a[i]=a.boundSource[i],a.dataItemById[o.$.id]=a[i]}return a._notify({action:"update",index:e,data:r}),void a.refreshHierarchy()}const r=a._getDataItem(t,e);return a.boundSource[e]=r,a[e]=a.boundSource[e],a.dataItemById[r.$.id]=a[e],a._notify({action:"update",index:e,data:r}),a.refreshHierarchy(),r}insert(e,t){t=this._getDataItem(t,e);const a=this.boundSource.splice(e,0,t);return this.refreshIndexes(),this._notify({action:"insert",index:e,data:t}),this.refreshHierarchy(),a}move(e,t){if(t>e&&t-e==1||e===t)return;const a=this,r=a.boundSource.splice(e,1)[0];t>e?(t--,a.boundSource.splice(t,0,r)):a.boundSource.splice(t,0,r),a.refreshIndexes(),a._notify({action:"move",index:t,data:a.boundSource[t]}),a.refreshHierarchy()}indexOf(e){return this.boundSource.indexOf(e)}get length(){const e=this;return void 0!==e.virtualDataSourceLength?e.virtualDataSourceLength:e.dataSourceLength?e.dataSourceLength:"number"==typeof e.dataSource?e.dataSource:e.bindingCompleted?e.boundSource.length:e.dataSource&&"string"!=typeof e.dataSource&&e.dataSource.length?e.dataSource.length:e.boundSource.length}clear(){const e=this;if(!e.isInitialized)return e._cachedValues=[],void(e.dataItemById=[]);for(let t=0;t<e.boundSource.length;t++)delete e[t];e._expandedRowIds=[],e._cachedValues=[],e.boundSource=e.observable?new Smart.ObservableArray:[],e.dataItemById=[],e.refreshHierarchy()}_getId(e,t,a){if(null===e||void 0===e.name||!e.name||!t.getAttribute){if(e&&e.toString().length>0&&t.getAttribute){let a=t.getAttribute(e);if(null!==a&&a.toString().length>0)return a.trim().split(" ").join("").replace(/([ #;?%&,.+*~\':'!^$[\]()=>|\/@])/g,"");{let a=e.split(this.mapChar);if(a.length>1){let e=t;for(let t=0;t<a.length;t++)void 0!==e&&(e=e[a[t]]);if(void 0!==e)return e}else if(void 0!==t[e])return t[e]}}return a}{let r=t.getAttribute(e.name);if(null!==r&&r.toString().length>0)return r;if(e.map)try{let a=t.getAttribute(e.map);if(null!==a&&a.toString().length>0)return a}catch(e){return a}}}_buildHierarchy(){const e=this;if(e.reservedNames){const t=e.reservedNames;t.leaf||(t.leaf="leaf"),t.parent||(t.parent="parent"),t.expanded||(t.expanded="expanded"),t.checked||(t.checked="checked"),t.selected||(t.selected="selected"),t.level||(t.level="level"),t.data||(t.data="data")}else e.reservedNames={leaf:"leaf",parent:"parent",expanded:"expanded",checked:"checked",selected:"selected",level:"level",icon:"icon",data:"data"};const t=e.reservedNames;if(e.childrenDataField){const a=[];for(let r=0;r<e.boundSource.length;r++){const n=Object.assign({},e.boundSource[r]);if(!n)continue;a.push(n);const o=function(a){const r=e.childrenDataField.split(e.mapChar);let n=null;if(r.length>1){let e=a;for(let t=0;t<r.length;t++)void 0!==e&&(e=e[r[t]]);n=e}else n=a.children;a.children=n,(null===a.children||void 0===a.children||a.children&&0===a.children.length)&&(a[t.leaf]=!0)};o(n),n[t.level]=0,n.$||(n.$={}),n[t.parent]=null,n[t.data]=n,void 0===n[t.expanded]&&(n[t.expanded]=!1);const i=function(a,r){if(r)for(let n=0;n<r.length;n++){let l=e._getDataItem(r[n],n);l&&(o(l),l[t.level]=a[t.level]+1,l[t.parent]=a,l[t.data]=l,a&&(a.children[n]=l),void 0===l[t.expanded]&&(l[t.expanded]=!1),i(l,l.children))}else a.children=new Array};i(n,n.children)}if(e.boundHierarchy=a,!e._boundSourceUpdate){for(let t=0;t<e.boundHierarchy.length;t++){const a=e.boundHierarchy[t];if(a.children){const t=function(a){if(e.dataItemById[a.$.id]||(e.boundSource.canNotify=!1,e.dataItemById[a.$.id]=a,e[e.boundSource.length]=a,e.boundSource.push(a),e.boundSource.canNotify=!0),a.children)for(let e=0;e<a.children.length;e++){const r=a.children[e];r.children&&t(r)}};t(a)}}e._boundSourceUpdate=!0}}e.xmlRoot&&"xml"===e.dataSourceType&&(e.boundHierarchy=this._getHierarchy("uid","_parentuid","children",null,e.boundSource)),e.keyDataField&&e.parentDataField?e.boundHierarchy=this._getHierarchy(e.keyDataField,e.parentDataField,"children",null,e.boundSource):e.groupBy&&e.groupBy.length>0?e.boundHierarchy=this._getGroupHierarchy(e.groupBy,"children","label",null,"data",null,"parent",e.boundSource):e.virtualDataSourceOnExpand&&(e.boundHierarchy=this._getHierarchy("id","parentId","children",null,e.boundSource))}_getGroupHierarchy(e,t,a,r,n,o,i,l,d){let s=this;d||(d=0);let u=s.reservedNames;const c=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()};let f=new Array;for(let t=0;t<e.length;t++)f[t]=c();t||(t="children"),a||(a="group"),n||(n="item"),i||(i="parent"),void 0===o&&(o="value");const h=new Array,p=new Array;let g=0;const y=function(e){let t=e;if(r)for(let e in r){const a=r[e];a.name&&a.map&&(t[a.map]=t[a.name])}return t};for(let r=0;r<l.length;r++){let S=Object.assign({},y(l[r]));S[u.leaf]=!1;let m=new Array,b=0;for(let t=0;t<e.length;t++){const a=e[t],r=S[a];null!==r&&(m[b++]={value:r,group:a,hash:f[t]})}if(m.length!==e.length)break;let v=null,_="";for(let e=0;e<m.length;e++){const r=m[e].value,l=m[e].group;if(_=_+"_"+m[e].hash+"_"+r,void 0===p[_]||null===p[_]){if(null===v){v={$:{}},v[u.level]=0,v[u.leaf]=!1,v[i]=null,v[a]=r,v[n]=S,v.groupDataField=l,v[l]||(v[l]=v.data[l]),void 0!==S[u.expanded]?v[u.expanded]=S[u.expanded]:v[u.expanded]=!1,o&&(v[o]=S[o]),v[t]=new Array;let e=h.length+d;this.id&&"number"!=typeof S.$.id&&!isFinite(S.$.id)||(e="Item"+e),void 0===v.$.id&&(v.$.id=e),s._expandedRowIds[v.$.id]&&(v[u.expanded]=!0),h[g++]=v}else{const e={$:{}};e[u.level]=v[u.level]+1,e[i]=v,e[a]=r,e[t]=new Array,e[n]=S,e.groupDataField=l,e[u.leaf]=!1,e[l]||(e[l]=e.data[l]),void 0!==S[u.expanded]?e[u.expanded]=S[u.expanded]:e[u.expanded]=!1,o&&(e[o]=S[o]),void 0===e.$.id&&(e.$.id=v.$.id+"_"+v[t].length),s._expandedRowIds[e.$.id]&&(e[u.expanded]=!0),v[t][v[t].length]=e,v=e}p[_]=v}else v=p[_]}S&&(S[u.leaf]=!0),null!==v?(null===this.id?void 0===S.$.id&&(S.$.id=v.$.id+"_"+v[t].length):void 0===S.$.id&&-1===S.$.id.toString().indexOf(v.$.id)&&(S.$.id=v.$.id+"_"+S.$.id),S[i]=v,S[u.level]=v[u.level]+1,v[t][v[t].length]=S):void 0===S.$.id&&(S.$.id=c())}return h}_getHierarchy(e,t,a,r,n){const o=this,i=new Array;let l=this.boundSource;if(n&&(l=n),0===this.boundSource.length)return null;const d=null!==a?a:"children";let s=new Array,u=l,c=u.length,f=o.reservedNames;const h=function(e){let t=e;if(r)for(let e in r){const a=r[e];a.name&&a.map&&(t[a.map]=t[a.name])}return t};for(let a=0;a<c;a++){let r=u[a],n=r[t],o=r[e];"parentId"===t&&(n=r.$.parentId),"id"===e&&(o=r.$.id),r[d]=new Array,s[o]={parentId:n,item:r}}for(let a=0;a<c;a++){const r=u[a];let n=r[t],o=r[e];if("parentId"===t&&(n=r.$.parentId),"id"===e&&(o=r.$.id),void 0!==s[n]){let e={parentId:n,item:s[o].item},t=s[n].item;t[d]||(t[d]=new Array);let a=t[d].length;e=e.item,f?void 0===e[f.parent]&&(e[f.parent]=t):void 0===e.parent&&(e.parent=t);const r=h(e);t[d][a]=r,s[n].item=t,s[o].item=e}else{let e=s[o].item;f?void 0===e[f.parent]&&(e[f.parent]=null):void 0===e.parent&&(e.parent=null);const t=h(e);f?t[f.level]=0:t.level=0,i[i.length]=t}}if(0!==i.length){let e=function(t,a){for(let r=0;r<a.length;r++){const n=a[r];f?n[f.level]=t:n.level=t;const i=n[d];i&&i.length>0?e(t+1,i):o.virtualDataSourceOnExpand?void 0===n.leaf&&(n.leaf=!1):f?n[f.leaf]=!0:n.leaf=!0}};e(0,i)}return i}summarize(e,t){const a=this;Array.isArray(e)||(e=[e]);let r=[];for(let t=0;t<e.length;t++){const a=e[t];for(let e in a){const t=a[e];r.push({dataField:e,functions:t})}}e=r;let n={},o=new Array;t||(t=a.boundSource);let i=t.length;if(0!==i&&void 0!==i){for(let a=0;a<i;a++){let r=t[a];for(let t=0;t<e.length;t++){const i=e[t];let l=r[i.dataField];if(i.functions){n[i.dataField]=n[i.dataField]||{},o[i.dataField]=o[i.dataField]||0,o[i.dataField]++;const e=function(e){for(let t in e){let a=n[i.dataField][t];null==a&&(n[i.dataField][t]=0,a=0),"function"==typeof e[t]&&(a=e[t](a,l,i.dataField,r)),n[i.dataField][t]=a}};let t=parseFloat(l);t=!isNaN(t),t&&(l=parseFloat(l)),"number"==typeof l&&isFinite(l)?i.functions.forEach((function(t){let r=n[i.dataField][t];if(null==r&&(r=0,"min"===t&&(r=9999999999999),"max"===t&&(r=-9999999999999),"median"===t&&(r=[])),"sum"===t||"avg"===t||"stdev"===t||"stdevp"===t||"var"===t||"varp"===t)r+=parseFloat(l);else if("product"===t)0===a?r=parseFloat(l):r*=parseFloat(l);else if("min"===t)r=Math.min(r,parseFloat(l));else if("max"===t)r=Math.max(r,parseFloat(l));else if("count"===t)r++;else if("median"===t)r.push(parseFloat(l));else if("object"==typeof t)return void e(t);n[i.dataField][t]=r})):i.functions.forEach((function(t){if("min"===t||"max"===t||"count"===t||"product"===t||"sum"===t||"avg"===t||"stdev"===t||"stdevp"===t||"var"===t||"varp"===t){if(null===l)return!0;let e=n[i.dataField][t];return null==e&&(e=0),n[i.dataField][t]=e,!0}"object"==typeof t&&e(t)}))}}}for(let a=0;a<e.length;a++){const r=e[a];if(r.functions){if(n[r.dataField]||(n[r.dataField]={},r.functions.forEach((function(e){n[r.dataField][e]=0}))),void 0!==n[r.dataField].avg){const e=n[r.dataField].avg,t=o[r.dataField];n[r.dataField].avg=0===t||void 0===t?0:e/t}else if(void 0!==n[r.dataField].count)n[r.dataField].count=i;else if(void 0!==n[r.dataField].median){let e=n[r.dataField].median;e.sort((function(e,t){return e-t})),n[r.dataField].median=.5*(e[Math.floor((e.length+1)/2)-1]+e[Math.ceil((e.length+1)/2)-1])}(n[r.dataField].stdev||n[r.dataField].stdevp||n[r.dataField].var||n[r.dataField].varp)&&r.functions.forEach((function(e){if("stdev"===e||"var"===e||"varp"===e||"stdevp"===e){const a=n[r.dataField][e],o=i,l=a/i;let d=0;for(let e=0;e<i;e++){let a=t[e][r.dataField];d+=(a-l)*(a-l)}let s="stdevp"===e||"varp"===e?o:o-1;0===s&&(s=1),"var"===e||"varp"===e?n[r.dataField][e]=d/s:"stdevp"!==e&&"stdev"!==e||(n[r.dataField][e]=Math.sqrt(d/s))}}))}}return n}}_getDataItem(e,t){const a=this,r={},n="number"==typeof a.dataSource||a.dataSourceLength;if(!e)return{$:{id:t,isEmpty:!0,index:t}};if("string"==typeof e&&(e={"":e}),n){for(let e=0;e<a.dataFields.length;e++){r[(a.dataFields?a.dataFields[e]:{}).name]=""}return r.$={},r.$.id=t,r.$.index=t,r}const o=e;if(void 0!==o.expanded&&(r.expanded=o.expanded,"true"===o.expanded||!0===o.expanded||1===o.expanded?r.expanded=!0:r.expanded=!1),a.childrenDataField?void 0!==o[a.childrenDataField]&&(r.children=o[a.childrenDataField]):void 0!==o.children?r.children=o.children:void 0!==o.items&&(r.children=o.items),void 0!==o.leaf&&(r.leaf=o.leaf),void 0!==o.level&&(r.level=o.level),a.keyDataField&&void 0!==o[a.keyDataField]&&(r[a.keyDataField]=o[a.keyDataField]),a.parentDataField&&void 0!==o[a.parentDataField]&&(r[a.parentDataField]=o[a.parentDataField]),0===a.dataFields.length){const t=Object.getOwnPropertyNames(e);for(let e=0;e<t.length;e++)"$"!==t[e]&&a.dataFields.push({name:t[e],dataType:"string"})}for(let t=0;t<a.dataFields.length;t++){const n=a.dataFields?a.dataFields[t]:{};let i="";if(null==n)continue;if(e.length&&(i=e[t]),n.map){let e=n.map.split(a.mapChar);if(e.length>0){let t=o;for(let a=0;a<e.length;a++)o&&(t=t[e[a]]);i=t}else i=o[n.map]}null!=i?i=i.toString():void 0===i&&null!==i&&(i="");let l=!1;""===i&&(l=!0,i=e[n.name],null!=i?"array"!==n.dataType&&"date"!==n.dataType&&(i=i.toString()):i=""),"[object Object]"===i&&n.map&&l&&(i=""),a._cachedValues[i+"_"+n.dataType]?i=a._cachedValues[i+"_"+n.dataType]:("bool"===n.dataType||"boolean"===n.dataType?"true"===i||"1"===i?i=!0:"false"!==i&&"0"!==i||(i=!1):i=a.$document.deserialize(""+i,n.dataType,!0),a._cachedValues[i+"_"+n.dataType]=i),"string"!==n.dataType&&"boolean"!==n.dataType&&"bool"!==n.dataType&&(isNaN(i)||i===-1/0||i===1/0)&&(i=0),r[n.name]=i}let i=t;return a.id?(i=o[a.id],"object"==typeof i&&(i=t),o.$&&o.$.id&&(i=o.$.id)):!a.virtualDataSource&&a.dataItemById&&a.dataItemById[i]&&(i=a.length),r.$||(r.$={}),r.$.id=i,r.$.index=t,new Object(r)}_bindToArray(){const e=this,t="number"==typeof e.dataSource||e.dataSourceLength,a=[];e.boundSource.canNotify=!1;const r=t?"number"==typeof e.dataSource?e.dataSource:e.dataSource.length:e.observable?e.length:e.dataSource.length;for(let n=0;n<r;n++){const r=t?{}:e.dataSource[n],o=e._getDataItem(r,n);a.push(o)}if(t&&e.dataSourceLength&&e.dataSource.length>0)for(let t=0;t<e.dataSource.length;t++){const r=e.dataSource[t].cell,n=e.dataSource[t].value,o=r.replace(/[^0-9]/g,""),i=r.replace(/[0-9]/g,"");a[o-1][i]=n}e.boundSource=!1===e.observable||e.virtualDataSource?[]:new Smart.ObservableArray(a),e.observable&&(e.boundSource=new Smart.ObservableArray(a));for(let t=0;t<r;t++)e[t]=a[t],e.dataItemById[e[t].$.id]=e[t];!1===e.observable&&(e.boundSource=a),e.boundSource.canNotify=!0}_bindToJSON(){const e=this,t=[],a=e.dataSource.length?e.dataSource:Object.entries(e.dataSource);e.boundSource.canNotify=!1;for(let r=0;r<a.length;r++){const n=a[r],o=e._getDataItem(n,r);t.push(o)}e.boundSource=!1===e.observable||e.virtualDataSource?[]:new Smart.ObservableArray(t);for(let t=0;t<e.length;t++)e[t]=e.boundSource[t],e.dataItemById[e[t].$.id]=e[t];!1===e.observable&&(e.boundSource=t),e.boundSource.canNotify=!0}sortBy(e,t,a){const r=this;if(!t)for(let a=0;a<r.dataFields.length;a++){const n=r.dataFields[a];if(n.name===e){t=n.dataType;break}}if(r.boundHierarchy){if((!e||0===e.length)&&r.groupBy.length>0)return void r.refreshHierarchy();const n=function(o){r._sort(o,e,a,t);for(let r=0;r<o.length;r++){const i=o[r];i.children&&n(i.children,e,a,t)}};n(r.boundHierarchy)}else r._sort(r.boundSource,e,a,t)}_createFilter(e,t){const a={"=":"EQUAL","<>":"NOT_EQUAL","<":"LESS_THAN",">":"GREATER_THAN","<=":"LESS_THAN_OR_EQUAL",">=":"GREATER_THAN_OR_EQUAL",equal:"EQUAL","not equal":"NOT_EQUAL","less than":"LESS_THAN","greater than":"GREATER_THAN","greater than or equal":"GREATER_THAN_OR_EQUAL","less than or equal":"LESS_THAN_OR_EQUAL","starts with":"STARTS_WITH","ends with":"ENDS_WITH",notEqual:"NOT_EQUAL",lessThan:"LESS_THAN",greaterThan:"GREATER_THAN",greaterThanOrEqual:"GREATER_THAN_OR_EQUAL",lessThanOrEqual:"LESS_THAN_OR_EQUAL",null:"null","":"EMPTY",isblank:"EMPTY",isnotblank:"NOT_EMPTY",isBlank:"EMPTY",isNotBlank:"NOT_EMPTY",contains:"CONTAINS",notcontains:"DOES_NOT_CONTAIN",notContains:"DOES_NOT_CONTAIN",startswith:"STARTS_WITH",endswith:"ENDS_WITH",startsWith:"STARTS_WITH",endsWith:"ENDS_WITH",NULL:"NULL",NOT_NULL:"NOT_NULL"};let r=[];for(let e=0;e<t.length;e++){const a=t[e],n=-1===a.indexOf('"')?a.split(" "):a.split('"');let o=[];for(let e=0;e<n.length;e++){const t=n[e];""!==t&&o.push(t.trim())}r.push(o)}const n=new Smart.FilterGroup,o=[],i=[];for(let t=0;t<r.length;t++){const n=r[t];if(n.length>1){const t=new Smart.FilterGroup;let r="and",o=0;for(let i=0;i<n.length;i++){const l=n[i];if("and"!==l&&"or"!==l){if(o++,2===o){const d=t.createFilter(e,l,a[n[i-1]]);o=0,r&&t.addFilter(r,d)}}else r=l}i.push(t)}else{const e=n[0];if("and"!==e&&"or"!==e)throw new Error('Filter Exprresion expects "AND" or "OR", but the token is: '+e);o.push(e)}}let l=0;if(1===i.length)return i[0];for(let e=0;e<i.length;e++){let t=o[l];(e+1)%2==0&&l++,t||(t="and"),n.addFilter(t,i[e])}return n}filterBy(e,...t){const a=this,r=(()=>{for(let t=0;t<a.dataFields.length;t++){const r=a.dataFields[t];if(r.name===e)return r.dataType}})(),n=a._createFilter(r,t);return a.boundSource.filter(t=>n.evaluate(t[e]))}_filter(e,t="and"){const a=this,r=[],n=[];if(0===e.length)return void a.clearFilter();const o=e=>{for(let t=0;t<a.dataFields.length;t++){const r=a.dataFields[t];if(r.name===e)return r.dataType}};let i,l;"and"===t?(i=!0,l=function(e,t,a){return e&&t.evaluate(a[t.dataField])}):(i=!1,l=function(e,t,a){return e||t.evaluate(a[t.dataField])});for(let t=0;t<e.length;t++){const i=e[t],l=i[0];let d=null;d=i[1]instanceof Smart.FilterGroup?i[1]:a._createFilter(o(l),i.splice(1)),d&&(n.push(l),d.dataField=l,r.push(d))}if(a.boundHierarchy){const e=function(e){let t=i;for(let a=0;a<r.length;a++){const n=r[a];t=l(t,n,e)}return e.$.filtered=t,t},t=function(r,n,o){let i=0;for(let a=0;a<r.length;a++){const o=r[a];e(o),o.$.filtered&&i++,o.children&&t(o.children,o,n)}i>0&&a.groupBy.length>0&&n?(n.$.filtered=!0,o&&!o.$.filtered&&(o.$.filtered=!0)):i>0&&i!==r.length&&n&&(n.$.filtered=null,o&&!o.$.filtered&&(o.$.filtered=null))};t(a.boundHierarchy,null,null)}else for(let e=0;e<a.boundSource.length;e++){const t=a.boundSource[e];let n=i;for(let e=0;e<r.length;e++){const a=r[e];n=l(n,a,t)}t.$.filtered=n}a.onFilter&&a.onFilter()}clearGroup(){const e=this;e.groupBy=[],e.boundHierarchy=null,e.refreshHierarchy(),e.onGroup&&e.onGroup()}clearFilter(){const e=this;for(let t=0;t<e.boundSource.length;t++){e.boundSource[t].$.filtered=!0}if(e.boundHierarchy){const t=function(e,a,r){for(let r=0;r<e.length;r++){const n=e[r];n.$.filtered=!0,n.$.filtered,n.children&&t(n.children,n,a)}a&&(a.$.filtered=!0,r&&!r.$.filtered&&(r.$.filtered=!0))};t(e.boundHierarchy,null,null)}e.onFilter&&e.onFilter()}clearSort(){this._sort(this.boundSource,[],[],[])}_sort(e,t,a,r,n){const o=this;let i=!1;if(0===e.length)return;if(e&&e.constructor&&e instanceof Smart.ObservableArray&&(i=!0),(!e||!Array.isArray(e)||0===e.length||!t||Array.isArray(t)&&0===t.length)&&!i&&!o.boundHierarchy)throw new Error("sort: Missing or Invalid arguments!");"string"==typeof t&&(t=[t]);const l=[],d=[];void 0===a&&(a=[]);const s=function(e,t){let a;switch(t||typeof e){case"string":a=(new Intl.Collator).compare;break;case"number":a=function(e,t){return e-t};break;case"boolean":case"bool":a=function(e,t){return e===t?0:!1===e?-1:1};break;case"date":case"time":case"dateTime":e instanceof Date?a=function(e,t){return e.getTime()-t.getTime()}:(e instanceof Smart.Utilities.DateTime||e instanceof Smart.Utilities.BigNumber)&&(a=function(e,t){return e.compare(t)});break;case"object":if(e instanceof Date)a=function(e,t){return e.getTime()-t.getTime()};else if(e instanceof Smart.Utilities.DateTime||e instanceof Smart.Utilities.BigNumber)a=function(e,t){return e.compare(t)};else if(e instanceof Smart.Utilities.Complex||window.NIComplex&&e instanceof window.NIComplex){const e=new Smart.Utilities.ComplexNumericProcessor;a=function(t,a){return e.compareComplexNumbers(t,a)}}}return a};for(let n=0;n<t.length;n++){void 0===a[n]||"asc"===a[n]||"ascending"===a[n]?l[n]=1:l[n]=-1;const o=e[0][t[n]];d[n]=s(o,r[n])}t.length>0&&n?n(e,t,a,d):e.sort((function(e,a){for(let r=0;r<t.length;r++){const n=d[r](e[t[r]],a[t[r]]);if(0===n){if(t[r+1])continue;return void 0!==e.$.index?(e.$.index-a.$.index)*l[r]:0}return n*l[r]}if(0===t.length)return e.$.index<a.$.index?-1:e.$.index>a.$.index?1:0}));for(let t=0;t<e.length;t++)o[t]=e[t]}static Filter(e,t,a,r,n="and"){let o,i;return"and"===n?(o=!0,i=function(e,t,a,n){return r?e&&r(t,a,n):e&&n.evaluate(t[a])}):(o=!1,i=function(e,t,a,n){return r?e||r(t,a,n):e||n.evaluate(t[a])}),e.filter(e=>{let r=o;for(let n=0;n<a.length;n++){const o=a[n],l=t[n];r=i(r,e,l,o)}return r})}filter(e,t,a){Smart.DataAdapter.Filter(this.boundSource,e,t,a)}sort(e,t,a){Smart.DataAdapter.Sort(this.boundSource,e,t,a)}static Sort(e,t,a,r){const n=function(e){let t;switch(typeof e){case"string":t=(new Intl.Collator).compare;break;case"number":t=function(e,t){return e-t};break;case"boolean":t=function(e,t){return e===t?0:!1===e?-1:1};break;case"object":if(e instanceof Date)t=function(e,t){return e.getTime()-t.getTime()};else if(e instanceof Smart.Utilities.DateTime||e instanceof BigNumberNG)t=function(e,t){return e.compare(t)};else if(e instanceof Smart.Utilities.Complex||window.NIComplex&&e instanceof window.NIComplex){const e=new Smart.Utilities.ComplexNumericProcessor;t=function(t,a){return e.compareComplexNumbers(t,a)}}}return t};if(!e||!Array.isArray(e)||0===e.length||!t||Array.isArray(t)&&0===t.length)return;"string"==typeof t&&(t=[t]);const o=[],i=[];void 0===a&&(a=[]);for(let r=0;r<t.length;r++)void 0===a[r]||"asc"===a[r]||"ascending"===a[r]?o[r]=1:o[r]=-1,i[r]=n(e[0][t[r]]);if(r)return void r(e,t,a,i);const l=e.slice(0);return l.sort((function(e,a){for(let r=0;r<t.length;r++){const n=i[r](e[t[r]],a[t[r]]);if(0===n){if(t[r+1])continue;return void 0!==e._index?(e._index-a._index)*o[r]:0}return n*o[r]}})),l}};class a{constructor(e,t){this.config=e,this.callback=t,!1!==e.autoFetch&&this.call(e)}call(e){const t=this;e||(e=t.config);let a="GET",r=e.url,n=null,o=!0;if(e.type&&(a=e.type),e.data)if("GET"===a){r+="?";for(let t in e.data)e.data.hasOwnProperty(t)&&(r+=encodeURI(t+"="+e.data[t]+"&"));"&"===r.charAt(r.length-1)&&(r=r.slice(0,r.length-1))}else"POST"===a&&(n=JSON.stringify(e.data));e&&!1===e.async&&"xlsx"!==e.dataSourceType&&(o=!1),void 0!==window.fetch&&o?t.ajaxFetch(e,a,r,n):t.ajaxXMLHttpRequest(e,a,r,n,o)}ajaxFetch(e,t,a,r){const n=this,o={method:t};let i,l,d,s;switch(e.dataSourceType){case"json":i="json";break;case"xlsx":i="arrayBuffer";break;default:i="text"}if(e&&e.contentType&&(o.headers=new Headers({"Content-Type":e.contentType})),null!==r&&(o.body=r),e.timeout&&(d=setTimeout((function(){s=!0}),e.timeout)),e.beforeSend){if(!1===e.beforeSend(o,e))return}fetch(a,o).then((function(e){if(s)throw l=408,new Error("timeout");if(d&&clearTimeout(d),l=e.status,!e.ok)throw new Error(e.statusText);return e[i]()})).then((function(t){if("arrayBuffer"===i)return JSZip.loadAsync(t).then((function(t){return t.files["xl/worksheets/sheet1.xml"].async("text").then((function(a){return t.files["xl/sharedStrings.xml"].async("text").then((function(t){const r=n.parseXLSXData(a,t);n.ajaxComplete(e,r,l)}))}))}));n.ajaxComplete(e,t,l)})).catch((function(t){"JSZip is not defined"===t.message&&(t.message="JSZip is not defined. Please include a reference to JSZip to be able to load data from XLSX files."),e&&e.loadError&&e.loadError(l,t),n.callback&&n.callback(t,l)}))}ajaxXMLHttpRequest(e,t,a,r,n){const o=new XMLHttpRequest,i=this;if(o.open(t,a,n),o.ontimeout=function(){e&&e.loadError&&e.loadError(408,"timeout")},o.onload=function(){if(4===o.readyState){const t=o.status;let a=o.response;t>=200&&t<=299?("json"===e.dataSourceType&&(a=JSON.parse(a)),i.ajaxComplete(e,a,t)):e&&e.loadError&&e.loadError(t,a)}},o.onerror=function(){e&&e.loadError&&e.loadError(o.status,o.response)},e&&e.contentType&&o.setRequestHeader("Content-Type",e.contentType),n&&e.timeout&&(o.timeout=e.timeout),e.beforeSend){if(!1===e.beforeSend(o,e))return}o.send(r)}ajaxComplete(e,t,a){if(e){if(e.beforeLoadComplete){const a=e.beforeLoadComplete(t);a&&(t=a)}e.loadComplete&&e.loadComplete(t,a),this.callback&&this.callback(t,a)}}parseXLSXData(e,t){const a=new DOMParser,r=a.parseFromString(t,"text/xml"),n=Array.from(r.getElementsByTagName("si")),o=[],i=a.parseFromString(e,"text/xml"),l=Array.from(i.getElementsByTagName("row")),d=[];return n.forEach((function(e){let t=e.getElementsByTagName("t");if(1===t.length)o.push(t[0].innerHTML);else{let e="";t=Array.from(t),t.forEach((function(t){e+=t.innerHTML})),o.push(e)}})),l.forEach((function(e){const t={};Array.from(e.getElementsByTagName("c")).forEach((function(e){const a=e.getAttribute("r").match(/\D+/)[0],r=e.getAttribute("t"),n=e.getElementsByTagName("v")[0].innerHTML;let i;switch(r){case"s":i=o[parseFloat(n)];break;case"b":i=1===parseFloat(n);break;default:i=parseFloat(n)}t[a]=i})),d.push(t)})),d}}Smart.Ajax=window.Ajax=a}});