var aPageStart = (new Date()).getTime(); < /script><meta charset="utf-8"> <
link rel = "stylesheet"
href = "https://images-na.ssl-images-amazon.com/images/I/41gCbfiTdaL._RC|516fcOUE-HL.css,01evdoiemkL.css,01K+Ps1DeEL.css,31pdJv9iSzL.css,01tgK36lpGL.css,11UGC+GXOPL.css,21LK7jaicML.css,11L58Qpo0GL.css,21kyTi1FabL.css,01Xl9KigtzL.css,01YhS3Cs-hL.css,21GwE3cR-yL.css,019SHZnt8RL.css,01wAWQRgXzL.css,21bWcRJYNIL.css,11WgRxUdJRL.css,01dU8+SPlFL.css,11ocrgKoE-L.css,01SHjPML6tL.css,111-D2qRjiL.css,01QrWuRrZ-L.css,310Imb6LqFL.css,11Z1a0FxSIL.css,01cbS3UK11L.css,21mOLw+nYYL.css,01L8Y-JFEhL.css_.css?AUIClients/AmazonUI#us.not-trident" / >
    <
    script >
    (function(g, h, Q, y) {
        function G(a) {
            v && v.tag && v.tag(q(":", "aui", a))
        }

        function z(a, b) {
            v && v.count && v.count("aui:" + a, 0 === b ? 0 : b || (v.count("aui:" + a) || 0) + 1)
        }

        function m(a) {
            try {
                return a.test(navigator.userAgent)
            } catch (b) {
                return !1
            }
        }

        function w(a, b, c) {
            a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
        }

        function q(a, b, c, d) {
            b = b && c ? b + a + c : b || c;
            return d ? q(a, b, d) : b
        }

        function H(a, b, c) {
            try {
                Object.defineProperty(a, b, {
                    value: c,
                    writable: !1
                })
            } catch (d) {
                a[b] = c
            }
            return c
        }

        function R() {
            return setTimeout(ba,
                0)
        }

        function ua(a, b) {
            var c = a.length,
                d = c,
                f = function() {
                    d-- || (S.push(b), T || (R(), T = !0))
                };
            for (f(); c--;) ca[a[c]] ? f() : (B[a[c]] = B[a[c]] || []).push(f)
        }

        function va(a, b, c, d, f) {
            var e = h.createElement(a ? "script" : "link");
            w(e, "error", d);
            f && w(e, "load", f);
            if (a) {
                e.type = "text/javascript";
                e.async = !0;
                if (a = c) a = -1 !== b.indexOf("images/I") || /AUIClients/.test(b);
                a && e.setAttribute("crossorigin", "anonymous");
                e.src = b
            } else e.rel = "stylesheet", e.href = b;
            h.getElementsByTagName("head")[0].appendChild(e)
        }

        function da(a, b) {
            function c(c,
                d) {
                function f() {
                    va(b, c, h, function(b) {
                        !I && h ? (h = !1, z("resource_retry"), f()) : (z("resource_error"), a.log("Asset failed to load: " + c, I ? "WARN" : y));
                        b && b.stopPropagation ? b.stopPropagation() : g.event && (g.event.cancelBubble = !0)
                    }, d)
                }
                if (ea[c]) return !1;
                ea[c] = !0;
                z("resource_count");
                var h = !0;
                return !f()
            }
            if (b) {
                var d = 0,
                    f = 0;
                c.andConfirm = function(a, b) {
                    return c(a, function() {
                        d++;
                        b && b.apply(this, arguments)
                    })
                };
                c.confirm = function() {
                    f++
                };
                c.getCsriCounters = function() {
                    return {
                        reqs: d,
                        full: f
                    }
                }
            }
            return c
        }

        function wa(a, b, c) {
            for (var d = {
                    name: a,
                    guard: function(c) {
                        return b.guardFatal(a, c)
                    },
                    logError: function(c, d, f) {
                        b.logError(c, d, f, a)
                    }
                }, f = [], e = 0; e < c.length; e++) J.hasOwnProperty(c[e]) && (f[e] = U.hasOwnProperty(c[e]) ? U[c[e]](J[c[e]], d) : J[c[e]]);
            return f
        }

        function C(a, b, c, d, f) {
            return function(e, h) {
                function m() {
                    var a = null;
                    d ? a = h : "function" === typeof h && (p.start = D(), a = h.apply(g, wa(e, k, l)), p.end = D());
                    if (b) {
                        J[e] = a;
                        a = e;
                        for (ca[a] = !0;
                            (B[a] || []).length;) B[a].shift()();
                        delete B[a]
                    }
                    p.done = !0
                }
                var k = f || this;
                "function" === typeof e && (h = e, e = y);
                b && (e = e ? e.replace(fa,
                    "") : "__NONAME__", V.hasOwnProperty(e) && k.error(q(", reregistered by ", q(" by ", e + " already registered", V[e]), k.attribution), e), V[e] = k.attribution);
                for (var l = [], n = 0; n < a.length; n++) l[n] = a[n].replace(fa, "");
                var p = ga[e || "anon" + ++xa] = {
                    depend: l,
                    registered: D(),
                    namespace: k.namespace
                };
                c ? m() : ua(l, k.guardFatal(e, m));
                return {
                    decorate: function(a) {
                        U[e] = k.guardFatal(e, a)
                    }
                }
            }
        }

        function ha(a) {
            return function() {
                var b = Array.prototype.slice.call(arguments);
                return {
                    execute: C(b, !1, a, !1, this),
                    register: C(b, !0, a, !1, this)
                }
            }
        }

        function W(a,
            b) {
            return function(c, d) {
                d || (d = c, c = y);
                var f = this.attribution;
                return function() {
                    A.push(b || {
                        attribution: f,
                        name: c,
                        logLevel: a
                    });
                    var e = d.apply(this, arguments);
                    A.pop();
                    return e
                }
            }
        }

        function K(a, b) {
            this.load = {
                js: da(this, !0),
                css: da(this)
            };
            H(this, "namespace", b);
            H(this, "attribution", a)
        }

        function ia() {
            h.body ? p.trigger("a-bodyBegin") : setTimeout(ia, 20)
        }

        function E(a, b) {
            if (b) {
                for (var c = a.className.split(" "), d = c.length; d--;)
                    if (c[d] === b) return;
                a.className += " " + b
            }
        }

        function ja(a, b) {
            for (var c = a.className.split(" "), d = [],
                    f;
                (f = c.pop()) !== y;) f && f !== b && d.push(f);
            a.className = d.join(" ")
        }

        function ka(a) {
            try {
                return a()
            } catch (b) {
                return !1
            }
        }

        function L() {
            if (M) {
                var a = g.innerWidth ? {
                    w: g.innerWidth,
                    h: g.innerHeight
                } : {
                    w: l.clientWidth,
                    h: l.clientHeight
                };
                5 < Math.abs(a.w - X.w) || 50 < a.h - X.h ? (X = a, N = 4, (a = k.mobile || k.tablet ? 450 < a.w && a.w > a.h : 1250 <= a.w) ? E(l, "a-ws") : ja(l, "a-ws")) : 0 < N && (N--, la = setTimeout(L, 16))
            }
        }

        function ya(a) {
            (M = a === y ? !M : !!a) && L()
        }

        function za() {
            return M
        }

        function r(a, b) {
            return "sw:" + (b || "") + ":" + a + ":"
        }

        function ma() {
            na.forEach(function(a) {
                G(a)
            })
        }

        function n(a) {
            na.push(a)
        }

        function oa(a, b, c, d) {
            if (c) {
                b = m(/Chrome/i) && !m(/Edge/i) && !m(/OPR/i) && !a.capabilities.isAmazonApp && !m(new RegExp(Y + "bwv" + Y + "b"));
                var f = r(d, "browser"),
                    e = r(d, "prod_mshop"),
                    g = r(d, "beta_mshop");
                !a.capabilities.isAmazonApp && c.browser && b && (n(f + "supported"), c.browser.action(f, d));
                !b && c.browser && n(f + "unsupported");
                c.prodMshop && n(e + "unsupported");
                c.betaMshop && n(g + "unsupported")
            }
        }
        "use strict";
        var O = Q.now = Q.now || function() {
                return +new Q
            },
            D = function(a) {
                return a && a.now ? a.now.bind(a) : O
            }(g.performance),
            Aa = D(),
            t = g.AmazonUIPageJS || g.P;
        if (t && t.when && t.register) throw Error("A copy of P has already been loaded on this page.");
        var v = g.ue;
        G();
        G("aui_build_date:3.19.4-2019-07-04");
        var S = [],
            T = !1,
            ba;
        ba = function() {
            for (var a = R(), b = O(); S.length;)
                if (S.shift()(), 50 < O() - b) return;
            clearTimeout(a);
            T = !1
        };
        m(/OS 6_[0-9]+ like Mac OS X/i) && w(g, "scroll", R);
        var ca = {},
            B = {},
            ea = {},
            I = !1;
        w(g, "beforeunload", function() {
            I = !0;
            setTimeout(function() {
                I = !1
            }, 1E4)
        });
        var fa = /^prv:/,
            V = {},
            J = {},
            U = {},
            ga = {},
            xa = 0,
            Y = String.fromCharCode(92),
            F,
            A = [],
            pa = g.onerror;
        g.onerror = function(a, b, c, d, f) {
            f && "object" === typeof f || (f = Error(a, b, c), f.columnNumber = d, f.stack = b || c || d ? q(Y, f.message, "at " + q(":", b, c, d)) : y);
            var e = A.pop() || {};
            f.attribution = q(":", f.attribution || e.attribution, e.name);
            f.logLevel = e.logLevel;
            f.attribution && console && console.log && console.log([f.logLevel || "ERROR", a, "thrown by", f.attribution].join(" "));
            A = [];
            pa && (e = [].slice.call(arguments), e[4] = f, pa.apply(g, e))
        };
        K.prototype = {
            logError: function(a, b, c, d) {
                b = {
                    message: b,
                    logLevel: c || "ERROR",
                    attribution: q(":",
                        this.attribution, d)
                };
                if (g.ueLogError) return g.ueLogError(a || b, a ? b : null), !0;
                console && console.error && (console.log(b), console.error(a));
                return !1
            },
            error: function(a, b, c, d) {
                a = Error(q(":", d, a, c));
                a.attribution = q(":", this.attribution, b);
                throw a;
            },
            guardError: W(),
            guardFatal: W("FATAL"),
            guardCurrent: function(a) {
                var b = A[A.length - 1];
                return b ? W(b.logLevel, b).call(this, a) : a
            },
            log: function(a, b, c) {
                return this.logError(null, a, b, c)
            },
            declare: C([], !0, !0, !0),
            register: C([], !0),
            execute: C([]),
            AUI_BUILD_DATE: "3.19.4-2019-07-04",
            when: ha(),
            now: ha(!0),
            trigger: function(a, b, c) {
                var d = O();
                this.declare(a, {
                    data: b,
                    pageElapsedTime: d - (g.aPageStart || NaN),
                    triggerTime: d
                });
                c && c.instrument && F.when("prv:a-logTrigger").execute(function(b) {
                    b(a)
                })
            },
            handleTriggers: function() {
                this.log("handleTriggers deprecated")
            },
            attributeErrors: function(a) {
                return new K(a)
            },
            _namespace: function(a, b) {
                return new K(a, b)
            }
        };
        var p = H(g, "AmazonUIPageJS", new K);
        F = p._namespace("PageJS", "AmazonUI");
        F.declare("prv:p-debug", ga);
        p.declare("p-recorder-events", []);
        p.declare("p-recorder-stop",
            function() {});
        H(g, "P", p);
        ia();
        if (h.addEventListener) {
            var qa;
            h.addEventListener("DOMContentLoaded", qa = function() {
                p.trigger("a-domready");
                h.removeEventListener("DOMContentLoaded", qa, !1)
            }, !1)
        }
        var l = h.documentElement,
            Z = function() {
                var a = ["O", "ms", "Moz", "Webkit"],
                    b = h.createElement("div");
                return {
                    testGradients: function() {
                        b.style.cssText = "background-image:-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:-webkit-linear-gradient(left top,#9f9,white);background-image:linear-gradient(left top,#9f9,white);";
                        return -1 < b.style.backgroundImage.indexOf("gradient")
                    },
                    test: function(c) {
                        var d = c.charAt(0).toUpperCase() + c.substr(1);
                        c = (a.join(d + " ") + d + " " + c).split(" ");
                        for (d = c.length; d--;)
                            if ("" === b.style[c[d]]) return !0;
                        return !1
                    },
                    testTransform3d: function() {
                        var a = !1;
                        g.matchMedia && (a = g.matchMedia("(-webkit-transform-3d)").matches);
                        return a
                    }
                }
            }(),
            t = l.className,
            ra = /(^| )a-mobile( |$)/.test(t),
            sa = /(^| )a-tablet( |$)/.test(t),
            k = {
                audio: function() {
                    return !!h.createElement("audio").canPlayType
                },
                video: function() {
                    return !!h.createElement("video").canPlayType
                },
                canvas: function() {
                    return !!h.createElement("canvas").getContext
                },
                svg: function() {
                    return !!h.createElementNS && !!h.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
                },
                offline: function() {
                    return navigator.hasOwnProperty && navigator.hasOwnProperty("onLine") && navigator.onLine
                },
                dragDrop: function() {
                    return "draggable" in h.createElement("span")
                },
                geolocation: function() {
                    return !!navigator.geolocation
                },
                history: function() {
                    return !(!g.history || !g.history.pushState)
                },
                webworker: function() {
                    return !!g.Worker
                },
                autofocus: function() {
                    return "autofocus" in h.createElement("input")
                },
                inputPlaceholder: function() {
                    return "placeholder" in h.createElement("input")
                },
                textareaPlaceholder: function() {
                    return "placeholder" in h.createElement("textarea")
                },
                localStorage: function() {
                    return "localStorage" in g && null !== g.localStorage
                },
                orientation: function() {
                    return "orientation" in g
                },
                touch: function() {
                    return "ontouchend" in h
                },
                gradients: function() {
                    return Z.testGradients()
                },
                hires: function() {
                    var a = g.devicePixelRatio && 1.5 <= g.devicePixelRatio ||
                        g.matchMedia && g.matchMedia("(min-resolution:144dpi)").matches;
                    z("hiRes" + (ra ? "Mobile" : sa ? "Tablet" : "Desktop"), a ? 1 : 0);
                    return a
                },
                transform3d: function() {
                    return Z.testTransform3d()
                },
                touchScrolling: function() {
                    return m(/Windowshop|android.([3-9]|[L-Z])|OS ([5-9]|[1-9][0-9]+)(_[0-9]{1,2})+ like Mac OS X|Chrome|Silk|Firefox|Trident.+?; Touch/i)
                },
                ios: function() {
                    return m(/OS [1-9][0-9]*(_[0-9]*)+ like Mac OS X/i) && !m(/trident|Edge/i)
                },
                android: function() {
                    return m(/android.([1-9]|[L-Z])/i) && !m(/trident|Edge/i)
                },
                mobile: function() {
                    return ra
                },
                tablet: function() {
                    return sa
                },
                rtl: function() {
                    return "rtl" === l.dir
                }
            },
            u;
        for (u in k) k.hasOwnProperty(u) && (k[u] = ka(k[u]));
        for (var aa = "textShadow textStroke boxShadow borderRadius borderImage opacity transform transition".split(" "), P = 0; P < aa.length; P++) k[aa[P]] = ka(function() {
            return Z.test(aa[P])
        });
        var M = !0,
            la = 0,
            X = {
                w: 0,
                h: 0
            },
            N = 4;
        L();
        w(g, "resize", function() {
            clearTimeout(la);
            N = 4;
            L()
        });
        var ta = {
            getItem: function(a) {
                try {
                    return g.localStorage.getItem(a)
                } catch (b) {}
            },
            setItem: function(a,
                b) {
                try {
                    return g.localStorage.setItem(a, b)
                } catch (c) {}
            }
        };
        ja(l, "a-no-js");
        E(l, "a-js");
        !m(/OS [1-8](_[0-9]*)+ like Mac OS X/i) || g.navigator.standalone || m(/safari/i) || E(l, "a-ember");
        t = [];
        for (u in k) k.hasOwnProperty(u) && k[u] && t.push("a-" + u.replace(/([A-Z])/g, function(a) {
            return "-" + a.toLowerCase()
        }));
        E(l, t.join(" "));
        l.setAttribute("data-aui-build-date", "3.19.4-2019-07-04");
        p.register("p-detect", function() {
            return {
                capabilities: k,
                localStorage: k.localStorage && ta,
                toggleResponsiveGrid: ya,
                responsiveGridEnabled: za
            }
        });
        m(/UCBrowser/i) || k.localStorage && E(l, ta.getItem("a-font-class"));
        p.declare("a-event-revised-handling", !1);
        var x;
        try {
            x = navigator.serviceWorker
        } catch (a) {
            G("sw:nav_err")
        }
        x && (w(x, "message", function(a) {
            a && a.data && z(a.data.k, a.data.v)
        }), x.controller && x.controller.postMessage("MSG-RDY"));
        var na = [];
        (function(a) {
            var b = a.reg,
                c = a.unreg;
            x && x.getRegistrations ? (F.when("A", "a-util").execute(function(a, b) {
                oa(a, b, c, "unregister")
            }), w(g, "load", function() {
                F.when("A", "a-util").execute(function(a, c) {
                    oa(a, c, b, "register");
                    ma()
                })
            })) : (b && (b.browser && n(r("register", "browser") + "unsupported"), b.prodMshop && n(r("register", "prod_mshop") + "unsupported"), b.betaMshop && n(r("register", "beta_mshop") + "unsupported")), c && (c.browser && n(r("unregister", "browser") + "unsupported"), c.prodMshop && n(r("unregister", "prod_mshop") + "unsupported"), c.betaMshop && n(r("unregister", "beta_mshop") + "unsupported")), ma())
        })({
            reg: {},
            unreg: {}
        });
        p.declare("a-fix-event-off", !1);
        z("pagejs:pkgExecTime", D() - Aa)
    })(window, document, Date);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/31C%2B8ASsqzL._RC|01ywwCCbsYL.js_.js?AUIClients/AmazonVideoUICompatibilityAssets');
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/11FbwVANcKL._RC|413VY5WZl4L.js_.js?AUIClients/DigitalVideoWebUtilityAssets');
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/61kzhTBl2qL._RC|11-BZEJ8lnL.js,61D3iDRaZSL.js_.js?AUIClients/AmazonUIBaseJS');
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/31b6sqA-U6L.js?AUIClients/AmazonVideoWebDetailsAssets');
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/11MvVqwdPSL.js?AUIClients/DigitalVideoWebDeeplinkingAssets#launch_type-embedded');
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/31M%2BSRoAkrL.js?AUIClients/DigitalVideoWebHoverAssets');
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/31pD4PLVwQL.js?AUIClients/DigitalVideoWebPlayerIntegration');
(window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-na.ssl-images-amazon.com/images/I/21Of0-9HPCL._RC|012FVc3131L.js,119KAWlHU6L.js,51xL2QLv4YL.js,11AHlQhPRjL.js,016iHgpF74L.js,11aNYFFS5hL.js,116tgw9TSaL.js,211-p4GRUCL.js,01PoLXBDXWL.js,61BanVD+50L.js,01mi-J86cyL.js,11BOgvnnntL.js,31UWuPgtTtL.js,01rpauTep4L.js,01iyxuSGj4L.js,018kT7oogLL.js_.js?AUIClients/AmazonUI'); <
