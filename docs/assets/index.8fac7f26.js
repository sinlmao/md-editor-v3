import{E as r,a as n}from"./request.9f8525b4.js";import{v as c}from"./package.d665ec65.js";import{d,q as i,u as l,o as m,w as u,c as t}from"./vendor.41e98cc9.js";var w=d({name:"PageAbout",props:{theme:String},setup(){const a=i(),e=l(),s=()=>{n.get(`/about-${e.state.lang}.md`).then(({data:o})=>{a.value=o.replace(/\$\{EDITOR_VERSION\}/g,c)}).catch(o=>{console.error(o),a.value="\u6587\u6863\u8BFB\u53D6\u5931\u8D25\uFF01"})};return m(s),u(()=>e.state.lang,s),()=>t("div",{class:"container"},[t("div",{class:"doc"},[t("div",{class:"content",style:{width:"100%"}},[t(r,{theme:e.state.theme,modelValue:a.value,previewTheme:e.state.previewTheme,previewOnly:!0,showCodeRowNumber:!0},null)])])])}});export{w as default};
