webpackJsonp([49], { 4290: function(e, t) { YUI.add("squarespace-blog-collection-list", function(e) { var t, l = e.config.win,
                i = l.document,
                a = e.Squarespace.Template.getTweakValue,
                o = function(e) { if (e) { for (var t = parseInt(a("tweak-blog-list-columns"), 10), i = parseInt(a("tweak-blog-list-spacing"), 10), o = parseFloat(l.getComputedStyle(e).width);
                            (o - i * (t - 1)) / t < 200;) t--;
                        e.setAttribute("data-columns", t) } },
                n = function(e) { if (e) { var t = e.querySelectorAll(".BlogList-item-image img"); if ("true" === a("tweak-blog-list-item-image-show")) { var i = "stacked" === a("tweak-blog-list-style").toLowerCase(),
                                o = "auto" === a("tweak-blog-list-item-image-aspect-ratio-stacked").toLowerCase(); if (i && o)
                                for (var n = 0; n < t.length; n++) { var s = t[n];
                                    s.style.position = null, s.style.top = null, s.style.right = null, s.style.bottom = null, s.style.left = null, s.style.width = null, s.style.height = null, l.ImageLoader.load(s, { load: !0, mode: null }) } else
                                    for (var r = 0; r < t.length; r++) l.ImageLoader.load(t[r], { load: !0, mode: "fill" }) } } },
                s = function(e) { o(e), n(e) },
                r = !1,
                g = function(e) { r || (r = !0), t && clearTimeout(t), t = setTimeout(function() { s(e), r = !1 }, 100) },
                c = ["tweak-blog-list-columns", "tweak-blog-list-spacing"],
                u = ["tweak-blog-list-style", "tweak-blog-list-columns", "tweak-blog-list-spacing", "tweak-blog-list-item-image-aspect-ratio-grid", "tweak-blog-list-item-image-aspect-ratio-stacked", "tweak-blog-list-item-image-show", "tweak-blog-list-item-image-width"];
            e.Global.on("tweak:change", function(e) { var t = e.getName();
                c.indexOf(t) >= 0 && o(), u.indexOf(t) >= 0 && n() }); var m, w;
            e.config.win.Squarespace.onInitialize(e, function() {
                (m = i.querySelector(".BlogList")) && (s(m), w = g.bind(l, m), l.addEventListener("resize", w)) }), e.config.win.Squarespace.onDestroy(e, function() { l.removeEventListener("resize", w) }) }, "1.0", { requires: [] }) }, 8023: function(e, t, l) { l(4290) } }, [8023]);