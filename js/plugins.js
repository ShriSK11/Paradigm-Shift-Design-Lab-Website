/*
  jQuery v1.12.4
  jQuery UI v1.9.2
  multiscroll.js 0.1.6 Beta
  Vegas v2.3.1
  Intense Images v1.0.3
  Countdown
  jQuery OwlCarousel v1.3.3
  Morphext v2.4.7
  jquery.mb.YTPlayer v3.0.6
  Vide v0.5.0
  device v0.2.7
  Bootstrap v3.3.7
  styleswitch [for demonstration purposes only]
*/


/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
! function (a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a)
  } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = a.document,
    e = c.slice,
    f = c.concat,
    g = c.push,
    h = c.indexOf,
    i = {},
    j = i.toString,
    k = i.hasOwnProperty,
    l = {},
    m = "1.12.4",
    n = function (a, b) {
      return new n.fn.init(a, b)
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (a, b) {
      return b.toUpperCase()
    };
  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function () {
      return e.call(this)
    },
    get: function (a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
    },
    pushStack: function (a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b
    },
    each: function (a) {
      return n.each(this, a)
    },
    map: function (a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b)
      }))
    },
    slice: function () {
      return this.pushStack(e.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq(-1)
    },
    eq: function (a) {
      var b = this.length,
        c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    },
    end: function () {
      return this.prevObject || this.constructor()
    },
    push: g,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function () {
    var a, b, c, d, e, f, g = arguments[0] || {},
      h = 1,
      i = arguments.length,
      j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
      if (null != (e = arguments[h]))
        for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
    return g
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (a) {
      throw new Error(a)
    },
    noop: function () {},
    isFunction: function (a) {
      return "function" === n.type(a)
    },
    isArray: Array.isArray || function (a) {
      return "array" === n.type(a)
    },
    isWindow: function (a) {
      return null != a && a == a.window
    },
    isNumeric: function (a) {
      var b = a && a.toString();
      return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
    },
    isEmptyObject: function (a) {
      var b;
      for (b in a) return !1;
      return !0
    },
    isPlainObject: function (a) {
      var b;
      if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
      try {
        if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
      } catch (c) {
        return !1
      }
      if (!l.ownFirst)
        for (b in a) return k.call(a, b);
      for (b in a);
      return void 0 === b || k.call(a, b)
    },
    type: function (a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
    },
    globalEval: function (b) {
      b && n.trim(b) && (a.execScript || function (b) {
        a.eval.call(a, b)
      })(b)
    },
    camelCase: function (a) {
      return a.replace(p, "ms-").replace(q, r)
    },
    nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    },
    each: function (a, b) {
      var c, d = 0;
      if (s(a)) {
        for (c = a.length; c > d; d++)
          if (b.call(a[d], d, a[d]) === !1) break
      } else
        for (d in a)
          if (b.call(a[d], d, a[d]) === !1) break;
      return a
    },
    trim: function (a) {
      return null == a ? "" : (a + "").replace(o, "")
    },
    makeArray: function (a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
    },
    inArray: function (a, b, c) {
      var d;
      if (b) {
        if (h) return h.call(b, a, c);
        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
          if (c in b && b[c] === a) return c
      }
      return -1
    },
    merge: function (a, b) {
      var c = +b.length,
        d = 0,
        e = a.length;
      while (c > d) a[e++] = b[d++];
      if (c !== c)
        while (void 0 !== b[d]) a[e++] = b[d++];
      return a.length = e, a
    },
    grep: function (a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
      return e
    },
    map: function (a, b, c) {
      var d, e, g = 0,
        h = [];
      if (s(a))
        for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
      else
        for (g in a) e = b(a[g], g, c), null != e && h.push(e);
      return f.apply([], h)
    },
    guid: 1,
    proxy: function (a, b) {
      var c, d, f;
      return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function () {
        return a.apply(b || this, c.concat(e.call(arguments)))
      }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
    },
    now: function () {
      return +new Date
    },
    support: l
  }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase()
  });

  function s(a) {
    var b = !!a && "length" in a && a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }
  var t = function (a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
      v = a.document,
      w = 0,
      x = 0,
      y = ga(),
      z = ga(),
      A = ga(),
      B = function (a, b) {
        return a === b && (l = !0), 0
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++)
          if (a[c] === b) return c;
        return -1
      },
      K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
      O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
      P = new RegExp(L + "+", "g"),
      Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      R = new RegExp("^" + L + "*," + L + "*"),
      S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      U = new RegExp(O),
      V = new RegExp("^" + M + "$"),
      W = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
      },
      X = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      _ = /[+~]/,
      aa = /'|\\/g,
      ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      ca = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
      },
      da = function () {
        m()
      };
    try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
    } catch (ea) {
      H = {
        apply: E.length ? function (a, b) {
          G.apply(a, I.call(b))
        } : function (a, b) {
          var c = a.length,
            d = 0;
          while (a[c++] = b[d++]);
          a.length = c - 1
        }
      }
    }

    function fa(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
        x = b ? b.nodeType : 9;
      if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a)))
          if (f = o[1]) {
            if (9 === x) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d
            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
          } else {
            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
          } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
            while (h--) r[h] = l + " " + qa(r[h]);
            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
          }
          if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d
          } catch (y) {} finally {
            k === u && b.removeAttribute("id")
          }
        }
      }
      return i(a.replace(Q, "$1"), b, d, e)
    }

    function ga() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
      }
      return b
    }

    function ha(a) {
      return a[u] = !0, a
    }

    function ia(a) {
      var b = n.createElement("div");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function ja(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b
    }

    function ka(a, b) {
      var c = b && a,
        d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c)
        while (c = c.nextSibling)
          if (c === b) return -1;
      return a ? 1 : -1
    }

    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a
      }
    }

    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a
      }
    }

    function na(a) {
      return ha(function (b) {
        return b = +b, ha(function (c, d) {
          var e, f = a([], c.length, b),
            g = f.length;
          while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
        })
      })
    }

    function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a
    }
    c = fa.support = {}, f = fa.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1
    }, m = fa.setDocument = function (a) {
      var b, e, g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
        return a.className = "i", !a.getAttribute("className")
      }), c.getElementsByTagName = ia(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);
          return c ? [c] : []
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);
        return function (a) {
          return a.getAttribute("id") === b
        }
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);
        return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
      } : function (a, b) {
        var c, d = [],
          e = 0,
          f = b.getElementsByTagName(a);
        if ("*" === a) {
          while (c = f[e++]) 1 === c.nodeType && d.push(c);
          return d
        }
        return f
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
      }), ia(function (a) {
        var b = n.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
          d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function (a, b) {
        if (b)
          while (b = b.parentNode)
            if (b === a) return !0;
        return !1
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
      } : function (a, b) {
        if (a === b) return l = !0, 0;
        var c, d = 0,
          e = a.parentNode,
          f = b.parentNode,
          g = [a],
          h = [b];
        if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
        if (e === f) return ka(a, b);
        c = a;
        while (c = c.parentNode) g.unshift(c);
        c = b;
        while (c = c.parentNode) h.unshift(c);
        while (g[d] === h[d]) d++;
        return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
      }, n) : n
    }, fa.matches = function (a, b) {
      return fa(a, null, null, b)
    }, fa.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
      } catch (e) {}
      return fa(b, n, null, [a]).length > 0
    }, fa.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b)
    }, fa.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
        f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
    }, fa.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a)
    }, fa.uniqueSort = function (a) {
      var b, d = [],
        e = 0,
        f = 0;
      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) b === a[f] && (e = d.push(f));
        while (e--) a.splice(d[e], 1)
      }
      return k = null, a
    }, e = fa.getText = function (a) {
      var b, c = "",
        d = 0,
        f = a.nodeType;
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
        } else if (3 === f || 4 === f) return a.nodeValue
      } else
        while (b = a[d++]) c += e(b);
      return c
    }, d = fa.selectors = {
      cacheLength: 50,
      createPseudo: ha,
      match: W,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        },
        CHILD: function (a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
        },
        PSEUDO: function (a) {
          var b, c = !a[6] && a[2];
          return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      },
      filter: {
        TAG: function (a) {
          var b = a.replace(ba, ca).toLowerCase();
          return "*" === a ? function () {
            return !0
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        },
        CLASS: function (a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
          })
        },
        ATTR: function (a, b, c) {
          return function (d) {
            var e = fa.attr(d, a);
            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
          }
        },
        CHILD: function (a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
            g = "last" !== a.slice(-4),
            h = "of-type" === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode
          } : function (b, c, i) {
            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
              q = b.parentNode,
              r = h && b.nodeName.toLowerCase(),
              s = !i && !h,
              t = !1;
            if (q) {
              if (f) {
                while (p) {
                  m = b;
                  while (m = m[p])
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  o = p = "only" === a && !o && "nextSibling"
                }
                return !0
              }
              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];
                    break
                  }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                  if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              return t -= e, t === d || t % d === 0 && t / d >= 0
            }
          }
        },
        PSEUDO: function (a, b) {
          var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
            var d, f = e(a, b),
              g = f.length;
            while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
          }) : function (a) {
            return e(a, 0, c)
          }) : e
        }
      },
      pseudos: {
        not: ha(function (a) {
          var b = [],
            c = [],
            d = h(a.replace(Q, "$1"));
          return d[u] ? ha(function (a, b, c, e) {
            var f, g = d(a, null, e, []),
              h = a.length;
            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
          }
        }),
        has: ha(function (a) {
          return function (b) {
            return fa(a, b).length > 0
          }
        }),
        contains: ha(function (a) {
          return a = a.replace(ba, ca),
            function (b) {
              return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
            }
        }),
        lang: ha(function (a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
            function (b) {
              var c;
              do
                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
              return !1
            }
        }),
        target: function (b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id
        },
        root: function (a) {
          return a === o
        },
        focus: function (a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        },
        enabled: function (a) {
          return a.disabled === !1
        },
        disabled: function (a) {
          return a.disabled === !0
        },
        checked: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected
        },
        selected: function (a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        },
        empty: function (a) {
          for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType < 6) return !1;
          return !0
        },
        parent: function (a) {
          return !d.pseudos.empty(a)
        },
        header: function (a) {
          return Y.test(a.nodeName)
        },
        input: function (a) {
          return X.test(a.nodeName)
        },
        button: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        },
        text: function (a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        },
        first: na(function () {
          return [0]
        }),
        last: na(function (a, b) {
          return [b - 1]
        }),
        eq: na(function (a, b, c) {
          return [0 > c ? c + b : c]
        }),
        even: na(function (a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);
          return a
        }),
        odd: na(function (a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);
          return a
        }),
        lt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
          return a
        }),
        gt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
          return a
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) d.pseudos[b] = la(b);
    for (b in {
        submit: !0,
        reset: !0
      }) d.pseudos[b] = ma(b);

    function pa() {}
    pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function (a, b) {
      var c, e, f, g, h, i, j, k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;
      while (h) {
        c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(Q, " ")
        }), h = h.slice(c.length));
        for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
          value: c,
          type: g,
          matches: e
        }), h = h.slice(c.length));
        if (!c) break
      }
      return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
    };

    function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d
    }

    function ra(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first ? function (b, c, f) {
        while (b = b[d])
          if (1 === b.nodeType || e) return a(b, c, f)
      } : function (b, c, g) {
        var h, i, j, k = [w, f];
        if (g) {
          while (b = b[d])
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
        } else
          while (b = b[d])
            if (1 === b.nodeType || e) {
              if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
              if (i[d] = k, k[2] = a(b, c, g)) return !0
            }
      }
    }

    function sa(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;
        while (e--)
          if (!a[e](b, c, d)) return !1;
        return !0
      } : a[0]
    }

    function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
      return c
    }

    function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      return g
    }

    function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
        var j, k, l, m = [],
          n = [],
          o = g.length,
          p = f || ta(b || "*", h.nodeType ? [h] : h, []),
          q = !a || !f && b ? p : ua(p, m, a, h, i),
          r = c ? e || (f ? a : o || d) ? [] : g : q;
        if (c && c(q, r, h, i), d) {
          j = ua(r, n), d(j, [], h, i), k = j.length;
          while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;
              while (k--)(l = r[k]) && j.push(q[k] = l);
              e(null, r = [], j, i)
            }
            k = r.length;
            while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
      })
    }

    function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
          return a === b
        }, h, !0), l = ra(function (a) {
          return J(b, a) > -1
        }, h, !0), m = [function (a, c, d) {
          var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
          return b = null, e
        }]; f > i; i++)
        if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
        else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++)
              if (d.relative[a[e].type]) break;
            return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
              value: " " === a[i - 2].type ? "*" : ""
            })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
          }
          m.push(c)
        } return sa(m)
    }

    function xa(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l, o, q, r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;
          for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
            if (e && l) {
              o = 0, g || l.ownerDocument === n || (m(l), h = !p);
              while (q = a[o++])
                if (q(l, g || n, h)) {
                  i.push(l);
                  break
                } k && (w = y)
            }
            c && ((l = !q && l) && r--, f && t.push(l))
          }
          if (r += s, c && s !== r) {
            o = 0;
            while (q = b[o++]) q(t, u, g, h);
            if (f) {
              if (r > 0)
                while (s--) t[s] || u[s] || (u[s] = F.call(i));
              u = ua(u)
            }
            H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
          }
          return k && (w = y, j = v), t
        };
      return c ? ha(f) : f
    }
    return h = fa.compile = function (a, b) {
      var c, d = [],
        e = [],
        f = A[a + " "];
      if (!f) {
        b || (b = g(a)), c = b.length;
        while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
        f = A(a, xa(e, d)), f.selector = a
      }
      return f
    }, i = fa.select = function (a, b, e, f) {
      var i, j, k, l, m, n = "function" == typeof a && a,
        o = !f && g(a = n.selector || a);
      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length)
        }
        i = W.needsContext.test(a) ? 0 : j.length;
        while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;
          if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
            break
          }
        }
      }
      return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"))
    }), ia(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || ja("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), c.attributes && ia(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || ja("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
    }), ia(function (a) {
      return null == a.getAttribute("disabled")
    }) || ja(K, function (a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }), fa
  }(a);
  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
  var u = function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a)
        } return d
    },
    v = function (a, b) {
      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
      return c
    },
    w = n.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    y = /^.[^:#\[\.,]*$/;

  function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c
    });
    if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c
    });
    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a)
    }
    return n.grep(a, function (a) {
      return n.inArray(a, b) > -1 !== c
    })
  }
  n.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType
    }))
  }, n.fn.extend({
    find: function (a) {
      var b, c = [],
        d = this,
        e = d.length;
      if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; e > b; b++)
          if (n.contains(d[b], this)) return !0
      }));
      for (b = 0; e > b; b++) n.find(a, d[b], c);
      return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
    },
    filter: function (a) {
      return this.pushStack(z(this, a || [], !1))
    },
    not: function (a) {
      return this.pushStack(z(this, a || [], !0))
    },
    is: function (a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
    }
  });
  var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    C = n.fn.init = function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (c = c || A, "string" == typeof a) {
        if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
        if (e[1]) {
          if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
            for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this
        }
        if (f = d.getElementById(e[2]), f && f.parentNode) {
          if (f.id !== e[2]) return A.find(a);
          this.length = 1, this[0] = f
        }
        return this.context = d, this.selector = a, this
      }
      return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
  C.prototype = n.fn, A = n(d);
  var D = /^(?:parents|prev(?:Until|All))/,
    E = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  n.fn.extend({
    has: function (a) {
      var b, c = n(a, this),
        d = c.length;
      return this.filter(function () {
        for (b = 0; d > b; b++)
          if (n.contains(this, c[b])) return !0
      })
    },
    closest: function (a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);
            break
          } return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
    },
    index: function (a) {
      return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function (a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  });

  function F(a, b) {
    do a = a[b]; while (a && 1 !== a.nodeType);
    return a
  }
  n.each({
    parent: function (a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    },
    parents: function (a) {
      return u(a, "parentNode")
    },
    parentsUntil: function (a, b, c) {
      return u(a, "parentNode", c)
    },
    next: function (a) {
      return F(a, "nextSibling")
    },
    prev: function (a) {
      return F(a, "previousSibling")
    },
    nextAll: function (a) {
      return u(a, "nextSibling")
    },
    prevAll: function (a) {
      return u(a, "previousSibling")
    },
    nextUntil: function (a, b, c) {
      return u(a, "nextSibling", c)
    },
    prevUntil: function (a, b, c) {
      return u(a, "previousSibling", c)
    },
    siblings: function (a) {
      return v((a.parentNode || {}).firstChild, a)
    },
    children: function (a) {
      return v(a.firstChild)
    },
    contents: function (a) {
      return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
    }
  }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
    }
  });
  var G = /\S+/g;

  function H(a) {
    var b = {};
    return n.each(a.match(G) || [], function (a, c) {
      b[c] = !0
    }), b
  }
  n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);
    var b, c, d, e, f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
        }
        a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
      },
      j = {
        add: function () {
          return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
            n.each(b, function (b, c) {
              n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
            })
          }(arguments), c && !b && i()), this
        },
        remove: function () {
          return n.each(arguments, function (a, b) {
            var c;
            while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
          }), this
        },
        has: function (a) {
          return a ? n.inArray(a, f) > -1 : f.length > 0
        },
        empty: function () {
          return f && (f = []), this
        },
        disable: function () {
          return e = g = [], f = c = "", this
        },
        disabled: function () {
          return !f
        },
        lock: function () {
          return e = !0, c || j.disable(), this
        },
        locked: function () {
          return !!e
        },
        fireWith: function (a, c) {
          return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
        },
        fire: function () {
          return j.fireWith(this, arguments), this
        },
        fired: function () {
          return !!d
        }
      };
    return j
  }, n.extend({
    Deferred: function (a) {
      var b = [
          ["resolve", "done", n.Callbacks("once memory"), "resolved"],
          ["reject", "fail", n.Callbacks("once memory"), "rejected"],
          ["notify", "progress", n.Callbacks("memory")]
        ],
        c = "pending",
        d = {
          state: function () {
            return c
          },
          always: function () {
            return e.done(arguments).fail(arguments), this
          },
          then: function () {
            var a = arguments;
            return n.Deferred(function (c) {
              n.each(b, function (b, f) {
                var g = n.isFunction(a[b]) && a[b];
                e[f[1]](function () {
                  var a = g && g.apply(this, arguments);
                  a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                })
              }), a = null
            }).promise()
          },
          promise: function (a) {
            return null != a ? n.extend(a, d) : d
          }
        },
        e = {};
      return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
          h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this
        }, e[f[0] + "With"] = g.fireWith
      }), d.promise(e), a && a.call(e, e), e
    },
    when: function (a) {
      var b = 0,
        c = e.call(arguments),
        d = c.length,
        f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
        g = 1 === f ? a : n.Deferred(),
        h = function (a, b, c) {
          return function (d) {
            b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
          }
        },
        i, j, k;
      if (d > 1)
        for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      return f || g.resolveWith(k, c), g.promise()
    }
  });
  var I;
  n.fn.ready = function (a) {
    return n.ready.promise().done(a), this
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (a) {
      a ? n.readyWait++ : n.ready(!0)
    },
    ready: function (a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
    }
  });

  function J() {
    d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
  }

  function K() {
    (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
  }
  n.ready.promise = function (b) {
    if (!I)
      if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
      else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
    else {
      d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
      var c = !1;
      try {
        c = null == a.frameElement && d.documentElement
      } catch (e) {}
      c && c.doScroll && ! function f() {
        if (!n.isReady) {
          try {
            c.doScroll("left")
          } catch (b) {
            return a.setTimeout(f, 50)
          }
          J(), n.ready()
        }
      }()
    }
    return I.promise(b)
  }, n.ready.promise();
  var L;
  for (L in n(l)) break;
  l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function () {
      var a, b, c, e;
      c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
    }),
    function () {
      var a = d.createElement("div");
      l.deleteExpando = !0;
      try {
        delete a.test
      } catch (b) {
        l.deleteExpando = !1
      }
      a = null
    }();
  var M = function (a) {
      var b = n.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
      return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    },
    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;

  function P(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(O, "-$1").toLowerCase();
      if (c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
        } catch (e) {}
        n.data(a, b, c)
      } else c = void 0;
    }
    return c
  }

  function Q(a) {
    var b;
    for (b in a)
      if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0
  }

  function R(a, b, d, e) {
    if (M(a)) {
      var f, g, h = n.expando,
        i = a.nodeType,
        j = i ? n.cache : a,
        k = i ? a[h] : a[h] && h;
      if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
        toJSON: n.noop
      }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
    }
  }

  function S(a, b, c) {
    if (M(a)) {
      var d, e, f = a.nodeType,
        g = f ? n.cache : a,
        h = f ? a[n.expando] : n.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
          while (e--) delete d[b[e]];
          if (c ? !Q(d) : !n.isEmptyObject(d)) return
        }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
      }
    }
  }
  n.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
      },
      hasData: function (a) {
        return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
      },
      data: function (a, b, c) {
        return R(a, b, c)
      },
      removeData: function (a, b) {
        return S(a, b)
      },
      _data: function (a, b, c) {
        return R(a, b, c, !0)
      },
      _removeData: function (a, b) {
        return S(a, b, !0)
      }
    }), n.fn.extend({
      data: function (a, b) {
        var c, d, e, f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
            c = g.length;
            while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
            n._data(f, "parsedAttrs", !0)
          }
          return e
        }
        return "object" == typeof a ? this.each(function () {
          n.data(this, a)
        }) : arguments.length > 1 ? this.each(function () {
          n.data(this, a, b)
        }) : f ? P(f, a, n.data(f, a)) : void 0
      },
      removeData: function (a) {
        return this.each(function () {
          n.removeData(this, a)
        })
      }
    }), n.extend({
      queue: function (a, b, c) {
        var d;
        return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
            n.dequeue(a, b)
          };
        "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return n._data(a, c) || n._data(a, c, {
          empty: n.Callbacks("once memory").add(function () {
            n._removeData(a, b + "queue"), n._removeData(a, c)
          })
        })
      }
    }), n.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
          var c = n.queue(this, a, b);
          n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
        })
      },
      dequeue: function (a) {
        return this.each(function () {
          n.dequeue(this, a)
        })
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", [])
      },
      promise: function (a, b) {
        var c, d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f])
          };
        "string" != typeof a && (b = a, a = void 0), a = a || "fx";
        while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b)
      }
    }),
    function () {
      var a;
      l.shrinkWrapBlocks = function () {
        if (null != a) return a;
        a = !1;
        var b, c, e;
        return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
      }
    }();
  var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
    V = ["Top", "Right", "Bottom", "Left"],
    W = function (a, b) {
      return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    };

  function X(a, b, c, d) {
    var e, f = 1,
      g = 20,
      h = d ? function () {
        return d.cur()
      } : function () {
        return n.css(a, b, "")
      },
      i = h(),
      j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
      k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
    if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;
      do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
    }
    return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
  }
  var Y = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c) Y(a, b, h, c[h], !0, f, g)
      } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
          return j.call(n(a), c)
        })), b))
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    },
    Z = /^(?:checkbox|radio)$/i,
    $ = /<([\w:-]+)/,
    _ = /^$|\/(?:java|ecma)script/i,
    aa = /^\s+/,
    ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

  function ca(a) {
    var b = ba.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement)
      while (b.length) c.createElement(b.pop());
    return c
  }! function () {
    var a = d.createElement("div"),
      b = d.createDocumentFragment(),
      c = d.createElement("input");
    a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
  }();
  var da = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  };
  da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

  function ea(a, b) {
    var c, d, e = 0,
      f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
    if (!f)
      for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
  }

  function fa(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
  }
  var ga = /<|&#?\w+;/,
    ha = /<tbody/i;

  function ia(a) {
    Z.test(a.type) && (a.defaultChecked = a.checked)
  }

  function ja(a, b, c, d, e) {
    for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
      if (g = a[r], g || 0 === g)
        if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
        else if (ga.test(g)) {
      i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
      while (f--) i = i.lastChild;
      if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
        g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
        while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
      }
      n.merge(q, i.childNodes), i.textContent = "";
      while (i.firstChild) i.removeChild(i.firstChild);
      i = p.lastChild
    } else q.push(b.createTextNode(g));
    i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
    while (g = q[r++])
      if (d && n.inArray(g, d) > -1) e && e.push(g);
      else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
      f = 0;
      while (g = i[f++]) _.test(g.type || "") && c.push(g)
    }
    return i = null, p
  }! function () {
    var b, c, e = d.createElement("div");
    for (b in {
        submit: !0,
        change: !0,
        focusin: !0
      }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
    e = null
  }();
  var ka = /^(?:input|select|textarea)$/i,
    la = /^key/,
    ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    na = /^(?:focusinfocus|focusoutblur)$/,
    oa = /^([^.]*)(?:\.(.+)|)/;

  function pa() {
    return !0
  }

  function qa() {
    return !1
  }

  function ra() {
    try {
      return d.activeElement
    } catch (a) {}
  }

  function sa(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && (d = d || c, c = void 0);
      for (h in b) sa(a, h, c, d, b[h], f);
      return a
    }
    if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
    else if (!e) return a;
    return 1 === f && (g = e, e = function (a) {
      return n().off(a), g.apply(this, arguments)
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
      n.event.add(this, b, e, d, c)
    })
  }
  n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
      if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
          return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
        }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
        while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
          type: o,
          origType: q,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && n.expr.match.needsContext.test(e),
          namespace: p.join(".")
        }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
        a = null
      }
    },
    remove: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
      if (r && (k = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;
        while (j--)
          if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
            while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
            i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
          } else
            for (o in k) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
      }
    },
    trigger: function (b, c, e, f) {
      var g, h, i, j, l, m, o, p = [e || d],
        q = k.call(b, "type") ? b.type : b,
        r = k.call(b, "namespace") ? b.namespace.split(".") : [];
      if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
        if (!f && !l.noBubble && !n.isWindow(e)) {
          for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
          m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
        }
        o = 0;
        while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
        if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
          m = e[h], m && (e[h] = null), n.event.triggered = q;
          try {
            e[q]()
          } catch (s) {}
          n.event.triggered = void 0, m && (e[h] = m)
        }
        return b.result
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b, c, d, f, g, h = [],
        i = e.call(arguments),
        j = (n._data(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result
      }
    },
    handlers: function (a, b) {
      var c, d, e, f, g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
        for (; i != this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
            d.length && g.push({
              elem: i,
              handlers: d
            })
          } return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b, c, e, f = a.type,
        g = a,
        h = this.fixHooks[f];
      h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
      while (b--) c = e[b], a[c] = g[c];
      return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (a, b) {
        var c, e, f, g = b.button,
          h = b.fromElement;
        return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function () {
          if (this !== ra() && this.focus) try {
            return this.focus(), !1
          } catch (a) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function () {
          return this === ra() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function () {
          return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
        },
        _default: function (a) {
          return n.nodeName(a.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
        }
      }
    },
    simulate: function (a, b, c) {
      var d = n.extend(new n.Event, c, {
        type: a,
        isSimulated: !0
      });
      n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
    }
  }, n.removeEvent = d.removeEventListener ? function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c)
  } : function (a, b, c) {
    var d = "on" + b;
    a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
  }, n.Event.prototype = {
    constructor: n.Event,
    isDefaultPrevented: qa,
    isPropagationStopped: qa,
    isImmediatePropagationStopped: qa,
    preventDefault: function () {
      var a = this.originalEvent;
      this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
    },
    stopPropagation: function () {
      var a = this.originalEvent;
      this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
    },
    stopImmediatePropagation: function () {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
    }
  }, n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function (a) {
        var c, d = this,
          e = a.relatedTarget,
          f = a.handleObj;
        return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
      }
    }
  }), l.submit || (n.event.special.submit = {
    setup: function () {
      return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) {
        var b = a.target,
          c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
        c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function (a) {
          a._submitBubble = !0
        }), n._data(c, "submit", !0))
      })
    },
    postDispatch: function (a) {
      a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
    },
    teardown: function () {
      return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
    }
  }), l.change || (n.event.special.change = {
    setup: function () {
      return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function (a) {
        "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
      }), n.event.add(this, "click._change", function (a) {
        this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
      })), !1) : void n.event.add(this, "beforeactivate._change", function (a) {
        var b = a.target;
        ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function (a) {
          !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
        }), n._data(b, "change", !0))
      })
    },
    handle: function (a) {
      var b = a.target;
      return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
    },
    teardown: function () {
      return n.event.remove(this, "._change"), !ka.test(this.nodeName)
    }
  }), l.focusin || n.each({
    focus: "focusin",
    blur: "focusout"
  }, function (a, b) {
    var c = function (a) {
      n.event.simulate(b, a.target, n.event.fix(a))
    };
    n.event.special[b] = {
      setup: function () {
        var d = this.ownerDocument || this,
          e = n._data(d, b);
        e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
      },
      teardown: function () {
        var d = this.ownerDocument || this,
          e = n._data(d, b) - 1;
        e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
      }
    }
  }), n.fn.extend({
    on: function (a, b, c, d) {
      return sa(this, a, b, c, d)
    },
    one: function (a, b, c, d) {
      return sa(this, a, b, c, d, 1)
    },
    off: function (a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this
      }
      return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function () {
        n.event.remove(this, a, c, b)
      })
    },
    trigger: function (a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this)
      })
    },
    triggerHandler: function (a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0
    }
  });
  var ta = / jQuery\d+="(?:null|\d+)"/g,
    ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
    va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    wa = /<script|<style|<link/i,
    xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ya = /^true\/(.*)/,
    za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Aa = ca(d),
    Ba = Aa.appendChild(d.createElement("div"));

  function Ca(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
  }

  function Da(a) {
    return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
  }

  function Ea(a) {
    var b = ya.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a
  }

  function Fa(a, b) {
    if (1 === b.nodeType && n.hasData(a)) {
      var c, d, e, f = n._data(a),
        g = n._data(b, f),
        h = f.events;
      if (h) {
        delete g.handle, g.events = {};
        for (c in h)
          for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
      }
      g.data && (g.data = n.extend({}, g.data))
    }
  }

  function Ga(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
        e = n._data(b);
        for (d in e.events) n.removeEvent(b, d, e.handle);
        b.removeAttribute(n.expando)
      }
      "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }
  }

  function Ha(a, b, c, d) {
    b = f.apply([], b);
    var e, g, h, i, j, k, m = 0,
      o = a.length,
      p = o - 1,
      q = b[0],
      r = n.isFunction(q);
    if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function (e) {
      var f = a.eq(e);
      r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
    });
    if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
      for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
      if (h)
        for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
      k = e = null
    }
    return a
  }

  function Ia(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
    return a
  }
  n.extend({
    htmlPrefilter: function (a) {
      return a.replace(va, "<$1></$2>")
    },
    clone: function (a, b, c) {
      var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
      if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
        for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
      if (b)
        if (c)
          for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
        else Fa(a, f);
      return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
    },
    cleanData: function (a, b) {
      for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
        if ((b || M(d)) && (f = d[i], g = f && j[f])) {
          if (g.events)
            for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
          j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
        }
    }
  }), n.fn.extend({
    domManip: Ha,
    detach: function (a) {
      return Ia(this, a, !0)
    },
    remove: function (a) {
      return Ia(this, a)
    },
    text: function (a) {
      return Y(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
      }, null, a, arguments.length)
    },
    append: function () {
      return Ha(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ca(this, a);
          b.appendChild(a)
        }
      })
    },
    prepend: function () {
      return Ha(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ca(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    },
    before: function () {
      return Ha(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    },
    after: function () {
      return Ha(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    },
    empty: function () {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && n.cleanData(ea(a, !1));
        while (a.firstChild) a.removeChild(a.firstChild);
        a.options && n.nodeName(a, "select") && (a.options.length = 0)
      }
      return this
    },
    clone: function (a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b)
      })
    },
    html: function (a) {
      return Y(this, function (a) {
        var b = this[0] || {},
          c = 0,
          d = this.length;
        if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
        if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);
          try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {}
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    },
    replaceWith: function () {
      var a = [];
      return Ha(this, arguments, function (b) {
        var c = this.parentNode;
        n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
      }, a)
    }
  }), n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
      return this.pushStack(e)
    }
  });
  var Ja, Ka = {
    HTML: "block",
    BODY: "block"
  };

  function La(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
      d = n.css(c[0], "display");
    return c.detach(), d
  }

  function Ma(a) {
    var b = d,
      c = Ka[a];
    return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
  }
  var Na = /^margin/,
    Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
    Pa = function (a, b, c, d) {
      var e, f, g = {};
      for (f in b) g[f] = a.style[f], a.style[f] = b[f];
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e
    },
    Qa = d.documentElement;
  ! function () {
    var b, c, e, f, g, h, i = d.createElement("div"),
      j = d.createElement("div");
    if (j.style) {
      j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
        reliableHiddenOffsets: function () {
          return null == b && k(), f
        },
        boxSizingReliable: function () {
          return null == b && k(), e
        },
        pixelMarginRight: function () {
          return null == b && k(), c
        },
        pixelPosition: function () {
          return null == b && k(), b
        },
        reliableMarginRight: function () {
          return null == b && k(), g
        },
        reliableMarginLeft: function () {
          return null == b && k(), h
        }
      });

      function k() {
        var k, l, m = d.documentElement;
        m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
          width: "4px"
        }).width, j.style.marginRight = "50%", c = "4px" === (l || {
          marginRight: "4px"
        }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
      }
    }
  }();
  var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (Ra = function (b) {
    var c = b.ownerDocument.defaultView;
    return c && c.opener || (c = a), c.getComputedStyle(b)
  }, Sa = function (a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
  }) : Qa.currentStyle && (Ra = function (a) {
    return a.currentStyle
  }, Sa = function (a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
  });

  function Ua(a, b) {
    return {
      get: function () {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments)
      }
    }
  }
  var Va = /alpha\([^)]*\)/i,
    Wa = /opacity\s*=\s*([^)]*)/i,
    Xa = /^(none|table(?!-c[ea]).+)/,
    Ya = new RegExp("^(" + T + ")(.*)$", "i"),
    Za = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    $a = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    _a = ["Webkit", "O", "Moz", "ms"],
    ab = d.createElement("div").style;

  function bb(a) {
    if (a in ab) return a;
    var b = a.charAt(0).toUpperCase() + a.slice(1),
      c = _a.length;
    while (c--)
      if (a = _a[c] + b, a in ab) return a
  }

  function cb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    return a
  }

  function db(a, b, c) {
    var d = Ya.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
  }

  function eb(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
    return g
  }

  function fb(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Ra(a),
      g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
      d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
    }
    return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Sa(a, "opacity");
            return "" === c ? "1" : c
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": l.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = n.camelCase(b),
          i = a.style;
        if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
          i[b] = c
        } catch (j) {}
      }
    },
    css: function (a, b, c, d) {
      var e, f, g, h = n.camelCase(b);
      return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
    }
  }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = {
      get: function (a, c, d) {
        return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function () {
          return fb(a, b, d)
        }) : fb(a, b, d) : void 0
      },
      set: function (a, c, d) {
        var e = d && Ra(a);
        return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
      }
    }
  }), l.opacity || (n.cssHooks.opacity = {
    get: function (a, b) {
      return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
    },
    set: function (a, b) {
      var c = a.style,
        d = a.currentStyle,
        e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
        f = d && d.filter || c.filter || "";
      c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
    }
  }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
    return b ? Pa(a, {
      display: "inline-block"
    }, Sa, [a, "marginRight"]) : void 0
  }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
      marginLeft: 0
    }, function () {
      return a.getBoundingClientRect().left
    }) : 0)) + "px" : void 0
  }), n.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (a, b) {
    n.cssHooks[a + b] = {
      expand: function (c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
        return e
      }
    }, Na.test(a) || (n.cssHooks[a + b].set = db)
  }), n.fn.extend({
    css: function (a, b) {
      return Y(this, function (a, b, c) {
        var d, e, f = {},
          g = 0;
        if (n.isArray(b)) {
          for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
      }, a, b, arguments.length > 1)
    },
    show: function () {
      return cb(this, !0)
    },
    hide: function () {
      return cb(this)
    },
    toggle: function (a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        W(this) ? n(this).show() : n(this).hide()
      })
    }
  });

  function gb(a, b, c, d, e) {
    return new gb.prototype.init(a, b, c, d, e)
  }
  n.Tween = gb, gb.prototype = {
    constructor: gb,
    init: function (a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
    },
    cur: function () {
      var a = gb.propHooks[this.prop];
      return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
    },
    run: function (a) {
      var b, c = gb.propHooks[this.prop];
      return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
    }
  }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
    _default: {
      get: function (a) {
        var b;
        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
      },
      set: function (a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
      }
    }
  }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
    set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  }, n.easing = {
    linear: function (a) {
      return a
    },
    swing: function (a) {
      return .5 - Math.cos(a * Math.PI) / 2
    },
    _default: "swing"
  }, n.fx = gb.prototype.init, n.fx.step = {};
  var hb, ib, jb = /^(?:toggle|show|hide)$/,
    kb = /queueHooks$/;

  function lb() {
    return a.setTimeout(function () {
      hb = void 0
    }), hb = n.now()
  }

  function mb(a, b) {
    var c, d = {
        height: a
      },
      e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
    return b && (d.opacity = d.width = a), d
  }

  function nb(a, b, c) {
    for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
      if (d = e[f].call(c, b, a)) return d
  }

  function ob(a, b, c) {
    var d, e, f, g, h, i, j, k, m = this,
      o = {},
      p = a.style,
      q = a.nodeType && W(a),
      r = n._data(a, "fxshow");
    c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i()
    }), h.unqueued++, m.always(function () {
      m.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
      })
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () {
      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
    }));
    for (d in b)
      if (e = b[d], jb.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0
        }
        o[d] = r && r[d] || n.style(a, d)
      } else j = void 0;
    if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
    else {
      r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () {
        n(a).hide()
      }), m.done(function () {
        var b;
        n._removeData(a, "fxshow");
        for (b in o) n.style(a, b, o[b])
      });
      for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
    }
  }

  function pb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];
        for (c in f) c in a || (a[c] = f[c], b[c] = e)
      } else b[d] = e
  }

  function qb(a, b, c) {
    var d, e, f = 0,
      g = qb.prefilters.length,
      h = n.Deferred().always(function () {
        delete i.elem
      }),
      i = function () {
        if (e) return !1;
        for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
        return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, {
          specialEasing: {},
          easing: n.easing._default
        }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: hb || lb(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
          return j.tweens.push(d), d
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
        }
      }),
      k = j.props;
    for (pb(k, j.opts.specialEasing); g > f; f++)
      if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
    return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }
  n.Animation = n.extend(qb, {
      tweeners: {
        "*": [function (a, b) {
          var c = this.createTween(a, b);
          return X(c.elem, a, U.exec(b), c), c
        }]
      },
      tweener: function (a, b) {
        n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
        for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
      },
      prefilters: [ob],
      prefilter: function (a, b) {
        b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
      }
    }), n.speed = function (a, b, c) {
      var d = a && "object" == typeof a ? n.extend({}, a) : {
        complete: c || !c && b || n.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !n.isFunction(b) && b
      };
      return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
        n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
      }, d
    }, n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(W).css("opacity", 0).show().end().animate({
          opacity: b
        }, a, c, d)
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = qb(this, n.extend({}, a), f);
            (e || n._data(this, "finish")) && b.stop(!0)
          };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c)
        };
        return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
          var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = n._data(this);
          if (e) g[e] && g[e].stop && d(g[e]);
          else
            for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
          for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
          !b && c || n.dequeue(this, a)
        })
      },
      finish: function (a) {
        return a !== !1 && (a = a || "fx"), this.each(function () {
          var b, c = n._data(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;
          for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
          for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
          delete c.finish
        })
      }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
      }
    }), n.each({
      slideDown: mb("show"),
      slideUp: mb("hide"),
      slideToggle: mb("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (a, b) {
      n.fn[a] = function (a, c, d) {
        return this.animate(b, a, c, d)
      }
    }), n.timers = [], n.fx.tick = function () {
      var a, b = n.timers,
        c = 0;
      for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
      b.length || n.fx.stop(), hb = void 0
    }, n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
      ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
      a.clearInterval(ib), ib = null
    }, n.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, n.fn.delay = function (b, c) {
      return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
        var e = a.setTimeout(c, b);
        d.stop = function () {
          a.clearTimeout(e)
        }
      })
    },
    function () {
      var a, b = d.createElement("input"),
        c = d.createElement("div"),
        e = d.createElement("select"),
        f = e.appendChild(d.createElement("option"));
      c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
    }();
  var rb = /\r/g,
    sb = /[\x20\t\r\n\f]+/g;
  n.fn.extend({
    val: function (a) {
      var b, c, d, e = this[0]; {
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + ""
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
        });
        if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function (a) {
          var b = n.find.attr(a, "value");
          return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
        }
      },
      select: {
        get: function (a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;
              g.push(b)
            } return g
        },
        set: function (a, b) {
          var c, d, e = a.options,
            f = n.makeArray(b),
            g = e.length;
          while (g--)
            if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
              d.selected = c = !0
            } catch (h) {
              d.scrollHeight
            } else d.selected = !1;
          return c || (a.selectedIndex = -1), e
        }
      }
    }
  }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = {
      set: function (a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
      }
    }, l.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value
    })
  });
  var tb, ub, vb = n.expr.attrHandle,
    wb = /^(?:checked|selected)$/i,
    xb = l.getSetAttribute,
    yb = l.input;
  n.fn.extend({
    attr: function (a, b) {
      return Y(this, n.attr, a, b, arguments.length > 1)
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a)
      })
    }
  }), n.extend({
    attr: function (a, b, c) {
      var d, e, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
    },
    attrHooks: {
      type: {
        set: function (a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
          }
        }
      }
    },
    removeAttr: function (a, b) {
      var c, d, e = 0,
        f = b && b.match(G);
      if (f && 1 === a.nodeType)
        while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
    }
  }), ub = {
    set: function (a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
    }
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = vb[b] || n.find.attr;
    yb && xb || !wb.test(b) ? vb[b] = function (a, b, d) {
      var e, f;
      return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
    } : vb[b] = function (a, b, c) {
      return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
    }
  }), yb && xb || (n.attrHooks.value = {
    set: function (a, b, c) {
      return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
    }
  }), xb || (tb = {
    set: function (a, b, c) {
      var d = a.getAttributeNode(c);
      return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
    }
  }, vb.id = vb.name = vb.coords = function (a, b, c) {
    var d;
    return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
  }, n.valHooks.button = {
    get: function (a, b) {
      var c = a.getAttributeNode(b);
      return c && c.specified ? c.value : void 0
    },
    set: tb.set
  }, n.attrHooks.contenteditable = {
    set: function (a, b, c) {
      tb.set(a, "" === b ? !1 : b, c)
    }
  }, n.each(["width", "height"], function (a, b) {
    n.attrHooks[b] = {
      set: function (a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
      }
    }
  })), l.style || (n.attrHooks.style = {
    get: function (a) {
      return a.style.cssText || void 0
    },
    set: function (a, b) {
      return a.style.cssText = b + ""
    }
  });
  var zb = /^(?:input|select|textarea|button|object)$/i,
    Ab = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return Y(this, n.prop, a, b, arguments.length > 1)
    },
    removeProp: function (a) {
      return a = n.propFix[a] || a, this.each(function () {
        try {
          this[a] = void 0, delete this[a]
        } catch (b) {}
      })
    }
  }), n.extend({
    prop: function (a, b, c) {
      var d, e, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
    },
    propHooks: {
      tabIndex: {
        get: function (a) {
          var b = n.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), l.hrefNormalized || n.each(["href", "src"], function (a, b) {
    n.propHooks[b] = {
      get: function (a) {
        return a.getAttribute(b, 4)
      }
    }
  }), l.optSelected || (n.propHooks.selected = {
    get: function (a) {
      var b = a.parentNode;
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
    },
    set: function (a) {
      var b = a.parentNode;
      b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
    }
  }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this
  }), l.enctype || (n.propFix.enctype = "encoding");
  var Bb = /[\t\r\n\f]/g;

  function Cb(a) {
    return n.attr(a, "class") || ""
  }
  n.fn.extend({
    addClass: function (a) {
      var b, c, d, e, f, g, h, i = 0;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, Cb(this)))
      });
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while (c = this[i++])
          if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
            g = 0;
            while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            h = n.trim(d), e !== h && n.attr(c, "class", h)
          }
      }
      return this
    },
    removeClass: function (a) {
      var b, c, d, e, f, g, h, i = 0;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, Cb(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while (c = this[i++])
          if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
            g = 0;
            while (f = b[g++])
              while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
            h = n.trim(d), e !== h && n.attr(c, "class", h)
          }
      }
      return this
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, Cb(this), b), b)
      }) : this.each(function () {
        var b, d, e, f;
        if ("string" === c) {
          d = 0, e = n(this), f = a.match(G) || [];
          while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
        } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
      })
    },
    hasClass: function (a) {
      var b, c, d = 0;
      b = " " + a + " ";
      while (c = this[d++])
        if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
      return !1
    }
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), n.fn.extend({
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    }
  });
  var Db = a.location,
    Eb = n.now(),
    Fb = /\?/,
    Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  n.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c, d = null,
      e = n.trim(b + "");
    return e && !n.trim(e.replace(Gb, function (a, b, e, f) {
      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
    })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
  }, n.parseXML = function (b) {
    var c, d;
    if (!b || "string" != typeof b) return null;
    try {
      a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
    } catch (e) {
      c = void 0
    }
    return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
  };
  var Hb = /#.*$/,
    Ib = /([?&])_=[^&]*/,
    Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Lb = /^(?:GET|HEAD)$/,
    Mb = /^\/\//,
    Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Ob = {},
    Pb = {},
    Qb = "*/".concat("*"),
    Rb = Db.href,
    Sb = Nb.exec(Rb.toLowerCase()) || [];

  function Tb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0,
        f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c))
        while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function Ub(a, b, c, d) {
    var e = {},
      f = a === Pb;

    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
      }), i
    }
    return g(b.dataTypes[0]) || !e["*"] && g("*")
  }

  function Vb(a, b) {
    var c, d, e = n.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && n.extend(!0, a, c), a
  }

  function Wb(a, b, c) {
    var d, e, f, g, h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e)
      for (g in h)
        if (h[g] && h[g].test(e)) {
          i.unshift(g);
          break
        } if (i[0] in c) f = i[0];
    else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break
        }
        d || (d = g)
      }
      f = f || d
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
  }

  function Xb(a, b, c, d) {
    var e, f, g, h, i, j = {},
      k = a.dataTypes.slice();
    if (k[1])
      for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g)
        for (e in j)
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break
          } if (g !== !0)
        if (g && a["throws"]) b = g(b);
        else try {
          b = g(b)
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          }
        }
    }
    return {
      state: "success",
      data: b
    }
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Rb,
      type: "GET",
      isLocal: Kb.test(Sb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Qb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (a, b) {
      return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
    },
    ajaxPrefilter: Tb(Ob),
    ajaxTransport: Tb(Pb),
    ajax: function (b, c) {
      "object" == typeof b && (c = b, b = void 0), c = c || {};
      var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
        m = l.context || l,
        o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
        p = n.Deferred(),
        q = n.Callbacks("once memory"),
        r = l.statusCode || {},
        s = {},
        t = {},
        u = 0,
        v = "canceled",
        w = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === u) {
              if (!k) {
                k = {};
                while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2]
              }
              b = k[a.toLowerCase()]
            }
            return null == b ? null : b
          },
          getAllResponseHeaders: function () {
            return 2 === u ? g : null
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return u || (a = t[c] = t[c] || a, s[a] = b), this
          },
          overrideMimeType: function (a) {
            return u || (l.mimeType = a), this
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > u)
                for (b in a) r[b] = [r[b], a[b]];
              else w.always(a[w.status]);
            return this
          },
          abort: function (a) {
            var b = a || v;
            return j && j.abort(b), y(0, b), this
          }
        };
      if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
      i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
      for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
      if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
      v = "abort";
      for (e in {
          success: 1,
          error: 1,
          complete: 1
        }) w[e](l[e]);
      if (j = Ub(Pb, l, c, w)) {
        if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
        l.async && l.timeout > 0 && (h = a.setTimeout(function () {
          w.abort("timeout")
        }, l.timeout));
        try {
          u = 1, j.send(s, y)
        } catch (x) {
          if (!(2 > u)) throw x;
          y(-1, x)
        }
      } else y(-1, "No Transport");

      function y(b, c, d, e) {
        var k, s, t, v, x, y = c;
        2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
      }
      return w
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json")
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script")
    }
  }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      }, n.isPlainObject(a) && a))
    }
  }), n._evalUrl = function (a) {
    return n.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    })
  }, n.fn.extend({
    wrapAll: function (a) {
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).wrapAll(a.call(this, b))
      });
      if (this[0]) {
        var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
          var a = this;
          while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
          return a
        }).append(this)
      }
      return this
    },
    wrapInner: function (a) {
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapInner(a.call(this, b))
      }) : this.each(function () {
        var b = n(this),
          c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    },
    wrap: function (a) {
      var b = n.isFunction(a);
      return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a)
      })
    },
    unwrap: function () {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
      }).end()
    }
  });

  function Yb(a) {
    return a.style && a.style.display || n.css(a, "display")
  }

  function Zb(a) {
    if (!n.contains(a.ownerDocument || d, a)) return !0;
    while (a && 1 === a.nodeType) {
      if ("none" === Yb(a) || "hidden" === a.type) return !0;
      a = a.parentNode
    }
    return !1
  }
  n.expr.filters.hidden = function (a) {
    return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
  }, n.expr.filters.visible = function (a) {
    return !n.expr.filters.hidden(a)
  };
  var $b = /%20/g,
    _b = /\[\]$/,
    ac = /\r?\n/g,
    bc = /^(?:submit|button|image|reset|file)$/i,
    cc = /^(?:input|select|textarea|keygen)/i;

  function dc(a, b, c, d) {
    var e;
    if (n.isArray(b)) n.each(b, function (b, e) {
      c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
    });
    else if (c || "object" !== n.type(b)) d(a, b);
    else
      for (e in b) dc(a + "[" + e + "]", b[e], c, d)
  }
  n.param = function (a, b) {
    var c, d = [],
      e = function (a, b) {
        b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
      };
    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value)
    });
    else
      for (c in a) dc(c, a[c], b, e);
    return d.join("&").replace($b, "+")
  }, n.fn.extend({
    serialize: function () {
      return n.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        var a = n.prop(this, "elements");
        return a ? n.makeArray(a) : this
      }).filter(function () {
        var a = this.type;
        return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
      }).map(function (a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return {
            name: b.name,
            value: a.replace(ac, "\r\n")
          }
        }) : {
          name: b.name,
          value: c.replace(ac, "\r\n")
        }
      }).get()
    }
  }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
    return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
  } : hc;
  var ec = 0,
    fc = {},
    gc = n.ajaxSettings.xhr();
  a.attachEvent && a.attachEvent("onunload", function () {
    for (var a in fc) fc[a](void 0, !0)
  }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function (b) {
    if (!b.crossDomain || l.cors) {
      var c;
      return {
        send: function (d, e) {
          var f, g = b.xhr(),
            h = ++ec;
          if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
            for (f in b.xhrFields) g[f] = b.xhrFields[f];
          b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
          for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
          g.send(b.hasContent && b.data || null), c = function (a, d) {
            var f, i, j;
            if (c && (d || 4 === g.readyState))
              if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
              else {
                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                try {
                  i = g.statusText
                } catch (k) {
                  i = ""
                }
                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
              } j && e(f, i, j, g.getAllResponseHeaders())
          }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
        },
        abort: function () {
          c && c(void 0, !0)
        }
      }
    }
  });

  function hc() {
    try {
      return new a.XMLHttpRequest
    } catch (b) {}
  }

  function ic() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP")
    } catch (b) {}
  }
  n.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (a) {
        return n.globalEval(a), a
      }
    }
  }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, c = d.head || n("head")[0] || d.documentElement;
      return {
        send: function (e, f) {
          b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
          }, c.insertBefore(b, c.firstChild)
        },
        abort: function () {
          b && b.onload(void 0, !0)
        }
      }
    }
  });
  var jc = [],
    kc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = jc.pop() || n.expando + "_" + Eb++;
      return this[a] = !0, a
    }
  }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0]
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments
    }, d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
    }), "script") : void 0
  }), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || d;
    var e = x.exec(a),
      f = !c && [];
    return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
  };
  var lc = n.fn.load;
  n.fn.load = function (a, b, c) {
    if ("string" != typeof a && lc) return lc.apply(this, arguments);
    var d, e, f, g = this,
      h = a.indexOf(" ");
    return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
      url: a,
      type: e || "GET",
      dataType: "html",
      data: b
    }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a])
      })
    }), this
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a)
    }
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem
    }).length
  };

  function mc(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
  }
  n.offset = {
    setOffset: function (a, b, c) {
      var d, e, f, g, h, i, j, k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
    }
  }, n.fn.extend({
    offset: function (a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b)
      });
      var b, c, d = {
          top: 0,
          left: 0
        },
        e = this[0],
        f = e && e.ownerDocument;
      if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
        top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
        left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
      }) : d
    },
    position: function () {
      if (this[0]) {
        var a, b, c = {
            top: 0,
            left: 0
          },
          d = this[0];
        return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - c.top - n.css(d, "marginTop", !0),
          left: b.left - c.left - n.css(d, "marginLeft", !0)
        }
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var a = this.offsetParent;
        while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
        return a || Qa
      })
    }
  }), n.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (a, b) {
    var c = /Y/.test(b);
    n.fn[a] = function (d) {
      return Y(this, function (a, d, e) {
        var f = mc(a);
        return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
      }, a, d, arguments.length, null)
    }
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
      return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
    })
  }), n.each({
    Height: "height",
    Width: "width"
  }, function (a, b) {
    n.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
          g = c || (d === !0 || e === !0 ? "margin" : "border");
        return Y(this, function (b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
        }, b, f ? d : void 0, f, null)
      }
    })
  }), n.fn.extend({
    bind: function (a, b, c) {
      return this.on(a, null, b, c)
    },
    unbind: function (a, b) {
      return this.off(a, null, b)
    },
    delegate: function (a, b, c, d) {
      return this.on(b, a, c, d)
    },
    undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }
  }), n.fn.size = function () {
    return this.length
  }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return n
  });
  var nc = a.jQuery,
    oc = a.$;
  return n.noConflict = function (b) {
    return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
  }, b || (a.jQuery = a.$ = n), n
});


