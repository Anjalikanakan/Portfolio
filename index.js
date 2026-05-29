const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/resume-qEZWA6IW.js", "assets/marked.esm-CzZbzBai.js", "assets/_slug-BMCJBUUE.js"]))) => i.map(i => d[i]);
function rb(a, i) {
    for (var r = 0; r < i.length; r++) {
        const o = i[r];
        if (typeof o != "string" && !Array.isArray(o)) {
            for (const c in o)
                if (c !== "default" && !(c in a)) {
                    const f = Object.getOwnPropertyDescriptor(o, c);
                    f && Object.defineProperty(a, c, f.get ? f : {
                        enumerable: !0,
                        get: () => o[c]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, {
        value: "Module"
    }))
}
function ob(a) {
    return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a
}
var dc = {
    exports: {}
}
  , ki = {};
var ep;
function sb() {
    if (ep)
        return ki;
    ep = 1;
    var a = Symbol.for("react.transitional.element")
      , i = Symbol.for("react.fragment");
    function r(o, c, f) {
        var h = null;
        if (f !== void 0 && (h = "" + f),
        c.key !== void 0 && (h = "" + c.key),
        "key"in c) {
            f = {};
            for (var p in c)
                p !== "key" && (f[p] = c[p])
        } else
            f = c;
        return c = f.ref,
        {
            $$typeof: a,
            type: o,
            key: h,
            ref: c !== void 0 ? c : null,
            props: f
        }
    }
    return ki.Fragment = i,
    ki.jsx = r,
    ki.jsxs = r,
    ki
}
var np;
function ub() {
    return np || (np = 1,
    dc.exports = sb()),
    dc.exports
}
var N = ub()
  , hc = {
    exports: {}
}
  , mt = {};
var ap;
function cb() {
    if (ap)
        return mt;
    ap = 1;
    var a = Symbol.for("react.transitional.element")
      , i = Symbol.for("react.portal")
      , r = Symbol.for("react.fragment")
      , o = Symbol.for("react.strict_mode")
      , c = Symbol.for("react.profiler")
      , f = Symbol.for("react.consumer")
      , h = Symbol.for("react.context")
      , p = Symbol.for("react.forward_ref")
      , g = Symbol.for("react.suspense")
      , m = Symbol.for("react.memo")
      , b = Symbol.for("react.lazy")
      , y = Symbol.for("react.activity")
      , S = Symbol.iterator;
    function _(A) {
        return A === null || typeof A != "object" ? null : (A = S && A[S] || A["@@iterator"],
        typeof A == "function" ? A : null)
    }
    var w = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , C = Object.assign
      , E = {};
    function z(A, Y, F) {
        this.props = A,
        this.context = Y,
        this.refs = E,
        this.updater = F || w
    }
    z.prototype.isReactComponent = {},
    z.prototype.setState = function(A, Y) {
        if (typeof A != "object" && typeof A != "function" && A != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, A, Y, "setState")
    }
    ,
    z.prototype.forceUpdate = function(A) {
        this.updater.enqueueForceUpdate(this, A, "forceUpdate")
    }
    ;
    function V() {}
    V.prototype = z.prototype;
    function Q(A, Y, F) {
        this.props = A,
        this.context = Y,
        this.refs = E,
        this.updater = F || w
    }
    var k = Q.prototype = new V;
    k.constructor = Q,
    C(k, z.prototype),
    k.isPureReactComponent = !0;
    var W = Array.isArray;
    function P() {}
    var X = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , H = Object.prototype.hasOwnProperty;
    function J(A, Y, F) {
        var tt = F.ref;
        return {
            $$typeof: a,
            type: A,
            key: Y,
            ref: tt !== void 0 ? tt : null,
            props: F
        }
    }
    function ct(A, Y) {
        return J(A.type, Y, A.props)
    }
    function nt(A) {
        return typeof A == "object" && A !== null && A.$$typeof === a
    }
    function ht(A) {
        var Y = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + A.replace(/[=:]/g, function(F) {
            return Y[F]
        })
    }
    var vt = /\/+/g;
    function Ht(A, Y) {
        return typeof A == "object" && A !== null && A.key != null ? ht("" + A.key) : Y.toString(36)
    }
    function Rt(A) {
        switch (A.status) {
        case "fulfilled":
            return A.value;
        case "rejected":
            throw A.reason;
        default:
            switch (typeof A.status == "string" ? A.then(P, P) : (A.status = "pending",
            A.then(function(Y) {
                A.status === "pending" && (A.status = "fulfilled",
                A.value = Y)
            }, function(Y) {
                A.status === "pending" && (A.status = "rejected",
                A.reason = Y)
            })),
            A.status) {
            case "fulfilled":
                return A.value;
            case "rejected":
                throw A.reason
            }
        }
        throw A
    }
    function U(A, Y, F, tt, et) {
        var st = typeof A;
        (st === "undefined" || st === "boolean") && (A = null);
        var bt = !1;
        if (A === null)
            bt = !0;
        else
            switch (st) {
            case "bigint":
            case "string":
            case "number":
                bt = !0;
                break;
            case "object":
                switch (A.$$typeof) {
                case a:
                case i:
                    bt = !0;
                    break;
                case b:
                    return bt = A._init,
                    U(bt(A._payload), Y, F, tt, et)
                }
            }
        if (bt)
            return et = et(A),
            bt = tt === "" ? "." + Ht(A, 0) : tt,
            W(et) ? (F = "",
            bt != null && (F = bt.replace(vt, "$&/") + "/"),
            U(et, Y, F, "", function(ke) {
                return ke
            })) : et != null && (nt(et) && (et = ct(et, F + (et.key == null || A && A.key === et.key ? "" : ("" + et.key).replace(vt, "$&/") + "/") + bt)),
            Y.push(et)),
            1;
        bt = 0;
        var Yt = tt === "" ? "." : tt + ":";
        if (W(A))
            for (var dt = 0; dt < A.length; dt++)
                tt = A[dt],
                st = Yt + Ht(tt, dt),
                bt += U(tt, Y, F, st, et);
        else if (dt = _(A),
        typeof dt == "function")
            for (A = dt.call(A),
            dt = 0; !(tt = A.next()).done; )
                tt = tt.value,
                st = Yt + Ht(tt, dt++),
                bt += U(tt, Y, F, st, et);
        else if (st === "object") {
            if (typeof A.then == "function")
                return U(Rt(A), Y, F, tt, et);
            throw Y = String(A),
            Error("Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead.")
        }
        return bt
    }
    function K(A, Y, F) {
        if (A == null)
            return A;
        var tt = []
          , et = 0;
        return U(A, tt, "", "", function(st) {
            return Y.call(F, st, et++)
        }),
        tt
    }
    function ot(A) {
        if (A._status === -1) {
            var Y = A._result;
            Y = Y(),
            Y.then(function(F) {
                (A._status === 0 || A._status === -1) && (A._status = 1,
                A._result = F)
            }, function(F) {
                (A._status === 0 || A._status === -1) && (A._status = 2,
                A._result = F)
            }),
            A._status === -1 && (A._status = 0,
            A._result = Y)
        }
        if (A._status === 1)
            return A._result.default;
        throw A._result
    }
    var wt = typeof reportError == "function" ? reportError : function(A) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var Y = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A),
                error: A
            });
            if (!window.dispatchEvent(Y))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", A);
            return
        }
        console.error(A)
    }
      , I = {
        map: K,
        forEach: function(A, Y, F) {
            K(A, function() {
                Y.apply(this, arguments)
            }, F)
        },
        count: function(A) {
            var Y = 0;
            return K(A, function() {
                Y++
            }),
            Y
        },
        toArray: function(A) {
            return K(A, function(Y) {
                return Y
            }) || []
        },
        only: function(A) {
            if (!nt(A))
                throw Error("React.Children.only expected to receive a single React element child.");
            return A
        }
    };
    return mt.Activity = y,
    mt.Children = I,
    mt.Component = z,
    mt.Fragment = r,
    mt.Profiler = c,
    mt.PureComponent = Q,
    mt.StrictMode = o,
    mt.Suspense = g,
    mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X,
    mt.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(A) {
            return X.H.useMemoCache(A)
        }
    },
    mt.cache = function(A) {
        return function() {
            return A.apply(null, arguments)
        }
    }
    ,
    mt.cacheSignal = function() {
        return null
    }
    ,
    mt.cloneElement = function(A, Y, F) {
        if (A == null)
            throw Error("The argument must be a React element, but you passed " + A + ".");
        var tt = C({}, A.props)
          , et = A.key;
        if (Y != null)
            for (st in Y.key !== void 0 && (et = "" + Y.key),
            Y)
                !H.call(Y, st) || st === "key" || st === "__self" || st === "__source" || st === "ref" && Y.ref === void 0 || (tt[st] = Y[st]);
        var st = arguments.length - 2;
        if (st === 1)
            tt.children = F;
        else if (1 < st) {
            for (var bt = Array(st), Yt = 0; Yt < st; Yt++)
                bt[Yt] = arguments[Yt + 2];
            tt.children = bt
        }
        return J(A.type, et, tt)
    }
    ,
    mt.createContext = function(A) {
        return A = {
            $$typeof: h,
            _currentValue: A,
            _currentValue2: A,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        A.Provider = A,
        A.Consumer = {
            $$typeof: f,
            _context: A
        },
        A
    }
    ,
    mt.createElement = function(A, Y, F) {
        var tt, et = {}, st = null;
        if (Y != null)
            for (tt in Y.key !== void 0 && (st = "" + Y.key),
            Y)
                H.call(Y, tt) && tt !== "key" && tt !== "__self" && tt !== "__source" && (et[tt] = Y[tt]);
        var bt = arguments.length - 2;
        if (bt === 1)
            et.children = F;
        else if (1 < bt) {
            for (var Yt = Array(bt), dt = 0; dt < bt; dt++)
                Yt[dt] = arguments[dt + 2];
            et.children = Yt
        }
        if (A && A.defaultProps)
            for (tt in bt = A.defaultProps,
            bt)
                et[tt] === void 0 && (et[tt] = bt[tt]);
        return J(A, st, et)
    }
    ,
    mt.createRef = function() {
        return {
            current: null
        }
    }
    ,
    mt.forwardRef = function(A) {
        return {
            $$typeof: p,
            render: A
        }
    }
    ,
    mt.isValidElement = nt,
    mt.lazy = function(A) {
        return {
            $$typeof: b,
            _payload: {
                _status: -1,
                _result: A
            },
            _init: ot
        }
    }
    ,
    mt.memo = function(A, Y) {
        return {
            $$typeof: m,
            type: A,
            compare: Y === void 0 ? null : Y
        }
    }
    ,
    mt.startTransition = function(A) {
        var Y = X.T
          , F = {};
        X.T = F;
        try {
            var tt = A()
              , et = X.S;
            et !== null && et(F, tt),
            typeof tt == "object" && tt !== null && typeof tt.then == "function" && tt.then(P, wt)
        } catch (st) {
            wt(st)
        } finally {
            Y !== null && F.types !== null && (Y.types = F.types),
            X.T = Y
        }
    }
    ,
    mt.unstable_useCacheRefresh = function() {
        return X.H.useCacheRefresh()
    }
    ,
    mt.use = function(A) {
        return X.H.use(A)
    }
    ,
    mt.useActionState = function(A, Y, F) {
        return X.H.useActionState(A, Y, F)
    }
    ,
    mt.useCallback = function(A, Y) {
        return X.H.useCallback(A, Y)
    }
    ,
    mt.useContext = function(A) {
        return X.H.useContext(A)
    }
    ,
    mt.useDebugValue = function() {}
    ,
    mt.useDeferredValue = function(A, Y) {
        return X.H.useDeferredValue(A, Y)
    }
    ,
    mt.useEffect = function(A, Y) {
        return X.H.useEffect(A, Y)
    }
    ,
    mt.useEffectEvent = function(A) {
        return X.H.useEffectEvent(A)
    }
    ,
    mt.useId = function() {
        return X.H.useId()
    }
    ,
    mt.useImperativeHandle = function(A, Y, F) {
        return X.H.useImperativeHandle(A, Y, F)
    }
    ,
    mt.useInsertionEffect = function(A, Y) {
        return X.H.useInsertionEffect(A, Y)
    }
    ,
    mt.useLayoutEffect = function(A, Y) {
        return X.H.useLayoutEffect(A, Y)
    }
    ,
    mt.useMemo = function(A, Y) {
        return X.H.useMemo(A, Y)
    }
    ,
    mt.useOptimistic = function(A, Y) {
        return X.H.useOptimistic(A, Y)
    }
    ,
    mt.useReducer = function(A, Y, F) {
        return X.H.useReducer(A, Y, F)
    }
    ,
    mt.useRef = function(A) {
        return X.H.useRef(A)
    }
    ,
    mt.useState = function(A) {
        return X.H.useState(A)
    }
    ,
    mt.useSyncExternalStore = function(A, Y, F) {
        return X.H.useSyncExternalStore(A, Y, F)
    }
    ,
    mt.useTransition = function() {
        return X.H.useTransition()
    }
    ,
    mt.version = "19.2.6",
    mt
}
var lp;
function er() {
    return lp || (lp = 1,
    hc.exports = cb()),
    hc.exports
}
var $ = er();
const Yl = ob($)
  , fb = rb({
    __proto__: null,
    default: Yl
}, [$]);
var mc = {
    exports: {}
}
  , qi = {}
  , pc = {
    exports: {}
}
  , gc = {};
var ip;
function db() {
    return ip || (ip = 1,
    (function(a) {
        function i(U, K) {
            var ot = U.length;
            U.push(K);
            t: for (; 0 < ot; ) {
                var wt = ot - 1 >>> 1
                  , I = U[wt];
                if (0 < c(I, K))
                    U[wt] = K,
                    U[ot] = I,
                    ot = wt;
                else
                    break t
            }
        }
        function r(U) {
            return U.length === 0 ? null : U[0]
        }
        function o(U) {
            if (U.length === 0)
                return null;
            var K = U[0]
              , ot = U.pop();
            if (ot !== K) {
                U[0] = ot;
                t: for (var wt = 0, I = U.length, A = I >>> 1; wt < A; ) {
                    var Y = 2 * (wt + 1) - 1
                      , F = U[Y]
                      , tt = Y + 1
                      , et = U[tt];
                    if (0 > c(F, ot))
                        tt < I && 0 > c(et, F) ? (U[wt] = et,
                        U[tt] = ot,
                        wt = tt) : (U[wt] = F,
                        U[Y] = ot,
                        wt = Y);
                    else if (tt < I && 0 > c(et, ot))
                        U[wt] = et,
                        U[tt] = ot,
                        wt = tt;
                    else
                        break t
                }
            }
            return K
        }
        function c(U, K) {
            var ot = U.sortIndex - K.sortIndex;
            return ot !== 0 ? ot : U.id - K.id
        }
        if (a.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            a.unstable_now = function() {
                return f.now()
            }
        } else {
            var h = Date
              , p = h.now();
            a.unstable_now = function() {
                return h.now() - p
            }
        }
        var g = []
          , m = []
          , b = 1
          , y = null
          , S = 3
          , _ = !1
          , w = !1
          , C = !1
          , E = !1
          , z = typeof setTimeout == "function" ? setTimeout : null
          , V = typeof clearTimeout == "function" ? clearTimeout : null
          , Q = typeof setImmediate < "u" ? setImmediate : null;
        function k(U) {
            for (var K = r(m); K !== null; ) {
                if (K.callback === null)
                    o(m);
                else if (K.startTime <= U)
                    o(m),
                    K.sortIndex = K.expirationTime,
                    i(g, K);
                else
                    break;
                K = r(m)
            }
        }
        function W(U) {
            if (C = !1,
            k(U),
            !w)
                if (r(g) !== null)
                    w = !0,
                    P || (P = !0,
                    ht());
                else {
                    var K = r(m);
                    K !== null && Rt(W, K.startTime - U)
                }
        }
        var P = !1
          , X = -1
          , H = 5
          , J = -1;
        function ct() {
            return E ? !0 : !(a.unstable_now() - J < H)
        }
        function nt() {
            if (E = !1,
            P) {
                var U = a.unstable_now();
                J = U;
                var K = !0;
                try {
                    t: {
                        w = !1,
                        C && (C = !1,
                        V(X),
                        X = -1),
                        _ = !0;
                        var ot = S;
                        try {
                            e: {
                                for (k(U),
                                y = r(g); y !== null && !(y.expirationTime > U && ct()); ) {
                                    var wt = y.callback;
                                    if (typeof wt == "function") {
                                        y.callback = null,
                                        S = y.priorityLevel;
                                        var I = wt(y.expirationTime <= U);
                                        if (U = a.unstable_now(),
                                        typeof I == "function") {
                                            y.callback = I,
                                            k(U),
                                            K = !0;
                                            break e
                                        }
                                        y === r(g) && o(g),
                                        k(U)
                                    } else
                                        o(g);
                                    y = r(g)
                                }
                                if (y !== null)
                                    K = !0;
                                else {
                                    var A = r(m);
                                    A !== null && Rt(W, A.startTime - U),
                                    K = !1
                                }
                            }
                            break t
                        } finally {
                            y = null,
                            S = ot,
                            _ = !1
                        }
                        K = void 0
                    }
                } finally {
                    K ? ht() : P = !1
                }
            }
        }
        var ht;
        if (typeof Q == "function")
            ht = function() {
                Q(nt)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var vt = new MessageChannel
              , Ht = vt.port2;
            vt.port1.onmessage = nt,
            ht = function() {
                Ht.postMessage(null)
            }
        } else
            ht = function() {
                z(nt, 0)
            }
            ;
        function Rt(U, K) {
            X = z(function() {
                U(a.unstable_now())
            }, K)
        }
        a.unstable_IdlePriority = 5,
        a.unstable_ImmediatePriority = 1,
        a.unstable_LowPriority = 4,
        a.unstable_NormalPriority = 3,
        a.unstable_Profiling = null,
        a.unstable_UserBlockingPriority = 2,
        a.unstable_cancelCallback = function(U) {
            U.callback = null
        }
        ,
        a.unstable_forceFrameRate = function(U) {
            0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < U ? Math.floor(1e3 / U) : 5
        }
        ,
        a.unstable_getCurrentPriorityLevel = function() {
            return S
        }
        ,
        a.unstable_next = function(U) {
            switch (S) {
            case 1:
            case 2:
            case 3:
                var K = 3;
                break;
            default:
                K = S
            }
            var ot = S;
            S = K;
            try {
                return U()
            } finally {
                S = ot
            }
        }
        ,
        a.unstable_requestPaint = function() {
            E = !0
        }
        ,
        a.unstable_runWithPriority = function(U, K) {
            switch (U) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                U = 3
            }
            var ot = S;
            S = U;
            try {
                return K()
            } finally {
                S = ot
            }
        }
        ,
        a.unstable_scheduleCallback = function(U, K, ot) {
            var wt = a.unstable_now();
            switch (typeof ot == "object" && ot !== null ? (ot = ot.delay,
            ot = typeof ot == "number" && 0 < ot ? wt + ot : wt) : ot = wt,
            U) {
            case 1:
                var I = -1;
                break;
            case 2:
                I = 250;
                break;
            case 5:
                I = 1073741823;
                break;
            case 4:
                I = 1e4;
                break;
            default:
                I = 5e3
            }
            return I = ot + I,
            U = {
                id: b++,
                callback: K,
                priorityLevel: U,
                startTime: ot,
                expirationTime: I,
                sortIndex: -1
            },
            ot > wt ? (U.sortIndex = ot,
            i(m, U),
            r(g) === null && U === r(m) && (C ? (V(X),
            X = -1) : C = !0,
            Rt(W, ot - wt))) : (U.sortIndex = I,
            i(g, U),
            w || _ || (w = !0,
            P || (P = !0,
            ht()))),
            U
        }
        ,
        a.unstable_shouldYield = ct,
        a.unstable_wrapCallback = function(U) {
            var K = S;
            return function() {
                var ot = S;
                S = K;
                try {
                    return U.apply(this, arguments)
                } finally {
                    S = ot
                }
            }
        }
    }
    )(gc)),
    gc
}
var rp;
function hb() {
    return rp || (rp = 1,
    pc.exports = db()),
    pc.exports
}
var yc = {
    exports: {}
}
  , me = {};
var op;
function mb() {
    if (op)
        return me;
    op = 1;
    var a = er();
    function i(g) {
        var m = "https://react.dev/errors/" + g;
        if (1 < arguments.length) {
            m += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var b = 2; b < arguments.length; b++)
                m += "&args[]=" + encodeURIComponent(arguments[b])
        }
        return "Minified React error #" + g + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function r() {}
    var o = {
        d: {
            f: r,
            r: function() {
                throw Error(i(522))
            },
            D: r,
            C: r,
            L: r,
            m: r,
            X: r,
            S: r,
            M: r
        },
        p: 0,
        findDOMNode: null
    }
      , c = Symbol.for("react.portal");
    function f(g, m, b) {
        var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: c,
            key: y == null ? null : "" + y,
            children: g,
            containerInfo: m,
            implementation: b
        }
    }
    var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function p(g, m) {
        if (g === "font")
            return "";
        if (typeof m == "string")
            return m === "use-credentials" ? m : ""
    }
    return me.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o,
    me.createPortal = function(g, m) {
        var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
            throw Error(i(299));
        return f(g, m, null, b)
    }
    ,
    me.flushSync = function(g) {
        var m = h.T
          , b = o.p;
        try {
            if (h.T = null,
            o.p = 2,
            g)
                return g()
        } finally {
            h.T = m,
            o.p = b,
            o.d.f()
        }
    }
    ,
    me.preconnect = function(g, m) {
        typeof g == "string" && (m ? (m = m.crossOrigin,
        m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null,
        o.d.C(g, m))
    }
    ,
    me.prefetchDNS = function(g) {
        typeof g == "string" && o.d.D(g)
    }
    ,
    me.preinit = function(g, m) {
        if (typeof g == "string" && m && typeof m.as == "string") {
            var b = m.as
              , y = p(b, m.crossOrigin)
              , S = typeof m.integrity == "string" ? m.integrity : void 0
              , _ = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
            b === "style" ? o.d.S(g, typeof m.precedence == "string" ? m.precedence : void 0, {
                crossOrigin: y,
                integrity: S,
                fetchPriority: _
            }) : b === "script" && o.d.X(g, {
                crossOrigin: y,
                integrity: S,
                fetchPriority: _,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0
            })
        }
    }
    ,
    me.preinitModule = function(g, m) {
        if (typeof g == "string")
            if (typeof m == "object" && m !== null) {
                if (m.as == null || m.as === "script") {
                    var b = p(m.as, m.crossOrigin);
                    o.d.M(g, {
                        crossOrigin: b,
                        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                        nonce: typeof m.nonce == "string" ? m.nonce : void 0
                    })
                }
            } else
                m == null && o.d.M(g)
    }
    ,
    me.preload = function(g, m) {
        if (typeof g == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
            var b = m.as
              , y = p(b, m.crossOrigin);
            o.d.L(g, b, {
                crossOrigin: y,
                integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                type: typeof m.type == "string" ? m.type : void 0,
                fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
                referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
                imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
                imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
                media: typeof m.media == "string" ? m.media : void 0
            })
        }
    }
    ,
    me.preloadModule = function(g, m) {
        if (typeof g == "string")
            if (m) {
                var b = p(m.as, m.crossOrigin);
                o.d.m(g, {
                    as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
                    crossOrigin: b,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0
                })
            } else
                o.d.m(g)
    }
    ,
    me.requestFormReset = function(g) {
        o.d.r(g)
    }
    ,
    me.unstable_batchedUpdates = function(g, m) {
        return g(m)
    }
    ,
    me.useFormState = function(g, m, b) {
        return h.H.useFormState(g, m, b)
    }
    ,
    me.useFormStatus = function() {
        return h.H.useHostTransitionStatus()
    }
    ,
    me.version = "19.2.6",
    me
}
var sp;
function ug() {
    if (sp)
        return yc.exports;
    sp = 1;
    function a() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
            } catch (i) {
                console.error(i)
            }
    }
    return a(),
    yc.exports = mb(),
    yc.exports
}
var up;
function pb() {
    if (up)
        return qi;
    up = 1;
    var a = hb()
      , i = er()
      , r = ug();
    function o(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                e += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function c(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function f(t) {
        var e = t
          , n = t;
        if (t.alternate)
            for (; e.return; )
                e = e.return;
        else {
            t = e;
            do
                e = t,
                (e.flags & 4098) !== 0 && (n = e.return),
                t = e.return;
            while (t)
        }
        return e.tag === 3 ? n : null
    }
    function h(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function p(t) {
        if (t.tag === 31) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function g(t) {
        if (f(t) !== t)
            throw Error(o(188))
    }
    function m(t) {
        var e = t.alternate;
        if (!e) {
            if (e = f(t),
            e === null)
                throw Error(o(188));
            return e !== t ? null : t
        }
        for (var n = t, l = e; ; ) {
            var s = n.return;
            if (s === null)
                break;
            var u = s.alternate;
            if (u === null) {
                if (l = s.return,
                l !== null) {
                    n = l;
                    continue
                }
                break
            }
            if (s.child === u.child) {
                for (u = s.child; u; ) {
                    if (u === n)
                        return g(s),
                        t;
                    if (u === l)
                        return g(s),
                        e;
                    u = u.sibling
                }
                throw Error(o(188))
            }
            if (n.return !== l.return)
                n = s,
                l = u;
            else {
                for (var d = !1, v = s.child; v; ) {
                    if (v === n) {
                        d = !0,
                        n = s,
                        l = u;
                        break
                    }
                    if (v === l) {
                        d = !0,
                        l = s,
                        n = u;
                        break
                    }
                    v = v.sibling
                }
                if (!d) {
                    for (v = u.child; v; ) {
                        if (v === n) {
                            d = !0,
                            n = u,
                            l = s;
                            break
                        }
                        if (v === l) {
                            d = !0,
                            l = u,
                            n = s;
                            break
                        }
                        v = v.sibling
                    }
                    if (!d)
                        throw Error(o(189))
                }
            }
            if (n.alternate !== l)
                throw Error(o(190))
        }
        if (n.tag !== 3)
            throw Error(o(188));
        return n.stateNode.current === n ? t : e
    }
    function b(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t;
        for (t = t.child; t !== null; ) {
            if (e = b(t),
            e !== null)
                return e;
            t = t.sibling
        }
        return null
    }
    var y = Object.assign
      , S = Symbol.for("react.element")
      , _ = Symbol.for("react.transitional.element")
      , w = Symbol.for("react.portal")
      , C = Symbol.for("react.fragment")
      , E = Symbol.for("react.strict_mode")
      , z = Symbol.for("react.profiler")
      , V = Symbol.for("react.consumer")
      , Q = Symbol.for("react.context")
      , k = Symbol.for("react.forward_ref")
      , W = Symbol.for("react.suspense")
      , P = Symbol.for("react.suspense_list")
      , X = Symbol.for("react.memo")
      , H = Symbol.for("react.lazy")
      , J = Symbol.for("react.activity")
      , ct = Symbol.for("react.memo_cache_sentinel")
      , nt = Symbol.iterator;
    function ht(t) {
        return t === null || typeof t != "object" ? null : (t = nt && t[nt] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var vt = Symbol.for("react.client.reference");
    function Ht(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.$$typeof === vt ? null : t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case C:
            return "Fragment";
        case z:
            return "Profiler";
        case E:
            return "StrictMode";
        case W:
            return "Suspense";
        case P:
            return "SuspenseList";
        case J:
            return "Activity"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case w:
                return "Portal";
            case Q:
                return t.displayName || "Context";
            case V:
                return (t._context.displayName || "Context") + ".Consumer";
            case k:
                var e = t.render;
                return t = t.displayName,
                t || (t = e.displayName || e.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case X:
                return e = t.displayName || null,
                e !== null ? e : Ht(t.type) || "Memo";
            case H:
                e = t._payload,
                t = t._init;
                try {
                    return Ht(t(e))
                } catch {}
            }
        return null
    }
    var Rt = Array.isArray
      , U = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , K = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , ot = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , wt = []
      , I = -1;
    function A(t) {
        return {
            current: t
        }
    }
    function Y(t) {
        0 > I || (t.current = wt[I],
        wt[I] = null,
        I--)
    }
    function F(t, e) {
        I++,
        wt[I] = t.current,
        t.current = e
    }
    var tt = A(null)
      , et = A(null)
      , st = A(null)
      , bt = A(null);
    function Yt(t, e) {
        switch (F(st, e),
        F(et, t),
        F(tt, null),
        e.nodeType) {
        case 9:
        case 11:
            t = (t = e.documentElement) && (t = t.namespaceURI) ? Rm(t) : 0;
            break;
        default:
            if (t = e.tagName,
            e = e.namespaceURI)
                e = Rm(e),
                t = wm(e, t);
            else
                switch (t) {
                case "svg":
                    t = 1;
                    break;
                case "math":
                    t = 2;
                    break;
                default:
                    t = 0
                }
        }
        Y(tt),
        F(tt, t)
    }
    function dt() {
        Y(tt),
        Y(et),
        Y(st)
    }
    function ke(t) {
        t.memoizedState !== null && F(bt, t);
        var e = tt.current
          , n = wm(e, t.type);
        e !== n && (F(et, t),
        F(tt, n))
    }
    function ve(t) {
        et.current === t && (Y(tt),
        Y(et)),
        bt.current === t && (Y(bt),
        Li._currentValue = ot)
    }
    var ze, sn;
    function ge(t) {
        if (ze === void 0)
            try {
                throw Error()
            } catch (n) {
                var e = n.stack.trim().match(/\n( *(at )?)/);
                ze = e && e[1] || "",
                sn = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + ze + t + sn
    }
    var Ql = !1;
    function Fa(t, e) {
        if (!t || Ql)
            return "";
        Ql = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var Z = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(Z.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(Z, [])
                                } catch (B) {
                                    var L = B
                                }
                                Reflect.construct(t, [], Z)
                            } else {
                                try {
                                    Z.call()
                                } catch (B) {
                                    L = B
                                }
                                t.call(Z.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (B) {
                                L = B
                            }
                            (Z = t()) && typeof Z.catch == "function" && Z.catch(function() {})
                        }
                    } catch (B) {
                        if (B && L && typeof B.stack == "string")
                            return [B.stack, L.stack]
                    }
                    return [null, null]
                }
            };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var s = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            s && s.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = l.DetermineComponentFrameRoot()
              , d = u[0]
              , v = u[1];
            if (d && v) {
                var R = d.split(`
`)
                  , D = v.split(`
`);
                for (s = l = 0; l < R.length && !R[l].includes("DetermineComponentFrameRoot"); )
                    l++;
                for (; s < D.length && !D[s].includes("DetermineComponentFrameRoot"); )
                    s++;
                if (l === R.length || s === D.length)
                    for (l = R.length - 1,
                    s = D.length - 1; 1 <= l && 0 <= s && R[l] !== D[s]; )
                        s--;
                for (; 1 <= l && 0 <= s; l--,
                s--)
                    if (R[l] !== D[s]) {
                        if (l !== 1 || s !== 1)
                            do
                                if (l--,
                                s--,
                                0 > s || R[l] !== D[s]) {
                                    var q = `
` + R[l].replace(" at new ", " at ");
                                    return t.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", t.displayName)),
                                    q
                                }
                            while (1 <= l && 0 <= s);
                        break
                    }
            }
        } finally {
            Ql = !1,
            Error.prepareStackTrace = n
        }
        return (n = t ? t.displayName || t.name : "") ? ge(n) : ""
    }
    function rr(t, e) {
        switch (t.tag) {
        case 26:
        case 27:
        case 5:
            return ge(t.type);
        case 16:
            return ge("Lazy");
        case 13:
            return t.child !== e && e !== null ? ge("Suspense Fallback") : ge("Suspense");
        case 19:
            return ge("SuspenseList");
        case 0:
        case 15:
            return Fa(t.type, !1);
        case 11:
            return Fa(t.type.render, !1);
        case 1:
            return Fa(t.type, !0);
        case 31:
            return ge("Activity");
        default:
            return ""
        }
    }
    function un(t) {
        try {
            var e = ""
              , n = null;
            do
                e += rr(t, n),
                n = t,
                t = t.return;
            while (t);
            return e
        } catch (l) {
            return `
Error generating stack: ` + l.message + `
` + l.stack
        }
    }
    var ba = Object.prototype.hasOwnProperty
      , Fe = a.unstable_scheduleCallback
      , Zl = a.unstable_cancelCallback
      , or = a.unstable_shouldYield
      , Wo = a.unstable_requestPaint
      , he = a.unstable_now
      , kt = a.unstable_getCurrentPriorityLevel
      , oe = a.unstable_ImmediatePriority
      , tn = a.unstable_UserBlockingPriority
      , Ia = a.unstable_NormalPriority
      , Gy = a.unstable_LowPriority
      , af = a.unstable_IdlePriority
      , Yy = a.log
      , Vy = a.unstable_setDisableYieldValue
      , Kl = null
      , Ce = null;
    function Ln(t) {
        if (typeof Yy == "function" && Vy(t),
        Ce && typeof Ce.setStrictMode == "function")
            try {
                Ce.setStrictMode(Kl, t)
            } catch {}
    }
    var Oe = Math.clz32 ? Math.clz32 : Zy
      , Xy = Math.log
      , Qy = Math.LN2;
    function Zy(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - (Xy(t) / Qy | 0) | 0
    }
    var sr = 256
      , ur = 262144
      , cr = 4194304;
    function Sa(t) {
        var e = t & 42;
        if (e !== 0)
            return e;
        switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return t & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return t
        }
    }
    function fr(t, e, n) {
        var l = t.pendingLanes;
        if (l === 0)
            return 0;
        var s = 0
          , u = t.suspendedLanes
          , d = t.pingedLanes;
        t = t.warmLanes;
        var v = l & 134217727;
        return v !== 0 ? (l = v & ~u,
        l !== 0 ? s = Sa(l) : (d &= v,
        d !== 0 ? s = Sa(d) : n || (n = v & ~t,
        n !== 0 && (s = Sa(n))))) : (v = l & ~u,
        v !== 0 ? s = Sa(v) : d !== 0 ? s = Sa(d) : n || (n = l & ~t,
        n !== 0 && (s = Sa(n)))),
        s === 0 ? 0 : e !== 0 && e !== s && (e & u) === 0 && (u = s & -s,
        n = e & -e,
        u >= n || u === 32 && (n & 4194048) !== 0) ? e : s
    }
    function Jl(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }
    function Ky(t, e) {
        switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return e + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function lf() {
        var t = cr;
        return cr <<= 1,
        (cr & 62914560) === 0 && (cr = 4194304),
        t
    }
    function ts(t) {
        for (var e = [], n = 0; 31 > n; n++)
            e.push(t);
        return e
    }
    function Pl(t, e) {
        t.pendingLanes |= e,
        e !== 268435456 && (t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0)
    }
    function Jy(t, e, n, l, s, u) {
        var d = t.pendingLanes;
        t.pendingLanes = n,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0,
        t.expiredLanes &= n,
        t.entangledLanes &= n,
        t.errorRecoveryDisabledLanes &= n,
        t.shellSuspendCounter = 0;
        var v = t.entanglements
          , R = t.expirationTimes
          , D = t.hiddenUpdates;
        for (n = d & ~n; 0 < n; ) {
            var q = 31 - Oe(n)
              , Z = 1 << q;
            v[q] = 0,
            R[q] = -1;
            var L = D[q];
            if (L !== null)
                for (D[q] = null,
                q = 0; q < L.length; q++) {
                    var B = L[q];
                    B !== null && (B.lane &= -536870913)
                }
            n &= ~Z
        }
        l !== 0 && rf(t, l, 0),
        u !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(d & ~e))
    }
    function rf(t, e, n) {
        t.pendingLanes |= e,
        t.suspendedLanes &= ~e;
        var l = 31 - Oe(e);
        t.entangledLanes |= e,
        t.entanglements[l] = t.entanglements[l] | 1073741824 | n & 261930
    }
    function of(t, e) {
        var n = t.entangledLanes |= e;
        for (t = t.entanglements; n; ) {
            var l = 31 - Oe(n)
              , s = 1 << l;
            s & e | t[l] & e && (t[l] |= e),
            n &= ~s
        }
    }
    function sf(t, e) {
        var n = e & -e;
        return n = (n & 42) !== 0 ? 1 : es(n),
        (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    }
    function es(t) {
        switch (t) {
        case 2:
            t = 1;
            break;
        case 8:
            t = 4;
            break;
        case 32:
            t = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            t = 128;
            break;
        case 268435456:
            t = 134217728;
            break;
        default:
            t = 0
        }
        return t
    }
    function ns(t) {
        return t &= -t,
        2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function uf() {
        var t = K.p;
        return t !== 0 ? t : (t = window.event,
        t === void 0 ? 32 : Jm(t.type))
    }
    function cf(t, e) {
        var n = K.p;
        try {
            return K.p = t,
            e()
        } finally {
            K.p = n
        }
    }
    var Un = Math.random().toString(36).slice(2)
      , se = "__reactFiber$" + Un
      , be = "__reactProps$" + Un
      , $a = "__reactContainer$" + Un
      , as = "__reactEvents$" + Un
      , Py = "__reactListeners$" + Un
      , Fy = "__reactHandles$" + Un
      , ff = "__reactResources$" + Un
      , Fl = "__reactMarker$" + Un;
    function ls(t) {
        delete t[se],
        delete t[be],
        delete t[as],
        delete t[Py],
        delete t[Fy]
    }
    function Wa(t) {
        var e = t[se];
        if (e)
            return e;
        for (var n = t.parentNode; n; ) {
            if (e = n[$a] || n[se]) {
                if (n = e.alternate,
                e.child !== null || n !== null && n.child !== null)
                    for (t = Nm(t); t !== null; ) {
                        if (n = t[se])
                            return n;
                        t = Nm(t)
                    }
                return e
            }
            t = n,
            n = t.parentNode
        }
        return null
    }
    function tl(t) {
        if (t = t[se] || t[$a]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
                return t
        }
        return null
    }
    function Il(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t.stateNode;
        throw Error(o(33))
    }
    function el(t) {
        var e = t[ff];
        return e || (e = t[ff] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        e
    }
    function le(t) {
        t[Fl] = !0
    }
    var df = new Set
      , hf = {};
    function xa(t, e) {
        nl(t, e),
        nl(t + "Capture", e)
    }
    function nl(t, e) {
        for (hf[t] = e,
        t = 0; t < e.length; t++)
            df.add(e[t])
    }
    var Iy = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , mf = {}
      , pf = {};
    function $y(t) {
        return ba.call(pf, t) ? !0 : ba.call(mf, t) ? !1 : Iy.test(t) ? pf[t] = !0 : (mf[t] = !0,
        !1)
    }
    function dr(t, e, n) {
        if ($y(e))
            if (n === null)
                t.removeAttribute(e);
            else {
                switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                    t.removeAttribute(e);
                    return;
                case "boolean":
                    var l = e.toLowerCase().slice(0, 5);
                    if (l !== "data-" && l !== "aria-") {
                        t.removeAttribute(e);
                        return
                    }
                }
                t.setAttribute(e, "" + n)
            }
    }
    function hr(t, e, n) {
        if (n === null)
            t.removeAttribute(e);
        else {
            switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(e);
                return
            }
            t.setAttribute(e, "" + n)
        }
    }
    function cn(t, e, n, l) {
        if (l === null)
            t.removeAttribute(n);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(n);
                return
            }
            t.setAttributeNS(e, n, "" + l)
        }
    }
    function qe(t) {
        switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function gf(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }
    function Wy(t, e, n) {
        var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
        if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
            var s = l.get
              , u = l.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return s.call(this)
                },
                set: function(d) {
                    n = "" + d,
                    u.call(this, d)
                }
            }),
            Object.defineProperty(t, e, {
                enumerable: l.enumerable
            }),
            {
                getValue: function() {
                    return n
                },
                setValue: function(d) {
                    n = "" + d
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[e]
                }
            }
        }
    }
    function is(t) {
        if (!t._valueTracker) {
            var e = gf(t) ? "checked" : "value";
            t._valueTracker = Wy(t, e, "" + t[e])
        }
    }
    function yf(t) {
        if (!t)
            return !1;
        var e = t._valueTracker;
        if (!e)
            return !0;
        var n = e.getValue()
          , l = "";
        return t && (l = gf(t) ? t.checked ? "true" : "false" : t.value),
        t = l,
        t !== n ? (e.setValue(t),
        !0) : !1
    }
    function mr(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var tv = /[\n"\\]/g;
    function Ge(t) {
        return t.replace(tv, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }
    function rs(t, e, n, l, s, u, d, v) {
        t.name = "",
        d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? t.type = d : t.removeAttribute("type"),
        e != null ? d === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + qe(e)) : t.value !== "" + qe(e) && (t.value = "" + qe(e)) : d !== "submit" && d !== "reset" || t.removeAttribute("value"),
        e != null ? os(t, d, qe(e)) : n != null ? os(t, d, qe(n)) : l != null && t.removeAttribute("value"),
        s == null && u != null && (t.defaultChecked = !!u),
        s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"),
        v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.name = "" + qe(v) : t.removeAttribute("name")
    }
    function vf(t, e, n, l, s, u, d, v) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u),
        e != null || n != null) {
            if (!(u !== "submit" && u !== "reset" || e != null)) {
                is(t);
                return
            }
            n = n != null ? "" + qe(n) : "",
            e = e != null ? "" + qe(e) : n,
            v || e === t.value || (t.value = e),
            t.defaultValue = e
        }
        l = l ?? s,
        l = typeof l != "function" && typeof l != "symbol" && !!l,
        t.checked = v ? t.checked : !!l,
        t.defaultChecked = !!l,
        d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (t.name = d),
        is(t)
    }
    function os(t, e, n) {
        e === "number" && mr(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n)
    }
    function al(t, e, n, l) {
        if (t = t.options,
        e) {
            e = {};
            for (var s = 0; s < n.length; s++)
                e["$" + n[s]] = !0;
            for (n = 0; n < t.length; n++)
                s = e.hasOwnProperty("$" + t[n].value),
                t[n].selected !== s && (t[n].selected = s),
                s && l && (t[n].defaultSelected = !0)
        } else {
            for (n = "" + qe(n),
            e = null,
            s = 0; s < t.length; s++) {
                if (t[s].value === n) {
                    t[s].selected = !0,
                    l && (t[s].defaultSelected = !0);
                    return
                }
                e !== null || t[s].disabled || (e = t[s])
            }
            e !== null && (e.selected = !0)
        }
    }
    function bf(t, e, n) {
        if (e != null && (e = "" + qe(e),
        e !== t.value && (t.value = e),
        n == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = n != null ? "" + qe(n) : ""
    }
    function Sf(t, e, n, l) {
        if (e == null) {
            if (l != null) {
                if (n != null)
                    throw Error(o(92));
                if (Rt(l)) {
                    if (1 < l.length)
                        throw Error(o(93));
                    l = l[0]
                }
                n = l
            }
            n == null && (n = ""),
            e = n
        }
        n = qe(e),
        t.defaultValue = n,
        l = t.textContent,
        l === n && l !== "" && l !== null && (t.value = l),
        is(t)
    }
    function ll(t, e) {
        if (e) {
            var n = t.firstChild;
            if (n && n === t.lastChild && n.nodeType === 3) {
                n.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var ev = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function xf(t, e, n) {
        var l = e.indexOf("--") === 0;
        n == null || typeof n == "boolean" || n === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, n) : typeof n != "number" || n === 0 || ev.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px"
    }
    function _f(t, e, n) {
        if (e != null && typeof e != "object")
            throw Error(o(62));
        if (t = t.style,
        n != null) {
            for (var l in n)
                !n.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
            for (var s in e)
                l = e[s],
                e.hasOwnProperty(s) && n[s] !== l && xf(t, s, l)
        } else
            for (var u in e)
                e.hasOwnProperty(u) && xf(t, u, e[u])
    }
    function ss(t) {
        if (t.indexOf("-") === -1)
            return !1;
        switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var nv = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , av = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function pr(t) {
        return av.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    function fn() {}
    var us = null;
    function cs(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var il = null
      , rl = null;
    function Ef(t) {
        var e = tl(t);
        if (e && (t = e.stateNode)) {
            var n = t[be] || null;
            t: switch (t = e.stateNode,
            e.type) {
            case "input":
                if (rs(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                e = n.name,
                n.type === "radio" && e != null) {
                    for (n = t; n.parentNode; )
                        n = n.parentNode;
                    for (n = n.querySelectorAll('input[name="' + Ge("" + e) + '"][type="radio"]'),
                    e = 0; e < n.length; e++) {
                        var l = n[e];
                        if (l !== t && l.form === t.form) {
                            var s = l[be] || null;
                            if (!s)
                                throw Error(o(90));
                            rs(l, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name)
                        }
                    }
                    for (e = 0; e < n.length; e++)
                        l = n[e],
                        l.form === t.form && yf(l)
                }
                break t;
            case "textarea":
                bf(t, n.value, n.defaultValue);
                break t;
            case "select":
                e = n.value,
                e != null && al(t, !!n.multiple, e, !1)
            }
        }
    }
    var fs = !1;
    function Rf(t, e, n) {
        if (fs)
            return t(e, n);
        fs = !0;
        try {
            var l = t(e);
            return l
        } finally {
            if (fs = !1,
            (il !== null || rl !== null) && (no(),
            il && (e = il,
            t = rl,
            rl = il = null,
            Ef(e),
            t)))
                for (e = 0; e < t.length; e++)
                    Ef(t[e])
        }
    }
    function $l(t, e) {
        var n = t.stateNode;
        if (n === null)
            return null;
        var l = n[be] || null;
        if (l === null)
            return null;
        n = l[e];
        t: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (l = !l.disabled) || (t = t.type,
            l = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !l;
            break t;
        default:
            t = !1
        }
        if (t)
            return null;
        if (n && typeof n != "function")
            throw Error(o(231, e, typeof n));
        return n
    }
    var dn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , ds = !1;
    if (dn)
        try {
            var Wl = {};
            Object.defineProperty(Wl, "passive", {
                get: function() {
                    ds = !0
                }
            }),
            window.addEventListener("test", Wl, Wl),
            window.removeEventListener("test", Wl, Wl)
        } catch {
            ds = !1
        }
    var Bn = null
      , hs = null
      , gr = null;
    function wf() {
        if (gr)
            return gr;
        var t, e = hs, n = e.length, l, s = "value"in Bn ? Bn.value : Bn.textContent, u = s.length;
        for (t = 0; t < n && e[t] === s[t]; t++)
            ;
        var d = n - t;
        for (l = 1; l <= d && e[n - l] === s[u - l]; l++)
            ;
        return gr = s.slice(t, 1 < l ? 1 - l : void 0)
    }
    function yr(t) {
        var e = t.keyCode;
        return "charCode"in t ? (t = t.charCode,
        t === 0 && e === 13 && (t = 13)) : t = e,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function vr() {
        return !0
    }
    function Tf() {
        return !1
    }
    function Se(t) {
        function e(n, l, s, u, d) {
            this._reactName = n,
            this._targetInst = s,
            this.type = l,
            this.nativeEvent = u,
            this.target = d,
            this.currentTarget = null;
            for (var v in t)
                t.hasOwnProperty(v) && (n = t[v],
                this[v] = n ? n(u) : u[v]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? vr : Tf,
            this.isPropagationStopped = Tf,
            this
        }
        return y(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = vr)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = vr)
            },
            persist: function() {},
            isPersistent: vr
        }),
        e
    }
    var _a = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, br = Se(_a), ti = y({}, _a, {
        view: 0,
        detail: 0
    }), lv = Se(ti), ms, ps, ei, Sr = y({}, ti, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ys,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX"in t ? t.movementX : (t !== ei && (ei && t.type === "mousemove" ? (ms = t.screenX - ei.screenX,
            ps = t.screenY - ei.screenY) : ps = ms = 0,
            ei = t),
            ms)
        },
        movementY: function(t) {
            return "movementY"in t ? t.movementY : ps
        }
    }), Af = Se(Sr), iv = y({}, Sr, {
        dataTransfer: 0
    }), rv = Se(iv), ov = y({}, ti, {
        relatedTarget: 0
    }), gs = Se(ov), sv = y({}, _a, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), uv = Se(sv), cv = y({}, _a, {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    }), fv = Se(cv), dv = y({}, _a, {
        data: 0
    }), Mf = Se(dv), hv = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, mv = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, pv = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function gv(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = pv[t]) ? !!e[t] : !1
    }
    function ys() {
        return gv
    }
    var yv = y({}, ti, {
        key: function(t) {
            if (t.key) {
                var e = hv[t.key] || t.key;
                if (e !== "Unidentified")
                    return e
            }
            return t.type === "keypress" ? (t = yr(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? mv[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ys,
        charCode: function(t) {
            return t.type === "keypress" ? yr(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? yr(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , vv = Se(yv)
      , bv = y({}, Sr, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , zf = Se(bv)
      , Sv = y({}, ti, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ys
    })
      , xv = Se(Sv)
      , _v = y({}, _a, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Ev = Se(_v)
      , Rv = y({}, Sr, {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , wv = Se(Rv)
      , Tv = y({}, _a, {
        newState: 0,
        oldState: 0
    })
      , Av = Se(Tv)
      , Mv = [9, 13, 27, 32]
      , vs = dn && "CompositionEvent"in window
      , ni = null;
    dn && "documentMode"in document && (ni = document.documentMode);
    var zv = dn && "TextEvent"in window && !ni
      , Cf = dn && (!vs || ni && 8 < ni && 11 >= ni)
      , Of = " "
      , Nf = !1;
    function jf(t, e) {
        switch (t) {
        case "keyup":
            return Mv.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Df(t) {
        return t = t.detail,
        typeof t == "object" && "data"in t ? t.data : null
    }
    var ol = !1;
    function Cv(t, e) {
        switch (t) {
        case "compositionend":
            return Df(e);
        case "keypress":
            return e.which !== 32 ? null : (Nf = !0,
            Of);
        case "textInput":
            return t = e.data,
            t === Of && Nf ? null : t;
        default:
            return null
        }
    }
    function Ov(t, e) {
        if (ol)
            return t === "compositionend" || !vs && jf(t, e) ? (t = wf(),
            gr = hs = Bn = null,
            ol = !1,
            t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length)
                    return e.char;
                if (e.which)
                    return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return Cf && e.locale !== "ko" ? null : e.data;
        default:
            return null
        }
    }
    var Nv = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Lf(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!Nv[t.type] : e === "textarea"
    }
    function Uf(t, e, n, l) {
        il ? rl ? rl.push(l) : rl = [l] : il = l,
        e = uo(e, "onChange"),
        0 < e.length && (n = new br("onChange","change",null,n,l),
        t.push({
            event: n,
            listeners: e
        }))
    }
    var ai = null
      , li = null;
    function jv(t) {
        vm(t, 0)
    }
    function xr(t) {
        var e = Il(t);
        if (yf(e))
            return t
    }
    function Bf(t, e) {
        if (t === "change")
            return e
    }
    var Hf = !1;
    if (dn) {
        var bs;
        if (dn) {
            var Ss = "oninput"in document;
            if (!Ss) {
                var kf = document.createElement("div");
                kf.setAttribute("oninput", "return;"),
                Ss = typeof kf.oninput == "function"
            }
            bs = Ss
        } else
            bs = !1;
        Hf = bs && (!document.documentMode || 9 < document.documentMode)
    }
    function qf() {
        ai && (ai.detachEvent("onpropertychange", Gf),
        li = ai = null)
    }
    function Gf(t) {
        if (t.propertyName === "value" && xr(li)) {
            var e = [];
            Uf(e, li, t, cs(t)),
            Rf(jv, e)
        }
    }
    function Dv(t, e, n) {
        t === "focusin" ? (qf(),
        ai = e,
        li = n,
        ai.attachEvent("onpropertychange", Gf)) : t === "focusout" && qf()
    }
    function Lv(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return xr(li)
    }
    function Uv(t, e) {
        if (t === "click")
            return xr(e)
    }
    function Bv(t, e) {
        if (t === "input" || t === "change")
            return xr(e)
    }
    function Hv(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var Ne = typeof Object.is == "function" ? Object.is : Hv;
    function ii(t, e) {
        if (Ne(t, e))
            return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null)
            return !1;
        var n = Object.keys(t)
          , l = Object.keys(e);
        if (n.length !== l.length)
            return !1;
        for (l = 0; l < n.length; l++) {
            var s = n[l];
            if (!ba.call(e, s) || !Ne(t[s], e[s]))
                return !1
        }
        return !0
    }
    function Yf(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function Vf(t, e) {
        var n = Yf(t);
        t = 0;
        for (var l; n; ) {
            if (n.nodeType === 3) {
                if (l = t + n.textContent.length,
                t <= e && l >= e)
                    return {
                        node: n,
                        offset: e - t
                    };
                t = l
            }
            t: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break t
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = Yf(n)
        }
    }
    function Xf(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Xf(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }
    function Qf(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = mr(t.document); e instanceof t.HTMLIFrameElement; ) {
            try {
                var n = typeof e.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n)
                t = e.contentWindow;
            else
                break;
            e = mr(t.document)
        }
        return e
    }
    function xs(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }
    var kv = dn && "documentMode"in document && 11 >= document.documentMode
      , sl = null
      , _s = null
      , ri = null
      , Es = !1;
    function Zf(t, e, n) {
        var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Es || sl == null || sl !== mr(l) || (l = sl,
        "selectionStart"in l && xs(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
        l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }),
        ri && ii(ri, l) || (ri = l,
        l = uo(_s, "onSelect"),
        0 < l.length && (e = new br("onSelect","select",null,e,n),
        t.push({
            event: e,
            listeners: l
        }),
        e.target = sl)))
    }
    function Ea(t, e) {
        var n = {};
        return n[t.toLowerCase()] = e.toLowerCase(),
        n["Webkit" + t] = "webkit" + e,
        n["Moz" + t] = "moz" + e,
        n
    }
    var ul = {
        animationend: Ea("Animation", "AnimationEnd"),
        animationiteration: Ea("Animation", "AnimationIteration"),
        animationstart: Ea("Animation", "AnimationStart"),
        transitionrun: Ea("Transition", "TransitionRun"),
        transitionstart: Ea("Transition", "TransitionStart"),
        transitioncancel: Ea("Transition", "TransitionCancel"),
        transitionend: Ea("Transition", "TransitionEnd")
    }
      , Rs = {}
      , Kf = {};
    dn && (Kf = document.createElement("div").style,
    "AnimationEvent"in window || (delete ul.animationend.animation,
    delete ul.animationiteration.animation,
    delete ul.animationstart.animation),
    "TransitionEvent"in window || delete ul.transitionend.transition);
    function Ra(t) {
        if (Rs[t])
            return Rs[t];
        if (!ul[t])
            return t;
        var e = ul[t], n;
        for (n in e)
            if (e.hasOwnProperty(n) && n in Kf)
                return Rs[t] = e[n];
        return t
    }
    var Jf = Ra("animationend")
      , Pf = Ra("animationiteration")
      , Ff = Ra("animationstart")
      , qv = Ra("transitionrun")
      , Gv = Ra("transitionstart")
      , Yv = Ra("transitioncancel")
      , If = Ra("transitionend")
      , $f = new Map
      , ws = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    ws.push("scrollEnd");
    function Ie(t, e) {
        $f.set(t, e),
        xa(e, [t])
    }
    var _r = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(e))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    }
      , Ye = []
      , cl = 0
      , Ts = 0;
    function Er() {
        for (var t = cl, e = Ts = cl = 0; e < t; ) {
            var n = Ye[e];
            Ye[e++] = null;
            var l = Ye[e];
            Ye[e++] = null;
            var s = Ye[e];
            Ye[e++] = null;
            var u = Ye[e];
            if (Ye[e++] = null,
            l !== null && s !== null) {
                var d = l.pending;
                d === null ? s.next = s : (s.next = d.next,
                d.next = s),
                l.pending = s
            }
            u !== 0 && Wf(n, s, u)
        }
    }
    function Rr(t, e, n, l) {
        Ye[cl++] = t,
        Ye[cl++] = e,
        Ye[cl++] = n,
        Ye[cl++] = l,
        Ts |= l,
        t.lanes |= l,
        t = t.alternate,
        t !== null && (t.lanes |= l)
    }
    function As(t, e, n, l) {
        return Rr(t, e, n, l),
        wr(t)
    }
    function wa(t, e) {
        return Rr(t, null, null, e),
        wr(t)
    }
    function Wf(t, e, n) {
        t.lanes |= n;
        var l = t.alternate;
        l !== null && (l.lanes |= n);
        for (var s = !1, u = t.return; u !== null; )
            u.childLanes |= n,
            l = u.alternate,
            l !== null && (l.childLanes |= n),
            u.tag === 22 && (t = u.stateNode,
            t === null || t._visibility & 1 || (s = !0)),
            t = u,
            u = u.return;
        return t.tag === 3 ? (u = t.stateNode,
        s && e !== null && (s = 31 - Oe(n),
        t = u.hiddenUpdates,
        l = t[s],
        l === null ? t[s] = [e] : l.push(e),
        e.lane = n | 536870912),
        u) : null
    }
    function wr(t) {
        if (50 < Mi)
            throw Mi = 0,
            Uu = null,
            Error(o(185));
        for (var e = t.return; e !== null; )
            t = e,
            e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var fl = {};
    function Vv(t, e, n, l) {
        this.tag = t,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = e,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = l,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function je(t, e, n, l) {
        return new Vv(t,e,n,l)
    }
    function Ms(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function hn(t, e) {
        var n = t.alternate;
        return n === null ? (n = je(t.tag, e, t.key, t.mode),
        n.elementType = t.elementType,
        n.type = t.type,
        n.stateNode = t.stateNode,
        n.alternate = t,
        t.alternate = n) : (n.pendingProps = e,
        n.type = t.type,
        n.flags = 0,
        n.subtreeFlags = 0,
        n.deletions = null),
        n.flags = t.flags & 65011712,
        n.childLanes = t.childLanes,
        n.lanes = t.lanes,
        n.child = t.child,
        n.memoizedProps = t.memoizedProps,
        n.memoizedState = t.memoizedState,
        n.updateQueue = t.updateQueue,
        e = t.dependencies,
        n.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        },
        n.sibling = t.sibling,
        n.index = t.index,
        n.ref = t.ref,
        n.refCleanup = t.refCleanup,
        n
    }
    function td(t, e) {
        t.flags &= 65011714;
        var n = t.alternate;
        return n === null ? (t.childLanes = 0,
        t.lanes = e,
        t.child = null,
        t.subtreeFlags = 0,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.updateQueue = null,
        t.dependencies = null,
        t.stateNode = null) : (t.childLanes = n.childLanes,
        t.lanes = n.lanes,
        t.child = n.child,
        t.subtreeFlags = 0,
        t.deletions = null,
        t.memoizedProps = n.memoizedProps,
        t.memoizedState = n.memoizedState,
        t.updateQueue = n.updateQueue,
        t.type = n.type,
        e = n.dependencies,
        t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }),
        t
    }
    function Tr(t, e, n, l, s, u) {
        var d = 0;
        if (l = t,
        typeof t == "function")
            Ms(t) && (d = 1);
        else if (typeof t == "string")
            d = J0(t, n, tt.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else
            t: switch (t) {
            case J:
                return t = je(31, n, e, s),
                t.elementType = J,
                t.lanes = u,
                t;
            case C:
                return Ta(n.children, s, u, e);
            case E:
                d = 8,
                s |= 24;
                break;
            case z:
                return t = je(12, n, e, s | 2),
                t.elementType = z,
                t.lanes = u,
                t;
            case W:
                return t = je(13, n, e, s),
                t.elementType = W,
                t.lanes = u,
                t;
            case P:
                return t = je(19, n, e, s),
                t.elementType = P,
                t.lanes = u,
                t;
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case Q:
                        d = 10;
                        break t;
                    case V:
                        d = 9;
                        break t;
                    case k:
                        d = 11;
                        break t;
                    case X:
                        d = 14;
                        break t;
                    case H:
                        d = 16,
                        l = null;
                        break t
                    }
                d = 29,
                n = Error(o(130, t === null ? "null" : typeof t, "")),
                l = null
            }
        return e = je(d, n, e, s),
        e.elementType = t,
        e.type = l,
        e.lanes = u,
        e
    }
    function Ta(t, e, n, l) {
        return t = je(7, t, l, e),
        t.lanes = n,
        t
    }
    function zs(t, e, n) {
        return t = je(6, t, null, e),
        t.lanes = n,
        t
    }
    function ed(t) {
        var e = je(18, null, null, 0);
        return e.stateNode = t,
        e
    }
    function Cs(t, e, n) {
        return e = je(4, t.children !== null ? t.children : [], t.key, e),
        e.lanes = n,
        e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        e
    }
    var nd = new WeakMap;
    function Ve(t, e) {
        if (typeof t == "object" && t !== null) {
            var n = nd.get(t);
            return n !== void 0 ? n : (e = {
                value: t,
                source: e,
                stack: un(e)
            },
            nd.set(t, e),
            e)
        }
        return {
            value: t,
            source: e,
            stack: un(e)
        }
    }
    var dl = []
      , hl = 0
      , Ar = null
      , oi = 0
      , Xe = []
      , Qe = 0
      , Hn = null
      , en = 1
      , nn = "";
    function mn(t, e) {
        dl[hl++] = oi,
        dl[hl++] = Ar,
        Ar = t,
        oi = e
    }
    function ad(t, e, n) {
        Xe[Qe++] = en,
        Xe[Qe++] = nn,
        Xe[Qe++] = Hn,
        Hn = t;
        var l = en;
        t = nn;
        var s = 32 - Oe(l) - 1;
        l &= ~(1 << s),
        n += 1;
        var u = 32 - Oe(e) + s;
        if (30 < u) {
            var d = s - s % 5;
            u = (l & (1 << d) - 1).toString(32),
            l >>= d,
            s -= d,
            en = 1 << 32 - Oe(e) + s | n << s | l,
            nn = u + t
        } else
            en = 1 << u | n << s | l,
            nn = t
    }
    function Os(t) {
        t.return !== null && (mn(t, 1),
        ad(t, 1, 0))
    }
    function Ns(t) {
        for (; t === Ar; )
            Ar = dl[--hl],
            dl[hl] = null,
            oi = dl[--hl],
            dl[hl] = null;
        for (; t === Hn; )
            Hn = Xe[--Qe],
            Xe[Qe] = null,
            nn = Xe[--Qe],
            Xe[Qe] = null,
            en = Xe[--Qe],
            Xe[Qe] = null
    }
    function ld(t, e) {
        Xe[Qe++] = en,
        Xe[Qe++] = nn,
        Xe[Qe++] = Hn,
        en = e.id,
        nn = e.overflow,
        Hn = t
    }
    var ue = null
      , qt = null
      , Tt = !1
      , kn = null
      , Ze = !1
      , js = Error(o(519));
    function qn(t) {
        var e = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw si(Ve(e, t)),
        js
    }
    function id(t) {
        var e = t.stateNode
          , n = t.type
          , l = t.memoizedProps;
        switch (e[se] = t,
        e[be] = l,
        n) {
        case "dialog":
            xt("cancel", e),
            xt("close", e);
            break;
        case "iframe":
        case "object":
        case "embed":
            xt("load", e);
            break;
        case "video":
        case "audio":
            for (n = 0; n < Ci.length; n++)
                xt(Ci[n], e);
            break;
        case "source":
            xt("error", e);
            break;
        case "img":
        case "image":
        case "link":
            xt("error", e),
            xt("load", e);
            break;
        case "details":
            xt("toggle", e);
            break;
        case "input":
            xt("invalid", e),
            vf(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0);
            break;
        case "select":
            xt("invalid", e);
            break;
        case "textarea":
            xt("invalid", e),
            Sf(e, l.value, l.defaultValue, l.children)
        }
        n = l.children,
        typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || l.suppressHydrationWarning === !0 || _m(e.textContent, n) ? (l.popover != null && (xt("beforetoggle", e),
        xt("toggle", e)),
        l.onScroll != null && xt("scroll", e),
        l.onScrollEnd != null && xt("scrollend", e),
        l.onClick != null && (e.onclick = fn),
        e = !0) : e = !1,
        e || qn(t, !0)
    }
    function rd(t) {
        for (ue = t.return; ue; )
            switch (ue.tag) {
            case 5:
            case 31:
            case 13:
                Ze = !1;
                return;
            case 27:
            case 3:
                Ze = !0;
                return;
            default:
                ue = ue.return
            }
    }
    function ml(t) {
        if (t !== ue)
            return !1;
        if (!Tt)
            return rd(t),
            Tt = !0,
            !1;
        var e = t.tag, n;
        if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type,
        n = !(n !== "form" && n !== "button") || Iu(t.type, t.memoizedProps)),
        n = !n),
        n && qt && qn(t),
        rd(t),
        e === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(o(317));
            qt = Om(t)
        } else if (e === 31) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(o(317));
            qt = Om(t)
        } else
            e === 27 ? (e = qt,
            ta(t.type) ? (t = nc,
            nc = null,
            qt = t) : qt = e) : qt = ue ? Je(t.stateNode.nextSibling) : null;
        return !0
    }
    function Aa() {
        qt = ue = null,
        Tt = !1
    }
    function Ds() {
        var t = kn;
        return t !== null && (Re === null ? Re = t : Re.push.apply(Re, t),
        kn = null),
        t
    }
    function si(t) {
        kn === null ? kn = [t] : kn.push(t)
    }
    var Ls = A(null)
      , Ma = null
      , pn = null;
    function Gn(t, e, n) {
        F(Ls, e._currentValue),
        e._currentValue = n
    }
    function gn(t) {
        t._currentValue = Ls.current,
        Y(Ls)
    }
    function Us(t, e, n) {
        for (; t !== null; ) {
            var l = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e,
            l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
            t === n)
                break;
            t = t.return
        }
    }
    function Bs(t, e, n, l) {
        var s = t.child;
        for (s !== null && (s.return = t); s !== null; ) {
            var u = s.dependencies;
            if (u !== null) {
                var d = s.child;
                u = u.firstContext;
                t: for (; u !== null; ) {
                    var v = u;
                    u = s;
                    for (var R = 0; R < e.length; R++)
                        if (v.context === e[R]) {
                            u.lanes |= n,
                            v = u.alternate,
                            v !== null && (v.lanes |= n),
                            Us(u.return, n, t),
                            l || (d = null);
                            break t
                        }
                    u = v.next
                }
            } else if (s.tag === 18) {
                if (d = s.return,
                d === null)
                    throw Error(o(341));
                d.lanes |= n,
                u = d.alternate,
                u !== null && (u.lanes |= n),
                Us(d, n, t),
                d = null
            } else
                d = s.child;
            if (d !== null)
                d.return = s;
            else
                for (d = s; d !== null; ) {
                    if (d === t) {
                        d = null;
                        break
                    }
                    if (s = d.sibling,
                    s !== null) {
                        s.return = d.return,
                        d = s;
                        break
                    }
                    d = d.return
                }
            s = d
        }
    }
    function pl(t, e, n, l) {
        t = null;
        for (var s = e, u = !1; s !== null; ) {
            if (!u) {
                if ((s.flags & 524288) !== 0)
                    u = !0;
                else if ((s.flags & 262144) !== 0)
                    break
            }
            if (s.tag === 10) {
                var d = s.alternate;
                if (d === null)
                    throw Error(o(387));
                if (d = d.memoizedProps,
                d !== null) {
                    var v = s.type;
                    Ne(s.pendingProps.value, d.value) || (t !== null ? t.push(v) : t = [v])
                }
            } else if (s === bt.current) {
                if (d = s.alternate,
                d === null)
                    throw Error(o(387));
                d.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(Li) : t = [Li])
            }
            s = s.return
        }
        t !== null && Bs(e, t, n, l),
        e.flags |= 262144
    }
    function Mr(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!Ne(t.context._currentValue, t.memoizedValue))
                return !0;
            t = t.next
        }
        return !1
    }
    function za(t) {
        Ma = t,
        pn = null,
        t = t.dependencies,
        t !== null && (t.firstContext = null)
    }
    function ce(t) {
        return od(Ma, t)
    }
    function zr(t, e) {
        return Ma === null && za(t),
        od(t, e)
    }
    function od(t, e) {
        var n = e._currentValue;
        if (e = {
            context: e,
            memoizedValue: n,
            next: null
        },
        pn === null) {
            if (t === null)
                throw Error(o(308));
            pn = e,
            t.dependencies = {
                lanes: 0,
                firstContext: e
            },
            t.flags |= 524288
        } else
            pn = pn.next = e;
        return n
    }
    var Xv = typeof AbortController < "u" ? AbortController : function() {
        var t = []
          , e = this.signal = {
            aborted: !1,
            addEventListener: function(n, l) {
                t.push(l)
            }
        };
        this.abort = function() {
            e.aborted = !0,
            t.forEach(function(n) {
                return n()
            })
        }
    }
      , Qv = a.unstable_scheduleCallback
      , Zv = a.unstable_NormalPriority
      , Pt = {
        $$typeof: Q,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Hs() {
        return {
            controller: new Xv,
            data: new Map,
            refCount: 0
        }
    }
    function ui(t) {
        t.refCount--,
        t.refCount === 0 && Qv(Zv, function() {
            t.controller.abort()
        })
    }
    var ci = null
      , ks = 0
      , gl = 0
      , yl = null;
    function Kv(t, e) {
        if (ci === null) {
            var n = ci = [];
            ks = 0,
            gl = Yu(),
            yl = {
                status: "pending",
                value: void 0,
                then: function(l) {
                    n.push(l)
                }
            }
        }
        return ks++,
        e.then(sd, sd),
        e
    }
    function sd() {
        if (--ks === 0 && ci !== null) {
            yl !== null && (yl.status = "fulfilled");
            var t = ci;
            ci = null,
            gl = 0,
            yl = null;
            for (var e = 0; e < t.length; e++)
                (0,
                t[e])()
        }
    }
    function Jv(t, e) {
        var n = []
          , l = {
            status: "pending",
            value: null,
            reason: null,
            then: function(s) {
                n.push(s)
            }
        };
        return t.then(function() {
            l.status = "fulfilled",
            l.value = e;
            for (var s = 0; s < n.length; s++)
                (0,
                n[s])(e)
        }, function(s) {
            for (l.status = "rejected",
            l.reason = s,
            s = 0; s < n.length; s++)
                (0,
                n[s])(void 0)
        }),
        l
    }
    var ud = U.S;
    U.S = function(t, e) {
        Zh = he(),
        typeof e == "object" && e !== null && typeof e.then == "function" && Kv(t, e),
        ud !== null && ud(t, e)
    }
    ;
    var Ca = A(null);
    function qs() {
        var t = Ca.current;
        return t !== null ? t : Ut.pooledCache
    }
    function Cr(t, e) {
        e === null ? F(Ca, Ca.current) : F(Ca, e.pool)
    }
    function cd() {
        var t = qs();
        return t === null ? null : {
            parent: Pt._currentValue,
            pool: t
        }
    }
    var vl = Error(o(460))
      , Gs = Error(o(474))
      , Or = Error(o(542))
      , Nr = {
        then: function() {}
    };
    function fd(t) {
        return t = t.status,
        t === "fulfilled" || t === "rejected"
    }
    function dd(t, e, n) {
        switch (n = t[n],
        n === void 0 ? t.push(e) : n !== e && (e.then(fn, fn),
        e = n),
        e.status) {
        case "fulfilled":
            return e.value;
        case "rejected":
            throw t = e.reason,
            md(t),
            t;
        default:
            if (typeof e.status == "string")
                e.then(fn, fn);
            else {
                if (t = Ut,
                t !== null && 100 < t.shellSuspendCounter)
                    throw Error(o(482));
                t = e,
                t.status = "pending",
                t.then(function(l) {
                    if (e.status === "pending") {
                        var s = e;
                        s.status = "fulfilled",
                        s.value = l
                    }
                }, function(l) {
                    if (e.status === "pending") {
                        var s = e;
                        s.status = "rejected",
                        s.reason = l
                    }
                })
            }
            switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason,
                md(t),
                t
            }
            throw Na = e,
            vl
        }
    }
    function Oa(t) {
        try {
            var e = t._init;
            return e(t._payload)
        } catch (n) {
            throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Na = n,
            vl) : n
        }
    }
    var Na = null;
    function hd() {
        if (Na === null)
            throw Error(o(459));
        var t = Na;
        return Na = null,
        t
    }
    function md(t) {
        if (t === vl || t === Or)
            throw Error(o(483))
    }
    var bl = null
      , fi = 0;
    function jr(t) {
        var e = fi;
        return fi += 1,
        bl === null && (bl = []),
        dd(bl, t, e)
    }
    function di(t, e) {
        e = e.props.ref,
        t.ref = e !== void 0 ? e : null
    }
    function Dr(t, e) {
        throw e.$$typeof === S ? Error(o(525)) : (t = Object.prototype.toString.call(e),
        Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }
    function pd(t) {
        function e(O, M) {
            if (t) {
                var j = O.deletions;
                j === null ? (O.deletions = [M],
                O.flags |= 16) : j.push(M)
            }
        }
        function n(O, M) {
            if (!t)
                return null;
            for (; M !== null; )
                e(O, M),
                M = M.sibling;
            return null
        }
        function l(O) {
            for (var M = new Map; O !== null; )
                O.key !== null ? M.set(O.key, O) : M.set(O.index, O),
                O = O.sibling;
            return M
        }
        function s(O, M) {
            return O = hn(O, M),
            O.index = 0,
            O.sibling = null,
            O
        }
        function u(O, M, j) {
            return O.index = j,
            t ? (j = O.alternate,
            j !== null ? (j = j.index,
            j < M ? (O.flags |= 67108866,
            M) : j) : (O.flags |= 67108866,
            M)) : (O.flags |= 1048576,
            M)
        }
        function d(O) {
            return t && O.alternate === null && (O.flags |= 67108866),
            O
        }
        function v(O, M, j, G) {
            return M === null || M.tag !== 6 ? (M = zs(j, O.mode, G),
            M.return = O,
            M) : (M = s(M, j),
            M.return = O,
            M)
        }
        function R(O, M, j, G) {
            var ut = j.type;
            return ut === C ? q(O, M, j.props.children, G, j.key) : M !== null && (M.elementType === ut || typeof ut == "object" && ut !== null && ut.$$typeof === H && Oa(ut) === M.type) ? (M = s(M, j.props),
            di(M, j),
            M.return = O,
            M) : (M = Tr(j.type, j.key, j.props, null, O.mode, G),
            di(M, j),
            M.return = O,
            M)
        }
        function D(O, M, j, G) {
            return M === null || M.tag !== 4 || M.stateNode.containerInfo !== j.containerInfo || M.stateNode.implementation !== j.implementation ? (M = Cs(j, O.mode, G),
            M.return = O,
            M) : (M = s(M, j.children || []),
            M.return = O,
            M)
        }
        function q(O, M, j, G, ut) {
            return M === null || M.tag !== 7 ? (M = Ta(j, O.mode, G, ut),
            M.return = O,
            M) : (M = s(M, j),
            M.return = O,
            M)
        }
        function Z(O, M, j) {
            if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
                return M = zs("" + M, O.mode, j),
                M.return = O,
                M;
            if (typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                case _:
                    return j = Tr(M.type, M.key, M.props, null, O.mode, j),
                    di(j, M),
                    j.return = O,
                    j;
                case w:
                    return M = Cs(M, O.mode, j),
                    M.return = O,
                    M;
                case H:
                    return M = Oa(M),
                    Z(O, M, j)
                }
                if (Rt(M) || ht(M))
                    return M = Ta(M, O.mode, j, null),
                    M.return = O,
                    M;
                if (typeof M.then == "function")
                    return Z(O, jr(M), j);
                if (M.$$typeof === Q)
                    return Z(O, zr(O, M), j);
                Dr(O, M)
            }
            return null
        }
        function L(O, M, j, G) {
            var ut = M !== null ? M.key : null;
            if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
                return ut !== null ? null : v(O, M, "" + j, G);
            if (typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                case _:
                    return j.key === ut ? R(O, M, j, G) : null;
                case w:
                    return j.key === ut ? D(O, M, j, G) : null;
                case H:
                    return j = Oa(j),
                    L(O, M, j, G)
                }
                if (Rt(j) || ht(j))
                    return ut !== null ? null : q(O, M, j, G, null);
                if (typeof j.then == "function")
                    return L(O, M, jr(j), G);
                if (j.$$typeof === Q)
                    return L(O, M, zr(O, j), G);
                Dr(O, j)
            }
            return null
        }
        function B(O, M, j, G, ut) {
            if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
                return O = O.get(j) || null,
                v(M, O, "" + G, ut);
            if (typeof G == "object" && G !== null) {
                switch (G.$$typeof) {
                case _:
                    return O = O.get(G.key === null ? j : G.key) || null,
                    R(M, O, G, ut);
                case w:
                    return O = O.get(G.key === null ? j : G.key) || null,
                    D(M, O, G, ut);
                case H:
                    return G = Oa(G),
                    B(O, M, j, G, ut)
                }
                if (Rt(G) || ht(G))
                    return O = O.get(j) || null,
                    q(M, O, G, ut, null);
                if (typeof G.then == "function")
                    return B(O, M, j, jr(G), ut);
                if (G.$$typeof === Q)
                    return B(O, M, j, zr(M, G), ut);
                Dr(M, G)
            }
            return null
        }
        function at(O, M, j, G) {
            for (var ut = null, At = null, rt = M, gt = M = 0, Et = null; rt !== null && gt < j.length; gt++) {
                rt.index > gt ? (Et = rt,
                rt = null) : Et = rt.sibling;
                var Mt = L(O, rt, j[gt], G);
                if (Mt === null) {
                    rt === null && (rt = Et);
                    break
                }
                t && rt && Mt.alternate === null && e(O, rt),
                M = u(Mt, M, gt),
                At === null ? ut = Mt : At.sibling = Mt,
                At = Mt,
                rt = Et
            }
            if (gt === j.length)
                return n(O, rt),
                Tt && mn(O, gt),
                ut;
            if (rt === null) {
                for (; gt < j.length; gt++)
                    rt = Z(O, j[gt], G),
                    rt !== null && (M = u(rt, M, gt),
                    At === null ? ut = rt : At.sibling = rt,
                    At = rt);
                return Tt && mn(O, gt),
                ut
            }
            for (rt = l(rt); gt < j.length; gt++)
                Et = B(rt, O, gt, j[gt], G),
                Et !== null && (t && Et.alternate !== null && rt.delete(Et.key === null ? gt : Et.key),
                M = u(Et, M, gt),
                At === null ? ut = Et : At.sibling = Et,
                At = Et);
            return t && rt.forEach(function(ia) {
                return e(O, ia)
            }),
            Tt && mn(O, gt),
            ut
        }
        function ft(O, M, j, G) {
            if (j == null)
                throw Error(o(151));
            for (var ut = null, At = null, rt = M, gt = M = 0, Et = null, Mt = j.next(); rt !== null && !Mt.done; gt++,
            Mt = j.next()) {
                rt.index > gt ? (Et = rt,
                rt = null) : Et = rt.sibling;
                var ia = L(O, rt, Mt.value, G);
                if (ia === null) {
                    rt === null && (rt = Et);
                    break
                }
                t && rt && ia.alternate === null && e(O, rt),
                M = u(ia, M, gt),
                At === null ? ut = ia : At.sibling = ia,
                At = ia,
                rt = Et
            }
            if (Mt.done)
                return n(O, rt),
                Tt && mn(O, gt),
                ut;
            if (rt === null) {
                for (; !Mt.done; gt++,
                Mt = j.next())
                    Mt = Z(O, Mt.value, G),
                    Mt !== null && (M = u(Mt, M, gt),
                    At === null ? ut = Mt : At.sibling = Mt,
                    At = Mt);
                return Tt && mn(O, gt),
                ut
            }
            for (rt = l(rt); !Mt.done; gt++,
            Mt = j.next())
                Mt = B(rt, O, gt, Mt.value, G),
                Mt !== null && (t && Mt.alternate !== null && rt.delete(Mt.key === null ? gt : Mt.key),
                M = u(Mt, M, gt),
                At === null ? ut = Mt : At.sibling = Mt,
                At = Mt);
            return t && rt.forEach(function(ib) {
                return e(O, ib)
            }),
            Tt && mn(O, gt),
            ut
        }
        function Lt(O, M, j, G) {
            if (typeof j == "object" && j !== null && j.type === C && j.key === null && (j = j.props.children),
            typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                case _:
                    t: {
                        for (var ut = j.key; M !== null; ) {
                            if (M.key === ut) {
                                if (ut = j.type,
                                ut === C) {
                                    if (M.tag === 7) {
                                        n(O, M.sibling),
                                        G = s(M, j.props.children),
                                        G.return = O,
                                        O = G;
                                        break t
                                    }
                                } else if (M.elementType === ut || typeof ut == "object" && ut !== null && ut.$$typeof === H && Oa(ut) === M.type) {
                                    n(O, M.sibling),
                                    G = s(M, j.props),
                                    di(G, j),
                                    G.return = O,
                                    O = G;
                                    break t
                                }
                                n(O, M);
                                break
                            } else
                                e(O, M);
                            M = M.sibling
                        }
                        j.type === C ? (G = Ta(j.props.children, O.mode, G, j.key),
                        G.return = O,
                        O = G) : (G = Tr(j.type, j.key, j.props, null, O.mode, G),
                        di(G, j),
                        G.return = O,
                        O = G)
                    }
                    return d(O);
                case w:
                    t: {
                        for (ut = j.key; M !== null; ) {
                            if (M.key === ut)
                                if (M.tag === 4 && M.stateNode.containerInfo === j.containerInfo && M.stateNode.implementation === j.implementation) {
                                    n(O, M.sibling),
                                    G = s(M, j.children || []),
                                    G.return = O,
                                    O = G;
                                    break t
                                } else {
                                    n(O, M);
                                    break
                                }
                            else
                                e(O, M);
                            M = M.sibling
                        }
                        G = Cs(j, O.mode, G),
                        G.return = O,
                        O = G
                    }
                    return d(O);
                case H:
                    return j = Oa(j),
                    Lt(O, M, j, G)
                }
                if (Rt(j))
                    return at(O, M, j, G);
                if (ht(j)) {
                    if (ut = ht(j),
                    typeof ut != "function")
                        throw Error(o(150));
                    return j = ut.call(j),
                    ft(O, M, j, G)
                }
                if (typeof j.then == "function")
                    return Lt(O, M, jr(j), G);
                if (j.$$typeof === Q)
                    return Lt(O, M, zr(O, j), G);
                Dr(O, j)
            }
            return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (j = "" + j,
            M !== null && M.tag === 6 ? (n(O, M.sibling),
            G = s(M, j),
            G.return = O,
            O = G) : (n(O, M),
            G = zs(j, O.mode, G),
            G.return = O,
            O = G),
            d(O)) : n(O, M)
        }
        return function(O, M, j, G) {
            try {
                fi = 0;
                var ut = Lt(O, M, j, G);
                return bl = null,
                ut
            } catch (rt) {
                if (rt === vl || rt === Or)
                    throw rt;
                var At = je(29, rt, null, O.mode);
                return At.lanes = G,
                At.return = O,
                At
            }
        }
    }
    var ja = pd(!0)
      , gd = pd(!1)
      , Yn = !1;
    function Ys(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Vs(t, e) {
        t = t.updateQueue,
        e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }
    function Vn(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Xn(t, e, n) {
        var l = t.updateQueue;
        if (l === null)
            return null;
        if (l = l.shared,
        (Ct & 2) !== 0) {
            var s = l.pending;
            return s === null ? e.next = e : (e.next = s.next,
            s.next = e),
            l.pending = e,
            e = wr(t),
            Wf(t, null, n),
            e
        }
        return Rr(t, l, e, n),
        wr(t)
    }
    function hi(t, e, n) {
        if (e = e.updateQueue,
        e !== null && (e = e.shared,
        (n & 4194048) !== 0)) {
            var l = e.lanes;
            l &= t.pendingLanes,
            n |= l,
            e.lanes = n,
            of(t, n)
        }
    }
    function Xs(t, e) {
        var n = t.updateQueue
          , l = t.alternate;
        if (l !== null && (l = l.updateQueue,
        n === l)) {
            var s = null
              , u = null;
            if (n = n.firstBaseUpdate,
            n !== null) {
                do {
                    var d = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? s = u = d : u = u.next = d,
                    n = n.next
                } while (n !== null);
                u === null ? s = u = e : u = u.next = e
            } else
                s = u = e;
            n = {
                baseState: l.baseState,
                firstBaseUpdate: s,
                lastBaseUpdate: u,
                shared: l.shared,
                callbacks: l.callbacks
            },
            t.updateQueue = n;
            return
        }
        t = n.lastBaseUpdate,
        t === null ? n.firstBaseUpdate = e : t.next = e,
        n.lastBaseUpdate = e
    }
    var Qs = !1;
    function mi() {
        if (Qs) {
            var t = yl;
            if (t !== null)
                throw t
        }
    }
    function pi(t, e, n, l) {
        Qs = !1;
        var s = t.updateQueue;
        Yn = !1;
        var u = s.firstBaseUpdate
          , d = s.lastBaseUpdate
          , v = s.shared.pending;
        if (v !== null) {
            s.shared.pending = null;
            var R = v
              , D = R.next;
            R.next = null,
            d === null ? u = D : d.next = D,
            d = R;
            var q = t.alternate;
            q !== null && (q = q.updateQueue,
            v = q.lastBaseUpdate,
            v !== d && (v === null ? q.firstBaseUpdate = D : v.next = D,
            q.lastBaseUpdate = R))
        }
        if (u !== null) {
            var Z = s.baseState;
            d = 0,
            q = D = R = null,
            v = u;
            do {
                var L = v.lane & -536870913
                  , B = L !== v.lane;
                if (B ? (_t & L) === L : (l & L) === L) {
                    L !== 0 && L === gl && (Qs = !0),
                    q !== null && (q = q.next = {
                        lane: 0,
                        tag: v.tag,
                        payload: v.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var at = t
                          , ft = v;
                        L = e;
                        var Lt = n;
                        switch (ft.tag) {
                        case 1:
                            if (at = ft.payload,
                            typeof at == "function") {
                                Z = at.call(Lt, Z, L);
                                break t
                            }
                            Z = at;
                            break t;
                        case 3:
                            at.flags = at.flags & -65537 | 128;
                        case 0:
                            if (at = ft.payload,
                            L = typeof at == "function" ? at.call(Lt, Z, L) : at,
                            L == null)
                                break t;
                            Z = y({}, Z, L);
                            break t;
                        case 2:
                            Yn = !0
                        }
                    }
                    L = v.callback,
                    L !== null && (t.flags |= 64,
                    B && (t.flags |= 8192),
                    B = s.callbacks,
                    B === null ? s.callbacks = [L] : B.push(L))
                } else
                    B = {
                        lane: L,
                        tag: v.tag,
                        payload: v.payload,
                        callback: v.callback,
                        next: null
                    },
                    q === null ? (D = q = B,
                    R = Z) : q = q.next = B,
                    d |= L;
                if (v = v.next,
                v === null) {
                    if (v = s.shared.pending,
                    v === null)
                        break;
                    B = v,
                    v = B.next,
                    B.next = null,
                    s.lastBaseUpdate = B,
                    s.shared.pending = null
                }
            } while (!0);
            q === null && (R = Z),
            s.baseState = R,
            s.firstBaseUpdate = D,
            s.lastBaseUpdate = q,
            u === null && (s.shared.lanes = 0),
            Pn |= d,
            t.lanes = d,
            t.memoizedState = Z
        }
    }
    function yd(t, e) {
        if (typeof t != "function")
            throw Error(o(191, t));
        t.call(e)
    }
    function vd(t, e) {
        var n = t.callbacks;
        if (n !== null)
            for (t.callbacks = null,
            t = 0; t < n.length; t++)
                yd(n[t], e)
    }
    var Sl = A(null)
      , Lr = A(0);
    function bd(t, e) {
        t = wn,
        F(Lr, t),
        F(Sl, e),
        wn = t | e.baseLanes
    }
    function Zs() {
        F(Lr, wn),
        F(Sl, Sl.current)
    }
    function Ks() {
        wn = Lr.current,
        Y(Sl),
        Y(Lr)
    }
    var De = A(null)
      , Ke = null;
    function Qn(t) {
        var e = t.alternate;
        F(Kt, Kt.current & 1),
        F(De, t),
        Ke === null && (e === null || Sl.current !== null || e.memoizedState !== null) && (Ke = t)
    }
    function Js(t) {
        F(Kt, Kt.current),
        F(De, t),
        Ke === null && (Ke = t)
    }
    function Sd(t) {
        t.tag === 22 ? (F(Kt, Kt.current),
        F(De, t),
        Ke === null && (Ke = t)) : Zn()
    }
    function Zn() {
        F(Kt, Kt.current),
        F(De, De.current)
    }
    function Le(t) {
        Y(De),
        Ke === t && (Ke = null),
        Y(Kt)
    }
    var Kt = A(0);
    function Ur(t) {
        for (var e = t; e !== null; ) {
            if (e.tag === 13) {
                var n = e.memoizedState;
                if (n !== null && (n = n.dehydrated,
                n === null || tc(n) || ec(n)))
                    return e
            } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
                if ((e.flags & 128) !== 0)
                    return e
            } else if (e.child !== null) {
                e.child.return = e,
                e = e.child;
                continue
            }
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return null;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
        return null
    }
    var yn = 0
      , pt = null
      , jt = null
      , Ft = null
      , Br = !1
      , xl = !1
      , Da = !1
      , Hr = 0
      , gi = 0
      , _l = null
      , Pv = 0;
    function Qt() {
        throw Error(o(321))
    }
    function Ps(t, e) {
        if (e === null)
            return !1;
        for (var n = 0; n < e.length && n < t.length; n++)
            if (!Ne(t[n], e[n]))
                return !1;
        return !0
    }
    function Fs(t, e, n, l, s, u) {
        return yn = u,
        pt = e,
        e.memoizedState = null,
        e.updateQueue = null,
        e.lanes = 0,
        U.H = t === null || t.memoizedState === null ? ah : fu,
        Da = !1,
        u = n(l, s),
        Da = !1,
        xl && (u = _d(e, n, l, s)),
        xd(t),
        u
    }
    function xd(t) {
        U.H = bi;
        var e = jt !== null && jt.next !== null;
        if (yn = 0,
        Ft = jt = pt = null,
        Br = !1,
        gi = 0,
        _l = null,
        e)
            throw Error(o(300));
        t === null || It || (t = t.dependencies,
        t !== null && Mr(t) && (It = !0))
    }
    function _d(t, e, n, l) {
        pt = t;
        var s = 0;
        do {
            if (xl && (_l = null),
            gi = 0,
            xl = !1,
            25 <= s)
                throw Error(o(301));
            if (s += 1,
            Ft = jt = null,
            t.updateQueue != null) {
                var u = t.updateQueue;
                u.lastEffect = null,
                u.events = null,
                u.stores = null,
                u.memoCache != null && (u.memoCache.index = 0)
            }
            U.H = lh,
            u = e(n, l)
        } while (xl);
        return u
    }
    function Fv() {
        var t = U.H
          , e = t.useState()[0];
        return e = typeof e.then == "function" ? yi(e) : e,
        t = t.useState()[0],
        (jt !== null ? jt.memoizedState : null) !== t && (pt.flags |= 1024),
        e
    }
    function Is() {
        var t = Hr !== 0;
        return Hr = 0,
        t
    }
    function $s(t, e, n) {
        e.updateQueue = t.updateQueue,
        e.flags &= -2053,
        t.lanes &= ~n
    }
    function Ws(t) {
        if (Br) {
            for (t = t.memoizedState; t !== null; ) {
                var e = t.queue;
                e !== null && (e.pending = null),
                t = t.next
            }
            Br = !1
        }
        yn = 0,
        Ft = jt = pt = null,
        xl = !1,
        gi = Hr = 0,
        _l = null
    }
    function ye() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ft === null ? pt.memoizedState = Ft = t : Ft = Ft.next = t,
        Ft
    }
    function Jt() {
        if (jt === null) {
            var t = pt.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = jt.next;
        var e = Ft === null ? pt.memoizedState : Ft.next;
        if (e !== null)
            Ft = e,
            jt = t;
        else {
            if (t === null)
                throw pt.alternate === null ? Error(o(467)) : Error(o(310));
            jt = t,
            t = {
                memoizedState: jt.memoizedState,
                baseState: jt.baseState,
                baseQueue: jt.baseQueue,
                queue: jt.queue,
                next: null
            },
            Ft === null ? pt.memoizedState = Ft = t : Ft = Ft.next = t
        }
        return Ft
    }
    function kr() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function yi(t) {
        var e = gi;
        return gi += 1,
        _l === null && (_l = []),
        t = dd(_l, t, e),
        e = pt,
        (Ft === null ? e.memoizedState : Ft.next) === null && (e = e.alternate,
        U.H = e === null || e.memoizedState === null ? ah : fu),
        t
    }
    function qr(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function")
                return yi(t);
            if (t.$$typeof === Q)
                return ce(t)
        }
        throw Error(o(438, String(t)))
    }
    function tu(t) {
        var e = null
          , n = pt.updateQueue;
        if (n !== null && (e = n.memoCache),
        e == null) {
            var l = pt.alternate;
            l !== null && (l = l.updateQueue,
            l !== null && (l = l.memoCache,
            l != null && (e = {
                data: l.data.map(function(s) {
                    return s.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
            data: [],
            index: 0
        }),
        n === null && (n = kr(),
        pt.updateQueue = n),
        n.memoCache = e,
        n = e.data[e.index],
        n === void 0)
            for (n = e.data[e.index] = Array(t),
            l = 0; l < t; l++)
                n[l] = ct;
        return e.index++,
        n
    }
    function vn(t, e) {
        return typeof e == "function" ? e(t) : e
    }
    function Gr(t) {
        var e = Jt();
        return eu(e, jt, t)
    }
    function eu(t, e, n) {
        var l = t.queue;
        if (l === null)
            throw Error(o(311));
        l.lastRenderedReducer = n;
        var s = t.baseQueue
          , u = l.pending;
        if (u !== null) {
            if (s !== null) {
                var d = s.next;
                s.next = u.next,
                u.next = d
            }
            e.baseQueue = s = u,
            l.pending = null
        }
        if (u = t.baseState,
        s === null)
            t.memoizedState = u;
        else {
            e = s.next;
            var v = d = null
              , R = null
              , D = e
              , q = !1;
            do {
                var Z = D.lane & -536870913;
                if (Z !== D.lane ? (_t & Z) === Z : (yn & Z) === Z) {
                    var L = D.revertLane;
                    if (L === 0)
                        R !== null && (R = R.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: D.action,
                            hasEagerState: D.hasEagerState,
                            eagerState: D.eagerState,
                            next: null
                        }),
                        Z === gl && (q = !0);
                    else if ((yn & L) === L) {
                        D = D.next,
                        L === gl && (q = !0);
                        continue
                    } else
                        Z = {
                            lane: 0,
                            revertLane: D.revertLane,
                            gesture: null,
                            action: D.action,
                            hasEagerState: D.hasEagerState,
                            eagerState: D.eagerState,
                            next: null
                        },
                        R === null ? (v = R = Z,
                        d = u) : R = R.next = Z,
                        pt.lanes |= L,
                        Pn |= L;
                    Z = D.action,
                    Da && n(u, Z),
                    u = D.hasEagerState ? D.eagerState : n(u, Z)
                } else
                    L = {
                        lane: Z,
                        revertLane: D.revertLane,
                        gesture: D.gesture,
                        action: D.action,
                        hasEagerState: D.hasEagerState,
                        eagerState: D.eagerState,
                        next: null
                    },
                    R === null ? (v = R = L,
                    d = u) : R = R.next = L,
                    pt.lanes |= Z,
                    Pn |= Z;
                D = D.next
            } while (D !== null && D !== e);
            if (R === null ? d = u : R.next = v,
            !Ne(u, t.memoizedState) && (It = !0,
            q && (n = yl,
            n !== null)))
                throw n;
            t.memoizedState = u,
            t.baseState = d,
            t.baseQueue = R,
            l.lastRenderedState = u
        }
        return s === null && (l.lanes = 0),
        [t.memoizedState, l.dispatch]
    }
    function nu(t) {
        var e = Jt()
          , n = e.queue;
        if (n === null)
            throw Error(o(311));
        n.lastRenderedReducer = t;
        var l = n.dispatch
          , s = n.pending
          , u = e.memoizedState;
        if (s !== null) {
            n.pending = null;
            var d = s = s.next;
            do
                u = t(u, d.action),
                d = d.next;
            while (d !== s);
            Ne(u, e.memoizedState) || (It = !0),
            e.memoizedState = u,
            e.baseQueue === null && (e.baseState = u),
            n.lastRenderedState = u
        }
        return [u, l]
    }
    function Ed(t, e, n) {
        var l = pt
          , s = Jt()
          , u = Tt;
        if (u) {
            if (n === void 0)
                throw Error(o(407));
            n = n()
        } else
            n = e();
        var d = !Ne((jt || s).memoizedState, n);
        if (d && (s.memoizedState = n,
        It = !0),
        s = s.queue,
        iu(Td.bind(null, l, s, t), [t]),
        s.getSnapshot !== e || d || Ft !== null && Ft.memoizedState.tag & 1) {
            if (l.flags |= 2048,
            El(9, {
                destroy: void 0
            }, wd.bind(null, l, s, n, e), null),
            Ut === null)
                throw Error(o(349));
            u || (yn & 127) !== 0 || Rd(l, e, n)
        }
        return n
    }
    function Rd(t, e, n) {
        t.flags |= 16384,
        t = {
            getSnapshot: e,
            value: n
        },
        e = pt.updateQueue,
        e === null ? (e = kr(),
        pt.updateQueue = e,
        e.stores = [t]) : (n = e.stores,
        n === null ? e.stores = [t] : n.push(t))
    }
    function wd(t, e, n, l) {
        e.value = n,
        e.getSnapshot = l,
        Ad(e) && Md(t)
    }
    function Td(t, e, n) {
        return n(function() {
            Ad(e) && Md(t)
        })
    }
    function Ad(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var n = e();
            return !Ne(t, n)
        } catch {
            return !0
        }
    }
    function Md(t) {
        var e = wa(t, 2);
        e !== null && we(e, t, 2)
    }
    function au(t) {
        var e = ye();
        if (typeof t == "function") {
            var n = t;
            if (t = n(),
            Da) {
                Ln(!0);
                try {
                    n()
                } finally {
                    Ln(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t,
        e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: vn,
            lastRenderedState: t
        },
        e
    }
    function zd(t, e, n, l) {
        return t.baseState = n,
        eu(t, jt, typeof l == "function" ? l : vn)
    }
    function Iv(t, e, n, l, s) {
        if (Xr(t))
            throw Error(o(485));
        if (t = e.action,
        t !== null) {
            var u = {
                payload: s,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(d) {
                    u.listeners.push(d)
                }
            };
            U.T !== null ? n(!0) : u.isTransition = !1,
            l(u),
            n = e.pending,
            n === null ? (u.next = e.pending = u,
            Cd(e, u)) : (u.next = n.next,
            e.pending = n.next = u)
        }
    }
    function Cd(t, e) {
        var n = e.action
          , l = e.payload
          , s = t.state;
        if (e.isTransition) {
            var u = U.T
              , d = {};
            U.T = d;
            try {
                var v = n(s, l)
                  , R = U.S;
                R !== null && R(d, v),
                Od(t, e, v)
            } catch (D) {
                lu(t, e, D)
            } finally {
                u !== null && d.types !== null && (u.types = d.types),
                U.T = u
            }
        } else
            try {
                u = n(s, l),
                Od(t, e, u)
            } catch (D) {
                lu(t, e, D)
            }
    }
    function Od(t, e, n) {
        n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(l) {
            Nd(t, e, l)
        }, function(l) {
            return lu(t, e, l)
        }) : Nd(t, e, n)
    }
    function Nd(t, e, n) {
        e.status = "fulfilled",
        e.value = n,
        jd(e),
        t.state = n,
        e = t.pending,
        e !== null && (n = e.next,
        n === e ? t.pending = null : (n = n.next,
        e.next = n,
        Cd(t, n)))
    }
    function lu(t, e, n) {
        var l = t.pending;
        if (t.pending = null,
        l !== null) {
            l = l.next;
            do
                e.status = "rejected",
                e.reason = n,
                jd(e),
                e = e.next;
            while (e !== l)
        }
        t.action = null
    }
    function jd(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)
            (0,
            t[e])()
    }
    function Dd(t, e) {
        return e
    }
    function Ld(t, e) {
        if (Tt) {
            var n = Ut.formState;
            if (n !== null) {
                t: {
                    var l = pt;
                    if (Tt) {
                        if (qt) {
                            e: {
                                for (var s = qt, u = Ze; s.nodeType !== 8; ) {
                                    if (!u) {
                                        s = null;
                                        break e
                                    }
                                    if (s = Je(s.nextSibling),
                                    s === null) {
                                        s = null;
                                        break e
                                    }
                                }
                                u = s.data,
                                s = u === "F!" || u === "F" ? s : null
                            }
                            if (s) {
                                qt = Je(s.nextSibling),
                                l = s.data === "F!";
                                break t
                            }
                        }
                        qn(l)
                    }
                    l = !1
                }
                l && (e = n[0])
            }
        }
        return n = ye(),
        n.memoizedState = n.baseState = e,
        l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Dd,
            lastRenderedState: e
        },
        n.queue = l,
        n = th.bind(null, pt, l),
        l.dispatch = n,
        l = au(!1),
        u = cu.bind(null, pt, !1, l.queue),
        l = ye(),
        s = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        },
        l.queue = s,
        n = Iv.bind(null, pt, s, u, n),
        s.dispatch = n,
        l.memoizedState = t,
        [e, n, !1]
    }
    function Ud(t) {
        var e = Jt();
        return Bd(e, jt, t)
    }
    function Bd(t, e, n) {
        if (e = eu(t, e, Dd)[0],
        t = Gr(vn)[0],
        typeof e == "object" && e !== null && typeof e.then == "function")
            try {
                var l = yi(e)
            } catch (d) {
                throw d === vl ? Or : d
            }
        else
            l = e;
        e = Jt();
        var s = e.queue
          , u = s.dispatch;
        return n !== e.memoizedState && (pt.flags |= 2048,
        El(9, {
            destroy: void 0
        }, $v.bind(null, s, n), null)),
        [l, u, t]
    }
    function $v(t, e) {
        t.action = e
    }
    function Hd(t) {
        var e = Jt()
          , n = jt;
        if (n !== null)
            return Bd(e, n, t);
        Jt(),
        e = e.memoizedState,
        n = Jt();
        var l = n.queue.dispatch;
        return n.memoizedState = t,
        [e, l, !1]
    }
    function El(t, e, n, l) {
        return t = {
            tag: t,
            create: n,
            deps: l,
            inst: e,
            next: null
        },
        e = pt.updateQueue,
        e === null && (e = kr(),
        pt.updateQueue = e),
        n = e.lastEffect,
        n === null ? e.lastEffect = t.next = t : (l = n.next,
        n.next = t,
        t.next = l,
        e.lastEffect = t),
        t
    }
    function kd() {
        return Jt().memoizedState
    }
    function Yr(t, e, n, l) {
        var s = ye();
        pt.flags |= t,
        s.memoizedState = El(1 | e, {
            destroy: void 0
        }, n, l === void 0 ? null : l)
    }
    function Vr(t, e, n, l) {
        var s = Jt();
        l = l === void 0 ? null : l;
        var u = s.memoizedState.inst;
        jt !== null && l !== null && Ps(l, jt.memoizedState.deps) ? s.memoizedState = El(e, u, n, l) : (pt.flags |= t,
        s.memoizedState = El(1 | e, u, n, l))
    }
    function qd(t, e) {
        Yr(8390656, 8, t, e)
    }
    function iu(t, e) {
        Vr(2048, 8, t, e)
    }
    function Wv(t) {
        pt.flags |= 4;
        var e = pt.updateQueue;
        if (e === null)
            e = kr(),
            pt.updateQueue = e,
            e.events = [t];
        else {
            var n = e.events;
            n === null ? e.events = [t] : n.push(t)
        }
    }
    function Gd(t) {
        var e = Jt().memoizedState;
        return Wv({
            ref: e,
            nextImpl: t
        }),
        function() {
            if ((Ct & 2) !== 0)
                throw Error(o(440));
            return e.impl.apply(void 0, arguments)
        }
    }
    function Yd(t, e) {
        return Vr(4, 2, t, e)
    }
    function Vd(t, e) {
        return Vr(4, 4, t, e)
    }
    function Xd(t, e) {
        if (typeof e == "function") {
            t = t();
            var n = e(t);
            return function() {
                typeof n == "function" ? n() : e(null)
            }
        }
        if (e != null)
            return t = t(),
            e.current = t,
            function() {
                e.current = null
            }
    }
    function Qd(t, e, n) {
        n = n != null ? n.concat([t]) : null,
        Vr(4, 4, Xd.bind(null, e, t), n)
    }
    function ru() {}
    function Zd(t, e) {
        var n = Jt();
        e = e === void 0 ? null : e;
        var l = n.memoizedState;
        return e !== null && Ps(e, l[1]) ? l[0] : (n.memoizedState = [t, e],
        t)
    }
    function Kd(t, e) {
        var n = Jt();
        e = e === void 0 ? null : e;
        var l = n.memoizedState;
        if (e !== null && Ps(e, l[1]))
            return l[0];
        if (l = t(),
        Da) {
            Ln(!0);
            try {
                t()
            } finally {
                Ln(!1)
            }
        }
        return n.memoizedState = [l, e],
        l
    }
    function ou(t, e, n) {
        return n === void 0 || (yn & 1073741824) !== 0 && (_t & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n,
        t = Jh(),
        pt.lanes |= t,
        Pn |= t,
        n)
    }
    function Jd(t, e, n, l) {
        return Ne(n, e) ? n : Sl.current !== null ? (t = ou(t, n, l),
        Ne(t, e) || (It = !0),
        t) : (yn & 42) === 0 || (yn & 1073741824) !== 0 && (_t & 261930) === 0 ? (It = !0,
        t.memoizedState = n) : (t = Jh(),
        pt.lanes |= t,
        Pn |= t,
        e)
    }
    function Pd(t, e, n, l, s) {
        var u = K.p;
        K.p = u !== 0 && 8 > u ? u : 8;
        var d = U.T
          , v = {};
        U.T = v,
        cu(t, !1, e, n);
        try {
            var R = s()
              , D = U.S;
            if (D !== null && D(v, R),
            R !== null && typeof R == "object" && typeof R.then == "function") {
                var q = Jv(R, l);
                vi(t, e, q, He(t))
            } else
                vi(t, e, l, He(t))
        } catch (Z) {
            vi(t, e, {
                then: function() {},
                status: "rejected",
                reason: Z
            }, He())
        } finally {
            K.p = u,
            d !== null && v.types !== null && (d.types = v.types),
            U.T = d
        }
    }
    function t0() {}
    function su(t, e, n, l) {
        if (t.tag !== 5)
            throw Error(o(476));
        var s = Fd(t).queue;
        Pd(t, s, e, ot, n === null ? t0 : function() {
            return Id(t),
            n(l)
        }
        )
    }
    function Fd(t) {
        var e = t.memoizedState;
        if (e !== null)
            return e;
        e = {
            memoizedState: ot,
            baseState: ot,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: vn,
                lastRenderedState: ot
            },
            next: null
        };
        var n = {};
        return e.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: vn,
                lastRenderedState: n
            },
            next: null
        },
        t.memoizedState = e,
        t = t.alternate,
        t !== null && (t.memoizedState = e),
        e
    }
    function Id(t) {
        var e = Fd(t);
        e.next === null && (e = t.alternate.memoizedState),
        vi(t, e.next.queue, {}, He())
    }
    function uu() {
        return ce(Li)
    }
    function $d() {
        return Jt().memoizedState
    }
    function Wd() {
        return Jt().memoizedState
    }
    function e0(t) {
        for (var e = t.return; e !== null; ) {
            switch (e.tag) {
            case 24:
            case 3:
                var n = He();
                t = Vn(n);
                var l = Xn(e, t, n);
                l !== null && (we(l, e, n),
                hi(l, e, n)),
                e = {
                    cache: Hs()
                },
                t.payload = e;
                return
            }
            e = e.return
        }
    }
    function n0(t, e, n) {
        var l = He();
        n = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Xr(t) ? eh(e, n) : (n = As(t, e, n, l),
        n !== null && (we(n, t, l),
        nh(n, e, l)))
    }
    function th(t, e, n) {
        var l = He();
        vi(t, e, n, l)
    }
    function vi(t, e, n, l) {
        var s = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Xr(t))
            eh(e, s);
        else {
            var u = t.alternate;
            if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer,
            u !== null))
                try {
                    var d = e.lastRenderedState
                      , v = u(d, n);
                    if (s.hasEagerState = !0,
                    s.eagerState = v,
                    Ne(v, d))
                        return Rr(t, e, s, 0),
                        Ut === null && Er(),
                        !1
                } catch {}
            if (n = As(t, e, s, l),
            n !== null)
                return we(n, t, l),
                nh(n, e, l),
                !0
        }
        return !1
    }
    function cu(t, e, n, l) {
        if (l = {
            lane: 2,
            revertLane: Yu(),
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Xr(t)) {
            if (e)
                throw Error(o(479))
        } else
            e = As(t, n, l, 2),
            e !== null && we(e, t, 2)
    }
    function Xr(t) {
        var e = t.alternate;
        return t === pt || e !== null && e === pt
    }
    function eh(t, e) {
        xl = Br = !0;
        var n = t.pending;
        n === null ? e.next = e : (e.next = n.next,
        n.next = e),
        t.pending = e
    }
    function nh(t, e, n) {
        if ((n & 4194048) !== 0) {
            var l = e.lanes;
            l &= t.pendingLanes,
            n |= l,
            e.lanes = n,
            of(t, n)
        }
    }
    var bi = {
        readContext: ce,
        use: qr,
        useCallback: Qt,
        useContext: Qt,
        useEffect: Qt,
        useImperativeHandle: Qt,
        useLayoutEffect: Qt,
        useInsertionEffect: Qt,
        useMemo: Qt,
        useReducer: Qt,
        useRef: Qt,
        useState: Qt,
        useDebugValue: Qt,
        useDeferredValue: Qt,
        useTransition: Qt,
        useSyncExternalStore: Qt,
        useId: Qt,
        useHostTransitionStatus: Qt,
        useFormState: Qt,
        useActionState: Qt,
        useOptimistic: Qt,
        useMemoCache: Qt,
        useCacheRefresh: Qt
    };
    bi.useEffectEvent = Qt;
    var ah = {
        readContext: ce,
        use: qr,
        useCallback: function(t, e) {
            return ye().memoizedState = [t, e === void 0 ? null : e],
            t
        },
        useContext: ce,
        useEffect: qd,
        useImperativeHandle: function(t, e, n) {
            n = n != null ? n.concat([t]) : null,
            Yr(4194308, 4, Xd.bind(null, e, t), n)
        },
        useLayoutEffect: function(t, e) {
            return Yr(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            Yr(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var n = ye();
            e = e === void 0 ? null : e;
            var l = t();
            if (Da) {
                Ln(!0);
                try {
                    t()
                } finally {
                    Ln(!1)
                }
            }
            return n.memoizedState = [l, e],
            l
        },
        useReducer: function(t, e, n) {
            var l = ye();
            if (n !== void 0) {
                var s = n(e);
                if (Da) {
                    Ln(!0);
                    try {
                        n(e)
                    } finally {
                        Ln(!1)
                    }
                }
            } else
                s = e;
            return l.memoizedState = l.baseState = s,
            t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: s
            },
            l.queue = t,
            t = t.dispatch = n0.bind(null, pt, t),
            [l.memoizedState, t]
        },
        useRef: function(t) {
            var e = ye();
            return t = {
                current: t
            },
            e.memoizedState = t
        },
        useState: function(t) {
            t = au(t);
            var e = t.queue
              , n = th.bind(null, pt, e);
            return e.dispatch = n,
            [t.memoizedState, n]
        },
        useDebugValue: ru,
        useDeferredValue: function(t, e) {
            var n = ye();
            return ou(n, t, e)
        },
        useTransition: function() {
            var t = au(!1);
            return t = Pd.bind(null, pt, t.queue, !0, !1),
            ye().memoizedState = t,
            [!1, t]
        },
        useSyncExternalStore: function(t, e, n) {
            var l = pt
              , s = ye();
            if (Tt) {
                if (n === void 0)
                    throw Error(o(407));
                n = n()
            } else {
                if (n = e(),
                Ut === null)
                    throw Error(o(349));
                (_t & 127) !== 0 || Rd(l, e, n)
            }
            s.memoizedState = n;
            var u = {
                value: n,
                getSnapshot: e
            };
            return s.queue = u,
            qd(Td.bind(null, l, u, t), [t]),
            l.flags |= 2048,
            El(9, {
                destroy: void 0
            }, wd.bind(null, l, u, n, e), null),
            n
        },
        useId: function() {
            var t = ye()
              , e = Ut.identifierPrefix;
            if (Tt) {
                var n = nn
                  , l = en;
                n = (l & ~(1 << 32 - Oe(l) - 1)).toString(32) + n,
                e = "_" + e + "R_" + n,
                n = Hr++,
                0 < n && (e += "H" + n.toString(32)),
                e += "_"
            } else
                n = Pv++,
                e = "_" + e + "r_" + n.toString(32) + "_";
            return t.memoizedState = e
        },
        useHostTransitionStatus: uu,
        useFormState: Ld,
        useActionState: Ld,
        useOptimistic: function(t) {
            var e = ye();
            e.memoizedState = e.baseState = t;
            var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return e.queue = n,
            e = cu.bind(null, pt, !0, n),
            n.dispatch = e,
            [t, e]
        },
        useMemoCache: tu,
        useCacheRefresh: function() {
            return ye().memoizedState = e0.bind(null, pt)
        },
        useEffectEvent: function(t) {
            var e = ye()
              , n = {
                impl: t
            };
            return e.memoizedState = n,
            function() {
                if ((Ct & 2) !== 0)
                    throw Error(o(440));
                return n.impl.apply(void 0, arguments)
            }
        }
    }
      , fu = {
        readContext: ce,
        use: qr,
        useCallback: Zd,
        useContext: ce,
        useEffect: iu,
        useImperativeHandle: Qd,
        useInsertionEffect: Yd,
        useLayoutEffect: Vd,
        useMemo: Kd,
        useReducer: Gr,
        useRef: kd,
        useState: function() {
            return Gr(vn)
        },
        useDebugValue: ru,
        useDeferredValue: function(t, e) {
            var n = Jt();
            return Jd(n, jt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = Gr(vn)[0]
              , e = Jt().memoizedState;
            return [typeof t == "boolean" ? t : yi(t), e]
        },
        useSyncExternalStore: Ed,
        useId: $d,
        useHostTransitionStatus: uu,
        useFormState: Ud,
        useActionState: Ud,
        useOptimistic: function(t, e) {
            var n = Jt();
            return zd(n, jt, t, e)
        },
        useMemoCache: tu,
        useCacheRefresh: Wd
    };
    fu.useEffectEvent = Gd;
    var lh = {
        readContext: ce,
        use: qr,
        useCallback: Zd,
        useContext: ce,
        useEffect: iu,
        useImperativeHandle: Qd,
        useInsertionEffect: Yd,
        useLayoutEffect: Vd,
        useMemo: Kd,
        useReducer: nu,
        useRef: kd,
        useState: function() {
            return nu(vn)
        },
        useDebugValue: ru,
        useDeferredValue: function(t, e) {
            var n = Jt();
            return jt === null ? ou(n, t, e) : Jd(n, jt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = nu(vn)[0]
              , e = Jt().memoizedState;
            return [typeof t == "boolean" ? t : yi(t), e]
        },
        useSyncExternalStore: Ed,
        useId: $d,
        useHostTransitionStatus: uu,
        useFormState: Hd,
        useActionState: Hd,
        useOptimistic: function(t, e) {
            var n = Jt();
            return jt !== null ? zd(n, jt, t, e) : (n.baseState = t,
            [t, n.queue.dispatch])
        },
        useMemoCache: tu,
        useCacheRefresh: Wd
    };
    lh.useEffectEvent = Gd;
    function du(t, e, n, l) {
        e = t.memoizedState,
        n = n(l, e),
        n = n == null ? e : y({}, e, n),
        t.memoizedState = n,
        t.lanes === 0 && (t.updateQueue.baseState = n)
    }
    var hu = {
        enqueueSetState: function(t, e, n) {
            t = t._reactInternals;
            var l = He()
              , s = Vn(l);
            s.payload = e,
            n != null && (s.callback = n),
            e = Xn(t, s, l),
            e !== null && (we(e, t, l),
            hi(e, t, l))
        },
        enqueueReplaceState: function(t, e, n) {
            t = t._reactInternals;
            var l = He()
              , s = Vn(l);
            s.tag = 1,
            s.payload = e,
            n != null && (s.callback = n),
            e = Xn(t, s, l),
            e !== null && (we(e, t, l),
            hi(e, t, l))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var n = He()
              , l = Vn(n);
            l.tag = 2,
            e != null && (l.callback = e),
            e = Xn(t, l, n),
            e !== null && (we(e, t, n),
            hi(e, t, n))
        }
    };
    function ih(t, e, n, l, s, u, d) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, u, d) : e.prototype && e.prototype.isPureReactComponent ? !ii(n, l) || !ii(s, u) : !0
    }
    function rh(t, e, n, l) {
        t = e.state,
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, l),
        typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, l),
        e.state !== t && hu.enqueueReplaceState(e, e.state, null)
    }
    function La(t, e) {
        var n = e;
        if ("ref"in e) {
            n = {};
            for (var l in e)
                l !== "ref" && (n[l] = e[l])
        }
        if (t = t.defaultProps) {
            n === e && (n = y({}, n));
            for (var s in t)
                n[s] === void 0 && (n[s] = t[s])
        }
        return n
    }
    function oh(t) {
        _r(t)
    }
    function sh(t) {
        console.error(t)
    }
    function uh(t) {
        _r(t)
    }
    function Qr(t, e) {
        try {
            var n = t.onUncaughtError;
            n(e.value, {
                componentStack: e.stack
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }
    function ch(t, e, n) {
        try {
            var l = t.onCaughtError;
            l(n.value, {
                componentStack: n.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }
    function mu(t, e, n) {
        return n = Vn(n),
        n.tag = 3,
        n.payload = {
            element: null
        },
        n.callback = function() {
            Qr(t, e)
        }
        ,
        n
    }
    function fh(t) {
        return t = Vn(t),
        t.tag = 3,
        t
    }
    function dh(t, e, n, l) {
        var s = n.type.getDerivedStateFromError;
        if (typeof s == "function") {
            var u = l.value;
            t.payload = function() {
                return s(u)
            }
            ,
            t.callback = function() {
                ch(e, n, l)
            }
        }
        var d = n.stateNode;
        d !== null && typeof d.componentDidCatch == "function" && (t.callback = function() {
            ch(e, n, l),
            typeof s != "function" && (Fn === null ? Fn = new Set([this]) : Fn.add(this));
            var v = l.stack;
            this.componentDidCatch(l.value, {
                componentStack: v !== null ? v : ""
            })
        }
        )
    }
    function a0(t, e, n, l, s) {
        if (n.flags |= 32768,
        l !== null && typeof l == "object" && typeof l.then == "function") {
            if (e = n.alternate,
            e !== null && pl(e, n, s, !0),
            n = De.current,
            n !== null) {
                switch (n.tag) {
                case 31:
                case 13:
                    return Ke === null ? ao() : n.alternate === null && Zt === 0 && (Zt = 3),
                    n.flags &= -257,
                    n.flags |= 65536,
                    n.lanes = s,
                    l === Nr ? n.flags |= 16384 : (e = n.updateQueue,
                    e === null ? n.updateQueue = new Set([l]) : e.add(l),
                    ku(t, l, s)),
                    !1;
                case 22:
                    return n.flags |= 65536,
                    l === Nr ? n.flags |= 16384 : (e = n.updateQueue,
                    e === null ? (e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l])
                    },
                    n.updateQueue = e) : (n = e.retryQueue,
                    n === null ? e.retryQueue = new Set([l]) : n.add(l)),
                    ku(t, l, s)),
                    !1
                }
                throw Error(o(435, n.tag))
            }
            return ku(t, l, s),
            ao(),
            !1
        }
        if (Tt)
            return e = De.current,
            e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            e.flags |= 65536,
            e.lanes = s,
            l !== js && (t = Error(o(422), {
                cause: l
            }),
            si(Ve(t, n)))) : (l !== js && (e = Error(o(423), {
                cause: l
            }),
            si(Ve(e, n))),
            t = t.current.alternate,
            t.flags |= 65536,
            s &= -s,
            t.lanes |= s,
            l = Ve(l, n),
            s = mu(t.stateNode, l, s),
            Xs(t, s),
            Zt !== 4 && (Zt = 2)),
            !1;
        var u = Error(o(520), {
            cause: l
        });
        if (u = Ve(u, n),
        Ai === null ? Ai = [u] : Ai.push(u),
        Zt !== 4 && (Zt = 2),
        e === null)
            return !0;
        l = Ve(l, n),
        n = e;
        do {
            switch (n.tag) {
            case 3:
                return n.flags |= 65536,
                t = s & -s,
                n.lanes |= t,
                t = mu(n.stateNode, l, t),
                Xs(n, t),
                !1;
            case 1:
                if (e = n.type,
                u = n.stateNode,
                (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Fn === null || !Fn.has(u))))
                    return n.flags |= 65536,
                    s &= -s,
                    n.lanes |= s,
                    s = fh(s),
                    dh(s, t, n, l),
                    Xs(n, s),
                    !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var pu = Error(o(461))
      , It = !1;
    function fe(t, e, n, l) {
        e.child = t === null ? gd(e, null, n, l) : ja(e, t.child, n, l)
    }
    function hh(t, e, n, l, s) {
        n = n.render;
        var u = e.ref;
        if ("ref"in l) {
            var d = {};
            for (var v in l)
                v !== "ref" && (d[v] = l[v])
        } else
            d = l;
        return za(e),
        l = Fs(t, e, n, d, u, s),
        v = Is(),
        t !== null && !It ? ($s(t, e, s),
        bn(t, e, s)) : (Tt && v && Os(e),
        e.flags |= 1,
        fe(t, e, l, s),
        e.child)
    }
    function mh(t, e, n, l, s) {
        if (t === null) {
            var u = n.type;
            return typeof u == "function" && !Ms(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15,
            e.type = u,
            ph(t, e, u, l, s)) : (t = Tr(n.type, null, l, e, e.mode, s),
            t.ref = e.ref,
            t.return = e,
            e.child = t)
        }
        if (u = t.child,
        !Eu(t, s)) {
            var d = u.memoizedProps;
            if (n = n.compare,
            n = n !== null ? n : ii,
            n(d, l) && t.ref === e.ref)
                return bn(t, e, s)
        }
        return e.flags |= 1,
        t = hn(u, l),
        t.ref = e.ref,
        t.return = e,
        e.child = t
    }
    function ph(t, e, n, l, s) {
        if (t !== null) {
            var u = t.memoizedProps;
            if (ii(u, l) && t.ref === e.ref)
                if (It = !1,
                e.pendingProps = l = u,
                Eu(t, s))
                    (t.flags & 131072) !== 0 && (It = !0);
                else
                    return e.lanes = t.lanes,
                    bn(t, e, s)
        }
        return gu(t, e, n, l, s)
    }
    function gh(t, e, n, l) {
        var s = l.children
          , u = t !== null ? t.memoizedState : null;
        if (t === null && e.stateNode === null && (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        l.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (u = u !== null ? u.baseLanes | n : n,
                t !== null) {
                    for (l = e.child = t.child,
                    s = 0; l !== null; )
                        s = s | l.lanes | l.childLanes,
                        l = l.sibling;
                    l = s & ~u
                } else
                    l = 0,
                    e.child = null;
                return yh(t, e, u, n, l)
            }
            if ((n & 536870912) !== 0)
                e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                t !== null && Cr(e, u !== null ? u.cachePool : null),
                u !== null ? bd(e, u) : Zs(),
                Sd(e);
            else
                return l = e.lanes = 536870912,
                yh(t, e, u !== null ? u.baseLanes | n : n, n, l)
        } else
            u !== null ? (Cr(e, u.cachePool),
            bd(e, u),
            Zn(),
            e.memoizedState = null) : (t !== null && Cr(e, null),
            Zs(),
            Zn());
        return fe(t, e, s, n),
        e.child
    }
    function Si(t, e) {
        return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        e.sibling
    }
    function yh(t, e, n, l, s) {
        var u = qs();
        return u = u === null ? null : {
            parent: Pt._currentValue,
            pool: u
        },
        e.memoizedState = {
            baseLanes: n,
            cachePool: u
        },
        t !== null && Cr(e, null),
        Zs(),
        Sd(e),
        t !== null && pl(t, e, l, !0),
        e.childLanes = s,
        null
    }
    function Zr(t, e) {
        return e = Jr({
            mode: e.mode,
            children: e.children
        }, t.mode),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function vh(t, e, n) {
        return ja(e, t.child, null, n),
        t = Zr(e, e.pendingProps),
        t.flags |= 2,
        Le(e),
        e.memoizedState = null,
        t
    }
    function l0(t, e, n) {
        var l = e.pendingProps
          , s = (e.flags & 128) !== 0;
        if (e.flags &= -129,
        t === null) {
            if (Tt) {
                if (l.mode === "hidden")
                    return t = Zr(e, l),
                    e.lanes = 536870912,
                    Si(null, t);
                if (Js(e),
                (t = qt) ? (t = Cm(t, Ze),
                t = t !== null && t.data === "&" ? t : null,
                t !== null && (e.memoizedState = {
                    dehydrated: t,
                    treeContext: Hn !== null ? {
                        id: en,
                        overflow: nn
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                n = ed(t),
                n.return = e,
                e.child = n,
                ue = e,
                qt = null)) : t = null,
                t === null)
                    throw qn(e);
                return e.lanes = 536870912,
                null
            }
            return Zr(e, l)
        }
        var u = t.memoizedState;
        if (u !== null) {
            var d = u.dehydrated;
            if (Js(e),
            s)
                if (e.flags & 256)
                    e.flags &= -257,
                    e = vh(t, e, n);
                else if (e.memoizedState !== null)
                    e.child = t.child,
                    e.flags |= 128,
                    e = null;
                else
                    throw Error(o(558));
            else if (It || pl(t, e, n, !1),
            s = (n & t.childLanes) !== 0,
            It || s) {
                if (l = Ut,
                l !== null && (d = sf(l, n),
                d !== 0 && d !== u.retryLane))
                    throw u.retryLane = d,
                    wa(t, d),
                    we(l, t, d),
                    pu;
                ao(),
                e = vh(t, e, n)
            } else
                t = u.treeContext,
                qt = Je(d.nextSibling),
                ue = e,
                Tt = !0,
                kn = null,
                Ze = !1,
                t !== null && ld(e, t),
                e = Zr(e, l),
                e.flags |= 4096;
            return e
        }
        return t = hn(t.child, {
            mode: l.mode,
            children: l.children
        }),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function Kr(t, e) {
        var n = e.ref;
        if (n === null)
            t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof n != "function" && typeof n != "object")
                throw Error(o(284));
            (t === null || t.ref !== n) && (e.flags |= 4194816)
        }
    }
    function gu(t, e, n, l, s) {
        return za(e),
        n = Fs(t, e, n, l, void 0, s),
        l = Is(),
        t !== null && !It ? ($s(t, e, s),
        bn(t, e, s)) : (Tt && l && Os(e),
        e.flags |= 1,
        fe(t, e, n, s),
        e.child)
    }
    function bh(t, e, n, l, s, u) {
        return za(e),
        e.updateQueue = null,
        n = _d(e, l, n, s),
        xd(t),
        l = Is(),
        t !== null && !It ? ($s(t, e, u),
        bn(t, e, u)) : (Tt && l && Os(e),
        e.flags |= 1,
        fe(t, e, n, u),
        e.child)
    }
    function Sh(t, e, n, l, s) {
        if (za(e),
        e.stateNode === null) {
            var u = fl
              , d = n.contextType;
            typeof d == "object" && d !== null && (u = ce(d)),
            u = new n(l,u),
            e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            u.updater = hu,
            e.stateNode = u,
            u._reactInternals = e,
            u = e.stateNode,
            u.props = l,
            u.state = e.memoizedState,
            u.refs = {},
            Ys(e),
            d = n.contextType,
            u.context = typeof d == "object" && d !== null ? ce(d) : fl,
            u.state = e.memoizedState,
            d = n.getDerivedStateFromProps,
            typeof d == "function" && (du(e, n, d, l),
            u.state = e.memoizedState),
            typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (d = u.state,
            typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
            d !== u.state && hu.enqueueReplaceState(u, u.state, null),
            pi(e, l, u, s),
            mi(),
            u.state = e.memoizedState),
            typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            l = !0
        } else if (t === null) {
            u = e.stateNode;
            var v = e.memoizedProps
              , R = La(n, v);
            u.props = R;
            var D = u.context
              , q = n.contextType;
            d = fl,
            typeof q == "object" && q !== null && (d = ce(q));
            var Z = n.getDerivedStateFromProps;
            q = typeof Z == "function" || typeof u.getSnapshotBeforeUpdate == "function",
            v = e.pendingProps !== v,
            q || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (v || D !== d) && rh(e, u, l, d),
            Yn = !1;
            var L = e.memoizedState;
            u.state = L,
            pi(e, l, u, s),
            mi(),
            D = e.memoizedState,
            v || L !== D || Yn ? (typeof Z == "function" && (du(e, n, Z, l),
            D = e.memoizedState),
            (R = Yn || ih(e, n, R, l, L, D, d)) ? (q || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            e.memoizedProps = l,
            e.memoizedState = D),
            u.props = l,
            u.state = D,
            u.context = d,
            l = R) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            l = !1)
        } else {
            u = e.stateNode,
            Vs(t, e),
            d = e.memoizedProps,
            q = La(n, d),
            u.props = q,
            Z = e.pendingProps,
            L = u.context,
            D = n.contextType,
            R = fl,
            typeof D == "object" && D !== null && (R = ce(D)),
            v = n.getDerivedStateFromProps,
            (D = typeof v == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (d !== Z || L !== R) && rh(e, u, l, R),
            Yn = !1,
            L = e.memoizedState,
            u.state = L,
            pi(e, l, u, s),
            mi();
            var B = e.memoizedState;
            d !== Z || L !== B || Yn || t !== null && t.dependencies !== null && Mr(t.dependencies) ? (typeof v == "function" && (du(e, n, v, l),
            B = e.memoizedState),
            (q = Yn || ih(e, n, q, l, L, B, R) || t !== null && t.dependencies !== null && Mr(t.dependencies)) ? (D || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, B, R),
            typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(l, B, R)),
            typeof u.componentDidUpdate == "function" && (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || d === t.memoizedProps && L === t.memoizedState || (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && L === t.memoizedState || (e.flags |= 1024),
            e.memoizedProps = l,
            e.memoizedState = B),
            u.props = l,
            u.state = B,
            u.context = R,
            l = q) : (typeof u.componentDidUpdate != "function" || d === t.memoizedProps && L === t.memoizedState || (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && L === t.memoizedState || (e.flags |= 1024),
            l = !1)
        }
        return u = l,
        Kr(t, e),
        l = (e.flags & 128) !== 0,
        u || l ? (u = e.stateNode,
        n = l && typeof n.getDerivedStateFromError != "function" ? null : u.render(),
        e.flags |= 1,
        t !== null && l ? (e.child = ja(e, t.child, null, s),
        e.child = ja(e, null, n, s)) : fe(t, e, n, s),
        e.memoizedState = u.state,
        t = e.child) : t = bn(t, e, s),
        t
    }
    function xh(t, e, n, l) {
        return Aa(),
        e.flags |= 256,
        fe(t, e, n, l),
        e.child
    }
    var yu = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function vu(t) {
        return {
            baseLanes: t,
            cachePool: cd()
        }
    }
    function bu(t, e, n) {
        return t = t !== null ? t.childLanes & ~n : 0,
        e && (t |= Be),
        t
    }
    function _h(t, e, n) {
        var l = e.pendingProps, s = !1, u = (e.flags & 128) !== 0, d;
        if ((d = u) || (d = t !== null && t.memoizedState === null ? !1 : (Kt.current & 2) !== 0),
        d && (s = !0,
        e.flags &= -129),
        d = (e.flags & 32) !== 0,
        e.flags &= -33,
        t === null) {
            if (Tt) {
                if (s ? Qn(e) : Zn(),
                (t = qt) ? (t = Cm(t, Ze),
                t = t !== null && t.data !== "&" ? t : null,
                t !== null && (e.memoizedState = {
                    dehydrated: t,
                    treeContext: Hn !== null ? {
                        id: en,
                        overflow: nn
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                n = ed(t),
                n.return = e,
                e.child = n,
                ue = e,
                qt = null)) : t = null,
                t === null)
                    throw qn(e);
                return ec(t) ? e.lanes = 32 : e.lanes = 536870912,
                null
            }
            var v = l.children;
            return l = l.fallback,
            s ? (Zn(),
            s = e.mode,
            v = Jr({
                mode: "hidden",
                children: v
            }, s),
            l = Ta(l, s, n, null),
            v.return = e,
            l.return = e,
            v.sibling = l,
            e.child = v,
            l = e.child,
            l.memoizedState = vu(n),
            l.childLanes = bu(t, d, n),
            e.memoizedState = yu,
            Si(null, l)) : (Qn(e),
            Su(e, v))
        }
        var R = t.memoizedState;
        if (R !== null && (v = R.dehydrated,
        v !== null)) {
            if (u)
                e.flags & 256 ? (Qn(e),
                e.flags &= -257,
                e = xu(t, e, n)) : e.memoizedState !== null ? (Zn(),
                e.child = t.child,
                e.flags |= 128,
                e = null) : (Zn(),
                v = l.fallback,
                s = e.mode,
                l = Jr({
                    mode: "visible",
                    children: l.children
                }, s),
                v = Ta(v, s, n, null),
                v.flags |= 2,
                l.return = e,
                v.return = e,
                l.sibling = v,
                e.child = l,
                ja(e, t.child, null, n),
                l = e.child,
                l.memoizedState = vu(n),
                l.childLanes = bu(t, d, n),
                e.memoizedState = yu,
                e = Si(null, l));
            else if (Qn(e),
            ec(v)) {
                if (d = v.nextSibling && v.nextSibling.dataset,
                d)
                    var D = d.dgst;
                d = D,
                l = Error(o(419)),
                l.stack = "",
                l.digest = d,
                si({
                    value: l,
                    source: null,
                    stack: null
                }),
                e = xu(t, e, n)
            } else if (It || pl(t, e, n, !1),
            d = (n & t.childLanes) !== 0,
            It || d) {
                if (d = Ut,
                d !== null && (l = sf(d, n),
                l !== 0 && l !== R.retryLane))
                    throw R.retryLane = l,
                    wa(t, l),
                    we(d, t, l),
                    pu;
                tc(v) || ao(),
                e = xu(t, e, n)
            } else
                tc(v) ? (e.flags |= 192,
                e.child = t.child,
                e = null) : (t = R.treeContext,
                qt = Je(v.nextSibling),
                ue = e,
                Tt = !0,
                kn = null,
                Ze = !1,
                t !== null && ld(e, t),
                e = Su(e, l.children),
                e.flags |= 4096);
            return e
        }
        return s ? (Zn(),
        v = l.fallback,
        s = e.mode,
        R = t.child,
        D = R.sibling,
        l = hn(R, {
            mode: "hidden",
            children: l.children
        }),
        l.subtreeFlags = R.subtreeFlags & 65011712,
        D !== null ? v = hn(D, v) : (v = Ta(v, s, n, null),
        v.flags |= 2),
        v.return = e,
        l.return = e,
        l.sibling = v,
        e.child = l,
        Si(null, l),
        l = e.child,
        v = t.child.memoizedState,
        v === null ? v = vu(n) : (s = v.cachePool,
        s !== null ? (R = Pt._currentValue,
        s = s.parent !== R ? {
            parent: R,
            pool: R
        } : s) : s = cd(),
        v = {
            baseLanes: v.baseLanes | n,
            cachePool: s
        }),
        l.memoizedState = v,
        l.childLanes = bu(t, d, n),
        e.memoizedState = yu,
        Si(t.child, l)) : (Qn(e),
        n = t.child,
        t = n.sibling,
        n = hn(n, {
            mode: "visible",
            children: l.children
        }),
        n.return = e,
        n.sibling = null,
        t !== null && (d = e.deletions,
        d === null ? (e.deletions = [t],
        e.flags |= 16) : d.push(t)),
        e.child = n,
        e.memoizedState = null,
        n)
    }
    function Su(t, e) {
        return e = Jr({
            mode: "visible",
            children: e
        }, t.mode),
        e.return = t,
        t.child = e
    }
    function Jr(t, e) {
        return t = je(22, t, null, e),
        t.lanes = 0,
        t
    }
    function xu(t, e, n) {
        return ja(e, t.child, null, n),
        t = Su(e, e.pendingProps.children),
        t.flags |= 2,
        e.memoizedState = null,
        t
    }
    function Eh(t, e, n) {
        t.lanes |= e;
        var l = t.alternate;
        l !== null && (l.lanes |= e),
        Us(t.return, e, n)
    }
    function _u(t, e, n, l, s, u) {
        var d = t.memoizedState;
        d === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: n,
            tailMode: s,
            treeForkCount: u
        } : (d.isBackwards = e,
        d.rendering = null,
        d.renderingStartTime = 0,
        d.last = l,
        d.tail = n,
        d.tailMode = s,
        d.treeForkCount = u)
    }
    function Rh(t, e, n) {
        var l = e.pendingProps
          , s = l.revealOrder
          , u = l.tail;
        l = l.children;
        var d = Kt.current
          , v = (d & 2) !== 0;
        if (v ? (d = d & 1 | 2,
        e.flags |= 128) : d &= 1,
        F(Kt, d),
        fe(t, e, l, n),
        l = Tt ? oi : 0,
        !v && t !== null && (t.flags & 128) !== 0)
            t: for (t = e.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && Eh(t, n, e);
                else if (t.tag === 19)
                    Eh(t, n, e);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break t;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        break t;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        switch (s) {
        case "forwards":
            for (n = e.child,
            s = null; n !== null; )
                t = n.alternate,
                t !== null && Ur(t) === null && (s = n),
                n = n.sibling;
            n = s,
            n === null ? (s = e.child,
            e.child = null) : (s = n.sibling,
            n.sibling = null),
            _u(e, !1, s, n, u, l);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (n = null,
            s = e.child,
            e.child = null; s !== null; ) {
                if (t = s.alternate,
                t !== null && Ur(t) === null) {
                    e.child = s;
                    break
                }
                t = s.sibling,
                s.sibling = n,
                n = s,
                s = t
            }
            _u(e, !0, n, null, u, l);
            break;
        case "together":
            _u(e, !1, null, null, void 0, l);
            break;
        default:
            e.memoizedState = null
        }
        return e.child
    }
    function bn(t, e, n) {
        if (t !== null && (e.dependencies = t.dependencies),
        Pn |= e.lanes,
        (n & e.childLanes) === 0)
            if (t !== null) {
                if (pl(t, e, n, !1),
                (n & e.childLanes) === 0)
                    return null
            } else
                return null;
        if (t !== null && e.child !== t.child)
            throw Error(o(153));
        if (e.child !== null) {
            for (t = e.child,
            n = hn(t, t.pendingProps),
            e.child = n,
            n.return = e; t.sibling !== null; )
                t = t.sibling,
                n = n.sibling = hn(t, t.pendingProps),
                n.return = e;
            n.sibling = null
        }
        return e.child
    }
    function Eu(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies,
        !!(t !== null && Mr(t)))
    }
    function i0(t, e, n) {
        switch (e.tag) {
        case 3:
            Yt(e, e.stateNode.containerInfo),
            Gn(e, Pt, t.memoizedState.cache),
            Aa();
            break;
        case 27:
        case 5:
            ke(e);
            break;
        case 4:
            Yt(e, e.stateNode.containerInfo);
            break;
        case 10:
            Gn(e, e.type, e.memoizedProps.value);
            break;
        case 31:
            if (e.memoizedState !== null)
                return e.flags |= 128,
                Js(e),
                null;
            break;
        case 13:
            var l = e.memoizedState;
            if (l !== null)
                return l.dehydrated !== null ? (Qn(e),
                e.flags |= 128,
                null) : (n & e.child.childLanes) !== 0 ? _h(t, e, n) : (Qn(e),
                t = bn(t, e, n),
                t !== null ? t.sibling : null);
            Qn(e);
            break;
        case 19:
            var s = (t.flags & 128) !== 0;
            if (l = (n & e.childLanes) !== 0,
            l || (pl(t, e, n, !1),
            l = (n & e.childLanes) !== 0),
            s) {
                if (l)
                    return Rh(t, e, n);
                e.flags |= 128
            }
            if (s = e.memoizedState,
            s !== null && (s.rendering = null,
            s.tail = null,
            s.lastEffect = null),
            F(Kt, Kt.current),
            l)
                break;
            return null;
        case 22:
            return e.lanes = 0,
            gh(t, e, n, e.pendingProps);
        case 24:
            Gn(e, Pt, t.memoizedState.cache)
        }
        return bn(t, e, n)
    }
    function wh(t, e, n) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps)
                It = !0;
            else {
                if (!Eu(t, n) && (e.flags & 128) === 0)
                    return It = !1,
                    i0(t, e, n);
                It = (t.flags & 131072) !== 0
            }
        else
            It = !1,
            Tt && (e.flags & 1048576) !== 0 && ad(e, oi, e.index);
        switch (e.lanes = 0,
        e.tag) {
        case 16:
            t: {
                var l = e.pendingProps;
                if (t = Oa(e.elementType),
                e.type = t,
                typeof t == "function")
                    Ms(t) ? (l = La(t, l),
                    e.tag = 1,
                    e = Sh(null, e, t, l, n)) : (e.tag = 0,
                    e = gu(null, e, t, l, n));
                else {
                    if (t != null) {
                        var s = t.$$typeof;
                        if (s === k) {
                            e.tag = 11,
                            e = hh(null, e, t, l, n);
                            break t
                        } else if (s === X) {
                            e.tag = 14,
                            e = mh(null, e, t, l, n);
                            break t
                        }
                    }
                    throw e = Ht(t) || t,
                    Error(o(306, e, ""))
                }
            }
            return e;
        case 0:
            return gu(t, e, e.type, e.pendingProps, n);
        case 1:
            return l = e.type,
            s = La(l, e.pendingProps),
            Sh(t, e, l, s, n);
        case 3:
            t: {
                if (Yt(e, e.stateNode.containerInfo),
                t === null)
                    throw Error(o(387));
                l = e.pendingProps;
                var u = e.memoizedState;
                s = u.element,
                Vs(t, e),
                pi(e, l, null, n);
                var d = e.memoizedState;
                if (l = d.cache,
                Gn(e, Pt, l),
                l !== u.cache && Bs(e, [Pt], n, !0),
                mi(),
                l = d.element,
                u.isDehydrated)
                    if (u = {
                        element: l,
                        isDehydrated: !1,
                        cache: d.cache
                    },
                    e.updateQueue.baseState = u,
                    e.memoizedState = u,
                    e.flags & 256) {
                        e = xh(t, e, l, n);
                        break t
                    } else if (l !== s) {
                        s = Ve(Error(o(424)), e),
                        si(s),
                        e = xh(t, e, l, n);
                        break t
                    } else
                        for (t = e.stateNode.containerInfo,
                        t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t,
                        qt = Je(t.firstChild),
                        ue = e,
                        Tt = !0,
                        kn = null,
                        Ze = !0,
                        n = gd(e, null, l, n),
                        e.child = n; n; )
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling;
                else {
                    if (Aa(),
                    l === s) {
                        e = bn(t, e, n);
                        break t
                    }
                    fe(t, e, l, n)
                }
                e = e.child
            }
            return e;
        case 26:
            return Kr(t, e),
            t === null ? (n = Um(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : Tt || (n = e.type,
            t = e.pendingProps,
            l = co(st.current).createElement(n),
            l[se] = e,
            l[be] = t,
            de(l, n, t),
            le(l),
            e.stateNode = l) : e.memoizedState = Um(e.type, t.memoizedProps, e.pendingProps, t.memoizedState),
            null;
        case 27:
            return ke(e),
            t === null && Tt && (l = e.stateNode = jm(e.type, e.pendingProps, st.current),
            ue = e,
            Ze = !0,
            s = qt,
            ta(e.type) ? (nc = s,
            qt = Je(l.firstChild)) : qt = s),
            fe(t, e, e.pendingProps.children, n),
            Kr(t, e),
            t === null && (e.flags |= 4194304),
            e.child;
        case 5:
            return t === null && Tt && ((s = l = qt) && (l = L0(l, e.type, e.pendingProps, Ze),
            l !== null ? (e.stateNode = l,
            ue = e,
            qt = Je(l.firstChild),
            Ze = !1,
            s = !0) : s = !1),
            s || qn(e)),
            ke(e),
            s = e.type,
            u = e.pendingProps,
            d = t !== null ? t.memoizedProps : null,
            l = u.children,
            Iu(s, u) ? l = null : d !== null && Iu(s, d) && (e.flags |= 32),
            e.memoizedState !== null && (s = Fs(t, e, Fv, null, null, n),
            Li._currentValue = s),
            Kr(t, e),
            fe(t, e, l, n),
            e.child;
        case 6:
            return t === null && Tt && ((t = n = qt) && (n = U0(n, e.pendingProps, Ze),
            n !== null ? (e.stateNode = n,
            ue = e,
            qt = null,
            t = !0) : t = !1),
            t || qn(e)),
            null;
        case 13:
            return _h(t, e, n);
        case 4:
            return Yt(e, e.stateNode.containerInfo),
            l = e.pendingProps,
            t === null ? e.child = ja(e, null, l, n) : fe(t, e, l, n),
            e.child;
        case 11:
            return hh(t, e, e.type, e.pendingProps, n);
        case 7:
            return fe(t, e, e.pendingProps, n),
            e.child;
        case 8:
            return fe(t, e, e.pendingProps.children, n),
            e.child;
        case 12:
            return fe(t, e, e.pendingProps.children, n),
            e.child;
        case 10:
            return l = e.pendingProps,
            Gn(e, e.type, l.value),
            fe(t, e, l.children, n),
            e.child;
        case 9:
            return s = e.type._context,
            l = e.pendingProps.children,
            za(e),
            s = ce(s),
            l = l(s),
            e.flags |= 1,
            fe(t, e, l, n),
            e.child;
        case 14:
            return mh(t, e, e.type, e.pendingProps, n);
        case 15:
            return ph(t, e, e.type, e.pendingProps, n);
        case 19:
            return Rh(t, e, n);
        case 31:
            return l0(t, e, n);
        case 22:
            return gh(t, e, n, e.pendingProps);
        case 24:
            return za(e),
            l = ce(Pt),
            t === null ? (s = qs(),
            s === null && (s = Ut,
            u = Hs(),
            s.pooledCache = u,
            u.refCount++,
            u !== null && (s.pooledCacheLanes |= n),
            s = u),
            e.memoizedState = {
                parent: l,
                cache: s
            },
            Ys(e),
            Gn(e, Pt, s)) : ((t.lanes & n) !== 0 && (Vs(t, e),
            pi(e, null, null, n),
            mi()),
            s = t.memoizedState,
            u = e.memoizedState,
            s.parent !== l ? (s = {
                parent: l,
                cache: l
            },
            e.memoizedState = s,
            e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s),
            Gn(e, Pt, l)) : (l = u.cache,
            Gn(e, Pt, l),
            l !== s.cache && Bs(e, [Pt], n, !0))),
            fe(t, e, e.pendingProps.children, n),
            e.child;
        case 29:
            throw e.pendingProps
        }
        throw Error(o(156, e.tag))
    }
    function Sn(t) {
        t.flags |= 4
    }
    function Ru(t, e, n, l, s) {
        if ((e = (t.mode & 32) !== 0) && (e = !1),
        e) {
            if (t.flags |= 16777216,
            (s & 335544128) === s)
                if (t.stateNode.complete)
                    t.flags |= 8192;
                else if ($h())
                    t.flags |= 8192;
                else
                    throw Na = Nr,
                    Gs
        } else
            t.flags &= -16777217
    }
    function Th(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
            t.flags &= -16777217;
        else if (t.flags |= 16777216,
        !Gm(e))
            if ($h())
                t.flags |= 8192;
            else
                throw Na = Nr,
                Gs
    }
    function Pr(t, e) {
        e !== null && (t.flags |= 4),
        t.flags & 16384 && (e = t.tag !== 22 ? lf() : 536870912,
        t.lanes |= e,
        Al |= e)
    }
    function xi(t, e) {
        if (!Tt)
            switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var n = null; e !== null; )
                    e.alternate !== null && (n = e),
                    e = e.sibling;
                n === null ? t.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = t.tail;
                for (var l = null; n !== null; )
                    n.alternate !== null && (l = n),
                    n = n.sibling;
                l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null
            }
    }
    function Gt(t) {
        var e = t.alternate !== null && t.alternate.child === t.child
          , n = 0
          , l = 0;
        if (e)
            for (var s = t.child; s !== null; )
                n |= s.lanes | s.childLanes,
                l |= s.subtreeFlags & 65011712,
                l |= s.flags & 65011712,
                s.return = t,
                s = s.sibling;
        else
            for (s = t.child; s !== null; )
                n |= s.lanes | s.childLanes,
                l |= s.subtreeFlags,
                l |= s.flags,
                s.return = t,
                s = s.sibling;
        return t.subtreeFlags |= l,
        t.childLanes = n,
        e
    }
    function r0(t, e, n) {
        var l = e.pendingProps;
        switch (Ns(e),
        e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Gt(e),
            null;
        case 1:
            return Gt(e),
            null;
        case 3:
            return n = e.stateNode,
            l = null,
            t !== null && (l = t.memoizedState.cache),
            e.memoizedState.cache !== l && (e.flags |= 2048),
            gn(Pt),
            dt(),
            n.pendingContext && (n.context = n.pendingContext,
            n.pendingContext = null),
            (t === null || t.child === null) && (ml(e) ? Sn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024,
            Ds())),
            Gt(e),
            null;
        case 26:
            var s = e.type
              , u = e.memoizedState;
            return t === null ? (Sn(e),
            u !== null ? (Gt(e),
            Th(e, u)) : (Gt(e),
            Ru(e, s, null, l, n))) : u ? u !== t.memoizedState ? (Sn(e),
            Gt(e),
            Th(e, u)) : (Gt(e),
            e.flags &= -16777217) : (t = t.memoizedProps,
            t !== l && Sn(e),
            Gt(e),
            Ru(e, s, t, l, n)),
            null;
        case 27:
            if (ve(e),
            n = st.current,
            s = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== l && Sn(e);
            else {
                if (!l) {
                    if (e.stateNode === null)
                        throw Error(o(166));
                    return Gt(e),
                    null
                }
                t = tt.current,
                ml(e) ? id(e) : (t = jm(s, l, n),
                e.stateNode = t,
                Sn(e))
            }
            return Gt(e),
            null;
        case 5:
            if (ve(e),
            s = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== l && Sn(e);
            else {
                if (!l) {
                    if (e.stateNode === null)
                        throw Error(o(166));
                    return Gt(e),
                    null
                }
                if (u = tt.current,
                ml(e))
                    id(e);
                else {
                    var d = co(st.current);
                    switch (u) {
                    case 1:
                        u = d.createElementNS("http://www.w3.org/2000/svg", s);
                        break;
                    case 2:
                        u = d.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                        break;
                    default:
                        switch (s) {
                        case "svg":
                            u = d.createElementNS("http://www.w3.org/2000/svg", s);
                            break;
                        case "math":
                            u = d.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                            break;
                        case "script":
                            u = d.createElement("div"),
                            u.innerHTML = "<script><\/script>",
                            u = u.removeChild(u.firstChild);
                            break;
                        case "select":
                            u = typeof l.is == "string" ? d.createElement("select", {
                                is: l.is
                            }) : d.createElement("select"),
                            l.multiple ? u.multiple = !0 : l.size && (u.size = l.size);
                            break;
                        default:
                            u = typeof l.is == "string" ? d.createElement(s, {
                                is: l.is
                            }) : d.createElement(s)
                        }
                    }
                    u[se] = e,
                    u[be] = l;
                    t: for (d = e.child; d !== null; ) {
                        if (d.tag === 5 || d.tag === 6)
                            u.appendChild(d.stateNode);
                        else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                            d.child.return = d,
                            d = d.child;
                            continue
                        }
                        if (d === e)
                            break t;
                        for (; d.sibling === null; ) {
                            if (d.return === null || d.return === e)
                                break t;
                            d = d.return
                        }
                        d.sibling.return = d.return,
                        d = d.sibling
                    }
                    e.stateNode = u;
                    t: switch (de(u, s, l),
                    s) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        l = !!l.autoFocus;
                        break t;
                    case "img":
                        l = !0;
                        break t;
                    default:
                        l = !1
                    }
                    l && Sn(e)
                }
            }
            return Gt(e),
            Ru(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
            null;
        case 6:
            if (t && e.stateNode != null)
                t.memoizedProps !== l && Sn(e);
            else {
                if (typeof l != "string" && e.stateNode === null)
                    throw Error(o(166));
                if (t = st.current,
                ml(e)) {
                    if (t = e.stateNode,
                    n = e.memoizedProps,
                    l = null,
                    s = ue,
                    s !== null)
                        switch (s.tag) {
                        case 27:
                        case 5:
                            l = s.memoizedProps
                        }
                    t[se] = e,
                    t = !!(t.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || _m(t.nodeValue, n)),
                    t || qn(e, !0)
                } else
                    t = co(t).createTextNode(l),
                    t[se] = e,
                    e.stateNode = t
            }
            return Gt(e),
            null;
        case 31:
            if (n = e.memoizedState,
            t === null || t.memoizedState !== null) {
                if (l = ml(e),
                n !== null) {
                    if (t === null) {
                        if (!l)
                            throw Error(o(318));
                        if (t = e.memoizedState,
                        t = t !== null ? t.dehydrated : null,
                        !t)
                            throw Error(o(557));
                        t[se] = e
                    } else
                        Aa(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    Gt(e),
                    t = !1
                } else
                    n = Ds(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n),
                    t = !0;
                if (!t)
                    return e.flags & 256 ? (Le(e),
                    e) : (Le(e),
                    null);
                if ((e.flags & 128) !== 0)
                    throw Error(o(558))
            }
            return Gt(e),
            null;
        case 13:
            if (l = e.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (s = ml(e),
                l !== null && l.dehydrated !== null) {
                    if (t === null) {
                        if (!s)
                            throw Error(o(318));
                        if (s = e.memoizedState,
                        s = s !== null ? s.dehydrated : null,
                        !s)
                            throw Error(o(317));
                        s[se] = e
                    } else
                        Aa(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    Gt(e),
                    s = !1
                } else
                    s = Ds(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s),
                    s = !0;
                if (!s)
                    return e.flags & 256 ? (Le(e),
                    e) : (Le(e),
                    null)
            }
            return Le(e),
            (e.flags & 128) !== 0 ? (e.lanes = n,
            e) : (n = l !== null,
            t = t !== null && t.memoizedState !== null,
            n && (l = e.child,
            s = null,
            l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (s = l.alternate.memoizedState.cachePool.pool),
            u = null,
            l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool),
            u !== s && (l.flags |= 2048)),
            n !== t && n && (e.child.flags |= 8192),
            Pr(e, e.updateQueue),
            Gt(e),
            null);
        case 4:
            return dt(),
            t === null && Zu(e.stateNode.containerInfo),
            Gt(e),
            null;
        case 10:
            return gn(e.type),
            Gt(e),
            null;
        case 19:
            if (Y(Kt),
            l = e.memoizedState,
            l === null)
                return Gt(e),
                null;
            if (s = (e.flags & 128) !== 0,
            u = l.rendering,
            u === null)
                if (s)
                    xi(l, !1);
                else {
                    if (Zt !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = e.child; t !== null; ) {
                            if (u = Ur(t),
                            u !== null) {
                                for (e.flags |= 128,
                                xi(l, !1),
                                t = u.updateQueue,
                                e.updateQueue = t,
                                Pr(e, t),
                                e.subtreeFlags = 0,
                                t = n,
                                n = e.child; n !== null; )
                                    td(n, t),
                                    n = n.sibling;
                                return F(Kt, Kt.current & 1 | 2),
                                Tt && mn(e, l.treeForkCount),
                                e.child
                            }
                            t = t.sibling
                        }
                    l.tail !== null && he() > to && (e.flags |= 128,
                    s = !0,
                    xi(l, !1),
                    e.lanes = 4194304)
                }
            else {
                if (!s)
                    if (t = Ur(u),
                    t !== null) {
                        if (e.flags |= 128,
                        s = !0,
                        t = t.updateQueue,
                        e.updateQueue = t,
                        Pr(e, t),
                        xi(l, !0),
                        l.tail === null && l.tailMode === "hidden" && !u.alternate && !Tt)
                            return Gt(e),
                            null
                    } else
                        2 * he() - l.renderingStartTime > to && n !== 536870912 && (e.flags |= 128,
                        s = !0,
                        xi(l, !1),
                        e.lanes = 4194304);
                l.isBackwards ? (u.sibling = e.child,
                e.child = u) : (t = l.last,
                t !== null ? t.sibling = u : e.child = u,
                l.last = u)
            }
            return l.tail !== null ? (t = l.tail,
            l.rendering = t,
            l.tail = t.sibling,
            l.renderingStartTime = he(),
            t.sibling = null,
            n = Kt.current,
            F(Kt, s ? n & 1 | 2 : n & 1),
            Tt && mn(e, l.treeForkCount),
            t) : (Gt(e),
            null);
        case 22:
        case 23:
            return Le(e),
            Ks(),
            l = e.memoizedState !== null,
            t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192),
            l ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Gt(e),
            e.subtreeFlags & 6 && (e.flags |= 8192)) : Gt(e),
            n = e.updateQueue,
            n !== null && Pr(e, n.retryQueue),
            n = null,
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
            l = null,
            e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
            l !== n && (e.flags |= 2048),
            t !== null && Y(Ca),
            null;
        case 24:
            return n = null,
            t !== null && (n = t.memoizedState.cache),
            e.memoizedState.cache !== n && (e.flags |= 2048),
            gn(Pt),
            Gt(e),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(o(156, e.tag))
    }
    function o0(t, e) {
        switch (Ns(e),
        e.tag) {
        case 1:
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 3:
            return gn(Pt),
            dt(),
            t = e.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 26:
        case 27:
        case 5:
            return ve(e),
            null;
        case 31:
            if (e.memoizedState !== null) {
                if (Le(e),
                e.alternate === null)
                    throw Error(o(340));
                Aa()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 13:
            if (Le(e),
            t = e.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (e.alternate === null)
                    throw Error(o(340));
                Aa()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 19:
            return Y(Kt),
            null;
        case 4:
            return dt(),
            null;
        case 10:
            return gn(e.type),
            null;
        case 22:
        case 23:
            return Le(e),
            Ks(),
            t !== null && Y(Ca),
            t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 24:
            return gn(Pt),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Ah(t, e) {
        switch (Ns(e),
        e.tag) {
        case 3:
            gn(Pt),
            dt();
            break;
        case 26:
        case 27:
        case 5:
            ve(e);
            break;
        case 4:
            dt();
            break;
        case 31:
            e.memoizedState !== null && Le(e);
            break;
        case 13:
            Le(e);
            break;
        case 19:
            Y(Kt);
            break;
        case 10:
            gn(e.type);
            break;
        case 22:
        case 23:
            Le(e),
            Ks(),
            t !== null && Y(Ca);
            break;
        case 24:
            gn(Pt)
        }
    }
    function _i(t, e) {
        try {
            var n = e.updateQueue
              , l = n !== null ? n.lastEffect : null;
            if (l !== null) {
                var s = l.next;
                n = s;
                do {
                    if ((n.tag & t) === t) {
                        l = void 0;
                        var u = n.create
                          , d = n.inst;
                        l = u(),
                        d.destroy = l
                    }
                    n = n.next
                } while (n !== s)
            }
        } catch (v) {
            Nt(e, e.return, v)
        }
    }
    function Kn(t, e, n) {
        try {
            var l = e.updateQueue
              , s = l !== null ? l.lastEffect : null;
            if (s !== null) {
                var u = s.next;
                l = u;
                do {
                    if ((l.tag & t) === t) {
                        var d = l.inst
                          , v = d.destroy;
                        if (v !== void 0) {
                            d.destroy = void 0,
                            s = e;
                            var R = n
                              , D = v;
                            try {
                                D()
                            } catch (q) {
                                Nt(s, R, q)
                            }
                        }
                    }
                    l = l.next
                } while (l !== u)
            }
        } catch (q) {
            Nt(e, e.return, q)
        }
    }
    function Mh(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var n = t.stateNode;
            try {
                vd(e, n)
            } catch (l) {
                Nt(t, t.return, l)
            }
        }
    }
    function zh(t, e, n) {
        n.props = La(t.type, t.memoizedProps),
        n.state = t.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (l) {
            Nt(t, e, l)
        }
    }
    function Ei(t, e) {
        try {
            var n = t.ref;
            if (n !== null) {
                switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    var l = t.stateNode;
                    break;
                case 30:
                    l = t.stateNode;
                    break;
                default:
                    l = t.stateNode
                }
                typeof n == "function" ? t.refCleanup = n(l) : n.current = l
            }
        } catch (s) {
            Nt(t, e, s)
        }
    }
    function an(t, e) {
        var n = t.ref
          , l = t.refCleanup;
        if (n !== null)
            if (typeof l == "function")
                try {
                    l()
                } catch (s) {
                    Nt(t, e, s)
                } finally {
                    t.refCleanup = null,
                    t = t.alternate,
                    t != null && (t.refCleanup = null)
                }
            else if (typeof n == "function")
                try {
                    n(null)
                } catch (s) {
                    Nt(t, e, s)
                }
            else
                n.current = null
    }
    function Ch(t) {
        var e = t.type
          , n = t.memoizedProps
          , l = t.stateNode;
        try {
            t: switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                n.autoFocus && l.focus();
                break t;
            case "img":
                n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet)
            }
        } catch (s) {
            Nt(t, t.return, s)
        }
    }
    function wu(t, e, n) {
        try {
            var l = t.stateNode;
            z0(l, t.type, n, e),
            l[be] = e
        } catch (s) {
            Nt(t, t.return, s)
        }
    }
    function Oh(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ta(t.type) || t.tag === 4
    }
    function Tu(t) {
        t: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || Oh(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if (t.tag === 27 && ta(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                    continue t;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function Au(t, e, n) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n,
            e.appendChild(t),
            n = n._reactRootContainer,
            n != null || e.onclick !== null || (e.onclick = fn));
        else if (l !== 4 && (l === 27 && ta(t.type) && (n = t.stateNode,
        e = null),
        t = t.child,
        t !== null))
            for (Au(t, e, n),
            t = t.sibling; t !== null; )
                Au(t, e, n),
                t = t.sibling
    }
    function Fr(t, e, n) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            e ? n.insertBefore(t, e) : n.appendChild(t);
        else if (l !== 4 && (l === 27 && ta(t.type) && (n = t.stateNode),
        t = t.child,
        t !== null))
            for (Fr(t, e, n),
            t = t.sibling; t !== null; )
                Fr(t, e, n),
                t = t.sibling
    }
    function Nh(t) {
        var e = t.stateNode
          , n = t.memoizedProps;
        try {
            for (var l = t.type, s = e.attributes; s.length; )
                e.removeAttributeNode(s[0]);
            de(e, l, n),
            e[se] = t,
            e[be] = n
        } catch (u) {
            Nt(t, t.return, u)
        }
    }
    var xn = !1
      , $t = !1
      , Mu = !1
      , jh = typeof WeakSet == "function" ? WeakSet : Set
      , ie = null;
    function s0(t, e) {
        if (t = t.containerInfo,
        Pu = vo,
        t = Qf(t),
        xs(t)) {
            if ("selectionStart"in t)
                var n = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                t: {
                    n = (n = t.ownerDocument) && n.defaultView || window;
                    var l = n.getSelection && n.getSelection();
                    if (l && l.rangeCount !== 0) {
                        n = l.anchorNode;
                        var s = l.anchorOffset
                          , u = l.focusNode;
                        l = l.focusOffset;
                        try {
                            n.nodeType,
                            u.nodeType
                        } catch {
                            n = null;
                            break t
                        }
                        var d = 0
                          , v = -1
                          , R = -1
                          , D = 0
                          , q = 0
                          , Z = t
                          , L = null;
                        e: for (; ; ) {
                            for (var B; Z !== n || s !== 0 && Z.nodeType !== 3 || (v = d + s),
                            Z !== u || l !== 0 && Z.nodeType !== 3 || (R = d + l),
                            Z.nodeType === 3 && (d += Z.nodeValue.length),
                            (B = Z.firstChild) !== null; )
                                L = Z,
                                Z = B;
                            for (; ; ) {
                                if (Z === t)
                                    break e;
                                if (L === n && ++D === s && (v = d),
                                L === u && ++q === l && (R = d),
                                (B = Z.nextSibling) !== null)
                                    break;
                                Z = L,
                                L = Z.parentNode
                            }
                            Z = B
                        }
                        n = v === -1 || R === -1 ? null : {
                            start: v,
                            end: R
                        }
                    } else
                        n = null
                }
            n = n || {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (Fu = {
            focusedElem: t,
            selectionRange: n
        },
        vo = !1,
        ie = e; ie !== null; )
            if (e = ie,
            t = e.child,
            (e.subtreeFlags & 1028) !== 0 && t !== null)
                t.return = e,
                ie = t;
            else
                for (; ie !== null; ) {
                    switch (e = ie,
                    u = e.alternate,
                    t = e.flags,
                    e.tag) {
                    case 0:
                        if ((t & 4) !== 0 && (t = e.updateQueue,
                        t = t !== null ? t.events : null,
                        t !== null))
                            for (n = 0; n < t.length; n++)
                                s = t[n],
                                s.ref.impl = s.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && u !== null) {
                            t = void 0,
                            n = e,
                            s = u.memoizedProps,
                            u = u.memoizedState,
                            l = n.stateNode;
                            try {
                                var at = La(n.type, s);
                                t = l.getSnapshotBeforeUpdate(at, u),
                                l.__reactInternalSnapshotBeforeUpdate = t
                            } catch (ft) {
                                Nt(n, n.return, ft)
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = e.stateNode.containerInfo,
                            n = t.nodeType,
                            n === 9)
                                Wu(t);
                            else if (n === 1)
                                switch (t.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Wu(t);
                                    break;
                                default:
                                    t.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((t & 1024) !== 0)
                            throw Error(o(163))
                    }
                    if (t = e.sibling,
                    t !== null) {
                        t.return = e.return,
                        ie = t;
                        break
                    }
                    ie = e.return
                }
    }
    function Dh(t, e, n) {
        var l = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 15:
            En(t, n),
            l & 4 && _i(5, n);
            break;
        case 1:
            if (En(t, n),
            l & 4)
                if (t = n.stateNode,
                e === null)
                    try {
                        t.componentDidMount()
                    } catch (d) {
                        Nt(n, n.return, d)
                    }
                else {
                    var s = La(n.type, e.memoizedProps);
                    e = e.memoizedState;
                    try {
                        t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate)
                    } catch (d) {
                        Nt(n, n.return, d)
                    }
                }
            l & 64 && Mh(n),
            l & 512 && Ei(n, n.return);
            break;
        case 3:
            if (En(t, n),
            l & 64 && (t = n.updateQueue,
            t !== null)) {
                if (e = null,
                n.child !== null)
                    switch (n.child.tag) {
                    case 27:
                    case 5:
                        e = n.child.stateNode;
                        break;
                    case 1:
                        e = n.child.stateNode
                    }
                try {
                    vd(t, e)
                } catch (d) {
                    Nt(n, n.return, d)
                }
            }
            break;
        case 27:
            e === null && l & 4 && Nh(n);
        case 26:
        case 5:
            En(t, n),
            e === null && l & 4 && Ch(n),
            l & 512 && Ei(n, n.return);
            break;
        case 12:
            En(t, n);
            break;
        case 31:
            En(t, n),
            l & 4 && Bh(t, n);
            break;
        case 13:
            En(t, n),
            l & 4 && Hh(t, n),
            l & 64 && (t = n.memoizedState,
            t !== null && (t = t.dehydrated,
            t !== null && (n = y0.bind(null, n),
            B0(t, n))));
            break;
        case 22:
            if (l = n.memoizedState !== null || xn,
            !l) {
                e = e !== null && e.memoizedState !== null || $t,
                s = xn;
                var u = $t;
                xn = l,
                ($t = e) && !u ? Rn(t, n, (n.subtreeFlags & 8772) !== 0) : En(t, n),
                xn = s,
                $t = u
            }
            break;
        case 30:
            break;
        default:
            En(t, n)
        }
    }
    function Lh(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null,
        Lh(e)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (e = t.stateNode,
        e !== null && ls(e)),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    var Vt = null
      , xe = !1;
    function _n(t, e, n) {
        for (n = n.child; n !== null; )
            Uh(t, e, n),
            n = n.sibling
    }
    function Uh(t, e, n) {
        if (Ce && typeof Ce.onCommitFiberUnmount == "function")
            try {
                Ce.onCommitFiberUnmount(Kl, n)
            } catch {}
        switch (n.tag) {
        case 26:
            $t || an(n, e),
            _n(t, e, n),
            n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode,
            n.parentNode.removeChild(n));
            break;
        case 27:
            $t || an(n, e);
            var l = Vt
              , s = xe;
            ta(n.type) && (Vt = n.stateNode,
            xe = !1),
            _n(t, e, n),
            Ni(n.stateNode),
            Vt = l,
            xe = s;
            break;
        case 5:
            $t || an(n, e);
        case 6:
            if (l = Vt,
            s = xe,
            Vt = null,
            _n(t, e, n),
            Vt = l,
            xe = s,
            Vt !== null)
                if (xe)
                    try {
                        (Vt.nodeType === 9 ? Vt.body : Vt.nodeName === "HTML" ? Vt.ownerDocument.body : Vt).removeChild(n.stateNode)
                    } catch (u) {
                        Nt(n, e, u)
                    }
                else
                    try {
                        Vt.removeChild(n.stateNode)
                    } catch (u) {
                        Nt(n, e, u)
                    }
            break;
        case 18:
            Vt !== null && (xe ? (t = Vt,
            Mm(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode),
            Ll(t)) : Mm(Vt, n.stateNode));
            break;
        case 4:
            l = Vt,
            s = xe,
            Vt = n.stateNode.containerInfo,
            xe = !0,
            _n(t, e, n),
            Vt = l,
            xe = s;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Kn(2, n, e),
            $t || Kn(4, n, e),
            _n(t, e, n);
            break;
        case 1:
            $t || (an(n, e),
            l = n.stateNode,
            typeof l.componentWillUnmount == "function" && zh(n, e, l)),
            _n(t, e, n);
            break;
        case 21:
            _n(t, e, n);
            break;
        case 22:
            $t = (l = $t) || n.memoizedState !== null,
            _n(t, e, n),
            $t = l;
            break;
        default:
            _n(t, e, n)
        }
    }
    function Bh(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null))) {
            t = t.dehydrated;
            try {
                Ll(t)
            } catch (n) {
                Nt(e, e.return, n)
            }
        }
    }
    function Hh(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null))))
            try {
                Ll(t)
            } catch (n) {
                Nt(e, e.return, n)
            }
    }
    function u0(t) {
        switch (t.tag) {
        case 31:
        case 13:
        case 19:
            var e = t.stateNode;
            return e === null && (e = t.stateNode = new jh),
            e;
        case 22:
            return t = t.stateNode,
            e = t._retryCache,
            e === null && (e = t._retryCache = new jh),
            e;
        default:
            throw Error(o(435, t.tag))
        }
    }
    function Ir(t, e) {
        var n = u0(t);
        e.forEach(function(l) {
            if (!n.has(l)) {
                n.add(l);
                var s = v0.bind(null, t, l);
                l.then(s, s)
            }
        })
    }
    function _e(t, e) {
        var n = e.deletions;
        if (n !== null)
            for (var l = 0; l < n.length; l++) {
                var s = n[l]
                  , u = t
                  , d = e
                  , v = d;
                t: for (; v !== null; ) {
                    switch (v.tag) {
                    case 27:
                        if (ta(v.type)) {
                            Vt = v.stateNode,
                            xe = !1;
                            break t
                        }
                        break;
                    case 5:
                        Vt = v.stateNode,
                        xe = !1;
                        break t;
                    case 3:
                    case 4:
                        Vt = v.stateNode.containerInfo,
                        xe = !0;
                        break t
                    }
                    v = v.return
                }
                if (Vt === null)
                    throw Error(o(160));
                Uh(u, d, s),
                Vt = null,
                xe = !1,
                u = s.alternate,
                u !== null && (u.return = null),
                s.return = null
            }
        if (e.subtreeFlags & 13886)
            for (e = e.child; e !== null; )
                kh(e, t),
                e = e.sibling
    }
    var $e = null;
    function kh(t, e) {
        var n = t.alternate
          , l = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            _e(e, t),
            Ee(t),
            l & 4 && (Kn(3, t, t.return),
            _i(3, t),
            Kn(5, t, t.return));
            break;
        case 1:
            _e(e, t),
            Ee(t),
            l & 512 && ($t || n === null || an(n, n.return)),
            l & 64 && xn && (t = t.updateQueue,
            t !== null && (l = t.callbacks,
            l !== null && (n = t.shared.hiddenCallbacks,
            t.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
            break;
        case 26:
            var s = $e;
            if (_e(e, t),
            Ee(t),
            l & 512 && ($t || n === null || an(n, n.return)),
            l & 4) {
                var u = n !== null ? n.memoizedState : null;
                if (l = t.memoizedState,
                n === null)
                    if (l === null)
                        if (t.stateNode === null) {
                            t: {
                                l = t.type,
                                n = t.memoizedProps,
                                s = s.ownerDocument || s;
                                e: switch (l) {
                                case "title":
                                    u = s.getElementsByTagName("title")[0],
                                    (!u || u[Fl] || u[se] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = s.createElement(l),
                                    s.head.insertBefore(u, s.querySelector("head > title"))),
                                    de(u, l, n),
                                    u[se] = t,
                                    le(u),
                                    l = u;
                                    break t;
                                case "link":
                                    var d = km("link", "href", s).get(l + (n.href || ""));
                                    if (d) {
                                        for (var v = 0; v < d.length; v++)
                                            if (u = d[v],
                                            u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                d.splice(v, 1);
                                                break e
                                            }
                                    }
                                    u = s.createElement(l),
                                    de(u, l, n),
                                    s.head.appendChild(u);
                                    break;
                                case "meta":
                                    if (d = km("meta", "content", s).get(l + (n.content || ""))) {
                                        for (v = 0; v < d.length; v++)
                                            if (u = d[v],
                                            u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                d.splice(v, 1);
                                                break e
                                            }
                                    }
                                    u = s.createElement(l),
                                    de(u, l, n),
                                    s.head.appendChild(u);
                                    break;
                                default:
                                    throw Error(o(468, l))
                                }
                                u[se] = t,
                                le(u),
                                l = u
                            }
                            t.stateNode = l
                        } else
                            qm(s, t.type, t.stateNode);
                    else
                        t.stateNode = Hm(s, l, t.memoizedProps);
                else
                    u !== l ? (u === null ? n.stateNode !== null && (n = n.stateNode,
                    n.parentNode.removeChild(n)) : u.count--,
                    l === null ? qm(s, t.type, t.stateNode) : Hm(s, l, t.memoizedProps)) : l === null && t.stateNode !== null && wu(t, t.memoizedProps, n.memoizedProps)
            }
            break;
        case 27:
            _e(e, t),
            Ee(t),
            l & 512 && ($t || n === null || an(n, n.return)),
            n !== null && l & 4 && wu(t, t.memoizedProps, n.memoizedProps);
            break;
        case 5:
            if (_e(e, t),
            Ee(t),
            l & 512 && ($t || n === null || an(n, n.return)),
            t.flags & 32) {
                s = t.stateNode;
                try {
                    ll(s, "")
                } catch (at) {
                    Nt(t, t.return, at)
                }
            }
            l & 4 && t.stateNode != null && (s = t.memoizedProps,
            wu(t, s, n !== null ? n.memoizedProps : s)),
            l & 1024 && (Mu = !0);
            break;
        case 6:
            if (_e(e, t),
            Ee(t),
            l & 4) {
                if (t.stateNode === null)
                    throw Error(o(162));
                l = t.memoizedProps,
                n = t.stateNode;
                try {
                    n.nodeValue = l
                } catch (at) {
                    Nt(t, t.return, at)
                }
            }
            break;
        case 3:
            if (mo = null,
            s = $e,
            $e = fo(e.containerInfo),
            _e(e, t),
            $e = s,
            Ee(t),
            l & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    Ll(e.containerInfo)
                } catch (at) {
                    Nt(t, t.return, at)
                }
            Mu && (Mu = !1,
            qh(t));
            break;
        case 4:
            l = $e,
            $e = fo(t.stateNode.containerInfo),
            _e(e, t),
            Ee(t),
            $e = l;
            break;
        case 12:
            _e(e, t),
            Ee(t);
            break;
        case 31:
            _e(e, t),
            Ee(t),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            Ir(t, l)));
            break;
        case 13:
            _e(e, t),
            Ee(t),
            t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Wr = he()),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            Ir(t, l)));
            break;
        case 22:
            s = t.memoizedState !== null;
            var R = n !== null && n.memoizedState !== null
              , D = xn
              , q = $t;
            if (xn = D || s,
            $t = q || R,
            _e(e, t),
            $t = q,
            xn = D,
            Ee(t),
            l & 8192)
                t: for (e = t.stateNode,
                e._visibility = s ? e._visibility & -2 : e._visibility | 1,
                s && (n === null || R || xn || $t || Ua(t)),
                n = null,
                e = t; ; ) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (n === null) {
                            R = n = e;
                            try {
                                if (u = R.stateNode,
                                s)
                                    d = u.style,
                                    typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                                else {
                                    v = R.stateNode;
                                    var Z = R.memoizedProps.style
                                      , L = Z != null && Z.hasOwnProperty("display") ? Z.display : null;
                                    v.style.display = L == null || typeof L == "boolean" ? "" : ("" + L).trim()
                                }
                            } catch (at) {
                                Nt(R, R.return, at)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (n === null) {
                            R = e;
                            try {
                                R.stateNode.nodeValue = s ? "" : R.memoizedProps
                            } catch (at) {
                                Nt(R, R.return, at)
                            }
                        }
                    } else if (e.tag === 18) {
                        if (n === null) {
                            R = e;
                            try {
                                var B = R.stateNode;
                                s ? zm(B, !0) : zm(R.stateNode, !1)
                            } catch (at) {
                                Nt(R, R.return, at)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break t;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break t;
                        n === e && (n = null),
                        e = e.return
                    }
                    n === e && (n = null),
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            l & 4 && (l = t.updateQueue,
            l !== null && (n = l.retryQueue,
            n !== null && (l.retryQueue = null,
            Ir(t, n))));
            break;
        case 19:
            _e(e, t),
            Ee(t),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            Ir(t, l)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            _e(e, t),
            Ee(t)
        }
    }
    function Ee(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var n, l = t.return; l !== null; ) {
                    if (Oh(l)) {
                        n = l;
                        break
                    }
                    l = l.return
                }
                if (n == null)
                    throw Error(o(160));
                switch (n.tag) {
                case 27:
                    var s = n.stateNode
                      , u = Tu(t);
                    Fr(t, u, s);
                    break;
                case 5:
                    var d = n.stateNode;
                    n.flags & 32 && (ll(d, ""),
                    n.flags &= -33);
                    var v = Tu(t);
                    Fr(t, v, d);
                    break;
                case 3:
                case 4:
                    var R = n.stateNode.containerInfo
                      , D = Tu(t);
                    Au(t, D, R);
                    break;
                default:
                    throw Error(o(161))
                }
            } catch (q) {
                Nt(t, t.return, q)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }
    function qh(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var e = t;
                qh(e),
                e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
                t = t.sibling
            }
    }
    function En(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null; )
                Dh(t, e.alternate, e),
                e = e.sibling
    }
    function Ua(t) {
        for (t = t.child; t !== null; ) {
            var e = t;
            switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Kn(4, e, e.return),
                Ua(e);
                break;
            case 1:
                an(e, e.return);
                var n = e.stateNode;
                typeof n.componentWillUnmount == "function" && zh(e, e.return, n),
                Ua(e);
                break;
            case 27:
                Ni(e.stateNode);
            case 26:
            case 5:
                an(e, e.return),
                Ua(e);
                break;
            case 22:
                e.memoizedState === null && Ua(e);
                break;
            case 30:
                Ua(e);
                break;
            default:
                Ua(e)
            }
            t = t.sibling
        }
    }
    function Rn(t, e, n) {
        for (n = n && (e.subtreeFlags & 8772) !== 0,
        e = e.child; e !== null; ) {
            var l = e.alternate
              , s = t
              , u = e
              , d = u.flags;
            switch (u.tag) {
            case 0:
            case 11:
            case 15:
                Rn(s, u, n),
                _i(4, u);
                break;
            case 1:
                if (Rn(s, u, n),
                l = u,
                s = l.stateNode,
                typeof s.componentDidMount == "function")
                    try {
                        s.componentDidMount()
                    } catch (D) {
                        Nt(l, l.return, D)
                    }
                if (l = u,
                s = l.updateQueue,
                s !== null) {
                    var v = l.stateNode;
                    try {
                        var R = s.shared.hiddenCallbacks;
                        if (R !== null)
                            for (s.shared.hiddenCallbacks = null,
                            s = 0; s < R.length; s++)
                                yd(R[s], v)
                    } catch (D) {
                        Nt(l, l.return, D)
                    }
                }
                n && d & 64 && Mh(u),
                Ei(u, u.return);
                break;
            case 27:
                Nh(u);
            case 26:
            case 5:
                Rn(s, u, n),
                n && l === null && d & 4 && Ch(u),
                Ei(u, u.return);
                break;
            case 12:
                Rn(s, u, n);
                break;
            case 31:
                Rn(s, u, n),
                n && d & 4 && Bh(s, u);
                break;
            case 13:
                Rn(s, u, n),
                n && d & 4 && Hh(s, u);
                break;
            case 22:
                u.memoizedState === null && Rn(s, u, n),
                Ei(u, u.return);
                break;
            case 30:
                break;
            default:
                Rn(s, u, n)
            }
            e = e.sibling
        }
    }
    function zu(t, e) {
        var n = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
        t = null,
        e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
        t !== n && (t != null && t.refCount++,
        n != null && ui(n))
    }
    function Cu(t, e) {
        t = null,
        e.alternate !== null && (t = e.alternate.memoizedState.cache),
        e = e.memoizedState.cache,
        e !== t && (e.refCount++,
        t != null && ui(t))
    }
    function We(t, e, n, l) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                Gh(t, e, n, l),
                e = e.sibling
    }
    function Gh(t, e, n, l) {
        var s = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            We(t, e, n, l),
            s & 2048 && _i(9, e);
            break;
        case 1:
            We(t, e, n, l);
            break;
        case 3:
            We(t, e, n, l),
            s & 2048 && (t = null,
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            e = e.memoizedState.cache,
            e !== t && (e.refCount++,
            t != null && ui(t)));
            break;
        case 12:
            if (s & 2048) {
                We(t, e, n, l),
                t = e.stateNode;
                try {
                    var u = e.memoizedProps
                      , d = u.id
                      , v = u.onPostCommit;
                    typeof v == "function" && v(d, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                } catch (R) {
                    Nt(e, e.return, R)
                }
            } else
                We(t, e, n, l);
            break;
        case 31:
            We(t, e, n, l);
            break;
        case 13:
            We(t, e, n, l);
            break;
        case 23:
            break;
        case 22:
            u = e.stateNode,
            d = e.alternate,
            e.memoizedState !== null ? u._visibility & 2 ? We(t, e, n, l) : Ri(t, e) : u._visibility & 2 ? We(t, e, n, l) : (u._visibility |= 2,
            Rl(t, e, n, l, (e.subtreeFlags & 10256) !== 0 || !1)),
            s & 2048 && zu(d, e);
            break;
        case 24:
            We(t, e, n, l),
            s & 2048 && Cu(e.alternate, e);
            break;
        default:
            We(t, e, n, l)
        }
    }
    function Rl(t, e, n, l, s) {
        for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1),
        e = e.child; e !== null; ) {
            var u = t
              , d = e
              , v = n
              , R = l
              , D = d.flags;
            switch (d.tag) {
            case 0:
            case 11:
            case 15:
                Rl(u, d, v, R, s),
                _i(8, d);
                break;
            case 23:
                break;
            case 22:
                var q = d.stateNode;
                d.memoizedState !== null ? q._visibility & 2 ? Rl(u, d, v, R, s) : Ri(u, d) : (q._visibility |= 2,
                Rl(u, d, v, R, s)),
                s && D & 2048 && zu(d.alternate, d);
                break;
            case 24:
                Rl(u, d, v, R, s),
                s && D & 2048 && Cu(d.alternate, d);
                break;
            default:
                Rl(u, d, v, R, s)
            }
            e = e.sibling
        }
    }
    function Ri(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var n = t
                  , l = e
                  , s = l.flags;
                switch (l.tag) {
                case 22:
                    Ri(n, l),
                    s & 2048 && zu(l.alternate, l);
                    break;
                case 24:
                    Ri(n, l),
                    s & 2048 && Cu(l.alternate, l);
                    break;
                default:
                    Ri(n, l)
                }
                e = e.sibling
            }
    }
    var wi = 8192;
    function wl(t, e, n) {
        if (t.subtreeFlags & wi)
            for (t = t.child; t !== null; )
                Yh(t, e, n),
                t = t.sibling
    }
    function Yh(t, e, n) {
        switch (t.tag) {
        case 26:
            wl(t, e, n),
            t.flags & wi && t.memoizedState !== null && P0(n, $e, t.memoizedState, t.memoizedProps);
            break;
        case 5:
            wl(t, e, n);
            break;
        case 3:
        case 4:
            var l = $e;
            $e = fo(t.stateNode.containerInfo),
            wl(t, e, n),
            $e = l;
            break;
        case 22:
            t.memoizedState === null && (l = t.alternate,
            l !== null && l.memoizedState !== null ? (l = wi,
            wi = 16777216,
            wl(t, e, n),
            wi = l) : wl(t, e, n));
            break;
        default:
            wl(t, e, n)
        }
    }
    function Vh(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child,
        t !== null)) {
            e.child = null;
            do
                e = t.sibling,
                t.sibling = null,
                t = e;
            while (t !== null)
        }
    }
    function Ti(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var n = 0; n < e.length; n++) {
                    var l = e[n];
                    ie = l,
                    Qh(l, t)
                }
            Vh(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                Xh(t),
                t = t.sibling
    }
    function Xh(t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Ti(t),
            t.flags & 2048 && Kn(9, t, t.return);
            break;
        case 3:
            Ti(t);
            break;
        case 12:
            Ti(t);
            break;
        case 22:
            var e = t.stateNode;
            t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3,
            $r(t)) : Ti(t);
            break;
        default:
            Ti(t)
        }
    }
    function $r(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var n = 0; n < e.length; n++) {
                    var l = e[n];
                    ie = l,
                    Qh(l, t)
                }
            Vh(t)
        }
        for (t = t.child; t !== null; ) {
            switch (e = t,
            e.tag) {
            case 0:
            case 11:
            case 15:
                Kn(8, e, e.return),
                $r(e);
                break;
            case 22:
                n = e.stateNode,
                n._visibility & 2 && (n._visibility &= -3,
                $r(e));
                break;
            default:
                $r(e)
            }
            t = t.sibling
        }
    }
    function Qh(t, e) {
        for (; ie !== null; ) {
            var n = ie;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Kn(8, n, e);
                break;
            case 23:
            case 22:
                if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                    var l = n.memoizedState.cachePool.pool;
                    l != null && l.refCount++
                }
                break;
            case 24:
                ui(n.memoizedState.cache)
            }
            if (l = n.child,
            l !== null)
                l.return = n,
                ie = l;
            else
                t: for (n = t; ie !== null; ) {
                    l = ie;
                    var s = l.sibling
                      , u = l.return;
                    if (Lh(l),
                    l === n) {
                        ie = null;
                        break t
                    }
                    if (s !== null) {
                        s.return = u,
                        ie = s;
                        break t
                    }
                    ie = u
                }
        }
    }
    var c0 = {
        getCacheForType: function(t) {
            var e = ce(Pt)
              , n = e.data.get(t);
            return n === void 0 && (n = t(),
            e.data.set(t, n)),
            n
        },
        cacheSignal: function() {
            return ce(Pt).controller.signal
        }
    }
      , f0 = typeof WeakMap == "function" ? WeakMap : Map
      , Ct = 0
      , Ut = null
      , St = null
      , _t = 0
      , Ot = 0
      , Ue = null
      , Jn = !1
      , Tl = !1
      , Ou = !1
      , wn = 0
      , Zt = 0
      , Pn = 0
      , Ba = 0
      , Nu = 0
      , Be = 0
      , Al = 0
      , Ai = null
      , Re = null
      , ju = !1
      , Wr = 0
      , Zh = 0
      , to = 1 / 0
      , eo = null
      , Fn = null
      , te = 0
      , In = null
      , Ml = null
      , Tn = 0
      , Du = 0
      , Lu = null
      , Kh = null
      , Mi = 0
      , Uu = null;
    function He() {
        return (Ct & 2) !== 0 && _t !== 0 ? _t & -_t : U.T !== null ? Yu() : uf()
    }
    function Jh() {
        if (Be === 0)
            if ((_t & 536870912) === 0 || Tt) {
                var t = ur;
                ur <<= 1,
                (ur & 3932160) === 0 && (ur = 262144),
                Be = t
            } else
                Be = 536870912;
        return t = De.current,
        t !== null && (t.flags |= 32),
        Be
    }
    function we(t, e, n) {
        (t === Ut && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null) && (zl(t, 0),
        $n(t, _t, Be, !1)),
        Pl(t, n),
        ((Ct & 2) === 0 || t !== Ut) && (t === Ut && ((Ct & 2) === 0 && (Ba |= n),
        Zt === 4 && $n(t, _t, Be, !1)),
        ln(t))
    }
    function Ph(t, e, n) {
        if ((Ct & 6) !== 0)
            throw Error(o(327));
        var l = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Jl(t, e)
          , s = l ? m0(t, e) : Hu(t, e, !0)
          , u = l;
        do {
            if (s === 0) {
                Tl && !l && $n(t, e, 0, !1);
                break
            } else {
                if (n = t.current.alternate,
                u && !d0(n)) {
                    s = Hu(t, e, !1),
                    u = !1;
                    continue
                }
                if (s === 2) {
                    if (u = e,
                    t.errorRecoveryDisabledLanes & u)
                        var d = 0;
                    else
                        d = t.pendingLanes & -536870913,
                        d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
                    if (d !== 0) {
                        e = d;
                        t: {
                            var v = t;
                            s = Ai;
                            var R = v.current.memoizedState.isDehydrated;
                            if (R && (zl(v, d).flags |= 256),
                            d = Hu(v, d, !1),
                            d !== 2) {
                                if (Ou && !R) {
                                    v.errorRecoveryDisabledLanes |= u,
                                    Ba |= u,
                                    s = 4;
                                    break t
                                }
                                u = Re,
                                Re = s,
                                u !== null && (Re === null ? Re = u : Re.push.apply(Re, u))
                            }
                            s = d
                        }
                        if (u = !1,
                        s !== 2)
                            continue
                    }
                }
                if (s === 1) {
                    zl(t, 0),
                    $n(t, e, 0, !0);
                    break
                }
                t: {
                    switch (l = t,
                    u = s,
                    u) {
                    case 0:
                    case 1:
                        throw Error(o(345));
                    case 4:
                        if ((e & 4194048) !== e)
                            break;
                    case 6:
                        $n(l, e, Be, !Jn);
                        break t;
                    case 2:
                        Re = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(o(329))
                    }
                    if ((e & 62914560) === e && (s = Wr + 300 - he(),
                    10 < s)) {
                        if ($n(l, e, Be, !Jn),
                        fr(l, 0, !0) !== 0)
                            break t;
                        Tn = e,
                        l.timeoutHandle = Tm(Fh.bind(null, l, n, Re, eo, ju, e, Be, Ba, Al, Jn, u, "Throttled", -0, 0), s);
                        break t
                    }
                    Fh(l, n, Re, eo, ju, e, Be, Ba, Al, Jn, u, null, -0, 0)
                }
            }
            break
        } while (!0);
        ln(t)
    }
    function Fh(t, e, n, l, s, u, d, v, R, D, q, Z, L, B) {
        if (t.timeoutHandle = -1,
        Z = e.subtreeFlags,
        Z & 8192 || (Z & 16785408) === 16785408) {
            Z = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: fn
            },
            Yh(e, u, Z);
            var at = (u & 62914560) === u ? Wr - he() : (u & 4194048) === u ? Zh - he() : 0;
            if (at = F0(Z, at),
            at !== null) {
                Tn = u,
                t.cancelPendingCommit = at(lm.bind(null, t, e, u, n, l, s, d, v, R, q, Z, null, L, B)),
                $n(t, u, d, !D);
                return
            }
        }
        lm(t, e, u, n, l, s, d, v, R)
    }
    function d0(t) {
        for (var e = t; ; ) {
            var n = e.tag;
            if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue,
            n !== null && (n = n.stores,
            n !== null)))
                for (var l = 0; l < n.length; l++) {
                    var s = n[l]
                      , u = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!Ne(u(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (n = e.child,
            e.subtreeFlags & 16384 && n !== null)
                n.return = e,
                e = n;
            else {
                if (e === t)
                    break;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        return !0;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        }
        return !0
    }
    function $n(t, e, n, l) {
        e &= ~Nu,
        e &= ~Ba,
        t.suspendedLanes |= e,
        t.pingedLanes &= ~e,
        l && (t.warmLanes |= e),
        l = t.expirationTimes;
        for (var s = e; 0 < s; ) {
            var u = 31 - Oe(s)
              , d = 1 << u;
            l[u] = -1,
            s &= ~d
        }
        n !== 0 && rf(t, n, e)
    }
    function no() {
        return (Ct & 6) === 0 ? (zi(0),
        !1) : !0
    }
    function Bu() {
        if (St !== null) {
            if (Ot === 0)
                var t = St.return;
            else
                t = St,
                pn = Ma = null,
                Ws(t),
                bl = null,
                fi = 0,
                t = St;
            for (; t !== null; )
                Ah(t.alternate, t),
                t = t.return;
            St = null
        }
    }
    function zl(t, e) {
        var n = t.timeoutHandle;
        n !== -1 && (t.timeoutHandle = -1,
        N0(n)),
        n = t.cancelPendingCommit,
        n !== null && (t.cancelPendingCommit = null,
        n()),
        Tn = 0,
        Bu(),
        Ut = t,
        St = n = hn(t.current, null),
        _t = e,
        Ot = 0,
        Ue = null,
        Jn = !1,
        Tl = Jl(t, e),
        Ou = !1,
        Al = Be = Nu = Ba = Pn = Zt = 0,
        Re = Ai = null,
        ju = !1,
        (e & 8) !== 0 && (e |= e & 32);
        var l = t.entangledLanes;
        if (l !== 0)
            for (t = t.entanglements,
            l &= e; 0 < l; ) {
                var s = 31 - Oe(l)
                  , u = 1 << s;
                e |= t[s],
                l &= ~u
            }
        return wn = e,
        Er(),
        n
    }
    function Ih(t, e) {
        pt = null,
        U.H = bi,
        e === vl || e === Or ? (e = hd(),
        Ot = 3) : e === Gs ? (e = hd(),
        Ot = 4) : Ot = e === pu ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1,
        Ue = e,
        St === null && (Zt = 1,
        Qr(t, Ve(e, t.current)))
    }
    function $h() {
        var t = De.current;
        return t === null ? !0 : (_t & 4194048) === _t ? Ke === null : (_t & 62914560) === _t || (_t & 536870912) !== 0 ? t === Ke : !1
    }
    function Wh() {
        var t = U.H;
        return U.H = bi,
        t === null ? bi : t
    }
    function tm() {
        var t = U.A;
        return U.A = c0,
        t
    }
    function ao() {
        Zt = 4,
        Jn || (_t & 4194048) !== _t && De.current !== null || (Tl = !0),
        (Pn & 134217727) === 0 && (Ba & 134217727) === 0 || Ut === null || $n(Ut, _t, Be, !1)
    }
    function Hu(t, e, n) {
        var l = Ct;
        Ct |= 2;
        var s = Wh()
          , u = tm();
        (Ut !== t || _t !== e) && (eo = null,
        zl(t, e)),
        e = !1;
        var d = Zt;
        t: do
            try {
                if (Ot !== 0 && St !== null) {
                    var v = St
                      , R = Ue;
                    switch (Ot) {
                    case 8:
                        Bu(),
                        d = 6;
                        break t;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        De.current === null && (e = !0);
                        var D = Ot;
                        if (Ot = 0,
                        Ue = null,
                        Cl(t, v, R, D),
                        n && Tl) {
                            d = 0;
                            break t
                        }
                        break;
                    default:
                        D = Ot,
                        Ot = 0,
                        Ue = null,
                        Cl(t, v, R, D)
                    }
                }
                h0(),
                d = Zt;
                break
            } catch (q) {
                Ih(t, q)
            }
        while (!0);
        return e && t.shellSuspendCounter++,
        pn = Ma = null,
        Ct = l,
        U.H = s,
        U.A = u,
        St === null && (Ut = null,
        _t = 0,
        Er()),
        d
    }
    function h0() {
        for (; St !== null; )
            em(St)
    }
    function m0(t, e) {
        var n = Ct;
        Ct |= 2;
        var l = Wh()
          , s = tm();
        Ut !== t || _t !== e ? (eo = null,
        to = he() + 500,
        zl(t, e)) : Tl = Jl(t, e);
        t: do
            try {
                if (Ot !== 0 && St !== null) {
                    e = St;
                    var u = Ue;
                    e: switch (Ot) {
                    case 1:
                        Ot = 0,
                        Ue = null,
                        Cl(t, e, u, 1);
                        break;
                    case 2:
                    case 9:
                        if (fd(u)) {
                            Ot = 0,
                            Ue = null,
                            nm(e);
                            break
                        }
                        e = function() {
                            Ot !== 2 && Ot !== 9 || Ut !== t || (Ot = 7),
                            ln(t)
                        }
                        ,
                        u.then(e, e);
                        break t;
                    case 3:
                        Ot = 7;
                        break t;
                    case 4:
                        Ot = 5;
                        break t;
                    case 7:
                        fd(u) ? (Ot = 0,
                        Ue = null,
                        nm(e)) : (Ot = 0,
                        Ue = null,
                        Cl(t, e, u, 7));
                        break;
                    case 5:
                        var d = null;
                        switch (St.tag) {
                        case 26:
                            d = St.memoizedState;
                        case 5:
                        case 27:
                            var v = St;
                            if (d ? Gm(d) : v.stateNode.complete) {
                                Ot = 0,
                                Ue = null;
                                var R = v.sibling;
                                if (R !== null)
                                    St = R;
                                else {
                                    var D = v.return;
                                    D !== null ? (St = D,
                                    lo(D)) : St = null
                                }
                                break e
                            }
                        }
                        Ot = 0,
                        Ue = null,
                        Cl(t, e, u, 5);
                        break;
                    case 6:
                        Ot = 0,
                        Ue = null,
                        Cl(t, e, u, 6);
                        break;
                    case 8:
                        Bu(),
                        Zt = 6;
                        break t;
                    default:
                        throw Error(o(462))
                    }
                }
                p0();
                break
            } catch (q) {
                Ih(t, q)
            }
        while (!0);
        return pn = Ma = null,
        U.H = l,
        U.A = s,
        Ct = n,
        St !== null ? 0 : (Ut = null,
        _t = 0,
        Er(),
        Zt)
    }
    function p0() {
        for (; St !== null && !or(); )
            em(St)
    }
    function em(t) {
        var e = wh(t.alternate, t, wn);
        t.memoizedProps = t.pendingProps,
        e === null ? lo(t) : St = e
    }
    function nm(t) {
        var e = t
          , n = e.alternate;
        switch (e.tag) {
        case 15:
        case 0:
            e = bh(n, e, e.pendingProps, e.type, void 0, _t);
            break;
        case 11:
            e = bh(n, e, e.pendingProps, e.type.render, e.ref, _t);
            break;
        case 5:
            Ws(e);
        default:
            Ah(n, e),
            e = St = td(e, wn),
            e = wh(n, e, wn)
        }
        t.memoizedProps = t.pendingProps,
        e === null ? lo(t) : St = e
    }
    function Cl(t, e, n, l) {
        pn = Ma = null,
        Ws(e),
        bl = null,
        fi = 0;
        var s = e.return;
        try {
            if (a0(t, s, e, n, _t)) {
                Zt = 1,
                Qr(t, Ve(n, t.current)),
                St = null;
                return
            }
        } catch (u) {
            if (s !== null)
                throw St = s,
                u;
            Zt = 1,
            Qr(t, Ve(n, t.current)),
            St = null;
            return
        }
        e.flags & 32768 ? (Tt || l === 1 ? t = !0 : Tl || (_t & 536870912) !== 0 ? t = !1 : (Jn = t = !0,
        (l === 2 || l === 9 || l === 3 || l === 6) && (l = De.current,
        l !== null && l.tag === 13 && (l.flags |= 16384))),
        am(e, t)) : lo(e)
    }
    function lo(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                am(e, Jn);
                return
            }
            t = e.return;
            var n = r0(e.alternate, e, wn);
            if (n !== null) {
                St = n;
                return
            }
            if (e = e.sibling,
            e !== null) {
                St = e;
                return
            }
            St = e = t
        } while (e !== null);
        Zt === 0 && (Zt = 5)
    }
    function am(t, e) {
        do {
            var n = o0(t.alternate, t);
            if (n !== null) {
                n.flags &= 32767,
                St = n;
                return
            }
            if (n = t.return,
            n !== null && (n.flags |= 32768,
            n.subtreeFlags = 0,
            n.deletions = null),
            !e && (t = t.sibling,
            t !== null)) {
                St = t;
                return
            }
            St = t = n
        } while (t !== null);
        Zt = 6,
        St = null
    }
    function lm(t, e, n, l, s, u, d, v, R) {
        t.cancelPendingCommit = null;
        do
            io();
        while (te !== 0);
        if ((Ct & 6) !== 0)
            throw Error(o(327));
        if (e !== null) {
            if (e === t.current)
                throw Error(o(177));
            if (u = e.lanes | e.childLanes,
            u |= Ts,
            Jy(t, n, u, d, v, R),
            t === Ut && (St = Ut = null,
            _t = 0),
            Ml = e,
            In = t,
            Tn = n,
            Du = u,
            Lu = s,
            Kh = l,
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null,
            t.callbackPriority = 0,
            b0(Ia, function() {
                return um(),
                null
            })) : (t.callbackNode = null,
            t.callbackPriority = 0),
            l = (e.flags & 13878) !== 0,
            (e.subtreeFlags & 13878) !== 0 || l) {
                l = U.T,
                U.T = null,
                s = K.p,
                K.p = 2,
                d = Ct,
                Ct |= 4;
                try {
                    s0(t, e, n)
                } finally {
                    Ct = d,
                    K.p = s,
                    U.T = l
                }
            }
            te = 1,
            im(),
            rm(),
            om()
        }
    }
    function im() {
        if (te === 1) {
            te = 0;
            var t = In
              , e = Ml
              , n = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || n) {
                n = U.T,
                U.T = null;
                var l = K.p;
                K.p = 2;
                var s = Ct;
                Ct |= 4;
                try {
                    kh(e, t);
                    var u = Fu
                      , d = Qf(t.containerInfo)
                      , v = u.focusedElem
                      , R = u.selectionRange;
                    if (d !== v && v && v.ownerDocument && Xf(v.ownerDocument.documentElement, v)) {
                        if (R !== null && xs(v)) {
                            var D = R.start
                              , q = R.end;
                            if (q === void 0 && (q = D),
                            "selectionStart"in v)
                                v.selectionStart = D,
                                v.selectionEnd = Math.min(q, v.value.length);
                            else {
                                var Z = v.ownerDocument || document
                                  , L = Z && Z.defaultView || window;
                                if (L.getSelection) {
                                    var B = L.getSelection()
                                      , at = v.textContent.length
                                      , ft = Math.min(R.start, at)
                                      , Lt = R.end === void 0 ? ft : Math.min(R.end, at);
                                    !B.extend && ft > Lt && (d = Lt,
                                    Lt = ft,
                                    ft = d);
                                    var O = Vf(v, ft)
                                      , M = Vf(v, Lt);
                                    if (O && M && (B.rangeCount !== 1 || B.anchorNode !== O.node || B.anchorOffset !== O.offset || B.focusNode !== M.node || B.focusOffset !== M.offset)) {
                                        var j = Z.createRange();
                                        j.setStart(O.node, O.offset),
                                        B.removeAllRanges(),
                                        ft > Lt ? (B.addRange(j),
                                        B.extend(M.node, M.offset)) : (j.setEnd(M.node, M.offset),
                                        B.addRange(j))
                                    }
                                }
                            }
                        }
                        for (Z = [],
                        B = v; B = B.parentNode; )
                            B.nodeType === 1 && Z.push({
                                element: B,
                                left: B.scrollLeft,
                                top: B.scrollTop
                            });
                        for (typeof v.focus == "function" && v.focus(),
                        v = 0; v < Z.length; v++) {
                            var G = Z[v];
                            G.element.scrollLeft = G.left,
                            G.element.scrollTop = G.top
                        }
                    }
                    vo = !!Pu,
                    Fu = Pu = null
                } finally {
                    Ct = s,
                    K.p = l,
                    U.T = n
                }
            }
            t.current = e,
            te = 2
        }
    }
    function rm() {
        if (te === 2) {
            te = 0;
            var t = In
              , e = Ml
              , n = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || n) {
                n = U.T,
                U.T = null;
                var l = K.p;
                K.p = 2;
                var s = Ct;
                Ct |= 4;
                try {
                    Dh(t, e.alternate, e)
                } finally {
                    Ct = s,
                    K.p = l,
                    U.T = n
                }
            }
            te = 3
        }
    }
    function om() {
        if (te === 4 || te === 3) {
            te = 0,
            Wo();
            var t = In
              , e = Ml
              , n = Tn
              , l = Kh;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? te = 5 : (te = 0,
            Ml = In = null,
            sm(t, t.pendingLanes));
            var s = t.pendingLanes;
            if (s === 0 && (Fn = null),
            ns(n),
            e = e.stateNode,
            Ce && typeof Ce.onCommitFiberRoot == "function")
                try {
                    Ce.onCommitFiberRoot(Kl, e, void 0, (e.current.flags & 128) === 128)
                } catch {}
            if (l !== null) {
                e = U.T,
                s = K.p,
                K.p = 2,
                U.T = null;
                try {
                    for (var u = t.onRecoverableError, d = 0; d < l.length; d++) {
                        var v = l[d];
                        u(v.value, {
                            componentStack: v.stack
                        })
                    }
                } finally {
                    U.T = e,
                    K.p = s
                }
            }
            (Tn & 3) !== 0 && io(),
            ln(t),
            s = t.pendingLanes,
            (n & 261930) !== 0 && (s & 42) !== 0 ? t === Uu ? Mi++ : (Mi = 0,
            Uu = t) : Mi = 0,
            zi(0)
        }
    }
    function sm(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache,
        e != null && (t.pooledCache = null,
        ui(e)))
    }
    function io() {
        return im(),
        rm(),
        om(),
        um()
    }
    function um() {
        if (te !== 5)
            return !1;
        var t = In
          , e = Du;
        Du = 0;
        var n = ns(Tn)
          , l = U.T
          , s = K.p;
        try {
            K.p = 32 > n ? 32 : n,
            U.T = null,
            n = Lu,
            Lu = null;
            var u = In
              , d = Tn;
            if (te = 0,
            Ml = In = null,
            Tn = 0,
            (Ct & 6) !== 0)
                throw Error(o(331));
            var v = Ct;
            if (Ct |= 4,
            Xh(u.current),
            Gh(u, u.current, d, n),
            Ct = v,
            zi(0, !1),
            Ce && typeof Ce.onPostCommitFiberRoot == "function")
                try {
                    Ce.onPostCommitFiberRoot(Kl, u)
                } catch {}
            return !0
        } finally {
            K.p = s,
            U.T = l,
            sm(t, e)
        }
    }
    function cm(t, e, n) {
        e = Ve(n, e),
        e = mu(t.stateNode, e, 2),
        t = Xn(t, e, 2),
        t !== null && (Pl(t, 2),
        ln(t))
    }
    function Nt(t, e, n) {
        if (t.tag === 3)
            cm(t, t, n);
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    cm(e, t, n);
                    break
                } else if (e.tag === 1) {
                    var l = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Fn === null || !Fn.has(l))) {
                        t = Ve(n, t),
                        n = fh(2),
                        l = Xn(e, n, 2),
                        l !== null && (dh(n, l, e, t),
                        Pl(l, 2),
                        ln(l));
                        break
                    }
                }
                e = e.return
            }
    }
    function ku(t, e, n) {
        var l = t.pingCache;
        if (l === null) {
            l = t.pingCache = new f0;
            var s = new Set;
            l.set(e, s)
        } else
            s = l.get(e),
            s === void 0 && (s = new Set,
            l.set(e, s));
        s.has(n) || (Ou = !0,
        s.add(n),
        t = g0.bind(null, t, e, n),
        e.then(t, t))
    }
    function g0(t, e, n) {
        var l = t.pingCache;
        l !== null && l.delete(e),
        t.pingedLanes |= t.suspendedLanes & n,
        t.warmLanes &= ~n,
        Ut === t && (_t & n) === n && (Zt === 4 || Zt === 3 && (_t & 62914560) === _t && 300 > he() - Wr ? (Ct & 2) === 0 && zl(t, 0) : Nu |= n,
        Al === _t && (Al = 0)),
        ln(t)
    }
    function fm(t, e) {
        e === 0 && (e = lf()),
        t = wa(t, e),
        t !== null && (Pl(t, e),
        ln(t))
    }
    function y0(t) {
        var e = t.memoizedState
          , n = 0;
        e !== null && (n = e.retryLane),
        fm(t, n)
    }
    function v0(t, e) {
        var n = 0;
        switch (t.tag) {
        case 31:
        case 13:
            var l = t.stateNode
              , s = t.memoizedState;
            s !== null && (n = s.retryLane);
            break;
        case 19:
            l = t.stateNode;
            break;
        case 22:
            l = t.stateNode._retryCache;
            break;
        default:
            throw Error(o(314))
        }
        l !== null && l.delete(e),
        fm(t, n)
    }
    function b0(t, e) {
        return Fe(t, e)
    }
    var ro = null
      , Ol = null
      , qu = !1
      , oo = !1
      , Gu = !1
      , Wn = 0;
    function ln(t) {
        t !== Ol && t.next === null && (Ol === null ? ro = Ol = t : Ol = Ol.next = t),
        oo = !0,
        qu || (qu = !0,
        x0())
    }
    function zi(t, e) {
        if (!Gu && oo) {
            Gu = !0;
            do
                for (var n = !1, l = ro; l !== null; ) {
                    if (t !== 0) {
                        var s = l.pendingLanes;
                        if (s === 0)
                            var u = 0;
                        else {
                            var d = l.suspendedLanes
                              , v = l.pingedLanes;
                            u = (1 << 31 - Oe(42 | t) + 1) - 1,
                            u &= s & ~(d & ~v),
                            u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (n = !0,
                        pm(l, u))
                    } else
                        u = _t,
                        u = fr(l, l === Ut ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
                        (u & 3) === 0 || Jl(l, u) || (n = !0,
                        pm(l, u));
                    l = l.next
                }
            while (n);
            Gu = !1
        }
    }
    function S0() {
        dm()
    }
    function dm() {
        oo = qu = !1;
        var t = 0;
        Wn !== 0 && O0() && (t = Wn);
        for (var e = he(), n = null, l = ro; l !== null; ) {
            var s = l.next
              , u = hm(l, e);
            u === 0 ? (l.next = null,
            n === null ? ro = s : n.next = s,
            s === null && (Ol = n)) : (n = l,
            (t !== 0 || (u & 3) !== 0) && (oo = !0)),
            l = s
        }
        te !== 0 && te !== 5 || zi(t),
        Wn !== 0 && (Wn = 0)
    }
    function hm(t, e) {
        for (var n = t.suspendedLanes, l = t.pingedLanes, s = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
            var d = 31 - Oe(u)
              , v = 1 << d
              , R = s[d];
            R === -1 ? ((v & n) === 0 || (v & l) !== 0) && (s[d] = Ky(v, e)) : R <= e && (t.expiredLanes |= v),
            u &= ~v
        }
        if (e = Ut,
        n = _t,
        n = fr(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        l = t.callbackNode,
        n === 0 || t === e && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null)
            return l !== null && l !== null && Zl(l),
            t.callbackNode = null,
            t.callbackPriority = 0;
        if ((n & 3) === 0 || Jl(t, n)) {
            if (e = n & -n,
            e === t.callbackPriority)
                return e;
            switch (l !== null && Zl(l),
            ns(n)) {
            case 2:
            case 8:
                n = tn;
                break;
            case 32:
                n = Ia;
                break;
            case 268435456:
                n = af;
                break;
            default:
                n = Ia
            }
            return l = mm.bind(null, t),
            n = Fe(n, l),
            t.callbackPriority = e,
            t.callbackNode = n,
            e
        }
        return l !== null && l !== null && Zl(l),
        t.callbackPriority = 2,
        t.callbackNode = null,
        2
    }
    function mm(t, e) {
        if (te !== 0 && te !== 5)
            return t.callbackNode = null,
            t.callbackPriority = 0,
            null;
        var n = t.callbackNode;
        if (io() && t.callbackNode !== n)
            return null;
        var l = _t;
        return l = fr(t, t === Ut ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        l === 0 ? null : (Ph(t, l, e),
        hm(t, he()),
        t.callbackNode != null && t.callbackNode === n ? mm.bind(null, t) : null)
    }
    function pm(t, e) {
        if (io())
            return null;
        Ph(t, e, !0)
    }
    function x0() {
        j0(function() {
            (Ct & 6) !== 0 ? Fe(oe, S0) : dm()
        })
    }
    function Yu() {
        if (Wn === 0) {
            var t = gl;
            t === 0 && (t = sr,
            sr <<= 1,
            (sr & 261888) === 0 && (sr = 256)),
            Wn = t
        }
        return Wn
    }
    function gm(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : pr("" + t)
    }
    function ym(t, e) {
        var n = e.ownerDocument.createElement("input");
        return n.name = e.name,
        n.value = e.value,
        t.id && n.setAttribute("form", t.id),
        e.parentNode.insertBefore(n, e),
        t = new FormData(t),
        n.parentNode.removeChild(n),
        t
    }
    function _0(t, e, n, l, s) {
        if (e === "submit" && n && n.stateNode === s) {
            var u = gm((s[be] || null).action)
              , d = l.submitter;
            d && (e = (e = d[be] || null) ? gm(e.formAction) : d.getAttribute("formAction"),
            e !== null && (u = e,
            d = null));
            var v = new br("action","action",null,l,s);
            t.push({
                event: v,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (l.defaultPrevented) {
                            if (Wn !== 0) {
                                var R = d ? ym(s, d) : new FormData(s);
                                su(n, {
                                    pending: !0,
                                    data: R,
                                    method: s.method,
                                    action: u
                                }, null, R)
                            }
                        } else
                            typeof u == "function" && (v.preventDefault(),
                            R = d ? ym(s, d) : new FormData(s),
                            su(n, {
                                pending: !0,
                                data: R,
                                method: s.method,
                                action: u
                            }, u, R))
                    },
                    currentTarget: s
                }]
            })
        }
    }
    for (var Vu = 0; Vu < ws.length; Vu++) {
        var Xu = ws[Vu]
          , E0 = Xu.toLowerCase()
          , R0 = Xu[0].toUpperCase() + Xu.slice(1);
        Ie(E0, "on" + R0)
    }
    Ie(Jf, "onAnimationEnd"),
    Ie(Pf, "onAnimationIteration"),
    Ie(Ff, "onAnimationStart"),
    Ie("dblclick", "onDoubleClick"),
    Ie("focusin", "onFocus"),
    Ie("focusout", "onBlur"),
    Ie(qv, "onTransitionRun"),
    Ie(Gv, "onTransitionStart"),
    Ie(Yv, "onTransitionCancel"),
    Ie(If, "onTransitionEnd"),
    nl("onMouseEnter", ["mouseout", "mouseover"]),
    nl("onMouseLeave", ["mouseout", "mouseover"]),
    nl("onPointerEnter", ["pointerout", "pointerover"]),
    nl("onPointerLeave", ["pointerout", "pointerover"]),
    xa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    xa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    xa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    xa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    xa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    xa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ci = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , w0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ci));
    function vm(t, e) {
        e = (e & 4) !== 0;
        for (var n = 0; n < t.length; n++) {
            var l = t[n]
              , s = l.event;
            l = l.listeners;
            t: {
                var u = void 0;
                if (e)
                    for (var d = l.length - 1; 0 <= d; d--) {
                        var v = l[d]
                          , R = v.instance
                          , D = v.currentTarget;
                        if (v = v.listener,
                        R !== u && s.isPropagationStopped())
                            break t;
                        u = v,
                        s.currentTarget = D;
                        try {
                            u(s)
                        } catch (q) {
                            _r(q)
                        }
                        s.currentTarget = null,
                        u = R
                    }
                else
                    for (d = 0; d < l.length; d++) {
                        if (v = l[d],
                        R = v.instance,
                        D = v.currentTarget,
                        v = v.listener,
                        R !== u && s.isPropagationStopped())
                            break t;
                        u = v,
                        s.currentTarget = D;
                        try {
                            u(s)
                        } catch (q) {
                            _r(q)
                        }
                        s.currentTarget = null,
                        u = R
                    }
            }
        }
    }
    function xt(t, e) {
        var n = e[as];
        n === void 0 && (n = e[as] = new Set);
        var l = t + "__bubble";
        n.has(l) || (bm(e, t, 2, !1),
        n.add(l))
    }
    function Qu(t, e, n) {
        var l = 0;
        e && (l |= 4),
        bm(n, t, l, e)
    }
    var so = "_reactListening" + Math.random().toString(36).slice(2);
    function Zu(t) {
        if (!t[so]) {
            t[so] = !0,
            df.forEach(function(n) {
                n !== "selectionchange" && (w0.has(n) || Qu(n, !1, t),
                Qu(n, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[so] || (e[so] = !0,
            Qu("selectionchange", !1, e))
        }
    }
    function bm(t, e, n, l) {
        switch (Jm(e)) {
        case 2:
            var s = W0;
            break;
        case 8:
            s = tb;
            break;
        default:
            s = oc
        }
        n = s.bind(null, e, n, t),
        s = void 0,
        !ds || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0),
        l ? s !== void 0 ? t.addEventListener(e, n, {
            capture: !0,
            passive: s
        }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
            passive: s
        }) : t.addEventListener(e, n, !1)
    }
    function Ku(t, e, n, l, s) {
        var u = l;
        if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
            t: for (; ; ) {
                if (l === null)
                    return;
                var d = l.tag;
                if (d === 3 || d === 4) {
                    var v = l.stateNode.containerInfo;
                    if (v === s)
                        break;
                    if (d === 4)
                        for (d = l.return; d !== null; ) {
                            var R = d.tag;
                            if ((R === 3 || R === 4) && d.stateNode.containerInfo === s)
                                return;
                            d = d.return
                        }
                    for (; v !== null; ) {
                        if (d = Wa(v),
                        d === null)
                            return;
                        if (R = d.tag,
                        R === 5 || R === 6 || R === 26 || R === 27) {
                            l = u = d;
                            continue t
                        }
                        v = v.parentNode
                    }
                }
                l = l.return
            }
        Rf(function() {
            var D = u
              , q = cs(n)
              , Z = [];
            t: {
                var L = $f.get(t);
                if (L !== void 0) {
                    var B = br
                      , at = t;
                    switch (t) {
                    case "keypress":
                        if (yr(n) === 0)
                            break t;
                    case "keydown":
                    case "keyup":
                        B = vv;
                        break;
                    case "focusin":
                        at = "focus",
                        B = gs;
                        break;
                    case "focusout":
                        at = "blur",
                        B = gs;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        B = gs;
                        break;
                    case "click":
                        if (n.button === 2)
                            break t;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        B = Af;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        B = rv;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        B = xv;
                        break;
                    case Jf:
                    case Pf:
                    case Ff:
                        B = uv;
                        break;
                    case If:
                        B = Ev;
                        break;
                    case "scroll":
                    case "scrollend":
                        B = lv;
                        break;
                    case "wheel":
                        B = wv;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        B = fv;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        B = zf;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        B = Av
                    }
                    var ft = (e & 4) !== 0
                      , Lt = !ft && (t === "scroll" || t === "scrollend")
                      , O = ft ? L !== null ? L + "Capture" : null : L;
                    ft = [];
                    for (var M = D, j; M !== null; ) {
                        var G = M;
                        if (j = G.stateNode,
                        G = G.tag,
                        G !== 5 && G !== 26 && G !== 27 || j === null || O === null || (G = $l(M, O),
                        G != null && ft.push(Oi(M, G, j))),
                        Lt)
                            break;
                        M = M.return
                    }
                    0 < ft.length && (L = new B(L,at,null,n,q),
                    Z.push({
                        event: L,
                        listeners: ft
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (L = t === "mouseover" || t === "pointerover",
                    B = t === "mouseout" || t === "pointerout",
                    L && n !== us && (at = n.relatedTarget || n.fromElement) && (Wa(at) || at[$a]))
                        break t;
                    if ((B || L) && (L = q.window === q ? q : (L = q.ownerDocument) ? L.defaultView || L.parentWindow : window,
                    B ? (at = n.relatedTarget || n.toElement,
                    B = D,
                    at = at ? Wa(at) : null,
                    at !== null && (Lt = f(at),
                    ft = at.tag,
                    at !== Lt || ft !== 5 && ft !== 27 && ft !== 6) && (at = null)) : (B = null,
                    at = D),
                    B !== at)) {
                        if (ft = Af,
                        G = "onMouseLeave",
                        O = "onMouseEnter",
                        M = "mouse",
                        (t === "pointerout" || t === "pointerover") && (ft = zf,
                        G = "onPointerLeave",
                        O = "onPointerEnter",
                        M = "pointer"),
                        Lt = B == null ? L : Il(B),
                        j = at == null ? L : Il(at),
                        L = new ft(G,M + "leave",B,n,q),
                        L.target = Lt,
                        L.relatedTarget = j,
                        G = null,
                        Wa(q) === D && (ft = new ft(O,M + "enter",at,n,q),
                        ft.target = j,
                        ft.relatedTarget = Lt,
                        G = ft),
                        Lt = G,
                        B && at)
                            e: {
                                for (ft = T0,
                                O = B,
                                M = at,
                                j = 0,
                                G = O; G; G = ft(G))
                                    j++;
                                G = 0;
                                for (var ut = M; ut; ut = ft(ut))
                                    G++;
                                for (; 0 < j - G; )
                                    O = ft(O),
                                    j--;
                                for (; 0 < G - j; )
                                    M = ft(M),
                                    G--;
                                for (; j--; ) {
                                    if (O === M || M !== null && O === M.alternate) {
                                        ft = O;
                                        break e
                                    }
                                    O = ft(O),
                                    M = ft(M)
                                }
                                ft = null
                            }
                        else
                            ft = null;
                        B !== null && Sm(Z, L, B, ft, !1),
                        at !== null && Lt !== null && Sm(Z, Lt, at, ft, !0)
                    }
                }
                t: {
                    if (L = D ? Il(D) : window,
                    B = L.nodeName && L.nodeName.toLowerCase(),
                    B === "select" || B === "input" && L.type === "file")
                        var At = Bf;
                    else if (Lf(L))
                        if (Hf)
                            At = Bv;
                        else {
                            At = Lv;
                            var rt = Dv
                        }
                    else
                        B = L.nodeName,
                        !B || B.toLowerCase() !== "input" || L.type !== "checkbox" && L.type !== "radio" ? D && ss(D.elementType) && (At = Bf) : At = Uv;
                    if (At && (At = At(t, D))) {
                        Uf(Z, At, n, q);
                        break t
                    }
                    rt && rt(t, L, D),
                    t === "focusout" && D && L.type === "number" && D.memoizedProps.value != null && os(L, "number", L.value)
                }
                switch (rt = D ? Il(D) : window,
                t) {
                case "focusin":
                    (Lf(rt) || rt.contentEditable === "true") && (sl = rt,
                    _s = D,
                    ri = null);
                    break;
                case "focusout":
                    ri = _s = sl = null;
                    break;
                case "mousedown":
                    Es = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Es = !1,
                    Zf(Z, n, q);
                    break;
                case "selectionchange":
                    if (kv)
                        break;
                case "keydown":
                case "keyup":
                    Zf(Z, n, q)
                }
                var gt;
                if (vs)
                    t: {
                        switch (t) {
                        case "compositionstart":
                            var Et = "onCompositionStart";
                            break t;
                        case "compositionend":
                            Et = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            Et = "onCompositionUpdate";
                            break t
                        }
                        Et = void 0
                    }
                else
                    ol ? jf(t, n) && (Et = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (Et = "onCompositionStart");
                Et && (Cf && n.locale !== "ko" && (ol || Et !== "onCompositionStart" ? Et === "onCompositionEnd" && ol && (gt = wf()) : (Bn = q,
                hs = "value"in Bn ? Bn.value : Bn.textContent,
                ol = !0)),
                rt = uo(D, Et),
                0 < rt.length && (Et = new Mf(Et,t,null,n,q),
                Z.push({
                    event: Et,
                    listeners: rt
                }),
                gt ? Et.data = gt : (gt = Df(n),
                gt !== null && (Et.data = gt)))),
                (gt = zv ? Cv(t, n) : Ov(t, n)) && (Et = uo(D, "onBeforeInput"),
                0 < Et.length && (rt = new Mf("onBeforeInput","beforeinput",null,n,q),
                Z.push({
                    event: rt,
                    listeners: Et
                }),
                rt.data = gt)),
                _0(Z, t, D, n, q)
            }
            vm(Z, e)
        })
    }
    function Oi(t, e, n) {
        return {
            instance: t,
            listener: e,
            currentTarget: n
        }
    }
    function uo(t, e) {
        for (var n = e + "Capture", l = []; t !== null; ) {
            var s = t
              , u = s.stateNode;
            if (s = s.tag,
            s !== 5 && s !== 26 && s !== 27 || u === null || (s = $l(t, n),
            s != null && l.unshift(Oi(t, s, u)),
            s = $l(t, e),
            s != null && l.push(Oi(t, s, u))),
            t.tag === 3)
                return l;
            t = t.return
        }
        return []
    }
    function T0(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }
    function Sm(t, e, n, l, s) {
        for (var u = e._reactName, d = []; n !== null && n !== l; ) {
            var v = n
              , R = v.alternate
              , D = v.stateNode;
            if (v = v.tag,
            R !== null && R === l)
                break;
            v !== 5 && v !== 26 && v !== 27 || D === null || (R = D,
            s ? (D = $l(n, u),
            D != null && d.unshift(Oi(n, D, R))) : s || (D = $l(n, u),
            D != null && d.push(Oi(n, D, R)))),
            n = n.return
        }
        d.length !== 0 && t.push({
            event: e,
            listeners: d
        })
    }
    var A0 = /\r\n?/g
      , M0 = /\u0000|\uFFFD/g;
    function xm(t) {
        return (typeof t == "string" ? t : "" + t).replace(A0, `
`).replace(M0, "")
    }
    function _m(t, e) {
        return e = xm(e),
        xm(t) === e
    }
    function Dt(t, e, n, l, s, u) {
        switch (n) {
        case "children":
            typeof l == "string" ? e === "body" || e === "textarea" && l === "" || ll(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && ll(t, "" + l);
            break;
        case "className":
            hr(t, "class", l);
            break;
        case "tabIndex":
            hr(t, "tabindex", l);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            hr(t, n, l);
            break;
        case "style":
            _f(t, l, u);
            break;
        case "data":
            if (e !== "object") {
                hr(t, "data", l);
                break
            }
        case "src":
        case "href":
            if (l === "" && (e !== "a" || n !== "href")) {
                t.removeAttribute(n);
                break
            }
            if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                t.removeAttribute(n);
                break
            }
            l = pr("" + l),
            t.setAttribute(n, l);
            break;
        case "action":
        case "formAction":
            if (typeof l == "function") {
                t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof u == "function" && (n === "formAction" ? (e !== "input" && Dt(t, e, "name", s.name, s, null),
                Dt(t, e, "formEncType", s.formEncType, s, null),
                Dt(t, e, "formMethod", s.formMethod, s, null),
                Dt(t, e, "formTarget", s.formTarget, s, null)) : (Dt(t, e, "encType", s.encType, s, null),
                Dt(t, e, "method", s.method, s, null),
                Dt(t, e, "target", s.target, s, null)));
            if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                t.removeAttribute(n);
                break
            }
            l = pr("" + l),
            t.setAttribute(n, l);
            break;
        case "onClick":
            l != null && (t.onclick = fn);
            break;
        case "onScroll":
            l != null && xt("scroll", t);
            break;
        case "onScrollEnd":
            l != null && xt("scrollend", t);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(o(61));
                if (n = l.__html,
                n != null) {
                    if (s.children != null)
                        throw Error(o(60));
                    t.innerHTML = n
                }
            }
            break;
        case "multiple":
            t.multiple = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "muted":
            t.muted = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                t.removeAttribute("xlink:href");
                break
            }
            n = pr("" + l),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "" + l) : t.removeAttribute(n);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
            break;
        case "capture":
        case "download":
            l === !0 ? t.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(n, l) : t.removeAttribute(n);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(n, l) : t.removeAttribute(n);
            break;
        case "rowSpan":
        case "start":
            l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(n) : t.setAttribute(n, l);
            break;
        case "popover":
            xt("beforetoggle", t),
            xt("toggle", t),
            dr(t, "popover", l);
            break;
        case "xlinkActuate":
            cn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
            break;
        case "xlinkArcrole":
            cn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
            break;
        case "xlinkRole":
            cn(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
            break;
        case "xlinkShow":
            cn(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
            break;
        case "xlinkTitle":
            cn(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
            break;
        case "xlinkType":
            cn(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
            break;
        case "xmlBase":
            cn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
            break;
        case "xmlLang":
            cn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
            break;
        case "xmlSpace":
            cn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
            break;
        case "is":
            dr(t, "is", l);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = nv.get(n) || n,
            dr(t, n, l))
        }
    }
    function Ju(t, e, n, l, s, u) {
        switch (n) {
        case "style":
            _f(t, l, u);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(o(61));
                if (n = l.__html,
                n != null) {
                    if (s.children != null)
                        throw Error(o(60));
                    t.innerHTML = n
                }
            }
            break;
        case "children":
            typeof l == "string" ? ll(t, l) : (typeof l == "number" || typeof l == "bigint") && ll(t, "" + l);
            break;
        case "onScroll":
            l != null && xt("scroll", t);
            break;
        case "onScrollEnd":
            l != null && xt("scrollend", t);
            break;
        case "onClick":
            l != null && (t.onclick = fn);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!hf.hasOwnProperty(n))
                t: {
                    if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"),
                    e = n.slice(2, s ? n.length - 7 : void 0),
                    u = t[be] || null,
                    u = u != null ? u[n] : null,
                    typeof u == "function" && t.removeEventListener(e, u, s),
                    typeof l == "function")) {
                        typeof u != "function" && u !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)),
                        t.addEventListener(e, l, s);
                        break t
                    }
                    n in t ? t[n] = l : l === !0 ? t.setAttribute(n, "") : dr(t, n, l)
                }
        }
    }
    function de(t, e, n) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            xt("error", t),
            xt("load", t);
            var l = !1, s = !1, u;
            for (u in n)
                if (n.hasOwnProperty(u)) {
                    var d = n[u];
                    if (d != null)
                        switch (u) {
                        case "src":
                            l = !0;
                            break;
                        case "srcSet":
                            s = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, e));
                        default:
                            Dt(t, e, u, d, n, null)
                        }
                }
            s && Dt(t, e, "srcSet", n.srcSet, n, null),
            l && Dt(t, e, "src", n.src, n, null);
            return;
        case "input":
            xt("invalid", t);
            var v = u = d = s = null
              , R = null
              , D = null;
            for (l in n)
                if (n.hasOwnProperty(l)) {
                    var q = n[l];
                    if (q != null)
                        switch (l) {
                        case "name":
                            s = q;
                            break;
                        case "type":
                            d = q;
                            break;
                        case "checked":
                            R = q;
                            break;
                        case "defaultChecked":
                            D = q;
                            break;
                        case "value":
                            u = q;
                            break;
                        case "defaultValue":
                            v = q;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (q != null)
                                throw Error(o(137, e));
                            break;
                        default:
                            Dt(t, e, l, q, n, null)
                        }
                }
            vf(t, u, v, R, D, d, s, !1);
            return;
        case "select":
            xt("invalid", t),
            l = d = u = null;
            for (s in n)
                if (n.hasOwnProperty(s) && (v = n[s],
                v != null))
                    switch (s) {
                    case "value":
                        u = v;
                        break;
                    case "defaultValue":
                        d = v;
                        break;
                    case "multiple":
                        l = v;
                    default:
                        Dt(t, e, s, v, n, null)
                    }
            e = u,
            n = d,
            t.multiple = !!l,
            e != null ? al(t, !!l, e, !1) : n != null && al(t, !!l, n, !0);
            return;
        case "textarea":
            xt("invalid", t),
            u = s = l = null;
            for (d in n)
                if (n.hasOwnProperty(d) && (v = n[d],
                v != null))
                    switch (d) {
                    case "value":
                        l = v;
                        break;
                    case "defaultValue":
                        s = v;
                        break;
                    case "children":
                        u = v;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (v != null)
                            throw Error(o(91));
                        break;
                    default:
                        Dt(t, e, d, v, n, null)
                    }
            Sf(t, l, s, u);
            return;
        case "option":
            for (R in n)
                n.hasOwnProperty(R) && (l = n[R],
                l != null) && (R === "selected" ? t.selected = l && typeof l != "function" && typeof l != "symbol" : Dt(t, e, R, l, n, null));
            return;
        case "dialog":
            xt("beforetoggle", t),
            xt("toggle", t),
            xt("cancel", t),
            xt("close", t);
            break;
        case "iframe":
        case "object":
            xt("load", t);
            break;
        case "video":
        case "audio":
            for (l = 0; l < Ci.length; l++)
                xt(Ci[l], t);
            break;
        case "image":
            xt("error", t),
            xt("load", t);
            break;
        case "details":
            xt("toggle", t);
            break;
        case "embed":
        case "source":
        case "link":
            xt("error", t),
            xt("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (D in n)
                if (n.hasOwnProperty(D) && (l = n[D],
                l != null))
                    switch (D) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(o(137, e));
                    default:
                        Dt(t, e, D, l, n, null)
                    }
            return;
        default:
            if (ss(e)) {
                for (q in n)
                    n.hasOwnProperty(q) && (l = n[q],
                    l !== void 0 && Ju(t, e, q, l, n, void 0));
                return
            }
        }
        for (v in n)
            n.hasOwnProperty(v) && (l = n[v],
            l != null && Dt(t, e, v, l, n, null))
    }
    function z0(t, e, n, l) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var s = null
              , u = null
              , d = null
              , v = null
              , R = null
              , D = null
              , q = null;
            for (B in n) {
                var Z = n[B];
                if (n.hasOwnProperty(B) && Z != null)
                    switch (B) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        R = Z;
                    default:
                        l.hasOwnProperty(B) || Dt(t, e, B, null, l, Z)
                    }
            }
            for (var L in l) {
                var B = l[L];
                if (Z = n[L],
                l.hasOwnProperty(L) && (B != null || Z != null))
                    switch (L) {
                    case "type":
                        u = B;
                        break;
                    case "name":
                        s = B;
                        break;
                    case "checked":
                        D = B;
                        break;
                    case "defaultChecked":
                        q = B;
                        break;
                    case "value":
                        d = B;
                        break;
                    case "defaultValue":
                        v = B;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (B != null)
                            throw Error(o(137, e));
                        break;
                    default:
                        B !== Z && Dt(t, e, L, B, l, Z)
                    }
            }
            rs(t, d, v, R, D, q, u, s);
            return;
        case "select":
            B = d = v = L = null;
            for (u in n)
                if (R = n[u],
                n.hasOwnProperty(u) && R != null)
                    switch (u) {
                    case "value":
                        break;
                    case "multiple":
                        B = R;
                    default:
                        l.hasOwnProperty(u) || Dt(t, e, u, null, l, R)
                    }
            for (s in l)
                if (u = l[s],
                R = n[s],
                l.hasOwnProperty(s) && (u != null || R != null))
                    switch (s) {
                    case "value":
                        L = u;
                        break;
                    case "defaultValue":
                        v = u;
                        break;
                    case "multiple":
                        d = u;
                    default:
                        u !== R && Dt(t, e, s, u, l, R)
                    }
            e = v,
            n = d,
            l = B,
            L != null ? al(t, !!n, L, !1) : !!l != !!n && (e != null ? al(t, !!n, e, !0) : al(t, !!n, n ? [] : "", !1));
            return;
        case "textarea":
            B = L = null;
            for (v in n)
                if (s = n[v],
                n.hasOwnProperty(v) && s != null && !l.hasOwnProperty(v))
                    switch (v) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        Dt(t, e, v, null, l, s)
                    }
            for (d in l)
                if (s = l[d],
                u = n[d],
                l.hasOwnProperty(d) && (s != null || u != null))
                    switch (d) {
                    case "value":
                        L = s;
                        break;
                    case "defaultValue":
                        B = s;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (s != null)
                            throw Error(o(91));
                        break;
                    default:
                        s !== u && Dt(t, e, d, s, l, u)
                    }
            bf(t, L, B);
            return;
        case "option":
            for (var at in n)
                L = n[at],
                n.hasOwnProperty(at) && L != null && !l.hasOwnProperty(at) && (at === "selected" ? t.selected = !1 : Dt(t, e, at, null, l, L));
            for (R in l)
                L = l[R],
                B = n[R],
                l.hasOwnProperty(R) && L !== B && (L != null || B != null) && (R === "selected" ? t.selected = L && typeof L != "function" && typeof L != "symbol" : Dt(t, e, R, L, l, B));
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var ft in n)
                L = n[ft],
                n.hasOwnProperty(ft) && L != null && !l.hasOwnProperty(ft) && Dt(t, e, ft, null, l, L);
            for (D in l)
                if (L = l[D],
                B = n[D],
                l.hasOwnProperty(D) && L !== B && (L != null || B != null))
                    switch (D) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (L != null)
                            throw Error(o(137, e));
                        break;
                    default:
                        Dt(t, e, D, L, l, B)
                    }
            return;
        default:
            if (ss(e)) {
                for (var Lt in n)
                    L = n[Lt],
                    n.hasOwnProperty(Lt) && L !== void 0 && !l.hasOwnProperty(Lt) && Ju(t, e, Lt, void 0, l, L);
                for (q in l)
                    L = l[q],
                    B = n[q],
                    !l.hasOwnProperty(q) || L === B || L === void 0 && B === void 0 || Ju(t, e, q, L, l, B);
                return
            }
        }
        for (var O in n)
            L = n[O],
            n.hasOwnProperty(O) && L != null && !l.hasOwnProperty(O) && Dt(t, e, O, null, l, L);
        for (Z in l)
            L = l[Z],
            B = n[Z],
            !l.hasOwnProperty(Z) || L === B || L == null && B == null || Dt(t, e, Z, L, l, B)
    }
    function Em(t) {
        switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function C0() {
        if (typeof performance.getEntriesByType == "function") {
            for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
                var s = n[l]
                  , u = s.transferSize
                  , d = s.initiatorType
                  , v = s.duration;
                if (u && v && Em(d)) {
                    for (d = 0,
                    v = s.responseEnd,
                    l += 1; l < n.length; l++) {
                        var R = n[l]
                          , D = R.startTime;
                        if (D > v)
                            break;
                        var q = R.transferSize
                          , Z = R.initiatorType;
                        q && Em(Z) && (R = R.responseEnd,
                        d += q * (R < v ? 1 : (v - D) / (R - D)))
                    }
                    if (--l,
                    e += 8 * (u + d) / (s.duration / 1e3),
                    t++,
                    10 < t)
                        break
                }
            }
            if (0 < t)
                return e / t / 1e6
        }
        return navigator.connection && (t = navigator.connection.downlink,
        typeof t == "number") ? t : 5
    }
    var Pu = null
      , Fu = null;
    function co(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }
    function Rm(t) {
        switch (t) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function wm(t, e) {
        if (t === 0)
            switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return t === 1 && e === "foreignObject" ? 0 : t
    }
    function Iu(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var $u = null;
    function O0() {
        var t = window.event;
        return t && t.type === "popstate" ? t === $u ? !1 : ($u = t,
        !0) : ($u = null,
        !1)
    }
    var Tm = typeof setTimeout == "function" ? setTimeout : void 0
      , N0 = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Am = typeof Promise == "function" ? Promise : void 0
      , j0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Am < "u" ? function(t) {
        return Am.resolve(null).then(t).catch(D0)
    }
    : Tm;
    function D0(t) {
        setTimeout(function() {
            throw t
        })
    }
    function ta(t) {
        return t === "head"
    }
    function Mm(t, e) {
        var n = e
          , l = 0;
        do {
            var s = n.nextSibling;
            if (t.removeChild(n),
            s && s.nodeType === 8)
                if (n = s.data,
                n === "/$" || n === "/&") {
                    if (l === 0) {
                        t.removeChild(s),
                        Ll(e);
                        return
                    }
                    l--
                } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
                    l++;
                else if (n === "html")
                    Ni(t.ownerDocument.documentElement);
                else if (n === "head") {
                    n = t.ownerDocument.head,
                    Ni(n);
                    for (var u = n.firstChild; u; ) {
                        var d = u.nextSibling
                          , v = u.nodeName;
                        u[Fl] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u),
                        u = d
                    }
                } else
                    n === "body" && Ni(t.ownerDocument.body);
            n = s
        } while (n);
        Ll(e)
    }
    function zm(t, e) {
        var n = t;
        t = 0;
        do {
            var l = n.nextSibling;
            if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display,
            n.style.display = "none") : (n.style.display = n._stashedDisplay || "",
            n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue,
            n.nodeValue = "") : n.nodeValue = n._stashedText || ""),
            l && l.nodeType === 8)
                if (n = l.data,
                n === "/$") {
                    if (t === 0)
                        break;
                    t--
                } else
                    n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
            n = l
        } while (n)
    }
    function Wu(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var n = e;
            switch (e = e.nextSibling,
            n.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Wu(n),
                ls(n);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (n.rel.toLowerCase() === "stylesheet")
                    continue
            }
            t.removeChild(n)
        }
    }
    function L0(t, e, n, l) {
        for (; t.nodeType === 1; ) {
            var s = n;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break
            } else if (l) {
                if (!t[Fl])
                    switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop"))
                            break;
                        return t;
                    case "link":
                        if (u = t.getAttribute("rel"),
                        u === "stylesheet" && t.hasAttribute("data-precedence"))
                            break;
                        if (u !== s.rel || t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || t.getAttribute("title") !== (s.title == null ? null : s.title))
                            break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence"))
                            break;
                        return t;
                    case "script":
                        if (u = t.getAttribute("src"),
                        (u !== (s.src == null ? null : s.src) || t.getAttribute("type") !== (s.type == null ? null : s.type) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                            break;
                        return t;
                    default:
                        return t
                    }
            } else if (e === "input" && t.type === "hidden") {
                var u = s.name == null ? null : "" + s.name;
                if (s.type === "hidden" && t.getAttribute("name") === u)
                    return t
            } else
                return t;
            if (t = Je(t.nextSibling),
            t === null)
                break
        }
        return null
    }
    function U0(t, e, n) {
        if (e === "")
            return null;
        for (; t.nodeType !== 3; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Je(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function Cm(t, e) {
        for (; t.nodeType !== 8; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Je(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function tc(t) {
        return t.data === "$?" || t.data === "$~"
    }
    function ec(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
    }
    function B0(t, e) {
        var n = t.ownerDocument;
        if (t.data === "$~")
            t._reactRetry = e;
        else if (t.data !== "$?" || n.readyState !== "loading")
            e();
        else {
            var l = function() {
                e(),
                n.removeEventListener("DOMContentLoaded", l)
            };
            n.addEventListener("DOMContentLoaded", l),
            t._reactRetry = l
        }
    }
    function Je(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3)
                break;
            if (e === 8) {
                if (e = t.data,
                e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
                    break;
                if (e === "/$" || e === "/&")
                    return null
            }
        }
        return t
    }
    var nc = null;
    function Om(t) {
        t = t.nextSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var n = t.data;
                if (n === "/$" || n === "/&") {
                    if (e === 0)
                        return Je(t.nextSibling);
                    e--
                } else
                    n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++
            }
            t = t.nextSibling
        }
        return null
    }
    function Nm(t) {
        t = t.previousSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var n = t.data;
                if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
                    if (e === 0)
                        return t;
                    e--
                } else
                    n !== "/$" && n !== "/&" || e++
            }
            t = t.previousSibling
        }
        return null
    }
    function jm(t, e, n) {
        switch (e = co(n),
        t) {
        case "html":
            if (t = e.documentElement,
            !t)
                throw Error(o(452));
            return t;
        case "head":
            if (t = e.head,
            !t)
                throw Error(o(453));
            return t;
        case "body":
            if (t = e.body,
            !t)
                throw Error(o(454));
            return t;
        default:
            throw Error(o(451))
        }
    }
    function Ni(t) {
        for (var e = t.attributes; e.length; )
            t.removeAttributeNode(e[0]);
        ls(t)
    }
    var Pe = new Map
      , Dm = new Set;
    function fo(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var An = K.d;
    K.d = {
        f: H0,
        r: k0,
        D: q0,
        C: G0,
        L: Y0,
        m: V0,
        X: Q0,
        S: X0,
        M: Z0
    };
    function H0() {
        var t = An.f()
          , e = no();
        return t || e
    }
    function k0(t) {
        var e = tl(t);
        e !== null && e.tag === 5 && e.type === "form" ? Id(e) : An.r(t)
    }
    var Nl = typeof document > "u" ? null : document;
    function Lm(t, e, n) {
        var l = Nl;
        if (l && typeof e == "string" && e) {
            var s = Ge(e);
            s = 'link[rel="' + t + '"][href="' + s + '"]',
            typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
            Dm.has(s) || (Dm.add(s),
            t = {
                rel: t,
                crossOrigin: n,
                href: e
            },
            l.querySelector(s) === null && (e = l.createElement("link"),
            de(e, "link", t),
            le(e),
            l.head.appendChild(e)))
        }
    }
    function q0(t) {
        An.D(t),
        Lm("dns-prefetch", t, null)
    }
    function G0(t, e) {
        An.C(t, e),
        Lm("preconnect", t, e)
    }
    function Y0(t, e, n) {
        An.L(t, e, n);
        var l = Nl;
        if (l && t && e) {
            var s = 'link[rel="preload"][as="' + Ge(e) + '"]';
            e === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + Ge(n.imageSrcSet) + '"]',
            typeof n.imageSizes == "string" && (s += '[imagesizes="' + Ge(n.imageSizes) + '"]')) : s += '[href="' + Ge(t) + '"]';
            var u = s;
            switch (e) {
            case "style":
                u = jl(t);
                break;
            case "script":
                u = Dl(t)
            }
            Pe.has(u) || (t = y({
                rel: "preload",
                href: e === "image" && n && n.imageSrcSet ? void 0 : t,
                as: e
            }, n),
            Pe.set(u, t),
            l.querySelector(s) !== null || e === "style" && l.querySelector(ji(u)) || e === "script" && l.querySelector(Di(u)) || (e = l.createElement("link"),
            de(e, "link", t),
            le(e),
            l.head.appendChild(e)))
        }
    }
    function V0(t, e) {
        An.m(t, e);
        var n = Nl;
        if (n && t) {
            var l = e && typeof e.as == "string" ? e.as : "script"
              , s = 'link[rel="modulepreload"][as="' + Ge(l) + '"][href="' + Ge(t) + '"]'
              , u = s;
            switch (l) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                u = Dl(t)
            }
            if (!Pe.has(u) && (t = y({
                rel: "modulepreload",
                href: t
            }, e),
            Pe.set(u, t),
            n.querySelector(s) === null)) {
                switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (n.querySelector(Di(u)))
                        return
                }
                l = n.createElement("link"),
                de(l, "link", t),
                le(l),
                n.head.appendChild(l)
            }
        }
    }
    function X0(t, e, n) {
        An.S(t, e, n);
        var l = Nl;
        if (l && t) {
            var s = el(l).hoistableStyles
              , u = jl(t);
            e = e || "default";
            var d = s.get(u);
            if (!d) {
                var v = {
                    loading: 0,
                    preload: null
                };
                if (d = l.querySelector(ji(u)))
                    v.loading = 5;
                else {
                    t = y({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, n),
                    (n = Pe.get(u)) && ac(t, n);
                    var R = d = l.createElement("link");
                    le(R),
                    de(R, "link", t),
                    R._p = new Promise(function(D, q) {
                        R.onload = D,
                        R.onerror = q
                    }
                    ),
                    R.addEventListener("load", function() {
                        v.loading |= 1
                    }),
                    R.addEventListener("error", function() {
                        v.loading |= 2
                    }),
                    v.loading |= 4,
                    ho(d, e, l)
                }
                d = {
                    type: "stylesheet",
                    instance: d,
                    count: 1,
                    state: v
                },
                s.set(u, d)
            }
        }
    }
    function Q0(t, e) {
        An.X(t, e);
        var n = Nl;
        if (n && t) {
            var l = el(n).hoistableScripts
              , s = Dl(t)
              , u = l.get(s);
            u || (u = n.querySelector(Di(s)),
            u || (t = y({
                src: t,
                async: !0
            }, e),
            (e = Pe.get(s)) && lc(t, e),
            u = n.createElement("script"),
            le(u),
            de(u, "link", t),
            n.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            l.set(s, u))
        }
    }
    function Z0(t, e) {
        An.M(t, e);
        var n = Nl;
        if (n && t) {
            var l = el(n).hoistableScripts
              , s = Dl(t)
              , u = l.get(s);
            u || (u = n.querySelector(Di(s)),
            u || (t = y({
                src: t,
                async: !0,
                type: "module"
            }, e),
            (e = Pe.get(s)) && lc(t, e),
            u = n.createElement("script"),
            le(u),
            de(u, "link", t),
            n.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            l.set(s, u))
        }
    }
    function Um(t, e, n, l) {
        var s = (s = st.current) ? fo(s) : null;
        if (!s)
            throw Error(o(446));
        switch (t) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof n.precedence == "string" && typeof n.href == "string" ? (e = jl(n.href),
            n = el(s).hoistableStyles,
            l = n.get(e),
            l || (l = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            n.set(e, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                t = jl(n.href);
                var u = el(s).hoistableStyles
                  , d = u.get(t);
                if (d || (s = s.ownerDocument || s,
                d = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                u.set(t, d),
                (u = s.querySelector(ji(t))) && !u._p && (d.instance = u,
                d.state.loading = 5),
                Pe.has(t) || (n = {
                    rel: "preload",
                    as: "style",
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy
                },
                Pe.set(t, n),
                u || K0(s, t, n, d.state))),
                e && l === null)
                    throw Error(o(528, ""));
                return d
            }
            if (e && l !== null)
                throw Error(o(529, ""));
            return null;
        case "script":
            return e = n.async,
            n = n.src,
            typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Dl(n),
            n = el(s).hoistableScripts,
            l = n.get(e),
            l || (l = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            n.set(e, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(o(444, t))
        }
    }
    function jl(t) {
        return 'href="' + Ge(t) + '"'
    }
    function ji(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }
    function Bm(t) {
        return y({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }
    function K0(t, e, n, l) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"),
        l.preload = e,
        e.addEventListener("load", function() {
            return l.loading |= 1
        }),
        e.addEventListener("error", function() {
            return l.loading |= 2
        }),
        de(e, "link", n),
        le(e),
        t.head.appendChild(e))
    }
    function Dl(t) {
        return '[src="' + Ge(t) + '"]'
    }
    function Di(t) {
        return "script[async]" + t
    }
    function Hm(t, e, n) {
        if (e.count++,
        e.instance === null)
            switch (e.type) {
            case "style":
                var l = t.querySelector('style[data-href~="' + Ge(n.href) + '"]');
                if (l)
                    return e.instance = l,
                    le(l),
                    l;
                var s = y({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return l = (t.ownerDocument || t).createElement("style"),
                le(l),
                de(l, "style", s),
                ho(l, n.precedence, t),
                e.instance = l;
            case "stylesheet":
                s = jl(n.href);
                var u = t.querySelector(ji(s));
                if (u)
                    return e.state.loading |= 4,
                    e.instance = u,
                    le(u),
                    u;
                l = Bm(n),
                (s = Pe.get(s)) && ac(l, s),
                u = (t.ownerDocument || t).createElement("link"),
                le(u);
                var d = u;
                return d._p = new Promise(function(v, R) {
                    d.onload = v,
                    d.onerror = R
                }
                ),
                de(u, "link", l),
                e.state.loading |= 4,
                ho(u, n.precedence, t),
                e.instance = u;
            case "script":
                return u = Dl(n.src),
                (s = t.querySelector(Di(u))) ? (e.instance = s,
                le(s),
                s) : (l = n,
                (s = Pe.get(u)) && (l = y({}, n),
                lc(l, s)),
                t = t.ownerDocument || t,
                s = t.createElement("script"),
                le(s),
                de(s, "link", l),
                t.head.appendChild(s),
                e.instance = s);
            case "void":
                return null;
            default:
                throw Error(o(443, e.type))
            }
        else
            e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance,
            e.state.loading |= 4,
            ho(l, n.precedence, t));
        return e.instance
    }
    function ho(t, e, n) {
        for (var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = l.length ? l[l.length - 1] : null, u = s, d = 0; d < l.length; d++) {
            var v = l[d];
            if (v.dataset.precedence === e)
                u = v;
            else if (u !== s)
                break
        }
        u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n,
        e.insertBefore(t, e.firstChild))
    }
    function ac(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.title == null && (t.title = e.title)
    }
    function lc(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.integrity == null && (t.integrity = e.integrity)
    }
    var mo = null;
    function km(t, e, n) {
        if (mo === null) {
            var l = new Map
              , s = mo = new Map;
            s.set(n, l)
        } else
            s = mo,
            l = s.get(n),
            l || (l = new Map,
            s.set(n, l));
        if (l.has(t))
            return l;
        for (l.set(t, null),
        n = n.getElementsByTagName(t),
        s = 0; s < n.length; s++) {
            var u = n[s];
            if (!(u[Fl] || u[se] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var d = u.getAttribute(e) || "";
                d = t + d;
                var v = l.get(d);
                v ? v.push(u) : l.set(d, [u])
            }
        }
        return l
    }
    function qm(t, e, n) {
        t = t.ownerDocument || t,
        t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null)
    }
    function J0(t, e, n) {
        if (n === 1 || e.itemProp != null)
            return !1;
        switch (t) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
                break;
            return !0;
        case "link":
            if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
                break;
            return e.rel === "stylesheet" ? (t = e.disabled,
            typeof e.precedence == "string" && t == null) : !0;
        case "script":
            if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
                return !0
        }
        return !1
    }
    function Gm(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    function P0(t, e, n, l) {
        if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
            if (n.instance === null) {
                var s = jl(l.href)
                  , u = e.querySelector(ji(s));
                if (u) {
                    e = u._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++,
                    t = po.bind(t),
                    e.then(t, t)),
                    n.state.loading |= 4,
                    n.instance = u,
                    le(u);
                    return
                }
                u = e.ownerDocument || e,
                l = Bm(l),
                (s = Pe.get(s)) && ac(l, s),
                u = u.createElement("link"),
                le(u);
                var d = u;
                d._p = new Promise(function(v, R) {
                    d.onload = v,
                    d.onerror = R
                }
                ),
                de(u, "link", l),
                n.instance = u
            }
            t.stylesheets === null && (t.stylesheets = new Map),
            t.stylesheets.set(n, e),
            (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++,
            n = po.bind(t),
            e.addEventListener("load", n),
            e.addEventListener("error", n))
        }
    }
    var ic = 0;
    function F0(t, e) {
        return t.stylesheets && t.count === 0 && yo(t, t.stylesheets),
        0 < t.count || 0 < t.imgCount ? function(n) {
            var l = setTimeout(function() {
                if (t.stylesheets && yo(t, t.stylesheets),
                t.unsuspend) {
                    var u = t.unsuspend;
                    t.unsuspend = null,
                    u()
                }
            }, 6e4 + e);
            0 < t.imgBytes && ic === 0 && (ic = 62500 * C0());
            var s = setTimeout(function() {
                if (t.waitingForImages = !1,
                t.count === 0 && (t.stylesheets && yo(t, t.stylesheets),
                t.unsuspend)) {
                    var u = t.unsuspend;
                    t.unsuspend = null,
                    u()
                }
            }, (t.imgBytes > ic ? 50 : 800) + e);
            return t.unsuspend = n,
            function() {
                t.unsuspend = null,
                clearTimeout(l),
                clearTimeout(s)
            }
        }
        : null
    }
    function po() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                yo(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null,
                t()
            }
        }
    }
    var go = null;
    function yo(t, e) {
        t.stylesheets = null,
        t.unsuspend !== null && (t.count++,
        go = new Map,
        e.forEach(I0, t),
        go = null,
        po.call(t))
    }
    function I0(t, e) {
        if (!(e.state.loading & 4)) {
            var n = go.get(t);
            if (n)
                var l = n.get(null);
            else {
                n = new Map,
                go.set(t, n);
                for (var s = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < s.length; u++) {
                    var d = s[u];
                    (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (n.set(d.dataset.precedence, d),
                    l = d)
                }
                l && n.set(null, l)
            }
            s = e.instance,
            d = s.getAttribute("data-precedence"),
            u = n.get(d) || l,
            u === l && n.set(null, s),
            n.set(d, s),
            this.count++,
            l = po.bind(this),
            s.addEventListener("load", l),
            s.addEventListener("error", l),
            u ? u.parentNode.insertBefore(s, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
            t.insertBefore(s, t.firstChild)),
            e.state.loading |= 4
        }
    }
    var Li = {
        $$typeof: Q,
        Provider: null,
        Consumer: null,
        _currentValue: ot,
        _currentValue2: ot,
        _threadCount: 0
    };
    function $0(t, e, n, l, s, u, d, v, R) {
        this.tag = 1,
        this.containerInfo = t,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = ts(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = ts(0),
        this.hiddenUpdates = ts(null),
        this.identifierPrefix = l,
        this.onUncaughtError = s,
        this.onCaughtError = u,
        this.onRecoverableError = d,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = R,
        this.incompleteTransitions = new Map
    }
    function Ym(t, e, n, l, s, u, d, v, R, D, q, Z) {
        return t = new $0(t,e,n,d,R,D,q,Z,v),
        e = 1,
        u === !0 && (e |= 24),
        u = je(3, null, null, e),
        t.current = u,
        u.stateNode = t,
        e = Hs(),
        e.refCount++,
        t.pooledCache = e,
        e.refCount++,
        u.memoizedState = {
            element: l,
            isDehydrated: n,
            cache: e
        },
        Ys(u),
        t
    }
    function Vm(t) {
        return t ? (t = fl,
        t) : fl
    }
    function Xm(t, e, n, l, s, u) {
        s = Vm(s),
        l.context === null ? l.context = s : l.pendingContext = s,
        l = Vn(e),
        l.payload = {
            element: n
        },
        u = u === void 0 ? null : u,
        u !== null && (l.callback = u),
        n = Xn(t, l, e),
        n !== null && (we(n, t, e),
        hi(n, t, e))
    }
    function Qm(t, e) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var n = t.retryLane;
            t.retryLane = n !== 0 && n < e ? n : e
        }
    }
    function rc(t, e) {
        Qm(t, e),
        (t = t.alternate) && Qm(t, e)
    }
    function Zm(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = wa(t, 67108864);
            e !== null && we(e, t, 67108864),
            rc(t, 67108864)
        }
    }
    function Km(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = He();
            e = es(e);
            var n = wa(t, e);
            n !== null && we(n, t, e),
            rc(t, e)
        }
    }
    var vo = !0;
    function W0(t, e, n, l) {
        var s = U.T;
        U.T = null;
        var u = K.p;
        try {
            K.p = 2,
            oc(t, e, n, l)
        } finally {
            K.p = u,
            U.T = s
        }
    }
    function tb(t, e, n, l) {
        var s = U.T;
        U.T = null;
        var u = K.p;
        try {
            K.p = 8,
            oc(t, e, n, l)
        } finally {
            K.p = u,
            U.T = s
        }
    }
    function oc(t, e, n, l) {
        if (vo) {
            var s = sc(l);
            if (s === null)
                Ku(t, e, l, bo, n),
                Pm(t, l);
            else if (nb(s, t, e, n, l))
                l.stopPropagation();
            else if (Pm(t, l),
            e & 4 && -1 < eb.indexOf(t)) {
                for (; s !== null; ) {
                    var u = tl(s);
                    if (u !== null)
                        switch (u.tag) {
                        case 3:
                            if (u = u.stateNode,
                            u.current.memoizedState.isDehydrated) {
                                var d = Sa(u.pendingLanes);
                                if (d !== 0) {
                                    var v = u;
                                    for (v.pendingLanes |= 2,
                                    v.entangledLanes |= 2; d; ) {
                                        var R = 1 << 31 - Oe(d);
                                        v.entanglements[1] |= R,
                                        d &= ~R
                                    }
                                    ln(u),
                                    (Ct & 6) === 0 && (to = he() + 500,
                                    zi(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            v = wa(u, 2),
                            v !== null && we(v, u, 2),
                            no(),
                            rc(u, 2)
                        }
                    if (u = sc(l),
                    u === null && Ku(t, e, l, bo, n),
                    u === s)
                        break;
                    s = u
                }
                s !== null && l.stopPropagation()
            } else
                Ku(t, e, l, null, n)
        }
    }
    function sc(t) {
        return t = cs(t),
        uc(t)
    }
    var bo = null;
    function uc(t) {
        if (bo = null,
        t = Wa(t),
        t !== null) {
            var e = f(t);
            if (e === null)
                t = null;
            else {
                var n = e.tag;
                if (n === 13) {
                    if (t = h(e),
                    t !== null)
                        return t;
                    t = null
                } else if (n === 31) {
                    if (t = p(e),
                    t !== null)
                        return t;
                    t = null
                } else if (n === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else
                    e !== t && (t = null)
            }
        }
        return bo = t,
        null
    }
    function Jm(t) {
        switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (kt()) {
            case oe:
                return 2;
            case tn:
                return 8;
            case Ia:
            case Gy:
                return 32;
            case af:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var cc = !1
      , ea = null
      , na = null
      , aa = null
      , Ui = new Map
      , Bi = new Map
      , la = []
      , eb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Pm(t, e) {
        switch (t) {
        case "focusin":
        case "focusout":
            ea = null;
            break;
        case "dragenter":
        case "dragleave":
            na = null;
            break;
        case "mouseover":
        case "mouseout":
            aa = null;
            break;
        case "pointerover":
        case "pointerout":
            Ui.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Bi.delete(e.pointerId)
        }
    }
    function Hi(t, e, n, l, s, u) {
        return t === null || t.nativeEvent !== u ? (t = {
            blockedOn: e,
            domEventName: n,
            eventSystemFlags: l,
            nativeEvent: u,
            targetContainers: [s]
        },
        e !== null && (e = tl(e),
        e !== null && Zm(e)),
        t) : (t.eventSystemFlags |= l,
        e = t.targetContainers,
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t)
    }
    function nb(t, e, n, l, s) {
        switch (e) {
        case "focusin":
            return ea = Hi(ea, t, e, n, l, s),
            !0;
        case "dragenter":
            return na = Hi(na, t, e, n, l, s),
            !0;
        case "mouseover":
            return aa = Hi(aa, t, e, n, l, s),
            !0;
        case "pointerover":
            var u = s.pointerId;
            return Ui.set(u, Hi(Ui.get(u) || null, t, e, n, l, s)),
            !0;
        case "gotpointercapture":
            return u = s.pointerId,
            Bi.set(u, Hi(Bi.get(u) || null, t, e, n, l, s)),
            !0
        }
        return !1
    }
    function Fm(t) {
        var e = Wa(t.target);
        if (e !== null) {
            var n = f(e);
            if (n !== null) {
                if (e = n.tag,
                e === 13) {
                    if (e = h(n),
                    e !== null) {
                        t.blockedOn = e,
                        cf(t.priority, function() {
                            Km(n)
                        });
                        return
                    }
                } else if (e === 31) {
                    if (e = p(n),
                    e !== null) {
                        t.blockedOn = e,
                        cf(t.priority, function() {
                            Km(n)
                        });
                        return
                    }
                } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function So(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var e = t.targetContainers; 0 < e.length; ) {
            var n = sc(t.nativeEvent);
            if (n === null) {
                n = t.nativeEvent;
                var l = new n.constructor(n.type,n);
                us = l,
                n.target.dispatchEvent(l),
                us = null
            } else
                return e = tl(n),
                e !== null && Zm(e),
                t.blockedOn = n,
                !1;
            e.shift()
        }
        return !0
    }
    function Im(t, e, n) {
        So(t) && n.delete(e)
    }
    function ab() {
        cc = !1,
        ea !== null && So(ea) && (ea = null),
        na !== null && So(na) && (na = null),
        aa !== null && So(aa) && (aa = null),
        Ui.forEach(Im),
        Bi.forEach(Im)
    }
    function xo(t, e) {
        t.blockedOn === e && (t.blockedOn = null,
        cc || (cc = !0,
        a.unstable_scheduleCallback(a.unstable_NormalPriority, ab)))
    }
    var _o = null;
    function $m(t) {
        _o !== t && (_o = t,
        a.unstable_scheduleCallback(a.unstable_NormalPriority, function() {
            _o === t && (_o = null);
            for (var e = 0; e < t.length; e += 3) {
                var n = t[e]
                  , l = t[e + 1]
                  , s = t[e + 2];
                if (typeof l != "function") {
                    if (uc(l || n) === null)
                        continue;
                    break
                }
                var u = tl(n);
                u !== null && (t.splice(e, 3),
                e -= 3,
                su(u, {
                    pending: !0,
                    data: s,
                    method: n.method,
                    action: l
                }, l, s))
            }
        }))
    }
    function Ll(t) {
        function e(R) {
            return xo(R, t)
        }
        ea !== null && xo(ea, t),
        na !== null && xo(na, t),
        aa !== null && xo(aa, t),
        Ui.forEach(e),
        Bi.forEach(e);
        for (var n = 0; n < la.length; n++) {
            var l = la[n];
            l.blockedOn === t && (l.blockedOn = null)
        }
        for (; 0 < la.length && (n = la[0],
        n.blockedOn === null); )
            Fm(n),
            n.blockedOn === null && la.shift();
        if (n = (t.ownerDocument || t).$$reactFormReplay,
        n != null)
            for (l = 0; l < n.length; l += 3) {
                var s = n[l]
                  , u = n[l + 1]
                  , d = s[be] || null;
                if (typeof u == "function")
                    d || $m(n);
                else if (d) {
                    var v = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (s = u,
                        d = u[be] || null)
                            v = d.formAction;
                        else if (uc(s) !== null)
                            continue
                    } else
                        v = d.action;
                    typeof v == "function" ? n[l + 1] = v : (n.splice(l, 3),
                    l -= 3),
                    $m(n)
                }
            }
    }
    function Wm() {
        function t(u) {
            u.canIntercept && u.info === "react-transition" && u.intercept({
                handler: function() {
                    return new Promise(function(d) {
                        return s = d
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function e() {
            s !== null && (s(),
            s = null),
            l || setTimeout(n, 20)
        }
        function n() {
            if (!l && !navigation.transition) {
                var u = navigation.currentEntry;
                u && u.url != null && navigation.navigate(u.url, {
                    state: u.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var l = !1
              , s = null;
            return navigation.addEventListener("navigate", t),
            navigation.addEventListener("navigatesuccess", e),
            navigation.addEventListener("navigateerror", e),
            setTimeout(n, 100),
            function() {
                l = !0,
                navigation.removeEventListener("navigate", t),
                navigation.removeEventListener("navigatesuccess", e),
                navigation.removeEventListener("navigateerror", e),
                s !== null && (s(),
                s = null)
            }
        }
    }
    function fc(t) {
        this._internalRoot = t
    }
    Eo.prototype.render = fc.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null)
            throw Error(o(409));
        var n = e.current
          , l = He();
        Xm(n, l, t, e, null, null)
    }
    ,
    Eo.prototype.unmount = fc.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            Xm(t.current, 2, null, t, null, null),
            no(),
            e[$a] = null
        }
    }
    ;
    function Eo(t) {
        this._internalRoot = t
    }
    Eo.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = uf();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var n = 0; n < la.length && e !== 0 && e < la[n].priority; n++)
                ;
            la.splice(n, 0, t),
            n === 0 && Fm(t)
        }
    }
    ;
    var tp = i.version;
    if (tp !== "19.2.6")
        throw Error(o(527, tp, "19.2.6"));
    K.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0)
            throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","),
            Error(o(268, t)));
        return t = m(e),
        t = t !== null ? b(t) : null,
        t = t === null ? null : t.stateNode,
        t
    }
    ;
    var lb = {
        bundleType: 0,
        version: "19.2.6",
        rendererPackageName: "react-dom",
        currentDispatcherRef: U,
        reconcilerVersion: "19.2.6"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Ro.isDisabled && Ro.supportsFiber)
            try {
                Kl = Ro.inject(lb),
                Ce = Ro
            } catch {}
    }
    return qi.createRoot = function(t, e) {
        if (!c(t))
            throw Error(o(299));
        var n = !1
          , l = ""
          , s = oh
          , u = sh
          , d = uh;
        return e != null && (e.unstable_strictMode === !0 && (n = !0),
        e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
        e.onCaughtError !== void 0 && (u = e.onCaughtError),
        e.onRecoverableError !== void 0 && (d = e.onRecoverableError)),
        e = Ym(t, 1, !1, null, null, n, l, null, s, u, d, Wm),
        t[$a] = e.current,
        Zu(t),
        new fc(e)
    }
    ,
    qi.hydrateRoot = function(t, e, n) {
        if (!c(t))
            throw Error(o(299));
        var l = !1
          , s = ""
          , u = oh
          , d = sh
          , v = uh
          , R = null;
        return n != null && (n.unstable_strictMode === !0 && (l = !0),
        n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
        n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
        n.onCaughtError !== void 0 && (d = n.onCaughtError),
        n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
        n.formState !== void 0 && (R = n.formState)),
        e = Ym(t, 1, !0, e, n ?? null, l, s, R, u, d, v, Wm),
        e.context = Vm(null),
        n = e.current,
        l = He(),
        l = es(l),
        s = Vn(l),
        s.callback = null,
        Xn(n, s, l),
        n = l,
        e.current.lanes = n,
        Pl(e, n),
        ln(e),
        t[$a] = e.current,
        Zu(t),
        new Eo(e)
    }
    ,
    qi.version = "19.2.6",
    qi
}
var cp;
function gb() {
    if (cp)
        return mc.exports;
    cp = 1;
    function a() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
            } catch (i) {
                console.error(i)
            }
    }
    return a(),
    mc.exports = pb(),
    mc.exports
}
var yb = gb()
  , vb = "__TSS_CONTEXT"
  , Uc = Symbol.for("TSS_SERVER_FUNCTION")
  , bb = "application/x-tss-framed"
  , Mn = {
    JSON: 0,
    CHUNK: 1,
    END: 2,
    ERROR: 3
}
  , Sb = /;\s*v=(\d+)/;
function xb(a) {
    const i = a.match(Sb);
    return i ? parseInt(i[1], 10) : void 0
}
function _b(a) {
    const i = xb(a);
    if (i !== void 0 && i !== 1)
        throw new Error(`Incompatible framed protocol version: server=${i}, client=1. Please ensure client and server are using compatible versions.`)
}
var cg = () => window.__TSS_START_OPTIONS__
  , fg = !1;
function Fi(a) {
    return a[a.length - 1]
}
function Eb(a) {
    return typeof a == "function"
}
function ca(a, i) {
    return Eb(a) ? a(i) : a
}
var Rb = Object.prototype.hasOwnProperty
  , fp = Object.prototype.propertyIsEnumerable
  , wb = () => Object.create(null)
  , Ha = (a, i) => qa(a, i, wb);
function qa(a, i, r= () => ({}), o=0) {
    if (a === i)
        return a;
    if (o > 500)
        return i;
    const c = i
      , f = mp(a) && mp(c);
    if (!f && !(Vl(a) && Vl(c)))
        return c;
    const h = f ? a : dp(a);
    if (!h)
        return c;
    const p = f ? c : dp(c);
    if (!p)
        return c;
    const g = h.length
      , m = p.length
      , b = f ? new Array(m) : r();
    let y = 0;
    for (let S = 0; S < m; S++) {
        const _ = f ? S : p[S]
          , w = a[_]
          , C = c[_];
        if (w === C) {
            b[_] = w,
            (f ? S < g : Rb.call(a, _)) && y++;
            continue
        }
        if (w === null || C === null || typeof w != "object" || typeof C != "object") {
            b[_] = C;
            continue
        }
        const E = qa(w, C, r, o + 1);
        b[_] = E,
        E === w && y++
    }
    return g === m && y === g ? a : b
}
function dp(a) {
    const i = Object.getOwnPropertyNames(a);
    for (const c of i)
        if (!fp.call(a, c))
            return !1;
    const r = Object.getOwnPropertySymbols(a);
    if (r.length === 0)
        return i;
    const o = i;
    for (const c of r) {
        if (!fp.call(a, c))
            return !1;
        o.push(c)
    }
    return o
}
function Vl(a) {
    if (!hp(a))
        return !1;
    const i = a.constructor;
    if (typeof i > "u")
        return !0;
    const r = i.prototype;
    return !(!hp(r) || !r.hasOwnProperty("isPrototypeOf"))
}
function hp(a) {
    return Object.prototype.toString.call(a) === "[object Object]"
}
function mp(a) {
    return Array.isArray(a) && a.length === Object.keys(a).length
}
function Te(a, i, r) {
    if (a === i)
        return !0;
    if (typeof a != typeof i)
        return !1;
    if (Array.isArray(a) && Array.isArray(i)) {
        if (a.length !== i.length)
            return !1;
        for (let o = 0, c = a.length; o < c; o++)
            if (!Te(a[o], i[o], r))
                return !1;
        return !0
    }
    if (Vl(a) && Vl(i)) {
        const o = r?.ignoreUndefined ?? !0;
        if (r?.partial) {
            for (const h in i)
                if ((!o || i[h] !== void 0) && !Te(a[h], i[h], r))
                    return !1;
            return !0
        }
        let c = 0;
        if (!o)
            c = Object.keys(a).length;
        else
            for (const h in a)
                a[h] !== void 0 && c++;
        let f = 0;
        for (const h in i)
            if ((!o || i[h] !== void 0) && (f++,
            f > c || !Te(a[h], i[h], r)))
                return !1;
        return c === f
    }
    return !1
}
function Za(a) {
    let i, r;
    const o = new Promise( (c, f) => {
        i = c,
        r = f
    }
    );
    return o.status = "pending",
    o.resolve = c => {
        o.status = "resolved",
        o.value = c,
        i(c),
        a?.(c)
    }
    ,
    o.reject = c => {
        o.status = "rejected",
        r(c)
    }
    ,
    o
}
function Tb(a) {
    return typeof a?.message != "string" ? !1 : a.message.startsWith("Failed to fetch dynamically imported module") || a.message.startsWith("error loading dynamically imported module") || a.message.startsWith("Importing a module script failed")
}
function Ii(a) {
    return !!(a && typeof a == "object" && typeof a.then == "function")
}
function Ab(a) {
    return a.replace(/[\x00-\x1f\x7f]/g, "")
}
function pp(a) {
    let i;
    try {
        i = decodeURI(a)
    } catch {
        i = a.replaceAll(/%[0-9A-F]{2}/gi, r => {
            try {
                return decodeURI(r)
            } catch {
                return r
            }
        }
        )
    }
    return Ab(i)
}
var Mb = ["http:", "https:", "mailto:", "tel:"];
function Lo(a, i) {
    if (!a)
        return !1;
    try {
        const r = new URL(a);
        return !i.has(r.protocol)
    } catch {
        return !1
    }
}
var zb = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
}
  , Cb = /[&><\u2028\u2029]/g;
function Ob(a) {
    return a.replace(Cb, i => zb[i])
}
function Gi(a) {
    if (!a)
        return {
            path: a,
            handledProtocolRelativeURL: !1
        };
    if (!/[%\\\x00-\x1f\x7f]/.test(a) && !a.startsWith("//"))
        return {
            path: a,
            handledProtocolRelativeURL: !1
        };
    const i = /%25|%5C/gi;
    let r = 0, o = "", c;
    for (; (c = i.exec(a)) !== null; )
        o += pp(a.slice(r, c.index)) + c[0],
        r = i.lastIndex;
    o = o + pp(r ? a.slice(r) : a);
    let f = !1;
    return o.startsWith("//") && (f = !0,
    o = "/" + o.replace(/^\/+/, "")),
    {
        path: o,
        handledProtocolRelativeURL: f
    }
}
function Nb(a) {
    return /\s|[^\u0000-\u007F]/.test(a) ? a.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : a
}
function jb(a, i) {
    if (a === i)
        return !0;
    if (a.length !== i.length)
        return !1;
    for (let r = 0; r < a.length; r++)
        if (a[r] !== i[r])
            return !1;
    return !0
}
function Me() {
    throw new Error("Invariant failed")
}
function $i(a) {
    const i = new Map;
    let r, o;
    const c = f => {
        f.next && (f.prev ? (f.prev.next = f.next,
        f.next.prev = f.prev,
        f.next = void 0,
        o && (o.next = f,
        f.prev = o)) : (f.next.prev = void 0,
        r = f.next,
        f.next = void 0,
        o && (f.prev = o,
        o.next = f)),
        o = f)
    }
    ;
    return {
        get(f) {
            const h = i.get(f);
            if (h)
                return c(h),
                h.value
        },
        set(f, h) {
            if (i.size >= a && r) {
                const g = r;
                i.delete(g.key),
                g.next && (r = g.next,
                g.next.prev = void 0),
                g === o && (o = void 0)
            }
            const p = i.get(f);
            if (p)
                p.value = h,
                c(p);
            else {
                const g = {
                    key: f,
                    value: h,
                    prev: o
                };
                o && (o.next = g),
                o = g,
                r || (r = g),
                i.set(f, g)
            }
        },
        clear() {
            i.clear(),
            r = void 0,
            o = void 0
        }
    }
}
var Ga = 4
  , dg = 5;
function Db(a) {
    const i = a.indexOf("{");
    if (i === -1)
        return null;
    const r = a.indexOf("}", i);
    return r === -1 || i + 1 >= a.length ? null : [i, r]
}
function Qc(a, i, r=new Uint16Array(6)) {
    const o = a.indexOf("/", i)
      , c = o === -1 ? a.length : o
      , f = a.substring(i, c);
    if (!f || !f.includes("$"))
        return r[0] = 0,
        r[1] = i,
        r[2] = i,
        r[3] = c,
        r[4] = c,
        r[5] = c,
        r;
    if (f === "$") {
        const p = a.length;
        return r[0] = 2,
        r[1] = i,
        r[2] = i,
        r[3] = p,
        r[4] = p,
        r[5] = p,
        r
    }
    if (f.charCodeAt(0) === 36)
        return r[0] = 1,
        r[1] = i,
        r[2] = i + 1,
        r[3] = c,
        r[4] = c,
        r[5] = c,
        r;
    const h = Db(f);
    if (h) {
        const [p,g] = h
          , m = f.charCodeAt(p + 1);
        if (m === 45) {
            if (p + 2 < f.length && f.charCodeAt(p + 2) === 36) {
                const b = p + 3
                  , y = g;
                if (b < y)
                    return r[0] = 3,
                    r[1] = i + p,
                    r[2] = i + b,
                    r[3] = i + y,
                    r[4] = i + g + 1,
                    r[5] = c,
                    r
            }
        } else if (m === 36) {
            const b = p + 1
              , y = p + 2;
            return y === g ? (r[0] = 2,
            r[1] = i + p,
            r[2] = i + b,
            r[3] = i + y,
            r[4] = i + g + 1,
            r[5] = a.length,
            r) : (r[0] = 1,
            r[1] = i + p,
            r[2] = i + y,
            r[3] = i + g,
            r[4] = i + g + 1,
            r[5] = c,
            r)
        }
    }
    return r[0] = 0,
    r[1] = i,
    r[2] = i,
    r[3] = c,
    r[4] = c,
    r[5] = c,
    r
}
function Xo(a, i, r, o, c, f, h) {
    h?.(r);
    let p = o;
    {
        const g = r.fullPath ?? r.from
          , m = g.length
          , b = r.options?.caseSensitive ?? a
          , y = !!(r.options?.params?.parse && r.options?.skipRouteOnParseError?.params);
        for (; p < m; ) {
            const _ = Qc(g, p, i);
            let w;
            const C = p
              , E = _[5];
            switch (p = E + 1,
            f++,
            _[0]) {
            case 0:
                {
                    const z = g.substring(_[2], _[3]);
                    if (b) {
                        const V = c.static?.get(z);
                        if (V)
                            w = V;
                        else {
                            c.static ??= new Map;
                            const Q = Ya(r.fullPath ?? r.from);
                            Q.parent = c,
                            Q.depth = f,
                            w = Q,
                            c.static.set(z, Q)
                        }
                    } else {
                        const V = z.toLowerCase()
                          , Q = c.staticInsensitive?.get(V);
                        if (Q)
                            w = Q;
                        else {
                            c.staticInsensitive ??= new Map;
                            const k = Ya(r.fullPath ?? r.from);
                            k.parent = c,
                            k.depth = f,
                            w = k,
                            c.staticInsensitive.set(V, k)
                        }
                    }
                    break
                }
            case 1:
                {
                    const z = g.substring(C, _[1])
                      , V = g.substring(_[4], E)
                      , Q = b && !!(z || V)
                      , k = z ? Q ? z : z.toLowerCase() : void 0
                      , W = V ? Q ? V : V.toLowerCase() : void 0
                      , P = !y && c.dynamic?.find(X => !X.skipOnParamError && X.caseSensitive === Q && X.prefix === k && X.suffix === W);
                    if (P)
                        w = P;
                    else {
                        const X = bc(1, r.fullPath ?? r.from, Q, k, W);
                        w = X,
                        X.depth = f,
                        X.parent = c,
                        c.dynamic ??= [],
                        c.dynamic.push(X)
                    }
                    break
                }
            case 3:
                {
                    const z = g.substring(C, _[1])
                      , V = g.substring(_[4], E)
                      , Q = b && !!(z || V)
                      , k = z ? Q ? z : z.toLowerCase() : void 0
                      , W = V ? Q ? V : V.toLowerCase() : void 0
                      , P = !y && c.optional?.find(X => !X.skipOnParamError && X.caseSensitive === Q && X.prefix === k && X.suffix === W);
                    if (P)
                        w = P;
                    else {
                        const X = bc(3, r.fullPath ?? r.from, Q, k, W);
                        w = X,
                        X.parent = c,
                        X.depth = f,
                        c.optional ??= [],
                        c.optional.push(X)
                    }
                    break
                }
            case 2:
                {
                    const z = g.substring(C, _[1])
                      , V = g.substring(_[4], E)
                      , Q = b && !!(z || V)
                      , k = z ? Q ? z : z.toLowerCase() : void 0
                      , W = V ? Q ? V : V.toLowerCase() : void 0
                      , P = bc(2, r.fullPath ?? r.from, Q, k, W);
                    w = P,
                    P.parent = c,
                    P.depth = f,
                    c.wildcard ??= [],
                    c.wildcard.push(P)
                }
            }
            c = w
        }
        if (y && r.children && !r.isRoot && r.id && r.id.charCodeAt(r.id.lastIndexOf("/") + 1) === 95) {
            const _ = Ya(r.fullPath ?? r.from);
            _.kind = dg,
            _.parent = c,
            f++,
            _.depth = f,
            c.pathless ??= [],
            c.pathless.push(_),
            c = _
        }
        const S = (r.path || !r.children) && !r.isRoot;
        if (S && g.endsWith("/")) {
            const _ = Ya(r.fullPath ?? r.from);
            _.kind = Ga,
            _.parent = c,
            f++,
            _.depth = f,
            c.index = _,
            c = _
        }
        c.parse = r.options?.params?.parse ?? null,
        c.skipOnParamError = y,
        c.parsingPriority = r.options?.skipRouteOnParseError?.priority ?? 0,
        S && !c.route && (c.route = r,
        c.fullPath = r.fullPath ?? r.from)
    }
    if (r.children)
        for (const g of r.children)
            Xo(a, i, g, p, c, f, h)
}
function vc(a, i) {
    if (a.skipOnParamError && !i.skipOnParamError)
        return -1;
    if (!a.skipOnParamError && i.skipOnParamError)
        return 1;
    if (a.skipOnParamError && i.skipOnParamError && (a.parsingPriority || i.parsingPriority))
        return i.parsingPriority - a.parsingPriority;
    if (a.prefix && i.prefix && a.prefix !== i.prefix) {
        if (a.prefix.startsWith(i.prefix))
            return -1;
        if (i.prefix.startsWith(a.prefix))
            return 1
    }
    if (a.suffix && i.suffix && a.suffix !== i.suffix) {
        if (a.suffix.endsWith(i.suffix))
            return -1;
        if (i.suffix.endsWith(a.suffix))
            return 1
    }
    return a.prefix && !i.prefix ? -1 : !a.prefix && i.prefix ? 1 : a.suffix && !i.suffix ? -1 : !a.suffix && i.suffix ? 1 : a.caseSensitive && !i.caseSensitive ? -1 : !a.caseSensitive && i.caseSensitive ? 1 : 0
}
function sa(a) {
    if (a.pathless)
        for (const i of a.pathless)
            sa(i);
    if (a.static)
        for (const i of a.static.values())
            sa(i);
    if (a.staticInsensitive)
        for (const i of a.staticInsensitive.values())
            sa(i);
    if (a.dynamic?.length) {
        a.dynamic.sort(vc);
        for (const i of a.dynamic)
            sa(i)
    }
    if (a.optional?.length) {
        a.optional.sort(vc);
        for (const i of a.optional)
            sa(i)
    }
    if (a.wildcard?.length) {
        a.wildcard.sort(vc);
        for (const i of a.wildcard)
            sa(i)
    }
}
function Ya(a) {
    return {
        kind: 0,
        depth: 0,
        pathless: null,
        index: null,
        static: null,
        staticInsensitive: null,
        dynamic: null,
        optional: null,
        wildcard: null,
        route: null,
        fullPath: a,
        parent: null,
        parse: null,
        skipOnParamError: !1,
        parsingPriority: 0
    }
}
function bc(a, i, r, o, c) {
    return {
        kind: a,
        depth: 0,
        pathless: null,
        index: null,
        static: null,
        staticInsensitive: null,
        dynamic: null,
        optional: null,
        wildcard: null,
        route: null,
        fullPath: i,
        parent: null,
        parse: null,
        skipOnParamError: !1,
        parsingPriority: 0,
        caseSensitive: r,
        prefix: o,
        suffix: c
    }
}
function Lb(a, i) {
    const r = Ya("/")
      , o = new Uint16Array(6);
    for (const c of a)
        Xo(!1, o, c, 1, r, 0);
    sa(r),
    i.masksTree = r,
    i.flatCache = $i(1e3)
}
function Ub(a, i) {
    a ||= "/";
    const r = i.flatCache.get(a);
    if (r)
        return r;
    const o = Zc(a, i.masksTree);
    return i.flatCache.set(a, o),
    o
}
function Bb(a, i, r, o, c) {
    a ||= "/",
    o ||= "/";
    const f = i ? `case\0${a}` : a;
    let h = c.singleCache.get(f);
    return h || (h = Ya("/"),
    Xo(i, new Uint16Array(6), {
        from: a
    }, 1, h, 0),
    c.singleCache.set(f, h)),
    Zc(o, h, r)
}
function Hb(a, i, r=!1) {
    const o = r ? a : `nofuzz\0${a}`
      , c = i.matchCache.get(o);
    if (c !== void 0)
        return c;
    a ||= "/";
    let f;
    try {
        f = Zc(a, i.segmentTree, r)
    } catch (h) {
        if (h instanceof URIError)
            f = null;
        else
            throw h
    }
    return f && (f.branch = Gb(f.route)),
    i.matchCache.set(o, f),
    f
}
function kb(a) {
    return a === "/" ? a : a.replace(/\/{1,}$/, "")
}
function qb(a, i=!1, r) {
    const o = Ya(a.fullPath)
      , c = new Uint16Array(6)
      , f = {}
      , h = {};
    let p = 0;
    return Xo(i, c, a, 1, o, 0, g => {
        if (r?.(g, p),
        g.id in f && Me(),
        f[g.id] = g,
        p !== 0 && g.path) {
            const m = kb(g.fullPath);
            (!h[m] || g.fullPath.endsWith("/")) && (h[m] = g)
        }
        p++
    }
    ),
    sa(o),
    {
        processedTree: {
            segmentTree: o,
            singleCache: $i(1e3),
            matchCache: $i(1e3),
            flatCache: null,
            masksTree: null
        },
        routesById: f,
        routesByPath: h
    }
}
function Zc(a, i, r=!1) {
    const o = a.split("/")
      , c = Vb(a, o, i, r);
    if (!c)
        return null;
    const [f] = hg(a, o, c);
    return {
        route: c.node.route,
        rawParams: f,
        parsedParams: c.parsedParams
    }
}
function hg(a, i, r) {
    const o = Yb(r.node);
    let c = null;
    const f = Object.create(null);
    let h = r.extract?.part ?? 0
      , p = r.extract?.node ?? 0
      , g = r.extract?.path ?? 0
      , m = r.extract?.segment ?? 0;
    for (; p < o.length; h++,
    p++,
    g++,
    m++) {
        const b = o[p];
        if (b.kind === Ga)
            break;
        if (b.kind === dg) {
            m--,
            h--,
            g--;
            continue
        }
        const y = i[h]
          , S = g;
        if (y && (g += y.length),
        b.kind === 1) {
            c ??= r.node.fullPath.split("/");
            const _ = c[m]
              , w = b.prefix?.length ?? 0;
            if (_.charCodeAt(w) === 123) {
                const C = b.suffix?.length ?? 0
                  , E = _.substring(w + 2, _.length - C - 1)
                  , z = y.substring(w, y.length - C);
                f[E] = decodeURIComponent(z)
            } else {
                const C = _.substring(1);
                f[C] = decodeURIComponent(y)
            }
        } else if (b.kind === 3) {
            if (r.skipped & 1 << p) {
                h--,
                g = S - 1;
                continue
            }
            c ??= r.node.fullPath.split("/");
            const _ = c[m]
              , w = b.prefix?.length ?? 0
              , C = b.suffix?.length ?? 0
              , E = _.substring(w + 3, _.length - C - 1)
              , z = b.suffix || b.prefix ? y.substring(w, y.length - C) : y;
            z && (f[E] = decodeURIComponent(z))
        } else if (b.kind === 2) {
            const _ = b
              , w = a.substring(S + (_.prefix?.length ?? 0), a.length - (_.suffix?.length ?? 0))
              , C = decodeURIComponent(w);
            f["*"] = C,
            f._splat = C;
            break
        }
    }
    return r.rawParams && Object.assign(f, r.rawParams),
    [f, {
        part: h,
        node: p,
        path: g,
        segment: m
    }]
}
function Gb(a) {
    const i = [a];
    for (; a.parentRoute; )
        a = a.parentRoute,
        i.push(a);
    return i.reverse(),
    i
}
function Yb(a) {
    const i = Array(a.depth + 1);
    do
        i[a.depth] = a,
        a = a.parent;
    while (a);
    return i
}
function Vb(a, i, r, o) {
    if (a === "/" && r.index)
        return {
            node: r.index,
            skipped: 0
        };
    const c = !Fi(i)
      , f = c && a !== "/"
      , h = i.length - (c ? 1 : 0)
      , p = [{
        node: r,
        index: 1,
        skipped: 0,
        depth: 1,
        statics: 1,
        dynamics: 0,
        optionals: 0
    }];
    let g = null
      , m = null
      , b = null;
    for (; p.length; ) {
        const y = p.pop()
          , {node: S, index: _, skipped: w, depth: C, statics: E, dynamics: z, optionals: V} = y;
        let {extract: Q, rawParams: k, parsedParams: W} = y;
        if (S.skipOnParamError) {
            if (!Sc(a, i, y))
                continue;
            k = y.rawParams,
            Q = y.extract,
            W = y.parsedParams
        }
        o && S.route && S.kind !== Ga && Yi(m, y) && (m = y);
        const P = _ === h;
        if (P && (S.route && !f && Yi(b, y) && (b = y),
        !S.optional && !S.wildcard && !S.index && !S.pathless))
            continue;
        const X = P ? void 0 : i[_];
        let H;
        if (P && S.index) {
            const J = {
                node: S.index,
                index: _,
                skipped: w,
                depth: C + 1,
                statics: E,
                dynamics: z,
                optionals: V,
                extract: Q,
                rawParams: k,
                parsedParams: W
            };
            let ct = !0;
            if (S.index.skipOnParamError && (Sc(a, i, J) || (ct = !1)),
            ct) {
                if (E === h && !z && !V && !w)
                    return J;
                Yi(b, J) && (b = J)
            }
        }
        if (S.wildcard && Yi(g, y))
            for (const J of S.wildcard) {
                const {prefix: ct, suffix: nt} = J;
                if (ct && (P || !(J.caseSensitive ? X : H ??= X.toLowerCase()).startsWith(ct)))
                    continue;
                if (nt) {
                    if (P)
                        continue;
                    const vt = i.slice(_).join("/").slice(-nt.length);
                    if ((J.caseSensitive ? vt : vt.toLowerCase()) !== nt)
                        continue
                }
                const ht = {
                    node: J,
                    index: h,
                    skipped: w,
                    depth: C,
                    statics: E,
                    dynamics: z,
                    optionals: V,
                    extract: Q,
                    rawParams: k,
                    parsedParams: W
                };
                if (!(J.skipOnParamError && !Sc(a, i, ht))) {
                    g = ht;
                    break
                }
            }
        if (S.optional) {
            const J = w | 1 << C
              , ct = C + 1;
            for (let nt = S.optional.length - 1; nt >= 0; nt--) {
                const ht = S.optional[nt];
                p.push({
                    node: ht,
                    index: _,
                    skipped: J,
                    depth: ct,
                    statics: E,
                    dynamics: z,
                    optionals: V,
                    extract: Q,
                    rawParams: k,
                    parsedParams: W
                })
            }
            if (!P)
                for (let nt = S.optional.length - 1; nt >= 0; nt--) {
                    const ht = S.optional[nt]
                      , {prefix: vt, suffix: Ht} = ht;
                    if (vt || Ht) {
                        const Rt = ht.caseSensitive ? X : H ??= X.toLowerCase();
                        if (vt && !Rt.startsWith(vt) || Ht && !Rt.endsWith(Ht))
                            continue
                    }
                    p.push({
                        node: ht,
                        index: _ + 1,
                        skipped: w,
                        depth: ct,
                        statics: E,
                        dynamics: z,
                        optionals: V + 1,
                        extract: Q,
                        rawParams: k,
                        parsedParams: W
                    })
                }
        }
        if (!P && S.dynamic && X)
            for (let J = S.dynamic.length - 1; J >= 0; J--) {
                const ct = S.dynamic[J]
                  , {prefix: nt, suffix: ht} = ct;
                if (nt || ht) {
                    const vt = ct.caseSensitive ? X : H ??= X.toLowerCase();
                    if (nt && !vt.startsWith(nt) || ht && !vt.endsWith(ht))
                        continue
                }
                p.push({
                    node: ct,
                    index: _ + 1,
                    skipped: w,
                    depth: C + 1,
                    statics: E,
                    dynamics: z + 1,
                    optionals: V,
                    extract: Q,
                    rawParams: k,
                    parsedParams: W
                })
            }
        if (!P && S.staticInsensitive) {
            const J = S.staticInsensitive.get(H ??= X.toLowerCase());
            J && p.push({
                node: J,
                index: _ + 1,
                skipped: w,
                depth: C + 1,
                statics: E + 1,
                dynamics: z,
                optionals: V,
                extract: Q,
                rawParams: k,
                parsedParams: W
            })
        }
        if (!P && S.static) {
            const J = S.static.get(X);
            J && p.push({
                node: J,
                index: _ + 1,
                skipped: w,
                depth: C + 1,
                statics: E + 1,
                dynamics: z,
                optionals: V,
                extract: Q,
                rawParams: k,
                parsedParams: W
            })
        }
        if (S.pathless) {
            const J = C + 1;
            for (let ct = S.pathless.length - 1; ct >= 0; ct--) {
                const nt = S.pathless[ct];
                p.push({
                    node: nt,
                    index: _,
                    skipped: w,
                    depth: J,
                    statics: E,
                    dynamics: z,
                    optionals: V,
                    extract: Q,
                    rawParams: k,
                    parsedParams: W
                })
            }
        }
    }
    if (b && g)
        return Yi(g, b) ? b : g;
    if (b)
        return b;
    if (g)
        return g;
    if (o && m) {
        let y = m.index;
        for (let _ = 0; _ < m.index; _++)
            y += i[_].length;
        const S = y === a.length ? "/" : a.slice(y);
        return m.rawParams ??= Object.create(null),
        m.rawParams["**"] = decodeURIComponent(S),
        m
    }
    return null
}
function Sc(a, i, r) {
    try {
        const [o,c] = hg(a, i, r);
        r.rawParams = o,
        r.extract = c;
        const f = r.node.parse(o);
        return r.parsedParams = Object.assign(Object.create(null), r.parsedParams, f),
        !0
    } catch {
        return null
    }
}
function Yi(a, i) {
    return a ? i.statics > a.statics || i.statics === a.statics && (i.dynamics > a.dynamics || i.dynamics === a.dynamics && (i.optionals > a.optionals || i.optionals === a.optionals && ((i.node.kind === Ga) > (a.node.kind === Ga) || i.node.kind === Ga == (a.node.kind === Ga) && i.depth > a.depth))) : !0
}
function Co(a) {
    return Kc(a.filter(i => i !== void 0).join("/"))
}
function Kc(a) {
    return a.replace(/\/{2,}/g, "/")
}
function mg(a) {
    return a === "/" ? a : a.replace(/^\/{1,}/, "")
}
function da(a) {
    const i = a.length;
    return i > 1 && a[i - 1] === "/" ? a.replace(/\/{1,}$/, "") : a
}
function pg(a) {
    return da(mg(a))
}
function Uo(a, i) {
    return a?.endsWith("/") && a !== "/" && a !== `${i}/` ? a.slice(0, -1) : a
}
function Xb(a, i, r) {
    return Uo(a, r) === Uo(i, r)
}
function Qb({base: a, to: i, trailingSlash: r="never", cache: o}) {
    const c = i.startsWith("/")
      , f = !c && i === ".";
    let h;
    if (o) {
        h = c ? i : f ? a : a + "\0" + i;
        const y = o.get(h);
        if (y)
            return y
    }
    let p;
    if (f)
        p = a.split("/");
    else if (c)
        p = i.split("/");
    else {
        for (p = a.split("/"); p.length > 1 && Fi(p) === ""; )
            p.pop();
        const y = i.split("/");
        for (let S = 0, _ = y.length; S < _; S++) {
            const w = y[S];
            w === "" ? S ? S === _ - 1 && p.push(w) : p = [w] : w === ".." ? p.pop() : w === "." || p.push(w)
        }
    }
    p.length > 1 && (Fi(p) === "" ? r === "never" && p.pop() : r === "always" && p.push(""));
    let g, m = "";
    for (let y = 0; y < p.length; y++) {
        y > 0 && (m += "/");
        const S = p[y];
        if (!S)
            continue;
        g = Qc(S, 0, g);
        const _ = g[0];
        if (_ === 0) {
            m += S;
            continue
        }
        const w = g[5]
          , C = S.substring(0, g[1])
          , E = S.substring(g[4], w)
          , z = S.substring(g[2], g[3]);
        _ === 1 ? m += C || E ? `${C}{$${z}}${E}` : `$${z}` : _ === 2 ? m += C || E ? `${C}{$}${E}` : "$" : m += `${C}{-$${z}}${E}`
    }
    m = Kc(m);
    const b = m || "/";
    return h && o && o.set(h, b),
    b
}
function Zb(a) {
    const i = new Map(a.map(c => [encodeURIComponent(c), c]))
      , r = Array.from(i.keys()).map(c => c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")
      , o = new RegExp(r,"g");
    return c => c.replace(o, f => i.get(f) ?? f)
}
function xc(a, i, r) {
    const o = i[a];
    return typeof o != "string" ? o : a === "_splat" ? /^[a-zA-Z0-9\-._~!/]*$/.test(o) ? o : o.split("/").map(c => yp(c, r)).join("/") : yp(o, r)
}
function gp({path: a, params: i, decoder: r, ...o}) {
    let c = !1;
    const f = Object.create(null);
    if (!a || a === "/")
        return {
            interpolatedPath: "/",
            usedParams: f,
            isMissingParams: c
        };
    if (!a.includes("$"))
        return {
            interpolatedPath: a,
            usedParams: f,
            isMissingParams: c
        };
    const h = a.length;
    let p = 0, g, m = "";
    for (; p < h; ) {
        const b = p;
        g = Qc(a, b, g);
        const y = g[5];
        if (p = y + 1,
        b === y)
            continue;
        const S = g[0];
        if (S === 0) {
            m += "/" + a.substring(b, y);
            continue
        }
        if (S === 2) {
            const _ = i._splat;
            f._splat = _,
            f["*"] = _;
            const w = a.substring(b, g[1])
              , C = a.substring(g[4], y);
            if (!_) {
                c = !0,
                (w || C) && (m += "/" + w + C);
                continue
            }
            const E = xc("_splat", i, r);
            m += "/" + w + E + C;
            continue
        }
        if (S === 1) {
            const _ = a.substring(g[2], g[3]);
            !c && !(_ in i) && (c = !0),
            f[_] = i[_];
            const w = a.substring(b, g[1])
              , C = a.substring(g[4], y)
              , E = xc(_, i, r) ?? "undefined";
            m += "/" + w + E + C;
            continue
        }
        if (S === 3) {
            const _ = a.substring(g[2], g[3])
              , w = i[_];
            if (w == null)
                continue;
            f[_] = w;
            const C = a.substring(b, g[1])
              , E = a.substring(g[4], y)
              , z = xc(_, i, r) ?? "";
            m += "/" + C + z + E;
            continue
        }
    }
    return a.endsWith("/") && (m += "/"),
    {
        usedParams: f,
        interpolatedPath: m || "/",
        isMissingParams: c
    }
}
function yp(a, i) {
    const r = encodeURIComponent(a);
    return i?.(r) ?? r
}
function re(a) {
    return a?.isNotFound === !0
}
function Kb() {
    try {
        return typeof window < "u" && typeof window.sessionStorage == "object" ? window.sessionStorage : void 0
    } catch {
        return
    }
}
var Jb = "tsr-scroll-restoration-v1_3";
function Pb() {
    const a = Kb();
    if (!a)
        return null;
    let i = {};
    try {
        const o = JSON.parse(a.getItem("tsr-scroll-restoration-v1_3") || "{}");
        Vl(o) && (i = o)
    } catch {}
    return {
        get state() {
            return i
        },
        set: o => {
            i = ca(o, i) || i
        }
        ,
        persist: () => {
            try {
                a.setItem(Jb, JSON.stringify(i))
            } catch {}
        }
    }
}
var vp = Pb()
  , Fb = a => a.state.__TSR_key || a.href;
function Ib(a) {
    const i = [];
    let r;
    for (; r = a.parentNode; )
        i.push(`${a.tagName}:nth-child(${Array.prototype.indexOf.call(r.children, a) + 1})`),
        a = r;
    return `${i.reverse().join(" > ")}`.toLowerCase()
}
var wo = !1
  , Vi = "window"
  , bp = "data-scroll-restoration-id";
function $b(a, i) {
    if (!vp)
        return;
    const r = vp;
    if ((a.options.scrollRestoration ?? !1) && (a.isScrollRestoring = !0),
    a.isScrollRestorationSetup || !r)
        return;
    a.isScrollRestorationSetup = !0,
    wo = !1;
    const o = a.options.getScrollRestorationKey || Fb
      , c = new Map;
    window.history.scrollRestoration = "manual";
    const f = p => {
        if (!(wo || !a.isScrollRestoring))
            if (p.target === document || p.target === window)
                c.set(Vi, {
                    scrollX: window.scrollX || 0,
                    scrollY: window.scrollY || 0
                });
            else {
                const g = p.target;
                c.set(g, {
                    scrollX: g.scrollLeft || 0,
                    scrollY: g.scrollTop || 0
                })
            }
    }
      , h = p => {
        if (!a.isScrollRestoring || !p || c.size === 0 || !r)
            return;
        const g = r.state[p] ||= {};
        for (const [m,b] of c) {
            let y;
            if (m === Vi)
                y = Vi;
            else if (m.isConnected) {
                const S = m.getAttribute(bp);
                y = S ? `[${bp}="${S}"]` : Ib(m)
            }
            y && (g[y] = b)
        }
    }
    ;
    document.addEventListener("scroll", f, !0),
    a.subscribe("onBeforeLoad", p => {
        h(p.fromLocation ? o(p.fromLocation) : void 0),
        c.clear()
    }
    ),
    window.addEventListener("pagehide", () => {
        h(o(a.stores.resolvedLocation.get() ?? a.stores.location.get())),
        r.persist()
    }
    ),
    a.subscribe("onRendered", p => {
        const g = o(p.toLocation)
          , m = a.options.scrollRestorationBehavior
          , b = a.options.scrollToTopSelectors;
        if (c.clear(),
        !a.resetNextScroll) {
            a.resetNextScroll = !0;
            return
        }
        if (!(typeof a.options.scrollRestoration == "function" && !a.options.scrollRestoration({
            location: a.latestLocation
        }))) {
            wo = !0;
            try {
                const y = a.isScrollRestoring ? r.state[g] : void 0;
                let S = !1;
                if (y)
                    for (const _ in y) {
                        const w = y[_];
                        if (!Vl(w))
                            continue;
                        const {scrollX: C, scrollY: E} = w;
                        if (!(!Number.isFinite(C) || !Number.isFinite(E))) {
                            if (_ === Vi)
                                window.scrollTo({
                                    top: E,
                                    left: C,
                                    behavior: m
                                }),
                                S = !0;
                            else if (_) {
                                let z;
                                try {
                                    z = document.querySelector(_)
                                } catch {
                                    continue
                                }
                                z && (z.scrollLeft = C,
                                z.scrollTop = E,
                                S = !0)
                            }
                        }
                    }
                if (!S) {
                    const _ = a.history.location.hash.slice(1);
                    if (_) {
                        const w = window.history.state?.__hashScrollIntoViewOptions ?? !0;
                        if (w) {
                            const C = document.getElementById(_);
                            C && C.scrollIntoView(w)
                        }
                    } else {
                        const w = {
                            top: 0,
                            left: 0,
                            behavior: m
                        };
                        if (window.scrollTo(w),
                        b)
                            for (const C of b) {
                                if (C === Vi)
                                    continue;
                                const E = typeof C == "function" ? C() : document.querySelector(C);
                                E && E.scrollTo(w)
                            }
                    }
                }
            } finally {
                wo = !1
            }
            a.isScrollRestoring && r.set(y => (y[g] ||= {},
            y))
        }
    }
    )
}
function gg(a, i=String) {
    const r = new URLSearchParams;
    for (const o in a) {
        const c = a[o];
        c !== void 0 && r.set(o, i(c))
    }
    return r.toString()
}
function _c(a) {
    return a ? a === "false" ? !1 : a === "true" ? !0 : +a * 0 === 0 && +a + "" === a ? +a : a : ""
}
function Wb(a) {
    const i = new URLSearchParams(a)
      , r = Object.create(null);
    for (const [o,c] of i.entries()) {
        const f = r[o];
        f == null ? r[o] = _c(c) : Array.isArray(f) ? f.push(_c(c)) : r[o] = [f, _c(c)]
    }
    return r
}
var tS = nS(JSON.parse)
  , eS = aS(JSON.stringify, JSON.parse);
function nS(a) {
    return i => {
        i[0] === "?" && (i = i.substring(1));
        const r = Wb(i);
        for (const o in r) {
            const c = r[o];
            if (typeof c == "string")
                try {
                    r[o] = a(c)
                } catch {}
        }
        return r
    }
}
function aS(a, i) {
    const r = typeof i == "function";
    function o(c) {
        if (typeof c == "object" && c !== null)
            try {
                return a(c)
            } catch {}
        else if (r && typeof c == "string")
            try {
                return i(c),
                a(c)
            } catch {}
        return c
    }
    return c => {
        const f = gg(c, o);
        return f ? `?${f}` : ""
    }
}
var Xa = "__root__";
function yg(a) {
    if (a.statusCode = a.statusCode || a.code || 307,
    !a._builtLocation && !a.reloadDocument && typeof a.href == "string")
        try {
            new URL(a.href),
            a.reloadDocument = !0
        } catch {}
    const i = new Headers(a.headers);
    a.href && i.get("Location") === null && i.set("Location", a.href);
    const r = new Response(null,{
        status: a.statusCode,
        headers: i
    });
    if (r.options = a,
    a.throw)
        throw r;
    return r
}
function Ae(a) {
    return a instanceof Response && !!a.options
}
function lS(a) {
    if (a !== null && typeof a == "object" && a.isSerializedRedirect)
        return yg(a)
}
function iS(a) {
    return {
        input: ({url: i}) => {
            for (const r of a)
                i = Bc(r, i);
            return i
        }
        ,
        output: ({url: i}) => {
            for (let r = a.length - 1; r >= 0; r--)
                i = vg(a[r], i);
            return i
        }
    }
}
function rS(a) {
    const i = pg(a.basepath)
      , r = `/${i}`
      , o = `${r}/`
      , c = a.caseSensitive ? r : r.toLowerCase()
      , f = a.caseSensitive ? o : o.toLowerCase();
    return {
        input: ({url: h}) => {
            const p = a.caseSensitive ? h.pathname : h.pathname.toLowerCase();
            return p === c ? h.pathname = "/" : p.startsWith(f) && (h.pathname = h.pathname.slice(r.length)),
            h
        }
        ,
        output: ({url: h}) => (h.pathname = Co(["/", i, h.pathname]),
        h)
    }
}
function Bc(a, i) {
    const r = a?.input?.({
        url: i
    });
    if (r) {
        if (typeof r == "string")
            return new URL(r);
        if (r instanceof URL)
            return r
    }
    return i
}
function vg(a, i) {
    const r = a?.output?.({
        url: i
    });
    if (r) {
        if (typeof r == "string")
            return new URL(r);
        if (r instanceof URL)
            return r
    }
    return i
}
function oS(a, i) {
    const {createMutableStore: r, createReadonlyStore: o, batch: c, init: f} = i
      , h = new Map
      , p = new Map
      , g = new Map
      , m = r(a.status)
      , b = r(a.loadedAt)
      , y = r(a.isLoading)
      , S = r(a.isTransitioning)
      , _ = r(a.location)
      , w = r(a.resolvedLocation)
      , C = r(a.statusCode)
      , E = r(a.redirect)
      , z = r([])
      , V = r([])
      , Q = r([])
      , k = o( () => Ec(h, z.get()))
      , W = o( () => Ec(p, V.get()))
      , P = o( () => Ec(g, Q.get()))
      , X = o( () => z.get()[0])
      , H = o( () => z.get().some(K => h.get(K)?.get().status === "pending"))
      , J = o( () => ({
        locationHref: _.get().href,
        resolvedLocationHref: w.get()?.href,
        status: m.get()
    }))
      , ct = o( () => ({
        status: m.get(),
        loadedAt: b.get(),
        isLoading: y.get(),
        isTransitioning: S.get(),
        matches: k.get(),
        location: _.get(),
        resolvedLocation: w.get(),
        statusCode: C.get(),
        redirect: E.get()
    }))
      , nt = $i(64);
    function ht(K) {
        let ot = nt.get(K);
        return ot || (ot = o( () => {
            const wt = z.get();
            for (const I of wt) {
                const A = h.get(I);
                if (A && A.routeId === K)
                    return A.get()
            }
        }
        ),
        nt.set(K, ot)),
        ot
    }
    const vt = {
        status: m,
        loadedAt: b,
        isLoading: y,
        isTransitioning: S,
        location: _,
        resolvedLocation: w,
        statusCode: C,
        redirect: E,
        matchesId: z,
        pendingIds: V,
        cachedIds: Q,
        matches: k,
        pendingMatches: W,
        cachedMatches: P,
        firstId: X,
        hasPending: H,
        matchRouteDeps: J,
        matchStores: h,
        pendingMatchStores: p,
        cachedMatchStores: g,
        __store: ct,
        getRouteMatchStore: ht,
        setMatches: Ht,
        setPending: Rt,
        setCached: U
    };
    Ht(a.matches),
    f?.(vt);
    function Ht(K) {
        Rc(K, h, z, r, c)
    }
    function Rt(K) {
        Rc(K, p, V, r, c)
    }
    function U(K) {
        Rc(K, g, Q, r, c)
    }
    return vt
}
function Ec(a, i) {
    const r = [];
    for (const o of i) {
        const c = a.get(o);
        c && r.push(c.get())
    }
    return r
}
function Rc(a, i, r, o, c) {
    const f = a.map(p => p.id)
      , h = new Set(f);
    c( () => {
        for (const p of i.keys())
            h.has(p) || i.delete(p);
        for (const p of a) {
            const g = i.get(p.id);
            if (!g) {
                const m = o(p);
                m.routeId = p.routeId,
                i.set(p.id, m);
                continue
            }
            g.routeId = p.routeId,
            g.get() !== p && g.set(p)
        }
        jb(r.get(), f) || r.set(f)
    }
    )
}
var Hc = a => {
    if (!a.rendered)
        return a.rendered = !0,
        a.onReady?.()
}
  , sS = a => a.stores.matchesId.get().some(i => a.stores.matchStores.get(i)?.get()._forcePending)
  , Qo = (a, i) => !!(a.preload && !a.router.stores.matchStores.has(i))
  , Qa = (a, i, r=!0) => {
    const o = {
        ...a.router.options.context ?? {}
    }
      , c = r ? i : i - 1;
    for (let f = 0; f <= c; f++) {
        const h = a.matches[f];
        if (!h)
            continue;
        const p = a.router.getMatch(h.id);
        p && Object.assign(o, p.__routeContext, p.__beforeLoadContext)
    }
    return o
}
  , Sp = (a, i) => {
    if (!a.matches.length)
        return;
    const r = i.routeId
      , o = a.matches.findIndex(h => h.routeId === a.router.routeTree.id)
      , c = o >= 0 ? o : 0;
    let f = r ? a.matches.findIndex(h => h.routeId === r) : a.firstBadMatchIndex ?? a.matches.length - 1;
    f < 0 && (f = c);
    for (let h = f; h >= 0; h--) {
        const p = a.matches[h];
        if (a.router.looseRoutesById[p.routeId].options.notFoundComponent)
            return h
    }
    return r ? f : c
}
  , fa = (a, i, r) => {
    if (!(!Ae(r) && !re(r)))
        throw Ae(r) && r.redirectHandled && !r.options.reloadDocument || (i && (i._nonReactive.beforeLoadPromise?.resolve(),
        i._nonReactive.loaderPromise?.resolve(),
        i._nonReactive.beforeLoadPromise = void 0,
        i._nonReactive.loaderPromise = void 0,
        i._nonReactive.error = r,
        a.updateMatch(i.id, o => ({
            ...o,
            status: Ae(r) ? "redirected" : re(r) ? "notFound" : o.status === "pending" ? "success" : o.status,
            context: Qa(a, i.index),
            isFetching: !1,
            error: r
        })),
        re(r) && !r.routeId && (r.routeId = i.routeId),
        i._nonReactive.loadPromise?.resolve()),
        Ae(r) && (a.rendered = !0,
        r.options._fromLocation = a.location,
        r.redirectHandled = !0,
        r = a.router.resolveRedirect(r))),
        r
}
  , bg = (a, i) => {
    const r = a.router.getMatch(i);
    return !!(!r || r._nonReactive.dehydrated)
}
  , xp = (a, i, r) => {
    const o = Qa(a, r);
    a.updateMatch(i, c => ({
        ...c,
        context: o
    }))
}
  , Xi = (a, i, r, o) => {
    const {id: c, routeId: f} = a.matches[i]
      , h = a.router.looseRoutesById[f];
    if (r instanceof Promise)
        throw r;
    r.routerCode = o,
    a.firstBadMatchIndex ??= i,
    fa(a, a.router.getMatch(c), r);
    try {
        h.options.onError?.(r)
    } catch (p) {
        r = p,
        fa(a, a.router.getMatch(c), r)
    }
    a.updateMatch(c, p => (p._nonReactive.beforeLoadPromise?.resolve(),
    p._nonReactive.beforeLoadPromise = void 0,
    p._nonReactive.loadPromise?.resolve(),
    {
        ...p,
        error: r,
        status: "error",
        isFetching: !1,
        updatedAt: Date.now(),
        abortController: new AbortController
    })),
    !a.preload && !Ae(r) && !re(r) && (a.serialError ??= r)
}
  , Sg = (a, i, r, o) => {
    if (o._nonReactive.pendingTimeout !== void 0)
        return;
    const c = r.options.pendingMs ?? a.router.options.defaultPendingMs;
    if (a.onReady && !Qo(a, i) && (r.options.loader || r.options.beforeLoad || _g(r)) && typeof c == "number" && c !== 1 / 0 && (r.options.pendingComponent ?? a.router.options?.defaultPendingComponent)) {
        const f = setTimeout( () => {
            Hc(a)
        }
        , c);
        o._nonReactive.pendingTimeout = f
    }
}
  , uS = (a, i, r) => {
    const o = a.router.getMatch(i);
    if (!o._nonReactive.beforeLoadPromise && !o._nonReactive.loaderPromise)
        return;
    Sg(a, i, r, o);
    const c = () => {
        const f = a.router.getMatch(i);
        f.preload && (f.status === "redirected" || f.status === "notFound") && fa(a, f, f.error)
    }
    ;
    return o._nonReactive.beforeLoadPromise ? o._nonReactive.beforeLoadPromise.then(c) : c()
}
  , cS = (a, i, r, o) => {
    const c = a.router.getMatch(i);
    let f = c._nonReactive.loadPromise;
    c._nonReactive.loadPromise = Za( () => {
        f?.resolve(),
        f = void 0
    }
    );
    const {paramsError: h, searchError: p} = c;
    h && Xi(a, r, h, "PARSE_PARAMS"),
    p && Xi(a, r, p, "VALIDATE_SEARCH"),
    Sg(a, i, o, c);
    const g = new AbortController;
    let m = !1;
    const b = () => {
        m || (m = !0,
        a.updateMatch(i, k => ({
            ...k,
            isFetching: "beforeLoad",
            fetchCount: k.fetchCount + 1,
            abortController: g
        })))
    }
      , y = () => {
        c._nonReactive.beforeLoadPromise?.resolve(),
        c._nonReactive.beforeLoadPromise = void 0,
        a.updateMatch(i, k => ({
            ...k,
            isFetching: !1
        }))
    }
    ;
    if (!o.options.beforeLoad) {
        a.router.batch( () => {
            b(),
            y()
        }
        );
        return
    }
    c._nonReactive.beforeLoadPromise = Za();
    const S = {
        ...Qa(a, r, !1),
        ...c.__routeContext
    }
      , {search: _, params: w, cause: C} = c
      , E = Qo(a, i)
      , z = {
        search: _,
        abortController: g,
        params: w,
        preload: E,
        context: S,
        location: a.location,
        navigate: k => a.router.navigate({
            ...k,
            _fromLocation: a.location
        }),
        buildLocation: a.router.buildLocation,
        cause: E ? "preload" : C,
        matches: a.matches,
        routeId: o.id,
        ...a.router.options.additionalContext
    }
      , V = k => {
        if (k === void 0) {
            a.router.batch( () => {
                b(),
                y()
            }
            );
            return
        }
        (Ae(k) || re(k)) && (b(),
        Xi(a, r, k, "BEFORE_LOAD")),
        a.router.batch( () => {
            b(),
            a.updateMatch(i, W => ({
                ...W,
                __beforeLoadContext: k
            })),
            y()
        }
        )
    }
    ;
    let Q;
    try {
        if (Q = o.options.beforeLoad(z),
        Ii(Q))
            return b(),
            Q.catch(k => {
                Xi(a, r, k, "BEFORE_LOAD")
            }
            ).then(V)
    } catch (k) {
        b(),
        Xi(a, r, k, "BEFORE_LOAD")
    }
    V(Q)
}
  , fS = (a, i) => {
    const {id: r, routeId: o} = a.matches[i]
      , c = a.router.looseRoutesById[o]
      , f = () => p()
      , h = () => cS(a, r, i, c)
      , p = () => {
        if (bg(a, r))
            return;
        const g = uS(a, r, c);
        return Ii(g) ? g.then(h) : h()
    }
    ;
    return f()
}
  , dS = (a, i, r) => {
    const o = a.router.getMatch(i);
    if (!o || !r.options.head && !r.options.scripts && !r.options.headers)
        return;
    const c = {
        ssr: a.router.options.ssr,
        matches: a.matches,
        match: o,
        params: o.params,
        loaderData: o.loaderData
    };
    return Promise.all([r.options.head?.(c), r.options.scripts?.(c), r.options.headers?.(c)]).then( ([f,h,p]) => ({
        meta: f?.meta,
        links: f?.links,
        headScripts: f?.scripts,
        headers: p,
        scripts: h,
        styles: f?.styles
    }))
}
  , xg = (a, i, r, o, c) => {
    const f = i[o - 1]
      , {params: h, loaderDeps: p, abortController: g, cause: m} = a.router.getMatch(r)
      , b = Qa(a, o)
      , y = Qo(a, r);
    return {
        params: h,
        deps: p,
        preload: !!y,
        parentMatchPromise: f,
        abortController: g,
        context: b,
        location: a.location,
        navigate: S => a.router.navigate({
            ...S,
            _fromLocation: a.location
        }),
        cause: y ? "preload" : m,
        route: c,
        ...a.router.options.additionalContext
    }
}
  , _p = async (a, i, r, o, c) => {
    try {
        const f = a.router.getMatch(r);
        try {
            (!(fg ?? a.router.isServer) || f.ssr === !0) && Wi(c);
            const h = c.options.loader
              , p = typeof h == "function" ? h : h?.handler
              , g = p?.(xg(a, i, r, o, c))
              , m = !!p && Ii(g);
            if ((m || c._lazyPromise || c._componentsPromise || c.options.head || c.options.scripts || c.options.headers || f._nonReactive.minPendingPromise) && a.updateMatch(r, y => ({
                ...y,
                isFetching: "loader"
            })),
            p) {
                const y = m ? await g : g;
                fa(a, a.router.getMatch(r), y),
                y !== void 0 && a.updateMatch(r, S => ({
                    ...S,
                    loaderData: y
                }))
            }
            c._lazyPromise && await c._lazyPromise;
            const b = f._nonReactive.minPendingPromise;
            b && await b,
            c._componentsPromise && await c._componentsPromise,
            a.updateMatch(r, y => ({
                ...y,
                error: void 0,
                context: Qa(a, o),
                status: "success",
                isFetching: !1,
                updatedAt: Date.now()
            }))
        } catch (h) {
            let p = h;
            if (p?.name === "AbortError") {
                if (f.abortController.signal.aborted) {
                    f._nonReactive.loaderPromise?.resolve(),
                    f._nonReactive.loaderPromise = void 0;
                    return
                }
                a.updateMatch(r, m => ({
                    ...m,
                    status: m.status === "pending" ? "success" : m.status,
                    isFetching: !1,
                    context: Qa(a, o)
                }));
                return
            }
            const g = f._nonReactive.minPendingPromise;
            g && await g,
            re(h) && await c.options.notFoundComponent?.preload?.(),
            fa(a, a.router.getMatch(r), h);
            try {
                c.options.onError?.(h)
            } catch (m) {
                p = m,
                fa(a, a.router.getMatch(r), m)
            }
            !Ae(p) && !re(p) && await Wi(c, ["errorComponent"]),
            a.updateMatch(r, m => ({
                ...m,
                error: p,
                context: Qa(a, o),
                status: "error",
                isFetching: !1
            }))
        }
    } catch (f) {
        const h = a.router.getMatch(r);
        h && (h._nonReactive.loaderPromise = void 0),
        fa(a, h, f)
    }
}
  , hS = async (a, i, r) => {
    async function o(_, w, C, E, z) {
        const V = Date.now() - w.updatedAt
          , Q = _ ? z.options.preloadStaleTime ?? a.router.options.defaultPreloadStaleTime ?? 3e4 : z.options.staleTime ?? a.router.options.defaultStaleTime ?? 0
          , k = z.options.shouldReload
          , W = typeof k == "function" ? k(xg(a, i, c, r, z)) : k
          , {status: P, invalid: X} = E
          , H = V >= Q && (!!a.forceStaleReload || E.cause === "enter" || C !== void 0 && C !== E.id);
        h = P === "success" && (X || (W ?? H)),
        _ && z.options.preload === !1 || (h && !a.sync && b ? (p = !0,
        (async () => {
            try {
                await _p(a, i, c, r, z);
                const J = a.router.getMatch(c);
                J._nonReactive.loaderPromise?.resolve(),
                J._nonReactive.loadPromise?.resolve(),
                J._nonReactive.loaderPromise = void 0,
                J._nonReactive.loadPromise = void 0
            } catch (J) {
                Ae(J) && await a.router.navigate(J.options)
            }
        }
        )()) : P !== "success" || h ? await _p(a, i, c, r, z) : xp(a, c, r))
    }
    const {id: c, routeId: f} = a.matches[r];
    let h = !1
      , p = !1;
    const g = a.router.looseRoutesById[f]
      , m = g.options.loader
      , b = ((typeof m == "function" ? void 0 : m?.staleReloadMode) ?? a.router.options.defaultStaleReloadMode) !== "blocking";
    if (bg(a, c)) {
        if (!a.router.getMatch(c))
            return a.matches[r];
        xp(a, c, r)
    } else {
        const _ = a.router.getMatch(c)
          , w = a.router.stores.matchesId.get()[r]
          , C = (w && a.router.stores.matchStores.get(w) || null)?.routeId === f ? w : a.router.stores.matches.get().find(z => z.routeId === f)?.id
          , E = Qo(a, c);
        if (_._nonReactive.loaderPromise) {
            if (_.status === "success" && !a.sync && !_.preload && b)
                return _;
            await _._nonReactive.loaderPromise;
            const z = a.router.getMatch(c)
              , V = z._nonReactive.error || z.error;
            V && fa(a, z, V),
            z.status === "pending" && await o(E, _, C, z, g)
        } else {
            const z = E && !a.router.stores.matchStores.has(c)
              , V = a.router.getMatch(c);
            V._nonReactive.loaderPromise = Za(),
            z !== V.preload && a.updateMatch(c, Q => ({
                ...Q,
                preload: z
            })),
            await o(E, _, C, V, g)
        }
    }
    const y = a.router.getMatch(c);
    p || (y._nonReactive.loaderPromise?.resolve(),
    y._nonReactive.loadPromise?.resolve(),
    y._nonReactive.loadPromise = void 0),
    clearTimeout(y._nonReactive.pendingTimeout),
    y._nonReactive.pendingTimeout = void 0,
    p || (y._nonReactive.loaderPromise = void 0),
    y._nonReactive.dehydrated = void 0;
    const S = p ? y.isFetching : !1;
    return S !== y.isFetching || y.invalid !== !1 ? (a.updateMatch(c, _ => ({
        ..._,
        isFetching: S,
        invalid: !1
    })),
    a.router.getMatch(c)) : y
}
;
async function Ep(a) {
    const i = a
      , r = [];
    sS(i.router) && Hc(i);
    let o;
    for (let S = 0; S < i.matches.length; S++) {
        try {
            const _ = fS(i, S);
            Ii(_) && await _
        } catch (_) {
            if (Ae(_))
                throw _;
            if (re(_))
                o = _;
            else if (!i.preload)
                throw _;
            break
        }
        if (i.serialError || i.firstBadMatchIndex != null)
            break
    }
    const c = i.firstBadMatchIndex ?? i.matches.length
      , f = o && !i.preload ? Sp(i, o) : void 0
      , h = o && i.preload ? 0 : f !== void 0 ? Math.min(f + 1, c) : c;
    let p, g;
    for (let S = 0; S < h; S++)
        r.push(hS(i, r, S));
    try {
        await Promise.all(r)
    } catch {
        const S = await Promise.allSettled(r);
        for (const _ of S) {
            if (_.status !== "rejected")
                continue;
            const w = _.reason;
            if (Ae(w))
                throw w;
            re(w) ? p ??= w : g ??= w
        }
        if (g !== void 0)
            throw g
    }
    const m = p ?? (o && !i.preload ? o : void 0);
    let b = i.firstBadMatchIndex !== void 0 ? i.firstBadMatchIndex : i.matches.length - 1;
    if (!m && o && i.preload)
        return i.matches;
    if (m) {
        const S = Sp(i, m);
        S === void 0 && Me();
        const _ = i.matches[S]
          , w = i.router.looseRoutesById[_.routeId]
          , C = i.router.options?.defaultNotFoundComponent;
        !w.options.notFoundComponent && C && (w.options.notFoundComponent = C),
        m.routeId = _.routeId;
        const E = _.routeId === i.router.routeTree.id;
        i.updateMatch(_.id, z => ({
            ...z,
            ...E ? {
                status: "success",
                globalNotFound: !0,
                error: void 0
            } : {
                status: "notFound",
                error: m
            },
            isFetching: !1
        })),
        b = S,
        await Wi(w, ["notFoundComponent"])
    } else if (!i.preload) {
        const S = i.matches[0];
        S.globalNotFound || i.router.getMatch(S.id)?.globalNotFound && i.updateMatch(S.id, _ => ({
            ..._,
            globalNotFound: !1,
            error: void 0
        }))
    }
    if (i.serialError && i.firstBadMatchIndex !== void 0) {
        const S = i.router.looseRoutesById[i.matches[i.firstBadMatchIndex].routeId];
        await Wi(S, ["errorComponent"])
    }
    for (let S = 0; S <= b; S++) {
        const {id: _, routeId: w} = i.matches[S]
          , C = i.router.looseRoutesById[w];
        try {
            const E = dS(i, _, C);
            if (E) {
                const z = await E;
                i.updateMatch(_, V => ({
                    ...V,
                    ...z
                }))
            }
        } catch (E) {
            console.error(`Error executing head for route ${w}:`, E)
        }
    }
    const y = Hc(i);
    if (Ii(y) && await y,
    m)
        throw m;
    if (i.serialError && !i.preload && !i.onReady)
        throw i.serialError;
    return i.matches
}
function Rp(a, i) {
    const r = i.map(o => a.options[o]?.preload?.()).filter(Boolean);
    if (r.length !== 0)
        return Promise.all(r)
}
function Wi(a, i=Oo) {
    !a._lazyLoaded && a._lazyPromise === void 0 && (a.lazyFn ? a._lazyPromise = a.lazyFn().then(o => {
        const {id: c, ...f} = o.options;
        Object.assign(a.options, f),
        a._lazyLoaded = !0,
        a._lazyPromise = void 0
    }
    ) : a._lazyLoaded = !0);
    const r = () => a._componentsLoaded ? void 0 : i === Oo ? ( () => {
        if (a._componentsPromise === void 0) {
            const o = Rp(a, Oo);
            o ? a._componentsPromise = o.then( () => {
                a._componentsLoaded = !0,
                a._componentsPromise = void 0
            }
            ) : a._componentsLoaded = !0
        }
        return a._componentsPromise
    }
    )() : Rp(a, i);
    return a._lazyPromise ? a._lazyPromise.then(r) : r()
}
function _g(a) {
    for (const i of Oo)
        if (a.options[i]?.preload)
            return !0;
    return !1
}
var Oo = ["component", "errorComponent", "pendingComponent", "notFoundComponent"]
  , ha = "__TSR_index"
  , wp = "popstate"
  , Tp = "beforeunload";
function mS(a) {
    let i = a.getLocation();
    const r = new Set
      , o = h => {
        i = a.getLocation(),
        r.forEach(p => p({
            location: i,
            action: h
        }))
    }
      , c = h => {
        a.notifyOnIndexChange ?? !0 ? o(h) : i = a.getLocation()
    }
      , f = async ({task: h, navigateOpts: p, ...g}) => {
        if (p?.ignoreBlocker ?? !1) {
            h();
            return
        }
        const m = a.getBlockers?.() ?? []
          , b = g.type === "PUSH" || g.type === "REPLACE";
        if (typeof document < "u" && m.length && b)
            for (const y of m) {
                const S = Bo(g.path, g.state);
                if (await y.blockerFn({
                    currentLocation: i,
                    nextLocation: S,
                    action: g.type
                })) {
                    a.onBlocked?.();
                    return
                }
            }
        h()
    }
    ;
    return {
        get location() {
            return i
        },
        get length() {
            return a.getLength()
        },
        subscribers: r,
        subscribe: h => (r.add(h),
        () => {
            r.delete(h)
        }
        ),
        push: (h, p, g) => {
            const m = i.state[ha];
            p = Ap(m + 1, p),
            f({
                task: () => {
                    a.pushState(h, p),
                    o({
                        type: "PUSH"
                    })
                }
                ,
                navigateOpts: g,
                type: "PUSH",
                path: h,
                state: p
            })
        }
        ,
        replace: (h, p, g) => {
            const m = i.state[ha];
            p = Ap(m, p),
            f({
                task: () => {
                    a.replaceState(h, p),
                    o({
                        type: "REPLACE"
                    })
                }
                ,
                navigateOpts: g,
                type: "REPLACE",
                path: h,
                state: p
            })
        }
        ,
        go: (h, p) => {
            f({
                task: () => {
                    a.go(h),
                    c({
                        type: "GO",
                        index: h
                    })
                }
                ,
                navigateOpts: p,
                type: "GO"
            })
        }
        ,
        back: h => {
            f({
                task: () => {
                    a.back(h?.ignoreBlocker ?? !1),
                    c({
                        type: "BACK"
                    })
                }
                ,
                navigateOpts: h,
                type: "BACK"
            })
        }
        ,
        forward: h => {
            f({
                task: () => {
                    a.forward(h?.ignoreBlocker ?? !1),
                    c({
                        type: "FORWARD"
                    })
                }
                ,
                navigateOpts: h,
                type: "FORWARD"
            })
        }
        ,
        canGoBack: () => i.state[ha] !== 0,
        createHref: h => a.createHref(h),
        block: h => {
            if (!a.setBlockers)
                return () => {}
                ;
            const p = a.getBlockers?.() ?? [];
            return a.setBlockers([...p, h]),
            () => {
                const g = a.getBlockers?.() ?? [];
                a.setBlockers?.(g.filter(m => m !== h))
            }
        }
        ,
        flush: () => a.flush?.(),
        destroy: () => a.destroy?.(),
        notify: o
    }
}
function Ap(a, i) {
    i || (i = {});
    const r = Jc();
    return {
        ...i,
        key: r,
        __TSR_key: r,
        [ha]: a
    }
}
function pS(a) {
    const i = typeof document < "u" ? window : void 0
      , r = i.history.pushState
      , o = i.history.replaceState;
    let c = [];
    const f = () => c
      , h = H => c = H
      , p = (H => H)
      , g = ( () => Bo(`${i.location.pathname}${i.location.search}${i.location.hash}`, i.history.state));
    if (!i.history.state?.__TSR_key && !i.history.state?.key) {
        const H = Jc();
        i.history.replaceState({
            [ha]: 0,
            key: H,
            __TSR_key: H
        }, "")
    }
    let m = g(), b, y = !1, S = !1, _ = !1, w = !1;
    const C = () => m;
    let E, z;
    const V = () => {
        E && (X._ignoreSubscribers = !0,
        (E.isPush ? i.history.pushState : i.history.replaceState)(E.state, "", E.href),
        X._ignoreSubscribers = !1,
        E = void 0,
        z = void 0,
        b = void 0)
    }
      , Q = (H, J, ct) => {
        const nt = p(J);
        z || (b = m),
        m = Bo(J, ct),
        E = {
            href: nt,
            state: ct,
            isPush: E?.isPush || H === "push"
        },
        z || (z = Promise.resolve().then( () => V()))
    }
      , k = H => {
        m = g(),
        X.notify({
            type: H
        })
    }
      , W = async () => {
        if (S) {
            S = !1;
            return
        }
        const H = g()
          , J = H.state[ha] - m.state[ha]
          , ct = J === 1
          , nt = J === -1
          , ht = !ct && !nt || y;
        y = !1;
        const vt = ht ? "GO" : nt ? "BACK" : "FORWARD"
          , Ht = ht ? {
            type: "GO",
            index: J
        } : {
            type: nt ? "BACK" : "FORWARD"
        };
        if (_)
            _ = !1;
        else {
            const Rt = f();
            if (typeof document < "u" && Rt.length) {
                for (const U of Rt)
                    if (await U.blockerFn({
                        currentLocation: m,
                        nextLocation: H,
                        action: vt
                    })) {
                        S = !0,
                        i.history.go(1),
                        X.notify(Ht);
                        return
                    }
            }
        }
        m = g(),
        X.notify(Ht)
    }
      , P = H => {
        if (w) {
            w = !1;
            return
        }
        let J = !1;
        const ct = f();
        if (typeof document < "u" && ct.length)
            for (const nt of ct) {
                const ht = nt.enableBeforeUnload ?? !0;
                if (ht === !0) {
                    J = !0;
                    break
                }
                if (typeof ht == "function" && ht() === !0) {
                    J = !0;
                    break
                }
            }
        if (J)
            return H.preventDefault(),
            H.returnValue = ""
    }
      , X = mS({
        getLocation: C,
        getLength: () => i.history.length,
        pushState: (H, J) => Q("push", H, J),
        replaceState: (H, J) => Q("replace", H, J),
        back: H => (H && (_ = !0),
        w = !0,
        i.history.back()),
        forward: H => {
            H && (_ = !0),
            w = !0,
            i.history.forward()
        }
        ,
        go: H => {
            y = !0,
            i.history.go(H)
        }
        ,
        createHref: H => p(H),
        flush: V,
        destroy: () => {
            i.history.pushState = r,
            i.history.replaceState = o,
            i.removeEventListener(Tp, P, {
                capture: !0
            }),
            i.removeEventListener(wp, W)
        }
        ,
        onBlocked: () => {
            b && m !== b && (m = b)
        }
        ,
        getBlockers: f,
        setBlockers: h,
        notifyOnIndexChange: !1
    });
    return i.addEventListener(Tp, P, {
        capture: !0
    }),
    i.addEventListener(wp, W),
    i.history.pushState = function(...H) {
        const J = r.apply(i.history, H);
        return X._ignoreSubscribers || k("PUSH"),
        J
    }
    ,
    i.history.replaceState = function(...H) {
        const J = o.apply(i.history, H);
        return X._ignoreSubscribers || k("REPLACE"),
        J
    }
    ,
    X
}
function gS(a) {
    let i = a.replace(/[\x00-\x1f\x7f]/g, "");
    return i.startsWith("//") && (i = "/" + i.replace(/^\/+/, "")),
    i
}
function Bo(a, i) {
    const r = gS(a)
      , o = r.indexOf("#")
      , c = r.indexOf("?")
      , f = Jc();
    return {
        href: r,
        pathname: r.substring(0, o > 0 ? c > 0 ? Math.min(o, c) : o : c > 0 ? c : r.length),
        hash: o > -1 ? r.substring(o) : "",
        search: c > -1 ? r.slice(c, o === -1 ? void 0 : o) : "",
        state: i || {
            [ha]: 0,
            key: f,
            __TSR_key: f
        }
    }
}
function Jc() {
    return (Math.random() + 1).toString(36).substring(7)
}
function yS(a) {
    return a instanceof Error ? {
        name: a.name,
        message: a.message
    } : {
        data: a
    }
}
function kl(a, i) {
    const r = i
      , o = a;
    return {
        fromLocation: r,
        toLocation: o,
        pathChanged: r?.pathname !== o.pathname,
        hrefChanged: r?.href !== o.href,
        hashChanged: r?.hash !== o.hash
    }
}
var vS = class {
    constructor(a, i) {
        this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`,
        this.resetNextScroll = !0,
        this.shouldViewTransition = void 0,
        this.isViewTransitionTypesSupported = void 0,
        this.subscribers = new Set,
        this.isScrollRestoring = !1,
        this.isScrollRestorationSetup = !1,
        this.startTransition = r => r(),
        this.update = r => {
            const o = this.options
              , c = this.basepath ?? o?.basepath ?? "/"
              , f = this.basepath === void 0
              , h = o?.rewrite;
            if (this.options = {
                ...o,
                ...r
            },
            this.isServer = this.options.isServer ?? typeof document > "u",
            this.protocolAllowlist = new Set(this.options.protocolAllowlist),
            this.options.pathParamsAllowedCharacters && (this.pathParamsDecoder = Zb(this.options.pathParamsAllowedCharacters)),
            (!this.history || this.options.history && this.options.history !== this.history) && (this.options.history ? this.history = this.options.history : this.history = pS()),
            this.origin = this.options.origin,
            this.origin || (window?.origin && window.origin !== "null" ? this.origin = window.origin : this.origin = "http://localhost"),
            this.history && this.updateLatestLocation(),
            this.options.routeTree !== this.routeTree) {
                this.routeTree = this.options.routeTree;
                let b;
                this.resolvePathCache = $i(1e3),
                b = this.buildRouteTree(),
                this.setRoutes(b)
            }
            if (!this.stores && this.latestLocation) {
                const b = this.getStoreConfig(this);
                this.batch = b.batch,
                this.stores = oS(SS(this.latestLocation), b),
                $b(this)
            }
            let p = !1;
            const g = this.options.basepath ?? "/"
              , m = this.options.rewrite;
            if (f || c !== g || h !== m) {
                this.basepath = g;
                const b = []
                  , y = pg(g);
                y && y !== "/" && b.push(rS({
                    basepath: g
                })),
                m && b.push(m),
                this.rewrite = b.length === 0 ? void 0 : b.length === 1 ? b[0] : iS(b),
                this.history && this.updateLatestLocation(),
                p = !0
            }
            p && this.stores && this.stores.location.set(this.latestLocation),
            typeof window < "u" && "CSS"in window && typeof window.CSS?.supports == "function" && (this.isViewTransitionTypesSupported = window.CSS.supports("selector(:active-view-transition-type(a)"))
        }
        ,
        this.updateLatestLocation = () => {
            this.latestLocation = this.parseLocation(this.history.location, this.latestLocation)
        }
        ,
        this.buildRouteTree = () => {
            const r = qb(this.routeTree, this.options.caseSensitive, (o, c) => {
                o.init({
                    originalIndex: c
                })
            }
            );
            return this.options.routeMasks && Lb(this.options.routeMasks, r.processedTree),
            r
        }
        ,
        this.subscribe = (r, o) => {
            const c = {
                eventType: r,
                fn: o
            };
            return this.subscribers.add(c),
            () => {
                this.subscribers.delete(c)
            }
        }
        ,
        this.emit = r => {
            this.subscribers.forEach(o => {
                o.eventType === r.type && o.fn(r)
            }
            )
        }
        ,
        this.parseLocation = (r, o) => {
            const c = ({pathname: g, search: m, hash: b, href: y, state: S}) => {
                if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(g)) {
                    const z = this.options.parseSearch(m)
                      , V = this.options.stringifySearch(z);
                    return {
                        href: g + V + b,
                        publicHref: g + V + b,
                        pathname: Gi(g).path,
                        external: !1,
                        searchStr: V,
                        search: Ha(o?.search, z),
                        hash: Gi(b.slice(1)).path,
                        state: qa(o?.state, S)
                    }
                }
                const _ = new URL(y,this.origin)
                  , w = Bc(this.rewrite, _)
                  , C = this.options.parseSearch(w.search)
                  , E = this.options.stringifySearch(C);
                return w.search = E,
                {
                    href: w.href.replace(w.origin, ""),
                    publicHref: y,
                    pathname: Gi(w.pathname).path,
                    external: !!this.rewrite && w.origin !== this.origin,
                    searchStr: E,
                    search: Ha(o?.search, C),
                    hash: Gi(w.hash.slice(1)).path,
                    state: qa(o?.state, S)
                }
            }
              , f = c(r)
              , {__tempLocation: h, __tempKey: p} = f.state;
            if (h && (!p || p === this.tempLocationKey)) {
                const g = c(h);
                return g.state.key = f.state.key,
                g.state.__TSR_key = f.state.__TSR_key,
                delete g.state.__tempLocation,
                {
                    ...g,
                    maskedLocation: f
                }
            }
            return f
        }
        ,
        this.resolvePathWithBase = (r, o) => Qb({
            base: r,
            to: Kc(o),
            trailingSlash: this.options.trailingSlash,
            cache: this.resolvePathCache
        }),
        this.matchRoutes = (r, o, c) => typeof r == "string" ? this.matchRoutesInternal({
            pathname: r,
            search: o
        }, c) : this.matchRoutesInternal(r, o),
        this.getMatchedRoutes = r => xS({
            pathname: r,
            routesById: this.routesById,
            processedTree: this.processedTree
        }),
        this.cancelMatch = r => {
            const o = this.getMatch(r);
            o && (o.abortController.abort(),
            clearTimeout(o._nonReactive.pendingTimeout),
            o._nonReactive.pendingTimeout = void 0)
        }
        ,
        this.cancelMatches = () => {
            this.stores.pendingIds.get().forEach(r => {
                this.cancelMatch(r)
            }
            ),
            this.stores.matchesId.get().forEach(r => {
                if (this.stores.pendingMatchStores.has(r))
                    return;
                const o = this.stores.matchStores.get(r)?.get();
                o && (o.status === "pending" || o.isFetching === "loader") && this.cancelMatch(r)
            }
            )
        }
        ,
        this.buildLocation = r => {
            const o = (f={}) => {
                const h = f._fromLocation || this.pendingBuiltLocation || this.latestLocation
                  , p = this.matchRoutesLightweight(h);
                f.from;
                const g = f.unsafeRelative === "path" ? h.pathname : f.from ?? p.fullPath
                  , m = this.resolvePathWithBase(g, ".")
                  , b = p.search
                  , y = Object.assign(Object.create(null), p.params)
                  , S = f.to ? this.resolvePathWithBase(m, `${f.to}`) : this.resolvePathWithBase(m, ".")
                  , _ = f.params === !1 || f.params === null ? Object.create(null) : (f.params ?? !0) === !0 ? y : Object.assign(y, ca(f.params, y))
                  , w = this.getMatchedRoutes(S);
                let C = w.matchedRoutes;
                if ((!w.foundRoute || w.foundRoute.path !== "/" && w.routeParams["**"]) && this.options.notFoundRoute && (C = [...C, this.options.notFoundRoute]),
                Object.keys(_).length > 0)
                    for (const ct of C) {
                        const nt = ct.options.params?.stringify ?? ct.options.stringifyParams;
                        if (nt)
                            try {
                                Object.assign(_, nt(_))
                            } catch {}
                    }
                const E = r.leaveParams ? S : Gi(gp({
                    path: S,
                    params: _,
                    decoder: this.pathParamsDecoder,
                    server: this.isServer
                }).interpolatedPath).path;
                let z = b;
                if (r._includeValidateSearch && this.options.search?.strict) {
                    const ct = {};
                    C.forEach(nt => {
                        if (nt.options.validateSearch)
                            try {
                                Object.assign(ct, No(nt.options.validateSearch, {
                                    ...ct,
                                    ...z
                                }))
                            } catch {}
                    }
                    ),
                    z = ct
                }
                z = _S({
                    search: z,
                    dest: f,
                    destRoutes: C,
                    _includeValidateSearch: r._includeValidateSearch
                }),
                z = Ha(b, z);
                const V = this.options.stringifySearch(z)
                  , Q = f.hash === !0 ? h.hash : f.hash ? ca(f.hash, h.hash) : void 0
                  , k = Q ? `#${Q}` : "";
                let W = f.state === !0 ? h.state : f.state ? ca(f.state, h.state) : {};
                W = qa(h.state, W);
                const P = `${E}${V}${k}`;
                let X, H, J = !1;
                if (this.rewrite) {
                    const ct = new URL(P,this.origin)
                      , nt = vg(this.rewrite, ct);
                    X = ct.href.replace(ct.origin, ""),
                    nt.origin !== this.origin ? (H = nt.href,
                    J = !0) : H = nt.pathname + nt.search + nt.hash
                } else
                    X = Nb(P),
                    H = X;
                return {
                    publicHref: H,
                    href: X,
                    pathname: E,
                    search: z,
                    searchStr: V,
                    state: W,
                    hash: Q ?? "",
                    external: J,
                    unmaskOnReload: f.unmaskOnReload
                }
            }
              , c = (f={}, h) => {
                const p = o(f);
                let g = h ? o(h) : void 0;
                if (!g) {
                    const m = Object.create(null);
                    if (this.options.routeMasks) {
                        const b = Ub(p.pathname, this.processedTree);
                        if (b) {
                            Object.assign(m, b.rawParams);
                            const {from: y, params: S, ..._} = b.route
                              , w = S === !1 || S === null ? Object.create(null) : (S ?? !0) === !0 ? m : Object.assign(m, ca(S, m));
                            h = {
                                from: r.from,
                                ..._,
                                params: w
                            },
                            g = o(h)
                        }
                    }
                }
                return g && (p.maskedLocation = g),
                p
            }
            ;
            return r.mask ? c(r, {
                from: r.from,
                ...r.mask
            }) : c(r)
        }
        ,
        this.commitLocation = async ({viewTransition: r, ignoreBlocker: o, ...c}) => {
            const f = () => {
                const g = ["key", "__TSR_key", "__TSR_index", "__hashScrollIntoViewOptions"];
                g.forEach(b => {
                    c.state[b] = this.latestLocation.state[b]
                }
                );
                const m = Te(c.state, this.latestLocation.state);
                return g.forEach(b => {
                    delete c.state[b]
                }
                ),
                m
            }
              , h = da(this.latestLocation.href) === da(c.href);
            let p = this.commitLocationPromise;
            if (this.commitLocationPromise = Za( () => {
                p?.resolve(),
                p = void 0
            }
            ),
            h && f())
                this.load();
            else {
                let {maskedLocation: g, hashScrollIntoView: m, ...b} = c;
                g && (b = {
                    ...g,
                    state: {
                        ...g.state,
                        __tempKey: void 0,
                        __tempLocation: {
                            ...b,
                            search: b.searchStr,
                            state: {
                                ...b.state,
                                __tempKey: void 0,
                                __tempLocation: void 0,
                                __TSR_key: void 0,
                                key: void 0
                            }
                        }
                    }
                },
                (b.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) && (b.state.__tempKey = this.tempLocationKey)),
                b.state.__hashScrollIntoViewOptions = m ?? this.options.defaultHashScrollIntoView ?? !0,
                this.shouldViewTransition = r,
                this.history[c.replace ? "replace" : "push"](b.publicHref, b.state, {
                    ignoreBlocker: o
                })
            }
            return this.resetNextScroll = c.resetScroll ?? !0,
            this.history.subscribers.size || this.load(),
            this.commitLocationPromise
        }
        ,
        this.buildAndCommitLocation = ({replace: r, resetScroll: o, hashScrollIntoView: c, viewTransition: f, ignoreBlocker: h, href: p, ...g}={}) => {
            if (p) {
                const y = this.history.location.state.__TSR_index
                  , S = Bo(p, {
                    __TSR_index: r ? y : y + 1
                })
                  , _ = new URL(S.pathname,this.origin);
                g.to = Bc(this.rewrite, _).pathname,
                g.search = this.options.parseSearch(S.search),
                g.hash = S.hash.slice(1)
            }
            const m = this.buildLocation({
                ...g,
                _includeValidateSearch: !0
            });
            this.pendingBuiltLocation = m;
            const b = this.commitLocation({
                ...m,
                viewTransition: f,
                replace: r,
                resetScroll: o,
                hashScrollIntoView: c,
                ignoreBlocker: h
            });
            return Promise.resolve().then( () => {
                this.pendingBuiltLocation === m && (this.pendingBuiltLocation = void 0)
            }
            ),
            b
        }
        ,
        this.navigate = async ({to: r, reloadDocument: o, href: c, publicHref: f, ...h}) => {
            let p = !1;
            if (c)
                try {
                    new URL(`${c}`),
                    p = !0
                } catch {}
            if (p && !o && (o = !0),
            o) {
                if (r !== void 0 || !c) {
                    const m = this.buildLocation({
                        to: r,
                        ...h
                    });
                    c = c ?? m.publicHref,
                    f = f ?? m.publicHref
                }
                const g = !p && f ? f : c;
                if (Lo(g, this.protocolAllowlist))
                    return Promise.resolve();
                if (!h.ignoreBlocker) {
                    const m = this.history.getBlockers?.() ?? [];
                    for (const b of m)
                        if (b?.blockerFn && await b.blockerFn({
                            currentLocation: this.latestLocation,
                            nextLocation: this.latestLocation,
                            action: "PUSH"
                        }))
                            return Promise.resolve()
                }
                return h.replace ? window.location.replace(g) : window.location.href = g,
                Promise.resolve()
            }
            return this.buildAndCommitLocation({
                ...h,
                href: c,
                to: r,
                _isNavigate: !0
            })
        }
        ,
        this.beforeLoad = () => {
            this.cancelMatches(),
            this.updateLatestLocation();
            const r = this.matchRoutes(this.latestLocation)
              , o = this.stores.cachedMatches.get().filter(c => !r.some(f => f.id === c.id));
            this.batch( () => {
                this.stores.status.set("pending"),
                this.stores.statusCode.set(200),
                this.stores.isLoading.set(!0),
                this.stores.location.set(this.latestLocation),
                this.stores.setPending(r),
                this.stores.setCached(o)
            }
            )
        }
        ,
        this.load = async r => {
            let o, c, f;
            const h = this.stores.resolvedLocation.get() ?? this.stores.location.get();
            for (f = new Promise(g => {
                this.startTransition(async () => {
                    try {
                        this.beforeLoad();
                        const m = this.latestLocation
                          , b = kl(m, this.stores.resolvedLocation.get());
                        this.stores.redirect.get() || this.emit({
                            type: "onBeforeNavigate",
                            ...b
                        }),
                        this.emit({
                            type: "onBeforeLoad",
                            ...b
                        }),
                        await Ep({
                            router: this,
                            sync: r?.sync,
                            forceStaleReload: h.href === m.href,
                            matches: this.stores.pendingMatches.get(),
                            location: m,
                            updateMatch: this.updateMatch,
                            onReady: async () => {
                                this.startTransition( () => {
                                    this.startViewTransition(async () => {
                                        let y = null
                                          , S = null
                                          , _ = null
                                          , w = null;
                                        this.batch( () => {
                                            const C = this.stores.pendingMatches.get()
                                              , E = C.length
                                              , z = this.stores.matches.get();
                                            y = E ? z.filter(k => !this.stores.pendingMatchStores.has(k.id)) : null;
                                            const V = new Set;
                                            for (const k of this.stores.pendingMatchStores.values())
                                                k.routeId && V.add(k.routeId);
                                            const Q = new Set;
                                            for (const k of this.stores.matchStores.values())
                                                k.routeId && Q.add(k.routeId);
                                            S = E ? z.filter(k => !V.has(k.routeId)) : null,
                                            _ = E ? C.filter(k => !Q.has(k.routeId)) : null,
                                            w = E ? C.filter(k => Q.has(k.routeId)) : z,
                                            this.stores.isLoading.set(!1),
                                            this.stores.loadedAt.set(Date.now()),
                                            E && (this.stores.setMatches(C),
                                            this.stores.setPending([]),
                                            this.stores.setCached([...this.stores.cachedMatches.get(), ...y.filter(k => k.status !== "error" && k.status !== "notFound" && k.status !== "redirected")]),
                                            this.clearExpiredCache())
                                        }
                                        );
                                        for (const [C,E] of [[S, "onLeave"], [_, "onEnter"], [w, "onStay"]])
                                            if (C)
                                                for (const z of C)
                                                    this.looseRoutesById[z.routeId].options[E]?.(z)
                                    }
                                    )
                                }
                                )
                            }
                        })
                    } catch (m) {
                        Ae(m) ? (o = m,
                        this.navigate({
                            ...o.options,
                            replace: !0,
                            ignoreBlocker: !0
                        })) : re(m) && (c = m);
                        const b = o ? o.status : c ? 404 : this.stores.matches.get().some(y => y.status === "error") ? 500 : 200;
                        this.batch( () => {
                            this.stores.statusCode.set(b),
                            this.stores.redirect.set(o)
                        }
                        )
                    }
                    this.latestLoadPromise === f && (this.commitLocationPromise?.resolve(),
                    this.latestLoadPromise = void 0,
                    this.commitLocationPromise = void 0),
                    g()
                }
                )
            }
            ),
            this.latestLoadPromise = f,
            await f; this.latestLoadPromise && f !== this.latestLoadPromise; )
                await this.latestLoadPromise;
            let p;
            this.hasNotFoundMatch() ? p = 404 : this.stores.matches.get().some(g => g.status === "error") && (p = 500),
            p !== void 0 && this.stores.statusCode.set(p)
        }
        ,
        this.startViewTransition = r => {
            const o = this.shouldViewTransition ?? this.options.defaultViewTransition;
            if (this.shouldViewTransition = void 0,
            o && typeof document < "u" && "startViewTransition"in document && typeof document.startViewTransition == "function") {
                let c;
                if (typeof o == "object" && this.isViewTransitionTypesSupported) {
                    const f = this.latestLocation
                      , h = this.stores.resolvedLocation.get()
                      , p = typeof o.types == "function" ? o.types(kl(f, h)) : o.types;
                    if (p === !1) {
                        r();
                        return
                    }
                    c = {
                        update: r,
                        types: p
                    }
                } else
                    c = r;
                document.startViewTransition(c)
            } else
                r()
        }
        ,
        this.updateMatch = (r, o) => {
            this.startTransition( () => {
                const c = this.stores.pendingMatchStores.get(r);
                if (c) {
                    c.set(o);
                    return
                }
                const f = this.stores.matchStores.get(r);
                if (f) {
                    f.set(o);
                    return
                }
                const h = this.stores.cachedMatchStores.get(r);
                if (h) {
                    const p = o(h.get());
                    p.status === "redirected" ? this.stores.cachedMatchStores.delete(r) && this.stores.cachedIds.set(g => g.filter(m => m !== r)) : h.set(p)
                }
            }
            )
        }
        ,
        this.getMatch = r => this.stores.cachedMatchStores.get(r)?.get() ?? this.stores.pendingMatchStores.get(r)?.get() ?? this.stores.matchStores.get(r)?.get(),
        this.invalidate = r => {
            const o = c => r?.filter?.(c) ?? !0 ? {
                ...c,
                invalid: !0,
                ...r?.forcePending || c.status === "error" || c.status === "notFound" ? {
                    status: "pending",
                    error: void 0
                } : void 0
            } : c;
            return this.batch( () => {
                this.stores.setMatches(this.stores.matches.get().map(o)),
                this.stores.setCached(this.stores.cachedMatches.get().map(o)),
                this.stores.setPending(this.stores.pendingMatches.get().map(o))
            }
            ),
            this.shouldViewTransition = !1,
            this.load({
                sync: r?.sync
            })
        }
        ,
        this.getParsedLocationHref = r => r.publicHref || "/",
        this.resolveRedirect = r => {
            const o = r.headers.get("Location");
            if (!r.options.href || r.options._builtLocation) {
                const c = r.options._builtLocation ?? this.buildLocation(r.options)
                  , f = this.getParsedLocationHref(c);
                r.options.href = f,
                r.headers.set("Location", f)
            } else if (o)
                try {
                    const c = new URL(o);
                    if (this.origin && c.origin === this.origin) {
                        const f = c.pathname + c.search + c.hash;
                        r.options.href = f,
                        r.headers.set("Location", f)
                    }
                } catch {}
            if (r.options.href && !r.options._builtLocation && Lo(r.options.href, this.protocolAllowlist))
                throw new Error("Redirect blocked: unsafe protocol");
            return r.headers.get("Location") || r.headers.set("Location", r.options.href),
            r
        }
        ,
        this.clearCache = r => {
            const o = r?.filter;
            o !== void 0 ? this.stores.setCached(this.stores.cachedMatches.get().filter(c => !o(c))) : this.stores.setCached([])
        }
        ,
        this.clearExpiredCache = () => {
            const r = Date.now()
              , o = c => {
                const f = this.looseRoutesById[c.routeId];
                if (!f.options.loader)
                    return !0;
                const h = (c.preload ? f.options.preloadGcTime ?? this.options.defaultPreloadGcTime : f.options.gcTime ?? this.options.defaultGcTime) ?? 300 * 1e3;
                return c.status === "error" ? !0 : r - c.updatedAt >= h
            }
            ;
            this.clearCache({
                filter: o
            })
        }
        ,
        this.loadRouteChunk = Wi,
        this.preloadRoute = async r => {
            const o = r._builtLocation ?? this.buildLocation(r);
            let c = this.matchRoutes(o, {
                throwOnError: !0,
                preload: !0,
                dest: r
            });
            const f = new Set([...this.stores.matchesId.get(), ...this.stores.pendingIds.get()])
              , h = new Set([...f, ...this.stores.cachedIds.get()])
              , p = c.filter(g => !h.has(g.id));
            if (p.length) {
                const g = this.stores.cachedMatches.get();
                this.stores.setCached([...g, ...p])
            }
            try {
                return c = await Ep({
                    router: this,
                    matches: c,
                    location: o,
                    preload: !0,
                    updateMatch: (g, m) => {
                        f.has(g) ? c = c.map(b => b.id === g ? m(b) : b) : this.updateMatch(g, m)
                    }
                }),
                c
            } catch (g) {
                if (Ae(g))
                    return g.options.reloadDocument ? void 0 : await this.preloadRoute({
                        ...g.options,
                        _fromLocation: o
                    });
                re(g) || console.error(g);
                return
            }
        }
        ,
        this.matchRoute = (r, o) => {
            const c = {
                ...r,
                to: r.to ? this.resolvePathWithBase(r.from || "", r.to) : void 0,
                params: r.params || {},
                leaveParams: !0
            }
              , f = this.buildLocation(c);
            if (o?.pending && this.stores.status.get() !== "pending")
                return !1;
            const h = (o?.pending === void 0 ? !this.stores.isLoading.get() : o.pending) ? this.latestLocation : this.stores.resolvedLocation.get() || this.stores.location.get()
              , p = Bb(f.pathname, o?.caseSensitive ?? !1, o?.fuzzy ?? !1, h.pathname, this.processedTree);
            return !p || r.params && !Te(p.rawParams, r.params, {
                partial: !0
            }) ? !1 : o?.includeSearch ?? !0 ? Te(h.search, f.search, {
                partial: !0
            }) ? p.rawParams : !1 : p.rawParams
        }
        ,
        this.hasNotFoundMatch = () => this.stores.matches.get().some(r => r.status === "notFound" || r.globalNotFound),
        this.getStoreConfig = i,
        this.update({
            defaultPreloadDelay: 50,
            defaultPendingMs: 1e3,
            defaultPendingMinMs: 500,
            context: void 0,
            ...a,
            caseSensitive: a.caseSensitive ?? !1,
            notFoundMode: a.notFoundMode ?? "fuzzy",
            stringifySearch: a.stringifySearch ?? eS,
            parseSearch: a.parseSearch ?? tS,
            protocolAllowlist: a.protocolAllowlist ?? Mb
        }),
        typeof document < "u" && (self.__TSR_ROUTER__ = this)
    }
    isShell() {
        return !!this.options.isShell
    }
    isPrerendering() {
        return !!this.options.isPrerendering
    }
    get state() {
        return this.stores.__store.get()
    }
    setRoutes({routesById: a, routesByPath: i, processedTree: r}) {
        this.routesById = a,
        this.routesByPath = i,
        this.processedTree = r;
        const o = this.options.notFoundRoute;
        o && (o.init({
            originalIndex: 99999999999
        }),
        this.routesById[o.id] = o)
    }
    get looseRoutesById() {
        return this.routesById
    }
    getParentContext(a) {
        return a?.id ? a.context ?? this.options.context ?? void 0 : this.options.context ?? void 0
    }
    matchRoutesInternal(a, i) {
        const r = this.getMatchedRoutes(a.pathname)
          , {foundRoute: o, routeParams: c, parsedParams: f} = r;
        let {matchedRoutes: h} = r
          , p = !1;
        (o ? o.path !== "/" && c["**"] : da(a.pathname)) && (this.options.notFoundRoute ? h = [...h, this.options.notFoundRoute] : p = !0);
        const g = p ? RS(this.options.notFoundMode, h) : void 0
          , m = new Array(h.length)
          , b = new Map;
        for (const y of this.stores.matchStores.values())
            y.routeId && b.set(y.routeId, y.get());
        for (let y = 0; y < h.length; y++) {
            const S = h[y]
              , _ = m[y - 1];
            let w, C, E;
            {
                const vt = _?.search ?? a.search
                  , Ht = _?._strictSearch ?? void 0;
                try {
                    const Rt = No(S.options.validateSearch, {
                        ...vt
                    }) ?? void 0;
                    w = {
                        ...vt,
                        ...Rt
                    },
                    C = {
                        ...Ht,
                        ...Rt
                    },
                    E = void 0
                } catch (Rt) {
                    let U = Rt;
                    if (Rt instanceof Ho || (U = new Ho(Rt.message,{
                        cause: Rt
                    })),
                    i?.throwOnError)
                        throw U;
                    w = vt,
                    C = {},
                    E = U
                }
            }
            const z = S.options.loaderDeps?.({
                search: w
            }) ?? ""
              , V = z ? JSON.stringify(z) : ""
              , {interpolatedPath: Q, usedParams: k} = gp({
                path: S.fullPath,
                params: c,
                decoder: this.pathParamsDecoder,
                server: this.isServer
            })
              , W = S.id + Q + V
              , P = this.getMatch(W)
              , X = b.get(S.id)
              , H = P?._strictParams ?? k;
            let J;
            if (!P)
                try {
                    Mp(S, k, f, H)
                } catch (vt) {
                    if (re(vt) || Ae(vt) ? J = vt : J = new bS(vt.message,{
                        cause: vt
                    }),
                    i?.throwOnError)
                        throw J
                }
            Object.assign(c, H);
            const ct = X ? "stay" : "enter";
            let nt;
            if (P)
                nt = {
                    ...P,
                    cause: ct,
                    params: X?.params ?? c,
                    _strictParams: H,
                    search: Ha(X ? X.search : P.search, w),
                    _strictSearch: C
                };
            else {
                const vt = S.options.loader || S.options.beforeLoad || S.lazyFn || _g(S) ? "pending" : "success";
                nt = {
                    id: W,
                    ssr: S.options.ssr,
                    index: y,
                    routeId: S.id,
                    params: X?.params ?? c,
                    _strictParams: H,
                    pathname: Q,
                    updatedAt: Date.now(),
                    search: X ? Ha(X.search, w) : w,
                    _strictSearch: C,
                    searchError: void 0,
                    status: vt,
                    isFetching: !1,
                    error: void 0,
                    paramsError: J,
                    __routeContext: void 0,
                    _nonReactive: {
                        loadPromise: Za()
                    },
                    __beforeLoadContext: void 0,
                    context: {},
                    abortController: new AbortController,
                    fetchCount: 0,
                    cause: ct,
                    loaderDeps: X ? qa(X.loaderDeps, z) : z,
                    invalid: !1,
                    preload: !1,
                    links: void 0,
                    scripts: void 0,
                    headScripts: void 0,
                    meta: void 0,
                    staticData: S.options.staticData || {},
                    fullPath: S.fullPath
                }
            }
            i?.preload || (nt.globalNotFound = g === S.id),
            nt.searchError = E;
            const ht = this.getParentContext(_);
            nt.context = {
                ...ht,
                ...nt.__routeContext,
                ...nt.__beforeLoadContext
            },
            m[y] = nt
        }
        for (let y = 0; y < m.length; y++) {
            const S = m[y]
              , _ = this.looseRoutesById[S.routeId]
              , w = this.getMatch(S.id)
              , C = b.get(S.routeId);
            if (S.params = C ? Ha(C.params, c) : c,
            !w) {
                const E = m[y - 1]
                  , z = this.getParentContext(E);
                if (_.options.context) {
                    const V = {
                        deps: S.loaderDeps,
                        params: S.params,
                        context: z ?? {},
                        location: a,
                        navigate: Q => this.navigate({
                            ...Q,
                            _fromLocation: a
                        }),
                        buildLocation: this.buildLocation,
                        cause: S.cause,
                        abortController: S.abortController,
                        preload: !!S.preload,
                        matches: m,
                        routeId: _.id
                    };
                    S.__routeContext = _.options.context(V) ?? void 0
                }
                S.context = {
                    ...z,
                    ...S.__routeContext,
                    ...S.__beforeLoadContext
                }
            }
        }
        return m
    }
    matchRoutesLightweight(a) {
        const {matchedRoutes: i, routeParams: r, parsedParams: o} = this.getMatchedRoutes(a.pathname)
          , c = Fi(i)
          , f = {
            ...a.search
        };
        for (const b of i)
            try {
                Object.assign(f, No(b.options.validateSearch, f))
            } catch {}
        const h = Fi(this.stores.matchesId.get())
          , p = h && this.stores.matchStores.get(h)?.get()
          , g = p && p.routeId === c.id && p.pathname === a.pathname;
        let m;
        if (g)
            m = p.params;
        else {
            const b = Object.assign(Object.create(null), r);
            for (const y of i)
                try {
                    Mp(y, r, o ?? {}, b)
                } catch {}
            m = b
        }
        return {
            matchedRoutes: i,
            fullPath: c.fullPath,
            search: f,
            params: m
        }
    }
}
  , Ho = class extends Error {
}
  , bS = class extends Error {
}
;
function SS(a) {
    return {
        loadedAt: 0,
        isLoading: !1,
        isTransitioning: !1,
        status: "idle",
        resolvedLocation: void 0,
        location: a,
        matches: [],
        statusCode: 200
    }
}
function No(a, i) {
    if (a == null)
        return {};
    if ("~standard"in a) {
        const r = a["~standard"].validate(i);
        if (r instanceof Promise)
            throw new Ho("Async validation not supported");
        if (r.issues)
            throw new Ho(JSON.stringify(r.issues, void 0, 2),{
                cause: r
            });
        return r.value
    }
    return "parse"in a ? a.parse(i) : typeof a == "function" ? a(i) : {}
}
function xS({pathname: a, routesById: i, processedTree: r}) {
    const o = Object.create(null)
      , c = da(a);
    let f, h;
    const p = Hb(c, r, !0);
    return p && (f = p.route,
    Object.assign(o, p.rawParams),
    h = Object.assign(Object.create(null), p.parsedParams)),
    {
        matchedRoutes: p?.branch || [i.__root__],
        routeParams: o,
        foundRoute: f,
        parsedParams: h
    }
}
function _S({search: a, dest: i, destRoutes: r, _includeValidateSearch: o}) {
    return ES(r)(a, i, o ?? !1)
}
function ES(a) {
    const i = {
        dest: null,
        _includeValidateSearch: !1,
        middlewares: []
    };
    for (const c of a) {
        if ("search"in c.options)
            c.options.search?.middlewares && i.middlewares.push(...c.options.search.middlewares);
        else if (c.options.preSearchFilters || c.options.postSearchFilters) {
            const f = ({search: h, next: p}) => {
                let g = h;
                "preSearchFilters"in c.options && c.options.preSearchFilters && (g = c.options.preSearchFilters.reduce( (b, y) => y(b), h));
                const m = p(g);
                return "postSearchFilters"in c.options && c.options.postSearchFilters ? c.options.postSearchFilters.reduce( (b, y) => y(b), m) : m
            }
            ;
            i.middlewares.push(f)
        }
        if (c.options.validateSearch) {
            const f = ({search: h, next: p}) => {
                const g = p(h);
                if (!i._includeValidateSearch)
                    return g;
                try {
                    return {
                        ...g,
                        ...No(c.options.validateSearch, g) ?? void 0
                    }
                } catch {
                    return g
                }
            }
            ;
            i.middlewares.push(f)
        }
    }
    const r = ({search: c}) => {
        const f = i.dest;
        return f.search ? f.search === !0 ? c : ca(f.search, c) : {}
    }
    ;
    i.middlewares.push(r);
    const o = (c, f, h) => {
        if (c >= h.length)
            return f;
        const p = h[c];
        return p({
            search: f,
            next: m => o(c + 1, m, h)
        })
    }
    ;
    return function(f, h, p) {
        return i.dest = h,
        i._includeValidateSearch = p,
        o(0, f, i.middlewares)
    }
}
function RS(a, i) {
    if (a !== "root")
        for (let r = i.length - 1; r >= 0; r--) {
            const o = i[r];
            if (o.children)
                return o.id
        }
    return Xa
}
function Mp(a, i, r, o) {
    const c = a.options.params?.parse ?? a.options.parseParams;
    if (c)
        if (a.options.skipRouteOnParseError)
            for (const f in i)
                f in r && (o[f] = r[f]);
        else {
            const f = c(o);
            Object.assign(o, f)
        }
}
var on = Symbol.for("TSR_DEFERRED_PROMISE");
function wS(a, i) {
    const r = a;
    return r[on] || (r[on] = {
        status: "pending"
    },
    r.then(o => {
        r[on].status = "success",
        r[on].data = o
    }
    ).catch(o => {
        r[on].status = "error",
        r[on].error = {
            data: yS(o),
            __isServerError: !0
        }
    }
    )),
    r
}
var TS = "Error preloading route! ☝️";
function zp(a, i) {
    if (a)
        return typeof a == "string" ? a : a[i]
}
function AS(a) {
    return typeof a == "string" ? {
        href: a,
        crossOrigin: void 0
    } : a
}
var Eg = class {
    get to() {
        return this._to
    }
    get id() {
        return this._id
    }
    get path() {
        return this._path
    }
    get fullPath() {
        return this._fullPath
    }
    constructor(a) {
        if (this.init = i => {
            this.originalIndex = i.originalIndex;
            const r = this.options
              , o = !r?.path && !r?.id;
            this.parentRoute = this.options.getParentRoute?.(),
            o ? this._path = Xa : this.parentRoute || Me();
            let c = o ? Xa : r?.path;
            c && c !== "/" && (c = mg(c));
            const f = r?.id || c;
            let h = o ? Xa : Co([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, f]);
            c === "__root__" && (c = "/"),
            h !== "__root__" && (h = Co(["/", h]));
            const p = h === "__root__" ? "/" : Co([this.parentRoute.fullPath, c]);
            this._path = c,
            this._id = h,
            this._fullPath = p,
            this._to = da(p)
        }
        ,
        this.addChildren = i => this._addFileChildren(i),
        this._addFileChildren = i => (Array.isArray(i) && (this.children = i),
        typeof i == "object" && i !== null && (this.children = Object.values(i)),
        this),
        this._addFileTypes = () => this,
        this.updateLoader = i => (Object.assign(this.options, i),
        this),
        this.update = i => (Object.assign(this.options, i),
        this),
        this.lazy = i => (this.lazyFn = i,
        this),
        this.redirect = i => yg({
            from: this.fullPath,
            ...i
        }),
        this.options = a || {},
        this.isRoot = !a?.getParentRoute,
        a?.id && a?.path)
            throw new Error("Route cannot have both an 'id' and a 'path' option.")
    }
}
  , MS = class extends Eg {
    constructor(a) {
        super(a)
    }
}
;
function zS(a) {
    if (typeof document < "u" && document.querySelector) {
        const i = a.stores.location.get()
          , r = i.state.__hashScrollIntoViewOptions ?? !0;
        if (r && i.hash !== "") {
            const o = document.getElementById(i.hash);
            o && o.scrollIntoView(r)
        }
    }
}
var CS = (a => (a[a.AggregateError = 1] = "AggregateError",
a[a.ArrowFunction = 2] = "ArrowFunction",
a[a.ErrorPrototypeStack = 4] = "ErrorPrototypeStack",
a[a.ObjectAssign = 8] = "ObjectAssign",
a[a.BigIntTypedArray = 16] = "BigIntTypedArray",
a[a.RegExp = 32] = "RegExp",
a))(CS || {})
  , Cn = Symbol.asyncIterator
  , Rg = Symbol.hasInstance
  , ql = Symbol.isConcatSpreadable
  , On = Symbol.iterator
  , wg = Symbol.match
  , Tg = Symbol.matchAll
  , Ag = Symbol.replace
  , Mg = Symbol.search
  , zg = Symbol.species
  , Cg = Symbol.split
  , Og = Symbol.toPrimitive
  , Gl = Symbol.toStringTag
  , Ng = Symbol.unscopables
  , jg = {
    [Cn]: 0,
    [Rg]: 1,
    [ql]: 2,
    [On]: 3,
    [wg]: 4,
    [Tg]: 5,
    [Ag]: 6,
    [Mg]: 7,
    [zg]: 8,
    [Cg]: 9,
    [Og]: 10,
    [Gl]: 11,
    [Ng]: 12
}
  , OS = {
    0: Cn,
    1: Rg,
    2: ql,
    3: On,
    4: wg,
    5: Tg,
    6: Ag,
    7: Mg,
    8: zg,
    9: Cg,
    10: Og,
    11: Gl,
    12: Ng
}
  , x = void 0
  , NS = {
    2: !0,
    3: !1,
    1: x,
    0: null,
    4: -0,
    5: Number.POSITIVE_INFINITY,
    6: Number.NEGATIVE_INFINITY,
    7: Number.NaN
}
  , jS = {
    0: "Error",
    1: "EvalError",
    2: "RangeError",
    3: "ReferenceError",
    4: "SyntaxError",
    5: "TypeError",
    6: "URIError"
}
  , DS = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError
};
function zt(a, i, r, o, c, f, h, p, g, m, b, y) {
    return {
        t: a,
        i,
        s: r,
        c: o,
        m: c,
        p: f,
        e: h,
        a: p,
        f: g,
        b: m,
        o: b,
        l: y
    }
}
function pa(a) {
    return zt(2, x, a, x, x, x, x, x, x, x, x, x)
}
var Dg = pa(2)
  , Lg = pa(3)
  , LS = pa(1)
  , US = pa(0)
  , BS = pa(4)
  , HS = pa(5)
  , kS = pa(6)
  , qS = pa(7);
function GS(a) {
    switch (a) {
    case '"':
        return '\\"';
    case "\\":
        return "\\\\";
    case `
`:
        return "\\n";
    case "\r":
        return "\\r";
    case "\b":
        return "\\b";
    case "	":
        return "\\t";
    case "\f":
        return "\\f";
    case "<":
        return "\\x3C";
    case "\u2028":
        return "\\u2028";
    case "\u2029":
        return "\\u2029";
    default:
        return x
    }
}
function ga(a) {
    let i = "", r = 0, o;
    for (let c = 0, f = a.length; c < f; c++)
        o = GS(a[c]),
        o && (i += a.slice(r, c) + o,
        r = c + 1);
    return r === 0 ? i = a : i += a.slice(r),
    i
}
function YS(a) {
    switch (a) {
    case "\\\\":
        return "\\";
    case '\\"':
        return '"';
    case "\\n":
        return `
`;
    case "\\r":
        return "\r";
    case "\\b":
        return "\b";
    case "\\t":
        return "	";
    case "\\f":
        return "\f";
    case "\\x3C":
        return "<";
    case "\\u2028":
        return "\u2028";
    case "\\u2029":
        return "\u2029";
    default:
        return a
    }
}
function ya(a) {
    return a.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, YS)
}
var To = "__SEROVAL_REFS__"
  , Ug = new Map
  , Hl = new Map;
function Bg(a) {
    return Ug.has(a)
}
function VS(a) {
    return Hl.has(a)
}
function XS(a) {
    if (Bg(a))
        return Ug.get(a);
    throw new x1(a)
}
function QS(a) {
    if (VS(a))
        return Hl.get(a);
    throw new _1(a)
}
typeof globalThis < "u" ? Object.defineProperty(globalThis, To, {
    value: Hl,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof window < "u" ? Object.defineProperty(window, To, {
    value: Hl,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof self < "u" ? Object.defineProperty(self, To, {
    value: Hl,
    configurable: !0,
    writable: !1,
    enumerable: !1
}) : typeof global < "u" && Object.defineProperty(global, To, {
    value: Hl,
    configurable: !0,
    writable: !1,
    enumerable: !1
});
function Pc(a) {
    return a instanceof EvalError ? 1 : a instanceof RangeError ? 2 : a instanceof ReferenceError ? 3 : a instanceof SyntaxError ? 4 : a instanceof TypeError ? 5 : a instanceof URIError ? 6 : 0
}
function ZS(a) {
    let i = jS[Pc(a)];
    return a.name !== i ? {
        name: a.name
    } : a.constructor.name !== i ? {
        name: a.constructor.name
    } : {}
}
function Hg(a, i) {
    let r = ZS(a)
      , o = Object.getOwnPropertyNames(a);
    for (let c = 0, f = o.length, h; c < f; c++)
        h = o[c],
        h !== "name" && h !== "message" && (h === "stack" ? i & 4 && (r = r || {},
        r[h] = a[h]) : (r = r || {},
        r[h] = a[h]));
    return r
}
function kg(a) {
    return Object.isFrozen(a) ? 3 : Object.isSealed(a) ? 2 : Object.isExtensible(a) ? 0 : 1
}
function KS(a) {
    switch (a) {
    case Number.POSITIVE_INFINITY:
        return HS;
    case Number.NEGATIVE_INFINITY:
        return kS
    }
    return a !== a ? qS : Object.is(a, -0) ? BS : zt(0, x, a, x, x, x, x, x, x, x, x, x)
}
function qg(a) {
    return zt(1, x, ga(a), x, x, x, x, x, x, x, x, x)
}
function JS(a) {
    return zt(3, x, "" + a, x, x, x, x, x, x, x, x, x)
}
function PS(a) {
    return zt(4, a, x, x, x, x, x, x, x, x, x, x)
}
function FS(a, i) {
    let r = i.valueOf();
    return zt(5, a, r !== r ? "" : i.toISOString(), x, x, x, x, x, x, x, x, x)
}
function IS(a, i) {
    return zt(6, a, x, ga(i.source), i.flags, x, x, x, x, x, x, x)
}
function $S(a, i) {
    return zt(17, a, jg[i], x, x, x, x, x, x, x, x, x)
}
function WS(a, i) {
    return zt(18, a, ga(XS(i)), x, x, x, x, x, x, x, x, x)
}
function t1(a, i, r) {
    return zt(25, a, r, ga(i), x, x, x, x, x, x, x, x)
}
function e1(a, i, r) {
    return zt(9, a, x, x, x, x, x, r, x, x, kg(i), x)
}
function n1(a, i) {
    return zt(21, a, x, x, x, x, x, x, i, x, x, x)
}
function a1(a, i, r) {
    return zt(15, a, x, i.constructor.name, x, x, x, x, r, i.byteOffset, x, i.length)
}
function l1(a, i, r) {
    return zt(16, a, x, i.constructor.name, x, x, x, x, r, i.byteOffset, x, i.byteLength)
}
function i1(a, i, r) {
    return zt(20, a, x, x, x, x, x, x, r, i.byteOffset, x, i.byteLength)
}
function r1(a, i, r) {
    return zt(13, a, Pc(i), x, ga(i.message), r, x, x, x, x, x, x)
}
function o1(a, i, r) {
    return zt(14, a, Pc(i), x, ga(i.message), r, x, x, x, x, x, x)
}
function s1(a, i) {
    return zt(7, a, x, x, x, x, x, i, x, x, x, x)
}
function u1(a, i) {
    return zt(28, x, x, x, x, x, x, [a, i], x, x, x, x)
}
function c1(a, i) {
    return zt(30, x, x, x, x, x, x, [a, i], x, x, x, x)
}
function f1(a, i, r) {
    return zt(31, a, x, x, x, x, x, r, i, x, x, x)
}
function d1(a, i) {
    return zt(32, a, x, x, x, x, x, x, i, x, x, x)
}
function h1(a, i) {
    return zt(33, a, x, x, x, x, x, x, i, x, x, x)
}
function m1(a, i) {
    return zt(34, a, x, x, x, x, x, x, i, x, x, x)
}
function p1(a, i, r, o) {
    return zt(35, a, r, x, x, x, x, i, x, x, x, o)
}
var g1 = {
    parsing: 1,
    serialization: 2,
    deserialization: 3
};
function y1(a) {
    return `Seroval Error (step: ${g1[a]})`
}
var v1 = (a, i) => y1(a)
  , Gg = class extends Error {
    constructor(a, i) {
        super(v1(a)),
        this.cause = i
    }
}
  , Cp = class extends Gg {
    constructor(a) {
        super("parsing", a)
    }
}
  , b1 = class extends Gg {
    constructor(a) {
        super("deserialization", a)
    }
}
;
function Nn(a) {
    return `Seroval Error (specific: ${a})`
}
var Zo = class extends Error {
    constructor(i) {
        super(Nn(1)),
        this.value = i
    }
}
  , Yg = class extends Error {
    constructor(a) {
        super(Nn(2))
    }
}
  , S1 = class extends Error {
    constructor(i) {
        super(Nn(3))
    }
}
  , nr = class extends Error {
    constructor(a) {
        super(Nn(4))
    }
}
  , x1 = class extends Error {
    constructor(a) {
        super(Nn(5)),
        this.value = a
    }
}
  , _1 = class extends Error {
    constructor(a) {
        super(Nn(6))
    }
}
  , E1 = class extends Error {
    constructor(a) {
        super(Nn(7))
    }
}
  , jn = class extends Error {
    constructor(a) {
        super(Nn(8))
    }
}
  , R1 = class extends Error {
    constructor(a) {
        super(Nn(9))
    }
}
  , w1 = class {
    constructor(a, i) {
        this.value = a,
        this.replacement = i
    }
}
  , Ko = () => {
    let a = {
        p: 0,
        s: 0,
        f: 0
    };
    return a.p = new Promise( (i, r) => {
        a.s = i,
        a.f = r
    }
    ),
    a
}
  , T1 = (a, i) => {
    a.s(i),
    a.p.s = 1,
    a.p.v = i
}
  , A1 = (a, i) => {
    a.f(i),
    a.p.s = 2,
    a.p.v = i
}
;
Ko.toString();
T1.toString();
A1.toString();
var M1 = () => {
    let a = []
      , i = []
      , r = !0
      , o = !1
      , c = 0
      , f = (g, m, b) => {
        for (b = 0; b < c; b++)
            i[b] && i[b][m](g)
    }
      , h = (g, m, b, y) => {
        for (m = 0,
        b = a.length; m < b; m++)
            y = a[m],
            !r && m === b - 1 ? g[o ? "return" : "throw"](y) : g.next(y)
    }
      , p = (g, m) => (r && (m = c++,
    i[m] = g),
    h(g),
    () => {
        r && (i[m] = i[c],
        i[c--] = void 0)
    }
    );
    return {
        __SEROVAL_STREAM__: !0,
        on: g => p(g),
        next: g => {
            r && (a.push(g),
            f(g, "next"))
        }
        ,
        throw: g => {
            r && (a.push(g),
            f(g, "throw"),
            r = !1,
            o = !1,
            i.length = 0)
        }
        ,
        return: g => {
            r && (a.push(g),
            f(g, "return"),
            r = !1,
            o = !0,
            i.length = 0)
        }
    }
}
  , z1 = a => i => () => {
    let r = 0
      , o = {
        [a]: () => o,
        next: () => {
            if (r > i.d)
                return {
                    done: !0,
                    value: void 0
                };
            let c = r++
              , f = i.v[c];
            if (c === i.t)
                throw f;
            return {
                done: c === i.d,
                value: f
            }
        }
    };
    return o
}
  , C1 = (a, i) => r => () => {
    let o = 0
      , c = -1
      , f = !1
      , h = []
      , p = []
      , g = (b=0, y=p.length) => {
        for (; b < y; b++)
            p[b].s({
                done: !0,
                value: void 0
            })
    }
    ;
    r.on({
        next: b => {
            let y = p.shift();
            y && y.s({
                done: !1,
                value: b
            }),
            h.push(b)
        }
        ,
        throw: b => {
            let y = p.shift();
            y && y.f(b),
            g(),
            c = h.length,
            f = !0,
            h.push(b)
        }
        ,
        return: b => {
            let y = p.shift();
            y && y.s({
                done: !0,
                value: b
            }),
            g(),
            c = h.length,
            h.push(b)
        }
    });
    let m = {
        [a]: () => m,
        next: () => {
            if (c === -1) {
                let S = o++;
                if (S >= h.length) {
                    let _ = i();
                    return p.push(_),
                    _.p
                }
                return {
                    done: !1,
                    value: h[S]
                }
            }
            if (o > c)
                return {
                    done: !0,
                    value: void 0
                };
            let b = o++
              , y = h[b];
            if (b !== c)
                return {
                    done: !1,
                    value: y
                };
            if (f)
                throw y;
            return {
                done: !0,
                value: y
            }
        }
    };
    return m
}
  , Vg = a => {
    let i = atob(a)
      , r = i.length
      , o = new Uint8Array(r);
    for (let c = 0; c < r; c++)
        o[c] = i.charCodeAt(c);
    return o.buffer
}
;
Vg.toString();
function O1(a) {
    return "__SEROVAL_SEQUENCE__"in a
}
function Xg(a, i, r) {
    return {
        __SEROVAL_SEQUENCE__: !0,
        v: a,
        t: i,
        d: r
    }
}
function N1(a) {
    let i = []
      , r = -1
      , o = -1
      , c = a[On]();
    for (; ; )
        try {
            let f = c.next();
            if (i.push(f.value),
            f.done) {
                o = i.length - 1;
                break
            }
        } catch (f) {
            r = i.length,
            i.push(f)
        }
    return Xg(i, r, o)
}
var j1 = z1(On);
function D1(a) {
    return j1(a)
}
var L1 = {}
  , U1 = {}
  , B1 = {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {}
};
function H1(a) {
    return "__SEROVAL_STREAM__"in a
}
function Ka() {
    return M1()
}
function k1(a) {
    let i = Ka()
      , r = a[Cn]();
    async function o() {
        try {
            let c = await r.next();
            c.done ? i.return(c.value) : (i.next(c.value),
            await o())
        } catch (c) {
            i.throw(c)
        }
    }
    return o().catch( () => {}
    ),
    i
}
var q1 = C1(Cn, Ko);
function G1(a) {
    return q1(a)
}
async function Y1(a) {
    try {
        return [1, await a]
    } catch (i) {
        return [0, i]
    }
}
function V1(a, i) {
    return {
        plugins: i.plugins,
        mode: a,
        marked: new Set,
        features: 63 ^ (i.disabledFeatures || 0),
        refs: i.refs || new Map,
        depthLimit: i.depthLimit || 1e3
    }
}
function jo(a, i) {
    a.marked.add(i)
}
function X1(a, i) {
    let r = a.refs.size;
    return a.refs.set(i, r),
    r
}
function Jo(a, i) {
    let r = a.refs.get(i);
    return r != null ? (jo(a, r),
    {
        type: 1,
        value: PS(r)
    }) : {
        type: 0,
        value: X1(a, i)
    }
}
function Fc(a, i) {
    let r = Jo(a, i);
    return r.type === 1 ? r : Bg(i) ? {
        type: 2,
        value: WS(r.value, i)
    } : r
}
function Va(a, i) {
    let r = Fc(a, i);
    if (r.type !== 0)
        return r.value;
    if (i in jg)
        return $S(r.value, i);
    throw new Zo(i)
}
function Po(a, i) {
    let r = Jo(a, B1[i]);
    return r.type === 1 ? r.value : zt(26, r.value, i, x, x, x, x, x, x, x, x, x)
}
function Q1(a) {
    let i = Jo(a, L1);
    return i.type === 1 ? i.value : zt(27, i.value, x, x, x, x, x, x, Va(a, On), x, x, x)
}
function Z1(a) {
    let i = Jo(a, U1);
    return i.type === 1 ? i.value : zt(29, i.value, x, x, x, x, x, [Po(a, 1), Va(a, Cn)], x, x, x, x)
}
function K1(a, i, r, o) {
    return zt(r ? 11 : 10, a, x, x, x, o, x, x, x, x, kg(i), x)
}
function J1(a, i, r, o) {
    return zt(8, i, x, x, x, x, {
        k: r,
        v: o
    }, x, Po(a, 0), x, x, x)
}
function P1(a, i, r) {
    let o = new Uint8Array(r)
      , c = "";
    for (let f = 0, h = o.length; f < h; f++)
        c += String.fromCharCode(o[f]);
    return zt(19, i, ga(btoa(c)), x, x, x, x, x, Po(a, 5), x, x, x)
}
function F1(a, i) {
    return {
        base: V1(a, i),
        child: void 0
    }
}
var I1 = class {
    constructor(a, i) {
        this._p = a,
        this.depth = i
    }
    parse(a) {
        return ne(this._p, this.depth, a)
    }
}
;
async function $1(a, i, r) {
    let o = [];
    for (let c = 0, f = r.length; c < f; c++)
        c in r ? o[c] = await ne(a, i, r[c]) : o[c] = 0;
    return o
}
async function W1(a, i, r, o) {
    return e1(r, o, await $1(a, i, o))
}
async function Ic(a, i, r) {
    let o = Object.entries(r)
      , c = []
      , f = [];
    for (let h = 0, p = o.length; h < p; h++)
        c.push(ga(o[h][0])),
        f.push(await ne(a, i, o[h][1]));
    return On in r && (c.push(Va(a.base, On)),
    f.push(u1(Q1(a.base), await ne(a, i, N1(r))))),
    Cn in r && (c.push(Va(a.base, Cn)),
    f.push(c1(Z1(a.base), await ne(a, i, k1(r))))),
    Gl in r && (c.push(Va(a.base, Gl)),
    f.push(qg(r[Gl]))),
    ql in r && (c.push(Va(a.base, ql)),
    f.push(r[ql] ? Dg : Lg)),
    {
        k: c,
        v: f
    }
}
async function wc(a, i, r, o, c) {
    return K1(r, o, c, await Ic(a, i, o))
}
async function tx(a, i, r, o) {
    return n1(r, await ne(a, i, o.valueOf()))
}
async function ex(a, i, r, o) {
    return a1(r, o, await ne(a, i, o.buffer))
}
async function nx(a, i, r, o) {
    return l1(r, o, await ne(a, i, o.buffer))
}
async function ax(a, i, r, o) {
    return i1(r, o, await ne(a, i, o.buffer))
}
async function Op(a, i, r, o) {
    let c = Hg(o, a.base.features);
    return r1(r, o, c ? await Ic(a, i, c) : x)
}
async function lx(a, i, r, o) {
    let c = Hg(o, a.base.features);
    return o1(r, o, c ? await Ic(a, i, c) : x)
}
async function ix(a, i, r, o) {
    let c = []
      , f = [];
    for (let[h,p] of o.entries())
        c.push(await ne(a, i, h)),
        f.push(await ne(a, i, p));
    return J1(a.base, r, c, f)
}
async function rx(a, i, r, o) {
    let c = [];
    for (let f of o.keys())
        c.push(await ne(a, i, f));
    return s1(r, c)
}
async function Qg(a, i, r, o) {
    let c = a.base.plugins;
    if (c)
        for (let f = 0, h = c.length; f < h; f++) {
            let p = c[f];
            if (p.parse.async && p.test(o))
                return t1(r, p.tag, await p.parse.async(o, new I1(a,i), {
                    id: r
                }))
        }
    return x
}
async function ox(a, i, r, o) {
    let[c,f] = await Y1(o);
    return zt(12, r, c, x, x, x, x, x, await ne(a, i, f), x, x, x)
}
function sx(a, i, r, o, c) {
    let f = []
      , h = r.on({
        next: p => {
            jo(this.base, i),
            ne(this, a, p).then(g => {
                f.push(d1(i, g))
            }
            , g => {
                c(g),
                h()
            }
            )
        }
        ,
        throw: p => {
            jo(this.base, i),
            ne(this, a, p).then(g => {
                f.push(h1(i, g)),
                o(f),
                h()
            }
            , g => {
                c(g),
                h()
            }
            )
        }
        ,
        return: p => {
            jo(this.base, i),
            ne(this, a, p).then(g => {
                f.push(m1(i, g)),
                o(f),
                h()
            }
            , g => {
                c(g),
                h()
            }
            )
        }
    })
}
async function ux(a, i, r, o) {
    return f1(r, Po(a.base, 4), await new Promise(sx.bind(a, i, r, o)))
}
async function cx(a, i, r, o) {
    let c = [];
    for (let f = 0, h = o.v.length; f < h; f++)
        c[f] = await ne(a, i, o.v[f]);
    return p1(r, c, o.t, o.d)
}
async function fx(a, i, r, o) {
    if (Array.isArray(o))
        return W1(a, i, r, o);
    if (H1(o))
        return ux(a, i, r, o);
    if (O1(o))
        return cx(a, i, r, o);
    let c = o.constructor;
    if (c === w1)
        return ne(a, i, o.replacement);
    let f = await Qg(a, i, r, o);
    if (f)
        return f;
    switch (c) {
    case Object:
        return wc(a, i, r, o, !1);
    case x:
        return wc(a, i, r, o, !0);
    case Date:
        return FS(r, o);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
        return Op(a, i, r, o);
    case Number:
    case Boolean:
    case String:
    case BigInt:
        return tx(a, i, r, o);
    case ArrayBuffer:
        return P1(a.base, r, o);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
        return ex(a, i, r, o);
    case DataView:
        return ax(a, i, r, o);
    case Map:
        return ix(a, i, r, o);
    case Set:
        return rx(a, i, r, o)
    }
    if (c === Promise || o instanceof Promise)
        return ox(a, i, r, o);
    let h = a.base.features;
    if (h & 32 && c === RegExp)
        return IS(r, o);
    if (h & 16)
        switch (c) {
        case BigInt64Array:
        case BigUint64Array:
            return nx(a, i, r, o)
        }
    if (h & 1 && typeof AggregateError < "u" && (c === AggregateError || o instanceof AggregateError))
        return lx(a, i, r, o);
    if (o instanceof Error)
        return Op(a, i, r, o);
    if (On in o || Cn in o)
        return wc(a, i, r, o, !!c);
    throw new Zo(o)
}
async function dx(a, i, r) {
    let o = Fc(a.base, r);
    if (o.type !== 0)
        return o.value;
    let c = await Qg(a, i, o.value, r);
    if (c)
        return c;
    throw new Zo(r)
}
async function ne(a, i, r) {
    switch (typeof r) {
    case "boolean":
        return r ? Dg : Lg;
    case "undefined":
        return LS;
    case "string":
        return qg(r);
    case "number":
        return KS(r);
    case "bigint":
        return JS(r);
    case "object":
        {
            if (r) {
                let o = Fc(a.base, r);
                return o.type === 0 ? await fx(a, i + 1, o.value, r) : o.value
            }
            return US
        }
    case "symbol":
        return Va(a.base, r);
    case "function":
        return dx(a, i, r);
    default:
        throw new Zo(r)
    }
}
async function hx(a, i) {
    try {
        return await ne(a, 0, i)
    } catch (r) {
        throw r instanceof Cp ? r : new Cp(r)
    }
}
var mx = (a => (a[a.Vanilla = 1] = "Vanilla",
a[a.Cross = 2] = "Cross",
a))(mx || {});
function Zg(a, i) {
    for (let r = 0, o = i.length; r < o; r++) {
        let c = i[r];
        a.has(c) || (a.add(c),
        c.extends && Zg(a, c.extends))
    }
}
function Kg(a) {
    if (a) {
        let i = new Set;
        return Zg(i, a),
        [...i]
    }
}
function px(a) {
    switch (a) {
    case "Int8Array":
        return Int8Array;
    case "Int16Array":
        return Int16Array;
    case "Int32Array":
        return Int32Array;
    case "Uint8Array":
        return Uint8Array;
    case "Uint16Array":
        return Uint16Array;
    case "Uint32Array":
        return Uint32Array;
    case "Uint8ClampedArray":
        return Uint8ClampedArray;
    case "Float32Array":
        return Float32Array;
    case "Float64Array":
        return Float64Array;
    case "BigInt64Array":
        return BigInt64Array;
    case "BigUint64Array":
        return BigUint64Array;
    default:
        throw new E1(a)
    }
}
var gx = 1e6
  , yx = 1e4
  , vx = 2e4;
function Jg(a, i) {
    switch (i) {
    case 3:
        return Object.freeze(a);
    case 1:
        return Object.preventExtensions(a);
    case 2:
        return Object.seal(a);
    default:
        return a
    }
}
var bx = 1e3;
function Sx(a, i) {
    var r;
    let o = i.refs || new Map;
    return "types"in o || Object.assign(o, {
        types: new Map
    }),
    {
        mode: a,
        plugins: i.plugins,
        refs: o,
        features: (r = i.features) != null ? r : 63 ^ (i.disabledFeatures || 0),
        depthLimit: i.depthLimit || bx
    }
}
function xx(a) {
    return {
        mode: 2,
        base: Sx(2, a),
        child: x
    }
}
var _x = class {
    constructor(a, i) {
        this._p = a,
        this.depth = i
    }
    deserialize(a) {
        return Bt(this._p, this.depth, a)
    }
}
;
function Pg(a, i) {
    if (i < 0 || !Number.isFinite(i) || !Number.isInteger(i))
        throw new jn({
            t: 4,
            i
        });
    if (a.refs.has(i))
        throw new Error("Conflicted ref id: " + i)
}
function Ex(a, i, r) {
    return Pg(a.base, i),
    a.state.marked.has(i) && a.base.refs.set(i, r),
    r
}
function Rx(a, i, r) {
    return Pg(a.base, i),
    a.base.refs.set(i, r),
    r
}
function ae(a, i, r) {
    return a.mode === 1 ? Ex(a, i, r) : Rx(a, i, r)
}
function kc(a, i, r) {
    if (Object.hasOwn(i, r))
        return i[r];
    throw new jn(a)
}
function wx(a, i) {
    return ae(a, i.i, QS(ya(i.s)))
}
function Tx(a, i, r) {
    let o = r.a
      , c = o.length
      , f = ae(a, r.i, new Array(c));
    for (let h = 0, p; h < c; h++)
        p = o[h],
        p && (f[h] = Bt(a, i, p));
    return Jg(f, r.o),
    f
}
function Ax(a) {
    switch (a) {
    case "constructor":
    case "__proto__":
    case "prototype":
    case "__defineGetter__":
    case "__defineSetter__":
    case "__lookupGetter__":
    case "__lookupSetter__":
        return !1;
    default:
        return !0
    }
}
function Mx(a) {
    switch (a) {
    case Cn:
    case ql:
    case Gl:
    case On:
        return !0;
    default:
        return !1
    }
}
function Np(a, i, r) {
    Ax(i) ? a[i] = r : Object.defineProperty(a, i, {
        value: r,
        configurable: !0,
        enumerable: !0,
        writable: !0
    })
}
function zx(a, i, r, o, c) {
    if (typeof o == "string")
        Np(r, ya(o), Bt(a, i, c));
    else {
        let f = Bt(a, i, o);
        switch (typeof f) {
        case "string":
            Np(r, f, Bt(a, i, c));
            break;
        case "symbol":
            Mx(f) && (r[f] = Bt(a, i, c));
            break;
        default:
            throw new jn(o)
        }
    }
}
function Fg(a, i, r) {
    a.base.refs.types.set(i, r)
}
function ar(a, i, r, o) {
    if (a.base.refs.types.get(r) !== o)
        throw new jn(i)
}
function Ig(a, i, r, o) {
    let c = r.k;
    if (c.length > 0)
        for (let f = 0, h = r.v, p = c.length; f < p; f++)
            zx(a, i, o, c[f], h[f]);
    return o
}
function Cx(a, i, r) {
    let o = ae(a, r.i, r.t === 10 ? {} : Object.create(null));
    return Ig(a, i, r.p, o),
    Jg(o, r.o),
    o
}
function Ox(a, i) {
    return ae(a, i.i, new Date(i.s))
}
function Nx(a, i) {
    if (a.base.features & 32) {
        let r = ya(i.c);
        if (r.length > vx)
            throw new jn(i);
        return ae(a, i.i, new RegExp(r,i.m))
    }
    throw new Yg(i)
}
function jx(a, i, r) {
    let o = ae(a, r.i, new Set);
    for (let c = 0, f = r.a, h = f.length; c < h; c++)
        o.add(Bt(a, i, f[c]));
    return o
}
function Dx(a, i, r) {
    let o = ae(a, r.i, new Map);
    for (let c = 0, f = r.e.k, h = r.e.v, p = f.length; c < p; c++)
        o.set(Bt(a, i, f[c]), Bt(a, i, h[c]));
    return o
}
function Lx(a, i) {
    if (i.s.length > gx)
        throw new jn(i);
    return ae(a, i.i, Vg(ya(i.s)))
}
function Ux(a, i, r) {
    var o;
    let c = px(r.c)
      , f = Bt(a, i, r.f)
      , h = (o = r.b) != null ? o : 0;
    if (h < 0 || h > f.byteLength)
        throw new jn(r);
    return ae(a, r.i, new c(f,h,r.l))
}
function Bx(a, i, r) {
    var o;
    let c = Bt(a, i, r.f)
      , f = (o = r.b) != null ? o : 0;
    if (f < 0 || f > c.byteLength)
        throw new jn(r);
    return ae(a, r.i, new DataView(c,f,r.l))
}
function $g(a, i, r, o) {
    if (r.p) {
        let c = Ig(a, i, r.p, {});
        Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
    }
    return o
}
function Hx(a, i, r) {
    let o = ae(a, r.i, new AggregateError([],ya(r.m)));
    return $g(a, i, r, o)
}
function kx(a, i, r) {
    let o = kc(r, DS, r.s)
      , c = ae(a, r.i, new o(ya(r.m)));
    return $g(a, i, r, c)
}
function qx(a, i, r) {
    let o = Ko()
      , c = ae(a, r.i, o.p)
      , f = Bt(a, i, r.f);
    return r.s ? o.s(f) : o.f(f),
    c
}
function Gx(a, i, r) {
    return ae(a, r.i, Object(Bt(a, i, r.f)))
}
function Yx(a, i, r) {
    let o = a.base.plugins;
    if (o) {
        let c = ya(r.c);
        for (let f = 0, h = o.length; f < h; f++) {
            let p = o[f];
            if (p.tag === c)
                return ae(a, r.i, p.deserialize(r.s, new _x(a,i), {
                    id: r.i
                }))
        }
    }
    throw new S1(r.c)
}
function Vx(a, i) {
    let r = ae(a, i.i, ae(a, i.s, Ko()).p);
    return Fg(a, i.s, 22),
    r
}
function Xx(a, i, r) {
    let o = a.base.refs.get(r.i);
    if (o)
        return ar(a, r, r.i, 22),
        o.s(Bt(a, i, r.a[1])),
        x;
    throw new nr("Promise")
}
function Qx(a, i, r) {
    let o = a.base.refs.get(r.i);
    if (o)
        return ar(a, r, r.i, 22),
        o.f(Bt(a, i, r.a[1])),
        x;
    throw new nr("Promise")
}
function Zx(a, i, r) {
    Bt(a, i, r.a[0]);
    let o = Bt(a, i, r.a[1]);
    return D1(o)
}
function Kx(a, i, r) {
    Bt(a, i, r.a[0]);
    let o = Bt(a, i, r.a[1]);
    return G1(o)
}
function Jx(a, i, r) {
    let o = ae(a, r.i, Ka());
    Fg(a, r.i, 31);
    let c = r.a
      , f = c.length;
    if (f)
        for (let h = 0; h < f; h++)
            Bt(a, i, c[h]);
    return o
}
function Px(a, i, r) {
    let o = a.base.refs.get(r.i);
    if (o)
        return ar(a, r, r.i, 31),
        o.next(Bt(a, i, r.f)),
        x;
    throw new nr("Stream")
}
function Fx(a, i, r) {
    let o = a.base.refs.get(r.i);
    if (o)
        return ar(a, r, r.i, 31),
        o.throw(Bt(a, i, r.f)),
        x;
    throw new nr("Stream")
}
function Ix(a, i, r) {
    let o = a.base.refs.get(r.i);
    if (o)
        return ar(a, r, r.i, 31),
        o.return(Bt(a, i, r.f)),
        x;
    throw new nr("Stream")
}
function $x(a, i, r) {
    return Bt(a, i, r.f),
    x
}
function Wx(a, i, r) {
    return Bt(a, i, r.a[1]),
    x
}
function t_(a, i, r) {
    let o = ae(a, r.i, Xg([], r.s, r.l));
    for (let c = 0, f = r.a.length; c < f; c++)
        o.v[c] = Bt(a, i, r.a[c]);
    return o
}
function Bt(a, i, r) {
    if (i > a.base.depthLimit)
        throw new R1(a.base.depthLimit);
    switch (i += 1,
    r.t) {
    case 2:
        return kc(r, NS, r.s);
    case 0:
        return Number(r.s);
    case 1:
        return ya(String(r.s));
    case 3:
        if (String(r.s).length > yx)
            throw new jn(r);
        return BigInt(r.s);
    case 4:
        return a.base.refs.get(r.i);
    case 18:
        return wx(a, r);
    case 9:
        return Tx(a, i, r);
    case 10:
    case 11:
        return Cx(a, i, r);
    case 5:
        return Ox(a, r);
    case 6:
        return Nx(a, r);
    case 7:
        return jx(a, i, r);
    case 8:
        return Dx(a, i, r);
    case 19:
        return Lx(a, r);
    case 16:
    case 15:
        return Ux(a, i, r);
    case 20:
        return Bx(a, i, r);
    case 14:
        return Hx(a, i, r);
    case 13:
        return kx(a, i, r);
    case 12:
        return qx(a, i, r);
    case 17:
        return kc(r, OS, r.s);
    case 21:
        return Gx(a, i, r);
    case 25:
        return Yx(a, i, r);
    case 22:
        return Vx(a, r);
    case 23:
        return Xx(a, i, r);
    case 24:
        return Qx(a, i, r);
    case 28:
        return Zx(a, i, r);
    case 30:
        return Kx(a, i, r);
    case 31:
        return Jx(a, i, r);
    case 32:
        return Px(a, i, r);
    case 33:
        return Fx(a, i, r);
    case 34:
        return Ix(a, i, r);
    case 27:
        return $x(a, i, r);
    case 29:
        return Wx(a, i, r);
    case 35:
        return t_(a, i, r);
    default:
        throw new Yg(r)
    }
}
function e_(a, i) {
    try {
        return Bt(a, 0, i)
    } catch (r) {
        throw new b1(r)
    }
}
var n_ = () => T;
n_.toString();
function jp(a, i) {
    let r = Kg(i.plugins)
      , o = xx({
        plugins: r,
        refs: i.refs,
        features: i.features,
        disabledFeatures: i.disabledFeatures,
        depthLimit: i.depthLimit
    });
    return e_(o, a)
}
async function a_(a, i={}) {
    let r = Kg(i.plugins)
      , o = F1(1, {
        plugins: r,
        disabledFeatures: i.disabledFeatures
    });
    return {
        t: await hx(o, a),
        f: o.base.features,
        m: Array.from(o.base.marked)
    }
}
function l_(a) {
    return {
        tag: "$TSR/t/" + a.key,
        test: a.test,
        parse: {
            sync(i, r, o) {
                return {
                    v: r.parse(a.toSerializable(i))
                }
            },
            async async(i, r, o) {
                return {
                    v: await r.parse(a.toSerializable(i))
                }
            },
            stream(i, r, o) {
                return {
                    v: r.parse(a.toSerializable(i))
                }
            }
        },
        serialize: void 0,
        deserialize(i, r, o) {
            return a.fromSerializable(r.deserialize(i.v))
        }
    }
}
var i_ = class {
    constructor(a, i) {
        this.stream = a,
        this.hint = i?.hint ?? "binary"
    }
}
  , ko = globalThis.Buffer
  , Wg = !!ko && typeof ko.from == "function";
function ty(a) {
    if (a.length === 0)
        return "";
    if (Wg)
        return ko.from(a).toString("base64");
    const i = 32768
      , r = [];
    for (let o = 0; o < a.length; o += i) {
        const c = a.subarray(o, o + i);
        r.push(String.fromCharCode.apply(null, c))
    }
    return btoa(r.join(""))
}
function ey(a) {
    if (a.length === 0)
        return new Uint8Array(0);
    if (Wg) {
        const o = ko.from(a, "base64");
        return new Uint8Array(o.buffer,o.byteOffset,o.byteLength)
    }
    const i = atob(a)
      , r = new Uint8Array(i.length);
    for (let o = 0; o < i.length; o++)
        r[o] = i.charCodeAt(o);
    return r
}
var Qi = Object.create(null)
  , Zi = Object.create(null)
  , r_ = a => new ReadableStream({
    start(i) {
        a.on({
            next(r) {
                try {
                    i.enqueue(ey(r))
                } catch {}
            },
            throw(r) {
                i.error(r)
            },
            return() {
                try {
                    i.close()
                } catch {}
            }
        })
    }
})
  , o_ = new TextEncoder
  , s_ = a => new ReadableStream({
    start(i) {
        a.on({
            next(r) {
                try {
                    typeof r == "string" ? i.enqueue(o_.encode(r)) : i.enqueue(ey(r.$b64))
                } catch {}
            },
            throw(r) {
                i.error(r)
            },
            return() {
                try {
                    i.close()
                } catch {}
            }
        })
    }
})
  , u_ = "(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))"
  , c_ = "(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})";
function Dp(a) {
    const i = Ka()
      , r = a.getReader();
    return (async () => {
        try {
            for (; ; ) {
                const {done: o, value: c} = await r.read();
                if (o) {
                    i.return(void 0);
                    break
                }
                i.next(ty(c))
            }
        } catch (o) {
            i.throw(o)
        } finally {
            r.releaseLock()
        }
    }
    )(),
    i
}
function Lp(a) {
    const i = Ka()
      , r = a.getReader()
      , o = new TextDecoder("utf-8",{
        fatal: !0
    });
    return (async () => {
        try {
            for (; ; ) {
                const {done: c, value: f} = await r.read();
                if (c) {
                    try {
                        const h = o.decode();
                        h.length > 0 && i.next(h)
                    } catch {}
                    i.return(void 0);
                    break
                }
                try {
                    const h = o.decode(f, {
                        stream: !0
                    });
                    h.length > 0 && i.next(h)
                } catch {
                    i.next({
                        $b64: ty(f)
                    })
                }
            }
        } catch (c) {
            i.throw(c)
        } finally {
            r.releaseLock()
        }
    }
    )(),
    i
}
var f_ = {
    tag: "tss/RawStream",
    extends: [{
        tag: "tss/RawStreamFactory",
        test(a) {
            return a === Qi
        },
        parse: {
            sync(a, i, r) {
                return {}
            },
            async async(a, i, r) {
                return {}
            },
            stream(a, i, r) {
                return {}
            }
        },
        serialize(a, i, r) {
            return u_
        },
        deserialize(a, i, r) {
            return Qi
        }
    }, {
        tag: "tss/RawStreamFactoryText",
        test(a) {
            return a === Zi
        },
        parse: {
            sync(a, i, r) {
                return {}
            },
            async async(a, i, r) {
                return {}
            },
            stream(a, i, r) {
                return {}
            }
        },
        serialize(a, i, r) {
            return c_
        },
        deserialize(a, i, r) {
            return Zi
        }
    }],
    test(a) {
        return a instanceof i_
    },
    parse: {
        sync(a, i, r) {
            const o = a.hint === "text" ? Zi : Qi;
            return {
                hint: i.parse(a.hint),
                factory: i.parse(o),
                stream: i.parse(Ka())
            }
        },
        async async(a, i, r) {
            const o = a.hint === "text" ? Zi : Qi
              , c = a.hint === "text" ? Lp(a.stream) : Dp(a.stream);
            return {
                hint: await i.parse(a.hint),
                factory: await i.parse(o),
                stream: await i.parse(c)
            }
        },
        stream(a, i, r) {
            const o = a.hint === "text" ? Zi : Qi
              , c = a.hint === "text" ? Lp(a.stream) : Dp(a.stream);
            return {
                hint: i.parse(a.hint),
                factory: i.parse(o),
                stream: i.parse(c)
            }
        }
    },
    serialize(a, i, r) {
        return "(" + i.serialize(a.factory) + ")(" + i.serialize(a.stream) + ")"
    },
    deserialize(a, i, r) {
        const o = i.deserialize(a.stream);
        return i.deserialize(a.hint) === "text" ? s_(o) : r_(o)
    }
};
function d_(a) {
    return {
        tag: "tss/RawStream",
        test: () => !1,
        parse: {},
        serialize() {
            throw new Error("RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.")
        },
        deserialize(i, r, o) {
            return a(typeof r?.deserialize == "function" ? r.deserialize(i.streamId) : i.streamId)
        }
    }
}
var h_ = {
    tag: "$TSR/Error",
    test(a) {
        return a instanceof Error
    },
    parse: {
        sync(a, i) {
            return {
                message: i.parse(a.message)
            }
        },
        async async(a, i) {
            return {
                message: await i.parse(a.message)
            }
        },
        stream(a, i) {
            return {
                message: i.parse(a.message)
            }
        }
    },
    serialize(a, i) {
        return "new Error(" + i.serialize(a.message) + ")"
    },
    deserialize(a, i) {
        return new Error(i.deserialize(a.message))
    }
}
  , ua = {}
  , ny = a => new ReadableStream({
    start: i => {
        a.on({
            next: r => {
                try {
                    i.enqueue(r)
                } catch {}
            }
            ,
            throw: r => {
                i.error(r)
            }
            ,
            return: () => {
                try {
                    i.close()
                } catch {}
            }
        })
    }
})
  , m_ = {
    tag: "seroval-plugins/web/ReadableStreamFactory",
    test(a) {
        return a === ua
    },
    parse: {
        sync() {
            return ua
        },
        async async() {
            return await Promise.resolve(ua)
        },
        stream() {
            return ua
        }
    },
    serialize() {
        return ny.toString()
    },
    deserialize() {
        return ua
    }
};
function Up(a) {
    let i = Ka()
      , r = a.getReader();
    async function o() {
        try {
            let c = await r.read();
            c.done ? i.return(c.value) : (i.next(c.value),
            await o())
        } catch (c) {
            i.throw(c)
        }
    }
    return o().catch( () => {}
    ),
    i
}
var p_ = {
    tag: "seroval/plugins/web/ReadableStream",
    extends: [m_],
    test(a) {
        return typeof ReadableStream > "u" ? !1 : a instanceof ReadableStream
    },
    parse: {
        sync(a, i) {
            return {
                factory: i.parse(ua),
                stream: i.parse(Ka())
            }
        },
        async async(a, i) {
            return {
                factory: await i.parse(ua),
                stream: await i.parse(Up(a))
            }
        },
        stream(a, i) {
            return {
                factory: i.parse(ua),
                stream: i.parse(Up(a))
            }
        }
    },
    serialize(a, i) {
        return "(" + i.serialize(a.factory) + ")(" + i.serialize(a.stream) + ")"
    },
    deserialize(a, i) {
        let r = i.deserialize(a.stream);
        return ny(r)
    }
}
  , g_ = p_
  , y_ = [h_, f_, g_];
function v_() {
    return [...cg()?.serializationAdapters?.map(l_) ?? [], ...y_]
}
var Bp = new TextDecoder
  , b_ = new Uint8Array(0)
  , Hp = 16 * 1024 * 1024
  , kp = 32 * 1024 * 1024
  , qp = 1024
  , Gp = 1e5;
function S_(a) {
    const i = new Map
      , r = new Map
      , o = new Set;
    let c = !1, f = null, h = 0, p;
    const g = new ReadableStream({
        start(y) {
            p = y
        },
        cancel() {
            c = !0;
            try {
                f?.cancel()
            } catch {}
            i.forEach(y => {
                try {
                    y.error(new Error("Framed response cancelled"))
                } catch {}
            }
            ),
            i.clear(),
            r.clear(),
            o.clear()
        }
    });
    function m(y) {
        const S = r.get(y);
        if (S)
            return S;
        if (o.has(y))
            return new ReadableStream({
                start(w) {
                    w.close()
                }
            });
        if (r.size >= qp)
            throw new Error(`Too many raw streams in framed response (max ${qp})`);
        const _ = new ReadableStream({
            start(w) {
                i.set(y, w)
            },
            cancel() {
                o.add(y),
                i.delete(y),
                r.delete(y)
            }
        });
        return r.set(y, _),
        _
    }
    function b(y) {
        return m(y),
        i.get(y)
    }
    return (async () => {
        const y = a.getReader();
        f = y;
        const S = [];
        let _ = 0;
        function w() {
            if (_ < 9)
                return null;
            const E = S[0];
            if (E.length >= 9)
                return {
                    type: E[0],
                    streamId: (E[1] << 24 | E[2] << 16 | E[3] << 8 | E[4]) >>> 0,
                    length: (E[5] << 24 | E[6] << 16 | E[7] << 8 | E[8]) >>> 0
                };
            const z = new Uint8Array(9);
            let V = 0
              , Q = 9;
            for (let k = 0; k < S.length && Q > 0; k++) {
                const W = S[k]
                  , P = Math.min(W.length, Q);
                z.set(W.subarray(0, P), V),
                V += P,
                Q -= P
            }
            return {
                type: z[0],
                streamId: (z[1] << 24 | z[2] << 16 | z[3] << 8 | z[4]) >>> 0,
                length: (z[5] << 24 | z[6] << 16 | z[7] << 8 | z[8]) >>> 0
            }
        }
        function C(E) {
            if (E === 0)
                return b_;
            const z = new Uint8Array(E);
            let V = 0
              , Q = E;
            for (; Q > 0 && S.length > 0; ) {
                const k = S[0];
                if (!k)
                    break;
                const W = Math.min(k.length, Q);
                z.set(k.subarray(0, W), V),
                V += W,
                Q -= W,
                W === k.length ? S.shift() : S[0] = k.subarray(W)
            }
            return _ -= E,
            z
        }
        try {
            for (; ; ) {
                const {done: E, value: z} = await y.read();
                if (c || E)
                    break;
                if (z) {
                    if (_ + z.length > kp)
                        throw new Error(`Framed response buffer exceeded ${kp} bytes`);
                    for (S.push(z),
                    _ += z.length; ; ) {
                        const V = w();
                        if (!V)
                            break;
                        const {type: Q, streamId: k, length: W} = V;
                        if (Q !== Mn.JSON && Q !== Mn.CHUNK && Q !== Mn.END && Q !== Mn.ERROR)
                            throw new Error(`Unknown frame type: ${Q}`);
                        if (Q === Mn.JSON) {
                            if (k !== 0)
                                throw new Error("Invalid JSON frame streamId (expected 0)")
                        } else if (k === 0)
                            throw new Error("Invalid raw frame streamId (expected non-zero)");
                        if (W > Hp)
                            throw new Error(`Frame payload too large: ${W} bytes (max ${Hp})`);
                        const P = 9 + W;
                        if (_ < P)
                            break;
                        if (++h > Gp)
                            throw new Error(`Too many frames in framed response (max ${Gp})`);
                        C(9);
                        const X = C(W);
                        switch (Q) {
                        case Mn.JSON:
                            try {
                                p.enqueue(Bp.decode(X))
                            } catch {}
                            break;
                        case Mn.CHUNK:
                            {
                                const H = b(k);
                                H && H.enqueue(X);
                                break
                            }
                        case Mn.END:
                            {
                                const H = b(k);
                                if (o.add(k),
                                H) {
                                    try {
                                        H.close()
                                    } catch {}
                                    i.delete(k)
                                }
                                break
                            }
                        case Mn.ERROR:
                            {
                                const H = b(k);
                                if (o.add(k),
                                H) {
                                    const J = Bp.decode(X);
                                    H.error(new Error(J)),
                                    i.delete(k)
                                }
                                break
                            }
                        }
                    }
                }
            }
            if (_ !== 0)
                throw new Error("Incomplete frame at end of framed response");
            try {
                p.close()
            } catch {}
            i.forEach(E => {
                try {
                    E.close()
                } catch {}
            }
            ),
            i.clear()
        } catch (E) {
            try {
                p.error(E)
            } catch {}
            i.forEach(z => {
                try {
                    z.error(E)
                } catch {}
            }
            ),
            i.clear()
        } finally {
            try {
                y.releaseLock()
            } catch {}
            f = null
        }
    }
    )(),
    {
        getOrCreateStream: m,
        jsonChunks: g
    }
}
var tr = null;
async function qc(a) {
    a.length > 0 && await Promise.allSettled(a)
}
var x_ = Object.prototype.hasOwnProperty;
function ay(a) {
    for (const i in a)
        if (x_.call(a, i))
            return !0;
    return !1
}
async function __(a, i, r) {
    tr || (tr = v_());
    const o = i[0]
      , c = o.fetch ?? r
      , f = o.data instanceof FormData ? "formData" : "payload"
      , h = o.headers ? new Headers(o.headers) : new Headers;
    if (h.set("x-tsr-serverFn", "true"),
    f === "payload" && h.set("accept", `${bb}, application/x-ndjson, application/json`),
    o.method === "GET") {
        if (f === "formData")
            throw new Error("FormData is not supported with GET requests");
        const g = await ly(o);
        if (g !== void 0) {
            const m = gg({
                payload: g
            });
            a.includes("?") ? a += `&${m}` : a += `?${m}`
        }
    }
    let p;
    if (o.method === "POST") {
        const g = await E_(o);
        g?.contentType && h.set("content-type", g.contentType),
        p = g?.body
    }
    return await R_(async () => c(a, {
        method: o.method,
        headers: h,
        signal: o.signal,
        body: p
    }))
}
async function ly(a) {
    let i = !1;
    const r = {};
    if (a.data !== void 0 && (i = !0,
    r.data = a.data),
    a.context && ay(a.context) && (i = !0,
    r.context = a.context),
    i)
        return iy(r)
}
async function iy(a) {
    return JSON.stringify(await Promise.resolve(a_(a, {
        plugins: tr
    })))
}
async function E_(a) {
    if (a.data instanceof FormData) {
        let r;
        return a.context && ay(a.context) && (r = await iy(a.context)),
        r !== void 0 && a.data.set(vb, r),
        {
            body: a.data
        }
    }
    const i = await ly(a);
    if (i)
        return {
            body: i,
            contentType: "application/json"
        }
}
async function R_(a) {
    let i;
    try {
        i = await a()
    } catch (o) {
        if (o instanceof Response)
            i = o;
        else
            throw console.log(o),
            o
    }
    if (i.headers.get("x-tss-raw") === "true")
        return i;
    const r = i.headers.get("content-type");
    if (r || Me(),
    i.headers.get("x-tss-serialized")) {
        let o;
        if (r.includes("application/x-tss-framed")) {
            if (_b(r),
            !i.body)
                throw new Error("No response body for framed response");
            const {getOrCreateStream: c, jsonChunks: f} = S_(i.body)
              , h = [d_(c), ...tr || []]
              , p = new Map;
            o = await w_({
                jsonStream: f,
                onMessage: g => jp(g, {
                    refs: p,
                    plugins: h
                }),
                onError(g, m) {
                    console.error(g, m)
                }
            })
        } else if (r.includes("application/json")) {
            const c = await i.json()
              , f = [];
            o = jp(c, {
                plugins: tr
            }),
            await qc(f)
        }
        if (o || Me(),
        o instanceof Error)
            throw o;
        return o
    }
    if (r.includes("application/json")) {
        const o = await i.json()
          , c = lS(o);
        if (c)
            throw c;
        if (re(o))
            throw o;
        return o
    }
    if (!i.ok)
        throw new Error(await i.text());
    return i
}
async function w_({jsonStream: a, onMessage: i, onError: r}) {
    const o = a.getReader()
      , {value: c, done: f} = await o.read();
    if (f || !c)
        throw new Error("Stream ended before first object");
    const h = JSON.parse(c);
    let p = !1;
    const g = (async () => {
        try {
            for (; ; ) {
                const {value: y, done: S} = await o.read();
                if (S)
                    break;
                if (y)
                    try {
                        const _ = [];
                        try {
                            i(JSON.parse(y))
                        } finally {}
                        await qc(_)
                    } catch (_) {
                        r?.(`Invalid JSON: ${y}`, _)
                    }
            }
        } catch (y) {
            p || r?.("Stream processing error:", y)
        }
    }
    )();
    let m;
    const b = [];
    try {
        m = i(h)
    } catch (y) {
        throw p = !0,
        o.cancel().catch( () => {}
        ),
        y
    }
    return await qc(b),
    Promise.resolve(m).catch( () => {
        p = !0,
        o.cancel().catch( () => {}
        )
    }
    ),
    g.finally( () => {
        try {
            o.releaseLock()
        } catch {}
    }
    ),
    m
}
function T_(a) {
    const i = "/_serverFn/" + a;
    return Object.assign( (...c) => {
        const f = cg()?.serverFns?.fetch;
        return __(i, c, f ?? fetch)
    }
    , {
        url: i,
        serverFnMeta: {
            id: a
        },
        [Uc]: !0
    })
}
var A_ = {
    key: "$TSS/serverfn",
    test: a => typeof a != "function" || !(Uc in a) ? !1 : !!a[Uc],
    toSerializable: ({serverFnMeta: a}) => ({
        functionId: a.id
    }),
    fromSerializable: ({functionId: a}) => T_(a)
};
function Yp(a) {
    return a.replaceAll("\0", "/").replaceAll("�", "/")
}
function M_(a, i) {
    a.id = i.i,
    a.__beforeLoadContext = i.b,
    a.loaderData = i.l,
    a.status = i.s,
    a.ssr = i.ssr,
    a.updatedAt = i.u,
    a.error = i.e,
    i.g !== void 0 && (a.globalNotFound = i.g)
}
async function z_(a) {
    window.$_TSR || Me();
    const i = a.options.serializationAdapters;
    if (i?.length) {
        const E = new Map;
        i.forEach(z => {
            E.set(z.key, z.fromSerializable)
        }
        ),
        window.$_TSR.t = E,
        window.$_TSR.buffer.forEach(z => z())
    }
    window.$_TSR.initialized = !0,
    window.$_TSR.router || Me();
    const r = window.$_TSR.router;
    r.matches.forEach(E => {
        E.i = Yp(E.i)
    }
    ),
    r.lastMatchId && (r.lastMatchId = Yp(r.lastMatchId));
    const {manifest: o, dehydratedData: c, lastMatchId: f} = r;
    a.ssr = {
        manifest: o
    };
    const h = document.querySelector('meta[property="csp-nonce"]')?.content;
    a.options.ssr = {
        nonce: h
    };
    const p = a.matchRoutes(a.stores.location.get())
      , g = Promise.all(p.map(E => a.loadRouteChunk(a.looseRoutesById[E.routeId])));
    function m(E) {
        const z = a.looseRoutesById[E.routeId].options.pendingMinMs ?? a.options.defaultPendingMinMs;
        if (z) {
            const V = Za();
            E._nonReactive.minPendingPromise = V,
            E._forcePending = !0,
            setTimeout( () => {
                V.resolve(),
                a.updateMatch(E.id, Q => (Q._nonReactive.minPendingPromise = void 0,
                {
                    ...Q,
                    _forcePending: void 0
                }))
            }
            , z)
        }
    }
    function b(E) {
        const z = a.looseRoutesById[E.routeId];
        z && (z.options.ssr = E.ssr)
    }
    let y;
    p.forEach(E => {
        const z = r.matches.find(V => V.i === E.id);
        if (!z) {
            E._nonReactive.dehydrated = !1,
            E.ssr = !1,
            b(E);
            return
        }
        M_(E, z),
        b(E),
        E._nonReactive.dehydrated = E.ssr !== !1,
        (E.ssr === "data-only" || E.ssr === !1) && y === void 0 && (y = E.index,
        m(E))
    }
    ),
    a.stores.setMatches(p),
    await a.options.hydrate?.(c);
    const S = a.stores.matches.get()
      , _ = a.stores.location.get();
    await Promise.all(S.map(async E => {
        try {
            const z = a.looseRoutesById[E.routeId]
              , V = S[E.index - 1]?.context ?? a.options.context;
            if (z.options.context) {
                const P = {
                    deps: E.loaderDeps,
                    params: E.params,
                    context: V ?? {},
                    location: _,
                    navigate: X => a.navigate({
                        ...X,
                        _fromLocation: _
                    }),
                    buildLocation: a.buildLocation,
                    cause: E.cause,
                    abortController: E.abortController,
                    preload: !1,
                    matches: p,
                    routeId: z.id
                };
                E.__routeContext = z.options.context(P) ?? void 0
            }
            E.context = {
                ...V,
                ...E.__routeContext,
                ...E.__beforeLoadContext
            };
            const Q = {
                ssr: a.options.ssr,
                matches: S,
                match: E,
                params: E.params,
                loaderData: E.loaderData
            }
              , k = await z.options.head?.(Q)
              , W = await z.options.scripts?.(Q);
            E.meta = k?.meta,
            E.links = k?.links,
            E.headScripts = k?.scripts,
            E.styles = k?.styles,
            E.scripts = W
        } catch (z) {
            if (re(z))
                E.error = {
                    isNotFound: !0
                },
                console.error(`NotFound error during hydration for routeId: ${E.routeId}`, z);
            else
                throw E.error = z,
                console.error(`Error during hydration for route ${E.routeId}:`, z),
                z
        }
    }
    ));
    const w = p[p.length - 1].id !== f;
    if (!p.some(E => E.ssr === !1) && !w)
        return p.forEach(E => {
            E._nonReactive.dehydrated = void 0
        }
        ),
        a.stores.resolvedLocation.set(a.stores.location.get()),
        g;
    const C = Promise.resolve().then( () => a.load()).catch(E => {
        console.error("Error during router hydration:", E)
    }
    );
    if (w) {
        const E = p[1];
        E || Me(),
        m(E),
        E._displayPending = !0,
        E._nonReactive.displayPendingPromise = C,
        C.then( () => {
            a.batch( () => {
                a.stores.status.get() === "pending" && (a.stores.status.set("idle"),
                a.stores.resolvedLocation.set(a.stores.location.get())),
                a.updateMatch(E.id, z => ({
                    ...z,
                    _displayPending: void 0,
                    displayPendingPromise: void 0
                }))
            }
            )
        }
        )
    }
    return g
}
var qo = $.use
  , Pi = typeof window < "u" ? $.useLayoutEffect : $.useEffect;
function Tc(a) {
    const i = $.useRef({
        value: a,
        prev: null
    })
      , r = i.current.value;
    return a !== r && (i.current = {
        value: a,
        prev: r
    }),
    i.current.prev
}
function C_(a, i, r={}, o={}) {
    $.useEffect( () => {
        if (!a.current || o.disabled || typeof IntersectionObserver != "function")
            return;
        const c = new IntersectionObserver( ([f]) => {
            i(f)
        }
        ,r);
        return c.observe(a.current),
        () => {
            c.disconnect()
        }
    }
    , [i, r, o.disabled, a])
}
function O_(a) {
    const i = $.useRef(null);
    return $.useImperativeHandle(a, () => i.current, []),
    i
}
function N_({promise: a}) {
    if (qo)
        return qo(a);
    const i = wS(a);
    if (i[on].status === "pending")
        throw i;
    if (i[on].status === "error")
        throw i[on].error;
    return i[on].data
}
function j_(a) {
    const i = N.jsx(D_, {
        ...a
    });
    return a.fallback ? N.jsx($.Suspense, {
        fallback: a.fallback,
        children: i
    }) : i
}
function D_(a) {
    const i = N_(a);
    return a.children(i)
}
function $c(a) {
    const i = a.errorComponent ?? Wc;
    return N.jsx(L_, {
        getResetKey: a.getResetKey,
        onCatch: a.onCatch,
        children: ({error: r, reset: o}) => r ? $.createElement(i, {
            error: r,
            reset: o
        }) : a.children
    })
}
var L_ = class extends $.Component {
    constructor(...a) {
        super(...a),
        this.state = {
            error: null
        }
    }
    static getDerivedStateFromProps(a, i) {
        const r = a.getResetKey();
        return i.error && i.resetKey !== r ? {
            resetKey: r,
            error: null
        } : {
            resetKey: r
        }
    }
    static getDerivedStateFromError(a) {
        return {
            error: a
        }
    }
    reset() {
        this.setState({
            error: null
        })
    }
    componentDidCatch(a, i) {
        this.props.onCatch && this.props.onCatch(a, i)
    }
    render() {
        return this.props.children({
            error: this.state.error,
            reset: () => {
                this.reset()
            }
        })
    }
}
;
function Wc({error: a}) {
    const [i,r] = $.useState(!1);
    return N.jsxs("div", {
        style: {
            padding: ".5rem",
            maxWidth: "100%"
        },
        children: [N.jsxs("div", {
            style: {
                display: "flex",
                alignItems: "center",
                gap: ".5rem"
            },
            children: [N.jsx("strong", {
                style: {
                    fontSize: "1rem"
                },
                children: "Something went wrong!"
            }), N.jsx("button", {
                style: {
                    appearance: "none",
                    fontSize: ".6em",
                    border: "1px solid currentColor",
                    padding: ".1rem .2rem",
                    fontWeight: "bold",
                    borderRadius: ".25rem"
                },
                onClick: () => r(o => !o),
                children: i ? "Hide Error" : "Show Error"
            })]
        }), N.jsx("div", {
            style: {
                height: ".25rem"
            }
        }), i ? N.jsx("div", {
            children: N.jsx("pre", {
                style: {
                    fontSize: ".7em",
                    border: "1px solid red",
                    borderRadius: ".25rem",
                    padding: ".3rem",
                    color: "red",
                    overflow: "auto"
                },
                children: a.message ? N.jsx("code", {
                    children: a.message
                }) : null
            })
        }) : null]
    })
}
function U_({children: a, fallback: i=null}) {
    return tf() ? N.jsx(Yl.Fragment, {
        children: a
    }) : N.jsx(Yl.Fragment, {
        children: i
    })
}
function tf() {
    return Yl.useSyncExternalStore(B_, () => !0, () => !1)
}
function B_() {
    return () => {}
}
var ry = $.createContext(null);
function pe(a) {
    return $.useContext(ry)
}
var Fo = $.createContext(void 0)
  , H_ = $.createContext(void 0)
  , Xt = (a => (a[a.None = 0] = "None",
a[a.Mutable = 1] = "Mutable",
a[a.Watching = 2] = "Watching",
a[a.RecursedCheck = 4] = "RecursedCheck",
a[a.Recursed = 8] = "Recursed",
a[a.Dirty = 16] = "Dirty",
a[a.Pending = 32] = "Pending",
a))(Xt || {});
function k_({update: a, notify: i, unwatched: r}) {
    return {
        link: o,
        unlink: c,
        propagate: f,
        checkDirty: h,
        shallowPropagate: p
    };
    function o(m, b, y) {
        const S = b.depsTail;
        if (S !== void 0 && S.dep === m)
            return;
        const _ = S !== void 0 ? S.nextDep : b.deps;
        if (_ !== void 0 && _.dep === m) {
            _.version = y,
            b.depsTail = _;
            return
        }
        const w = m.subsTail;
        if (w !== void 0 && w.version === y && w.sub === b)
            return;
        const C = b.depsTail = m.subsTail = {
            version: y,
            dep: m,
            sub: b,
            prevDep: S,
            nextDep: _,
            prevSub: w,
            nextSub: void 0
        };
        _ !== void 0 && (_.prevDep = C),
        S !== void 0 ? S.nextDep = C : b.deps = C,
        w !== void 0 ? w.nextSub = C : m.subs = C
    }
    function c(m, b=m.sub) {
        const y = m.dep
          , S = m.prevDep
          , _ = m.nextDep
          , w = m.nextSub
          , C = m.prevSub;
        return _ !== void 0 ? _.prevDep = S : b.depsTail = S,
        S !== void 0 ? S.nextDep = _ : b.deps = _,
        w !== void 0 ? w.prevSub = C : y.subsTail = C,
        C !== void 0 ? C.nextSub = w : (y.subs = w) === void 0 && r(y),
        _
    }
    function f(m) {
        let b = m.nextSub, y;
        t: do {
            const S = m.sub;
            let _ = S.flags;
            if (_ & 60 ? _ & 12 ? _ & 4 ? !(_ & 48) && g(m, S) ? (S.flags = _ | 40,
            _ &= 1) : _ = 0 : S.flags = _ & -9 | 32 : _ = 0 : S.flags = _ | 32,
            _ & 2 && i(S),
            _ & 1) {
                const w = S.subs;
                if (w !== void 0) {
                    const C = (m = w).nextSub;
                    C !== void 0 && (y = {
                        value: b,
                        prev: y
                    },
                    b = C);
                    continue
                }
            }
            if ((m = b) !== void 0) {
                b = m.nextSub;
                continue
            }
            for (; y !== void 0; )
                if (m = y.value,
                y = y.prev,
                m !== void 0) {
                    b = m.nextSub;
                    continue t
                }
            break
        } while (!0)
    }
    function h(m, b) {
        let y, S = 0, _ = !1;
        t: do {
            const w = m.dep
              , C = w.flags;
            if (b.flags & 16)
                _ = !0;
            else if ((C & 17) === 17) {
                if (a(w)) {
                    const E = w.subs;
                    E.nextSub !== void 0 && p(E),
                    _ = !0
                }
            } else if ((C & 33) === 33) {
                (m.nextSub !== void 0 || m.prevSub !== void 0) && (y = {
                    value: m,
                    prev: y
                }),
                m = w.deps,
                b = w,
                ++S;
                continue
            }
            if (!_) {
                const E = m.nextDep;
                if (E !== void 0) {
                    m = E;
                    continue
                }
            }
            for (; S--; ) {
                const E = b.subs
                  , z = E.nextSub !== void 0;
                if (z ? (m = y.value,
                y = y.prev) : m = E,
                _) {
                    if (a(b)) {
                        z && p(E),
                        b = m.sub;
                        continue
                    }
                    _ = !1
                } else
                    b.flags &= -33;
                b = m.sub;
                const V = m.nextDep;
                if (V !== void 0) {
                    m = V;
                    continue t
                }
            }
            return _
        } while (!0)
    }
    function p(m) {
        do {
            const b = m.sub
              , y = b.flags;
            (y & 48) === 32 && (b.flags = y | 16,
            (y & 6) === 2 && i(b))
        } while ((m = m.nextSub) !== void 0)
    }
    function g(m, b) {
        let y = b.depsTail;
        for (; y !== void 0; ) {
            if (y === m)
                return !0;
            y = y.prevDep
        }
        return !1
    }
}
function q_(a, i, r) {
    const o = typeof a == "object"
      , c = o ? a : void 0;
    return {
        next: (o ? a.next : a)?.bind(c),
        error: (o ? a.error : i)?.bind(c),
        complete: (o ? a.complete : r)?.bind(c)
    }
}
const Gc = [];
let Do = 0;
const {link: Vp, unlink: G_, propagate: Y_, checkDirty: oy, shallowPropagate: Xp} = k_({
    update(a) {
        return a._update()
    },
    notify(a) {
        Gc[Yc++] = a,
        a.flags &= ~Xt.Watching
    },
    unwatched(a) {
        a.depsTail !== void 0 && (a.depsTail = void 0,
        a.flags = Xt.Mutable | Xt.Dirty,
        Go(a))
    }
});
let Ao = 0, Yc = 0, rn, Vc = 0;
function sy(a) {
    try {
        ++Vc,
        a()
    } finally {
        --Vc || uy()
    }
}
function Go(a) {
    const i = a.depsTail;
    let r = i !== void 0 ? i.nextDep : a.deps;
    for (; r !== void 0; )
        r = G_(r, a)
}
function uy() {
    if (!(Vc > 0)) {
        for (; Ao < Yc; ) {
            const a = Gc[Ao];
            Gc[Ao++] = void 0,
            a.notify()
        }
        Ao = 0,
        Yc = 0
    }
}
function Qp(a, i) {
    const r = typeof a == "function"
      , o = a
      , c = {
        _snapshot: r ? void 0 : a,
        subs: void 0,
        subsTail: void 0,
        deps: void 0,
        depsTail: void 0,
        flags: r ? Xt.None : Xt.Mutable,
        get() {
            return rn !== void 0 && Vp(c, rn, Do),
            c._snapshot
        },
        subscribe(f) {
            const h = q_(f)
              , p = {
                current: !1
            }
              , g = V_( () => {
                c.get(),
                p.current ? h.next?.(c._snapshot) : p.current = !0
            }
            );
            return {
                unsubscribe: () => {
                    g.stop()
                }
            }
        },
        _update(f) {
            const h = rn
              , p = i?.compare ?? Object.is;
            if (r)
                rn = c,
                ++Do,
                c.depsTail = void 0;
            else if (f === void 0)
                return !1;
            r && (c.flags = Xt.Mutable | Xt.RecursedCheck);
            try {
                const g = c._snapshot
                  , m = typeof f == "function" ? f(g) : f === void 0 && r ? o(g) : f;
                return g === void 0 || !p(g, m) ? (c._snapshot = m,
                !0) : !1
            } finally {
                rn = h,
                r && (c.flags &= ~Xt.RecursedCheck),
                Go(c)
            }
        }
    };
    return r ? (c.flags = Xt.Mutable | Xt.Dirty,
    c.get = function() {
        const f = c.flags;
        if (f & Xt.Dirty || f & Xt.Pending && oy(c.deps, c)) {
            if (c._update()) {
                const h = c.subs;
                h !== void 0 && Xp(h)
            }
        } else
            f & Xt.Pending && (c.flags = f & ~Xt.Pending);
        return rn !== void 0 && Vp(c, rn, Do),
        c._snapshot
    }
    ) : c.set = function(f) {
        if (c._update(f)) {
            const h = c.subs;
            h !== void 0 && (Y_(h),
            Xp(h),
            uy())
        }
    }
    ,
    c
}
function V_(a) {
    const i = () => {
        const o = rn;
        rn = r,
        ++Do,
        r.depsTail = void 0,
        r.flags = Xt.Watching | Xt.RecursedCheck;
        try {
            return a()
        } finally {
            rn = o,
            r.flags &= ~Xt.RecursedCheck,
            Go(r)
        }
    }
      , r = {
        deps: void 0,
        depsTail: void 0,
        subs: void 0,
        subsTail: void 0,
        flags: Xt.Watching | Xt.RecursedCheck,
        notify() {
            const o = this.flags;
            o & Xt.Dirty || o & Xt.Pending && oy(this.deps, this) ? i() : this.flags = Xt.Watching
        },
        stop() {
            this.flags = Xt.None,
            this.depsTail = void 0,
            Go(this)
        }
    };
    return i(),
    r
}
var Ac = {
    exports: {}
}
  , Mc = {}
  , zc = {
    exports: {}
}
  , Cc = {};
var Zp;
function X_() {
    if (Zp)
        return Cc;
    Zp = 1;
    var a = er();
    function i(y, S) {
        return y === S && (y !== 0 || 1 / y === 1 / S) || y !== y && S !== S
    }
    var r = typeof Object.is == "function" ? Object.is : i
      , o = a.useState
      , c = a.useEffect
      , f = a.useLayoutEffect
      , h = a.useDebugValue;
    function p(y, S) {
        var _ = S()
          , w = o({
            inst: {
                value: _,
                getSnapshot: S
            }
        })
          , C = w[0].inst
          , E = w[1];
        return f(function() {
            C.value = _,
            C.getSnapshot = S,
            g(C) && E({
                inst: C
            })
        }, [y, _, S]),
        c(function() {
            return g(C) && E({
                inst: C
            }),
            y(function() {
                g(C) && E({
                    inst: C
                })
            })
        }, [y]),
        h(_),
        _
    }
    function g(y) {
        var S = y.getSnapshot;
        y = y.value;
        try {
            var _ = S();
            return !r(y, _)
        } catch {
            return !0
        }
    }
    function m(y, S) {
        return S()
    }
    var b = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? m : p;
    return Cc.useSyncExternalStore = a.useSyncExternalStore !== void 0 ? a.useSyncExternalStore : b,
    Cc
}
var Kp;
function Q_() {
    return Kp || (Kp = 1,
    zc.exports = X_()),
    zc.exports
}
var Jp;
function Z_() {
    if (Jp)
        return Mc;
    Jp = 1;
    var a = er()
      , i = Q_();
    function r(m, b) {
        return m === b && (m !== 0 || 1 / m === 1 / b) || m !== m && b !== b
    }
    var o = typeof Object.is == "function" ? Object.is : r
      , c = i.useSyncExternalStore
      , f = a.useRef
      , h = a.useEffect
      , p = a.useMemo
      , g = a.useDebugValue;
    return Mc.useSyncExternalStoreWithSelector = function(m, b, y, S, _) {
        var w = f(null);
        if (w.current === null) {
            var C = {
                hasValue: !1,
                value: null
            };
            w.current = C
        } else
            C = w.current;
        w = p(function() {
            function z(P) {
                if (!V) {
                    if (V = !0,
                    Q = P,
                    P = S(P),
                    _ !== void 0 && C.hasValue) {
                        var X = C.value;
                        if (_(X, P))
                            return k = X
                    }
                    return k = P
                }
                if (X = k,
                o(Q, P))
                    return X;
                var H = S(P);
                return _ !== void 0 && _(X, H) ? (Q = P,
                X) : (Q = P,
                k = H)
            }
            var V = !1, Q, k, W = y === void 0 ? null : y;
            return [function() {
                return z(b())
            }
            , W === null ? void 0 : function() {
                return z(W())
            }
            ]
        }, [b, y, S, _]);
        var E = c(m, w[0], w[1]);
        return h(function() {
            C.hasValue = !0,
            C.value = E
        }, [E]),
        g(E),
        E
    }
    ,
    Mc
}
var Pp;
function K_() {
    return Pp || (Pp = 1,
    Ac.exports = Z_()),
    Ac.exports
}
var J_ = K_();
function P_(a, i) {
    return a === i
}
function Wt(a, i, r=P_) {
    const o = $.useCallback(h => {
        if (!a)
            return () => {}
            ;
        const {unsubscribe: p} = a.subscribe(h);
        return p
    }
    , [a])
      , c = $.useCallback( () => a?.get(), [a]);
    return J_.useSyncExternalStoreWithSelector(o, c, c, i, r)
}
var F_ = {
    get: () => {}
    ,
    subscribe: () => ({
        unsubscribe: () => {}
    })
};
function Ja(a) {
    const i = pe()
      , r = $.useContext(a.from ? H_ : Fo)
      , o = a.from ?? r
      , c = o ? a.from ? i.stores.getRouteMatchStore(o) : i.stores.matchStores.get(o) : void 0
      , f = $.useRef(void 0);
    return Wt(c ?? F_, h => {
        if ((a.shouldThrow ?? !0) && !h && Me(),
        h === void 0)
            return;
        const p = a.select ? a.select(h) : h;
        if (a.structuralSharing ?? i.options.defaultStructuralSharing) {
            const g = qa(f.current, p);
            return f.current = g,
            g
        }
        return p
    }
    )
}
function cy(a) {
    return Ja({
        from: a.from,
        strict: a.strict,
        structuralSharing: a.structuralSharing,
        select: i => a.select ? a.select(i.loaderData) : i.loaderData
    })
}
function fy(a) {
    const {select: i, ...r} = a;
    return Ja({
        ...r,
        select: o => i ? i(o.loaderDeps) : o.loaderDeps
    })
}
function dy(a) {
    return Ja({
        from: a.from,
        shouldThrow: a.shouldThrow,
        structuralSharing: a.structuralSharing,
        strict: a.strict,
        select: i => {
            const r = a.strict === !1 ? i.params : i._strictParams;
            return a.select ? a.select(r) : r
        }
    })
}
function hy(a) {
    return Ja({
        from: a.from,
        strict: a.strict,
        shouldThrow: a.shouldThrow,
        structuralSharing: a.structuralSharing,
        select: i => a.select ? a.select(i.search) : i.search
    })
}
function my(a) {
    const i = pe();
    return $.useCallback(r => i.navigate({
        ...r,
        from: r.from ?? a?.from
    }), [a?.from, i])
}
function py(a) {
    return Ja({
        ...a,
        select: i => a.select ? a.select(i.context) : i.context
    })
}
var I_ = ug();
function $_(a, i) {
    const r = pe()
      , o = O_(i)
      , {activeProps: c, inactiveProps: f, activeOptions: h, to: p, preload: g, preloadDelay: m, preloadIntentProximity: b, hashScrollIntoView: y, replace: S, startTransition: _, resetScroll: w, viewTransition: C, children: E, target: z, disabled: V, style: Q, className: k, onClick: W, onBlur: P, onFocus: X, onMouseEnter: H, onMouseLeave: J, onTouchStart: ct, ignoreBlocker: nt, params: ht, search: vt, hash: Ht, state: Rt, mask: U, reloadDocument: K, unsafeRelative: ot, from: wt, _fromLocation: I, ...A} = a
      , Y = tf()
      , F = $.useMemo( () => a, [r, a.from, a._fromLocation, a.hash, a.to, a.search, a.params, a.state, a.mask, a.unsafeRelative])
      , tt = Wt(r.stores.location, kt => kt, (kt, oe) => kt.href === oe.href)
      , et = $.useMemo( () => {
        const kt = {
            _fromLocation: tt,
            ...F
        };
        return r.buildLocation(kt)
    }
    , [r, tt, F])
      , st = et.maskedLocation ? et.maskedLocation.publicHref : et.publicHref
      , bt = et.maskedLocation ? et.maskedLocation.external : et.external
      , Yt = $.useMemo( () => l2(st, bt, r.history, V), [V, bt, st, r.history])
      , dt = $.useMemo( () => {
        if (Yt?.external)
            return Lo(Yt.href, r.protocolAllowlist) ? void 0 : Yt.href;
        if (!i2(p) && !(typeof p != "string" || p.indexOf(":") === -1))
            try {
                return new URL(p),
                Lo(p, r.protocolAllowlist) ? void 0 : p
            } catch {}
    }
    , [p, Yt, r.protocolAllowlist])
      , ke = $.useMemo( () => {
        if (dt)
            return !1;
        if (h?.exact) {
            if (!Xb(tt.pathname, et.pathname, r.basepath))
                return !1
        } else {
            const kt = Uo(tt.pathname, r.basepath)
              , oe = Uo(et.pathname, r.basepath);
            if (!(kt.startsWith(oe) && (kt.length === oe.length || kt[oe.length] === "/")))
                return !1
        }
        return (h?.includeSearch ?? !0) && !Te(tt.search, et.search, {
            partial: !h?.exact,
            ignoreUndefined: !h?.explicitUndefined
        }) ? !1 : h?.includeHash ? Y && tt.hash === et.hash : !0
    }
    , [h?.exact, h?.explicitUndefined, h?.includeHash, h?.includeSearch, tt, dt, Y, et.hash, et.pathname, et.search, r.basepath])
      , ve = ke ? ca(c, {}) ?? W_ : Oc
      , ze = ke ? Oc : ca(f, {}) ?? Oc
      , sn = [k, ve.className, ze.className].filter(Boolean).join(" ")
      , ge = (Q || ve.style || ze.style) && {
        ...Q,
        ...ve.style,
        ...ze.style
    }
      , [Ql,Fa] = $.useState(!1)
      , rr = $.useRef(!1)
      , un = a.reloadDocument || dt ? !1 : g ?? r.options.defaultPreload
      , ba = m ?? r.options.defaultPreloadDelay ?? 0
      , Fe = $.useCallback( () => {
        r.preloadRoute({
            ...F,
            _builtLocation: et
        }).catch(kt => {
            console.warn(kt),
            console.warn(TS)
        }
        )
    }
    , [r, F, et]);
    C_(o, $.useCallback(kt => {
        kt?.isIntersecting && Fe()
    }
    , [Fe]), a2, {
        disabled: !!V || un !== "viewport"
    }),
    $.useEffect( () => {
        rr.current || !V && un === "render" && (Fe(),
        rr.current = !0)
    }
    , [V, Fe, un]);
    const Zl = kt => {
        const oe = kt.currentTarget.getAttribute("target")
          , tn = z !== void 0 ? z : oe;
        if (!V && !r2(kt) && !kt.defaultPrevented && (!tn || tn === "_self") && kt.button === 0) {
            kt.preventDefault(),
            I_.flushSync( () => {
                Fa(!0)
            }
            );
            const Ia = r.subscribe("onResolved", () => {
                Ia(),
                Fa(!1)
            }
            );
            r.navigate({
                ...F,
                replace: S,
                resetScroll: w,
                hashScrollIntoView: y,
                startTransition: _,
                viewTransition: C,
                ignoreBlocker: nt
            })
        }
    }
    ;
    if (dt)
        return {
            ...A,
            ref: o,
            href: dt,
            ...E && {
                children: E
            },
            ...z && {
                target: z
            },
            ...V && {
                disabled: V
            },
            ...Q && {
                style: Q
            },
            ...k && {
                className: k
            },
            ...W && {
                onClick: W
            },
            ...P && {
                onBlur: P
            },
            ...X && {
                onFocus: X
            },
            ...H && {
                onMouseEnter: H
            },
            ...J && {
                onMouseLeave: J
            },
            ...ct && {
                onTouchStart: ct
            }
        };
    const or = kt => {
        if (V || un !== "intent")
            return;
        if (!ba) {
            Fe();
            return
        }
        const oe = kt.currentTarget;
        if (Ki.has(oe))
            return;
        const tn = setTimeout( () => {
            Ki.delete(oe),
            Fe()
        }
        , ba);
        Ki.set(oe, tn)
    }
      , Wo = kt => {
        V || un !== "intent" || Fe()
    }
      , he = kt => {
        if (V || !un || !ba)
            return;
        const oe = kt.currentTarget
          , tn = Ki.get(oe);
        tn && (clearTimeout(tn),
        Ki.delete(oe))
    }
    ;
    return {
        ...A,
        ...ve,
        ...ze,
        href: Yt?.href,
        ref: o,
        onClick: Ul([W, Zl]),
        onBlur: Ul([P, he]),
        onFocus: Ul([X, or]),
        onMouseEnter: Ul([H, or]),
        onMouseLeave: Ul([J, he]),
        onTouchStart: Ul([ct, Wo]),
        disabled: !!V,
        target: z,
        ...ge && {
            style: ge
        },
        ...sn && {
            className: sn
        },
        ...V && t2,
        ...ke && e2,
        ...Y && Ql && n2
    }
}
var Oc = {}
  , W_ = {
    className: "active"
}
  , t2 = {
    role: "link",
    "aria-disabled": !0
}
  , e2 = {
    "data-status": "active",
    "aria-current": "page"
}
  , n2 = {
    "data-transitioning": "transitioning"
}
  , Ki = new WeakMap
  , a2 = {
    rootMargin: "100px"
}
  , Ul = a => i => {
    for (const r of a)
        if (r) {
            if (i.defaultPrevented)
                return;
            r(i)
        }
}
;
function l2(a, i, r, o) {
    if (!o)
        return i ? {
            href: a,
            external: !0
        } : {
            href: r.createHref(a) || "/",
            external: !1
        }
}
function i2(a) {
    if (typeof a != "string")
        return !1;
    const i = a.charCodeAt(0);
    return i === 47 ? a.charCodeAt(1) !== 47 : i === 46
}
var ma = $.forwardRef( (a, i) => {
    const {_asChild: r, ...o} = a
      , {type: c, ...f} = $_(o, i)
      , h = typeof o.children == "function" ? o.children({
        isActive: f["data-status"] === "active"
    }) : o.children;
    if (!r) {
        const {disabled: p, ...g} = f;
        return $.createElement("a", g, h)
    }
    return $.createElement(r, f, h)
}
);
function r2(a) {
    return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey)
}
var o2 = class extends Eg {
    constructor(i) {
        super(i),
        this.useMatch = r => Ja({
            select: r?.select,
            from: this.id,
            structuralSharing: r?.structuralSharing
        }),
        this.useRouteContext = r => py({
            ...r,
            from: this.id
        }),
        this.useSearch = r => hy({
            select: r?.select,
            structuralSharing: r?.structuralSharing,
            from: this.id
        }),
        this.useParams = r => dy({
            select: r?.select,
            structuralSharing: r?.structuralSharing,
            from: this.id
        }),
        this.useLoaderDeps = r => fy({
            ...r,
            from: this.id
        }),
        this.useLoaderData = r => cy({
            ...r,
            from: this.id
        }),
        this.useNavigate = () => my({
            from: this.fullPath
        }),
        this.Link = Yl.forwardRef( (r, o) => N.jsx(ma, {
            ref: o,
            from: this.fullPath,
            ...r
        }))
    }
}
;
function s2(a) {
    return new o2(a)
}
var u2 = class extends MS {
    constructor(a) {
        super(a),
        this.useMatch = i => Ja({
            select: i?.select,
            from: this.id,
            structuralSharing: i?.structuralSharing
        }),
        this.useRouteContext = i => py({
            ...i,
            from: this.id
        }),
        this.useSearch = i => hy({
            select: i?.select,
            structuralSharing: i?.structuralSharing,
            from: this.id
        }),
        this.useParams = i => dy({
            select: i?.select,
            structuralSharing: i?.structuralSharing,
            from: this.id
        }),
        this.useLoaderDeps = i => fy({
            ...i,
            from: this.id
        }),
        this.useLoaderData = i => cy({
            ...i,
            from: this.id
        }),
        this.useNavigate = () => my({
            from: this.fullPath
        }),
        this.Link = Yl.forwardRef( (i, r) => N.jsx(ma, {
            ref: r,
            from: this.fullPath,
            ...i
        }))
    }
}
;
function c2(a) {
    return new u2(a)
}
function lr(a) {
    return new f2(a,{
        silent: !0
    }).createRoute
}
var f2 = class {
    constructor(a, i) {
        this.path = a,
        this.createRoute = r => {
            const o = s2(r);
            return o.isRoot = !1,
            o
        }
        ,
        this.silent = i?.silent
    }
}
;
function Io(a, i) {
    let r, o, c, f;
    const h = () => (r || (r = a().then(g => {
        r = void 0,
        o = g[i]
    }
    ).catch(g => {
        if (c = g,
        Tb(c) && c instanceof Error && typeof window < "u" && typeof sessionStorage < "u") {
            const m = `tanstack_router_reload:${c.message}`;
            sessionStorage.getItem(m) || (sessionStorage.setItem(m, "1"),
            f = !0)
        }
    }
    )),
    r)
      , p = function(m) {
        if (f)
            throw window.location.reload(),
            new Promise( () => {}
            );
        if (c)
            throw c;
        if (!o)
            if (qo)
                qo(h());
            else
                throw h();
        return $.createElement(o, m)
    };
    return p.preload = h,
    p
}
function d2(a) {
    const i = pe()
      , r = `not-found-${Wt(i.stores.location, o => o.pathname)}-${Wt(i.stores.status, o => o)}`;
    return N.jsx($c, {
        getResetKey: () => r,
        onCatch: (o, c) => {
            if (re(o))
                a.onCatch?.(o, c);
            else
                throw o
        }
        ,
        errorComponent: ({error: o}) => {
            if (re(o))
                return a.fallback?.(o);
            throw o
        }
        ,
        children: a.children
    })
}
function h2() {
    return N.jsx("p", {
        children: "Not Found"
    })
}
function Bl(a) {
    return N.jsx(N.Fragment, {
        children: a.children
    })
}
function gy(a, i, r) {
    return i.options.notFoundComponent ? N.jsx(i.options.notFoundComponent, {
        ...r
    }) : a.options.defaultNotFoundComponent ? N.jsx(a.options.defaultNotFoundComponent, {
        ...r
    }) : N.jsx(h2, {})
}
function m2(a) {
    return null
}
function p2() {
    return m2(pe()),
    null
}
var yy = $.memo(function({matchId: i}) {
    const r = pe()
      , o = r.stores.matchStores.get(i);
    o || Me();
    const c = Wt(r.stores.loadedAt, h => h)
      , f = Wt(o, h => h);
    return N.jsx(g2, {
        router: r,
        matchId: i,
        resetKey: c,
        matchState: $.useMemo( () => {
            const h = f.routeId
              , p = r.routesById[h].parentRoute?.id;
            return {
                routeId: h,
                ssr: f.ssr,
                _displayPending: f._displayPending,
                parentRouteId: p
            }
        }
        , [f._displayPending, f.routeId, f.ssr, r.routesById])
    })
});
function g2({router: a, matchId: i, resetKey: r, matchState: o}) {
    const c = a.routesById[o.routeId]
      , f = c.options.pendingComponent ?? a.options.defaultPendingComponent
      , h = f ? N.jsx(f, {}) : null
      , p = c.options.errorComponent ?? a.options.defaultErrorComponent
      , g = c.options.onCatch ?? a.options.defaultOnCatch
      , m = c.isRoot ? c.options.notFoundComponent ?? a.options.notFoundRoute?.options.component : c.options.notFoundComponent
      , b = o.ssr === !1 || o.ssr === "data-only"
      , y = (!c.isRoot || c.options.wrapInSuspense || b) && (c.options.wrapInSuspense ?? f ?? (c.options.errorComponent?.preload || b)) ? $.Suspense : Bl
      , S = p ? $c : Bl
      , _ = m ? d2 : Bl;
    return N.jsxs(c.isRoot ? c.options.shellComponent ?? Bl : Bl, {
        children: [N.jsx(Fo.Provider, {
            value: i,
            children: N.jsx(y, {
                fallback: h,
                children: N.jsx(S, {
                    getResetKey: () => r,
                    errorComponent: p || Wc,
                    onCatch: (w, C) => {
                        if (re(w))
                            throw w.routeId ??= o.routeId,
                            w;
                        g?.(w, C)
                    }
                    ,
                    children: N.jsx(_, {
                        fallback: w => {
                            if (w.routeId ??= o.routeId,
                            !m || w.routeId && w.routeId !== o.routeId || !w.routeId && !c.isRoot)
                                throw w;
                            return $.createElement(m, w)
                        }
                        ,
                        children: b || o._displayPending ? N.jsx(U_, {
                            fallback: h,
                            children: N.jsx(Fp, {
                                matchId: i
                            })
                        }) : N.jsx(Fp, {
                            matchId: i
                        })
                    })
                })
            })
        }), o.parentRouteId === Xa ? N.jsxs(N.Fragment, {
            children: [N.jsx(y2, {
                resetKey: r
            }), a.options.scrollRestoration && fg ? N.jsx(p2, {}) : null]
        }) : null]
    })
}
function y2({resetKey: a}) {
    const i = pe()
      , r = $.useRef(void 0);
    return Pi( () => {
        const o = i.latestLocation.href;
        (r.current === void 0 || r.current !== o) && (i.emit({
            type: "onRendered",
            ...kl(i.stores.location.get(), i.stores.resolvedLocation.get())
        }),
        r.current = o)
    }
    , [i.latestLocation.state.__TSR_key, a, i]),
    null
}
var Fp = $.memo(function({matchId: i}) {
    const r = pe()
      , o = (b, y) => r.getMatch(b.id)?._nonReactive[y] ?? b._nonReactive[y]
      , c = r.stores.matchStores.get(i);
    c || Me();
    const f = Wt(c, b => b)
      , h = f.routeId
      , p = r.routesById[h]
      , g = $.useMemo( () => {
        const b = (r.routesById[h].options.remountDeps ?? r.options.defaultRemountDeps)?.({
            routeId: h,
            loaderDeps: f.loaderDeps,
            params: f._strictParams,
            search: f._strictSearch
        });
        return b ? JSON.stringify(b) : void 0
    }
    , [h, f.loaderDeps, f._strictParams, f._strictSearch, r.options.defaultRemountDeps, r.routesById])
      , m = $.useMemo( () => {
        const b = p.options.component ?? r.options.defaultComponent;
        return b ? N.jsx(b, {}, g) : N.jsx(vy, {})
    }
    , [g, p.options.component, r.options.defaultComponent]);
    if (f._displayPending)
        throw o(f, "displayPendingPromise");
    if (f._forcePending)
        throw o(f, "minPendingPromise");
    if (f.status === "pending") {
        const b = p.options.pendingMinMs ?? r.options.defaultPendingMinMs;
        if (b) {
            const y = r.getMatch(f.id);
            if (y && !y._nonReactive.minPendingPromise) {
                const S = Za();
                y._nonReactive.minPendingPromise = S,
                setTimeout( () => {
                    S.resolve(),
                    y._nonReactive.minPendingPromise = void 0
                }
                , b)
            }
        }
        throw o(f, "loadPromise")
    }
    if (f.status === "notFound")
        return re(f.error) || Me(),
        gy(r, p, f.error);
    if (f.status === "redirected")
        throw Ae(f.error) || Me(),
        o(f, "loadPromise");
    if (f.status === "error")
        throw f.error;
    return m
})
  , vy = $.memo(function() {
    const i = pe()
      , r = $.useContext(Fo);
    let o, c = !1, f;
    {
        const m = r ? i.stores.matchStores.get(r) : void 0;
        [o,c] = Wt(m, b => [b?.routeId, b?.globalNotFound ?? !1]),
        f = Wt(i.stores.matchesId, b => b[b.findIndex(y => y === r) + 1])
    }
    const h = o ? i.routesById[o] : void 0
      , p = i.options.defaultPendingComponent ? N.jsx(i.options.defaultPendingComponent, {}) : null;
    if (c)
        return h || Me(),
        gy(i, h, void 0);
    if (!f)
        return null;
    const g = N.jsx(yy, {
        matchId: f
    });
    return o === Xa ? N.jsx($.Suspense, {
        fallback: p,
        children: g
    }) : g
});
function v2() {
    const a = pe()
      , i = $.useRef({
        router: a,
        mounted: !1
    })
      , [r,o] = $.useState(!1)
      , c = Wt(a.stores.isLoading, y => y)
      , f = Wt(a.stores.hasPending, y => y)
      , h = Tc(c)
      , p = c || r || f
      , g = Tc(p)
      , m = c || f
      , b = Tc(m);
    return a.startTransition = y => {
        o(!0),
        $.startTransition( () => {
            y(),
            o(!1)
        }
        )
    }
    ,
    $.useEffect( () => {
        const y = a.history.subscribe(a.load)
          , S = a.buildLocation({
            to: a.latestLocation.pathname,
            search: !0,
            params: !0,
            hash: !0,
            state: !0,
            _includeValidateSearch: !0
        });
        return da(a.latestLocation.publicHref) !== da(S.publicHref) && a.commitLocation({
            ...S,
            replace: !0
        }),
        () => {
            y()
        }
    }
    , [a, a.history]),
    Pi( () => {
        if (typeof window < "u" && a.ssr || i.current.router === a && i.current.mounted)
            return;
        i.current = {
            router: a,
            mounted: !0
        },
        (async () => {
            try {
                await a.load()
            } catch (S) {
                console.error(S)
            }
        }
        )()
    }
    , [a]),
    Pi( () => {
        h && !c && a.emit({
            type: "onLoad",
            ...kl(a.stores.location.get(), a.stores.resolvedLocation.get())
        })
    }
    , [h, a, c]),
    Pi( () => {
        b && !m && a.emit({
            type: "onBeforeRouteMount",
            ...kl(a.stores.location.get(), a.stores.resolvedLocation.get())
        })
    }
    , [m, b, a]),
    Pi( () => {
        if (g && !p) {
            const y = kl(a.stores.location.get(), a.stores.resolvedLocation.get());
            a.emit({
                type: "onResolved",
                ...y
            }),
            sy( () => {
                a.stores.status.set("idle"),
                a.stores.resolvedLocation.set(a.stores.location.get())
            }
            ),
            y.hrefChanged && zS(a)
        }
    }
    , [p, g, a]),
    null
}
function b2() {
    const a = pe()
      , i = a.routesById[Xa].options.pendingComponent ?? a.options.defaultPendingComponent
      , r = i ? N.jsx(i, {}) : null
      , o = N.jsxs(typeof document < "u" && a.ssr ? Bl : $.Suspense, {
        fallback: r,
        children: [N.jsx(v2, {}), N.jsx(S2, {})]
    });
    return a.options.InnerWrap ? N.jsx(a.options.InnerWrap, {
        children: o
    }) : o
}
function S2() {
    const a = pe()
      , i = Wt(a.stores.firstId, c => c)
      , r = Wt(a.stores.loadedAt, c => c)
      , o = i ? N.jsx(yy, {
        matchId: i
    }) : null;
    return N.jsx(Fo.Provider, {
        value: i,
        children: a.options.disableGlobalCatchBoundary ? o : N.jsx($c, {
            getResetKey: () => r,
            errorComponent: Wc,
            onCatch: void 0,
            children: o
        })
    })
}
var x2 = a => ({
    createMutableStore: Qp,
    createReadonlyStore: Qp,
    batch: sy
})
  , _2 = a => new E2(a)
  , E2 = class extends vS {
    constructor(a) {
        super(a, x2)
    }
}
;
function R2({router: a, children: i, ...r}) {
    Object.keys(r).length > 0 && a.update({
        ...a.options,
        ...r,
        context: {
            ...a.options.context,
            ...r.context
        }
    });
    const o = N.jsx(ry.Provider, {
        value: a,
        children: i
    });
    return a.options.Wrap ? N.jsx(a.options.Wrap, {
        children: o
    }) : o
}
function w2({router: a, ...i}) {
    return N.jsx(R2, {
        router: a,
        ...i,
        children: N.jsx(b2, {})
    })
}
function by({tag: a, attrs: i, children: r, nonce: o}) {
    switch (a) {
    case "title":
        return N.jsx("title", {
            ...i,
            suppressHydrationWarning: !0,
            children: r
        });
    case "meta":
        return N.jsx("meta", {
            ...i,
            suppressHydrationWarning: !0
        });
    case "link":
        return N.jsx("link", {
            ...i,
            precedence: i?.precedence ?? (i?.rel === "stylesheet" ? "default" : void 0),
            nonce: o,
            suppressHydrationWarning: !0
        });
    case "style":
        return N.jsx("style", {
            ...i,
            dangerouslySetInnerHTML: {
                __html: r
            },
            nonce: o
        });
    case "script":
        return N.jsx(T2, {
            attrs: i,
            children: r
        });
    default:
        return null
    }
}
function T2({attrs: a, children: i}) {
    pe();
    const r = tf()
      , o = typeof a?.type == "string" && a.type !== "" && a.type !== "text/javascript" && a.type !== "module";
    if ($.useEffect( () => {
        if (!o) {
            if (a?.src) {
                const c = ( () => {
                    try {
                        const h = document.baseURI || window.location.href;
                        return new URL(a.src,h).href
                    } catch {
                        return a.src
                    }
                }
                )();
                if (Array.from(document.querySelectorAll("script[src]")).find(h => h.src === c))
                    return;
                const f = document.createElement("script");
                for (const [h,p] of Object.entries(a))
                    h !== "suppressHydrationWarning" && p !== void 0 && p !== !1 && f.setAttribute(h, typeof p == "boolean" ? "" : String(p));
                return document.head.appendChild(f),
                () => {
                    f.parentNode && f.parentNode.removeChild(f)
                }
            }
            if (typeof i == "string") {
                const c = typeof a?.type == "string" ? a.type : "text/javascript"
                  , f = typeof a?.nonce == "string" ? a.nonce : void 0;
                if (Array.from(document.querySelectorAll("script:not([src])")).find(p => {
                    if (!(p instanceof HTMLScriptElement))
                        return !1;
                    const g = p.getAttribute("type") ?? "text/javascript"
                      , m = p.getAttribute("nonce") ?? void 0;
                    return p.textContent === i && g === c && m === f
                }
                ))
                    return;
                const h = document.createElement("script");
                if (h.textContent = i,
                a)
                    for (const [p,g] of Object.entries(a))
                        p !== "suppressHydrationWarning" && g !== void 0 && g !== !1 && h.setAttribute(p, typeof g == "boolean" ? "" : String(g));
                return document.head.appendChild(h),
                () => {
                    h.parentNode && h.parentNode.removeChild(h)
                }
            }
        }
    }
    , [a, i, o]),
    o && typeof i == "string")
        return N.jsx("script", {
            ...a,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
                __html: i
            }
        });
    if (!r) {
        if (a?.src)
            return N.jsx("script", {
                ...a,
                suppressHydrationWarning: !0
            });
        if (typeof i == "string")
            return N.jsx("script", {
                ...a,
                dangerouslySetInnerHTML: {
                    __html: i
                },
                suppressHydrationWarning: !0
            })
    }
    return null
}
var A2 = a => {
    const i = pe()
      , r = i.options.ssr?.nonce
      , o = Wt(i.stores.matches, m => m.map(b => b.meta).filter(Boolean), Te)
      , c = $.useMemo( () => {
        const m = []
          , b = {};
        let y;
        for (let S = o.length - 1; S >= 0; S--) {
            const _ = o[S];
            for (let w = _.length - 1; w >= 0; w--) {
                const C = _[w];
                if (C)
                    if (C.title)
                        y || (y = {
                            tag: "title",
                            children: C.title
                        });
                    else if ("script:ld+json"in C)
                        try {
                            const E = JSON.stringify(C["script:ld+json"]);
                            m.push({
                                tag: "script",
                                attrs: {
                                    type: "application/ld+json"
                                },
                                children: Ob(E)
                            })
                        } catch {}
                    else {
                        const E = C.name ?? C.property;
                        if (E) {
                            if (b[E])
                                continue;
                            b[E] = !0
                        }
                        m.push({
                            tag: "meta",
                            attrs: {
                                ...C,
                                nonce: r
                            }
                        })
                    }
            }
        }
        return y && m.push(y),
        r && m.push({
            tag: "meta",
            attrs: {
                property: "csp-nonce",
                content: r
            }
        }),
        m.reverse(),
        m
    }
    , [o, r])
      , f = Wt(i.stores.matches, m => {
        const b = m.map(_ => _.links).filter(Boolean).flat(1).map(_ => ({
            tag: "link",
            attrs: {
                ..._,
                nonce: r
            }
        }))
          , y = i.ssr?.manifest
          , S = m.map(_ => y?.routes[_.routeId]?.assets ?? []).filter(Boolean).flat(1).filter(_ => _.tag === "link").map(_ => ({
            tag: "link",
            attrs: {
                ..._.attrs,
                crossOrigin: zp(a, "stylesheet") ?? _.attrs?.crossOrigin,
                suppressHydrationWarning: !0,
                nonce: r
            }
        }));
        return [...b, ...S]
    }
    , Te)
      , h = Wt(i.stores.matches, m => {
        const b = [];
        return m.map(y => i.looseRoutesById[y.routeId]).forEach(y => i.ssr?.manifest?.routes[y.id]?.preloads?.filter(Boolean).forEach(S => {
            const _ = AS(S);
            b.push({
                tag: "link",
                attrs: {
                    rel: "modulepreload",
                    href: _.href,
                    crossOrigin: zp(a, "modulepreload") ?? _.crossOrigin,
                    nonce: r
                }
            })
        }
        )),
        b
    }
    , Te)
      , p = Wt(i.stores.matches, m => m.map(b => b.styles).flat(1).filter(Boolean).map( ({children: b, ...y}) => ({
        tag: "style",
        attrs: {
            ...y,
            nonce: r
        },
        children: b
    })), Te)
      , g = Wt(i.stores.matches, m => m.map(b => b.headScripts).flat(1).filter(Boolean).map( ({children: b, ...y}) => ({
        tag: "script",
        attrs: {
            ...y,
            nonce: r
        },
        children: b
    })), Te);
    return M2([...c, ...h, ...f, ...p, ...g], m => JSON.stringify(m))
}
;
function M2(a, i) {
    const r = new Set;
    return a.filter(o => {
        const c = i(o);
        return r.has(c) ? !1 : (r.add(c),
        !0)
    }
    )
}
function z2(a) {
    const i = A2(a.assetCrossOrigin)
      , r = pe().options.ssr?.nonce;
    return N.jsx(N.Fragment, {
        children: i.map(o => $.createElement(by, {
            ...o,
            key: `tsr-meta-${JSON.stringify(o)}`,
            nonce: r
        }))
    })
}
var C2 = () => {
    const a = pe()
      , i = a.options.ssr?.nonce
      , r = f => {
        const h = []
          , p = a.ssr?.manifest;
        return p ? (f.map(g => a.looseRoutesById[g.routeId]).forEach(g => p.routes[g.id]?.assets?.filter(m => m.tag === "script").forEach(m => {
            h.push({
                tag: "script",
                attrs: {
                    ...m.attrs,
                    nonce: i
                },
                children: m.children
            })
        }
        )),
        h) : []
    }
      , o = f => f.map(h => h.scripts).flat(1).filter(Boolean).map( ({children: h, ...p}) => ({
        tag: "script",
        attrs: {
            ...p,
            suppressHydrationWarning: !0,
            nonce: i
        },
        children: h
    }))
      , c = Wt(a.stores.matches, r, Te);
    return O2(a, Wt(a.stores.matches, o, Te), c)
}
;
function O2(a, i, r) {
    let o;
    a.serverSsr && (o = a.serverSsr.takeBufferedScripts());
    const c = [...i, ...r];
    return o && c.unshift(o),
    N.jsx(N.Fragment, {
        children: c.map( (f, h) => $.createElement(by, {
            ...f,
            key: `tsr-scripts-${f.tag}-${h}`
        }))
    })
}
const Sy = (...a) => a.filter( (i, r, o) => !!i && i.trim() !== "" && o.indexOf(i) === r).join(" ").trim();
const N2 = a => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const j2 = a => a.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, r, o) => o ? o.toUpperCase() : r.toLowerCase());
const Ip = a => {
    const i = j2(a);
    return i.charAt(0).toUpperCase() + i.slice(1)
}
;
var D2 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const L2 = a => {
    for (const i in a)
        if (i.startsWith("aria-") || i === "role" || i === "title")
            return !0;
    return !1
}
;
const U2 = $.forwardRef( ({color: a="currentColor", size: i=24, strokeWidth: r=2, absoluteStrokeWidth: o, className: c="", children: f, iconNode: h, ...p}, g) => $.createElement("svg", {
    ref: g,
    ...D2,
    width: i,
    height: i,
    stroke: a,
    strokeWidth: o ? Number(r) * 24 / Number(i) : r,
    className: Sy("lucide", c),
    ...!f && !L2(p) && {
        "aria-hidden": "true"
    },
    ...p
}, [...h.map( ([m,b]) => $.createElement(m, b)), ...Array.isArray(f) ? f : [f]]));
const Dn = (a, i) => {
    const r = $.forwardRef( ({className: o, ...c}, f) => $.createElement(U2, {
        ref: f,
        iconNode: i,
        className: Sy(`lucide-${N2(Ip(a))}`, `lucide-${a}`, o),
        ...c
    }));
    return r.displayName = Ip(a),
    r
}
;
const B2 = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]
  , $p = Dn("arrow-right", B2);
const H2 = [["path", {
    d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    key: "jecpp"
}], ["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "6",
    rx: "2",
    key: "i6l2r4"
}]]
  , k2 = Dn("briefcase", H2);
const q2 = [["path", {
    d: "M12 15V3",
    key: "m9g1x1"
}], ["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["path", {
    d: "m7 10 5 5 5-5",
    key: "brsn70"
}]]
  , G2 = Dn("download", q2);
const Y2 = [["path", {
    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    key: "tonef"
}], ["path", {
    d: "M9 18c-4.51 2-5-2-7-2",
    key: "9comsn"
}]]
  , xy = Dn("github", Y2);
const V2 = [["path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    key: "c2jq9f"
}], ["rect", {
    width: "4",
    height: "12",
    x: "2",
    y: "9",
    key: "mk3on5"
}], ["circle", {
    cx: "4",
    cy: "4",
    r: "2",
    key: "bt5ra8"
}]]
  , _y = Dn("linkedin", V2);
const X2 = [["path", {
    d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
    key: "132q7q"
}], ["rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2",
    key: "izxlao"
}]]
  , Ey = Dn("mail", X2);
const Q2 = [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]
  , Z2 = Dn("map-pin", Q2);
const K2 = [["path", {
    d: "M4 5h16",
    key: "1tepv9"
}], ["path", {
    d: "M4 12h16",
    key: "1lakjw"
}], ["path", {
    d: "M4 19h16",
    key: "1djgab"
}]]
  , J2 = Dn("menu", K2);
const P2 = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , F2 = Dn("x", P2)
  , Xl = c2({
    head: () => ({
        meta: [{
            charSet: "utf-8"
        }, {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
        }, {
            title: "Anjali Kanakan — Senior Front End Developer"
        }, {
            name: "description",
            content: "Personal portfolio of Anjali Kanakan, a Senior Front End Developer specializing in React, Angular.js, and front-end technologies."
        }]
    }),
    shellComponent: I2
});
function I2({children: a}) {
    return N.jsxs("html", {
        lang: "en",
        children: [N.jsx("head", {
            children: N.jsx(z2, {})
        }), N.jsxs("body", {
            className: "min-h-screen flex flex-col bg-background text-foreground",
            children: [N.jsx($2, {}), N.jsx("main", {
                className: "flex-1",
                children: N.jsx(vy, {})
            }), N.jsx(W2, {}), N.jsx(C2, {})]
        })]
    })
}
function $2() {
    const [a,i] = $.useState(!1)
      , r = [{
        to: "/",
        label: "About"
    }, {
        to: "/resume",
        label: "Resume"
    }, {
        to: "/projects",
        label: "Projects"
    }, {
        to: "/contact",
        label: "Contact"
    }];
    return N.jsxs("header", {
        className: "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        children: [N.jsxs("div", {
            className: "max-w-5xl mx-auto px-4 py-4 flex items-center justify-between",
            children: [N.jsx(ma, {
                to: "/",
                className: "text-xl font-bold tracking-tight hover:text-primary transition-colors",
                children: "Anjali Kanakan"
            }), N.jsx("nav", {
                className: "hidden md:flex items-center gap-6",
                children: r.map(o => N.jsx(ma, {
                    to: o.to,
                    className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors [&.active]:text-foreground [&.active]:font-semibold",
                    children: o.label
                }, o.to))
            }), N.jsx("button", {
                className: "md:hidden p-2 rounded-md hover:bg-accent transition-colors",
                onClick: () => i(!a),
                "aria-label": "Toggle menu",
                children: a ? N.jsx(F2, {
                    size: 20
                }) : N.jsx(J2, {
                    size: 20
                })
            })]
        }), a && N.jsx("div", {
            className: "md:hidden border-t border-border bg-background",
            children: N.jsx("nav", {
                className: "max-w-5xl mx-auto px-4 py-4 flex flex-col gap-4",
                children: r.map(o => N.jsx(ma, {
                    to: o.to,
                    className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors [&.active]:text-foreground",
                    onClick: () => i(!1),
                    children: o.label
                }, o.to))
            })
        })]
    })
}
function W2() {
    return N.jsx("footer", {
        className: "border-t border-border mt-20",
        children: N.jsxs("div", {
            className: "max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4",
            children: [N.jsxs("p", {
                className: "text-sm text-muted-foreground",
                children: ["© ", new Date().getFullYear(), " Anjali Kanakan. All rights reserved."]
            }), N.jsxs("div", {
                className: "flex items-center gap-4",
                children: [N.jsx("a", {
                    href: "https://github.com/anjalikanakan",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": "GitHub",
                    className: "text-muted-foreground hover:text-foreground transition-colors",
                    children: N.jsx(xy, {
                        size: 18
                    })
                }), N.jsx("a", {
                    href: "https://www.linkedin.com/in/anjali-kanakan-138888116",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": "LinkedIn",
                    className: "text-muted-foreground hover:text-foreground transition-colors",
                    children: N.jsx(_y, {
                        size: 18
                    })
                }), N.jsx("a", {
                    href: "mailto:anjalikrishnaleela@gmail.com",
                    "aria-label": "Email",
                    className: "text-muted-foreground hover:text-foreground transition-colors",
                    children: N.jsx(Ey, {
                        size: 18
                    })
                })]
            })]
        })
    })
}
const tE = "modulepreload"
  , eE = function(a) {
    return "/" + a
}
  , Wp = {}
  , $o = function(i, r, o) {
    let c = Promise.resolve();
    if (r && r.length > 0) {
        let g = function(m) {
            return Promise.all(m.map(b => Promise.resolve(b).then(y => ({
                status: "fulfilled",
                value: y
            }), y => ({
                status: "rejected",
                reason: y
            }))))
        };
        document.getElementsByTagName("link");
        const h = document.querySelector("meta[property=csp-nonce]")
          , p = h?.nonce || h?.getAttribute("nonce");
        c = g(r.map(m => {
            if (m = eE(m),
            m in Wp)
                return;
            Wp[m] = !0;
            const b = m.endsWith(".css")
              , y = b ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${m}"]${y}`))
                return;
            const S = document.createElement("link");
            if (S.rel = b ? "stylesheet" : tE,
            b || (S.as = "script"),
            S.crossOrigin = "",
            S.href = m,
            p && S.setAttribute("nonce", p),
            document.head.appendChild(S),
            b)
                return new Promise( (_, w) => {
                    S.addEventListener("load", _),
                    S.addEventListener("error", () => w(new Error(`Unable to preload CSS for ${m}`)))
                }
                )
        }
        ))
    }
    function f(h) {
        const p = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (p.payload = h,
        window.dispatchEvent(p),
        !p.defaultPrevented)
            throw h
    }
    return c.then(h => {
        for (const p of h || [])
            p.status === "rejected" && f(p.reason);
        return i().catch(f)
    }
    )
}
  , nE = () => $o( () => import("./resume-qEZWA6IW.js"), __vite__mapDeps([0, 1]))
  , aE = lr("/resume")({
    component: Io(nE, "component")
})
  , lE = () => $o( () => import("./projects-CBxlUSfy.js"), [])
  , iE = lr("/projects")({
    component: Io(lE, "component")
})
  , rE = () => $o( () => import("./contact-DToiVfAh.js"), [])
  , oE = lr("/contact")({
    component: Io(rE, "component")
});
function tg(a, i) {
    if (typeof a == "function")
        return a(i);
    a != null && (a.current = i)
}
function sE(...a) {
    return i => {
        let r = !1;
        const o = a.map(c => {
            const f = tg(c, i);
            return !r && typeof f == "function" && (r = !0),
            f
        }
        );
        if (r)
            return () => {
                for (let c = 0; c < o.length; c++) {
                    const f = o[c];
                    typeof f == "function" ? f() : tg(a[c], null)
                }
            }
    }
}
var uE = Symbol.for("react.lazy")
  , Yo = fb[" use ".trim().toString()];
function cE(a) {
    return typeof a == "object" && a !== null && "then"in a
}
function Ry(a) {
    return a != null && typeof a == "object" && "$$typeof"in a && a.$$typeof === uE && "_payload"in a && cE(a._payload)
}
function fE(a) {
    const i = hE(a)
      , r = $.forwardRef( (o, c) => {
        let {children: f, ...h} = o;
        Ry(f) && typeof Yo == "function" && (f = Yo(f._payload));
        const p = $.Children.toArray(f)
          , g = p.find(pE);
        if (g) {
            const m = g.props.children
              , b = p.map(y => y === g ? $.Children.count(m) > 1 ? $.Children.only(null) : $.isValidElement(m) ? m.props.children : null : y);
            return N.jsx(i, {
                ...h,
                ref: c,
                children: $.isValidElement(m) ? $.cloneElement(m, void 0, b) : null
            })
        }
        return N.jsx(i, {
            ...h,
            ref: c,
            children: f
        })
    }
    );
    return r.displayName = `${a}.Slot`,
    r
}
var dE = fE("Slot");
function hE(a) {
    const i = $.forwardRef( (r, o) => {
        let {children: c, ...f} = r;
        if (Ry(c) && typeof Yo == "function" && (c = Yo(c._payload)),
        $.isValidElement(c)) {
            const h = yE(c)
              , p = gE(f, c.props);
            return c.type !== $.Fragment && (p.ref = o ? sE(o, h) : h),
            $.cloneElement(c, p)
        }
        return $.Children.count(c) > 1 ? $.Children.only(null) : null
    }
    );
    return i.displayName = `${a}.SlotClone`,
    i
}
var mE = Symbol("radix.slottable");
function pE(a) {
    return $.isValidElement(a) && typeof a.type == "function" && "__radixId"in a.type && a.type.__radixId === mE
}
function gE(a, i) {
    const r = {
        ...i
    };
    for (const o in i) {
        const c = a[o]
          , f = i[o];
        /^on[A-Z]/.test(o) ? c && f ? r[o] = (...p) => {
            const g = f(...p);
            return c(...p),
            g
        }
        : c && (r[o] = c) : o === "style" ? r[o] = {
            ...c,
            ...f
        } : o === "className" && (r[o] = [c, f].filter(Boolean).join(" "))
    }
    return {
        ...a,
        ...r
    }
}
function yE(a) {
    let i = Object.getOwnPropertyDescriptor(a.props, "ref")?.get
      , r = i && "isReactWarning"in i && i.isReactWarning;
    return r ? a.ref : (i = Object.getOwnPropertyDescriptor(a, "ref")?.get,
    r = i && "isReactWarning"in i && i.isReactWarning,
    r ? a.props.ref : a.props.ref || a.ref)
}
function wy(a) {
    var i, r, o = "";
    if (typeof a == "string" || typeof a == "number")
        o += a;
    else if (typeof a == "object")
        if (Array.isArray(a)) {
            var c = a.length;
            for (i = 0; i < c; i++)
                a[i] && (r = wy(a[i])) && (o && (o += " "),
                o += r)
        } else
            for (r in a)
                a[r] && (o && (o += " "),
                o += r);
    return o
}
function Ty() {
    for (var a, i, r = 0, o = "", c = arguments.length; r < c; r++)
        (a = arguments[r]) && (i = wy(a)) && (o && (o += " "),
        o += i);
    return o
}
const eg = a => typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a
  , ng = Ty
  , vE = (a, i) => r => {
    var o;
    if (i?.variants == null)
        return ng(a, r?.class, r?.className);
    const {variants: c, defaultVariants: f} = i
      , h = Object.keys(c).map(m => {
        const b = r?.[m]
          , y = f?.[m];
        if (b === null)
            return null;
        const S = eg(b) || eg(y);
        return c[m][S]
    }
    )
      , p = r && Object.entries(r).reduce( (m, b) => {
        let[y,S] = b;
        return S === void 0 || (m[y] = S),
        m
    }
    , {})
      , g = i == null || (o = i.compoundVariants) === null || o === void 0 ? void 0 : o.reduce( (m, b) => {
        let {class: y, className: S, ..._} = b;
        return Object.entries(_).every(w => {
            let[C,E] = w;
            return Array.isArray(E) ? E.includes({
                ...f,
                ...p
            }[C]) : {
                ...f,
                ...p
            }[C] === E
        }
        ) ? [...m, y, S] : m
    }
    , []);
    return ng(a, h, g, r?.class, r?.className)
}
  , bE = (a, i) => {
    const r = new Array(a.length + i.length);
    for (let o = 0; o < a.length; o++)
        r[o] = a[o];
    for (let o = 0; o < i.length; o++)
        r[a.length + o] = i[o];
    return r
}
  , SE = (a, i) => ({
    classGroupId: a,
    validator: i
})
  , Ay = (a=new Map, i=null, r) => ({
    nextPart: a,
    validators: i,
    classGroupId: r
})
  , Vo = "-"
  , ag = []
  , xE = "arbitrary.."
  , _E = a => {
    const i = RE(a)
      , {conflictingClassGroups: r, conflictingClassGroupModifiers: o} = a;
    return {
        getClassGroupId: h => {
            if (h.startsWith("[") && h.endsWith("]"))
                return EE(h);
            const p = h.split(Vo)
              , g = p[0] === "" && p.length > 1 ? 1 : 0;
            return My(p, g, i)
        }
        ,
        getConflictingClassGroupIds: (h, p) => {
            if (p) {
                const g = o[h]
                  , m = r[h];
                return g ? m ? bE(m, g) : g : m || ag
            }
            return r[h] || ag
        }
    }
}
  , My = (a, i, r) => {
    if (a.length - i === 0)
        return r.classGroupId;
    const c = a[i]
      , f = r.nextPart.get(c);
    if (f) {
        const m = My(a, i + 1, f);
        if (m)
            return m
    }
    const h = r.validators;
    if (h === null)
        return;
    const p = i === 0 ? a.join(Vo) : a.slice(i).join(Vo)
      , g = h.length;
    for (let m = 0; m < g; m++) {
        const b = h[m];
        if (b.validator(p))
            return b.classGroupId
    }
}
  , EE = a => a.slice(1, -1).indexOf(":") === -1 ? void 0 : ( () => {
    const i = a.slice(1, -1)
      , r = i.indexOf(":")
      , o = i.slice(0, r);
    return o ? xE + o : void 0
}
)()
  , RE = a => {
    const {theme: i, classGroups: r} = a;
    return wE(r, i)
}
  , wE = (a, i) => {
    const r = Ay();
    for (const o in a) {
        const c = a[o];
        ef(c, r, o, i)
    }
    return r
}
  , ef = (a, i, r, o) => {
    const c = a.length;
    for (let f = 0; f < c; f++) {
        const h = a[f];
        TE(h, i, r, o)
    }
}
  , TE = (a, i, r, o) => {
    if (typeof a == "string") {
        AE(a, i, r);
        return
    }
    if (typeof a == "function") {
        ME(a, i, r, o);
        return
    }
    zE(a, i, r, o)
}
  , AE = (a, i, r) => {
    const o = a === "" ? i : zy(i, a);
    o.classGroupId = r
}
  , ME = (a, i, r, o) => {
    if (CE(a)) {
        ef(a(o), i, r, o);
        return
    }
    i.validators === null && (i.validators = []),
    i.validators.push(SE(r, a))
}
  , zE = (a, i, r, o) => {
    const c = Object.entries(a)
      , f = c.length;
    for (let h = 0; h < f; h++) {
        const [p,g] = c[h];
        ef(g, zy(i, p), r, o)
    }
}
  , zy = (a, i) => {
    let r = a;
    const o = i.split(Vo)
      , c = o.length;
    for (let f = 0; f < c; f++) {
        const h = o[f];
        let p = r.nextPart.get(h);
        p || (p = Ay(),
        r.nextPart.set(h, p)),
        r = p
    }
    return r
}
  , CE = a => "isThemeGetter"in a && a.isThemeGetter === !0
  , OE = a => {
    if (a < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let i = 0
      , r = Object.create(null)
      , o = Object.create(null);
    const c = (f, h) => {
        r[f] = h,
        i++,
        i > a && (i = 0,
        o = r,
        r = Object.create(null))
    }
    ;
    return {
        get(f) {
            let h = r[f];
            if (h !== void 0)
                return h;
            if ((h = o[f]) !== void 0)
                return c(f, h),
                h
        },
        set(f, h) {
            f in r ? r[f] = h : c(f, h)
        }
    }
}
  , Xc = "!"
  , lg = ":"
  , NE = []
  , ig = (a, i, r, o, c) => ({
    modifiers: a,
    hasImportantModifier: i,
    baseClassName: r,
    maybePostfixModifierPosition: o,
    isExternal: c
})
  , jE = a => {
    const {prefix: i, experimentalParseClassName: r} = a;
    let o = c => {
        const f = [];
        let h = 0, p = 0, g = 0, m;
        const b = c.length;
        for (let C = 0; C < b; C++) {
            const E = c[C];
            if (h === 0 && p === 0) {
                if (E === lg) {
                    f.push(c.slice(g, C)),
                    g = C + 1;
                    continue
                }
                if (E === "/") {
                    m = C;
                    continue
                }
            }
            E === "[" ? h++ : E === "]" ? h-- : E === "(" ? p++ : E === ")" && p--
        }
        const y = f.length === 0 ? c : c.slice(g);
        let S = y
          , _ = !1;
        y.endsWith(Xc) ? (S = y.slice(0, -1),
        _ = !0) : y.startsWith(Xc) && (S = y.slice(1),
        _ = !0);
        const w = m && m > g ? m - g : void 0;
        return ig(f, _, S, w)
    }
    ;
    if (i) {
        const c = i + lg
          , f = o;
        o = h => h.startsWith(c) ? f(h.slice(c.length)) : ig(NE, !1, h, void 0, !0)
    }
    if (r) {
        const c = o;
        o = f => r({
            className: f,
            parseClassName: c
        })
    }
    return o
}
  , DE = a => {
    const i = new Map;
    return a.orderSensitiveModifiers.forEach( (r, o) => {
        i.set(r, 1e6 + o)
    }
    ),
    r => {
        const o = [];
        let c = [];
        for (let f = 0; f < r.length; f++) {
            const h = r[f]
              , p = h[0] === "["
              , g = i.has(h);
            p || g ? (c.length > 0 && (c.sort(),
            o.push(...c),
            c = []),
            o.push(h)) : c.push(h)
        }
        return c.length > 0 && (c.sort(),
        o.push(...c)),
        o
    }
}
  , LE = a => ({
    cache: OE(a.cacheSize),
    parseClassName: jE(a),
    sortModifiers: DE(a),
    ..._E(a)
})
  , UE = /\s+/
  , BE = (a, i) => {
    const {parseClassName: r, getClassGroupId: o, getConflictingClassGroupIds: c, sortModifiers: f} = i
      , h = []
      , p = a.trim().split(UE);
    let g = "";
    for (let m = p.length - 1; m >= 0; m -= 1) {
        const b = p[m]
          , {isExternal: y, modifiers: S, hasImportantModifier: _, baseClassName: w, maybePostfixModifierPosition: C} = r(b);
        if (y) {
            g = b + (g.length > 0 ? " " + g : g);
            continue
        }
        let E = !!C
          , z = o(E ? w.substring(0, C) : w);
        if (!z) {
            if (!E) {
                g = b + (g.length > 0 ? " " + g : g);
                continue
            }
            if (z = o(w),
            !z) {
                g = b + (g.length > 0 ? " " + g : g);
                continue
            }
            E = !1
        }
        const V = S.length === 0 ? "" : S.length === 1 ? S[0] : f(S).join(":")
          , Q = _ ? V + Xc : V
          , k = Q + z;
        if (h.indexOf(k) > -1)
            continue;
        h.push(k);
        const W = c(z, E);
        for (let P = 0; P < W.length; ++P) {
            const X = W[P];
            h.push(Q + X)
        }
        g = b + (g.length > 0 ? " " + g : g)
    }
    return g
}
  , HE = (...a) => {
    let i = 0, r, o, c = "";
    for (; i < a.length; )
        (r = a[i++]) && (o = Cy(r)) && (c && (c += " "),
        c += o);
    return c
}
  , Cy = a => {
    if (typeof a == "string")
        return a;
    let i, r = "";
    for (let o = 0; o < a.length; o++)
        a[o] && (i = Cy(a[o])) && (r && (r += " "),
        r += i);
    return r
}
  , kE = (a, ...i) => {
    let r, o, c, f;
    const h = g => {
        const m = i.reduce( (b, y) => y(b), a());
        return r = LE(m),
        o = r.cache.get,
        c = r.cache.set,
        f = p,
        p(g)
    }
      , p = g => {
        const m = o(g);
        if (m)
            return m;
        const b = BE(g, r);
        return c(g, b),
        b
    }
    ;
    return f = h,
    (...g) => f(HE(...g))
}
  , qE = []
  , ee = a => {
    const i = r => r[a] || qE;
    return i.isThemeGetter = !0,
    i
}
  , Oy = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , Ny = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , GE = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/
  , YE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , VE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , XE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , QE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , ZE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , ra = a => GE.test(a)
  , yt = a => !!a && !Number.isNaN(Number(a))
  , oa = a => !!a && Number.isInteger(Number(a))
  , Nc = a => a.endsWith("%") && yt(a.slice(0, -1))
  , zn = a => YE.test(a)
  , jy = () => !0
  , KE = a => VE.test(a) && !XE.test(a)
  , nf = () => !1
  , JE = a => QE.test(a)
  , PE = a => ZE.test(a)
  , FE = a => !lt(a) && !it(a)
  , IE = a => va(a, Uy, nf)
  , lt = a => Oy.test(a)
  , ka = a => va(a, By, KE)
  , rg = a => va(a, iR, yt)
  , $E = a => va(a, ky, jy)
  , WE = a => va(a, Hy, nf)
  , og = a => va(a, Dy, nf)
  , tR = a => va(a, Ly, PE)
  , Mo = a => va(a, qy, JE)
  , it = a => Ny.test(a)
  , Ji = a => Pa(a, By)
  , eR = a => Pa(a, Hy)
  , sg = a => Pa(a, Dy)
  , nR = a => Pa(a, Uy)
  , aR = a => Pa(a, Ly)
  , zo = a => Pa(a, qy, !0)
  , lR = a => Pa(a, ky, !0)
  , va = (a, i, r) => {
    const o = Oy.exec(a);
    return o ? o[1] ? i(o[1]) : r(o[2]) : !1
}
  , Pa = (a, i, r=!1) => {
    const o = Ny.exec(a);
    return o ? o[1] ? i(o[1]) : r : !1
}
  , Dy = a => a === "position" || a === "percentage"
  , Ly = a => a === "image" || a === "url"
  , Uy = a => a === "length" || a === "size" || a === "bg-size"
  , By = a => a === "length"
  , iR = a => a === "number"
  , Hy = a => a === "family-name"
  , ky = a => a === "number" || a === "weight"
  , qy = a => a === "shadow"
  , rR = () => {
    const a = ee("color")
      , i = ee("font")
      , r = ee("text")
      , o = ee("font-weight")
      , c = ee("tracking")
      , f = ee("leading")
      , h = ee("breakpoint")
      , p = ee("container")
      , g = ee("spacing")
      , m = ee("radius")
      , b = ee("shadow")
      , y = ee("inset-shadow")
      , S = ee("text-shadow")
      , _ = ee("drop-shadow")
      , w = ee("blur")
      , C = ee("perspective")
      , E = ee("aspect")
      , z = ee("ease")
      , V = ee("animate")
      , Q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , k = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
      , W = () => [...k(), it, lt]
      , P = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , X = () => ["auto", "contain", "none"]
      , H = () => [it, lt, g]
      , J = () => [ra, "full", "auto", ...H()]
      , ct = () => [oa, "none", "subgrid", it, lt]
      , nt = () => ["auto", {
        span: ["full", oa, it, lt]
    }, oa, it, lt]
      , ht = () => [oa, "auto", it, lt]
      , vt = () => ["auto", "min", "max", "fr", it, lt]
      , Ht = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
      , Rt = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
      , U = () => ["auto", ...H()]
      , K = () => [ra, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...H()]
      , ot = () => [ra, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...H()]
      , wt = () => [ra, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...H()]
      , I = () => [a, it, lt]
      , A = () => [...k(), sg, og, {
        position: [it, lt]
    }]
      , Y = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
    }]
      , F = () => ["auto", "cover", "contain", nR, IE, {
        size: [it, lt]
    }]
      , tt = () => [Nc, Ji, ka]
      , et = () => ["", "none", "full", m, it, lt]
      , st = () => ["", yt, Ji, ka]
      , bt = () => ["solid", "dashed", "dotted", "double"]
      , Yt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , dt = () => [yt, Nc, sg, og]
      , ke = () => ["", "none", w, it, lt]
      , ve = () => ["none", yt, it, lt]
      , ze = () => ["none", yt, it, lt]
      , sn = () => [yt, it, lt]
      , ge = () => [ra, "full", ...H()];
    return {
        cacheSize: 500,
        theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [zn],
            breakpoint: [zn],
            color: [jy],
            container: [zn],
            "drop-shadow": [zn],
            ease: ["in", "out", "in-out"],
            font: [FE],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [zn],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [zn],
            shadow: [zn],
            spacing: ["px", yt],
            text: [zn],
            "text-shadow": [zn],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", ra, lt, it, E]
            }],
            container: ["container"],
            columns: [{
                columns: [yt, lt, it, p]
            }],
            "break-after": [{
                "break-after": Q()
            }],
            "break-before": [{
                "break-before": Q()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            sr: ["sr-only", "not-sr-only"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: W()
            }],
            overflow: [{
                overflow: P()
            }],
            "overflow-x": [{
                "overflow-x": P()
            }],
            "overflow-y": [{
                "overflow-y": P()
            }],
            overscroll: [{
                overscroll: X()
            }],
            "overscroll-x": [{
                "overscroll-x": X()
            }],
            "overscroll-y": [{
                "overscroll-y": X()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: J()
            }],
            "inset-x": [{
                "inset-x": J()
            }],
            "inset-y": [{
                "inset-y": J()
            }],
            start: [{
                "inset-s": J(),
                start: J()
            }],
            end: [{
                "inset-e": J(),
                end: J()
            }],
            "inset-bs": [{
                "inset-bs": J()
            }],
            "inset-be": [{
                "inset-be": J()
            }],
            top: [{
                top: J()
            }],
            right: [{
                right: J()
            }],
            bottom: [{
                bottom: J()
            }],
            left: [{
                left: J()
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: [oa, "auto", it, lt]
            }],
            basis: [{
                basis: [ra, "full", "auto", p, ...H()]
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            flex: [{
                flex: [yt, ra, "auto", "initial", "none", lt]
            }],
            grow: [{
                grow: ["", yt, it, lt]
            }],
            shrink: [{
                shrink: ["", yt, it, lt]
            }],
            order: [{
                order: [oa, "first", "last", "none", it, lt]
            }],
            "grid-cols": [{
                "grid-cols": ct()
            }],
            "col-start-end": [{
                col: nt()
            }],
            "col-start": [{
                "col-start": ht()
            }],
            "col-end": [{
                "col-end": ht()
            }],
            "grid-rows": [{
                "grid-rows": ct()
            }],
            "row-start-end": [{
                row: nt()
            }],
            "row-start": [{
                "row-start": ht()
            }],
            "row-end": [{
                "row-end": ht()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": vt()
            }],
            "auto-rows": [{
                "auto-rows": vt()
            }],
            gap: [{
                gap: H()
            }],
            "gap-x": [{
                "gap-x": H()
            }],
            "gap-y": [{
                "gap-y": H()
            }],
            "justify-content": [{
                justify: [...Ht(), "normal"]
            }],
            "justify-items": [{
                "justify-items": [...Rt(), "normal"]
            }],
            "justify-self": [{
                "justify-self": ["auto", ...Rt()]
            }],
            "align-content": [{
                content: ["normal", ...Ht()]
            }],
            "align-items": [{
                items: [...Rt(), {
                    baseline: ["", "last"]
                }]
            }],
            "align-self": [{
                self: ["auto", ...Rt(), {
                    baseline: ["", "last"]
                }]
            }],
            "place-content": [{
                "place-content": Ht()
            }],
            "place-items": [{
                "place-items": [...Rt(), "baseline"]
            }],
            "place-self": [{
                "place-self": ["auto", ...Rt()]
            }],
            p: [{
                p: H()
            }],
            px: [{
                px: H()
            }],
            py: [{
                py: H()
            }],
            ps: [{
                ps: H()
            }],
            pe: [{
                pe: H()
            }],
            pbs: [{
                pbs: H()
            }],
            pbe: [{
                pbe: H()
            }],
            pt: [{
                pt: H()
            }],
            pr: [{
                pr: H()
            }],
            pb: [{
                pb: H()
            }],
            pl: [{
                pl: H()
            }],
            m: [{
                m: U()
            }],
            mx: [{
                mx: U()
            }],
            my: [{
                my: U()
            }],
            ms: [{
                ms: U()
            }],
            me: [{
                me: U()
            }],
            mbs: [{
                mbs: U()
            }],
            mbe: [{
                mbe: U()
            }],
            mt: [{
                mt: U()
            }],
            mr: [{
                mr: U()
            }],
            mb: [{
                mb: U()
            }],
            ml: [{
                ml: U()
            }],
            "space-x": [{
                "space-x": H()
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": H()
            }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{
                size: K()
            }],
            "inline-size": [{
                inline: ["auto", ...ot()]
            }],
            "min-inline-size": [{
                "min-inline": ["auto", ...ot()]
            }],
            "max-inline-size": [{
                "max-inline": ["none", ...ot()]
            }],
            "block-size": [{
                block: ["auto", ...wt()]
            }],
            "min-block-size": [{
                "min-block": ["auto", ...wt()]
            }],
            "max-block-size": [{
                "max-block": ["none", ...wt()]
            }],
            w: [{
                w: [p, "screen", ...K()]
            }],
            "min-w": [{
                "min-w": [p, "screen", "none", ...K()]
            }],
            "max-w": [{
                "max-w": [p, "screen", "none", "prose", {
                    screen: [h]
                }, ...K()]
            }],
            h: [{
                h: ["screen", "lh", ...K()]
            }],
            "min-h": [{
                "min-h": ["screen", "lh", "none", ...K()]
            }],
            "max-h": [{
                "max-h": ["screen", "lh", ...K()]
            }],
            "font-size": [{
                text: ["base", r, Ji, ka]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: [o, lR, $E]
            }],
            "font-stretch": [{
                "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Nc, lt]
            }],
            "font-family": [{
                font: [eR, WE, i]
            }],
            "font-features": [{
                "font-features": [lt]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: [c, it, lt]
            }],
            "line-clamp": [{
                "line-clamp": [yt, "none", it, rg]
            }],
            leading: [{
                leading: [f, ...H()]
            }],
            "list-image": [{
                "list-image": ["none", it, lt]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "list-style-type": [{
                list: ["disc", "decimal", "none", it, lt]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "placeholder-color": [{
                placeholder: I()
            }],
            "text-color": [{
                text: I()
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...bt(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: [yt, "from-font", "auto", it, ka]
            }],
            "text-decoration-color": [{
                decoration: I()
            }],
            "underline-offset": [{
                "underline-offset": [yt, "auto", it, lt]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: H()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", it, lt]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            wrap: [{
                wrap: ["break-word", "anywhere", "normal"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", it, lt]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: A()
            }],
            "bg-repeat": [{
                bg: Y()
            }],
            "bg-size": [{
                bg: F()
            }],
            "bg-image": [{
                bg: ["none", {
                    linear: [{
                        to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, oa, it, lt],
                    radial: ["", it, lt],
                    conic: [oa, it, lt]
                }, aR, tR]
            }],
            "bg-color": [{
                bg: I()
            }],
            "gradient-from-pos": [{
                from: tt()
            }],
            "gradient-via-pos": [{
                via: tt()
            }],
            "gradient-to-pos": [{
                to: tt()
            }],
            "gradient-from": [{
                from: I()
            }],
            "gradient-via": [{
                via: I()
            }],
            "gradient-to": [{
                to: I()
            }],
            rounded: [{
                rounded: et()
            }],
            "rounded-s": [{
                "rounded-s": et()
            }],
            "rounded-e": [{
                "rounded-e": et()
            }],
            "rounded-t": [{
                "rounded-t": et()
            }],
            "rounded-r": [{
                "rounded-r": et()
            }],
            "rounded-b": [{
                "rounded-b": et()
            }],
            "rounded-l": [{
                "rounded-l": et()
            }],
            "rounded-ss": [{
                "rounded-ss": et()
            }],
            "rounded-se": [{
                "rounded-se": et()
            }],
            "rounded-ee": [{
                "rounded-ee": et()
            }],
            "rounded-es": [{
                "rounded-es": et()
            }],
            "rounded-tl": [{
                "rounded-tl": et()
            }],
            "rounded-tr": [{
                "rounded-tr": et()
            }],
            "rounded-br": [{
                "rounded-br": et()
            }],
            "rounded-bl": [{
                "rounded-bl": et()
            }],
            "border-w": [{
                border: st()
            }],
            "border-w-x": [{
                "border-x": st()
            }],
            "border-w-y": [{
                "border-y": st()
            }],
            "border-w-s": [{
                "border-s": st()
            }],
            "border-w-e": [{
                "border-e": st()
            }],
            "border-w-bs": [{
                "border-bs": st()
            }],
            "border-w-be": [{
                "border-be": st()
            }],
            "border-w-t": [{
                "border-t": st()
            }],
            "border-w-r": [{
                "border-r": st()
            }],
            "border-w-b": [{
                "border-b": st()
            }],
            "border-w-l": [{
                "border-l": st()
            }],
            "divide-x": [{
                "divide-x": st()
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": st()
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{
                border: [...bt(), "hidden", "none"]
            }],
            "divide-style": [{
                divide: [...bt(), "hidden", "none"]
            }],
            "border-color": [{
                border: I()
            }],
            "border-color-x": [{
                "border-x": I()
            }],
            "border-color-y": [{
                "border-y": I()
            }],
            "border-color-s": [{
                "border-s": I()
            }],
            "border-color-e": [{
                "border-e": I()
            }],
            "border-color-bs": [{
                "border-bs": I()
            }],
            "border-color-be": [{
                "border-be": I()
            }],
            "border-color-t": [{
                "border-t": I()
            }],
            "border-color-r": [{
                "border-r": I()
            }],
            "border-color-b": [{
                "border-b": I()
            }],
            "border-color-l": [{
                "border-l": I()
            }],
            "divide-color": [{
                divide: I()
            }],
            "outline-style": [{
                outline: [...bt(), "none", "hidden"]
            }],
            "outline-offset": [{
                "outline-offset": [yt, it, lt]
            }],
            "outline-w": [{
                outline: ["", yt, Ji, ka]
            }],
            "outline-color": [{
                outline: I()
            }],
            shadow: [{
                shadow: ["", "none", b, zo, Mo]
            }],
            "shadow-color": [{
                shadow: I()
            }],
            "inset-shadow": [{
                "inset-shadow": ["none", y, zo, Mo]
            }],
            "inset-shadow-color": [{
                "inset-shadow": I()
            }],
            "ring-w": [{
                ring: st()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: I()
            }],
            "ring-offset-w": [{
                "ring-offset": [yt, ka]
            }],
            "ring-offset-color": [{
                "ring-offset": I()
            }],
            "inset-ring-w": [{
                "inset-ring": st()
            }],
            "inset-ring-color": [{
                "inset-ring": I()
            }],
            "text-shadow": [{
                "text-shadow": ["none", S, zo, Mo]
            }],
            "text-shadow-color": [{
                "text-shadow": I()
            }],
            opacity: [{
                opacity: [yt, it, lt]
            }],
            "mix-blend": [{
                "mix-blend": [...Yt(), "plus-darker", "plus-lighter"]
            }],
            "bg-blend": [{
                "bg-blend": Yt()
            }],
            "mask-clip": [{
                "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            "mask-composite": [{
                mask: ["add", "subtract", "intersect", "exclude"]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [yt]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": dt()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": dt()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": I()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": I()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": dt()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": dt()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": I()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": I()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": dt()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": dt()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": I()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": I()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": dt()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": dt()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": I()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": I()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": dt()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": dt()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": I()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": I()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": dt()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": dt()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": I()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": I()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": dt()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": dt()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": I()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": I()
            }],
            "mask-image-radial": [{
                "mask-radial": [it, lt]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": dt()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": dt()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": I()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": I()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: ["side", "corner"],
                    farthest: ["side", "corner"]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": k()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [yt]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": dt()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": dt()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": I()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": I()
            }],
            "mask-mode": [{
                mask: ["alpha", "luminance", "match"]
            }],
            "mask-origin": [{
                "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            "mask-position": [{
                mask: A()
            }],
            "mask-repeat": [{
                mask: Y()
            }],
            "mask-size": [{
                mask: F()
            }],
            "mask-type": [{
                "mask-type": ["alpha", "luminance"]
            }],
            "mask-image": [{
                mask: ["none", it, lt]
            }],
            filter: [{
                filter: ["", "none", it, lt]
            }],
            blur: [{
                blur: ke()
            }],
            brightness: [{
                brightness: [yt, it, lt]
            }],
            contrast: [{
                contrast: [yt, it, lt]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", _, zo, Mo]
            }],
            "drop-shadow-color": [{
                "drop-shadow": I()
            }],
            grayscale: [{
                grayscale: ["", yt, it, lt]
            }],
            "hue-rotate": [{
                "hue-rotate": [yt, it, lt]
            }],
            invert: [{
                invert: ["", yt, it, lt]
            }],
            saturate: [{
                saturate: [yt, it, lt]
            }],
            sepia: [{
                sepia: ["", yt, it, lt]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none", it, lt]
            }],
            "backdrop-blur": [{
                "backdrop-blur": ke()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [yt, it, lt]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [yt, it, lt]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": ["", yt, it, lt]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [yt, it, lt]
            }],
            "backdrop-invert": [{
                "backdrop-invert": ["", yt, it, lt]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [yt, it, lt]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [yt, it, lt]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": ["", yt, it, lt]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": H()
            }],
            "border-spacing-x": [{
                "border-spacing-x": H()
            }],
            "border-spacing-y": [{
                "border-spacing-y": H()
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", it, lt]
            }],
            "transition-behavior": [{
                transition: ["normal", "discrete"]
            }],
            duration: [{
                duration: [yt, "initial", it, lt]
            }],
            ease: [{
                ease: ["linear", "initial", z, it, lt]
            }],
            delay: [{
                delay: [yt, it, lt]
            }],
            animate: [{
                animate: ["none", V, it, lt]
            }],
            backface: [{
                backface: ["hidden", "visible"]
            }],
            perspective: [{
                perspective: [C, it, lt]
            }],
            "perspective-origin": [{
                "perspective-origin": W()
            }],
            rotate: [{
                rotate: ve()
            }],
            "rotate-x": [{
                "rotate-x": ve()
            }],
            "rotate-y": [{
                "rotate-y": ve()
            }],
            "rotate-z": [{
                "rotate-z": ve()
            }],
            scale: [{
                scale: ze()
            }],
            "scale-x": [{
                "scale-x": ze()
            }],
            "scale-y": [{
                "scale-y": ze()
            }],
            "scale-z": [{
                "scale-z": ze()
            }],
            "scale-3d": ["scale-3d"],
            skew: [{
                skew: sn()
            }],
            "skew-x": [{
                "skew-x": sn()
            }],
            "skew-y": [{
                "skew-y": sn()
            }],
            transform: [{
                transform: [it, lt, "", "none", "gpu", "cpu"]
            }],
            "transform-origin": [{
                origin: W()
            }],
            "transform-style": [{
                transform: ["3d", "flat"]
            }],
            translate: [{
                translate: ge()
            }],
            "translate-x": [{
                "translate-x": ge()
            }],
            "translate-y": [{
                "translate-y": ge()
            }],
            "translate-z": [{
                "translate-z": ge()
            }],
            "translate-none": ["translate-none"],
            accent: [{
                accent: I()
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            "caret-color": [{
                caret: I()
            }],
            "color-scheme": [{
                scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", it, lt]
            }],
            "field-sizing": [{
                "field-sizing": ["fixed", "content"]
            }],
            "pointer-events": [{
                "pointer-events": ["auto", "none"]
            }],
            resize: [{
                resize: ["none", "", "y", "x"]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": H()
            }],
            "scroll-mx": [{
                "scroll-mx": H()
            }],
            "scroll-my": [{
                "scroll-my": H()
            }],
            "scroll-ms": [{
                "scroll-ms": H()
            }],
            "scroll-me": [{
                "scroll-me": H()
            }],
            "scroll-mbs": [{
                "scroll-mbs": H()
            }],
            "scroll-mbe": [{
                "scroll-mbe": H()
            }],
            "scroll-mt": [{
                "scroll-mt": H()
            }],
            "scroll-mr": [{
                "scroll-mr": H()
            }],
            "scroll-mb": [{
                "scroll-mb": H()
            }],
            "scroll-ml": [{
                "scroll-ml": H()
            }],
            "scroll-p": [{
                "scroll-p": H()
            }],
            "scroll-px": [{
                "scroll-px": H()
            }],
            "scroll-py": [{
                "scroll-py": H()
            }],
            "scroll-ps": [{
                "scroll-ps": H()
            }],
            "scroll-pe": [{
                "scroll-pe": H()
            }],
            "scroll-pbs": [{
                "scroll-pbs": H()
            }],
            "scroll-pbe": [{
                "scroll-pbe": H()
            }],
            "scroll-pt": [{
                "scroll-pt": H()
            }],
            "scroll-pr": [{
                "scroll-pr": H()
            }],
            "scroll-pb": [{
                "scroll-pb": H()
            }],
            "scroll-pl": [{
                "scroll-pl": H()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", it, lt]
            }],
            fill: [{
                fill: ["none", ...I()]
            }],
            "stroke-w": [{
                stroke: [yt, Ji, ka, rg]
            }],
            stroke: [{
                stroke: ["none", ...I()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
}
  , oR = kE(rR);
function ir(...a) {
    return oR(Ty(a))
}
const sR = vE("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function uR({className: a, variant: i, asChild: r=!1, ...o}) {
    const c = r ? dE : "span";
    return N.jsx(c, {
        "data-slot": "badge",
        className: ir(sR({
            variant: i
        }), a),
        ...o
    })
}
function jc({className: a, ...i}) {
    return N.jsx("div", {
        "data-slot": "card",
        className: ir("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", a),
        ...i
    })
}
function zR({className: a, ...i}) {
    return N.jsx("div", {
        "data-slot": "card-header",
        className: ir("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", a),
        ...i
    })
}
function CR({className: a, ...i}) {
    return N.jsx("div", {
        "data-slot": "card-title",
        className: ir("leading-none font-semibold", a),
        ...i
    })
}
function Dc({className: a, ...i}) {
    return N.jsx("div", {
        "data-slot": "card-content",
        className: ir("px-6", a),
        ...i
    })
}
const cR = lr("/")({
    component: dR
})
  , fR = [{
    category: "Frontend",
    items: ["React", "TypeScript", "Angular.js", "TailwindCSS", "Redux", "HTML5", "CSS3", "Sass", "SCSS/Less", "Bootstrap", "Pug", "Javascript ES6+", "JQuery", "React Admin", "Material UI", "Core UI"]
}, {
    category: "Backend",
    items: ["Node.js", "Express", "JSON", "JWT", "GraphQL", "REST APIs", "Webpack", "Npm", "Vite"]
}, {
    category: "Database & Cloud",
    items: ["PostgreSQL", "MySQL", "Azure DevOps", "AWS", "Docker", "Kubernetes"]
}, {
    category: "Tools & Practices",
    items: ["Git", "GitHub Actions", "CI/CD", "Jest", "Lighthouse", "Agile / Scrum", "Bitbucket", "Figma", "Adobe XD", "Photoshop", "Illustrator"]
}, {
    category: "CMS & Standards",
    items: ["Drupal", "Wordpress", "WCAG Accessibility", "SEO", "Cross-browser Compatibility"]
}, {
    category: "AI Tools",
    items: ["Claude Code", "Github Copilot", "Antigravity", "ChatGPT", "Google Gemini"]
}];
function dR() {
    return N.jsxs("div", {
        className: "max-w-5xl mx-auto px-4 py-16 space-y-24",
        children: [N.jsxs("section", {
            className: "flex flex-col md:flex-row items-center gap-10",
            children: [N.jsxs("div", {
                className: "flex-1 space-y-6",
                children: [N.jsxs("div", {
                    className: "space-y-2",
                    children: [N.jsx("p", {
                        className: "text-sm font-semibold uppercase tracking-widest text-muted-foreground",
                        children: "Hello, I'm"
                    }), N.jsx("h1", {
                        className: "text-5xl sm:text-6xl font-extrabold tracking-tight",
                        children: "Anjali Kanakan"
                    }), N.jsxs("div", {
                        className: "flex items-center gap-2 text-xl text-muted-foreground font-medium",
                        children: [N.jsx(k2, {
                            size: 18
                        }), N.jsx("span", {
                            children: "Senior Front End Developer"
                        })]
                    })]
                }), N.jsxs("div", {
                    className: "flex items-center gap-2 text-sm text-muted-foreground",
                    children: [N.jsx(Z2, {
                        size: 14
                    }), N.jsx("span", {
                        children: "Thiruvananthapuram · On-site, Hybrid, and Remote"
                    })]
                }), N.jsx("p", {
                    className: "text-lg leading-relaxed text-muted-foreground max-w-xl",
                    children: "I build fast, responsible, accessible, high performance, and scalable web applications — from pixel-perfect UIs to robust backend systems. Passionate about clean code, great developer experience, and shipping products that users love."
                }), N.jsxs("div", {
                    className: "flex flex-wrap gap-3 pt-2",
                    children: [N.jsxs(ma, {
                        to: "/projects",
                        className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity",
                        children: ["View Projects ", N.jsx($p, {
                            size: 16
                        })]
                    }), N.jsxs(ma, {
                        to: "/resume",
                        className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border font-medium text-sm hover:bg-accent transition-colors",
                        children: [N.jsx(G2, {
                            size: 16
                        }), " Resume"]
                    })]
                }), N.jsxs("div", {
                    className: "flex items-center gap-4 pt-2",
                    children: [N.jsx("a", {
                        href: "https://github.com/anjalikanakan",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-muted-foreground hover:text-foreground transition-colors",
                        "aria-label": "GitHub",
                        children: N.jsx(xy, {
                            size: 20
                        })
                    }), N.jsx("a", {
                        href: "https://www.linkedin.com/in/anjali-kanakan-138888116",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-muted-foreground hover:text-foreground transition-colors",
                        "aria-label": "LinkedIn",
                        children: N.jsx(_y, {
                            size: 20
                        })
                    }), N.jsx("a", {
                        href: "mailto:anjalikrishnaleela@gmail.com",
                        className: "text-muted-foreground hover:text-foreground transition-colors",
                        "aria-label": "Email",
                        children: N.jsx(Ey, {
                            size: 20
                        })
                    })]
                })]
            }), N.jsx("div", {
                className: "shrink-0",
                children: N.jsxs("div", {
                    className: "relative",
                    children: [N.jsx("div", {
                        className: "absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl scale-110"
                    }), N.jsx("img", {
                        src: "/headshot-female.png",
                        alt: "Anjali Kanakan",
                        className: "relative w-56 h-64 sm:w-64 sm:h-72 object-cover rounded-3xl shadow-xl border border-border"
                    })]
                })
            })]
        }), N.jsxs("section", {
            className: "space-y-6",
            children: [N.jsx("h2", {
                className: "text-3xl font-bold",
                children: "About Me"
            }), N.jsxs("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: [N.jsx(jc, {
                    children: N.jsxs(Dc, {
                        className: "pt-6 space-y-3",
                        children: [N.jsx("h3", {
                            className: "font-semibold text-lg",
                            children: "Background"
                        }), N.jsx("p", {
                            className: "text-muted-foreground leading-relaxed",
                            children: "Senior Front End Developer with 7.8 years of experience specializing in creating intuitive, user-centric interfaces. Dedicated to applying user psychology principles for seamless, engaging digital experiences."
                        })]
                    })
                }), N.jsx(jc, {
                    children: N.jsxs(Dc, {
                        className: "pt-6 space-y-3",
                        children: [N.jsx("h3", {
                            className: "font-semibold text-lg",
                            children: "What I Do"
                        }), N.jsx("p", {
                            className: "text-muted-foreground leading-relaxed",
                            children: "Building performant, accessible front-end experiences — from pixel-perfect UI to scalable application architecture using HTML, CSS, SCSS, Sass/Less, Bootstrap, Pug, and jQuery. Building scalable component architectures with React.js, Angular JS, and JavaScript managing complex application state using Redux, and integrating RESTful APIs and third-party services for dynamic, data-driven UIs."
                        })]
                    })
                })]
            })]
        }), N.jsxs("section", {
            className: "space-y-8",
            id: "technologies",
            children: [N.jsxs("div", {
                children: [N.jsx("h2", {
                    className: "text-3xl font-bold",
                    children: "Technologies"
                }), N.jsx("p", {
                    className: "text-muted-foreground mt-2",
                    children: "Tools and technologies I work with on a regular basis."
                })]
            }), N.jsx("div", {
                className: "grid sm:grid-cols-2 gap-6",
                children: fR.map(a => N.jsx(jc, {
                    children: N.jsxs(Dc, {
                        className: "pt-6 space-y-4",
                        children: [N.jsx("h3", {
                            className: "font-semibold text-sm uppercase tracking-wider text-muted-foreground",
                            children: a.category
                        }), N.jsx("div", {
                            className: "flex flex-wrap gap-2",
                            children: a.items.map(i => N.jsx(uR, {
                                variant: "secondary",
                                className: "text-sm px-3 py-1",
                                children: i
                            }, i))
                        })]
                    })
                }, a.category))
            })]
        }), N.jsxs("section", {
            className: "text-center py-12 rounded-2xl border border-border bg-muted/30 space-y-4",
            children: [N.jsx("h2", {
                className: "text-3xl font-bold",
                children: "Let's Work Together"
            }), N.jsx("p", {
                className: "text-muted-foreground max-w-md mx-auto",
                children: "Open to new opportunities, collaborations, and interesting projects. Feel free to reach out."
            }), N.jsxs(ma, {
                to: "/contact",
                className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity",
                children: ["Get in Touch ", N.jsx($p, {
                    size: 16
                })]
            })]
        })]
    })
}
const hR = () => $o( () => import("./_slug-BMCJBUUE.js"), __vite__mapDeps([2, 1]))
  , mR = lr("/blog/$slug")({
    component: Io(hR, "component")
})
  , pR = aE.update({
    id: "/resume",
    path: "/resume",
    getParentRoute: () => Xl
})
  , gR = iE.update({
    id: "/projects",
    path: "/projects",
    getParentRoute: () => Xl
})
  , yR = oE.update({
    id: "/contact",
    path: "/contact",
    getParentRoute: () => Xl
})
  , vR = cR.update({
    id: "/",
    path: "/",
    getParentRoute: () => Xl
})
  , bR = mR.update({
    id: "/blog/$slug",
    path: "/blog/$slug",
    getParentRoute: () => Xl
})
  , SR = {
    IndexRoute: vR,
    ContactRoute: yR,
    ProjectsRoute: gR,
    ResumeRoute: pR,
    BlogSlugRoute: bR
}
  , xR = Xl._addFileChildren(SR)
  , _R = () => _2({
    routeTree: xR,
    scrollRestoration: !0,
    defaultPreloadStaleTime: 0
});
async function ER() {
    const a = await _R();
    let i;
    return i = [],
    window.__TSS_START_OPTIONS__ = {
        serializationAdapters: i
    },
    i.push(A_),
    a.options.serializationAdapters && i.push(...a.options.serializationAdapters),
    a.update({
        basepath: "",
        serializationAdapters: i
    }),
    a.stores.matchesId.get().length || await z_(a),
    a
}
async function RR() {
    const a = await ER();
    return window.$_TSR?.h(),
    a
}
var Lc;
function wR() {
    return Lc || (Lc = RR()),
    N.jsx(j_, {
        promise: Lc,
        children: a => N.jsx(w2, {
            router: a
        })
    })
}
$.startTransition( () => {
    yb.hydrateRoot(document, N.jsx($.StrictMode, {
        children: N.jsx(wR, {})
    }))
}
);
export {uR as B, jc as C, xy as G, ma as L, Ey as M, mR as R, k2 as a, Dc as b, zR as c, CR as d, _y as e, Z2 as f, ir as g, Dn as h, fE as i, N as j, $ as r};
