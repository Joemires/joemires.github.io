google.maps.__gjsload__('overlay', function(_) {
    var jt = function(a) {
            this.g = a
        },
        Gka = function() {},
        kt = function(a) {
            a.wo = a.wo || new Gka;
            return a.wo
        },
        Hka = function(a) {
            this.ob = new _.Hi(function() {
                var b = a.wo;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.rn && a.onAdd) a.onAdd();
                        b.rn = !0;
                        a.draw()
                    }
                } else {
                    if (b.rn)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.rn = !1
                }
            }, 0)
        },
        Ika = function(a, b) {
            function c() {
                return _.Ii(e.ob)
            }
            var d = kt(a),
                e = d.sm;
            e || (e = d.sm = new Hka(a));
            _.Nb(d.Pa || [], _.I.removeListener);
            var f = d.Db = d.Db || new _.Gr,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center", g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.Rr = d.Rr || new jt(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Pa = [_.I.addListener(a, "panes_changed", c), _.I.addListener(g, "zoom_changed", c), _.I.addListener(g, "offset_changed", c), _.I.addListener(b, "projection_changed", c), _.I.addListener(g, "projectioncenterq_changed", c)];
            c();
            b instanceof
            _.fg && (_.bh(b, "Ox"), _.Ol("Ox", "-p", a))
        },
        Mka = function(a) {
            if (a) {
                var b = a.getMap();
                if (Jka(a) !== b && b && b instanceof _.fg) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Kka(b, a, c.overlayLayer) : c.i.then(function(d) {
                        d = d.Rc;
                        var e = new lt(b, d);
                        d.Nb(e);
                        c.overlayLayer = e;
                        Lka(a);
                        Mka(a)
                    })
                }
            }
        },
        Lka = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, _.Pl("Ox", "-p", b.g), b.g.unbindAll(), b.g.set("panes", null), b.g.set("projection", null), b.j.Hg(b), b.i && (b.i = !1, b.g.onRemove ? b.g.onRemove() : b.g.remove()))
            }
        },
        Jka = function(a) {
            return (a =
                a.__gmop) ? a.map : null
        },
        Kka = function(a, b, c) {
            this.map = a;
            this.g = b;
            this.j = c;
            this.i = !1;
            _.bh(this.map, "Ox");
            _.Ol("Ox", "-p", this.g);
            c.If(this)
        },
        Nka = function(a, b) {
            a.g.get("projection") != b && (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b))
        },
        lt = function(a, b) {
            this.o = a;
            this.j = b;
            this.g = null;
            this.i = []
        };
    _.D(jt, _.J);
    jt.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.df(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null))
    };
    var mt = {};
    _.D(Hka, _.J);
    mt.If = function(a) {
        if (a) {
            var b = a.getMap();
            (kt(a).zr || null) !== b && (b && Ika(a, b), kt(a).zr = b)
        }
    };
    mt.Hg = function(a) {
        var b = kt(a),
            c = b.Db;
        c && c.unbindAll();
        (c = b.Rr) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Pa && _.Nb(b.Pa, _.I.removeListener);
        b.Pa = null;
        b.sm && (b.sm.ob.ke(), b.sm = null);
        _.Pl("Ox", "-p", a);
        delete kt(a).zr
    };
    var nt = {};
    Kka.prototype.draw = function() {
        this.i || (this.i = !0, this.g.onAdd && this.g.onAdd());
        this.g.draw && this.g.draw()
    };
    lt.prototype.dispose = function() {};
    lt.prototype.Ad = function(a, b, c, d, e, f, g, h) {
        var k = this.g = this.g || new _.Dn(this.o, this.j, function() {});
        k.Ad(a, b, c, d, e, f, g, h);
        a = _.A(this.i);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, Nka(b, k), b.draw()
    };
    lt.prototype.If = function(a) {
        this.i.push(a);
        this.g && Nka(a, this.g);
        this.j.refresh()
    };
    lt.prototype.Hg = function(a) {
        _.Wb(this.i, a)
    };
    nt.If = Mka;
    nt.Hg = Lka;
    _.Qf("overlay", {
        Np: function(a) {
            if (a) {
                (0, mt.Hg)(a);
                (0, nt.Hg)(a);
                var b = a.getMap();
                b && (b instanceof _.fg ? (0, nt.If)(a) : (0, mt.If)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.jo(a, {
                onClick: function(b) {
                    return _.On(b.event)
                },
                Rd: function(b) {
                    return _.Ln(b)
                },
                fi: function(b) {
                    return _.Mn(b)
                },
                Ee: function(b) {
                    return _.Mn(b)
                },
                be: function(b) {
                    return _.Nn(b)
                }
            }).Wi(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.Uf);
            a.addEventListener("contextmenu", _.Uf);
            a.addEventListener("dblclick", _.Uf);
            a.addEventListener("mousedown",
                _.Uf);
            a.addEventListener("mousemove", _.Uf);
            a.addEventListener("MSPointerDown", _.Uf);
            a.addEventListener("pointerdown", _.Uf);
            a.addEventListener("touchstart", _.Uf);
            a.addEventListener("wheel", _.Uf)
        }
    });
});