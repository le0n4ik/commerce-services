"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[206],{91515:function(e,t,n){var r=n(42982),i=n(4942),l=(n(38559),n(15007)),o=n(1597),a=n(64983),s=n(31404),d=n(26777),u=n(158),v=n(42075),p=n(23576),c=n(69679),m=n(56013),h=n(24149),f=n(21183),g=n(45553),b=n(47029),y=n(38512),x=n(1931),w=n(11768);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){for(var t=e.childrenArray,n=e.query,r=e.hasSideNav,i=[],o=null,a=null,s=function(){var e=t[0],s=0;Object.keys(w.a).forEach((function(d){var v;(null==e||null===(v=e.props)||void 0===v?void 0:v.mdxType)===d&&function(){s++;var d=[];if((e.props.slots||e.props.repeat)&&function(){for(var n=Math.max(parseInt(e.props.repeat)||1,1),r=function(r){d=d.concat((e.props.slots||"element").split(",").map((function(e,i){return[""+e.trim()+(1===n?"":r),t[d.length+i+1]]})))},i=0;i<n;i++)r(i)}(),d.length){s+=d.length;var v=Object.fromEntries(d);"Variant"===e.props.mdxType&&(v.query=n),"Hero"===e.props.mdxType&&r&&(v.width="calc("+u.Av+" - "+u.dP+");");var p=(0,l.cloneElement)(e,P({},v));"Hero"===e.props.mdxType?o=o||p:"Resources"===e.props.mdxType?a=a||p:i.push(p)}else i.push(e)}()})),0===s&&(s++,i.push(e)),t=t.splice(s)};t.length;)s();return{filteredChildren:i,heroChild:o,resourcesChild:a}},j={name:"eibcz6",styles:"display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-top:var(--spectrum-global-dimension-size-800);margin-bottom:var(--spectrum-global-dimension-size-400)"},C={name:"1ggp1wf",styles:"margin-right:var(--spectrum-global-dimension-size-400)"},A={name:"zjik7",styles:"display:flex"},q={name:"7wiue4",styles:"align-items:center;justify-content:center;display:flex;flex-direction:column"};t.Z=function(e){var t,n=e.children,i=e.pageContext,Z=e.query,z=(0,l.useContext)(d.Z),D=z.hasSideNav,S=z.siteMetadata,M=z.location,N=z.allSitePage,k=z.allMdx,_=z.allGithub,E=z.allGithubContributors,T=void 0===i,L=l.Children.toArray(n);if(T||"none"===(null==i||null===(t=i.frontmatter)||void 0===t?void 0:t.layout)){var B=O({childrenArray:(0,y.L)(L),query:Z,hasSideNav:D}).filteredChildren;return T?(0,s.tZ)(a.MDXProvider,null,B):(0,s.tZ)(a.MDXProvider,{components:P(P({},x.t),w.a)},B,(0,s.tZ)(v.$,{hasSideNav:D}))}var X,G,H,Y,J,K,R,$,I,V,F,Q,U,W,ee,te=(0,u.kR)(null==M?void 0:M.pathname,null==S?void 0:S.subPages),ne=(0,u.P4)(null==M?void 0:M.pathname,null==S?void 0:S.subPages),re=(0,u.sl)(null==M?void 0:M.pathname,null==S?void 0:S.subPages),ie=re.nextPage,le=re.previousPage,oe=null==N?void 0:N.nodes.find((function(e){var t=e.path;return(0,o.dq)(t)===(null==M?void 0:M.pathname)})),ae=null!==(X=null==oe?void 0:oe.component)&&void 0!==X?X:"",se=null==k?void 0:k.nodes.find((function(e){return e.fileAbsolutePath===ae})),de=null!==(G=null==se?void 0:se.tableOfContents)&&void 0!==G?G:{},ue=null==_?void 0:_.nodes[0],ve=ue.repository,pe=ue.default_branch,ce=ue.root,me=null==E?void 0:E.nodes.find((function(e){return e.path===ae})),he=null!==(H=null==me?void 0:me.contributors)&&void 0!==H?H:[],fe=ae.replace(/.*\/src\/pages\//g,""),ge=void 0!==(null==i||null===(Y=i.frontmatter)||void 0===Y?void 0:Y.hideBreadcrumbNav)&&i.frontmatter.hideBreadcrumbNav;if("boolean"!=typeof ge)throw new Error("hideBreadcrumbNav is not a boolean. Correct use hideBreadcrumbNav: true");var be=S.home,ye=(0,u.A6)(M.pathname),xe=(0,u.Gh)(null==S?void 0:S.pages),we=(0,u.Yx)(ye,xe),Ze=(0,u.xH)(ye,we),Pe=(0,u.Lh)(null==M?void 0:M.pathname,null==S?void 0:S.subPages),Oe=[];if(Pe.length)for(var je=Pe[Pe.length-1].level+1,Ce=function(e){var t=Pe.filter((function(t){return t.level===e}));t.length&&Oe.push(t.pop())},Ae=0;Ae<je;Ae++)Ce(Ae);var qe=!1;null!=i&&null!==(J=i.frontmatter)&&void 0!==J&&J.jsDoc&&(qe=!0,L=(0,y.L)(L));var ze=O({childrenArray:L,hasSideNav:D}),De=ze.filteredChildren,Se=ze.heroChild,Me=ze.resourcesChild,Ne=null===Se,ke=null!==Se&&(!Se.props.variant||"default"===Se.props.variant),_e=null!==Se&&Se.props.variant&&"default"!==Se.props.variant,Ee=null==de||null===(K=de.items)||void 0===K||null===(R=K[0])||void 0===R?void 0:R.items,Te=!Se&&(D||qe)&&Ee&&(Ee.length>1||1===Ee.length&&(null===($=Ee[0])||void 0===$||null===(I=$.items)||void 0===I?void 0:I.length)>1||(null===(V=Ee[0])||void 0===V?void 0:V.title)),Le=(null==te?void 0:te.pathname)===(null==ne||null===(F=ne[0])||void 0===F?void 0:F.pathname),Be=[];return Te&&Be.push((0,u.MY)(2)+" - var(--spectrum-global-dimension-size-400)"),D&&Be.push(u.dP),(0,s.tZ)(a.MDXProvider,{components:P(P({},x.t),w.a)},(0,s.tZ)("main",{css:q},Se&&Se,(0,s.tZ)("div",{css:(0,s.iv)(_e?"width: var(--spectrum-global-dimension-static-grid-fluid-width);":"\n                max-width: "+u.Av+";\n                margin: 0 var(--spectrum-global-dimension-size-800);\n                "," ",ke&&"\n                h2:first-of-type {\n                  margin-top: 0 !important;\n                }\n              ","@media screen and (max-width: ",u.Av,"){max-width:none;margin:0 var(--spectrum-global-dimension-size-400);}")},(0,s.tZ)("div",{css:A},(0,s.tZ)("div",{css:(0,s.iv)("width:",_e?"\n                      var(--spectrum-global-dimension-static-grid-fluid-width);\n                      text-align: center;\n                      ":(0,u.MY)(12,Be),";@media screen and (max-width: ",u.Av,"){width:100%;}")},Ne&&(0,s.tZ)("div",{css:(0,s.iv)("display:flex;margin-top:var(--spectrum-global-dimension-size-500);margin-bottom:var(--spectrum-global-dimension-size-500);@media screen and (max-width: ",u.Av,"){flex-direction:column;}")},!ge&&we&&(0,s.tZ)("div",{css:C},!0!==(null==be?void 0:be.hidden)&&null!=be&&be.title&&null!=be&&be.href?(0,s.tZ)(h.O,{pages:[u.JK,be,P(P({},we),{},{href:(0,o.dq)(we.href)}),Ze&&P(P({},Ze),{},{href:(0,o.dq)(Ze.href)})].concat((0,r.Z)(Oe.map((function(e){return P(P({},e),{},{href:(0,o.dq)((0,u.Mi)(e.href))})}))))}):(0,s.tZ)(h.O,{pages:[u.JK,P(P({},null==S||null===(Q=S.pages)||void 0===Q?void 0:Q[0]),{},{href:(0,o.dq)(null==S||null===(U=S.pages)||void 0===U||null===(W=U[0])||void 0===W?void 0:W.href)}),P(P({},we),{},{href:(0,o.dq)(we.href)}),Ze&&P(P({},Ze),{},{href:(0,o.dq)(Ze.href)})].concat((0,r.Z)(Oe.map((function(e){return P(P({},e),{},{href:(0,o.dq)((0,u.Mi)(e.href))})}))))})),(0,s.tZ)("div",{css:(0,s.iv)("margin-left:auto;@media screen and (max-width: ",u.Av,"){margin-left:0;margin-top:var(--spectrum-global-dimension-size-200);}")},(0,s.tZ)(m.X,{repository:ve,branch:pe,root:ce,pagePath:fe}))),De,Ne&&Le&&(0,s.tZ)(g.x,{pages:ne}),Ne&&(0,s.tZ)(b.m,{nextPage:ie,previousPage:le}),!_e&&(0,s.tZ)("div",{css:j},(0,s.tZ)("div",null,(0,s.tZ)(p.T,{repository:ve,branch:pe,root:ce,pagePath:fe,contributors:he,externalContributors:null==i||null===(ee=i.frontmatter)||void 0===ee?void 0:ee.contributors,date:he[0]?new Date(he[0].date).toLocaleDateString():(new Date).toLocaleDateString()})),(0,s.tZ)("div",{css:(0,s.iv)("@media screen and (max-width: ",u.Av,"){margin-top:var(--spectrum-global-dimension-size-200);}")},(0,s.tZ)(c.x,null)))),Te&&(0,s.tZ)(f.m,{tableOfContents:de}),Me&&Me)),(0,s.tZ)(v.$,{hasSideNav:D})))}}}]);
//# sourceMappingURL=2dee68d8-558a6cfd2e019342f2b0.js.map