/*! jQuery UI - v1.9.2 - 2014-03-21
 * http://jqueryui.com
 * Includes: jquery.ui.effect.js
 * Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
jQuery.effects || function (e, t) {
  var i = e.uiBackCompat !== !1,
    a = "ui-effects-";
  e.effects = {
      effect: {}
    },
    function (t, i) {
      function a(e, t, i) {
        var a = c[t.type] || {};
        return null == e ? i || !t.def ? null : t.def : (e = a.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : a.mod ? (e + a.mod) % a.mod : 0 > e ? 0 : e > a.max ? a.max : e)
      }

      function s(e) {
        var a = u(),
          s = a._rgba = [];
        return e = e.toLowerCase(), m(l, function (t, n) {
          var r, o = n.re.exec(e),
            h = o && n.parse(o),
            l = n.space || "rgba";
          return h ? (r = a[l](h), a[d[l].cache] = r[d[l].cache], s = a._rgba = r._rgba, !1) : i
        }), s.length ? ("0,0,0,0" === s.join() && t.extend(s, r.transparent), a) : r[e]
      }

      function n(e, t, i) {
        return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e
      }
      var r, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
        h = /^([\-+])=\s*(\d+\.?\d*)/,
        l = [{
          re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
          parse: function (e) {
            return [e[1], e[2], e[3], e[4]]
          }
        }, {
          re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
          parse: function (e) {
            return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
          }
        }, {
          re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
          parse: function (e) {
            return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
          }
        }, {
          re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
          parse: function (e) {
            return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
          }
        }, {
          re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
          space: "hsla",
          parse: function (e) {
            return [e[1], e[2] / 100, e[3] / 100, e[4]]
          }
        }],
        u = t.Color = function (e, i, a, s) {
          return new t.Color.fn.parse(e, i, a, s)
        },
        d = {
          rgba: {
            props: {
              red: {
                idx: 0,
                type: "byte"
              },
              green: {
                idx: 1,
                type: "byte"
              },
              blue: {
                idx: 2,
                type: "byte"
              }
            }
          },
          hsla: {
            props: {
              hue: {
                idx: 0,
                type: "degrees"
              },
              saturation: {
                idx: 1,
                type: "percent"
              },
              lightness: {
                idx: 2,
                type: "percent"
              }
            }
          }
        },
        c = {
          "byte": {
            floor: !0,
            max: 255
          },
          percent: {
            max: 1
          },
          degrees: {
            mod: 360,
            floor: !0
          }
        },
        p = u.support = {},
        f = t("<p>")[0],
        m = t.each;
      f.style.cssText = "background-color:rgba(1,1,1,.5)", p.rgba = f.style.backgroundColor.indexOf("rgba") > -1, m(d, function (e, t) {
        t.cache = "_" + e, t.props.alpha = {
          idx: 3,
          type: "percent",
          def: 1
        }
      }), u.fn = t.extend(u.prototype, {
        parse: function (n, o, h, l) {
          if (n === i) return this._rgba = [null, null, null, null], this;
          (n.jquery || n.nodeType) && (n = t(n).css(o), o = i);
          var c = this,
            p = t.type(n),
            f = this._rgba = [];
          return o !== i && (n = [n, o, h, l], p = "array"), "string" === p ? this.parse(s(n) || r._default) : "array" === p ? (m(d.rgba.props, function (e, t) {
            f[t.idx] = a(n[t.idx], t)
          }), this) : "object" === p ? (n instanceof u ? m(d, function (e, t) {
            n[t.cache] && (c[t.cache] = n[t.cache].slice())
          }) : m(d, function (t, i) {
            var s = i.cache;
            m(i.props, function (e, t) {
              if (!c[s] && i.to) {
                if ("alpha" === e || null == n[e]) return;
                c[s] = i.to(c._rgba)
              }
              c[s][t.idx] = a(n[e], t, !0)
            }), c[s] && 0 > e.inArray(null, c[s].slice(0, 3)) && (c[s][3] = 1, i.from && (c._rgba = i.from(c[s])))
          }), this) : i
        },
        is: function (e) {
          var t = u(e),
            a = !0,
            s = this;
          return m(d, function (e, n) {
            var r, o = t[n.cache];
            return o && (r = s[n.cache] || n.to && n.to(s._rgba) || [], m(n.props, function (e, t) {
              return null != o[t.idx] ? a = o[t.idx] === r[t.idx] : i
            })), a
          }), a
        },
        _space: function () {
          var e = [],
            t = this;
          return m(d, function (i, a) {
            t[a.cache] && e.push(i)
          }), e.pop()
        },
        transition: function (e, t) {
          var i = u(e),
            s = i._space(),
            n = d[s],
            r = 0 === this.alpha() ? u("transparent") : this,
            o = r[n.cache] || n.to(r._rgba),
            h = o.slice();
          return i = i[n.cache], m(n.props, function (e, s) {
            var n = s.idx,
              r = o[n],
              l = i[n],
              u = c[s.type] || {};
            null !== l && (null === r ? h[n] = l : (u.mod && (l - r > u.mod / 2 ? r += u.mod : r - l > u.mod / 2 && (r -= u.mod)), h[n] = a((l - r) * t + r, s)))
          }), this[s](h)
        },
        blend: function (e) {
          if (1 === this._rgba[3]) return this;
          var i = this._rgba.slice(),
            a = i.pop(),
            s = u(e)._rgba;
          return u(t.map(i, function (e, t) {
            return (1 - a) * s[t] + a * e
          }))
        },
        toRgbaString: function () {
          var e = "rgba(",
            i = t.map(this._rgba, function (e, t) {
              return null == e ? t > 2 ? 1 : 0 : e
            });
          return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
        },
        toHslaString: function () {
          var e = "hsla(",
            i = t.map(this.hsla(), function (e, t) {
              return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
            });
          return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
        },
        toHexString: function (e) {
          var i = this._rgba.slice(),
            a = i.pop();
          return e && i.push(~~(255 * a)), "#" + t.map(i, function (e) {
            return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
          }).join("")
        },
        toString: function () {
          return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }
      }), u.fn.parse.prototype = u.fn, d.hsla.to = function (e) {
        if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
        var t, i, a = e[0] / 255,
          s = e[1] / 255,
          n = e[2] / 255,
          r = e[3],
          o = Math.max(a, s, n),
          h = Math.min(a, s, n),
          l = o - h,
          u = o + h,
          d = .5 * u;
        return t = h === o ? 0 : a === o ? 60 * (s - n) / l + 360 : s === o ? 60 * (n - a) / l + 120 : 60 * (a - s) / l + 240, i = 0 === d || 1 === d ? d : .5 >= d ? l / u : l / (2 - u), [Math.round(t) % 360, i, d, null == r ? 1 : r]
      }, d.hsla.from = function (e) {
        if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
        var t = e[0] / 360,
          i = e[1],
          a = e[2],
          s = e[3],
          r = .5 >= a ? a * (1 + i) : a + i - a * i,
          o = 2 * a - r;
        return [Math.round(255 * n(o, r, t + 1 / 3)), Math.round(255 * n(o, r, t)), Math.round(255 * n(o, r, t - 1 / 3)), s]
      }, m(d, function (e, s) {
        var n = s.props,
          r = s.cache,
          o = s.to,
          l = s.from;
        u.fn[e] = function (e) {
          if (o && !this[r] && (this[r] = o(this._rgba)), e === i) return this[r].slice();
          var s, h = t.type(e),
            d = "array" === h || "object" === h ? e : arguments,
            c = this[r].slice();
          return m(n, function (e, t) {
            var i = d["object" === h ? e : t.idx];
            null == i && (i = c[t.idx]), c[t.idx] = a(i, t)
          }), l ? (s = u(l(c)), s[r] = c, s) : u(c)
        }, m(n, function (i, a) {
          u.fn[i] || (u.fn[i] = function (s) {
            var n, r = t.type(s),
              o = "alpha" === i ? this._hsla ? "hsla" : "rgba" : e,
              l = this[o](),
              u = l[a.idx];
            return "undefined" === r ? u : ("function" === r && (s = s.call(this, u), r = t.type(s)), null == s && a.empty ? this : ("string" === r && (n = h.exec(s), n && (s = u + parseFloat(n[2]) * ("+" === n[1] ? 1 : -1))), l[a.idx] = s, this[o](l)))
          })
        })
      }), m(o, function (e, i) {
        t.cssHooks[i] = {
          set: function (e, a) {
            var n, r, o = "";
            if ("string" !== t.type(a) || (n = s(a))) {
              if (a = u(n || a), !p.rgba && 1 !== a._rgba[3]) {
                for (r = "backgroundColor" === i ? e.parentNode : e;
                  ("" === o || "transparent" === o) && r && r.style;) try {
                  o = t.css(r, "backgroundColor"), r = r.parentNode
                } catch (h) {}
                a = a.blend(o && "transparent" !== o ? o : "_default")
              }
              a = a.toRgbaString()
            }
            try {
              e.style[i] = a
            } catch (l) {}
          }
        }, t.fx.step[i] = function (e) {
          e.colorInit || (e.start = u(e.elem, i), e.end = u(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
        }
      }), t.cssHooks.borderColor = {
        expand: function (e) {
          var t = {};
          return m(["Top", "Right", "Bottom", "Left"], function (i, a) {
            t["border" + a + "Color"] = e
          }), t
        }
      }, r = t.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
      }
    }(jQuery),
    function () {
      function i() {
        var t, i, a = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
          s = {};
        if (a && a.length && a[0] && a[a[0]])
          for (i = a.length; i--;) t = a[i], "string" == typeof a[t] && (s[e.camelCase(t)] = a[t]);
        else
          for (t in a) "string" == typeof a[t] && (s[t] = a[t]);
        return s
      }

      function a(t, i) {
        var a, s, r = {};
        for (a in i) s = i[a], t[a] !== s && (n[a] || (e.fx.step[a] || !isNaN(parseFloat(s))) && (r[a] = s));
        return r
      }
      var s = ["add", "remove", "toggle"],
        n = {
          border: 1,
          borderBottom: 1,
          borderColor: 1,
          borderLeft: 1,
          borderRight: 1,
          borderTop: 1,
          borderWidth: 1,
          margin: 1,
          padding: 1
        };
      e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, i) {
        e.fx.step[i] = function (e) {
          ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (jQuery.style(e.elem, i, e.end), e.setAttr = !0)
        }
      }), e.effects.animateClass = function (t, n, r, o) {
        var h = e.speed(n, r, o);
        return this.queue(function () {
          var n, r = e(this),
            o = r.attr("class") || "",
            l = h.children ? r.find("*").andSelf() : r;
          l = l.map(function () {
            var t = e(this);
            return {
              el: t,
              start: i.call(this)
            }
          }), n = function () {
            e.each(s, function (e, i) {
              t[i] && r[i + "Class"](t[i])
            })
          }, n(), l = l.map(function () {
            return this.end = i.call(this.el[0]), this.diff = a(this.start, this.end), this
          }), r.attr("class", o), l = l.map(function () {
            var t = this,
              i = e.Deferred(),
              a = jQuery.extend({}, h, {
                queue: !1,
                complete: function () {
                  i.resolve(t)
                }
              });
            return this.el.animate(this.diff, a), i.promise()
          }), e.when.apply(e, l.get()).done(function () {
            n(), e.each(arguments, function () {
              var t = this.el;
              e.each(this.diff, function (e) {
                t.css(e, "")
              })
            }), h.complete.call(r[0])
          })
        })
      }, e.fn.extend({
        _addClass: e.fn.addClass,
        addClass: function (t, i, a, s) {
          return i ? e.effects.animateClass.call(this, {
            add: t
          }, i, a, s) : this._addClass(t)
        },
        _removeClass: e.fn.removeClass,
        removeClass: function (t, i, a, s) {
          return i ? e.effects.animateClass.call(this, {
            remove: t
          }, i, a, s) : this._removeClass(t)
        },
        _toggleClass: e.fn.toggleClass,
        toggleClass: function (i, a, s, n, r) {
          return "boolean" == typeof a || a === t ? s ? e.effects.animateClass.call(this, a ? {
            add: i
          } : {
            remove: i
          }, s, n, r) : this._toggleClass(i, a) : e.effects.animateClass.call(this, {
            toggle: i
          }, a, s, n)
        },
        switchClass: function (t, i, a, s, n) {
          return e.effects.animateClass.call(this, {
            add: i,
            remove: t
          }, a, s, n)
        }
      })
    }(),
    function () {
      function s(t, i, a, s) {
        return e.isPlainObject(t) && (i = t, t = t.effect), t = {
          effect: t
        }, null == i && (i = {}), e.isFunction(i) && (s = i, a = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (s = a, a = i, i = {}), e.isFunction(a) && (s = a, a = null), i && e.extend(t, i), a = a || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof a ? a : a in e.fx.speeds ? e.fx.speeds[a] : e.fx.speeds._default, t.complete = s || i.complete, t
      }

      function n(t) {
        return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? !1 : i && e.effects[t] ? !1 : !0
      }
      e.extend(e.effects, {
        version: "1.9.2",
        save: function (e, t) {
          for (var i = 0; t.length > i; i++) null !== t[i] && e.data(a + t[i], e[0].style[t[i]])
        },
        restore: function (e, i) {
          var s, n;
          for (n = 0; i.length > n; n++) null !== i[n] && (s = e.data(a + i[n]), s === t && (s = ""), e.css(i[n], s))
        },
        setMode: function (e, t) {
          return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
        },
        getBaseline: function (e, t) {
          var i, a;
          switch (e[0]) {
            case "top":
              i = 0;
              break;
            case "middle":
              i = .5;
              break;
            case "bottom":
              i = 1;
              break;
            default:
              i = e[0] / t.height
          }
          switch (e[1]) {
            case "left":
              a = 0;
              break;
            case "center":
              a = .5;
              break;
            case "right":
              a = 1;
              break;
            default:
              a = e[1] / t.width
          }
          return {
            x: a,
            y: i
          }
        },
        createWrapper: function (t) {
          if (t.parent().is(".ui-effects-wrapper")) return t.parent();
          var i = {
              width: t.outerWidth(!0),
              height: t.outerHeight(!0),
              "float": t.css("float")
            },
            a = e("<div></div>").addClass("ui-effects-wrapper").css({
              fontSize: "100%",
              background: "transparent",
              border: "none",
              margin: 0,
              padding: 0
            }),
            s = {
              width: t.width(),
              height: t.height()
            },
            n = document.activeElement;
          try {
            n.id
          } catch (r) {
            n = document.body
          }
          return t.wrap(a), (t[0] === n || e.contains(t[0], n)) && e(n).focus(), a = t.parent(), "static" === t.css("position") ? (a.css({
            position: "relative"
          }), t.css({
            position: "relative"
          })) : (e.extend(i, {
            position: t.css("position"),
            zIndex: t.css("z-index")
          }), e.each(["top", "left", "bottom", "right"], function (e, a) {
            i[a] = t.css(a), isNaN(parseInt(i[a], 10)) && (i[a] = "auto")
          }), t.css({
            position: "relative",
            top: 0,
            left: 0,
            right: "auto",
            bottom: "auto"
          })), t.css(s), a.css(i).show()
        },
        removeWrapper: function (t) {
          var i = document.activeElement;
          return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t
        },
        setTransition: function (t, i, a, s) {
          return s = s || {}, e.each(i, function (e, i) {
            var n = t.cssUnit(i);
            n[0] > 0 && (s[i] = n[0] * a + n[1])
          }), s
        }
      }), e.fn.extend({
        effect: function () {
          function t(t) {
            function i() {
              e.isFunction(n) && n.call(s[0]), e.isFunction(t) && t()
            }
            var s = e(this),
              n = a.complete,
              r = a.mode;
            (s.is(":hidden") ? "hide" === r : "show" === r) ? i(): o.call(s[0], a, i)
          }
          var a = s.apply(this, arguments),
            n = a.mode,
            r = a.queue,
            o = e.effects.effect[a.effect],
            h = !o && i && e.effects[a.effect];
          return e.fx.off || !o && !h ? n ? this[n](a.duration, a.complete) : this.each(function () {
            a.complete && a.complete.call(this)
          }) : o ? r === !1 ? this.each(t) : this.queue(r || "fx", t) : h.call(this, {
            options: a,
            duration: a.duration,
            callback: a.complete,
            mode: a.mode
          })
        },
        _show: e.fn.show,
        show: function (e) {
          if (n(e)) return this._show.apply(this, arguments);
          var t = s.apply(this, arguments);
          return t.mode = "show", this.effect.call(this, t)
        },
        _hide: e.fn.hide,
        hide: function (e) {
          if (n(e)) return this._hide.apply(this, arguments);
          var t = s.apply(this, arguments);
          return t.mode = "hide", this.effect.call(this, t)
        },
        __toggle: e.fn.toggle,
        toggle: function (t) {
          if (n(t) || "boolean" == typeof t || e.isFunction(t)) return this.__toggle.apply(this, arguments);
          var i = s.apply(this, arguments);
          return i.mode = "toggle", this.effect.call(this, i)
        },
        cssUnit: function (t) {
          var i = this.css(t),
            a = [];
          return e.each(["em", "px", "%", "pt"], function (e, t) {
            i.indexOf(t) > 0 && (a = [parseFloat(i), t])
          }), a
        }
      })
    }(),
    function () {
      var t = {};
      e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, i) {
        t[i] = function (t) {
          return Math.pow(t, e + 2)
        }
      }), e.extend(t, {
        Sine: function (e) {
          return 1 - Math.cos(e * Math.PI / 2)
        },
        Circ: function (e) {
          return 1 - Math.sqrt(1 - e * e)
        },
        Elastic: function (e) {
          return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
        },
        Back: function (e) {
          return e * e * (3 * e - 2)
        },
        Bounce: function (e) {
          for (var t, i = 4;
            ((t = Math.pow(2, --i)) - 1) / 11 > e;);
          return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
        }
      }), e.each(t, function (t, i) {
        e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function (e) {
          return 1 - i(1 - e)
        }, e.easing["easeInOut" + t] = function (e) {
          return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
        }
      })
    }()
}(jQuery);


/**
 * multiscroll.js 0.1.6 Beta
 * https://github.com/alvarotrigo/multiscroll.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */
