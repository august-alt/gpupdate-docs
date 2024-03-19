"use strict";(self.webpackChunkgpupdate_docs=self.webpackChunkgpupdate_docs||[]).push([[9411],{6369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var i=n(4848),s=n(8453);const l={},r=void 0,a={id:"tools/parsing_chrom_admx_intvalues",title:"parsing_chrom_admx_intvalues",description:"FunctionDef getchild(parent, desires, listdata_pol)",source:"@site/docs/tools/parsing_chrom_admx_intvalues.md",sourceDirName:"tools",slug:"/tools/parsing_chrom_admx_intvalues",permalink:"/docs/tools/parsing_chrom_admx_intvalues",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"xml",permalink:"/docs/gpoa/util/xml"}},c={},d=[{value:"FunctionDef get_child(parent, desires, list_data_pol)",id:"functiondef-get_childparent-desires-list_data_pol",level:2}];function o(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"functiondef-get_childparent-desires-list_data_pol",children:"FunctionDef get_child(parent, desires, list_data_pol)"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"get_child"}),": The function of get_child is to recursively traverse the XML tree structure and extract the value of the desired child elements."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"parameters"}),":\n\xb7 parent: The current parent XML element in the tree structure.\n\xb7 desires: A list of strings representing the desired child element tags in a hierarchical order.\n\xb7 list_data_pol: A list that stores the extracted values of the desired child elements."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Code Description"}),":\nThe function first checks if the current parent element's tag is 'decimal'. If yes, it extracts the value of the 'value' attribute and appends it to the 'list_data_pol'. If not, it iterates through all the child elements of the parent element. For each child element, it checks if the child element's tag matches the first element in the 'desires' list. If yes, it recursively calls the 'get_child' function with the child element, the rest of the 'desires' list, and the same 'list_data_pol'. This process continues until the function extracts all the desired child elements' values in the XML tree structure."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The 'desires' list should be in a hierarchical order, meaning the first element in the list is the immediate child element of the 'parent' element, and the rest of the elements in the list are the child elements of the previously extracted child element."}),"\n",(0,i.jsx)(t.li,{children:"The function only extracts the value of the 'decimal' type elements. If the desired child element is not of 'decimal' type, the function will not extract its value."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Output Example"}),":\nSuppose we have the following XML tree structure:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<parent>\n  <child1>\n    <decimal value="1"/>\n    <child2>\n      <decimal value="2"/>\n    </child2>\n  </child1>\n  <child3>\n    <decimal value="3"/>\n  </child3>\n</parent>\n'})}),"\n",(0,i.jsx)(t.p,{children:"If we call the 'get_child' function with the following parameters:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"parent = ET.fromstring(xml_string) # xml_string is the above XML tree structure as a string\ndesires = ['child1', 'decimal']\nlist_data_pol = []\n"})}),"\n",(0,i.jsx)(t.p,{children:"The function will extract the value '1' and append it to the 'list_data_pol'. Therefore, 'list_data_pol' will be ['1'] after the function call."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const s={},l=i.createContext(s);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);