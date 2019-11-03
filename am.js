window.ue_ihb = (window.ue_ihb || window.ueinit || 0) + 1;
if (window.ue_ihb === 1) {
    var ue_hob = +new Date();
    var ue_id = 'DS02B9KKCP4GFC6TV9GZ',
        ue_csm = window,
        ue_err_chan = 'jserr-rw',
        ue = {};
    (function(d) {
        var e = d.ue = d.ue || {},
            f = Date.now || function() {
                return +new Date
            };
        e.d = function(b) {
            return f() - (b ? 0 : d.ue_t0)
        };
        e.stub = function(b, a) {
            if (!b[a]) {
                var c = [];
                b[a] = function() {
                    c.push([c.slice.call(arguments), e.d(), d.ue_id])
                };
                b[a].replay = function(b) {
                    for (var a; a = c.shift();) b(a[0], a[1], a[2])
                };
                b[a].isStub = 1
            }
        };
        e.exec = function(b, a) {
            return function() {
                if (1 == window.ueinit) try {
                    return b.apply(this, arguments)
                } catch (c) {
                    ueLogError(c, {
                        attribution: a || "undefined",
                        logLevel: "WARN"
                    })
                }
            }
        }
    })(ue_csm);

    ue.stub(ue, "log");
    ue.stub(ue, "onunload");
    ue.stub(ue, "onflush");

    (function(d, e) {
        function h(f, b) {
            if (!(a.ec > a.mxe) && f) {
                a.ter.push(f);
                b = b || {};
                var c = f.logLevel || b.logLevel;
                c && c !== k && c !== m && c !== n && c !== p || a.ec++;
                c && c != k || a.ecf++;
                b.pageURL = "" + (e.location ? e.location.href : "");
                b.logLevel = c;
                b.attribution = f.attribution || b.attribution;
                a.erl.push({
                    ex: f,
                    info: b
                })
            }
        }

        function l(a, b, c, e, g) {
            d.ueLogError({
                m: a,
                f: b,
                l: c,
                c: "" + e,
                err: g,
                fromOnError: 1,
                args: arguments
            }, g ? {
                attribution: g.attribution,
                logLevel: g.logLevel
            } : void 0);
            return !1
        }
        var k = "FATAL",
            m = "ERROR",
            n = "WARN",
            p = "DOWNGRADED",
            a = {
                ec: 0,
                ecf: 0,
                pec: 0,
                ts: 0,
                erl: [],
                ter: [],
                mxe: 50,
                startTimer: function() {
                    a.ts++;
                    setInterval(function() {
                        d.ue && a.pec < a.ec && d.uex("at");
                        a.pec = a.ec
                    }, 1E4)
                }
            };
        l.skipTrace = 1;
        h.skipTrace = 1;
        h.isStub = 1;
        d.ueLogError = h;
        d.ue_err = a;
        e.onerror = l
    })(ue_csm, window);

    ue.stub(ue, "event");
    ue.stub(ue, "onSushiUnload");
    ue.stub(ue, "onSushiFlush");

    var ue_url = '/detail/0SKQWRAW62EPRSY2CJZJALITMC/ref=atv_hm_hom_1_c_8pZiqd_2_2/uedata/unsticky/137-8861866-9033632/NoPageType/ntpoffrw',
        ue_sid = '137-8861866-9033632',
        ue_mid = 'ART4WZ8MWBX2Y',
        ue_sn = 'www.primevideo.com',
        ue_furl = 'fls-na.amazon.ca',
        ue_surl = 'https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.prod',
        ue_navtiming = 1,
        ue_fcsn = 1,
        ue_isrw = true,
        ue_fpf = '//fls-na.amazon.ca/1/batch/1/OP/ART4WZ8MWBX2Y:137-8861866-9033632:DS02B9KKCP4GFC6TV9GZ$uedata=s:',
        ue_qsl = 7000,
        ue_rpl_ns = 0,
        ue_orct = 1,
        ue_int = 0,
        ue_adb = 1,
        ue_adb_rtla = 1,
        ue_ddq = 1,
        ue_fps = 0,
        ue_rsc = 0,
        ue_clf = 0,
        ue_pel = 0,
        ue_sbuimp = 1,
        ue_sclog = false,
        ue_crid = 0;

    if (!window.ue_csm) {
        var ue_csm = window;
    }

    function ue_viz() {
        (function(c, e, a) {
            function k(b) {
                if (c.ue.viz.length < p && !l) {
                    var a = b.type;
                    b = b.originalEvent;
                    /^focus./.test(a) && b && (b.toElement || b.fromElement || b.relatedTarget) || (a = e[m] || ("blur" == a || "focusout" == a ? "hidden" : "visible"), c.ue.viz.push(a + ":" + (+new Date - c.ue.t0)), "visible" == a && (ue.isl && uex("at"), l = 1))
                }
            }
            for (var l = 0, f, g, m, n = ["", "webkit", "o", "ms", "moz"], d = 0, p = 20, h = 0; h < n.length && !d; h++)
                if (a = n[h], f = (a ? a + "H" : "h") + "idden", d = "boolean" == typeof e[f]) g = a + "visibilitychange", m = (a ? a + "V" : "v") + "isibilityState";
            k({});
            d && e.addEventListener(g, k, 0);
            c.ue && d && (c.ue.pageViz = {
                event: g,
                propHid: f
            })
        })(ue_csm, document, window)
    };

    (function(a, g, v) {
        function z(a) {
            return a && a.replace && a.replace(/^\s+|\s+$/g, "")
        }

        function q(a) {
            return "undefined" === typeof a
        }

        function w(a) {
            try {
                var b = v.cookie.match(RegExp("(^| )" + a + "=([^;]+)"));
                if (b) return b[2].trim()
            } catch (c) {}
        }

        function A(d, b) {
            d && (a.ue_id = k.id = k.rid = d, a.ue_fpf = a.ue_fpf.replace(/((.*?:){2})(\w+)/, function(a, b) {
                return b + d
            }));
            b && (a.ue_fpf = a.ue_fpf.replace(/(.*?:)(\w|-)+/, function(a, d) {
                return d + b
            }), a.ue_sid = b);
            a.ue.tag("accelerated-experience")
        }

        function t(d, b, c, h) {
            var g = h || +new Date,
                l;
            a.ueam && a.ueam(b, d, h);
            if (b || q(c)) {
                if (d)
                    for (l in h = b ? f("t", b) || f("t", b, {}) : a.ue.t, h[d] = g, c) c.hasOwnProperty(l) && f(l, b, c[l]);
                return g
            }
        }

        function f(d, b, c) {
            var h = a.ue,
                f = b && b != h.id ? h.sc[b] : h;
            f || (f = h.sc[b] = {});
            "id" == d && c && (h.cfa2 = 1);
            return f[d] = c || f[d]
        }

        function C(d, b, c, f, g) {
            c = "on" + c;
            var l = b[c];
            "function" === typeof l ? d && (a.ue.h[d] = l) : l = function() {};
            b[c] = g ? function(a) {
                f(a);
                l(a)
            } : function(a) {
                l(a);
                f(a)
            };
            b[c] && (b[c].isUeh = 1)
        }

        function D(d, b, c, h) {
            function p(b, c) {
                var e = [b],
                    J = 0,
                    g = {},
                    h, l;
                c ? (e.push("m=1"), g[c] = 1) : g =
                    a.ue.sc;
                for (l in g)
                    if (g.hasOwnProperty(l)) {
                        var m = f("wb", l),
                            k = f("t", l) || {},
                            n = f("t0", l) || a.ue.t0,
                            p;
                        if (c || 2 == m) {
                            m = m ? J++ : "";
                            e.push("sc" + m + "=" + l);
                            for (p in k) 3 >= p.length && !q(k[p]) && null !== k[p] && e.push(p + m + "=" + (k[p] - n));
                            e.push("t" + m + "=" + k[d]);
                            if (f("ctb", l) || f("wb", l)) h = 1
                        }
                    }! B && h && e.push("ctb=1");
                return e.join("&")
            }

            function l(b, c, d, e) {
                if (b) {
                    var f = a.ue_err,
                        h;
                    a.ue_url && (!e || !a.ue.log) && b && 0 < b.length && (h = new Image, a.ue.iel.push(h), h.src = b, a.ue.count && a.ue.count("postbackImageSize", b.length));
                    K ? a.ue_fpf && g.encodeURIComponent &&
                        b && (e = new Image, b = "" + a.ue_fpf + g.encodeURIComponent(b) + ":" + (+new Date - a.ue_t0), a.ue.iel.push(e), e.src = b) : a.ue.log && (h = g.chrome && "ul" == c, a.ue.log(b, "uedata", a.ue_svi ? {
                            n: 1,
                            img: !e && h ? 1 : 0
                        } : {
                            n: 1
                        }), a.ue.ielf.push(b));
                    f && !f.ts && f.startTimer();
                    a.ue.b && (f = a.ue.b, a.ue.b = "", l(f, c, d, 1))
                }
            }

            function u(b) {
                if (!ue.collected) {
                    var c = b.timing,
                        e = b.navigation,
                        d = ue.t;
                    c && (d.na_ = c.navigationStart, d.ul_ = c.unloadEventStart, d._ul = c.unloadEventEnd, d.rd_ = c.redirectStart, d._rd = c.redirectEnd, d.fe_ = c.fetchStart, d.lk_ = c.domainLookupStart,
                        d._lk = c.domainLookupEnd, d.co_ = c.connectStart, d._co = c.connectEnd, d.sc_ = c.secureConnectionStart, d.rq_ = c.requestStart, d.rs_ = c.responseStart, d._rs = c.responseEnd, d.dl_ = c.domLoading, d.di_ = c.domInteractive, d.de_ = c.domContentLoadedEventStart, d._de = c.domContentLoadedEventEnd, d._dc = c.domComplete, d.ld_ = c.loadEventStart, d._ld = c.loadEventEnd, c = d.na_, b = "function" !== typeof b.now || q(c) ? 0 : new Date(c + b.now()) - new Date, d.ntd = b + a.ue.t0);
                    e && (d.ty = e.type + a.ue.t0, d.rc = e.redirectCount + a.ue.t0);
                    ue.collected = 1
                }
            }

            function w(b) {
                var c =
                    r && r.navigation ? r.navigation.type : y,
                    d = c && 2 != c,
                    e = a.ue.bfini;
                a.ue.cfa2 || (e && 1 < e && (b += "&bfform=1", d || (a.ue.isBFT = e - 1)), 2 == c && (b += "&bfnt=1", a.ue.isBFT = a.ue.isBFT || 1), a.ue.ssw && a.ue.isBFT && (q(a.ue.isNRBF) && (c = a.ue.ssw(a.ue.oid), c.e || q(c.val) || (a.ue.isNRBF = 1 < c.val ? 0 : 1)), q(a.ue.isNRBF) || (b += "&nrbf=" + a.ue.isNRBF)), a.ue.isBFT && !a.ue.isNRBF && (b += "&bft=" + a.ue.isBFT));
                return b
            }
            if (!k.paused && (b || q(c))) {
                for (var n in c) c.hasOwnProperty(n) && f(n, b, c[n]);
                t("pc", b, c);
                n = f("id", b) || a.ue.id;
                var e = a.ue.url + "?" + d + "&v=" +
                    a.ue.v + "&id=" + n,
                    B = f("ctb", b) || f("wb", b),
                    r = g.performance || g.webkitPerformance,
                    m, s;
                B && (e += "&ctb=" + B);
                1 < a.ueinit && (e += "&ic=" + a.ueinit);
                !a.ue._fi || "at" != d || b && b != n || (e += a.ue._fi());
                if (!("ld" != d && "ul" != d || b && b != n)) {
                    if ("ld" == d) {
                        try {
                            g.onbeforeunload && g.onbeforeunload.isUeh && (g.onbeforeunload = null)
                        } catch (A) {}
                        if (g.chrome)
                            for (s = 0; s < ue.ulh.length; s++) E("beforeunload", ue.ulh[s]);
                        (s = v.ue_backdetect) && s.ue_back && s.ue_back.value++;
                        a._uess && (m = a._uess());
                        a.ue.isl = 1
                    }
                    ue._bf && (e += "&bf=" + ue._bf());
                    a.ue_navtiming && r &&
                        r.timing && (f("ctb", n, "1"), 1 == a.ue_navtiming && t("tc", y, y, r.timing.navigationStart));
                    r && u(r);
                    a.ue.t.hob = a.ue_hob;
                    a.ue.t.hoe = a.ue_hoe;
                    a.ue.ifr && (e += "&ifr=1")
                }
                t(d, b, c, h);
                c = "ld" == d && b && f("wb", b);
                var x;
                c || b && b !== n || L(b);
                c || n == a.ue.oid || M((f("t", b) || {}).tc || +f("t0", b), +f("t0", b));
                a.ue_mbl && a.ue_mbl.cnt && !c && (e += a.ue_mbl.cnt());
                c ? f("wb", b, 2) : "ld" == d && (k.lid = z(n));
                for (x in a.ue.sc)
                    if (1 == f("wb", x)) break;
                if (c) {
                    if (a.ue.s) return;
                    e = p(e, null)
                } else h = p(e, null), h != e && (h = w(h), a.ue.b = h), m && (e += m), e = p(e, b || a.ue.id);
                e = w(e);
                if (a.ue.b || c)
                    for (x in a.ue.sc) 2 == f("wb", x) && delete a.ue.sc[x];
                m = 0;
                ue._rt && (e += "&rt=" + ue._rt());
                c || (a.ue.s = 0, (m = a.ue_err) && 0 < m.ec && m.pec < m.ec && (m.pec = m.ec, e += "&ec=" + m.ec + "&ecf=" + m.ecf), m = f("ctb", b), f("t", b, {}));
                e && a.ue.tag && 0 < a.ue.tag().length && (e += "&csmtags=" + a.ue.tag().join("|"), a.ue.tag = a.ue.tagC());
                e && a.ue.viz && 0 < a.ue.viz.length && (e += "&viz=" + a.ue.viz.join("|"), a.ue.viz = []);
                e && !q(a.ue_pty) && (e += "&pty=" + a.ue_pty + "&spty=" + a.ue_spty + "&pti=" + a.ue_pti);
                e && a.ue.tabid && (e += "&tid=" + a.ue.tabid);
                e &&
                    a.ue.aftb && (e += "&aftb=1");
                e && a.ue.sbf && (e += "&sbf=1");
                !a.ue._ui || b && b != n || (e += a.ue._ui());
                a.ue.a = e;
                l(e, d, m, c)
            }
        }

        function L(a) {
            var b = g.ue_csm_markers || {},
                c;
            for (c in b) b.hasOwnProperty(c) && t(c, a, y, b[c])
        }

        function u(d, b, c) {
            c = c || g;
            a.ue_pel && window.EventTarget && window.EventTarget.prototype && window.EventTarget.prototype.addEventListener ? window.EventTarget.prototype.addEventListener.call(c, d, b, !!window.ue_clf) : c.addEventListener ? c.addEventListener(d, b, !!window.ue_clf) : c.attachEvent && c.attachEvent("on" + d, b)
        }

        function E(d, b, c) {
            c = c || g;
            a.ue_pel && window.EventTarget && window.EventTarget.prototype && window.EventTarget.prototype.removeEventListener ? window.EventTarget.prototype.removeEventListener.call(c, d, b, !!window.ue_clf) : c.removeEventListener ? c.removeEventListener(d, b, !!window.ue_clf) : c.detachEvent && c.detachEvent("on" + d, b)
        }

        function F() {
            function d() {
                a.onUl()
            }

            function b(a) {
                return function() {
                    c[a] || (c[a] = 1, D(a))
                }
            }
            var c = a.ue.r,
                f, k;
            a.onLd = b("ld");
            a.onLdEnd = b("ld");
            a.onUl = b("ul");
            f = {
                stop: b("os")
            };
            g.chrome ? (u("beforeunload",
                d), ue.ulh.push(d)) : f[N] = a.onUl;
            for (k in f) f.hasOwnProperty(k) && C(0, g, k, f[k]);
            a.ue_viz && ue_viz();
            O && u("readystatechange", P, v);
            u("load", a.onLd);
            t("ue")
        }

        function P() {
            "complete" === v.readyState && (Q ? setTimeout(G, 0) : G())
        }

        function G() {
            var d;
            if (!(d = ue.isl) && (d = R)) a: {
                d = v.images || [];
                for (var b = 0; b < d.length; b++)
                    if (!1 === d[b].complete) {
                        d = !1;
                        break a
                    } d = !0
            }
            if (!d) a.onUl()
        }

        function M(d, b) {
            a.ue_mbl && a.ue_mbl.ajax && a.ue_mbl.ajax(d, b);
            a.ue.tag("ajax-transition")
        }
        a.ueinit = (a.ueinit || 0) + 1;
        var k = {
                t0: g.aPageStart || a.ue_t0,
                id: a.ue_id,
                url: a.ue_url,
                rid: a.ue_id,
                a: "",
                b: "",
                h: {},
                r: {
                    ld: 0,
                    oe: 0,
                    ul: 0
                },
                s: 1,
                t: {},
                sc: {},
                iel: [],
                ielf: [],
                fc_idx: {},
                viz: [],
                v: "0.204625.0",
                d: a.ue && a.ue.d,
                log: a.ue && a.ue.log,
                clog: a.ue && a.ue.clog,
                onflush: a.ue && a.ue.onflush,
                onunload: a.ue && a.ue.onunload,
                stub: a.ue && a.ue.stub,
                lr: a.ue && a.ue.lr,
                exec: a.ue && a.ue.exec,
                event: a.ue && a.ue.event,
                onSushiUnload: a.ue && a.ue.onSushiUnload,
                onSushiFlush: a.ue && a.ue.onSushiFlush,
                ulh: [],
                cfa2: 0,
                paused: !1
            },
            K = a.ue_fpf ? 1 : 0,
            O = 1 === a.ue_rsc || 3 === a.ue_rsc,
            Q = 3 === a.ue_rsc,
            R = 1 === a.ue_rsc,
            N =
            "beforeunload",
            y;
        k.oid = z(k.id);
        k.lid = z(k.id);
        a.ue = k;
        a.ue._t0 = a.ue.t0;
        a.ue.tagC = function() {
            var a = {};
            return function(b) {
                b && (a[b] = 1);
                b = [];
                for (var c in a) a.hasOwnProperty(c) && b.push(c);
                return b
            }
        };
        a.ue.tag = a.ue.tagC();
        a.ue.ifr = g.top !== g.self || g.frameElement ? 1 : 0;
        ue.attach = u;
        ue.detach = E;
        if ("000-0000000-8675309" === a.ue_sid) {
            var H = w("cdn-rid"),
                I = w("session-id");
            H && I && A(H, I)
        }
        a.uei = F;
        a.ueh = C;
        a.ues = f;
        a.uet = t;
        a.uex = D;
        k.reset = A;
        k.pause = function(a) {
            k.paused = a
        };
        F()
    })(ue_csm, window, ue_csm.document);



    (function(c) {
        var a = c.ue;
        a.cv = {};
        a.cv.scopes = {};
        a.count = function(d, c, b) {
            var e = {},
                f = a.cv,
                g = b && 0 === b.c;
            e.counter = d;
            e.value = c;
            e.t = a.d();
            b && b.scope && (f = a.cv.scopes[b.scope] = a.cv.scopes[b.scope] || {}, e.scope = b.scope);
            if (void 0 === c) return f[d];
            f[d] = c;
            d = 0;
            b && b.bf && (d = 1);
            ue_csm.ue_sclog || !a.clog || 0 !== d || g ? a.log && a.log(e, "csmcount", {
                c: 1,
                bf: d
            }) : a.clog(e, "csmcount", {
                bf: d
            })
        };
        a.count("baselineCounter2", 1);
        a && a.event && (a.event({
                requestId: c.ue_id || "rid",
                server: c.ue_sn || "sn",
                obfuscatedMarketplaceId: c.ue_mid || "mid"
            },
            "csm", "csm.CSMBaselineEvent.4"), a.count("nexusBaselineCounter", 1, {
            bf: 1
        }))
    })(ue_csm);

    var ue_hoe = +new Date();