! function (a) {
  a.fn.multiscroll = function (b) {
    function m() {
      var b = window.location.hash.replace("#", ""),
        c = b;
      if (c.length) {
        var d = a(".ms-left").find('[data-anchor="' + c + '"]'),
          e = "undefined" == typeof lastScrolledDestiny;
        (e || c !== lastScrolledDestiny) && p(d)
      }
    }

    function n() {
      h = a(window).height(), a(".ms-tableCell").each(function () {
        a(this).css({
          height: B(a(this).parent())
        })
      }), o(), a.isFunction(b.afterResize) && b.afterResize.call(this)
    }

    function o() {
      b.css3 ? (t(a(".ms-left"), "translate3d(0px, -" + a(".ms-left").find(".ms-section.active").position().top + "px, 0px)", !1), t(a(".ms-right"), "translate3d(0px, -" + a(".ms-right").find(".ms-section.active").position().top + "px, 0px)", !1)) : (a(".ms-left").css("top", -a(".ms-left").find(".ms-section.active").position().top), a(".ms-right").css("top", -a(".ms-right").find(".ms-section.active").position().top))
    }

    function p(d) {
      var g = d.index(),
        h = a(".ms-right").find(".ms-section").eq(e - 1 - g),
        j = d.data("anchor"),
        k = a(".ms-left .ms-section.active"),
        l = k.index() + 1,
        m = x(d);
      f = !0, y(j);
      var n = {
        left: d.position().top,
        right: h.position().top
      };
      if (h.addClass("active").siblings().removeClass("active"), d.addClass("active").siblings().removeClass("active"), b.css3) {
        a.isFunction(b.onLeave) && b.onLeave.call(this, l, g + 1, m);
        var o = "translate3d(0px, -" + n.left + "px, 0px)",
          p = "translate3d(0px, -" + n.right + "px, 0px)";
        t(a(".ms-left"), o, !0), t(a(".ms-right"), p, !0), setTimeout(function () {
          a.isFunction(b.afterLoad) && b.afterLoad.call(this, j, g + 1), setTimeout(function () {
            f = !1
          }, c)
        }, b.scrollingSpeed)
      } else a.isFunction(b.onLeave) && b.onLeave.call(this, l, g + 1, m), a(".ms-left").animate({
        top: -n.left
      }, b.scrollingSpeed, b.easing, function () {
        a.isFunction(b.afterLoad) && b.afterLoad.call(this, j, g + 1), setTimeout(function () {
          f = !1
        }, c)
      }), a(".ms-right").animate({
        top: -n.right
      }, b.scrollingSpeed, b.easing);
      lastScrolledDestiny = j, w(j), v(j, g)
    }

    function q() {
      document.addEventListener ? (document.removeEventListener("mousewheel", s, !1), document.removeEventListener("wheel", s, !1)) : document.detachEvent("onmousewheel", s)
    }

    function r() {
      document.addEventListener ? (document.addEventListener("mousewheel", s, !1), document.addEventListener("wheel", s, !1)) : document.attachEvent("onmousewheel", s)
    }

    function s(b) {
      b = window.event || b;
      var c = Math.max(-1, Math.min(1, b.wheelDelta || -b.deltaY || -b.detail));
      return f || (c < 0 ? a.fn.multiscroll.moveSectionDown() : a.fn.multiscroll.moveSectionUp()), !1
    }

    function t(a, b, c) {
      a.toggleClass("ms-easing", c), a.css(u(b))
    }

    function u(a) {
      return {
        "-webkit-transform": a,
        "-moz-transform": a,
        "-ms-transform": a,
        transform: a
      }
    }

    function v(c, d) {
      b.navigation && (a("#multiscroll-nav").find(".active").removeClass("active"), c ? a("#multiscroll-nav").find('a[href="#' + c + '"]').addClass("active") : a("#multiscroll-nav").find("li").eq(d).find("a").addClass("active"))
    }

    function w(c) {
      b.menu && (a(b.menu).find(".active").removeClass("active"), a(b.menu).find('[data-menuanchor="' + c + '"]').addClass("active"))
    }

    function x(b) {
      var c = a(".ms-left .ms-section.active").index(),
        d = b.index();
      return c > d ? "up" : "down"
    }

    function y(a) {
      b.anchors.length && (location.hash = a)
    }

    function z() {
      var b, a = document.createElement("p"),
        c = {
          webkitTransform: "-webkit-transform",
          OTransform: "-o-transform",
          msTransform: "-ms-transform",
          MozTransform: "-moz-transform",
          transform: "transform"
        };
      document.body.insertBefore(a, null);
      for (var d in c) void 0 !== a.style[d] && (a.style[d] = "translate3d(1px,1px,1px)", b = window.getComputedStyle(a).getPropertyValue(c[d]));
      return document.body.removeChild(a), void 0 !== b && b.length > 0 && "none" !== b
    }

    function A(a) {
      a.addClass("ms-table").wrapInner('<div class="ms-tableCell" style="height: ' + B(a) + 'px" />')
    }

    function B(a) {
      var c = h;
      if (b.paddingTop || b.paddingBottom) {
        var d = parseInt(a.css("padding-top")) + parseInt(a.css("padding-bottom"));
        c = h - d
      }
      return c
    }

    function C() {
      var b = window.location.hash.replace("#", ""),
        c = a('.ms-left .ms-section[data-anchor="' + b + '"]');
      b.length && p(c)
    }
    b = a.extend({
      verticalCentered: !0,
      scrollingSpeed: 700,
      easing: "easeInQuart",
      menu: !1,
      sectionsColor: [],
      anchors: [],
      navigation: !1,
      navigationPosition: "right",
      navigationColor: "#000",
      navigationTooltips: [],
      loopBottom: !1,
      loopTop: !1,
      css3: !1,
      paddingTop: 0,
      paddingBottom: 0,
      fixedElements: null,
      normalScrollElements: null,
      keyboardScrolling: !0,
      touchSensitivity: 5,
      sectionSelector: ".ms-section",
      leftSelector: ".ms-left",
      rightSelector: ".ms-right",
      afterLoad: null,
      onLeave: null,
      afterRender: null,
      afterResize: null
    }, b);
    var c = 600;
    "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
    ".ms-right" !== b.rightSelector && a(b.rightSelector).addClass("ms-right"), ".ms-left" !== b.leftSelector && a(b.leftSelector).addClass("ms-left");
    var g, e = a(".ms-left").find(".ms-section").length,
      f = !1,
      h = a(window).height();
    if (r(), b.css3 && (b.css3 = z()), a("html, body").css({
        overflow: "hidden",
        height: "100%"
      }), ".ms-section" !== b.sectionSelector && a(b.sectionSelector).each(function () {
        a(this).addClass("ms-section")
      }), b.navigation) {
      a("body").append('<div id="multiscroll-nav"><ul></ul></div>'), g = a("#multiscroll-nav"), g.css("color", b.navigationColor), g.addClass(b.navigationPosition);
      for (var i = 0; i < a(".ms-left .ms-section").length; i++) {
        var j = "";
        b.anchors.length && (j = b.anchors[i]);
        var k = b.navigationTooltips[i];
        k = void 0 !== k && "" !== k ? k : "";
        var l = '<li><a class="link-nav" href="#' + j + '"><span>' + ("" !== k ? '<div class="multiscroll-tooltip ' + b.navigationPosition + '">' + k + "</div>" : "") + "</span></a></li>";
        g.find("ul").append(l)
      }
    }
    a(".ms-right, .ms-left").css({
      width: "50%",
      position: "absolute",
      height: "100%"
    }), a(".ms-right").css({
      right: "1px",
      top: "0"
    }), a(".ms-left").css({
      left: "0",
      top: "0"
    }), a(".ms-left .ms-section, .ms-right .ms-section").each(function () {
      var c = a(this).index();
      if ((b.paddingTop || b.paddingBottom) && a(this).css("padding", b.paddingTop + " 0 " + b.paddingBottom + " 0"), "undefined" != typeof b.sectionsColor[c] && a(this).css("background-color", b.sectionsColor[c]), "undefined" != typeof b.anchors[c] && a(this).attr("data-anchor", b.anchors[c]), b.verticalCentered && A(a(this)), a(this).closest(".ms-left").length && b.navigation) {
        var d = "";
        b.anchors.length && (d = b.anchors[c]);
        var e = b.navigationTooltips[c];
        "undefined" == typeof e && (e = "")
      }
    }), a(".ms-right").html(a(".ms-right").find(".ms-section").get().reverse()), a(".ms-left .ms-section, .ms-right .ms-section").each(function () {
      var c = a(this).index();
      a(this).css({
        height: "100%"
      }), !c && b.navigation && g.find("li").eq(c).find("a").addClass("active")
    }).promise().done(function () {
      a(".ms-left .ms-section.active").length || (a(".ms-right").find(".ms-section").last().addClass("active"), a(".ms-left").find(".ms-section").first().addClass("active")), a.isFunction(b.afterRender) && b.afterRender.call(this), o(), a(window).on("load", function () {
        C()
      })
    }), a(window).on("hashchange", m), a(document).keydown(function (c) {
      if (40 != c.which && 38 != c.which || c.preventDefault(), b.keyboardScrolling && !f) switch (c.which) {
        case 38:
        case 33:
          a.fn.multiscroll.moveSectionUp();
          break;
        case 40:
        case 34:
          a.fn.multiscroll.moveSectionDown();
          break;
        case 36:
          a.fn.multiscroll.moveTo(1);
          break;
        case 35:
          a.fn.multiscroll.moveTo(a(".ms-left .ms-section").length);
          break;
        default:
          return
      }
    }), a(document).mousedown(function (a) {
      if (1 == a.button) return a.preventDefault(), !1
    }), a(document).on("click", "#multiscroll-nav a", function (b) {
      b.preventDefault();
      var c = a(this).parent().index();
      p(a(".ms-left .ms-section").eq(c))
    }), b.normalScrollElements && (a(document).on("mouseenter", b.normalScrollElements, function () {
      a.fn.multiscroll.setMouseWheelScrolling(!1)
    }), a(document).on("mouseleave", b.normalScrollElements, function () {
      a.fn.multiscroll.setMouseWheelScrolling(!0)
    })), a(window).on("resize", n), a.fn.multiscroll.moveSectionUp = function () {
      var c = a(".ms-left .ms-section.active").prev(".ms-section");
      !c.length && b.loopTop && (c = a(".ms-left .ms-section").last()), c.length && p(c)
    }, a.fn.multiscroll.moveSectionDown = function () {
      var c = a(".ms-left .ms-section.active").next(".ms-section");
      !c.length && b.loopBottom && (c = a(".ms-left .ms-section").first()), c.length && p(c)
    }, a.fn.multiscroll.moveTo = function (b) {
      var c = "";
      c = isNaN(b) ? a('.ms-left [data-anchor="' + b + '"]') : a(".ms-left .ms-section").eq(b - 1), p(c)
    }, a.fn.multiscroll.setKeyboardScrolling = function (a) {
      b.keyboardScrolling = a
    }, a.fn.multiscroll.setMouseWheelScrolling = function (a) {
      a ? r() : q()
    }, a.fn.multiscroll.setScrollingSpeed = function (a) {
      b.scrollingSpeed = a
    };
    a.fn.multiscroll.destroy = function () {
      a.fn.multiscroll.setKeyboardScrolling(!1), a.fn.multiscroll.setMouseWheelScrolling(!1), a("#right-1").insertAfter("#left-1"), a("#right-2").insertAfter("#left-2"), a("#right-3").insertAfter("#left-3"), a("#right-4").insertAfter("#left-4"), a(window).off("hashchange", m).off("resize", n)
    }, a.fn.multiscroll.build = function () {
      a.fn.multiscroll.setKeyboardScrolling(!0), a.fn.multiscroll.setMouseWheelScrolling(!0), a("#right-1").prependTo("#right-part"), a("#right-2").prependTo("#right-part"), a("#right-3").prependTo("#right-part"), a("#right-4").prependTo("#right-part"), a(window).on("hashchange", m).on("resize", n)
    }
  }
}(jQuery);


