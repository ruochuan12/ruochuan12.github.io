"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([["154"],{35088:function(t,e,a){let i;a.d(e,{diagram:()=>S});var r=a(72945),d=a(66203),n=a(6758),s=a(75597),o=a(47346);a(16483),a(91088),a(90795);let c={},l=(t,e)=>{c[t]=e},g=t=>t.append("circle").attr("class","start-state").attr("r",(0,o.c)().state.sizeUnit).attr("cx",(0,o.c)().state.padding+(0,o.c)().state.sizeUnit).attr("cy",(0,o.c)().state.padding+(0,o.c)().state.sizeUnit),p=t=>t.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",(0,o.c)().state.textHeight).attr("class","divider").attr("x2",2*(0,o.c)().state.textHeight).attr("y1",0).attr("y2",0),h=(t,e)=>{let a=t.append("text").attr("x",2*(0,o.c)().state.padding).attr("y",(0,o.c)().state.textHeight+2*(0,o.c)().state.padding).attr("font-size",(0,o.c)().state.fontSize).attr("class","state-title").text(e.id),i=a.node().getBBox();return t.insert("rect",":first-child").attr("x",(0,o.c)().state.padding).attr("y",(0,o.c)().state.padding).attr("width",i.width+2*(0,o.c)().state.padding).attr("height",i.height+2*(0,o.c)().state.padding).attr("rx",(0,o.c)().state.radius),a},x=(t,e)=>{let a=function(t,e,a){let i=t.append("tspan").attr("x",2*(0,o.c)().state.padding).text(e);a||i.attr("dy",(0,o.c)().state.textHeight)},i=t.append("text").attr("x",2*(0,o.c)().state.padding).attr("y",(0,o.c)().state.textHeight+1.3*(0,o.c)().state.padding).attr("font-size",(0,o.c)().state.fontSize).attr("class","state-title").text(e.descriptions[0]).node().getBBox(),r=i.height,d=t.append("text").attr("x",(0,o.c)().state.padding).attr("y",r+.4*(0,o.c)().state.padding+(0,o.c)().state.dividerMargin+(0,o.c)().state.textHeight).attr("class","state-description"),n=!0,s=!0;e.descriptions.forEach(function(t){n||(a(d,t,s),s=!1),n=!1});let c=t.append("line").attr("x1",(0,o.c)().state.padding).attr("y1",(0,o.c)().state.padding+r+(0,o.c)().state.dividerMargin/2).attr("y2",(0,o.c)().state.padding+r+(0,o.c)().state.dividerMargin/2).attr("class","descr-divider"),l=d.node().getBBox(),g=Math.max(l.width,i.width);return c.attr("x2",g+3*(0,o.c)().state.padding),t.insert("rect",":first-child").attr("x",(0,o.c)().state.padding).attr("y",(0,o.c)().state.padding).attr("width",g+2*(0,o.c)().state.padding).attr("height",l.height+r+2*(0,o.c)().state.padding).attr("rx",(0,o.c)().state.radius),t},u=(t,e,a)=>{let i;let r=(0,o.c)().state.padding,d=2*(0,o.c)().state.padding,n=t.node().getBBox(),s=n.width,c=n.x,l=t.append("text").attr("x",0).attr("y",(0,o.c)().state.titleShift).attr("font-size",(0,o.c)().state.fontSize).attr("class","state-title").text(e.id),g=l.node().getBBox().width+d,p=Math.max(g,s);p===s&&(p+=d);let h=t.node().getBBox();e.doc,i=c-r,g>s&&(i=(s-p)/2+r),Math.abs(c-h.x)<r&&g>s&&(i=c-(g-s)/2);let x=1-(0,o.c)().state.textHeight;return t.insert("rect",":first-child").attr("x",i).attr("y",x).attr("class",a?"alt-composit":"composit").attr("width",p).attr("height",h.height+(0,o.c)().state.textHeight+(0,o.c)().state.titleShift+1).attr("rx","0"),l.attr("x",i+r),g<=s&&l.attr("x",c+(p-d)/2-g/2+r),t.insert("rect",":first-child").attr("x",i).attr("y",(0,o.c)().state.titleShift-(0,o.c)().state.textHeight-(0,o.c)().state.padding).attr("width",p).attr("height",3*(0,o.c)().state.textHeight).attr("rx",(0,o.c)().state.radius),t.insert("rect",":first-child").attr("x",i).attr("y",(0,o.c)().state.titleShift-(0,o.c)().state.textHeight-(0,o.c)().state.padding).attr("width",p).attr("height",h.height+3+2*(0,o.c)().state.textHeight).attr("rx",(0,o.c)().state.radius),t},f=t=>(t.append("circle").attr("class","end-state-outer").attr("r",(0,o.c)().state.sizeUnit+(0,o.c)().state.miniPadding).attr("cx",(0,o.c)().state.padding+(0,o.c)().state.sizeUnit+(0,o.c)().state.miniPadding).attr("cy",(0,o.c)().state.padding+(0,o.c)().state.sizeUnit+(0,o.c)().state.miniPadding),t.append("circle").attr("class","end-state-inner").attr("r",(0,o.c)().state.sizeUnit).attr("cx",(0,o.c)().state.padding+(0,o.c)().state.sizeUnit+2).attr("cy",(0,o.c)().state.padding+(0,o.c)().state.sizeUnit+2)),y=(t,e)=>{let a=(0,o.c)().state.forkWidth,i=(0,o.c)().state.forkHeight;if(e.parentId){let t=a;a=i,i=t}return t.append("rect").style("stroke","black").style("fill","black").attr("width",a).attr("height",i).attr("x",(0,o.c)().state.padding).attr("y",(0,o.c)().state.padding)},w=(t,e,a,i)=>{let r=0,d=i.append("text");d.style("text-anchor","start"),d.attr("class","noteText");let n=t.replace(/\r\n/g,"<br/>"),s=(n=n.replace(/\n/g,"<br/>")).split(o.e.lineBreakRegex),c=1.25*(0,o.c)().state.noteMargin;for(let t of s){let i=t.trim();if(i.length>0){let t=d.append("tspan");t.text(i),0===c&&(c+=t.node().getBBox().height),r+=c,t.attr("x",e+(0,o.c)().state.noteMargin),t.attr("y",a+r+1.25*(0,o.c)().state.noteMargin)}}return{textWidth:d.node().getBBox().width,textHeight:r}},b=(t,e)=>{e.attr("class","state-note");let a=e.append("rect").attr("x",0).attr("y",(0,o.c)().state.padding),{textWidth:i,textHeight:r}=w(t,0,0,e.append("g"));return a.attr("height",r+2*(0,o.c)().state.noteMargin),a.attr("width",i+2*(0,o.c)().state.noteMargin),a},B=function(t,e){let a=e.id,i={id:a,label:e.id,width:0,height:0},r=t.append("g").attr("id",a).attr("class","stateGroup");"start"===e.type&&g(r),"end"===e.type&&f(r),("fork"===e.type||"join"===e.type)&&y(r,e),"note"===e.type&&b(e.note.text,r),"divider"===e.type&&p(r),"default"===e.type&&0===e.descriptions.length&&h(r,e),"default"===e.type&&e.descriptions.length>0&&x(r,e);let d=r.node().getBBox();return i.width=d.width+2*(0,o.c)().state.padding,i.height=d.height+2*(0,o.c)().state.padding,l(a,i),i},m=0,k=function(t,e,a){e.points=e.points.filter(t=>!Number.isNaN(t.y));let i=e.points,n=(0,d.jvg)().x(function(t){return t.x}).y(function(t){return t.y}).curve(d.$0Z),s=t.append("path").attr("d",n(i)).attr("id","edge"+m).attr("class","transition"),c="";if((0,o.c)().state.arrowMarkerAbsolute&&(c=(c=(c=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),s.attr("marker-end","url("+c+"#"+function(t){switch(t){case r.d.relationType.AGGREGATION:return"aggregation";case r.d.relationType.EXTENSION:return"extension";case r.d.relationType.COMPOSITION:return"composition";case r.d.relationType.DEPENDENCY:return"dependency"}}(r.d.relationType.DEPENDENCY)+"End)"),void 0!==a.title){let i=t.append("g").attr("class","stateLabel"),{x:r,y:d}=o.u.calcLabelPosition(e.points),n=o.e.getRows(a.title),s=0,c=[],l=0,g=0;for(let t=0;t<=n.length;t++){let e=i.append("text").attr("text-anchor","middle").text(n[t]).attr("x",r).attr("y",d+s),a=e.node().getBBox();l=Math.max(l,a.width),g=Math.min(g,a.x),o.l.info(a.x,r,d+s),0===s&&(s=e.node().getBBox().height,o.l.info("Title height",s,d)),c.push(e)}let p=s*n.length;if(n.length>1){let t=(n.length-1)*s*.5;c.forEach((e,a)=>e.attr("y",d+a*s-t)),p=s*n.length}let h=i.node().getBBox();i.insert("rect",":first-child").attr("class","box").attr("x",r-l/2-(0,o.c)().state.padding/2).attr("y",d-p/2-(0,o.c)().state.padding/2-3.5).attr("width",l+(0,o.c)().state.padding).attr("height",p+(0,o.c)().state.padding),o.l.info(h)}m++},N={},E=function(t){t.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},M=t=>t?t.length*i.fontSizeFactor:1,v=(t,e,a,r,d,c,l)=>{let g;let p=new s.k({compound:!0,multigraph:!0}),h=!0;for(g=0;g<t.length;g++)if("relation"===t[g].stmt){h=!1;break}a?p.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:h?1:i.edgeLengthFactor,nodeSep:h?1:50,isMultiGraph:!0}):p.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:h?1:i.edgeLengthFactor,nodeSep:h?1:50,ranker:"tight-tree",isMultiGraph:!0}),p.setDefaultEdgeLabel(function(){return{}}),l.db.extract(t);let x=l.db.getStates(),f=l.db.getRelations();for(let t of Object.keys(x)){let n;let s=x[t];if(a&&(s.parentId=a),s.doc){let t=e.append("g").attr("id",s.id).attr("class","stateGroup");n=v(s.doc,t,s.id,!r,d,c,l);{let e=(t=u(t,s,r)).node().getBBox();n.width=e.width,n.height=e.height+i.padding/2,N[s.id]={y:i.compositTitleSize}}}else n=B(e,s);if(s.note){let t=B(e,{descriptions:[],id:s.id+"-note",note:s.note,type:"note"});"left of"===s.note.position?(p.setNode(n.id+"-note",t),p.setNode(n.id,n)):(p.setNode(n.id,n),p.setNode(n.id+"-note",t)),p.setParent(n.id,n.id+"-group"),p.setParent(n.id+"-note",n.id+"-group")}else p.setNode(n.id,n)}o.l.debug("Count=",p.nodeCount(),p);let y=0;f.forEach(function(t){y++,o.l.debug("Setting edge",t),p.setEdge(t.id1,t.id2,{relation:t,width:M(t.title),height:i.labelHeight*o.e.getRows(t.title).length,labelpos:"c"},"id"+y)}),(0,n.bK)(p),o.l.debug("Graph after layout",p.nodes());let w=e.node();p.nodes().forEach(function(t){void 0!==t&&void 0!==p.node(t)?(o.l.warn("Node "+t+": "+JSON.stringify(p.node(t))),d.select("#"+w.id+" #"+t).attr("transform","translate("+(p.node(t).x-p.node(t).width/2)+","+(p.node(t).y+(N[t]?N[t].y:0)-p.node(t).height/2)+" )"),d.select("#"+w.id+" #"+t).attr("data-x-shift",p.node(t).x-p.node(t).width/2),c.querySelectorAll("#"+w.id+" #"+t+" .divider").forEach(t=>{let e=t.parentElement,a=0,i=0;e&&(e.parentElement&&(a=e.parentElement.getBBox().width),Number.isNaN(i=parseInt(e.getAttribute("data-x-shift"),10))&&(i=0)),t.setAttribute("x1",0-i+8),t.setAttribute("x2",a-i-8)})):o.l.debug("No Node "+t+": "+JSON.stringify(p.node(t)))});let b=w.getBBox();p.edges().forEach(function(t){void 0!==t&&void 0!==p.edge(t)&&(o.l.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(p.edge(t))),k(e,p.edge(t),p.edge(t).relation))}),b=w.getBBox();let m={id:a||"root",label:a||"root",width:0,height:0};return m.width=b.width+2*i.padding,m.height=b.height+2*i.padding,o.l.debug("Doc rendered",m,p),m},S={parser:r.p,db:r.d,renderer:{setConf:function(){},draw:function(t,e,a,r){let n;i=(0,o.c)().state;let s=(0,o.c)().securityLevel;"sandbox"===s&&(n=(0,d.Ys)("#i"+e));let c="sandbox"===s?(0,d.Ys)(n.nodes()[0].contentDocument.body):(0,d.Ys)("body"),l="sandbox"===s?n.nodes()[0].contentDocument:document;o.l.debug("Rendering diagram "+t);let g=c.select(`[id='${e}']`);E(g),v(r.db.getRootDoc(),g,void 0,!1,c,l,r);let p=i.padding,h=g.node().getBBox(),x=h.width+2*p,u=h.height+2*p;(0,o.i)(g,u,1.75*x,i.useMaxWidth),g.attr("viewBox",`${h.x-i.padding}  ${h.y-i.padding} `+x+" "+u)}},styles:r.s,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,r.d.clear()}}}}]);