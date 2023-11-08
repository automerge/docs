"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4339],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(a),c=o,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||n;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2876:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var r=a(7462),o=(a(7294),a(3905));const n={slug:"automerge-2",title:"Automerge 2.0",authors:["pvh"],tags:[]},i="Introducing Automerge 2.0",s={permalink:"/blog/automerge-2",editUrl:"https://github.com/automerge/automerge.github.io/edit/main/blog/2023-01-17-automerge-2/index.md",source:"@site/blog/2023-01-17-automerge-2/index.md",title:"Automerge 2.0",description:"Automerge 2.0 is here and ready for production. It\u2019s our first supported release resulting from a ground-up rewrite. The result is a production-ready CRDT with huge improvements in performance and reliability. It's available in both JavaScript and Rust, and includes TypeScript types and C bindings for use in other ecosystems. Even better, Automerge 2.0 comes with improved documentation and, for the first time, support options for production users.",date:"2023-01-17T00:00:00.000Z",formattedDate:"January 17, 2023",tags:[],readingTime:11.825,hasTruncateMarker:!1,authors:[{name:"PVH",title:"Contributor",url:"https://github.com/pvh",key:"pvh"}],frontMatter:{slug:"automerge-2",title:"Automerge 2.0",authors:["pvh"],tags:[]},prevItem:{title:'Automerge-Repo: A "batteries-included" toolkit for building local-first applications',permalink:"/blog/2023/11/06/automerge-repo"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},l={authorsImageUrls:[void 0]},u=[{value:"Automerge, CRDTs, and Local-first Software",id:"automerge-crdts-and-local-first-software",level:2},{value:"Automerge-RS: Rebuilt for Performance &amp; Portability",id:"automerge-rs-rebuilt-for-performance--portability",level:2},{value:"Documenting Automerge",id:"documenting-automerge",level:2},{value:"Supporting Automerge",id:"supporting-automerge",level:2},{value:"Performance: Speed, Memory and Disk",id:"performance-speed-memory-and-disk",level:2},{value:"Portability &amp; Mobile Devices",id:"portability--mobile-devices",level:2},{value:"Native Rich Text Support",id:"native-rich-text-support",level:2},{value:"Automerge-Repo",id:"automerge-repo",level:2},{value:"Rust Developer Experience Improvements",id:"rust-developer-experience-improvements",level:2},{value:"Improved Synchronization",id:"improved-synchronization",level:2},{value:"Built-in Branches",id:"built-in-branches",level:2},{value:"History Management",id:"history-management",level:2}],p={toc:u},m="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Automerge 2.0 is here and ready for production. It\u2019s our first supported release resulting from a ground-up rewrite. The result is a production-ready CRDT with huge improvements in performance and reliability. It's available in both JavaScript and Rust, and includes TypeScript types and C bindings for use in other ecosystems. Even better, Automerge 2.0 comes with improved documentation and, for the first time, support options for production users."),(0,o.kt)("h2",{id:"automerge-crdts-and-local-first-software"},"Automerge, CRDTs, and Local-first Software"),(0,o.kt)("p",null,"Before getting into the details of why we're excited about Automerge 2.0, let's take a bit of time to explain what Automerge is for anyone unfamiliar with the project."),(0,o.kt)("p",null,"Automerge is a ",(0,o.kt)("a",{parentName:"p",href:"https://crdt.tech/"},"CRDT"),', or "conflict-free replicated data type", but if you\'re allergic to buzzwords you can just think of it as a version controlled data structure. Automerge lets you record changes made to data and then replay them in other places, reliably producing the same result in each. It supports JSON-like data, including arbitrarily nested maps and arrays, as well as some more advanced data types such as text and numeric counters.'),(0,o.kt)("p",null,"This is useful for quite a few reasons: you can use it to implement real-time collaboration for an application without having to figure out tricky application-specific algorithms on the server. You can also use it to better support offline work. We think it has even more potential than just that."),(0,o.kt)("p",null,"Since the rise of the cloud, developers have largely had to choose between building cloud software or traditional installed software. Although installed software has some reliability and performance benefits, cloud software has dominated the market. Cloud software makes sharing data between users easy and includes ubiquitous access from any computing device. Unfortunately, the advantages of cloud software come at a high price. Cloud software is fragile and prone to outages, rarely supports offline use, and is expensive to scale to large audiences."),(0,o.kt)("p",null,"At Ink & Switch, we\u2019ve been researching a model for developing software which we call ",(0,o.kt)("a",{parentName:"p",href:"https://www.inkandswitch.com/local-first/"},"local-first software"),", with the goal of combining the best of both worlds: reliable, locally-executed software paired with scalable offline-friendly collaboration infrastructure. We believe that a strong data model based on recording change over time for every application should be a cornerstone of that effort."),(0,o.kt)("h2",{id:"automerge-rs-rebuilt-for-performance--portability"},"Automerge-RS: Rebuilt for Performance & Portability"),(0,o.kt)("p",null,"Earlier versions of Automerge were implemented in pure JavaScript. Our initial implementations were theoretically sound but much too slow and used too much memory for most production use cases."),(0,o.kt)("p",null,"Furthermore, JavaScript support on mobile devices and embedded systems is limited. We wanted a fast and efficient version of Automerge that was available everywhere: in the browser, on any mobile device, and even microcontrollers like the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ESP32"},"ESP32"),"."),(0,o.kt)("p",null,"Instead of trying to coordinate multiple distinct versions of Automerge, we decided to rewrite Automerge in Rust and use platform-specific wrappers to make it available in each language ecosystem. This way we can be confident that the core CRDT logic is identical across all platforms and that everyone benefits from new features and optimizations together."),(0,o.kt)("p",null,"For JavaScript applications, this means compiling the Rust to WebAssembly and providing a JavaScript wrapper that maintains the existing Automerge API. Rust applications can obviously use the library directly, and we're making sure that it's as easy as possible to implement support in other languages with well-designed traits and a comprehensive set of C bindings."),(0,o.kt)("p",null,"To deliver this new version, lab members Alex Good and Orion Henry teamed up with open source collaborators including Andrew Jeffery and Jason Kankiewicz to polish and optimize the Rust implementation and JavaScript wrapper. The result is a codebase that is hundreds of times faster than past releases, radically more memory efficient, better tested, and more reliable."),(0,o.kt)("h2",{id:"documenting-automerge"},"Documenting Automerge"),(0,o.kt)("p",null,"With Automerge 2.0 we've made a big investment in improving documentation. In addition to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/automerge/automerge-rs/tree/main/javascript/examples"},"sample code"),", we now have a ",(0,o.kt)("a",{parentName:"p",href:"https://automerge.org/docs/tutorial/introduction/"},"tutorial")," and ",(0,o.kt)("a",{parentName:"p",href:"https://automerge.org/docs/quickstart/"},"quick-start guide")," that support both Vite and create-react-app, as well as ",(0,o.kt)("a",{parentName:"p",href:"https://automerge.org/docs/how-it-works/backend/"},"internals")," documentation, ",(0,o.kt)("a",{parentName:"p",href:"https://alexjg.github.io/automerge-storage-docs/"},"file format")," and ",(0,o.kt)("a",{parentName:"p",href:"https://automerge.org/docs/how-it-works/sync/"},"sync protocol")," documentation. This work was led by lab alumnus Rae McKelvey and we hope it helps make getting started with Automerge much easier. Please let us know if there are other topics or areas you'd like to see covered!"),(0,o.kt)("h2",{id:"supporting-automerge"},"Supporting Automerge"),(0,o.kt)("p",null,"Those who have been following Automerge for a while may have noticed that we describe Automerge 2.0 as our first ",(0,o.kt)("em",{parentName:"p"},"supported")," release. That\u2019s because as part of the Automerge 2.0 release we\u2019ve brought Alex Good onto the team full-time to provide support to external users, handle documentation, release management, and\u2014of course\u2014to continue implementing new Automerge features for the community."),(0,o.kt)("p",null,"This is a big moment for Ink & Switch and the Automerge project: we\u2019re now able to provide support to our users thanks to sponsorship from enterprises like ",(0,o.kt)("a",{parentName:"p",href:"https://fly.io/"},"Fly.io"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.prisma.io/"},"Prisma"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://bowtie.works/"},"Bowtie")," as well as so many others who have contributed either directly to Automerge or through supporting Martin Kleppmann on Patreon."),(0,o.kt)("p",null,"If your business is interested in sponsoring Automerge, you can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sponsors/automerge"},"sponsor us directly"),", or ",(0,o.kt)("a",{parentName:"p",href:"mailto:hello@inkandswitch.com"},"get in touch with us for more information or other sponsorship methods"),". Every little bit helps, and the more sponsors we have, the more work we can do while still remaining an independent open source project."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"At Bowtie we support Automerge because it's the best way to achieve the resilliency properties that we're delivering to globally distributed private networks. It's clear to me that our sponsorship has furthered our software, and that this crew are among the best distributed-systems thinkers in the business.\n-- Issac Kelly, CTO, Bowtie.")),(0,o.kt)("h2",{id:"performance-speed-memory-and-disk"},"Performance: Speed, Memory and Disk"),(0,o.kt)("p",null,"Using a CRDT inherently comes with overhead: we have to track additional information in order to be able to correctly merge work from different sources. The goal of all CRDT authors is to find the right trade-offs between preserving useful history, reducing CPU overhead, and efficiently storing data in memory and on disk."),(0,o.kt)("p",null,"With the Automerge project, our goal is to retain the full history of any document and allow an author to reconstruct any point in time on demand. As software developers we're accustomed to having this power: it's hard to imagine version control without history."),(0,o.kt)("p",null,"With Automerge 2.0, we've brought together an efficient binary data format with fast updates, save, and load performance. Without getting too into the details, we accomplish this by packing data efficiently in memory, ensuring that related data is stored close together for quick retrieval."),(0,o.kt)("p",null,"Let's take a look at some numbers. One of the most challenging benchmarks for CRDTs is realtime text collaboration. That's because a long editing session can result in hundreds of thousands of individual keystrokes to record and synchronize. Martin Kleppmann recorded the keystrokes that went into writing an academic paper and replaying that data has become a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/automerge/automerge-perf"},"popular benchmark")," for CRDTs."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Insert ~260k operations"),(0,o.kt)("th",{parentName:"tr",align:null},"Timing (ms)"),(0,o.kt)("th",{parentName:"tr",align:null},"Memory (bytes)"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Automerge 0.14"),(0,o.kt)("td",{parentName:"tr",align:null},"~500,000"),(0,o.kt)("td",{parentName:"tr",align:null},"~1,100,000,000")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Automerge 1.0.1"),(0,o.kt)("td",{parentName:"tr",align:null},"13,052"),(0,o.kt)("td",{parentName:"tr",align:null},"184,721,408")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Automerge 2.0.1"),(0,o.kt)("td",{parentName:"tr",align:null},"1,816"),(0,o.kt)("td",{parentName:"tr",align:null},"44,523,520")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Yjs"),(0,o.kt)("td",{parentName:"tr",align:null},"1,074"),(0,o.kt)("td",{parentName:"tr",align:null},"10,141,696")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Automerge 2.0.2-unstable"),(0,o.kt)("td",{parentName:"tr",align:null},"661"),(0,o.kt)("td",{parentName:"tr",align:null},"22,953,984")))),(0,o.kt)("p",null,"Of course, even the most productive authors struggle to type an entire paper quite so quickly. Indeed, writing a paper can occur over months or even years, making both storage size on disk and load performance important as well."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Size on Disk"),(0,o.kt)("th",{parentName:"tr",align:null},"bytes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"plain text"),(0,o.kt)("td",{parentName:"tr",align:null},"107,121")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"automerge 2.0"),(0,o.kt)("td",{parentName:"tr",align:null},"129,062")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"automerge 0.14"),(0,o.kt)("td",{parentName:"tr",align:null},"146,406,415")))),(0,o.kt)("p",null,"The binary format works wonders in this example, encoding a full history for the document with only 30% overhead. That's less than one additional byte per character! The naive JSON encoding often used circa automerge 0.14 could exceed 1,300 bytes ",(0,o.kt)("em",{parentName:"p"},"per character"),". If you'd like to learn more about the file format, we have a ",(0,o.kt)("a",{parentName:"p",href:"https://alexjg.github.io/automerge-storage-docs/"},"specification")," document."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Load ~260k operations"),(0,o.kt)("th",{parentName:"tr",align:null},"Timing (ms)"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Automerge 1.0.1"),(0,o.kt)("td",{parentName:"tr",align:null},"590")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Automerge 2.0.1"),(0,o.kt)("td",{parentName:"tr",align:null},"593")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Automerge 2.0.2-unstable"),(0,o.kt)("td",{parentName:"tr",align:null},"438")))),(0,o.kt)("p",null,"Loading the compressed document is fast as well, ensuring the best possible start-up time."),(0,o.kt)("p",null,"While we are proud of these results, we will continue to invest in improved performance with each release as you can see with the preliminary numbers for the upcoming Automerge 2.0.2 release."),(0,o.kt)("p",null,"A few notes about methodology before we move on. The particular implementation we used to run the benchmarks can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alexjg/automerge-perf-comparisons"},"here"),'. These numbers were produced on Ryzen 9 7900X. The "timing" column is how long it takes to apply every single edit in the trace, whilst the "memory" common is the peak memory usage during this process.'),(0,o.kt)("p",null,'The improvements found in "2.0.2-unstable" mostly result from an upcoming improved API for text. Also note that the "automerge 1.0.1" here is actually the ',(0,o.kt)("inlineCode",{parentName:"p"},"automerge@1.0.1-preview-7")," release. Automerge 1.0.1 was a significant rewrite from 0.14 and has a similar architecture to the Rust implementation. Improvements between 1.0.1 and 2.0.1 are a result of both optimization and adopting WebAssembly rather than an architectural change."),(0,o.kt)("h2",{id:"portability--mobile-devices"},"Portability & Mobile Devices"),(0,o.kt)("p",null,"Because the core logic of Automerge is now built in Rust, we're able to port it more easily to a wide variety of environments and bind it to almost any language. We have users today who directly build on Automerge using the Rust APIs (and the helpful ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/automerge/autosurgeon"},"autosurgeon")," library). We also have a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/automerge/automerge-rs/tree/main/rust/automerge-c"},"C-bindings API")," designed and contributed by Jason Kankiewicz, and are excited to see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/automerge/automerge-go"},(0,o.kt)("inlineCode",{parentName:"a"},"automerge-go"))," implementation underway by Conrad Irwin."),(0,o.kt)("p",null,"In the future, we hope to provide bindings for other languages including Swift, Kotlin, and Python. If you're interested in getting involved in those projects please let us know!"),(0,o.kt)("p",null,"One important note is that React-Native does not support WASM today. Developers building mobile applications will need to bind directly via C. If you're interested in either working on or sponsoring work on this problem, feel free to get in touch."),(0,o.kt)("h1",{id:"whats-next"},"What\u2019s Next"),(0,o.kt)("p",null,"With the release of Automerge 2.0 out the door, we will of course be listening closely to the community about their experience with the release, but in the months ahead, we expect to work on at least some of the following features:"),(0,o.kt)("h2",{id:"native-rich-text-support"},"Native Rich Text Support"),(0,o.kt)("p",null,"As with most CRDTs, Automerge originally focused on optimizing editing of plaintext. In the ",(0,o.kt)("a",{parentName:"p",href:"https://www.inkandswitch.com/peritext/"},"Peritext paper")," by Ink & Switch we discuss an algorithm for supporting rich text with good merging accuracy, and we are planning to integrate this algorithm into Automerge. Support for rich text will also make it easier to implement features like comments or cursor and selection sharing."),(0,o.kt)("h2",{id:"automerge-repo"},"Automerge-Repo"),(0,o.kt)("p",null,"We\u2019ve worked hard to keep Automerge platform-agnostic and support a wide variety of deployment environments. We don\u2019t require a particular network stack or storage system, and Automerge has been used successfully in, client-server web applications, peer-to-peer desktop software, and as a data synchronization engine for cloud services. Unfortunately, excluding network and storage from the library has left a lot of the busy-work up to application developers, and asked them to learn a lot about distributed systems just to get started."),(0,o.kt)("p",null,"Our new library, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/automerge/automerge-repo"},"Automerge-Repo"),", is a modular batteries-included approach to building web applications with Automerge. It works both in the browser (desktop and mobile) and in Node, and supports a variety of networking and storage adapters. There are even text editor bindings for Quill and Prosemirror as well as React Hooks to make it easy to get started quickly."),(0,o.kt)("p",null,"It's under active development, and available in beta right now. We'll talk more about it when we announce GA, but if you're starting a browser-based application now, it's probably the right place to start."),(0,o.kt)("h2",{id:"rust-developer-experience-improvements"},"Rust Developer Experience Improvements"),(0,o.kt)("p",null,"We've seen tremendous enthusiasm for the native Rust experience of Automerge, and the current Rust API is powerful and fast. Unfortunately, it's also low-level and can be difficult to work with directly. To make building Rust applications against automerge easier, Alex built ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/automerge/autosurgeon"},"Autosurgeon"),", a library that helps bind Rust data structures to Automerge documents, and we'll continue to listen to our Rust users and improve on that experience."),(0,o.kt)("h2",{id:"improved-synchronization"},"Improved Synchronization"),(0,o.kt)("p",null,"Automerge's current synchronization system has some great properties. In many cases it can bring two clients up to date with only a single round-trip each direction. That said, we see big potential to improve the CPU performance of this process, and also lots of opportunity to improve sync performance of many documents at once. We also expect to provide other optimizations our users and sponsors have requested, such as more efficient first-document loading, network compaction of related changes, and enabling something akin to a Git \u201cshallow clone\u201d for clients which don't need historical data."),(0,o.kt)("h2",{id:"built-in-branches"},"Built-in Branches"),(0,o.kt)("p",null,"While we retain the full history of Automerge documents and provide APIs to access it, we don\u2019t currently provide an efficient way to reconcile many closely related versions of a given document. This feature is particularly valuable for supporting offline collaboration in professional environments and (combined with Rich Text Support) should make it much easier for our friends in journalism organizations to build powerful and accurate editing tools."),(0,o.kt)("h2",{id:"history-management"},"History Management"),(0,o.kt)("p",null,"Today the best way to remove something from an Automerge document's history is to recreate the document from scratch or to reset to a time before that change went in. In the future, we plan to provide additional tools to give developers more control over document history. We expect this to include the ability to share just the latest version of a document (similar to a shallow clone in ",(0,o.kt)("inlineCode",{parentName:"p"},"git"),"), and to share updates that bypass changes you don't want to share (as when a developer squashes commits before publishing). "),(0,o.kt)("h1",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Automerge 2.0 is here, it\u2019s ready for you, and we\u2019re tremendously excited to share it with you. We\u2019ve made Automerge faster, more memory efficient, and we\u2019re bringing it to more platforms than ever. We\u2019re adding features, making it easier to adopt, and have begun growing a team to support it. There has never been a better moment to start building local-first software: why not ",(0,o.kt)("a",{parentName:"p",href:"https://automerge.org/docs/hello/"},"give it a try"),", and please feel welcome to ",(0,o.kt)("a",{parentName:"p",href:"https://join.slack.com/t/automerge/shared_invite/zt-e4p3760n-kKh7r3KRH1YwwNfiZM8ktw"},"join us in the Automerge Slack"),", too."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"A note to existing users: Automerge 2.0 is found on npm at ",(0,o.kt)("inlineCode",{parentName:"p"},"@automerge/automerge"),". We have deprecated the ",(0,o.kt)("inlineCode",{parentName:"p"},"automerge")," package.")))}d.isMDXComponent=!0}}]);