/*!-----------------------------------------------------------------------------
 * Vegas - Fullscreen Backgrounds and Slideshows.
 * v2.3.1 - built 2016-09-18
 * Licensed under the MIT License.
 * http://vegas.jaysalvat.com/
 * ----------------------------------------------------------------------------
 * Copyright (C) 2010-2016 Jay Salvat
 * http://jaysalvat.com/
 * --------------------------------------------------------------------------*/
! function (t) {
  "use strict";
  var s = {
      slide: 0,
      delay: 5e3,
      loop: !0,
      preload: !1,
      preloadImage: !1,
      preloadVideo: !1,
      timer: !0,
      overlay: !1,
      autoplay: !0,
      shuffle: !1,
      cover: !0,
      color: null,
      align: "center",
      valign: "center",
      firstTransition: null,
      firstTransitionDuration: null,
      transition: "fade",
      transitionDuration: 1e3,
      transitionRegister: [],
      animation: null,
      animationDuration: "auto",
      animationRegister: [],
      init: function () {},
      play: function () {},
      pause: function () {},
      walk: function () {},
      slides: []
    },
    i = {},
    e = function (i, e) {
      this.elmt = i, this.settings = t.extend({}, s, t.vegas.defaults, e), this.slide = this.settings.slide, this.total = this.settings.slides.length, this.noshow = this.total < 2, this.paused = !this.settings.autoplay || this.noshow, this.ended = !1, this.$elmt = t(i), this.$timer = null, this.$overlay = null, this.$slide = null, this.timeout = null, this.first = !0, this.transitions = ["fade", "fade2", "blur", "blur2", "flash", "flash2", "negative", "negative2", "burn", "burn2", "slideLeft", "slideLeft2", "slideRight", "slideRight2", "slideUp", "slideUp2", "slideDown", "slideDown2", "zoomIn", "zoomIn2", "zoomOut", "zoomOut2", "swirlLeft", "swirlLeft2", "swirlRight", "swirlRight2"], this.animations = ["kenburns", "kenburnsLeft", "kenburnsRight", "kenburnsUp", "kenburnsUpLeft", "kenburnsUpRight", "kenburnsDown", "kenburnsDownLeft", "kenburnsDownRight"], this.settings.transitionRegister instanceof Array == !1 && (this.settings.transitionRegister = [this.settings.transitionRegister]), this.settings.animationRegister instanceof Array == !1 && (this.settings.animationRegister = [this.settings.animationRegister]), this.transitions = this.transitions.concat(this.settings.transitionRegister), this.animations = this.animations.concat(this.settings.animationRegister), this.support = {
        objectFit: "objectFit" in document.body.style,
        transition: "transition" in document.body.style || "WebkitTransition" in document.body.style,
        video: t.vegas.isVideoCompatible()
      }, this.settings.shuffle === !0 && this.shuffle(), this._init()
    };
  e.prototype = {
    _init: function () {
      var s, i, e, n = "BODY" === this.elmt.tagName,
        o = this.settings.timer,
        a = this.settings.overlay,
        r = this;
      this._preload(), n || (this.$elmt.css("height", this.$elmt.css("height")), s = t('<div class="vegas-wrapper">').css("overflow", this.$elmt.css("overflow")).css("padding", this.$elmt.css("padding")), this.$elmt.css("padding") || s.css("padding-top", this.$elmt.css("padding-top")).css("padding-bottom", this.$elmt.css("padding-bottom")).css("padding-left", this.$elmt.css("padding-left")).css("padding-right", this.$elmt.css("padding-right")), this.$elmt.clone(!0).children().appendTo(s), this.elmt.innerHTML = ""), o && this.support.transition && (e = t('<div class="vegas-timer"><div class="vegas-timer-progress">'), this.$timer = e, this.$elmt.prepend(e)), a && (i = t('<div class="vegas-overlay">'), "string" == typeof a && i.css("background-image", "url(" + a + ")"), this.$overlay = i, this.$elmt.prepend(i)), this.$elmt.addClass("vegas-container"), n || this.$elmt.append(s), setTimeout(function () {
        r.trigger("init"), r._goto(r.slide), r.settings.autoplay && r.trigger("play")
      }, 1)
    },
    _preload: function () {
      var t, s;
      for (s = 0; s < this.settings.slides.length; s++)(this.settings.preload || this.settings.preloadImages) && this.settings.slides[s].src && (t = new Image, t.src = this.settings.slides[s].src), (this.settings.preload || this.settings.preloadVideos) && this.support.video && this.settings.slides[s].video && (this.settings.slides[s].video instanceof Array ? this._video(this.settings.slides[s].video) : this._video(this.settings.slides[s].video.src))
    },
    _random: function (t) {
      return t[Math.floor(Math.random() * t.length)]
    },
    _slideShow: function () {
      var t = this;
      this.total > 1 && !this.ended && !this.paused && !this.noshow && (this.timeout = setTimeout(function () {
        t.next()
      }, this._options("delay")))
    },
    _timer: function (t) {
      var s = this;
      clearTimeout(this.timeout), this.$timer && (this.$timer.removeClass("vegas-timer-running").find("div").css("transition-duration", "0ms"), this.ended || this.paused || this.noshow || t && setTimeout(function () {
        s.$timer.addClass("vegas-timer-running").find("div").css("transition-duration", s._options("delay") - 100 + "ms")
      }, 100))
    },
    _video: function (t) {
      var s, e, n = t.toString();
      return i[n] ? i[n] : (t instanceof Array == !1 && (t = [t]), s = document.createElement("video"), s.preload = !0, t.forEach(function (t) {
        e = document.createElement("source"), e.src = t, s.appendChild(e)
      }), i[n] = s, s)
    },
    _fadeOutSound: function (t, s) {
      var i = this,
        e = s / 10,
        n = t.volume - .09;
      n > 0 ? (t.volume = n, setTimeout(function () {
        i._fadeOutSound(t, s)
      }, e)) : t.pause()
    },
    _fadeInSound: function (t, s) {
      var i = this,
        e = s / 10,
        n = t.volume + .09;
      1 > n && (t.volume = n, setTimeout(function () {
        i._fadeInSound(t, s)
      }, e))
    },
    _options: function (t, s) {
      return void 0 === s && (s = this.slide), void 0 !== this.settings.slides[s][t] ? this.settings.slides[s][t] : this.settings[t]
    },
    _goto: function (s) {
      function i() {
        f._timer(!0), setTimeout(function () {
          y && (f.support.transition ? (h.css("transition", "all " + _ + "ms").addClass("vegas-transition-" + y + "-out"), h.each(function () {
            var t = h.find("video").get(0);
            t && (t.volume = 1, f._fadeOutSound(t, _))
          }), e.css("transition", "all " + _ + "ms").addClass("vegas-transition-" + y + "-in")) : e.fadeIn(_));
          for (var t = 0; t < h.length - 4; t++) h.eq(t).remove();
          f.trigger("walk"), f._slideShow()
        }, 100)
      }
      "undefined" == typeof this.settings.slides[s] && (s = 0), this.slide = s;
      var e, n, o, a, r, h = this.$elmt.children(".vegas-slide"),
        d = this.settings.slides[s].src,
        l = this.settings.slides[s].video,
        g = this._options("delay"),
        u = this._options("align"),
        c = this._options("valign"),
        p = this._options("cover"),
        m = this._options("color") || this.$elmt.css("background-color"),
        f = this,
        v = h.length,
        y = this._options("transition"),
        _ = this._options("transitionDuration"),
        w = this._options("animation"),
        b = this._options("animationDuration");
      this.settings.firstTransition && this.first && (y = this.settings.firstTransition || y), this.settings.firstTransitionDuration && this.first && (_ = this.settings.firstTransitionDuration || _), this.first && (this.first = !1), "repeat" !== p && (p === !0 ? p = "cover" : p === !1 && (p = "contain")), ("random" === y || y instanceof Array) && (y = y instanceof Array ? this._random(y) : this._random(this.transitions)), ("random" === w || w instanceof Array) && (w = w instanceof Array ? this._random(w) : this._random(this.animations)), ("auto" === _ || _ > g) && (_ = g), "auto" === b && (b = g), e = t('<div class="vegas-slide"></div>'), this.support.transition && y && e.addClass("vegas-transition-" + y), this.support.video && l ? (a = l instanceof Array ? this._video(l) : this._video(l.src), a.loop = void 0 !== l.loop ? l.loop : !0, a.muted = void 0 !== l.mute ? l.mute : !0, a.muted === !1 ? (a.volume = 0, this._fadeInSound(a, _)) : a.pause(), o = t(a).addClass("vegas-video").css("background-color", m), this.support.objectFit ? o.css("object-position", u + " " + c).css("object-fit", p).css("width", "100%").css("height", "100%") : "contain" === p && o.css("width", "100%").css("height", "100%"), e.append(o)) : (r = new Image, n = t('<div class="vegas-slide-inner"></div>').css("background-image", 'url("' + d + '")').css("background-color", m).css("background-position", u + " " + c), "repeat" === p ? n.css("background-repeat", "repeat") : n.css("background-size", p), this.support.transition && w && n.addClass("vegas-animation-" + w).css("animation-duration", b + "ms"), e.append(n)), this.support.transition || e.css("display", "none"), v ? h.eq(v - 1).after(e) : this.$elmt.prepend(e), h.css("transition", "all 0ms").each(function () {
        this.className = "vegas-slide", "VIDEO" === this.tagName && (this.className += " vegas-video"), y && (this.className += " vegas-transition-" + y, this.className += " vegas-transition-" + y + "-in")
      }), f._timer(!1), a ? (4 === a.readyState && (a.currentTime = 0), a.play(), i()) : (r.src = d, r.complete ? i() : r.onload = i)
    },
    _end: function () {
      this.ended = !0, this._timer(!1), this.trigger("end")
    },
    shuffle: function () {
      for (var t, s, i = this.total - 1; i > 0; i--) s = Math.floor(Math.random() * (i + 1)), t = this.settings.slides[i], this.settings.slides[i] = this.settings.slides[s], this.settings.slides[s] = t
    },
    play: function () {
      this.paused && (this.paused = !1, this.next(), this.trigger("play"))
    },
    pause: function () {
      this._timer(!1), this.paused = !0, this.trigger("pause")
    },
    toggle: function () {
      this.paused ? this.play() : this.pause()
    },
    playing: function () {
      return !this.paused && !this.noshow
    },
    current: function (t) {
      return t ? {
        slide: this.slide,
        data: this.settings.slides[this.slide]
      } : this.slide
    },
    jump: function (t) {
      0 > t || t > this.total - 1 || t === this.slide || (this.slide = t, this._goto(this.slide))
    },
    next: function () {
      if (this.slide++, this.slide >= this.total) {
        if (!this.settings.loop) return this._end();
        this.slide = 0
      }
      this._goto(this.slide)
    },
    previous: function () {
      if (this.slide--, this.slide < 0) {
        if (!this.settings.loop) return void this.slide++;
        this.slide = this.total - 1
      }
      this._goto(this.slide)
    },
    trigger: function (t) {
      var s = [];
      s = "init" === t ? [this.settings] : [this.slide, this.settings.slides[this.slide]], this.$elmt.trigger("vegas" + t, s), "function" == typeof this.settings[t] && this.settings[t].apply(this.$elmt, s)
    },
    options: function (i, e) {
      var n = this.settings.slides.slice();
      if ("object" == typeof i) this.settings = t.extend({}, s, t.vegas.defaults, i);
      else {
        if ("string" != typeof i) return this.settings;
        if (void 0 === e) return this.settings[i];
        this.settings[i] = e
      }
      this.settings.slides !== n && (this.total = this.settings.slides.length, this.noshow = this.total < 2, this._preload())
    },
    destroy: function () {
      clearTimeout(this.timeout), this.$elmt.removeClass("vegas-container"), this.$elmt.find("> .vegas-slide").remove(), this.$elmt.find("> .vegas-wrapper").clone(!0).children().appendTo(this.$elmt), this.$elmt.find("> .vegas-wrapper").remove(), this.settings.timer && this.$timer.remove(), this.settings.overlay && this.$overlay.remove(), this.elmt._vegas = null
    }
  }, t.fn.vegas = function (t) {
    var s, i = arguments,
      n = !1;
    if (void 0 === t || "object" == typeof t) return this.each(function () {
      this._vegas || (this._vegas = new e(this, t))
    });
    if ("string" == typeof t) {
      if (this.each(function () {
          var e = this._vegas;
          if (!e) throw new Error("No Vegas applied to this element.");
          "function" == typeof e[t] && "_" !== t[0] ? s = e[t].apply(e, [].slice.call(i, 1)) : n = !0
        }), n) throw new Error('No method "' + t + '" in Vegas.');
      return void 0 !== s ? s : this
    }
  }, t.vegas = {}, t.vegas.defaults = s, t.vegas.isVideoCompatible = function () {
    return !/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent)
  }
}(window.jQuery || window.Zepto);
//# sourceMappingURL=vegas.min.js.map


// Intense Images v1.0.3
window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
    window.setTimeout(a, 1e3 / 60)
  }
}(), window.cancelRequestAnimFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
}();
var Intense = function () {
  "use strict";

  function p(a, b) {
    for (var c in b) c in a || (a[c] = b[c]);
    return a
  }

  function q(a, b) {
    for (var c in b) a.style[c] = b[c]
  }

  function r(a) {
    var b = window.innerHeight / a.h;
    if (a.w * b > window.innerWidth) return {
      w: a.w * b,
      h: a.h * b,
      fit: !0
    };
    var c = window.innerWidth / a.w;
    return {
      w: a.w * c,
      h: a.h * c,
      fit: !1
    }
  }

  function s(a) {
    var b;
    if (a.length)
      for (b = 0; b < a.length; b++) t(a[b]);
    else t(a)
  }

  function t(a) {
    (a.getAttribute("data-image") || a.src || a.href) && a.addEventListener("click", function (b) {
      "A" === a.tagName && b.preventDefault(), o || D(this)
    }, !1)
  }

  function u() {
    w()
  }

  function v() {
    cancelRequestAnimFrame(e)
  }

  function w() {
    e = requestAnimFrame(w), J()
  }

  function x() {
    n = document.body.style.overflow, document.body.style.overflow = "hidden"
  }

  function y() {
    document.body.style.overflow = n
  }

  function z(a, b) {
    if (a) a.className = a.className.replace("intense--loading", ""), a.className = a.className.replace("intense--viewing", ""), a.className += " " + b;
    else {
      var c = document.querySelectorAll(".intense--viewing");
      [].forEach.call(c, function (a) {
        a.className = a.className.replace("intense--viewing", "").trim()
      })
    }
  }

  function A(a, c) {
    var d = {
      backgroundColor: "rgba(0,0,0,0.8)",
      width: "100%",
      height: "100%",
      position: "fixed",
      top: "0px",
      left: "0px",
      overflow: "hidden",
      zIndex: "999999",
      margin: "0px",
      webkitTransition: "opacity 150ms cubic-bezier( 0, 0, .26, 1 )",
      MozTransition: "opacity 150ms cubic-bezier( 0, 0, .26, 1 )",
      transition: "opacity 150ms cubic-bezier( 0, 0, .26, 1 )",
      webkitBackfaceVisibility: "hidden",
      opacity: "0"
    };
    k = document.createElement("figure"), k.appendChild(i), q(k, d);
    var e = {
      cursor: 'url( "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3Q0IyNDI3M0FFMkYxMUUzOEQzQUQ5NTMxMDAwQjJGRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3Q0IyNDI3NEFFMkYxMUUzOEQzQUQ5NTMxMDAwQjJGRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdDQjI0MjcxQUUyRjExRTM4RDNBRDk1MzEwMDBCMkZEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdDQjI0MjcyQUUyRjExRTM4RDNBRDk1MzEwMDBCMkZEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+soZ1WgAABp5JREFUeNrcWn9MlVUY/u4dogIapV0gQ0SUO4WAXdT8B5ULc6uFgK3MLFxzFrQFZMtaed0oKTPj1x8EbbZZK5fNCdLWcvxQ+EOHyAQlBgiIVFxAJuUF7YrQ81zOtU+8F+Pe78K1d3s5537f+fE8nPec7z3vOSpJIRkbGwtEEgtdBdVCl0AXQr2hKqgJeg16BdoCrYNWqVSqbif7VQT8YqgB2jTmuDSJNoIcJUJVOVg5EsmH0Oehaj4bGRkZ6uvra2xvb29oamrqbGxs7K2vrx/s7Oy8yffBwcFzdTqdb0REhF9YWFhwSEhIpEajifDw8PAWzY5Cj0GzMUoNUx0R1RQJaJAcgKaw7ujo6O2urq7qysrKioyMjHNDQ0OjU2nP29tbnZ+fv1qv18cFBQWtU6vVs9gN9BvobhDqU5wIKryA5CuoLwj83dzc/NOePXuOlpSUXFNijiUlJS3ct2/fiytWrHgOhGbj0SD0dZD5UREiKOiJJA+axt9Go7F2165deUeOHOmVXCBbt271y8nJyfD3939aPCqCZoCQ2WEiKOQj7HYjzejUqVNFcXFxJdI0SEVFRdKGDRtShbmd5HwEGZM9IupJSHiJBjaazebr2dnZmdNFgsK+2Cf7JgZiEZhsimoSc/oZqh8eHjamp6fvPnTo0O/SDMiOHTsWFRQUHPDy8vLnQEGflZvZpKaFl4WcE7du3epPTU19+/Dhwz3SDMr27dsDioqKcufMmfM45wyIpD3QtPBiC0lgTowcPHgwa6ZJUIiBWIgJP1OB8aVJTQsFnkDSxCUWk60gPj6+VHIjKS8vT8TcSRdLcxhG5g+bpoWH3yF5ube3tw7L33uSGwqW/8/8/Pzoz30PItvuMy080HEZx/CZDQZDgeSmQmzESKwC870jgodcWhPhJx0LDw8vlNxYLl269Cb8Nfp5NP2kuyMiPM8EfvTodkhuLsQoJn4C/VG5ab3CfHd3d41SvpMrhRiBtVrgf01OZBv/nIRID4nIsG6xzBGxs7vK/YSvr2/SVF3xiYL55bVgwYJZp0+f/nOycuvXr38E+xczvOibjvTDLcDg4OBx7GfoD4ZwRPR8gUYbnCUBF3wuHMtPy8rKcmJjY33tleM7lqmpqdnPOo70RazAfNHapFrssaWOjo6Lzg43vj2zPT09febNm7ektLT0C1tk+IzvWIZlWcfR/oC5UWSjSCSUudbW1qvOEqmqqhrcvHnzOzdu3Lhii4ycBMuwLOs42t/ly5etmLUkEsJcbW3tbwq5ETbJ2CLBss70dfbsWSvmpZzsnJTzo6KiEhoaGoaVWlXkwE0mkyXk4+PjE6gUCUpMTMz86urq48gOkIjFWYHfEqf0EkkyJ06cyCMB/iah5OTkTCVIUDQajQf8wl+QNaune/2/c+eOS9olkb+YiYyM9FJ6NGhaHA2OBJV5e6uZI6LVaq2YTSTSz9zatWsfc8X84JzYtGlTJtXeauaorFy5cr7IXieRdubWrFnzpCtIJCYmWpZYKvNKksE/34q5g0RamQsNDV3sKhLy74ySZJYtW2bF3EIidZaFeOnSp5wl0t/fb4aYbJGwRYZlWcfR/mSYL8idRhOcxuTpdBoHBgZuY5Pk0LfrPqdRnE8080Fubm60Aru34QeRoLCMoyQoxCpItFnnCIVBB2kj5GHZj8iw/iDfWJHIaGBgYAyj4u5OghiBdZ00fqby9V0iMK8rSMoYMGZo392JECOwehAztHNipPFjxiGw0UnYuXPnInclQWzEKI0fCH1kL9JoCdAZjcZzAQEB77sjkZ6env3YjK22G6AT8i7DkSzI8KS7kSAmQWJQYL3HabwrjKVK4mQKX9w0g8EQ6i4k9u7dqyUm8TNNYJVsmpbMxL5EkuouxwopKSn+xcXFeeJYoRgkUmVYJyXirgc9ldBnbB302NxYiYJcGc6wgcLCwvysrCztTJgT+xYkzhCTvUPR//9hqBgZkxiZYjao1+vf4vLH4XalKbEP9iVIFIuRME2K9b92MOHCAEOdZS66MJAAAp5iiX0DBI4+ANfUiIhKvMLxOfRVSXaFA2ZQnpmZWefIFY68vLxVMNf4CVc4vuV3wiVXOCZUjkLygXTvpRoTL9Uw9NrS0tJVX1/fc/78+ettbW2WIPXy5cvnRkdHP6rT6QK0Wm0QNkXhGo0mUrjikvTvpZpPQODCFLA4bw6ya06/OnHNqXnGrjnZIyWNXzyjC0GPYIk0fvHM+h+XXzxjnOCcNH7x7KqT/VrSfwQYAOAcX9HTDttYAAAAAElFTkSuQmCC" ) 25 25, no-drop'
    };
    q(i, e);
    var f = {
        fontFamily: 'Georgia, Times, "Times New Roman", serif',
        position: "fixed",
        bottom: "0px",
        left: "0px",
        padding: "20px",
        color: "#fff",
        wordSpacing: "0.2px",
        webkitFontSmoothing: "antialiased",
        textShadow: "-1px 0px 1px rgba(0,0,0,0.4)"
      },
      g = document.createElement("figcaption");
    if (q(g, f), a) {
      var h = {
          margin: "0px",
          padding: "0px",
          fontWeight: "normal",
          fontSize: "25px",
          letterSpacing: "0.5px",
          lineHeight: "35px",
          textAlign: "left"
        },
        j = document.createElement("h1");
      q(j, h), j.innerHTML = a, g.appendChild(j)
    }
    if (c) {
      var l = {
          margin: "0px",
          padding: "0px",
          fontWeight: "normal",
          fontSize: "20px",
          letterSpacing: "0.1px",
          maxWidth: "500px",
          textAlign: "left",
          background: "none",
          marginTop: "5px"
        },
        m = document.createElement("h2");
      q(m, l), m.innerHTML = c, g.appendChild(m)
    }
    k.appendChild(g), C(), b.xCurr = b.xDest = window.innerWidth / 2, b.yCurr = b.yDest = window.innerHeight / 2, document.body.appendChild(k), setTimeout(function () {
      k.style.opacity = "1"
    }, 10)
  }

  function B() {
    y(), F(), v(), document.body.removeChild(k), o = !1, z(!1)
  }

  function C() {
    var a = r(h);
    i.width = a.w, i.height = a.h, c = a.fit, j = {
      w: i.width,
      h: i.height
    }, l = {
      w: window.innerWidth,
      h: window.innerHeight
    }, m = {
      x: l.w - j.w,
      y: l.h - j.h
    }
  }

  function D(a) {
    z(a, "intense--loading");
    var b = a.getAttribute("data-image") || a.src || a.href,
      c = a.getAttribute("data-title") || a.title,
      d = a.getAttribute("data-caption"),
      e = new Image;
    e.onload = function () {
      h = {
        w: e.width,
        h: e.height
      }, i = this, A(c, d), x(), E(), w(), z(a, "intense--viewing")
    }, e.src = b
  }

  function E() {
    k.addEventListener("mousemove", G, !1), k.addEventListener("touchmove", H, !1), window.addEventListener("resize", C, !1), window.addEventListener("keyup", I, !1), i.addEventListener("click", B, !1)
  }

  function F() {
    k.removeEventListener("mousemove", G, !1), k.removeEventListener("touchmove", H, !1), window.removeEventListener("resize", C, !1), window.removeEventListener("keyup", I, !1), i.removeEventListener("click", B, !1)
  }

  function G(a) {
    b.xDest = a.clientX, b.yDest = a.clientY
  }

  function H(a) {
    a.preventDefault(), b.xDest = a.touches[0].clientX, b.yDest = a.touches[0].clientY
  }

  function I(b) {
    b.preventDefault(), b.keyCode === a && B()
  }

  function J() {
    function e(a, b) {
      return d ? (b - a) / b : a / b
    }
    if (b.xCurr += .05 * (b.xDest - b.xCurr), b.yCurr += .05 * (b.yDest - b.yCurr), c === !0) {
      if (g += b.xCurr - g, b.xCurr !== f) {
        var a = parseFloat(e(g, l.w));
        a = m.x * a, i.style.webkitTransform = "translate(" + a + "px, 0px)", i.style.MozTransform = "translate(" + a + "px, 0px)", i.style.msTransform = "translate(" + a + "px, 0px)", f = b.xCurr
      }
    } else if (c === !1 && (g += b.yCurr - g, b.yCurr !== f)) {
      var a = parseFloat(e(g, l.h));
      a = m.y * a, i.style.webkitTransform = "translate( 0px, " + a + "px)", i.style.MozTransform = "translate( 0px, " + a + "px)", i.style.msTransform = "translate( 0px, " + a + "px)", f = b.yCurr
    }
  }

  function K(a) {
    "invertInteractionDirection" in a && (d = a.invertInteractionDirection)
  }

  function L(a, b) {
    if (!a) throw "You need to pass an element!";
    b && K(b), s(a)
  }
  var e, f, h, i, k, n, a = 27,
    b = {
      xCurr: 0,
      yCurr: 0,
      xDest: 0,
      yDest: 0
    },
    c = !0,
    d = !1,
    g = 0,
    j = {
      w: 0,
      h: 0
    },
    l = {
      w: 0,
      h: 0
    },
    m = {
      x: 0,
      y: 0
    },
    o = !1;
  return p(L, {
    resize: C,
    start: u,
    stop: v,
    config: K
  })
}();
"undefined" != typeof module && module.exports && (module.exports = Intense);


