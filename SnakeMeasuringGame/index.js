System.register("chunks:///_virtual/MSRControl.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./MSRHead.ts", "./MSRGameManager.ts"], (function(t) {
    "use strict";
    var e, n, i, o, a, r, h, s, l, d, p, c, u, g, m, C, b, f;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            i = t.initializerDefineProperty,
            o = t.assertThisInitialized,
            a = t.defineProperty
        }
        , function(t) {
            r = t.cclegacy,
            h = t._decorator,
            s = t.Node,
            l = t.Collider2D,
            d = t.Contact2DType,
            p = t.v3,
            c = t.Label,
            u = t.BoxCollider2D,
            g = t.RigidBody2D,
            m = t.v2,
            C = t.Component
        }
        , function(t) {
            b = t.MSRHead
        }
        , function(t) {
            f = t.MSRGameManager
        }
        ],
        execute: function() {
            var y, v, M, R, T, x, A, B, N, _, k, S, w, G, P, z, D, E, L, I, O, H, U;
            r._RF.push({}, "256949+6i5JQptPxHx8Z6ke", "MSRControl", void 0);
            var j = h.ccclass
              , F = h.property;
            t("MSRControl", (y = j("MSRControl"),
            v = F(s),
            M = F(s),
            R = F(s),
            T = F(s),
            x = F(s),
            A = F(s),
            B = F(s),
            N = F(s),
            _ = F(s),
            k = F(s),
            y((G = e((w = function(t) {
                function e() {
                    for (var e, n = arguments.length, r = new Array(n), h = 0; h < n; h++)
                        r[h] = arguments[h];
                    return e = t.call.apply(t, [this].concat(r)) || this,
                    i(o(e), "head", G, o(e)),
                    i(o(e), "Up", P, o(e)),
                    i(o(e), "Down", z, o(e)),
                    i(o(e), "Left", D, o(e)),
                    i(o(e), "Right", E, o(e)),
                    i(o(e), "question", L, o(e)),
                    i(o(e), "ruler", I, o(e)),
                    i(o(e), "joystick_collider", O, o(e)),
                    i(o(e), "GameManager", H, o(e)),
                    i(o(e), "timerlabel", U, o(e)),
                    a(o(e), "timer", 45),
                    a(o(e), "enableGameOver", !1),
                    a(o(e), "count", 0),
                    a(o(e), "position_cnt", !1),
                    a(o(e), "enableRotaion", !1),
                    a(o(e), "enableRotaion1", !0),
                    e
                }
                n(e, t);
                var r = e.prototype;
                return r.onLoad = function() {
                    this.addTouchEvent(this.Up),
                    this.addTouchEvent(this.Down),
                    this.addTouchEvent(this.Left),
                    this.addTouchEvent(this.Right);
                    var t = this.node.parent.parent.getChildByName("collsion").getComponent(l)
                      , e = this.node.parent.parent.getChildByName("collsion2").getComponent(l)
                      , n = this.node.parent.parent.getChildByName("collsion3").getComponent(l)
                      , i = this.node.parent.parent.getChildByName("collsion4").getComponent(l)
                      , o = this.node.parent.parent.getChildByName("collsion5").getComponent(l);
                    t && e && n && i && o && (t.on(d.BEGIN_CONTACT, this.onBeginContact, this),
                    e.on(d.BEGIN_CONTACT, this.onBeginContact, this),
                    n.on(d.BEGIN_CONTACT, this.onBeginContact, this),
                    i.on(d.BEGIN_CONTACT, this.onBeginContact, this),
                    o.on(d.BEGIN_CONTACT, this.onBeginContact, this))
                }
                ,
                r.onBeginContact = function(t, e) {
                    console.log("self : other : ", t.name, e.name),
                    "collsion" == t.node.name && (this.head.getComponent(b).dir = p(1.6, 0, 0)),
                    "collsion2" == t.node.name && (this.head.getComponent(b).dir = p(-1.6, 0, 0)),
                    "collsion3" == t.node.name && (this.head.getComponent(b).dir = p(-1.6, 0, 0)),
                    "collsion4" == t.node.name && (this.head.getComponent(b).dir = p(-1.6, 0, 0)),
                    "collsion5" == t.node.name && (this.head.getComponent(b).dir = p(-1.6, 0, 0))
                }
                ,
                r.onTouchStart = function(t) {
                    var e = t.getCurrentTarget().name;
                    "Up" == e && (this.head.getComponent(b).dir = p(0, 1.6, 0)),
                    "Down" == e && (this.head.getComponent(b).dir = p(0, -1.6, 0)),
                    "Left" == e && (this.head.getComponent(b).dir = p(-1.6, 0, 0)),
                    "Right" == e && (this.head.getComponent(b).dir = p(1.6, 0, 0))
                }
                ,
                r.addTouchEvent = function(t) {
                    t.on(s.EventType.TOUCH_START, this.onTouchStart, this)
                }
                ,
                r.update = function(t) {
                    this.enableGameOver ? this.enableRotaion && (this.head.position.y >= -203 ? (this.head.position.x > 580 && (this.head.getComponent(b).dir = p(-1.6, 0, 0)),
                    this.head.position.x < 600 && this.head.position.x >= -640 && (this.head.getComponent(b).dir = p(1.6, 0, 0)),
                    this.head.position.x >= 600 && this.head.position.x <= 620 && (this.head.getComponent(b).dir = p(0, -1.6, 0),
                    this.position_cnt = !0)) : (this.head.position.x > 580 ? (this.head.getComponent(b).dir = p(-1.6, 0, 0),
                    this.position_cnt = !0) : this.position_cnt || (this.head.getComponent(b).dir = p(1.6, 0, 0)),
                    this.position_cnt && this.head.position.x <= -599 && (this.enableRotaion = !1,
                    this.enableRotaion1 = !1,
                    this.timerlabel.active = !1,
                    this.head.getComponent(u).enabled = !1,
                    this.head.getComponent(g).enabled = !1,
                    this.GameManager.getComponent(f).LoadLevel(),
                    this.node.active = !1)),
                    this.enableRotaion1 && (this.rotateHead(this.head.getComponent(b).dir),
                    this.moveSnake())) : (this.count += t,
                    this.count >= 1 && (this.count = 0,
                    this.timer--,
                    this.timerlabel.getComponent(c).string = "00:" + (this.timer >= 10 ? this.timer.toString() : "0" + this.timer.toString()),
                    0 == this.timer && (this.enableGameOver = !0,
                    this.enableRotaion = !0,
                    this.joystick_collider.active = !1,
                    this.Up.active = !1,
                    this.Down.active = !1,
                    this.Right.active = !1,
                    this.Left.active = !1,
                    this.head.parent.getChildByName("food").removeFromParent())))
                }
                ,
                r.rotateHead = function(t) {
                    var e = 180 * m(0, 1).signAngle(t) / Math.PI;
                    this.head.angle = e - 90
                }
                ,
                r.moveSnake = function() {
                    var t = this.head.getComponent(b).dir.clone().multiplyScalar(this.head.getComponent(b).speed);
                    this.head.setPosition(this.head.getPosition().add(t)),
                    this.head.getComponent(b).pointsArray.push(this.head.getPosition().clone()),
                    this.head.getComponent(b).headPointsNum += 1;
                    for (var e = 1; e < this.head.getComponent(b).snakeArray.length; e++) {
                        var n = Math.floor((this.head.getComponent(b).pointsArray.length - this.head.getComponent(b).headPointsNum) / (this.head.getComponent(b).snakeArray.length - 1) * (this.head.getComponent(b).snakeArray.length - 1 - e)) + 5 * e
                          , i = this.head.getComponent(b).pointsArray[n + this.head.getComponent(b).snakeArray[e].curIndex];
                        e > 1 ? (Math.abs(i.x) > Math.abs(this.head.getComponent(b).snakeArray[e - 1].position.x + 41) || Math.abs(this.head.getComponent(b).snakeArray[e - 1].position.x + 41) > Math.abs(i.x)) && (this.head.getComponent(b).snakeArray[e].setPosition(i),
                        this.head.getComponent(b).snakeArray[e].curIndex += 1) : 1 == e && (Math.abs(i.x) > Math.abs(this.head.position.x + 41) || Math.abs(this.head.position.x + 41) > Math.abs(i.x)) && (this.head.getComponent(b).snakeArray[e].setPosition(i),
                        this.head.getComponent(b).snakeArray[e].curIndex += 1)
                    }
                }
                ,
                e
            }(C)).prototype, "head", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            P = e(w.prototype, "Up", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            z = e(w.prototype, "Down", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            D = e(w.prototype, "Left", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            E = e(w.prototype, "Right", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            L = e(w.prototype, "question", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            I = e(w.prototype, "ruler", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            O = e(w.prototype, "joystick_collider", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            H = e(w.prototype, "GameManager", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            U = e(w.prototype, "timerlabel", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            S = w)) || S));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/MSRParsing.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./MSRConstant.ts", "./MSRGameManager.ts"], (function(e) {
    "use strict";
    var n, t, a, i, o, s, l, r, u, c, g, f, d, h, m, w, p, b, y;
    return {
        setters: [function(e) {
            n = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            a = e.initializerDefineProperty,
            i = e.assertThisInitialized,
            o = e.defineProperty,
            s = e.asyncToGenerator
        }
        , function(e) {
            l = e.cclegacy,
            r = e._decorator,
            u = e.JsonAsset,
            c = e.Node,
            g = e.AudioClip,
            f = e.AudioSource,
            d = e.PageView,
            h = e.Animation,
            m = e.sys,
            w = e.Component,
            p = e.director
        }
        , function(e) {
            b = e.MSRConstant
        }
        , function(e) {
            y = e.MSRGameManager
        }
        ],
        execute: function() {
            var G, P, v, S, D, O, C, N, M, A, R, B, q, T, L, z, x, j, k, J, V, I, U;
            l._RF.push({}, "566a8J2GChBE5zAQedZtdVP", "MSRParsing", void 0);
            var _ = r.ccclass
              , H = r.property;
            e("MSRParsing", (G = _("MSRParsing"),
            P = H(u),
            v = H(c),
            S = H(c),
            D = H(c),
            O = H(c),
            C = H(c),
            N = H(c),
            M = H(c),
            A = H(c),
            R = H(g),
            G((T = n((q = function(e) {
                function n() {
                    for (var n, t = arguments.length, s = new Array(t), l = 0; l < t; l++)
                        s[l] = arguments[l];
                    return n = e.call.apply(e, [this].concat(s)) || this,
                    a(i(n), "LevelData", T, i(n)),
                    o(i(n), "GamePlayData", []),
                    a(i(n), "GameManager", L, i(n)),
                    a(i(n), "PlayingBG", z, i(n)),
                    a(i(n), "AnimNodes", x, i(n)),
                    a(i(n), "Playbtns", j, i(n)),
                    a(i(n), "Tutorial", k, i(n)),
                    a(i(n), "MainBG", J, i(n)),
                    a(i(n), "Actionbutton", V, i(n)),
                    a(i(n), "LevelselectionPage2", I, i(n)),
                    a(i(n), "UIbuttonClickSound", U, i(n)),
                    o(i(n), "AudioSourceObj", null),
                    n
                }
                t(n, e);
                var l = n.prototype;
                return l.start = function() {
                    this.AudioSourceObj = this.node.getComponent(f),
                    b.sequenceNo = Math.floor(Math.random() * b.Sequence.length),
                    null != window.Global && null != window.Global.role ? "teacher" == window.Global.role ? (this.MainBG.active = !0,
                    this.MainBG.getChildByName("AssignBtn").active = !0,
                    this.Playbtns[1].active = !0,
                    this.Playbtns[0].active = !1) : "parent" == window.Global.role ? (this.MainBG.active = !0,
                    2 == window.Global.assignment || window.Global.assignment) : "student" == window.Global.role && (2 != window.Global.assignnum && 3 != window.Global.assignnum && 5 != window.Global.assignnum && 4 != window.Global.assignnum && (this.MainBG.active = !0),
                    this.StudentValidation(window.Global.assignnum)) : this.StudentValidation(-1)
                }
                ,
                l.StudentValidation = function(e) {
                    var n = this.LevelData.json;
                    if (-1 == e) {
                        for (var t = 0; t < 10; t++)
                            this.Parsing(n[b.Sequence[b.sequenceNo][t] - 1001]);
                        b.GamePlayData = this.GamePlayData,
                        console.log(b.GamePlayData),
                        this.GamePlayData = []
                    } else if (2 == e)
                        console.log(window.Global.assigngamedata),
                        b.GamePlayData = window.Global.assigngamedata,
                        this.PlayingBG.active = !0;
                    else if (3 == e)
                        b.GamePlayData = window.Global.assigngamedata,
                        this.PlayingBG.active = !0;
                    else if (4 == e) {
                        for (t = 0; t < 10; t++)
                            this.Parsing(n[b.Sequence[b.sequenceNo][t] - 1001]);
                        b.GamePlayData = this.GamePlayData,
                        this.GamePlayData = []
                    } else
                        5 == e && (b.GamePlayData = window.Global.assigngamedata,
                        this.PlayingBG.active = !0)
                }
                ,
                l.TeacherValidation = function(e, n) {
                    -1 == n && this.finalassign();
                    var t = this.LevelData.json;
                    if (0 == n) {
                        for (var a = 0; a < 10; a++)
                            console.log("jsonObj" + t[b.Sequence[b.sequenceNo][0]]),
                            this.Parsing(t[b.Sequence[b.sequenceNo][a] - 1001]);
                        b.GamePlayData = this.GamePlayData,
                        this.GamePlayData = [],
                        this.PlayingBG.active = !0
                    } else if (2 == n) {
                        for (var i = 0; i < 10; i++)
                            console.log("jsonObj : " + t[b.Sequence[b.sequenceNo][i] - 1001]),
                            this.Parsing(t[b.Sequence[b.sequenceNo][i] - 1001]);
                        b.GamePlayData = this.GamePlayData,
                        this.finalassign()
                    }
                }
                ,
                l.StudentfinalassignChallengeCompleted = function() {
                    var e = s(regeneratorRuntime.mark((function e() {
                        var n, t;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return console.log(JSON.stringify(window.Global.finalassign)),
                                    n = window.Global.server + "/tngroups/challengecompleted",
                                    e.next = 4,
                                    this.getOrPostRequests(n, window.Global.finalassign, "POST");
                                case 4:
                                    t = e.sent,
                                    JSON.parse(t.responses);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                l.Studentfinalassign = function() {
                    var e = s(regeneratorRuntime.mark((function e() {
                        var n, t, a;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = b.GamePlayData,
                                    window.Global.finalassign.gamedata = JSON.stringify(n),
                                    console.log(JSON.stringify(window.Global.finalassign)),
                                    t = window.Global.server + "/tngroups/challenge",
                                    e.next = 6,
                                    this.getOrPostRequests(t, window.Global.finalassign, "POST");
                                case 6:
                                    a = e.sent,
                                    JSON.parse(a.responses),
                                    window.Global.assignnum = 0,
                                    window.alert("Challenge Posted"),
                                    this.scheduleOnce((function() {
                                        p.loadScene("SnakeLengths")
                                    }
                                    ), 2);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                l.finalassign = function() {
                    var e = s(regeneratorRuntime.mark((function e() {
                        var n, t, a, i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = b.GamePlayData,
                                    t = {
                                        gameid: window.Global.gameid,
                                        gamedata: n
                                    },
                                    window.Global.finalassign.gamedata = JSON.stringify(t),
                                    console.log(JSON.stringify(window.Global.finalassign)),
                                    a = window.Global.server + "/tnteacher/assignment",
                                    e.next = 7,
                                    this.getOrPostRequests(a, window.Global.finalassign, "POST");
                                case 7:
                                    i = e.sent,
                                    JSON.parse(i.responses),
                                    p.loadScene("HomePage");
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                l.getOrPostRequests = function(e, n, t) {
                    return console.log("url : " + e),
                    new Promise((function(a, i) {
                        var o = new XMLHttpRequest;
                        o.open(t, e, !0),
                        o.send(JSON.stringify(n)),
                        o.onreadystatechange = function() {
                            if (4 == o.readyState)
                                if (o.status >= 200 && o.status <= 207) {
                                    var e = o.responseText;
                                    a({
                                        responses: e
                                    })
                                } else
                                    i(o.statusText)
                        }
                        ,
                        o.onerror = function() {
                            return i(o.statusText)
                        }
                    }
                    ))
                }
                ,
                l.tutorial = function(e, n) {
                    this.UibuttonClick(),
                    1 == n ? (this.Tutorial.getChildByName("PageView").getComponent(d).scrollToPage(this.Tutorial.getChildByName("PageView").getComponent(d).getCurrentPageIndex() + 1, .3),
                    this.AnimNodes[1].getComponent(h).play(),
                    this.AnimNodes[2].getComponent(h).play(),
                    this.Actionbutton[1].active = !0,
                    this.Actionbutton[0].active = !1) : 2 == n && (this.Tutorial.getChildByName("PageView").getComponent(d).scrollToPage(0),
                    this.Actionbutton[0].active = !0,
                    this.Actionbutton[1].active = !1,
                    this.Tutorial.active = !1,
                    this.PlayingBG.active = !0)
                }
                ,
                l.ParseLevelData = function(e) {
                    var n = this.LevelData.json;
                    this.Parsing(n[e]),
                    b.GamePlayData = this.GamePlayData,
                    this.GameManager.getComponent(y).LoadLevel(),
                    this.GamePlayData = []
                }
                ,
                l.Parsing = function(e) {
                    this.GamePlayData.push([e.UID, e.Question, e.Difficulty, e.Scale, e.QuestionType, e.WholeOrDecimals, e.OptionsSuffix, e.ScaleValues, e.AnswerOptionsl])
                }
                ,
                l.UibuttonClick = function() {
                    this.UIbuttonClickSound && "true" == m.localStorage.getItem("MSRAudioOn") && this.AudioSourceObj.playOneShot(this.UIbuttonClickSound, .4)
                }
                ,
                n
            }(w)).prototype, "LevelData", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            L = n(q.prototype, "GameManager", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            z = n(q.prototype, "PlayingBG", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            x = n(q.prototype, "AnimNodes", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            j = n(q.prototype, "Playbtns", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            k = n(q.prototype, "Tutorial", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            J = n(q.prototype, "MainBG", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            V = n(q.prototype, "Actionbutton", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            I = n(q.prototype, "LevelselectionPage2", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            U = n(q.prototype, "UIbuttonClickSound", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            B = q)) || B));
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/MSRConstant.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(n) {
    "use strict";
    var e, t, s, c, o;
    return {
        setters: [function(n) {
            e = n.defineProperty,
            t = n.inheritsLoose
        }
        , function(n) {
            s = n.cclegacy,
            c = n._decorator,
            o = n.Component
        }
        ],
        execute: function() {
            var a, r, l;
            s._RF.push({}, "67e6bBWhA9Dj5d4Xg1I4st+", "MSRConstant", void 0);
            var i = c.ccclass;
            c.property,
            n("MSRConstant", i("MSRConstant")((l = r = function(n) {
                function e() {
                    return n.apply(this, arguments) || this
                }
                return t(e, n),
                e.prototype.start = function() {}
                ,
                e
            }(o),
            e(r, "sequenceNo", void 0),
            e(r, "BaseScore", 100),
            e(r, "MultiplicationFact", 1),
            e(r, "MaxTimeForBonus", 30),
            e(r, "GamePlayData", []),
            e(r, "levelNo", null),
            e(r, "ScaleTypes", ["Scale15CMs", "Scale6In", "Scale12In"]),
            e(r, "TimeBound", [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]),
            e(r, "Scores", [200, 190, 180, 170, 160, 150, 140, 130, 120, 110, 100]),
            e(r, "Sequence", [[1001, 1004, 1009, 1010, 1015, 1020, 1022, 1025, 1030, 1035], [1002, 1005, 1011, 1016, 1019, 1023, 1026, 1031, 1036, 1038], [1003, 1006, 1013, 1019, 1024, 1026, 1029, 1033, 1035, 1038]]),
            e(r, "Scale15CMs_D", [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14]),
            e(r, "Scale15CMs_W", [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
            e(r, "Scale6In_D", [2, 2.5, 3, 3.5, 4, 4.5]),
            e(r, "Scale6In_W", [2, 3, 4, 5]),
            e(r, "Scale12In_D", [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10]),
            e(r, "Scale12In_W", [3, 4, 5, 6, 7, 8, 9, 10]),
            e(r, "Ans15CMs_D", [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14]),
            e(r, "Ans15CMs_W", [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
            e(r, "Ans6In_D", [2, 2.5, 3, 3.5, 4, 4.5]),
            e(r, "Ans6In_W", [2, 3, 4, 5]),
            e(r, "Ans12In_D", [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10]),
            e(r, "Ans12In_W", [3, 4, 5, 6, 7, 8, 9, 10]),
            e(r, "Ans15CMs_D_Extended", [3, 3.25, 3.5, 3.75, 4, 4.25, 4.5, 4.75, 5, 5.25, 5.5, 5.75, 6, 6.25, 6.5, 6.75, 7, 7.25, 7.5, 7.75, 8, 8.25, 8.5, 8.75, 9, 9.25, 9.5, 9.75, 10, 10.25, 10.5, 10.75, 11, 11.25, 11.5, 11.75, 12, 12.25, 12.5, 12.75, 13, 13.25, 13.5, 13.75, 14]),
            e(r, "Ans6In_D_Extended", [2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75, 4, 4.25, 4.5]),
            e(r, "Ans12In_D_Extended", [3, 3.25, 3.5, 3.75, 4, 4.25, 4.5, 4.75, 5, 5.25, 5.5, 5.75, 6, 6.25, 6.5, 6.75, 7, 7.25, 7.5, 7.75, 8, 8.25, 8.5, 8.75, 9, 9.25, 9.5, 9.75, 10]),
            a = l)) || a);
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/MSRGameManager.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./MSRConstant.ts", "./MSRParsing.ts"], (function(t) {
    "use strict";
    var e, n, i, a, o, r, s, l, c, h, u, g, p, S, d, m, b, f, y, C, w, v, G, k, A, P, D, O;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            i = t.initializerDefineProperty,
            a = t.assertThisInitialized,
            o = t.defineProperty
        }
        , function(t) {
            r = t.cclegacy,
            s = t._decorator,
            l = t.Node,
            c = t.SpriteFrame,
            h = t.AudioClip,
            u = t.Prefab,
            g = t.AudioSource,
            p = t.Label,
            S = t.Sprite,
            d = t.tween,
            m = t.v3,
            b = t.UIOpacity,
            f = t.Vec3,
            y = t.instantiate,
            C = t.director,
            w = t.PageView,
            v = t.Animation,
            G = t.sys,
            k = t.Color,
            A = t.color,
            P = t.Component
        }
        , function(t) {
            D = t.MSRConstant
        }
        , function(t) {
            O = t.MSRParsing
        }
        ],
        execute: function() {
            var M, _, B, L, T, N, I, R, z, V, x, E, F, W, U, H, Q, j, q, X, J, K, Y, Z, $, tt, et, nt, it, at, ot, rt, st, lt, ct, ht, ut, gt, pt, St, dt, mt, bt, ft, yt, Ct, wt, vt, Gt, kt, At, Pt, Dt, Ot, Mt, _t, Bt;
            r._RF.push({}, "79ec6jCc1VATrWfnQtmqg10", "MSRGameManager", void 0);
            var Lt = s.ccclass
              , Tt = s.property;
            t("MSRGameManager", (M = Lt("MSRGameManager"),
            _ = Tt(l),
            B = Tt(l),
            L = Tt(l),
            T = Tt(l),
            N = Tt(l),
            I = Tt(l),
            R = Tt(l),
            z = Tt(l),
            V = Tt(l),
            x = Tt(c),
            E = Tt(c),
            F = Tt(l),
            W = Tt(l),
            U = Tt(l),
            H = Tt(l),
            Q = Tt(l),
            j = Tt(l),
            q = Tt(l),
            X = Tt(h),
            J = Tt(l),
            K = Tt(l),
            Y = Tt(l),
            Z = Tt(l),
            $ = Tt(l),
            tt = Tt(l),
            et = Tt(l),
            nt = Tt(u),
            M((ot = e((at = function(t) {
                function e() {
                    for (var e, n = arguments.length, r = new Array(n), s = 0; s < n; s++)
                        r[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(r)) || this,
                    i(a(e), "Graphpaper", ot, a(e)),
                    i(a(e), "Parsing", rt, a(e)),
                    o(a(e), "GamePlayData", []),
                    i(a(e), "PlayingBG", st, a(e)),
                    i(a(e), "Score", lt, a(e)),
                    i(a(e), "Roundno", ct, a(e)),
                    i(a(e), "GameOverBG", ht, a(e)),
                    i(a(e), "BackBtn", ut, a(e)),
                    i(a(e), "MainmenuBtn", gt, a(e)),
                    i(a(e), "Graphs", pt, a(e)),
                    i(a(e), "RulersSprite", St, a(e)),
                    i(a(e), "BtnSprite", dt, a(e)),
                    i(a(e), "Optionsbtn", mt, a(e)),
                    i(a(e), "SecondSnake", bt, a(e)),
                    i(a(e), "Ruler", ft, a(e)),
                    i(a(e), "head", yt, a(e)),
                    i(a(e), "Challengebtn", Ct, a(e)),
                    i(a(e), "Assignbtn", wt, a(e)),
                    i(a(e), "Question", vt, a(e)),
                    i(a(e), "UIbuttonClickSound", Gt, a(e)),
                    o(a(e), "AudioSourceObj", null),
                    o(a(e), "VarSectionLen1", [36, 71.5, 113, 155.5, 196.5, 239, 280, 322, 363.5, 406, 447.5, 490, 531, 573, 614.5, 656.5, 697.5, 740.5, 781.5, 824, 865, 907.5, 949, 991.5, 1032.5, 1075, 1116, 1158.5, 1200.5]),
                    o(a(e), "VarSectionLen2", [36.5, 70, 110.5, 152, 193, 234.5, 275.5, 317, 357.5, 399, 439.5, 481, 521.5, 563.5, 604, 646, 686.5, 728, 768.5, 810.5, 850.5, 892.5, 933.5]),
                    o(a(e), "VarSectionLen3", [36.5, 70, 110, 151.5, 192, 234, 273, 314.5, 354.5, 396, 436.5, 477.5, 518, 560, 599.5, 641, 681, 722.5, 763, 804.5, 844.5, 886, 927]),
                    o(a(e), "AnswerOptions", []),
                    o(a(e), "ScaleOptions", []),
                    o(a(e), "SnakeLength", void 0),
                    o(a(e), "SectionLens", []),
                    o(a(e), "Cnt", 1),
                    o(a(e), "mulfac", 1),
                    i(a(e), "PauseMenuNode", kt, a(e)),
                    i(a(e), "Tutorial", At, a(e)),
                    i(a(e), "AnimNodes", Pt, a(e)),
                    i(a(e), "Actionbutton", Dt, a(e)),
                    i(a(e), "Home", Ot, a(e)),
                    i(a(e), "control", Mt, a(e)),
                    i(a(e), "mask", _t, a(e)),
                    i(a(e), "Body", Bt, a(e)),
                    o(a(e), "rightans", !1),
                    o(a(e), "ScoreVal", 0),
                    o(a(e), "td", 0),
                    e
                }
                n(e, t);
                var r = e.prototype;
                return r.start = function() {
                    this.AudioSourceObj = this.node.getComponent(g),
                    this.SectionLens.push(this.VarSectionLen1, this.VarSectionLen2, this.VarSectionLen3),
                    this.AnswerOptions.push({
                        Ans15CMs_W: D.Ans15CMs_W,
                        Ans15CMs_D: D.Ans15CMs_D,
                        Ans6In_W: D.Ans6In_W,
                        Ans6In_D: D.Ans6In_D,
                        Ans12In_W: D.Ans12In_W,
                        Ans12In_D: D.Ans12In_D,
                        Ans15CMs_D_Extended: D.Ans15CMs_D_Extended,
                        Ans6In_D_Extended: D.Ans6In_D_Extended,
                        Ans12In_D_Extended: D.Ans12In_D_Extended
                    }),
                    this.ScaleOptions.push({
                        Scale15CMs_D: D.Scale15CMs_D,
                        Scale15CMs_W: D.Scale15CMs_W,
                        Scale6In_D: D.Scale6In_D,
                        Scale6In_W: D.Scale6In_W,
                        Scale12In_D: D.Scale12In_D,
                        Scale12In_W: D.Scale12In_W
                    }),
                    console.log("ansop: ", this.AnswerOptions[0].Ans15CMs_W)
                }
                ,
                r.LoadLevel = function() {
                    var t, e, n, i = this;
                    this.td = 0,
                    this.Roundno.active = !0,
                    this.Ruler.active = !0,
                    this.Roundno.getComponent(p).string = this.Cnt.toString(),
                    this.Score.active = !0,
                    D.GamePlayData && (this.GamePlayData = D.GamePlayData[this.Cnt - 1],
                    console.log("gameplay data :", D.GamePlayData)),
                    this.Graphs[1].active = !1;
                    for (var a = 0; a < D.ScaleTypes.length; a++)
                        this.GamePlayData[3] == D.ScaleTypes[a] && (this.Ruler.getComponent(S).spriteFrame = this.RulersSprite[a],
                        this.Graphs[a].active = !0,
                        t = a);
                    this.Question.getComponent(p).string = this.GamePlayData[1],
                    this.Question.active = !0,
                    0 != t ? (this.head.setScale(1.28, 1.28, 1),
                    n = !0,
                    e = 2 == t ? 2 : 4) : (this.head.setScale(1, 1, 1),
                    e = 2,
                    n = !1);
                    var o = 0;
                    1 == this.Cnt ? o = this.head.parent.children.length - 6 : o = this.ScaleOptions[0][this.GamePlayData[7]][Math.round(Math.random() * (this.ScaleOptions[0][this.GamePlayData[7]].length - 1))] * e;
                    1 == this.Cnt ? this.SnakeLength = o + 1 : this.SnakeLength = o,
                    console.log("scale: ", this.GamePlayData[6]);
                    for (var a = 0; a < o; a++)
                        1 == this.Cnt && (console.log("body : ", this.head.parent.children[6].name),
                        this.head.parent.children[6].removeFromParent());
                    1 == this.Cnt && ("W" == this.GamePlayData[5] && o % 2 == 0 && (this.SnakeLength += 1));
                    if (console.log("snake: ", this.SnakeLength),
                    this.FirstSnake(this.SnakeLength - 1, t),
                    this.SnakeLength = Number(this.SnakeLength / e),
                    1 == this.Cnt ? (d(this.head.parent).to(.8, {
                        scale: m(.9, .9, .9)
                    }).call((function() {
                        i.mask[0].active = !0,
                        i.mask[1].active = !0,
                        i.OptionsTween(),
                        "Add" != i.GamePlayData[4] && "Avg" != i.GamePlayData[4] && "Sub" != i.GamePlayData[4] && d(i.Question.getComponent(b)).to(.3, {
                            opacity: 255
                        }).start()
                    }
                    )).start(),
                    d(this.head).to(.8, {
                        position: m(this.head.position.x + 10 * Number(n), this.head.position.y + 10 * Number(n), 1)
                    }).start()) : d(this.head).to(5, {
                        position: m(-592 - 7 * Number(!n), this.head.position.y, 1)
                    }).call((function() {
                        i.OptionsTween(),
                        d(i.Question.getComponent(b)).to(.3, {
                            opacity: 255
                        }).start()
                    }
                    )).start(),
                    "Half" == this.GamePlayData[4] && (this.SnakeLength = Number((this.SnakeLength / 2).toFixed(2))),
                    "Add" == this.GamePlayData[4] || "Avg" == this.GamePlayData[4] || "Sub" == this.GamePlayData[4]) {
                        var r = this.ScaleOptions[0][this.GamePlayData[7]][Math.round(Math.random() * (this.ScaleOptions[0][this.GamePlayData[7]].length - 1))];
                        this.SecondSnakegenerate(r * e - 1, n, t),
                        "Add" == this.GamePlayData[4] ? this.SnakeLength = this.SnakeLength + r : "Avg" == this.GamePlayData[4] ? this.SnakeLength = Number(((this.SnakeLength + r) / 2).toFixed(2)) : "Sub" == this.GamePlayData[4] && (this.SnakeLength = Math.abs(this.SnakeLength - r))
                    }
                }
                ,
                r.OptionsTween = function() {
                    for (var t = this, e = this.GenerateRandOPtions(this.GamePlayData[8]), n = 0; n < this.Optionsbtn.length; n++)
                        this.Optionsbtn[n].active = !0,
                        this.addTouchEvent(this.Optionsbtn[n]),
                        d(this.Optionsbtn[n]).to(.3, {
                            scale: new f(1.2,1.2,1.2)
                        }).to(.1, {
                            scale: new f(1,1,1)
                        }).call((function() {
                            t.td = 0
                        }
                        )).start(),
                        this.Optionsbtn[n].children[0].getComponent(p).string = e[n].toString() + this.GamePlayData[6]
                }
                ,
                r.GenerateRandOPtions = function(t) {
                    var e = []
                      , n = 0
                      , i = Math.floor(4 * Math.random())
                      , a = this.GamePlayData[3].slice(5, 8);
                    console.log("15 : ", a),
                    "1" == a[0] && "5" == a[1] && ("m" == this.GamePlayData[6] ? this.mulfac = .01 : "mm" == this.GamePlayData[6] && (this.mulfac = 10));
                    for (var o = 0; o < 4; o++)
                        n = this.AnswerOptions[0][t][Math.round(Math.random() * (this.AnswerOptions[0][t].length - 1))],
                        i == o ? e.push(this.SnakeLength * this.mulfac) : -1 == e.indexOf(n) ? e.push(n * this.mulfac) : o--;
                    return console.log(e),
                    e
                }
                ,
                r.FirstSnake = function(t, e) {
                    for (var n = 0; n < t; n++) {
                        var i = y(this.Body);
                        this.head.addChild(i),
                        i.getComponent(S).color = this.head.getComponent(S).color,
                        i.setPosition(this.SectionLens[e][n], 0, 1)
                    }
                }
                ,
                r.OnHomebuttonclick = function() {
                    this.UibuttonClick(),
                    C.resume(),
                    C.loadScene("SnakeLengths")
                }
                ,
                r.Onresumebuttonclick = function() {
                    this.UibuttonClick(),
                    C.resume(),
                    this.PauseMenuNode.active = !1
                }
                ,
                r.Onpausebuttonclick = function() {
                    this.UibuttonClick(),
                    C.pause(),
                    this.PauseMenuNode.active = !0
                }
                ,
                r.OnBackbuttonclick = function() {
                    this.UibuttonClick(),
                    C.loadScene("SnakeLengths"),
                    this.Home.active = !0
                }
                ,
                r.OnHelpbuttonClick = function(t, e) {
                    this.UibuttonClick(),
                    3 == e && this.Tutorial.getChildByName("PageView").getComponent(w).scrollToPage(0),
                    this.Tutorial.active = !0,
                    this.AnimNodes[0].getComponent(v).play(),
                    1 == e ? (this.Tutorial.getChildByName("PageView").getComponent(w).scrollToPage(this.Tutorial.getChildByName("PageView").getComponent(w).getCurrentPageIndex() + 1, .3),
                    this.AnimNodes[1].getComponent(v).play(),
                    this.AnimNodes[2].getComponent(v).play(),
                    this.Actionbutton[1].active = !0,
                    this.Actionbutton[0].active = !1,
                    this.Actionbutton[2].active = !0) : 2 == e && (this.Tutorial.getChildByName("PageView").getComponent(w).scrollToPage(0),
                    this.Actionbutton[0].active = !0,
                    this.Actionbutton[2].active = !1,
                    this.Actionbutton[1].active = !1,
                    this.Tutorial.active = !1),
                    4 == e && (this.Tutorial.getChildByName("PageView").getComponent(w).scrollToPage(0),
                    this.Actionbutton[1].active = !1,
                    this.Actionbutton[0].active = !0,
                    this.Actionbutton[2].active = !1)
                }
                ,
                r.OnReplaybuttonclick = function() {
                    this.UibuttonClick(),
                    C.resume(),
                    G.localStorage.setItem("MSRreplay", "1"),
                    C.loadScene("SnakeLengths")
                }
                ,
                r.SecondSnakegenerate = function(t, e, n) {
                    var i = this
                      , a = ["E63946", "A8DADC", "457B9D", "1D3557", "0077b6", "1b4332", "9d6b53"];
                    k.fromHEX(this.node.getComponent(S).color, a[Math.floor(Math.random() * a.length)]),
                    console.log("color:", A),
                    this.SecondSnake.getComponent(S).color = this.node.getComponent(S).color;
                    for (var o = 0; o < t; o++) {
                        var r = y(this.Body);
                        this.SecondSnake.addChild(r),
                        r.getComponent(S).color = this.SecondSnake.getComponent(S).color,
                        r.setPosition(this.SectionLens[n][o], 0, 1)
                    }
                    this.SecondSnake.setScale(this.head.scale.x, this.head.scale.y, this.head.scale.z),
                    console.log("second snake children new node  : ", this.SecondSnake.children.length),
                    d(this.SecondSnake).to(5, {
                        position: new f(-592 - 7 * Number(!e),this.SecondSnake.position.y,1)
                    }).call((function() {
                        1 == i.Cnt && d(i.Question.getComponent(b)).to(.3, {
                            opacity: 255
                        }).start()
                    }
                    )).start()
                }
                ,
                r.addTouchEvent = function(t) {
                    t.on(l.EventType.TOUCH_START, this.OnTouchEnter, this)
                }
                ,
                r.OnTouchEnter = function(t) {
                    for (var e = this, n = 0; n < this.Optionsbtn.length; n++)
                        this.Optionsbtn[n].off(l.EventType.TOUCH_START, this.OnTouchEnter, this);
                    var i = t.target
                      , a = this.head.position.y;
                    i.children[0].getComponent(p).string == (this.SnakeLength * this.mulfac).toString() + this.GamePlayData[6] ? (this.rightans = !0,
                    i.getComponent(S).spriteFrame = this.BtnSprite[0],
                    this.SecondSnake.position.x < -500 && d(this.SecondSnake).to(3, {
                        position: new f(-1550,this.SecondSnake.position.y,1)
                    }).start(),
                    d(this.head).to(3, {
                        position: new f(-1550,a + 1,1)
                    }).call((function() {
                        e.LoadNextlevel()
                    }
                    )).start()) : (i.getComponent(S).spriteFrame = this.BtnSprite[1],
                    this.SecondSnake.position.x < -500 && d(this.SecondSnake).to(3, {
                        position: new f(-1550,this.SecondSnake.position.y,1)
                    }).start(),
                    d(this.head).to(3, {
                        position: new f(-1550,a + 1,1)
                    }).call((function() {
                        e.LoadNextlevel()
                    }
                    )).start())
                }
                ,
                r.LoadNextlevel = function() {
                    this.mulfac = 1,
                    this.Question.getComponent(b).opacity = 0;
                    for (var t = 0; t < this.Graphs.length; t++)
                        this.Graphs[t].active = !1;
                    for (t = 0; t < this.Optionsbtn.length; t++)
                        d(this.Optionsbtn[t]).to(.3, {
                            scale: new f(0,0,0)
                        }).start();
                    this.head.removeAllChildren(),
                    this.SecondSnake.removeAllChildren(),
                    console.log("second snake children after destroying : ", this.SecondSnake.children.length),
                    this.head.setPosition(1300, this.head.position.y, 1),
                    this.SecondSnake.setPosition(1300, this.SecondSnake.position.y, 1),
                    this.SnakeLength = 0,
                    this.GamePlayData = [],
                    this.Cnt < 10 ? (this.Cnt++,
                    this.rightans && (this.ScoreVal += D.BaseScore + Math.floor(D.MaxTimeForBonus - this.td) * D.MultiplicationFact),
                    this.Score.children[0].setScale(0, 0, 0),
                    d(this.Score.children[0]).to(.5, {
                        scale: new f(1.2,1.2,1.2)
                    }).to(.08, {
                        scale: new f(1,1,1)
                    }).start(),
                    this.Score.children[0].getComponent(p).string = this.ScoreVal.toString(),
                    this.rightans = !1,
                    this.LoadLevel()) : (this.rightans && (this.ScoreVal += D.BaseScore + Math.floor(D.MaxTimeForBonus - this.td) * D.MultiplicationFact),
                    this.Score.children[0].getComponent(p).string = this.ScoreVal.toString(),
                    this.Score.children[0].setScale(0, 0, 0),
                    d(this.Score.children[0]).to(.8, {
                        scale: new f(1.2,1.2,1.2)
                    }).to(.13, {
                        scale: new f(1,1,1)
                    }).start(),
                    this.Cnt = 1,
                    this.rightans = !1,
                    this.GameOverBG.active = !0,
                    this.GameOverBG.getChildByName("game_over").setScale(0, 0, 0),
                    this.GameOverBG.getChildByName("game_over").getChildByName("Score1").getComponent(p).string = this.ScoreVal.toString(),
                    d(this.GameOverBG.getChildByName("game_over")).to(.6, {
                        scale: new f(1.2,1.2,1.2)
                    }).to(.144, {
                        scale: new f(1,1,1)
                    }).to(.144, {
                        scale: new f(1.2,1.2,1.2)
                    }).to(.144, {
                        scale: new f(1,1,1)
                    }).start(),
                    "0" == G.localStorage.getItem("MSRScore") || G.localStorage.getItem("MSRScore") < this.ScoreVal.toString() ? (G.localStorage.setItem("MSRScore", this.ScoreVal.toString()),
                    this.GameOverBG.getChildByName("game_over").getChildByName("HighScore1").getComponent(p).string = this.ScoreVal.toString()) : G.localStorage.getItem("MSRScore") >= this.ScoreVal.toString() && (this.GameOverBG.getChildByName("game_over").getChildByName("HighScore1").getComponent(p).string = G.localStorage.getItem("MSRScore")),
                    null != window.Global && null != window.Global.role && ("teacher" == window.Global.role ? this.Assignbtn.active = !0 : "student" == window.Global.role && (4 == window.Global.assignnum ? (this.Challengebtn.active = !0,
                    window.Global.finalassign.score = this.ScoreVal) : 5 == window.Global.assignnum ? (window.Global.finalassign.score = this.ScoreVal,
                    this.Parsing.getComponent(O).StudentfinalassignChallengeCompleted(),
                    window.Global.GOassign.Score = this.ScoreVal,
                    window.Global.source = "challenge",
                    C.loadScene("TN_Gameover")) : 2 != window.Global.assignnum && 3 != window.Global.assignnum || (window.Global.source = "assignment",
                    window.Global.GOassign.Score = this.ScoreVal,
                    C.loadScene("TN_Gameover")))),
                    this.ScoreVal = 0,
                    this.head.active = !1)
                }
                ,
                r.UibuttonClick = function() {
                    this.UIbuttonClickSound && "true" == G.localStorage.getItem("MSRAudioOn") && this.AudioSourceObj.playOneShot(this.UIbuttonClickSound, .4)
                }
                ,
                r.update = function(t) {
                    this.td += t
                }
                ,
                e
            }(P)).prototype, "Graphpaper", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            rt = e(at.prototype, "Parsing", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            st = e(at.prototype, "PlayingBG", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            lt = e(at.prototype, "Score", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ct = e(at.prototype, "Roundno", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ht = e(at.prototype, "GameOverBG", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ut = e(at.prototype, "BackBtn", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            gt = e(at.prototype, "MainmenuBtn", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            pt = e(at.prototype, "Graphs", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            St = e(at.prototype, "RulersSprite", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            dt = e(at.prototype, "BtnSprite", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            mt = e(at.prototype, "Optionsbtn", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            bt = e(at.prototype, "SecondSnake", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ft = e(at.prototype, "Ruler", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            yt = e(at.prototype, "head", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Ct = e(at.prototype, "Challengebtn", [Q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            wt = e(at.prototype, "Assignbtn", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            vt = e(at.prototype, "Question", [q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Gt = e(at.prototype, "UIbuttonClickSound", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            kt = e(at.prototype, "PauseMenuNode", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            At = e(at.prototype, "Tutorial", [K], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Pt = e(at.prototype, "AnimNodes", [Y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            Dt = e(at.prototype, "Actionbutton", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            Ot = e(at.prototype, "Home", [$], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Mt = e(at.prototype, "control", [tt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            _t = e(at.prototype, "mask", [et], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            Bt = e(at.prototype, "Body", [nt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            it = at)) || it));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/MSRFood.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(o) {
    "use strict";
    var t, a, n, r, d, e, h, i, s;
    return {
        setters: [function(o) {
            t = o.inheritsLoose,
            a = o.defineProperty,
            n = o.assertThisInitialized
        }
        , function(o) {
            r = o.cclegacy,
            d = o._decorator,
            e = o.Sprite,
            h = o.Color,
            i = o.v3,
            s = o.Component
        }
        ],
        execute: function() {
            var u;
            r._RF.push({}, "a07adaClIVKfoPNq7lhmykQ", "MSRFood", void 0);
            var M = d.ccclass;
            o("MSRFood", M("MSRFood")(u = function(o) {
                function r() {
                    for (var t, r = arguments.length, d = new Array(r), e = 0; e < r; e++)
                        d[e] = arguments[e];
                    return t = o.call.apply(o, [this].concat(d)) || this,
                    a(n(t), "quadrant", void 0),
                    t
                }
                t(r, o);
                var d = r.prototype;
                return d.onLoad = function() {
                    this.node.getComponent(e).color = this.randomColor(),
                    this.node.setPosition(this.randomPos())
                }
                ,
                d.randomColor = function() {
                    var o = Math.round(255 * Math.random())
                      , t = Math.round(255 * Math.random())
                      , a = Math.round(255 * Math.random());
                    return new h(o,t,a)
                }
                ,
                d.randomPos = function() {
                    var o, t;
                    if (this.quadrant = Math.round(3 * Math.random()),
                    console.log("quad : " + this.quadrant),
                    4 == this.quadrant && (this.quadrant = 0),
                    0 == this.quadrant) {
                        o = -Math.round(620 * Math.random()),
                        t = Math.round(200 * Math.random())
                    } else if (1 == this.quadrant) {
                        o = Math.round(620 * Math.random()),
                        t = Math.floor(151 * Math.random()) + 50
                    } else if (2 == this.quadrant) {
                        o = -Math.round(620 * Math.random()),
                        t = -Math.round(170 * Math.random())
                    } else if (3 == this.quadrant) {
                        o = -Math.round(360 * Math.random()),
                        t = -Math.round(170 * Math.random())
                    }
                    return console.log("food pos : " + o, t),
                    i(o, t, 0)
                }
                ,
                r
            }(s)) || u);
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/MSRMain.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var e, i, n, o, r, l, u, a, c, s, d, p, S, b, g;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            n = t.initializerDefineProperty,
            o = t.assertThisInitialized,
            r = t.defineProperty
        }
        , function(t) {
            l = t.cclegacy,
            u = t._decorator,
            a = t.Node,
            c = t.AudioClip,
            s = t.SpriteFrame,
            d = t.AudioSource,
            p = t.sys,
            S = t.Sprite,
            b = t.director,
            g = t.Component
        }
        ],
        execute: function() {
            var h, f, m, y, A, M, C, R, _, k, I, O, P, w, v, B, z, U, G;
            l._RF.push({}, "d2cc6EnnrNOgbGRHyECESxw", "MSRMain", void 0);
            var F = u.ccclass
              , j = u.property;
            t("MSRMain", (h = F("MSRMain"),
            f = j(a),
            m = j(a),
            y = j(a),
            A = j(c),
            M = j(c),
            C = j(a),
            R = j(s),
            _ = j(c),
            h((O = e((I = function(t) {
                function e() {
                    for (var e, i = arguments.length, l = new Array(i), u = 0; u < i; u++)
                        l[u] = arguments[u];
                    return e = t.call.apply(t, [this].concat(l)) || this,
                    n(o(e), "Tutorial", O, o(e)),
                    n(o(e), "PlayingBG", P, o(e)),
                    n(o(e), "AnimNodes", w, o(e)),
                    n(o(e), "UIbuttonClickSound", v, o(e)),
                    r(o(e), "AudioSourceObj", null),
                    n(o(e), "sound_btn_click", B, o(e)),
                    r(o(e), "audioSource_", null),
                    r(o(e), "AudioWillPlay", !1),
                    n(o(e), "soundBtn", z, o(e)),
                    n(o(e), "sounds_Spr", U, o(e)),
                    n(o(e), "clickAudio", G, o(e)),
                    e
                }
                i(e, t);
                var l = e.prototype;
                return l.start = function() {
                    this.AudioSourceObj = this.node.getComponent(d),
                    null == p.localStorage.getItem("MSRAudioOn") && p.localStorage.setItem("MSRAudioOn", "true"),
                    "false" == p.localStorage.getItem("MSRAudioOn") && (this.soundBtn.getComponent(S).spriteFrame = this.sounds_Spr[1]),
                    "true" == p.localStorage.getItem("MSRAudioOn") && (this.AudioWillPlay = !0),
                    "1" == p.localStorage.getItem("MSRreplay") && (this.node.active = !1,
                    this.PlayingBG.active = !0,
                    p.localStorage.setItem("MSRreplay", "0"))
                }
                ,
                l.OnPlayBtnClick = function() {
                    this.UibuttonClick(),
                    this.node.active = !1,
                    this.PlayingBG.active = !0
                }
                ,
                l.onhomebutton = function() {
                    this.UibuttonClick(),
                    "teacher" == window.Global.role ? b.loadScene("HomePage") : b.loadScene("GameMenu")
                }
                ,
                l.audioStaus = function() {
                    this.UibuttonClick(),
                    "true" == p.localStorage.getItem("MSRAudioOn") ? (this.soundBtn.getComponent(S).spriteFrame = this.sounds_Spr[1],
                    p.localStorage.setItem("MSRAudioOn", "false"),
                    this.AudioWillPlay = !1) : (this.soundBtn.getComponent(S).spriteFrame = this.sounds_Spr[0],
                    p.localStorage.setItem("MSRAudioOn", "true"),
                    this.AudioWillPlay = !0)
                }
                ,
                l.UibuttonClick = function() {
                    this.UIbuttonClickSound && this.AudioSourceObj && this.AudioWillPlay && this.AudioSourceObj.playOneShot(this.UIbuttonClickSound, .4)
                }
                ,
                e
            }(g)).prototype, "Tutorial", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            P = e(I.prototype, "PlayingBG", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            w = e(I.prototype, "AnimNodes", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            v = e(I.prototype, "UIbuttonClickSound", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            B = e(I.prototype, "sound_btn_click", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            z = e(I.prototype, "soundBtn", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            U = e(I.prototype, "sounds_Spr", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            G = e(I.prototype, "clickAudio", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            k = I)) || k));
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/MSRHead.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./MSRControl.ts"], (function(t) {
    "use strict";
    var e, n, o, i, r, s, a, h, d, l, c, u, y, p, m, g, f, v;
    return {
        setters: [function(t) {
            e = t.defineProperty,
            n = t.applyDecoratedDescriptor,
            o = t.inheritsLoose,
            i = t.initializerDefineProperty,
            r = t.assertThisInitialized
        }
        , function(t) {
            s = t.cclegacy,
            a = t._decorator,
            h = t.Prefab,
            d = t.Node,
            l = t.Sprite,
            c = t.instantiate,
            u = t.Color,
            y = t.Vec3,
            p = t.v2,
            m = t.macro,
            g = t.UITransform,
            f = t.Component
        }
        , function(t) {
            v = t.MSRControl
        }
        ],
        execute: function() {
            var A, P, k, b, M, C, N, S, B, x, F;
            s._RF.push({}, "ecd70OTfjlCZauOM2TyUULf", "MSRHead", void 0);
            var I = a.ccclass
              , L = a.property;
            t("MSRHead", (A = I("MSRHead"),
            P = L(h),
            k = L(h),
            b = L(d),
            A((F = x = function(t) {
                function n() {
                    for (var n, o = arguments.length, s = new Array(o), a = 0; a < o; a++)
                        s[a] = arguments[a];
                    return n = t.call.apply(t, [this].concat(s)) || this,
                    i(r(n), "Body", N, r(n)),
                    i(r(n), "Food", S, r(n)),
                    e(r(n), "bodyNum", 1),
                    e(r(n), "sectionLen", 39.5),
                    e(r(n), "time", 13),
                    e(r(n), "timer", 0),
                    e(r(n), "VarSectionLen1", [33, 40, 41, 43, 41, 42, 41, 42.5, 41, 43, 41, 43, 40.5, 42.5, 41, 42.5, 41, 42.5, 41.5, 42.5, 41, 42.5, 41, 43, 41, 42, 41.5, 43, 41.5]),
                    e(r(n), "VarSectionLen2", [36.5, 35, 40, 41.5, 41, 42, 40, 42, 40.5, 42, 40, 41.5, 41, 41.5, 40.5, 42, 40.5, 41.5, 40.5, 42.5, 40, 41.5, 41]),
                    e(r(n), "snakeArray", []),
                    e(r(n), "dir", void 0),
                    e(r(n), "pointsArray", void 0),
                    e(r(n), "speed", void 0),
                    e(r(n), "headPointsNum", void 0),
                    e(r(n), "idx", 1),
                    e(r(n), "enableFood", !0),
                    i(r(n), "controlNode", B, r(n)),
                    n
                }
                o(n, t);
                var s = n.prototype;
                return s.start = function() {
                    this.snakeArray = [],
                    this.snakeArray.push(this.node),
                    this.node.getComponent(l).color = this.randomColor(),
                    this.node.setPosition(this.randomPos()),
                    this.rotateHead(this.node.position),
                    this.pointsArray = [],
                    this.speed = this.sectionLen / this.time;
                    for (var t = 1; t <= this.bodyNum; t++)
                        this.getNewBody();
                    this.dir = null,
                    this.headPointsNum = 0;
                    var e = c(this.Food);
                    this.node.parent.addChild(e)
                }
                ,
                s.onLoad = function() {}
                ,
                s.OnReplaybuttonclick = function() {
                    this.bodyNum = 1,
                    this.sectionLen = 39.5,
                    this.time = 13,
                    this.timer = 0,
                    n.Bodycnt = 0,
                    this.start(),
                    this.idx = 1,
                    this.enableFood = !0
                }
                ,
                s.randomColor = function() {
                    var t = Math.round(255 * Math.random())
                      , e = Math.round(255 * Math.random())
                      , n = Math.round(255 * Math.random());
                    return new u(t,e,n)
                }
                ,
                s.randomPos = function() {
                    var t = Math.round(800 * Math.random()) - 400
                      , e = Math.round(200 * Math.random() - 100) + 50;
                    return new y(t,e)
                }
                ,
                s.getNewBody = function() {
                    var t = c(this.Body);
                    if (this.node.parent.addChild(t),
                    this.snakeArray.length > this.bodyNum ? t.attr({
                        curIndex: this.snakeArray[this.snakeArray.length - 1].curIndex
                    }) : t.attr({
                        curIndex: 0
                    }),
                    1 == this.snakeArray.length) {
                        var e = this.node.getPosition().normalize();
                        e = e.multiplyScalar(34);
                        var o = this.node.getPosition().subtract(e);
                        t.setPosition(o)
                    } else {
                        var i = this.snakeArray[this.snakeArray.length - 1]
                          , r = this.snakeArray[this.snakeArray.length - 2].getPosition().subtract(i.getPosition()).normalize()
                          , s = i.getPosition().subtract(r.multiplyScalar(this.VarSectionLen1[this.idx] - 2));
                        t.setPosition(s)
                    }
                    t.getComponent(l).color = this.node.getComponent(l).color,
                    this.snakeArray.push(t),
                    this.recordPoints(),
                    this.changeZIndex(),
                    this.idx += 1,
                    n.Bodycnt += 1
                }
                ,
                s.rotateHead = function(t) {
                    var e = 180 * p(0, 1).signAngle(t) / Math.PI;
                    this.node.angle = e - 90
                }
                ,
                s.moveSnake = function() {
                    var t = this.dir.clone().multiplyScalar(this.speed);
                    this.node.setPosition(this.node.getPosition().add(t)),
                    this.pointsArray.push(this.node.getPosition().clone()),
                    this.headPointsNum += 1;
                    for (var e = 1; e < this.snakeArray.length; e++) {
                        var n = Math.floor((this.pointsArray.length - this.headPointsNum) / (this.snakeArray.length - 1) * (this.snakeArray.length - 1 - e)) + 5 * e
                          , o = this.pointsArray[n + this.snakeArray[e].curIndex];
                        this.snakeArray[e].setPosition(o),
                        this.snakeArray[e].curIndex += 1
                    }
                }
                ,
                s.recordPoints = function() {
                    for (var t = 0, e = 0; t < this.sectionLen; ) {
                        t += this.speed;
                        var n = this.snakeArray[this.snakeArray.length - 1]
                          , o = this.snakeArray[this.snakeArray.length - 2].getPosition().clone().subtract(n.getPosition().clone()).normalize()
                          , i = n.getPosition().clone().add(o.multiplyScalar(t).clone()).clone();
                        this.pointsArray.splice(e, 0, i),
                        e += 1
                    }
                }
                ,
                s.changeZIndex = function() {
                    for (var t = 0; t < this.snakeArray.length; t++)
                        this.snakeArray[t].setSiblingIndex(m.MAX_ZINDEX - t)
                }
                ,
                s.removeFood = function() {
                    var t = this;
                    this.node.parent.getChildByName("food").removeFromParent();
                    var e = c(this.Food);
                    this.node.parent.addChild(e),
                    this.getNewBody(),
                    this.scheduleOnce((function() {
                        t.enableFood = !0
                    }
                    ), .2)
                }
                ,
                s.update = function(t) {
                    this.controlNode.getComponent(v).enableGameOver || (this.dir && (this.rotateHead(this.dir),
                    this.moveSnake()),
                    this.node.parent.getChildByName("food") && this.node.getComponent(g).getBoundingBoxToWorld().intersects(this.node.parent.getChildByName("food").getComponent(g).getBoundingBoxToWorld()) && this.enableFood && (this.enableFood = !1,
                    this.removeFood()))
                }
                ,
                n
            }(f),
            e(x, "Ds", void 0),
            e(x, "Bodycnt", 0),
            N = n((C = F).prototype, "Body", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            S = n(C.prototype, "Food", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            B = n(C.prototype, "controlNode", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            M = C)) || M));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/main", ["./MSRHead.ts", "./MSRConstant.ts", "./MSRParsing.ts", "./MSRGameManager.ts", "./MSRControl.ts", "./MSRFood.ts", "./MSRMain.ts"], (function() {
    "use strict";
    return {
        setters: [null, null, null, null, null, null, null],
        execute: function() {}
    }
}
));

(function(r) {
    r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main');
}
)(function(mid, cid) {
    System.register(mid, [cid], function(_export, _context) {
        return {
            setters: [function(_m) {
                var _exportObj = {};

                for (var _key in _m) {
                    if (_key !== "default" && _key !== "__esModule")
                        _exportObj[_key] = _m[_key];
                }

                _export(_exportObj);
            }
            ],
            execute: function() {}
        };
    });
});
