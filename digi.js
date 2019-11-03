(function(k) {
    var n = window.AmazonUIPageJS || window.P,
        p = n._namespace || n.attributeErrors,
        l = p ? p("DigitalVideoLoggingAssets", "") : n;
    l.guardFatal ? l.guardFatal(k)(l, window) : l.execute(function() {
        k(l, window)
    })
})(function(k, n, p) {
    k.when("jQuery", "dv-utils-stringify").register("logging", function(l, v) {
        var p = function(c) {
                var b = n.console;
                return b && b[c] && "function" === typeof b[c] ? b[c] : function() {}
            },
            d = {
                fatal: {
                    consoleMethod: "error",
                    logLevel: 0,
                    errorLevel: "FATAL"
                },
                error: {
                    consoleMethod: "error",
                    logLevel: 1,
                    errorLevel: "ERROR"
                },
                warn: {
                    consoleMethod: "warn",
                    logLevel: 2,
                    errorLevel: "WARNING"
                },
                info: {
                    consoleMethod: "info",
                    logLevel: 3,
                    errorLevel: null
                },
                debug: {
                    consoleMethod: "debug",
                    logLevel: 4,
                    errorLevel: null
                },
                log: {
                    consoleMethod: "log",
                    logLevel: 4,
                    errorLevel: null
                },
                trace: {
                    consoleMethod: "trace",
                    logLevel: 5,
                    errorLevel: null
                }
            },
            g = {},
            a;
        for (a in d) d.hasOwnProperty(a) && (g[d[a].consoleMethod] = p(d[a].consoleMethod));
        var e = function(c) {
                c = c || null;
                var b, r, h = "";
                try {
                    b = e.caller && e.caller.caller && e.caller.caller.caller || {}, r = b.name || b._name || null
                } catch (a) {}
                c &&
                    (h += c.charAt(0).toUpperCase() + c.slice(1));
                r && (h += ":" + r);
                return h
            },
            t = function() {
                var c = !1,
                    b = /\baivDebug=1\b/;
                if (document.cookie.match(b) || document.location.search.match(b)) c = !0;
                return c
            }(),
            w = function() {
                var c = !1,
                    b = /\baivEmulateConsole=1\b/;
                if (document.cookie.match(b) || document.location.search.match(b)) c = !0;
                return c
            }(),
            q;
        q = w ? l("\x3cul /\x3e").addClass("dv-emulated-console").appendTo("body") : void 0;
        var x = {},
            u = function(c, b) {
                this._scriptName = c || null;
                this._log = b && b.log ? function(c, a, d) {
                        b.log(c, a, d)
                    } : k.log ?
                    function(c, b, a) {
                        k.log(c, b, a)
                    } : function(c, b) {
                        n.ueLogError(null, {
                            logLevel: b,
                            message: c
                        })
                    }
            };
        for (a in d) d.hasOwnProperty(a) && function(c) {
            u.prototype[c] = function() {
                var b = d[c].consoleMethod,
                    a = arguments,
                    h = d[c].logLevel,
                    f = d[c].errorLevel,
                    m = "string" === typeof this._scriptName ? this._scriptName.toLowerCase() : null,
                    a = Array.prototype.slice.call(a),
                    k = "";
                ((h = g && g[b] && "function" === typeof g[b] && (t || m && x[m]) && 6 >= h && a) || f) && (k = e(this._scriptName)) && a.unshift("[" + k + "]");
                if (h && (g[b].apply(n.console, a), w)) {
                    h = [];
                    for (m = 0; m <
                        a.length; m++) "object" === typeof a[m] ? h.push(v(a[m])) : h.push(a[m]);
                    l("\x3cli /\x3e").text(h.join(" ")).addClass("dv-console-" + b).appendTo(q);
                    q.scrollTop(q.get(0).scrollHeight)
                }
                f && this._log && this._log(v(a), f, k)
            }
        }(a);
        var f = {
            create: function(a, b) {
                f._mockConsole && "object" === typeof f._mockConsole && (g = f._mockConsole);
                f._mockDebugFlag && "boolean" === typeof f._mockDebugFlag && (t = f._mockDebugFlag);
                return new u(a, b)
            },
            extend: function(a, b, d) {
                f._mockConsole && "object" === typeof f._mockConsole && (g = f._mockConsole);
                f._mockDebugFlag &&
                    "boolean" === typeof f._mockDebugFlag && (t = f._mockDebugFlag);
                var h = a.prototype || a;
                b = new u(b, d);
                l.extend(h, b);
                for (var e in h) h.hasOwnProperty(e) && "function" === typeof h[e] && (h[e]._name = h[e].name || e);
                return a
            }
        };
        for (a in d) d.hasOwnProperty(a) && (f[a] = function() {
            var c = a,
                b = arguments,
                d = f.create();
            d[c].apply(d, b)
        });
        return f
    });
    k.register("dv-utils-stringify", function() {
        return function(l) {
            var k = [];
            return "object" === typeof JSON && "function" === typeof JSON.stringify ? JSON.stringify(l, function(l, d) {
                if ("object" === typeof d &&
                    null !== d) {
                    if (-1 !== k.indexOf(d)) return;
                    k.push(d)
                }
                return d
            }) : function d(g) {
                var a;
                switch (g.constructor) {
                    case Object:
                        a = [];
                        for (var e in g)
                            if (g.hasOwnProperty(e) && -1 === k.indexOf(g[e])) {
                                k.push(g[e]);
                                var l = d(g[e]);
                                l && a.push('"' + e + '":' + l)
                            } a = "{" + a.join(",") + "}";
                        break;
                    case Array:
                        a = [];
                        for (e = 0; e < g.length; ++e) a.push(d(g[e]));
                        a = "[" + a.join(",") + "]";
                        break;
                    case String:
                        a = '"' + g.toString() + '"';
                        break;
                    case Function:
                        break;
                    default:
                        a = g.toString()
                }
                return a
            }(l)
        }
    })
});
/* ******** */
(function(k) {
    var t = window.AmazonUIPageJS || window.P,
        A = t._namespace || t.attributeErrors,
        f = A ? A("DigitalVideoWebUtilityAssets", "") : t;
    f.guardFatal ? f.guardFatal(k)(f, window) : f.execute(function() {
        k(f, window)
    })
})(function(k, t, A) {
    k.when("jQuery", "logging", "dv-alert-templates-ready").register("aiv-alerts", function(f, c) {
        function d(c, b, a, e) {
            "undefined" === typeof b && (b = "inline");
            "undefined" === typeof e && (e = "info");
            b = ["dv-alert-template", b, e].join("-");
            e = f("#" + b).html();
            g.debug("getAlert", b, e);
            "light" === a && e && (e =
                e.replace(/dv-alerts-dark/g, "dv-alerts-light"));
            return l(f(e), c)
        }

        function l(c, b) {
            if (0 === c.length) g.error("_addContent missing $template", arguments);
            else {
                if (b) return c.find(".a-alert-content").html(b).end()[0].outerHTML;
                g.error("_addContent missing content", arguments)
            }
        }
        var g = c.create("aiv-alerts");
        return {
            getAlert: d,
            info: function(c, b, a) {
                return d.call(d, c, b, a, "info")
            },
            warning: function(c, b, a) {
                return d.call(d, c, b, a, "warning")
            },
            error: function(c, b, a) {
                return d.call(d, c, b, a, "error")
            },
            success: function(c, b,
                a) {
                return d.call(d, c, b, a, "success")
            }
        }
    });
    k.when("jQuery", "logging", "dv-ajax-chunk", "ajax-widgets", "DVUI", "dv-ux", "aiv-client-side-metrics").register("ajax-handler", function(f, c, d, l, g, h, b) {
        var a = c.create("ajax-handler"),
            e, p = {
                showSpinner: !0,
                reloadOnFailure: !1,
                stripScripts: !1
            };
        e = function(c) {
            this.options = f.extend({}, p, c);
            this.nodes = [];
            a.debug("new AjaxHandler with", c);
            c = c.loggingName ? c.loggingName : "dvweb-widget-reload-" + c.widgets.join("+");
            this.widgetMetrics = b.create({
                scope: c
            });
            a.debug("new AjaxHandler with",
                c, this.widgetMetrics)
        };
        e.prototype.callAjax = function() {
            var a = this,
                c = a.options.widgets.length,
                e = f.Deferred();
            if (a.options.titleID) {
                a.prepareWidgetsForRefresh();
                a.widgetMetrics.ajaxStart();
                var b = a.options.urlParams || {};
                b.widgets = a.options.widgets;
                b.titleId = a.options.titleID;
                g.ajax(a.options.url, {
                    params: b,
                    chunk: function(b) {
                        b = d(b, a.options.widgets, a.options.DOMRootID, a.options.stripScripts);
                        b.isValid ? (g.trigger("ajax:chunk:success:" + a.options.DOMRootID), b = l(b), b = b.reloadWidget(a.options.reloadOptions),
                            1 > --c && b && b.done(function() {
                                a.chunksReplaced(e)
                            })) : 1 > --c && a.chunksReplaced(e)
                    },
                    success: function(c, b, e) {
                        a.handleAjaxSuccess();
                        a.widgetMetrics.ajaxSuccess({
                            xhr: e
                        })
                    },
                    error: function() {
                        a.removeUILock();
                        a.options.reloadOnFailure && (t.location.href = "/gp/product/" + a.options.titleID)
                    },
                    timeout: 1E4
                });
                return e.promise()
            }
        };
        e.prototype.chunksReplaced = function(a) {
            a.resolve();
            this.widgetMetrics.ajaxDone()
        };
        e.prototype.handleAjaxSuccess = function() {
            this.removeUILock()
        };
        e.prototype.removeUILock = function() {
            for (var a =
                    0, c = this.nodes.length, b; a < c; a++) b = this.nodes[a], h.enable(b), this.options.showSpinner && h.removeSpinner(b)
        };
        e.prototype.updateUrl = function() {
            "function" === typeof t.history.replaceState ? t.history.replaceState(this.options, this.options.title, "/gp/product/" + this.options.titleID) : t.location.hash = "#!" + this.options.titleID
        };
        e.prototype.prepareWidgetsForRefresh = function() {
            var a, c = this.options.DOMRootID,
                b;
            for (a = 0; a < this.options.widgets.length; a += 1) b = this.options.widgets[a], b = c ? f("#" + c + " ." + b) : f("#" + b), h.disable(b),
                this.options.showSpinner && h.addSpinner(b), this.nodes.push(b)
        };
        return function(a) {
            return new e(a)
        }
    });
    k.when("jQuery", "A").register("dv-ajax-chunk", function(f, c) {
        var d;
        d = function(c, g, h, b) {
            this.isValid = !1;
            this.expectedWidgets = g;
            f.isArray(c) && 3 === c.length && (this.id = c[1], c = f.trim(c[2]), b && (c = c.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")), this.data = c, this.DOMRootID = h, this.validateChunk())
        };
        d.prototype.validateChunk = function() {
            -1 !== f.inArray(this.getChunkRawID(), this.expectedWidgets) &&
                this.getChunkData() && (this.isValid = !0)
        };
        d.prototype.getChunkData = function() {
            return this.data
        };
        d.prototype.getChunkRawID = function() {
            return this.id
        };
        d.prototype.getDOMSelector = function() {
            var c = this.getChunkRawID();
            return this.DOMRootID ? f("#" + this.DOMRootID + " ." + c) : f("#" + c)
        };
        return function(c, f, h, b) {
            return new d(c, f, h, b)
        }
    });
    k.when("logging", "dv-ux").register("ajax-widgets", function(f, c) {
        var d = function(c) {
            this.nodeID = c.getChunkRawID();
            this.widgetHTML = c.getChunkData();
            this.$node = c.getDOMSelector()
        };
        d.prototype.reloadWidget =
            function(f) {
                if (this.$node.length) return c.replaceContent(this.$node, this.widgetHTML, f)
            };
        return function(c) {
            return new d(c)
        }
    });
    k.when("jQuery", "ajax-handler").register("ajax-reload", function(f, c) {
        var d = {
            widgets: [],
            reloadOnFailure: !1,
            url: "/gp/video/ajax-features"
        };
        return {
            getWidgets: function(l) {
                l = f.extend({}, d, l);
                return c(l).callAjax()
            }
        }
    });
    k.when("A", "jQuery", "logging", "aiv-util-event", "a-modal", "dv-modal-stack", "dv-modal-templates-ready").register("aiv-modal", function(f, c, d, l, g, h) {
        function b(b) {
            var d =
                a(b);
            b = c("\x3cdiv/\x3e").attr({
                id: d.id
            });
            var F = g,
                C = {},
                k = {},
                C = {},
                v = [],
                z = [],
                r;
            I && f.capabilities.mobile && d.hasScrollableContent && (F = I, L = !0);
            var C = d.id,
                E = e(d),
                A = p(d),
                B = q(d),
                D = L ? !1 : !!d.hideHeader,
                G = w(d),
                J = d.cache || !1,
                M;
            M = "dark" === d.theme ? "none" : d.padding;
            var K = d.maxWidth || d.width || 400,
                N;
            N = "dark" === d.theme ? !0 : !1;
            C = {
                name: C,
                url: E,
                content: A,
                header: B,
                hideHeader: D,
                footer: G,
                cache: J,
                width: "90%",
                padding: M,
                "max-width": K,
                closeButton: N ? !1 : x(d)
            };
            r = F.create(b, C);
            n.debug("created modal with args:", C, r);
            l.bestowEvents(k);
            u(d.id, k);
            H(d, k, v, z);
            r._display = r.show;
            C = {
                on: y(k),
                getName: function() {
                    return d.id
                },
                _show: function() {
                    r._display()
                },
                show: function() {
                    h.add(r);
                    return r
                },
                showImmediate: function() {
                    h.replaceTop(r)
                },
                remove: function() {
                    n.debug("remove: " + d.id, r, d);
                    t(v, z);
                    F.remove(d.id)
                }
            };
            c.extend(r, C);
            if ("dark" === d.theme || "none" === d.padding) r.on("afterShow", function(a) {
                a = r.$popover;
                var c = a.find(".a-popover-inner, .a-secondary-view-inner");
                a.find(".a-popover-wrapper").addClass("dv-aui-dark-wrapper");
                c.addClass("dv-modal-wrapper-dark");
                n.debug("afterShow", d);
                c.css({
                    padding: 0
                })
            }), r.on("ajaxContentLoaded", function(a) {
                r.$popover.append(m(d.theme))
            });
            r.on("afterHide", function(a) {
                F.remove(d.id)
            });
            r.on("closeModal", function(a) {
                F.remove(d.id)
            });
            r.on("optOut", function(a) {
                a.url && f.post(a.url, {
                    headers: {
                        csrfToken: a.csrfToken
                    },
                    params: {
                        optOutValue: a.checked
                    }
                })
            });
            return r
        }

        function a(a) {
            var b;
            b = c(a.selector || "#" + a.id).data("dv-modal");
            var e = {};
            G || (B.submitTemplate = c(D.submitTemplate).html(), B.cancelTemplate = c(D.cancelTemplate).html(), B.linkTemplate =
                c(D.linkTemplate).html(), B.checkboxTemplate = c(D.checkBoxTemplate).html(), n.debug("_init:", B), G = !0);
            c.extend(!0, e, b, a);
            e.originalId = e.id || e.name;
            e.id = (e.id || e.name) + "_" + J++;
            n.debug("getOptions:", {
                args: a,
                dataAttributes: b,
                options: e
            });
            return e
        }

        function e(a) {
            var b = "",
                e = a.url;
            if (e) return a.urlParameters && (b = e.match(/\?/) ? "\x26" : "?", b += c.param(a.urlParameters)), e + b
        }

        function p(a) {
            var b, e;
            (e = a.content) || (e = ["#a-popover-", a.name].join(""), b = c(e), n.info("element: " + e, b), e = b.length ? b.html() : "");
            if (!e) {
                e = "";
                b =
                    a.url;
                var d = c(a.selector || "#" + a.originalId);
                n.info({
                    url: b,
                    element: d
                });
                b || (e = d.html(), n.debug("_createModal: no url or content, element html", e))
            }
            n.info("_getContent", e);
            b = e;
            e = a.theme;
            if (!b) return "";
            e && (d = "dv-modal-wrapper-" + e, b = c("\x3cdiv /\x3e").addClass(d).append(b), x(a) && b.append(m(e)), b = b[0]);
            return b
        }

        function m(a) {
            a = "dv-modal-close-button-" + a;
            return c('\x3cbutton type\x3d"button" role\x3d"button" data-action\x3d"a-popover-close" class\x3d"a-declarative"\x3e\x3cspan\x3eX\x3c/span\x3e\x3c/button\x3e').addClass(a)
        }

        function q(a) {
            var b = a && a.header || {};
            a = a && a.hideHeader;
            n.info("hideHeader:", a, b);
            return a ? "" : b.text || ""
        }

        function w(a, b) {
            var e = "";
            b = a.buttons;
            var d = {},
                f = a.id;
            n.debug("_getFooter args:", a);
            b && c.each(b, function(a, b) {
                a = z({
                    id: f,
                    elemOptions: b,
                    template: B[b.type + "Template"]
                });
                n.debug("_getFooter buttonObj:", a);
                e += a.html
            });
            a.optOut && a.optOut.url && (d = z({
                id: f,
                elemOptions: {
                    type: "checkbox",
                    text: a.optOut.text
                },
                template: B.checkboxTemplate
            }), e += d.html);
            return e
        }

        function y(a) {
            return function(b, c, e) {
                n.debug("on:", a,
                    b, c, e);
                a.on([b], c, e)
            }
        }

        function x(a) {
            var b = !1;
            "undefined" !== typeof a.closeButton ? b = a.closeButton : "undefined" !== typeof a.showCloseButton && (b = a.showCloseButton);
            return !!b
        }

        function u(a, b) {
            c.each(K, function(c, e) {
                f.on("a:popover:" + e + ":" + a, function(a) {
                    b.fire(e, a)
                })
            })
        }

        function H(a, b, e, d) {
            n.debug("_addEventListeners", a, b, e, d);
            a.optOut && a.optOut.url && (E("#" + a.id + "-checkbox", "optOut", {
                url: a.optOut.url,
                csrfToken: a.optOut.csrfToken
            }, b), d.push({
                id: a.id
            }));
            a.buttons && c.each(a.buttons, function(c, d) {
                c = d.id || a.id +
                    "-" + d.type;
                d = {
                    name: c,
                    id: "#" + c,
                    eventArgs: d.eventArgs,
                    customEvent: d.customEvent || "dv:dv-modal:" + d.type
                };
                r(d, b, a.isDeclarative);
                e.push(d)
            })
        }

        function z(a) {
            var b = a.elemOptions || {},
                c = a.template || "",
                e = {};
            n.debug("_getFooterUIElement args:", a);
            e.html = "";
            e.name = b.id || a.id + "-" + b.type;
            e.id = "#" + e.name;
            e.text = b.text;
            e.url = b.url;
            e.text && c && (e.html = v(c, e.name, e.text, e.url));
            n.debug("_getFooterUIElement element:", e);
            return e
        }

        function v() {
            var a = Array.prototype.shift.call(arguments),
                b = arguments,
                a = a.replace(/(\r\n|\n|\r)|(^\s+|\s+$)/gm,
                    "");
            n.debug("_formatTemplate:", a, b);
            if (a) return a.replace(/\{(\d+)\}/g, function(a, e) {
                return "undefined" !== typeof b[e] ? b[e] : a
            });
            n.error("Template missing", b);
            return A
        }

        function E(a, b, e, d) {
            n.debug("_addCheckBoxEventListener:", a, b, e);
            c("body").delegate(a + " input[type\x3d'checkbox']", "change", function() {
                e.checked = !!this.checked;
                n.debug(a + " checkbox changed", e);
                d.fire(b, e)
            })
        }

        function r(a, b, e) {
            n.debug("_addButtonEventListener button:", b, a);
            c("body").delegate(a.id, "click", function() {
                e ? f.trigger(a.customEvent,
                    a.eventArgs) : b.fire(a.customEvent, a.eventArgs)
            })
        }

        function t(a, b) {
            n.debug("_removeEventListeners", a, b);
            c.each(a, function(a, b) {
                c("body").undelegate(b.id, "click")
            });
            c.each(b, function(a, b) {
                c("body").undelegate(b.id + " input[type\x3d'checkbox']", "change")
            })
        }
        var n = d.create("aiv-modal"),
            K = ["afterHide", "afterShow", "close", "ajaxContentLoaded"],
            D = {
                submitTemplate: "#SubmitTemplate",
                cancelTemplate: "#CancelTemplate",
                linkTemplate: "#LinkTemplate",
                checkBoxTemplate: "#CheckBoxTemplate"
            },
            B = {},
            G = !1,
            J = 0,
            L = !1,
            I;
        k.when("a-secondary-view").execute(function(a) {
            I =
                a
        });
        f.declarative("aiv-modal", "click", function(e) {
            var c = e.data,
                d = a(c),
                h;
            e.originalEvent && e.originalEvent.ack && e.originalEvent.ack();
            c.isDeclarative = !0;
            n.debug("declarative data:", c);
            h = b(c);
            d.showImmediately ? h.showImmediate() : h.show();
            f.on("aiv:modal:close:declarative", function() {
                h.remove();
                f.off("aiv:modal:close:declarative")
            })
        });
        c("body").delegate('[data-action\x3d"aiv-modal"] a', "click", function(a) {
            a.preventDefault()
        });
        return {
            create: b
        }
    });
    k.when("A", "jQuery", "logging").register("dv-modal-stack",
        function(f, c, d) {
            function l(c) {
                if (!a(c)) {
                    var d = c.attrs("name");
                    e.debug("[add]", d, g());
                    c.on("afterHide", b);
                    m[d] = !0;
                    p.unshift(c);
                    g() || h(c, 0)
                }
            }

            function g(a) {
                if ("undefined" === typeof a) return k;
                e.debug("[_isActive] set", a);
                k = a
            }

            function h(a, b) {
                e.debug("[_displayModal]", a);
                g(!0);
                a._show()
            }

            function b(a) {
                f.delay(function() {
                        var a, b;
                        b = p.pop();
                        e.debug("[_finishedHiding]", p.length, b);
                        b && (b = b.attrs("name"), m[b] = !1);
                        g(!1);
                        if (b = p.length) a = p[b - 1], h(a, 600);
                        e.debug("[_finishedHiding] nextModalInQueue", a)
                    }, "undefined" !==
                    typeof a.delay ? a.delay : 600)
            }

            function a(a) {
                for (var b = p.length, c = 0; c < b; c++)
                    if (p[c] === a) return e.debug("[_contains] stack already contains", a, p), !0;
                return !1
            }
            var e = d.create("dv-modal-stack"),
                p = [],
                m = {},
                k = !1;
            return {
                add: l,
                replaceTop: function(c) {
                    if (!a(c))
                        if (0 === p.length) l(c);
                        else {
                            var d = c.attrs("name");
                            e.debug("[addAsNext]", d, g());
                            m[d] = !0;
                            c.on("afterHide", b);
                            d = p.pop();
                            p.push(c);
                            p.push(d);
                            d.remove();
                            h(c, 0)
                        }
                },
                _internal: {
                    _isActive: g,
                    _types: m,
                    _stack: p,
                    _displayModal: h,
                    _afterHide: b
                }
            }
        });
    k.when("dv-get-reftag-from-url",
        "dv-send-analytics", "dv-url-param", "dv-get-elem-by-alias").register("dv-utilities", function(f, c, d, l) {
        return {
            getRefTagFromURL: f,
            sendAnalytics: c,
            urlParam: d,
            getElemByAlias: l
        }
    });
    k.register("dv-get-reftag-from-url", function() {
        return function(f) {
            if (f && (f = f.match(/\bref_?=([^?&]*)\b/i)) && 2 <= f.length) return f[1]
        }
    });
    k.when("jQuery").register("dv-send-analytics", function(f) {
        return function(c) {
            c && f.ajax({
                url: "/gp/video/widgets/main-section/ajax/analytics.html/ref\x3d" + c,
                data: {},
                dataType: "json",
                timeout: 1E4
            })
        }
    });
    k.register("dv-url-param", function() {
        var f;
        return function(c) {
            if (!f) {
                f = {};
                for (var d = (document.location.search || "").substring(1).split("\x26"), l = 0; l < d.length; l++) {
                    var g = d[l].split("\x3d");
                    f[g[0]] = g[1]
                }
            }
            return c ? f[c] : f
        }
    });
    k.when("A", "jQuery").register("dv-get-elem-by-alias", function(f, c) {
        return function(d, f) {
            if (d || f) return c(d).filter(function(d, h) {
                d = c(h).data("aliases");
                return !(!d || -1 === c.inArray(f, d.split(",")))
            })
        }
    });
    k.when("A", "jQuery", "logging").register("dv-content", function(f, c, d) {
        function l(b,
            a) {
            g.info({
                element: b,
                argsObj: a
            });
            var e = c.extend(!0, {}, h, a);
            a = "." + e.className;
            var e = c("\x3c" + e.wrapperTag + " /\x3e").addClass(e.className),
                d = b.children(a);
            d.length || (b.wrapInner(e), d = b.children(a).css({
                overflow: "hidden"
            }));
            return d
        }
        var g = d.create("dv-content"),
            h = {
                wrapperTag: "div"
            };
        return {
            replaceContent: function(b, a, e) {
                function d() {
                    x.removeAttr("style");
                    k.resolve();
                    "function" === typeof u.callback && u.callback()
                }

                function h() {
                    f.animate(x, {
                        opacity: 1,
                        top: 0
                    }, u.timeToFadeIn, u.easing, d)
                }
                g.info({
                    element: b,
                    content: a,
                    args: e
                });
                var k = c.Deferred(),
                    w = c(a),
                    y = b.height(),
                    x = l(b, {
                        className: "js-dv-replace-content-wrapper"
                    }),
                    u = {};
                c.extend(!0, u, {
                    timeToFadeIn: 300,
                    timeToFadeOut: 200,
                    timeToResize: 200,
                    easing: "ease-in-out",
                    fadeInMovePercent: .15,
                    readyToMeasureCallback: null,
                    callback: null
                }, e);
                !b instanceof c && g.error("replaceContent $element is not a jQuery object", b);
                f.animate(x, {
                    opacity: 0
                }, u.timeToFadeOut, u.easing, function() {
                    x.empty().append(w);
                    "function" === typeof u.readyToMeasureCallback && u.readyToMeasureCallback(x);
                    var a = {
                        height: x.height(),
                        top: 0 * u.fadeInMovePercent
                    };
                    x.height(y).css({
                        position: "relative"
                    });
                    f.animate(x, a, u.timeToResize, u.easing, h)
                });
                return k.promise()
            },
            wrapContent: l,
            hideContent: function(b, a, e) {
                b.length && (b = l(b, {
                    className: "js-dv-hide-content-wrapper"
                }), f.animate(b, {
                    opacity: 0
                }))
            },
            showContent: function(b, a, e) {
                if (b.length) {
                    var c = b.find(".js-dv-hide-content-wrapper");
                    c.length && f.animate(c, {
                        opacity: 1
                    }, function() {
                        c.removeAttr("style")
                    })
                }
            }
        }
    });
    k.when("A", "jQuery", "logging").register("dv-extendable-element", function(f, c, d) {
        var l =
            d.create("dv-extendable-element"),
            g = function(c) {
                l.info(c);
                this.$element = c
            };
        g.prototype.element = function() {
            l.info(this.$element);
            return this.$element
        };
        g.prototype.addBehaviours = function() {
            var d = this,
                b = Array.prototype.slice.call(arguments);
            l.debug(b);
            c.each(b, function(a, b) {
                for (var c in b) b.hasOwnProperty(c) && (d[c] = d.extensify(b[c], c))
            })
        };
        g.prototype.extensify = function(c) {
            var b = this;
            l.info(c);
            return function() {
                var a = Array.prototype.slice.call(arguments);
                a.unshift(b.$element);
                b._value = c.apply(this, a);
                return b
            }
        };
        g.prototype.value = function() {
            l.info(this);
            return this._value
        };
        return function(c) {
            l.info(c);
            var b = Array.prototype.slice.call(arguments, 1),
                a = new g(c);
            b && a.addBehaviours.apply(a, b);
            return a
        }
    });
    k.when("A", "jQuery", "logging", "dv-content").register("dv-interactive", function(f, c, d, l) {
        var g = d.create("dv-interactive"),
            h = {
                disableOpacity: .2,
                useWrapper: !0
            },
            b = c("\x3cdiv /\x3e").addClass("dv-disable-overlay js-dv-disable-overlay");
        return {
            disable: function(a, e) {
                g.debug(a);
                e = c.extend(!0, {}, h, e);
                var d, f;
                a && a.length && !a.find(".js-dv-disable-overlay").length && (f = b.clone(), f.click(function(a) {
                    a.preventDefault()
                }), e.useWrapper ? (d = l.wrapContent(a, {
                    className: "js-dv-disable-wrapper"
                }), d.animate({
                    opacity: e.disableOpacity
                }), a.addClass("dv-disable-wrapper").append(f)) : a.append(f))
            },
            enable: function(a) {
                var b;
                g.debug(a);
                a && a.length && (a.find(".js-dv-disable-overlay").remove(), b = a.find(".js-dv-disable-wrapper"), b.css({
                    opacity: 0
                }), b.animate({
                    opacity: 1
                }, function() {
                    b.removeAttr("style")
                }))
            }
        }
    });
    k.when("jQuery", "logging",
        "av-ui-templates").register("dv-spinner", function(f, c, d) {
        function l(b) {
            return !!b.find("." + a.spinnerWrapper).length
        }

        function g() {
            return d.get("fill-spinner")
        }
        var h = c.create("dv-spinner"),
            b = {
                theme: "light",
                size: "medium",
                useLegacySpinner: !1
            },
            a = {
                spinnerContainer: "dv-spinner-container",
                spinnerWrapper: "dv-spinner-wrapper"
            };
        return {
            addSpinner: function(c, d) {
                h.debug(c, d);
                if (!l(c)) {
                    d = f.extend(!0, {}, b, d);
                    var k = d.useLegacySpinner;
                    h.debug(d.theme, d.size);
                    d = k ? '\x3cdiv class\x3d"dv-spinner"\x3e\x3c/div\x3e' : g();
                    k =
                        a.spinnerWrapper;
                    h.debug(d, k);
                    d = f("\x3cdiv /\x3e").addClass(k).append(d).clone();
                    c.addClass(a.spinnerContainer).append(d)
                }
            },
            removeSpinner: function(b) {
                b.length && (b.find("." + a.spinnerWrapper).remove(), b.removeClass(a.spinnerContainer))
            },
            hasSpinner: l,
            getSpinner: g,
            getSpinnerWrapper: function(b) {
                return b.find("." + a.spinnerWrapper)
            }
        }
    });
    k.when("A", "jQuery", "logging", "dv-content").register("dv-text", function(f, c, d, l) {
        var g = d.create("dv-replace-text");
        return {
            replaceText: function(d, b, a) {
                function e() {
                    g.info("cleanUp",
                        d);
                    z.remove();
                    k.removeAttr("style").removeClass("js-dv-replace-text-new").addClass("js-dv-replace-text-wrapper");
                    d.height("auto").removeClass("js-dv-replace-text-progress");
                    v.callback()
                }
                g.info(d, b, a);
                var p = c.Deferred(),
                    k = c(b),
                    q = d.outerWidth(),
                    w = d.outerHeight(),
                    y = d.css("padding-top"),
                    x = d.css("padding-bottom"),
                    u = d.css("padding-left"),
                    H = d.css("padding-right"),
                    z = l.wrapContent(d, {
                        className: "js-dv-replace-text-wrapper",
                        wrapperTag: "span"
                    }),
                    v = {},
                    E = {},
                    r = {},
                    t = {},
                    n = {};
                c.extend(!0, v, {
                    reverse: !1,
                    easing: "ease-out",
                    timeToChange: 150,
                    callback: function() {
                        p.resolve()
                    }
                }, a);
                !d instanceof c && g.error("replaceContent $element is not a jQuery object", d);
                k.length || g.error("replaceContent $content is not an element", b);
                d.hasClass("js-dv-replace-text-progress") ? z.html(b) : (E = {
                    position: "absolute",
                    width: q,
                    height: w,
                    left: 0,
                    opacity: 1,
                    top: 0
                }, r = {
                    top: v.reverse ? w : -w
                }, t = {
                    position: "absolute",
                    width: q,
                    height: w,
                    paddingBottom: x,
                    paddingTop: y,
                    paddingLeft: u,
                    paddingRight: H,
                    top: v.reverse ? -w : w,
                    left: 0,
                    opacity: 0
                }, n = {
                    top: 0,
                    opacity: 1
                }, d.css({
                    position: "relative",
                    height: w
                }).addClass("js-dv-replace-text-progress"), z.css(E), k.addClass("js-dv-replace-text-new").css(t), d.append(k), f.animate(z, {
                    opacity: 0
                }, v.timeToChange / 2, v.easing), f.animate(z, r, v.timeToChange, v.easing), f.animate(k, n, v.timeToChange, v.easing, e));
                return p.promise()
            }
        }
    });
    k.when("jQuery", "logging", "dv-extendable-element", "dv-content", "dv-text", "dv-interactive", "dv-spinner").register("dv-ux", function(f, c, d, l, g, h, b) {
        c.create("dv-ux");
        return {
            disable: h.disable,
            enable: h.enable,
            addSpinner: b.addSpinner,
            removeSpinner: b.removeSpinner,
            getSpinner: b.getSpinner,
            getSpinnerWrapper: b.getSpinnerWrapper,
            replaceText: g.replaceText,
            replaceContent: l.replaceContent,
            wrapContent: l.wrapContent,
            hideContent: l.hideContent,
            showContent: l.showContent
        }
    });
    k.when("jQuery", "logging", "dv-extendable-element", "dv-content", "dv-text", "dv-interactive", "dv-spinner").register("dv-ux-mixins", function(f, c, d, l, g, h, b) {
        c.create("dv-ux");
        return {
            extendable: d,
            content: l,
            text: g,
            interactive: h,
            spinner: b
        }
    });
    k.when("A", "jQuery", "logging", "dv-ux").register("dv-buttons", function(f,
        c, d, l) {
        function g(a, b, e) {
            b = c("\x3cspan /\x3e").append(b);
            l.replaceText(a.find("." + q.buttonText), b, {
                reverse: e
            })
        }

        function h(a, b, c, e) {
            b && (a.removeClass([q.confirm, q.processing, q.primary].join(" ")), (b = q[b] || "") && a.addClass(b));
            c && g(a, c, e)
        }

        function b() {
            k.log("[resetConfirmButtons]");
            var e = c(".dv-confirm");
            e.length && e.each(a);
            m && c(document).unbind("click", b)
        }

        function a(a, b) {
            a = c(b);
            b = a.data("orinalText");
            h(a, "primary", b, !0)
        }

        function e(a) {
            if (!a.data("orinalText")) {
                var b = a.text();
                a.data("orinalText", b)
            }
        }
        var k = d.create("dv-button"),
            m = f.capabilities.touch,
            q = {
                confirm: "dv-confirm av-button--confirm",
                processing: "js-dv-processing dv-button-processing",
                primary: "dv-oneclick",
                buttonText: "dv-button-text"
            };
        return {
            buttonContent: g,
            buttonState: h,
            addProcessingState: function(a, b) {
                k.log("[addButtonProcessingState]");
                a.each(function(a, d) {
                    e(c(d));
                    h(c(d), "processing", b)
                })
            },
            resetButtonsOriginalState: function(b) {
                b.length && b.each(a)
            },
            addConfirmState: function(a, d) {
                k.log("[addButtonConfirmState]");
                a.each(function(a, b) {
                    d &&
                        e(c(b));
                    h(c(b), "confirm", d)
                });
                m && c(document).bind("click", b)
            },
            resetConfirmButtons: b
        }
    });
    k.when("A").register("dv-analytics", function(f) {
        var c = f.$;
        return {
            log: function(d, f, g) {
                var h = "",
                    b = "",
                    a = "",
                    e = "";
                g = null !== g ? g : {};
                "undefined" !== typeof g.pageType && (h = g.pageType);
                "undefined" !== typeof g.subPageType && (b = g.subPageType);
                "undefined" !== typeof g.store && (a = g.store);
                "undefined" !== typeof g.requestId && (e = g.requestId);
                c.ajax({
                    url: "/gp/video/analytics/clickstream-logger.html",
                    data: {
                        asin: null !== d ? d : "",
                        pageType: h,
                        subPageType: b,
                        pageAction: null !== f ? f : "",
                        tabId: a,
                        pageRequestId: e
                    },
                    dataType: "json",
                    type: "POST",
                    timeout: 1E4
                })
            },
            recordWeblab: function(d, f, g) {
                c.ajax({
                    url: "/gp/video/analytics/weblab-logger.html",
                    data: {
                        weblab: d,
                        treatment: f,
                        rid: g.requestId
                    },
                    dataType: "json",
                    type: "POST",
                    timeout: 1E4
                })
            },
            constants: {
                PLAY_TRAILER: "PlayTrailer",
                PLAY_STREAM: "PlayStream"
            }
        }
    });
    k.when("A", "jQuery", "logging", "aiv-modal").register("dv-async", function(f, c, d, l) {
        return {
            create: function(g, h) {
                function b(a) {
                    var b = "";
                    a && "function" === typeof a && (b = a.name, b || (b =
                        (a = /^function\s+([\w\$]+)\s*\(/.exec(a.toString())) ? a[1] : ""));
                    return b
                }

                function a(a, b) {
                    l.create({
                        id: b
                    }).show();
                    y.error(a)
                }

                function e() {
                    return {
                        customError: function() {},
                        timeout: function(b, c, e) {
                            a(e, "dv-modal-ajax_timeout")
                        },
                        error: function(b, c, e) {
                            a(e, "dv-modal-ajax_error")
                        },
                        abort: function(a, b, c) {
                            y.warn("abort")
                        },
                        parsererror: function(b, c, e) {
                            a(e, "dv-modal-ajax_error")
                        }
                    }
                }

                function p(a) {
                    var c = d.create([w, b(a)].join(":"), h || k);
                    return function() {
                        try {
                            a.apply(this, arguments)
                        } catch (b) {
                            c.error(b)
                        }
                    }
                }

                function m(a) {
                    var b = [200, 302],
                        d = c.extend({}, e(), a);
                    return {
                        success: function(a) {
                            y.error("done method must be overridden")
                        },
                        error: function(a, e, f) {
                            0 > c.inArray(parseInt(a.status, 10), b) && y.warn(a.status);
                            if (e && "function" === typeof d[e]) d[e](a, e, f);
                            else d.error(a, e, f);
                            d.customError(a, e, f)
                        }
                    }
                }

                function q(a, b, e) {
                    var d = {
                            accepts: A,
                            contentType: A,
                            cache: !1,
                            indicator: "",
                            method: "post",
                            params: {},
                            timeout: 1E4,
                            withCredentials: !0
                        },
                        g = 0,
                        l = e && e.maxRetrys || 0;
                    e = m(e);
                    var h = {},
                        k, n;
                    c.extend(h, d, e, b);
                    y.debug(h);
                    h.success = p(h.success);
                    k = p(h.error);
                    h.error =
                        k;
                    n = function() {
                        y.log(g);
                        l > ++g ? h.error = n : h.error = k;
                        f.ajax(a, h)
                    };
                    l > g && (h.error = n);
                    f.ajax(a, h)
                }
                var w = g || "dv-async",
                    y = d.create(w, h || k);
                return {
                    wrap: p,
                    delay: function(a, b) {
                        f.delay(p(a), b)
                    },
                    ajax: q,
                    get: function(a, b, c, e) {
                        c = c || {};
                        c.method = "get";
                        c.success = b;
                        return q(a, c, e)
                    },
                    post: function(a, b, c, e, d) {
                        e = e || {};
                        e.method = "post";
                        e.params = b;
                        e.success = c;
                        return q(a, e, d)
                    },
                    deferred: function() {
                        function a(b, c) {
                            return function(a) {
                                b(p(a));
                                return c
                            }
                        }
                        var b = c.Deferred(),
                            e = b.promise();
                        c.each(["done", "fail", "always", "then"], function(b,
                            c) {
                            "then" === c ? e.then = function(a, b) {
                                e.done(a).fail(b);
                                return e
                            } : e[c] = a(e[c], e)
                        });
                        b.promise = function() {
                            return e
                        };
                        return b
                    }
                }
            }
        }
    });
    k.when("logging").register("aiv-client-side-metrics", function(f) {
        var c = f.create("aiv-client-side-metrics"),
            d = t.uet,
            l = t.ues,
            g = t.uex,
            h = t.ue,
            b = function(a) {
                c.log("[CSM] new with options", a);
                this.scope = a && a.scope
            };
        b.prototype.record = function(a, b) {
            c.log("[CSM] uet " + this.scope + " " + a, b);
            "function" === typeof d && d(a, this.scope, b)
        };
        b.prototype.set = function(a, b) {
            c.log("[CSM] ues " + this.scope +
                " " + a, b);
            "function" === typeof l && l(a, this.scope, b)
        };
        b.prototype.publish = function(a, b) {
            c.log("[CSM] uex " + this.scope + " " + a, b);
            "function" === typeof g && g(a, this.scope, b)
        };
        b.prototype.counter = function(a, b, d) {
            c.log("[CSM] ue.count " + a + " " + b);
            b = b || 1;
            d = d || {
                scope: this.scope
            };
            h && "function" === typeof h.count && h.count(a, (h.count(a, A, d) || 0) + b, d)
        };
        b.prototype.timeOfClick = function(a) {
            this.record("tc", a)
        };
        b.prototype.experiment = function(a) {
            this.record("x", a)
        };
        b.prototype.calculationEnd = function(a) {
            this.record("pc",
                a)
        };
        b.prototype.clickToNavStart = function(a) {
            this.record("ns", a)
        };
        b.prototype.clickToNavEnd = function(a) {
            this.record("ne", a)
        };
        b.prototype.clickToBodyBegin = function(a) {
            this.record("bb", a)
        };
        b.prototype.clickToATF = function(a) {
            this.record("af", a)
        };
        b.prototype.clickToCF = function(a) {
            this.record("cf", a)
        };
        b.prototype.clickToBodyEnd = function(a) {
            this.record("be", a)
        };
        b.prototype.requestId = function(a) {
            this.set("id", a)
        };
        b.prototype.startTime = function() {
            this.set("t0", new Date)
        };
        b.prototype.baseOnClientTime = function() {
            this.set("ctb",
                "1")
        };
        b.prototype.clickToPageLoaded = function(a) {
            this.publish("ld", a)
        };
        b.prototype.ajaxStart = function(a) {
            this.timeOfClick(a)
        };
        b.prototype.ajaxSuccess = function(a) {
            var b = a.requestId;
            a = a.xhr;
            !b && a && "function" === typeof a.getResponseHeader && (b = a.getResponseHeader("x-amz-id-1"));
            this.requestId(b);
            this.startTime();
            this.baseOnClientTime()
        };
        b.prototype.ajaxDone = function(a) {
            this.clickToBodyEnd(a);
            this.clickToPageLoaded(a)
        };
        return {
            create: function(a) {
                return new b(a)
            }
        }
    });
    k.when("A", "jQuery").register("dv-reftag",
        function(f, c) {
            function d(d) {
                d = d.split(",");
                for (var f = 0; f < d.length; f++) c.ajax({
                    url: "/gp/video/widgets/main-section/ajax/analytics.html/ref\x3d" + d[f],
                    data: {},
                    dataType: "json",
                    timeout: 1E4
                })
            }
            c(".dv-record-reftag").live("click", function(c) {
                c.target && c.target.dataset && (c.target.dataset.clickstreamRef || c.target.dataset.refTag) && (c = c.target.dataset.clickstreamRef || c.target.dataset.refTag, d(c));
                this.dataset && (this.dataset.clickstreamRef || this.dataset.refTag) && (c = this.dataset.clickstreamRef || this.dataset.refTag,
                    d(c))
            });
            f.declarative("dv-record-reftag", "click", function(c) {
                c.data && c.data.reftag && d(c.data.reftag)
            });
            return {
                record: d
            }
        });
    k.when("jQuery").register("dv-eventBinder", function(f) {
        return {
            bind: function(c) {
                c = c || document;
                this._eventRegistry = this._eventRegistry || [];
                var d = this,
                    l = /^\s*(.+)\s+(\S+)\s*$/,
                    g = function(a, b, h) {
                        var g = function(a, b) {
                            a.source = f(this);
                            h.call(d, a, b)
                        };
                        if (a)
                            if (f(c).on) f(c).on(b, a, g);
                            else f(c).delegate && f(c).delegate(a, b, g);
                        else f(c).bind(b, g);
                        d._eventRegistry.push({
                            baseElement: c,
                            selector: a,
                            eventName: b
                        })
                    },
                    h;
                for (h in this) {
                    var b = h.match(l);
                    b && this[h] && "function" === typeof this[h] && g("subscribe" !== b[1] ? b[1] : A, b[2], this[h])
                }
            },
            unbind: function() {
                for (var c = this._eventRegistry.length - 1; 0 <= c; c--) {
                    var d = this._eventRegistry[c];
                    d.selector ? f(d.baseElement).off ? f(d.baseElement).off(d.eventName, d.selector) : f(d.baseElement).undelegate && f(d.baseElement).undelegate(d.selector, d.eventName) : f(d.baseElement).unbind(d.eventName);
                    this._eventRegistry.splice(c, 1)
                }
            }
        }
    });
    k.when("A", "jQuery", "logging").register("dv-form",
        function(f, c, d) {
            var l = d.create("dv-form");
            return {
                data: function(d, f) {
                    l.debug(d, f);
                    d = d.find("input").serializeArray();
                    var b = {};
                    c.each(d, function(a, c) {
                        c.name && (b[c.name] = c.value)
                    });
                    return b
                }
            }
        });
    k.when("jQuery", "logging", "dv-async").register("promise-pipeline", function(f, c, d) {
        return {
            create: function(l, g, h) {
                function b(a) {
                    m.errors = m.errors || [];
                    e.error(a);
                    m.errors.push(a)
                }

                function a(c) {
                    var d, h, g;
                    if (c >= k.length) q.resolve(m);
                    else if (d = k[c] || {}, g = [d.name, "step:", c].join(" "), d.getPromise && "function" === typeof d.getPromise) {
                        e.debug(g +
                            " got promise", {
                                step: c,
                                currentStep: d,
                                options: m
                            });
                        try {
                            h = d.getPromise(m), h.done(function(b) {
                                f.extend(!0, m, b);
                                e.debug(g + " done", m, b);
                                a(++c)
                            }), h.fail(function(a) {
                                f.extend(!0, m, a);
                                e.debug(g + " fail", m, a);
                                q.reject(m)
                            })
                        } catch (l) {
                            b(l), q.reject(m)
                        }
                    } else b(g + " getPromise is not a function"), a(++c)
                }
                g = g || "promise-pipeline";
                var e = c.create(g, h);
                h = d.create(g, h);
                var k = l.promises,
                    m = l.options,
                    q = h.deferred();
                a(0);
                return q.promise()
            },
            step: function(c, f, h) {
                var b = d.create(c, h);
                return {
                    name: c,
                    getPromise: function(a) {
                        var c =
                            b.deferred();
                        f(c, a);
                        return c.promise()
                    }
                }
            }
        }
    });
    k.when("logging").register("dv-register-once", function(f) {
        var c = f.create("dv-content");
        return function(d, f) {
            k.now(d).execute(function(g) {
                if ("undefined" !== typeof g) c.info("Tried to re-register " + d, f);
                else try {
                    "function" === typeof f ? k.register(d, f) : k.declare(d, f)
                } catch (h) {
                    c.info("Tried to re-register " + d, f)
                }
            })
        }
    });
    k.when("dv-register-once").register("av-register-once", function(f) {
        return f
    });
    k.when("A", "jQuery", "logging").register("aiv-util-event", function(f,
        c, d) {
        var k = d.create("aiv-util-event");
        return {
            bestowEvents: function(d) {
                var f = {};
                d.fire = function(b, a) {
                    var d, g, m;
                    d = "string" === typeof b ? b : b.type;
                    k.log("[event] fire", d, b, a);
                    if (f.hasOwnProperty(d))
                        for (b = f[d], m = 0; m < b.length; m += 1) g = b[m], d = g.method, "string" === typeof d && (d = this[d]), g = c.extend(!0, {}, g.argsObj, a), d.call(this, g);
                    return this
                };
                d.on = function(b, a, c) {
                    k.log("[event] on", b, a, c);
                    a = {
                        method: a,
                        argsObj: c
                    };
                    f.hasOwnProperty(b) ? f[b].push(a) : f[b] = [a];
                    return this
                };
                return d
            }
        }
    });
    "use strict";
    k.when("jQuery", "logging",
        "dv-register-once").register("av-widget-config", function(f, c, d) {
        function l(c) {
            g.debug(c);
            this.name = c
        }
        var g = c.create("dv-widget-config", k);
        l.prototype = {
            get: function(c) {
                var b = f.parseJSON(f("#av-wconf-" + this.name).html());
                g.debug("widget: " + this.name, c, JSON.stringify(b));
                return "undefined" !== typeof c ? b[c] : b
            }
        };
        return {
            declare: function(c) {
                g.debug(c);
                d(c, new l(c))
            }
        }
    });
    "use strict";
    k.when("A", "jQuery", "logging", "dv-ux", "av-ui-templates").register("av-action-box-view", function(f, c, d, l, g) {
        function h(a, b) {
            a.length &&
                f.animate(a, {
                    opacity: 0
                }, b, "ease-out", function() {
                    a.remove()
                })
        }
        d.create("av-action-box-view", k);
        var b = {
            mainActionBox: {
                mainActionBox: "#dv-action-box",
                mainActionBoxWrapper: "#dv-action-box-wrapper",
                playBox: ".av-play-box",
                progressWrapper: ".dv-action-box-progress-wrapper",
                actionButtonBox: ".av-action-button-box"
            },
            circlePlayback: {
                mainActionBox: "#dv-play-box-circle",
                mainActionBoxWrapper: ".playback-large-circle-wrapper",
                playBox: ".av-play-box",
                progressWrapper: ".dv-action-box-progress-wrapper"
            }
        };
        return {
            mainAddSpinner: function(a,
                d) {
                d = d ? d : "mainActionBox";
                var h = b[d],
                    k = c(h.mainActionBoxWrapper),
                    q = c(h.mainActionBox),
                    t = c("\x3cdiv /\x3e").addClass("dv-action-box-spinner-wrapper").append(g.get("fill-spinner"));
                a = c("\x3cdiv /\x3e").addClass("dv-action-box-progress-wrapper").append(t).append(a || "");
                0 !== q.length && ("mainActionBox" === d ? (k.height(), d = c(h.playBox), h = c(h.actionButtonBox), h = d.length ? d.position().top : h.length ? h.position().top : 0, k.append(a.css({
                    top: h
                }))) : k.append(a), l.disable(q, {
                    useWrapper: !1
                }), f.animate(q, {
                    opacity: 0
                }))
            },
            isMainActionBoxInProgress: function() {
                var a = b.mainActionBox;
                return !!c(a.mainActionBoxWrapper).find(a.progressWrapper).length
            },
            mainReset: function(a) {
                a = b[a ? a : "mainActionBox"];
                var d = c(a.mainActionBoxWrapper),
                    g = c(a.mainActionBox),
                    d = d.find(a.progressWrapper);
                f.animate(c(a.mainActionBox), {
                    opacity: 100
                });
                h(d, 300);
                l.enable(g)
            },
            mainUpdate: function(a) {
                a = a ? a : "mainActionBox";
                var d = b[a],
                    g = c(d.mainActionBoxWrapper),
                    k = c(d.mainActionBox),
                    q = g.find(d.progressWrapper);
                "mainActionBox" === a && (a = g.find(".dv-purchasing-text"),
                    h(a, 100));
                l.enable(k);
                f.animate(c(d.mainActionBox), {
                    opacity: 1
                }, 300, "ease-out", function() {
                    h(q, 300)
                })
            },
            alignSpinner: function(a, d) {
                d = b[d ? d : "mainActionBox"];
                a = a.find(d.playBox);
                var f = 0 < a.length;
                d = c(d.mainActionBoxWrapper).find(d.progressWrapper);
                f && (a = a.position(), d.css({
                    bottom: "auto"
                }).animate(a, 200))
            },
            actionBoxLoaded: function(a) {
                return 0 !== c(b[a ? a : "mainActionBox"].mainActionBox).length
            }
        }
    });
    k.when("jQuery", "logging", "av-ui-templates-ready").register("av-ui-templates", function(f, c) {
        var d = c.create("av-templates",
            k);
        return {
            get: function(c) {
                var g = f("#av-tmpl-" + c).html();
                d.debug("widget template: ", c, JSON.stringify(g));
                return g.trim()
            }
        }
    })
});
/* ******** */