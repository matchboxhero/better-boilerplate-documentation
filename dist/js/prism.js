var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,a=_self.Prism={manual:_self.Prism&&_self.Prism.manual,util:{encode:function(e){return e instanceof n?new n(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){switch(a.util.type(e)){case"Object":var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=a.util.clone(e[n]));return t;case"Array":return e.map(function(e){return a.util.clone(e)})}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){r=r||a.languages;var i=r[e];if(2==arguments.length){n=arguments[1];for(var s in n)n.hasOwnProperty(s)&&(i[s]=n[s]);return i}var o={};for(var l in i)if(i.hasOwnProperty(l)){if(l==t)for(var s in n)n.hasOwnProperty(s)&&(o[s]=n[s]);o[l]=i[l]}return a.languages.DFS(a.languages,function(t,a){a===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,t,n,r){r=r||{};for(var i in e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==a.util.type(e[i])||r[a.util.objId(e[i])]?"Array"!==a.util.type(e[i])||r[a.util.objId(e[i])]||(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,i,r)):(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){var n={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",n);for(var r,i=n.elements||document.querySelectorAll(n.selector),s=0;r=i[s++];)a.highlightElement(r,!0===e,n.callback)},highlightElement:function(t,n,r){for(var i,s,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(i=(o.className.match(e)||[,""])[1].toLowerCase(),s=a.languages[i]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var l=t.textContent,u={element:t,language:i,grammar:s,code:l};if(a.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return u.code&&(a.hooks.run("before-highlight",u),u.element.textContent=u.code,a.hooks.run("after-highlight",u)),void a.hooks.run("complete",u);if(a.hooks.run("before-highlight",u),n&&_self.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u.highlightedCode=e.data,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),a.hooks.run("after-highlight",u),a.hooks.run("complete",u)},c.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=a.highlight(u.code,u.grammar,u.language),a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(t),a.hooks.run("after-highlight",u),a.hooks.run("complete",u)},highlight:function(e,t,r){var i=a.tokenize(e,t);return n.stringify(a.util.encode(i),r)},matchGrammar:function(e,t,n,r,i,s,o){var l=a.Token;for(var u in n)if(n.hasOwnProperty(u)&&n[u]){if(u==o)return;var c=n[u];c="Array"===a.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var p=c[d],g=p.inside,m=!!p.lookbehind,h=!!p.greedy,f=0,b=p.alias;if(h&&!p.pattern.global){var y=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var k=r,v=i;k<t.length;v+=t[k].length,++k){var w=t[k];if(t.length>e.length)return;if(!(w instanceof l)){p.lastIndex=0;var P=p.exec(w),S=1;if(!P&&h&&k!=t.length-1){if(p.lastIndex=v,!(P=p.exec(e)))break;for(var _=P.index+(m?P[1].length:0),x=P.index+P[0].length,C=k,N=v,L=t.length;L>C&&(x>N||!t[C].type&&!t[C-1].greedy);++C)N+=t[C].length,_>=N&&(++k,v=N);if(t[k]instanceof l||t[C-1].greedy)continue;S=C-k,w=e.slice(v,N),P.index-=v}if(P){m&&(f=P[1].length);var _=P.index+f,P=P[0].slice(f),x=_+P.length,B=w.slice(0,_),A=w.slice(x),E=[k,S];B&&(++k,v+=B.length,E.push(B));var $=new l(u,g?a.tokenize(P,g):P,b,P,h);if(E.push($),A&&E.push(A),Array.prototype.splice.apply(t,E),1!=S&&a.matchGrammar(e,t,n,k,v,!0,u),s)break}else if(s)break}}}}},tokenize:function(e,t){var n=[e],r=t.rest;if(r){for(var i in r)t[i]=r[i];delete t.rest}return a.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}}},n=a.Token=function(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r};if(n.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(a){return n.stringify(a,t,e)}).join("");var i={type:e.type,content:n.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var s="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,s)}a.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var t=JSON.parse(e.data),n=t.language,r=t.code,i=t.immediateClose;_self.postMessage(a.highlight(r,a.languages[n],n)),i&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(a.filename=r.src,a.manual||r.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\s\S])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\s\S]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript,function(e){var t={variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\([^)]+\)|`[^`]+`/,inside:{variable:/^\$\(|^`|\)$|`$/}},/\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i]};e.languages.bash={shebang:{pattern:/^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,alias:"important"},comment:{pattern:/(^|[^"{\\])#.*/,lookbehind:!0},string:[{pattern:/((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,lookbehind:!0,greedy:!0,inside:t},{pattern:/(["'])(?:\\\\|\\?[^\\])*?\1/g,greedy:!0,inside:t}],variable:t.variable,function:{pattern:/(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,lookbehind:!0},keyword:{pattern:/(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,lookbehind:!0},boolean:{pattern:/(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/,lookbehind:!0},operator:/&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];]/};var a=t.variable[1].inside;a.function=e.languages.bash.function,a.keyword=e.languages.bash.keyword,a.boolean=e.languages.bash.boolean,a.operator=e.languages.bash.operator,a.punctuation=e.languages.bash.punctuation}(Prism),Prism.languages.css.selector={pattern:/[^\{\}\s][^\{\}]*(?=\s*\{)/,inside:{"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+(?:\(.*\))?/,class:/\.[-:\.\w]+/,id:/#[-:\.\w]+/,attribute:/\[[^\]]+\]/}},Prism.languages.insertBefore("css","function",{hexcode:/#[\da-f]{3,8}/i,entity:/\\[\da-f]{1,8}/i,number:/[\d%\.]+/}),Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)*url(?=\()/i,selector:{pattern:/(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-_\w]+/,variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.scss.property={pattern:/(?:[\w-]|\$[-_\w]+|#\{\$[-_\w]+\})+(?=\s*:)/i,inside:{variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}},Prism.languages.insertBefore("scss","important",{variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-_\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:true|false)\b/,null:/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.util.clone(Prism.languages.scss),function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e=function(e){var a=t(e),n=a["white-space"];if("pre-wrap"===n||"pre-line"===n){var r=e.querySelector("code"),i=e.querySelector(".line-numbers-rows"),s=e.querySelector(".line-numbers-sizer"),o=e.textContent.split("\n");s||(s=document.createElement("span"),s.className="line-numbers-sizer",r.appendChild(s)),s.style.display="block",o.forEach(function(e,t){s.textContent=e||"\n";var a=s.getBoundingClientRect().height;i.children[t].style.height=a+"px"}),s.textContent="",s.style.display="none"}},t=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null};window.addEventListener("resize",function(){Array.prototype.forEach.call(document.querySelectorAll("pre.line-numbers"),e)}),Prism.hooks.add("complete",function(t){if(t.code){var a=t.element.parentNode,n=/\s*\bline-numbers\b\s*/;if(a&&/pre/i.test(a.nodeName)&&(n.test(a.className)||n.test(t.element.className))&&!t.element.querySelector(".line-numbers-rows")){n.test(t.element.className)&&(t.element.className=t.element.className.replace(n," ")),n.test(a.className)||(a.className+=" line-numbers");var r,i=t.code.match(/\n(?!$)/g),s=i?i.length+1:1,o=new Array(s+1);o=o.join("<span></span>"),r=document.createElement("span"),r.setAttribute("aria-hidden","true"),r.className="line-numbers-rows",r.innerHTML=o,a.hasAttribute("data-start")&&(a.style.counterReset="linenumber "+(parseInt(a.getAttribute("data-start"),10)-1)),t.element.appendChild(r),e(a)}}})}}(),function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e=[],t={},a=function(){};Prism.plugins.toolbar={};var n=Prism.plugins.toolbar.registerButton=function(a,n){var r;r="function"==typeof n?n:function(e){var t;return"function"==typeof n.onClick?(t=document.createElement("button"),t.type="button",t.addEventListener("click",function(){n.onClick.call(this,e)})):"string"==typeof n.url?(t=document.createElement("a"),t.href=n.url):t=document.createElement("span"),t.textContent=n.text,t},e.push(t[a]=r)},r=Prism.plugins.toolbar.hook=function(n){var r=n.element.parentNode;if(r&&/pre/i.test(r.nodeName)&&!r.classList.contains("code-toolbar")){r.classList.add("code-toolbar");var i=document.createElement("div");i.classList.add("toolbar"),document.body.hasAttribute("data-toolbar-order")&&(e=document.body.getAttribute("data-toolbar-order").split(",").map(function(e){return t[e]||a})),e.forEach(function(e){var t=e(n);if(t){var a=document.createElement("div");a.classList.add("toolbar-item"),a.appendChild(t),i.appendChild(a)}}),r.appendChild(i)}};n("label",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-label")){var a,n,r=t.getAttribute("data-label");try{n=document.querySelector("template#"+r)}catch(e){}return n?a=n.content:(t.hasAttribute("data-url")?(a=document.createElement("a"),a.href=t.getAttribute("data-url")):a=document.createElement("span"),a.textContent=r),a}}),Prism.hooks.add("complete",r)}}(),function(){if("undefined"!=typeof self&&self.Prism&&self.document&&Function.prototype.bind){var e=function(e){var t=0,a=0,n=e;if(n.parentNode){do{t+=n.offsetLeft,a+=n.offsetTop}while((n=n.offsetParent)&&n.nodeType<9);n=e;do{t-=n.scrollLeft,a-=n.scrollTop}while((n=n.parentNode)&&!/body/i.test(n.nodeName))}return{top:a,right:innerWidth-t-e.offsetWidth,bottom:innerHeight-a-e.offsetHeight,left:t}},t=/(?:^|\s)token(?=$|\s)/,a=/(?:^|\s)active(?=$|\s)/g,n=/(?:^|\s)flipped(?=$|\s)/g,r=function(e,t,a,n){this._elt=null,this._type=e,this._clsRegexp=RegExp("(?:^|\\s)"+e+"(?=$|\\s)"),this._token=null,this.updater=t,this._mouseout=this.mouseout.bind(this),this.initializer=n;var i=this;a||(a=["*"]),"Array"!==Prism.util.type(a)&&(a=[a]),a.forEach(function(e){"string"!=typeof e&&(e=e.lang),r.byLanguages[e]||(r.byLanguages[e]=[]),r.byLanguages[e].indexOf(i)<0&&r.byLanguages[e].push(i)}),r.byType[e]=this};r.prototype.init=function(){this._elt||(this._elt=document.createElement("div"),this._elt.className="prism-previewer prism-previewer-"+this._type,document.body.appendChild(this._elt),this.initializer&&this.initializer())},r.prototype.check=function(e){do{if(t.test(e.className)&&this._clsRegexp.test(e.className))break}while(e=e.parentNode);e&&e!==this._token&&(this._token=e,this.show())},r.prototype.mouseout=function(){this._token.removeEventListener("mouseout",this._mouseout,!1),this._token=null,this.hide()},r.prototype.show=function(){if(this._elt||this.init(),this._token)if(this.updater.call(this._elt,this._token.textContent)){this._token.addEventListener("mouseout",this._mouseout,!1);var t=e(this._token);this._elt.className+=" active",t.top-this._elt.offsetHeight>0?(this._elt.className=this._elt.className.replace(n,""),this._elt.style.top=t.top+"px",this._elt.style.bottom=""):(this._elt.className+=" flipped",this._elt.style.bottom=t.bottom+"px",this._elt.style.top=""),this._elt.style.left=t.left+Math.min(200,this._token.offsetWidth/2)+"px"}else this.hide()},r.prototype.hide=function(){this._elt.className=this._elt.className.replace(a,"")},r.byLanguages={},r.byType={},r.initEvents=function(e,t){var a=[];r.byLanguages[t]&&(a=a.concat(r.byLanguages[t])),r.byLanguages["*"]&&(a=a.concat(r.byLanguages["*"])),e.addEventListener("mouseover",function(e){var t=e.target;a.forEach(function(e){e.check(t)})},!1)},Prism.plugins.Previewer=r,Prism.hooks.add("after-highlight",function(e){(r.byLanguages["*"]||r.byLanguages[e.language])&&r.initEvents(e.element,e.language)})}}(),function(){if(("undefined"==typeof self||self.Prism)&&("undefined"==typeof global||global.Prism)){var e={css:!0,less:!0,markup:{lang:"markup",before:"punctuation",inside:"inside",root:Prism.languages.markup&&Prism.languages.markup.tag.inside["attr-value"]},sass:[{lang:"sass",before:"punctuation",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]},{lang:"sass",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]}],scss:!0,stylus:[{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]};Prism.hooks.add("before-highlight",function(t){if(t.language&&e[t.language]&&!e[t.language].initialized){var a=e[t.language];"Array"!==Prism.util.type(a)&&(a=[a]),a.forEach(function(a){var n,r,i,s;!0===a?(n="important",r=t.language,a=t.language):(n=a.before||"important",r=a.inside||a.lang,i=a.root||Prism.languages,s=a.skip,a=t.language),!s&&Prism.languages[a]&&(Prism.languages.insertBefore(r,n,{color:/\B#(?:[0-9a-f]{3}){1,2}\b|\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B|\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gray|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGray|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i},i),t.grammar=Prism.languages[a],e[t.language]={initialized:!0})})}}),Prism.plugins.Previewer&&new Prism.plugins.Previewer("color",function(e){return this.style.backgroundColor="",this.style.backgroundColor=e,!!this.style.backgroundColor})}}(),function(){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.hooks.add("complete",function(e){if(e.code){var t=e.element.parentNode,a=/\s*\bcommand-line\b\s*/;if(t&&/pre/i.test(t.nodeName)&&(a.test(t.className)||a.test(e.element.className))&&!e.element.querySelector(".command-line-prompt")){a.test(e.element.className)&&(e.element.className=e.element.className.replace(a,"")),a.test(t.className)||(t.className+=" command-line");var n=function(e,a){return(t.getAttribute(e)||a).replace(/"/g,"&quot")},r=new Array(1+e.code.split("\n").length),i=n("data-prompt","");if(""!==i)r=r.join('<span data-prompt="'+i+'"></span>');else{var s=n("data-user","user"),o=n("data-host","localhost");r=r.join('<span data-user="'+s+'" data-host="'+o+'"></span>')}var l=document.createElement("span");l.className="command-line-prompt",l.innerHTML=r;var u=t.getAttribute("data-output")||"";u=u.split(",");for(var c=0;c<u.length;c++){var d=u[c].split("-"),p=parseInt(d[0]),g=p;if(2===d.length&&(g=parseInt(d[1])),!isNaN(p)&&!isNaN(g))for(var m=p;g>=m&&m<=l.children.length;m++){var h=l.children[m-1];h.removeAttribute("data-user"),h.removeAttribute("data-host"),h.removeAttribute("data-prompt")}}e.element.innerHTML=l.outerHTML+e.element.innerHTML}}})}(),function(){if("undefined"!=typeof self&&self.Prism&&self.document){if(!Prism.plugins.toolbar)return void console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");var e=window.Clipboard||void 0;e||"function"!=typeof require||(e=require("clipboard"));var t=[];if(!e){var a=document.createElement("script"),n=document.querySelector("head");a.onload=function(){if(e=window.Clipboard)for(;t.length;)t.pop()()},a.src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.8/clipboard.min.js",n.appendChild(a)}Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(a){function n(){var t=new e(i,{text:function(){return a.code}});t.on("success",function(){i.textContent="Copied!",r()}),t.on("error",function(){i.textContent="Press Ctrl+C to copy",r()})}function r(){setTimeout(function(){i.textContent="Copy"},5e3)}var i=document.createElement("a");return i.textContent="Copy",e?n():t.push(n),i})}}();