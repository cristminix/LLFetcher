console.log("app.jsx");
let appCreated = false;
const reactRootId = "content-script-root";
const appContainerId = "content-script-app";
const appRef = React.createRef(null);
let appInstance = null;
let publicRoutePath = null;
const { useState, useEffect } = React;
$.expr[":"].containsRegex = $.expr.createPseudo(function(pattern) {
  var regex = new RegExp(pattern, "i");
  return function(elem) {
    return regex.test($(elem).text());
  };
});
const CheckerTag = ({ children, hasChildren }) => {
  const cls = hasChildren ? "course-checker" : "course-checker-last";
  return /* @__PURE__ */ React.createElement("span", {
    className: cls
  }, children);
};
const CoursePageChecker = ({ validCoursePage }) => {
  const [checkers, setCheckers] = useState("[]");
  const [tree, setTree] = useState(0);
  const maxTree = 10;
  useEffect(() => {
    console.log(validCoursePage);
    console.log(chrome);
    let tree_ = tree;
    tree_ += 1;
    setTree(tree_);
    buildTree(tree_);
  }, [validCoursePage]);
  const buildTree = (p) => {
    const newCheckers = [];
    let newCheckersP = newCheckers;
    console.log(p);
    let childrens = [];
    let i = 0;
    while (p--) {
      console.log(p);
      if (newCheckersP.length === 0) {
        childrens.push([]);
        newCheckersP.push(childrens[i]);
        newCheckersP = childrens[i];
        i++;
      }
    }
    newCheckersStr = JSON.stringify(newCheckers);
    console.log(newCheckersStr);
    setCheckers(newCheckersStr);
  };
  const buildTreeTag = (checker2) => {
    const finalText = !validCoursePage ? "This is not course page" : "";
    return checker2.length ? /* @__PURE__ */ React.createElement(CheckerTag, {
      hasChildren: true
    }, buildTreeTag(checker2.pop())) : /* @__PURE__ */ React.createElement(CheckerTag, {
      hasChildren: false
    }, finalText);
  };
  const checker = JSON.parse(checkers);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, buildTreeTag(checker));
};
class Action_csa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validCoursePage: false,
      slug: "",
      outputScriptCls: "default",
      outputScript: "",
      display: "flex"
    };
  }
  async getCourseInfo() {
    return getCourseInfo(this.state.slug);
  }
  async validCoursePage() {
    return this.state.validCoursePage;
  }
  async isLogin() {
    const signInBtnsDetect = $('a:containsRegex("sign in")');
    if (signInBtnsDetect.length > 0) {
      return false;
    }
    const meBtnDetect = $("div.nav-bar__item-text:contains(Me)");
    if (meBtnDetect.length > 0) {
      return true;
    }
    return true;
  }
  async getCookie() {
    return cookiesToJSON();
  }
  async validCoursePageAuto() {
    return this.state.validCoursePage;
  }
  async getCourseToc(url) {
    let resultCode = 4;
    try {
      const res = await fetch(`${url}?rand=${new Date().getTime()}`);
      const text = await res.text();
      resultCode = 3;
      const parsed = parseToc(text);
      console.log(parsed);
      return parsed;
    } catch (e) {
      console.log(e);
    }
  }
  async getCourseSections(urn) {
    return getCourseSections(urn);
  }
}
class ContentScriptApp extends Action_csa {
  inputScriptRef = null;
  constructor(props) {
    super(props);
    this.inputScriptRef = React.createRef(null);
  }
  getData() {
    console.log(chrome);
    createDataCodes(this.state.slug);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ display: "none" });
    }, 5e3);
  }
  async runScript() {
    let is = {
      cmd: "getCourseInfo",
      param: null,
      ocls: `os-${new Date().getTime()}`
    };
    try {
      is = JSON.parse(this.inputScriptRef.current.value);
      const method = is.cmd;
      const param = is.param || null;
      const ocls = is.ocls || "default";
      if (typeof this[method] === "function") {
        const result = await this[method](param);
        this.setState({
          outputScript: JSON.stringify(result, null, 4),
          outputScriptCls: ocls
        });
      } else {
        console.error(`ContentScriptApp doesnt have any method called ${method}`);
      }
      console.log(is);
    } catch (e) {
      console.error(e);
    }
  }
  onInputScriptChange(evt) {
  }
  render() {
    const { display } = this.state;
    const inputScriptDefaultValue = JSON.stringify({
      cmd: "getCourseInfo",
      param: null,
      ocls: `os-${new Date().getTime()}`
    });
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      id: appContainerId,
      style: { display, flexDirection: "column", width: "400px", position: "absolute", background: "#000", color: "#fff", zIndex: 2001, opacity: 0.7, fontFamily: "monospace", marginTop: "3.1em", marginLeft: "22%", padding: "1em" }
    }, this.state.validCoursePage ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", null, this.state.slug)) : "Extension is ready", /* @__PURE__ */ React.createElement("textarea", {
      id: "input-script",
      style: { color: "#fff" },
      defaultValue: inputScriptDefaultValue,
      onChange: (evt) => this.onInputScriptChange(evt),
      ref: this.inputScriptRef
    }), /* @__PURE__ */ React.createElement("textarea", {
      id: "output-script",
      style: { color: "#fff" },
      className: this.state.outputScriptCls,
      onChange: (f) => f,
      value: this.state.outputScript
    }), /* @__PURE__ */ React.createElement("div", {
      style: { width: "100%", textAlign: "right" }
    }, /* @__PURE__ */ React.createElement("button", {
      style: { padding: "1em", background: "#fff", color: "#000" },
      id: "exec-button",
      onClick: (e) => {
        this.runScript();
      }
    }, "Execute Page Fn")), /* @__PURE__ */ React.createElement(CoursePageChecker, {
      validCoursePage: this.state.validCoursePage
    })));
  }
}
const main = async () => {
  attachRouteChangesEvent(async (path) => {
    publicRoutePath = path;
    console.log(`URL changed to ${path}`);
    if (!appInstance) {
      await waitForElm(`#${appContainerId}`);
      appInstance = appRef.current;
    }
    const validCoursePage = isCoursePage();
    const slug = getCourseSlugByPath(path);
    appInstance.setState({ validCoursePage, slug });
    if (validCoursePage) {
      pauseVideo();
    }
  });
  createReactRootElement();
  const el = await waitForElm(`#${reactRootId}`);
  const root = ReactDOM.createRoot(el);
  root.render(/* @__PURE__ */ React.createElement(ContentScriptApp, {
    ref: appRef
  }));
};
main();
