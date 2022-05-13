"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[3160],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5946:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"zookeeper",title:"ZooKeeper Authentication"},s=void 0,p={unversionedId:"security/zookeeper",id:"version-4.14.5/security/zookeeper",title:"ZooKeeper Authentication",description:"New Clusters",source:"@site/versioned_docs/version-4.14.5/security/zookeeper.md",sourceDirName:"security",slug:"/security/zookeeper",permalink:"/docs/4.14.5/security/zookeeper",tags:[],version:"4.14.5",frontMatter:{id:"zookeeper",title:"ZooKeeper Authentication"},sidebar:"version-4.14.5/docsSidebar",previous:{title:"Authentication using SASL",permalink:"/docs/4.14.5/security/sasl"},next:{title:"The BookKeeper protocol",permalink:"/docs/4.14.5/development/protocol"}},c={},u=[{value:"New Clusters",id:"new-clusters",level:2},{value:"Migrating Clusters",id:"migrating-clusters",level:2},{value:"Migrating the ZooKeeper ensemble",id:"migrating-the-zookeeper-ensemble",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"new-clusters"},"New Clusters"),(0,i.kt)("p",null,"To enable ",(0,i.kt)("inlineCode",{parentName:"p"},"ZooKeeper")," authentication on Bookies or Clients, there are two necessary steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"JAAS")," login file and set the appropriate system property to point to it as described in ",(0,i.kt)("a",{parentName:"li",href:"sasl#notes"},"GSSAPI (Kerberos)"),"."),(0,i.kt)("li",{parentName:"ol"},"Set the configuration property ",(0,i.kt)("inlineCode",{parentName:"li"},"zkEnableSecurity")," in each bookie to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,i.kt)("p",null,"The metadata stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"ZooKeeper")," is such that only certain clients will be able to modify and read the corresponding znodes.\nThe rationale behind this decision is that the data stored in ZooKeeper is not sensitive, but inappropriate manipulation of znodes can cause cluster\ndisruption."),(0,i.kt)("h2",{id:"migrating-clusters"},"Migrating Clusters"),(0,i.kt)("p",null,"If you are running a version of BookKeeper that does not support security or simply with security disabled, and you want to make the cluster secure,\nthen you need to execute the following steps to enable ZooKeeper authentication with minimal disruption to your operations."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Perform a rolling restart setting the ",(0,i.kt)("inlineCode",{parentName:"li"},"JAAS")," login file, which enables bookie or clients to authenticate. At the end of the rolling restart,\nbookies (or clients) are able to manipulate znodes with strict ACLs, but they will not create znodes with those ACLs."),(0,i.kt)("li",{parentName:"ol"},"Perform a second rolling restart of bookies, this time setting the configuration parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"zkEnableSecurity")," to true, which enables the use\nof secure ACLs when creating znodes."),(0,i.kt)("li",{parentName:"ol"},"Currently we don't have provide a tool to set acls on old znodes. You are recommended to set it manually using ZooKeeper tools.")),(0,i.kt)("p",null,"It is also possible to turn off authentication in a secured cluster. To do it, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Perform a rolling restart of bookies setting the ",(0,i.kt)("inlineCode",{parentName:"li"},"JAAS")," login file, which enable bookies to authenticate, but setting ",(0,i.kt)("inlineCode",{parentName:"li"},"zkEnableSecurity")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".\nAt the end of rolling restart, bookies stop creating znodes with secure ACLs, but are still able to authenticate and manipulate all znodes."),(0,i.kt)("li",{parentName:"ol"},"You can use ZooKeeper tools to manually reset all ACLs under the znode set in ",(0,i.kt)("inlineCode",{parentName:"li"},"zkLedgersRootPath"),", which defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"/ledgers"),"."),(0,i.kt)("li",{parentName:"ol"},"Perform a second rolling restart of bookies, this time omitting the system property that sets the ",(0,i.kt)("inlineCode",{parentName:"li"},"JAAS")," login file.")),(0,i.kt)("h2",{id:"migrating-the-zookeeper-ensemble"},"Migrating the ZooKeeper ensemble"),(0,i.kt)("p",null,"It is also necessary to enable authentication on the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZooKeeper")," ensemble. To do it, we need to perform a rolling restart of the ensemble and\nset a few properties. Please refer to the ZooKeeper documentation for more details."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"http://zookeeper.apache.org/doc/r3.4.6/zookeeperProgrammers.html#sc_ZooKeeperAccessControl"},"Apache ZooKeeper Documentation")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://cwiki.apache.org/confluence/display/ZOOKEEPER/Zookeeper+and+SASL"},"Apache ZooKeeper Wiki"))))}m.isMDXComponent=!0}}]);