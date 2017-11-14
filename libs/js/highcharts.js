/*
 Highcharts JS v6.0.1 (2017-10-05)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(R, N) {
    "object" === typeof module && module.exports ? module.exports = R.document ? N(R) : N : R.Highcharts = N(R)
})("undefined" !== typeof window ? window : this, function(R) {
    var N = function() {
        var a = R.document,
            A = R.navigator && R.navigator.userAgent || "",
            B = a && a.createElementNS && !!a.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
            G = /(edge|msie|trident)/i.test(A) && !R.opera,
            F = /Firefox/.test(A),
            l = F && 4 > parseInt(A.split("Firefox/")[1], 10);
        return R.Highcharts ? R.Highcharts.error(16, !0) : {
            product: "Highcharts",
            version: "6.0.1",
            deg2rad: 2 * Math.PI / 360,
            doc: a,
            hasBidiBug: l,
            hasTouch: a && void 0 !== a.documentElement.ontouchstart,
            isMS: G,
            isWebKit: /AppleWebKit/.test(A),
            isFirefox: F,
            isTouchDevice: /(Mobile|Android|Windows Phone)/.test(A),
            SVG_NS: "http://www.w3.org/2000/svg",
            chartCount: 0,
            seriesTypes: {},
            symbolSizes: {},
            svg: B,
            win: R,
            marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"],
            noop: function() {},
            charts: []
        }
    }();
    (function(a) {
        var A = [],
            B = a.charts,
            G = a.doc,
            F = a.win;
        a.error = function(l, f) {
            l = a.isNumber(l) ? "Highcharts error #" +
                l + ": www.highcharts.com/errors/" + l : l;
            if (f) throw Error(l);
            F.console && console.log(l)
        };
        a.Fx = function(a, f, h) {
            this.options = f;
            this.elem = a;
            this.prop = h
        };
        a.Fx.prototype = {
            dSetter: function() {
                var a = this.paths[0],
                    f = this.paths[1],
                    h = [],
                    m = this.now,
                    r = a.length,
                    v;
                if (1 === m) h = this.toD;
                else if (r === f.length && 1 > m)
                    for (; r--;) v = parseFloat(a[r]), h[r] = isNaN(v) ? a[r] : m * parseFloat(f[r] - v) + v;
                else h = f;
                this.elem.attr("d", h, null, !0)
            },
            update: function() {
                var a = this.elem,
                    f = this.prop,
                    h = this.now,
                    m = this.options.step;
                if (this[f + "Setter"]) this[f +
                    "Setter"]();
                else a.attr ? a.element && a.attr(f, h, null, !0) : a.style[f] = h + this.unit;
                m && m.call(a, h, this)
            },
            run: function(a, f, h) {
                var m = this,
                    l = function(a) {
                        return l.stopped ? !1 : m.step(a)
                    },
                    v = F.requestAnimationFrame || function(a) {
                        setTimeout(a, 13)
                    },
                    d = function() {
                        var a;
                        for (a = 0; a < A.length; a++) A[a]() || A.splice(a--, 1);
                        A.length && v(d)
                    };
                a === f ? delete this.options.curAnim[this.prop] : (this.startTime = +new Date, this.start = a, this.end = f, this.unit = h, this.now = this.start, this.pos = 0, l.elem = this.elem, l.prop = this.prop, l() && 1 === A.push(l) &&
                    v(d))
            },
            step: function(l) {
                var f = +new Date,
                    h, m = this.options,
                    r = this.elem,
                    v = m.complete,
                    d = m.duration,
                    e = m.curAnim;
                r.attr && !r.element ? l = !1 : l || f >= d + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), h = e[this.prop] = !0, a.objectEach(e, function(a) {
                    !0 !== a && (h = !1)
                }), h && v && v.call(r), l = !1) : (this.pos = m.easing((f - this.startTime) / d), this.now = this.start + (this.end - this.start) * this.pos, this.update(), l = !0);
                return l
            },
            initPath: function(l, f, h) {
                function m(a) {
                    var c, b;
                    for (p = a.length; p--;) c = "M" === a[p] || "L" === a[p], b = /[a-zA-Z]/.test(a[p +
                        3]), c && b && a.splice(p + 1, 0, a[p + 1], a[p + 2], a[p + 1], a[p + 2])
                }

                function r(a, b) {
                    for (; a.length < w;) {
                        a[0] = b[w - a.length];
                        var k = a.slice(0, c);
                        [].splice.apply(a, [0, 0].concat(k));
                        C && (k = a.slice(a.length - c), [].splice.apply(a, [a.length, 0].concat(k)), p--)
                    }
                    a[0] = "M"
                }

                function v(a, d) {
                    for (var e = (w - a.length) / c; 0 < e && e--;) k = a.slice().splice(a.length / I - c, c * I), k[0] = d[w - c - e * c], b && (k[c - 6] = k[c - 2], k[c - 5] = k[c - 1]), [].splice.apply(a, [a.length / I, 0].concat(k)), C && e--
                }
                f = f || "";
                var d, e = l.startX,
                    n = l.endX,
                    b = -1 < f.indexOf("C"),
                    c = b ? 7 : 3,
                    w, k, p;
                f =
                    f.split(" ");
                h = h.slice();
                var C = l.isArea,
                    I = C ? 2 : 1,
                    y;
                b && (m(f), m(h));
                if (e && n) {
                    for (p = 0; p < e.length; p++)
                        if (e[p] === n[0]) {
                            d = p;
                            break
                        } else if (e[0] === n[n.length - e.length + p]) {
                        d = p;
                        y = !0;
                        break
                    }
                    void 0 === d && (f = [])
                }
                f.length && a.isNumber(d) && (w = h.length + d * I * c, y ? (r(f, h), v(h, f)) : (r(h, f), v(f, h)));
                return [f, h]
            }
        };
        a.Fx.prototype.fillSetter = a.Fx.prototype.strokeSetter = function() {
            this.elem.attr(this.prop, a.color(this.start).tweenTo(a.color(this.end), this.pos), null, !0)
        };
        a.extend = function(a, f) {
            var l;
            a || (a = {});
            for (l in f) a[l] = f[l];
            return a
        };
        a.merge = function() {
            var l, f = arguments,
                h, m = {},
                r = function(f, d) {
                    "object" !== typeof f && (f = {});
                    a.objectEach(d, function(e, n) {
                        !a.isObject(e, !0) || a.isClass(e) || a.isDOMElement(e) ? f[n] = d[n] : f[n] = r(f[n] || {}, e)
                    });
                    return f
                };
            !0 === f[0] && (m = f[1], f = Array.prototype.slice.call(f, 2));
            h = f.length;
            for (l = 0; l < h; l++) m = r(m, f[l]);
            return m
        };
        a.pInt = function(a, f) {
            return parseInt(a, f || 10)
        };
        a.isString = function(a) {
            return "string" === typeof a
        };
        a.isArray = function(a) {
            a = Object.prototype.toString.call(a);
            return "[object Array]" ===
                a || "[object Array Iterator]" === a
        };
        a.isObject = function(l, f) {
            return !!l && "object" === typeof l && (!f || !a.isArray(l))
        };
        a.isDOMElement = function(l) {
            return a.isObject(l) && "number" === typeof l.nodeType
        };
        a.isClass = function(l) {
            var f = l && l.constructor;
            return !(!a.isObject(l, !0) || a.isDOMElement(l) || !f || !f.name || "Object" === f.name)
        };
        a.isNumber = function(a) {
            return "number" === typeof a && !isNaN(a)
        };
        a.erase = function(a, f) {
            for (var l = a.length; l--;)
                if (a[l] === f) {
                    a.splice(l, 1);
                    break
                }
        };
        a.defined = function(a) {
            return void 0 !== a && null !==
                a
        };
        a.attr = function(l, f, h) {
            var m;
            a.isString(f) ? a.defined(h) ? l.setAttribute(f, h) : l && l.getAttribute && (m = l.getAttribute(f)) : a.defined(f) && a.isObject(f) && a.objectEach(f, function(a, f) {
                l.setAttribute(f, a)
            });
            return m
        };
        a.splat = function(l) {
            return a.isArray(l) ? l : [l]
        };
        a.syncTimeout = function(a, f, h) {
            if (f) return setTimeout(a, f, h);
            a.call(0, h)
        };
        a.pick = function() {
            var a = arguments,
                f, h, m = a.length;
            for (f = 0; f < m; f++)
                if (h = a[f], void 0 !== h && null !== h) return h
        };
        a.css = function(l, f) {
            a.isMS && !a.svg && f && void 0 !== f.opacity && (f.filter =
                "alpha(opacity\x3d" + 100 * f.opacity + ")");
            a.extend(l.style, f)
        };
        a.createElement = function(l, f, h, m, r) {
            l = G.createElement(l);
            var v = a.css;
            f && a.extend(l, f);
            r && v(l, {
                padding: 0,
                border: "none",
                margin: 0
            });
            h && v(l, h);
            m && m.appendChild(l);
            return l
        };
        a.extendClass = function(l, f) {
            var h = function() {};
            h.prototype = new l;
            a.extend(h.prototype, f);
            return h
        };
        a.pad = function(a, f, h) {
            return Array((f || 2) + 1 - String(a).length).join(h || 0) + a
        };
        a.relativeLength = function(a, f, h) {
            return /%$/.test(a) ? f * parseFloat(a) / 100 + (h || 0) : parseFloat(a)
        };
        a.wrap =
            function(a, f, h) {
                var m = a[f];
                a[f] = function() {
                    var a = Array.prototype.slice.call(arguments),
                        f = arguments,
                        d = this;
                    d.proceed = function() {
                        m.apply(d, arguments.length ? arguments : f)
                    };
                    a.unshift(m);
                    a = h.apply(this, a);
                    d.proceed = null;
                    return a
                }
            };
        a.getTZOffset = function(l) {
            var f = a.Date;
            return 6E4 * (f.hcGetTimezoneOffset && f.hcGetTimezoneOffset(l) || f.hcTimezoneOffset || 0)
        };
        a.dateFormat = function(l, f, h) {
            if (!a.defined(f) || isNaN(f)) return a.defaultOptions.lang.invalidDate || "";
            l = a.pick(l, "%Y-%m-%d %H:%M:%S");
            var m = a.Date,
                r = new m(f -
                    a.getTZOffset(f)),
                v = r[m.hcGetHours](),
                d = r[m.hcGetDay](),
                e = r[m.hcGetDate](),
                n = r[m.hcGetMonth](),
                b = r[m.hcGetFullYear](),
                c = a.defaultOptions.lang,
                w = c.weekdays,
                k = c.shortWeekdays,
                p = a.pad,
                m = a.extend({
                    a: k ? k[d] : w[d].substr(0, 3),
                    A: w[d],
                    d: p(e),
                    e: p(e, 2, " "),
                    w: d,
                    b: c.shortMonths[n],
                    B: c.months[n],
                    m: p(n + 1),
                    y: b.toString().substr(2, 2),
                    Y: b,
                    H: p(v),
                    k: v,
                    I: p(v % 12 || 12),
                    l: v % 12 || 12,
                    M: p(r[m.hcGetMinutes]()),
                    p: 12 > v ? "AM" : "PM",
                    P: 12 > v ? "am" : "pm",
                    S: p(r.getSeconds()),
                    L: p(Math.round(f % 1E3), 3)
                }, a.dateFormats);
            a.objectEach(m, function(a,
                b) {
                for (; - 1 !== l.indexOf("%" + b);) l = l.replace("%" + b, "function" === typeof a ? a(f) : a)
            });
            return h ? l.substr(0, 1).toUpperCase() + l.substr(1) : l
        };
        a.formatSingle = function(l, f) {
            var h = /\.([0-9])/,
                m = a.defaultOptions.lang;
            /f$/.test(l) ? (h = (h = l.match(h)) ? h[1] : -1, null !== f && (f = a.numberFormat(f, h, m.decimalPoint, -1 < l.indexOf(",") ? m.thousandsSep : ""))) : f = a.dateFormat(l, f);
            return f
        };
        a.format = function(l, f) {
            for (var h = "{", m = !1, r, v, d, e, n = [], b; l;) {
                h = l.indexOf(h);
                if (-1 === h) break;
                r = l.slice(0, h);
                if (m) {
                    r = r.split(":");
                    v = r.shift().split(".");
                    e = v.length;
                    b = f;
                    for (d = 0; d < e; d++) b && (b = b[v[d]]);
                    r.length && (b = a.formatSingle(r.join(":"), b));
                    n.push(b)
                } else n.push(r);
                l = l.slice(h + 1);
                h = (m = !m) ? "}" : "{"
            }
            n.push(l);
            return n.join("")
        };
        a.getMagnitude = function(a) {
            return Math.pow(10, Math.floor(Math.log(a) / Math.LN10))
        };
        a.normalizeTickInterval = function(l, f, h, m, r) {
            var v, d = l;
            h = a.pick(h, 1);
            v = l / h;
            f || (f = r ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === m && (1 === h ? f = a.grep(f, function(a) {
                return 0 === a % 1
            }) : .1 >= h && (f = [1 / h])));
            for (m = 0; m < f.length && !(d = f[m], r && d * h >= l || !r &&
                    v <= (f[m] + (f[m + 1] || f[m])) / 2); m++);
            return d = a.correctFloat(d * h, -Math.round(Math.log(.001) / Math.LN10))
        };
        a.stableSort = function(a, f) {
            var h = a.length,
                m, l;
            for (l = 0; l < h; l++) a[l].safeI = l;
            a.sort(function(a, d) {
                m = f(a, d);
                return 0 === m ? a.safeI - d.safeI : m
            });
            for (l = 0; l < h; l++) delete a[l].safeI
        };
        a.arrayMin = function(a) {
            for (var f = a.length, h = a[0]; f--;) a[f] < h && (h = a[f]);
            return h
        };
        a.arrayMax = function(a) {
            for (var f = a.length, h = a[0]; f--;) a[f] > h && (h = a[f]);
            return h
        };
        a.destroyObjectProperties = function(l, f) {
            a.objectEach(l, function(a,
                m) {
                a && a !== f && a.destroy && a.destroy();
                delete l[m]
            })
        };
        a.discardElement = function(l) {
            var f = a.garbageBin;
            f || (f = a.createElement("div"));
            l && f.appendChild(l);
            f.innerHTML = ""
        };
        a.correctFloat = function(a, f) {
            return parseFloat(a.toPrecision(f || 14))
        };
        a.setAnimation = function(l, f) {
            f.renderer.globalAnimation = a.pick(l, f.options.chart.animation, !0)
        };
        a.animObject = function(l) {
            return a.isObject(l) ? a.merge(l) : {
                duration: l ? 500 : 0
            }
        };
        a.timeUnits = {
            millisecond: 1,
            second: 1E3,
            minute: 6E4,
            hour: 36E5,
            day: 864E5,
            week: 6048E5,
            month: 24192E5,
            year: 314496E5
        };
        a.numberFormat = function(l, f, h, m) {
            l = +l || 0;
            f = +f;
            var r = a.defaultOptions.lang,
                v = (l.toString().split(".")[1] || "").split("e")[0].length,
                d, e, n = l.toString().split("e"); - 1 === f ? f = Math.min(v, 20) : a.isNumber(f) || (f = 2);
            e = (Math.abs(n[1] ? n[0] : l) + Math.pow(10, -Math.max(f, v) - 1)).toFixed(f);
            v = String(a.pInt(e));
            d = 3 < v.length ? v.length % 3 : 0;
            h = a.pick(h, r.decimalPoint);
            m = a.pick(m, r.thousandsSep);
            l = (0 > l ? "-" : "") + (d ? v.substr(0, d) + m : "");
            l += v.substr(d).replace(/(\d{3})(?=\d)/g, "$1" + m);
            f && (l += h + e.slice(-f));
            n[1] &&
                (l += "e" + n[1]);
            return l
        };
        Math.easeInOutSine = function(a) {
            return -.5 * (Math.cos(Math.PI * a) - 1)
        };
        a.getStyle = function(l, f, h) {
            if ("width" === f) return Math.min(l.offsetWidth, l.scrollWidth) - a.getStyle(l, "padding-left") - a.getStyle(l, "padding-right");
            if ("height" === f) return Math.min(l.offsetHeight, l.scrollHeight) - a.getStyle(l, "padding-top") - a.getStyle(l, "padding-bottom");
            F.getComputedStyle || a.error(27, !0);
            if (l = F.getComputedStyle(l, void 0)) l = l.getPropertyValue(f), a.pick(h, "opacity" !== f) && (l = a.pInt(l));
            return l
        };
        a.inArray =
            function(l, f) {
                return (a.indexOfPolyfill || Array.prototype.indexOf).call(f, l)
            };
        a.grep = function(l, f) {
            return (a.filterPolyfill || Array.prototype.filter).call(l, f)
        };
        a.find = Array.prototype.find ? function(a, f) {
            return a.find(f)
        } : function(a, f) {
            var h, m = a.length;
            for (h = 0; h < m; h++)
                if (f(a[h], h)) return a[h]
        };
        a.map = function(a, f) {
            for (var h = [], m = 0, r = a.length; m < r; m++) h[m] = f.call(a[m], a[m], m, a);
            return h
        };
        a.reduce = function(l, f, h) {
            return (a.reducePolyfill || Array.prototype.reduce).call(l, f, h)
        };
        a.offset = function(a) {
            var f = G.documentElement;
            a = a.getBoundingClientRect();
            return {
                top: a.top + (F.pageYOffset || f.scrollTop) - (f.clientTop || 0),
                left: a.left + (F.pageXOffset || f.scrollLeft) - (f.clientLeft || 0)
            }
        };
        a.stop = function(a, f) {
            for (var h = A.length; h--;) A[h].elem !== a || f && f !== A[h].prop || (A[h].stopped = !0)
        };
        a.each = function(l, f, h) {
            return (a.forEachPolyfill || Array.prototype.forEach).call(l, f, h)
        };
        a.objectEach = function(a, f, h) {
            for (var m in a) a.hasOwnProperty(m) && f.call(h, a[m], m, a)
        };
        a.addEvent = function(l, f, h) {
            var m = l.hcEvents = l.hcEvents || {},
                r = l.addEventListener ||
                a.addEventListenerPolyfill;
            r && r.call(l, f, h, !1);
            m[f] || (m[f] = []);
            m[f].push(h);
            return function() {
                a.removeEvent(l, f, h)
            }
        };
        a.removeEvent = function(l, f, h) {
            function m(d, b) {
                var c = l.removeEventListener || a.removeEventListenerPolyfill;
                c && c.call(l, d, b, !1)
            }

            function r() {
                var e, b;
                l.nodeName && (f ? (e = {}, e[f] = !0) : e = d, a.objectEach(e, function(a, e) {
                    if (d[e])
                        for (b = d[e].length; b--;) m(e, d[e][b])
                }))
            }
            var v, d = l.hcEvents,
                e;
            d && (f ? (v = d[f] || [], h ? (e = a.inArray(h, v), -1 < e && (v.splice(e, 1), d[f] = v), m(f, h)) : (r(), d[f] = [])) : (r(), l.hcEvents = {}))
        };
        a.fireEvent = function(l, f, h, m) {
            var r;
            r = l.hcEvents;
            var v, d;
            h = h || {};
            if (G.createEvent && (l.dispatchEvent || l.fireEvent)) r = G.createEvent("Events"), r.initEvent(f, !0, !0), a.extend(r, h), l.dispatchEvent ? l.dispatchEvent(r) : l.fireEvent(f, r);
            else if (r)
                for (r = r[f] || [], v = r.length, h.target || a.extend(h, {
                        preventDefault: function() {
                            h.defaultPrevented = !0
                        },
                        target: l,
                        type: f
                    }), f = 0; f < v; f++)(d = r[f]) && !1 === d.call(l, h) && h.preventDefault();
            m && !h.defaultPrevented && m(h)
        };
        a.animate = function(l, f, h) {
            var m, r = "",
                v, d, e;
            a.isObject(h) || (e =
                arguments, h = {
                    duration: e[2],
                    easing: e[3],
                    complete: e[4]
                });
            a.isNumber(h.duration) || (h.duration = 400);
            h.easing = "function" === typeof h.easing ? h.easing : Math[h.easing] || Math.easeInOutSine;
            h.curAnim = a.merge(f);
            a.objectEach(f, function(e, b) {
                a.stop(l, b);
                d = new a.Fx(l, h, b);
                v = null;
                "d" === b ? (d.paths = d.initPath(l, l.d, f.d), d.toD = f.d, m = 0, v = 1) : l.attr ? m = l.attr(b) : (m = parseFloat(a.getStyle(l, b)) || 0, "opacity" !== b && (r = "px"));
                v || (v = e);
                v && v.match && v.match("px") && (v = v.replace(/px/g, ""));
                d.run(m, v, r)
            })
        };
        a.seriesType = function(l,
            f, h, m, r) {
            var v = a.getOptions(),
                d = a.seriesTypes;
            v.plotOptions[l] = a.merge(v.plotOptions[f], h);
            d[l] = a.extendClass(d[f] || function() {}, m);
            d[l].prototype.type = l;
            r && (d[l].prototype.pointClass = a.extendClass(a.Point, r));
            return d[l]
        };
        a.uniqueKey = function() {
            var a = Math.random().toString(36).substring(2, 9),
                f = 0;
            return function() {
                return "highcharts-" + a + "-" + f++
            }
        }();
        F.jQuery && (F.jQuery.fn.highcharts = function() {
            var l = [].slice.call(arguments);
            if (this[0]) return l[0] ? (new(a[a.isString(l[0]) ? l.shift() : "Chart"])(this[0],
                l[0], l[1]), this) : B[a.attr(this[0], "data-highcharts-chart")]
        })
    })(N);
    (function(a) {
        var A = a.each,
            B = a.isNumber,
            G = a.map,
            F = a.merge,
            l = a.pInt;
        a.Color = function(f) {
            if (!(this instanceof a.Color)) return new a.Color(f);
            this.init(f)
        };
        a.Color.prototype = {
            parsers: [{
                regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                parse: function(a) {
                    return [l(a[1]), l(a[2]), l(a[3]), parseFloat(a[4], 10)]
                }
            }, {
                regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                parse: function(a) {
                    return [l(a[1]),
                        l(a[2]), l(a[3]), 1
                    ]
                }
            }],
            names: {
                none: "rgba(255,255,255,0)",
                white: "#ffffff",
                black: "#000000"
            },
            init: function(f) {
                var h, m, r, v;
                if ((this.input = f = this.names[f && f.toLowerCase ? f.toLowerCase() : ""] || f) && f.stops) this.stops = G(f.stops, function(d) {
                    return new a.Color(d[1])
                });
                else if (f && f.charAt && "#" === f.charAt() && (h = f.length, f = parseInt(f.substr(1), 16), 7 === h ? m = [(f & 16711680) >> 16, (f & 65280) >> 8, f & 255, 1] : 4 === h && (m = [(f & 3840) >> 4 | (f & 3840) >> 8, (f & 240) >> 4 | f & 240, (f & 15) << 4 | f & 15, 1])), !m)
                    for (r = this.parsers.length; r-- && !m;) v = this.parsers[r],
                        (h = v.regex.exec(f)) && (m = v.parse(h));
                this.rgba = m || []
            },
            get: function(a) {
                var f = this.input,
                    m = this.rgba,
                    r;
                this.stops ? (r = F(f), r.stops = [].concat(r.stops), A(this.stops, function(f, d) {
                    r.stops[d] = [r.stops[d][0], f.get(a)]
                })) : r = m && B(m[0]) ? "rgb" === a || !a && 1 === m[3] ? "rgb(" + m[0] + "," + m[1] + "," + m[2] + ")" : "a" === a ? m[3] : "rgba(" + m.join(",") + ")" : f;
                return r
            },
            brighten: function(a) {
                var f, m = this.rgba;
                if (this.stops) A(this.stops, function(f) {
                    f.brighten(a)
                });
                else if (B(a) && 0 !== a)
                    for (f = 0; 3 > f; f++) m[f] += l(255 * a), 0 > m[f] && (m[f] = 0), 255 < m[f] &&
                        (m[f] = 255);
                return this
            },
            setOpacity: function(a) {
                this.rgba[3] = a;
                return this
            },
            tweenTo: function(a, h) {
                var f = this.rgba,
                    r = a.rgba;
                r.length && f && f.length ? (a = 1 !== r[3] || 1 !== f[3], h = (a ? "rgba(" : "rgb(") + Math.round(r[0] + (f[0] - r[0]) * (1 - h)) + "," + Math.round(r[1] + (f[1] - r[1]) * (1 - h)) + "," + Math.round(r[2] + (f[2] - r[2]) * (1 - h)) + (a ? "," + (r[3] + (f[3] - r[3]) * (1 - h)) : "") + ")") : h = a.input || "none";
                return h
            }
        };
        a.color = function(f) {
            return new a.Color(f)
        }
    })(N);
    (function(a) {
        var A, B, G = a.addEvent,
            F = a.animate,
            l = a.attr,
            f = a.charts,
            h = a.color,
            m = a.css,
            r = a.createElement,
            v = a.defined,
            d = a.deg2rad,
            e = a.destroyObjectProperties,
            n = a.doc,
            b = a.each,
            c = a.extend,
            w = a.erase,
            k = a.grep,
            p = a.hasTouch,
            C = a.inArray,
            I = a.isArray,
            y = a.isFirefox,
            K = a.isMS,
            q = a.isObject,
            z = a.isString,
            J = a.isWebKit,
            t = a.merge,
            D = a.noop,
            E = a.objectEach,
            H = a.pick,
            g = a.pInt,
            u = a.removeEvent,
            P = a.stop,
            M = a.svg,
            O = a.SVG_NS,
            L = a.symbolSizes,
            S = a.win;
        A = a.SVGElement = function() {
            return this
        };
        c(A.prototype, {
            opacity: 1,
            SVG_NS: O,
            textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),
            init: function(a, g) {
                this.element = "span" === g ? r(g) : n.createElementNS(this.SVG_NS, g);
                this.renderer = a
            },
            animate: function(x, g, u) {
                g = a.animObject(H(g, this.renderer.globalAnimation, !0));
                0 !== g.duration ? (u && (g.complete = u), F(this, x, g)) : (this.attr(x, null, u), g.step && g.step.call(this));
                return this
            },
            colorGradient: function(x, g, u) {
                var c = this.renderer,
                    k, Q, d, e, w, p, M, n, L, f, y = [],
                    q;
                x.radialGradient ? Q = "radialGradient" : x.linearGradient && (Q = "linearGradient");
                Q && (d = x[Q], w = c.gradients, M = x.stops, f = u.radialReference, I(d) && (x[Q] =
                    d = {
                        x1: d[0],
                        y1: d[1],
                        x2: d[2],
                        y2: d[3],
                        gradientUnits: "userSpaceOnUse"
                    }), "radialGradient" === Q && f && !v(d.gradientUnits) && (e = d, d = t(d, c.getRadialAttr(f, e), {
                    gradientUnits: "userSpaceOnUse"
                })), E(d, function(a, x) {
                    "id" !== x && y.push(x, a)
                }), E(M, function(a) {
                    y.push(a)
                }), y = y.join(","), w[y] ? f = w[y].attr("id") : (d.id = f = a.uniqueKey(), w[y] = p = c.createElement(Q).attr(d).add(c.defs), p.radAttr = e, p.stops = [], b(M, function(x) {
                    0 === x[1].indexOf("rgba") ? (k = a.color(x[1]), n = k.get("rgb"), L = k.get("a")) : (n = x[1], L = 1);
                    x = c.createElement("stop").attr({
                        offset: x[0],
                        "stop-color": n,
                        "stop-opacity": L
                    }).add(p);
                    p.stops.push(x)
                })), q = "url(" + c.url + "#" + f + ")", u.setAttribute(g, q), u.gradient = y, x.toString = function() {
                    return q
                })
            },
            applyTextOutline: function(x) {
                var g = this.element,
                    u, c, k, d, t; - 1 !== x.indexOf("contrast") && (x = x.replace(/contrast/g, this.renderer.getContrast(g.style.fill)));
                x = x.split(" ");
                c = x[x.length - 1];
                if ((k = x[0]) && "none" !== k && a.svg) {
                    this.fakeTS = !0;
                    x = [].slice.call(g.getElementsByTagName("tspan"));
                    this.ySetter = this.xSetter;
                    k = k.replace(/(^[\d\.]+)(.*?)$/g, function(a,
                        x, g) {
                        return 2 * x + g
                    });
                    for (t = x.length; t--;) u = x[t], "highcharts-text-outline" === u.getAttribute("class") && w(x, g.removeChild(u));
                    d = g.firstChild;
                    b(x, function(a, x) {
                        0 === x && (a.setAttribute("x", g.getAttribute("x")), x = g.getAttribute("y"), a.setAttribute("y", x || 0), null === x && g.setAttribute("y", 0));
                        a = a.cloneNode(1);
                        l(a, {
                            "class": "highcharts-text-outline",
                            fill: c,
                            stroke: c,
                            "stroke-width": k,
                            "stroke-linejoin": "round"
                        });
                        g.insertBefore(a, d)
                    })
                }
            },
            attr: function(a, g, u, c) {
                var x, k = this.element,
                    b, d = this,
                    Q, t;
                "string" === typeof a &&
                    void 0 !== g && (x = a, a = {}, a[x] = g);
                "string" === typeof a ? d = (this[a + "Getter"] || this._defaultGetter).call(this, a, k) : (E(a, function(x, g) {
                    Q = !1;
                    c || P(this, g);
                    this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(g) && (b || (this.symbolAttr(a), b = !0), Q = !0);
                    !this.rotation || "x" !== g && "y" !== g || (this.doTransform = !0);
                    Q || (t = this[g + "Setter"] || this._defaultSetter, t.call(this, x, g, k), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(g) && this.updateShadows(g, x, t))
                }, this), this.afterSetters());
                u && u();
                return d
            },
            afterSetters: function() {
                this.doTransform && (this.updateTransform(), this.doTransform = !1)
            },
            updateShadows: function(a, g, u) {
                for (var x = this.shadows, c = x.length; c--;) u.call(x[c], "height" === a ? Math.max(g - (x[c].cutHeight || 0), 0) : "d" === a ? this.d : g, a, x[c])
            },
            addClass: function(a, g) {
                var x = this.attr("class") || ""; - 1 === x.indexOf(a) && (g || (a = (x + (x ? " " : "") + a).replace("  ", " ")), this.attr("class", a));
                return this
            },
            hasClass: function(a) {
                return -1 !== C(a, (this.attr("class") || "").split(" "))
            },
            removeClass: function(a) {
                return this.attr("class",
                    (this.attr("class") || "").replace(a, ""))
            },
            symbolAttr: function(a) {
                var x = this;
                b("x y r start end width height innerR anchorX anchorY".split(" "), function(g) {
                    x[g] = H(a[g], x[g])
                });
                x.attr({
                    d: x.renderer.symbols[x.symbolName](x.x, x.y, x.width, x.height, x)
                })
            },
            clip: function(a) {
                return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none")
            },
            crisp: function(a, g) {
                var x = this,
                    u = {},
                    c;
                g = g || a.strokeWidth || 0;
                c = Math.round(g) % 2 / 2;
                a.x = Math.floor(a.x || x.x || 0) + c;
                a.y = Math.floor(a.y || x.y || 0) + c;
                a.width = Math.floor((a.width ||
                    x.width || 0) - 2 * c);
                a.height = Math.floor((a.height || x.height || 0) - 2 * c);
                v(a.strokeWidth) && (a.strokeWidth = g);
                E(a, function(a, g) {
                    x[g] !== a && (x[g] = u[g] = a)
                });
                return u
            },
            css: function(a) {
                var x = this.styles,
                    u = {},
                    k = this.element,
                    b, d = "",
                    t, e = !x,
                    p = ["textOutline", "textOverflow", "width"];
                a && a.color && (a.fill = a.color);
                x && E(a, function(a, g) {
                    a !== x[g] && (u[g] = a, e = !0)
                });
                e && (x && (a = c(x, u)), b = this.textWidth = a && a.width && "auto" !== a.width && "text" === k.nodeName.toLowerCase() && g(a.width), this.styles = a, b && !M && this.renderer.forExport && delete a.width,
                    K && !M ? m(this.element, a) : (t = function(a, x) {
                        return "-" + x.toLowerCase()
                    }, E(a, function(a, x) {
                        -1 === C(x, p) && (d += x.replace(/([A-Z])/g, t) + ":" + a + ";")
                    }), d && l(k, "style", d)), this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a && a.textOutline && this.applyTextOutline(a.textOutline)));
                return this
            },
            strokeWidth: function() {
                return this["stroke-width"] || 0
            },
            on: function(a, g) {
                var x = this,
                    u = x.element;
                p && "click" === a ? (u.ontouchstart = function(a) {
                        x.touchEventFired = Date.now();
                        a.preventDefault();
                        g.call(u, a)
                    },
                    u.onclick = function(a) {
                        (-1 === S.navigator.userAgent.indexOf("Android") || 1100 < Date.now() - (x.touchEventFired || 0)) && g.call(u, a)
                    }) : u["on" + a] = g;
                return this
            },
            setRadialReference: function(a) {
                var x = this.renderer.gradients[this.element.gradient];
                this.element.radialReference = a;
                x && x.radAttr && x.animate(this.renderer.getRadialAttr(a, x.radAttr));
                return this
            },
            translate: function(a, g) {
                return this.attr({
                    translateX: a,
                    translateY: g
                })
            },
            invert: function(a) {
                this.inverted = a;
                this.updateTransform();
                return this
            },
            updateTransform: function() {
                var a =
                    this.translateX || 0,
                    g = this.translateY || 0,
                    u = this.scaleX,
                    c = this.scaleY,
                    k = this.inverted,
                    b = this.rotation,
                    d = this.matrix,
                    t = this.element;
                k && (a += this.width, g += this.height);
                a = ["translate(" + a + "," + g + ")"];
                v(d) && a.push("matrix(" + d.join(",") + ")");
                k ? a.push("rotate(90) scale(-1,1)") : b && a.push("rotate(" + b + " " + H(this.rotationOriginX, t.getAttribute("x"), 0) + " " + H(this.rotationOriginY, t.getAttribute("y") || 0) + ")");
                (v(u) || v(c)) && a.push("scale(" + H(u, 1) + " " + H(c, 1) + ")");
                a.length && t.setAttribute("transform", a.join(" "))
            },
            toFront: function() {
                var a =
                    this.element;
                a.parentNode.appendChild(a);
                return this
            },
            align: function(a, g, u) {
                var x, c, k, b, d = {};
                c = this.renderer;
                k = c.alignedObjects;
                var t, e;
                if (a) {
                    if (this.alignOptions = a, this.alignByTranslate = g, !u || z(u)) this.alignTo = x = u || "renderer", w(k, this), k.push(this), u = null
                } else a = this.alignOptions, g = this.alignByTranslate, x = this.alignTo;
                u = H(u, c[x], c);
                x = a.align;
                c = a.verticalAlign;
                k = (u.x || 0) + (a.x || 0);
                b = (u.y || 0) + (a.y || 0);
                "right" === x ? t = 1 : "center" === x && (t = 2);
                t && (k += (u.width - (a.width || 0)) / t);
                d[g ? "translateX" : "x"] = Math.round(k);
                "bottom" === c ? e = 1 : "middle" === c && (e = 2);
                e && (b += (u.height - (a.height || 0)) / e);
                d[g ? "translateY" : "y"] = Math.round(b);
                this[this.placed ? "animate" : "attr"](d);
                this.placed = !0;
                this.alignAttr = d;
                return this
            },
            getBBox: function(a, g) {
                var x, u = this.renderer,
                    k, t = this.element,
                    e = this.styles,
                    Q, p = this.textStr,
                    w, M = u.cache,
                    n = u.cacheKeys,
                    L;
                g = H(g, this.rotation);
                k = g * d;
                Q = e && e.fontSize;
                void 0 !== p && (L = p.toString(), -1 === L.indexOf("\x3c") && (L = L.replace(/[0-9]/g, "0")), L += ["", g || 0, Q, e && e.width, e && e.textOverflow].join());
                L && !a && (x = M[L]);
                if (!x) {
                    if (t.namespaceURI === this.SVG_NS || u.forExport) {
                        try {
                            (w = this.fakeTS && function(a) {
                                b(t.querySelectorAll(".highcharts-text-outline"), function(x) {
                                    x.style.display = a
                                })
                            }) && w("none"), x = t.getBBox ? c({}, t.getBBox()) : {
                                width: t.offsetWidth,
                                height: t.offsetHeight
                            }, w && w("")
                        } catch (X) {}
                        if (!x || 0 > x.width) x = {
                            width: 0,
                            height: 0
                        }
                    } else x = this.htmlGetBBox();
                    u.isSVG && (a = x.width, u = x.height, e && "11px" === e.fontSize && 17 === Math.round(u) && (x.height = u = 14), g && (x.width = Math.abs(u * Math.sin(k)) + Math.abs(a * Math.cos(k)), x.height = Math.abs(u *
                        Math.cos(k)) + Math.abs(a * Math.sin(k))));
                    if (L && 0 < x.height) {
                        for (; 250 < n.length;) delete M[n.shift()];
                        M[L] || n.push(L);
                        M[L] = x
                    }
                }
                return x
            },
            show: function(a) {
                return this.attr({
                    visibility: a ? "inherit" : "visible"
                })
            },
            hide: function() {
                return this.attr({
                    visibility: "hidden"
                })
            },
            fadeOut: function(a) {
                var g = this;
                g.animate({
                    opacity: 0
                }, {
                    duration: a || 150,
                    complete: function() {
                        g.attr({
                            y: -9999
                        })
                    }
                })
            },
            add: function(a) {
                var g = this.renderer,
                    x = this.element,
                    u;
                a && (this.parentGroup = a);
                this.parentInverted = a && a.inverted;
                void 0 !== this.textStr &&
                    g.buildText(this);
                this.added = !0;
                if (!a || a.handleZ || this.zIndex) u = this.zIndexSetter();
                u || (a ? a.element : g.box).appendChild(x);
                if (this.onAdd) this.onAdd();
                return this
            },
            safeRemoveChild: function(a) {
                var g = a.parentNode;
                g && g.removeChild(a)
            },
            destroy: function() {
                var a = this,
                    g = a.element || {},
                    u = a.renderer.isSVG && "SPAN" === g.nodeName && a.parentGroup,
                    c = g.ownerSVGElement;
                g.onclick = g.onmouseout = g.onmouseover = g.onmousemove = g.point = null;
                P(a);
                a.clipPath && c && (b(c.querySelectorAll("[clip-path]"), function(g) {
                    -1 < g.getAttribute("clip-path").indexOf(a.clipPath.element.id +
                        ")") && g.removeAttribute("clip-path")
                }), a.clipPath = a.clipPath.destroy());
                if (a.stops) {
                    for (c = 0; c < a.stops.length; c++) a.stops[c] = a.stops[c].destroy();
                    a.stops = null
                }
                a.safeRemoveChild(g);
                for (a.destroyShadows(); u && u.div && 0 === u.div.childNodes.length;) g = u.parentGroup, a.safeRemoveChild(u.div), delete u.div, u = g;
                a.alignTo && w(a.renderer.alignedObjects, a);
                E(a, function(g, x) {
                    delete a[x]
                });
                return null
            },
            shadow: function(a, g, u) {
                var x = [],
                    c, k, b = this.element,
                    d, t, e, p;
                if (!a) this.destroyShadows();
                else if (!this.shadows) {
                    t = H(a.width,
                        3);
                    e = (a.opacity || .15) / t;
                    p = this.parentInverted ? "(-1,-1)" : "(" + H(a.offsetX, 1) + ", " + H(a.offsetY, 1) + ")";
                    for (c = 1; c <= t; c++) k = b.cloneNode(0), d = 2 * t + 1 - 2 * c, l(k, {
                        isShadow: "true",
                        stroke: a.color || "#000000",
                        "stroke-opacity": e * c,
                        "stroke-width": d,
                        transform: "translate" + p,
                        fill: "none"
                    }), u && (l(k, "height", Math.max(l(k, "height") - d, 0)), k.cutHeight = d), g ? g.element.appendChild(k) : b.parentNode && b.parentNode.insertBefore(k, b), x.push(k);
                    this.shadows = x
                }
                return this
            },
            destroyShadows: function() {
                b(this.shadows || [], function(a) {
                        this.safeRemoveChild(a)
                    },
                    this);
                this.shadows = void 0
            },
            xGetter: function(a) {
                "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy"));
                return this._defaultGetter(a)
            },
            _defaultGetter: function(a) {
                a = H(this[a], this.element ? this.element.getAttribute(a) : null, 0);
                /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
                return a
            },
            dSetter: function(a, g, u) {
                a && a.join && (a = a.join(" "));
                /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
                this[g] !== a && (u.setAttribute(g, a), this[g] = a)
            },
            dashstyleSetter: function(a) {
                var u, x = this["stroke-width"];
                "inherit" === x && (x = 1);
                if (a =
                    a && a.toLowerCase()) {
                    a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                    for (u = a.length; u--;) a[u] = g(a[u]) * x;
                    a = a.join(",").replace(/NaN/g, "none");
                    this.element.setAttribute("stroke-dasharray", a)
                }
            },
            alignSetter: function(a) {
                this.element.setAttribute("text-anchor", {
                    left: "start",
                    center: "middle",
                    right: "end"
                }[a])
            },
            opacitySetter: function(a,
                g, u) {
                this[g] = a;
                u.setAttribute(g, a)
            },
            titleSetter: function(a) {
                var g = this.element.getElementsByTagName("title")[0];
                g || (g = n.createElementNS(this.SVG_NS, "title"), this.element.appendChild(g));
                g.firstChild && g.removeChild(g.firstChild);
                g.appendChild(n.createTextNode(String(H(a), "").replace(/<[^>]*>/g, "")))
            },
            textSetter: function(a) {
                a !== this.textStr && (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this))
            },
            fillSetter: function(a, g, u) {
                "string" === typeof a ? u.setAttribute(g, a) : a && this.colorGradient(a,
                    g, u)
            },
            visibilitySetter: function(a, g, u) {
                "inherit" === a ? u.removeAttribute(g) : this[g] !== a && u.setAttribute(g, a);
                this[g] = a
            },
            zIndexSetter: function(a, u) {
                var c = this.renderer,
                    k = this.parentGroup,
                    x = (k || c).element || c.box,
                    b, d = this.element,
                    t, e, c = x === c.box;
                b = this.added;
                var p;
                v(a) && (d.zIndex = a, a = +a, this[u] === a && (b = !1), this[u] = a);
                if (b) {
                    (a = this.zIndex) && k && (k.handleZ = !0);
                    u = x.childNodes;
                    for (p = u.length - 1; 0 <= p && !t; p--)
                        if (k = u[p], b = k.zIndex, e = !v(b), k !== d)
                            if (0 > a && e && !c && !p) x.insertBefore(d, u[p]), t = !0;
                            else if (g(b) <= a || e &&
                        (!v(a) || 0 <= a)) x.insertBefore(d, u[p + 1] || null), t = !0;
                    t || (x.insertBefore(d, u[c ? 3 : 0] || null), t = !0)
                }
                return t
            },
            _defaultSetter: function(a, g, u) {
                u.setAttribute(g, a)
            }
        });
        A.prototype.yGetter = A.prototype.xGetter;
        A.prototype.translateXSetter = A.prototype.translateYSetter = A.prototype.rotationSetter = A.prototype.verticalAlignSetter = A.prototype.rotationOriginXSetter = A.prototype.rotationOriginYSetter = A.prototype.scaleXSetter = A.prototype.scaleYSetter = A.prototype.matrixSetter = function(a, g) {
            this[g] = a;
            this.doTransform = !0
        };
        A.prototype["stroke-widthSetter"] = A.prototype.strokeSetter = function(a, g, u) {
            this[g] = a;
            this.stroke && this["stroke-width"] ? (A.prototype.fillSetter.call(this, this.stroke, "stroke", u), u.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === g && 0 === a && this.hasStroke && (u.removeAttribute("stroke"), this.hasStroke = !1)
        };
        B = a.SVGRenderer = function() {
            this.init.apply(this, arguments)
        };
        c(B.prototype, {
            Element: A,
            SVG_NS: O,
            init: function(a, g, u, c, k, b) {
                var x;
                c = this.createElement("svg").attr({
                    version: "1.1",
                    "class": "highcharts-root"
                }).css(this.getStyle(c));
                x = c.element;
                a.appendChild(x); - 1 === a.innerHTML.indexOf("xmlns") && l(x, "xmlns", this.SVG_NS);
                this.isSVG = !0;
                this.box = x;
                this.boxWrapper = c;
                this.alignedObjects = [];
                this.url = (y || J) && n.getElementsByTagName("base").length ? S.location.href.replace(/#.*?$/, "").replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
                this.createElement("desc").add().element.appendChild(n.createTextNode("Created with Highcharts 6.0.1"));
                this.defs = this.createElement("defs").add();
                this.allowHTML = b;
                this.forExport = k;
                this.gradients = {};
                this.cache = {};
                this.cacheKeys = [];
                this.imgCount = 0;
                this.setSize(g, u, !1);
                var d;
                y && a.getBoundingClientRect && (g = function() {
                    m(a, {
                        left: 0,
                        top: 0
                    });
                    d = a.getBoundingClientRect();
                    m(a, {
                        left: Math.ceil(d.left) - d.left + "px",
                        top: Math.ceil(d.top) - d.top + "px"
                    })
                }, g(), this.unSubPixelFix = G(S, "resize", g))
            },
            getStyle: function(a) {
                return this.style = c({
                    fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                    fontSize: "12px"
                }, a)
            },
            setStyle: function(a) {
                this.boxWrapper.css(this.getStyle(a))
            },
            isHidden: function() {
                return !this.boxWrapper.getBBox().width
            },
            destroy: function() {
                var a = this.defs;
                this.box = null;
                this.boxWrapper = this.boxWrapper.destroy();
                e(this.gradients || {});
                this.gradients = null;
                a && (this.defs = a.destroy());
                this.unSubPixelFix && this.unSubPixelFix();
                return this.alignedObjects = null
            },
            createElement: function(a) {
                var g = new this.Element;
                g.init(this, a);
                return g
            },
            draw: D,
            getRadialAttr: function(a, g) {
                return {
                    cx: a[0] - a[2] / 2 + g.cx * a[2],
                    cy: a[1] - a[2] / 2 + g.cy * a[2],
                    r: g.r * a[2]
                }
            },
            getSpanWidth: function(a, g) {
                var u =
                    a.getBBox(!0).width;
                !M && this.forExport && (u = this.measureSpanWidth(g.firstChild.data, a.styles));
                return u
            },
            applyEllipsis: function(a, g, u, c) {
                var k = a.rotation,
                    b = u,
                    x, d = 0,
                    t = u.length,
                    e = function(a) {
                        g.removeChild(g.firstChild);
                        a && g.appendChild(n.createTextNode(a))
                    },
                    p;
                a.rotation = 0;
                b = this.getSpanWidth(a, g);
                if (p = b > c) {
                    for (; d <= t;) x = Math.ceil((d + t) / 2), b = u.substring(0, x) + "\u2026", e(b), b = this.getSpanWidth(a, g), d === t ? d = t + 1 : b > c ? t = x - 1 : d = x;
                    0 === t && e("")
                }
                a.rotation = k;
                return p
            },
            escapes: {
                "\x26": "\x26amp;",
                "\x3c": "\x26lt;",
                "\x3e": "\x26gt;",
                "'": "\x26#39;",
                '"': "\x26quot"
            },
            buildText: function(a) {
                var u = a.element,
                    c = this,
                    d = c.forExport,
                    x = H(a.textStr, "").toString(),
                    t = -1 !== x.indexOf("\x3c"),
                    e = u.childNodes,
                    p, w, L, f, y = l(u, "x"),
                    q = a.styles,
                    D = a.textWidth,
                    C = q && q.lineHeight,
                    z = q && q.textOutline,
                    h = q && "ellipsis" === q.textOverflow,
                    I = q && "nowrap" === q.whiteSpace,
                    P = q && q.fontSize,
                    r, v, K = e.length,
                    q = D && !a.added && this.box,
                    S = function(a) {
                        var k;
                        k = /(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : P || c.style.fontSize || 12;
                        return C ? g(C) : c.fontMetrics(k,
                            a.getAttribute("style") ? a : u).h
                    },
                    J = function(a) {
                        E(c.escapes, function(g, u) {
                            a = a.replace(new RegExp(g, "g"), u)
                        });
                        return a
                    };
                r = [x, h, I, C, z, P, D].join();
                if (r !== a.textCache) {
                    for (a.textCache = r; K--;) u.removeChild(e[K]);
                    t || z || h || D || -1 !== x.indexOf(" ") ? (p = /<.*class="([^"]+)".*>/, w = /<.*style="([^"]+)".*>/, L = /<.*href="([^"]+)".*>/, q && q.appendChild(u), x = t ? x.replace(/<(b|strong)>/g, '\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g, '\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g, "\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,
                        "\x3c/span\x3e").split(/<br.*?>/g) : [x], x = k(x, function(a) {
                        return "" !== a
                    }), b(x, function(g, k) {
                        var x, t = 0;
                        g = g.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||\x3cspan").replace(/<\/span>/g, "\x3c/span\x3e|||");
                        x = g.split("|||");
                        b(x, function(g) {
                            if ("" !== g || 1 === x.length) {
                                var b = {},
                                    e = n.createElementNS(c.SVG_NS, "tspan"),
                                    q, E;
                                p.test(g) && (q = g.match(p)[1], l(e, "class", q));
                                w.test(g) && (E = g.match(w)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), l(e, "style", E));
                                L.test(g) && !d && (l(e, "onclick", 'location.href\x3d"' + g.match(L)[1] +
                                    '"'), l(e, "class", "highcharts-anchor"), m(e, {
                                    cursor: "pointer"
                                }));
                                g = J(g.replace(/<[a-zA-Z\/](.|\n)*?>/g, "") || " ");
                                if (" " !== g) {
                                    e.appendChild(n.createTextNode(g));
                                    t ? b.dx = 0 : k && null !== y && (b.x = y);
                                    l(e, b);
                                    u.appendChild(e);
                                    !t && v && (!M && d && m(e, {
                                        display: "block"
                                    }), l(e, "dy", S(e)));
                                    if (D) {
                                        b = g.replace(/([^\^])-/g, "$1- ").split(" ");
                                        q = 1 < x.length || k || 1 < b.length && !I;
                                        var C = [],
                                            Q, z = S(e),
                                            r = a.rotation;
                                        for (h && (f = c.applyEllipsis(a, e, g, D)); !h && q && (b.length || C.length);) a.rotation = 0, Q = c.getSpanWidth(a, e), g = Q > D, void 0 === f && (f = g),
                                            g && 1 !== b.length ? (e.removeChild(e.firstChild), C.unshift(b.pop())) : (b = C, C = [], b.length && !I && (e = n.createElementNS(O, "tspan"), l(e, {
                                                dy: z,
                                                x: y
                                            }), E && l(e, "style", E), u.appendChild(e)), Q > D && (D = Q)), b.length && e.appendChild(n.createTextNode(b.join(" ").replace(/- /g, "-")));
                                        a.rotation = r
                                    }
                                    t++
                                }
                            }
                        });
                        v = v || u.childNodes.length
                    }), f && a.attr("title", a.textStr), q && q.removeChild(u), z && a.applyTextOutline && a.applyTextOutline(z)) : u.appendChild(n.createTextNode(J(x)))
                }
            },
            getContrast: function(a) {
                a = h(a).rgba;
                return 510 < a[0] + a[1] + a[2] ?
                    "#000000" : "#FFFFFF"
            },
            button: function(a, g, u, k, b, d, e, p, w) {
                var x = this.label(a, g, u, w, null, null, null, null, "button"),
                    M = 0;
                x.attr(t({
                    padding: 8,
                    r: 2
                }, b));
                var n, L, f, q;
                b = t({
                    fill: "#f7f7f7",
                    stroke: "#cccccc",
                    "stroke-width": 1,
                    style: {
                        color: "#333333",
                        cursor: "pointer",
                        fontWeight: "normal"
                    }
                }, b);
                n = b.style;
                delete b.style;
                d = t(b, {
                    fill: "#e6e6e6"
                }, d);
                L = d.style;
                delete d.style;
                e = t(b, {
                    fill: "#e6ebf5",
                    style: {
                        color: "#000000",
                        fontWeight: "bold"
                    }
                }, e);
                f = e.style;
                delete e.style;
                p = t(b, {
                    style: {
                        color: "#cccccc"
                    }
                }, p);
                q = p.style;
                delete p.style;
                G(x.element, K ? "mouseover" : "mouseenter", function() {
                    3 !== M && x.setState(1)
                });
                G(x.element, K ? "mouseout" : "mouseleave", function() {
                    3 !== M && x.setState(M)
                });
                x.setState = function(a) {
                    1 !== a && (x.state = M = a);
                    x.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][a || 0]);
                    x.attr([b, d, e, p][a || 0]).css([n, L, f, q][a || 0])
                };
                x.attr(b).css(c({
                    cursor: "default"
                }, n));
                return x.on("click", function(a) {
                    3 !== M && k.call(x, a)
                })
            },
            crispLine: function(a, g) {
                a[1] ===
                    a[4] && (a[1] = a[4] = Math.round(a[1]) - g % 2 / 2);
                a[2] === a[5] && (a[2] = a[5] = Math.round(a[2]) + g % 2 / 2);
                return a
            },
            path: function(a) {
                var g = {
                    fill: "none"
                };
                I(a) ? g.d = a : q(a) && c(g, a);
                return this.createElement("path").attr(g)
            },
            circle: function(a, g, u) {
                a = q(a) ? a : {
                    x: a,
                    y: g,
                    r: u
                };
                g = this.createElement("circle");
                g.xSetter = g.ySetter = function(a, g, u) {
                    u.setAttribute("c" + g, a)
                };
                return g.attr(a)
            },
            arc: function(a, g, u, c, b, k) {
                q(a) ? (c = a, g = c.y, u = c.r, a = c.x) : c = {
                    innerR: c,
                    start: b,
                    end: k
                };
                a = this.symbol("arc", a, g, u, u, c);
                a.r = u;
                return a
            },
            rect: function(a,
                g, u, c, b, k) {
                b = q(a) ? a.r : b;
                var d = this.createElement("rect");
                a = q(a) ? a : void 0 === a ? {} : {
                    x: a,
                    y: g,
                    width: Math.max(u, 0),
                    height: Math.max(c, 0)
                };
                void 0 !== k && (a.strokeWidth = k, a = d.crisp(a));
                a.fill = "none";
                b && (a.r = b);
                d.rSetter = function(a, g, u) {
                    l(u, {
                        rx: a,
                        ry: a
                    })
                };
                return d.attr(a)
            },
            setSize: function(a, g, u) {
                var c = this.alignedObjects,
                    b = c.length;
                this.width = a;
                this.height = g;
                for (this.boxWrapper.animate({
                        width: a,
                        height: g
                    }, {
                        step: function() {
                            this.attr({
                                viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
                            })
                        },
                        duration: H(u, !0) ?
                            void 0 : 0
                    }); b--;) c[b].align()
            },
            g: function(a) {
                var g = this.createElement("g");
                return a ? g.attr({
                    "class": "highcharts-" + a
                }) : g
            },
            image: function(a, g, u, b, k) {
                var d = {
                    preserveAspectRatio: "none"
                };
                1 < arguments.length && c(d, {
                    x: g,
                    y: u,
                    width: b,
                    height: k
                });
                d = this.createElement("image").attr(d);
                d.element.setAttributeNS ? d.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : d.element.setAttribute("hc-svg-href", a);
                return d
            },
            symbol: function(a, g, u, k, d, t) {
                var e = this,
                    x, p = /^url\((.*?)\)$/,
                    w = p.test(a),
                    M = !w && (this.symbols[a] ?
                        a : "circle"),
                    q = M && this.symbols[M],
                    y = v(g) && q && q.call(this.symbols, Math.round(g), Math.round(u), k, d, t),
                    E, D;
                q ? (x = this.path(y), x.attr("fill", "none"), c(x, {
                    symbolName: M,
                    x: g,
                    y: u,
                    width: k,
                    height: d
                }), t && c(x, t)) : w && (E = a.match(p)[1], x = this.image(E), x.imgwidth = H(L[E] && L[E].width, t && t.width), x.imgheight = H(L[E] && L[E].height, t && t.height), D = function() {
                    x.attr({
                        width: x.width,
                        height: x.height
                    })
                }, b(["width", "height"], function(a) {
                    x[a + "Setter"] = function(a, g) {
                        var u = {},
                            c = this["img" + g],
                            b = "width" === g ? "translateX" : "translateY";
                        this[g] = a;
                        v(c) && (this.element && this.element.setAttribute(g, c), this.alignByTranslate || (u[b] = ((this[g] || 0) - c) / 2, this.attr(u)))
                    }
                }), v(g) && x.attr({
                    x: g,
                    y: u
                }), x.isImg = !0, v(x.imgwidth) && v(x.imgheight) ? D() : (x.attr({
                    width: 0,
                    height: 0
                }), r("img", {
                    onload: function() {
                        var a = f[e.chartIndex];
                        0 === this.width && (m(this, {
                            position: "absolute",
                            top: "-999em"
                        }), n.body.appendChild(this));
                        L[E] = {
                            width: this.width,
                            height: this.height
                        };
                        x.imgwidth = this.width;
                        x.imgheight = this.height;
                        x.element && D();
                        this.parentNode && this.parentNode.removeChild(this);
                        e.imgCount--;
                        if (!e.imgCount && a && a.onload) a.onload()
                    },
                    src: E
                }), this.imgCount++));
                return x
            },
            symbols: {
                circle: function(a, g, u, c) {
                    return this.arc(a + u / 2, g + c / 2, u / 2, c / 2, {
                        start: 0,
                        end: 2 * Math.PI,
                        open: !1
                    })
                },
                square: function(a, g, u, c) {
                    return ["M", a, g, "L", a + u, g, a + u, g + c, a, g + c, "Z"]
                },
                triangle: function(a, g, u, c) {
                    return ["M", a + u / 2, g, "L", a + u, g + c, a, g + c, "Z"]
                },
                "triangle-down": function(a, g, u, c) {
                    return ["M", a, g, "L", a + u, g, a + u / 2, g + c, "Z"]
                },
                diamond: function(a, g, u, c) {
                    return ["M", a + u / 2, g, "L", a + u, g + c / 2, a + u / 2, g + c, a, g + c / 2, "Z"]
                },
                arc: function(a,
                    g, u, c, b) {
                    var k = b.start,
                        d = b.r || u,
                        t = b.r || c || u,
                        e = b.end - .001;
                    u = b.innerR;
                    c = H(b.open, .001 > Math.abs(b.end - b.start - 2 * Math.PI));
                    var x = Math.cos(k),
                        p = Math.sin(k),
                        w = Math.cos(e),
                        e = Math.sin(e);
                    b = .001 > b.end - k - Math.PI ? 0 : 1;
                    d = ["M", a + d * x, g + t * p, "A", d, t, 0, b, 1, a + d * w, g + t * e];
                    v(u) && d.push(c ? "M" : "L", a + u * w, g + u * e, "A", u, u, 0, b, 0, a + u * x, g + u * p);
                    d.push(c ? "" : "Z");
                    return d
                },
                callout: function(a, g, u, c, b) {
                    var k = Math.min(b && b.r || 0, u, c),
                        d = k + 6,
                        t = b && b.anchorX;
                    b = b && b.anchorY;
                    var e;
                    e = ["M", a + k, g, "L", a + u - k, g, "C", a + u, g, a + u, g, a + u, g + k, "L", a + u, g + c -
                        k, "C", a + u, g + c, a + u, g + c, a + u - k, g + c, "L", a + k, g + c, "C", a, g + c, a, g + c, a, g + c - k, "L", a, g + k, "C", a, g, a, g, a + k, g
                    ];
                    t && t > u ? b > g + d && b < g + c - d ? e.splice(13, 3, "L", a + u, b - 6, a + u + 6, b, a + u, b + 6, a + u, g + c - k) : e.splice(13, 3, "L", a + u, c / 2, t, b, a + u, c / 2, a + u, g + c - k) : t && 0 > t ? b > g + d && b < g + c - d ? e.splice(33, 3, "L", a, b + 6, a - 6, b, a, b - 6, a, g + k) : e.splice(33, 3, "L", a, c / 2, t, b, a, c / 2, a, g + k) : b && b > c && t > a + d && t < a + u - d ? e.splice(23, 3, "L", t + 6, g + c, t, g + c + 6, t - 6, g + c, a + k, g + c) : b && 0 > b && t > a + d && t < a + u - d && e.splice(3, 3, "L", t - 6, g, t, g - 6, t + 6, g, u - k, g);
                    return e
                }
            },
            clipRect: function(g, u, c,
                b) {
                var k = a.uniqueKey(),
                    d = this.createElement("clipPath").attr({
                        id: k
                    }).add(this.defs);
                g = this.rect(g, u, c, b, 0).add(d);
                g.id = k;
                g.clipPath = d;
                g.count = 0;
                return g
            },
            text: function(a, g, u, c) {
                var b = {};
                if (c && (this.allowHTML || !this.forExport)) return this.html(a, g, u);
                b.x = Math.round(g || 0);
                u && (b.y = Math.round(u));
                if (a || 0 === a) b.text = a;
                a = this.createElement("text").attr(b);
                c || (a.xSetter = function(a, g, u) {
                    var c = u.getElementsByTagName("tspan"),
                        b, k = u.getAttribute(g),
                        d;
                    for (d = 0; d < c.length; d++) b = c[d], b.getAttribute(g) === k && b.setAttribute(g,
                        a);
                    u.setAttribute(g, a)
                });
                return a
            },
            fontMetrics: function(a, u) {
                a = a || u && u.style && u.style.fontSize || this.style && this.style.fontSize;
                a = /px/.test(a) ? g(a) : /em/.test(a) ? parseFloat(a) * (u ? this.fontMetrics(null, u.parentNode).f : 16) : 12;
                u = 24 > a ? a + 3 : Math.round(1.2 * a);
                return {
                    h: u,
                    b: Math.round(.8 * u),
                    f: a
                }
            },
            rotCorr: function(a, g, u) {
                var c = a;
                g && u && (c = Math.max(c * Math.cos(g * d), 4));
                return {
                    x: -a / 3 * Math.sin(g * d),
                    y: c
                }
            },
            label: function(g, k, d, e, p, w, M, n, L) {
                var x = this,
                    q = x.g("button" !== L && "label"),
                    f = q.text = x.text("", 0, 0, M).attr({
                        zIndex: 1
                    }),
                    y, E, D = 0,
                    m = 3,
                    C = 0,
                    z, h, r, I, P, l = {},
                    K, S, H = /^url\((.*?)\)$/.test(e),
                    O = H,
                    Q, J, U, T;
                L && q.addClass("highcharts-" + L);
                O = H;
                Q = function() {
                    return (K || 0) % 2 / 2
                };
                J = function() {
                    var a = f.element.style,
                        g = {};
                    E = (void 0 === z || void 0 === h || P) && v(f.textStr) && f.getBBox();
                    q.width = (z || E.width || 0) + 2 * m + C;
                    q.height = (h || E.height || 0) + 2 * m;
                    S = m + x.fontMetrics(a && a.fontSize, f).b;
                    O && (y || (q.box = y = x.symbols[e] || H ? x.symbol(e) : x.rect(), y.addClass(("button" === L ? "" : "highcharts-label-box") + (L ? " highcharts-" + L + "-box" : "")), y.add(q), a = Q(), g.x = a, g.y = (n ? -S :
                        0) + a), g.width = Math.round(q.width), g.height = Math.round(q.height), y.attr(c(g, l)), l = {})
                };
                U = function() {
                    var a = C + m,
                        g;
                    g = n ? 0 : S;
                    v(z) && E && ("center" === P || "right" === P) && (a += {
                        center: .5,
                        right: 1
                    }[P] * (z - E.width));
                    if (a !== f.x || g !== f.y) f.attr("x", a), void 0 !== g && f.attr("y", g);
                    f.x = a;
                    f.y = g
                };
                T = function(a, g) {
                    y ? y.attr(a, g) : l[a] = g
                };
                q.onAdd = function() {
                    f.add(q);
                    q.attr({
                        text: g || 0 === g ? g : "",
                        x: k,
                        y: d
                    });
                    y && v(p) && q.attr({
                        anchorX: p,
                        anchorY: w
                    })
                };
                q.widthSetter = function(g) {
                    z = a.isNumber(g) ? g : null
                };
                q.heightSetter = function(a) {
                    h = a
                };
                q["text-alignSetter"] =
                    function(a) {
                        P = a
                    };
                q.paddingSetter = function(a) {
                    v(a) && a !== m && (m = q.padding = a, U())
                };
                q.paddingLeftSetter = function(a) {
                    v(a) && a !== C && (C = a, U())
                };
                q.alignSetter = function(a) {
                    a = {
                        left: 0,
                        center: .5,
                        right: 1
                    }[a];
                    a !== D && (D = a, E && q.attr({
                        x: r
                    }))
                };
                q.textSetter = function(a) {
                    void 0 !== a && f.textSetter(a);
                    J();
                    U()
                };
                q["stroke-widthSetter"] = function(a, g) {
                    a && (O = !0);
                    K = this["stroke-width"] = a;
                    T(g, a)
                };
                q.strokeSetter = q.fillSetter = q.rSetter = function(a, g) {
                    "r" !== g && ("fill" === g && a && (O = !0), q[g] = a);
                    T(g, a)
                };
                q.anchorXSetter = function(a, g) {
                    p = q.anchorX =
                        a;
                    T(g, Math.round(a) - Q() - r)
                };
                q.anchorYSetter = function(a, g) {
                    w = q.anchorY = a;
                    T(g, a - I)
                };
                q.xSetter = function(a) {
                    q.x = a;
                    D && (a -= D * ((z || E.width) + 2 * m));
                    r = Math.round(a);
                    q.attr("translateX", r)
                };
                q.ySetter = function(a) {
                    I = q.y = Math.round(a);
                    q.attr("translateY", I)
                };
                var V = q.css;
                return c(q, {
                    css: function(a) {
                        if (a) {
                            var g = {};
                            a = t(a);
                            b(q.textProps, function(u) {
                                void 0 !== a[u] && (g[u] = a[u], delete a[u])
                            });
                            f.css(g)
                        }
                        return V.call(q, a)
                    },
                    getBBox: function() {
                        return {
                            width: E.width + 2 * m,
                            height: E.height + 2 * m,
                            x: E.x - m,
                            y: E.y - m
                        }
                    },
                    shadow: function(a) {
                        a &&
                            (J(), y && y.shadow(a));
                        return q
                    },
                    destroy: function() {
                        u(q.element, "mouseenter");
                        u(q.element, "mouseleave");
                        f && (f = f.destroy());
                        y && (y = y.destroy());
                        A.prototype.destroy.call(q);
                        q = x = J = U = T = null
                    }
                })
            }
        });
        a.Renderer = B
    })(N);
    (function(a) {
        var A = a.attr,
            B = a.createElement,
            G = a.css,
            F = a.defined,
            l = a.each,
            f = a.extend,
            h = a.isFirefox,
            m = a.isMS,
            r = a.isWebKit,
            v = a.pInt,
            d = a.SVGRenderer,
            e = a.win,
            n = a.wrap;
        f(a.SVGElement.prototype, {
            htmlCss: function(a) {
                var c = this.element;
                if (c = a && "SPAN" === c.tagName && a.width) delete a.width, this.textWidth = c,
                    this.updateTransform();
                a && "ellipsis" === a.textOverflow && (a.whiteSpace = "nowrap", a.overflow = "hidden");
                this.styles = f(this.styles, a);
                G(this.element, a);
                return this
            },
            htmlGetBBox: function() {
                var a = this.element;
                return {
                    x: a.offsetLeft,
                    y: a.offsetTop,
                    width: a.offsetWidth,
                    height: a.offsetHeight
                }
            },
            htmlUpdateTransform: function() {
                if (this.added) {
                    var a = this.renderer,
                        c = this.element,
                        d = this.translateX || 0,
                        k = this.translateY || 0,
                        e = this.x || 0,
                        n = this.y || 0,
                        f = this.textAlign || "left",
                        y = {
                            left: 0,
                            center: .5,
                            right: 1
                        }[f],
                        m = this.styles;
                    G(c, {
                        marginLeft: d,
                        marginTop: k
                    });
                    this.shadows && l(this.shadows, function(a) {
                        G(a, {
                            marginLeft: d + 1,
                            marginTop: k + 1
                        })
                    });
                    this.inverted && l(c.childNodes, function(b) {
                        a.invertChild(b, c)
                    });
                    if ("SPAN" === c.tagName) {
                        var q = this.rotation,
                            z = v(this.textWidth),
                            h = m && m.whiteSpace,
                            t = [q, f, c.innerHTML, this.textWidth, this.textAlign].join();
                        t !== this.cTT && (m = a.fontMetrics(c.style.fontSize).b, F(q) && this.setSpanRotation(q, y, m), G(c, {
                            width: "",
                            whiteSpace: h || "nowrap"
                        }), c.offsetWidth > z && /[ \-]/.test(c.textContent || c.innerText) && G(c, {
                            width: z +
                                "px",
                            display: "block",
                            whiteSpace: h || "normal"
                        }), this.getSpanCorrection(c.offsetWidth, m, y, q, f));
                        G(c, {
                            left: e + (this.xCorr || 0) + "px",
                            top: n + (this.yCorr || 0) + "px"
                        });
                        r && (m = c.offsetHeight);
                        this.cTT = t
                    }
                } else this.alignOnAdd = !0
            },
            setSpanRotation: function(a, c, d) {
                var b = {},
                    e = this.renderer.getTransformKey();
                b[e] = b.transform = "rotate(" + a + "deg)";
                b[e + (h ? "Origin" : "-origin")] = b.transformOrigin = 100 * c + "% " + d + "px";
                G(this.element, b)
            },
            getSpanCorrection: function(a, c, d) {
                this.xCorr = -a * d;
                this.yCorr = -c
            }
        });
        f(d.prototype, {
            getTransformKey: function() {
                return m &&
                    !/Edge/.test(e.navigator.userAgent) ? "-ms-transform" : r ? "-webkit-transform" : h ? "MozTransform" : e.opera ? "-o-transform" : ""
            },
            html: function(a, c, d) {
                var b = this.createElement("span"),
                    e = b.element,
                    w = b.renderer,
                    m = w.isSVG,
                    y = function(a, c) {
                        l(["opacity", "visibility"], function(b) {
                            n(a, b + "Setter", function(a, b, k, d) {
                                a.call(this, b, k, d);
                                c[k] = b
                            })
                        })
                    };
                b.textSetter = function(a) {
                    a !== e.innerHTML && delete this.bBox;
                    e.innerHTML = this.textStr = a;
                    b.htmlUpdateTransform()
                };
                m && y(b, b.element.style);
                b.xSetter = b.ySetter = b.alignSetter = b.rotationSetter =
                    function(a, c) {
                        "align" === c && (c = "textAlign");
                        b[c] = a;
                        b.htmlUpdateTransform()
                    };
                b.attr({
                    text: a,
                    x: Math.round(c),
                    y: Math.round(d)
                }).css({
                    fontFamily: this.style.fontFamily,
                    fontSize: this.style.fontSize,
                    position: "absolute"
                });
                e.style.whiteSpace = "nowrap";
                b.css = b.htmlCss;
                m && (b.add = function(a) {
                    var c, k = w.box.parentNode,
                        d = [];
                    if (this.parentGroup = a) {
                        if (c = a.div, !c) {
                            for (; a;) d.push(a), a = a.parentGroup;
                            l(d.reverse(), function(a) {
                                function t(g, u) {
                                    a[u] = g;
                                    e[w.getTransformKey()] = "translate(" + a.x + "px," + a.y + "px)";
                                    a.doTransform = !0
                                }
                                var e, p = A(a.element, "class");
                                p && (p = {
                                    className: p
                                });
                                c = a.div = a.div || B("div", p, {
                                    position: "absolute",
                                    left: (a.translateX || 0) + "px",
                                    top: (a.translateY || 0) + "px",
                                    display: a.display,
                                    opacity: a.opacity,
                                    pointerEvents: a.styles && a.styles.pointerEvents
                                }, c || k);
                                e = c.style;
                                f(a, {
                                    classSetter: function(a) {
                                        this.element.setAttribute("class", a);
                                        c.className = a
                                    },
                                    on: function() {
                                        d[0].div && b.on.apply({
                                            element: d[0].div
                                        }, arguments);
                                        return a
                                    },
                                    translateXSetter: t,
                                    translateYSetter: t
                                });
                                y(a, e)
                            })
                        }
                    } else c = k;
                    c.appendChild(e);
                    b.added = !0;
                    b.alignOnAdd &&
                        b.htmlUpdateTransform();
                    return b
                });
                return b
            }
        })
    })(N);
    (function(a) {
        function A() {
            var f = a.defaultOptions.global,
                r = h.moment;
            if (f.timezone) {
                if (r) return function(a) {
                    return -r.tz(a, f.timezone).utcOffset()
                };
                a.error(25)
            }
            return f.useUTC && f.getTimezoneOffset
        }

        function B() {
            var m = a.defaultOptions.global,
                r, v = m.useUTC,
                d = v ? "getUTC" : "get",
                e = v ? "setUTC" : "set",
                n = "Minutes Hours Day Date Month FullYear".split(" "),
                b = n.concat(["Milliseconds", "Seconds"]);
            a.Date = r = m.Date || h.Date;
            r.hcTimezoneOffset = v && m.timezoneOffset;
            r.hcGetTimezoneOffset =
                A();
            r.hcMakeTime = function(a, b, k, d, e, n) {
                var c;
                v ? (c = r.UTC.apply(0, arguments), c += F(c)) : c = (new r(a, b, f(k, 1), f(d, 0), f(e, 0), f(n, 0))).getTime();
                return c
            };
            for (m = 0; m < n.length; m++) r["hcGet" + n[m]] = d + n[m];
            for (m = 0; m < b.length; m++) r["hcSet" + b[m]] = e + b[m]
        }
        var G = a.color,
            F = a.getTZOffset,
            l = a.merge,
            f = a.pick,
            h = a.win;
        a.defaultOptions = {
            colors: colors,
            symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
            lang: {
                loading: "Loading...",
                months: "January February March April May June July August September October November December".split(" "),
                shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                decimalPoint: ".",
                numericSymbols: "kMGTPE".split(""),
                resetZoom: "Reset zoom",
                resetZoomTitle: "Reset zoom level 1:1",
                thousandsSep: " "
            },
            global: {
                useUTC: !0
            },
            chart: {
                borderRadius: 0,
                defaultSeriesType: "line",
                ignoreHiddenSeries: !0,
                spacing: [10, 10, 15, 10],
                resetZoomButton: {
                    theme: {
                        zIndex: 20
                    },
                    position: {
                        align: "right",
                        x: -10,
                        y: 10
                    }
                },
                width: null,
                height: null,
                borderColor: "#335cad",
                backgroundColor: "#ffffff",
                plotBorderColor: "#cccccc"
            },
            title: {
                text: "Chart title",
                align: "center",
                margin: 15,
                widthAdjust: -44
            },
            subtitle: {
                text: "",
                align: "center",
                widthAdjust: -44
            },
            plotOptions: {},
            labels: {
                style: {
                    position: "absolute",
                    color: "#333333"
                }
            },
            legend: {
                enabled: !0,
                align: "center",
                layout: "horizontal",
                labelFormatter: function() {
                    return this.name
                },
                borderColor: "#999999",
                borderRadius: 0,
                navigation: {
                    activeColor: "#003399",
                    inactiveColor: "#cccccc"
                },
                itemStyle: {
                    color: "#333333",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textOverflow: "ellipsis"
                },
                itemHoverStyle: {
                    color: "#000000"
                },
                itemHiddenStyle: {
                    color: "#cccccc"
                },
                shadow: !1,
                itemCheckboxStyle: {
                    position: "absolute",
                    width: "13px",
                    height: "13px"
                },
                squareSymbol: !0,
                symbolPadding: 5,
                verticalAlign: "bottom",
                x: 0,
                y: 0,
                title: {
                    style: {
                        fontWeight: "bold"
                    }
                }
            },
            loading: {
                labelStyle: {
                    fontWeight: "bold",
                    position: "relative",
                    top: "45%"
                },
                style: {
                    position: "absolute",
                    backgroundColor: "#ffffff",
                    opacity: .5,
                    textAlign: "center"
                }
            },
            tooltip: {
                enabled: !0,
                animation: a.svg,
                borderRadius: 3,
                dateTimeLabelFormats: {
                    millisecond: "%A, %b %e, %H:%M:%S.%L",
                    second: "%A, %b %e, %H:%M:%S",
                    minute: "%A, %b %e, %H:%M",
                    hour: "%A, %b %e, %H:%M",
                    day: "%A, %b %e, %Y",
                    week: "Week from %A, %b %e, %Y",
                    month: "%B %Y",
                    year: "%Y"
                },
                footerFormat: "",
                padding: 8,
                snap: a.isTouchDevice ? 25 : 10,
                backgroundColor: G("#f7f7f7").setOpacity(.85).get(),
                borderWidth: 1,
                headerFormat: '\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',
                pointFormat: '\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',
                shadow: !0,
                style: {
                    color: "#333333",
                    cursor: "default",
                    fontSize: "12px",
                    pointerEvents: "none",
                    whiteSpace: "nowrap"
                }
            },
            credits: {
                enabled: !0,
                href: "http://www.highcharts.com",
                position: {
                    align: "right",
                    x: -10,
                    verticalAlign: "bottom",
                    y: -5
                },
                style: {
                    cursor: "pointer",
                    color: "#999999",
                    fontSize: "9px"
                },
                text: "Highcharts.com"
            }
        };
        a.setOptions = function(f) {
            a.defaultOptions = l(!0, a.defaultOptions, f);
            B();
            return a.defaultOptions
        };
        a.getOptions = function() {
            return a.defaultOptions
        };
        a.defaultPlotOptions = a.defaultOptions.plotOptions;
        B()
    })(N);
    (function(a) {
        var A = a.correctFloat,
            B = a.defined,
            G = a.destroyObjectProperties,
            F = a.isNumber,
            l = a.merge,
            f = a.pick,
            h = a.deg2rad;
        a.Tick = function(a, f, h, d) {
            this.axis = a;
            this.pos = f;
            this.type = h || "";
            this.isNewLabel = this.isNew = !0;
            h || d || this.addLabel()
        };
        a.Tick.prototype = {
            addLabel: function() {
                var a = this.axis,
                    h = a.options,
                    v = a.chart,
                    d = a.categories,
                    e = a.names,
                    n = this.pos,
                    b = h.labels,
                    c = a.tickPositions,
                    w = n === c[0],
                    k = n === c[c.length - 1],
                    e = d ? f(d[n], e[n], n) : n,
                    d = this.label,
                    c = c.info,
                    p;
                a.isDatetimeAxis && c && (p = h.dateTimeLabelFormats[c.higherRanks[n] ||
                    c.unitName]);
                this.isFirst = w;
                this.isLast = k;
                h = a.labelFormatter.call({
                    axis: a,
                    chart: v,
                    isFirst: w,
                    isLast: k,
                    dateTimeLabelFormat: p,
                    value: a.isLog ? A(a.lin2log(e)) : e,
                    pos: n
                });
                B(d) ? d && d.attr({
                    text: h
                }) : (this.labelLength = (this.label = d = B(h) && b.enabled ? v.renderer.text(h, 0, 0, b.useHTML).css(l(b.style)).add(a.labelGroup) : null) && d.getBBox().width, this.rotation = 0)
            },
            getLabelSize: function() {
                return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
            },
            handleOverflow: function(a) {
                var m = this.axis,
                    v = a.x,
                    d = m.chart.chartWidth,
                    e = m.chart.spacing,
                    n = f(m.labelLeft, Math.min(m.pos, e[3])),
                    e = f(m.labelRight, Math.max(m.pos + m.len, d - e[1])),
                    b = this.label,
                    c = this.rotation,
                    w = {
                        left: 0,
                        center: .5,
                        right: 1
                    }[m.labelAlign],
                    k = b.getBBox().width,
                    p = m.getSlotWidth(),
                    C = p,
                    I = 1,
                    y, l = {};
                if (c) 0 > c && v - w * k < n ? y = Math.round(v / Math.cos(c * h) - n) : 0 < c && v + w * k > e && (y = Math.round((d - v) / Math.cos(c * h)));
                else if (d = v + (1 - w) * k, v - w * k < n ? C = a.x + C * (1 - w) - n : d > e && (C = e - a.x + C * w, I = -1), C = Math.min(p, C), C < p && "center" === m.labelAlign && (a.x += I * (p - C - w * (p - Math.min(k, C)))), k > C || m.autoRotation && (b.styles || {}).width) y = C;
                y && (l.width = y, (m.options.labels.style || {}).textOverflow || (l.textOverflow = "ellipsis"), b.css(l))
            },
            getPosition: function(a, f, h, d) {
                var e = this.axis,
                    n = e.chart,
                    b = d && n.oldChartHeight || n.chartHeight;
                return {
                    x: a ? e.translate(f + h, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && n.oldChartWidth || n.chartWidth) - e.right - e.left : 0),
                    y: a ? b - e.bottom + e.offset - (e.opposite ? e.height : 0) : b - e.translate(f + h, null, null, d) - e.transB
                }
            },
            getLabelPosition: function(a, f, l, d, e, n, b, c) {
                var w = this.axis,
                    k = w.transA,
                    p = w.reversed,
                    m = w.staggerLines,
                    I = w.tickRotCorr || {
                        x: 0,
                        y: 0
                    },
                    y = e.y;
                B(y) || (y = 0 === w.side ? l.rotation ? -8 : -l.getBBox().height : 2 === w.side ? I.y + 8 : Math.cos(l.rotation * h) * (I.y - l.getBBox(!1, 0).height / 2));
                a = a + e.x + I.x - (n && d ? n * k * (p ? -1 : 1) : 0);
                f = f + y - (n && !d ? n * k * (p ? 1 : -1) : 0);
                m && (l = b / (c || 1) % m, w.opposite && (l = m - l - 1), f += w.labelOffset / m * l);
                return {
                    x: a,
                    y: Math.round(f)
                }
            },
            getMarkPath: function(a, f, h, d, e, n) {
                return n.crispLine(["M", a, f, "L", a + (e ? 0 : -h), f + (e ? h : 0)], d)
            },
            renderGridLine: function(a, f, h) {
                var d = this.axis,
                    e = d.options,
                    n = this.gridLine,
                    b = {},
                    c = this.pos,
                    w = this.type,
                    k = d.tickmarkOffset,
                    p = d.chart.renderer,
                    m = w ? w + "Grid" : "grid",
                    l = e[m + "LineWidth"],
                    y = e[m + "LineColor"],
                    e = e[m + "LineDashStyle"];
                n || (b.stroke = y, b["stroke-width"] = l, e && (b.dashstyle = e), w || (b.zIndex = 1), a && (b.opacity = 0), this.gridLine = n = p.path().attr(b).addClass("highcharts-" + (w ? w + "-" : "") + "grid-line").add(d.gridGroup));
                if (!a && n && (a = d.getPlotLinePath(c + k, n.strokeWidth() * h, a, !0))) n[this.isNew ? "attr" : "animate"]({
                    d: a,
                    opacity: f
                })
            },
            renderMark: function(a, h, l) {
                var d = this.axis,
                    e = d.options,
                    n = d.chart.renderer,
                    b = this.type,
                    c = b ? b + "Tick" : "tick",
                    w = d.tickSize(c),
                    k = this.mark,
                    p = !k,
                    m = a.x;
                a = a.y;
                var I = f(e[c + "Width"], !b && d.isXAxis ? 1 : 0),
                    e = e[c + "Color"];
                w && (d.opposite && (w[0] = -w[0]), p && (this.mark = k = n.path().addClass("highcharts-" + (b ? b + "-" : "") + "tick").add(d.axisGroup), k.attr({
                    stroke: e,
                    "stroke-width": I
                })), k[p ? "attr" : "animate"]({
                    d: this.getMarkPath(m, a, w[0], k.strokeWidth() * l, d.horiz, n),
                    opacity: h
                }))
            },
            renderLabel: function(a, h, l, d) {
                var e = this.axis,
                    n = e.horiz,
                    b = e.options,
                    c = this.label,
                    w = b.labels,
                    k = w.step,
                    p = e.tickmarkOffset,
                    m = !0,
                    I = a.x;
                a = a.y;
                c && F(I) && (c.xy = a = this.getLabelPosition(I, a, c, n, w, p, d, k), this.isFirst && !this.isLast && !f(b.showFirstLabel, 1) || this.isLast && !this.isFirst && !f(b.showLastLabel, 1) ? m = !1 : !n || e.isRadial || w.step || w.rotation || h || 0 === l || this.handleOverflow(a), k && d % k && (m = !1), m && F(a.y) ? (a.opacity = l, c[this.isNewLabel ? "attr" : "animate"](a), this.isNewLabel = !1) : (c.attr("y", -9999), this.isNewLabel = !0))
            },
            render: function(a, h, l) {
                var d = this.axis,
                    e = d.horiz,
                    n = this.getPosition(e, this.pos, d.tickmarkOffset, h),
                    b = n.x,
                    c = n.y,
                    d = e && b ===
                    d.pos + d.len || !e && c === d.pos ? -1 : 1;
                l = f(l, 1);
                this.isActive = !0;
                this.renderGridLine(h, l, d);
                this.renderMark(n, l, d);
                this.renderLabel(n, h, l, a);
                this.isNew = !1
            },
            destroy: function() {
                G(this, this.axis)
            }
        }
    })(N);
    var W = function(a) {
        var A = a.addEvent,
            B = a.animObject,
            G = a.arrayMax,
            F = a.arrayMin,
            l = a.color,
            f = a.correctFloat,
            h = a.defaultOptions,
            m = a.defined,
            r = a.deg2rad,
            v = a.destroyObjectProperties,
            d = a.each,
            e = a.extend,
            n = a.fireEvent,
            b = a.format,
            c = a.getMagnitude,
            w = a.grep,
            k = a.inArray,
            p = a.isArray,
            C = a.isNumber,
            I = a.isString,
            y = a.merge,
            K = a.normalizeTickInterval,
            q = a.objectEach,
            z = a.pick,
            J = a.removeEvent,
            t = a.splat,
            D = a.syncTimeout,
            E = a.Tick,
            H = function() {
                this.init.apply(this, arguments)
            };
        a.extend(H.prototype, {
            defaultOptions: {
                dateTimeLabelFormats: {
                    millisecond: "%H:%M:%S.%L",
                    second: "%H:%M:%S",
                    minute: "%H:%M",
                    hour: "%H:%M",
                    day: "%e. %b",
                    week: "%e. %b",
                    month: "%b '%y",
                    year: "%Y"
                },
                endOnTick: !1,
                labels: {
                    enabled: !0,
                    style: {
                        color: "#666666",
                        cursor: "default",
                        fontSize: "11px"
                    },
                    x: 0
                },
                minPadding: .01,
                maxPadding: .01,
                minorTickLength: 2,
                minorTickPosition: "outside",
                startOfWeek: 1,
                startOnTick: !1,
                tickLength: 10,
                tickmarkPlacement: "between",
                tickPixelInterval: 100,
                tickPosition: "outside",
                title: {
                    align: "middle",
                    style: {
                        color: "#666666"
                    }
                },
                type: "linear",
                minorGridLineColor: "#f2f2f2",
                minorGridLineWidth: 1,
                minorTickColor: "#999999",
                lineColor: "#ccd6eb",
                lineWidth: 1,
                gridLineColor: "#e6e6e6",
                tickColor: "#ccd6eb"
            },
            defaultYAxisOptions: {
                endOnTick: !0,
                tickPixelInterval: 72,
                showLastLabel: !0,
                labels: {
                    x: -8
                },
                maxPadding: .05,
                minPadding: .05,
                startOnTick: !0,
                title: {
                    rotation: 270,
                    text: "Values"
                },
                stackLabels: {
                    allowOverlap: !1,
                    enabled: !1,
                    formatter: function() {
                        return a.numberFormat(this.total, -1)
                    },
                    style: {
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: "#000000",
                        textOutline: "1px contrast"
                    }
                },
                gridLineWidth: 1,
                lineWidth: 0
            },
            defaultLeftAxisOptions: {
                labels: {
                    x: -15
                },
                title: {
                    rotation: 270
                }
            },
            defaultRightAxisOptions: {
                labels: {
                    x: 15
                },
                title: {
                    rotation: 90
                }
            },
            defaultBottomAxisOptions: {
                labels: {
                    autoRotation: [-45],
                    x: 0
                },
                title: {
                    rotation: 0
                }
            },
            defaultTopAxisOptions: {
                labels: {
                    autoRotation: [-45],
                    x: 0
                },
                title: {
                    rotation: 0
                }
            },
            init: function(a, u) {
                var g = u.isX,
                    c = this;
                c.chart = a;
                c.horiz =
                    a.inverted && !c.isZAxis ? !g : g;
                c.isXAxis = g;
                c.coll = c.coll || (g ? "xAxis" : "yAxis");
                c.opposite = u.opposite;
                c.side = u.side || (c.horiz ? c.opposite ? 0 : 2 : c.opposite ? 1 : 3);
                c.setOptions(u);
                var b = this.options,
                    d = b.type;
                c.labelFormatter = b.labels.formatter || c.defaultLabelFormatter;
                c.userOptions = u;
                c.minPixelPadding = 0;
                c.reversed = b.reversed;
                c.visible = !1 !== b.visible;
                c.zoomEnabled = !1 !== b.zoomEnabled;
                c.hasNames = "category" === d || !0 === b.categories;
                c.categories = b.categories || c.hasNames;
                c.names = c.names || [];
                c.plotLinesAndBandsGroups = {};
                c.isLog = "logarithmic" === d;
                c.isDatetimeAxis = "datetime" === d;
                c.positiveValuesOnly = c.isLog && !c.allowNegativeLog;
                c.isLinked = m(b.linkedTo);
                c.ticks = {};
                c.labelEdge = [];
                c.minorTicks = {};
                c.plotLinesAndBands = [];
                c.alternateBands = {};
                c.len = 0;
                c.minRange = c.userMinRange = b.minRange || b.maxZoom;
                c.range = b.range;
                c.offset = b.offset || 0;
                c.stacks = {};
                c.oldStacks = {};
                c.stacksTouched = 0;
                c.max = null;
                c.min = null;
                c.crosshair = z(b.crosshair, t(a.options.tooltip.crosshairs)[g ? 0 : 1], !1);
                u = c.options.events; - 1 === k(c, a.axes) && (g ? a.axes.splice(a.xAxis.length,
                    0, c) : a.axes.push(c), a[c.coll].push(c));
                c.series = c.series || [];
                a.inverted && !c.isZAxis && g && void 0 === c.reversed && (c.reversed = !0);
                q(u, function(a, g) {
                    A(c, g, a)
                });
                c.lin2log = b.linearToLogConverter || c.lin2log;
                c.isLog && (c.val2lin = c.log2lin, c.lin2val = c.lin2log)
            },
            setOptions: function(a) {
                this.options = y(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], y(h[this.coll], a))
            },
            defaultLabelFormatter: function() {
                var g = this.axis,
                    u = this.value,
                    c = g.categories,
                    d = this.dateTimeLabelFormat,
                    k = h.lang,
                    e = k.numericSymbols,
                    k = k.numericSymbolMagnitude || 1E3,
                    t = e && e.length,
                    p, f = g.options.labels.format,
                    g = g.isLog ? Math.abs(u) : g.tickInterval;
                if (f) p = b(f, this);
                else if (c) p = u;
                else if (d) p = a.dateFormat(d, u);
                else if (t && 1E3 <= g)
                    for (; t-- && void 0 === p;) c = Math.pow(k, t + 1), g >= c && 0 === 10 * u % c && null !== e[t] && 0 !== u && (p = a.numberFormat(u / c, -1) + e[t]);
                void 0 === p && (p = 1E4 <= Math.abs(u) ? a.numberFormat(u, -1) : a.numberFormat(u, -1, void 0, ""));
                return p
            },
            getSeriesExtremes: function() {
                var a = this,
                    u = a.chart;
                a.hasVisibleSeries = !1;
                a.dataMin = a.dataMax = a.threshold = null;
                a.softThreshold = !a.isXAxis;
                a.buildStacks && a.buildStacks();
                d(a.series, function(g) {
                    if (g.visible || !u.options.chart.ignoreHiddenSeries) {
                        var c = g.options,
                            b = c.threshold,
                            d;
                        a.hasVisibleSeries = !0;
                        a.positiveValuesOnly && 0 >= b && (b = null);
                        if (a.isXAxis) c = g.xData, c.length && (g = F(c), C(g) || g instanceof Date || (c = w(c, function(a) {
                            return C(a)
                        }), g = F(c)), a.dataMin = Math.min(z(a.dataMin, c[0]),
                            g), a.dataMax = Math.max(z(a.dataMax, c[0]), G(c)));
                        else if (g.getExtremes(), d = g.dataMax, g = g.dataMin, m(g) && m(d) && (a.dataMin = Math.min(z(a.dataMin, g), g), a.dataMax = Math.max(z(a.dataMax, d), d)), m(b) && (a.threshold = b), !c.softThreshold || a.positiveValuesOnly) a.softThreshold = !1
                    }
                })
            },
            translate: function(a, c, b, d, k, e) {
                var g = this.linkedParent || this,
                    u = 1,
                    t = 0,
                    p = d ? g.oldTransA : g.transA;
                d = d ? g.oldMin : g.min;
                var f = g.minPixelPadding;
                k = (g.isOrdinal || g.isBroken || g.isLog && k) && g.lin2val;
                p || (p = g.transA);
                b && (u *= -1, t = g.len);
                g.reversed &&
                    (u *= -1, t -= u * (g.sector || g.len));
                c ? (a = (a * u + t - f) / p + d, k && (a = g.lin2val(a))) : (k && (a = g.val2lin(a)), a = C(d) ? u * (a - d) * p + t + u * f + (C(e) ? p * e : 0) : void 0);
                return a
            },
            toPixels: function(a, c) {
                return this.translate(a, !1, !this.horiz, null, !0) + (c ? 0 : this.pos)
            },
            toValue: function(a, c) {
                return this.translate(a - (c ? 0 : this.pos), !0, !this.horiz, null, !0)
            },
            getPlotLinePath: function(a, c, b, d, k) {
                var g = this.chart,
                    u = this.left,
                    t = this.top,
                    e, p, f = b && g.oldChartHeight || g.chartHeight,
                    w = b && g.oldChartWidth || g.chartWidth,
                    q;
                e = this.transB;
                var n = function(a,
                    g, c) {
                    if (a < g || a > c) d ? a = Math.min(Math.max(g, a), c) : q = !0;
                    return a
                };
                k = z(k, this.translate(a, null, null, b));
                a = b = Math.round(k + e);
                e = p = Math.round(f - k - e);
                C(k) ? this.horiz ? (e = t, p = f - this.bottom, a = b = n(a, u, u + this.width)) : (a = u, b = w - this.right, e = p = n(e, t, t + this.height)) : (q = !0, d = !1);
                return q && !d ? null : g.renderer.crispLine(["M", a, e, "L", b, p], c || 1)
            },
            getLinearTickPositions: function(a, c, b) {
                var g, u = f(Math.floor(c / a) * a);
                b = f(Math.ceil(b / a) * a);
                var d = [];
                if (this.single) return [c];
                for (c = u; c <= b;) {
                    d.push(c);
                    c = f(c + a);
                    if (c === g) break;
                    g = c
                }
                return d
            },
            getMinorTickInterval: function() {
                var a = this.options;
                return !0 === a.minorTicks ? z(a.minorTickInterval, "auto") : !1 === a.minorTicks ? null : a.minorTickInterval
            },
            getMinorTickPositions: function() {
                var a = this,
                    c = a.options,
                    b = a.tickPositions,
                    k = a.minorTickInterval,
                    e = [],
                    t = a.pointRangePadding || 0,
                    p = a.min - t,
                    t = a.max + t,
                    f = t - p;
                if (f && f / k < a.len / 3)
                    if (a.isLog) d(this.paddedTicks, function(g, c, u) {
                        c && e.push.apply(e, a.getLogTickPositions(k, u[c - 1], u[c], !0))
                    });
                    else if (a.isDatetimeAxis && "auto" === this.getMinorTickInterval()) e = e.concat(a.getTimeTicks(a.normalizeTimeTickInterval(k),
                    p, t, c.startOfWeek));
                else
                    for (c = p + (b[0] - p) % k; c <= t && c !== e[0]; c += k) e.push(c);
                0 !== e.length && a.trimTicks(e);
                return e
            },
            adjustForMinRange: function() {
                var a = this.options,
                    c = this.min,
                    b = this.max,
                    k, e, t, p, f, w, q, n;
                this.isXAxis && void 0 === this.minRange && !this.isLog && (m(a.min) || m(a.max) ? this.minRange = null : (d(this.series, function(a) {
                    w = a.xData;
                    for (p = q = a.xIncrement ? 1 : w.length - 1; 0 < p; p--)
                        if (f = w[p] - w[p - 1], void 0 === t || f < t) t = f
                }), this.minRange = Math.min(5 * t, this.dataMax - this.dataMin)));
                b - c < this.minRange && (e = this.dataMax - this.dataMin >=
                    this.minRange, n = this.minRange, k = (n - b + c) / 2, k = [c - k, z(a.min, c - k)], e && (k[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin), c = G(k), b = [c + n, z(a.max, c + n)], e && (b[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax), b = F(b), b - c < n && (k[0] = b - n, k[1] = z(a.min, b - n), c = G(k)));
                this.min = c;
                this.max = b
            },
            getClosest: function() {
                var a;
                this.categories ? a = 1 : d(this.series, function(g) {
                    var c = g.closestPointRange,
                        u = g.visible || !g.chart.options.chart.ignoreHiddenSeries;
                    !g.noSharedTooltip && m(c) && u && (a = m(a) ? Math.min(a, c) : c)
                });
                return a
            },
            nameToX: function(a) {
                var g = p(this.categories),
                    c = g ? this.categories : this.names,
                    b = a.options.x,
                    d;
                a.series.requireSorting = !1;
                m(b) || (b = !1 === this.options.uniqueNames ? a.series.autoIncrement() : k(a.name, c)); - 1 === b ? g || (d = c.length) : d = b;
                void 0 !== d && (this.names[d] = a.name);
                return d
            },
            updateNames: function() {
                var a = this;
                0 < this.names.length && (this.names.length = 0, this.minRange = this.userMinRange, d(this.series || [], function(g) {
                    g.xIncrement = null;
                    if (!g.points || g.isDirtyData) g.processData(), g.generatePoints();
                    d(g.points, function(c,
                        u) {
                        var b;
                        c.options && (b = a.nameToX(c), void 0 !== b && b !== c.x && (c.x = b, g.xData[u] = b))
                    })
                }))
            },
            setAxisTranslation: function(a) {
                var g = this,
                    c = g.max - g.min,
                    b = g.axisPointRange || 0,
                    k, e = 0,
                    t = 0,
                    p = g.linkedParent,
                    f = !!g.categories,
                    w = g.transA,
                    n = g.isXAxis;
                if (n || f || b) k = g.getClosest(), p ? (e = p.minPointOffset, t = p.pointRangePadding) : d(g.series, function(a) {
                        var c = f ? 1 : n ? z(a.options.pointRange, k, 0) : g.axisPointRange || 0;
                        a = a.options.pointPlacement;
                        b = Math.max(b, c);
                        g.single || (e = Math.max(e, I(a) ? 0 : c / 2), t = Math.max(t, "on" === a ? 0 : c))
                    }), p = g.ordinalSlope &&
                    k ? g.ordinalSlope / k : 1, g.minPointOffset = e *= p, g.pointRangePadding = t *= p, g.pointRange = Math.min(b, c), n && (g.closestPointRange = k);
                a && (g.oldTransA = w);
                g.translationSlope = g.transA = w = g.options.staticScale || g.len / (c + t || 1);
                g.transB = g.horiz ? g.left : g.bottom;
                g.minPixelPadding = w * e
            },
            minFromRange: function() {
                return this.max - this.range
            },
            setTickInterval: function(g) {
                var b = this,
                    k = b.chart,
                    e = b.options,
                    t = b.isLog,
                    p = b.log2lin,
                    w = b.isDatetimeAxis,
                    q = b.isXAxis,
                    y = b.isLinked,
                    E = e.maxPadding,
                    D = e.minPadding,
                    h = e.tickInterval,
                    l = e.tickPixelInterval,
                    I = b.categories,
                    H = b.threshold,
                    r = b.softThreshold,
                    v, J, A, B;
                w || I || y || this.getTickAmount();
                A = z(b.userMin, e.min);
                B = z(b.userMax, e.max);
                y ? (b.linkedParent = k[b.coll][e.linkedTo], k = b.linkedParent.getExtremes(), b.min = z(k.min, k.dataMin), b.max = z(k.max, k.dataMax), e.type !== b.linkedParent.options.type && a.error(11, 1)) : (!r && m(H) && (b.dataMin >= H ? (v = H, D = 0) : b.dataMax <= H && (J = H, E = 0)), b.min = z(A, v, b.dataMin), b.max = z(B, J, b.dataMax));
                t && (b.positiveValuesOnly && !g && 0 >= Math.min(b.min, z(b.dataMin, b.min)) && a.error(10, 1), b.min = f(p(b.min),
                    15), b.max = f(p(b.max), 15));
                b.range && m(b.max) && (b.userMin = b.min = A = Math.max(b.dataMin, b.minFromRange()), b.userMax = B = b.max, b.range = null);
                n(b, "foundExtremes");
                b.beforePadding && b.beforePadding();
                b.adjustForMinRange();
                !(I || b.axisPointRange || b.usePercentage || y) && m(b.min) && m(b.max) && (p = b.max - b.min) && (!m(A) && D && (b.min -= p * D), !m(B) && E && (b.max += p * E));
                C(e.softMin) && (b.min = Math.min(b.min, e.softMin));
                C(e.softMax) && (b.max = Math.max(b.max, e.softMax));
                C(e.floor) && (b.min = Math.max(b.min, e.floor));
                C(e.ceiling) && (b.max =
                    Math.min(b.max, e.ceiling));
                r && m(b.dataMin) && (H = H || 0, !m(A) && b.min < H && b.dataMin >= H ? b.min = H : !m(B) && b.max > H && b.dataMax <= H && (b.max = H));
                b.tickInterval = b.min === b.max || void 0 === b.min || void 0 === b.max ? 1 : y && !h && l === b.linkedParent.options.tickPixelInterval ? h = b.linkedParent.tickInterval : z(h, this.tickAmount ? (b.max - b.min) / Math.max(this.tickAmount - 1, 1) : void 0, I ? 1 : (b.max - b.min) * l / Math.max(b.len, l));
                q && !g && d(b.series, function(a) {
                    a.processData(b.min !== b.oldMin || b.max !== b.oldMax)
                });
                b.setAxisTranslation(!0);
                b.beforeSetTickPositions &&
                    b.beforeSetTickPositions();
                b.postProcessTickInterval && (b.tickInterval = b.postProcessTickInterval(b.tickInterval));
                b.pointRange && !h && (b.tickInterval = Math.max(b.pointRange, b.tickInterval));
                g = z(e.minTickInterval, b.isDatetimeAxis && b.closestPointRange);
                !h && b.tickInterval < g && (b.tickInterval = g);
                w || t || h || (b.tickInterval = K(b.tickInterval, null, c(b.tickInterval), z(e.allowDecimals, !(.5 < b.tickInterval && 5 > b.tickInterval && 1E3 < b.max && 9999 > b.max)), !!this.tickAmount));
                this.tickAmount || (b.tickInterval = b.unsquish());
                this.setTickPositions()
            },
            setTickPositions: function() {
                var a = this.options,
                    b, c = a.tickPositions;
                b = this.getMinorTickInterval();
                var k = a.tickPositioner,
                    d = a.startOnTick,
                    e = a.endOnTick;
                this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0;
                this.minorTickInterval = "auto" === b && this.tickInterval ? this.tickInterval / 5 : b;
                this.single = this.min === this.max && m(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== a.allowDecimals);
                this.tickPositions = b = c && c.slice();
                !b && (b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), b.length > this.len && (b = [b[0], b.pop()]), this.tickPositions = b, k && (k = k.apply(this, [this.min, this.max]))) && (this.tickPositions = b = k);
                this.paddedTicks = b.slice(0);
                this.trimTicks(b, d, e);
                this.isLinked ||
                    (this.single && 2 > b.length && (this.min -= .5, this.max += .5), c || k || this.adjustTickAmount())
            },
            trimTicks: function(a, b, c) {
                var g = a[0],
                    k = a[a.length - 1],
                    d = this.minPointOffset || 0;
                if (!this.isLinked) {
                    if (b && -Infinity !== g) this.min = g;
                    else
                        for (; this.min - d > a[0];) a.shift();
                    if (c) this.max = k;
                    else
                        for (; this.max + d < a[a.length - 1];) a.pop();
                    0 === a.length && m(g) && a.push((k + g) / 2)
                }
            },
            alignToOthers: function() {
                var a = {},
                    b, c = this.options;
                !1 === this.chart.options.chart.alignTicks || !1 === c.alignTicks || this.isLog || d(this.chart[this.coll], function(g) {
                    var c =
                        g.options,
                        c = [g.horiz ? c.left : c.top, c.width, c.height, c.pane].join();
                    g.series.length && (a[c] ? b = !0 : a[c] = 1)
                });
                return b
            },
            getTickAmount: function() {
                var a = this.options,
                    b = a.tickAmount,
                    c = a.tickPixelInterval;
                !m(a.tickInterval) && this.len < c && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick && (b = 2);
                !b && this.alignToOthers() && (b = Math.ceil(this.len / c) + 1);
                4 > b && (this.finalTickAmt = b, b = 5);
                this.tickAmount = b
            },
            adjustTickAmount: function() {
                var a = this.tickInterval,
                    b = this.tickPositions,
                    c = this.tickAmount,
                    k = this.finalTickAmt,
                    d = b && b.length;
                if (d < c) {
                    for (; b.length < c;) b.push(f(b[b.length - 1] + a));
                    this.transA *= (d - 1) / (c - 1);
                    this.max = b[b.length - 1]
                } else d > c && (this.tickInterval *= 2, this.setTickPositions());
                if (m(k)) {
                    for (a = c = b.length; a--;)(3 === k && 1 === a % 2 || 2 >= k && 0 < a && a < c - 1) && b.splice(a, 1);
                    this.finalTickAmt = void 0
                }
            },
            setScale: function() {
                var a, b;
                this.oldMin = this.min;
                this.oldMax = this.max;
                this.oldAxisLength = this.len;
                this.setAxisSize();
                b = this.len !== this.oldAxisLength;
                d(this.series, function(g) {
                    if (g.isDirtyData || g.isDirty || g.xAxis.isDirty) a = !0
                });
                b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks()
            },
            setExtremes: function(a, b, c, k, t) {
                var g = this,
                    u = g.chart;
                c = z(c, !0);
                d(g.series, function(a) {
                    delete a.kdTree
                });
                t = e(t, {
                    min: a,
                    max: b
                });
                n(g, "setExtremes", t, function() {
                    g.userMin = a;
                    g.userMax = b;
                    g.eventArgs = t;
                    c && u.redraw(k)
                })
            },
            zoom: function(a, b) {
                var g = this.dataMin,
                    c = this.dataMax,
                    k = this.options,
                    d = Math.min(g, z(k.min, g)),
                    k = Math.max(c, z(k.max, c));
                if (a !== this.min || b !== this.max) this.allowZoomOutside || (m(g) && (a < d && (a = d), a > k && (a = k)), m(c) && (b < d && (b = d), b > k && (b = k))), this.displayBtn = void 0 !== a || void 0 !== b, this.setExtremes(a, b, !1, void 0, {
                    trigger: "zoom"
                });
                return !0
            },
            setAxisSize: function() {
                var b = this.chart,
                    c = this.options,
                    k = c.offsets || [0, 0, 0, 0],
                    d = this.horiz,
                    e = this.width = Math.round(a.relativeLength(z(c.width, b.plotWidth - k[3] + k[1]), b.plotWidth)),
                    t = this.height = Math.round(a.relativeLength(z(c.height, b.plotHeight - k[0] + k[2]), b.plotHeight)),
                    p = this.top = Math.round(a.relativeLength(z(c.top, b.plotTop + k[0]), b.plotHeight, b.plotTop)),
                    c = this.left = Math.round(a.relativeLength(z(c.left, b.plotLeft + k[3]), b.plotWidth, b.plotLeft));
                this.bottom = b.chartHeight - t - p;
                this.right = b.chartWidth - e - c;
                this.len = Math.max(d ? e : t, 0);
                this.pos = d ? c : p
            },
            getExtremes: function() {
                var a =
                    this.isLog,
                    b = this.lin2log;
                return {
                    min: a ? f(b(this.min)) : this.min,
                    max: a ? f(b(this.max)) : this.max,
                    dataMin: this.dataMin,
                    dataMax: this.dataMax,
                    userMin: this.userMin,
                    userMax: this.userMax
                }
            },
            getThreshold: function(a) {
                var b = this.isLog,
                    c = this.lin2log,
                    g = b ? c(this.min) : this.min,
                    b = b ? c(this.max) : this.max;
                null === a ? a = g : g > a ? a = g : b < a && (a = b);
                return this.translate(a, 0, 1, 0, 1)
            },
            autoLabelAlign: function(a) {
                a = (z(a, 0) - 90 * this.side + 720) % 360;
                return 15 < a && 165 > a ? "right" : 195 < a && 345 > a ? "left" : "center"
            },
            tickSize: function(a) {
                var b = this.options,
                    c = b[a + "Length"],
                    g = z(b[a + "Width"], "tick" === a && this.isXAxis ? 1 : 0);
                if (g && c) return "inside" === b[a + "Position"] && (c = -c), [c, g]
            },
            labelMetrics: function() {
                var a = this.tickPositions && this.tickPositions[0] || 0;
                return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[a] && this.ticks[a].label)
            },
            unsquish: function() {
                var a = this.options.labels,
                    b = this.horiz,
                    c = this.tickInterval,
                    k = c,
                    e = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / c),
                    t, p = a.rotation,
                    f = this.labelMetrics(),
                    w, n = Number.MAX_VALUE,
                    q, y = function(a) {
                        a /= e || 1;
                        a = 1 < a ? Math.ceil(a) : 1;
                        return a * c
                    };
                b ? (q = !a.staggerLines && !a.step && (m(p) ? [p] : e < z(a.autoRotationLimit, 80) && a.autoRotation)) && d(q, function(a) {
                    var b;
                    if (a === p || a && -90 <= a && 90 >= a) w = y(Math.abs(f.h / Math.sin(r * a))), b = w + Math.abs(a / 360), b < n && (n = b, t = a, k = w)
                }) : a.step || (k = y(f.h));
                this.autoRotation = q;
                this.labelRotation = z(t, p);
                return k
            },
            getSlotWidth: function() {
                var a = this.chart,
                    b = this.horiz,
                    c = this.options.labels,
                    k = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
                    d = a.margin[3];
                return b && 2 > (c.step || 0) && !c.rotation && (this.staggerLines || 1) * this.len / k || !b && (c.style && parseInt(c.style.width, 10) || d && d - a.spacing[3] || .33 * a.chartWidth)
            },
            renderUnsquish: function() {
                var a = this.chart,
                    b = a.renderer,
                    c = this.tickPositions,
                    k = this.ticks,
                    e = this.options.labels,
                    t = this.horiz,
                    p = this.getSlotWidth(),
                    f = Math.max(1, Math.round(p - 2 * (e.padding || 5))),
                    w = {},
                    n = this.labelMetrics(),
                    q = e.style && e.style.textOverflow,
                    E, D = 0,
                    h, m;
                I(e.rotation) || (w.rotation = e.rotation || 0);
                d(c, function(a) {
                    (a = k[a]) && a.labelLength >
                        D && (D = a.labelLength)
                });
                this.maxLabelLength = D;
                if (this.autoRotation) D > f && D > n.h ? w.rotation = this.labelRotation : this.labelRotation = 0;
                else if (p && (E = {
                        width: f + "px"
                    }, !q))
                    for (E.textOverflow = "clip", h = c.length; !t && h--;)
                        if (m = c[h], f = k[m].label) f.styles && "ellipsis" === f.styles.textOverflow ? f.css({
                            textOverflow: "clip"
                        }) : k[m].labelLength > p && f.css({
                            width: p + "px"
                        }), f.getBBox().height > this.len / c.length - (n.h - n.f) && (f.specCss = {
                            textOverflow: "ellipsis"
                        });
                w.rotation && (E = {
                    width: (D > .5 * a.chartHeight ? .33 * a.chartHeight : a.chartHeight) +
                        "px"
                }, q || (E.textOverflow = "ellipsis"));
                if (this.labelAlign = e.align || this.autoLabelAlign(this.labelRotation)) w.align = this.labelAlign;
                d(c, function(a) {
                    var b = (a = k[a]) && a.label;
                    b && (b.attr(w), E && b.css(y(E, b.specCss)), delete b.specCss, a.rotation = w.rotation)
                });
                this.tickRotCorr = b.rotCorr(n.b, this.labelRotation || 0, 0 !== this.side)
            },
            hasData: function() {
                return this.hasVisibleSeries || m(this.min) && m(this.max) && !!this.tickPositions
            },
            addTitle: function(a) {
                var b = this.chart.renderer,
                    c = this.horiz,
                    g = this.opposite,
                    k = this.options.title,
                    d;
                this.axisTitle || ((d = k.textAlign) || (d = (c ? {
                    low: "left",
                    middle: "center",
                    high: "right"
                } : {
                    low: g ? "right" : "left",
                    middle: "center",
                    high: g ? "left" : "right"
                })[k.align]), this.axisTitle = b.text(k.text, 0, 0, k.useHTML).attr({
                    zIndex: 7,
                    rotation: k.rotation || 0,
                    align: d
                }).addClass("highcharts-axis-title").css(k.style).add(this.axisGroup), this.axisTitle.isNew = !0);
                k.style.width || this.isRadial || this.axisTitle.css({
                    width: this.len
                });
                this.axisTitle[a ? "show" : "hide"](!0)
            },
            generateTick: function(a) {
                var b = this.ticks;
                b[a] ? b[a].addLabel() :
                    b[a] = new E(this, a)
            },
            getOffset: function() {
                var a = this,
                    b = a.chart,
                    c = b.renderer,
                    k = a.options,
                    e = a.tickPositions,
                    t = a.ticks,
                    p = a.horiz,
                    f = a.side,
                    w = b.inverted && !a.isZAxis ? [1, 0, 3, 2][f] : f,
                    n, y, E = 0,
                    D, h = 0,
                    C = k.title,
                    l = k.labels,
                    I = 0,
                    H = b.axisOffset,
                    b = b.clipOffset,
                    r = [-1, 1, 1, -1][f],
                    v = k.className,
                    K = a.axisParent,
                    J = this.tickSize("tick");
                n = a.hasData();
                a.showAxis = y = n || z(k.showEmpty, !0);
                a.staggerLines = a.horiz && l.staggerLines;
                a.axisGroup || (a.gridGroup = c.g("grid").attr({
                    zIndex: k.gridZIndex || 1
                }).addClass("highcharts-" + this.coll.toLowerCase() +
                    "-grid " + (v || "")).add(K), a.axisGroup = c.g("axis").attr({
                    zIndex: k.zIndex || 2
                }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (v || "")).add(K), a.labelGroup = c.g("axis-labels").attr({
                    zIndex: l.zIndex || 7
                }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels " + (v || "")).add(K));
                n || a.isLinked ? (d(e, function(b, c) {
                        a.generateTick(b, c)
                    }), a.renderUnsquish(), !1 === l.reserveSpace || 0 !== f && 2 !== f && {
                        1: "left",
                        3: "right"
                    }[f] !== a.labelAlign && "center" !== a.labelAlign || d(e, function(a) {
                        I = Math.max(t[a].getLabelSize(), I)
                    }), a.staggerLines &&
                    (I *= a.staggerLines, a.labelOffset = I * (a.opposite ? -1 : 1))) : q(t, function(a, b) {
                    a.destroy();
                    delete t[b]
                });
                C && C.text && !1 !== C.enabled && (a.addTitle(y), y && !1 !== C.reserveSpace && (a.titleOffset = E = a.axisTitle.getBBox()[p ? "height" : "width"], D = C.offset, h = m(D) ? 0 : z(C.margin, p ? 5 : 10)));
                a.renderLine();
                a.offset = r * z(k.offset, H[f]);
                a.tickRotCorr = a.tickRotCorr || {
                    x: 0,
                    y: 0
                };
                c = 0 === f ? -a.labelMetrics().h : 2 === f ? a.tickRotCorr.y : 0;
                h = Math.abs(I) + h;
                I && (h = h - c + r * (p ? z(l.y, a.tickRotCorr.y + 8 * r) : l.x));
                a.axisTitleMargin = z(D, h);
                H[f] = Math.max(H[f],
                    a.axisTitleMargin + E + r * a.offset, h, n && e.length && J ? J[0] + r * a.offset : 0);
                k = k.offset ? 0 : 2 * Math.floor(a.axisLine.strokeWidth() / 2);
                b[w] = Math.max(b[w], k)
            },
            getLinePath: function(a) {
                var b = this.chart,
                    c = this.opposite,
                    g = this.offset,
                    k = this.horiz,
                    d = this.left + (c ? this.width : 0) + g,
                    g = b.chartHeight - this.bottom - (c ? this.height : 0) + g;
                c && (a *= -1);
                return b.renderer.crispLine(["M", k ? this.left : d, k ? g : this.top, "L", k ? b.chartWidth - this.right : d, k ? g : b.chartHeight - this.bottom], a)
            },
            renderLine: function() {
                this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
                    this.axisLine.attr({
                        stroke: this.options.lineColor,
                        "stroke-width": this.options.lineWidth,
                        zIndex: 7
                    }))
            },
            getTitlePosition: function() {
                var a = this.horiz,
                    b = this.left,
                    c = this.top,
                    k = this.len,
                    d = this.options.title,
                    e = a ? b : c,
                    t = this.opposite,
                    p = this.offset,
                    f = d.x || 0,
                    w = d.y || 0,
                    n = this.axisTitle,
                    q = this.chart.renderer.fontMetrics(d.style && d.style.fontSize, n),
                    n = Math.max(n.getBBox(null, 0).height - q.h - 1, 0),
                    k = {
                        low: e + (a ? 0 : k),
                        middle: e + k / 2,
                        high: e + (a ? k : 0)
                    }[d.align],
                    b = (a ? c + this.height : b) + (a ? 1 : -1) * (t ? -1 : 1) * this.axisTitleMargin + [-n,
                        n, q.f, -n
                    ][this.side];
                return {
                    x: a ? k + f : b + (t ? this.width : 0) + p + f,
                    y: a ? b + w - (t ? this.height : 0) + p : k + w
                }
            },
            renderMinorTick: function(a) {
                var b = this.chart.hasRendered && C(this.oldMin),
                    c = this.minorTicks;
                c[a] || (c[a] = new E(this, a, "minor"));
                b && c[a].isNew && c[a].render(null, !0);
                c[a].render(null, !1, 1)
            },
            renderTick: function(a, b) {
                var c = this.isLinked,
                    g = this.ticks,
                    k = this.chart.hasRendered && C(this.oldMin);
                if (!c || a >= this.min && a <= this.max) g[a] || (g[a] = new E(this, a)), k && g[a].isNew && g[a].render(b, !0, .1), g[a].render(b)
            },
            render: function() {
                var b =
                    this,
                    c = b.chart,
                    k = b.options,
                    e = b.isLog,
                    t = b.lin2log,
                    p = b.isLinked,
                    f = b.tickPositions,
                    w = b.axisTitle,
                    n = b.ticks,
                    y = b.minorTicks,
                    h = b.alternateBands,
                    m = k.stackLabels,
                    l = k.alternateGridColor,
                    z = b.tickmarkOffset,
                    I = b.axisLine,
                    H = b.showAxis,
                    r = B(c.renderer.globalAnimation),
                    v, K;
                b.labelEdge.length = 0;
                b.overlap = !1;
                d([n, y, h], function(a) {
                    q(a, function(a) {
                        a.isActive = !1
                    })
                });
                if (b.hasData() || p) b.minorTickInterval && !b.categories && d(b.getMinorTickPositions(), function(a) {
                    b.renderMinorTick(a)
                }), f.length && (d(f, function(a, c) {
                    b.renderTick(a,
                        c)
                }), z && (0 === b.min || b.single) && (n[-1] || (n[-1] = new E(b, -1, null, !0)), n[-1].render(-1))), l && d(f, function(g, k) {
                    K = void 0 !== f[k + 1] ? f[k + 1] + z : b.max - z;
                    0 === k % 2 && g < b.max && K <= b.max + (c.polar ? -z : z) && (h[g] || (h[g] = new a.PlotLineOrBand(b)), v = g + z, h[g].options = {
                        from: e ? t(v) : v,
                        to: e ? t(K) : K,
                        color: l
                    }, h[g].render(), h[g].isActive = !0)
                }), b._addedPlotLB || (d((k.plotLines || []).concat(k.plotBands || []), function(a) {
                    b.addPlotBandOrLine(a)
                }), b._addedPlotLB = !0);
                d([n, y, h], function(a) {
                    var b, g = [],
                        k = r.duration;
                    q(a, function(a, b) {
                        a.isActive ||
                            (a.render(b, !1, 0), a.isActive = !1, g.push(b))
                    });
                    D(function() {
                        for (b = g.length; b--;) a[g[b]] && !a[g[b]].isActive && (a[g[b]].destroy(), delete a[g[b]])
                    }, a !== h && c.hasRendered && k ? k : 0)
                });
                I && (I[I.isPlaced ? "animate" : "attr"]({
                    d: this.getLinePath(I.strokeWidth())
                }), I.isPlaced = !0, I[H ? "show" : "hide"](!0));
                w && H && (k = b.getTitlePosition(), C(k.y) ? (w[w.isNew ? "attr" : "animate"](k), w.isNew = !1) : (w.attr("y", -9999), w.isNew = !0));
                m && m.enabled && b.renderStackTotals();
                b.isDirty = !1
            },
            redraw: function() {
                this.visible && (this.render(), d(this.plotLinesAndBands,
                    function(a) {
                        a.render()
                    }));
                d(this.series, function(a) {
                    a.isDirty = !0
                })
            },
            keepProps: "extKey hcEvents names series userMax userMin".split(" "),
            destroy: function(a) {
                var b = this,
                    c = b.stacks,
                    g = b.plotLinesAndBands,
                    e;
                a || J(b);
                q(c, function(a, b) {
                    v(a);
                    c[b] = null
                });
                d([b.ticks, b.minorTicks, b.alternateBands], function(a) {
                    v(a)
                });
                if (g)
                    for (a = g.length; a--;) g[a].destroy();
                d("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "), function(a) {
                    b[a] && (b[a] = b[a].destroy())
                });
                for (e in b.plotLinesAndBandsGroups) b.plotLinesAndBandsGroups[e] =
                    b.plotLinesAndBandsGroups[e].destroy();
                q(b, function(a, c) {
                    -1 === k(c, b.keepProps) && delete b[c]
                })
            },
            drawCrosshair: function(a, b) {
                var c, g = this.crosshair,
                    k = z(g.snap, !0),
                    d, e = this.cross;
                a || (a = this.cross && this.cross.e);
                this.crosshair && !1 !== (m(b) || !k) ? (k ? m(b) && (d = this.isXAxis ? b.plotX : this.len - b.plotY) : d = a && (this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos), m(d) && (c = this.getPlotLinePath(b && (this.isXAxis ? b.x : z(b.stackY, b.y)), null, null, null, d) || null), m(c) ? (b = this.categories && !this.isRadial, e || (this.cross =
                    e = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (b ? "category " : "thin ") + g.className).attr({
                        zIndex: z(g.zIndex, 2)
                    }).add(), e.attr({
                        stroke: g.color || (b ? l("#ccd6eb").setOpacity(.25).get() : "#cccccc"),
                        "stroke-width": z(g.width, 1)
                    }).css({
                        "pointer-events": "none"
                    }), g.dashStyle && e.attr({
                        dashstyle: g.dashStyle
                    })), e.show().attr({
                    d: c
                }), b && !g.width && e.attr({
                    "stroke-width": this.transA
                }), this.cross.e = a) : this.hideCrosshair()) : this.hideCrosshair()
            },
            hideCrosshair: function() {
                this.cross &&
                    this.cross.hide()
            }
        });
        return a.Axis = H
    }(N);
    (function(a) {
        var A = a.Axis,
            B = a.Date,
            G = a.dateFormat,
            F = a.defaultOptions,
            l = a.defined,
            f = a.each,
            h = a.extend,
            m = a.getMagnitude,
            r = a.getTZOffset,
            v = a.normalizeTickInterval,
            d = a.pick,
            e = a.timeUnits;
        A.prototype.getTimeTicks = function(a, b, c, w) {
            var k = [],
                p = {},
                n = F.global.useUTC,
                m, y = new B(b - Math.max(r(b), r(c))),
                v = B.hcMakeTime,
                q = a.unitRange,
                z = a.count,
                J, t;
            if (l(b)) {
                y[B.hcSetMilliseconds](q >= e.second ? 0 : z * Math.floor(y.getMilliseconds() / z));
                if (q >= e.second) y[B.hcSetSeconds](q >= e.minute ?
                    0 : z * Math.floor(y.getSeconds() / z));
                if (q >= e.minute) y[B.hcSetMinutes](q >= e.hour ? 0 : z * Math.floor(y[B.hcGetMinutes]() / z));
                if (q >= e.hour) y[B.hcSetHours](q >= e.day ? 0 : z * Math.floor(y[B.hcGetHours]() / z));
                if (q >= e.day) y[B.hcSetDate](q >= e.month ? 1 : z * Math.floor(y[B.hcGetDate]() / z));
                q >= e.month && (y[B.hcSetMonth](q >= e.year ? 0 : z * Math.floor(y[B.hcGetMonth]() / z)), m = y[B.hcGetFullYear]());
                if (q >= e.year) y[B.hcSetFullYear](m - m % z);
                if (q === e.week) y[B.hcSetDate](y[B.hcGetDate]() - y[B.hcGetDay]() + d(w, 1));
                m = y[B.hcGetFullYear]();
                w = y[B.hcGetMonth]();
                var D = y[B.hcGetDate](),
                    E = y[B.hcGetHours]();
                if (B.hcTimezoneOffset || B.hcGetTimezoneOffset) t = (!n || !!B.hcGetTimezoneOffset) && (c - b > 4 * e.month || r(b) !== r(c)), y = y.getTime(), J = r(y), y = new B(y + J);
                n = y.getTime();
                for (b = 1; n < c;) k.push(n), n = q === e.year ? v(m + b * z, 0) : q === e.month ? v(m, w + b * z) : !t || q !== e.day && q !== e.week ? t && q === e.hour ? v(m, w, D, E + b * z, 0, 0, J) - J : n + q * z : v(m, w, D + b * z * (q === e.day ? 1 : 7)), b++;
                k.push(n);
                q <= e.hour && 1E4 > k.length && f(k, function(a) {
                    0 === a % 18E5 && "000000000" === G("%H%M%S%L", a) && (p[a] = "day")
                })
            }
            k.info = h(a, {
                higherRanks: p,
                totalRange: q * z
            });
            return k
        };
        A.prototype.normalizeTimeTickInterval = function(a, b) {
            var c = b || [
                ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                ["second", [1, 2, 5, 10, 15, 30]],
                ["minute", [1, 2, 5, 10, 15, 30]],
                ["hour", [1, 2, 3, 4, 6, 8, 12]],
                ["day", [1, 2]],
                ["week", [1, 2]],
                ["month", [1, 2, 3, 4, 6]],
                ["year", null]
            ];
            b = c[c.length - 1];
            var d = e[b[0]],
                k = b[1],
                p;
            for (p = 0; p < c.length && !(b = c[p], d = e[b[0]], k = b[1], c[p + 1] && a <= (d * k[k.length - 1] + e[c[p + 1][0]]) / 2); p++);
            d === e.year && a < 5 * d && (k = [1, 2, 5]);
            a = v(a / d, k, "year" === b[0] ? Math.max(m(a / d), 1) : 1);
            return {
                unitRange: d,
                count: a,
                unitName: b[0]
            }
        }
    })(N);
    (function(a) {
        var A = a.Axis,
            B = a.getMagnitude,
            G = a.map,
            F = a.normalizeTickInterval,
            l = a.pick;
        A.prototype.getLogTickPositions = function(a, h, m, r) {
            var f = this.options,
                d = this.len,
                e = this.lin2log,
                n = this.log2lin,
                b = [];
            r || (this._minorAutoInterval = null);
            if (.5 <= a) a = Math.round(a), b = this.getLinearTickPositions(a, h, m);
            else if (.08 <= a)
                for (var d = Math.floor(h), c, w, k, p, C, f = .3 < a ? [1, 2, 4] : .15 < a ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; d < m + 1 && !C; d++)
                    for (w = f.length, c = 0; c < w && !C; c++) k = n(e(d) * f[c]), k > h && (!r || p <=
                        m) && void 0 !== p && b.push(p), p > m && (C = !0), p = k;
            else h = e(h), m = e(m), a = r ? this.getMinorTickInterval() : f.tickInterval, a = l("auto" === a ? null : a, this._minorAutoInterval, f.tickPixelInterval / (r ? 5 : 1) * (m - h) / ((r ? d / this.tickPositions.length : d) || 1)), a = F(a, null, B(a)), b = G(this.getLinearTickPositions(a, h, m), n), r || (this._minorAutoInterval = a / 5);
            r || (this.tickInterval = a);
            return b
        };
        A.prototype.log2lin = function(a) {
            return Math.log(a) / Math.LN10
        };
        A.prototype.lin2log = function(a) {
            return Math.pow(10, a)
        }
    })(N);
    (function(a, A) {
        var B = a.arrayMax,
            G = a.arrayMin,
            F = a.defined,
            l = a.destroyObjectProperties,
            f = a.each,
            h = a.erase,
            m = a.merge,
            r = a.pick;
        a.PlotLineOrBand = function(a, d) {
            this.axis = a;
            d && (this.options = d, this.id = d.id)
        };
        a.PlotLineOrBand.prototype = {
            render: function() {
                var f = this,
                    d = f.axis,
                    e = d.horiz,
                    n = f.options,
                    b = n.label,
                    c = f.label,
                    w = n.to,
                    k = n.from,
                    p = n.value,
                    h = F(k) && F(w),
                    l = F(p),
                    y = f.svgElem,
                    K = !y,
                    q = [],
                    z = n.color,
                    J = r(n.zIndex, 0),
                    t = n.events,
                    q = {
                        "class": "highcharts-plot-" + (h ? "band " : "line ") + (n.className || "")
                    },
                    D = {},
                    E = d.chart.renderer,
                    H = h ? "bands" : "lines",
                    g = d.log2lin;
                d.isLog && (k = g(k), w = g(w), p = g(p));
                l ? (q = {
                    stroke: z,
                    "stroke-width": n.width
                }, n.dashStyle && (q.dashstyle = n.dashStyle)) : h && (z && (q.fill = z), n.borderWidth && (q.stroke = n.borderColor, q["stroke-width"] = n.borderWidth));
                D.zIndex = J;
                H += "-" + J;
                (z = d.plotLinesAndBandsGroups[H]) || (d.plotLinesAndBandsGroups[H] = z = E.g("plot-" + H).attr(D).add());
                K && (f.svgElem = y = E.path().attr(q).add(z));
                if (l) q = d.getPlotLinePath(p, y.strokeWidth());
                else if (h) q = d.getPlotBandPath(k, w, n);
                else return;
                K && q && q.length ? (y.attr({
                    d: q
                }), t && a.objectEach(t, function(a,
                    b) {
                    y.on(b, function(a) {
                        t[b].apply(f, [a])
                    })
                })) : y && (q ? (y.show(), y.animate({
                    d: q
                })) : (y.hide(), c && (f.label = c = c.destroy())));
                b && F(b.text) && q && q.length && 0 < d.width && 0 < d.height && !q.flat ? (b = m({
                    align: e && h && "center",
                    x: e ? !h && 4 : 10,
                    verticalAlign: !e && h && "middle",
                    y: e ? h ? 16 : 10 : h ? 6 : -4,
                    rotation: e && !h && 90
                }, b), this.renderLabel(b, q, h, J)) : c && c.hide();
                return f
            },
            renderLabel: function(a, d, e, f) {
                var b = this.label,
                    c = this.axis.chart.renderer;
                b || (b = {
                    align: a.textAlign || a.align,
                    rotation: a.rotation,
                    "class": "highcharts-plot-" + (e ? "band" :
                        "line") + "-label " + (a.className || "")
                }, b.zIndex = f, this.label = b = c.text(a.text, 0, 0, a.useHTML).attr(b).add(), b.css(a.style));
                f = d.xBounds || [d[1], d[4], e ? d[6] : d[1]];
                d = d.yBounds || [d[2], d[5], e ? d[7] : d[2]];
                e = G(f);
                c = G(d);
                b.align(a, !1, {
                    x: e,
                    y: c,
                    width: B(f) - e,
                    height: B(d) - c
                });
                b.show()
            },
            destroy: function() {
                h(this.axis.plotLinesAndBands, this);
                delete this.axis;
                l(this)
            }
        };
        a.extend(A.prototype, {
            getPlotBandPath: function(a, d) {
                var e = this.getPlotLinePath(d, null, null, !0),
                    f = this.getPlotLinePath(a, null, null, !0),
                    b = this.horiz,
                    c = 1;
                a = a < this.min && d < this.min || a > this.max && d > this.max;
                f && e ? (a && (f.flat = f.toString() === e.toString(), c = 0), f.push(b && e[4] === f[4] ? e[4] + c : e[4], b || e[5] !== f[5] ? e[5] : e[5] + c, b && e[1] === f[1] ? e[1] + c : e[1], b || e[2] !== f[2] ? e[2] : e[2] + c, "z")) : f = null;
                return f
            },
            addPlotBand: function(a) {
                return this.addPlotBandOrLine(a, "plotBands")
            },
            addPlotLine: function(a) {
                return this.addPlotBandOrLine(a, "plotLines")
            },
            addPlotBandOrLine: function(f, d) {
                var e = (new a.PlotLineOrBand(this, f)).render(),
                    n = this.userOptions;
                e && (d && (n[d] = n[d] || [], n[d].push(f)),
                    this.plotLinesAndBands.push(e));
                return e
            },
            removePlotBandOrLine: function(a) {
                for (var d = this.plotLinesAndBands, e = this.options, n = this.userOptions, b = d.length; b--;) d[b].id === a && d[b].destroy();
                f([e.plotLines || [], n.plotLines || [], e.plotBands || [], n.plotBands || []], function(c) {
                    for (b = c.length; b--;) c[b].id === a && h(c, c[b])
                })
            },
            removePlotBand: function(a) {
                this.removePlotBandOrLine(a)
            },
            removePlotLine: function(a) {
                this.removePlotBandOrLine(a)
            }
        })
    })(N, W);
    (function(a) {
        var A = a.dateFormat,
            B = a.each,
            G = a.extend,
            F = a.format,
            l = a.isNumber,
            f = a.map,
            h = a.merge,
            m = a.pick,
            r = a.splat,
            v = a.syncTimeout,
            d = a.timeUnits;
        a.Tooltip = function() {
            this.init.apply(this, arguments)
        };
        a.Tooltip.prototype = {
            init: function(a, d) {
                this.chart = a;
                this.options = d;
                this.crosshairs = [];
                this.now = {
                    x: 0,
                    y: 0
                };
                this.isHidden = !0;
                this.split = d.split && !a.inverted;
                this.shared = d.shared || this.split
            },
            cleanSplit: function(a) {
                B(this.chart.series, function(d) {
                    var b = d && d.tt;
                    b && (!b.isActive || a ? d.tt = b.destroy() : b.isActive = !1)
                })
            },
            getLabel: function() {
                var a = this.chart.renderer,
                    d = this.options;
                this.label ||
                    (this.split ? this.label = a.g("tooltip") : (this.label = a.label("", 0, 0, d.shape || "callout", null, null, d.useHTML, null, "tooltip").attr({
                        padding: d.padding,
                        r: d.borderRadius
                    }), this.label.attr({
                        fill: d.backgroundColor,
                        "stroke-width": d.borderWidth
                    }).css(d.style).shadow(d.shadow)), this.label.attr({
                        zIndex: 8
                    }).add());
                return this.label
            },
            update: function(a) {
                this.destroy();
                h(!0, this.chart.options.tooltip.userOptions, a);
                this.init(this.chart, h(!0, this.options, a))
            },
            destroy: function() {
                this.label && (this.label = this.label.destroy());
                this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy());
                clearTimeout(this.hideTimer);
                clearTimeout(this.tooltipTimeout)
            },
            move: function(a, d, b, c) {
                var e = this,
                    k = e.now,
                    p = !1 !== e.options.animation && !e.isHidden && (1 < Math.abs(a - k.x) || 1 < Math.abs(d - k.y)),
                    f = e.followPointer || 1 < e.len;
                G(k, {
                    x: p ? (2 * k.x + a) / 3 : a,
                    y: p ? (k.y + d) / 2 : d,
                    anchorX: f ? void 0 : p ? (2 * k.anchorX + b) / 3 : b,
                    anchorY: f ? void 0 : p ? (k.anchorY + c) / 2 : c
                });
                e.getLabel().attr(k);
                p && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                    e &&
                        e.move(a, d, b, c)
                }, 32))
            },
            hide: function(a) {
                var d = this;
                clearTimeout(this.hideTimer);
                a = m(a, this.options.hideDelay, 500);
                this.isHidden || (this.hideTimer = v(function() {
                    d.getLabel()[a ? "fadeOut" : "hide"]();
                    d.isHidden = !0
                }, a))
            },
            getAnchor: function(a, d) {
                var b, c = this.chart,
                    e = c.inverted,
                    k = c.plotTop,
                    p = c.plotLeft,
                    n = 0,
                    h = 0,
                    y, m;
                a = r(a);
                b = a[0].tooltipPos;
                this.followPointer && d && (void 0 === d.chartX && (d = c.pointer.normalize(d)), b = [d.chartX - c.plotLeft, d.chartY - k]);
                b || (B(a, function(a) {
                    y = a.series.yAxis;
                    m = a.series.xAxis;
                    n += a.plotX +
                        (!e && m ? m.left - p : 0);
                    h += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && y ? y.top - k : 0)
                }), n /= a.length, h /= a.length, b = [e ? c.plotWidth - h : n, this.shared && !e && 1 < a.length && d ? d.chartY - k : e ? c.plotHeight - n : h]);
                return f(b, Math.round)
            },
            getPosition: function(a, d, b) {
                var c = this.chart,
                    e = this.distance,
                    k = {},
                    p = b.h || 0,
                    f, n = ["y", c.chartHeight, d, b.plotY + c.plotTop, c.plotTop, c.plotTop + c.plotHeight],
                    y = ["x", c.chartWidth, a, b.plotX + c.plotLeft, c.plotLeft, c.plotLeft + c.plotWidth],
                    h = !this.followPointer && m(b.ttBelow, !c.inverted === !!b.negative),
                    q = function(a, b, c, g, d, t) {
                        var f = c < g - e,
                            u = g + e + c < b,
                            w = g - e - c;
                        g += e;
                        if (h && u) k[a] = g;
                        else if (!h && f) k[a] = w;
                        else if (f) k[a] = Math.min(t - c, 0 > w - p ? w : w - p);
                        else if (u) k[a] = Math.max(d, g + p + c > b ? g : g + p);
                        else return !1
                    },
                    l = function(a, b, c, g) {
                        var d;
                        g < e || g > b - e ? d = !1 : k[a] = g < c / 2 ? 1 : g > b - c / 2 ? b - c - 2 : g - c / 2;
                        return d
                    },
                    r = function(a) {
                        var b = n;
                        n = y;
                        y = b;
                        f = a
                    },
                    t = function() {
                        !1 !== q.apply(0, n) ? !1 !== l.apply(0, y) || f || (r(!0), t()) : f ? k.x = k.y = 0 : (r(!0), t())
                    };
                (c.inverted || 1 < this.len) && r();
                t();
                return k
            },
            defaultFormatter: function(a) {
                var d = this.points || r(this),
                    b;
                b = [a.tooltipFooterHeaderFormatter(d[0])];
                b = b.concat(a.bodyFormatter(d));
                b.push(a.tooltipFooterHeaderFormatter(d[0], !0));
                return b
            },
            refresh: function(a, d) {
                var b, c = this.options,
                    e, k = a,
                    p, f = {},
                    n = [];
                b = c.formatter || this.defaultFormatter;
                var f = this.shared,
                    y;
                c.enabled && (clearTimeout(this.hideTimer), this.followPointer = r(k)[0].series.tooltipOptions.followPointer, p = this.getAnchor(k, d), d = p[0], e = p[1], !f || k.series && k.series.noSharedTooltip ? f = k.getLabelConfig() : (B(k, function(a) {
                        a.setState("hover");
                        n.push(a.getLabelConfig())
                    }),
                    f = {
                        x: k[0].category,
                        y: k[0].y
                    }, f.points = n, k = k[0]), this.len = n.length, f = b.call(f, this), y = k.series, this.distance = m(y.tooltipOptions.distance, 16), !1 === f ? this.hide() : (b = this.getLabel(), this.isHidden && b.attr({
                    opacity: 1
                }).show(), this.split ? this.renderSplit(f, a) : (c.style.width || b.css({
                        width: this.chart.spacingBox.width
                    }), b.attr({
                        text: f && f.join ? f.join("") : f
                    }), b.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + m(k.colorIndex, y.colorIndex)), b.attr({
                        stroke: c.borderColor || k.color || y.color || "#666666"
                    }),
                    this.updatePosition({
                        plotX: d,
                        plotY: e,
                        negative: k.negative,
                        ttBelow: k.ttBelow,
                        h: p[2] || 0
                    })), this.isHidden = !1))
            },
            renderSplit: function(d, f) {
                var b = this,
                    c = [],
                    e = this.chart,
                    k = e.renderer,
                    p = !0,
                    n = this.options,
                    h = 0,
                    y = this.getLabel();
                a.isString(d) && (d = [!1, d]);
                B(d.slice(0, f.length + 1), function(a, d) {
                    if (!1 !== a) {
                        d = f[d - 1] || {
                            isHeader: !0,
                            plotX: f[0].plotX
                        };
                        var w = d.series || b,
                            q = w.tt,
                            t = d.series || {},
                            D = "highcharts-color-" + m(d.colorIndex, t.colorIndex, "none");
                        q || (w.tt = q = k.label(null, null, null, "callout").addClass("highcharts-tooltip-box " +
                            D).attr({
                            padding: n.padding,
                            r: n.borderRadius,
                            fill: n.backgroundColor,
                            stroke: n.borderColor || d.color || t.color || "#333333",
                            "stroke-width": n.borderWidth
                        }).add(y));
                        q.isActive = !0;
                        q.attr({
                            text: a
                        });
                        q.css(n.style).shadow(n.shadow);
                        a = q.getBBox();
                        t = a.width + q.strokeWidth();
                        d.isHeader ? (h = a.height, t = Math.max(0, Math.min(d.plotX + e.plotLeft - t / 2, e.chartWidth - t))) : t = d.plotX + e.plotLeft - m(n.distance, 16) - t;
                        0 > t && (p = !1);
                        a = (d.series && d.series.yAxis && d.series.yAxis.pos) + (d.plotY || 0);
                        a -= e.plotTop;
                        c.push({
                            target: d.isHeader ? e.plotHeight +
                                h : a,
                            rank: d.isHeader ? 1 : 0,
                            size: w.tt.getBBox().height + 1,
                            point: d,
                            x: t,
                            tt: q
                        })
                    }
                });
                this.cleanSplit();
                a.distribute(c, e.plotHeight + h);
                B(c, function(a) {
                    var b = a.point,
                        c = b.series;
                    a.tt.attr({
                        visibility: void 0 === a.pos ? "hidden" : "inherit",
                        x: p || b.isHeader ? a.x : b.plotX + e.plotLeft + m(n.distance, 16),
                        y: a.pos + e.plotTop,
                        anchorX: b.isHeader ? b.plotX + e.plotLeft : b.plotX + c.xAxis.pos,
                        anchorY: b.isHeader ? a.pos + e.plotTop - 15 : b.plotY + c.yAxis.pos
                    })
                })
            },
            updatePosition: function(a) {
                var d = this.chart,
                    b = this.getLabel(),
                    b = (this.options.positioner ||
                        this.getPosition).call(this, b.width, b.height, a);
                this.move(Math.round(b.x), Math.round(b.y || 0), a.plotX + d.plotLeft, a.plotY + d.plotTop)
            },
            getDateFormat: function(a, f, b, c) {
                var e = A("%m-%d %H:%M:%S.%L", f),
                    k, p, n = {
                        millisecond: 15,
                        second: 12,
                        minute: 9,
                        hour: 6,
                        day: 3
                    },
                    h = "millisecond";
                for (p in d) {
                    if (a === d.week && +A("%w", f) === b && "00:00:00.000" === e.substr(6)) {
                        p = "week";
                        break
                    }
                    if (d[p] > a) {
                        p = h;
                        break
                    }
                    if (n[p] && e.substr(n[p]) !== "01-01 00:00:00.000".substr(n[p])) break;
                    "week" !== p && (h = p)
                }
                p && (k = c[p]);
                return k
            },
            getXDateFormat: function(a,
                d, b) {
                d = d.dateTimeLabelFormats;
                var c = b && b.closestPointRange;
                return (c ? this.getDateFormat(c, a.x, b.options.startOfWeek, d) : d.day) || d.year
            },
            tooltipFooterHeaderFormatter: function(a, d) {
                d = d ? "footer" : "header";
                var b = a.series,
                    c = b.tooltipOptions,
                    e = c.xDateFormat,
                    k = b.xAxis,
                    f = k && "datetime" === k.options.type && l(a.key),
                    n = c[d + "Format"];
                f && !e && (e = this.getXDateFormat(a, c, k));
                f && e && B(a.point && a.point.tooltipDateKeys || ["key"], function(a) {
                    n = n.replace("{point." + a + "}", "{point." + a + ":" + e + "}")
                });
                return F(n, {
                    point: a,
                    series: b
                })
            },
            bodyFormatter: function(a) {
                return f(a, function(a) {
                    var b = a.series.tooltipOptions;
                    return (b.pointFormatter || a.point.tooltipFormatter).call(a.point, b[(a.point.formatPrefix || "point") + "Format"])
                })
            }
        }
    })(N);
    (function(a) {
        var A = a.addEvent,
            B = a.attr,
            G = a.charts,
            F = a.color,
            l = a.css,
            f = a.defined,
            h = a.each,
            m = a.extend,
            r = a.find,
            v = a.fireEvent,
            d = a.isObject,
            e = a.offset,
            n = a.pick,
            b = a.removeEvent,
            c = a.splat,
            w = a.Tooltip;
        a.Pointer = function(a, b) {
            this.init(a, b)
        };
        a.Pointer.prototype = {
            init: function(a, b) {
                this.options = b;
                this.chart = a;
                this.runChartClick =
                    b.chart.events && !!b.chart.events.click;
                this.pinchDown = [];
                this.lastValidTouch = {};
                w && (a.tooltip = new w(a, b.tooltip), this.followTouchMove = n(b.tooltip.followTouchMove, !0));
                this.setDOMEvents()
            },
            zoomOption: function(a) {
                var b = this.chart,
                    c = b.options.chart,
                    d = c.zoomType || "",
                    b = b.inverted;
                /touch/.test(a.type) && (d = n(c.pinchType, d));
                this.zoomX = a = /x/.test(d);
                this.zoomY = d = /y/.test(d);
                this.zoomHor = a && !b || d && b;
                this.zoomVert = d && !b || a && b;
                this.hasZoom = a || d
            },
            normalize: function(a, b) {
                var c;
                c = a.touches ? a.touches.length ? a.touches.item(0) :
                    a.changedTouches[0] : a;
                b || (this.chartPosition = b = e(this.chart.container));
                return m(a, {
                    chartX: Math.round(c.pageX - b.left),
                    chartY: Math.round(c.pageY - b.top)
                })
            },
            getCoordinates: function(a) {
                var b = {
                    xAxis: [],
                    yAxis: []
                };
                h(this.chart.axes, function(c) {
                    b[c.isXAxis ? "xAxis" : "yAxis"].push({
                        axis: c,
                        value: c.toValue(a[c.horiz ? "chartX" : "chartY"])
                    })
                });
                return b
            },
            findNearestKDPoint: function(a, b, c) {
                var k;
                h(a, function(a) {
                    var e = !(a.noSharedTooltip && b) && 0 > a.options.findNearestPointBy.indexOf("y");
                    a = a.searchPoint(c, e);
                    if ((e = d(a, !0)) && !(e = !d(k, !0))) var e = k.distX - a.distX,
                        f = k.dist - a.dist,
                        p = (a.series.group && a.series.group.zIndex) - (k.series.group && k.series.group.zIndex),
                        e = 0 < (0 !== e && b ? e : 0 !== f ? f : 0 !== p ? p : k.series.index > a.series.index ? -1 : 1);
                    e && (k = a)
                });
                return k
            },
            getPointFromEvent: function(a) {
                a = a.target;
                for (var b; a && !b;) b = a.point, a = a.parentNode;
                return b
            },
            getChartCoordinatesFromPoint: function(a, b) {
                var c = a.series,
                    d = c.xAxis,
                    c = c.yAxis;
                if (d && c) return b ? {
                    chartX: d.len + d.pos - a.clientX,
                    chartY: c.len + c.pos - a.plotY
                } : {
                    chartX: a.clientX + d.pos,
                    chartY: a.plotY +
                        c.pos
                }
            },
            getHoverData: function(b, c, e, f, w, m, q) {
                var k, p = [],
                    t = q && q.isBoosting;
                f = !(!f || !b);
                q = c && !c.stickyTracking ? [c] : a.grep(e, function(a) {
                    return a.visible && !(!w && a.directTouch) && n(a.options.enableMouseTracking, !0) && a.stickyTracking
                });
                c = (k = f ? b : this.findNearestKDPoint(q, w, m)) && k.series;
                k && (w && !c.noSharedTooltip ? (q = a.grep(e, function(a) {
                    return a.visible && !(!w && a.directTouch) && n(a.options.enableMouseTracking, !0) && !a.noSharedTooltip
                }), h(q, function(a) {
                    var b = r(a.points, function(a) {
                        return a.x === k.x && !a.isNull
                    });
                    d(b) && (t && (b = a.getPoint(b)), p.push(b))
                })) : p.push(k));
                return {
                    hoverPoint: k,
                    hoverSeries: c,
                    hoverPoints: p
                }
            },
            runPointActions: function(b, c) {
                var d = this.chart,
                    k = d.tooltip && d.tooltip.options.enabled ? d.tooltip : void 0,
                    e = k ? k.shared : !1,
                    f = c || d.hoverPoint,
                    p = f && f.series || d.hoverSeries,
                    p = this.getHoverData(f, p, d.series, !!c || p && p.directTouch && this.isDirectTouch, e, b, {
                        isBoosting: d.isBoosting
                    }),
                    w, f = p.hoverPoint;
                w = p.hoverPoints;
                c = (p = p.hoverSeries) && p.tooltipOptions.followPointer;
                e = e && p && !p.noSharedTooltip;
                if (f && (f !== d.hoverPoint ||
                        k && k.isHidden)) {
                    h(d.hoverPoints || [], function(b) {
                        -1 === a.inArray(b, w) && b.setState()
                    });
                    h(w || [], function(a) {
                        a.setState("hover")
                    });
                    if (d.hoverSeries !== p) p.onMouseOver();
                    d.hoverPoint && d.hoverPoint.firePointEvent("mouseOut");
                    if (!f.series) return;
                    f.firePointEvent("mouseOver");
                    d.hoverPoints = w;
                    d.hoverPoint = f;
                    k && k.refresh(e ? w : f, b)
                } else c && k && !k.isHidden && (f = k.getAnchor([{}], b), k.updatePosition({
                    plotX: f[0],
                    plotY: f[1]
                }));
                this.unDocMouseMove || (this.unDocMouseMove = A(d.container.ownerDocument, "mousemove", function(b) {
                    var c =
                        G[a.hoverChartIndex];
                    if (c) c.pointer.onDocumentMouseMove(b)
                }));
                h(d.axes, function(c) {
                    var d = n(c.crosshair.snap, !0),
                        k = d ? a.find(w, function(a) {
                            return a.series[c.coll] === c
                        }) : void 0;
                    k || !d ? c.drawCrosshair(b, k) : c.hideCrosshair()
                })
            },
            reset: function(a, b) {
                var d = this.chart,
                    k = d.hoverSeries,
                    e = d.hoverPoint,
                    f = d.hoverPoints,
                    p = d.tooltip,
                    w = p && p.shared ? f : e;
                a && w && h(c(w), function(b) {
                    b.series.isCartesian && void 0 === b.plotX && (a = !1)
                });
                if (a) p && w && (p.refresh(w), e && (e.setState(e.state, !0), h(d.axes, function(a) {
                    a.crosshair && a.drawCrosshair(null,
                        e)
                })));
                else {
                    if (e) e.onMouseOut();
                    f && h(f, function(a) {
                        a.setState()
                    });
                    if (k) k.onMouseOut();
                    p && p.hide(b);
                    this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
                    h(d.axes, function(a) {
                        a.hideCrosshair()
                    });
                    this.hoverX = d.hoverPoints = d.hoverPoint = null
                }
            },
            scaleGroups: function(a, b) {
                var c = this.chart,
                    d;
                h(c.series, function(k) {
                    d = a || k.getPlotBox();
                    k.xAxis && k.xAxis.zoomEnabled && k.group && (k.group.attr(d), k.markerGroup && (k.markerGroup.attr(d), k.markerGroup.clip(b ? c.clipRect : null)), k.dataLabelsGroup && k.dataLabelsGroup.attr(d))
                });
                c.clipRect.attr(b || c.clipBox)
            },
            dragStart: function(a) {
                var b = this.chart;
                b.mouseIsDown = a.type;
                b.cancelClick = !1;
                b.mouseDownX = this.mouseDownX = a.chartX;
                b.mouseDownY = this.mouseDownY = a.chartY
            },
            drag: function(a) {
                var b = this.chart,
                    c = b.options.chart,
                    d = a.chartX,
                    k = a.chartY,
                    e = this.zoomHor,
                    f = this.zoomVert,
                    w = b.plotLeft,
                    n = b.plotTop,
                    t = b.plotWidth,
                    h = b.plotHeight,
                    E, m = this.selectionMarker,
                    g = this.mouseDownX,
                    u = this.mouseDownY,
                    l = c.panKey && a[c.panKey + "Key"];
                m && m.touch || (d < w ? d = w : d > w + t && (d = w + t), k < n ? k = n : k > n + h && (k = n + h), this.hasDragged =
                    Math.sqrt(Math.pow(g - d, 2) + Math.pow(u - k, 2)), 10 < this.hasDragged && (E = b.isInsidePlot(g - w, u - n), b.hasCartesianSeries && (this.zoomX || this.zoomY) && E && !l && !m && (this.selectionMarker = m = b.renderer.rect(w, n, e ? 1 : t, f ? 1 : h, 0).attr({
                        fill: c.selectionMarkerFill || F("#335cad").setOpacity(.25).get(),
                        "class": "highcharts-selection-marker",
                        zIndex: 7
                    }).add()), m && e && (d -= g, m.attr({
                        width: Math.abs(d),
                        x: (0 < d ? 0 : d) + g
                    })), m && f && (d = k - u, m.attr({
                        height: Math.abs(d),
                        y: (0 < d ? 0 : d) + u
                    })), E && !m && c.panning && b.pan(a, c.panning)))
            },
            drop: function(a) {
                var b =
                    this,
                    c = this.chart,
                    d = this.hasPinched;
                if (this.selectionMarker) {
                    var k = {
                            originalEvent: a,
                            xAxis: [],
                            yAxis: []
                        },
                        e = this.selectionMarker,
                        w = e.attr ? e.attr("x") : e.x,
                        n = e.attr ? e.attr("y") : e.y,
                        r = e.attr ? e.attr("width") : e.width,
                        t = e.attr ? e.attr("height") : e.height,
                        D;
                    if (this.hasDragged || d) h(c.axes, function(c) {
                        if (c.zoomEnabled && f(c.min) && (d || b[{
                                xAxis: "zoomX",
                                yAxis: "zoomY"
                            }[c.coll]])) {
                            var e = c.horiz,
                                g = "touchend" === a.type ? c.minPixelPadding : 0,
                                p = c.toValue((e ? w : n) + g),
                                e = c.toValue((e ? w + r : n + t) - g);
                            k[c.coll].push({
                                axis: c,
                                min: Math.min(p,
                                    e),
                                max: Math.max(p, e)
                            });
                            D = !0
                        }
                    }), D && v(c, "selection", k, function(a) {
                        c.zoom(m(a, d ? {
                            animation: !1
                        } : null))
                    });
                    this.selectionMarker = this.selectionMarker.destroy();
                    d && this.scaleGroups()
                }
                c && (l(c.container, {
                    cursor: c._cursor
                }), c.cancelClick = 10 < this.hasDragged, c.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
            },
            onContainerMouseDown: function(a) {
                a = this.normalize(a);
                this.zoomOption(a);
                a.preventDefault && a.preventDefault();
                this.dragStart(a)
            },
            onDocumentMouseUp: function(b) {
                G[a.hoverChartIndex] && G[a.hoverChartIndex].pointer.drop(b)
            },
            onDocumentMouseMove: function(a) {
                var b = this.chart,
                    c = this.chartPosition;
                a = this.normalize(a, c);
                !c || this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || this.reset()
            },
            onContainerMouseLeave: function(b) {
                var c = G[a.hoverChartIndex];
                c && (b.relatedTarget || b.toElement) && (c.pointer.reset(), c.pointer.chartPosition = null)
            },
            onContainerMouseMove: function(b) {
                var c = this.chart;
                f(a.hoverChartIndex) && G[a.hoverChartIndex] && G[a.hoverChartIndex].mouseIsDown || (a.hoverChartIndex =
                    c.index);
                b = this.normalize(b);
                b.returnValue = !1;
                "mousedown" === c.mouseIsDown && this.drag(b);
                !this.inClass(b.target, "highcharts-tracker") && !c.isInsidePlot(b.chartX - c.plotLeft, b.chartY - c.plotTop) || c.openMenu || this.runPointActions(b)
            },
            inClass: function(a, b) {
                for (var c; a;) {
                    if (c = B(a, "class")) {
                        if (-1 !== c.indexOf(b)) return !0;
                        if (-1 !== c.indexOf("highcharts-container")) return !1
                    }
                    a = a.parentNode
                }
            },
            onTrackerMouseOut: function(a) {
                var b = this.chart.hoverSeries;
                a = a.relatedTarget || a.toElement;
                this.isDirectTouch = !1;
                if (!(!b ||
                        !a || b.stickyTracking || this.inClass(a, "highcharts-tooltip") || this.inClass(a, "highcharts-series-" + b.index) && this.inClass(a, "highcharts-tracker"))) b.onMouseOut()
            },
            onContainerClick: function(a) {
                var b = this.chart,
                    c = b.hoverPoint,
                    d = b.plotLeft,
                    k = b.plotTop;
                a = this.normalize(a);
                b.cancelClick || (c && this.inClass(a.target, "highcharts-tracker") ? (v(c.series, "click", m(a, {
                    point: c
                })), b.hoverPoint && c.firePointEvent("click", a)) : (m(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - d, a.chartY - k) && v(b, "click", a)))
            },
            setDOMEvents: function() {
                var b =
                    this,
                    c = b.chart.container,
                    d = c.ownerDocument;
                c.onmousedown = function(a) {
                    b.onContainerMouseDown(a)
                };
                c.onmousemove = function(a) {
                    b.onContainerMouseMove(a)
                };
                c.onclick = function(a) {
                    b.onContainerClick(a)
                };
                A(c, "mouseleave", b.onContainerMouseLeave);
                1 === a.chartCount && A(d, "mouseup", b.onDocumentMouseUp);
                a.hasTouch && (c.ontouchstart = function(a) {
                    b.onContainerTouchStart(a)
                }, c.ontouchmove = function(a) {
                    b.onContainerTouchMove(a)
                }, 1 === a.chartCount && A(d, "touchend", b.onDocumentTouchEnd))
            },
            destroy: function() {
                var c = this,
                    d = this.chart.container.ownerDocument;
                c.unDocMouseMove && c.unDocMouseMove();
                b(c.chart.container, "mouseleave", c.onContainerMouseLeave);
                a.chartCount || (b(d, "mouseup", c.onDocumentMouseUp), a.hasTouch && b(d, "touchend", c.onDocumentTouchEnd));
                clearInterval(c.tooltipTimeout);
                a.objectEach(c, function(a, b) {
                    c[b] = null
                })
            }
        }
    })(N);
    (function(a) {
        var A = a.charts,
            B = a.each,
            G = a.extend,
            F = a.map,
            l = a.noop,
            f = a.pick;
        G(a.Pointer.prototype, {
            pinchTranslate: function(a, f, l, v, d, e) {
                this.zoomHor && this.pinchTranslateDirection(!0, a, f, l, v, d, e);
                this.zoomVert && this.pinchTranslateDirection(!1,
                    a, f, l, v, d, e)
            },
            pinchTranslateDirection: function(a, f, l, v, d, e, n, b) {
                var c = this.chart,
                    w = a ? "x" : "y",
                    k = a ? "X" : "Y",
                    p = "chart" + k,
                    h = a ? "width" : "height",
                    m = c["plot" + (a ? "Left" : "Top")],
                    y, r, q = b || 1,
                    z = c.inverted,
                    J = c.bounds[a ? "h" : "v"],
                    t = 1 === f.length,
                    D = f[0][p],
                    E = l[0][p],
                    H = !t && f[1][p],
                    g = !t && l[1][p],
                    u;
                l = function() {
                    !t && 20 < Math.abs(D - H) && (q = b || Math.abs(E - g) / Math.abs(D - H));
                    r = (m - E) / q + D;
                    y = c["plot" + (a ? "Width" : "Height")] / q
                };
                l();
                f = r;
                f < J.min ? (f = J.min, u = !0) : f + y > J.max && (f = J.max - y, u = !0);
                u ? (E -= .8 * (E - n[w][0]), t || (g -= .8 * (g - n[w][1])), l()) :
                    n[w] = [E, g];
                z || (e[w] = r - m, e[h] = y);
                e = z ? 1 / q : q;
                d[h] = y;
                d[w] = f;
                v[z ? a ? "scaleY" : "scaleX" : "scale" + k] = q;
                v["translate" + k] = e * m + (E - e * D)
            },
            pinch: function(a) {
                var h = this,
                    r = h.chart,
                    v = h.pinchDown,
                    d = a.touches,
                    e = d.length,
                    n = h.lastValidTouch,
                    b = h.hasZoom,
                    c = h.selectionMarker,
                    w = {},
                    k = 1 === e && (h.inClass(a.target, "highcharts-tracker") && r.runTrackerClick || h.runChartClick),
                    p = {};
                1 < e && (h.initiated = !0);
                b && h.initiated && !k && a.preventDefault();
                F(d, function(a) {
                    return h.normalize(a)
                });
                "touchstart" === a.type ? (B(d, function(a, b) {
                    v[b] = {
                        chartX: a.chartX,
                        chartY: a.chartY
                    }
                }), n.x = [v[0].chartX, v[1] && v[1].chartX], n.y = [v[0].chartY, v[1] && v[1].chartY], B(r.axes, function(a) {
                    if (a.zoomEnabled) {
                        var b = r.bounds[a.horiz ? "h" : "v"],
                            c = a.minPixelPadding,
                            d = a.toPixels(f(a.options.min, a.dataMin)),
                            e = a.toPixels(f(a.options.max, a.dataMax)),
                            k = Math.max(d, e);
                        b.min = Math.min(a.pos, Math.min(d, e) - c);
                        b.max = Math.max(a.pos + a.len, k + c)
                    }
                }), h.res = !0) : h.followTouchMove && 1 === e ? this.runPointActions(h.normalize(a)) : v.length && (c || (h.selectionMarker = c = G({
                    destroy: l,
                    touch: !0
                }, r.plotBox)), h.pinchTranslate(v,
                    d, w, c, p, n), h.hasPinched = b, h.scaleGroups(w, p), h.res && (h.res = !1, this.reset(!1, 0)))
            },
            touch: function(h, m) {
                var l = this.chart,
                    v, d;
                if (l.index !== a.hoverChartIndex) this.onContainerMouseLeave({
                    relatedTarget: !0
                });
                a.hoverChartIndex = l.index;
                1 === h.touches.length ? (h = this.normalize(h), (d = l.isInsidePlot(h.chartX - l.plotLeft, h.chartY - l.plotTop)) && !l.openMenu ? (m && this.runPointActions(h), "touchmove" === h.type && (m = this.pinchDown, v = m[0] ? 4 <= Math.sqrt(Math.pow(m[0].chartX - h.chartX, 2) + Math.pow(m[0].chartY - h.chartY, 2)) : !1), f(v, !0) && this.pinch(h)) : m && this.reset()) : 2 === h.touches.length && this.pinch(h)
            },
            onContainerTouchStart: function(a) {
                this.zoomOption(a);
                this.touch(a, !0)
            },
            onContainerTouchMove: function(a) {
                this.touch(a)
            },
            onDocumentTouchEnd: function(f) {
                A[a.hoverChartIndex] && A[a.hoverChartIndex].pointer.drop(f)
            }
        })
    })(N);
    (function(a) {
        var A = a.addEvent,
            B = a.charts,
            G = a.css,
            F = a.doc,
            l = a.extend,
            f = a.noop,
            h = a.Pointer,
            m = a.removeEvent,
            r = a.win,
            v = a.wrap;
        if (!a.hasTouch && (r.PointerEvent || r.MSPointerEvent)) {
            var d = {},
                e = !!r.PointerEvent,
                n = function() {
                    var b = [];
                    b.item = function(a) {
                        return this[a]
                    };
                    a.objectEach(d, function(a) {
                        b.push({
                            pageX: a.pageX,
                            pageY: a.pageY,
                            target: a.target
                        })
                    });
                    return b
                },
                b = function(b, d, e, p) {
                    "touch" !== b.pointerType && b.pointerType !== b.MSPOINTER_TYPE_TOUCH || !B[a.hoverChartIndex] || (p(b), p = B[a.hoverChartIndex].pointer, p[d]({
                        type: e,
                        target: b.currentTarget,
                        preventDefault: f,
                        touches: n()
                    }))
                };
            l(h.prototype, {
                onContainerPointerDown: function(a) {
                    b(a, "onContainerTouchStart", "touchstart", function(a) {
                        d[a.pointerId] = {
                            pageX: a.pageX,
                            pageY: a.pageY,
                            target: a.currentTarget
                        }
                    })
                },
                onContainerPointerMove: function(a) {
                    b(a, "onContainerTouchMove", "touchmove", function(a) {
                        d[a.pointerId] = {
                            pageX: a.pageX,
                            pageY: a.pageY
                        };
                        d[a.pointerId].target || (d[a.pointerId].target = a.currentTarget)
                    })
                },
                onDocumentPointerUp: function(a) {
                    b(a, "onDocumentTouchEnd", "touchend", function(a) {
                        delete d[a.pointerId]
                    })
                },
                batchMSEvents: function(a) {
                    a(this.chart.container, e ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
                    a(this.chart.container, e ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
                    a(F, e ?
                        "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
                }
            });
            v(h.prototype, "init", function(a, b, d) {
                a.call(this, b, d);
                this.hasZoom && G(b.container, {
                    "-ms-touch-action": "none",
                    "touch-action": "none"
                })
            });
            v(h.prototype, "setDOMEvents", function(a) {
                a.apply(this);
                (this.hasZoom || this.followTouchMove) && this.batchMSEvents(A)
            });
            v(h.prototype, "destroy", function(a) {
                this.batchMSEvents(m);
                a.call(this)
            })
        }
    })(N);
    (function(a) {
        var A = a.addEvent,
            B = a.css,
            G = a.discardElement,
            F = a.defined,
            l = a.each,
            f = a.isFirefox,
            h = a.marginNames,
            m = a.merge,
            r = a.pick,
            v = a.setAnimation,
            d = a.stableSort,
            e = a.win,
            n = a.wrap;
        a.Legend = function(a, c) {
            this.init(a, c)
        };
        a.Legend.prototype = {
            init: function(a, c) {
                this.chart = a;
                this.setOptions(c);
                c.enabled && (this.render(), A(this.chart, "endResize", function() {
                    this.legend.positionCheckboxes()
                }))
            },
            setOptions: function(a) {
                var b = r(a.padding, 8);
                this.options = a;
                this.itemStyle = a.itemStyle;
                this.itemHiddenStyle = m(this.itemStyle, a.itemHiddenStyle);
                this.itemMarginTop = a.itemMarginTop || 0;
                this.padding = b;
                this.initialItemY = b - 5;
                this.itemHeight =
                    this.maxItemWidth = 0;
                this.symbolWidth = r(a.symbolWidth, 16);
                this.pages = []
            },
            update: function(a, c) {
                var b = this.chart;
                this.setOptions(m(!0, this.options, a));
                this.destroy();
                b.isDirtyLegend = b.isDirtyBox = !0;
                r(c, !0) && b.redraw()
            },
            colorizeItem: function(a, c) {
                a.legendGroup[c ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");
                var b = this.options,
                    d = a.legendItem,
                    e = a.legendLine,
                    f = a.legendSymbol,
                    n = this.itemHiddenStyle.color,
                    b = c ? b.itemStyle.color : n,
                    h = c ? a.color || n : n,
                    m = a.options && a.options.marker,
                    q = {
                        fill: h
                    };
                d && d.css({
                    fill: b,
                    color: b
                });
                e && e.attr({
                    stroke: h
                });
                f && (m && f.isMarker && (q = a.pointAttribs(), c || (q.stroke = q.fill = n)), f.attr(q))
            },
            positionItem: function(a) {
                var b = this.options,
                    d = b.symbolPadding,
                    b = !b.rtl,
                    e = a._legendItemPos,
                    f = e[0],
                    e = e[1],
                    n = a.checkbox;
                (a = a.legendGroup) && a.element && a.translate(b ? f : this.legendWidth - f - 2 * d - 4, e);
                n && (n.x = f, n.y = e)
            },
            destroyItem: function(a) {
                var b = a.checkbox;
                l(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function(b) {
                    a[b] && (a[b] = a[b].destroy())
                });
                b && G(a.checkbox)
            },
            destroy: function() {
                function a(a) {
                    this[a] &&
                        (this[a] = this[a].destroy())
                }
                l(this.getAllItems(), function(b) {
                    l(["legendItem", "legendGroup"], a, b)
                });
                l("clipRect up down pager nav box title group".split(" "), a, this);
                this.display = null
            },
            positionCheckboxes: function(a) {
                var b = this.group && this.group.alignAttr,
                    d, e = this.clipHeight || this.legendHeight,
                    f = this.titleHeight;
                b && (d = b.translateY, l(this.allItems, function(c) {
                    var k = c.checkbox,
                        p;
                    k && (p = d + f + k.y + (a || 0) + 3, B(k, {
                        left: b.translateX + c.checkboxOffset + k.x - 20 + "px",
                        top: p + "px",
                        display: p > d - 6 && p < d + e - 6 ? "" : "none"
                    }))
                }))
            },
            renderTitle: function() {
                var a = this.options,
                    c = this.padding,
                    d = a.title,
                    e = 0;
                d.text && (this.title || (this.title = this.chart.renderer.label(d.text, c - 3, c - 4, null, null, null, a.useHTML, null, "legend-title").attr({
                    zIndex: 1
                }).css(d.style).add(this.group)), a = this.title.getBBox(), e = a.height, this.offsetWidth = a.width, this.contentGroup.attr({
                    translateY: e
                }));
                this.titleHeight = e
            },
            setText: function(b) {
                var c = this.options;
                b.legendItem.attr({
                    text: c.labelFormat ? a.format(c.labelFormat, b) : c.labelFormatter.call(b)
                })
            },
            renderItem: function(a) {
                var b =
                    this.chart,
                    d = b.renderer,
                    e = this.options,
                    f = "horizontal" === e.layout,
                    n = this.symbolWidth,
                    h = e.symbolPadding,
                    l = this.itemStyle,
                    v = this.itemHiddenStyle,
                    q = this.padding,
                    z = f ? r(e.itemDistance, 20) : 0,
                    J = !e.rtl,
                    t = e.width,
                    D = e.itemMarginBottom || 0,
                    E = this.itemMarginTop,
                    H = a.legendItem,
                    g = !a.series,
                    u = !g && a.series.drawLegendSymbol ? a.series : a,
                    P = u.options,
                    M = this.createCheckboxForItem && P && P.showCheckbox,
                    P = n + h + z + (M ? 20 : 0),
                    O = e.useHTML,
                    L = a.options.className;
                H || (a.legendGroup = d.g("legend-item").addClass("highcharts-" + u.type + "-series highcharts-color-" +
                    a.colorIndex + (L ? " " + L : "") + (g ? " highcharts-series-" + a.index : "")).attr({
                    zIndex: 1
                }).add(this.scrollGroup), a.legendItem = H = d.text("", J ? n + h : -h, this.baseline || 0, O).css(m(a.visible ? l : v)).attr({
                    align: J ? "left" : "right",
                    zIndex: 2
                }).add(a.legendGroup), this.baseline || (n = l.fontSize, this.fontMetrics = d.fontMetrics(n, H), this.baseline = this.fontMetrics.f + 3 + E, H.attr("y", this.baseline)), this.symbolHeight = e.symbolHeight || this.fontMetrics.f, u.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, H, O), M && this.createCheckboxForItem(a));
                this.colorizeItem(a, a.visible);
                l.width || H.css({
                    width: (e.itemWidth || e.width || b.spacingBox.width) - P
                });
                this.setText(a);
                d = H.getBBox();
                l = a.checkboxOffset = e.itemWidth || a.legendItemWidth || d.width + P;
                this.itemHeight = d = Math.round(a.legendItemHeight || d.height || this.symbolHeight);
                f && this.itemX - q + l > (t || b.spacingBox.width - 2 * q - e.x) && (this.itemX = q, this.itemY += E + this.lastLineHeight + D, this.lastLineHeight = 0);
                this.maxItemWidth = Math.max(this.maxItemWidth, l);
                this.lastItemY = E + this.itemY + D;
                this.lastLineHeight = Math.max(d,
                    this.lastLineHeight);
                a._legendItemPos = [this.itemX, this.itemY];
                f ? this.itemX += l : (this.itemY += E + d + D, this.lastLineHeight = d);
                this.offsetWidth = t || Math.max((f ? this.itemX - q - (a.checkbox ? 0 : z) : l) + q, this.offsetWidth)
            },
            getAllItems: function() {
                var a = [];
                l(this.chart.series, function(b) {
                    var c = b && b.options;
                    b && r(c.showInLegend, F(c.linkedTo) ? !1 : void 0, !0) && (a = a.concat(b.legendItems || ("point" === c.legendType ? b.data : b)))
                });
                return a
            },
            adjustMargins: function(a, c) {
                var b = this.chart,
                    d = this.options,
                    e = d.align.charAt(0) + d.verticalAlign.charAt(0) +
                    d.layout.charAt(0);
                d.floating || l([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function(k, f) {
                    k.test(e) && !F(a[f]) && (b[h[f]] = Math.max(b[h[f]], b.legend[(f + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][f] * d[f % 2 ? "x" : "y"] + r(d.margin, 12) + c[f]))
                })
            },
            render: function() {
                var a = this,
                    c = a.chart,
                    e = c.renderer,
                    k = a.group,
                    f, n, h, y, r = a.box,
                    q = a.options,
                    z = a.padding;
                a.itemX = z;
                a.itemY = a.initialItemY;
                a.offsetWidth = 0;
                a.lastItemY = 0;
                k || (a.group = k = e.g("legend").attr({
                        zIndex: 7
                    }).add(), a.contentGroup = e.g().attr({
                        zIndex: 1
                    }).add(k),
                    a.scrollGroup = e.g().add(a.contentGroup));
                a.renderTitle();
                f = a.getAllItems();
                d(f, function(a, b) {
                    return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0)
                });
                q.reversed && f.reverse();
                a.allItems = f;
                a.display = n = !!f.length;
                a.lastLineHeight = 0;
                l(f, function(b) {
                    a.renderItem(b)
                });
                h = (q.width || a.offsetWidth) + z;
                y = a.lastItemY + a.lastLineHeight + a.titleHeight;
                y = a.handleOverflow(y);
                y += z;
                r || (a.box = r = e.rect().addClass("highcharts-legend-box").attr({
                    r: q.borderRadius
                }).add(k), r.isNew = !0);
                r.attr({
                    stroke: q.borderColor,
                    "stroke-width": q.borderWidth || 0,
                    fill: q.backgroundColor || "none"
                }).shadow(q.shadow);
                0 < h && 0 < y && (r[r.isNew ? "attr" : "animate"](r.crisp({
                    x: 0,
                    y: 0,
                    width: h,
                    height: y
                }, r.strokeWidth())), r.isNew = !1);
                r[n ? "show" : "hide"]();
                a.legendWidth = h;
                a.legendHeight = y;
                l(f, function(b) {
                    a.positionItem(b)
                });
                n && k.align(m(q, {
                    width: h,
                    height: y
                }), !0, "spacingBox");
                c.isResizing || this.positionCheckboxes()
            },
            handleOverflow: function(a) {
                var b = this,
                    d = this.chart,
                    e = d.renderer,
                    f = this.options,
                    n = f.y,
                    h = this.padding,
                    d = d.spacingBox.height + ("top" === f.verticalAlign ?
                        -n : n) - h,
                    n = f.maxHeight,
                    m, v = this.clipRect,
                    q = f.navigation,
                    z = r(q.animation, !0),
                    J = q.arrowSize || 12,
                    t = this.nav,
                    D = this.pages,
                    E, H = this.allItems,
                    g = function(a) {
                        "number" === typeof a ? v.attr({
                            height: a
                        }) : v && (b.clipRect = v.destroy(), b.contentGroup.clip());
                        b.contentGroup.div && (b.contentGroup.div.style.clip = a ? "rect(" + h + "px,9999px," + (h + a) + "px,0)" : "auto")
                    };
                "horizontal" !== f.layout || "middle" === f.verticalAlign || f.floating || (d /= 2);
                n && (d = Math.min(d, n));
                D.length = 0;
                a > d && !1 !== q.enabled ? (this.clipHeight = m = Math.max(d - 20 - this.titleHeight -
                    h, 0), this.currentPage = r(this.currentPage, 1), this.fullHeight = a, l(H, function(a, b) {
                    var c = a._legendItemPos[1];
                    a = Math.round(a.legendItem.getBBox().height);
                    var d = D.length;
                    if (!d || c - D[d - 1] > m && (E || c) !== D[d - 1]) D.push(E || c), d++;
                    b === H.length - 1 && c + a - D[d - 1] > m && D.push(c);
                    c !== E && (E = c)
                }), v || (v = b.clipRect = e.clipRect(0, h, 9999, 0), b.contentGroup.clip(v)), g(m), t || (this.nav = t = e.g().attr({
                    zIndex: 1
                }).add(this.group), this.up = e.symbol("triangle", 0, 0, J, J).on("click", function() {
                    b.scroll(-1, z)
                }).add(t), this.pager = e.text("", 15,
                    10).addClass("highcharts-legend-navigation").css(q.style).add(t), this.down = e.symbol("triangle-down", 0, 0, J, J).on("click", function() {
                    b.scroll(1, z)
                }).add(t)), b.scroll(0), a = d) : t && (g(), this.nav = t.destroy(), this.scrollGroup.attr({
                    translateY: 1
                }), this.clipHeight = 0);
                return a
            },
            scroll: function(a, c) {
                var b = this.pages,
                    d = b.length;
                a = this.currentPage + a;
                var e = this.clipHeight,
                    f = this.options.navigation,
                    n = this.pager,
                    h = this.padding;
                a > d && (a = d);
                0 < a && (void 0 !== c && v(c, this.chart), this.nav.attr({
                        translateX: h,
                        translateY: e + this.padding +
                            7 + this.titleHeight,
                        visibility: "visible"
                    }), this.up.attr({
                        "class": 1 === a ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                    }), n.attr({
                        text: a + "/" + d
                    }), this.down.attr({
                        x: 18 + this.pager.getBBox().width,
                        "class": a === d ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                    }), this.up.attr({
                        fill: 1 === a ? f.inactiveColor : f.activeColor
                    }).css({
                        cursor: 1 === a ? "default" : "pointer"
                    }), this.down.attr({
                        fill: a === d ? f.inactiveColor : f.activeColor
                    }).css({
                        cursor: a === d ? "default" : "pointer"
                    }), c = -b[a - 1] + this.initialItemY,
                    this.scrollGroup.animate({
                        translateY: c
                    }), this.currentPage = a, this.positionCheckboxes(c))
            }
        };
        a.LegendSymbolMixin = {
            drawRectangle: function(a, c) {
                var b = a.symbolHeight,
                    d = a.options.squareSymbol;
                c.legendSymbol = this.chart.renderer.rect(d ? (a.symbolWidth - b) / 2 : 0, a.baseline - b + 1, d ? b : a.symbolWidth, b, r(a.options.symbolRadius, b / 2)).addClass("highcharts-point").attr({
                    zIndex: 3
                }).add(c.legendGroup)
            },
            drawLineMarker: function(a) {
                var b = this.options,
                    d = b.marker,
                    e = a.symbolWidth,
                    f = a.symbolHeight,
                    n = f / 2,
                    h = this.chart.renderer,
                    l =
                    this.legendGroup;
                a = a.baseline - Math.round(.3 * a.fontMetrics.b);
                var v;
                v = {
                    "stroke-width": b.lineWidth || 0
                };
                b.dashStyle && (v.dashstyle = b.dashStyle);
                this.legendLine = h.path(["M", 0, a, "L", e, a]).addClass("highcharts-graph").attr(v).add(l);
                d && !1 !== d.enabled && (b = Math.min(r(d.radius, n), n), 0 === this.symbol.indexOf("url") && (d = m(d, {
                    width: f,
                    height: f
                }), b = 0), this.legendSymbol = d = h.symbol(this.symbol, e / 2 - b, a - b, 2 * b, 2 * b, d).addClass("highcharts-point").add(l), d.isMarker = !0)
            }
        };
        (/Trident\/7\.0/.test(e.navigator.userAgent) || f) &&
        n(a.Legend.prototype, "positionItem", function(a, c) {
            var b = this,
                d = function() {
                    c._legendItemPos && a.call(b, c)
                };
            d();
            setTimeout(d)
        })
    })(N);
    (function(a) {
        var A = a.addEvent,
            B = a.animate,
            G = a.animObject,
            F = a.attr,
            l = a.doc,
            f = a.Axis,
            h = a.createElement,
            m = a.defaultOptions,
            r = a.discardElement,
            v = a.charts,
            d = a.css,
            e = a.defined,
            n = a.each,
            b = a.extend,
            c = a.find,
            w = a.fireEvent,
            k = a.grep,
            p = a.isNumber,
            C = a.isObject,
            I = a.isString,
            y = a.Legend,
            K = a.marginNames,
            q = a.merge,
            z = a.objectEach,
            J = a.Pointer,
            t = a.pick,
            D = a.pInt,
            E = a.removeEvent,
            H = a.seriesTypes,
            g = a.splat,
            u = a.svg,
            P = a.syncTimeout,
            M = a.win,
            O = a.Chart = function() {
                this.getArgs.apply(this, arguments)
            };
        a.chart = function(a, b, c) {
            return new O(a, b, c)
        };
        b(O.prototype, {
            callbacks: [],
            getArgs: function() {
                var a = [].slice.call(arguments);
                if (I(a[0]) || a[0].nodeName) this.renderTo = a.shift();
                this.init(a[0], a[1])
            },
            init: function(b, c) {
                var d, g, e = b.series,
                    f = b.plotOptions || {};
                b.series = null;
                d = q(m, b);
                for (g in d.plotOptions) d.plotOptions[g].tooltip = f[g] && q(f[g].tooltip) || void 0;
                d.tooltip.userOptions = b.chart && b.chart.forExport &&
                    b.tooltip.userOptions || b.tooltip;
                d.series = b.series = e;
                this.userOptions = b;
                b = d.chart;
                g = b.events;
                this.margin = [];
                this.spacing = [];
                this.bounds = {
                    h: {},
                    v: {}
                };
                this.labelCollectors = [];
                this.callback = c;
                this.isResizing = 0;
                this.options = d;
                this.axes = [];
                this.series = [];
                this.hasCartesianSeries = b.showAxes;
                var k = this;
                k.index = v.length;
                v.push(k);
                a.chartCount++;
                g && z(g, function(a, b) {
                    A(k, b, a)
                });
                k.xAxis = [];
                k.yAxis = [];
                k.pointCount = k.colorCounter = k.symbolCounter = 0;
                k.firstRender()
            },
            initSeries: function(b) {
                var c = this.options.chart;
                (c = H[b.type || c.type || c.defaultSeriesType]) || a.error(17, !0);
                c = new c;
                c.init(this, b);
                return c
            },
            orderSeries: function(a) {
                var b = this.series;
                for (a = a || 0; a < b.length; a++) b[a] && (b[a].index = a, b[a].name = b[a].name || "Series " + (b[a].index + 1))
            },
            isInsidePlot: function(a, b, c) {
                var d = c ? b : a;
                a = c ? a : b;
                return 0 <= d && d <= this.plotWidth && 0 <= a && a <= this.plotHeight
            },
            redraw: function(c) {
                var d = this.axes,
                    g = this.series,
                    e = this.pointer,
                    f = this.legend,
                    k = this.isDirtyLegend,
                    t, u, h = this.hasCartesianSeries,
                    p = this.isDirtyBox,
                    q, E = this.renderer,
                    m =
                    E.isHidden(),
                    l = [];
                this.setResponsive && this.setResponsive(!1);
                a.setAnimation(c, this);
                m && this.temporaryDisplay();
                this.layOutTitles();
                for (c = g.length; c--;)
                    if (q = g[c], q.options.stacking && (t = !0, q.isDirty)) {
                        u = !0;
                        break
                    }
                if (u)
                    for (c = g.length; c--;) q = g[c], q.options.stacking && (q.isDirty = !0);
                n(g, function(a) {
                    a.isDirty && "point" === a.options.legendType && (a.updateTotals && a.updateTotals(), k = !0);
                    a.isDirtyData && w(a, "updatedData")
                });
                k && f.options.enabled && (f.render(), this.isDirtyLegend = !1);
                t && this.getStacks();
                h && n(d, function(a) {
                    a.updateNames();
                    a.setScale()
                });
                this.getMargins();
                h && (n(d, function(a) {
                    a.isDirty && (p = !0)
                }), n(d, function(a) {
                    var c = a.min + "," + a.max;
                    a.extKey !== c && (a.extKey = c, l.push(function() {
                        w(a, "afterSetExtremes", b(a.eventArgs, a.getExtremes()));
                        delete a.eventArgs
                    }));
                    (p || t) && a.redraw()
                }));
                p && this.drawChartBox();
                w(this, "predraw");
                n(g, function(a) {
                    (p || a.isDirty) && a.visible && a.redraw();
                    a.isDirtyData = !1
                });
                e && e.reset(!0);
                E.draw();
                w(this, "redraw");
                w(this, "render");
                m && this.temporaryDisplay(!0);
                n(l, function(a) {
                    a.call()
                })
            },
            get: function(a) {
                function b(b) {
                    return b.id ===
                        a || b.options && b.options.id === a
                }
                var d, g = this.series,
                    e;
                d = c(this.axes, b) || c(this.series, b);
                for (e = 0; !d && e < g.length; e++) d = c(g[e].points || [], b);
                return d
            },
            getAxes: function() {
                var a = this,
                    b = this.options,
                    c = b.xAxis = g(b.xAxis || {}),
                    b = b.yAxis = g(b.yAxis || {});
                n(c, function(a, b) {
                    a.index = b;
                    a.isX = !0
                });
                n(b, function(a, b) {
                    a.index = b
                });
                c = c.concat(b);
                n(c, function(b) {
                    new f(a, b)
                })
            },
            getSelectedPoints: function() {
                var a = [];
                n(this.series, function(b) {
                    a = a.concat(k(b.data || [], function(a) {
                        return a.selected
                    }))
                });
                return a
            },
            getSelectedSeries: function() {
                return k(this.series,
                    function(a) {
                        return a.selected
                    })
            },
            setTitle: function(a, b, c) {
                var d = this,
                    g = d.options,
                    e;
                e = g.title = q({
                    style: {
                        color: "#333333",
                        fontSize: g.isStock ? "16px" : "18px"
                    }
                }, g.title, a);
                g = g.subtitle = q({
                    style: {
                        color: "#666666"
                    }
                }, g.subtitle, b);
                n([
                    ["title", a, e],
                    ["subtitle", b, g]
                ], function(a, b) {
                    var c = a[0],
                        g = d[c],
                        e = a[1];
                    a = a[2];
                    g && e && (d[c] = g = g.destroy());
                    a && a.text && !g && (d[c] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({
                        align: a.align,
                        "class": "highcharts-" + c,
                        zIndex: a.zIndex || 4
                    }).add(), d[c].update = function(a) {
                        d.setTitle(!b && a, b &&
                            a)
                    }, d[c].css(a.style))
                });
                d.layOutTitles(c)
            },
            layOutTitles: function(a) {
                var c = 0,
                    d, g = this.renderer,
                    e = this.spacingBox;
                n(["title", "subtitle"], function(a) {
                    var d = this[a],
                        f = this.options[a];
                    a = "title" === a ? -3 : f.verticalAlign ? 0 : c + 2;
                    var k;
                    d && (k = f.style.fontSize, k = g.fontMetrics(k, d).b, d.css({
                        width: (f.width || e.width + f.widthAdjust) + "px"
                    }).align(b({
                        y: a + k
                    }, f), !1, "spacingBox"), f.floating || f.verticalAlign || (c = Math.ceil(c + d.getBBox(f.useHTML).height)))
                }, this);
                d = this.titleOffset !== c;
                this.titleOffset = c;
                !this.isDirtyBox &&
                    d && (this.isDirtyBox = d, this.hasRendered && t(a, !0) && this.isDirtyBox && this.redraw())
            },
            getChartSize: function() {
                var b = this.options.chart,
                    c = b.width,
                    b = b.height,
                    d = this.renderTo;
                e(c) || (this.containerWidth = a.getStyle(d, "width"));
                e(b) || (this.containerHeight = a.getStyle(d, "height"));
                this.chartWidth = Math.max(0, c || this.containerWidth || 600);
                this.chartHeight = Math.max(0, a.relativeLength(b, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400))
            },
            temporaryDisplay: function(b) {
                var c = this.renderTo;
                if (b)
                    for (; c &&
                        c.style;) c.hcOrigStyle && (a.css(c, c.hcOrigStyle), delete c.hcOrigStyle), c.hcOrigDetached && (l.body.removeChild(c), c.hcOrigDetached = !1), c = c.parentNode;
                else
                    for (; c && c.style;) {
                        l.body.contains(c) || c.parentNode || (c.hcOrigDetached = !0, l.body.appendChild(c));
                        if ("none" === a.getStyle(c, "display", !1) || c.hcOricDetached) c.hcOrigStyle = {
                            display: c.style.display,
                            height: c.style.height,
                            overflow: c.style.overflow
                        }, b = {
                            display: "block",
                            overflow: "hidden"
                        }, c !== this.renderTo && (b.height = 0), a.css(c, b), c.offsetWidth || c.style.setProperty("display",
                            "block", "important");
                        c = c.parentNode;
                        if (c === l.body) break
                    }
            },
            setClassName: function(a) {
                this.container.className = "highcharts-container " + (a || "")
            },
            getContainer: function() {
                var c, d = this.options,
                    g = d.chart,
                    e, f;
                c = this.renderTo;
                var k = a.uniqueKey(),
                    t;
                c || (this.renderTo = c = g.renderTo);
                I(c) && (this.renderTo = c = l.getElementById(c));
                c || a.error(13, !0);
                e = D(F(c, "data-highcharts-chart"));
                p(e) && v[e] && v[e].hasRendered && v[e].destroy();
                F(c, "data-highcharts-chart", this.index);
                c.innerHTML = "";
                g.skipClone || c.offsetWidth || this.temporaryDisplay();
                this.getChartSize();
                e = this.chartWidth;
                f = this.chartHeight;
                t = b({
                    position: "relative",
                    overflow: "hidden",
                    width: e + "px",
                    height: f + "px",
                    textAlign: "left",
                    lineHeight: "normal",
                    zIndex: 0,
                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
                }, g.style);
                this.container = c = h("div", {
                    id: k
                }, t, c);
                this._cursor = c.style.cursor;
                this.renderer = new(a[g.renderer] || a.Renderer)(c, e, f, null, g.forExport, d.exporting && d.exporting.allowHTML);
                this.setClassName(g.className);
                this.renderer.setStyle(g.style);
                this.renderer.chartIndex = this.index
            },
            getMargins: function(a) {
                var b =
                    this.spacing,
                    c = this.margin,
                    d = this.titleOffset;
                this.resetMargins();
                d && !e(c[0]) && (this.plotTop = Math.max(this.plotTop, d + this.options.title.margin + b[0]));
                this.legend && this.legend.display && this.legend.adjustMargins(c, b);
                this.extraMargin && (this[this.extraMargin.type] = (this[this.extraMargin.type] || 0) + this.extraMargin.value);
                this.adjustPlotArea && this.adjustPlotArea();
                a || this.getAxisMargins()
            },
            getAxisMargins: function() {
                var a = this,
                    b = a.axisOffset = [0, 0, 0, 0],
                    c = a.margin;
                a.hasCartesianSeries && n(a.axes, function(a) {
                    a.visible &&
                        a.getOffset()
                });
                n(K, function(d, g) {
                    e(c[g]) || (a[d] += b[g])
                });
                a.setChartSize()
            },
            reflow: function(b) {
                var c = this,
                    d = c.options.chart,
                    g = c.renderTo,
                    f = e(d.width) && e(d.height),
                    k = d.width || a.getStyle(g, "width"),
                    d = d.height || a.getStyle(g, "height"),
                    g = b ? b.target : M;
                if (!f && !c.isPrinting && k && d && (g === M || g === l)) {
                    if (k !== c.containerWidth || d !== c.containerHeight) clearTimeout(c.reflowTimeout), c.reflowTimeout = P(function() {
                        c.container && c.setSize(void 0, void 0, !1)
                    }, b ? 100 : 0);
                    c.containerWidth = k;
                    c.containerHeight = d
                }
            },
            initReflow: function() {
                var a =
                    this,
                    b;
                b = A(M, "resize", function(b) {
                    a.reflow(b)
                });
                A(a, "destroy", b)
            },
            setSize: function(b, c, g) {
                var e = this,
                    f = e.renderer;
                e.isResizing += 1;
                a.setAnimation(g, e);
                e.oldChartHeight = e.chartHeight;
                e.oldChartWidth = e.chartWidth;
                void 0 !== b && (e.options.chart.width = b);
                void 0 !== c && (e.options.chart.height = c);
                e.getChartSize();
                b = f.globalAnimation;
                (b ? B : d)(e.container, {
                    width: e.chartWidth + "px",
                    height: e.chartHeight + "px"
                }, b);
                e.setChartSize(!0);
                f.setSize(e.chartWidth, e.chartHeight, g);
                n(e.axes, function(a) {
                    a.isDirty = !0;
                    a.setScale()
                });
                e.isDirtyLegend = !0;
                e.isDirtyBox = !0;
                e.layOutTitles();
                e.getMargins();
                e.redraw(g);
                e.oldChartHeight = null;
                w(e, "resize");
                P(function() {
                    e && w(e, "endResize", null, function() {
                        --e.isResizing
                    })
                }, G(b).duration)
            },
            setChartSize: function(a) {
                var b = this.inverted,
                    c = this.renderer,
                    d = this.chartWidth,
                    g = this.chartHeight,
                    e = this.options.chart,
                    f = this.spacing,
                    k = this.clipOffset,
                    t, u, h, p;
                this.plotLeft = t = Math.round(this.plotLeft);
                this.plotTop = u = Math.round(this.plotTop);
                this.plotWidth = h = Math.max(0, Math.round(d - t - this.marginRight));
                this.plotHeight = p = Math.max(0, Math.round(g - u - this.marginBottom));
                this.plotSizeX = b ? p : h;
                this.plotSizeY = b ? h : p;
                this.plotBorderWidth = e.plotBorderWidth || 0;
                this.spacingBox = c.spacingBox = {
                    x: f[3],
                    y: f[0],
                    width: d - f[3] - f[1],
                    height: g - f[0] - f[2]
                };
                this.plotBox = c.plotBox = {
                    x: t,
                    y: u,
                    width: h,
                    height: p
                };
                d = 2 * Math.floor(this.plotBorderWidth / 2);
                b = Math.ceil(Math.max(d, k[3]) / 2);
                c = Math.ceil(Math.max(d, k[0]) / 2);
                this.clipBox = {
                    x: b,
                    y: c,
                    width: Math.floor(this.plotSizeX - Math.max(d, k[1]) / 2 - b),
                    height: Math.max(0, Math.floor(this.plotSizeY -
                        Math.max(d, k[2]) / 2 - c))
                };
                a || n(this.axes, function(a) {
                    a.setAxisSize();
                    a.setAxisTranslation()
                })
            },
            resetMargins: function() {
                var a = this,
                    b = a.options.chart;
                n(["margin", "spacing"], function(c) {
                    var d = b[c],
                        g = C(d) ? d : [d, d, d, d];
                    n(["Top", "Right", "Bottom", "Left"], function(d, e) {
                        a[c][e] = t(b[c + d], g[e])
                    })
                });
                n(K, function(b, c) {
                    a[b] = t(a.margin[c], a.spacing[c])
                });
                a.axisOffset = [0, 0, 0, 0];
                a.clipOffset = [0, 0, 0, 0]
            },
            drawChartBox: function() {
                var a = this.options.chart,
                    b = this.renderer,
                    c = this.chartWidth,
                    d = this.chartHeight,
                    g = this.chartBackground,
                    e = this.plotBackground,
                    f = this.plotBorder,
                    k, t = this.plotBGImage,
                    n = a.backgroundColor,
                    u = a.plotBackgroundColor,
                    h = a.plotBackgroundImage,
                    p, q = this.plotLeft,
                    E = this.plotTop,
                    m = this.plotWidth,
                    l = this.plotHeight,
                    w = this.plotBox,
                    D = this.clipRect,
                    y = this.clipBox,
                    z = "animate";
                g || (this.chartBackground = g = b.rect().addClass("highcharts-background").add(), z = "attr");
                k = a.borderWidth || 0;
                p = k + (a.shadow ? 8 : 0);
                n = {
                    fill: n || "none"
                };
                if (k || g["stroke-width"]) n.stroke = a.borderColor, n["stroke-width"] = k;
                g.attr(n).shadow(a.shadow);
                g[z]({
                    x: p /
                        2,
                    y: p / 2,
                    width: c - p - k % 2,
                    height: d - p - k % 2,
                    r: a.borderRadius
                });
                z = "animate";
                e || (z = "attr", this.plotBackground = e = b.rect().addClass("highcharts-plot-background").add());
                e[z](w);
                e.attr({
                    fill: u || "none"
                }).shadow(a.plotShadow);
                h && (t ? t.animate(w) : this.plotBGImage = b.image(h, q, E, m, l).add());
                D ? D.animate({
                    width: y.width,
                    height: y.height
                }) : this.clipRect = b.clipRect(y);
                z = "animate";
                f || (z = "attr", this.plotBorder = f = b.rect().addClass("highcharts-plot-border").attr({
                    zIndex: 1
                }).add());
                f.attr({
                    stroke: a.plotBorderColor,
                    "stroke-width": a.plotBorderWidth ||
                        0,
                    fill: "none"
                });
                f[z](f.crisp({
                    x: q,
                    y: E,
                    width: m,
                    height: l
                }, -f.strokeWidth()));
                this.isDirtyBox = !1
            },
            propFromSeries: function() {
                var a = this,
                    b = a.options.chart,
                    c, d = a.options.series,
                    g, e;
                n(["inverted", "angular", "polar"], function(f) {
                    c = H[b.type || b.defaultSeriesType];
                    e = b[f] || c && c.prototype[f];
                    for (g = d && d.length; !e && g--;)(c = H[d[g].type]) && c.prototype[f] && (e = !0);
                    a[f] = e
                })
            },
            linkSeries: function() {
                var a = this,
                    b = a.series;
                n(b, function(a) {
                    a.linkedSeries.length = 0
                });
                n(b, function(b) {
                    var c = b.options.linkedTo;
                    I(c) && (c = ":previous" ===
                        c ? a.series[b.index - 1] : a.get(c)) && c.linkedParent !== b && (c.linkedSeries.push(b), b.linkedParent = c, b.visible = t(b.options.visible, c.options.visible, b.visible))
                })
            },
            renderSeries: function() {
                n(this.series, function(a) {
                    a.translate();
                    a.render()
                })
            },
            renderLabels: function() {
                var a = this,
                    c = a.options.labels;
                c.items && n(c.items, function(d) {
                    var g = b(c.style, d.style),
                        e = D(g.left) + a.plotLeft,
                        f = D(g.top) + a.plotTop + 12;
                    delete g.left;
                    delete g.top;
                    a.renderer.text(d.html, e, f).attr({
                        zIndex: 2
                    }).css(g).add()
                })
            },
            render: function() {
                var a =
                    this.axes,
                    b = this.renderer,
                    c = this.options,
                    d, g, e;
                this.setTitle();
                this.legend = new y(this, c.legend);
                this.getStacks && this.getStacks();
                this.getMargins(!0);
                this.setChartSize();
                c = this.plotWidth;
                d = this.plotHeight -= 21;
                n(a, function(a) {
                    a.setScale()
                });
                this.getAxisMargins();
                g = 1.1 < c / this.plotWidth;
                e = 1.05 < d / this.plotHeight;
                if (g || e) n(a, function(a) {
                    (a.horiz && g || !a.horiz && e) && a.setTickInterval(!0)
                }), this.getMargins();
                this.drawChartBox();
                this.hasCartesianSeries && n(a, function(a) {
                    a.visible && a.render()
                });
                this.seriesGroup ||
                    (this.seriesGroup = b.g("series-group").attr({
                        zIndex: 3
                    }).add());
                this.renderSeries();
                this.renderLabels();
                this.addCredits();
                this.setResponsive && this.setResponsive();
                this.hasRendered = !0
            },
            addCredits: function(a) {
                var b = this;
                a = q(!0, this.options.credits, a);
                a.enabled && !this.credits && (this.credits = this.renderer.text(a.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
                        a.href && (M.location.href = a.href)
                    }).attr({
                        align: a.position.align,
                        zIndex: 8
                    }).css(a.style).add().align(a.position),
                    this.credits.update = function(a) {
                        b.credits = b.credits.destroy();
                        b.addCredits(a)
                    })
            },
            destroy: function() {
                var b = this,
                    c = b.axes,
                    d = b.series,
                    g = b.container,
                    e, f = g && g.parentNode;
                w(b, "destroy");
                b.renderer.forExport ? a.erase(v, b) : v[b.index] = void 0;
                a.chartCount--;
                b.renderTo.removeAttribute("data-highcharts-chart");
                E(b);
                for (e = c.length; e--;) c[e] = c[e].destroy();
                this.scroller && this.scroller.destroy && this.scroller.destroy();
                for (e = d.length; e--;) d[e] = d[e].destroy();
                n("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),
                    function(a) {
                        var c = b[a];
                        c && c.destroy && (b[a] = c.destroy())
                    });
                g && (g.innerHTML = "", E(g), f && r(g));
                z(b, function(a, c) {
                    delete b[c]
                })
            },
            isReadyToRender: function() {
                var a = this;
                return u || M != M.top || "complete" === l.readyState ? !0 : (l.attachEvent("onreadystatechange", function() {
                    l.detachEvent("onreadystatechange", a.firstRender);
                    "complete" === l.readyState && a.firstRender()
                }), !1)
            },
            firstRender: function() {
                var a = this,
                    b = a.options;
                if (a.isReadyToRender()) {
                    a.getContainer();
                    w(a, "init");
                    a.resetMargins();
                    a.setChartSize();
                    a.propFromSeries();
                    a.getAxes();
                    n(b.series || [], function(b) {
                        a.initSeries(b)
                    });
                    a.linkSeries();
                    w(a, "beforeRender");
                    J && (a.pointer = new J(a, b));
                    a.render();
                    if (!a.renderer.imgCount && a.onload) a.onload();
                    a.temporaryDisplay(!0)
                }
            },
            onload: function() {
                n([this.callback].concat(this.callbacks), function(a) {
                    a && void 0 !== this.index && a.apply(this, [this])
                }, this);
                w(this, "load");
                w(this, "render");
                e(this.index) && !1 !== this.options.chart.reflow && this.initReflow();
                this.onload = null
            }
        })
    })(N);
    (function(a) {
        var A, B = a.each,
            G = a.extend,
            F = a.erase,
            l = a.fireEvent,
            f = a.format,
            h = a.isArray,
            m = a.isNumber,
            r = a.pick,
            v = a.removeEvent;
        a.Point = A = function() {};
        a.Point.prototype = {
            init: function(a, e, f) {
                this.series = a;
                this.color = a.color;
                this.applyOptions(e, f);
                a.options.colorByPoint ? (e = a.options.colors || a.chart.options.colors, this.color = this.color || e[a.colorCounter], e = e.length, f = a.colorCounter, a.colorCounter++, a.colorCounter === e && (a.colorCounter = 0)) : f = a.colorIndex;
                this.colorIndex = r(this.colorIndex, f);
                a.chart.pointCount++;
                return this
            },
            applyOptions: function(a, e) {
                var d = this.series,
                    b = d.options.pointValKey || d.pointValKey;
                a = A.prototype.optionsToObject.call(this, a);
                G(this, a);
                this.options = this.options ? G(this.options, a) : a;
                a.group && delete this.group;
                b && (this.y = this[b]);
                this.isNull = r(this.isValid && !this.isValid(), null === this.x || !m(this.y, !0));
                this.selected && (this.state = "select");
                "name" in this && void 0 === e && d.xAxis && d.xAxis.hasNames && (this.x = d.xAxis.nameToX(this));
                void 0 === this.x && d && (this.x = void 0 === e ? d.autoIncrement(this) : e);
                return this
            },
            optionsToObject: function(a) {
                var d = {},
                    f = this.series,
                    b = f.options.keys,
                    c = b || f.pointArrayMap || ["y"],
                    l = c.length,
                    k = 0,
                    p = 0;
                if (m(a) || null === a) d[c[0]] = a;
                else if (h(a))
                    for (!b && a.length > l && (f = typeof a[0], "string" === f ? d.name = a[0] : "number" === f && (d.x = a[0]), k++); p < l;) b && void 0 === a[k] || (d[c[p]] = a[k]), k++, p++;
                else "object" === typeof a && (d = a, a.dataLabels && (f._hasPointLabels = !0), a.marker && (f._hasPointMarkers = !0));
                return d
            },
            getClassName: function() {
                return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ?
                    " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
            },
            getZone: function() {
                var a = this.series,
                    e = a.zones,
                    a = a.zoneAxis || "y",
                    f = 0,
                    b;
                for (b = e[f]; this[a] >= b.value;) b = e[++f];
                b && b.color && !this.options.color && (this.color = b.color);
                return b
            },
            destroy: function() {
                var a = this.series.chart,
                    e = a.hoverPoints,
                    f;
                a.pointCount--;
                e && (this.setState(),
                    F(e, this), e.length || (a.hoverPoints = null));
                if (this === a.hoverPoint) this.onMouseOut();
                if (this.graphic || this.dataLabel) v(this), this.destroyElements();
                this.legendItem && a.legend.destroyItem(this);
                for (f in this) this[f] = null
            },
            destroyElements: function() {
                for (var a = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], e, f = 6; f--;) e = a[f], this[e] && (this[e] = this[e].destroy())
            },
            getLabelConfig: function() {
                return {
                    x: this.category,
                    y: this.y,
                    color: this.color,
                    colorIndex: this.colorIndex,
                    key: this.name || this.category,
                    series: this.series,
                    point: this,
                    percentage: this.percentage,
                    total: this.total || this.stackTotal
                }
            },
            tooltipFormatter: function(a) {
                var d = this.series,
                    h = d.tooltipOptions,
                    b = r(h.valueDecimals, ""),
                    c = h.valuePrefix || "",
                    l = h.valueSuffix || "";
                B(d.pointArrayMap || ["y"], function(d) {
                    d = "{point." + d;
                    if (c || l) a = a.replace(d + "}", c + d + "}" + l);
                    a = a.replace(d + "}", d + ":,." + b + "f}")
                });
                return f(a, {
                    point: this,
                    series: this.series
                })
            },
            firePointEvent: function(a, e, f) {
                var b = this,
                    c = this.series.options;
                (c.point.events[a] || b.options && b.options.events &&
                    b.options.events[a]) && this.importEvents();
                "click" === a && c.allowPointSelect && (f = function(a) {
                    b.select && b.select(null, a.ctrlKey || a.metaKey || a.shiftKey)
                });
                l(this, a, e, f)
            },
            visible: !0
        }
    })(N);
    (function(a) {
        var A = a.addEvent,
            B = a.animObject,
            G = a.arrayMax,
            F = a.arrayMin,
            l = a.correctFloat,
            f = a.Date,
            h = a.defaultOptions,
            m = a.defaultPlotOptions,
            r = a.defined,
            v = a.each,
            d = a.erase,
            e = a.extend,
            n = a.fireEvent,
            b = a.grep,
            c = a.isArray,
            w = a.isNumber,
            k = a.isString,
            p = a.merge,
            C = a.objectEach,
            I = a.pick,
            y = a.removeEvent,
            K = a.splat,
            q = a.SVGElement,
            z =
            a.syncTimeout,
            J = a.win;
        a.Series = a.seriesType("line", null, {
            lineWidth: 2,
            allowPointSelect: !1,
            showCheckbox: !1,
            animation: {
                duration: 1E3
            },
            events: {},
            marker: {
                lineWidth: 0,
                lineColor: "#ffffff",
                radius: 4,
                states: {
                    hover: {
                        animation: {
                            duration: 50
                        },
                        enabled: !0,
                        radiusPlus: 2,
                        lineWidthPlus: 1
                    },
                    select: {
                        fillColor: "#cccccc",
                        lineColor: "#000000",
                        lineWidth: 2
                    }
                }
            },
            point: {
                events: {}
            },
            dataLabels: {
                align: "center",
                formatter: function() {
                    return null === this.y ? "" : a.numberFormat(this.y, -1)
                },
                style: {
                    fontSize: "11px",
                    fontWeight: "bold",
                    color: "contrast",
                    textOutline: "1px contrast"
                },
                verticalAlign: "bottom",
                x: 0,
                y: 0,
                padding: 5
            },
            cropThreshold: 300,
            pointRange: 0,
            softThreshold: !0,
            states: {
                hover: {
                    animation: {
                        duration: 50
                    },
                    lineWidthPlus: 1,
                    marker: {},
                    halo: {
                        size: 10,
                        opacity: .25
                    }
                },
                select: {
                    marker: {}
                }
            },
            stickyTracking: !0,
            turboThreshold: 1E3,
            findNearestPointBy: "x"
        }, {
            isCartesian: !0,
            pointClass: a.Point,
            sorted: !0,
            requireSorting: !0,
            directTouch: !1,
            axisTypes: ["xAxis", "yAxis"],
            colorCounter: 0,
            parallelArrays: ["x", "y"],
            coll: "series",
            init: function(a, b) {
                var c = this,
                    d, g = a.series,
                    f;
                c.chart =
                    a;
                c.options = b = c.setOptions(b);
                c.linkedSeries = [];
                c.bindAxes();
                e(c, {
                    name: b.name,
                    state: "",
                    visible: !1 !== b.visible,
                    selected: !0 === b.selected
                });
                d = b.events;
                C(d, function(a, b) {
                    A(c, b, a)
                });
                if (d && d.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0;
                c.getColor();
                c.getSymbol();
                v(c.parallelArrays, function(a) {
                    c[a + "Data"] = []
                });
                c.setData(b.data, !1);
                c.isCartesian && (a.hasCartesianSeries = !0);
                g.length && (f = g[g.length - 1]);
                c._i = I(f && f._i, -1) + 1;
                a.orderSeries(this.insert(g))
            },
            insert: function(a) {
                var b =
                    this.options.index,
                    c;
                if (w(b)) {
                    for (c = a.length; c--;)
                        if (b >= I(a[c].options.index, a[c]._i)) {
                            a.splice(c + 1, 0, this);
                            break
                        } - 1 === c && a.unshift(this);
                    c += 1
                } else a.push(this);
                return I(c, a.length - 1)
            },
            bindAxes: function() {
                var b = this,
                    c = b.options,
                    d = b.chart,
                    e;
                v(b.axisTypes || [], function(g) {
                    v(d[g], function(a) {
                        e = a.options;
                        if (c[g] === e.index || void 0 !== c[g] && c[g] === e.id || void 0 === c[g] && 0 === e.index) b.insert(a.series), b[g] = a, a.isDirty = !0
                    });
                    b[g] || b.optionalAxis === g || a.error(18, !0)
                })
            },
            updateParallelArrays: function(a, b) {
                var c =
                    a.series,
                    d = arguments,
                    g = w(b) ? function(d) {
                        var g = "y" === d && c.toYData ? c.toYData(a) : a[d];
                        c[d + "Data"][b] = g
                    } : function(a) {
                        Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2))
                    };
                v(c.parallelArrays, g)
            },
            autoIncrement: function() {
                var a = this.options,
                    b = this.xIncrement,
                    c, d = a.pointIntervalUnit,
                    b = I(b, a.pointStart, 0);
                this.pointInterval = c = I(this.pointInterval, a.pointInterval, 1);
                d && (a = new f(b), "day" === d ? a = +a[f.hcSetDate](a[f.hcGetDate]() + c) : "month" === d ? a = +a[f.hcSetMonth](a[f.hcGetMonth]() + c) : "year" === d &&
                    (a = +a[f.hcSetFullYear](a[f.hcGetFullYear]() + c)), c = a - b);
                this.xIncrement = b + c;
                return b
            },
            setOptions: function(a) {
                var b = this.chart,
                    c = b.options,
                    d = c.plotOptions,
                    g = (b.userOptions || {}).plotOptions || {},
                    e = d[this.type];
                this.userOptions = a;
                b = p(e, d.series, a);
                this.tooltipOptions = p(h.tooltip, h.plotOptions.series && h.plotOptions.series.tooltip, h.plotOptions[this.type].tooltip, c.tooltip.userOptions, d.series && d.series.tooltip, d[this.type].tooltip, a.tooltip);
                this.stickyTracking = I(a.stickyTracking, g[this.type] && g[this.type].stickyTracking,
                    g.series && g.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : b.stickyTracking);
                null === e.marker && delete b.marker;
                this.zoneAxis = b.zoneAxis;
                a = this.zones = (b.zones || []).slice();
                !b.negativeColor && !b.negativeFillColor || b.zones || a.push({
                    value: b[this.zoneAxis + "Threshold"] || b.threshold || 0,
                    className: "highcharts-negative",
                    color: b.negativeColor,
                    fillColor: b.negativeFillColor
                });
                a.length && r(a[a.length - 1].value) && a.push({
                    color: this.color,
                    fillColor: this.fillColor
                });
                return b
            },
            getCyclic: function(a,
                b, c) {
                var d, g = this.chart,
                    e = this.userOptions,
                    f = a + "Index",
                    k = a + "Counter",
                    t = c ? c.length : I(g.options.chart[a + "Count"], g[a + "Count"]);
                b || (d = I(e[f], e["_" + f]), r(d) || (g.series.length || (g[k] = 0), e["_" + f] = d = g[k] % t, g[k] += 1), c && (b = c[d]));
                void 0 !== d && (this[f] = d);
                this[a] = b
            },
            getColor: function() {
                this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || m[this.type].color, this.chart.options.colors)
            },
            getSymbol: function() {
                this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols)
            },
            drawLegendSymbol: a.LegendSymbolMixin.drawLineMarker,
            setData: function(b, d, e, f) {
                var g = this,
                    t = g.points,
                    h = t && t.length || 0,
                    p, n = g.options,
                    q = g.chart,
                    l = null,
                    m = g.xAxis,
                    y = n.turboThreshold,
                    D = this.xData,
                    E = this.yData,
                    z = (p = g.pointArrayMap) && p.length;
                b = b || [];
                p = b.length;
                d = I(d, !0);
                if (!1 !== f && p && h === p && !g.cropped && !g.hasGroupedData && g.visible) v(b, function(a, b) {
                    t[b].update && a !== n.data[b] && t[b].update(a, !1, null, !1)
                });
                else {
                    g.xIncrement = null;
                    g.colorCounter = 0;
                    v(this.parallelArrays, function(a) {
                        g[a + "Data"].length = 0
                    });
                    if (y &&
                        p > y) {
                        for (e = 0; null === l && e < p;) l = b[e], e++;
                        if (w(l))
                            for (e = 0; e < p; e++) D[e] = this.autoIncrement(), E[e] = b[e];
                        else if (c(l))
                            if (z)
                                for (e = 0; e < p; e++) l = b[e], D[e] = l[0], E[e] = l.slice(1, z + 1);
                            else
                                for (e = 0; e < p; e++) l = b[e], D[e] = l[0], E[e] = l[1];
                        else a.error(12)
                    } else
                        for (e = 0; e < p; e++) void 0 !== b[e] && (l = {
                            series: g
                        }, g.pointClass.prototype.applyOptions.apply(l, [b[e]]), g.updateParallelArrays(l, e));
                    E && k(E[0]) && a.error(14, !0);
                    g.data = [];
                    g.options.data = g.userOptions.data = b;
                    for (e = h; e--;) t[e] && t[e].destroy && t[e].destroy();
                    m && (m.minRange =
                        m.userMinRange);
                    g.isDirty = q.isDirtyBox = !0;
                    g.isDirtyData = !!t;
                    e = !1
                }
                "point" === n.legendType && (this.processData(), this.generatePoints());
                d && q.redraw(e)
            },
            processData: function(b) {
                var c = this.xData,
                    d = this.yData,
                    e = c.length,
                    g;
                g = 0;
                var f, k, t = this.xAxis,
                    h, p = this.options;
                h = p.cropThreshold;
                var n = this.getExtremesFromAll || p.getExtremesFromAll,
                    q = this.isCartesian,
                    p = t && t.val2lin,
                    l = t && t.isLog,
                    m, w;
                if (q && !this.isDirty && !t.isDirty && !this.yAxis.isDirty && !b) return !1;
                t && (b = t.getExtremes(), m = b.min, w = b.max);
                if (q && this.sorted &&
                    !n && (!h || e > h || this.forceCrop))
                    if (c[e - 1] < m || c[0] > w) c = [], d = [];
                    else if (c[0] < m || c[e - 1] > w) g = this.cropData(this.xData, this.yData, m, w), c = g.xData, d = g.yData, g = g.start, f = !0;
                for (h = c.length || 1; --h;) e = l ? p(c[h]) - p(c[h - 1]) : c[h] - c[h - 1], 0 < e && (void 0 === k || e < k) ? k = e : 0 > e && this.requireSorting && a.error(15);
                this.cropped = f;
                this.cropStart = g;
                this.processedXData = c;
                this.processedYData = d;
                this.closestPointRange = k
            },
            cropData: function(a, b, c, d) {
                var e = a.length,
                    f = 0,
                    k = e,
                    t = I(this.cropShoulder, 1),
                    h;
                for (h = 0; h < e; h++)
                    if (a[h] >= c) {
                        f = Math.max(0,
                            h - t);
                        break
                    }
                for (c = h; c < e; c++)
                    if (a[c] > d) {
                        k = c + t;
                        break
                    }
                return {
                    xData: a.slice(f, k),
                    yData: b.slice(f, k),
                    start: f,
                    end: k
                }
            },
            generatePoints: function() {
                var a = this.options,
                    b = a.data,
                    c = this.data,
                    d, e = this.processedXData,
                    f = this.processedYData,
                    k = this.pointClass,
                    h = e.length,
                    p = this.cropStart || 0,
                    n, q = this.hasGroupedData,
                    a = a.keys,
                    l, m = [],
                    w;
                c || q || (c = [], c.length = b.length, c = this.data = c);
                a && q && (this.options.keys = !1);
                for (w = 0; w < h; w++) n = p + w, q ? (l = (new k).init(this, [e[w]].concat(K(f[w]))), l.dataGroup = this.groupMap[w]) : (l = c[n]) || void 0 ===
                    b[n] || (c[n] = l = (new k).init(this, b[n], e[w])), l && (l.index = n, m[w] = l);
                this.options.keys = a;
                if (c && (h !== (d = c.length) || q))
                    for (w = 0; w < d; w++) w !== p || q || (w += h), c[w] && (c[w].destroyElements(), c[w].plotX = void 0);
                this.data = c;
                this.points = m
            },
            getExtremes: function(a) {
                var b = this.yAxis,
                    d = this.processedXData,
                    e, g = [],
                    f = 0;
                e = this.xAxis.getExtremes();
                var k = e.min,
                    t = e.max,
                    h, p, n, q;
                a = a || this.stackedYData || this.processedYData || [];
                e = a.length;
                for (q = 0; q < e; q++)
                    if (p = d[q], n = a[q], h = (w(n, !0) || c(n)) && (!b.positiveValuesOnly || n.length || 0 < n),
                        p = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (d[q + 1] || p) >= k && (d[q - 1] || p) <= t, h && p)
                        if (h = n.length)
                            for (; h--;) null !== n[h] && (g[f++] = n[h]);
                        else g[f++] = n;
                this.dataMin = F(g);
                this.dataMax = G(g)
            },
            translate: function() {
                this.processedXData || this.processData();
                this.generatePoints();
                var a = this.options,
                    b = a.stacking,
                    c = this.xAxis,
                    d = c.categories,
                    e = this.yAxis,
                    f = this.points,
                    k = f.length,
                    h = !!this.modifyValue,
                    p = a.pointPlacement,
                    n = "between" === p || w(p),
                    q = a.threshold,
                    m = a.startFromThreshold ? q : 0,
                    y, z, v,
                    K, J = Number.MAX_VALUE;
                "between" === p && (p = .5);
                w(p) && (p *= I(a.pointRange || c.pointRange));
                for (a = 0; a < k; a++) {
                    var C = f[a],
                        A = C.x,
                        B = C.y;
                    z = C.low;
                    var F = b && e.stacks[(this.negStacks && B < (m ? 0 : q) ? "-" : "") + this.stackKey],
                        G;
                    e.positiveValuesOnly && null !== B && 0 >= B && (C.isNull = !0);
                    C.plotX = y = l(Math.min(Math.max(-1E5, c.translate(A, 0, 0, 0, 1, p, "flags" === this.type)), 1E5));
                    b && this.visible && !C.isNull && F && F[A] && (K = this.getStackIndicator(K, A, this.index), G = F[A], B = G.points[K.key], z = B[0], B = B[1], z === m && K.key === F[A].base && (z = I(q, e.min)), e.positiveValuesOnly &&
                        0 >= z && (z = null), C.total = C.stackTotal = G.total, C.percentage = G.total && C.y / G.total * 100, C.stackY = B, G.setOffset(this.pointXOffset || 0, this.barW || 0));
                    C.yBottom = r(z) ? e.translate(z, 0, 1, 0, 1) : null;
                    h && (B = this.modifyValue(B, C));
                    C.plotY = z = "number" === typeof B && Infinity !== B ? Math.min(Math.max(-1E5, e.translate(B, 0, 1, 0, 1)), 1E5) : void 0;
                    C.isInside = void 0 !== z && 0 <= z && z <= e.len && 0 <= y && y <= c.len;
                    C.clientX = n ? l(c.translate(A, 0, 0, 0, 1, p)) : y;
                    C.negative = C.y < (q || 0);
                    C.category = d && void 0 !== d[C.x] ? d[C.x] : C.x;
                    C.isNull || (void 0 !== v && (J =
                        Math.min(J, Math.abs(y - v))), v = y);
                    C.zone = this.zones.length && C.getZone()
                }
                this.closestPointRangePx = J
            },
            getValidPoints: function(a, c) {
                var d = this.chart;
                return b(a || this.points || [], function(a) {
                    return c && !d.isInsidePlot(a.plotX, a.plotY, d.inverted) ? !1 : !a.isNull
                })
            },
            setClip: function(a) {
                var b = this.chart,
                    c = this.options,
                    d = b.renderer,
                    e = b.inverted,
                    f = this.clipBox,
                    k = f || b.clipBox,
                    t = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, k.height, c.xAxis, c.yAxis].join(),
                    h = b[t],
                    p = b[t + "m"];
                h || (a && (k.width = 0, e && (k.x =
                    b.plotSizeX), b[t + "m"] = p = d.clipRect(e ? b.plotSizeX + 99 : -99, e ? -b.plotLeft : -b.plotTop, 99, e ? b.chartWidth : b.chartHeight)), b[t] = h = d.clipRect(k), h.count = {
                    length: 0
                });
                a && !h.count[this.index] && (h.count[this.index] = !0, h.count.length += 1);
                !1 !== c.clip && (this.group.clip(a || f ? h : b.clipRect), this.markerGroup.clip(p), this.sharedClipKey = t);
                a || (h.count[this.index] && (delete h.count[this.index], --h.count.length), 0 === h.count.length && t && b[t] && (f || (b[t] = b[t].destroy()), b[t + "m"] && (b[t + "m"] = b[t + "m"].destroy())))
            },
            animate: function(a) {
                var b =
                    this.chart,
                    c = B(this.options.animation),
                    d;
                a ? this.setClip(c) : (d = this.sharedClipKey, (a = b[d]) && a.animate({
                    width: b.plotSizeX,
                    x: 0
                }, c), b[d + "m"] && b[d + "m"].animate({
                    width: b.plotSizeX + 99,
                    x: 0
                }, c), this.animate = null)
            },
            afterAnimate: function() {
                this.setClip();
                n(this, "afterAnimate");
                this.finishedAnimating = !0
            },
            drawPoints: function() {
                var a = this.points,
                    b = this.chart,
                    c, d, e, f, k = this.options.marker,
                    h, p, n, q, l = this[this.specialGroup] || this.markerGroup,
                    m = I(k.enabled, this.xAxis.isRadial ? !0 : null, this.closestPointRangePx >= 2 * k.radius);
                if (!1 !== k.enabled || this._hasPointMarkers)
                    for (d = 0; d < a.length; d++) e = a[d], c = e.plotY, f = e.graphic, h = e.marker || {}, p = !!e.marker, n = m && void 0 === h.enabled || h.enabled, q = e.isInside, n && w(c) && null !== e.y ? (c = I(h.symbol, this.symbol), e.hasImage = 0 === c.indexOf("url"), n = this.markerAttribs(e, e.selected && "select"), f ? f[q ? "show" : "hide"](!0).animate(n) : q && (0 < n.width || e.hasImage) && (e.graphic = f = b.renderer.symbol(c, n.x, n.y, n.width, n.height, p ? h : k).add(l)), f && f.attr(this.pointAttribs(e, e.selected && "select")), f && f.addClass(e.getClassName(), !0)) : f && (e.graphic = f.destroy())
            },
            markerAttribs: function(a, b) {
                var c = this.options.marker,
                    d = a.marker || {},
                    e = I(d.radius, c.radius);
                b && (c = c.states[b], b = d.states && d.states[b], e = I(b && b.radius, c && c.radius, e + (c && c.radiusPlus || 0)));
                a.hasImage && (e = 0);
                a = {
                    x: Math.floor(a.plotX) - e,
                    y: a.plotY - e
                };
                e && (a.width = a.height = 2 * e);
                return a
            },
            pointAttribs: function(a, b) {
                var c = this.options.marker,
                    d = a && a.options,
                    e = d && d.marker || {},
                    f = this.color,
                    k = d && d.color,
                    t = a && a.color,
                    d = I(e.lineWidth, c.lineWidth);
                a = a && a.zone && a.zone.color;
                f = k || a ||
                    t || f;
                a = e.fillColor || c.fillColor || f;
                f = e.lineColor || c.lineColor || f;
                b && (c = c.states[b], b = e.states && e.states[b] || {}, d = I(b.lineWidth, c.lineWidth, d + I(b.lineWidthPlus, c.lineWidthPlus, 0)), a = b.fillColor || c.fillColor || a, f = b.lineColor || c.lineColor || f);
                return {
                    stroke: f,
                    "stroke-width": d,
                    fill: a
                }
            },
            destroy: function() {
                var a = this,
                    b = a.chart,
                    c = /AppleWebKit\/533/.test(J.navigator.userAgent),
                    e, g, f = a.data || [],
                    k, h;
                n(a, "destroy");
                y(a);
                v(a.axisTypes || [], function(b) {
                    (h = a[b]) && h.series && (d(h.series, a), h.isDirty = h.forceRedraw = !0)
                });
                a.legendItem && a.chart.legend.destroyItem(a);
                for (g = f.length; g--;)(k = f[g]) && k.destroy && k.destroy();
                a.points = null;
                clearTimeout(a.animationTimeout);
                C(a, function(a, b) {
                    a instanceof q && !a.survive && (e = c && "group" === b ? "hide" : "destroy", a[e]())
                });
                b.hoverSeries === a && (b.hoverSeries = null);
                d(b.series, a);
                b.orderSeries();
                C(a, function(b, c) {
                    delete a[c]
                })
            },
            getGraphPath: function(a, b, c) {
                var d = this,
                    e = d.options,
                    f = e.step,
                    k, h = [],
                    t = [],
                    p;
                a = a || d.points;
                (k = a.reversed) && a.reverse();
                (f = {
                    right: 1,
                    center: 2
                }[f] || f && 3) && k && (f = 4 -
                    f);
                !e.connectNulls || b || c || (a = this.getValidPoints(a));
                v(a, function(g, k) {
                    var n = g.plotX,
                        q = g.plotY,
                        l = a[k - 1];
                    (g.leftCliff || l && l.rightCliff) && !c && (p = !0);
                    g.isNull && !r(b) && 0 < k ? p = !e.connectNulls : g.isNull && !b ? p = !0 : (0 === k || p ? k = ["M", g.plotX, g.plotY] : d.getPointSpline ? k = d.getPointSpline(a, g, k) : f ? (k = 1 === f ? ["L", l.plotX, q] : 2 === f ? ["L", (l.plotX + n) / 2, l.plotY, "L", (l.plotX + n) / 2, q] : ["L", n, l.plotY], k.push("L", n, q)) : k = ["L", n, q], t.push(g.x), f && t.push(g.x), h.push.apply(h, k), p = !1)
                });
                h.xMap = t;
                return d.graphPath = h
            },
            drawGraph: function() {
                var a =
                    this,
                    b = this.options,
                    c = (this.gappedPath || this.getGraphPath).call(this),
                    d = [
                        ["graph", "highcharts-graph", b.lineColor || this.color, b.dashStyle]
                    ];
                v(this.zones, function(c, e) {
                    d.push(["zone-graph-" + e, "highcharts-graph highcharts-zone-graph-" + e + " " + (c.className || ""), c.color || a.color, c.dashStyle || b.dashStyle])
                });
                v(d, function(d, e) {
                    var g = d[0],
                        f = a[g];
                    f ? (f.endX = c.xMap, f.animate({
                        d: c
                    })) : c.length && (a[g] = a.chart.renderer.path(c).addClass(d[1]).attr({
                        zIndex: 1
                    }).add(a.group), f = {
                        stroke: d[2],
                        "stroke-width": b.lineWidth,
                        fill: a.fillGraph && a.color || "none"
                    }, d[3] ? f.dashstyle = d[3] : "square" !== b.linecap && (f["stroke-linecap"] = f["stroke-linejoin"] = "round"), f = a[g].attr(f).shadow(2 > e && b.shadow));
                    f && (f.startX = c.xMap, f.isArea = c.isArea)
                })
            },
            applyZones: function() {
                var a = this,
                    b = this.chart,
                    c = b.renderer,
                    d = this.zones,
                    e, f, k = this.clips || [],
                    h, p = this.graph,
                    n = this.area,
                    q = Math.max(b.chartWidth, b.chartHeight),
                    l = this[(this.zoneAxis || "y") + "Axis"],
                    m, w, y = b.inverted,
                    z, r, K, C, J = !1;
                d.length && (p || n) && l && void 0 !== l.min && (w = l.reversed, z = l.horiz, p && p.hide(),
                    n && n.hide(), m = l.getExtremes(), v(d, function(d, g) {
                        e = w ? z ? b.plotWidth : 0 : z ? 0 : l.toPixels(m.min);
                        e = Math.min(Math.max(I(f, e), 0), q);
                        f = Math.min(Math.max(Math.round(l.toPixels(I(d.value, m.max), !0)), 0), q);
                        J && (e = f = l.toPixels(m.max));
                        r = Math.abs(e - f);
                        K = Math.min(e, f);
                        C = Math.max(e, f);
                        l.isXAxis ? (h = {
                            x: y ? C : K,
                            y: 0,
                            width: r,
                            height: q
                        }, z || (h.x = b.plotHeight - h.x)) : (h = {
                            x: 0,
                            y: y ? C : K,
                            width: q,
                            height: r
                        }, z && (h.y = b.plotWidth - h.y));
                        y && c.isVML && (h = l.isXAxis ? {
                            x: 0,
                            y: w ? K : C,
                            height: h.width,
                            width: b.chartWidth
                        } : {
                            x: h.y - b.plotLeft - b.spacingBox.x,
                            y: 0,
                            width: h.height,
                            height: b.chartHeight
                        });
                        k[g] ? k[g].animate(h) : (k[g] = c.clipRect(h), p && a["zone-graph-" + g].clip(k[g]), n && a["zone-area-" + g].clip(k[g]));
                        J = d.value > m.max
                    }), this.clips = k)
            },
            invertGroups: function(a) {
                function b() {
                    v(["group", "markerGroup"], function(b) {
                        c[b] && (d.renderer.isVML && c[b].attr({
                            width: c.yAxis.len,
                            height: c.xAxis.len
                        }), c[b].width = c.yAxis.len, c[b].height = c.xAxis.len, c[b].invert(a))
                    })
                }
                var c = this,
                    d = c.chart,
                    e;
                c.xAxis && (e = A(d, "resize", b), A(c, "destroy", e), b(a), c.invertGroups = b)
            },
            plotGroup: function(a,
                b, c, d, e) {
                var g = this[a],
                    f = !g;
                f && (this[a] = g = this.chart.renderer.g().attr({
                    zIndex: d || .1
                }).add(e));
                g.addClass("highcharts-" + b + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (r(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (g.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0);
                g.attr({
                    visibility: c
                })[f ? "attr" : "animate"](this.getPlotBox());
                return g
            },
            getPlotBox: function() {
                var a = this.chart,
                    b = this.xAxis,
                    c = this.yAxis;
                a.inverted && (b = c,
                    c = this.xAxis);
                return {
                    translateX: b ? b.left : a.plotLeft,
                    translateY: c ? c.top : a.plotTop,
                    scaleX: 1,
                    scaleY: 1
                }
            },
            render: function() {
                var a = this,
                    b = a.chart,
                    c, d = a.options,
                    e = !!a.animate && b.renderer.isSVG && B(d.animation).duration,
                    f = a.visible ? "inherit" : "hidden",
                    k = d.zIndex,
                    h = a.hasRendered,
                    p = b.seriesGroup,
                    n = b.inverted;
                c = a.plotGroup("group", "series", f, k, p);
                a.markerGroup = a.plotGroup("markerGroup", "markers", f, k, p);
                e && a.animate(!0);
                c.inverted = a.isCartesian ? n : !1;
                a.drawGraph && (a.drawGraph(), a.applyZones());
                a.drawDataLabels &&
                    a.drawDataLabels();
                a.visible && a.drawPoints();
                a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();
                a.invertGroups(n);
                !1 === d.clip || a.sharedClipKey || h || c.clip(b.clipRect);
                e && a.animate();
                h || (a.animationTimeout = z(function() {
                    a.afterAnimate()
                }, e));
                a.isDirty = !1;
                a.hasRendered = !0
            },
            redraw: function() {
                var a = this.chart,
                    b = this.isDirty || this.isDirtyData,
                    c = this.group,
                    d = this.xAxis,
                    e = this.yAxis;
                c && (a.inverted && c.attr({
                    width: a.plotWidth,
                    height: a.plotHeight
                }), c.animate({
                    translateX: I(d && d.left, a.plotLeft),
                    translateY: I(e && e.top, a.plotTop)
                }));
                this.translate();
                this.render();
                b && delete this.kdTree
            },
            kdAxisArray: ["clientX", "plotY"],
            searchPoint: function(a, b) {
                var c = this.xAxis,
                    d = this.yAxis,
                    e = this.chart.inverted;
                return this.searchKDTree({
                    clientX: e ? c.len - a.chartY + c.pos : a.chartX - c.pos,
                    plotY: e ? d.len - a.chartX + d.pos : a.chartY - d.pos
                }, b)
            },
            buildKDTree: function() {
                function a(c, d, e) {
                    var f, g;
                    if (g = c && c.length) return f = b.kdAxisArray[d % e], c.sort(function(a, b) {
                        return a[f] - b[f]
                    }), g = Math.floor(g / 2), {
                        point: c[g],
                        left: a(c.slice(0,
                            g), d + 1, e),
                        right: a(c.slice(g + 1), d + 1, e)
                    }
                }
                this.buildingKdTree = !0;
                var b = this,
                    c = -1 < b.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                delete b.kdTree;
                z(function() {
                    b.kdTree = a(b.getValidPoints(null, !b.directTouch), c, c);
                    b.buildingKdTree = !1
                }, b.options.kdNow ? 0 : 1)
            },
            searchKDTree: function(a, b) {
                function c(a, b, g, h) {
                    var p = b.point,
                        n = d.kdAxisArray[g % h],
                        q, l, t = p;
                    l = r(a[e]) && r(p[e]) ? Math.pow(a[e] - p[e], 2) : null;
                    q = r(a[f]) && r(p[f]) ? Math.pow(a[f] - p[f], 2) : null;
                    q = (l || 0) + (q || 0);
                    p.dist = r(q) ? Math.sqrt(q) : Number.MAX_VALUE;
                    p.distX = r(l) ?
                        Math.sqrt(l) : Number.MAX_VALUE;
                    n = a[n] - p[n];
                    q = 0 > n ? "left" : "right";
                    l = 0 > n ? "right" : "left";
                    b[q] && (q = c(a, b[q], g + 1, h), t = q[k] < t[k] ? q : p);
                    b[l] && Math.sqrt(n * n) < t[k] && (a = c(a, b[l], g + 1, h), t = a[k] < t[k] ? a : t);
                    return t
                }
                var d = this,
                    e = this.kdAxisArray[0],
                    f = this.kdAxisArray[1],
                    k = b ? "distX" : "dist";
                b = -1 < d.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                this.kdTree || this.buildingKdTree || this.buildKDTree();
                if (this.kdTree) return c(a, this.kdTree, b, b)
            }
        })
    })(N);
    (function(a) {
        var A = a.Axis,
            B = a.Chart,
            G = a.correctFloat,
            F = a.defined,
            l = a.destroyObjectProperties,
            f = a.each,
            h = a.format,
            m = a.objectEach,
            r = a.pick,
            v = a.Series;
        a.StackItem = function(a, e, f, b, c) {
            var d = a.chart.inverted;
            this.axis = a;
            this.isNegative = f;
            this.options = e;
            this.x = b;
            this.total = null;
            this.points = {};
            this.stack = c;
            this.rightCliff = this.leftCliff = 0;
            this.alignOptions = {
                align: e.align || (d ? f ? "left" : "right" : "center"),
                verticalAlign: e.verticalAlign || (d ? "middle" : f ? "bottom" : "top"),
                y: r(e.y, d ? 4 : f ? 14 : -6),
                x: r(e.x, d ? f ? -6 : 6 : 0)
            };
            this.textAlign = e.textAlign || (d ? f ? "right" : "left" : "center")
        };
        a.StackItem.prototype = {
            destroy: function() {
                l(this,
                    this.axis)
            },
            render: function(a) {
                var d = this.options,
                    f = d.format,
                    f = f ? h(f, this) : d.formatter.call(this);
                this.label ? this.label.attr({
                    text: f,
                    visibility: "hidden"
                }) : this.label = this.axis.chart.renderer.text(f, null, null, d.useHTML).css(d.style).attr({
                    align: this.textAlign,
                    rotation: d.rotation,
                    visibility: "hidden"
                }).add(a)
            },
            setOffset: function(a, e) {
                var d = this.axis,
                    b = d.chart,
                    c = d.translate(d.usePercentage ? 100 : this.total, 0, 0, 0, 1),
                    d = d.translate(0),
                    d = Math.abs(c - d);
                a = b.xAxis[0].translate(this.x) + a;
                c = this.getStackBox(b, this,
                    a, c, e, d);
                if (e = this.label) e.align(this.alignOptions, null, c), c = e.alignAttr, e[!1 === this.options.crop || b.isInsidePlot(c.x, c.y) ? "show" : "hide"](!0)
            },
            getStackBox: function(a, e, f, b, c, h) {
                var d = e.axis.reversed,
                    p = a.inverted;
                a = a.plotHeight;
                e = e.isNegative && !d || !e.isNegative && d;
                return {
                    x: p ? e ? b : b - h : f,
                    y: p ? a - f - c : e ? a - b - h : a - b,
                    width: p ? h : c,
                    height: p ? c : h
                }
            }
        };
        B.prototype.getStacks = function() {
            var a = this;
            f(a.yAxis, function(a) {
                a.stacks && a.hasVisibleSeries && (a.oldStacks = a.stacks)
            });
            f(a.series, function(d) {
                !d.options.stacking || !0 !==
                    d.visible && !1 !== a.options.chart.ignoreHiddenSeries || (d.stackKey = d.type + r(d.options.stack, ""))
            })
        };
        A.prototype.buildStacks = function() {
            var a = this.series,
                e = r(this.options.reversedStacks, !0),
                f = a.length,
                b;
            if (!this.isXAxis) {
                this.usePercentage = !1;
                for (b = f; b--;) a[e ? b : f - b - 1].setStackedPoints();
                for (b = 0; b < f; b++) a[b].modifyStacks()
            }
        };
        A.prototype.renderStackTotals = function() {
            var a = this.chart,
                e = a.renderer,
                f = this.stacks,
                b = this.stackTotalGroup;
            b || (this.stackTotalGroup = b = e.g("stack-labels").attr({
                visibility: "visible",
                zIndex: 6
            }).add());
            b.translate(a.plotLeft, a.plotTop);
            m(f, function(a) {
                m(a, function(a) {
                    a.render(b)
                })
            })
        };
        A.prototype.resetStacks = function() {
            var a = this,
                e = a.stacks;
            a.isXAxis || m(e, function(d) {
                m(d, function(b, c) {
                    b.touched < a.stacksTouched ? (b.destroy(), delete d[c]) : (b.total = null, b.cum = null)
                })
            })
        };
        A.prototype.cleanStacks = function() {
            var a;
            this.isXAxis || (this.oldStacks && (a = this.stacks = this.oldStacks), m(a, function(a) {
                m(a, function(a) {
                    a.cum = a.total
                })
            }))
        };
        v.prototype.setStackedPoints = function() {
            if (this.options.stacking &&
                (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
                var d = this.processedXData,
                    e = this.processedYData,
                    f = [],
                    b = e.length,
                    c = this.options,
                    h = c.threshold,
                    k = c.startFromThreshold ? h : 0,
                    p = c.stack,
                    c = c.stacking,
                    l = this.stackKey,
                    m = "-" + l,
                    y = this.negStacks,
                    v = this.yAxis,
                    q = v.stacks,
                    z = v.oldStacks,
                    J, t, D, E, H, g, u;
                v.stacksTouched += 1;
                for (H = 0; H < b; H++) g = d[H], u = e[H], J = this.getStackIndicator(J, g, this.index), E = J.key, D = (t = y && u < (k ? 0 : h)) ? m : l, q[D] || (q[D] = {}), q[D][g] || (z[D] && z[D][g] ? (q[D][g] = z[D][g], q[D][g].total = null) :
                    q[D][g] = new a.StackItem(v, v.options.stackLabels, t, g, p)), D = q[D][g], null !== u && (D.points[E] = D.points[this.index] = [r(D.cum, k)], F(D.cum) || (D.base = E), D.touched = v.stacksTouched, 0 < J.index && !1 === this.singleStacks && (D.points[E][0] = D.points[this.index + "," + g + ",0"][0])), "percent" === c ? (t = t ? l : m, y && q[t] && q[t][g] ? (t = q[t][g], D.total = t.total = Math.max(t.total, D.total) + Math.abs(u) || 0) : D.total = G(D.total + (Math.abs(u) || 0))) : D.total = G(D.total + (u || 0)), D.cum = r(D.cum, k) + (u || 0), null !== u && (D.points[E].push(D.cum), f[H] = D.cum);
                "percent" === c && (v.usePercentage = !0);
                this.stackedYData = f;
                v.oldStacks = {}
            }
        };
        v.prototype.modifyStacks = function() {
            var a = this,
                e = a.stackKey,
                h = a.yAxis.stacks,
                b = a.processedXData,
                c, l = a.options.stacking;
            a[l + "Stacker"] && f([e, "-" + e], function(d) {
                for (var e = b.length, f, k; e--;)
                    if (f = b[e], c = a.getStackIndicator(c, f, a.index, d), k = (f = h[d] && h[d][f]) && f.points[c.key]) a[l + "Stacker"](k, f, e)
            })
        };
        v.prototype.percentStacker = function(a, e, f) {
            e = e.total ? 100 / e.total : 0;
            a[0] = G(a[0] * e);
            a[1] = G(a[1] * e);
            this.stackedYData[f] = a[1]
        };
        v.prototype.getStackIndicator =
            function(a, e, f, b) {
                !F(a) || a.x !== e || b && a.key !== b ? a = {
                    x: e,
                    index: 0,
                    key: b
                } : a.index++;
                a.key = [f, e, a.index].join();
                return a
            }
    })(N);
    (function(a) {
        var A = a.addEvent,
            B = a.animate,
            G = a.Axis,
            F = a.createElement,
            l = a.css,
            f = a.defined,
            h = a.each,
            m = a.erase,
            r = a.extend,
            v = a.fireEvent,
            d = a.inArray,
            e = a.isNumber,
            n = a.isObject,
            b = a.isArray,
            c = a.merge,
            w = a.objectEach,
            k = a.pick,
            p = a.Point,
            C = a.Series,
            I = a.seriesTypes,
            y = a.setAnimation,
            K = a.splat;
        r(a.Chart.prototype, {
            addSeries: function(a, b, c) {
                var d, e = this;
                a && (b = k(b, !0), v(e, "addSeries", {
                        options: a
                    },
                    function() {
                        d = e.initSeries(a);
                        e.isDirtyLegend = !0;
                        e.linkSeries();
                        b && e.redraw(c)
                    }));
                return d
            },
            addAxis: function(a, b, d, e) {
                var f = b ? "xAxis" : "yAxis",
                    h = this.options;
                a = c(a, {
                    index: this[f].length,
                    isX: b
                });
                b = new G(this, a);
                h[f] = K(h[f] || {});
                h[f].push(a);
                k(d, !0) && this.redraw(e);
                return b
            },
            showLoading: function(a) {
                var b = this,
                    c = b.options,
                    d = b.loadingDiv,
                    e = c.loading,
                    f = function() {
                        d && l(d, {
                            left: b.plotLeft + "px",
                            top: b.plotTop + "px",
                            width: b.plotWidth + "px",
                            height: b.plotHeight + "px"
                        })
                    };
                d || (b.loadingDiv = d = F("div", {
                        className: "highcharts-loading highcharts-loading-hidden"
                    },
                    null, b.container), b.loadingSpan = F("span", {
                    className: "highcharts-loading-inner"
                }, null, d), A(b, "redraw", f));
                d.className = "highcharts-loading";
                b.loadingSpan.innerHTML = a || c.lang.loading;
                l(d, r(e.style, {
                    zIndex: 10
                }));
                l(b.loadingSpan, e.labelStyle);
                b.loadingShown || (l(d, {
                    opacity: 0,
                    display: ""
                }), B(d, {
                    opacity: e.style.opacity || .5
                }, {
                    duration: e.showDuration || 0
                }));
                b.loadingShown = !0;
                f()
            },
            hideLoading: function() {
                var a = this.options,
                    b = this.loadingDiv;
                b && (b.className = "highcharts-loading highcharts-loading-hidden", B(b, {
                    opacity: 0
                }, {
                    duration: a.loading.hideDuration || 100,
                    complete: function() {
                        l(b, {
                            display: "none"
                        })
                    }
                }));
                this.loadingShown = !1
            },
            propsRequireDirtyBox: "backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
            propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions tooltip".split(" "),
            update: function(a, b, p) {
                var l = this,
                    n = {
                        credits: "addCredits",
                        title: "setTitle",
                        subtitle: "setSubtitle"
                    },
                    q = a.chart,
                    m, g, y = [];
                if (q) {
                    c(!0, l.options.chart, q);
                    "className" in q && l.setClassName(q.className);
                    if ("inverted" in q || "polar" in q) l.propFromSeries(), m = !0;
                    "alignTicks" in q && (m = !0);
                    w(q, function(a, b) {
                        -1 !== d("chart." + b, l.propsRequireUpdateSeries) && (g = !0); - 1 !== d(b, l.propsRequireDirtyBox) && (l.isDirtyBox = !0)
                    });
                    "style" in q && l.renderer.setStyle(q.style)
                }
                a.colors && (this.options.colors = a.colors);
                a.plotOptions && c(!0,
                    this.options.plotOptions, a.plotOptions);
                w(a, function(a, b) {
                    if (l[b] && "function" === typeof l[b].update) l[b].update(a, !1);
                    else if ("function" === typeof l[n[b]]) l[n[b]](a);
                    "chart" !== b && -1 !== d(b, l.propsRequireUpdateSeries) && (g = !0)
                });
                h("xAxis yAxis zAxis series colorAxis pane".split(" "), function(b) {
                    a[b] && (h(K(a[b]), function(a, c) {
                        (c = f(a.id) && l.get(a.id) || l[b][c]) && c.coll === b && (c.update(a, !1), p && (c.touched = !0));
                        if (!c && p)
                            if ("series" === b) l.addSeries(a, !1).touched = !0;
                            else if ("xAxis" === b || "yAxis" === b) l.addAxis(a,
                            "xAxis" === b, !1).touched = !0
                    }), p && h(l[b], function(a) {
                        a.touched ? delete a.touched : y.push(a)
                    }))
                });
                h(y, function(a) {
                    a.remove(!1)
                });
                m && h(l.axes, function(a) {
                    a.update({}, !1)
                });
                g && h(l.series, function(a) {
                    a.update({}, !1)
                });
                a.loading && c(!0, l.options.loading, a.loading);
                m = q && q.width;
                q = q && q.height;
                e(m) && m !== l.chartWidth || e(q) && q !== l.chartHeight ? l.setSize(m, q) : k(b, !0) && l.redraw()
            },
            setSubtitle: function(a) {
                this.setTitle(void 0, a)
            }
        });
        r(p.prototype, {
            update: function(a, b, c, d) {
                function e() {
                    f.applyOptions(a);
                    null === f.y && g &&
                        (f.graphic = g.destroy());
                    n(a, !0) && (g && g.element && a && a.marker && void 0 !== a.marker.symbol && (f.graphic = g.destroy()), a && a.dataLabels && f.dataLabel && (f.dataLabel = f.dataLabel.destroy()));
                    p = f.index;
                    h.updateParallelArrays(f, p);
                    q.data[p] = n(q.data[p], !0) || n(a, !0) ? f.options : a;
                    h.isDirty = h.isDirtyData = !0;
                    !h.fixedBox && h.hasCartesianSeries && (l.isDirtyBox = !0);
                    "point" === q.legendType && (l.isDirtyLegend = !0);
                    b && l.redraw(c)
                }
                var f = this,
                    h = f.series,
                    g = f.graphic,
                    p, l = h.chart,
                    q = h.options;
                b = k(b, !0);
                !1 === d ? e() : f.firePointEvent("update", {
                    options: a
                }, e)
            },
            remove: function(a, b) {
                this.series.removePoint(d(this, this.series.data), a, b)
            }
        });
        r(C.prototype, {
            addPoint: function(a, b, c, d) {
                var e = this.options,
                    f = this.data,
                    h = this.chart,
                    g = this.xAxis,
                    g = g && g.hasNames && g.names,
                    p = e.data,
                    l, n, q = this.xData,
                    m, t;
                b = k(b, !0);
                l = {
                    series: this
                };
                this.pointClass.prototype.applyOptions.apply(l, [a]);
                t = l.x;
                m = q.length;
                if (this.requireSorting && t < q[m - 1])
                    for (n = !0; m && q[m - 1] > t;) m--;
                this.updateParallelArrays(l, "splice", m, 0, 0);
                this.updateParallelArrays(l, m);
                g && l.name && (g[t] = l.name);
                p.splice(m, 0, a);
                n && (this.data.splice(m, 0, null), this.processData());
                "point" === e.legendType && this.generatePoints();
                c && (f[0] && f[0].remove ? f[0].remove(!1) : (f.shift(), this.updateParallelArrays(l, "shift"), p.shift()));
                this.isDirtyData = this.isDirty = !0;
                b && h.redraw(d)
            },
            removePoint: function(a, b, c) {
                var d = this,
                    e = d.data,
                    f = e[a],
                    h = d.points,
                    g = d.chart,
                    p = function() {
                        h && h.length === e.length && h.splice(a, 1);
                        e.splice(a, 1);
                        d.options.data.splice(a, 1);
                        d.updateParallelArrays(f || {
                            series: d
                        }, "splice", a, 1);
                        f && f.destroy();
                        d.isDirty = !0;
                        d.isDirtyData = !0;
                        b && g.redraw()
                    };
                y(c, g);
                b = k(b, !0);
                f ? f.firePointEvent("remove", null, p) : p()
            },
            remove: function(a, b, c) {
                function d() {
                    e.destroy();
                    f.isDirtyLegend = f.isDirtyBox = !0;
                    f.linkSeries();
                    k(a, !0) && f.redraw(b)
                }
                var e = this,
                    f = e.chart;
                !1 !== c ? v(e, "remove", null, d) : d()
            },
            update: function(a, b) {
                var d = this,
                    e = d.chart,
                    f = d.userOptions,
                    p = d.oldType || d.type,
                    l = a.type || f.type || e.options.chart.type,
                    g = I[p].prototype,
                    n, q = ["group", "markerGroup", "dataLabelsGroup"],
                    m = ["navigatorSeries", "baseSeries"],
                    w = d.finishedAnimating && {
                        animation: !1
                    };
                if (Object.keys && "data" === Object.keys(a).toString()) return this.setData(a.data, b);
                if (l && l !== p || void 0 !== a.zIndex) q.length = 0;
                d.options.isInternal && (m.length = 0);
                m = q.concat(m);
                h(m, function(a) {
                    m[a] = d[a];
                    delete d[a]
                });
                a = c(f, w, {
                    index: d.index,
                    pointStart: d.xData[0]
                }, {
                    data: d.options.data
                }, a);
                d.remove(!1, null, !1);
                for (n in g) d[n] = void 0;
                r(d, I[l || p].prototype);
                h(m, function(a) {
                    d[a] = m[a]
                });
                d.init(e, a);
                d.oldType = p;
                e.linkSeries();
                k(b, !0) && e.redraw(!1)
            }
        });
        r(G.prototype, {
            update: function(a, b) {
                var d = this.chart;
                a = d.options[this.coll][this.options.index] = c(this.userOptions, a);
                this.destroy(!0);
                this.init(d, r(a, {
                    events: void 0
                }));
                d.isDirtyBox = !0;
                k(b, !0) && d.redraw()
            },
            remove: function(a) {
                for (var c = this.chart, d = this.coll, e = this.series, f = e.length; f--;) e[f] && e[f].remove(!1);
                m(c.axes, this);
                m(c[d], this);
                b(c.options[d]) ? c.options[d].splice(this.options.index, 1) : delete c.options[d];
                h(c[d], function(a, b) {
                    a.options.index = b
                });
                this.destroy();
                c.isDirtyBox = !0;
                k(a, !0) && c.redraw()
            },
            setTitle: function(a, b) {
                this.update({
                        title: a
                    },
                    b)
            },
            setCategories: function(a, b) {
                this.update({
                    categories: a
                }, b)
            }
        })
    })(N);
    (function(a) {
        var A = a.color,
            B = a.each,
            G = a.map,
            F = a.pick,
            l = a.Series,
            f = a.seriesType;
        f("area", "line", {
            softThreshold: !1,
            threshold: 0
        }, {
            singleStacks: !1,
            getStackPoints: function(f) {
                var h = [],
                    l = [],
                    v = this.xAxis,
                    d = this.yAxis,
                    e = d.stacks[this.stackKey],
                    n = {},
                    b = this.index,
                    c = d.series,
                    w = c.length,
                    k, p = F(d.options.reversedStacks, !0) ? 1 : -1,
                    C;
                f = f || this.points;
                if (this.options.stacking) {
                    for (C = 0; C < f.length; C++) n[f[C].x] = f[C];
                    a.objectEach(e, function(a, b) {
                        null !==
                            a.total && l.push(b)
                    });
                    l.sort(function(a, b) {
                        return a - b
                    });
                    k = G(c, function() {
                        return this.visible
                    });
                    B(l, function(a, c) {
                        var f = 0,
                            m, y;
                        if (n[a] && !n[a].isNull) h.push(n[a]), B([-1, 1], function(d) {
                            var f = 1 === d ? "rightNull" : "leftNull",
                                h = 0,
                                q = e[l[c + d]];
                            if (q)
                                for (C = b; 0 <= C && C < w;) m = q.points[C], m || (C === b ? n[a][f] = !0 : k[C] && (y = e[a].points[C]) && (h -= y[1] - y[0])), C += p;
                            n[a][1 === d ? "rightCliff" : "leftCliff"] = h
                        });
                        else {
                            for (C = b; 0 <= C && C < w;) {
                                if (m = e[a].points[C]) {
                                    f = m[1];
                                    break
                                }
                                C += p
                            }
                            f = d.translate(f, 0, 1, 0, 1);
                            h.push({
                                isNull: !0,
                                plotX: v.translate(a,
                                    0, 0, 0, 1),
                                x: a,
                                plotY: f,
                                yBottom: f
                            })
                        }
                    })
                }
                return h
            },
            getGraphPath: function(a) {
                var f = l.prototype.getGraphPath,
                    h = this.options,
                    v = h.stacking,
                    d = this.yAxis,
                    e, n, b = [],
                    c = [],
                    w = this.index,
                    k, p = d.stacks[this.stackKey],
                    C = h.threshold,
                    I = d.getThreshold(h.threshold),
                    y, h = h.connectNulls || "percent" === v,
                    K = function(e, f, h) {
                        var l = a[e];
                        e = v && p[l.x].points[w];
                        var n = l[h + "Null"] || 0;
                        h = l[h + "Cliff"] || 0;
                        var m, q, l = !0;
                        h || n ? (m = (n ? e[0] : e[1]) + h, q = e[0] + h, l = !!n) : !v && a[f] && a[f].isNull && (m = q = C);
                        void 0 !== m && (c.push({
                            plotX: k,
                            plotY: null === m ? I : d.getThreshold(m),
                            isNull: l,
                            isCliff: !0
                        }), b.push({
                            plotX: k,
                            plotY: null === q ? I : d.getThreshold(q),
                            doCurve: !1
                        }))
                    };
                a = a || this.points;
                v && (a = this.getStackPoints(a));
                for (e = 0; e < a.length; e++)
                    if (n = a[e].isNull, k = F(a[e].rectPlotX, a[e].plotX), y = F(a[e].yBottom, I), !n || h) h || K(e, e - 1, "left"), n && !v && h || (c.push(a[e]), b.push({
                        x: e,
                        plotX: k,
                        plotY: y
                    })), h || K(e, e + 1, "right");
                e = f.call(this, c, !0, !0);
                b.reversed = !0;
                n = f.call(this, b, !0, !0);
                n.length && (n[0] = "L");
                n = e.concat(n);
                f = f.call(this, c, !1, h);
                n.xMap = e.xMap;
                this.areaPath = n;
                return f
            },
            drawGraph: function() {
                this.areaPath = [];
                l.prototype.drawGraph.apply(this);
                var a = this,
                    f = this.areaPath,
                    r = this.options,
                    v = [
                        ["area", "highcharts-area", this.color, r.fillColor]
                    ];
                B(this.zones, function(d, e) {
                    v.push(["zone-area-" + e, "highcharts-area highcharts-zone-area-" + e + " " + d.className, d.color || a.color, d.fillColor || r.fillColor])
                });
                B(v, function(d) {
                    var e = d[0],
                        h = a[e];
                    h ? (h.endX = f.xMap, h.animate({
                        d: f
                    })) : (h = a[e] = a.chart.renderer.path(f).addClass(d[1]).attr({
                        fill: F(d[3], A(d[2]).setOpacity(F(r.fillOpacity, .75)).get()),
                        zIndex: 0
                    }).add(a.group), h.isArea = !0);
                    h.startX = f.xMap;
                    h.shiftUnit = r.step ? 2 : 1
                })
            },
            drawLegendSymbol: a.LegendSymbolMixin.drawRectangle
        })
    })(N);
    (function(a) {
        var A = a.pick;
        a = a.seriesType;
        a("spline", "line", {}, {
            getPointSpline: function(a, G, F) {
                var l = G.plotX,
                    f = G.plotY,
                    h = a[F - 1];
                F = a[F + 1];
                var m, r, v, d;
                if (h && !h.isNull && !1 !== h.doCurve && !G.isCliff && F && !F.isNull && !1 !== F.doCurve && !G.isCliff) {
                    a = h.plotY;
                    v = F.plotX;
                    F = F.plotY;
                    var e = 0;
                    m = (1.5 * l + h.plotX) / 2.5;
                    r = (1.5 * f + a) / 2.5;
                    v = (1.5 * l + v) / 2.5;
                    d = (1.5 * f + F) / 2.5;
                    v !== m && (e = (d - r) * (v - l) / (v - m) + f - d);
                    r += e;
                    d += e;
                    r > a && r > f ? (r =
                        Math.max(a, f), d = 2 * f - r) : r < a && r < f && (r = Math.min(a, f), d = 2 * f - r);
                    d > F && d > f ? (d = Math.max(F, f), r = 2 * f - d) : d < F && d < f && (d = Math.min(F, f), r = 2 * f - d);
                    G.rightContX = v;
                    G.rightContY = d
                }
                G = ["C", A(h.rightContX, h.plotX), A(h.rightContY, h.plotY), A(m, l), A(r, f), l, f];
                h.rightContX = h.rightContY = null;
                return G
            }
        })
    })(N);
    (function(a) {
        var A = a.seriesTypes.area.prototype,
            B = a.seriesType;
        B("areaspline", "spline", a.defaultPlotOptions.area, {
            getStackPoints: A.getStackPoints,
            getGraphPath: A.getGraphPath,
            drawGraph: A.drawGraph,
            drawLegendSymbol: a.LegendSymbolMixin.drawRectangle
        })
    })(N);
    (function(a) {
        var A = a.animObject,
            B = a.color,
            G = a.each,
            F = a.extend,
            l = a.isNumber,
            f = a.merge,
            h = a.pick,
            m = a.Series,
            r = a.seriesType,
            v = a.svg;
        r("column", "line", {
            borderRadius: 0,
            crisp: !0,
            groupPadding: .2,
            marker: null,
            pointPadding: .1,
            minPointLength: 0,
            cropThreshold: 50,
            pointRange: null,
            states: {
                hover: {
                    halo: !1,
                    brightness: .1,
                    shadow: !1
                },
                select: {
                    color: "#cccccc",
                    borderColor: "#000000",
                    shadow: !1
                }
            },
            dataLabels: {
                align: null,
                verticalAlign: null,
                y: null
            },
            softThreshold: !1,
            startFromThreshold: !0,
            stickyTracking: !1,
            tooltip: {
                distance: 6
            },
            threshold: 0,
            borderColor: "#ffffff"
        }, {
            cropShoulder: 0,
            directTouch: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            negStacks: !0,
            init: function() {
                m.prototype.init.apply(this, arguments);
                var a = this,
                    e = a.chart;
                e.hasRendered && G(e.series, function(d) {
                    d.type === a.type && (d.isDirty = !0)
                })
            },
            getColumnMetrics: function() {
                var a = this,
                    e = a.options,
                    f = a.xAxis,
                    b = a.yAxis,
                    c = f.reversed,
                    l, k = {},
                    p = 0;
                !1 === e.grouping ? p = 1 : G(a.chart.series, function(c) {
                    var d = c.options,
                        e = c.yAxis,
                        f;
                    c.type !== a.type || !c.visible && a.chart.options.chart.ignoreHiddenSeries ||
                        b.len !== e.len || b.pos !== e.pos || (d.stacking ? (l = c.stackKey, void 0 === k[l] && (k[l] = p++), f = k[l]) : !1 !== d.grouping && (f = p++), c.columnIndex = f)
                });
                var m = Math.min(Math.abs(f.transA) * (f.ordinalSlope || e.pointRange || f.closestPointRange || f.tickInterval || 1), f.len),
                    r = m * e.groupPadding,
                    y = (m - 2 * r) / (p || 1),
                    e = Math.min(e.maxPointWidth || f.len, h(e.pointWidth, y * (1 - 2 * e.pointPadding)));
                a.columnMetrics = {
                    width: e,
                    offset: (y - e) / 2 + (r + ((a.columnIndex || 0) + (c ? 1 : 0)) * y - m / 2) * (c ? -1 : 1)
                };
                return a.columnMetrics
            },
            crispCol: function(a, e, f, b) {
                var c =
                    this.chart,
                    d = this.borderWidth,
                    k = -(d % 2 ? .5 : 0),
                    d = d % 2 ? .5 : 1;
                c.inverted && c.renderer.isVML && (d += 1);
                this.options.crisp && (f = Math.round(a + f) + k, a = Math.round(a) + k, f -= a);
                b = Math.round(e + b) + d;
                k = .5 >= Math.abs(e) && .5 < b;
                e = Math.round(e) + d;
                b -= e;
                k && b && (--e, b += 1);
                return {
                    x: a,
                    y: e,
                    width: f,
                    height: b
                }
            },
            translate: function() {
                var a = this,
                    e = a.chart,
                    f = a.options,
                    b = a.dense = 2 > a.closestPointRange * a.xAxis.transA,
                    b = a.borderWidth = h(f.borderWidth, b ? 0 : 1),
                    c = a.yAxis,
                    l = a.translatedThreshold = c.getThreshold(f.threshold),
                    k = h(f.minPointLength, 5),
                    p = a.getColumnMetrics(),
                    r = p.width,
                    v = a.barW = Math.max(r, 1 + 2 * b),
                    y = a.pointXOffset = p.offset;
                e.inverted && (l -= .5);
                f.pointPadding && (v = Math.ceil(v));
                m.prototype.translate.apply(a);
                G(a.points, function(b) {
                    var d = h(b.yBottom, l),
                        f = 999 + Math.abs(d),
                        f = Math.min(Math.max(-f, b.plotY), c.len + f),
                        p = b.plotX + y,
                        m = v,
                        n = Math.min(f, d),
                        w, C = Math.max(f, d) - n;
                    k && Math.abs(C) < k && (C = k, w = !c.reversed && !b.negative || c.reversed && b.negative, 0 === b.y && 0 >= a.dataMax && (w = !w), n = Math.abs(n - l) > k ? d - k : l - (w ? k : 0));
                    b.barX = p;
                    b.pointWidth = r;
                    b.tooltipPos = e.inverted ? [c.len + c.pos - e.plotLeft - f, a.xAxis.len - p - m / 2, C] : [p + m / 2, f + c.pos - e.plotTop, C];
                    b.shapeType = "rect";
                    b.shapeArgs = a.crispCol.apply(a, b.isNull ? [p, l, m, 0] : [p, n, m, C])
                })
            },
            getSymbol: a.noop,
            drawLegendSymbol: a.LegendSymbolMixin.drawRectangle,
            drawGraph: function() {
                this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data")
            },
            pointAttribs: function(a, e) {
                var d = this.options,
                    b, c = this.pointAttrToOptions || {};
                b = c.stroke || "borderColor";
                var h = c["stroke-width"] || "borderWidth",
                    k = a && a.color || this.color,
                    p = a && a[b] || d[b] ||
                    this.color || k,
                    l = a && a[h] || d[h] || this[h] || 0,
                    c = d.dashStyle;
                a && this.zones.length && (k = a.getZone(), k = a.options.color || k && k.color || this.color);
                e && (a = f(d.states[e], a.options.states && a.options.states[e] || {}), e = a.brightness, k = a.color || void 0 !== e && B(k).brighten(a.brightness).get() || k, p = a[b] || p, l = a[h] || l, c = a.dashStyle || c);
                b = {
                    fill: k,
                    stroke: p,
                    "stroke-width": l
                };
                c && (b.dashstyle = c);
                return b
            },
            drawPoints: function() {
                var a = this,
                    e = this.chart,
                    h = a.options,
                    b = e.renderer,
                    c = h.animationLimit || 250,
                    m;
                G(a.points, function(d) {
                    var k =
                        d.graphic;
                    if (l(d.plotY) && null !== d.y) {
                        m = d.shapeArgs;
                        if (k) k[e.pointCount < c ? "animate" : "attr"](f(m));
                        else d.graphic = k = b[d.shapeType](m).add(d.group || a.group);
                        h.borderRadius && k.attr({
                            r: h.borderRadius
                        });
                        k.attr(a.pointAttribs(d, d.selected && "select")).shadow(h.shadow, null, h.stacking && !h.borderRadius);
                        k.addClass(d.getClassName(), !0)
                    } else k && (d.graphic = k.destroy())
                })
            },
            animate: function(a) {
                var d = this,
                    f = this.yAxis,
                    b = d.options,
                    c = this.chart.inverted,
                    h = {},
                    k = c ? "translateX" : "translateY",
                    p;
                v && (a ? (h.scaleY = .001, a = Math.min(f.pos +
                    f.len, Math.max(f.pos, f.toPixels(b.threshold))), c ? h.translateX = a - f.len : h.translateY = a, d.group.attr(h)) : (p = d.group.attr(k), d.group.animate({
                    scaleY: 1
                }, F(A(d.options.animation), {
                    step: function(a, b) {
                        h[k] = p + b.pos * (f.pos - p);
                        d.group.attr(h)
                    }
                })), d.animate = null))
            },
            remove: function() {
                var a = this,
                    e = a.chart;
                e.hasRendered && G(e.series, function(d) {
                    d.type === a.type && (d.isDirty = !0)
                });
                m.prototype.remove.apply(a, arguments)
            }
        })
    })(N);
    (function(a) {
        a = a.seriesType;
        a("bar", "column", null, {
            inverted: !0
        })
    })(N);
    (function(a) {
        var A = a.Series;
        a = a.seriesType;
        a("scatter", "line", {
            lineWidth: 0,
            findNearestPointBy: "xy",
            marker: {
                enabled: !0
            },
            tooltip: {
                headerFormat: '\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',
                pointFormat: "x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"
            }
        }, {
            sorted: !1,
            requireSorting: !1,
            noSharedTooltip: !0,
            trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
            takeOrdinalPosition: !1,
            drawGraph: function() {
                this.options.lineWidth &&
                    A.prototype.drawGraph.call(this)
            }
        })
    })(N);
    (function(a) {
        var A = a.deg2rad,
            B = a.isNumber,
            G = a.pick,
            F = a.relativeLength;
        a.CenteredSeriesMixin = {
            getCenter: function() {
                var a = this.options,
                    f = this.chart,
                    h = 2 * (a.slicedOffset || 0),
                    m = f.plotWidth - 2 * h,
                    f = f.plotHeight - 2 * h,
                    r = a.center,
                    r = [G(r[0], "50%"), G(r[1], "50%"), a.size || "100%", a.innerSize || 0],
                    v = Math.min(m, f),
                    d, e;
                for (d = 0; 4 > d; ++d) e = r[d], a = 2 > d || 2 === d && /%$/.test(e), r[d] = F(e, [m, f, v, r[2]][d]) + (a ? h : 0);
                r[3] > r[2] && (r[3] = r[2]);
                return r
            },
            getStartAndEndRadians: function(a, f) {
                a = B(a) ?
                    a : 0;
                f = B(f) && f > a && 360 > f - a ? f : a + 360;
                return {
                    start: A * (a + -90),
                    end: A * (f + -90)
                }
            }
        }
    })(N);
    (function(a) {
        var A = a.addEvent,
            B = a.CenteredSeriesMixin,
            G = a.defined,
            F = a.each,
            l = a.extend,
            f = B.getStartAndEndRadians,
            h = a.inArray,
            m = a.noop,
            r = a.pick,
            v = a.Point,
            d = a.Series,
            e = a.seriesType,
            n = a.setAnimation;
        e("pie", "line", {
            center: [null, null],
            clip: !1,
            colorByPoint: !0,
            dataLabels: {
                distance: 30,
                enabled: !0,
                formatter: function() {
                    return this.point.isNull ? void 0 : this.point.name
                },
                x: 0
            },
            ignoreHiddenPoint: !0,
            legendType: "point",
            marker: null,
            size: null,
            showInLegend: !1,
            slicedOffset: 10,
            stickyTracking: !1,
            tooltip: {
                followPointer: !0
            },
            borderColor: "#ffffff",
            borderWidth: 1,
            states: {
                hover: {
                    brightness: .1,
                    shadow: !1
                }
            }
        }, {
            isCartesian: !1,
            requireSorting: !1,
            directTouch: !0,
            noSharedTooltip: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            axisTypes: [],
            pointAttribs: a.seriesTypes.column.prototype.pointAttribs,
            animate: function(a) {
                var b = this,
                    d = b.points,
                    e = b.startAngleRad;
                a || (F(d, function(a) {
                    var c = a.graphic,
                        d = a.shapeArgs;
                    c && (c.attr({
                        r: a.startR || b.center[3] / 2,
                        start: e,
                        end: e
                    }), c.animate({
                        r: d.r,
                        start: d.start,
                        end: d.end
                    }, b.options.animation))
                }), b.animate = null)
            },
            updateTotals: function() {
                var a, c = 0,
                    d = this.points,
                    e = d.length,
                    f, h = this.options.ignoreHiddenPoint;
                for (a = 0; a < e; a++) f = d[a], c += h && !f.visible ? 0 : f.isNull ? 0 : f.y;
                this.total = c;
                for (a = 0; a < e; a++) f = d[a], f.percentage = 0 < c && (f.visible || !h) ? f.y / c * 100 : 0, f.total = c
            },
            generatePoints: function() {
                d.prototype.generatePoints.call(this);
                this.updateTotals()
            },
            translate: function(a) {
                this.generatePoints();
                var b = 0,
                    d = this.options,
                    e = d.slicedOffset,
                    h = e + (d.borderWidth || 0),
                    l, m, n, v = f(d.startAngle, d.endAngle),
                    q = this.startAngleRad = v.start,
                    v = (this.endAngleRad = v.end) - q,
                    z = this.points,
                    J, t = d.dataLabels.distance,
                    d = d.ignoreHiddenPoint,
                    D, E = z.length,
                    H;
                a || (this.center = a = this.getCenter());
                this.getX = function(b, c, d) {
                    n = Math.asin(Math.min((b - a[1]) / (a[2] / 2 + d.labelDistance), 1));
                    return a[0] + (c ? -1 : 1) * Math.cos(n) * (a[2] / 2 + d.labelDistance)
                };
                for (D = 0; D < E; D++) {
                    H = z[D];
                    H.labelDistance = r(H.options.dataLabels && H.options.dataLabels.distance, t);
                    this.maxLabelDistance = Math.max(this.maxLabelDistance ||
                        0, H.labelDistance);
                    l = q + b * v;
                    if (!d || H.visible) b += H.percentage / 100;
                    m = q + b * v;
                    H.shapeType = "arc";
                    H.shapeArgs = {
                        x: a[0],
                        y: a[1],
                        r: a[2] / 2,
                        innerR: a[3] / 2,
                        start: Math.round(1E3 * l) / 1E3,
                        end: Math.round(1E3 * m) / 1E3
                    };
                    n = (m + l) / 2;
                    n > 1.5 * Math.PI ? n -= 2 * Math.PI : n < -Math.PI / 2 && (n += 2 * Math.PI);
                    H.slicedTranslation = {
                        translateX: Math.round(Math.cos(n) * e),
                        translateY: Math.round(Math.sin(n) * e)
                    };
                    m = Math.cos(n) * a[2] / 2;
                    J = Math.sin(n) * a[2] / 2;
                    H.tooltipPos = [a[0] + .7 * m, a[1] + .7 * J];
                    H.half = n < -Math.PI / 2 || n > Math.PI / 2 ? 1 : 0;
                    H.angle = n;
                    l = Math.min(h, H.labelDistance /
                        5);
                    H.labelPos = [a[0] + m + Math.cos(n) * H.labelDistance, a[1] + J + Math.sin(n) * H.labelDistance, a[0] + m + Math.cos(n) * l, a[1] + J + Math.sin(n) * l, a[0] + m, a[1] + J, 0 > H.labelDistance ? "center" : H.half ? "right" : "left", n]
                }
            },
            drawGraph: null,
            drawPoints: function() {
                var a = this,
                    c = a.chart.renderer,
                    d, e, f, h, m = a.options.shadow;
                m && !a.shadowGroup && (a.shadowGroup = c.g("shadow").add(a.group));
                F(a.points, function(b) {
                    e = b.graphic;
                    if (b.isNull) e && (b.graphic = e.destroy());
                    else {
                        h = b.shapeArgs;
                        d = b.getTranslate();
                        var k = b.shadowGroup;
                        m && !k && (k = b.shadowGroup =
                            c.g("shadow").add(a.shadowGroup));
                        k && k.attr(d);
                        f = a.pointAttribs(b, b.selected && "select");
                        e ? e.setRadialReference(a.center).attr(f).animate(l(h, d)) : (b.graphic = e = c[b.shapeType](h).setRadialReference(a.center).attr(d).add(a.group), b.visible || e.attr({
                            visibility: "hidden"
                        }), e.attr(f).attr({
                            "stroke-linejoin": "round"
                        }).shadow(m, k));
                        e.addClass(b.getClassName())
                    }
                })
            },
            searchPoint: m,
            sortByAngle: function(a, c) {
                a.sort(function(a, b) {
                    return void 0 !== a.angle && (b.angle - a.angle) * c
                })
            },
            drawLegendSymbol: a.LegendSymbolMixin.drawRectangle,
            getCenter: B.getCenter,
            getSymbol: m
        }, {
            init: function() {
                v.prototype.init.apply(this, arguments);
                var a = this,
                    c;
                a.name = r(a.name, "Slice");
                c = function(b) {
                    a.slice("select" === b.type)
                };
                A(a, "select", c);
                A(a, "unselect", c);
                return a
            },
            isValid: function() {
                return a.isNumber(this.y, !0) && 0 <= this.y
            },
            setVisible: function(a, c) {
                var b = this,
                    d = b.series,
                    e = d.chart,
                    f = d.options.ignoreHiddenPoint;
                c = r(c, f);
                a !== b.visible && (b.visible = b.options.visible = a = void 0 === a ? !b.visible : a, d.options.data[h(b, d.data)] = b.options, F(["graphic", "dataLabel",
                    "connector", "shadowGroup"
                ], function(c) {
                    if (b[c]) b[c][a ? "show" : "hide"](!0)
                }), b.legendItem && e.legend.colorizeItem(b, a), a || "hover" !== b.state || b.setState(""), f && (d.isDirty = !0), c && e.redraw())
            },
            slice: function(a, c, d) {
                var b = this.series;
                n(d, b.chart);
                r(c, !0);
                this.sliced = this.options.sliced = G(a) ? a : !this.sliced;
                b.options.data[h(this, b.data)] = this.options;
                this.graphic.animate(this.getTranslate());
                this.shadowGroup && this.shadowGroup.animate(this.getTranslate())
            },
            getTranslate: function() {
                return this.sliced ? this.slicedTranslation : {
                    translateX: 0,
                    translateY: 0
                }
            },
            haloPath: function(a) {
                var b = this.shapeArgs;
                return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(b.x, b.y, b.r + a, b.r + a, {
                    innerR: this.shapeArgs.r,
                    start: b.start,
                    end: b.end
                })
            }
        })
    })(N);
    (function(a) {
        var A = a.addEvent,
            B = a.arrayMax,
            G = a.defined,
            F = a.each,
            l = a.extend,
            f = a.format,
            h = a.map,
            m = a.merge,
            r = a.noop,
            v = a.pick,
            d = a.relativeLength,
            e = a.Series,
            n = a.seriesTypes,
            b = a.stableSort;
        a.distribute = function(a, d) {
            function c(a, b) {
                return a.target - b.target
            }
            var e, f = !0,
                l = a,
                m = [],
                n;
            n =
                0;
            for (e = a.length; e--;) n += a[e].size;
            if (n > d) {
                b(a, function(a, b) {
                    return (b.rank || 0) - (a.rank || 0)
                });
                for (n = e = 0; n <= d;) n += a[e].size, e++;
                m = a.splice(e - 1, a.length)
            }
            b(a, c);
            for (a = h(a, function(a) {
                    return {
                        size: a.size,
                        targets: [a.target]
                    }
                }); f;) {
                for (e = a.length; e--;) f = a[e], n = (Math.min.apply(0, f.targets) + Math.max.apply(0, f.targets)) / 2, f.pos = Math.min(Math.max(0, n - f.size / 2), d - f.size);
                e = a.length;
                for (f = !1; e--;) 0 < e && a[e - 1].pos + a[e - 1].size > a[e].pos && (a[e - 1].size += a[e].size, a[e - 1].targets = a[e - 1].targets.concat(a[e].targets), a[e -
                    1].pos + a[e - 1].size > d && (a[e - 1].pos = d - a[e - 1].size), a.splice(e, 1), f = !0)
            }
            e = 0;
            F(a, function(a) {
                var b = 0;
                F(a.targets, function() {
                    l[e].pos = a.pos + b;
                    b += l[e].size;
                    e++
                })
            });
            l.push.apply(l, m);
            b(l, c)
        };
        e.prototype.drawDataLabels = function() {
            var b = this,
                d = b.options,
                e = d.dataLabels,
                h = b.points,
                l, n, y = b.hasRendered || 0,
                r, q, z = v(e.defer, !!d.animation),
                J = b.chart.renderer;
            if (e.enabled || b._hasPointLabels) b.dlProcessOptions && b.dlProcessOptions(e), q = b.plotGroup("dataLabelsGroup", "data-labels", z && !y ? "hidden" : "visible", e.zIndex || 6),
                z && (q.attr({
                    opacity: +y
                }), y || A(b, "afterAnimate", function() {
                    b.visible && q.show(!0);
                    q[d.animation ? "animate" : "attr"]({
                        opacity: 1
                    }, {
                        duration: 200
                    })
                })), n = e, F(h, function(c) {
                    var k, h = c.dataLabel,
                        p, g, t = c.connector,
                        y = !h,
                        w;
                    l = c.dlOptions || c.options && c.options.dataLabels;
                    if (k = v(l && l.enabled, n.enabled) && !c.isNull) e = m(n, l), p = c.getLabelConfig(), w = e[c.formatPrefix + "Format"] || e.format, r = G(w) ? f(w, p) : e.formatter.call(p, e), w = e.style, p = e.rotation, w.color = v(e.color, w.color, b.color, "#000000"), "contrast" === w.color && (c.contrastColor =
                        J.getContrast(c.color || b.color), w.color = e.inside || 0 > v(c.labelDistance, e.distance) || d.stacking ? c.contrastColor : "#000000"), d.cursor && (w.cursor = d.cursor), g = {
                        fill: e.backgroundColor,
                        stroke: e.borderColor,
                        "stroke-width": e.borderWidth,
                        r: e.borderRadius || 0,
                        rotation: p,
                        padding: e.padding,
                        zIndex: 1
                    }, a.objectEach(g, function(a, b) {
                        void 0 === a && delete g[b]
                    });
                    !h || k && G(r) ? k && G(r) && (h ? g.text = r : (h = c.dataLabel = J[p ? "text" : "label"](r, 0, -9999, e.shape, null, null, e.useHTML, null, "data-label"), h.addClass("highcharts-data-label-color-" +
                        c.colorIndex + " " + (e.className || "") + (e.useHTML ? "highcharts-tracker" : ""))), h.attr(g), h.css(w).shadow(e.shadow), h.added || h.add(q), b.alignDataLabel(c, h, e, null, y)) : (c.dataLabel = h = h.destroy(), t && (c.connector = t.destroy()))
                })
        };
        e.prototype.alignDataLabel = function(a, b, d, e, f) {
            var c = this.chart,
                k = c.inverted,
                h = v(a.plotX, -9999),
                m = v(a.plotY, -9999),
                p = b.getBBox(),
                n, t = d.rotation,
                w = d.align,
                r = this.visible && (a.series.forceDL || c.isInsidePlot(h, Math.round(m), k) || e && c.isInsidePlot(h, k ? e.x + 1 : e.y + e.height - 1, k)),
                C = "justify" ===
                v(d.overflow, "justify");
            if (r && (n = d.style.fontSize, n = c.renderer.fontMetrics(n, b).b, e = l({
                    x: k ? this.yAxis.len - m : h,
                    y: Math.round(k ? this.xAxis.len - h : m),
                    width: 0,
                    height: 0
                }, e), l(d, {
                    width: p.width,
                    height: p.height
                }), t ? (C = !1, h = c.renderer.rotCorr(n, t), h = {
                    x: e.x + d.x + e.width / 2 + h.x,
                    y: e.y + d.y + {
                        top: 0,
                        middle: .5,
                        bottom: 1
                    }[d.verticalAlign] * e.height
                }, b[f ? "attr" : "animate"](h).attr({
                    align: w
                }), m = (t + 720) % 360, m = 180 < m && 360 > m, "left" === w ? h.y -= m ? p.height : 0 : "center" === w ? (h.x -= p.width / 2, h.y -= p.height / 2) : "right" === w && (h.x -= p.width, h.y -=
                    m ? 0 : p.height)) : (b.align(d, null, e), h = b.alignAttr), C ? a.isLabelJustified = this.justifyDataLabel(b, d, h, p, e, f) : v(d.crop, !0) && (r = c.isInsidePlot(h.x, h.y) && c.isInsidePlot(h.x + p.width, h.y + p.height)), d.shape && !t)) b[f ? "attr" : "animate"]({
                anchorX: k ? c.plotWidth - a.plotY : a.plotX,
                anchorY: k ? c.plotHeight - a.plotX : a.plotY
            });
            r || (b.attr({
                y: -9999
            }), b.placed = !1)
        };
        e.prototype.justifyDataLabel = function(a, b, d, e, f, h) {
            var c = this.chart,
                k = b.align,
                l = b.verticalAlign,
                m, p, n = a.box ? 0 : a.padding || 0;
            m = d.x + n;
            0 > m && ("right" === k ? b.align = "left" :
                b.x = -m, p = !0);
            m = d.x + e.width - n;
            m > c.plotWidth && ("left" === k ? b.align = "right" : b.x = c.plotWidth - m, p = !0);
            m = d.y + n;
            0 > m && ("bottom" === l ? b.verticalAlign = "top" : b.y = -m, p = !0);
            m = d.y + e.height - n;
            m > c.plotHeight && ("top" === l ? b.verticalAlign = "bottom" : b.y = c.plotHeight - m, p = !0);
            p && (a.placed = !h, a.align(b, null, f));
            return p
        };
        n.pie && (n.pie.prototype.drawDataLabels = function() {
                var b = this,
                    d = b.data,
                    f, h = b.chart,
                    l = b.options.dataLabels,
                    m = v(l.connectorPadding, 10),
                    n = v(l.connectorWidth, 1),
                    r = h.plotWidth,
                    q = h.plotHeight,
                    z, A = b.center,
                    t = A[2] /
                    2,
                    D = A[1],
                    E, H, g, u, P = [
                        [],
                        []
                    ],
                    M, O, L, N, x = [0, 0, 0, 0];
                b.visible && (l.enabled || b._hasPointLabels) && (F(d, function(a) {
                        a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({
                            width: "auto"
                        }).css({
                            width: "auto",
                            textOverflow: "clip"
                        }), a.dataLabel.shortened = !1)
                    }), e.prototype.drawDataLabels.apply(b), F(d, function(a) {
                        a.dataLabel && a.visible && (P[a.half].push(a), a.dataLabel._pos = null)
                    }), F(P, function(c, d) {
                        var e, k, p = c.length,
                            n = [],
                            y;
                        if (p)
                            for (b.sortByAngle(c, d - .5), 0 < b.maxLabelDistance && (e = Math.max(0, D - t - b.maxLabelDistance),
                                    k = Math.min(D + t + b.maxLabelDistance, h.plotHeight), F(c, function(a) {
                                        0 < a.labelDistance && a.dataLabel && (a.top = Math.max(0, D - t - a.labelDistance), a.bottom = Math.min(D + t + a.labelDistance, h.plotHeight), y = a.dataLabel.getBBox().height || 21, a.positionsIndex = n.push({
                                            target: a.labelPos[1] - a.top + y / 2,
                                            size: y,
                                            rank: a.y
                                        }) - 1)
                                    }), a.distribute(n, k + y - e)), N = 0; N < p; N++) f = c[N], k = f.positionsIndex, g = f.labelPos, E = f.dataLabel, L = !1 === f.visible ? "hidden" : "inherit", O = e = g[1], n && G(n[k]) && (void 0 === n[k].pos ? L = "hidden" : (u = n[k].size, O = f.top + n[k].pos)),
                                delete f.positionIndex, M = l.justify ? A[0] + (d ? -1 : 1) * (t + f.labelDistance) : b.getX(O < f.top + 2 || O > f.bottom - 2 ? e : O, d, f), E._attr = {
                                    visibility: L,
                                    align: g[6]
                                }, E._pos = {
                                    x: M + l.x + ({
                                        left: m,
                                        right: -m
                                    }[g[6]] || 0),
                                    y: O + l.y - 10
                                }, g.x = M, g.y = O, v(l.crop, !0) && (H = E.getBBox().width, e = null, M - H < m ? (e = Math.round(H - M + m), x[3] = Math.max(e, x[3])) : M + H > r - m && (e = Math.round(M + H - r + m), x[1] = Math.max(e, x[1])), 0 > O - u / 2 ? x[0] = Math.max(Math.round(-O + u / 2), x[0]) : O + u / 2 > q && (x[2] = Math.max(Math.round(O + u / 2 - q), x[2])), E.sideOverflow = e)
                    }), 0 === B(x) || this.verifyDataLabelOverflow(x)) &&
                    (this.placeDataLabels(), n && F(this.points, function(a) {
                        var c;
                        z = a.connector;
                        if ((E = a.dataLabel) && E._pos && a.visible && 0 < a.labelDistance) {
                            L = E._attr.visibility;
                            if (c = !z) a.connector = z = h.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + a.colorIndex).add(b.dataLabelsGroup), z.attr({
                                "stroke-width": n,
                                stroke: l.connectorColor || a.color || "#666666"
                            });
                            z[c ? "attr" : "animate"]({
                                d: b.connectorPath(a.labelPos)
                            });
                            z.attr("visibility", L)
                        } else z && (a.connector = z.destroy())
                    }))
            }, n.pie.prototype.connectorPath =
            function(a) {
                var b = a.x,
                    c = a.y;
                return v(this.options.dataLabels.softConnector, !0) ? ["M", b + ("left" === a[6] ? 5 : -5), c, "C", b, c, 2 * a[2] - a[4], 2 * a[3] - a[5], a[2], a[3], "L", a[4], a[5]] : ["M", b + ("left" === a[6] ? 5 : -5), c, "L", a[2], a[3], "L", a[4], a[5]]
            }, n.pie.prototype.placeDataLabels = function() {
                F(this.points, function(a) {
                    var b = a.dataLabel;
                    b && a.visible && ((a = b._pos) ? (b.sideOverflow && (b._attr.width = b.getBBox().width - b.sideOverflow, b.css({
                        width: b._attr.width + "px",
                        textOverflow: "ellipsis"
                    }), b.shortened = !0), b.attr(b._attr), b[b.moved ?
                        "animate" : "attr"](a), b.moved = !0) : b && b.attr({
                        y: -9999
                    }))
                }, this)
            }, n.pie.prototype.alignDataLabel = r, n.pie.prototype.verifyDataLabelOverflow = function(a) {
                var b = this.center,
                    c = this.options,
                    e = c.center,
                    f = c.minSize || 80,
                    h, l = null !== c.size;
                l || (null !== e[0] ? h = Math.max(b[2] - Math.max(a[1], a[3]), f) : (h = Math.max(b[2] - a[1] - a[3], f), b[0] += (a[3] - a[1]) / 2), null !== e[1] ? h = Math.max(Math.min(h, b[2] - Math.max(a[0], a[2])), f) : (h = Math.max(Math.min(h, b[2] - a[0] - a[2]), f), b[1] += (a[0] - a[2]) / 2), h < b[2] ? (b[2] = h, b[3] = Math.min(d(c.innerSize ||
                    0, h), h), this.translate(b), this.drawDataLabels && this.drawDataLabels()) : l = !0);
                return l
            });
        n.column && (n.column.prototype.alignDataLabel = function(a, b, d, f, h) {
            var c = this.chart.inverted,
                k = a.series,
                l = a.dlBox || a.shapeArgs,
                n = v(a.below, a.plotY > v(this.translatedThreshold, k.yAxis.len)),
                p = v(d.inside, !!this.options.stacking);
            l && (f = m(l), 0 > f.y && (f.height += f.y, f.y = 0), l = f.y + f.height - k.yAxis.len, 0 < l && (f.height -= l), c && (f = {
                x: k.yAxis.len - f.y - f.height,
                y: k.xAxis.len - f.x - f.width,
                width: f.height,
                height: f.width
            }), p || (c ? (f.x +=
                n ? 0 : f.width, f.width = 0) : (f.y += n ? f.height : 0, f.height = 0)));
            d.align = v(d.align, !c || p ? "center" : n ? "right" : "left");
            d.verticalAlign = v(d.verticalAlign, c || p ? "middle" : n ? "top" : "bottom");
            e.prototype.alignDataLabel.call(this, a, b, d, f, h);
            a.isLabelJustified && a.contrastColor && a.dataLabel.css({
                color: a.contrastColor
            })
        })
    })(N);
    (function(a) {
        var A = a.Chart,
            B = a.each,
            G = a.objectEach,
            F = a.pick,
            l = a.addEvent;
        A.prototype.callbacks.push(function(a) {
            l(a, "render", function() {
                var f = [];
                B(a.labelCollectors || [], function(a) {
                    f = f.concat(a())
                });
                B(a.yAxis || [], function(a) {
                    a.options.stackLabels && !a.options.stackLabels.allowOverlap && G(a.stacks, function(a) {
                        G(a, function(a) {
                            f.push(a.label)
                        })
                    })
                });
                B(a.series || [], function(a) {
                    var h = a.options.dataLabels,
                        l = a.dataLabelCollections || ["dataLabel"];
                    (h.enabled || a._hasPointLabels) && !h.allowOverlap && a.visible && B(l, function(d) {
                        B(a.points, function(a) {
                            a[d] && (a[d].labelrank = F(a.labelrank, a.shapeArgs && a.shapeArgs.height), f.push(a[d]))
                        })
                    })
                });
                a.hideOverlappingLabels(f)
            })
        });
        A.prototype.hideOverlappingLabels = function(a) {
            var f =
                a.length,
                l, r, v, d, e, n, b, c, w, k = function(a, b, c, d, e, f, h, k) {
                    return !(e > a + c || e + h < a || f > b + d || f + k < b)
                };
            for (r = 0; r < f; r++)
                if (l = a[r]) l.oldOpacity = l.opacity, l.newOpacity = 1, l.width || (v = l.getBBox(), l.width = v.width, l.height = v.height);
            a.sort(function(a, b) {
                return (b.labelrank || 0) - (a.labelrank || 0)
            });
            for (r = 0; r < f; r++)
                for (v = a[r], l = r + 1; l < f; ++l)
                    if (d = a[l], v && d && v !== d && v.placed && d.placed && 0 !== v.newOpacity && 0 !== d.newOpacity && (e = v.alignAttr, n = d.alignAttr, b = v.parentGroup, c = d.parentGroup, w = 2 * (v.box ? 0 : v.padding || 0), e = k(e.x + b.translateX,
                            e.y + b.translateY, v.width - w, v.height - w, n.x + c.translateX, n.y + c.translateY, d.width - w, d.height - w)))(v.labelrank < d.labelrank ? v : d).newOpacity = 0;
            B(a, function(a) {
                var b, c;
                a && (c = a.newOpacity, a.oldOpacity !== c && a.placed && (c ? a.show(!0) : b = function() {
                    a.hide()
                }, a.alignAttr.opacity = c, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b)), a.isOld = !0)
            })
        }
    })(N);
    (function(a) {
        var A = a.addEvent,
            B = a.Chart,
            G = a.createElement,
            F = a.css,
            l = a.defaultOptions,
            f = a.defaultPlotOptions,
            h = a.each,
            m = a.extend,
            r = a.fireEvent,
            v = a.hasTouch,
            d = a.inArray,
            e = a.isObject,
            n = a.Legend,
            b = a.merge,
            c = a.pick,
            w = a.Point,
            k = a.Series,
            p = a.seriesTypes,
            C = a.svg,
            I;
        I = a.TrackerMixin = {
            drawTrackerPoint: function() {
                var a = this,
                    b = a.chart.pointer,
                    c = function(a) {
                        var c = b.getPointFromEvent(a);
                        void 0 !== c && (b.isDirectTouch = !0, c.onMouseOver(a))
                    };
                h(a.points, function(a) {
                    a.graphic && (a.graphic.element.point = a);
                    a.dataLabel && (a.dataLabel.div ? a.dataLabel.div.point = a : a.dataLabel.element.point = a)
                });
                a._hasTracking || (h(a.trackerGroups, function(d) {
                    if (a[d]) {
                        a[d].addClass("highcharts-tracker").on("mouseover",
                            c).on("mouseout", function(a) {
                            b.onTrackerMouseOut(a)
                        });
                        if (v) a[d].on("touchstart", c);
                        a.options.cursor && a[d].css(F).css({
                            cursor: a.options.cursor
                        })
                    }
                }), a._hasTracking = !0)
            },
            drawTrackerGraph: function() {
                var a = this,
                    b = a.options,
                    c = b.trackByArea,
                    d = [].concat(c ? a.areaPath : a.graphPath),
                    e = d.length,
                    f = a.chart,
                    k = f.pointer,
                    l = f.renderer,
                    n = f.options.tooltip.snap,
                    g = a.tracker,
                    m, p = function() {
                        if (f.hoverSeries !== a) a.onMouseOver()
                    },
                    r = "rgba(192,192,192," + (C ? .0001 : .002) + ")";
                if (e && !c)
                    for (m = e + 1; m--;) "M" === d[m] && d.splice(m + 1, 0, d[m +
                        1] - n, d[m + 2], "L"), (m && "M" === d[m] || m === e) && d.splice(m, 0, "L", d[m - 2] + n, d[m - 1]);
                g ? g.attr({
                    d: d
                }) : a.graph && (a.tracker = l.path(d).attr({
                    "stroke-linejoin": "round",
                    visibility: a.visible ? "visible" : "hidden",
                    stroke: r,
                    fill: c ? r : "none",
                    "stroke-width": a.graph.strokeWidth() + (c ? 0 : 2 * n),
                    zIndex: 2
                }).add(a.group), h([a.tracker, a.markerGroup], function(a) {
                    a.addClass("highcharts-tracker").on("mouseover", p).on("mouseout", function(a) {
                        k.onTrackerMouseOut(a)
                    });
                    b.cursor && a.css({
                        cursor: b.cursor
                    });
                    if (v) a.on("touchstart", p)
                }))
            }
        };
        p.column &&
            (p.column.prototype.drawTracker = I.drawTrackerPoint);
        p.pie && (p.pie.prototype.drawTracker = I.drawTrackerPoint);
        p.scatter && (p.scatter.prototype.drawTracker = I.drawTrackerPoint);
        m(n.prototype, {
            setItemEvents: function(a, c, d) {
                var e = this,
                    f = e.chart.renderer.boxWrapper,
                    h = "highcharts-legend-" + (a.series ? "point" : "series") + "-active";
                (d ? c : a.legendGroup).on("mouseover", function() {
                    a.setState("hover");
                    f.addClass(h);
                    c.css(e.options.itemHoverStyle)
                }).on("mouseout", function() {
                    c.css(b(a.visible ? e.itemStyle : e.itemHiddenStyle));
                    f.removeClass(h);
                    a.setState()
                }).on("click", function(b) {
                    var c = function() {
                        a.setVisible && a.setVisible()
                    };
                    b = {
                        browserEvent: b
                    };
                    a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : r(a, "legendItemClick", b, c)
                })
            },
            createCheckboxForItem: function(a) {
                a.checkbox = G("input", {
                    type: "checkbox",
                    checked: a.selected,
                    defaultChecked: a.selected
                }, this.options.itemCheckboxStyle, this.chart.container);
                A(a.checkbox, "click", function(b) {
                    r(a.series || a, "checkboxClick", {
                        checked: b.target.checked,
                        item: a
                    }, function() {
                        a.select()
                    })
                })
            }
        });
        l.legend.itemStyle.cursor = "pointer";
        m(B.prototype, {
            showResetZoom: function() {
                var a = this,
                    b = l.lang,
                    c = a.options.chart.resetZoomButton,
                    d = c.theme,
                    e = d.states,
                    f = "chart" === c.relativeTo ? null : "plotBox";
                this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function() {
                    a.zoomOut()
                }, d, e && e.hover).attr({
                    align: c.position.align,
                    title: b.resetZoomTitle
                }).addClass("highcharts-reset-zoom").add().align(c.position, !1, f)
            },
            zoomOut: function() {
                var a = this;
                r(a, "selection", {
                    resetSelection: !0
                }, function() {
                    a.zoom()
                })
            },
            zoom: function(a) {
                var b,
                    d = this.pointer,
                    f = !1,
                    k;
                !a || a.resetSelection ? (h(this.axes, function(a) {
                    b = a.zoom()
                }), d.initiated = !1) : h(a.xAxis.concat(a.yAxis), function(a) {
                    var c = a.axis;
                    d[c.isXAxis ? "zoomX" : "zoomY"] && (b = c.zoom(a.min, a.max), c.displayBtn && (f = !0))
                });
                k = this.resetZoomButton;
                f && !k ? this.showResetZoom() : !f && e(k) && (this.resetZoomButton = k.destroy());
                b && this.redraw(c(this.options.chart.animation, a && a.animation, 100 > this.pointCount))
            },
            pan: function(a, b) {
                var c = this,
                    d = c.hoverPoints,
                    e;
                d && h(d, function(a) {
                    a.setState()
                });
                h("xy" === b ? [1, 0] : [1], function(b) {
                    b = c[b ? "xAxis" : "yAxis"][0];
                    var d = b.horiz,
                        f = a[d ? "chartX" : "chartY"],
                        d = d ? "mouseDownX" : "mouseDownY",
                        h = c[d],
                        g = (b.pointRange || 0) / 2,
                        k = b.getExtremes(),
                        l = b.toValue(h - f, !0) + g,
                        g = b.toValue(h + b.len - f, !0) - g,
                        m = g < l,
                        h = m ? g : l,
                        l = m ? l : g,
                        g = Math.min(k.dataMin, b.toValue(b.toPixels(k.min) - b.minPixelPadding)),
                        m = Math.max(k.dataMax, b.toValue(b.toPixels(k.max) + b.minPixelPadding)),
                        n;
                    n = g - h;
                    0 < n && (l += n, h = g);
                    n = l - m;
                    0 < n && (l = m, h -= n);
                    b.series.length && h !== k.min && l !== k.max && (b.setExtremes(h, l, !1, !1, {
                        trigger: "pan"
                    }), e = !0);
                    c[d] = f
                });
                e && c.redraw(!1);
                F(c.container, {
                    cursor: "move"
                })
            }
        });
        m(w.prototype, {
            select: function(a, b) {
                var e = this,
                    f = e.series,
                    k = f.chart;
                a = c(a, !e.selected);
                e.firePointEvent(a ? "select" : "unselect", {
                    accumulate: b
                }, function() {
                    e.selected = e.options.selected = a;
                    f.options.data[d(e, f.data)] = e.options;
                    e.setState(a && "select");
                    b || h(k.getSelectedPoints(), function(a) {
                        a.selected && a !== e && (a.selected = a.options.selected = !1, f.options.data[d(a, f.data)] = a.options, a.setState(""), a.firePointEvent("unselect"))
                    })
                })
            },
            onMouseOver: function(a) {
                var b =
                    this.series.chart,
                    c = b.pointer;
                a = a ? c.normalize(a) : c.getChartCoordinatesFromPoint(this, b.inverted);
                c.runPointActions(a, this)
            },
            onMouseOut: function() {
                var a = this.series.chart;
                this.firePointEvent("mouseOut");
                h(a.hoverPoints || [], function(a) {
                    a.setState()
                });
                a.hoverPoints = a.hoverPoint = null
            },
            importEvents: function() {
                if (!this.hasImportedEvents) {
                    var c = this,
                        d = b(c.series.options.point, c.options).events;
                    c.events = d;
                    a.objectEach(d, function(a, b) {
                        A(c, b, a)
                    });
                    this.hasImportedEvents = !0
                }
            },
            setState: function(a, b) {
                var d = Math.floor(this.plotX),
                    e = this.plotY,
                    h = this.series,
                    k = h.options.states[a] || {},
                    l = f[h.type].marker && h.options.marker,
                    n = l && !1 === l.enabled,
                    p = l && l.states && l.states[a] || {},
                    g = !1 === p.enabled,
                    r = h.stateMarkerGraphic,
                    v = this.marker || {},
                    w = h.chart,
                    y = h.halo,
                    A, B = l && h.markerAttribs;
                a = a || "";
                if (!(a === this.state && !b || this.selected && "select" !== a || !1 === k.enabled || a && (g || n && !1 === p.enabled) || a && v.states && v.states[a] && !1 === v.states[a].enabled)) {
                    B && (A = h.markerAttribs(this, a));
                    if (this.graphic) this.state && this.graphic.removeClass("highcharts-point-" +
                        this.state), a && this.graphic.addClass("highcharts-point-" + a), this.graphic.animate(h.pointAttribs(this, a), c(w.options.chart.animation, k.animation)), A && this.graphic.animate(A, c(w.options.chart.animation, p.animation, l.animation)), r && r.hide();
                    else {
                        if (a && p) {
                            l = v.symbol || h.symbol;
                            r && r.currentSymbol !== l && (r = r.destroy());
                            if (r) r[b ? "animate" : "attr"]({
                                x: A.x,
                                y: A.y
                            });
                            else l && (h.stateMarkerGraphic = r = w.renderer.symbol(l, A.x, A.y, A.width, A.height).add(h.markerGroup), r.currentSymbol = l);
                            r && r.attr(h.pointAttribs(this,
                                a))
                        }
                        r && (r[a && w.isInsidePlot(d, e, w.inverted) ? "show" : "hide"](), r.element.point = this)
                    }(d = k.halo) && d.size ? (y || (h.halo = y = w.renderer.path().add((this.graphic || r).parentGroup)), y[b ? "animate" : "attr"]({
                        d: this.haloPath(d.size)
                    }), y.attr({
                        "class": "highcharts-halo highcharts-color-" + c(this.colorIndex, h.colorIndex)
                    }), y.point = this, y.attr(m({
                        fill: this.color || h.color,
                        "fill-opacity": d.opacity,
                        zIndex: -1
                    }, d.attributes))) : y && y.point && y.point.haloPath && y.animate({
                        d: y.point.haloPath(0)
                    });
                    this.state = a
                }
            },
            haloPath: function(a) {
                return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) -
                    a, this.plotY - a, 2 * a, 2 * a)
            }
        });
        m(k.prototype, {
            onMouseOver: function() {
                var a = this.chart,
                    b = a.hoverSeries;
                if (b && b !== this) b.onMouseOut();
                this.options.events.mouseOver && r(this, "mouseOver");
                this.setState("hover");
                a.hoverSeries = this
            },
            onMouseOut: function() {
                var a = this.options,
                    b = this.chart,
                    c = b.tooltip,
                    d = b.hoverPoint;
                b.hoverSeries = null;
                if (d) d.onMouseOut();
                this && a.events.mouseOut && r(this, "mouseOut");
                !c || this.stickyTracking || c.shared && !this.noSharedTooltip || c.hide();
                this.setState()
            },
            setState: function(a) {
                var b = this,
                    d = b.options,
                    e = b.graph,
                    f = d.states,
                    k = d.lineWidth,
                    d = 0;
                a = a || "";
                if (b.state !== a && (h([b.group, b.markerGroup, b.dataLabelsGroup], function(c) {
                        c && (b.state && c.removeClass("highcharts-series-" + b.state), a && c.addClass("highcharts-series-" + a))
                    }), b.state = a, !f[a] || !1 !== f[a].enabled) && (a && (k = f[a].lineWidth || k + (f[a].lineWidthPlus || 0)), e && !e.dashstyle))
                    for (k = {
                            "stroke-width": k
                        }, e.animate(k, c(b.chart.options.chart.animation, f[a] && f[a].animation)); b["zone-graph-" + d];) b["zone-graph-" + d].attr(k), d += 1
            },
            setVisible: function(a,
                b) {
                var c = this,
                    d = c.chart,
                    e = c.legendItem,
                    f, k = d.options.chart.ignoreHiddenSeries,
                    l = c.visible;
                f = (c.visible = a = c.options.visible = c.userOptions.visible = void 0 === a ? !l : a) ? "show" : "hide";
                h(["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"], function(a) {
                    if (c[a]) c[a][f]()
                });
                if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) c.onMouseOut();
                e && d.legend.colorizeItem(c, a);
                c.isDirty = !0;
                c.options.stacking && h(d.series, function(a) {
                    a.options.stacking && a.visible && (a.isDirty = !0)
                });
                h(c.linkedSeries, function(b) {
                    b.setVisible(a, !1)
                });
                k && (d.isDirtyBox = !0);
                !1 !== b && d.redraw();
                r(c, f)
            },
            show: function() {
                this.setVisible(!0)
            },
            hide: function() {
                this.setVisible(!1)
            },
            select: function(a) {
                this.selected = a = void 0 === a ? !this.selected : a;
                this.checkbox && (this.checkbox.checked = a);
                r(this, a ? "select" : "unselect")
            },
            drawTracker: I.drawTrackerGraph
        })
    })(N);
    (function(a) {
        var A = a.Chart,
            B = a.each,
            G = a.inArray,
            F = a.isArray,
            l = a.isObject,
            f = a.pick,
            h = a.splat;
        A.prototype.setResponsive = function(f) {
            var h = this.options.responsive,
                l = [],
                d = this.currentResponsive;
            h && h.rules &&
                B(h.rules, function(d) {
                    void 0 === d._id && (d._id = a.uniqueKey());
                    this.matchResponsiveRule(d, l, f)
                }, this);
            var e = a.merge.apply(0, a.map(l, function(d) {
                    return a.find(h.rules, function(a) {
                        return a._id === d
                    }).chartOptions
                })),
                l = l.toString() || void 0;
            l !== (d && d.ruleIds) && (d && this.update(d.undoOptions, f), l ? (this.currentResponsive = {
                ruleIds: l,
                mergedOptions: e,
                undoOptions: this.currentOptions(e)
            }, this.update(e, f)) : this.currentResponsive = void 0)
        };
        A.prototype.matchResponsiveRule = function(a, h) {
            var l = a.condition;
            (l.callback ||
                function() {
                    return this.chartWidth <= f(l.maxWidth, Number.MAX_VALUE) && this.chartHeight <= f(l.maxHeight, Number.MAX_VALUE) && this.chartWidth >= f(l.minWidth, 0) && this.chartHeight >= f(l.minHeight, 0)
                }).call(this) && h.push(a._id)
        };
        A.prototype.currentOptions = function(f) {
            function m(d, e, f, b) {
                var c;
                a.objectEach(d, function(a, k) {
                    if (!b && -1 < G(k, ["series", "xAxis", "yAxis"]))
                        for (d[k] = h(d[k]), f[k] = [], c = 0; c < d[k].length; c++) e[k][c] && (f[k][c] = {}, m(a[c], e[k][c], f[k][c], b + 1));
                    else l(a) ? (f[k] = F(a) ? [] : {}, m(a, e[k] || {}, f[k], b + 1)) : f[k] =
                        e[k] || null
                })
            }
            var v = {};
            m(f, this.options, v, 0);
            return v
        }
    })(N);
    return N
});


