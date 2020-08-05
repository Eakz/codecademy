(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[218],{cFwM:function(e,t,o){"use strict";o.d(t,"a",function(){return $}),o.d(t,"b",function(){return q.a});var r=o("q1tI"),n=o.n(r),s=o("fhzG"),a=o.n(s),i=o("pruR"),c=o("TSYQ"),u=o.n(c),l="courseNavButtonContainer__2Hwmek15R0ChO4zMDSUiNe",p="courseNavButton__1TaTVvi920_GfVQLe4MNbm",f="leftArrowIcon__19auy-XWZ0yJtHVnNhsKbj",_=function CoursePageButton(e){var t=e.courseTitle,o=e.url,r=u()(f,"new-cc-icon","icon-heavyleftarrow");return n.a.createElement("div",{className:l},t&&o?n.a.createElement("a",{href:o,className:p},n.a.createElement("span",{className:r}),t):null)},v=o("veT5"),y="lessonAuthors__3b8ArvmppYIi4bb6ciYI9s",h="lessonAuthorLink__1noj4u7xBF5-Qeygq_hL1G",m=function Authors(e){var t=e.authors,o=void 0===t?[]:t;return o.length>0?n.a.createElement("div",{className:y},n.a.createElement("span",null,"By "),o.map(function(e,t){return n.a.createElement("span",{key:e},n.a.createElement("a",{className:h,target:"_blank",href:"/".concat(e),rel:"noopener noreferrer"},e),t<o.length-1?", ":"")})):null},g=o("/MKj"),d=o("Rab/"),N="groupHeading__8vd9L8QPuPHJbdyPLbrMs",b="navButton__1LnCf0Nz-p8fUiWXJ8j6ID",C="activeListItem__3cqHsodqd_DwQVPzRDp2UY",E="completedListItem__dprwOnLLcMeA7xjpg2Lpw",O="navButtonIcon__1fTQiWP1OucamdARpFSCY4",P="lockedListItem__gtnOckHHSbFi0qwtm0EvU",w="listItemTitle__1ULs9TSLKsTAuzOvAGV_pN",k="exerciseSection__YkgNw3d5haz7SBRKhUNgj";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function isCompleted(e,t){var o=e.progress,r=o.completed,n=o.exercises_completed>=t+1;return r||n}function isInProgressExercise(e,t){return e.progress.exercises_completed===t}var S=function(e){function Exercises(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Exercises),_possibleConstructorReturn(this,_getPrototypeOf(Exercises).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Exercises,r["Component"]),function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(Exercises,[{key:"render",value:function render(){var e=this,t=this.props.currentExercise;return n.a.createElement("section",{className:k},n.a.createElement("div",{className:N},"Exercises"),this.props.exercises.map(function(o,r){var s=isCompleted(e.props,r),a=t.id===o.id,i=isInProgressExercise(e.props,r),c=function isLockedExercise(e,t){return!e.unlockAll&&!isInProgressExercise(e,t)&&!isCompleted(e,t)}(e.props,r),l=u()(b,{[E]:s||e.props.unlockAll,[C]:a,[P]:c}),p=u()(O,"fcn-icon",{"fcn-icon-checkmark":s||e.props.unlockAll,"fcn-icon-inProgress":i&&!e.props.unlockAll,"fcn-icon-lock":c});return n.a.createElement("button",{onClick:function onClick(){c||(e.props.navigate({exerciseIndex:r}),e.props.onRequestClose())},className:l,key:"".concat(e.props.currentLesson.id,"-").concat(o.id)},n.a.createElement("div",{className:w},"".concat(r+1,".")," ",o.title),n.a.createElement("i",{className:p}))}))}}]),Exercises}(),j=Object(g.connect)(function mapStateToProps(e){return{locationQuery:Object(d.i)(e)}})(S),x="heading__37r3mjk_uVho7bFZrrjHJ",L="subheading__1gomEUlRHmsbpF5rmlv1wD",T="description__qoKffaAVmUOcQIPER-ZiC",B=function Lesson(e){var t=e.authors,o=e.currentLesson,r=e.exercises,s=e.progress,a=e.currentExercise,i=e.onRequestClose,c=e.unlockAll,u=e.navigate;return n.a.createElement("div",null,n.a.createElement("h1",{className:x},o.title),n.a.createElement("h3",{className:L},"LESSON"),n.a.createElement(m,{authors:t}),n.a.createElement(v.a,{className:T,text:o.description||""}),n.a.createElement(j,{navigate:u,currentLesson:o,exercises:r,progress:s,currentExercise:a,onRequestClose:i,unlockAll:c}))},M=function Project(e){var t=e.project;return n.a.createElement("div",null,n.a.createElement("h1",{className:x},t.title),n.a.createElement("h3",{className:L},"PROJECT"),n.a.createElement(v.a,{className:T,text:t.description}))},R={modalOverlay:"modalOverlay__hh4pyyLjakjv1qSsTMDU4",modal:"modal__E4iY_K3NyCDx57euE7d5",slideInLeft:"slideInLeft__ymWocB4dX3uDjGE_5_B0M",modalIsClosing:"modalIsClosing__2yDcA2j_TFC7WqapdYKW-W",slideOutLeft:"slideOutLeft__3nW8i81Y38brSdvPeMXVF5"};function CourseNavigator_typeof(e){return(CourseNavigator_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function CourseNavigator_defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function CourseNavigator_possibleConstructorReturn(e,t){return!t||"object"!==CourseNavigator_typeof(t)&&"function"!=typeof t?function CourseNavigator_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function CourseNavigator_getPrototypeOf(e){return(CourseNavigator_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function CourseNavigator_setPrototypeOf(e,t){return(CourseNavigator_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var A=300,I=function(e){function CourseNavigator(){var e,t;!function CourseNavigator_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CourseNavigator);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(t=CourseNavigator_possibleConstructorReturn(this,(e=CourseNavigator_getPrototypeOf(CourseNavigator)).call.apply(e,[this].concat(r)))).state={isClosing:!1},t.handleRequestClose=function(){t.setState({isClosing:!0}),setTimeout(function(){t.setState({isClosing:!1}),t.props.onRequestClose()},A)},t}return function CourseNavigator_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&CourseNavigator_setPrototypeOf(e,t)}(CourseNavigator,r["Component"]),function CourseNavigator_createClass(e,t,o){return t&&CourseNavigator_defineProperties(e.prototype,t),o&&CourseNavigator_defineProperties(e,o),e}(CourseNavigator,[{key:"renderNavigationContent",value:function renderNavigationContent(){switch(this.props.currentType){case"lesson":return n.a.createElement(B,{navigate:this.props.navigate,currentLesson:this.props.currentLesson,authors:this.props.authors,progress:this.props.contentItemProgresses[this.props.currentLesson.id],exercises:this.props.exercises,currentExercise:this.props.currentExercise,onRequestClose:this.props.onRequestClose,unlockAll:this.props.unlockAll});case"project":return n.a.createElement(M,{project:this.props.project});default:return null}}},{key:"render",value:function render(){return n.a.createElement(i.a,{zIndex:13,isOpen:this.props.isOpen,onRequestClose:this.handleRequestClose},n.a.createElement("div",{className:"".concat(R.modal," ").concat(this.state.isClosing?R.modalIsClosing:"")},n.a.createElement("div",{className:R.modalContent},n.a.createElement(_,{url:this.props.titleRoute,courseTitle:this.props.entityTitle}),this.renderNavigationContent())))}}]),CourseNavigator}(),q=o("wXPd"),D=o("TP7S"),F=o.n(D),z=o("6vz9"),H=o.n(z),U="button__3Jc0rbtkGjsEf-_JbP3O0P",W="active__3yYx5mZS76aQqXh6Sw3TEh",Y="exerciseTitle__1CoQ5cuqs5PcHOd61lMwhY",K="burger__wZ5nFw0eG5b_lWWthdzea",Q="close__3CcwpumRFau4EmdLS385fk";function NavMenuButton_typeof(e){return(NavMenuButton_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function NavMenuButton_defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function NavMenuButton_possibleConstructorReturn(e,t){return!t||"object"!==NavMenuButton_typeof(t)&&"function"!=typeof t?function NavMenuButton_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function NavMenuButton_getPrototypeOf(e){return(NavMenuButton_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function NavMenuButton_setPrototypeOf(e,t){return(NavMenuButton_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var G=function(e){function NavMenuButton(){var e,t;!function NavMenuButton_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NavMenuButton);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(t=NavMenuButton_possibleConstructorReturn(this,(e=NavMenuButton_getPrototypeOf(NavMenuButton)).call.apply(e,[this].concat(r)))).state={active:t.props.active,close:t.props.active},t.active=function(e){t.setState({active:F()(e)?t.props.active:e})},t.close=function(e){t.setState({close:F()(e)?t.props.active:e})},t.handleClick=function(e){e.preventDefault(),t.props.onClick&&t.props.onClick(e)},t}return function NavMenuButton_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&NavMenuButton_setPrototypeOf(e,t)}(NavMenuButton,n.a.Component),function NavMenuButton_createClass(e,t,o){return t&&NavMenuButton_defineProperties(e.prototype,t),o&&NavMenuButton_defineProperties(e,o),e}(NavMenuButton,[{key:"UNSAFE_componentWillReceiveProps",value:function UNSAFE_componentWillReceiveProps(e){e.active&&!this.props.active?(this.active(e.active),H()(this.close,150)):e.active!==this.props.active&&(this.close(e.active),H()(this.active,150))}},{key:"render",value:function render(){var e=this.props.className,t=u()({[W]:this.state.active,[Q]:this.state.close},U,e);return n.a.createElement("button",{type:"button",onClick:this.handleClick,className:t},n.a.createElement("span",{className:K}),n.a.createElement("span",{"data-testid":"course-navigator",className:Y},this.props.title))}}]),NavMenuButton}();G.defaultProps={active:!1};var V=G,J="disabled__1rpcEMmxdzLYJhY71WOLM1",X="footer__25PvK9FVvEnZemeDogAy1H",Z="footerTab__3GxBssTa6f_5EGjIr87-9o",$=a()({displayName:"Footer",getDefaultProps:function getDefaultProps(){return{disabled:!1}},getInitialState:function getInitialState(){return{showNavigation:!1}},getCourseNavigatorToggle:function getCourseNavigatorToggle(){return n.a.createElement(q.a,{position:"left"},n.a.createElement("div",{className:Z},n.a.createElement(V,{title:this.props.title,onClick:this.toggleCourseNavigator,active:this.state.showNavigation})))},getCourseNavigator:function getCourseNavigator(){return n.a.createElement(I,{onRequestClose:this.toggleCourseNavigator,currentType:this.props.currentType,currentLesson:this.props.currentLesson,currentExercise:this.props.currentExercise,exercises:this.props.exercises,params:this.props.params,isOpen:this.state.showNavigation,navigate:this.props.navigate,titleRoute:this.props.titleRoute,contentItemProgresses:this.props.contentItemProgresses,unlockAll:this.props.unlockAll,authors:this.props.authors,project:this.props.project,entityTitle:this.props.entityTitle})},toggleCourseNavigator:function toggleCourseNavigator(){this.setState(function(e){return{showNavigation:!e.showNavigation}})},render:function render(){var e=u()({[X]:!0,[J]:this.props.disabled},this.props.className);return n.a.createElement(q.b,{className:e},this.getCourseNavigatorToggle(),this.props.children,this.getCourseNavigator())}});t.c=$}}]);
//# sourceMappingURL=218.8941239ce7bae5b8c65a.chunk.js.map