// Countdown
! function (e) {
  e.fn.countdown = function (t, s) {
    function n() {
      eventDate = Date.parse(i.date) / 1e3, currentDate = Math.floor(e.now() / 1e3), eventDate <= currentDate && (s.call(this), clearInterval(interval)), seconds = eventDate - currentDate, days = Math.floor(seconds / 86400), seconds -= 60 * days * 60 * 24, hours = Math.floor(seconds / 3600), seconds -= 60 * hours * 60, minutes = Math.floor(seconds / 60), seconds -= 60 * minutes, thisEl.find(".timeRefDays").text(1 == days ? "day" : "days"), thisEl.find(".timeRefHours").text(1 == hours ? "hour" : "hours"), thisEl.find(".timeRefMinutes").text(1 == minutes ? "minute" : "minutes"), thisEl.find(".timeRefSeconds").text(1 == seconds ? "second" : "seconds"), "on" == i.format && (days = String(days).length >= 2 ? days : "0" + days, hours = String(hours).length >= 2 ? hours : "0" + hours, minutes = String(minutes).length >= 2 ? minutes : "0" + minutes, seconds = String(seconds).length >= 2 ? seconds : "0" + seconds), isNaN(eventDate) ? (alert("Invalid date. Here's an example: 12 Tuesday 2012 17:30:00"), clearInterval(interval)) : (thisEl.find(".days").text(days), thisEl.find(".hours").text(hours), thisEl.find(".minutes").text(minutes), thisEl.find(".seconds").text(seconds))
    }
    thisEl = e(this);
    var i = {
      date: null,
      format: null
    };
    t && e.extend(i, t), n(), interval = setInterval(n, 1e3)
  }
}(jQuery);


/*
 *  jQuery OwlCarousel v1.3.3
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */
"function" !== typeof Object.create && (Object.create = function (f) {
  function g() {}
  g.prototype = f;
  return new g
});
(function (f, g, k) {
  var l = {
    init: function (a, b) {
      this.$elem = f(b);
      this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);
      this.userOptions = a;
      this.loadContent()
    },
    loadContent: function () {
      function a(a) {
        var d, e = "";
        if ("function" === typeof b.options.jsonSuccess) b.options.jsonSuccess.apply(this, [a]);
        else {
          for (d in a.owl) a.owl.hasOwnProperty(d) && (e += a.owl[d].item);
          b.$elem.html(e)
        }
        b.logIn()
      }
      var b = this,
        e;
      "function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]);
      "string" === typeof b.options.jsonPath ?
        (e = b.options.jsonPath, f.getJSON(e, a)) : b.logIn()
    },
    logIn: function () {
      this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
      this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
      this.$elem.css({
        opacity: 0
      });
      this.orignalItems = this.options.items;
      this.checkBrowser();
      this.wrapperWidth = 0;
      this.checkVisible = null;
      this.setVars()
    },
    setVars: function () {
      if (0 === this.$elem.children().length) return !1;
      this.baseClass();
      this.eventTypes();
      this.$userItems = this.$elem.children();
      this.itemsAmount = this.$userItems.length;
      this.wrapItems();
      this.$owlItems = this.$elem.find(".owl-item");
      this.$owlWrapper = this.$elem.find(".owl-wrapper");
      this.playDirection = "next";
      this.prevItem = 0;
      this.prevArr = [0];
      this.currentItem = 0;
      this.customEvents();
      this.onStartup()
    },
    onStartup: function () {
      this.updateItems();
      this.calculateAll();
      this.buildControls();
      this.updateControls();
      this.response();
      this.moveEvents();
      this.stopOnHover();
      this.owlStatus();
      !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
      !0 === this.options.autoPlay &&
        (this.options.autoPlay = 5E3);
      this.play();
      this.$elem.find(".owl-wrapper").css("display", "block");
      this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
      this.onstartup = !1;
      this.eachMoveUpdate();
      "function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
    },
    eachMoveUpdate: function () {
      !0 === this.options.lazyLoad && this.lazyLoad();
      !0 === this.options.autoHeight && this.autoHeight();
      this.onVisibleItems();
      "function" === typeof this.options.afterAction && this.options.afterAction.apply(this,
        [this.$elem])
    },
    updateVars: function () {
      "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
      this.watchVisibility();
      this.updateItems();
      this.calculateAll();
      this.updatePosition();
      this.updateControls();
      this.eachMoveUpdate();
      "function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
    },
    reload: function () {
      var a = this;
      g.setTimeout(function () {
        a.updateVars()
      }, 0)
    },
    watchVisibility: function () {
      var a = this;
      if (!1 === a.$elem.is(":visible")) a.$elem.css({
          opacity: 0
        }),
        g.clearInterval(a.autoPlayInterval), g.clearInterval(a.checkVisible);
      else return !1;
      a.checkVisible = g.setInterval(function () {
        a.$elem.is(":visible") && (a.reload(), a.$elem.animate({
          opacity: 1
        }, 200), g.clearInterval(a.checkVisible))
      }, 500)
    },
    wrapItems: function () {
      this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
      this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
      this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
      this.$elem.css("display", "block")
    },
    baseClass: function () {
      var a = this.$elem.hasClass(this.options.baseClass),
        b = this.$elem.hasClass(this.options.theme);
      a || this.$elem.addClass(this.options.baseClass);
      b || this.$elem.addClass(this.options.theme)
    },
    updateItems: function () {
      var a, b;
      if (!1 === this.options.responsive) return !1;
      if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
      a = f(this.options.responsiveBaseWidth).width();
      a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
      if (!1 !== this.options.itemsCustom)
        for (this.options.itemsCustom.sort(function (a, b) {
            return a[0] - b[0]
          }), b = 0; b < this.options.itemsCustom.length; b += 1) this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1]);
      else a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]),
        a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
      this.options.items > this.itemsAmount &&
        !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
    },
    response: function () {
      var a = this,
        b, e;
      if (!0 !== a.options.responsive) return !1;
      e = f(g).width();
      a.resizer = function () {
        f(g).width() !== e && (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval), g.clearTimeout(b), b = g.setTimeout(function () {
          e = f(g).width();
          a.updateVars()
        }, a.options.responsiveRefreshRate))
      };
      f(g).resize(a.resizer)
    },
    updatePosition: function () {
      this.jumpTo(this.currentItem);
      !1 !== this.options.autoPlay && this.checkAp()
    },
    appendItemsSizes: function () {
      var a =
        this,
        b = 0,
        e = a.itemsAmount - a.options.items;
      a.$owlItems.each(function (c) {
        var d = f(this);
        d.css({
          width: a.itemWidth
        }).data("owl-item", Number(c));
        if (0 === c % a.options.items || c === e) c > e || (b += 1);
        d.data("owl-roundPages", b)
      })
    },
    appendWrapperSizes: function () {
      this.$owlWrapper.css({
        width: this.$owlItems.length * this.itemWidth * 2,
        left: 0
      });
      this.appendItemsSizes()
    },
    calculateAll: function () {
      this.calculateWidth();
      this.appendWrapperSizes();
      this.loops();
      this.max()
    },
    calculateWidth: function () {
      this.itemWidth = Math.round(this.$elem.width() /
        this.options.items)
    },
    max: function () {
      var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
      this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a);
      return a
    },
    min: function () {
      return 0
    },
    loops: function () {
      var a = 0,
        b = 0,
        e, c;
      this.positionsInArray = [0];
      this.pagesInArray = [];
      for (e = 0; e < this.itemsAmount; e += 1) b += this.itemWidth, this.positionsInArray.push(-b), !0 === this.options.scrollPerPage && (c = f(this.$owlItems[e]),
        c = c.data("owl-roundPages"), c !== a && (this.pagesInArray[a] = this.positionsInArray[e], a = c))
    },
    buildControls: function () {
      if (!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);
      !0 === this.options.pagination && this.buildPagination();
      !0 === this.options.navigation && this.buildButtons()
    },
    buildButtons: function () {
      var a = this,
        b = f('<div class="owl-buttons"/>');
      a.owlControls.append(b);
      a.buttonPrev =
        f("<div/>", {
          "class": "owl-prev",
          html: a.options.navigationText[0] || ""
        });
      a.buttonNext = f("<div/>", {
        "class": "owl-next",
        html: a.options.navigationText[1] || ""
      });
      b.append(a.buttonPrev).append(a.buttonNext);
      b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (a) {
        a.preventDefault()
      });
      b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (b) {
        b.preventDefault();
        f(this).hasClass("owl-next") ? a.next() : a.prev()
      })
    },
    buildPagination: function () {
      var a = this;
      a.paginationWrapper =
        f('<div class="owl-pagination"/>');
      a.owlControls.append(a.paginationWrapper);
      a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (b) {
        b.preventDefault();
        Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0)
      })
    },
    updatePagination: function () {
      var a, b, e, c, d, g;
      if (!1 === this.options.pagination) return !1;
      this.paginationWrapper.html("");
      a = 0;
      b = this.itemsAmount - this.itemsAmount % this.options.items;
      for (c = 0; c < this.itemsAmount; c += 1) 0 === c % this.options.items &&
        (a += 1, b === c && (e = this.itemsAmount - this.options.items), d = f("<div/>", {
          "class": "owl-page"
        }), g = f("<span></span>", {
          text: !0 === this.options.paginationNumbers ? a : "",
          "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
        }), d.append(g), d.data("owl-page", b === c ? e : c), d.data("owl-roundPages", a), this.paginationWrapper.append(d));
      this.checkPagination()
    },
    checkPagination: function () {
      var a = this;
      if (!1 === a.options.pagination) return !1;
      a.paginationWrapper.find(".owl-page").each(function () {
        f(this).data("owl-roundPages") ===
          f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), f(this).addClass("active"))
      })
    },
    checkNavigation: function () {
      if (!1 === this.options.navigation) return !1;
      !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem ===
        this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
    },
    updateControls: function () {
      this.updatePagination();
      this.checkNavigation();
      this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
    },
    destroyControls: function () {
      this.owlControls && this.owlControls.remove()
    },
    next: function (a) {
      if (this.isTransition) return !1;
      this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
      if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))
        if (!0 === this.options.rewindNav) this.currentItem = 0, a = "rewind";
        else return this.currentItem = this.maximumItem, !1;
      this.goTo(this.currentItem, a)
    },
    prev: function (a) {
      if (this.isTransition) return !1;
      this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ?
        this.options.items : 1);
      if (0 > this.currentItem)
        if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, a = "rewind";
        else return this.currentItem = 0, !1;
      this.goTo(this.currentItem, a)
    },
    goTo: function (a, b, e) {
      var c = this;
      if (c.isTransition) return !1;
      "function" === typeof c.options.beforeMove && c.options.beforeMove.apply(this, [c.$elem]);
      a >= c.maximumItem ? a = c.maximumItem : 0 >= a && (a = 0);
      c.currentItem = c.owl.currentItem = a;
      if (!1 !== c.options.transitionStyle && "drag" !== e && 1 === c.options.items && !0 === c.browser.support3d) return c.swapSpeed(0),
        !0 === c.browser.support3d ? c.transition3d(c.positionsInArray[a]) : c.css2slide(c.positionsInArray[a], 1), c.afterGo(), c.singleItemTransition(), !1;
      a = c.positionsInArray[a];
      !0 === c.browser.support3d ? (c.isCss3Finish = !1, !0 === b ? (c.swapSpeed("paginationSpeed"), g.setTimeout(function () {
        c.isCss3Finish = !0
      }, c.options.paginationSpeed)) : "rewind" === b ? (c.swapSpeed(c.options.rewindSpeed), g.setTimeout(function () {
        c.isCss3Finish = !0
      }, c.options.rewindSpeed)) : (c.swapSpeed("slideSpeed"), g.setTimeout(function () {
          c.isCss3Finish = !0
        },
        c.options.slideSpeed)), c.transition3d(a)) : !0 === b ? c.css2slide(a, c.options.paginationSpeed) : "rewind" === b ? c.css2slide(a, c.options.rewindSpeed) : c.css2slide(a, c.options.slideSpeed);
      c.afterGo()
    },
    jumpTo: function (a) {
      "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
      a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);
      this.swapSpeed(0);
      !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);
      this.currentItem =
        this.owl.currentItem = a;
      this.afterGo()
    },
    afterGo: function () {
      this.prevArr.push(this.currentItem);
      this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
      this.prevArr.shift(0);
      this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
      "function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
    },
    stop: function () {
      this.apStatus = "stop";
      g.clearInterval(this.autoPlayInterval)
    },
    checkAp: function () {
      "stop" !== this.apStatus && this.play()
    },
    play: function () {
      var a = this;
      a.apStatus = "play";
      if (!1 === a.options.autoPlay) return !1;
      g.clearInterval(a.autoPlayInterval);
      a.autoPlayInterval = g.setInterval(function () {
        a.next(!0)
      }, a.options.autoPlay)
    },
    swapSpeed: function (a) {
      "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a))
    },
    addCssSpeed: function (a) {
      return {
        "-webkit-transition": "all " + a + "ms ease",
        "-moz-transition": "all " + a + "ms ease",
        "-o-transition": "all " + a + "ms ease",
        transition: "all " + a + "ms ease"
      }
    },
    removeTransition: function () {
      return {
        "-webkit-transition": "",
        "-moz-transition": "",
        "-o-transition": "",
        transition: ""
      }
    },
    doTranslate: function (a) {
      return {
        "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
        "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
        "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
        "-ms-transform": "translate3d(" +
          a + "px, 0px, 0px)",
        transform: "translate3d(" + a + "px, 0px,0px)"
      }
    },
    transition3d: function (a) {
      this.$owlWrapper.css(this.doTranslate(a))
    },
    css2move: function (a) {
      this.$owlWrapper.css({
        left: a
      })
    },
    css2slide: function (a, b) {
      var e = this;
      e.isCssFinish = !1;
      e.$owlWrapper.stop(!0, !0).animate({
        left: a
      }, {
        duration: b || e.options.slideSpeed,
        complete: function () {
          e.isCssFinish = !0
        }
      })
    },
    checkBrowser: function () {
      var a = k.createElement("div");
      a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
      a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
      this.browser = {
        support3d: null !== a && 1 === a.length,
        isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints
      }
    },
    moveEvents: function () {
      if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents()
    },
    eventTypes: function () {
      var a = ["s", "e", "x"];
      this.ev_types = {};
      !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] :
        !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
      this.ev_types.start = a[0];
      this.ev_types.move = a[1];
      this.ev_types.end = a[2]
    },
    disabledEvents: function () {
      this.$elem.on("dragstart.owl", function (a) {
        a.preventDefault()
      });
      this.$elem.on("mousedown.disableTextSelect", function (a) {
        return f(a.target).is("input, textarea, select, option")
      })
    },
    gestures: function () {
      function a(a) {
        if (void 0 !== a.touches) return {
          x: a.touches[0].pageX,
          y: a.touches[0].pageY
        };
        if (void 0 === a.touches) {
          if (void 0 !== a.pageX) return {
            x: a.pageX,
            y: a.pageY
          };
          if (void 0 === a.pageX) return {
            x: a.clientX,
            y: a.clientY
          }
        }
      }

      function b(a) {
        "on" === a ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c)) : "off" === a && (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end))
      }

      function e(b) {
        b = b.originalEvent || b || g.event;
        d.newPosX = a(b).x - h.offsetX;
        d.newPosY = a(b).y - h.offsetY;
        d.newRelativeX = d.newPosX - h.relativePos;
        "function" === typeof d.options.startDragging && !0 !== h.dragging && 0 !== d.newRelativeX && (h.dragging = !0, d.options.startDragging.apply(d, [d.$elem]));
        (8 < d.newRelativeX || -8 > d.newRelativeX) && !0 === d.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : b.returnValue = !1, h.sliding = !0);
        (10 < d.newPosY || -10 > d.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");
        d.newPosX = Math.max(Math.min(d.newPosX, d.newRelativeX / 5), d.maximumPixels + d.newRelativeX / 5);
        !0 === d.browser.support3d ? d.transition3d(d.newPosX) : d.css2move(d.newPosX)
      }

      function c(a) {
        a = a.originalEvent || a || g.event;
        var c;
        a.target = a.target || a.srcElement;
        h.dragging = !1;
        !0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");
        d.dragDirection = 0 > d.newRelativeX ? d.owl.dragDirection = "left" : d.owl.dragDirection = "right";
        0 !== d.newRelativeX && (c = d.getNewPosition(), d.goTo(c, !1, "drag"), h.targetElement === a.target && !0 !== d.browser.isTouch && (f(a.target).on("click.disable", function (a) {
            a.stopImmediatePropagation();
            a.stopPropagation();
            a.preventDefault();
            f(a.target).off("click.disable")
          }),
          a = f._data(a.target, "events").click, c = a.pop(), a.splice(0, 0, c)));
        b("off")
      }
      var d = this,
        h = {
          offsetX: 0,
          offsetY: 0,
          baseElWidth: 0,
          relativePos: 0,
          position: null,
          minSwipe: null,
          maxSwipe: null,
          sliding: null,
          dargging: null,
          targetElement: null
        };
      d.isCssFinish = !0;
      d.$elem.on(d.ev_types.start, ".owl-wrapper", function (c) {
        c = c.originalEvent || c || g.event;
        var e;
        if (3 === c.which) return !1;
        if (!(d.itemsAmount <= d.options.items)) {
          if (!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish || !1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish) return !1;
          !1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);
          !0 === d.browser.isTouch || d.$owlWrapper.hasClass("grabbing") || d.$owlWrapper.addClass("grabbing");
          d.newPosX = 0;
          d.newRelativeX = 0;
          f(this).css(d.removeTransition());
          e = f(this).position();
          h.relativePos = e.left;
          h.offsetX = a(c).x - e.left;
          h.offsetY = a(c).y - e.top;
          b("on");
          h.sliding = !1;
          h.targetElement = c.target || c.srcElement
        }
      })
    },
    getNewPosition: function () {
      var a = this.closestItem();
      a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem =
        a = 0);
      return a
    },
    closestItem: function () {
      var a = this,
        b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
        e = a.newPosX,
        c = null;
      f.each(b, function (d, g) {
        e - a.itemWidth / 20 > b[d + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection() ? (c = g, a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(c, a.positionsInArray) : d) : e + a.itemWidth / 20 < g && e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (c = b[d + 1] || b[b.length - 1], a.currentItem = f.inArray(c, a.positionsInArray)) :
          (c = b[d + 1], a.currentItem = d + 1))
      });
      return a.currentItem
    },
    moveDirection: function () {
      var a;
      0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev");
      return a
    },
    customEvents: function () {
      var a = this;
      a.$elem.on("owl.next", function () {
        a.next()
      });
      a.$elem.on("owl.prev", function () {
        a.prev()
      });
      a.$elem.on("owl.play", function (b, e) {
        a.options.autoPlay = e;
        a.play();
        a.hoverStatus = "play"
      });
      a.$elem.on("owl.stop", function () {
        a.stop();
        a.hoverStatus = "stop"
      });
      a.$elem.on("owl.goTo", function (b, e) {
        a.goTo(e)
      });
      a.$elem.on("owl.jumpTo", function (b, e) {
        a.jumpTo(e)
      })
    },
    stopOnHover: function () {
      var a = this;
      !0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function () {
        a.stop()
      }), a.$elem.on("mouseout", function () {
        "stop" !== a.hoverStatus && a.play()
      }))
    },
    lazyLoad: function () {
      var a, b, e, c, d;
      if (!1 === this.options.lazyLoad) return !1;
      for (a = 0; a < this.itemsAmount; a += 1) b = f(this.$owlItems[a]), "loaded" !== b.data("owl-loaded") && (e = b.data("owl-item"), c = b.find(".lazyOwl"), "string" !== typeof c.data("src") ?
        b.data("owl-loaded", "loaded") : (void 0 === b.data("owl-loaded") && (c.hide(), b.addClass("loading").data("owl-loaded", "checked")), (d = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && c.length && this.lazyPreload(b, c)))
    },
    lazyPreload: function (a, b) {
      function e() {
        a.data("owl-loaded", "loaded").removeClass("loading");
        b.removeAttr("data-src");
        "fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();
        "function" === typeof d.options.afterLazyLoad && d.options.afterLazyLoad.apply(this,
          [d.$elem])
      }

      function c() {
        f += 1;
        d.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(c, 100) : e()
      }
      var d = this,
        f = 0,
        k;
      "DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"), k = !0) : b[0].src = b.data("src");
      c()
    },
    autoHeight: function () {
      function a() {
        var a = f(e.$owlItems[e.currentItem]).height();
        e.wrapperOuter.css("height", a + "px");
        e.wrapperOuter.hasClass("autoHeight") || g.setTimeout(function () {
          e.wrapperOuter.addClass("autoHeight")
        }, 0)
      }

      function b() {
        d += 1;
        e.completeImg(c.get(0)) ? a() : 100 >= d ? g.setTimeout(b,
          100) : e.wrapperOuter.css("height", "")
      }
      var e = this,
        c = f(e.$owlItems[e.currentItem]).find("img"),
        d;
      void 0 !== c.get(0) ? (d = 0, b()) : a()
    },
    completeImg: function (a) {
      return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0
    },
    onVisibleItems: function () {
      var a;
      !0 === this.options.addClassActive && this.$owlItems.removeClass("active");
      this.visibleItems = [];
      for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1) this.visibleItems.push(a), !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active");
      this.owl.visibleItems = this.visibleItems
    },
    transitionTypes: function (a) {
      this.outClass = "owl-" + a + "-out";
      this.inClass = "owl-" + a + "-in"
    },
    singleItemTransition: function () {
      var a = this,
        b = a.outClass,
        e = a.inClass,
        c = a.$owlItems.eq(a.currentItem),
        d = a.$owlItems.eq(a.prevItem),
        f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
        g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
      a.isTransition = !0;
      a.$owlWrapper.addClass("owl-origin").css({
        "-webkit-transform-origin": g + "px",
        "-moz-perspective-origin": g +
          "px",
        "perspective-origin": g + "px"
      });
      d.css({
        position: "relative",
        left: f + "px"
      }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
        a.endPrev = !0;
        d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
        a.clearTransStyle(d, b)
      });
      c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
        a.endCurrent = !0;
        c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
        a.clearTransStyle(c, e)
      })
    },
    clearTransStyle: function (a,
      b) {
      a.css({
        position: "",
        left: ""
      }).removeClass(b);
      this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
    },
    owlStatus: function () {
      this.owl = {
        userOptions: this.userOptions,
        baseElement: this.$elem,
        userItems: this.$userItems,
        owlItems: this.$owlItems,
        currentItem: this.currentItem,
        prevItem: this.prevItem,
        visibleItems: this.visibleItems,
        isTouch: this.browser.isTouch,
        browser: this.browser,
        dragDirection: this.dragDirection
      }
    },
    clearEvents: function () {
      this.$elem.off(".owl owl mousedown.disableTextSelect");
      f(k).off(".owl owl");
      f(g).off("resize", this.resizer)
    },
    unWrap: function () {
      0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
      this.clearEvents();
      this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
    },
    destroy: function () {
      this.stop();
      g.clearInterval(this.checkVisible);
      this.unWrap();
      this.$elem.removeData()
    },
    reinit: function (a) {
      a = f.extend({}, this.userOptions,
        a);
      this.unWrap();
      this.init(a, this.$elem)
    },
    addItem: function (a, b) {
      var e;
      if (!a) return !1;
      if (0 === this.$elem.children().length) return this.$elem.append(a), this.setVars(), !1;
      this.unWrap();
      e = void 0 === b || -1 === b ? -1 : b;
      e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);
      this.setVars()
    },
    removeItem: function (a) {
      if (0 === this.$elem.children().length) return !1;
      a = void 0 === a || -1 === a ? -1 : a;
      this.unWrap();
      this.$userItems.eq(a).remove();
      this.setVars()
    }
  };
  f.fn.owlCarousel = function (a) {
    return this.each(function () {
      if (!0 ===
        f(this).data("owl-init")) return !1;
      f(this).data("owl-init", !0);
      var b = Object.create(l);
      b.init(a, this);
      f.data(this, "owlCarousel", b)
    })
  };
  f.fn.owlCarousel.options = {
    items: 5,
    itemsCustom: !1,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 2],
    itemsTabletSmall: !1,
    itemsMobile: [479, 1],
    singleItem: !1,
    itemsScaleUp: !1,
    slideSpeed: 200,
    paginationSpeed: 800,
    rewindSpeed: 1E3,
    autoPlay: !1,
    stopOnHover: !1,
    navigation: !1,
    navigationText: ["prev", "next"],
    rewindNav: !0,
    scrollPerPage: !1,
    pagination: !0,
    paginationNumbers: !1,
    responsive: !0,
    responsiveRefreshRate: 200,
    responsiveBaseWidth: g,
    baseClass: "owl-carousel",
    theme: "owl-theme",
    lazyLoad: !1,
    lazyFollow: !0,
    lazyEffect: "fade",
    autoHeight: !1,
    jsonPath: !1,
    jsonSuccess: !1,
    dragBeforeAnimFinish: !0,
    mouseDrag: !0,
    touchDrag: !0,
    addClassActive: !1,
    transitionStyle: !1,
    beforeUpdate: !1,
    afterUpdate: !1,
    beforeInit: !1,
    afterInit: !1,
    beforeMove: !1,
    afterMove: !1,
    afterAction: !1,
    startDragging: !1,
    afterLazyLoad: !1
  }
})(jQuery, window, document);


