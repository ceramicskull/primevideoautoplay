(function(e) {
    var f = window.AmazonUIPageJS || window.P,
        g = f._namespace || f.attributeErrors,
        d = g ? g("DigitalVideoWebDeeplinkingAssets", "") : f;
    d.guardFatal ? d.guardFatal(e)(d, window) : d.execute(function() {
        e(d, window)
    })
})(function(e, f, g) {
    e.when("jQuery", "deeplinkingCore", "dv-player-integration").register("deeplinking", function(d, e, k) {
        var h = {
                prepare: function(a) {
                    a.asin || a.lcid ? "string" === typeof a.asin || a.lcid ? "string" === typeof a.lcid || a.asin ? k.prepare({
                        asin: a.asin,
                        lcid: a.lcid || g,
                        trailer: a.isTrailer ? !0 : !1,
                        position: !a.isTrailer &&
                            a.resumeTime || g,
                        ref: a.clickstreamRefMarker,
                        videoType: a.videoType,
                        useFullView: a.useFullView ? !0 : !1
                    }) : this.error("The LCID needs to be a single LCID.") : this.error("The ASIN needs to be a single ASIN.") : this.error("The ASIN/LCID is not optional.")
                },
                play: function(a) {
                    a = a || {};
                    this.debug("embedded play", a);
                    a.signInURL ? f.location.href = a.signInURL : a.asin || a.lcid ? (a.resumeTime = a.resumeTime || 0, a.isTrailer = a.isTrailer || !1, a.success = a.success || this.success, this.prepare(a), a.success(a), k.play({
                        asin: a.asin,
                        lcid: a.lcid,
                        trailer: a.isTrailer ? !0 : !1,
                        position: !a.isTrailer && a.resumeTime || 0,
                        ref: a.clickstreamRefMarker,
                        videoType: a.videoType,
                        useFullView: a.useFullView ? !0 : !1
                    })) : this.error("The ASIN/LCID is not optional.")
                },
                stop: function() {
                    k.stop()
                }
            },
            h = d.extend({}, e, h);
        h._init();
        return h
    });
    e.when("logging", "jQuery").register("deeplinkingCore", function(d, f) {
        var k = function(a) {
                a = f(a);
                for (var b = {}; a.prop("tagName") !== g;) b = f.extend({}, a.data(), b), a = a.parent();
                return function(a) {
                    return a && b[a] || !a && b || g
                }
            },
            h = {
                _refTags: {
                    success: "dv_web_dl_success",
                    fail: "dv_web_dl_failure"
                },
                _sendAnalytics: function(a, b) {
                    var c = this;
                    a ? f.ajax({
                        url: "/gp/video/widgets/main-section/ajax/analytics.html/ref\x3d" + a,
                        data: {},
                        dataType: "json",
                        timeout: 1E4,
                        complete: function() {
                            b && "function" === typeof b && b.apply(c, arguments)
                        }
                    }) : b()
                },
                success: function() {},
                failure: function() {},
                fallbackURL: null,
                _init: function() {
                    var a = this;
                    f(document).delegate(".js-deeplinkable, .deeplinkable a, .deeplinkable input", "click", function(b) {
                        a.log("Play request");
                        var c = f(this),
                            d = k(c),
                            e = c.data("refTag"),
                            c = {
                                signInURL: d("signInUrl"),
                                playbackURL: c.attr("href"),
                                lcid: c.attr("data-lcid"),
                                asin: c.attr("data-asin") || c.attr("data-title-id"),
                                resumeTime: parseInt(c.attr("data-resume-time")),
                                isTrailer: c.data("isTrailer"),
                                useFullView: c.data("useFullView"),
                                videoType: c.attr("data-video-type"),
                                fallbackURL: d("fallbackUrl"),
                                clickstreamSessionId: c.attr("data-session-id"),
                                clickstreamRefMarker: c.attr("data-clickstream-ref") || c.attr("data-ref")
                            };
                        b.originalEvent && b.originalEvent.ack && b.originalEvent.ack();
                        a.debug("_init",
                            e, c);
                        e && a._sendAnalytics(e);
                        a.play(c);
                        b.preventDefault()
                    });
                    e.when("dv-autoplay").execute(function(b) {
                        a.log("Auto-Play", b);
                        a.play({
                            playbackURL: b.playbackURL,
                            asin: b.asin,
                            resumeTime: b.position || 0,
                            isTrailer: b.trailer || !1,
                            videoType: b.videoType
                        })
                    });
                    this.init()
                },
                init: function() {
                    this.info('"init" is not extended on this platform')
                },
                prepare: function() {
                    this.info('"prepare" is not supported on this platform')
                },
                play: function() {
                    this.info('"play" is not supported on this platform')
                },
                stop: function() {
                    this.info('"stop" is not supported on this platform')
                },
                open: function() {
                    this.info('"open" is not supported on this platform')
                }
            };
        d.extend(h, "Deeplinking");
        return h
    });
    "use strict";
    e.when("dv-web-player-cfg", "dv-live-notification").execute(function(d) {
        d.get("autoplay") && d.get("videoConfig") && e.register("dv-autoplay", function() {
            return d.get("videoConfig")
        })
    })
});