google.maps.__gjsload__('search_impl', function(_) {
    var ecb = function(a) {
            _.G(this, a, 4)
        },
        gcb = function(a) {
            fcb || (fcb = {
                oa: "sssM",
                Da: ["ss"]
            });
            var b = fcb;
            return _.zi.g(a.Kb(), b)
        },
        hcb = function(a, b) {
            a.W[0] = b
        },
        icb = function(a, b) {
            a.W[2] = b
        },
        X$ = function(a) {
            _.G(this, a, 3)
        },
        jcb = function() {
            var a = _.Dj,
                b = _.Yi;
            this.i = _.He;
            this.g = _.Bk(_.jr, a, _.Lr + "/maps/api/js/LayersService.GetFeature", b)
        },
        mcb = function(a, b, c) {
            var d = _.IA(new jcb);
            c.Wq = (0, _.lb)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.EBa(c, _.tH(b));
            var e = [];
            e.push(_.I.addListener(c, "click", (0, _.lb)(kcb, null, a)));
            _.Nb(["mouseover",
                "mouseout", "mousemove"
            ], function(f) {
                e.push(_.I.addListener(c, f, (0, _.lb)(lcb, null, a, f)))
            });
            e.push(_.I.addListener(a, "clickable_changed", function() {
                a.g.clickable = 0 != a.get("clickable")
            }));
            a.i = e
        },
        kcb = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.Gk(e, 1) ? new _.zf(_.ue(e.getLocation(), 0), _.ue(e.getLocation(), 1)) : null;
                f.fields = {};
                for (var g = 0, h = _.De(e, 2); g < h; ++g) {
                    var k = new _.zH(_.Ce(e, 2, g));
                    f.fields[k.getKey()] = k.Cb()
                }
            }
            _.I.trigger(a, "click", b, c, d, f)
        },
        lcb = function(a,
            b, c, d, e, f, g) {
            var h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.I.trigger(a, b, c, d, e, h, g)
        },
        ncb = function() {},
        fcb;
    _.D(ecb, _.E);
    ecb.prototype.getParameter = function(a) {
        return new _.zH(_.Ce(this, 3, a))
    };
    _.D(X$, _.E);
    X$.prototype.getStatus = function() {
        return _.te(this, 0, -1)
    };
    X$.prototype.getLocation = function() {
        return new _.Dl(this.W[1])
    };
    jcb.prototype.load = function(a, b) {
        function c(g) {
            g = new X$(g);
            b(g)
        }
        var d = new ecb;
        hcb(d, a.layerId.split("|")[0]);
        d.W[1] = a.g;
        icb(d, _.Ee(_.Ge(this.i)));
        for (var e in a.parameters) {
            var f = new _.zH(_.Be(d, 3));
            f.W[0] = e;
            f.W[1] = a.parameters[e]
        }
        a = gcb(d);
        this.g(a, c, c);
        return a
    };
    jcb.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    ncb.prototype.qu = function(a) {
        if (_.hi[15]) {
            var b = a.Ne,
                c = a.Ne = a.getMap();
            b && a.g && (a.j ? (b = b.__gm.g, b.set(b.get().Ig(a.g))) : a.g && _.$Ba(a.g, b) && (_.Nb(a.i || [], _.I.removeListener), a.i = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer");
                b = new _.Wl;
                d = d.split("|");
                b.layerId = d[0];
                for (var k = 1; k < d.length; ++k) {
                    var l = d[k].split(":");
                    b.parameters[l[0]] = l[1]
                }
                e && (b.spotlightDescription = new _.fp(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.Zl(g));
                h && (b.mapsApiLayer = new _.Nk(h));
                a.g = b;
                a.j = a.get("renderOnBaseMap");
                a.j ? (a = c.__gm.g, a.set(a.get().Jf(b))) : mcb(a, c, b);
                _.bh(c, "Lg")
            }
        }
    };
    _.Qf("search_impl", new ncb);
});