/*! Morphext - v2.4.7 - 2016-11-04 */
! function (a) {
  "use strict";

  function b(b, c) {
    this.element = a(b), this.settings = a.extend({}, d, c), this._defaults = d, this._init()
  }
  var c = "Morphext",
    d = {
      animation: "bounceIn",
      separator: ",",
      speed: 2e3,
      complete: a.noop
    };
  b.prototype = {
    _init: function () {
      var b = this;
      this.phrases = [], this.element.addClass("morphext"), a.each(this.element.text().split(this.settings.separator), function (c, d) {
        b.phrases.push(a.trim(d))
      }), this.index = -1, this.animate(), this.start()
    },
    animate: function () {
      this.index = ++this.index % this.phrases.length, this.element[0].innerHTML = '<span class="animated ' + this.settings.animation + '">' + this.phrases[this.index] + "</span>", a.isFunction(this.settings.complete) && this.settings.complete.call(this)
    },
    start: function () {
      var a = this;
      this._interval = setInterval(function () {
        a.animate()
      }, this.settings.speed)
    },
    stop: function () {
      this._interval = clearInterval(this._interval)
    }
  }, a.fn[c] = function (d) {
    return this.each(function () {
      a.data(this, "plugin_" + c) || a.data(this, "plugin_" + c, new b(this, d))
    })
  }
}(jQuery);


/*jquery.mb.YTPlayer 25-06-2016
 _ jquery.mb.components 
 _ email: matteo@open-lab.com 
 _ Copyright (c) 2001-2016. Matteo Bicocchi (Pupunzi); 
 _ blog: http://pupunzi.open-lab.com 
 _ Open Lab s.r.l., Florence - Italy 
 */
function onYouTubeIframeAPIReady() {
  ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}

function uncamel(a) {
  return a.replace(/([A-Z])/g, function (a) {
    return "-" + a.toLowerCase()
  })
}

function setUnit(a, b) {
  return "string" != typeof a || a.match(/^[\-0-9\.]+jQuery/) ? "" + a + b : a
}

function setFilter(a, b, c) {
  var d = uncamel(b),
    e = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
  a[e + "filter"] = a[e + "filter"] || "", c = setUnit(c > jQuery.CSS.filters[b].max ? jQuery.CSS.filters[b].max : c, jQuery.CSS.filters[b].unit), a[e + "filter"] += d + "(" + c + ") ", delete a[b]
}
var ytp = ytp || {},
  getYTPVideoID = function (a) {
    var b, c;
    return a.indexOf("youtu.be") > 0 ? (b = a.substr(a.lastIndexOf("/") + 1, a.length), c = b.indexOf("?list=") > 0 ? b.substr(b.lastIndexOf("="), b.length) : null, b = c ? b.substr(0, b.lastIndexOf("?")) : b) : a.indexOf("http") > -1 ? (b = a.match(/[\\?&]v=([^&#]*)/)[1], c = a.indexOf("list=") > 0 ? a.match(/[\\?&]list=([^&#]*)/)[1] : null) : (b = a.length > 15 ? null : a, c = b ? null : a), {
      videoID: b,
      playlistID: c
    }
  };
! function (jQuery, ytp) {
  jQuery.mbYTPlayer = {
    name: "jquery.mb.YTPlayer",
    version: "3.0.6",
    build: "5870",
    author: "Matteo Bicocchi",
    apiKey: "",
    defaults: {
      containment: "body",
      ratio: "auto",
      videoURL: null,
      playlistURL: null,
      startAt: 0,
      stopAt: 0,
      autoPlay: !0,
      vol: 50,
      addRaster: !1,
      mask: !1,
      opacity: 1,
      quality: "default",
      mute: !1,
      loop: !0,
      showControls: !0,
      showAnnotations: !1,
      showYTLogo: !0,
      stopMovieOnBlur: !0,
      realfullscreen: !0,
      mobileFallbackImage: null,
      gaTrack: !0,
      optimizeDisplay: !0,
      align: "center,center",
      onReady: function (a) {}
    },
    controls: {
      play: "P",
      pause: "p",
      mute: "M",
      unmute: "A",
      onlyYT: "O",
      showSite: "R",
      ytLogo: "Y"
    },
    locationProtocol: "https:",
    filters: {
      grayscale: {
        value: 0,
        unit: "%"
      },
      hue_rotate: {
        value: 0,
        unit: "deg"
      },
      invert: {
        value: 0,
        unit: "%"
      },
      opacity: {
        value: 0,
        unit: "%"
      },
      saturate: {
        value: 0,
        unit: "%"
      },
      sepia: {
        value: 0,
        unit: "%"
      },
      brightness: {
        value: 0,
        unit: "%"
      },
      contrast: {
        value: 0,
        unit: "%"
      },
      blur: {
        value: 0,
        unit: "px"
      }
    },
    buildPlayer: function (options) {
      return this.each(function () {
        var YTPlayer = this,
          $YTPlayer = jQuery(YTPlayer);
        YTPlayer.loop = 0, YTPlayer.opt = {}, YTPlayer.state = {}, YTPlayer.filters = jQuery.mbYTPlayer.filters, YTPlayer.filtersEnabled = !0, YTPlayer.id = YTPlayer.id || "YTP_" + (new Date).getTime(), $YTPlayer.addClass("mb_YTPlayer");
        var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
        "undefined" != typeof property && "undefined" != typeof property.vol && (property.vol = 0 === property.vol ? property.vol = 1 : property.vol), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property), YTPlayer.hasChanged || (YTPlayer.defaultOpt = {}, jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options)), "true" == YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;
        var isIframe = function () {
          var a = !1;
          try {
            self.location.href != top.location.href && (a = !0)
          } catch (b) {
            a = !0
          }
          return a
        };
        YTPlayer.canGoFullScreen = !(jQuery.browser.msie || jQuery.browser.opera || isIframe()), YTPlayer.canGoFullScreen || (YTPlayer.opt.realfullscreen = !1), $YTPlayer.attr("id") || $YTPlayer.attr("id", "video_" + (new Date).getTime());
        var playerID = "mbYTP_" + YTPlayer.id;
        YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0;
        var videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : !1,
          playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : !1;
        YTPlayer.videoID = videoID, YTPlayer.playlistID = playlistID, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
        var playerVars = {
          modestbranding: 1,
          autoplay: 0,
          controls: 0,
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
          version: 3,
          playerapiid: playerID,
          origin: "*",
          allowfullscreen: !0,
          wmode: "transparent",
          iv_load_policy: YTPlayer.opt.showAnnotations
        };
        if (document.createElement("video").canPlayType && jQuery.extend(playerVars, {
            html5: 1
          }), jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1), YTPlayer.isSelf = "self" == YTPlayer.opt.containment, YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment), YTPlayer.isBackground = YTPlayer.opt.containment.is("body"), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
          var isPlayer = YTPlayer.opt.containment.is(jQuery(this));
          YTPlayer.canPlayOnMobile = isPlayer && 0 === jQuery(this).children().length, YTPlayer.isPlayer = !1, isPlayer ? YTPlayer.isPlayer = !0 : $YTPlayer.hide();
          var overlay = jQuery("<div/>").css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }).addClass("YTPOverlay");
          YTPlayer.isPlayer && overlay.on("click", function () {
            $YTPlayer.YTPTogglePlay()
          });
          var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
          wrapper.css({
            position: "absolute",
            zIndex: 0,
            minWidth: "100%",
            minHeight: "100%",
            left: 0,
            top: 0,
            overflow: "hidden",
            opacity: 0
          });
          var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox");
          if (playerBox.css({
              position: "absolute",
              zIndex: 0,
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              overflow: "hidden"
            }), wrapper.append(playerBox), YTPlayer.opt.containment.children().not("script, style").each(function () {
              "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
            }), YTPlayer.isBackground ? (jQuery("body").css({
              boxSizing: "border-box"
            }), wrapper.css({
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 0
            }), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({
              position: "relative"
            }), YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({
              opacity: 1
            }), jQuery.browser.mobile || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function () {
              YTPlayer.controlBar.length && YTPlayer.controlBar.addClass("visible")
            }).on("mouseleave", function () {
              YTPlayer.controlBar.length && YTPlayer.controlBar.removeClass("visible")
            }), ytp.YTAPIReady) setTimeout(function () {
            jQuery(document).trigger("YTAPIReady")
          }, 100);
          else {
            jQuery("#YTAPI").remove();
            var tag = jQuery("<script></script>").attr({
              src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
              id: "YTAPI"
            });
            jQuery("head").prepend(tag)
          }
          if (jQuery.browser.mobile && !YTPlayer.canPlayOnMobile) return YTPlayer.opt.mobileFallbackImage && YTPlayer.opt.containment.css({
            backgroundImage: "url(" + YTPlayer.opt.mobileFallbackImage + ")",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }), $YTPlayer.remove(), void jQuery(document).trigger("YTPUnavailable");
          jQuery(document).on("YTAPIReady", function () {
            YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = "undefined" == typeof YTPlayer.opt.autoPlay ? YTPlayer.isBackground ? !0 : !1 : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(YTPlayer), jQuery(YTPlayer).on("YTPChanged", function () {
              if (!YTPlayer.isInit) {
                if (YTPlayer.isInit = !0, jQuery.browser.mobile && YTPlayer.canPlayOnMobile) {
                  if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) {
                    YTPlayer.opt.containment.css({
                      maxWidth: "100%"
                    });
                    var h = .563 * YTPlayer.opt.containment.outerWidth();
                    YTPlayer.opt.containment.css({
                      maxHeight: h
                    })
                  }
                  return void new YT.Player(playerID, {
                    videoId: YTPlayer.videoID.toString(),
                    width: "100%",
                    height: h,
                    playerVars: playerVars,
                    events: {
                      onReady: function (a) {
                        YTPlayer.player = a.target, playerBox.css({
                          opacity: 1
                        }), YTPlayer.wrapper.css({
                          opacity: 1
                        })
                      }
                    }
                  })
                }
                new YT.Player(playerID, {
                  videoId: YTPlayer.videoID.toString(),
                  playerVars: playerVars,
                  events: {
                    onReady: function (a) {
                      YTPlayer.player = a.target, YTPlayer.isReady || (YTPlayer.isReady = YTPlayer.isPlayer && !YTPlayer.opt.autoPlay ? !1 : !0, YTPlayer.playerEl = YTPlayer.player.getIframe(), jQuery(YTPlayer.playerEl).unselectable(), $YTPlayer.optimizeDisplay(), YTPlayer.videoID = videoID, jQuery(window).off("resize.YTP_" + YTPlayer.id).on("resize.YTP_" + YTPlayer.id, function () {
                        $YTPlayer.optimizeDisplay()
                      }), jQuery.mbYTPlayer.checkForState(YTPlayer))
                    },
                    onStateChange: function (event) {
                      if ("function" == typeof event.target.getPlayerState) {
                        var state = event.target.getPlayerState();
                        if (YTPlayer.preventTrigger) return void(YTPlayer.preventTrigger = !1);
                        YTPlayer.state = state;
                        var eventType;
                        switch (state) {
                          case -1:
                            eventType = "YTPUnstarted";
                            break;
                          case 0:
                            eventType = "YTPEnd";
                            break;
                          case 1:
                            eventType = "YTPPlay", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]), "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString());
                            break;
                          case 2:
                            eventType = "YTPPause", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                            break;
                          case 3:
                            YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), eventType = "YTPBuffering", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                            break;
                          case 5:
                            eventType = "YTPCued"
                        }
                        var YTPEvent = jQuery.Event(eventType);
                        YTPEvent.time = YTPlayer.currentTime, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(YTPEvent)
                      }
                    },
                    onPlaybackQualityChange: function (a) {
                      var b = a.target.getPlaybackQuality(),
                        c = jQuery.Event("YTPQualityChange");
                      c.quality = b, jQuery(YTPlayer).trigger(c)
                    },
                    onError: function (a) {
                      150 == a.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()), 2 == a.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, a)
                    }
                  }
                })
              }
            }))
          }), $YTPlayer.off("YTPTime.mask"), jQuery.mbYTPlayer.applyMask(YTPlayer)
        }
      })
    },
    getDataFromAPI: function (a) {
      if (a.videoData = jQuery.mbStorage.get("YTPlayer_data_" + a.videoID), jQuery(a).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function () {
          if (a.hasData && a.isPlayer && !a.opt.autoPlay) {
            var b = a.videoData.thumb_max || a.videoData.thumb_high || a.videoData.thumb_medium;
            a.opt.containment.css({
              background: "rgba(0,0,0,0.5) url(" + b + ") center center",
              backgroundSize: "cover"
            }), a.opt.backgroundUrl = b
          }
        }), a.videoData) setTimeout(function () {
        a.opt.ratio = "auto" == a.opt.ratio ? "16/9" : a.opt.ratio, a.dataReceived = !0, jQuery(a).trigger("YTPChanged");
        var b = jQuery.Event("YTPData");
        b.prop = {};
        for (var c in a.videoData) b.prop[c] = a.videoData[c];
        jQuery(a).trigger(b)
      }, 500), a.hasData = !0;
      else if (jQuery.mbYTPlayer.apiKey) jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + a.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function (b) {
        function c(b) {
          a.videoData = {}, a.videoData.id = a.videoID, a.videoData.channelTitle = b.channelTitle, a.videoData.title = b.title, a.videoData.description = b.description.length < 400 ? b.description : b.description.substring(0, 400) + " ...", a.videoData.aspectratio = "auto" == a.opt.ratio ? "16/9" : a.opt.ratio, a.opt.ratio = a.videoData.aspectratio, a.videoData.thumb_max = b.thumbnails.maxres ? b.thumbnails.maxres.url : null, a.videoData.thumb_high = b.thumbnails.high ? b.thumbnails.high.url : null, a.videoData.thumb_medium = b.thumbnails.medium ? b.thumbnails.medium.url : null, jQuery.mbStorage.set("YTPlayer_data_" + a.videoID, a.videoData)
        }
        a.dataReceived = !0, jQuery(a).trigger("YTPChanged"), c(b.items[0].snippet), a.hasData = !0;
        var d = jQuery.Event("YTPData");
        d.prop = {};
        for (var e in a.videoData) d.prop[e] = a.videoData[e];
        jQuery(a).trigger(d)
      });
      else {
        if (setTimeout(function () {
            jQuery(a).trigger("YTPChanged")
          }, 50), a.isPlayer && !a.opt.autoPlay) {
          var b = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + a.videoID + "/hqdefault.jpg";
          a.opt.containment.css({
            background: "rgba(0,0,0,0.5) url(" + b + ") center center",
            backgroundSize: "cover"
          }), a.opt.backgroundUrl = b
        }
        a.videoData = null, a.opt.ratio = "auto" == a.opt.ratio ? "16/9" : a.opt.ratio
      }
      a.isPlayer && !a.opt.autoPlay && (a.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(a).append(a.loading), a.loading.fadeIn())
    },
    removeStoredData: function () {
      jQuery.mbStorage.remove()
    },
    getVideoData: function () {
      var a = this.get(0);
      return a.videoData
    },
    getVideoID: function () {
      var a = this.get(0);
      return a.videoID || !1
    },
    setVideoQuality: function (a) {
      var b = this.get(0);
      b.player.setPlaybackQuality(a)
    },
    playlist: function (a, b, c, d) {
      var e = this,
        f = e.get(0);
      return f.isPlayList = !0, b && (a = jQuery.shuffle(a)), f.videoID || (f.videos = a, f.videoCounter = 0, f.videoLength = a.length, jQuery(f).data("property", a[0]), jQuery(f).mb_YTPlayer()), "function" == typeof c && jQuery(f).one("YTPChanged", function () {
        c(f)
      }), jQuery(f).on("YTPEnd", function () {
        d = "undefined" == typeof d ? !0 : d, jQuery(f).playNext(d)
      }), e
    },
    playNext: function (a) {
      var b = this.get(0);
      return b.checkForStartAt && (clearTimeout(b.checkForStartAt), clearInterval(b.getState)), b.videoCounter++, b.videoCounter >= b.videoLength && a && (b.videoCounter = 0), b.videoCounter < b.videoLength && jQuery(b).changeMovie(b.videos[b.videoCounter]), this
    },
    playPrev: function () {
      var a = this.get(0);
      return a.checkForStartAt && (clearInterval(a.checkForStartAt), clearInterval(a.getState)), a.videoCounter--, a.videoCounter < 0 && (a.videoCounter = a.videoLength - 1), jQuery(a).changeMovie(a.videos[a.videoCounter]), this
    },
    playIndex: function (a) {
      var b = this.get(0);
      return b.checkForStartAt && (clearInterval(b.checkForStartAt), clearInterval(b.getState)), b.videoCounter = a, b.videoCounter >= b.videoLength - 1 && (b.videoCounter = b.videoLength - 1), jQuery(b).changeMovie(b.videos[b.videoCounter]), this
    },
    changeMovie: function (a) {
      var b = this,
        c = b.get(0);
      c.opt.startAt = 0, c.opt.stopAt = 0, c.opt.mask = !1, c.opt.mute = !0, c.hasData = !1, c.hasChanged = !0, c.player.loopTime = void 0, a && jQuery.extend(c.opt, a), c.videoID = getYTPVideoID(c.opt.videoURL).videoID, "true" == c.opt.loop && (c.opt.loop = 9999), jQuery(c.playerEl).CSSAnimate({
        opacity: 0
      }, 200, function () {
        var a = jQuery.Event("YTPChangeMovie");
        a.time = c.currentTime, a.videoId = c.videoID, jQuery(c).trigger(a), jQuery(c).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + c.videoID), 1, c.opt.quality), jQuery(c).optimizeDisplay(), jQuery.mbYTPlayer.checkForState(c), jQuery.mbYTPlayer.getDataFromAPI(c)
      }), jQuery.mbYTPlayer.applyMask(c)
    },
    getPlayer: function () {
      return jQuery(this).get(0).player
    },
    playerDestroy: function () {
      var a = this.get(0);
      ytp.YTAPIReady = !0, ytp.backgroundIsInited = !1, a.isInit = !1, a.videoID = null;
      var b = a.wrapper;
      return b.remove(), jQuery("#controlBar_" + a.id).remove(), clearInterval(a.checkForStartAt), clearInterval(a.getState), this
    },
    fullscreen: function (real) {
      function hideMouse() {
        YTPlayer.overlay.css({
          cursor: "none"
        })
      }

      function RunPrefixMethod(a, b) {
        for (var c, d, e = ["webkit", "moz", "ms", "o", ""], f = 0; f < e.length && !a[c];) {
          if (c = b, "" == e[f] && (c = c.substr(0, 1).toLowerCase() + c.substr(1)), c = e[f] + c, d = typeof a[c], "undefined" != d) return e = [e[f]], "function" == d ? a[c]() : a[c];
          f++
        }
      }

      function launchFullscreen(a) {
        RunPrefixMethod(a, "RequestFullScreen")
      }

      function cancelFullscreen() {
        (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
      }
      var YTPlayer = this.get(0);
      "undefined" == typeof real && (real = YTPlayer.opt.realfullscreen), real = eval(real);
      var controls = jQuery("#controlBar_" + YTPlayer.id),
        fullScreenBtn = controls.find(".mb_OnlyYT"),
        videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
      if (real) {
        var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
        jQuery(document).off(fullscreenchange).on(fullscreenchange, function () {
          var a = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
          a ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("YTPFullscreen"), videoWrapper.CSSAnimate({
            opacity: YTPlayer.opt.opacity
          }, 500), videoWrapper.css({
            zIndex: 0
          }), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
        })
      }
      return YTPlayer.isAlone ? (jQuery(document).off("mousemove.YTPlayer"), YTPlayer.overlay.css({
        cursor: "auto"
      }), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
        opacity: YTPlayer.opt.opacity
      }, 500), videoWrapper.css({
        zIndex: 0
      })), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1) : (jQuery(document).on("mousemove.YTPlayer", function (a) {
        YTPlayer.overlay.css({
          cursor: "auto"
        }), clearTimeout(YTPlayer.hideCursor), jQuery(a.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
      }), hideMouse(), real ? (videoWrapper.css({
        opacity: 0
      }), videoWrapper.addClass("YTPFullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function () {
        videoWrapper.CSSAnimate({
          opacity: 1
        }, 1e3), YTPlayer.wrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
      }, 500)) : videoWrapper.css({
        zIndex: 1e4
      }).CSSAnimate({
        opacity: 1
      }, 1e3), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0), this
    },
    toggleLoops: function () {
      var a = this.get(0),
        b = a.opt;
      return 1 == b.loop ? b.loop = 0 : (b.startAt ? a.player.seekTo(b.startAt) : a.player.playVideo(), b.loop = 1), this
    },
    play: function () {
      var a = this.get(0);
      if (!a.isReady) return this;
      a.player.playVideo(), a.wrapper.CSSAnimate({
        opacity: a.isAlone ? 1 : a.opt.opacity
      }, 2e3), jQuery(a.playerEl).CSSAnimate({
        opacity: 1
      }, 1e3);
      var b = jQuery("#controlBar_" + a.id),
        c = b.find(".mb_YTPPlaypause");
      return c.html(jQuery.mbYTPlayer.controls.pause), a.state = 1, jQuery(a).css("background-image", "none"), this
    },
    togglePlay: function (a) {
      var b = this.get(0);
      return 1 == b.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof a && a(b.state), this
    },
    stop: function () {
      var a = this.get(0),
        b = jQuery("#controlBar_" + a.id),
        c = b.find(".mb_YTPPlaypause");
      return c.html(jQuery.mbYTPlayer.controls.play), a.player.stopVideo(), this
    },
    pause: function () {
      var a = this.get(0);
      return a.player.pauseVideo(), a.state = 2, this
    },
    seekTo: function (a) {
      var b = this.get(0);
      return b.player.seekTo(a, !0), this
    },
    setVolume: function (a) {
      var b = this.get(0);
      return a || b.opt.vol || 0 != b.player.getVolume() ? !a && b.player.getVolume() > 0 || a && b.opt.vol == a ? b.isMute ? jQuery(b).YTPUnmute() : jQuery(b).YTPMute() : (b.opt.vol = a, b.player.setVolume(b.opt.vol), b.volumeBar && b.volumeBar.length && b.volumeBar.updateSliderVal(a)) : jQuery(b).YTPUnmute(), this
    },
    toggleVolume: function () {
      var a = this.get(0);
      if (a) return a.player.isMuted() ? (jQuery(a).YTPUnmute(), !0) : (jQuery(a).YTPMute(), !1)
    },
    mute: function () {
      var a = this.get(0);
      if (!a.isMute) {
        a.player.mute(), a.isMute = !0, a.player.setVolume(0), a.volumeBar && a.volumeBar.length && a.volumeBar.width() > 10 && a.volumeBar.updateSliderVal(0);
        var b = jQuery("#controlBar_" + a.id),
          c = b.find(".mb_YTPMuteUnmute");
        c.html(jQuery.mbYTPlayer.controls.unmute), jQuery(a).addClass("isMuted"), a.volumeBar && a.volumeBar.length && a.volumeBar.addClass("muted");
        var d = jQuery.Event("YTPMuted");
        return d.time = a.currentTime, a.canTrigger && jQuery(a).trigger(d), this
      }
    },
    unmute: function () {
      var a = this.get(0);
      if (a.isMute) {
        a.player.unMute(), a.isMute = !1, a.player.setVolume(a.opt.vol), a.volumeBar && a.volumeBar.length && a.volumeBar.updateSliderVal(a.opt.vol > 10 ? a.opt.vol : 10);
        var b = jQuery("#controlBar_" + a.id),
          c = b.find(".mb_YTPMuteUnmute");
        c.html(jQuery.mbYTPlayer.controls.mute), jQuery(a).removeClass("isMuted"), a.volumeBar && a.volumeBar.length && a.volumeBar.removeClass("muted");
        var d = jQuery.Event("YTPUnmuted");
        return d.time = a.currentTime, a.canTrigger && jQuery(a).trigger(d), this
      }
    },
    applyFilter: function (a, b) {
      return this.each(function () {
        var c = this;
        c.filters[a].value = b, c.filtersEnabled && jQuery(c).YTPEnableFilters()
      })
    },
    applyFilters: function (a) {
      return this.each(function () {
        var b = this;
        if (!b.isReady) return void jQuery(b).on("YTPReady", function () {
          jQuery(b).YTPApplyFilters(a)
        });
        for (var c in a) jQuery(b).YTPApplyFilter(c, a[c]);
        jQuery(b).trigger("YTPFiltersApplied")
      })
    },
    toggleFilter: function (a, b) {
      return this.each(function () {
        var c = this;
        c.filters[a].value ? c.filters[a].value = 0 : c.filters[a].value = b, c.filtersEnabled && jQuery(this).YTPEnableFilters()
      })
    },
    toggleFilters: function (a) {
      return this.each(function () {
        var b = this;
        b.filtersEnabled ? (jQuery(b).trigger("YTPDisableFilters"), jQuery(b).YTPDisableFilters()) : (jQuery(b).YTPEnableFilters(), jQuery(b).trigger("YTPEnableFilters")), "function" == typeof a && a(b.filtersEnabled)
      })
    },
    disableFilters: function () {
      return this.each(function () {
        var a = this,
          b = jQuery(a.playerEl);
        b.css("-webkit-filter", ""), b.css("filter", ""), a.filtersEnabled = !1
      })
    },
    enableFilters: function () {
      return this.each(function () {
        var a = this,
          b = jQuery(a.playerEl),
          c = "";
        for (var d in a.filters) a.filters[d].value && (c += d.replace("_", "-") + "(" + a.filters[d].value + a.filters[d].unit + ") ");
        b.css("-webkit-filter", c), b.css("filter", c), a.filtersEnabled = !0
      })
    },
    removeFilter: function (a, b) {
      return this.each(function () {
        var c = this;
        if ("function" == typeof a && (b = a, a = null), a) jQuery(this).YTPApplyFilter(a, 0), "function" == typeof b && b(a);
        else
          for (var d in c.filters) jQuery(this).YTPApplyFilter(d, 0), "function" == typeof b && b(d)
      })
    },
    getFilters: function () {
      var a = this.get(0);
      return a.filters
    },
    addMask: function (a) {
      var b = this.get(0),
        c = b.overlay;
      a || (a = b.actualMask);
      var d = jQuery("<img/>").attr("src", a).on("load", function () {
        c.CSSAnimate({
          opacity: 0
        }, 500, function () {
          b.hasMask = !0, d.remove(), c.css({
            backgroundImage: "url(" + a + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"
          }), c.CSSAnimate({
            opacity: 1
          }, 500)
        })
      });
      return this
    },
    removeMask: function () {
      var a = this.get(0),
        b = a.overlay;
      return b.CSSAnimate({
        opacity: 0
      }, 500, function () {
        a.hasMask = !1, b.css({
          backgroundImage: "",
          backgroundRepeat: "",
          backgroundPosition: "",
          backgroundSize: ""
        }), b.CSSAnimate({
          opacity: 1
        }, 500)
      }), this
    },
    applyMask: function (a) {
      var b = jQuery(a);
      if (b.off("YTPTime.mask"), a.opt.mask)
        if ("string" == typeof a.opt.mask) b.YTPAddMask(a.opt.mask), a.actualMask = a.opt.mask;
        else if ("object" == typeof a.opt.mask) {
        for (var c in a.opt.mask)
          if (a.opt.mask[c]) {
            jQuery("<img/>").attr("src", a.opt.mask[c])
          } a.opt.mask[0] && b.YTPAddMask(a.opt.mask[0]), b.on("YTPTime.mask", function (c) {
          for (var d in a.opt.mask) c.time == d && (a.opt.mask[d] ? (b.YTPAddMask(a.opt.mask[d]), a.actualMask = a.opt.mask[d]) : b.YTPRemoveMask())
        })
      }
    },
    toggleMask: function () {
      var a = this.get(0),
        b = $(a);
      a.hasMask ? b.YTPRemoveMask() : b.YTPAddMask()
    },
    manageProgress: function () {
      var a = this.get(0),
        b = jQuery("#controlBar_" + a.id),
        c = b.find(".mb_YTPProgress"),
        d = b.find(".mb_YTPLoaded"),
        e = b.find(".mb_YTPseekbar"),
        f = c.outerWidth(),
        g = Math.floor(a.player.getCurrentTime()),
        h = Math.floor(a.player.getDuration()),
        i = g * f / h,
        j = 0,
        k = 100 * a.player.getVideoLoadedFraction();
      return d.css({
        left: j,
        width: k + "%"
      }), e.css({
        left: 0,
        width: i
      }), {
        totalTime: h,
        currentTime: g
      }
    },
    buildControls: function (YTPlayer) {
      var data = YTPlayer.opt;
      if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
        YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
          whiteSpace: "noWrap",
          position: YTPlayer.isBackground ? "fixed" : "absolute",
          zIndex: YTPlayer.isBackground ? 1e4 : 1e3
        }).hide();
        var buttonBar = jQuery("<div/>").addClass("buttonBar"),
          playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function () {
            1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).YTPPause() : jQuery(YTPlayer).YTPPlay()
          }),
          MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function () {
            0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).YTPUnmute() : jQuery(YTPlayer).YTPMute()
          }),
          volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
            display: "inline-block"
          });
        YTPlayer.volumeBar = volumeBar;
        var idx = jQuery("<span/>").addClass("mb_YTPTime"),
          vURL = data.videoURL ? data.videoURL : "";
        vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
        var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function () {
            window.open(vURL, "viewOnYT")
          }),
          onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function () {
            jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)
          }),
          progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function (a) {
            timeBar.css({
              width: a.clientX - timeBar.offset().left
            }), YTPlayer.timeW = a.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({
              width: 0
            });
            var b = Math.floor(YTPlayer.player.getDuration());
            YTPlayer["goto"] = timeBar.outerWidth() * b / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({
              width: 0
            })
          }),
          loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
          timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
        progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), data.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
          initialval: YTPlayer.opt.vol,
          scale: 100,
          orientation: "h",
          callback: function (a) {
            0 == a.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(a.value), YTPlayer.isMute || (YTPlayer.opt.vol = a.value)
          }
        })
      }
    },
    checkForState: function (YTPlayer) {
      var interval = YTPlayer.opt.showControls ? 100 : 400;
      return clearInterval(YTPlayer.getState), jQuery.contains(document, YTPlayer) ? (jQuery.mbYTPlayer.checkForStart(YTPlayer), void(YTPlayer.getState = setInterval(function () {
        var prog = jQuery(YTPlayer).YTPManageProgress(),
          $YTPlayer = jQuery(YTPlayer),
          data = YTPlayer.opt,
          startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1,
          stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
        if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.currentTime != prog.currentTime) {
          var YTPEvent = jQuery.Event("YTPTime");
          YTPEvent.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(YTPEvent)
        }
        if (YTPlayer.currentTime = prog.currentTime, YTPlayer.totalTime = YTPlayer.player.getDuration(), 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, $YTPlayer.YTPPause())), YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - 1.5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
          if (YTPlayer.isEnded) return;
          if (YTPlayer.isEnded = !0, setTimeout(function () {
              YTPlayer.isEnded = !1
            }, 1e3), YTPlayer.isPlayList) {
            if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) {
              YTPlayer.player.loopTime = void 0, clearInterval(YTPlayer.getState);
              var YTPEnd = jQuery.Event("YTPEnd");
              return YTPEnd.time = YTPlayer.currentTime, void jQuery(YTPlayer).trigger(YTPEnd)
            }
          } else if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) return YTPlayer.player.loopTime = void 0, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, jQuery(YTPlayer).YTPPause(), void YTPlayer.wrapper.CSSAnimate({
            opacity: 0
          }, 500, function () {
            YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
            var a = jQuery.Event("YTPEnd");
            a.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(a), YTPlayer.player.seekTo(startAt, !0), YTPlayer.isBackground || YTPlayer.opt.containment.css({
              background: "rgba(0,0,0,0.5) url(" + YTPlayer.opt.backgroundUrl + ") center center",
              backgroundSize: "cover"
            })
          });
          YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1, startAt = startAt || 1, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, jQuery(YTPlayer).YTPPause(), YTPlayer.player.seekTo(startAt, !0), $YTPlayer.YTPPlay()
        }
      }, interval))) : (jQuery(YTPlayer).YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt))
    },
    getTime: function () {
      var a = this.get(0);
      return jQuery.mbYTPlayer.formatTime(a.currentTime)
    },
    getTotalTime: function () {
      var a = this.get(0);
      return jQuery.mbYTPlayer.formatTime(a.totalTime)
    },
    checkForStart: function (a) {
      var b = jQuery(a);
      if (!jQuery.contains(document, a)) return void jQuery(a).YTPPlayerDestroy();
      if (a.preventTrigger = !0, a.state = 2, jQuery(a).YTPPause(), jQuery(a).muteYTPVolume(), jQuery("#controlBar_" + a.id).remove(), a.controlBar = !1, a.opt.showControls && jQuery.mbYTPlayer.buildControls(a), a.opt.addRaster) {
        var c = "dot" == a.opt.addRaster ? "raster-dot" : "raster";
        a.overlay.addClass(a.isRetina ? c + " retina" : c)
      } else a.overlay.removeClass(function (a, b) {
        var c = b.split(" "),
          d = [];
        return jQuery.each(c, function (a, b) {
          /raster.*/.test(b) && d.push(b)
        }), d.push("retina"), d.join(" ")
      });
      var d = a.opt.startAt ? a.opt.startAt : 1;
      a.player.playVideo(), a.player.seekTo(d, !0), a.checkForStartAt = setInterval(function () {
        jQuery(a).YTPMute();
        var c = a.player.getVideoLoadedFraction() >= d / a.player.getDuration();
        if (a.player.getDuration() > 0 && a.player.getCurrentTime() >= d && c) {
          clearInterval(a.checkForStartAt), "function" == typeof a.opt.onReady && a.opt.onReady(a), a.isReady = !0;
          var e = jQuery.Event("YTPReady");
          if (e.time = a.currentTime, jQuery(a).trigger(e), a.preventTrigger = !0, a.state = 2, jQuery(a).YTPPause(), a.opt.mute || jQuery(a).YTPUnmute(), a.canTrigger = !0, a.opt.autoPlay) {
            var f = jQuery.Event("YTPStart");
            f.time = a.currentTime, jQuery(a).trigger(f), b.css("background-image", "none"), jQuery(a.playerEl).CSSAnimate({
              opacity: 1
            }, 1e3), b.YTPPlay(), a.wrapper.CSSAnimate({
              opacity: a.isAlone ? 1 : a.opt.opacity
            }, 1e3), jQuery.browser.safari && (a.safariPlay = setInterval(function () {
              1 != a.state ? b.YTPPlay() : clearInterval(a.safariPlay)
            }, 10)), b.on("YTPReady", function () {
              b.YTPPlay()
            })
          } else a.player.pauseVideo(), a.isPlayer || (jQuery(a.playerEl).CSSAnimate({
            opacity: 1
          }, 500), a.wrapper.CSSAnimate({
            opacity: a.isAlone ? 1 : a.opt.opacity
          }, 500)), a.controlBar.length && a.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
          a.isPlayer && !a.opt.autoPlay && (a.loading.html("Ready"), setTimeout(function () {
            a.loading.fadeOut()
          }, 100)), a.controlBar.length && a.controlBar.slideDown(1e3)
        } else jQuery.browser.safari && (a.player.playVideo(), d >= 0 && a.player.seekTo(d, !0))
      }, 1)
    },
    setAlign: function (a) {
      var b = this;
      b.optimizeDisplay(a)
    },
    getAlign: function () {
      var a = this.get(0);
      return a.opt.align
    },
    formatTime: function (a) {
      var b = Math.floor(a / 60),
        c = Math.floor(a - 60 * b);
      return (9 >= b ? "0" + b : b) + " : " + (9 >= c ? "0" + c : c)
    }
  }, jQuery.fn.optimizeDisplay = function (a) {
    var b = this.get(0),
      c = jQuery(b.playerEl),
      d = {};
    b.opt.align = a || b.opt.align, b.opt.align = "undefined " != typeof b.opt.align ? b.opt.align : "center,center";
    var e = b.opt.align.split(",");
    if (b.opt.optimizeDisplay) {
      var f = {},
        g = b.wrapper;
      f.width = g.outerWidth(), f.height = g.outerHeight(), d.width = f.width, d.height = "16/9" == b.opt.ratio ? Math.ceil(f.width * (9 / 16)) : Math.ceil(.75 * f.width), d.width = f.width, d.height = "16/9" == b.opt.ratio ? Math.ceil(f.width * (9 / 16)) : Math.ceil(.75 * f.width), d.marginTop = -((d.height - f.height) / 2), d.marginLeft = 0;
      var h = d.height < f.height;
      h && (d.height = f.height, d.width = "16/9" == b.opt.ratio ? Math.floor(f.height * (16 / 9)) : Math.floor(f.height * (4 / 3)), d.marginTop = 0, d.marginLeft = -((d.width - f.width) / 2));
      for (var i in e) {
        var j = e[i].trim();
        switch (j) {
          case "top":
            d.marginTop = h ? -((d.height - f.height) / 2) : 0;
            break;
          case "bottom":
            d.marginTop = h ? 0 : -(d.height - f.height);
            break;
          case "left":
            d.marginLeft = 0;
            break;
          case "right":
            d.marginLeft = h ? -(d.width - f.width) : 0
        }
      }
    } else d.width = "100%", d.height = "100%", d.marginTop = 0, d.marginLeft = 0;
    c.css({
      width: d.width,
      height: d.height,
      marginTop: d.marginTop,
      marginLeft: d.marginLeft
    })
  }, jQuery.shuffle = function (a) {
    for (var b = a.slice(), c = b.length, d = c; d--;) {
      var e = parseInt(Math.random() * c),
        f = b[d];
      b[d] = b[e], b[e] = f
    }
    return b
  }, jQuery.fn.unselectable = function () {
    return this.each(function () {
      jQuery(this).css({
        "-moz-user-select": "none",
        "-webkit-user-select": "none",
        "user-select": "none"
      }).attr("unselectable", "on")
    })
  }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters, jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime, jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime, jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask, jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask, jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask, jQuery.fn.YTPSetAlign = jQuery.mbYTPlayer.setAlign, jQuery.fn.YTPGetAlign = jQuery.mbYTPlayer.getAlign, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.play, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData
}(jQuery, ytp), jQuery.support.CSStransition = function () {
  var a = document.body || document.documentElement,
    b = a.style;
  return void 0 !== b.transition || void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.MsTransition || void 0 !== b.OTransition
}(), jQuery.CSS = {
  name: "mb.CSSAnimate",
  author: "Matteo Bicocchi",
  version: "2.0.0",
  transitionEnd: "transitionEnd",
  sfx: "",
  filters: {
    blur: {
      min: 0,
      max: 100,
      unit: "px"
    },
    brightness: {
      min: 0,
      max: 400,
      unit: "%"
    },
    contrast: {
      min: 0,
      max: 400,
      unit: "%"
    },
    grayscale: {
      min: 0,
      max: 100,
      unit: "%"
    },
    hueRotate: {
      min: 0,
      max: 360,
      unit: "deg"
    },
    invert: {
      min: 0,
      max: 100,
      unit: "%"
    },
    saturate: {
      min: 0,
      max: 400,
      unit: "%"
    },
    sepia: {
      min: 0,
      max: 100,
      unit: "%"
    }
  },
  normalizeCss: function (a) {
    var b = jQuery.extend(!0, {}, a);
    jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-");
    for (var c in b) {
      "transform" === c && (b[jQuery.CSS.sfx + "transform"] = b[c], delete b[c]), "transform-origin" === c && (b[jQuery.CSS.sfx + "transform-origin"] = a[c], delete b[c]), "filter" !== c || jQuery.browser.mozilla || (b[jQuery.CSS.sfx + "filter"] = a[c], delete b[c]), "blur" === c && setFilter(b, "blur", a[c]), "brightness" === c && setFilter(b, "brightness", a[c]), "contrast" === c && setFilter(b, "contrast", a[c]), "grayscale" === c && setFilter(b, "grayscale", a[c]), "hueRotate" === c && setFilter(b, "hueRotate", a[c]), "invert" === c && setFilter(b, "invert", a[c]), "saturate" === c && setFilter(b, "saturate", a[c]), "sepia" === c && setFilter(b, "sepia", a[c]);
      var d = "";
      "x" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " translateX(" + setUnit(a[c], "px") + ")", delete b[c]), "y" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " translateY(" + setUnit(a[c], "px") + ")", delete b[c]), "z" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " translateZ(" + setUnit(a[c], "px") + ")", delete b[c]), "rotate" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotate(" + setUnit(a[c], "deg") + ")", delete b[c]), "rotateX" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotateX(" + setUnit(a[c], "deg") + ")", delete b[c]), "rotateY" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotateY(" + setUnit(a[c], "deg") + ")", delete b[c]), "rotateZ" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotateZ(" + setUnit(a[c], "deg") + ")", delete b[c]), "scale" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scale(" + setUnit(a[c], "") + ")", delete b[c]), "scaleX" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scaleX(" + setUnit(a[c], "") + ")", delete b[c]), "scaleY" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scaleY(" + setUnit(a[c], "") + ")", delete b[c]), "scaleZ" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scaleZ(" + setUnit(a[c], "") + ")", delete b[c]), "skew" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " skew(" + setUnit(a[c], "deg") + ")", delete b[c]), "skewX" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " skewX(" + setUnit(a[c], "deg") + ")", delete b[c]), "skewY" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " skewY(" + setUnit(a[c], "deg") + ")", delete b[c]), "perspective" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " perspective(" + setUnit(a[c], "px") + ")", delete b[c])
    }
    return b
  },
  getProp: function (a) {
    var b = [];
    for (var c in a) b.indexOf(c) < 0 && b.push(uncamel(c));
    return b.join(",")
  },
  animate: function (a, b, c, d, e) {
    return this.each(function () {
      function f() {
        g.called = !0, g.CSSAIsRunning = !1, h.off(jQuery.CSS.transitionEnd + "." + g.id), clearTimeout(g.timeout), h.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof e && e.apply(g), "function" == typeof g.CSSqueue && (g.CSSqueue(), g.CSSqueue = null)
      }
      var g = this,
        h = jQuery(this);
      g.id = g.id || "CSSA_" + (new Date).getTime();
      var i = i || {
        type: "noEvent"
      };
      if (g.CSSAIsRunning && g.eventType == i.type && !jQuery.browser.msie && jQuery.browser.version <= 9) return void(g.CSSqueue = function () {
        h.CSSAnimate(a, b, c, d, e)
      });
      if (g.CSSqueue = null, g.eventType = i.type, 0 !== h.length && a) {
        if (a = jQuery.normalizeCss(a), g.CSSAIsRunning = !0, "function" == typeof b && (e = b, b = jQuery.fx.speeds._default), "function" == typeof c && (d = c, c = 0), "string" == typeof c && (e = c, c = 0), "function" == typeof d && (e = d, d = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof b)
          for (var j in jQuery.fx.speeds) {
            if (b == j) {
              b = jQuery.fx.speeds[j];
              break
            }
            b = jQuery.fx.speeds._default
          }
        if (b || (b = jQuery.fx.speeds._default), "string" == typeof e && (d = e, e = null), !jQuery.support.CSStransition) {
          for (var k in a) {
            if ("transform" === k && delete a[k], "filter" === k && delete a[k], "transform-origin" === k && delete a[k], "auto" === a[k] && delete a[k], "x" === k) {
              var l = a[k],
                m = "left";
              a[m] = l, delete a[k]
            }
            if ("y" === k) {
              var l = a[k],
                m = "top";
              a[m] = l, delete a[k]
            }("-ms-transform" === k || "-ms-filter" === k) && delete a[k]
          }
          return void h.delay(c).animate(a, b, e)
        }
        var n = {
          "default": "ease",
          "in": "ease-in",
          out: "ease-out",
          "in-out": "ease-in-out",
          snap: "cubic-bezier(0,1,.5,1)",
          easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
          easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
          easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
          easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
          easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
          easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
          easeOutExpo: "cubic-bezier(.19,1,.22,1)",
          easeInOutExpo: "cubic-bezier(1,0,0,1)",
          easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
          easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
          easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
          easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
          easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
          easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
          easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
          easeOutQuint: "cubic-bezier(.23,1,.32,1)",
          easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
          easeInSine: "cubic-bezier(.47,0,.745,.715)",
          easeOutSine: "cubic-bezier(.39,.575,.565,1)",
          easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
          easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
          easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
          easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
        };
        n[d] && (d = n[d]), h.off(jQuery.CSS.transitionEnd + "." + g.id);
        var o = jQuery.CSS.getProp(a),
          p = {};
        jQuery.extend(p, a), p[jQuery.CSS.sfx + "transition-property"] = o, p[jQuery.CSS.sfx + "transition-duration"] = b + "ms", p[jQuery.CSS.sfx + "transition-delay"] = c + "ms", p[jQuery.CSS.sfx + "transition-timing-function"] = d, setTimeout(function () {
          h.one(jQuery.CSS.transitionEnd + "." + g.id, f), h.css(p)
        }, 1), g.timeout = setTimeout(function () {
          return g.called || !e ? (g.called = !1, void(g.CSSAIsRunning = !1)) : (h.css(jQuery.CSS.sfx + "transition", ""), e.apply(g), g.CSSAIsRunning = !1, void("function" == typeof g.CSSqueue && (g.CSSqueue(), g.CSSqueue = null)))
        }, b + c + 10)
      }
    })
  }
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function (a) {
  return this.each(function () {
    var b = jQuery(this),
      c = jQuery.normalizeCss(a);
    b.css(c)
  })
};
var nAgt = navigator.userAgent;
if (!jQuery.browser) {
  jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
  var nameOffset, verOffset, ix;
  if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
  else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
  else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
  else if (-1 != nAgt.indexOf("Trident") || -1 != nAgt.indexOf("Edge")) {
    jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3,
      end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end)
  } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : nAgt.indexOf("mozilla/5.0") > -1 && nAgt.indexOf("android ") > -1 && nAgt.indexOf("applewebkit") > -1 && !(nAgt.indexOf("chrome") > -1) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion
}
jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && jQuery(window).width() > 765, jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), ! function (a) {
  var b = (/iphone|ipod|ipad|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase()), "ontouchstart" in window || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch || !1);
  a.simpleSlider = {
    defaults: {
      initialval: 0,
      scale: 100,
      orientation: "h",
      readonly: !1,
      callback: !1
    },
    events: {
      start: b ? "touchstart" : "mousedown",
      end: b ? "touchend" : "mouseup",
      move: b ? "touchmove" : "mousemove"
    },
    init: function (c) {
      return this.each(function () {
        var d = this,
          e = a(d);
        e.addClass("simpleSlider"), d.opt = {}, a.extend(d.opt, a.simpleSlider.defaults, c), a.extend(d.opt, e.data());
        var f = "h" == d.opt.orientation ? "horizontal" : "vertical",
          g = a("<div/>").addClass("level").addClass(f);
        e.prepend(g), d.level = g, e.css({
          cursor: "default"
        }), "auto" == d.opt.scale && (d.opt.scale = a(d).outerWidth()), e.updateSliderVal(), d.opt.readonly || (e.on(a.simpleSlider.events.start, function (a) {
          b && (a = a.changedTouches[0]), d.canSlide = !0, e.updateSliderVal(a), e.css({
            cursor: "col-resize"
          }), a.preventDefault(), a.stopPropagation()
        }), a(document).on(a.simpleSlider.events.move, function (c) {
          b && (c = c.changedTouches[0]), d.canSlide && (a(document).css({
            cursor: "default"
          }), e.updateSliderVal(c), c.preventDefault(), c.stopPropagation())
        }).on(a.simpleSlider.events.end, function () {
          a(document).css({
            cursor: "auto"
          }), d.canSlide = !1, e.css({
            cursor: "auto"
          })
        }))
      })
    },
    updateSliderVal: function (b) {
      function c(a, b) {
        return Math.floor(100 * a / b)
      }
      var d = this,
        e = d.get(0);
      if (e.opt) {
        e.opt.initialval = "number" == typeof e.opt.initialval ? e.opt.initialval : e.opt.initialval(e);
        var f = a(e).outerWidth(),
          g = a(e).outerHeight();
        e.x = "object" == typeof b ? b.clientX + document.body.scrollLeft - d.offset().left : "number" == typeof b ? b * f / e.opt.scale : e.opt.initialval * f / e.opt.scale, e.y = "object" == typeof b ? b.clientY + document.body.scrollTop - d.offset().top : "number" == typeof b ? (e.opt.scale - e.opt.initialval - b) * g / e.opt.scale : e.opt.initialval * g / e.opt.scale, e.y = d.outerHeight() - e.y, e.scaleX = e.x * e.opt.scale / f, e.scaleY = e.y * e.opt.scale / g, e.outOfRangeX = e.scaleX > e.opt.scale ? e.scaleX - e.opt.scale : e.scaleX < 0 ? e.scaleX : 0, e.outOfRangeY = e.scaleY > e.opt.scale ? e.scaleY - e.opt.scale : e.scaleY < 0 ? e.scaleY : 0, e.outOfRange = "h" == e.opt.orientation ? e.outOfRangeX : e.outOfRangeY, "undefined" != typeof b ? e.value = "h" == e.opt.orientation ? e.x >= d.outerWidth() ? e.opt.scale : e.x <= 0 ? 0 : e.scaleX : e.y >= d.outerHeight() ? e.opt.scale : e.y <= 0 ? 0 : e.scaleY : e.value = "h" == e.opt.orientation ? e.scaleX : e.scaleY, "h" == e.opt.orientation ? e.level.width(c(e.x, f) + "%") : e.level.height(c(e.y, g)), "function" == typeof e.opt.callback && e.opt.callback(e)
      }
    }
  }, a.fn.simpleSlider = a.simpleSlider.init, a.fn.updateSliderVal = a.simpleSlider.updateSliderVal
}(jQuery), ! function (a) {
  a.mbCookie = {
    set: function (a, b, c, d) {
      b = JSON.stringify(b), c || (c = 7), d = d ? "; domain=" + d : "";
      var e, f = new Date;
      f.setTime(f.getTime() + 864e5 * c), e = "; expires=" + f.toGMTString(), document.cookie = a + "=" + b + e + "; path=/" + d
    },
    get: function (a) {
      for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
        for (var e = c[d];
          " " == e.charAt(0);) e = e.substring(1, e.length);
        if (0 == e.indexOf(b)) return JSON.parse(e.substring(b.length, e.length))
      }
      return null
    },
    remove: function (b) {
      a.mbCookie.set(b, "", -1)
    }
  }, a.mbStorage = {
    set: function (a, b) {
      b = JSON.stringify(b), localStorage.setItem(a, b)
    },
    get: function (a) {
      return localStorage[a] ? JSON.parse(localStorage[a]) : null
    },
    remove: function (a) {
      a ? localStorage.removeItem(a) : localStorage.clear()
    }
  }
}(jQuery);


