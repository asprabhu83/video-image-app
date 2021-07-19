/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (e) {
  function t(t) {
    for (var r, a, c = t[0], i = t[1], l = t[2], d = 0, b = []; d < c.length; d++) {
      a = c[d], Object.prototype.hasOwnProperty.call(s, a) && s[a] && b.push(s[a][0]), s[a] = 0;
    }

    for (r in i) {
      Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    }

    u && u(t);

    while (b.length) {
      b.shift()();
    }

    return o.push.apply(o, l || []), n();
  }

  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], r = !0, c = 1; c < n.length; c++) {
        var i = n[c];
        0 !== s[i] && (r = !1);
      }

      r && (o.splice(t--, 1), e = a(a.s = n[0]));
    }

    return e;
  }

  var r = {},
      s = {
    app: 0
  },
      o = [];

  function a(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, a), n.l = !0, n.exports;
  }

  a.m = e, a.c = r, a.d = function (e, t, n) {
    a.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, a.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, a.t = function (e, t) {
    if (1 & t && (e = a(e)), 8 & t) return e;
    if (4 & t && "object" === _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (a.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      a.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, a.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return a.d(t, "a", t), t;
  }, a.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, a.p = "/";
  var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
      i = c.push.bind(c);
  c.push = t, c = c.slice();

  for (var l = 0; l < c.length; l++) {
    t(c[l]);
  }

  var u = i;
  o.push([0, "chunk-vendors"]), n();
})({
  0: function _(e, t, n) {
    e.exports = n("56d7");
  },
  "56d7": function d7(e, t, n) {
    "use strict";

    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var r = n("7a23"),
        s = (n("a2f0"), {
      "class": "h-screen w-screen overflow-hidden bg-white flex flex-col"
    }),
        o = {
      "class": "relative flex flex-1 flex-row overflow-hidden"
    },
        a = {
      "class": "w-full h-full relative z-10 scrollbar text-left text-none overflow-hidden"
    };

    function c(e, t, n, c, i, l) {
      var u = Object(r["v"])("NavBar"),
          d = Object(r["v"])("Layers"),
          b = Object(r["v"])("router-view"),
          g = Object(r["v"])("Design"),
          f = Object(r["v"])("Loading");
      return Object(r["q"])(), Object(r["d"])("main", s, [Object(r["g"])(u), Object(r["g"])("section", o, [Object(r["g"])(d), Object(r["g"])("section", a, [Object(r["g"])(b)]), Object(r["g"])(g)]), l.loading ? (Object(r["q"])(), Object(r["d"])(f, {
        key: 0
      })) : Object(r["e"])("", !0)]);
    }

    n("d3b7"), n("ddb0");
    var i = {
      id: "right-panel",
      "class": "relative bg-gray-800 border-l border-gray-600 h-full w-64 flex flex-col overflow-hidden flex-shrink-0"
    },
        l = Object(r["g"])("header", {
      "class": "text-white text-xs font-medium tracking-wide flex justify-between items-center p-3 pb-0 "
    }, [Object(r["g"])("div", {
      "class": "flex items-center leading-5 py-px"
    }, "Design")], -1),
        u = {
      "class": "w-full h-full relative z-10 scrollbar text-none overflow-auto"
    },
        d = {
      "class": "items-center bg-white mb-2 text-center"
    },
        b = Object(r["g"])("option", {
      value: ""
    }, "--- Select ---", -1),
        g = {
      key: 2,
      id: "presetColors"
    };

    function f(e, t, n, s, o, a) {
      return Object(r["q"])(), Object(r["d"])("aside", i, [l, Object(r["g"])("section", u, [(Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["u"])(a.designs, function (e, n) {
        return Object(r["q"])(), Object(r["d"])("div", {
          key: n,
          "class": "mt-2"
        }, [Object(r["g"])("h5", d, Object(r["x"])(e.designLabel), 1), "select" === e.designType ? Object(r["F"])((Object(r["q"])(), Object(r["d"])("select", {
          key: 0,
          "onUpdate:modelValue": function onUpdateModelValue(t) {
            return e.designValue = t;
          },
          "class": "ml-2",
          onChange: t[1] || (t[1] = function (e) {
            return a.setValueToLayer();
          })
        }, [b, (Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["u"])(e.values, function (e, t) {
          return Object(r["q"])(), Object(r["d"])("option", {
            key: t,
            value: e.classValue
          }, Object(r["x"])(e.displayText), 9, ["value"]);
        }), 128))], 40, ["onUpdate:modelValue"])), [[r["z"], e.designValue]]) : Object(r["e"])("", !0), "color" === e.designType ? Object(r["F"])((Object(r["q"])(), Object(r["d"])("input", {
          key: 1,
          type: "color",
          id: "favcolor",
          name: "favcolor",
          "class": "ml-2",
          "onUpdate:modelValue": function onUpdateModelValue(t) {
            return e.designValue = t;
          },
          list: "presetColors",
          onChange: t[2] || (t[2] = function (e) {
            return a.setValueToLayer();
          })
        }, null, 40, ["onUpdate:modelValue"])), [[r["A"], e.designValue]]) : Object(r["e"])("", !0), "color" === e.designType ? (Object(r["q"])(), Object(r["d"])("datalist", g, [(Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["u"])(e.values, function (e, t) {
          return Object(r["q"])(), Object(r["d"])("option", {
            key: t
          }, Object(r["x"])(e.displayText), 1);
        }), 128))])) : Object(r["e"])("", !0)]);
      }), 128))])]);
    }

    n("159b");
    var p = {
      computed: {
        designs: function designs() {
          return this.$store.state.Designs;
        },
        Layers: function Layers() {
          return this.$store.state.Layers;
        }
      },
      methods: {
        setValueToLayer: function setValueToLayer() {
          var e = this;
          this.Layers.forEach(function (t) {
            t.focusable && (t.className = "", e.designs.forEach(function (e) {
              "color" === e.designType ? e.values.forEach(function (n) {
                n.displayText === e.designValue && (t.className = t.className + n.classValue + " ");
              }) : t.className = t.className + e.designValue + " ";
            }));
          });
        }
      }
    };
    p.render = f;
    var m = p,
        j = {
      id: "right-panel",
      "class": "relative bg-gray-800 border-l border-gray-600 h-full w-64 flex flex-col overflow-hidden flex-shrink-0"
    },
        h = {
      key: 0,
      "class": "rounded px-6"
    },
        O = Object(r["g"])("div", {
      "class": "sticky top-0 z-50 border-l-4 border-red-400 -ml-6 pl-6 flex items-center justify-between py-4"
    }, [Object(r["g"])("div", {
      "class": "font-semibold text-white"
    }, "Projects")], -1),
        v = Object(r["g"])("hr", {
      "class": "-mx-6"
    }, null, -1),
        x = {
      "class": "w-16"
    },
        y = {
      "class": "flex-1 pl-2"
    },
        w = {
      "class": "text-white font-semibold"
    },
        E = Object(r["g"])("div", {
      "class": "text-gray-600 font-thin"
    }, null, -1),
        k = Object(r["g"])("hr", {
      "class": "boder-b-0 my-4"
    }, null, -1);

    function L(e, t, n, s, o, a) {
      return Object(r["q"])(), Object(r["d"])("aside", j, [o.projects && o.projects.length > 0 ? (Object(r["q"])(), Object(r["d"])("div", h, [O, v, (Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["u"])(o.projects, function (e, t) {
        return Object(r["q"])(), Object(r["d"])(r["a"], {
          key: t
        }, [Object(r["g"])("div", {
          "class": "flex items-center justify-between my-4",
          onClick: function onClick(t) {
            return a.getAllFrames(e);
          }
        }, [Object(r["g"])("div", x, [Object(r["g"])("img", {
          "class": "w-12 h-12 rounded-full",
          src: a.appURI + "uploads/" + e.image_Location + "/thumb_0.jpg"
        }, null, 8, ["src"])]), Object(r["g"])("div", y, [Object(r["g"])("div", w, Object(r["x"])(e.project_name), 1), E])], 8, ["onClick"]), k], 64);
      }), 128))])) : Object(r["e"])("", !0)]);
    }

    var I = {
      data: function data() {
        return {
          projects: [],
          tableHeader: []
        };
      },
      created: function created() {
        var e = this;
        this.axios.get(this.appURI + "api/getProjects").then(function (t) {
          e.projects = t.data;
        });
      },
      methods: {
        getAllFrames: function getAllFrames(e) {
          this.$store.state.selectedProject = e, this.$router.push("/project");
        }
      },
      computed: {
        appURI: function appURI() {
          return this.$store.state.appURI;
        }
      }
    };
    I.render = L;
    var P = I,
        S = {
      "class": "flex justify-between bg-gray-900 border-b border-gray-600 text-white relative",
      id: "nav-bar"
    },
        q = Object(r["g"])("div", {
      "class": "flex-1 flex items-center"
    }, [Object(r["g"])("a", {
      href: "/",
      "class": "p-3 h-full flex items-center group border-r border-gray-600"
    }, " Image ")], -1);

    function T(e, t) {
      return Object(r["q"])(), Object(r["d"])("nav", S, [q]);
    }

    var _ = {};
    _.render = T;
    var A = _,
        R = {
      "class": "flex w-full h-full fixed block h-screen text-center bg-white opacity-75 z-50"
    },
        U = Object(r["g"])("div", {
      "class": "flex justify-around m-auto"
    }, [Object(r["g"])("span", {
      "class": "inline-flex rounded-md shadow-sm"
    }, [Object(r["g"])("button", {
      type: "button",
      "class": "inline-flex items-center px-4 py-2 border border-transparent text-base text-xl leading-6 font-medium rounded-md text-gray-700 transition ease-in-out duration-150 cursor-not-allowed",
      disabled: ""
    }, [Object(r["g"])("svg", {
      "class": "animate-spin -ml-1 mr-3 h-8 w-8 text-gray-700",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, [Object(r["g"])("circle", {
      "class": "opacity-25",
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      "stroke-width": "4"
    }), Object(r["g"])("path", {
      "class": "opacity-75",
      fill: "currentColor",
      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    })]), Object(r["f"])(" Processing ")])])], -1);

    function V(e, t) {
      return Object(r["q"])(), Object(r["d"])("div", R, [U]);
    }

    var N = {};
    N.render = V;
    var C = N,
        $ = {
      name: "App",
      components: {
        Design: m,
        NavBar: A,
        Layers: P,
        Loading: C
      },
      computed: {
        Layers: function Layers() {
          return this.$store.state.Layers;
        },
        loading: function loading() {
          return this.$store.state.loading;
        }
      }
    };
    $.render = c;
    var z = $,
        F = n("6c02"),
        M = {
      "class": "py-8 px-4"
    },
        D = Object(r["g"])("h2", {
      "class": "text-lg font-medium text-gray-900 truncate pb-8 px-1"
    }, "Create Project", -1),
        B = {
      method: "post",
      action: "",
      enctype: "multipart/form-data",
      ref: "videoForm",
      "class": "w-full max-w-lg"
    },
        G = {
      "class": "w-full flex flex-wrap -mx-3 mb-6"
    },
        H = {
      "class": "w-1/2  px-3 mb-6 "
    },
        X = {
      "class": "w-1/3  px-3 mb-6 md:mb-0"
    },
        Y = {
      "class": "w-60 flex inline-flex items-center items-center px-4 py-1.5 bg-white hover:bg-gray-600 rounded-md shadow-md tracking-wide font-medium uppercase border border-blue cursor-pointer hover:bg-white-600 hover:text-white text-gray-600 ease-linear transition-all duration-150"
    },
        J = Object(r["g"])("span", {
      "class": "text-base leading-normal px-2"
    }, "Choose Video", -1),
        W = {
      key: 0,
      "class": "flex flex-wrap -mx-4 -mb-8"
    };

    function K(e, t, n, s, o, a) {
      var c = Object(r["v"])("font-awesome-icon");
      return Object(r["q"])(), Object(r["d"])("section", M, [D, Object(r["g"])("form", B, [Object(r["g"])("div", G, [Object(r["g"])("div", H, [Object(r["F"])(Object(r["g"])("input", {
        type: "text",
        "class": "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
        name: "title",
        "onUpdate:modelValue": t[1] || (t[1] = function (e) {
          return o.formData.title = e;
        }),
        placeholder: "Enter Project Name"
      }, null, 512), [[r["A"], o.formData.title]])]), Object(r["g"])("div", X, [Object(r["g"])("label", Y, [Object(r["g"])(c, {
        icon: "cloud-upload-alt",
        size: "1x"
      }), J, Object(r["g"])("input", {
        type: "file",
        "class": "hidden",
        name: "video",
        onChange: t[2] || (t[2] = function () {
          return a.onFileUpload && a.onFileUpload.apply(a, arguments);
        })
      }, null, 32)])])])], 512), a.galleries ? (Object(r["q"])(), Object(r["d"])("div", W, [(Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["u"])(a.galleries, function (e, t) {
        return Object(r["q"])(), Object(r["d"])("div", {
          "class": "md:w-1/4 px-4 mb-8",
          key: t
        }, [Object(r["g"])("img", {
          "class": "rounded shadow-md",
          src: e,
          alt: ""
        }, null, 8, ["src"])]);
      }), 128))])) : Object(r["e"])("", !0)]);
    }

    var Q = n("1da1"),
        Z = (n("96cf"), {
      name: "App",
      data: function data() {
        return {
          formData: {
            title: "",
            files: Object
          },
          projects: []
        };
      },
      methods: {
        createLayer: function createLayer() {
          var e = this.$store.state.Layers.length + 1;
          this.$store.commit("addLayers", {
            layerName: "Layer" + e,
            textLayer: "Text Layer" + e,
            imgSrc: "./ResumePart6.jpg",
            editable: !1,
            focusable: !1,
            className: ""
          });
        },
        onFileUpload: function onFileUpload(e) {
          var t = this;
          return Object(Q["a"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function e() {
            var n, r, s;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function (e) {
              while (1) {
                switch (e.prev = e.next) {
                  case 0:
                    return n = t.$refs.videoForm, r = new FormData(n), s = [], t.$store.state.loading = !0, e.next = 6, t.axios.post(t.appURI + "/api/upload", r).then(function (e) {
                      e.data.files.forEach(function (e) {
                        s.push(t.appURI + "uploads/" + e);
                      });
                    });

                  case 6:
                    t.$store.commit("GET_GALLERIES", {
                      galArray: s
                    });

                  case 7:
                  case "end":
                    return e.stop();
                }
              }
            }, e);
          }))();
        }
      },
      computed: {
        Layers: function Layers() {
          return this.$store.state.Layers;
        },
        galleries: function galleries() {
          return this.$store.state.galleries;
        },
        appURI: function appURI() {
          return this.$store.state.appURI;
        }
      }
    });
    Z.render = K;
    var ee = Z,
        te = {
      key: 0,
      "class": "bg-gray-100 w-full rounded py-8 px-4"
    },
        ne = {
      "class": "flex justify-left items-center my-4"
    },
        re = {
      "class": "bg-white p-16 text-left mx-auto border"
    },
        se = {
      "class": "text-lg font-medium text-gray-900 truncate pb-8 px-1"
    },
        oe = {
      "class": "flex flex-wrap -mx-4 -mb-8"
    };

    function ae(e, t, n, s, o, a) {
      return a.project ? (Object(r["q"])(), Object(r["d"])("div", te, [Object(r["g"])("ul", ne, [(Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["u"])(o.tabs, function (e, t) {
        return Object(r["q"])(), Object(r["d"])("li", {
          key: t,
          "class": ["cursor-pointer py-2 px-4 text-gray-500 border-b-8", o.activeTab === t ? "text-gray-700 border-gray-700" : ""],
          onClick: function onClick(e) {
            return o.activeTab = t;
          },
          textContent: Object(r["x"])(e)
        }, null, 10, ["onClick", "textContent"]);
      }), 128))]), Object(r["g"])("div", re, [Object(r["F"])(Object(r["g"])("div", null, [Object(r["g"])("h2", se, Object(r["x"])(a.project.project_name), 1), Object(r["g"])("div", oe, [(Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["u"])(a.project.video_duration, function (e, t) {
        return Object(r["q"])(), Object(r["d"])("div", {
          "class": "md:w-1/4 px-4 mb-8",
          key: t
        }, [Object(r["g"])("img", {
          "class": "rounded shadow-md",
          src: a.appURI + "uploads/" + a.project.image_Location + "/thumb_" + e + ".jpg",
          alt: "",
          onClick: function onClick(t) {
            return a.editImage(e, a.project);
          }
        }, null, 8, ["src", "onClick"])]);
      }), 128))])], 512), [[r["B"], 0 === o.activeTab]]), Object(r["F"])(Object(r["g"])("div", null, "Content 2", 512), [[r["B"], 1 === o.activeTab]])])])) : Object(r["e"])("", !0);
    }

    var ce = {
      name: "Grid",
      data: function data() {
        return {
          activeTab: 0,
          tabs: ["Video Frames", "Attributes"],
          tableHeader: []
        };
      },
      computed: {
        project: function project() {
          return this.$store.state.selectedProject;
        },
        appURI: function appURI() {
          return this.$store.state.appURI;
        }
      },
      methods: {
        editImage: function editImage(e, t) {
          this.$store.state.selectedImage = e, this.$router.push("/editor");
        }
      }
    };
    ce.render = ae;
    var ie = ce,
        le = {
      "class": "w-full"
    };

    function ue(e, t, n, s, o, a) {
      var c = Object(r["v"])("bb-component"),
          i = Object(r["v"])("carousal");
      return Object(r["q"])(), Object(r["d"])("div", le, [Object(r["g"])(c, {
        src: a.imgSrc
      }, null, 8, ["src"]), Object(r["g"])(i)]);
    }

    function de(e, t, n, s, o, a) {
      return o.imgsize ? (Object(r["q"])(), Object(r["d"])("svg", {
        key: 0,
        viewBox: "0 0 " + o.imgsize.width + " " + o.imgsize.height,
        id: "viewport",
        onload: "makeDraggable"
      }, [Object(r["g"])("image", {
        "xlink:href": n.src,
        width: "100%",
        height: "100%"
      }, null, 8, ["xlink:href"]), (Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["u"])(e.bbs, function (e, t) {
        return Object(r["q"])(), Object(r["d"])("rect", {
          key: "bb" + t,
          x: e.left * o.imgsize.width || "0",
          y: e.top * o.imgsize.height || "0",
          width: e.width * o.imgsize.width || "0",
          height: e.height * o.imgsize.height || "0",
          fill: "none",
          stroke: n.bbcolor || "#EF5350",
          "stroke-width": n.bbstroke || "2",
          "vector-effect": "non-scaling-stroke",
          "shape-rendering": "crispEdges"
        }, null, 8, ["x", "y", "width", "height", "stroke", "stroke-width"]);
      }), 128))], 8, ["viewBox"])) : Object(r["e"])("", !0);
    }

    n("99af");
    var be = {
      props: ["src", "bbcolor", "bbstroke"],
      data: function data() {
        return {
          imgsize: null,
          svgElement: Object,
          svgPoint: Object,
          boundingBoxes: [],
          oneRectangle: {},
          mousePosition: {},
          start: {},
          isDrawing: !1,
          baseImage: Object,
          selectedElement: !1,
          offset: null,
          transform: null,
          annotation: {
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            printCoordinates: function printCoordinates() {
              console.log("X: ".concat(this.x, "px, Y: ").concat(this.y, "px, Width: ").concat(this.w, "px, Height: ").concat(this.h, "px"));
            }
          }
        };
      },
      mounted: function mounted() {
        var e = this;
        return Object(Q["a"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function t() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function (t) {
            while (1) {
              switch (t.prev = t.next) {
                case 0:
                  if (!e.src) {
                    t.next = 4;
                    break;
                  }

                  return t.next = 3, e.getImageSize(e.src).then(function (t) {
                    e.imgsize = t;
                  });

                case 3:
                  e.createPoints();

                case 4:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))();
      },
      methods: {
        handleMouseDown: function handleMouseDown(e) {
          var t = this;

          if (e.target.classList.contains("draggable")) {
            this.selectedElement = e.target, this.offset = this.getMousePosition(e);
            var n = this.selectedElement.transform.baseVal;

            if (0 === n.length || n.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE) {
              var r = this.svgElement.createSVGTransform();
              r.setTranslate(0, 0), this.selectedElement.transform.baseVal.insertItemBefore(r, 0);
            }

            this.transform = n.getItem(0), this.offset.x -= this.transform.matrix.e, this.offset.y -= this.transform.matrix.f;

            var s = function s(e) {
              if (t.selectedElement) {
                e.preventDefault();
                var n = t.getMousePosition(e);
                t.transform.setTranslate(n.x - t.offset.x, n.y - t.offset.y);
              }
            },
                o = function o(e) {
              t.selectedElement = null;
            };

            this.svgElement.addEventListener("mousemove", s), this.svgElement.addEventListener("mouseup", o), this.svgElement.addEventListener("mouseleave", o);
          } else {
            var a = document.createElementNS("http://www.w3.org/2000/svg", "rect"),
                c = this.svgPoint(this.svgElement, e.clientX, e.clientY),
                i = function i(e) {
              var n = t.svgPoint(t.svgElement, e.clientX, e.clientY),
                  r = Math.abs(n.x - c.x),
                  s = Math.abs(n.y - c.y);
              n.x > c.x && (n.x = c.x), n.y > c.y && (n.y = c.y), a.setAttributeNS(null, "x", n.x), a.setAttributeNS(null, "y", n.y), a.setAttributeNS(null, "width", r), a.setAttributeNS(null, "height", s), a.setAttributeNS(null, "stroke", "#EF5350"), a.setAttributeNS(null, "fill", "#EF5350"), a.setAttributeNS(null, "fill-opacity", "0.4"), a.setAttributeNS(null, "stroke-width", "2"), a.setAttributeNS(null, "vector-effect", "non-scaling-stroke"), a.setAttributeNS(null, "shape-rendering", "crispEdges"), a.setAttributeNS(null, "class", "draggable"), t.svgElement.appendChild(a), c.x = n.x, c.y = n.y;
            },
                l = function e(n) {
              var r = t.svgPoint(t.svgElement, n.clientX, n.clientY),
                  s = Math.abs(r.x - c.x),
                  o = Math.abs(r.y - c.y),
                  a = Object.create(t.annotation);
              a.x = c.x, a.y = c.y, a.w = s, a.h = o, t.boundingBoxes.push(a), console.log(t.boundingBoxes), a.printCoordinates(), t.svgElement.removeEventListener("mousemove", i), t.svgElement.removeEventListener("mouseup", e);
            };

            this.svgElement.addEventListener("mousemove", i), this.svgElement.addEventListener("mouseup", l);
          }
        },
        getMousePosition: function getMousePosition(e) {
          var t = this.svgElement.getScreenCTM();
          return {
            x: (e.clientX - t.e) / t.a,
            y: (e.clientY - t.f) / t.d
          };
        },
        createPoints: function createPoints() {
          var e = this;
          this.svgElement = document.querySelector("#viewport"), this.svgPoint = function (t, n, r) {
            var s = e.svgElement.createSVGPoint();
            return s.x = n, s.y = r, s.matrixTransform(t.getScreenCTM().inverse());
          }, this.svgElement.addEventListener("mousedown", this.handleMouseDown);
        },
        getImageSize: function getImageSize(e) {
          return new Promise(function (t) {
            var n = new Image();
            n.onload = function () {
              t({
                width: n.width,
                height: n.height
              });
            }, n.src = e;
          });
        }
      }
    };
    be.render = de;
    var ge = be;

    function fe(e, t, n, s, o, a) {
      var c = this,
          i = Object(r["v"])("slide"),
          l = Object(r["v"])("navigation"),
          u = Object(r["v"])("carousel", !0);
      return a.project ? (Object(r["q"])(), Object(r["d"])(u, {
        key: 0,
        "items-to-show": "7",
        "class": "my-2 m-auto w-11/12"
      }, {
        addons: Object(r["E"])(function () {
          return [Object(r["g"])(l)];
        }),
        "default": Object(r["E"])(function () {
          return [(Object(r["q"])(!0), Object(r["d"])(r["a"], null, Object(r["u"])(a.project.video_duration, function (e) {
            return Object(r["q"])(), Object(r["d"])(i, {
              key: e
            }, {
              "default": Object(r["E"])(function () {
                return [Object(r["g"])("img", {
                  src: a.appURI + "/uploads/" + c.project.image_Location + "/thumb_" + e + ".jpg",
                  "class": "w-40"
                }, null, 8, ["src"])];
              }),
              _: 2
            }, 1024);
          }), 128))];
        }),
        _: 1
      })) : Object(r["e"])("", !0);
    }

    n("4001");
    var pe = n("0b81"),
        me = {
      name: "App",
      components: {
        Carousel: pe["a"],
        Slide: pe["c"],
        Navigation: pe["b"]
      },
      computed: {
        project: function project() {
          return this.$store.state.selectedProject;
        },
        number: function number() {
          return this.$store.state.selectedImage;
        },
        appURI: function appURI() {
          return this.$store.state.appURI;
        }
      }
    };
    me.render = fe;
    var je = me,
        he = {
      components: {
        carousal: je,
        bbComponent: ge
      },
      computed: {
        project: function project() {
          return this.$store.state.selectedProject;
        },
        number: function number() {
          return this.$store.state.selectedImage;
        },
        appURI: function appURI() {
          return this.$store.state.appURI;
        },
        imgSrc: function imgSrc() {
          return this.appURI + "uploads/" + this.project.image_Location + "/thumb_" + this.number + ".jpg";
        }
      }
    };
    he.render = ue;
    var Oe = he,
        ve = [{
      path: "/",
      name: "Home",
      component: ee
    }, {
      path: "/project",
      name: "Grid",
      component: ie
    }, {
      path: "/editor",
      name: "Editor",
      component: Oe
    }],
        xe = Object(F["a"])({
      history: Object(F["b"])("/"),
      routes: ve
    }),
        ye = xe,
        we = n("5502"),
        Ee = Object(we["a"])({
      state: {
        galleries: [],
        loading: !1,
        projects: [],
        selectedProject: {},
        selectedImage: 0,
        appURI: ""
      },
      mutations: {
        GET_GALLERIES: function GET_GALLERIES(e, t) {
          e.galleries = t.galArray, e.loading = !1;
        }
      },
      actions: {},
      modules: {}
    }),
        ke = n("ecee"),
        Le = n("c074"),
        Ie = n("ad3d"),
        Pe = n("bc3a"),
        Se = n.n(Pe),
        qe = n("2106"),
        Te = n.n(qe);
    ke["c"].add(Le["b"], Le["a"]);

    var _e = Object(r["c"])(z);

    _e.component("font-awesome-icon", Ie["a"]), _e.config.productionTip = !1, _e.use(Ee).use(ye).use(Te.a, Se.a).mount("#app"), console.log(Object({
      NODE_ENV: "production",
      VUE_APP_API_URI_PREFIX: "",
      VUE_APP_THEME: "theme2",
      VUE_APP_TITLE: "Image Annotate v1.0",
      BASE_URL: "/"
    }));
  },
  a2f0: function a2f0(e, t, n) {}
});

/***/ }),

/***/ "./resources/css/chunk-vendors.d15afbfd.css":
/*!**************************************************!*\
  !*** ./resources/css/chunk-vendors.d15afbfd.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0,
/******/ 			"css/chunk-vendors.d15afbfd": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app","css/chunk-vendors.d15afbfd"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/chunk-vendors.d15afbfd"], () => (__webpack_require__("./resources/css/chunk-vendors.d15afbfd.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app","css/chunk-vendors.d15afbfd"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;