/*
 *  Vide - v0.5.0
 *  Easy as hell jQuery plugin for video backgrounds.
 *  http://vodkabears.github.io/vide/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */
! function (a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], b) : b("object" == typeof exports ? require("jquery") : a.jQuery)
}(this, function (a) {
  "use strict";

  function b(a) {
    var b, c, d, e, f, g, h, i = {};
    for (f = a.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(","), h = 0, g = f.length; g > h && (c = f[h], -1 === c.search(/^(http|https|ftp):\/\//) && -1 !== c.search(":")); h++) b = c.indexOf(":"), d = c.substring(0, b), e = c.substring(b + 1), e || (e = void 0), "string" == typeof e && (e = "true" === e || ("false" === e ? !1 : e)), "string" == typeof e && (e = isNaN(e) ? e : +e), i[d] = e;
    return null == d && null == e ? a : i
  }

  function c(a) {
    a = "" + a;
    var b, c, d, e = a.split(/\s+/),
      f = "50%",
      g = "50%";
    for (d = 0, b = e.length; b > d; d++) c = e[d], "left" === c ? f = "0%" : "right" === c ? f = "100%" : "top" === c ? g = "0%" : "bottom" === c ? g = "100%" : "center" === c ? 0 === d ? f = "50%" : g = "50%" : 0 === d ? f = c : g = c;
    return {
      x: f,
      y: g
    }
  }

  function d(b, c) {
    var d = function () {
      c(this.src)
    };
    a('<img src="' + b + '.gif">').load(d), a('<img src="' + b + '.jpg">').load(d), a('<img src="' + b + '.jpeg">').load(d), a('<img src="' + b + '.png">').load(d)
  }

  function e(c, d, e) {
    if (this.$element = a(c), "string" == typeof d && (d = b(d)), e ? "string" == typeof e && (e = b(e)) : e = {}, "string" == typeof d) d = d.replace(/\.\w*$/, "");
    else if ("object" == typeof d)
      for (var f in d) d.hasOwnProperty(f) && (d[f] = d[f].replace(/\.\w*$/, ""));
    this.settings = a.extend({}, g, e), this.path = d;
    try {
      this.init()
    } catch (i) {
      if (i.message !== h) throw i
    }
  }
  var f = "vide",
    g = {
      volume: 1,
      playbackRate: 1,
      muted: !0,
      loop: !0,
      autoplay: !0,
      position: "50% 50%",
      posterType: "detect",
      resizing: !0,
      bgColor: "transparent",
      className: ""
    },
    h = "Not implemented";
  e.prototype.init = function () {
    var b, e, g = this,
      i = g.path,
      j = i,
      k = "",
      l = g.$element,
      m = g.settings,
      n = c(m.position),
      o = m.posterType;
    e = g.$wrapper = a("<div>").addClass(m.className).css({
      position: "absolute",
      "z-index": -1,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      overflow: "hidden",
      "-webkit-background-size": "cover",
      "-moz-background-size": "cover",
      "-o-background-size": "cover",
      "background-size": "cover",
      "background-color": m.bgColor,
      "background-repeat": "no-repeat",
      "background-position": n.x + " " + n.y
    }), "object" == typeof i && (i.poster ? j = i.poster : i.mp4 ? j = i.mp4 : i.webm ? j = i.webm : i.ogv && (j = i.ogv)), "detect" === o ? d(j, function (a) {
      e.css("background-image", "url(" + a + ")")
    }) : "none" !== o && e.css("background-image", "url(" + j + "." + o + ")"), "static" === l.css("position") && l.css("position", "relative"), l.prepend(e), "object" == typeof i ? (i.mp4 && (k += '<source src="' + i.mp4 + '.mp4" type="video/mp4">'), i.webm && (k += '<source src="' + i.webm + '.webm" type="video/webm">'), i.ogv && (k += '<source src="' + i.ogv + '.ogv" type="video/ogg">'), b = g.$video = a("<video>" + k + "</video>")) : b = g.$video = a('<video><source src="' + i + '.mp4" type="video/mp4"><source src="' + i + '.webm" type="video/webm"><source src="' + i + '.ogv" type="video/ogg"></video>');
    try {
      b.prop({
        autoplay: m.autoplay,
        loop: m.loop,
        volume: m.volume,
        muted: m.muted,
        defaultMuted: m.muted,
        playbackRate: m.playbackRate,
        defaultPlaybackRate: m.playbackRate
      })
    } catch (p) {
      throw new Error(h)
    }
    b.css({
      margin: "auto",
      position: "absolute",
      "z-index": -1,
      top: n.y,
      left: n.x,
      "-webkit-transform": "translate(-" + n.x + ", -" + n.y + ")",
      "-ms-transform": "translate(-" + n.x + ", -" + n.y + ")",
      "-moz-transform": "translate(-" + n.x + ", -" + n.y + ")",
      transform: "translate(-" + n.x + ", -" + n.y + ")",
      visibility: "hidden",
      opacity: 0
    }).one("canplaythrough." + f, function () {
      g.resize()
    }).one("playing." + f, function () {
      b.css({
        visibility: "visible",
        opacity: 1
      }), e.css("background-image", "none")
    }), l.on("resize." + f, function () {
      m.resizing && g.resize()
    }), e.append(b)
  }, e.prototype.getVideoObject = function () {
    return this.$video[0]
  }, e.prototype.resize = function () {
    if (this.$video) {
      var a = this.$wrapper,
        b = this.$video,
        c = b[0],
        d = c.videoHeight,
        e = c.videoWidth,
        f = a.height(),
        g = a.width();
      g / e > f / d ? b.css({
        width: g + 2,
        height: "auto"
      }) : b.css({
        width: "auto",
        height: f + 2
      })
    }
  }, e.prototype.destroy = function () {
    delete a[f].lookup[this.index], this.$video && this.$video.off(f), this.$element.off(f).removeData(f), this.$wrapper.remove()
  }, a[f] = {
    lookup: []
  }, a.fn[f] = function (b, c) {
    var d;
    return this.each(function () {
      d = a.data(this, f), d && d.destroy(), d = new e(this, b, c), d.index = a[f].lookup.push(d) - 1, a.data(this, f, d)
    }), this
  }, a(document).ready(function () {
    var b = a(window);
    b.on("resize." + f, function () {
      for (var b, c = a[f].lookup.length, d = 0; c > d; d++) b = a[f].lookup[d], b && b.settings.resizing && b.resize()
    }), b.on("unload." + f, function () {
      return !1
    }), a(document).find("[data-" + f + "-bg]").each(function (b, c) {
      var d = a(c),
        e = d.data(f + "-options"),
        g = d.data(f + "-bg");
      d[f](g, e)
    })
  })
});


/*! device.js 0.2.7 */
(function () {
  var a, b, c, d, e, f, g, h, i, j;
  b = window.device, a = {}, window.device = a, d = window.document.documentElement, j = window.navigator.userAgent.toLowerCase(), a.ios = function () {
    return a.iphone() || a.ipod() || a.ipad()
  }, a.iphone = function () {
    return !a.windows() && e("iphone")
  }, a.ipod = function () {
    return e("ipod")
  }, a.ipad = function () {
    return e("ipad")
  }, a.android = function () {
    return !a.windows() && e("android")
  }, a.androidPhone = function () {
    return a.android() && e("mobile")
  }, a.androidTablet = function () {
    return a.android() && !e("mobile")
  }, a.blackberry = function () {
    return e("blackberry") || e("bb10") || e("rim")
  }, a.blackberryPhone = function () {
    return a.blackberry() && !e("tablet")
  }, a.blackberryTablet = function () {
    return a.blackberry() && e("tablet")
  }, a.windows = function () {
    return e("windows")
  }, a.windowsPhone = function () {
    return a.windows() && e("phone")
  }, a.windowsTablet = function () {
    return a.windows() && e("touch") && !a.windowsPhone()
  }, a.fxos = function () {
    return (e("(mobile;") || e("(tablet;")) && e("; rv:")
  }, a.fxosPhone = function () {
    return a.fxos() && e("mobile")
  }, a.fxosTablet = function () {
    return a.fxos() && e("tablet")
  }, a.meego = function () {
    return e("meego")
  }, a.cordova = function () {
    return window.cordova && "file:" === location.protocol
  }, a.nodeWebkit = function () {
    return "object" == typeof window.process
  }, a.mobile = function () {
    return a.androidPhone() || a.iphone() || a.ipod() || a.windowsPhone() || a.blackberryPhone() || a.fxosPhone() || a.meego()
  }, a.tablet = function () {
    return a.ipad() || a.androidTablet() || a.blackberryTablet() || a.windowsTablet() || a.fxosTablet()
  }, a.desktop = function () {
    return !a.tablet() && !a.mobile()
  }, a.television = function () {
    var a;
    for (television = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"], a = 0; a < television.length;) {
      if (e(television[a])) return !0;
      a++
    }
    return !1
  }, a.portrait = function () {
    return window.innerHeight / window.innerWidth > 1
  }, a.landscape = function () {
    return window.innerHeight / window.innerWidth < 1
  }, a.noConflict = function () {
    return window.device = b, this
  }, e = function (a) {
    return -1 !== j.indexOf(a)
  }, g = function (a) {
    var b;
    return b = new RegExp(a, "i"), d.className.match(b)
  }, c = function (a) {
    var b = null;
    g(a) || (b = d.className.replace(/^\s+|\s+$/g, ""), d.className = b + " " + a)
  }, i = function (a) {
    g(a) && (d.className = d.className.replace(" " + a, ""))
  }, a.ios() ? a.ipad() ? c("ios ipad tablet") : a.iphone() ? c("ios iphone mobile") : a.ipod() && c("ios ipod mobile") : a.android() ? c(a.androidTablet() ? "android tablet" : "android mobile") : a.blackberry() ? c(a.blackberryTablet() ? "blackberry tablet" : "blackberry mobile") : a.windows() ? c(a.windowsTablet() ? "windows tablet" : a.windowsPhone() ? "windows mobile" : "desktop") : a.fxos() ? c(a.fxosTablet() ? "fxos tablet" : "fxos mobile") : a.meego() ? c("meego mobile") : a.nodeWebkit() ? c("node-webkit") : a.television() ? c("television") : a.desktop() && c("desktop"), a.cordova() && c("cordova"), f = function () {
    a.landscape() ? (i("portrait"), c("landscape")) : (i("landscape"), c("portrait"))
  }, h = Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(h, f, !1) : window.attachEvent ? window.attachEvent(h, f) : window[h] = f, f(), "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
    return a
  }) : "undefined" != typeof module && module.exports ? module.exports = a : window.device = a
}).call(this);


/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function (a) {
  "use strict";

  function b() {
    var a = document.createElement("bootstrap"),
      b = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };
    for (var c in b)
      if (void 0 !== a.style[c]) return {
        end: b[c]
      };
    return !1
  }
  a.fn.emulateTransitionEnd = function (b) {
    var c = !1,
      d = this;
    a(this).one("bsTransitionEnd", function () {
      c = !0
    });
    var e = function () {
      c || a(d).trigger(a.support.transition.end)
    };
    return setTimeout(e, b), this
  }, a(function () {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
      bindType: a.support.transition.end,
      delegateType: a.support.transition.end,
      handle: function (b) {
        if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
      }
    })
  })
}(jQuery), + function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var c = a(this),
        e = c.data("bs.alert");
      e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
    })
  }
  var c = '[data-dismiss="alert"]',
    d = function (b) {
      a(b).on("click", c, this.close)
    };
  d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
    function c() {
      g.detach().trigger("closed.bs.alert").remove()
    }
    var e = a(this),
      f = e.attr("data-target");
    f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
    var g = a("#" === f ? [] : f);
    b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
  };
  var e = a.fn.alert;
  a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
    return a.fn.alert = e, this
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
        e = d.data("bs.button"),
        f = "object" == typeof b && b;
      e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
    })
  }
  var c = function (b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
  };
  c.VERSION = "3.3.7", c.DEFAULTS = {
    loadingText: "loading..."
  }, c.prototype.setState = function (b) {
    var c = "disabled",
      d = this.$element,
      e = d.is("input") ? "val" : "html",
      f = d.data();
    b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
      d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1))
    }, this), 0)
  }, c.prototype.toggle = function () {
    var a = !0,
      b = this.$element.closest('[data-toggle="buttons"]');
    if (b.length) {
      var c = this.$element.find("input");
      "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
  };
  var d = a.fn.button;
  a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
    return a.fn.button = d, this
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
    var d = a(c.target).closest(".btn");
    b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
    a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
  })
}(jQuery), + function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
        e = d.data("bs.carousel"),
        f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
        g = "string" == typeof b ? b : f.slide;
      e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
    })
  }
  var c = function (b, c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
  };
  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, c.prototype.keydown = function (a) {
    if (!/input|textarea/i.test(a.target.tagName)) {
      switch (a.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return
      }
      a.preventDefault()
    }
  }, c.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
  }, c.prototype.getItemIndex = function (a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
  }, c.prototype.getItemForDirection = function (a, b) {
    var c = this.getItemIndex(b),
      d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
    if (d && !this.options.wrap) return b;
    var e = "prev" == a ? -1 : 1,
      f = (c + e) % this.$items.length;
    return this.$items.eq(f)
  }, c.prototype.to = function (a) {
    var b = this,
      c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
      b.to(a)
    }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
  }, c.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, c.prototype.next = function () {
    if (!this.sliding) return this.slide("next")
  }, c.prototype.prev = function () {
    if (!this.sliding) return this.slide("prev")
  }, c.prototype.slide = function (b, d) {
    var e = this.$element.find(".item.active"),
      f = d || this.getItemForDirection(b, e),
      g = this.interval,
      h = "next" == b ? "left" : "right",
      i = this;
    if (f.hasClass("active")) return this.sliding = !1;
    var j = f[0],
      k = a.Event("slide.bs.carousel", {
        relatedTarget: j,
        direction: h
      });
    if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var l = a(this.$indicators.children()[this.getItemIndex(f)]);
        l && l.addClass("active")
      }
      var m = a.Event("slid.bs.carousel", {
        relatedTarget: j,
        direction: h
      });
      return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
          i.$element.trigger(m)
        }, 0)
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
    }
  };
  var d = a.fn.carousel;
  a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = d, this
  };
  var e = function (c) {
    var d, e = a(this),
      f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
    if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()),
        h = e.attr("data-slide-to");
      h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
    }
  };
  a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
    a('[data-ride="carousel"]').each(function () {
      var c = a(this);
      b.call(c, c.data())
    })
  })
}(jQuery), + function (a) {
  "use strict";

  function b(b) {
    var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
    return a(d)
  }

  function c(b) {
    return this.each(function () {
      var c = a(this),
        e = c.data("bs.collapse"),
        f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
      !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
    })
  }
  var d = function (b, c) {
    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
  };
  d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
    toggle: !0
  }, d.prototype.dimension = function () {
    var a = this.$element.hasClass("width");
    return a ? "width" : "height"
  }, d.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
        var f = a.Event("show.bs.collapse");
        if (this.$element.trigger(f), !f.isDefaultPrevented()) {
          e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
          var g = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
          var h = function () {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!a.support.transition) return h.call(this);
          var i = a.camelCase(["scroll", g].join("-"));
          this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
        }
      }
    }
  }, d.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");
      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();
        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var e = function () {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
      }
    }
  }, d.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }, d.prototype.getParent = function () {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
      var e = a(d);
      this.addAriaAndCollapsedClass(b(e), e)
    }, this)).end()
  }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
    var c = a.hasClass("in");
    a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
  };
  var e = a.fn.collapse;
  a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = e, this
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
    var e = a(this);
    e.attr("data-target") || d.preventDefault();
    var f = b(e),
      g = f.data("bs.collapse"),
      h = g ? "toggle" : e.data();
    c.call(f, h)
  })
}(jQuery), + function (a) {
  "use strict";

  function b(b) {
    var c = b.attr("data-target");
    c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
    var d = c && a(c);
    return d && d.length ? d : b.parent()
  }

  function c(c) {
    c && 3 === c.which || (a(e).remove(), a(f).each(function () {
      var d = a(this),
        e = b(d),
        f = {
          relatedTarget: this
        };
      e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
    }))
  }

  function d(b) {
    return this.each(function () {
      var c = a(this),
        d = c.data("bs.dropdown");
      d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
    })
  }
  var e = ".dropdown-backdrop",
    f = '[data-toggle="dropdown"]',
    g = function (b) {
      a(b).on("click.bs.dropdown", this.toggle)
    };
  g.VERSION = "3.3.7", g.prototype.toggle = function (d) {
    var e = a(this);
    if (!e.is(".disabled, :disabled")) {
      var f = b(e),
        g = f.hasClass("open");
      if (c(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
        var h = {
          relatedTarget: this
        };
        if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
        e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
      }
      return !1
    }
  }, g.prototype.keydown = function (c) {
    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
      var d = a(this);
      if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = b(d),
          g = e.hasClass("open");
        if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
        var h = " li:not(.disabled):visible a",
          i = e.find(".dropdown-menu" + h);
        if (i.length) {
          var j = i.index(c.target);
          38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
        }
      }
    }
  };
  var h = a.fn.dropdown;
  a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = h, this
  }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
    a.stopPropagation()
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function (a) {
  "use strict";

  function b(b, d) {
    return this.each(function () {
      var e = a(this),
        f = e.data("bs.modal"),
        g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
      f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
    })
  }
  var c = function (b, c) {
    this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };
  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, c.prototype.toggle = function (a) {
    return this.isShown ? this.hide() : this.show(a)
  }, c.prototype.show = function (b) {
    var d = this,
      e = a.Event("show.bs.modal", {
        relatedTarget: b
      });
    this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      d.$element.one("mouseup.dismiss.bs.modal", function (b) {
        a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
      })
    }), this.backdrop(function () {
      var e = a.support.transition && d.$element.hasClass("fade");
      d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
      var f = a.Event("shown.bs.modal", {
        relatedTarget: b
      });
      e ? d.$dialog.one("bsTransitionEnd", function () {
        d.$element.trigger("focus").trigger(f)
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
    }))
  }, c.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
  }, c.prototype.enforceFocus = function () {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
      document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
    }, this))
  }, c.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
      27 == a.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  }, c.prototype.resize = function () {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
  }, c.prototype.hideModal = function () {
    var a = this;
    this.$element.hide(), this.backdrop(function () {
      a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
    })
  }, c.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, c.prototype.backdrop = function (b) {
    var d = this,
      e = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;
      if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
          return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
        }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
      f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var g = function () {
        d.removeBackdrop(), b && b()
      };
      a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
    } else b && b()
  }, c.prototype.handleUpdate = function () {
    this.adjustDialog()
  }, c.prototype.adjustDialog = function () {
    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
    })
  }, c.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    })
  }, c.prototype.checkScrollbar = function () {
    var a = window.innerWidth;
    if (!a) {
      var b = document.documentElement.getBoundingClientRect();
      a = b.right - Math.abs(b.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
  }, c.prototype.setScrollbar = function () {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
  }, c.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", this.originalBodyPad)
  }, c.prototype.measureScrollbar = function () {
    var a = document.createElement("div");
    a.className = "modal-scrollbar-measure", this.$body.append(a);
    var b = a.offsetWidth - a.clientWidth;
    return this.$body[0].removeChild(a), b
  };
  var d = a.fn.modal;
  a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
    return a.fn.modal = d, this
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
    var d = a(this),
      e = d.attr("href"),
      f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
      g = f.data("bs.modal") ? "toggle" : a.extend({
        remote: !/#/.test(e) && e
      }, f.data(), d.data());
    d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
        d.is(":visible") && d.trigger("focus")
      })
    }), b.call(f, g, this)
  })
}(jQuery), + function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
        e = d.data("bs.tooltip"),
        f = "object" == typeof b && b;
      !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
    })
  }
  var c = function (a, b) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
  };
  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, c.prototype.init = function (b, c, d) {
    if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
        click: !1,
        hover: !1,
        focus: !1
      }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];
      if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
      else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
          i = "hover" == g ? "mouseleave" : "focusout";
        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = a.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, c.prototype.getDefaults = function () {
    return c.DEFAULTS
  }, c.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
      show: b.delay,
      hide: b.delay
    }), b
  }, c.prototype.getDelegateOptions = function () {
    var b = {},
      c = this.getDefaults();
    return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d)
    }), b
  }, c.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
      "in" == c.hoverState && c.show()
    }, c.options.delay.show)) : c.show())
  }, c.prototype.isInStateTrue = function () {
    for (var a in this.inState)
      if (this.inState[a]) return !0;
    return !1
  }, c.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
      "out" == c.hoverState && c.hide()
    }, c.options.delay.hide)) : c.hide()
  }, c.prototype.show = function () {
    var b = a.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);
      var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (b.isDefaultPrevented() || !d) return;
      var e = this,
        f = this.tip(),
        g = this.getUID(this.type);
      this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
      var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
        i = /\s?auto?\s?/i,
        j = i.test(h);
      j && (h = h.replace(i, "") || "top"), f.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var k = this.getPosition(),
        l = f[0].offsetWidth,
        m = f[0].offsetHeight;
      if (j) {
        var n = h,
          o = this.getPosition(this.$viewport);
        h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
      }
      var p = this.getCalculatedOffset(h, k, l, m);
      this.applyPlacement(p, h);
      var q = function () {
        var a = e.hoverState;
        e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
      };
      a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
    }
  }, c.prototype.applyPlacement = function (b, c) {
    var d = this.tip(),
      e = d[0].offsetWidth,
      f = d[0].offsetHeight,
      g = parseInt(d.css("margin-top"), 10),
      h = parseInt(d.css("margin-left"), 10);
    isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
      using: function (a) {
        d.css({
          top: Math.round(a.top),
          left: Math.round(a.left)
        })
      }
    }, b), 0), d.addClass("in");
    var i = d[0].offsetWidth,
      j = d[0].offsetHeight;
    "top" == c && j != f && (b.top = b.top + f - j);
    var k = this.getViewportAdjustedDelta(c, b, i, j);
    k.left ? b.left += k.left : b.top += k.top;
    var l = /top|bottom/.test(c),
      m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
      n = l ? "offsetWidth" : "offsetHeight";
    d.offset(b), this.replaceArrow(m, d[0][n], l)
  }, c.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
  }, c.prototype.setContent = function () {
    var a = this.tip(),
      b = this.getTitle();
    a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
  }, c.prototype.hide = function (b) {
    function d() {
      "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
    }
    var e = this,
      f = a(this.$tip),
      g = a.Event("hide.bs." + this.type);
    if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this
  }, c.prototype.fixTitle = function () {
    var a = this.$element;
    (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
  }, c.prototype.hasContent = function () {
    return this.getTitle()
  }, c.prototype.getPosition = function (b) {
    b = b || this.$element;
    var c = b[0],
      d = "BODY" == c.tagName,
      e = c.getBoundingClientRect();
    null == e.width && (e = a.extend({}, e, {
      width: e.right - e.left,
      height: e.bottom - e.top
    }));
    var f = window.SVGElement && c instanceof window.SVGElement,
      g = d ? {
        top: 0,
        left: 0
      } : f ? null : b.offset(),
      h = {
        scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
      },
      i = d ? {
        width: a(window).width(),
        height: a(window).height()
      } : null;
    return a.extend({}, e, h, i, g)
  }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
    return "bottom" == a ? {
      top: b.top + b.height,
      left: b.left + b.width / 2 - c / 2
    } : "top" == a ? {
      top: b.top - d,
      left: b.left + b.width / 2 - c / 2
    } : "left" == a ? {
      top: b.top + b.height / 2 - d / 2,
      left: b.left - c
    } : {
      top: b.top + b.height / 2 - d / 2,
      left: b.left + b.width
    }
  }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
    var e = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return e;
    var f = this.options.viewport && this.options.viewport.padding || 0,
      g = this.getPosition(this.$viewport);
    if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll,
        i = b.top + f - g.scroll + d;
      h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
    } else {
      var j = b.left - f,
        k = b.left + f + c;
      j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
    }
    return e
  }, c.prototype.getTitle = function () {
    var a, b = this.$element,
      c = this.options;
    return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
  }, c.prototype.getUID = function (a) {
    do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
    return a
  }, c.prototype.tip = function () {
    if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, c.prototype.enable = function () {
    this.enabled = !0
  }, c.prototype.disable = function () {
    this.enabled = !1
  }, c.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }, c.prototype.toggle = function (b) {
    var c = this;
    b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
  }, c.prototype.destroy = function () {
    var a = this;
    clearTimeout(this.timeout), this.hide(function () {
      a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null
    })
  };
  var d = a.fn.tooltip;
  a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = d, this
  }
}(jQuery), + function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
        e = d.data("bs.popover"),
        f = "object" == typeof b && b;
      !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
    })
  }
  var c = function (a, b) {
    this.init("popover", a, b)
  };
  if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
  c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
    return c.DEFAULTS
  }, c.prototype.setContent = function () {
    var a = this.tip(),
      b = this.getTitle(),
      c = this.getContent();
    a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
  }, c.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }, c.prototype.getContent = function () {
    var a = this.$element,
      b = this.options;
    return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  };
  var d = a.fn.popover;
  a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
    return a.fn.popover = d, this
  }
}(jQuery), + function (a) {
  "use strict";

  function b(c, d) {
    this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
  }

  function c(c) {
    return this.each(function () {
      var d = a(this),
        e = d.data("bs.scrollspy"),
        f = "object" == typeof c && c;
      e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
    })
  }
  b.VERSION = "3.3.7", b.DEFAULTS = {
    offset: 10
  }, b.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }, b.prototype.refresh = function () {
    var b = this,
      c = "offset",
      d = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
      var b = a(this),
        e = b.data("target") || b.attr("href"),
        f = /^#./.test(e) && a(e);
      return f && f.length && f.is(":visible") && [
        [f[c]().top + d, e]
      ] || null
    }).sort(function (a, b) {
      return a[0] - b[0]
    }).each(function () {
      b.offsets.push(this[0]), b.targets.push(this[1])
    })
  }, b.prototype.process = function () {
    var a, b = this.$scrollElement.scrollTop() + this.options.offset,
      c = this.getScrollHeight(),
      d = this.options.offset + c - this.$scrollElement.height(),
      e = this.offsets,
      f = this.targets,
      g = this.activeTarget;
    if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
    if (g && b < e[0]) return this.activeTarget = null, this.clear();
    for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, this.clear();
    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
      d = a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
  }, b.prototype.clear = function () {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
  };
  var d = a.fn.scrollspy;
  a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = d, this
  }, a(window).on("load.bs.scrollspy.data-api", function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);
      c.call(b, b.data())
    })
  })
}(jQuery), + function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
        e = d.data("bs.tab");
      e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
    })
  }
  var c = function (b) {
    this.element = a(b)
  };
  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
    var b = this.element,
      c = b.closest("ul:not(.dropdown-menu)"),
      d = b.data("target");
    if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a"),
        f = a.Event("hide.bs.tab", {
          relatedTarget: b[0]
        }),
        g = a.Event("show.bs.tab", {
          relatedTarget: e[0]
        });
      if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
        var h = a(d);
        this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
          e.trigger({
            type: "hidden.bs.tab",
            relatedTarget: b[0]
          }), b.trigger({
            type: "shown.bs.tab",
            relatedTarget: e[0]
          })
        })
      }
    }
  }, c.prototype.activate = function (b, d, e) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
    }
    var g = d.find("> .active"),
      h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
    g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
  };
  var d = a.fn.tab;
  a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
    return a.fn.tab = d, this
  };
  var e = function (c) {
    c.preventDefault(), b.call(a(this), "show")
  };
  a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
        e = d.data("bs.affix"),
        f = "object" == typeof b && b;
      e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
    })
  }
  var c = function (b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
  };
  c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
    offset: 0,
    target: window
  }, c.prototype.getState = function (a, b, c, d) {
    var e = this.$target.scrollTop(),
      f = this.$element.offset(),
      g = this.$target.height();
    if (null != c && "top" == this.affixed) return e < c && "top";
    if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
    var h = null == this.affixed,
      i = h ? e : f.top,
      j = h ? g : b;
    return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom"
  }, c.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(c.RESET).addClass("affix");
    var a = this.$target.scrollTop(),
      b = this.$element.offset();
    return this.pinnedOffset = b.top - a
  }, c.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1)
  }, c.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var b = this.$element.height(),
        d = this.options.offset,
        e = d.top,
        f = d.bottom,
        g = Math.max(a(document).height(), a(document.body).height());
      "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
      var h = this.getState(g, b, e, f);
      if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");
        var i = "affix" + (h ? "-" + h : ""),
          j = a.Event(i + ".bs.affix");
        if (this.$element.trigger(j), j.isDefaultPrevented()) return;
        this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
      }
      "bottom" == h && this.$element.offset({
        top: g - b - f
      })
    }
  };
  var d = a.fn.affix;
  a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
    return a.fn.affix = d, this
  }, a(window).on("load", function () {
    a('[data-spy="affix"]').each(function () {
      var c = a(this),
        d = c.data();
      d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
    })
  })
}(jQuery);


/* styleswitch [for demonstration purposes only] */
/* styleswitch START */
/**
 * Styleswitch stylesheet switcher built on jQuery
 * Under an Attribution, Share Alike License
 * By Kelvin Luck ( http://www.kelvinluck.com/ )
 **/
(function ($) {
  jQuery(document).ready(function () {
    jQuery(".styleswitch").click(function () {
      switchStylestyle(this.getAttribute("data-color"));
      return false
    });
    var c = readCookie("style");
    if (c) switchStylestyle(c)
  });

  function switchStylestyle(styleName) {
    jQuery("link[rel*=style][title]").each(function (i) {
      this.disabled = true;
      if (this.getAttribute("title") == styleName) this.disabled = false
    })
  }
})(jQuery);

function createCookie(name, value, days) {
  if (days) {
    var date = new Date;
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1E3);
    var expires = "; expires=" + date.toGMTString()
  } else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/"
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

function eraseCookie(name) {
  createCookie(name, "", -1)
};
/* styleswitch END */