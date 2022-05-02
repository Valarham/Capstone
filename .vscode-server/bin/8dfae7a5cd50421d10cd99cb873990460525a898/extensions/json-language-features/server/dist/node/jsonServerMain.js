;(() => {
  var e = {
      2775: (e, t, n) => {
        ;(() => {
          var e = {
              46: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                  (t.default = function (e, t, { signal: n } = {}) {
                    return new Promise((r, o) => {
                      function i() {
                        null == n || n.removeEventListener('abort', i),
                          e.removeListener(t, s),
                          e.removeListener('error', a)
                      }
                      function s(...e) {
                        i(), r(e)
                      }
                      function a(e) {
                        i(), o(e)
                      }
                      null == n || n.addEventListener('abort', i),
                        e.on(t, s),
                        e.on('error', a)
                    })
                  })
              },
              54: function (e, t, n) {
                'use strict'
                var r =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e }
                  }
                const o = n(361),
                  i = r(n(374)),
                  s = r(n(304)),
                  a = i.default('agent-base')
                function c() {
                  const { stack: e } = new Error()
                  return (
                    'string' == typeof e &&
                    e
                      .split('\n')
                      .some(
                        (e) =>
                          -1 !== e.indexOf('(https.js:') ||
                          -1 !== e.indexOf('node:https:')
                      )
                  )
                }
                function u(e, t) {
                  return new u.Agent(e, t)
                }
                !(function (e) {
                  class t extends o.EventEmitter {
                    constructor(e, t) {
                      super()
                      let n = t
                      'function' == typeof e
                        ? (this.callback = e)
                        : e && (n = e),
                        (this.timeout = null),
                        n &&
                          'number' == typeof n.timeout &&
                          (this.timeout = n.timeout),
                        (this.maxFreeSockets = 1),
                        (this.maxSockets = 1),
                        (this.maxTotalSockets = 1 / 0),
                        (this.sockets = {}),
                        (this.freeSockets = {}),
                        (this.requests = {}),
                        (this.options = {})
                    }
                    get defaultPort() {
                      return 'number' == typeof this.explicitDefaultPort
                        ? this.explicitDefaultPort
                        : c()
                        ? 443
                        : 80
                    }
                    set defaultPort(e) {
                      this.explicitDefaultPort = e
                    }
                    get protocol() {
                      return 'string' == typeof this.explicitProtocol
                        ? this.explicitProtocol
                        : c()
                        ? 'https:'
                        : 'http:'
                    }
                    set protocol(e) {
                      this.explicitProtocol = e
                    }
                    callback(e, t, n) {
                      throw new Error(
                        '"agent-base" has no default implementation, you must subclass and override `callback()`'
                      )
                    }
                    addRequest(e, t) {
                      const n = Object.assign({}, t)
                      'boolean' != typeof n.secureEndpoint &&
                        (n.secureEndpoint = c()),
                        null == n.host && (n.host = 'localhost'),
                        null == n.port &&
                          (n.port = n.secureEndpoint ? 443 : 80),
                        null == n.protocol &&
                          (n.protocol = n.secureEndpoint ? 'https:' : 'http:'),
                        n.host && n.path && delete n.path,
                        delete n.agent,
                        delete n.hostname,
                        delete n._defaultAgent,
                        delete n.defaultPort,
                        delete n.createConnection,
                        (e._last = !0),
                        (e.shouldKeepAlive = !1)
                      let r = !1,
                        o = null
                      const i = n.timeout || this.timeout,
                        u = (t) => {
                          e._hadError ||
                            (e.emit('error', t), (e._hadError = !0))
                        },
                        l = () => {
                          ;(o = null), (r = !0)
                          const e = new Error(
                            `A "socket" was not created for HTTP request before ${i}ms`
                          )
                          ;(e.code = 'ETIMEOUT'), u(e)
                        },
                        d = (e) => {
                          r ||
                            (null !== o && (clearTimeout(o), (o = null)), u(e))
                        },
                        f = (t) => {
                          if (r) return
                          if (
                            (null != o && (clearTimeout(o), (o = null)),
                            (i = t),
                            Boolean(i) && 'function' == typeof i.addRequest)
                          )
                            return (
                              a(
                                'Callback returned another Agent instance %o',
                                t.constructor.name
                              ),
                              void t.addRequest(e, n)
                            )
                          var i
                          if (t)
                            return (
                              t.once('free', () => {
                                this.freeSocket(t, n)
                              }),
                              void e.onSocket(t)
                            )
                          const s = new Error(
                            `no Duplex stream was returned to agent-base for \`${e.method} ${e.path}\``
                          )
                          u(s)
                        }
                      if ('function' == typeof this.callback) {
                        this.promisifiedCallback ||
                          (this.callback.length >= 3
                            ? (a(
                                'Converting legacy callback function to promise'
                              ),
                              (this.promisifiedCallback = s.default(
                                this.callback
                              )))
                            : (this.promisifiedCallback = this.callback)),
                          'number' == typeof i &&
                            i > 0 &&
                            (o = setTimeout(l, i)),
                          'port' in n &&
                            'number' != typeof n.port &&
                            (n.port = Number(n.port))
                        try {
                          a(
                            'Resolving socket for %o request: %o',
                            n.protocol,
                            `${e.method} ${e.path}`
                          ),
                            Promise.resolve(
                              this.promisifiedCallback(e, n)
                            ).then(f, d)
                        } catch (e) {
                          Promise.reject(e).catch(d)
                        }
                      } else u(new Error('`callback` is not defined'))
                    }
                    freeSocket(e, t) {
                      a('Freeing socket %o %o', e.constructor.name, t),
                        e.destroy()
                    }
                    destroy() {
                      a('Destroying agent %o', this.constructor.name)
                    }
                  }
                  ;(e.Agent = t), (e.prototype = e.Agent.prototype)
                })(u || (u = {})),
                  (e.exports = u)
              },
              304: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                  (t.default = function (e) {
                    return function (t, n) {
                      return new Promise((r, o) => {
                        e.call(this, t, n, (e, t) => {
                          e ? o(e) : r(t)
                        })
                      })
                    }
                  })
              },
              370: function (e, t, n) {
                'use strict'
                var r =
                    (this && this.__awaiter) ||
                    function (e, t, n, r) {
                      return new (n || (n = Promise))(function (o, i) {
                        function s(e) {
                          try {
                            c(r.next(e))
                          } catch (e) {
                            i(e)
                          }
                        }
                        function a(e) {
                          try {
                            c(r.throw(e))
                          } catch (e) {
                            i(e)
                          }
                        }
                        function c(e) {
                          var t
                          e.done
                            ? o(e.value)
                            : ((t = e.value),
                              t instanceof n
                                ? t
                                : new n(function (e) {
                                    e(t)
                                  })).then(s, a)
                        }
                        c((r = r.apply(e, t || [])).next())
                      })
                    },
                  o =
                    (this && this.__importDefault) ||
                    function (e) {
                      return e && e.__esModule ? e : { default: e }
                    }
                Object.defineProperty(t, '__esModule', { value: !0 })
                const i = o(n(808)),
                  s = o(n(404)),
                  a = o(n(310)),
                  c = o(n(374)),
                  u = o(n(46)),
                  l = n(54),
                  d = (0, c.default)('http-proxy-agent')
                class f extends l.Agent {
                  constructor(e) {
                    let t
                    if (
                      ((t = 'string' == typeof e ? a.default.parse(e) : e), !t)
                    )
                      throw new Error(
                        'an HTTP(S) proxy server `host` and `port` must be specified!'
                      )
                    d('Creating new HttpProxyAgent instance: %o', t), super(t)
                    const n = Object.assign({}, t)
                    var r
                    ;(this.secureProxy =
                      t.secureProxy ||
                      ('string' == typeof (r = n.protocol) &&
                        /^https:?$/i.test(r))),
                      (n.host = n.hostname || n.host),
                      'string' == typeof n.port &&
                        (n.port = parseInt(n.port, 10)),
                      !n.port &&
                        n.host &&
                        (n.port = this.secureProxy ? 443 : 80),
                      n.host && n.path && (delete n.path, delete n.pathname),
                      (this.proxy = n)
                  }
                  callback(e, t) {
                    return r(this, void 0, void 0, function* () {
                      const { proxy: n, secureProxy: r } = this,
                        o = a.default.parse(e.path)
                      let c
                      if (
                        (o.protocol || (o.protocol = 'http:'),
                        o.hostname ||
                          (o.hostname = t.hostname || t.host || null),
                        null == o.port &&
                          (t.port, 1) &&
                          (o.port = String(t.port)),
                        '80' === o.port && (o.port = ''),
                        (e.path = a.default.format(o)),
                        n.auth &&
                          e.setHeader(
                            'Proxy-Authorization',
                            `Basic ${Buffer.from(n.auth).toString('base64')}`
                          ),
                        r
                          ? (d('Creating `tls.Socket`: %o', n),
                            (c = s.default.connect(n)))
                          : (d('Creating `net.Socket`: %o', n),
                            (c = i.default.connect(n))),
                        e._header)
                      ) {
                        let t, n
                        d('Regenerating stored HTTP header string for request'),
                          (e._header = null),
                          e._implicitHeader(),
                          e.output && e.output.length > 0
                            ? (d(
                                'Patching connection write() output buffer with updated header'
                              ),
                              (t = e.output[0]),
                              (n = t.indexOf('\r\n\r\n') + 4),
                              (e.output[0] = e._header + t.substring(n)),
                              d('Output buffer: %o', e.output))
                            : e.outputData &&
                              e.outputData.length > 0 &&
                              (d(
                                'Patching connection write() output buffer with updated header'
                              ),
                              (t = e.outputData[0].data),
                              (n = t.indexOf('\r\n\r\n') + 4),
                              (e.outputData[0].data =
                                e._header + t.substring(n)),
                              d('Output buffer: %o', e.outputData[0].data))
                      }
                      return yield (0, u.default)(c, 'connect'), c
                    })
                  }
                }
                t.default = f
              },
              201: function (e, t, n) {
                'use strict'
                const r = (
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e }
                  }
                )(n(370))
                function o(e) {
                  return new r.default(e)
                }
                !(function (e) {
                  ;(e.HttpProxyAgent = r.default),
                    (e.prototype = r.default.prototype)
                })(o || (o = {})),
                  (e.exports = o)
              },
              146: function (e, t, n) {
                'use strict'
                var r =
                    (this && this.__awaiter) ||
                    function (e, t, n, r) {
                      return new (n || (n = Promise))(function (o, i) {
                        function s(e) {
                          try {
                            c(r.next(e))
                          } catch (e) {
                            i(e)
                          }
                        }
                        function a(e) {
                          try {
                            c(r.throw(e))
                          } catch (e) {
                            i(e)
                          }
                        }
                        function c(e) {
                          var t
                          e.done
                            ? o(e.value)
                            : ((t = e.value),
                              t instanceof n
                                ? t
                                : new n(function (e) {
                                    e(t)
                                  })).then(s, a)
                        }
                        c((r = r.apply(e, t || [])).next())
                      })
                    },
                  o =
                    (this && this.__importDefault) ||
                    function (e) {
                      return e && e.__esModule ? e : { default: e }
                    }
                Object.defineProperty(t, '__esModule', { value: !0 })
                const i = o(n(808)),
                  s = o(n(404)),
                  a = o(n(310)),
                  c = o(n(491)),
                  u = o(n(374)),
                  l = n(54),
                  d = o(n(829)),
                  f = u.default('https-proxy-agent:agent')
                class h extends l.Agent {
                  constructor(e) {
                    let t
                    if (
                      ((t = 'string' == typeof e ? a.default.parse(e) : e), !t)
                    )
                      throw new Error(
                        'an HTTP(S) proxy server `host` and `port` must be specified!'
                      )
                    f('creating new HttpsProxyAgent instance: %o', t), super(t)
                    const n = Object.assign({}, t)
                    var r
                    ;(this.secureProxy =
                      t.secureProxy ||
                      ('string' == typeof (r = n.protocol) &&
                        /^https:?$/i.test(r))),
                      (n.host = n.hostname || n.host),
                      'string' == typeof n.port &&
                        (n.port = parseInt(n.port, 10)),
                      !n.port &&
                        n.host &&
                        (n.port = this.secureProxy ? 443 : 80),
                      this.secureProxy &&
                        !('ALPNProtocols' in n) &&
                        (n.ALPNProtocols = ['http 1.1']),
                      n.host && n.path && (delete n.path, delete n.pathname),
                      (this.proxy = n)
                  }
                  callback(e, t) {
                    return r(this, void 0, void 0, function* () {
                      const { proxy: n, secureProxy: r } = this
                      let o
                      r
                        ? (f('Creating `tls.Socket`: %o', n),
                          (o = s.default.connect(n)))
                        : (f('Creating `net.Socket`: %o', n),
                          (o = i.default.connect(n)))
                      const a = Object.assign({}, n.headers)
                      let u = `CONNECT ${t.host}:${t.port} HTTP/1.1\r\n`
                      n.auth &&
                        (a['Proxy-Authorization'] = `Basic ${Buffer.from(
                          n.auth
                        ).toString('base64')}`)
                      let { host: l, port: h, secureEndpoint: m } = t
                      ;(function (e, t) {
                        return Boolean((!t && 80 === e) || (t && 443 === e))
                      })(h, m) || (l += `:${h}`),
                        (a.Host = l),
                        (a.Connection = 'close')
                      for (const e of Object.keys(a)) u += `${e}: ${a[e]}\r\n`
                      const g = d.default(o)
                      o.write(`${u}\r\n`)
                      const { statusCode: y, buffered: v } = yield g
                      if (200 === y) {
                        if ((e.once('socket', p), t.secureEndpoint)) {
                          const e = t.servername || t.host
                          if (!e)
                            throw new Error('Could not determine "servername"')
                          return (
                            f('Upgrading socket connection to TLS'),
                            s.default.connect(
                              Object.assign(
                                Object.assign(
                                  {},
                                  (function (e, ...t) {
                                    const n = {}
                                    let r
                                    for (r in e) t.includes(r) || (n[r] = e[r])
                                    return n
                                  })(t, 'host', 'hostname', 'path', 'port')
                                ),
                                { socket: o, servername: e }
                              )
                            )
                          )
                        }
                        return o
                      }
                      o.destroy()
                      const b = new i.default.Socket()
                      return (
                        (b.readable = !0),
                        e.once('socket', (e) => {
                          f('replaying proxy buffer for failed request'),
                            c.default(e.listenerCount('data') > 0),
                            e.push(v),
                            e.push(null)
                        }),
                        b
                      )
                    })
                  }
                }
                function p(e) {
                  e.resume()
                }
                t.default = h
              },
              18: function (e, t, n) {
                'use strict'
                const r = (
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e }
                  }
                )(n(146))
                function o(e) {
                  return new r.default(e)
                }
                !(function (e) {
                  ;(e.HttpsProxyAgent = r.default),
                    (e.prototype = r.default.prototype)
                })(o || (o = {})),
                  (e.exports = o)
              },
              829: function (e, t, n) {
                'use strict'
                var r =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e }
                  }
                Object.defineProperty(t, '__esModule', { value: !0 })
                const o = r(n(374)).default(
                  'https-proxy-agent:parse-proxy-response'
                )
                t.default = function (e) {
                  return new Promise((t, n) => {
                    let r = 0
                    const i = []
                    function s() {
                      const n = e.read()
                      n
                        ? (function (e) {
                            i.push(e), (r += e.length)
                            const n = Buffer.concat(i, r)
                            if (-1 === n.indexOf('\r\n\r\n'))
                              return (
                                o(
                                  'have not received end of HTTP headers yet...'
                                ),
                                void s()
                              )
                            const a = n.toString('ascii', 0, n.indexOf('\r\n')),
                              c = +a.split(' ')[1]
                            o('got proxy server response: %o', a),
                              t({ statusCode: c, buffered: n })
                          })(n)
                        : e.once('readable', s)
                    }
                    function a(e) {
                      o('onclose had error %o', e)
                    }
                    function c() {
                      o('onend')
                    }
                    e.on('error', function t(r) {
                      e.removeListener('end', c),
                        e.removeListener('error', t),
                        e.removeListener('close', a),
                        e.removeListener('readable', s),
                        o('onerror %o', r),
                        n(r)
                    }),
                      e.on('close', a),
                      e.on('end', c),
                      s()
                  })
                }
              },
              539: function (e, t, n) {
                'use strict'
                var r =
                  (this && this.__assign) ||
                  function () {
                    return (r =
                      Object.assign ||
                      function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                          for (var o in (t = arguments[n]))
                            Object.prototype.hasOwnProperty.call(t, o) &&
                              (e[o] = t[o])
                        return e
                      }).apply(this, arguments)
                  }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                  (t.getErrorStatusDescription = t.xhr = t.configure = void 0)
                var o = n(310),
                  i = n(687),
                  s = n(685),
                  a = n(796),
                  c = n(472),
                  u = n(18),
                  l = n(201)
                if (process.env.VSCODE_NLS_CONFIG) {
                  var d = process.env.VSCODE_NLS_CONFIG
                  c.config(JSON.parse(d))
                }
                var f = c.loadMessageBundle(),
                  h = null,
                  p = !0
                function m(e) {
                  var t
                  return new Promise(function (n, r) {
                    var a = (0, o.parse)(e.url),
                      c = {
                        hostname: a.hostname,
                        agent: !!e.agent && e.agent,
                        port: a.port
                          ? parseInt(a.port)
                          : 'https:' === a.protocol
                          ? 443
                          : 80,
                        path: a.path,
                        method: e.type || 'GET',
                        headers: e.headers,
                        rejectUnauthorized:
                          'boolean' != typeof e.strictSSL || e.strictSSL,
                      }
                    e.user && e.password && (c.auth = e.user + ':' + e.password)
                    var u = function (r) {
                      if (
                        r.statusCode >= 300 &&
                        r.statusCode < 400 &&
                        e.followRedirects &&
                        e.followRedirects > 0 &&
                        r.headers.location
                      ) {
                        var i = r.headers.location
                        i.startsWith('/') &&
                          (i = (0, o.format)({
                            protocol: a.protocol,
                            hostname: a.hostname,
                            port: a.port,
                            pathname: i,
                          })),
                          n(
                            m(
                              (function (e) {
                                for (
                                  var t = [], n = 1;
                                  n < arguments.length;
                                  n++
                                )
                                  t[n - 1] = arguments[n]
                                return (
                                  t.forEach(function (t) {
                                    return Object.keys(t).forEach(function (n) {
                                      return (e[n] = t[n])
                                    })
                                  }),
                                  e
                                )
                              })({}, e, {
                                url: i,
                                followRedirects: e.followRedirects - 1,
                              })
                            )
                          )
                      } else n({ req: t, res: r })
                    }
                    ;(t =
                      'https:' === a.protocol
                        ? i.request(c, u)
                        : s.request(c, u)).on('error', r),
                      e.timeout && t.setTimeout(e.timeout),
                      e.data && t.write(e.data),
                      t.end()
                  })
                }
                ;(t.configure = function (e, t) {
                  ;(h = e), (p = t)
                }),
                  (t.xhr = function (e) {
                    return (
                      'boolean' != typeof (e = r({}, e)).strictSSL &&
                        (e.strictSSL = p),
                      e.agent ||
                        (e.agent = (function (e, t) {
                          void 0 === t && (t = {})
                          var n = (0, o.parse)(e),
                            r =
                              t.proxyUrl ||
                              (function (e) {
                                return 'http:' === e.protocol
                                  ? process.env.HTTP_PROXY ||
                                      process.env.http_proxy ||
                                      null
                                  : ('https:' === e.protocol &&
                                      (process.env.HTTPS_PROXY ||
                                        process.env.https_proxy ||
                                        process.env.HTTP_PROXY ||
                                        process.env.http_proxy)) ||
                                      null
                              })(n)
                          if (!r) return null
                          var i = (0, o.parse)(r)
                          if (!/^https?:$/.test(i.protocol)) return null
                          var s = {
                            host: i.hostname,
                            port: Number(i.port),
                            auth: i.auth,
                            rejectUnauthorized:
                              'boolean' != typeof t.strictSSL || t.strictSSL,
                            protocol: i.protocol,
                          }
                          return 'http:' === n.protocol ? l(s) : u(s)
                        })(e.url, { proxyUrl: h, strictSSL: p })),
                      'number' != typeof e.followRedirects &&
                        (e.followRedirects = 5),
                      m(e).then(
                        function (n) {
                          return new Promise(function (r, i) {
                            var s,
                              c,
                              u = n.res,
                              l = u,
                              d = !1,
                              h = u.headers && u.headers['content-encoding']
                            if (
                              h &&
                              ((s = e.type),
                              (c = n.res.statusCode),
                              !(
                                'HEAD' === s ||
                                (c >= 100 && c < 200) ||
                                204 === c ||
                                304 === c
                              ))
                            ) {
                              var p = {
                                flush: a.constants.Z_SYNC_FLUSH,
                                finishFlush: a.constants.Z_SYNC_FLUSH,
                              }
                              if ('gzip' === h) {
                                var m = a.createGunzip(p)
                                u.pipe(m), (l = m)
                              } else if ('deflate' === h) {
                                var g = a.createInflate(p)
                                u.pipe(g), (l = g)
                              }
                            }
                            var y = []
                            l.on('data', function (e) {
                              return y.push(e)
                            }),
                              l.on('end', function () {
                                if (!d) {
                                  if (
                                    ((d = !0),
                                    e.followRedirects > 0 &&
                                      ((u.statusCode >= 300 &&
                                        u.statusCode <= 303) ||
                                        307 === u.statusCode))
                                  ) {
                                    var n = u.headers.location
                                    if (n.startsWith('/')) {
                                      var s = (0, o.parse)(e.url)
                                      n = (0, o.format)({
                                        protocol: s.protocol,
                                        hostname: s.hostname,
                                        port: s.port,
                                        pathname: n,
                                      })
                                    }
                                    if (n) {
                                      var a = {
                                        type: e.type,
                                        url: n,
                                        user: e.user,
                                        password: e.password,
                                        headers: e.headers,
                                        timeout: e.timeout,
                                        followRedirects: e.followRedirects - 1,
                                        data: e.data,
                                      }
                                      return void (0, t.xhr)(a).then(r, i)
                                    }
                                  }
                                  var c = Buffer.concat(y),
                                    l = {
                                      responseText: c.toString(),
                                      body: c,
                                      status: u.statusCode,
                                      headers: u.headers || {},
                                    }
                                  ;(u.statusCode >= 200 &&
                                    u.statusCode < 300) ||
                                  1223 === u.statusCode
                                    ? r(l)
                                    : i(l)
                                }
                              }),
                              l.on('error', function (t) {
                                var n = {
                                  responseText: f(
                                    'error',
                                    'Unable to access {0}. Error: {1}',
                                    e.url,
                                    t.message
                                  ),
                                  body: Buffer.concat(y),
                                  status: 500,
                                  headers: {},
                                }
                                ;(d = !0), i(n)
                              })
                          })
                        },
                        function (t) {
                          var n
                          return (
                            (n = e.agent
                              ? f(
                                  'error.cannot.connect.proxy',
                                  'Unable to connect to {0} through a proxy. Error: {1}',
                                  e.url,
                                  t.message
                                )
                              : f(
                                  'error.cannot.connect',
                                  'Unable to connect to {0}. Error: {1}',
                                  e.url,
                                  t.message
                                )),
                            Promise.reject({
                              responseText: n,
                              body: Buffer.concat([]),
                              status: 404,
                              headers: {},
                            })
                          )
                        }
                      )
                    )
                  }),
                  (t.getErrorStatusDescription = function (e) {
                    if (!(e < 400))
                      switch (e) {
                        case 400:
                          return f(
                            'status.400',
                            'Bad request. The request cannot be fulfilled due to bad syntax.'
                          )
                        case 401:
                          return f(
                            'status.401',
                            'Unauthorized. The server is refusing to respond.'
                          )
                        case 403:
                          return f(
                            'status.403',
                            'Forbidden. The server is refusing to respond.'
                          )
                        case 404:
                          return f(
                            'status.404',
                            'Not Found. The requested location could not be found.'
                          )
                        case 405:
                          return f(
                            'status.405',
                            'Method not allowed. A request was made using a request method not supported by that location.'
                          )
                        case 406:
                          return f(
                            'status.406',
                            'Not Acceptable. The server can only generate a response that is not accepted by the client.'
                          )
                        case 407:
                          return f(
                            'status.407',
                            'Proxy Authentication Required. The client must first authenticate itself with the proxy.'
                          )
                        case 408:
                          return f(
                            'status.408',
                            'Request Timeout. The server timed out waiting for the request.'
                          )
                        case 409:
                          return f(
                            'status.409',
                            'Conflict. The request could not be completed because of a conflict in the request.'
                          )
                        case 410:
                          return f(
                            'status.410',
                            'Gone. The requested page is no longer available.'
                          )
                        case 411:
                          return f(
                            'status.411',
                            'Length Required. The "Content-Length" is not defined.'
                          )
                        case 412:
                          return f(
                            'status.412',
                            'Precondition Failed. The precondition given in the request evaluated to false by the server.'
                          )
                        case 413:
                          return f(
                            'status.413',
                            'Request Entity Too Large. The server will not accept the request, because the request entity is too large.'
                          )
                        case 414:
                          return f(
                            'status.414',
                            'Request-URI Too Long. The server will not accept the request, because the URL is too long.'
                          )
                        case 415:
                          return f(
                            'status.415',
                            'Unsupported Media Type. The server will not accept the request, because the media type is not supported.'
                          )
                        case 500:
                          return f('status.500', 'Internal Server Error.')
                        case 501:
                          return f(
                            'status.501',
                            'Not Implemented. The server either does not recognize the request method, or it lacks the ability to fulfill the request.'
                          )
                        case 503:
                          return f(
                            'status.503',
                            'Service Unavailable. The server is currently unavailable (overloaded or down).'
                          )
                        default:
                          return f('status.416', 'HTTP status code {0}', e)
                      }
                  })
              },
              800: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                  (t.config =
                    t.loadMessageBundle =
                    t.localize =
                    t.format =
                    t.setPseudo =
                    t.isPseudo =
                    t.isDefined =
                    t.BundleFormat =
                    t.MessageFormat =
                      void 0)
                var r,
                  o,
                  i,
                  s = n(926)
                function a(e) {
                  return void 0 !== e
                }
                function c(e, n) {
                  return (
                    t.isPseudo &&
                      (e = '［' + e.replace(/[aouei]/g, '$&$&') + '］'),
                    0 === n.length
                      ? e
                      : e.replace(/\{(\d+)\}/g, function (e, t) {
                          var r = t[0],
                            o = n[r],
                            i = e
                          return (
                            'string' == typeof o
                              ? (i = o)
                              : ('number' != typeof o &&
                                  'boolean' != typeof o &&
                                  null != o) ||
                                (i = String(o)),
                            i
                          )
                        })
                  )
                }
                ;((i = t.MessageFormat || (t.MessageFormat = {})).file =
                  'file'),
                  (i.bundle = 'bundle'),
                  (i.both = 'both'),
                  ((o = t.BundleFormat || (t.BundleFormat = {})).standalone =
                    'standalone'),
                  (o.languagePack = 'languagePack'),
                  (function (e) {
                    e.is = function (e) {
                      var t = e
                      return t && a(t.key) && a(t.comment)
                    }
                  })(r || (r = {})),
                  (t.isDefined = a),
                  (t.isPseudo = !1),
                  (t.setPseudo = function (e) {
                    t.isPseudo = e
                  }),
                  (t.format = c),
                  (t.localize = function (e, t) {
                    for (var n = [], r = 2; r < arguments.length; r++)
                      n[r - 2] = arguments[r]
                    return c(t, n)
                  }),
                  (t.loadMessageBundle = function (e) {
                    return s.default().loadMessageBundle(e)
                  }),
                  (t.config = function (e) {
                    return s.default().config(e)
                  })
              },
              926: (e, t) => {
                'use strict'
                var n
                function r() {
                  if (void 0 === n)
                    throw new Error('No runtime abstraction layer installed')
                  return n
                }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                  (function (e) {
                    e.install = function (e) {
                      if (void 0 === e)
                        throw new Error('No runtime abstraction layer provided')
                      n = e
                    }
                  })(r || (r = {})),
                  (t.default = r)
              },
              472: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }),
                  (t.config = t.loadMessageBundle = void 0)
                var r = n(17),
                  o = n(147),
                  i = n(926),
                  s = n(800),
                  a = n(800)
                Object.defineProperty(t, 'MessageFormat', {
                  enumerable: !0,
                  get: function () {
                    return a.MessageFormat
                  },
                }),
                  Object.defineProperty(t, 'BundleFormat', {
                    enumerable: !0,
                    get: function () {
                      return a.BundleFormat
                    },
                  })
                var c,
                  u,
                  l = Object.prototype.toString
                function d(e) {
                  return '[object Number]' === l.call(e)
                }
                function f(e) {
                  return '[object String]' === l.call(e)
                }
                function h(e) {
                  return JSON.parse(o.readFileSync(e, 'utf8'))
                }
                function p(e) {
                  return function (t, n) {
                    for (var r = [], o = 2; o < arguments.length; o++)
                      r[o - 2] = arguments[o]
                    return d(t)
                      ? t >= e.length
                        ? void console.error(
                            'Broken localize call found. Index out of bounds. Stacktrace is\n: ' +
                              new Error('').stack
                          )
                        : s.format(e[t], r)
                      : f(n)
                      ? (console.warn(
                          'Message ' + n + " didn't get externalized correctly."
                        ),
                        s.format(n, r))
                      : void console.error(
                          'Broken localize call found. Stacktrace is\n: ' +
                            new Error('').stack
                        )
                  }
                }
                function m(e, t) {
                  return (c[e] = t), t
                }
                function g(e) {
                  try {
                    return (function (e) {
                      var t = h(r.join(e, 'nls.metadata.json')),
                        n = Object.create(null)
                      for (var o in t) {
                        var i = t[o]
                        n[o] = i.messages
                      }
                      return n
                    })(e)
                  } catch (e) {
                    return void console.log(
                      'Generating default bundle from meta data failed.',
                      e
                    )
                  }
                }
                function y(e, t) {
                  var n
                  if (
                    !0 === u.languagePackSupport &&
                    void 0 !== u.cacheRoot &&
                    void 0 !== u.languagePackId &&
                    void 0 !== u.translationsConfigFile &&
                    void 0 !== u.translationsConfig
                  )
                    try {
                      n = (function (e, t) {
                        var n,
                          i,
                          s,
                          a = r.join(
                            u.cacheRoot,
                            e.id + '-' + e.hash + '.json'
                          ),
                          c = !1,
                          l = !1
                        try {
                          return (
                            (n = JSON.parse(
                              o.readFileSync(a, { encoding: 'utf8', flag: 'r' })
                            )),
                            (i = a),
                            (s = new Date()),
                            o.utimes(i, s, s, function () {}),
                            n
                          )
                        } catch (e) {
                          if ('ENOENT' === e.code) l = !0
                          else {
                            if (!(e instanceof SyntaxError)) throw e
                            console.log(
                              'Syntax error parsing message bundle: ' +
                                e.message +
                                '.'
                            ),
                              o.unlink(a, function (e) {
                                e &&
                                  console.error(
                                    'Deleting corrupted bundle ' +
                                      a +
                                      ' failed.'
                                  )
                              }),
                              (c = !0)
                          }
                        }
                        if (
                          !(n = (function (e, t) {
                            var n = u.translationsConfig[e.id]
                            if (n) {
                              var o = h(n).contents,
                                i = h(r.join(t, 'nls.metadata.json')),
                                s = Object.create(null)
                              for (var a in i) {
                                var c = i[a],
                                  l = o[e.outDir + '/' + a]
                                if (l) {
                                  for (
                                    var d = [], p = 0;
                                    p < c.keys.length;
                                    p++
                                  ) {
                                    var m = c.keys[p],
                                      g = l[f(m) ? m : m.key]
                                    void 0 === g && (g = c.messages[p]),
                                      d.push(g)
                                  }
                                  s[a] = d
                                } else s[a] = c.messages
                              }
                              return s
                            }
                          })(e, t)) ||
                          c
                        )
                          return n
                        if (l)
                          try {
                            o.writeFileSync(a, JSON.stringify(n), {
                              encoding: 'utf8',
                              flag: 'wx',
                            })
                          } catch (e) {
                            if ('EEXIST' === e.code) return n
                            throw e
                          }
                        return n
                      })(e, t)
                    } catch (e) {
                      console.log('Load or create bundle failed ', e)
                    }
                  if (!n) {
                    if (u.languagePackSupport) return g(t)
                    var i = (function (e) {
                      for (var t = u.language; t; ) {
                        var n = r.join(e, 'nls.bundle.' + t + '.json')
                        if (o.existsSync(n)) return n
                        var i = t.lastIndexOf('-')
                        t = i > 0 ? t.substring(0, i) : void 0
                      }
                      if (
                        void 0 === t &&
                        ((n = r.join(e, 'nls.bundle.json')), o.existsSync(n))
                      )
                        return n
                    })(t)
                    if (i)
                      try {
                        return h(i)
                      } catch (e) {
                        console.log(
                          'Loading in the box message bundle failed.',
                          e
                        )
                      }
                    n = g(t)
                  }
                  return n
                }
                function v(e) {
                  if (!e) return s.localize
                  var t = r.extname(e)
                  if (
                    (t && (e = e.substr(0, e.length - t.length)),
                    u.messageFormat === s.MessageFormat.both ||
                      u.messageFormat === s.MessageFormat.bundle)
                  ) {
                    var n = (function (e) {
                      for (
                        var t, n = r.dirname(e);
                        (t = r.join(n, 'nls.metadata.header.json')),
                          !o.existsSync(t);

                      ) {
                        var i = r.dirname(n)
                        if (i === n) {
                          t = void 0
                          break
                        }
                        n = i
                      }
                      return t
                    })(e)
                    if (n) {
                      var i = r.dirname(n),
                        a = c[i]
                      if (void 0 === a)
                        try {
                          var l = JSON.parse(o.readFileSync(n, 'utf8'))
                          try {
                            var d = y(l, i)
                            a = m(i, d ? { header: l, nlsBundle: d } : null)
                          } catch (e) {
                            console.error('Failed to load nls bundle', e),
                              (a = m(i, null))
                          }
                        } catch (e) {
                          console.error('Failed to read header file', e),
                            (a = m(i, null))
                        }
                      if (a) {
                        var f = e.substr(i.length + 1).replace(/\\/g, '/'),
                          g = a.nlsBundle[f]
                        return void 0 === g
                          ? (console.error(
                              'Messages for file ' +
                                e +
                                ' not found. See console for details.'
                            ),
                            function () {
                              return 'Messages not found.'
                            })
                          : p(g)
                      }
                    }
                  }
                  if (
                    u.messageFormat === s.MessageFormat.both ||
                    u.messageFormat === s.MessageFormat.file
                  )
                    try {
                      var v = h(
                        (function (e) {
                          var t
                          if (u.cacheLanguageResolution && t) t = t
                          else {
                            if (s.isPseudo || !u.language) t = '.nls.json'
                            else
                              for (var n = u.language; n; ) {
                                var r = '.nls.' + n + '.json'
                                if (o.existsSync(e + r)) {
                                  t = r
                                  break
                                }
                                var i = n.lastIndexOf('-')
                                i > 0
                                  ? (n = n.substring(0, i))
                                  : ((t = '.nls.json'), (n = null))
                              }
                            u.cacheLanguageResolution && (t = t)
                          }
                          return e + t
                        })(e)
                      )
                      return Array.isArray(v)
                        ? p(v)
                        : s.isDefined(v.messages) && s.isDefined(v.keys)
                        ? p(v.messages)
                        : (console.error(
                            "String bundle '" +
                              e +
                              "' uses an unsupported format."
                          ),
                          function () {
                            return 'File bundle has unsupported format. See console for details'
                          })
                    } catch (e) {
                      'ENOENT' !== e.code &&
                        console.error('Failed to load single file bundle', e)
                    }
                  return (
                    console.error(
                      'Failed to load message bundle for file ' + e
                    ),
                    function () {
                      return 'Failed to load message bundle. See console for details.'
                    }
                  )
                }
                function b(e) {
                  return (
                    e &&
                      (f(e.locale) &&
                        ((u.locale = e.locale.toLowerCase()),
                        (u.language = u.locale),
                        (c = Object.create(null))),
                      void 0 !== e.messageFormat &&
                        (u.messageFormat = e.messageFormat),
                      e.bundleFormat === s.BundleFormat.standalone &&
                        !0 === u.languagePackSupport &&
                        (u.languagePackSupport = !1)),
                    s.setPseudo('pseudo' === u.locale),
                    v
                  )
                }
                !(function () {
                  if (
                    ((u = {
                      locale: void 0,
                      language: void 0,
                      languagePackSupport: !1,
                      cacheLanguageResolution: !0,
                      messageFormat: s.MessageFormat.bundle,
                    }),
                    f(process.env.VSCODE_NLS_CONFIG))
                  )
                    try {
                      var e = JSON.parse(process.env.VSCODE_NLS_CONFIG),
                        t = void 0
                      if (e.availableLanguages) {
                        var n = e.availableLanguages['*']
                        f(n) && (t = n)
                      }
                      if (
                        (f(e.locale) && (u.locale = e.locale.toLowerCase()),
                        void 0 === t
                          ? (u.language = u.locale)
                          : 'en' !== t && (u.language = t),
                        (function (e) {
                          return !0 === e || !1 === e
                        })(e._languagePackSupport) &&
                          (u.languagePackSupport = e._languagePackSupport),
                        f(e._cacheRoot) && (u.cacheRoot = e._cacheRoot),
                        f(e._languagePackId) &&
                          (u.languagePackId = e._languagePackId),
                        f(e._translationsConfigFile))
                      ) {
                        u.translationsConfigFile = e._translationsConfigFile
                        try {
                          u.translationsConfig = h(u.translationsConfigFile)
                        } catch (t) {
                          if (e._corruptedFile) {
                            var i = r.dirname(e._corruptedFile)
                            o.exists(i, function (t) {
                              t &&
                                o.writeFile(
                                  e._corruptedFile,
                                  'corrupted',
                                  'utf8',
                                  function (e) {
                                    console.error(e)
                                  }
                                )
                            })
                          }
                        }
                      }
                    } catch (e) {}
                  s.setPseudo('pseudo' === u.locale), (c = Object.create(null))
                })(),
                  (t.loadMessageBundle = v),
                  (t.config = b),
                  i.default.install(
                    Object.freeze({ loadMessageBundle: v, config: b })
                  )
              },
              374: (e, t) => {
                function n() {}
                Object.defineProperty(t, '__esModule', { value: !0 }),
                  (t.default = function (e) {
                    return n
                  })
              },
              491: (e) => {
                'use strict'
                e.exports = n(2357)
              },
              361: (e) => {
                'use strict'
                e.exports = n(8614)
              },
              147: (e) => {
                'use strict'
                e.exports = n(5747)
              },
              685: (e) => {
                'use strict'
                e.exports = n(8605)
              },
              687: (e) => {
                'use strict'
                e.exports = n(7211)
              },
              808: (e) => {
                'use strict'
                e.exports = n(1631)
              },
              17: (e) => {
                'use strict'
                e.exports = n(5622)
              },
              404: (e) => {
                'use strict'
                e.exports = n(4016)
              },
              310: (e) => {
                'use strict'
                e.exports = n(8835)
              },
              796: (e) => {
                'use strict'
                e.exports = n(8761)
              },
            },
            r = {},
            o = (function t(n) {
              var o = r[n]
              if (void 0 !== o) return o.exports
              var i = (r[n] = { exports: {} })
              return e[n].call(i.exports, i, i.exports, t), i.exports
            })(539),
            i = t
          for (var s in o) i[s] = o[s]
          o.__esModule && Object.defineProperty(i, '__esModule', { value: !0 })
        })()
      },
      7375: (e, t, n) => {
        'use strict'
        function r(e, t) {
          void 0 === t && (t = !1)
          var n = e.length,
            r = 0,
            a = '',
            c = 0,
            u = 16,
            l = 0,
            d = 0,
            f = 0,
            h = 0,
            p = 0
          function m(t, n) {
            for (var o = 0, i = 0; o < t || !n; ) {
              var s = e.charCodeAt(r)
              if (s >= 48 && s <= 57) i = 16 * i + s - 48
              else if (s >= 65 && s <= 70) i = 16 * i + s - 65 + 10
              else {
                if (!(s >= 97 && s <= 102)) break
                i = 16 * i + s - 97 + 10
              }
              r++, o++
            }
            return o < t && (i = -1), i
          }
          function g() {
            if (((a = ''), (p = 0), (c = r), (d = l), (h = f), r >= n))
              return (c = n), (u = 17)
            var t = e.charCodeAt(r)
            if (o(t)) {
              do {
                r++, (a += String.fromCharCode(t)), (t = e.charCodeAt(r))
              } while (o(t))
              return (u = 15)
            }
            if (i(t))
              return (
                r++,
                (a += String.fromCharCode(t)),
                13 === t && 10 === e.charCodeAt(r) && (r++, (a += '\n')),
                l++,
                (f = r),
                (u = 14)
              )
            switch (t) {
              case 123:
                return r++, (u = 1)
              case 125:
                return r++, (u = 2)
              case 91:
                return r++, (u = 3)
              case 93:
                return r++, (u = 4)
              case 58:
                return r++, (u = 6)
              case 44:
                return r++, (u = 5)
              case 34:
                return (
                  r++,
                  (a = (function () {
                    for (var t = '', o = r; ; ) {
                      if (r >= n) {
                        ;(t += e.substring(o, r)), (p = 2)
                        break
                      }
                      var s = e.charCodeAt(r)
                      if (34 === s) {
                        ;(t += e.substring(o, r)), r++
                        break
                      }
                      if (92 !== s) {
                        if (s >= 0 && s <= 31) {
                          if (i(s)) {
                            ;(t += e.substring(o, r)), (p = 2)
                            break
                          }
                          p = 6
                        }
                        r++
                      } else {
                        if (((t += e.substring(o, r)), ++r >= n)) {
                          p = 2
                          break
                        }
                        switch (e.charCodeAt(r++)) {
                          case 34:
                            t += '"'
                            break
                          case 92:
                            t += '\\'
                            break
                          case 47:
                            t += '/'
                            break
                          case 98:
                            t += '\b'
                            break
                          case 102:
                            t += '\f'
                            break
                          case 110:
                            t += '\n'
                            break
                          case 114:
                            t += '\r'
                            break
                          case 116:
                            t += '\t'
                            break
                          case 117:
                            var a = m(4, !0)
                            a >= 0 ? (t += String.fromCharCode(a)) : (p = 4)
                            break
                          default:
                            p = 5
                        }
                        o = r
                      }
                    }
                    return t
                  })()),
                  (u = 10)
                )
              case 47:
                var g = r - 1
                if (47 === e.charCodeAt(r + 1)) {
                  for (r += 2; r < n && !i(e.charCodeAt(r)); ) r++
                  return (a = e.substring(g, r)), (u = 12)
                }
                if (42 === e.charCodeAt(r + 1)) {
                  r += 2
                  for (var v = n - 1, b = !1; r < v; ) {
                    var R = e.charCodeAt(r)
                    if (42 === R && 47 === e.charCodeAt(r + 1)) {
                      ;(r += 2), (b = !0)
                      break
                    }
                    r++,
                      i(R) &&
                        (13 === R && 10 === e.charCodeAt(r) && r++,
                        l++,
                        (f = r))
                  }
                  return b || (r++, (p = 1)), (a = e.substring(g, r)), (u = 13)
                }
                return (a += String.fromCharCode(t)), r++, (u = 16)
              case 45:
                if (
                  ((a += String.fromCharCode(t)),
                  ++r === n || !s(e.charCodeAt(r)))
                )
                  return (u = 16)
              case 48:
              case 49:
              case 50:
              case 51:
              case 52:
              case 53:
              case 54:
              case 55:
              case 56:
              case 57:
                return (
                  (a += (function () {
                    var t = r
                    if (48 === e.charCodeAt(r)) r++
                    else for (r++; r < e.length && s(e.charCodeAt(r)); ) r++
                    if (r < e.length && 46 === e.charCodeAt(r)) {
                      if (!(++r < e.length && s(e.charCodeAt(r))))
                        return (p = 3), e.substring(t, r)
                      for (r++; r < e.length && s(e.charCodeAt(r)); ) r++
                    }
                    var n = r
                    if (
                      r < e.length &&
                      (69 === e.charCodeAt(r) || 101 === e.charCodeAt(r))
                    )
                      if (
                        (((++r < e.length && 43 === e.charCodeAt(r)) ||
                          45 === e.charCodeAt(r)) &&
                          r++,
                        r < e.length && s(e.charCodeAt(r)))
                      ) {
                        for (r++; r < e.length && s(e.charCodeAt(r)); ) r++
                        n = r
                      } else p = 3
                    return e.substring(t, n)
                  })()),
                  (u = 11)
                )
              default:
                for (; r < n && y(t); ) r++, (t = e.charCodeAt(r))
                if (c !== r) {
                  switch ((a = e.substring(c, r))) {
                    case 'true':
                      return (u = 8)
                    case 'false':
                      return (u = 9)
                    case 'null':
                      return (u = 7)
                  }
                  return (u = 16)
                }
                return (a += String.fromCharCode(t)), r++, (u = 16)
            }
          }
          function y(e) {
            if (o(e) || i(e)) return !1
            switch (e) {
              case 125:
              case 93:
              case 123:
              case 91:
              case 34:
              case 58:
              case 44:
              case 47:
                return !1
            }
            return !0
          }
          return {
            setPosition: function (e) {
              ;(r = e), (a = ''), (c = 0), (u = 16), (p = 0)
            },
            getPosition: function () {
              return r
            },
            scan: t
              ? function () {
                  var e
                  do {
                    e = g()
                  } while (e >= 12 && e <= 15)
                  return e
                }
              : g,
            getToken: function () {
              return u
            },
            getTokenValue: function () {
              return a
            },
            getTokenOffset: function () {
              return c
            },
            getTokenLength: function () {
              return r - c
            },
            getTokenStartLine: function () {
              return d
            },
            getTokenStartCharacter: function () {
              return c - h
            },
            getTokenError: function () {
              return p
            },
          }
        }
        function o(e) {
          return (
            32 === e ||
            9 === e ||
            11 === e ||
            12 === e ||
            160 === e ||
            5760 === e ||
            (e >= 8192 && e <= 8203) ||
            8239 === e ||
            8287 === e ||
            12288 === e ||
            65279 === e
          )
        }
        function i(e) {
          return 10 === e || 13 === e || 8232 === e || 8233 === e
        }
        function s(e) {
          return e >= 48 && e <= 57
        }
        function a(e, t) {
          for (var n = '', r = 0; r < t; r++) n += e
          return n
        }
        function c(e, t) {
          return -1 !== '\r\n'.indexOf(e.charAt(t))
        }
        var u
        n.r(t),
          n.d(t, {
            ClientCapabilities: () => x,
            CodeAction: () => k.CodeAction,
            CodeActionContext: () => k.CodeActionContext,
            CodeActionKind: () => k.CodeActionKind,
            Color: () => k.Color,
            ColorInformation: () => k.ColorInformation,
            ColorPresentation: () => k.ColorPresentation,
            Command: () => k.Command,
            CompletionItem: () => k.CompletionItem,
            CompletionItemKind: () => k.CompletionItemKind,
            CompletionItemTag: () => k.CompletionItemTag,
            CompletionList: () => k.CompletionList,
            Diagnostic: () => k.Diagnostic,
            DiagnosticSeverity: () => k.DiagnosticSeverity,
            DocumentHighlight: () => k.DocumentHighlight,
            DocumentHighlightKind: () => k.DocumentHighlightKind,
            DocumentLink: () => k.DocumentLink,
            DocumentSymbol: () => k.DocumentSymbol,
            ErrorCode: () => T,
            FoldingRange: () => k.FoldingRange,
            FoldingRangeKind: () => k.FoldingRangeKind,
            Hover: () => k.Hover,
            InsertTextFormat: () => k.InsertTextFormat,
            Location: () => k.Location,
            MarkedString: () => k.MarkedString,
            MarkupContent: () => k.MarkupContent,
            MarkupKind: () => k.MarkupKind,
            Position: () => k.Position,
            Range: () => k.Range,
            SelectionRange: () => k.SelectionRange,
            SymbolInformation: () => k.SymbolInformation,
            SymbolKind: () => k.SymbolKind,
            TextDocument: () => S,
            TextDocumentEdit: () => k.TextDocumentEdit,
            TextEdit: () => k.TextEdit,
            VersionedTextDocumentIdentifier: () =>
              k.VersionedTextDocumentIdentifier,
            WorkspaceEdit: () => k.WorkspaceEdit,
            getLanguageService: () => Le,
          }),
          (function (e) {
            e.DEFAULT = { allowTrailingComma: !1 }
          })(u || (u = {}))
        var l = r,
          d = function (e, t, n) {
            void 0 === t && (t = []), void 0 === n && (n = u.DEFAULT)
            var o = null,
              i = [],
              s = []
            function a(e) {
              Array.isArray(i) ? i.push(e) : null !== o && (i[o] = e)
            }
            return (
              (function (e, t, n) {
                void 0 === n && (n = u.DEFAULT)
                var o = r(e, !1)
                function i(e) {
                  return e
                    ? function () {
                        return e(
                          o.getTokenOffset(),
                          o.getTokenLength(),
                          o.getTokenStartLine(),
                          o.getTokenStartCharacter()
                        )
                      }
                    : function () {
                        return !0
                      }
                }
                function s(e) {
                  return e
                    ? function (t) {
                        return e(
                          t,
                          o.getTokenOffset(),
                          o.getTokenLength(),
                          o.getTokenStartLine(),
                          o.getTokenStartCharacter()
                        )
                      }
                    : function () {
                        return !0
                      }
                }
                var a = i(t.onObjectBegin),
                  c = s(t.onObjectProperty),
                  l = i(t.onObjectEnd),
                  d = i(t.onArrayBegin),
                  f = i(t.onArrayEnd),
                  h = s(t.onLiteralValue),
                  p = s(t.onSeparator),
                  m = i(t.onComment),
                  g = s(t.onError),
                  y = n && n.disallowComments,
                  v = n && n.allowTrailingComma
                function b() {
                  for (;;) {
                    var e = o.scan()
                    switch (o.getTokenError()) {
                      case 4:
                        R(14)
                        break
                      case 5:
                        R(15)
                        break
                      case 3:
                        R(13)
                        break
                      case 1:
                        y || R(11)
                        break
                      case 2:
                        R(12)
                        break
                      case 6:
                        R(16)
                    }
                    switch (e) {
                      case 12:
                      case 13:
                        y ? R(10) : m()
                        break
                      case 16:
                        R(1)
                        break
                      case 15:
                      case 14:
                        break
                      default:
                        return e
                    }
                  }
                }
                function R(e, t, n) {
                  if (
                    (void 0 === t && (t = []),
                    void 0 === n && (n = []),
                    g(e),
                    t.length + n.length > 0)
                  )
                    for (var r = o.getToken(); 17 !== r; ) {
                      if (-1 !== t.indexOf(r)) {
                        b()
                        break
                      }
                      if (-1 !== n.indexOf(r)) break
                      r = b()
                    }
                }
                function S(e) {
                  var t = o.getTokenValue()
                  return e ? h(t) : c(t), b(), !0
                }
                b(),
                  17 === o.getToken()
                    ? !!n.allowEmptyContent || R(4, [], [])
                    : (function e() {
                        switch (o.getToken()) {
                          case 3:
                            return (function () {
                              d(), b()
                              for (
                                var t = !1;
                                4 !== o.getToken() && 17 !== o.getToken();

                              ) {
                                if (5 === o.getToken()) {
                                  if (
                                    (t || R(4, [], []),
                                    p(','),
                                    b(),
                                    4 === o.getToken() && v)
                                  )
                                    break
                                } else t && R(6, [], [])
                                e() || R(4, [], [4, 5]), (t = !0)
                              }
                              return (
                                f(),
                                4 !== o.getToken() ? R(8, [4], []) : b(),
                                !0
                              )
                            })()
                          case 1:
                            return (function () {
                              a(), b()
                              for (
                                var t = !1;
                                2 !== o.getToken() && 17 !== o.getToken();

                              ) {
                                if (5 === o.getToken()) {
                                  if (
                                    (t || R(4, [], []),
                                    p(','),
                                    b(),
                                    2 === o.getToken() && v)
                                  )
                                    break
                                } else t && R(6, [], [])
                                ;(10 !== o.getToken()
                                  ? (R(3, [], [2, 5]), 0)
                                  : (S(!1),
                                    6 === o.getToken()
                                      ? (p(':'), b(), e() || R(4, [], [2, 5]))
                                      : R(5, [], [2, 5]),
                                    1)) || R(4, [], [2, 5]),
                                  (t = !0)
                              }
                              return (
                                l(),
                                2 !== o.getToken() ? R(7, [2], []) : b(),
                                !0
                              )
                            })()
                          case 10:
                            return S(!0)
                          default:
                            return (function () {
                              switch (o.getToken()) {
                                case 11:
                                  var e = o.getTokenValue(),
                                    t = Number(e)
                                  isNaN(t) && (R(2), (t = 0)), h(t)
                                  break
                                case 7:
                                  h(null)
                                  break
                                case 8:
                                  h(!0)
                                  break
                                case 9:
                                  h(!1)
                                  break
                                default:
                                  return !1
                              }
                              return b(), !0
                            })()
                        }
                      })()
                    ? 17 !== o.getToken() && R(9, [], [])
                    : R(4, [], [])
              })(
                e,
                {
                  onObjectBegin: function () {
                    var e = {}
                    a(e), s.push(i), (i = e), (o = null)
                  },
                  onObjectProperty: function (e) {
                    o = e
                  },
                  onObjectEnd: function () {
                    i = s.pop()
                  },
                  onArrayBegin: function () {
                    var e = []
                    a(e), s.push(i), (i = e), (o = null)
                  },
                  onArrayEnd: function () {
                    i = s.pop()
                  },
                  onLiteralValue: a,
                  onError: function (e, n, r) {
                    t.push({ error: e, offset: n, length: r })
                  },
                },
                n
              ),
              i[0]
            )
          },
          f = function e(t, n, r) {
            if (
              (void 0 === r && (r = !1),
              (function (e, t, n) {
                return (
                  void 0 === n && (n = !1),
                  (t >= e.offset && t < e.offset + e.length) ||
                    (n && t === e.offset + e.length)
                )
              })(t, n, r))
            ) {
              var o = t.children
              if (Array.isArray(o))
                for (var i = 0; i < o.length && o[i].offset <= n; i++) {
                  var s = e(o[i], n, r)
                  if (s) return s
                }
              return t
            }
          },
          h = function e(t) {
            if (!t.parent || !t.parent.children) return []
            var n = e(t.parent)
            if ('property' === t.parent.type) {
              var r = t.parent.children[0].value
              n.push(r)
            } else if ('array' === t.parent.type) {
              var o = t.parent.children.indexOf(t)
              ;-1 !== o && n.push(o)
            }
            return n
          },
          p = function e(t) {
            switch (t.type) {
              case 'array':
                return t.children.map(e)
              case 'object':
                for (
                  var n = Object.create(null), r = 0, o = t.children;
                  r < o.length;
                  r++
                ) {
                  var i = o[r],
                    s = i.children[1]
                  s && (n[i.children[0].value] = e(s))
                }
                return n
              case 'null':
              case 'string':
              case 'number':
              case 'boolean':
                return t.value
              default:
                return
            }
          }
        function m(e, t) {
          if (e === t) return !0
          if (null == e || null == t) return !1
          if (typeof e != typeof t) return !1
          if ('object' != typeof e) return !1
          if (Array.isArray(e) !== Array.isArray(t)) return !1
          var n, r
          if (Array.isArray(e)) {
            if (e.length !== t.length) return !1
            for (n = 0; n < e.length; n++) if (!m(e[n], t[n])) return !1
          } else {
            var o = []
            for (r in e) o.push(r)
            o.sort()
            var i = []
            for (r in t) i.push(r)
            if ((i.sort(), !m(o, i))) return !1
            for (n = 0; n < o.length; n++) if (!m(e[o[n]], t[o[n]])) return !1
          }
          return !0
        }
        function g(e) {
          return 'number' == typeof e
        }
        function y(e) {
          return void 0 !== e
        }
        function v(e) {
          return 'boolean' == typeof e
        }
        function b(e, t) {
          var n = e.length - t.length
          return n > 0 ? e.lastIndexOf(t) === n : 0 === n && e === t
        }
        function R(e) {
          var t = ''
          ;(function (e, t) {
            if (e.length < t.length) return !1
            for (var n = 0; n < t.length; n++) if (e[n] !== t[n]) return !1
            return !0
          })(e, '(?i)') && ((e = e.substring(4)), (t = 'i'))
          try {
            return new RegExp(e, t + 'u')
          } catch (n) {
            try {
              return new RegExp(e, t)
            } catch (e) {
              return
            }
          }
        }
        var S,
          T,
          x,
          k = n(1674)
        class C {
          constructor(e, t, n, r) {
            ;(this._uri = e),
              (this._languageId = t),
              (this._version = n),
              (this._content = r),
              (this._lineOffsets = void 0)
          }
          get uri() {
            return this._uri
          }
          get languageId() {
            return this._languageId
          }
          get version() {
            return this._version
          }
          getText(e) {
            if (e) {
              const t = this.offsetAt(e.start),
                n = this.offsetAt(e.end)
              return this._content.substring(t, n)
            }
            return this._content
          }
          update(e, t) {
            for (let t of e)
              if (C.isIncremental(t)) {
                const e = _(t.range),
                  n = this.offsetAt(e.start),
                  r = this.offsetAt(e.end)
                this._content =
                  this._content.substring(0, n) +
                  t.text +
                  this._content.substring(r, this._content.length)
                const o = Math.max(e.start.line, 0),
                  i = Math.max(e.end.line, 0)
                let s = this._lineOffsets
                const a = P(t.text, !1, n)
                if (i - o === a.length)
                  for (let e = 0, t = a.length; e < t; e++) s[e + o + 1] = a[e]
                else
                  a.length < 1e4
                    ? s.splice(o + 1, i - o, ...a)
                    : (this._lineOffsets = s =
                        s.slice(0, o + 1).concat(a, s.slice(i + 1)))
                const c = t.text.length - (r - n)
                if (0 !== c)
                  for (let e = o + 1 + a.length, t = s.length; e < t; e++)
                    s[e] = s[e] + c
              } else {
                if (!C.isFull(t))
                  throw new Error('Unknown change event received')
                ;(this._content = t.text), (this._lineOffsets = void 0)
              }
            this._version = t
          }
          getLineOffsets() {
            return (
              void 0 === this._lineOffsets &&
                (this._lineOffsets = P(this._content, !0)),
              this._lineOffsets
            )
          }
          positionAt(e) {
            e = Math.max(Math.min(e, this._content.length), 0)
            let t = this.getLineOffsets(),
              n = 0,
              r = t.length
            if (0 === r) return { line: 0, character: e }
            for (; n < r; ) {
              let o = Math.floor((n + r) / 2)
              t[o] > e ? (r = o) : (n = o + 1)
            }
            let o = n - 1
            return { line: o, character: e - t[o] }
          }
          offsetAt(e) {
            let t = this.getLineOffsets()
            if (e.line >= t.length) return this._content.length
            if (e.line < 0) return 0
            let n = t[e.line],
              r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length
            return Math.max(Math.min(n + e.character, r), n)
          }
          get lineCount() {
            return this.getLineOffsets().length
          }
          static isIncremental(e) {
            let t = e
            return (
              null != t &&
              'string' == typeof t.text &&
              void 0 !== t.range &&
              (void 0 === t.rangeLength || 'number' == typeof t.rangeLength)
            )
          }
          static isFull(e) {
            let t = e
            return (
              null != t &&
              'string' == typeof t.text &&
              void 0 === t.range &&
              void 0 === t.rangeLength
            )
          }
        }
        function w(e, t) {
          if (e.length <= 1) return e
          const n = (e.length / 2) | 0,
            r = e.slice(0, n),
            o = e.slice(n)
          w(r, t), w(o, t)
          let i = 0,
            s = 0,
            a = 0
          for (; i < r.length && s < o.length; ) {
            let n = t(r[i], o[s])
            e[a++] = n <= 0 ? r[i++] : o[s++]
          }
          for (; i < r.length; ) e[a++] = r[i++]
          for (; s < o.length; ) e[a++] = o[s++]
          return e
        }
        function P(e, t, n = 0) {
          const r = t ? [n] : []
          for (let t = 0; t < e.length; t++) {
            let o = e.charCodeAt(t)
            ;(13 !== o && 10 !== o) ||
              (13 === o &&
                t + 1 < e.length &&
                10 === e.charCodeAt(t + 1) &&
                t++,
              r.push(n + t + 1))
          }
          return r
        }
        function _(e) {
          const t = e.start,
            n = e.end
          return t.line > n.line ||
            (t.line === n.line && t.character > n.character)
            ? { start: n, end: t }
            : e
        }
        function D(e) {
          const t = _(e.range)
          return t !== e.range ? { newText: e.newText, range: t } : e
        }
        !(function (e) {
          ;(e.create = function (e, t, n, r) {
            return new C(e, t, n, r)
          }),
            (e.update = function (e, t, n) {
              if (e instanceof C) return e.update(t, n), e
              throw new Error(
                'TextDocument.update: document must be created by TextDocument.create'
              )
            }),
            (e.applyEdits = function (e, t) {
              let n = e.getText(),
                r = w(t.map(D), (e, t) => {
                  let n = e.range.start.line - t.range.start.line
                  return 0 === n
                    ? e.range.start.character - t.range.start.character
                    : n
                }),
                o = 0
              const i = []
              for (const t of r) {
                let r = e.offsetAt(t.range.start)
                if (r < o) throw new Error('Overlapping edit')
                r > o && i.push(n.substring(o, r)),
                  t.newText.length && i.push(t.newText),
                  (o = e.offsetAt(t.range.end))
              }
              return i.push(n.substr(o)), i.join('')
            })
        })(S || (S = {})),
          (function (e) {
            ;(e[(e.Undefined = 0)] = 'Undefined'),
              (e[(e.EnumValueMismatch = 1)] = 'EnumValueMismatch'),
              (e[(e.Deprecated = 2)] = 'Deprecated'),
              (e[(e.UnexpectedEndOfComment = 257)] = 'UnexpectedEndOfComment'),
              (e[(e.UnexpectedEndOfString = 258)] = 'UnexpectedEndOfString'),
              (e[(e.UnexpectedEndOfNumber = 259)] = 'UnexpectedEndOfNumber'),
              (e[(e.InvalidUnicode = 260)] = 'InvalidUnicode'),
              (e[(e.InvalidEscapeCharacter = 261)] = 'InvalidEscapeCharacter'),
              (e[(e.InvalidCharacter = 262)] = 'InvalidCharacter'),
              (e[(e.PropertyExpected = 513)] = 'PropertyExpected'),
              (e[(e.CommaExpected = 514)] = 'CommaExpected'),
              (e[(e.ColonExpected = 515)] = 'ColonExpected'),
              (e[(e.ValueExpected = 516)] = 'ValueExpected'),
              (e[(e.CommaOrCloseBacketExpected = 517)] =
                'CommaOrCloseBacketExpected'),
              (e[(e.CommaOrCloseBraceExpected = 518)] =
                'CommaOrCloseBraceExpected'),
              (e[(e.TrailingComma = 519)] = 'TrailingComma'),
              (e[(e.DuplicateKey = 520)] = 'DuplicateKey'),
              (e[(e.CommentNotPermitted = 521)] = 'CommentNotPermitted'),
              (e[(e.SchemaResolveError = 768)] = 'SchemaResolveError')
          })(T || (T = {})),
          (function (e) {
            e.LATEST = {
              textDocument: {
                completion: {
                  completionItem: {
                    documentationFormat: [
                      k.MarkupKind.Markdown,
                      k.MarkupKind.PlainText,
                    ],
                    commitCharactersSupport: !0,
                  },
                },
              },
            }
          })(x || (x = {}))
        var O,
          E,
          q = n(8472),
          N =
            ((O = function (e, t) {
              return (O =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                })(e, t)
            }),
            function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Class extends value ' +
                    String(t) +
                    ' is not a constructor or null'
                )
              function n() {
                this.constructor = e
              }
              O(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()))
            }),
          j = q.LV(),
          M = {
            'color-hex': {
              errorMessage: j(
                'colorHexFormatWarning',
                'Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA.'
              ),
              pattern: /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/,
            },
            'date-time': {
              errorMessage: j(
                'dateTimeFormatWarning',
                'String is not a RFC3339 date-time.'
              ),
              pattern:
                /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i,
            },
            date: {
              errorMessage: j(
                'dateFormatWarning',
                'String is not a RFC3339 date.'
              ),
              pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/i,
            },
            time: {
              errorMessage: j(
                'timeFormatWarning',
                'String is not a RFC3339 time.'
              ),
              pattern:
                /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i,
            },
            email: {
              errorMessage: j(
                'emailFormatWarning',
                'String is not an e-mail address.'
              ),
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/,
            },
            hostname: {
              errorMessage: j(
                'hostnameFormatWarning',
                'String is not a hostname.'
              ),
              pattern:
                /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
            },
            ipv4: {
              errorMessage: j(
                'ipv4FormatWarning',
                'String is not an IPv4 address.'
              ),
              pattern:
                /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
            },
            ipv6: {
              errorMessage: j(
                'ipv6FormatWarning',
                'String is not an IPv6 address.'
              ),
              pattern:
                /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
            },
          },
          A = (function () {
            function e(e, t, n) {
              void 0 === n && (n = 0),
                (this.offset = t),
                (this.length = n),
                (this.parent = e)
            }
            return (
              Object.defineProperty(e.prototype, 'children', {
                get: function () {
                  return []
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.toString = function () {
                return (
                  'type: ' +
                  this.type +
                  ' (' +
                  this.offset +
                  '/' +
                  this.length +
                  ')' +
                  (this.parent
                    ? ' parent: {' + this.parent.toString() + '}'
                    : '')
                )
              }),
              e
            )
          })(),
          F = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this
              return (r.type = 'null'), (r.value = null), r
            }
            return N(t, e), t
          })(A),
          I = (function (e) {
            function t(t, n, r) {
              var o = e.call(this, t, r) || this
              return (o.type = 'boolean'), (o.value = n), o
            }
            return N(t, e), t
          })(A),
          L = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this
              return (r.type = 'array'), (r.items = []), r
            }
            return (
              N(t, e),
              Object.defineProperty(t.prototype, 'children', {
                get: function () {
                  return this.items
                },
                enumerable: !1,
                configurable: !0,
              }),
              t
            )
          })(A),
          W = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this
              return (
                (r.type = 'number'),
                (r.isInteger = !0),
                (r.value = Number.NaN),
                r
              )
            }
            return N(t, e), t
          })(A),
          $ = (function (e) {
            function t(t, n, r) {
              var o = e.call(this, t, n, r) || this
              return (o.type = 'string'), (o.value = ''), o
            }
            return N(t, e), t
          })(A),
          V = (function (e) {
            function t(t, n, r) {
              var o = e.call(this, t, n) || this
              return (
                (o.type = 'property'), (o.colonOffset = -1), (o.keyNode = r), o
              )
            }
            return (
              N(t, e),
              Object.defineProperty(t.prototype, 'children', {
                get: function () {
                  return this.valueNode
                    ? [this.keyNode, this.valueNode]
                    : [this.keyNode]
                },
                enumerable: !1,
                configurable: !0,
              }),
              t
            )
          })(A),
          U = (function (e) {
            function t(t, n) {
              var r = e.call(this, t, n) || this
              return (r.type = 'object'), (r.properties = []), r
            }
            return (
              N(t, e),
              Object.defineProperty(t.prototype, 'children', {
                get: function () {
                  return this.properties
                },
                enumerable: !1,
                configurable: !0,
              }),
              t
            )
          })(A)
        function H(e) {
          return v(e) ? (e ? {} : { not: {} }) : e
        }
        !(function (e) {
          ;(e[(e.Key = 0)] = 'Key'), (e[(e.Enum = 1)] = 'Enum')
        })(E || (E = {}))
        var z = (function () {
            function e(e, t) {
              void 0 === e && (e = -1),
                (this.focusOffset = e),
                (this.exclude = t),
                (this.schemas = [])
            }
            return (
              (e.prototype.add = function (e) {
                this.schemas.push(e)
              }),
              (e.prototype.merge = function (e) {
                Array.prototype.push.apply(this.schemas, e.schemas)
              }),
              (e.prototype.include = function (e) {
                return (
                  (-1 === this.focusOffset || X(e, this.focusOffset)) &&
                  e !== this.exclude
                )
              }),
              (e.prototype.newSub = function () {
                return new e(-1, this.exclude)
              }),
              e
            )
          })(),
          B = (function () {
            function e() {}
            return (
              Object.defineProperty(e.prototype, 'schemas', {
                get: function () {
                  return []
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.add = function (e) {}),
              (e.prototype.merge = function (e) {}),
              (e.prototype.include = function (e) {
                return !0
              }),
              (e.prototype.newSub = function () {
                return this
              }),
              (e.instance = new e()),
              e
            )
          })(),
          K = (function () {
            function e() {
              ;(this.problems = []),
                (this.propertiesMatches = 0),
                (this.propertiesValueMatches = 0),
                (this.primaryValueMatches = 0),
                (this.enumValueMatch = !1),
                (this.enumValues = void 0)
            }
            return (
              (e.prototype.hasProblems = function () {
                return !!this.problems.length
              }),
              (e.prototype.mergeAll = function (e) {
                for (var t = 0, n = e; t < n.length; t++) {
                  var r = n[t]
                  this.merge(r)
                }
              }),
              (e.prototype.merge = function (e) {
                this.problems = this.problems.concat(e.problems)
              }),
              (e.prototype.mergeEnumValues = function (e) {
                if (
                  !this.enumValueMatch &&
                  !e.enumValueMatch &&
                  this.enumValues &&
                  e.enumValues
                ) {
                  this.enumValues = this.enumValues.concat(e.enumValues)
                  for (var t = 0, n = this.problems; t < n.length; t++) {
                    var r = n[t]
                    r.code === T.EnumValueMismatch &&
                      (r.message = j(
                        'enumWarning',
                        'Value is not accepted. Valid values: {0}.',
                        this.enumValues
                          .map(function (e) {
                            return JSON.stringify(e)
                          })
                          .join(', ')
                      ))
                  }
                }
              }),
              (e.prototype.mergePropertyMatch = function (e) {
                this.merge(e),
                  this.propertiesMatches++,
                  (e.enumValueMatch ||
                    (!e.hasProblems() && e.propertiesMatches)) &&
                    this.propertiesValueMatches++,
                  e.enumValueMatch &&
                    e.enumValues &&
                    1 === e.enumValues.length &&
                    this.primaryValueMatches++
              }),
              (e.prototype.compare = function (e) {
                var t = this.hasProblems()
                return t !== e.hasProblems()
                  ? t
                    ? -1
                    : 1
                  : this.enumValueMatch !== e.enumValueMatch
                  ? e.enumValueMatch
                    ? -1
                    : 1
                  : this.primaryValueMatches !== e.primaryValueMatches
                  ? this.primaryValueMatches - e.primaryValueMatches
                  : this.propertiesValueMatches !== e.propertiesValueMatches
                  ? this.propertiesValueMatches - e.propertiesValueMatches
                  : this.propertiesMatches - e.propertiesMatches
              }),
              e
            )
          })()
        function J(e) {
          return p(e)
        }
        function G(e) {
          return h(e)
        }
        function X(e, t, n) {
          return (
            void 0 === n && (n = !1),
            (t >= e.offset && t < e.offset + e.length) ||
              (n && t === e.offset + e.length)
          )
        }
        var Z = (function () {
          function e(e, t, n) {
            void 0 === t && (t = []),
              void 0 === n && (n = []),
              (this.root = e),
              (this.syntaxErrors = t),
              (this.comments = n)
          }
          return (
            (e.prototype.getNodeFromOffset = function (e, t) {
              if ((void 0 === t && (t = !1), this.root))
                return f(this.root, e, t)
            }),
            (e.prototype.visit = function (e) {
              if (this.root) {
                var t = function (n) {
                  var r = e(n),
                    o = n.children
                  if (Array.isArray(o))
                    for (var i = 0; i < o.length && r; i++) r = t(o[i])
                  return r
                }
                t(this.root)
              }
            }),
            (e.prototype.validate = function (e, t, n) {
              if (
                (void 0 === n && (n = k.DiagnosticSeverity.Warning),
                this.root && t)
              ) {
                var r = new K()
                return (
                  Y(this.root, t, r, B.instance),
                  r.problems.map(function (t) {
                    var r,
                      o = k.Range.create(
                        e.positionAt(t.location.offset),
                        e.positionAt(t.location.offset + t.location.length)
                      )
                    return k.Diagnostic.create(
                      o,
                      t.message,
                      null !== (r = t.severity) && void 0 !== r ? r : n,
                      t.code
                    )
                  })
                )
              }
            }),
            (e.prototype.getMatchingSchemas = function (e, t, n) {
              void 0 === t && (t = -1)
              var r = new z(t, n)
              return this.root && e && Y(this.root, e, new K(), r), r.schemas
            }),
            e
          )
        })()
        function Y(e, t, n, r) {
          if (e && r.include(e)) {
            var o = e
            switch (o.type) {
              case 'object':
                !(function (e, t, n, r) {
                  for (
                    var o = Object.create(null),
                      i = [],
                      s = 0,
                      a = e.properties;
                    s < a.length;
                    s++
                  )
                    (o[(U = (y = a[s]).keyNode.value)] = y.valueNode), i.push(U)
                  if (Array.isArray(t.required))
                    for (var c = 0, u = t.required; c < u.length; c++)
                      if (!o[(w = u[c])]) {
                        var l =
                            e.parent &&
                            'property' === e.parent.type &&
                            e.parent.keyNode,
                          d = l
                            ? { offset: l.offset, length: l.length }
                            : { offset: e.offset, length: 1 }
                        n.problems.push({
                          location: d,
                          message: j(
                            'MissingRequiredPropWarning',
                            'Missing property "{0}".',
                            w
                          ),
                        })
                      }
                  var f = function (e) {
                    for (var t = i.indexOf(e); t >= 0; )
                      i.splice(t, 1), (t = i.indexOf(e))
                  }
                  if (t.properties)
                    for (
                      var h = 0, p = Object.keys(t.properties);
                      h < p.length;
                      h++
                    ) {
                      f((w = p[h]))
                      var m = t.properties[w]
                      if ((q = o[w]))
                        if (v(m))
                          if (m)
                            n.propertiesMatches++, n.propertiesValueMatches++
                          else {
                            var y = q.parent
                            n.problems.push({
                              location: {
                                offset: y.keyNode.offset,
                                length: y.keyNode.length,
                              },
                              message:
                                t.errorMessage ||
                                j(
                                  'DisallowedExtraPropWarning',
                                  'Property {0} is not allowed.',
                                  w
                                ),
                            })
                          }
                        else Y(q, m, (D = new K()), r), n.mergePropertyMatch(D)
                    }
                  if (t.patternProperties)
                    for (
                      var b = 0, S = Object.keys(t.patternProperties);
                      b < S.length;
                      b++
                    )
                      for (
                        var T = S[b], x = R(T), k = 0, C = i.slice(0);
                        k < C.length;
                        k++
                      ) {
                        var w = C[k]
                        ;(null == x ? void 0 : x.test(w)) &&
                          (f(w),
                          (q = o[w]) &&
                            (v((m = t.patternProperties[T]))
                              ? m
                                ? (n.propertiesMatches++,
                                  n.propertiesValueMatches++)
                                : ((y = q.parent),
                                  n.problems.push({
                                    location: {
                                      offset: y.keyNode.offset,
                                      length: y.keyNode.length,
                                    },
                                    message:
                                      t.errorMessage ||
                                      j(
                                        'DisallowedExtraPropWarning',
                                        'Property {0} is not allowed.',
                                        w
                                      ),
                                  }))
                              : (Y(q, m, (D = new K()), r),
                                n.mergePropertyMatch(D))))
                      }
                  if ('object' == typeof t.additionalProperties) {
                    for (var P = 0, _ = i; P < _.length; P++)
                      if ((q = o[(w = _[P])])) {
                        var D = new K()
                        Y(q, t.additionalProperties, D, r),
                          n.mergePropertyMatch(D)
                      }
                  } else if (!1 === t.additionalProperties && i.length > 0)
                    for (var O = 0, E = i; O < E.length; O++) {
                      var q
                      ;(q = o[(w = E[O])]) &&
                        ((y = q.parent),
                        n.problems.push({
                          location: {
                            offset: y.keyNode.offset,
                            length: y.keyNode.length,
                          },
                          message:
                            t.errorMessage ||
                            j(
                              'DisallowedExtraPropWarning',
                              'Property {0} is not allowed.',
                              w
                            ),
                        }))
                    }
                  if (
                    (g(t.maxProperties) &&
                      e.properties.length > t.maxProperties &&
                      n.problems.push({
                        location: { offset: e.offset, length: e.length },
                        message: j(
                          'MaxPropWarning',
                          'Object has more properties than limit of {0}.',
                          t.maxProperties
                        ),
                      }),
                    g(t.minProperties) &&
                      e.properties.length < t.minProperties &&
                      n.problems.push({
                        location: { offset: e.offset, length: e.length },
                        message: j(
                          'MinPropWarning',
                          'Object has fewer properties than the required number of {0}',
                          t.minProperties
                        ),
                      }),
                    t.dependencies)
                  )
                    for (
                      var N = 0, M = Object.keys(t.dependencies);
                      N < M.length;
                      N++
                    )
                      if (o[(U = M[N])]) {
                        var A = t.dependencies[U]
                        if (Array.isArray(A))
                          for (var F = 0, I = A; F < I.length; F++) {
                            var L = I[F]
                            o[L]
                              ? n.propertiesValueMatches++
                              : n.problems.push({
                                  location: {
                                    offset: e.offset,
                                    length: e.length,
                                  },
                                  message: j(
                                    'RequiredDependentPropWarning',
                                    'Object is missing property {0} required by property {1}.',
                                    L,
                                    U
                                  ),
                                })
                          }
                        else
                          (m = H(A)) &&
                            (Y(e, m, (D = new K()), r), n.mergePropertyMatch(D))
                      }
                  var W = H(t.propertyNames)
                  if (W)
                    for (var $ = 0, V = e.properties; $ < V.length; $++) {
                      var U
                      ;(U = V[$].keyNode) && Y(U, W, n, B.instance)
                    }
                })(o, t, n, r)
                break
              case 'array':
                !(function (e, t, n, r) {
                  if (Array.isArray(t.items)) {
                    for (var o = t.items, i = 0; i < o.length; i++) {
                      var s = H(o[i]),
                        a = new K()
                      ;(f = e.items[i])
                        ? (Y(f, s, a, r), n.mergePropertyMatch(a))
                        : e.items.length >= o.length &&
                          n.propertiesValueMatches++
                    }
                    if (e.items.length > o.length)
                      if ('object' == typeof t.additionalItems)
                        for (var c = o.length; c < e.items.length; c++)
                          (a = new K()),
                            Y(e.items[c], t.additionalItems, a, r),
                            n.mergePropertyMatch(a)
                      else
                        !1 === t.additionalItems &&
                          n.problems.push({
                            location: { offset: e.offset, length: e.length },
                            message: j(
                              'additionalItemsWarning',
                              'Array has too many items according to schema. Expected {0} or fewer.',
                              o.length
                            ),
                          })
                  } else {
                    var u = H(t.items)
                    if (u)
                      for (var l = 0, d = e.items; l < d.length; l++) {
                        var f
                        Y((f = d[l]), u, (a = new K()), r),
                          n.mergePropertyMatch(a)
                      }
                  }
                  var h = H(t.contains)
                  if (
                    (h &&
                      (e.items.some(function (e) {
                        var t = new K()
                        return Y(e, h, t, B.instance), !t.hasProblems()
                      }) ||
                        n.problems.push({
                          location: { offset: e.offset, length: e.length },
                          message:
                            t.errorMessage ||
                            j(
                              'requiredItemMissingWarning',
                              'Array does not contain required item.'
                            ),
                        })),
                    g(t.minItems) &&
                      e.items.length < t.minItems &&
                      n.problems.push({
                        location: { offset: e.offset, length: e.length },
                        message: j(
                          'minItemsWarning',
                          'Array has too few items. Expected {0} or more.',
                          t.minItems
                        ),
                      }),
                    g(t.maxItems) &&
                      e.items.length > t.maxItems &&
                      n.problems.push({
                        location: { offset: e.offset, length: e.length },
                        message: j(
                          'maxItemsWarning',
                          'Array has too many items. Expected {0} or fewer.',
                          t.maxItems
                        ),
                      }),
                    !0 === t.uniqueItems)
                  ) {
                    var p = J(e)
                    p.some(function (e, t) {
                      return t !== p.lastIndexOf(e)
                    }) &&
                      n.problems.push({
                        location: { offset: e.offset, length: e.length },
                        message: j(
                          'uniqueItemsWarning',
                          'Array has duplicate items.'
                        ),
                      })
                  }
                })(o, t, n, r)
                break
              case 'string':
                !(function (e, t, n, r) {
                  if (
                    (g(t.minLength) &&
                      e.value.length < t.minLength &&
                      n.problems.push({
                        location: { offset: e.offset, length: e.length },
                        message: j(
                          'minLengthWarning',
                          'String is shorter than the minimum length of {0}.',
                          t.minLength
                        ),
                      }),
                    g(t.maxLength) &&
                      e.value.length > t.maxLength &&
                      n.problems.push({
                        location: { offset: e.offset, length: e.length },
                        message: j(
                          'maxLengthWarning',
                          'String is longer than the maximum length of {0}.',
                          t.maxLength
                        ),
                      }),
                    'string' == typeof t.pattern)
                  ) {
                    var o = R(t.pattern)
                    ;(null == o ? void 0 : o.test(e.value)) ||
                      n.problems.push({
                        location: { offset: e.offset, length: e.length },
                        message:
                          t.patternErrorMessage ||
                          t.errorMessage ||
                          j(
                            'patternWarning',
                            'String does not match the pattern of "{0}".',
                            t.pattern
                          ),
                      })
                  }
                  if (t.format)
                    switch (t.format) {
                      case 'uri':
                      case 'uri-reference':
                        var i = void 0
                        if (e.value) {
                          var s =
                            /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/.exec(
                              e.value
                            )
                          s
                            ? s[2] ||
                              'uri' !== t.format ||
                              (i = j(
                                'uriSchemeMissing',
                                'URI with a scheme is expected.'
                              ))
                            : (i = j('uriMissing', 'URI is expected.'))
                        } else i = j('uriEmpty', 'URI expected.')
                        i &&
                          n.problems.push({
                            location: { offset: e.offset, length: e.length },
                            message:
                              t.patternErrorMessage ||
                              t.errorMessage ||
                              j(
                                'uriFormatWarning',
                                'String is not a URI: {0}',
                                i
                              ),
                          })
                        break
                      case 'color-hex':
                      case 'date-time':
                      case 'date':
                      case 'time':
                      case 'email':
                      case 'hostname':
                      case 'ipv4':
                      case 'ipv6':
                        var a = M[t.format]
                        ;(e.value && a.pattern.exec(e.value)) ||
                          n.problems.push({
                            location: { offset: e.offset, length: e.length },
                            message:
                              t.patternErrorMessage ||
                              t.errorMessage ||
                              a.errorMessage,
                          })
                    }
                })(o, t, n)
                break
              case 'number':
                !(function (e, t, n, r) {
                  var o = e.value
                  function i(e) {
                    var t,
                      n = /^(-?\d+)(?:\.(\d+))?(?:e([-+]\d+))?$/.exec(
                        e.toString()
                      )
                    return (
                      n && {
                        value: Number(n[1] + (n[2] || '')),
                        multiplier:
                          ((null === (t = n[2]) || void 0 === t
                            ? void 0
                            : t.length) || 0) - (parseInt(n[3]) || 0),
                      }
                    )
                  }
                  if (g(t.multipleOf)) {
                    var s = -1
                    if (Number.isInteger(t.multipleOf)) s = o % t.multipleOf
                    else {
                      var a = i(t.multipleOf),
                        c = i(o)
                      if (a && c) {
                        var u = Math.pow(
                          10,
                          Math.abs(c.multiplier - a.multiplier)
                        )
                        c.multiplier < a.multiplier
                          ? (c.value *= u)
                          : (a.value *= u),
                          (s = c.value % a.value)
                      }
                    }
                    0 !== s &&
                      n.problems.push({
                        location: { offset: e.offset, length: e.length },
                        message: j(
                          'multipleOfWarning',
                          'Value is not divisible by {0}.',
                          t.multipleOf
                        ),
                      })
                  }
                  function l(e, t) {
                    return g(t) ? t : v(t) && t ? e : void 0
                  }
                  function d(e, t) {
                    if (!v(t) || !t) return e
                  }
                  var f = l(t.minimum, t.exclusiveMinimum)
                  g(f) &&
                    o <= f &&
                    n.problems.push({
                      location: { offset: e.offset, length: e.length },
                      message: j(
                        'exclusiveMinimumWarning',
                        'Value is below the exclusive minimum of {0}.',
                        f
                      ),
                    })
                  var h = l(t.maximum, t.exclusiveMaximum)
                  g(h) &&
                    o >= h &&
                    n.problems.push({
                      location: { offset: e.offset, length: e.length },
                      message: j(
                        'exclusiveMaximumWarning',
                        'Value is above the exclusive maximum of {0}.',
                        h
                      ),
                    })
                  var p = d(t.minimum, t.exclusiveMinimum)
                  g(p) &&
                    o < p &&
                    n.problems.push({
                      location: { offset: e.offset, length: e.length },
                      message: j(
                        'minimumWarning',
                        'Value is below the minimum of {0}.',
                        p
                      ),
                    })
                  var m = d(t.maximum, t.exclusiveMaximum)
                  g(m) &&
                    o > m &&
                    n.problems.push({
                      location: { offset: e.offset, length: e.length },
                      message: j(
                        'maximumWarning',
                        'Value is above the maximum of {0}.',
                        m
                      ),
                    })
                })(o, t, n)
                break
              case 'property':
                return Y(o.valueNode, t, n, r)
            }
            !(function () {
              function e(e) {
                return (
                  o.type === e ||
                  ('integer' === e && 'number' === o.type && o.isInteger)
                )
              }
              if (
                (Array.isArray(t.type)
                  ? t.type.some(e) ||
                    n.problems.push({
                      location: { offset: o.offset, length: o.length },
                      message:
                        t.errorMessage ||
                        j(
                          'typeArrayMismatchWarning',
                          'Incorrect type. Expected one of {0}.',
                          t.type.join(', ')
                        ),
                    })
                  : t.type &&
                    (e(t.type) ||
                      n.problems.push({
                        location: { offset: o.offset, length: o.length },
                        message:
                          t.errorMessage ||
                          j(
                            'typeMismatchWarning',
                            'Incorrect type. Expected "{0}".',
                            t.type
                          ),
                      })),
                Array.isArray(t.allOf))
              )
                for (var i = 0, s = t.allOf; i < s.length; i++) {
                  var a = s[i]
                  Y(o, H(a), n, r)
                }
              var c = H(t.not)
              if (c) {
                var u = new K(),
                  l = r.newSub()
                Y(o, c, u, l),
                  u.hasProblems() ||
                    n.problems.push({
                      location: { offset: o.offset, length: o.length },
                      message: j(
                        'notSchemaWarning',
                        'Matches a schema that is not allowed.'
                      ),
                    })
                for (var d = 0, f = l.schemas; d < f.length; d++) {
                  var h = f[d]
                  ;(h.inverted = !h.inverted), r.add(h)
                }
              }
              var p = function (e, t) {
                for (var i = [], s = void 0, a = 0, c = e; a < c.length; a++) {
                  var u = H(c[a]),
                    l = new K(),
                    d = r.newSub()
                  if ((Y(o, u, l, d), l.hasProblems() || i.push(u), s))
                    if (
                      t ||
                      l.hasProblems() ||
                      s.validationResult.hasProblems()
                    ) {
                      var f = l.compare(s.validationResult)
                      f > 0
                        ? (s = {
                            schema: u,
                            validationResult: l,
                            matchingSchemas: d,
                          })
                        : 0 === f &&
                          (s.matchingSchemas.merge(d),
                          s.validationResult.mergeEnumValues(l))
                    } else
                      s.matchingSchemas.merge(d),
                        (s.validationResult.propertiesMatches +=
                          l.propertiesMatches),
                        (s.validationResult.propertiesValueMatches +=
                          l.propertiesValueMatches)
                  else
                    s = { schema: u, validationResult: l, matchingSchemas: d }
                }
                return (
                  i.length > 1 &&
                    t &&
                    n.problems.push({
                      location: { offset: o.offset, length: 1 },
                      message: j(
                        'oneOfWarning',
                        'Matches multiple schemas when only one must validate.'
                      ),
                    }),
                  s &&
                    (n.merge(s.validationResult),
                    (n.propertiesMatches +=
                      s.validationResult.propertiesMatches),
                    (n.propertiesValueMatches +=
                      s.validationResult.propertiesValueMatches),
                    r.merge(s.matchingSchemas)),
                  i.length
                )
              }
              Array.isArray(t.anyOf) && p(t.anyOf, !1),
                Array.isArray(t.oneOf) && p(t.oneOf, !0)
              var g = function (e) {
                  var t = new K(),
                    i = r.newSub()
                  Y(o, H(e), t, i),
                    n.merge(t),
                    (n.propertiesMatches += t.propertiesMatches),
                    (n.propertiesValueMatches += t.propertiesValueMatches),
                    r.merge(i)
                },
                v = H(t.if)
              if (
                (v &&
                  (function (e, t, n) {
                    var i = H(e),
                      s = new K(),
                      a = r.newSub()
                    Y(o, i, s, a),
                      r.merge(a),
                      s.hasProblems() ? n && g(n) : t && g(t)
                  })(v, H(t.then), H(t.else)),
                Array.isArray(t.enum))
              ) {
                for (
                  var b = J(o), R = !1, S = 0, x = t.enum;
                  S < x.length;
                  S++
                ) {
                  if (m(b, x[S])) {
                    R = !0
                    break
                  }
                }
                ;(n.enumValues = t.enum),
                  (n.enumValueMatch = R),
                  R ||
                    n.problems.push({
                      location: { offset: o.offset, length: o.length },
                      code: T.EnumValueMismatch,
                      message:
                        t.errorMessage ||
                        j(
                          'enumWarning',
                          'Value is not accepted. Valid values: {0}.',
                          t.enum
                            .map(function (e) {
                              return JSON.stringify(e)
                            })
                            .join(', ')
                        ),
                    })
              }
              y(t.const) &&
                (m((b = J(o)), t.const)
                  ? (n.enumValueMatch = !0)
                  : (n.problems.push({
                      location: { offset: o.offset, length: o.length },
                      code: T.EnumValueMismatch,
                      message:
                        t.errorMessage ||
                        j(
                          'constWarning',
                          'Value must be {0}.',
                          JSON.stringify(t.const)
                        ),
                    }),
                    (n.enumValueMatch = !1)),
                (n.enumValues = [t.const])),
                t.deprecationMessage &&
                  o.parent &&
                  n.problems.push({
                    location: {
                      offset: o.parent.offset,
                      length: o.parent.length,
                    },
                    severity: k.DiagnosticSeverity.Warning,
                    message: t.deprecationMessage,
                    code: T.Deprecated,
                  })
            })(),
              r.add({ node: o, schema: t })
          }
        }
        function Q(e, t, n) {
          if (null !== e && 'object' == typeof e) {
            var r = t + '\t'
            if (Array.isArray(e)) {
              if (0 === e.length) return '[]'
              for (var o = '[\n', i = 0; i < e.length; i++)
                (o += r + Q(e[i], r, n)),
                  i < e.length - 1 && (o += ','),
                  (o += '\n')
              return o + (t + ']')
            }
            var s = Object.keys(e)
            if (0 === s.length) return '{}'
            for (o = '{\n', i = 0; i < s.length; i++) {
              var a = s[i]
              ;(o += r + JSON.stringify(a) + ': ' + Q(e[a], r, n)),
                i < s.length - 1 && (o += ','),
                (o += '\n')
            }
            return o + (t + '}')
          }
          return n(e)
        }
        var ee = q.LV(),
          te = (function () {
            function e(e, t, n, r) {
              void 0 === t && (t = []),
                void 0 === n && (n = Promise),
                void 0 === r && (r = {}),
                (this.schemaService = e),
                (this.contributions = t),
                (this.promiseConstructor = n),
                (this.clientCapabilities = r)
            }
            return (
              (e.prototype.doResolve = function (e) {
                for (var t = this.contributions.length - 1; t >= 0; t--) {
                  var n = this.contributions[t].resolveCompletion
                  if (n) {
                    var r = n(e)
                    if (r) return r
                  }
                }
                return this.promiseConstructor.resolve(e)
              }),
              (e.prototype.doComplete = function (e, t, n) {
                var r = this,
                  o = { items: [], isIncomplete: !1 },
                  i = e.getText(),
                  s = e.offsetAt(t),
                  a = n.getNodeFromOffset(s, !0)
                if (this.isInComment(e, a ? a.offset : 0, s))
                  return Promise.resolve(o)
                if (a && s === a.offset + a.length && s > 0) {
                  var c = i[s - 1]
                  ;(('object' === a.type && '}' === c) ||
                    ('array' === a.type && ']' === c)) &&
                    (a = a.parent)
                }
                var u,
                  l = this.getCurrentWord(e, s)
                if (
                  !a ||
                  ('string' !== a.type &&
                    'number' !== a.type &&
                    'boolean' !== a.type &&
                    'null' !== a.type)
                ) {
                  var d = s - l.length
                  d > 0 && '"' === i[d - 1] && d--,
                    (u = k.Range.create(e.positionAt(d), t))
                } else
                  u = k.Range.create(
                    e.positionAt(a.offset),
                    e.positionAt(a.offset + a.length)
                  )
                var f = {},
                  h = {
                    add: function (e) {
                      var t = e.label,
                        n = f[t]
                      if (n)
                        n.documentation || (n.documentation = e.documentation),
                          n.detail || (n.detail = e.detail)
                      else {
                        if ((t = t.replace(/[\n]/g, '↵')).length > 60) {
                          var r = t.substr(0, 57).trim() + '...'
                          f[r] || (t = r)
                        }
                        u &&
                          void 0 !== e.insertText &&
                          (e.textEdit = k.TextEdit.replace(u, e.insertText)),
                          (e.label = t),
                          (f[t] = e),
                          o.items.push(e)
                      }
                    },
                    setAsIncomplete: function () {
                      o.isIncomplete = !0
                    },
                    error: function (e) {
                      console.error(e)
                    },
                    log: function (e) {
                      console.log(e)
                    },
                    getNumberOfProposals: function () {
                      return o.items.length
                    },
                  }
                return this.schemaService
                  .getSchemaForResource(e.uri, n)
                  .then(function (t) {
                    var c = [],
                      d = !0,
                      p = '',
                      m = void 0
                    if (a && 'string' === a.type) {
                      var g = a.parent
                      g &&
                        'property' === g.type &&
                        g.keyNode === a &&
                        ((d = !g.valueNode),
                        (m = g),
                        (p = i.substr(a.offset + 1, a.length - 2)),
                        g && (a = g.parent))
                    }
                    if (a && 'object' === a.type) {
                      if (a.offset === s) return o
                      a.properties.forEach(function (e) {
                        ;(m && m === e) ||
                          (f[e.keyNode.value] = k.CompletionItem.create('__'))
                      })
                      var y = ''
                      d && (y = r.evaluateSeparatorAfter(e, e.offsetAt(u.end))),
                        t
                          ? r.getPropertyCompletions(t, n, a, d, y, h)
                          : r.getSchemaLessPropertyCompletions(n, a, p, h)
                      var v = G(a)
                      r.contributions.forEach(function (t) {
                        var n = t.collectPropertyCompletions(
                          e.uri,
                          v,
                          l,
                          d,
                          '' === y,
                          h
                        )
                        n && c.push(n)
                      }),
                        !t &&
                          l.length > 0 &&
                          '"' !== i.charAt(s - l.length - 1) &&
                          (h.add({
                            kind: k.CompletionItemKind.Property,
                            label: r.getLabelForValue(l),
                            insertText: r.getInsertTextForProperty(
                              l,
                              void 0,
                              !1,
                              y
                            ),
                            insertTextFormat: k.InsertTextFormat.Snippet,
                            documentation: '',
                          }),
                          h.setAsIncomplete())
                    }
                    var b = {}
                    return (
                      t
                        ? r.getValueCompletions(t, n, a, s, e, h, b)
                        : r.getSchemaLessValueCompletions(n, a, s, e, h),
                      r.contributions.length > 0 &&
                        r.getContributedValueCompletions(n, a, s, e, h, c),
                      r.promiseConstructor.all(c).then(function () {
                        if (0 === h.getNumberOfProposals()) {
                          var t = s
                          !a ||
                            ('string' !== a.type &&
                              'number' !== a.type &&
                              'boolean' !== a.type &&
                              'null' !== a.type) ||
                            (t = a.offset + a.length)
                          var n = r.evaluateSeparatorAfter(e, t)
                          r.addFillerValueCompletions(b, n, h)
                        }
                        return o
                      })
                    )
                  })
              }),
              (e.prototype.getPropertyCompletions = function (
                e,
                t,
                n,
                r,
                o,
                i
              ) {
                var s = this
                t.getMatchingSchemas(e.schema, n.offset).forEach(function (e) {
                  if (e.node === n && !e.inverted) {
                    var t = e.schema.properties
                    t &&
                      Object.keys(t).forEach(function (e) {
                        var n = t[e]
                        if (
                          'object' == typeof n &&
                          !n.deprecationMessage &&
                          !n.doNotSuggest
                        ) {
                          var a = {
                            kind: k.CompletionItemKind.Property,
                            label: e,
                            insertText: s.getInsertTextForProperty(e, n, r, o),
                            insertTextFormat: k.InsertTextFormat.Snippet,
                            filterText: s.getFilterTextForValue(e),
                            documentation:
                              s.fromMarkup(n.markdownDescription) ||
                              n.description ||
                              '',
                          }
                          void 0 !== n.suggestSortText &&
                            (a.sortText = n.suggestSortText),
                            a.insertText &&
                              b(a.insertText, '$1'.concat(o)) &&
                              (a.command = {
                                title: 'Suggest',
                                command: 'editor.action.triggerSuggest',
                              }),
                            i.add(a)
                        }
                      })
                    var a = e.schema.propertyNames
                    if (
                      'object' == typeof a &&
                      !a.deprecationMessage &&
                      !a.doNotSuggest
                    ) {
                      var c = function (e, t) {
                        void 0 === t && (t = void 0)
                        var n = {
                          kind: k.CompletionItemKind.Property,
                          label: e,
                          insertText: s.getInsertTextForProperty(
                            e,
                            void 0,
                            r,
                            o
                          ),
                          insertTextFormat: k.InsertTextFormat.Snippet,
                          filterText: s.getFilterTextForValue(e),
                          documentation:
                            t ||
                            s.fromMarkup(a.markdownDescription) ||
                            a.description ||
                            '',
                        }
                        void 0 !== a.suggestSortText &&
                          (n.sortText = a.suggestSortText),
                          n.insertText &&
                            b(n.insertText, '$1'.concat(o)) &&
                            (n.command = {
                              title: 'Suggest',
                              command: 'editor.action.triggerSuggest',
                            }),
                          i.add(n)
                      }
                      if (a.enum)
                        for (var u = 0; u < a.enum.length; u++) {
                          var l = void 0
                          a.markdownEnumDescriptions &&
                          u < a.markdownEnumDescriptions.length
                            ? (l = s.fromMarkup(a.markdownEnumDescriptions[u]))
                            : a.enumDescriptions &&
                              u < a.enumDescriptions.length &&
                              (l = a.enumDescriptions[u]),
                            c(a.enum[u], l)
                        }
                      a.const && c(a.const)
                    }
                  }
                })
              }),
              (e.prototype.getSchemaLessPropertyCompletions = function (
                e,
                t,
                n,
                r
              ) {
                var o = this,
                  i = function (e) {
                    e.properties.forEach(function (e) {
                      var t = e.keyNode.value
                      r.add({
                        kind: k.CompletionItemKind.Property,
                        label: t,
                        insertText: o.getInsertTextForValue(t, ''),
                        insertTextFormat: k.InsertTextFormat.Snippet,
                        filterText: o.getFilterTextForValue(t),
                        documentation: '',
                      })
                    })
                  }
                if (t.parent)
                  if ('property' === t.parent.type) {
                    var s = t.parent.keyNode.value
                    e.visit(function (e) {
                      return (
                        'property' === e.type &&
                          e !== t.parent &&
                          e.keyNode.value === s &&
                          e.valueNode &&
                          'object' === e.valueNode.type &&
                          i(e.valueNode),
                        !0
                      )
                    })
                  } else
                    'array' === t.parent.type &&
                      t.parent.items.forEach(function (e) {
                        'object' === e.type && e !== t && i(e)
                      })
                else
                  'object' === t.type &&
                    r.add({
                      kind: k.CompletionItemKind.Property,
                      label: '$schema',
                      insertText: this.getInsertTextForProperty(
                        '$schema',
                        void 0,
                        !0,
                        ''
                      ),
                      insertTextFormat: k.InsertTextFormat.Snippet,
                      documentation: '',
                      filterText: this.getFilterTextForValue('$schema'),
                    })
              }),
              (e.prototype.getSchemaLessValueCompletions = function (
                e,
                t,
                n,
                r,
                o
              ) {
                var i = this,
                  s = n
                if (
                  (!t ||
                    ('string' !== t.type &&
                      'number' !== t.type &&
                      'boolean' !== t.type &&
                      'null' !== t.type) ||
                    ((s = t.offset + t.length), (t = t.parent)),
                  !t)
                )
                  return (
                    o.add({
                      kind: this.getSuggestionKind('object'),
                      label: 'Empty object',
                      insertText: this.getInsertTextForValue({}, ''),
                      insertTextFormat: k.InsertTextFormat.Snippet,
                      documentation: '',
                    }),
                    void o.add({
                      kind: this.getSuggestionKind('array'),
                      label: 'Empty array',
                      insertText: this.getInsertTextForValue([], ''),
                      insertTextFormat: k.InsertTextFormat.Snippet,
                      documentation: '',
                    })
                  )
                var a = this.evaluateSeparatorAfter(r, s),
                  c = function (e) {
                    e.parent &&
                      !X(e.parent, n, !0) &&
                      o.add({
                        kind: i.getSuggestionKind(e.type),
                        label: i.getLabelTextForMatchingNode(e, r),
                        insertText: i.getInsertTextForMatchingNode(e, r, a),
                        insertTextFormat: k.InsertTextFormat.Snippet,
                        documentation: '',
                      }),
                      'boolean' === e.type &&
                        i.addBooleanValueCompletion(!e.value, a, o)
                  }
                if ('property' === t.type && n > (t.colonOffset || 0)) {
                  var u = t.valueNode
                  if (
                    u &&
                    (n > u.offset + u.length ||
                      'object' === u.type ||
                      'array' === u.type)
                  )
                    return
                  var l = t.keyNode.value
                  e.visit(function (e) {
                    return (
                      'property' === e.type &&
                        e.keyNode.value === l &&
                        e.valueNode &&
                        c(e.valueNode),
                      !0
                    )
                  }),
                    '$schema' === l &&
                      t.parent &&
                      !t.parent.parent &&
                      this.addDollarSchemaCompletions(a, o)
                }
                if ('array' === t.type)
                  if (t.parent && 'property' === t.parent.type) {
                    var d = t.parent.keyNode.value
                    e.visit(function (e) {
                      return (
                        'property' === e.type &&
                          e.keyNode.value === d &&
                          e.valueNode &&
                          'array' === e.valueNode.type &&
                          e.valueNode.items.forEach(c),
                        !0
                      )
                    })
                  } else t.items.forEach(c)
              }),
              (e.prototype.getValueCompletions = function (
                e,
                t,
                n,
                r,
                o,
                i,
                s
              ) {
                var a = r,
                  c = void 0,
                  u = void 0
                if (
                  (!n ||
                    ('string' !== n.type &&
                      'number' !== n.type &&
                      'boolean' !== n.type &&
                      'null' !== n.type) ||
                    ((a = n.offset + n.length), (u = n), (n = n.parent)),
                  n)
                ) {
                  if ('property' === n.type && r > (n.colonOffset || 0)) {
                    var l = n.valueNode
                    if (l && r > l.offset + l.length) return
                    ;(c = n.keyNode.value), (n = n.parent)
                  }
                  if (n && (void 0 !== c || 'array' === n.type)) {
                    for (
                      var d = this.evaluateSeparatorAfter(o, a),
                        f = 0,
                        h = t.getMatchingSchemas(e.schema, n.offset, u);
                      f < h.length;
                      f++
                    ) {
                      var p = h[f]
                      if (p.node === n && !p.inverted && p.schema) {
                        if ('array' === n.type && p.schema.items)
                          if (Array.isArray(p.schema.items)) {
                            var m = this.findItemAtOffset(n, o, r)
                            m < p.schema.items.length &&
                              this.addSchemaValueCompletions(
                                p.schema.items[m],
                                d,
                                i,
                                s
                              )
                          } else
                            this.addSchemaValueCompletions(
                              p.schema.items,
                              d,
                              i,
                              s
                            )
                        if (void 0 !== c) {
                          var g = !1
                          if (
                            (p.schema.properties &&
                              (T = p.schema.properties[c]) &&
                              ((g = !0),
                              this.addSchemaValueCompletions(T, d, i, s)),
                            p.schema.patternProperties && !g)
                          )
                            for (
                              var y = 0,
                                v = Object.keys(p.schema.patternProperties);
                              y < v.length;
                              y++
                            ) {
                              var b = v[y],
                                S = R(b)
                              if (null == S ? void 0 : S.test(c)) {
                                g = !0
                                var T = p.schema.patternProperties[b]
                                this.addSchemaValueCompletions(T, d, i, s)
                              }
                            }
                          p.schema.additionalProperties &&
                            !g &&
                            ((T = p.schema.additionalProperties),
                            this.addSchemaValueCompletions(T, d, i, s))
                        }
                      }
                    }
                    '$schema' !== c ||
                      n.parent ||
                      this.addDollarSchemaCompletions(d, i),
                      s.boolean &&
                        (this.addBooleanValueCompletion(!0, d, i),
                        this.addBooleanValueCompletion(!1, d, i)),
                      s.null && this.addNullValueCompletion(d, i)
                  }
                } else this.addSchemaValueCompletions(e.schema, '', i, s)
              }),
              (e.prototype.getContributedValueCompletions = function (
                e,
                t,
                n,
                r,
                o,
                i
              ) {
                if (t) {
                  if (
                    (('string' !== t.type &&
                      'number' !== t.type &&
                      'boolean' !== t.type &&
                      'null' !== t.type) ||
                      (t = t.parent),
                    t && 'property' === t.type && n > (t.colonOffset || 0))
                  ) {
                    var s = t.keyNode.value,
                      a = t.valueNode
                    if ((!a || n <= a.offset + a.length) && t.parent) {
                      var c = G(t.parent)
                      this.contributions.forEach(function (e) {
                        var t = e.collectValueCompletions(r.uri, c, s, o)
                        t && i.push(t)
                      })
                    }
                  }
                } else
                  this.contributions.forEach(function (e) {
                    var t = e.collectDefaultCompletions(r.uri, o)
                    t && i.push(t)
                  })
              }),
              (e.prototype.addSchemaValueCompletions = function (e, t, n, r) {
                var o = this
                'object' == typeof e &&
                  (this.addEnumValueCompletions(e, t, n),
                  this.addDefaultValueCompletions(e, t, n),
                  this.collectTypes(e, r),
                  Array.isArray(e.allOf) &&
                    e.allOf.forEach(function (e) {
                      return o.addSchemaValueCompletions(e, t, n, r)
                    }),
                  Array.isArray(e.anyOf) &&
                    e.anyOf.forEach(function (e) {
                      return o.addSchemaValueCompletions(e, t, n, r)
                    }),
                  Array.isArray(e.oneOf) &&
                    e.oneOf.forEach(function (e) {
                      return o.addSchemaValueCompletions(e, t, n, r)
                    }))
              }),
              (e.prototype.addDefaultValueCompletions = function (e, t, n, r) {
                var o = this
                void 0 === r && (r = 0)
                var i = !1
                if (y(e.default)) {
                  for (var s = e.type, a = e.default, c = r; c > 0; c--)
                    (a = [a]), (s = 'array')
                  n.add({
                    kind: this.getSuggestionKind(s),
                    label: this.getLabelForValue(a),
                    insertText: this.getInsertTextForValue(a, t),
                    insertTextFormat: k.InsertTextFormat.Snippet,
                    detail: ee('json.suggest.default', 'Default value'),
                  }),
                    (i = !0)
                }
                Array.isArray(e.examples) &&
                  e.examples.forEach(function (s) {
                    for (var a = e.type, c = s, u = r; u > 0; u--)
                      (c = [c]), (a = 'array')
                    n.add({
                      kind: o.getSuggestionKind(a),
                      label: o.getLabelForValue(c),
                      insertText: o.getInsertTextForValue(c, t),
                      insertTextFormat: k.InsertTextFormat.Snippet,
                    }),
                      (i = !0)
                  }),
                  Array.isArray(e.defaultSnippets) &&
                    e.defaultSnippets.forEach(function (s) {
                      var a,
                        c,
                        u = e.type,
                        l = s.body,
                        d = s.label
                      if (y(l)) {
                        e.type
                        for (var f = r; f > 0; f--) l = [l]
                        ;(a = o.getInsertTextForSnippetValue(l, t)),
                          (c = o.getFilterTextForSnippetValue(l)),
                          (d = d || o.getLabelForSnippetValue(l))
                      } else {
                        if ('string' != typeof s.bodyText) return
                        var h = '',
                          p = '',
                          m = ''
                        for (f = r; f > 0; f--)
                          (h = h + m + '[\n'),
                            (p = p + '\n' + m + ']'),
                            (m += '\t'),
                            (u = 'array')
                        ;(a =
                          h +
                          m +
                          s.bodyText.split('\n').join('\n' + m) +
                          p +
                          t),
                          (d = d || a),
                          (c = a.replace(/[\n]/g, ''))
                      }
                      n.add({
                        kind: o.getSuggestionKind(u),
                        label: d,
                        documentation:
                          o.fromMarkup(s.markdownDescription) || s.description,
                        insertText: a,
                        insertTextFormat: k.InsertTextFormat.Snippet,
                        filterText: c,
                      }),
                        (i = !0)
                    }),
                  !i &&
                    'object' == typeof e.items &&
                    !Array.isArray(e.items) &&
                    r < 5 &&
                    this.addDefaultValueCompletions(e.items, t, n, r + 1)
              }),
              (e.prototype.addEnumValueCompletions = function (e, t, n) {
                if (
                  (y(e.const) &&
                    n.add({
                      kind: this.getSuggestionKind(e.type),
                      label: this.getLabelForValue(e.const),
                      insertText: this.getInsertTextForValue(e.const, t),
                      insertTextFormat: k.InsertTextFormat.Snippet,
                      documentation:
                        this.fromMarkup(e.markdownDescription) || e.description,
                    }),
                  Array.isArray(e.enum))
                )
                  for (var r = 0, o = e.enum.length; r < o; r++) {
                    var i = e.enum[r],
                      s =
                        this.fromMarkup(e.markdownDescription) || e.description
                    e.markdownEnumDescriptions &&
                    r < e.markdownEnumDescriptions.length &&
                    this.doesSupportMarkdown()
                      ? (s = this.fromMarkup(e.markdownEnumDescriptions[r]))
                      : e.enumDescriptions &&
                        r < e.enumDescriptions.length &&
                        (s = e.enumDescriptions[r]),
                      n.add({
                        kind: this.getSuggestionKind(e.type),
                        label: this.getLabelForValue(i),
                        insertText: this.getInsertTextForValue(i, t),
                        insertTextFormat: k.InsertTextFormat.Snippet,
                        documentation: s,
                      })
                  }
              }),
              (e.prototype.collectTypes = function (e, t) {
                if (!Array.isArray(e.enum) && !y(e.const)) {
                  var n = e.type
                  Array.isArray(n)
                    ? n.forEach(function (e) {
                        return (t[e] = !0)
                      })
                    : n && (t[n] = !0)
                }
              }),
              (e.prototype.addFillerValueCompletions = function (e, t, n) {
                e.object &&
                  n.add({
                    kind: this.getSuggestionKind('object'),
                    label: '{}',
                    insertText: this.getInsertTextForGuessedValue({}, t),
                    insertTextFormat: k.InsertTextFormat.Snippet,
                    detail: ee('defaults.object', 'New object'),
                    documentation: '',
                  }),
                  e.array &&
                    n.add({
                      kind: this.getSuggestionKind('array'),
                      label: '[]',
                      insertText: this.getInsertTextForGuessedValue([], t),
                      insertTextFormat: k.InsertTextFormat.Snippet,
                      detail: ee('defaults.array', 'New array'),
                      documentation: '',
                    })
              }),
              (e.prototype.addBooleanValueCompletion = function (e, t, n) {
                n.add({
                  kind: this.getSuggestionKind('boolean'),
                  label: e ? 'true' : 'false',
                  insertText: this.getInsertTextForValue(e, t),
                  insertTextFormat: k.InsertTextFormat.Snippet,
                  documentation: '',
                })
              }),
              (e.prototype.addNullValueCompletion = function (e, t) {
                t.add({
                  kind: this.getSuggestionKind('null'),
                  label: 'null',
                  insertText: 'null' + e,
                  insertTextFormat: k.InsertTextFormat.Snippet,
                  documentation: '',
                })
              }),
              (e.prototype.addDollarSchemaCompletions = function (e, t) {
                var n = this
                this.schemaService
                  .getRegisteredSchemaIds(function (e) {
                    return 'http' === e || 'https' === e
                  })
                  .forEach(function (r) {
                    return t.add({
                      kind: k.CompletionItemKind.Module,
                      label: n.getLabelForValue(r),
                      filterText: n.getFilterTextForValue(r),
                      insertText: n.getInsertTextForValue(r, e),
                      insertTextFormat: k.InsertTextFormat.Snippet,
                      documentation: '',
                    })
                  })
              }),
              (e.prototype.getLabelForValue = function (e) {
                return JSON.stringify(e)
              }),
              (e.prototype.getFilterTextForValue = function (e) {
                return JSON.stringify(e)
              }),
              (e.prototype.getFilterTextForSnippetValue = function (e) {
                return JSON.stringify(e).replace(
                  /\$\{\d+:([^}]+)\}|\$\d+/g,
                  '$1'
                )
              }),
              (e.prototype.getLabelForSnippetValue = function (e) {
                return JSON.stringify(e).replace(
                  /\$\{\d+:([^}]+)\}|\$\d+/g,
                  '$1'
                )
              }),
              (e.prototype.getInsertTextForPlainText = function (e) {
                return e.replace(/[\\\$\}]/g, '\\$&')
              }),
              (e.prototype.getInsertTextForValue = function (e, t) {
                var n = JSON.stringify(e, null, '\t')
                return '{}' === n
                  ? '{$1}' + t
                  : '[]' === n
                  ? '[$1]' + t
                  : this.getInsertTextForPlainText(n + t)
              }),
              (e.prototype.getInsertTextForSnippetValue = function (e, t) {
                return (
                  Q(e, '', function (e) {
                    return 'string' == typeof e && '^' === e[0]
                      ? e.substr(1)
                      : JSON.stringify(e)
                  }) + t
                )
              }),
              (e.prototype.getInsertTextForGuessedValue = function (e, t) {
                switch (typeof e) {
                  case 'object':
                    return null === e
                      ? '${1:null}' + t
                      : this.getInsertTextForValue(e, t)
                  case 'string':
                    var n = JSON.stringify(e)
                    return (
                      (n = n.substr(1, n.length - 2)),
                      '"${1:' +
                        (n = this.getInsertTextForPlainText(n)) +
                        '}"' +
                        t
                    )
                  case 'number':
                  case 'boolean':
                    return '${1:' + JSON.stringify(e) + '}' + t
                }
                return this.getInsertTextForValue(e, t)
              }),
              (e.prototype.getSuggestionKind = function (e) {
                if (Array.isArray(e)) {
                  var t = e
                  e = t.length > 0 ? t[0] : void 0
                }
                if (!e) return k.CompletionItemKind.Value
                switch (e) {
                  case 'string':
                    return k.CompletionItemKind.Value
                  case 'object':
                    return k.CompletionItemKind.Module
                  case 'property':
                    return k.CompletionItemKind.Property
                  default:
                    return k.CompletionItemKind.Value
                }
              }),
              (e.prototype.getLabelTextForMatchingNode = function (e, t) {
                switch (e.type) {
                  case 'array':
                    return '[]'
                  case 'object':
                    return '{}'
                  default:
                    return t.getText().substr(e.offset, e.length)
                }
              }),
              (e.prototype.getInsertTextForMatchingNode = function (e, t, n) {
                switch (e.type) {
                  case 'array':
                    return this.getInsertTextForValue([], n)
                  case 'object':
                    return this.getInsertTextForValue({}, n)
                  default:
                    var r = t.getText().substr(e.offset, e.length) + n
                    return this.getInsertTextForPlainText(r)
                }
              }),
              (e.prototype.getInsertTextForProperty = function (e, t, n, r) {
                var o = this.getInsertTextForValue(e, '')
                if (!n) return o
                var i,
                  s = o + ': ',
                  a = 0
                if (t) {
                  if (Array.isArray(t.defaultSnippets)) {
                    if (1 === t.defaultSnippets.length) {
                      var c = t.defaultSnippets[0].body
                      y(c) && (i = this.getInsertTextForSnippetValue(c, ''))
                    }
                    a += t.defaultSnippets.length
                  }
                  if (
                    (t.enum &&
                      (i ||
                        1 !== t.enum.length ||
                        (i = this.getInsertTextForGuessedValue(t.enum[0], '')),
                      (a += t.enum.length)),
                    y(t.default) &&
                      (i ||
                        (i = this.getInsertTextForGuessedValue(t.default, '')),
                      a++),
                    Array.isArray(t.examples) &&
                      t.examples.length &&
                      (i ||
                        (i = this.getInsertTextForGuessedValue(
                          t.examples[0],
                          ''
                        )),
                      (a += t.examples.length)),
                    0 === a)
                  ) {
                    var u = Array.isArray(t.type) ? t.type[0] : t.type
                    switch (
                      (u ||
                        (t.properties
                          ? (u = 'object')
                          : t.items && (u = 'array')),
                      u)
                    ) {
                      case 'boolean':
                        i = '$1'
                        break
                      case 'string':
                        i = '"$1"'
                        break
                      case 'object':
                        i = '{$1}'
                        break
                      case 'array':
                        i = '[$1]'
                        break
                      case 'number':
                      case 'integer':
                        i = '${1:0}'
                        break
                      case 'null':
                        i = '${1:null}'
                        break
                      default:
                        return o
                    }
                  }
                }
                return (!i || a > 1) && (i = '$1'), s + i + r
              }),
              (e.prototype.getCurrentWord = function (e, t) {
                for (
                  var n = t - 1, r = e.getText();
                  n >= 0 && -1 === ' \t\n\r\v":{[,]}'.indexOf(r.charAt(n));

                )
                  n--
                return r.substring(n + 1, t)
              }),
              (e.prototype.evaluateSeparatorAfter = function (e, t) {
                var n = l(e.getText(), !0)
                switch ((n.setPosition(t), n.scan())) {
                  case 5:
                  case 2:
                  case 4:
                  case 17:
                    return ''
                  default:
                    return ','
                }
              }),
              (e.prototype.findItemAtOffset = function (e, t, n) {
                for (
                  var r = l(t.getText(), !0), o = e.items, i = o.length - 1;
                  i >= 0;
                  i--
                ) {
                  var s = o[i]
                  if (n > s.offset + s.length)
                    return (
                      r.setPosition(s.offset + s.length),
                      5 === r.scan() &&
                      n >= r.getTokenOffset() + r.getTokenLength()
                        ? i + 1
                        : i
                    )
                  if (n >= s.offset) return i
                }
                return 0
              }),
              (e.prototype.isInComment = function (e, t, n) {
                var r = l(e.getText(), !1)
                r.setPosition(t)
                for (
                  var o = r.scan();
                  17 !== o && r.getTokenOffset() + r.getTokenLength() < n;

                )
                  o = r.scan()
                return (12 === o || 13 === o) && r.getTokenOffset() <= n
              }),
              (e.prototype.fromMarkup = function (e) {
                if (e && this.doesSupportMarkdown())
                  return { kind: k.MarkupKind.Markdown, value: e }
              }),
              (e.prototype.doesSupportMarkdown = function () {
                if (!y(this.supportsMarkdown)) {
                  var e =
                    this.clientCapabilities.textDocument &&
                    this.clientCapabilities.textDocument.completion
                  this.supportsMarkdown =
                    e &&
                    e.completionItem &&
                    Array.isArray(e.completionItem.documentationFormat) &&
                    -1 !==
                      e.completionItem.documentationFormat.indexOf(
                        k.MarkupKind.Markdown
                      )
                }
                return this.supportsMarkdown
              }),
              (e.prototype.doesSupportsCommitCharacters = function () {
                if (!y(this.supportsCommitCharacters)) {
                  var e =
                    this.clientCapabilities.textDocument &&
                    this.clientCapabilities.textDocument.completion
                  this.supportsCommitCharacters =
                    e &&
                    e.completionItem &&
                    !!e.completionItem.commitCharactersSupport
                }
                return this.supportsCommitCharacters
              }),
              e
            )
          })(),
          ne = (function () {
            function e(e, t, n) {
              void 0 === t && (t = []),
                (this.schemaService = e),
                (this.contributions = t),
                (this.promise = n || Promise)
            }
            return (
              (e.prototype.doHover = function (e, t, n) {
                var r = e.offsetAt(t),
                  o = n.getNodeFromOffset(r)
                if (
                  !o ||
                  (('object' === o.type || 'array' === o.type) &&
                    r > o.offset + 1 &&
                    r < o.offset + o.length - 1)
                )
                  return this.promise.resolve(null)
                var i = o
                if ('string' === o.type) {
                  var s = o.parent
                  if (
                    s &&
                    'property' === s.type &&
                    s.keyNode === o &&
                    !(o = s.valueNode)
                  )
                    return this.promise.resolve(null)
                }
                for (
                  var a = k.Range.create(
                      e.positionAt(i.offset),
                      e.positionAt(i.offset + i.length)
                    ),
                    c = function (e) {
                      return { contents: e, range: a }
                    },
                    u = G(o),
                    l = this.contributions.length - 1;
                  l >= 0;
                  l--
                ) {
                  var d = this.contributions[l].getInfoContribution(e.uri, u)
                  if (d)
                    return d.then(function (e) {
                      return c(e)
                    })
                }
                return this.schemaService
                  .getSchemaForResource(e.uri, n)
                  .then(function (e) {
                    if (e && o) {
                      var t = n.getMatchingSchemas(e.schema, o.offset),
                        r = void 0,
                        i = void 0,
                        s = void 0,
                        a = void 0
                      t.every(function (e) {
                        if (
                          e.node === o &&
                          !e.inverted &&
                          e.schema &&
                          ((r = r || e.schema.title),
                          (i =
                            i ||
                            e.schema.markdownDescription ||
                            re(e.schema.description)),
                          e.schema.enum)
                        ) {
                          var t = e.schema.enum.indexOf(J(o))
                          e.schema.markdownEnumDescriptions
                            ? (s = e.schema.markdownEnumDescriptions[t])
                            : e.schema.enumDescriptions &&
                              (s = re(e.schema.enumDescriptions[t])),
                            s &&
                              'string' != typeof (a = e.schema.enum[t]) &&
                              (a = JSON.stringify(a))
                        }
                        return !0
                      })
                      var u = ''
                      return (
                        r && (u = re(r)),
                        i && (u.length > 0 && (u += '\n\n'), (u += i)),
                        s &&
                          (u.length > 0 && (u += '\n\n'),
                          (u += '`'
                            .concat(
                              ((l = a),
                              -1 !== l.indexOf('`') ? '`` ' + l + ' ``' : l),
                              '`: '
                            )
                            .concat(s))),
                        c([u])
                      )
                    }
                    var l
                    return null
                  })
              }),
              e
            )
          })()
        function re(e) {
          if (e)
            return e
              .replace(/([^\n\r])(\r?\n)([^\n\r])/gm, '$1\n\n$3')
              .replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&')
        }
        var oe = q.LV(),
          ie = (function () {
            function e(e, t) {
              ;(this.jsonSchemaService = e),
                (this.promise = t),
                (this.validationEnabled = !0)
            }
            return (
              (e.prototype.configure = function (e) {
                e &&
                  ((this.validationEnabled = !1 !== e.validate),
                  (this.commentSeverity = e.allowComments
                    ? void 0
                    : k.DiagnosticSeverity.Error))
              }),
              (e.prototype.doValidation = function (e, t, n, r) {
                var o = this
                if (!this.validationEnabled) return this.promise.resolve([])
                var i = [],
                  s = {},
                  a = function (e) {
                    var t =
                      e.range.start.line +
                      ' ' +
                      e.range.start.character +
                      ' ' +
                      e.message
                    s[t] || ((s[t] = !0), i.push(e))
                  },
                  c = function (r) {
                    var s = (null == n ? void 0 : n.trailingCommas)
                        ? ue(n.trailingCommas)
                        : k.DiagnosticSeverity.Error,
                      c = (null == n ? void 0 : n.comments)
                        ? ue(n.comments)
                        : o.commentSeverity,
                      u = (null == n ? void 0 : n.schemaValidation)
                        ? ue(n.schemaValidation)
                        : k.DiagnosticSeverity.Warning,
                      l = (null == n ? void 0 : n.schemaRequest)
                        ? ue(n.schemaRequest)
                        : k.DiagnosticSeverity.Warning
                    if (r) {
                      if (r.errors.length && t.root && l) {
                        var d = t.root,
                          f = 'object' === d.type ? d.properties[0] : void 0
                        if (f && '$schema' === f.keyNode.value) {
                          var h = f.valueNode || f,
                            p = k.Range.create(
                              e.positionAt(h.offset),
                              e.positionAt(h.offset + h.length)
                            )
                          a(
                            k.Diagnostic.create(
                              p,
                              r.errors[0],
                              l,
                              T.SchemaResolveError
                            )
                          )
                        } else
                          (p = k.Range.create(
                            e.positionAt(d.offset),
                            e.positionAt(d.offset + 1)
                          )),
                            a(
                              k.Diagnostic.create(
                                p,
                                r.errors[0],
                                l,
                                T.SchemaResolveError
                              )
                            )
                      } else if (u) {
                        var m = t.validate(e, r.schema, u)
                        m && m.forEach(a)
                      }
                      ae(r.schema) && (c = void 0), ce(r.schema) && (s = void 0)
                    }
                    for (var g = 0, y = t.syntaxErrors; g < y.length; g++) {
                      var v = y[g]
                      if (v.code === T.TrailingComma) {
                        if ('number' != typeof s) continue
                        v.severity = s
                      }
                      a(v)
                    }
                    if ('number' == typeof c) {
                      var b = oe(
                        'InvalidCommentToken',
                        'Comments are not permitted in JSON.'
                      )
                      t.comments.forEach(function (e) {
                        a(k.Diagnostic.create(e, b, c, T.CommentNotPermitted))
                      })
                    }
                    return i
                  }
                if (r) {
                  var u = r.id || 'schemaservice://untitled/' + se++
                  return this.jsonSchemaService
                    .registerExternalSchema(u, [], r)
                    .getResolvedSchema()
                    .then(function (e) {
                      return c(e)
                    })
                }
                return this.jsonSchemaService
                  .getSchemaForResource(e.uri, t)
                  .then(function (e) {
                    return c(e)
                  })
              }),
              (e.prototype.getLanguageStatus = function (e, t) {
                return {
                  schemas: this.jsonSchemaService.getSchemaURIsForResource(
                    e.uri,
                    t
                  ),
                }
              }),
              e
            )
          })(),
          se = 0
        function ae(e) {
          if (e && 'object' == typeof e) {
            if (v(e.allowComments)) return e.allowComments
            if (e.allOf)
              for (var t = 0, n = e.allOf; t < n.length; t++) {
                var r = ae(n[t])
                if (v(r)) return r
              }
          }
        }
        function ce(e) {
          if (e && 'object' == typeof e) {
            if (v(e.allowTrailingCommas)) return e.allowTrailingCommas
            var t = e
            if (v(t.allowsTrailingCommas)) return t.allowsTrailingCommas
            if (e.allOf)
              for (var n = 0, r = e.allOf; n < r.length; n++) {
                var o = ce(r[n])
                if (v(o)) return o
              }
          }
        }
        function ue(e) {
          switch (e) {
            case 'error':
              return k.DiagnosticSeverity.Error
            case 'warning':
              return k.DiagnosticSeverity.Warning
            case 'ignore':
              return
          }
        }
        function le(e) {
          return e < 48
            ? 0
            : e <= 57
            ? e - 48
            : (e < 97 && (e += 32), e >= 97 && e <= 102 ? e - 97 + 10 : 0)
        }
        function de(e) {
          if ('#' === e[0])
            switch (e.length) {
              case 4:
                return {
                  red: (17 * le(e.charCodeAt(1))) / 255,
                  green: (17 * le(e.charCodeAt(2))) / 255,
                  blue: (17 * le(e.charCodeAt(3))) / 255,
                  alpha: 1,
                }
              case 5:
                return {
                  red: (17 * le(e.charCodeAt(1))) / 255,
                  green: (17 * le(e.charCodeAt(2))) / 255,
                  blue: (17 * le(e.charCodeAt(3))) / 255,
                  alpha: (17 * le(e.charCodeAt(4))) / 255,
                }
              case 7:
                return {
                  red: (16 * le(e.charCodeAt(1)) + le(e.charCodeAt(2))) / 255,
                  green: (16 * le(e.charCodeAt(3)) + le(e.charCodeAt(4))) / 255,
                  blue: (16 * le(e.charCodeAt(5)) + le(e.charCodeAt(6))) / 255,
                  alpha: 1,
                }
              case 9:
                return {
                  red: (16 * le(e.charCodeAt(1)) + le(e.charCodeAt(2))) / 255,
                  green: (16 * le(e.charCodeAt(3)) + le(e.charCodeAt(4))) / 255,
                  blue: (16 * le(e.charCodeAt(5)) + le(e.charCodeAt(6))) / 255,
                  alpha: (16 * le(e.charCodeAt(7)) + le(e.charCodeAt(8))) / 255,
                }
            }
        }
        var fe = (function () {
          function e(e) {
            this.schemaService = e
          }
          return (
            (e.prototype.findDocumentSymbols = function (e, t, n) {
              var r = this
              void 0 === n && (n = { resultLimit: Number.MAX_VALUE })
              var o = t.root
              if (!o) return []
              var i = n.resultLimit || Number.MAX_VALUE,
                s = e.uri
              if (
                ('vscode://defaultsettings/keybindings.json' === s ||
                  b(s.toLowerCase(), '/user/keybindings.json')) &&
                'array' === o.type
              ) {
                for (var a = [], c = 0, u = o.items; c < u.length; c++) {
                  var l = u[c]
                  if ('object' === l.type)
                    for (var d = 0, f = l.properties; d < f.length; d++) {
                      var h = f[d]
                      if ('key' === h.keyNode.value && h.valueNode) {
                        var p = k.Location.create(e.uri, he(e, l))
                        if (
                          (a.push({
                            name: J(h.valueNode),
                            kind: k.SymbolKind.Function,
                            location: p,
                          }),
                          --i <= 0)
                        )
                          return (
                            n &&
                              n.onResultLimitExceeded &&
                              n.onResultLimitExceeded(s),
                            a
                          )
                      }
                    }
                }
                return a
              }
              for (
                var m = [{ node: o, containerName: '' }],
                  g = 0,
                  y = !1,
                  v = [],
                  R = function (t, n) {
                    'array' === t.type
                      ? t.items.forEach(function (e) {
                          e && m.push({ node: e, containerName: n })
                        })
                      : 'object' === t.type &&
                        t.properties.forEach(function (t) {
                          var o = t.valueNode
                          if (o)
                            if (i > 0) {
                              i--
                              var s = k.Location.create(e.uri, he(e, t)),
                                a = n
                                  ? n + '.' + t.keyNode.value
                                  : t.keyNode.value
                              v.push({
                                name: r.getKeyLabel(t),
                                kind: r.getSymbolKind(o.type),
                                location: s,
                                containerName: n,
                              }),
                                m.push({ node: o, containerName: a })
                            } else y = !0
                        })
                  };
                g < m.length;

              ) {
                var S = m[g++]
                R(S.node, S.containerName)
              }
              return (
                y && n && n.onResultLimitExceeded && n.onResultLimitExceeded(s),
                v
              )
            }),
            (e.prototype.findDocumentSymbols2 = function (e, t, n) {
              var r = this
              void 0 === n && (n = { resultLimit: Number.MAX_VALUE })
              var o = t.root
              if (!o) return []
              var i = n.resultLimit || Number.MAX_VALUE,
                s = e.uri
              if (
                ('vscode://default/keybindings.json' === s ||
                  b(s.toLowerCase(), '/user/keybindings.json')) &&
                'array' === o.type
              ) {
                for (var a = [], c = 0, u = o.items; c < u.length; c++) {
                  var l = u[c]
                  if ('object' === l.type)
                    for (var d = 0, f = l.properties; d < f.length; d++) {
                      var h = f[d]
                      if ('key' === h.keyNode.value && h.valueNode) {
                        var p = he(e, l),
                          m = he(e, h.keyNode)
                        if (
                          (a.push({
                            name: J(h.valueNode),
                            kind: k.SymbolKind.Function,
                            range: p,
                            selectionRange: m,
                          }),
                          --i <= 0)
                        )
                          return (
                            n &&
                              n.onResultLimitExceeded &&
                              n.onResultLimitExceeded(s),
                            a
                          )
                      }
                    }
                }
                return a
              }
              for (
                var g = [],
                  y = [{ node: o, result: g }],
                  v = 0,
                  R = !1,
                  S = function (t, n) {
                    'array' === t.type
                      ? t.items.forEach(function (t, o) {
                          if (t)
                            if (i > 0) {
                              i--
                              var s = he(e, t),
                                a = s,
                                c = {
                                  name: String(o),
                                  kind: r.getSymbolKind(t.type),
                                  range: s,
                                  selectionRange: a,
                                  children: [],
                                }
                              n.push(c), y.push({ result: c.children, node: t })
                            } else R = !0
                        })
                      : 'object' === t.type &&
                        t.properties.forEach(function (t) {
                          var o = t.valueNode
                          if (o)
                            if (i > 0) {
                              i--
                              var s = he(e, t),
                                a = he(e, t.keyNode),
                                c = [],
                                u = {
                                  name: r.getKeyLabel(t),
                                  kind: r.getSymbolKind(o.type),
                                  range: s,
                                  selectionRange: a,
                                  children: c,
                                  detail: r.getDetail(o),
                                }
                              n.push(u), y.push({ result: c, node: o })
                            } else R = !0
                        })
                  };
                v < y.length;

              ) {
                var T = y[v++]
                S(T.node, T.result)
              }
              return (
                R && n && n.onResultLimitExceeded && n.onResultLimitExceeded(s),
                g
              )
            }),
            (e.prototype.getSymbolKind = function (e) {
              switch (e) {
                case 'object':
                  return k.SymbolKind.Module
                case 'string':
                  return k.SymbolKind.String
                case 'number':
                  return k.SymbolKind.Number
                case 'array':
                  return k.SymbolKind.Array
                case 'boolean':
                  return k.SymbolKind.Boolean
                default:
                  return k.SymbolKind.Variable
              }
            }),
            (e.prototype.getKeyLabel = function (e) {
              var t = e.keyNode.value
              return (
                t && (t = t.replace(/[\n]/g, '↵')),
                t && t.trim() ? t : '"'.concat(t, '"')
              )
            }),
            (e.prototype.getDetail = function (e) {
              if (e)
                return 'boolean' === e.type ||
                  'number' === e.type ||
                  'null' === e.type ||
                  'string' === e.type
                  ? String(e.value)
                  : 'array' === e.type
                  ? e.children.length
                    ? void 0
                    : '[]'
                  : 'object' === e.type
                  ? e.children.length
                    ? void 0
                    : '{}'
                  : void 0
            }),
            (e.prototype.findDocumentColors = function (e, t, n) {
              return this.schemaService
                .getSchemaForResource(e.uri, t)
                .then(function (r) {
                  var o = []
                  if (r)
                    for (
                      var i =
                          n && 'number' == typeof n.resultLimit
                            ? n.resultLimit
                            : Number.MAX_VALUE,
                        s = {},
                        a = 0,
                        c = t.getMatchingSchemas(r.schema);
                      a < c.length;
                      a++
                    ) {
                      var u = c[a]
                      if (
                        !u.inverted &&
                        u.schema &&
                        ('color' === u.schema.format ||
                          'color-hex' === u.schema.format) &&
                        u.node &&
                        'string' === u.node.type
                      ) {
                        var l = String(u.node.offset)
                        if (!s[l]) {
                          var d = de(J(u.node))
                          if (d) {
                            var f = he(e, u.node)
                            o.push({ color: d, range: f })
                          }
                          if (((s[l] = !0), --i <= 0))
                            return (
                              n &&
                                n.onResultLimitExceeded &&
                                n.onResultLimitExceeded(e.uri),
                              o
                            )
                        }
                      }
                    }
                  return o
                })
            }),
            (e.prototype.getColorPresentations = function (e, t, n, r) {
              var o,
                i = [],
                s = Math.round(255 * n.red),
                a = Math.round(255 * n.green),
                c = Math.round(255 * n.blue)
              function u(e) {
                var t = e.toString(16)
                return 2 !== t.length ? '0' + t : t
              }
              return (
                (o =
                  1 === n.alpha
                    ? '#'.concat(u(s)).concat(u(a)).concat(u(c))
                    : '#'
                        .concat(u(s))
                        .concat(u(a))
                        .concat(u(c))
                        .concat(u(Math.round(255 * n.alpha)))),
                i.push({
                  label: o,
                  textEdit: k.TextEdit.replace(r, JSON.stringify(o)),
                }),
                i
              )
            }),
            e
          )
        })()
        function he(e, t) {
          return k.Range.create(
            e.positionAt(t.offset),
            e.positionAt(t.offset + t.length)
          )
        }
        var pe = q.LV(),
          me = {
            schemaAssociations: [],
            schemas: {
              'http://json-schema.org/schema#': {
                $ref: 'http://json-schema.org/draft-07/schema#',
              },
              'http://json-schema.org/draft-04/schema#': {
                $schema: 'http://json-schema.org/draft-04/schema#',
                definitions: {
                  schemaArray: {
                    type: 'array',
                    minItems: 1,
                    items: { $ref: '#' },
                  },
                  positiveInteger: { type: 'integer', minimum: 0 },
                  positiveIntegerDefault0: {
                    allOf: [
                      { $ref: '#/definitions/positiveInteger' },
                      { default: 0 },
                    ],
                  },
                  simpleTypes: {
                    type: 'string',
                    enum: [
                      'array',
                      'boolean',
                      'integer',
                      'null',
                      'number',
                      'object',
                      'string',
                    ],
                  },
                  stringArray: {
                    type: 'array',
                    items: { type: 'string' },
                    minItems: 1,
                    uniqueItems: !0,
                  },
                },
                type: 'object',
                properties: {
                  id: { type: 'string', format: 'uri' },
                  $schema: { type: 'string', format: 'uri' },
                  title: { type: 'string' },
                  description: { type: 'string' },
                  default: {},
                  multipleOf: {
                    type: 'number',
                    minimum: 0,
                    exclusiveMinimum: !0,
                  },
                  maximum: { type: 'number' },
                  exclusiveMaximum: { type: 'boolean', default: !1 },
                  minimum: { type: 'number' },
                  exclusiveMinimum: { type: 'boolean', default: !1 },
                  maxLength: {
                    allOf: [{ $ref: '#/definitions/positiveInteger' }],
                  },
                  minLength: {
                    allOf: [{ $ref: '#/definitions/positiveIntegerDefault0' }],
                  },
                  pattern: { type: 'string', format: 'regex' },
                  additionalItems: {
                    anyOf: [{ type: 'boolean' }, { $ref: '#' }],
                    default: {},
                  },
                  items: {
                    anyOf: [
                      { $ref: '#' },
                      { $ref: '#/definitions/schemaArray' },
                    ],
                    default: {},
                  },
                  maxItems: {
                    allOf: [{ $ref: '#/definitions/positiveInteger' }],
                  },
                  minItems: {
                    allOf: [{ $ref: '#/definitions/positiveIntegerDefault0' }],
                  },
                  uniqueItems: { type: 'boolean', default: !1 },
                  maxProperties: {
                    allOf: [{ $ref: '#/definitions/positiveInteger' }],
                  },
                  minProperties: {
                    allOf: [{ $ref: '#/definitions/positiveIntegerDefault0' }],
                  },
                  required: { allOf: [{ $ref: '#/definitions/stringArray' }] },
                  additionalProperties: {
                    anyOf: [{ type: 'boolean' }, { $ref: '#' }],
                    default: {},
                  },
                  definitions: {
                    type: 'object',
                    additionalProperties: { $ref: '#' },
                    default: {},
                  },
                  properties: {
                    type: 'object',
                    additionalProperties: { $ref: '#' },
                    default: {},
                  },
                  patternProperties: {
                    type: 'object',
                    additionalProperties: { $ref: '#' },
                    default: {},
                  },
                  dependencies: {
                    type: 'object',
                    additionalProperties: {
                      anyOf: [
                        { $ref: '#' },
                        { $ref: '#/definitions/stringArray' },
                      ],
                    },
                  },
                  enum: { type: 'array', minItems: 1, uniqueItems: !0 },
                  type: {
                    anyOf: [
                      { $ref: '#/definitions/simpleTypes' },
                      {
                        type: 'array',
                        items: { $ref: '#/definitions/simpleTypes' },
                        minItems: 1,
                        uniqueItems: !0,
                      },
                    ],
                  },
                  format: {
                    anyOf: [
                      {
                        type: 'string',
                        enum: [
                          'date-time',
                          'uri',
                          'email',
                          'hostname',
                          'ipv4',
                          'ipv6',
                          'regex',
                        ],
                      },
                      { type: 'string' },
                    ],
                  },
                  allOf: { allOf: [{ $ref: '#/definitions/schemaArray' }] },
                  anyOf: { allOf: [{ $ref: '#/definitions/schemaArray' }] },
                  oneOf: { allOf: [{ $ref: '#/definitions/schemaArray' }] },
                  not: { allOf: [{ $ref: '#' }] },
                },
                dependencies: {
                  exclusiveMaximum: ['maximum'],
                  exclusiveMinimum: ['minimum'],
                },
                default: {},
              },
              'http://json-schema.org/draft-07/schema#': {
                definitions: {
                  schemaArray: {
                    type: 'array',
                    minItems: 1,
                    items: { $ref: '#' },
                  },
                  nonNegativeInteger: { type: 'integer', minimum: 0 },
                  nonNegativeIntegerDefault0: {
                    allOf: [
                      { $ref: '#/definitions/nonNegativeInteger' },
                      { default: 0 },
                    ],
                  },
                  simpleTypes: {
                    enum: [
                      'array',
                      'boolean',
                      'integer',
                      'null',
                      'number',
                      'object',
                      'string',
                    ],
                  },
                  stringArray: {
                    type: 'array',
                    items: { type: 'string' },
                    uniqueItems: !0,
                    default: [],
                  },
                },
                type: ['object', 'boolean'],
                properties: {
                  $id: { type: 'string', format: 'uri-reference' },
                  $schema: { type: 'string', format: 'uri' },
                  $ref: { type: 'string', format: 'uri-reference' },
                  $comment: { type: 'string' },
                  title: { type: 'string' },
                  description: { type: 'string' },
                  default: !0,
                  readOnly: { type: 'boolean', default: !1 },
                  examples: { type: 'array', items: !0 },
                  multipleOf: { type: 'number', exclusiveMinimum: 0 },
                  maximum: { type: 'number' },
                  exclusiveMaximum: { type: 'number' },
                  minimum: { type: 'number' },
                  exclusiveMinimum: { type: 'number' },
                  maxLength: { $ref: '#/definitions/nonNegativeInteger' },
                  minLength: {
                    $ref: '#/definitions/nonNegativeIntegerDefault0',
                  },
                  pattern: { type: 'string', format: 'regex' },
                  additionalItems: { $ref: '#' },
                  items: {
                    anyOf: [
                      { $ref: '#' },
                      { $ref: '#/definitions/schemaArray' },
                    ],
                    default: !0,
                  },
                  maxItems: { $ref: '#/definitions/nonNegativeInteger' },
                  minItems: {
                    $ref: '#/definitions/nonNegativeIntegerDefault0',
                  },
                  uniqueItems: { type: 'boolean', default: !1 },
                  contains: { $ref: '#' },
                  maxProperties: { $ref: '#/definitions/nonNegativeInteger' },
                  minProperties: {
                    $ref: '#/definitions/nonNegativeIntegerDefault0',
                  },
                  required: { $ref: '#/definitions/stringArray' },
                  additionalProperties: { $ref: '#' },
                  definitions: {
                    type: 'object',
                    additionalProperties: { $ref: '#' },
                    default: {},
                  },
                  properties: {
                    type: 'object',
                    additionalProperties: { $ref: '#' },
                    default: {},
                  },
                  patternProperties: {
                    type: 'object',
                    additionalProperties: { $ref: '#' },
                    propertyNames: { format: 'regex' },
                    default: {},
                  },
                  dependencies: {
                    type: 'object',
                    additionalProperties: {
                      anyOf: [
                        { $ref: '#' },
                        { $ref: '#/definitions/stringArray' },
                      ],
                    },
                  },
                  propertyNames: { $ref: '#' },
                  const: !0,
                  enum: {
                    type: 'array',
                    items: !0,
                    minItems: 1,
                    uniqueItems: !0,
                  },
                  type: {
                    anyOf: [
                      { $ref: '#/definitions/simpleTypes' },
                      {
                        type: 'array',
                        items: { $ref: '#/definitions/simpleTypes' },
                        minItems: 1,
                        uniqueItems: !0,
                      },
                    ],
                  },
                  format: { type: 'string' },
                  contentMediaType: { type: 'string' },
                  contentEncoding: { type: 'string' },
                  if: { $ref: '#' },
                  then: { $ref: '#' },
                  else: { $ref: '#' },
                  allOf: { $ref: '#/definitions/schemaArray' },
                  anyOf: { $ref: '#/definitions/schemaArray' },
                  oneOf: { $ref: '#/definitions/schemaArray' },
                  not: { $ref: '#' },
                },
                default: !0,
              },
            },
          },
          ge = {
            id: pe('schema.json.id', 'A unique identifier for the schema.'),
            $schema: pe(
              'schema.json.$schema',
              'The schema to verify this document against.'
            ),
            title: pe(
              'schema.json.title',
              'A descriptive title of the element.'
            ),
            description: pe(
              'schema.json.description',
              'A long description of the element. Used in hover menus and suggestions.'
            ),
            default: pe(
              'schema.json.default',
              'A default value. Used by suggestions.'
            ),
            multipleOf: pe(
              'schema.json.multipleOf',
              'A number that should cleanly divide the current value (i.e. have no remainder).'
            ),
            maximum: pe(
              'schema.json.maximum',
              'The maximum numerical value, inclusive by default.'
            ),
            exclusiveMaximum: pe(
              'schema.json.exclusiveMaximum',
              'Makes the maximum property exclusive.'
            ),
            minimum: pe(
              'schema.json.minimum',
              'The minimum numerical value, inclusive by default.'
            ),
            exclusiveMinimum: pe(
              'schema.json.exclusiveMininum',
              'Makes the minimum property exclusive.'
            ),
            maxLength: pe(
              'schema.json.maxLength',
              'The maximum length of a string.'
            ),
            minLength: pe(
              'schema.json.minLength',
              'The minimum length of a string.'
            ),
            pattern: pe(
              'schema.json.pattern',
              'A regular expression to match the string against. It is not implicitly anchored.'
            ),
            additionalItems: pe(
              'schema.json.additionalItems',
              'For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail.'
            ),
            items: pe(
              'schema.json.items',
              'For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on.'
            ),
            maxItems: pe(
              'schema.json.maxItems',
              'The maximum number of items that can be inside an array. Inclusive.'
            ),
            minItems: pe(
              'schema.json.minItems',
              'The minimum number of items that can be inside an array. Inclusive.'
            ),
            uniqueItems: pe(
              'schema.json.uniqueItems',
              'If all of the items in the array must be unique. Defaults to false.'
            ),
            maxProperties: pe(
              'schema.json.maxProperties',
              'The maximum number of properties an object can have. Inclusive.'
            ),
            minProperties: pe(
              'schema.json.minProperties',
              'The minimum number of properties an object can have. Inclusive.'
            ),
            required: pe(
              'schema.json.required',
              'An array of strings that lists the names of all properties required on this object.'
            ),
            additionalProperties: pe(
              'schema.json.additionalProperties',
              "Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail."
            ),
            definitions: pe(
              'schema.json.definitions',
              'Not used for validation. Place subschemas here that you wish to reference inline with $ref.'
            ),
            properties: pe(
              'schema.json.properties',
              'A map of property names to schemas for each property.'
            ),
            patternProperties: pe(
              'schema.json.patternProperties',
              'A map of regular expressions on property names to schemas for matching properties.'
            ),
            dependencies: pe(
              'schema.json.dependencies',
              'A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object.'
            ),
            enum: pe(
              'schema.json.enum',
              'The set of literal values that are valid.'
            ),
            type: pe(
              'schema.json.type',
              'Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types.'
            ),
            format: pe(
              'schema.json.format',
              'Describes the format expected for the value.'
            ),
            allOf: pe(
              'schema.json.allOf',
              'An array of schemas, all of which must match.'
            ),
            anyOf: pe(
              'schema.json.anyOf',
              'An array of schemas, where at least one must match.'
            ),
            oneOf: pe(
              'schema.json.oneOf',
              'An array of schemas, exactly one of which must match.'
            ),
            not: pe('schema.json.not', 'A schema which must not match.'),
            $id: pe('schema.json.$id', 'A unique identifier for the schema.'),
            $ref: pe(
              'schema.json.$ref',
              'Reference a definition hosted on any location.'
            ),
            $comment: pe(
              'schema.json.$comment',
              'Comments from schema authors to readers or maintainers of the schema.'
            ),
            readOnly: pe(
              'schema.json.readOnly',
              'Indicates that the value of the instance is managed exclusively by the owning authority.'
            ),
            examples: pe(
              'schema.json.examples',
              'Sample JSON values associated with a particular schema, for the purpose of illustrating usage.'
            ),
            contains: pe(
              'schema.json.contains',
              'An array instance is valid against "contains" if at least one of its elements is valid against the given schema.'
            ),
            propertyNames: pe(
              'schema.json.propertyNames',
              'If the instance is an object, this keyword validates if every property name in the instance validates against the provided schema.'
            ),
            const: pe(
              'schema.json.const',
              'An instance validates successfully against this keyword if its value is equal to the value of the keyword.'
            ),
            contentMediaType: pe(
              'schema.json.contentMediaType',
              'Describes the media type of a string property.'
            ),
            contentEncoding: pe(
              'schema.json.contentEncoding',
              'Describes the content encoding of a string property.'
            ),
            if: pe(
              'schema.json.if',
              'The validation outcome of the "if" subschema controls which of the "then" or "else" keywords are evaluated.'
            ),
            then: pe(
              'schema.json.then',
              'The "if" subschema is used for validation when the "if" subschema succeeds.'
            ),
            else: pe(
              'schema.json.else',
              'The "else" subschema is used for validation when the "if" subschema fails.'
            ),
          }
        for (var ye in me.schemas) {
          var ve = me.schemas[ye]
          for (var be in ve.properties) {
            var Re = ve.properties[be]
            'boolean' == typeof Re && (Re = ve.properties[be] = {})
            var Se = ge[be]
            Se
              ? (Re.description = Se)
              : console.log(
                  ''
                    .concat(be, ": localize('schema.json.")
                    .concat(be, '\', "")')
                )
          }
        }
        var Te = n(7373)
        function xe(e, t) {
          if ('string' != typeof e) throw new TypeError('Expected a string')
          for (
            var n,
              r = String(e),
              o = '',
              i = !!t && !!t.extended,
              s = !!t && !!t.globstar,
              a = !1,
              c = t && 'string' == typeof t.flags ? t.flags : '',
              u = 0,
              l = r.length;
            u < l;
            u++
          )
            switch ((n = r[u])) {
              case '/':
              case '$':
              case '^':
              case '+':
              case '.':
              case '(':
              case ')':
              case '=':
              case '!':
              case '|':
                o += '\\' + n
                break
              case '?':
                if (i) {
                  o += '.'
                  break
                }
              case '[':
              case ']':
                if (i) {
                  o += n
                  break
                }
              case '{':
                if (i) {
                  ;(a = !0), (o += '(')
                  break
                }
              case '}':
                if (i) {
                  ;(a = !1), (o += ')')
                  break
                }
              case ',':
                if (a) {
                  o += '|'
                  break
                }
                o += '\\' + n
                break
              case '*':
                for (var d = r[u - 1], f = 1; '*' === r[u + 1]; ) f++, u++
                var h = r[u + 1]
                s
                  ? !(f > 1) ||
                    ('/' !== d && void 0 !== d && '{' !== d && ',' !== d) ||
                    ('/' !== h && void 0 !== h && ',' !== h && '}' !== h)
                    ? (o += '([^/]*)')
                    : ('/' === h
                        ? u++
                        : '/' === d &&
                          o.endsWith('\\/') &&
                          (o = o.substr(0, o.length - 2)),
                      (o += '((?:[^/]*(?:/|$))*)'))
                  : (o += '.*')
                break
              default:
                o += n
            }
          return (c && ~c.indexOf('g')) || (o = '^' + o + '$'), new RegExp(o, c)
        }
        var ke = q.LV(),
          Ce = (function () {
            function e(e, t) {
              this.globWrappers = []
              try {
                for (var n = 0, r = e; n < r.length; n++) {
                  var o = r[n],
                    i = '!' !== o[0]
                  i || (o = o.substring(1)),
                    o.length > 0 &&
                      ('/' === o[0] && (o = o.substring(1)),
                      this.globWrappers.push({
                        regexp: xe('**/' + o, { extended: !0, globstar: !0 }),
                        include: i,
                      }))
                }
                this.uris = t
              } catch (e) {
                ;(this.globWrappers.length = 0), (this.uris = [])
              }
            }
            return (
              (e.prototype.matchesPattern = function (e) {
                for (
                  var t = !1, n = 0, r = this.globWrappers;
                  n < r.length;
                  n++
                ) {
                  var o = r[n],
                    i = o.regexp,
                    s = o.include
                  i.test(e) && (t = s)
                }
                return t
              }),
              (e.prototype.getURIs = function () {
                return this.uris
              }),
              e
            )
          })(),
          we = (function () {
            function e(e, t, n) {
              ;(this.service = e),
                (this.uri = t),
                (this.dependencies = new Set()),
                (this.anchors = void 0),
                n &&
                  (this.unresolvedSchema = this.service.promise.resolve(
                    new Pe(n)
                  ))
            }
            return (
              (e.prototype.getUnresolvedSchema = function () {
                return (
                  this.unresolvedSchema ||
                    (this.unresolvedSchema = this.service.loadSchema(this.uri)),
                  this.unresolvedSchema
                )
              }),
              (e.prototype.getResolvedSchema = function () {
                var e = this
                return (
                  this.resolvedSchema ||
                    (this.resolvedSchema = this.getUnresolvedSchema().then(
                      function (t) {
                        return e.service.resolveSchemaContent(t, e)
                      }
                    )),
                  this.resolvedSchema
                )
              }),
              (e.prototype.clearSchema = function () {
                var e = !!this.unresolvedSchema
                return (
                  (this.resolvedSchema = void 0),
                  (this.unresolvedSchema = void 0),
                  this.dependencies.clear(),
                  (this.anchors = void 0),
                  e
                )
              }),
              e
            )
          })(),
          Pe = function (e, t) {
            void 0 === t && (t = []), (this.schema = e), (this.errors = t)
          },
          _e = (function () {
            function e(e, t) {
              void 0 === t && (t = []), (this.schema = e), (this.errors = t)
            }
            return (
              (e.prototype.getSection = function (e) {
                var t = this.getSectionRecursive(e, this.schema)
                if (t) return H(t)
              }),
              (e.prototype.getSectionRecursive = function (e, t) {
                if (!t || 'boolean' == typeof t || 0 === e.length) return t
                var n = e.shift()
                if (t.properties && (t.properties[n], 1))
                  return this.getSectionRecursive(e, t.properties[n])
                if (t.patternProperties)
                  for (
                    var r = 0, o = Object.keys(t.patternProperties);
                    r < o.length;
                    r++
                  ) {
                    var i = o[r],
                      s = R(i)
                    if (null == s ? void 0 : s.test(n))
                      return this.getSectionRecursive(e, t.patternProperties[i])
                  }
                else {
                  if ('object' == typeof t.additionalProperties)
                    return this.getSectionRecursive(e, t.additionalProperties)
                  if (n.match('[0-9]+'))
                    if (Array.isArray(t.items)) {
                      var a = parseInt(n, 10)
                      if (!isNaN(a) && t.items[a])
                        return this.getSectionRecursive(e, t.items[a])
                    } else if (t.items)
                      return this.getSectionRecursive(e, t.items)
                }
              }),
              e
            )
          })(),
          De = (function () {
            function e(e, t, n) {
              ;(this.contextService = t),
                (this.requestService = e),
                (this.promiseConstructor = n || Promise),
                (this.callOnDispose = []),
                (this.contributionSchemas = {}),
                (this.contributionAssociations = []),
                (this.schemasById = {}),
                (this.filePatternAssociations = []),
                (this.registeredSchemasIds = {})
            }
            return (
              (e.prototype.getRegisteredSchemaIds = function (e) {
                return Object.keys(this.registeredSchemasIds).filter(function (
                  t
                ) {
                  var n = Te.URI.parse(t).scheme
                  return 'schemaservice' !== n && (!e || e(n))
                })
              }),
              Object.defineProperty(e.prototype, 'promise', {
                get: function () {
                  return this.promiseConstructor
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.dispose = function () {
                for (; this.callOnDispose.length > 0; )
                  this.callOnDispose.pop()()
              }),
              (e.prototype.onResourceChange = function (e) {
                var t = this
                this.cachedSchemaForResource = void 0
                for (
                  var n = !1,
                    r = [(e = Ee(e))],
                    o = Object.keys(this.schemasById).map(function (e) {
                      return t.schemasById[e]
                    });
                  r.length;

                )
                  for (var i = r.pop(), s = 0; s < o.length; s++) {
                    var a = o[s]
                    a &&
                      (a.uri === i || a.dependencies.has(i)) &&
                      (a.uri !== i && r.push(a.uri),
                      a.clearSchema() && (n = !0),
                      (o[s] = void 0))
                  }
                return n
              }),
              (e.prototype.setSchemaContributions = function (e) {
                if (e.schemas) {
                  var t = e.schemas
                  for (var n in t) {
                    var r = Ee(n)
                    this.contributionSchemas[r] = this.addSchemaHandle(r, t[n])
                  }
                }
                if (Array.isArray(e.schemaAssociations))
                  for (var o = 0, i = e.schemaAssociations; o < i.length; o++) {
                    var s = i[o],
                      a = s.uris.map(Ee),
                      c = this.addFilePatternAssociation(s.pattern, a)
                    this.contributionAssociations.push(c)
                  }
              }),
              (e.prototype.addSchemaHandle = function (e, t) {
                var n = new we(this, e, t)
                return (this.schemasById[e] = n), n
              }),
              (e.prototype.getOrAddSchemaHandle = function (e, t) {
                return this.schemasById[e] || this.addSchemaHandle(e, t)
              }),
              (e.prototype.addFilePatternAssociation = function (e, t) {
                var n = new Ce(e, t)
                return this.filePatternAssociations.push(n), n
              }),
              (e.prototype.registerExternalSchema = function (e, t, n) {
                var r = Ee(e)
                return (
                  (this.registeredSchemasIds[r] = !0),
                  (this.cachedSchemaForResource = void 0),
                  t && this.addFilePatternAssociation(t, [r]),
                  n ? this.addSchemaHandle(r, n) : this.getOrAddSchemaHandle(r)
                )
              }),
              (e.prototype.clearExternalSchemas = function () {
                for (var e in ((this.schemasById = {}),
                (this.filePatternAssociations = []),
                (this.registeredSchemasIds = {}),
                (this.cachedSchemaForResource = void 0),
                this.contributionSchemas))
                  (this.schemasById[e] = this.contributionSchemas[e]),
                    (this.registeredSchemasIds[e] = !0)
                for (
                  var t = 0, n = this.contributionAssociations;
                  t < n.length;
                  t++
                ) {
                  var r = n[t]
                  this.filePatternAssociations.push(r)
                }
              }),
              (e.prototype.getResolvedSchema = function (e) {
                var t = Ee(e),
                  n = this.schemasById[t]
                return n ? n.getResolvedSchema() : this.promise.resolve(void 0)
              }),
              (e.prototype.loadSchema = function (e) {
                if (!this.requestService) {
                  var t = ke(
                    'json.schema.norequestservice',
                    "Unable to load schema from '{0}'. No schema request service available",
                    qe(e)
                  )
                  return this.promise.resolve(new Pe({}, [t]))
                }
                return this.requestService(e).then(
                  function (t) {
                    if (!t) {
                      var n = ke(
                        'json.schema.nocontent',
                        "Unable to load schema from '{0}': No content.",
                        qe(e)
                      )
                      return new Pe({}, [n])
                    }
                    var r,
                      o = []
                    r = d(t, o)
                    var i = o.length
                      ? [
                          ke(
                            'json.schema.invalidFormat',
                            "Unable to parse content from '{0}': Parse error at offset {1}.",
                            qe(e),
                            o[0].offset
                          ),
                        ]
                      : []
                    return new Pe(r, i)
                  },
                  function (t) {
                    var n = t.toString(),
                      r = t.toString().split('Error: ')
                    return (
                      r.length > 1 && (n = r[1]),
                      b(n, '.') && (n = n.substr(0, n.length - 1)),
                      new Pe({}, [
                        ke(
                          'json.schema.nocontent',
                          "Unable to load schema from '{0}': {1}.",
                          qe(e),
                          n
                        ),
                      ])
                    )
                  }
                )
              }),
              (e.prototype.resolveSchemaContent = function (e, t) {
                var n = this,
                  r = e.errors.slice(0),
                  o = e.schema
                if (o.$schema) {
                  var i = Ee(o.$schema)
                  if ('http://json-schema.org/draft-03/schema' === i)
                    return this.promise.resolve(
                      new _e({}, [
                        ke(
                          'json.schema.draft03.notsupported',
                          'Draft-03 schemas are not supported.'
                        ),
                      ])
                    )
                  'https://json-schema.org/draft/2019-09/schema' === i
                    ? r.push(
                        ke(
                          'json.schema.draft201909.notsupported',
                          'Draft 2019-09 schemas are not yet fully supported.'
                        )
                      )
                    : 'https://json-schema.org/draft/2020-12/schema' === i &&
                      r.push(
                        ke(
                          'json.schema.draft202012.notsupported',
                          'Draft 2020-12 schemas are not yet fully supported.'
                        )
                      )
                }
                var s = this.contextService,
                  a = function (e, t, n, o) {
                    var i
                    ;(i =
                      void 0 === o || 0 === o.length
                        ? t
                        : '/' === o.charAt(0)
                        ? (function (e, t) {
                            t = decodeURIComponent(t)
                            var n = e
                            return (
                              '/' === t[0] && (t = t.substring(1)),
                              t.split('/').some(function (e) {
                                return (
                                  (e = e
                                    .replace(/~1/g, '/')
                                    .replace(/~0/g, '~')),
                                  !(n = n[e])
                                )
                              }),
                              n
                            )
                          })(t, o)
                        : (function (e, t, n) {
                            return (
                              t.anchors || (t.anchors = l(e)), t.anchors.get(n)
                            )
                          })(t, n, o))
                      ? (function (e, t) {
                          for (var n in t)
                            t.hasOwnProperty(n) &&
                              !e.hasOwnProperty(n) &&
                              'id' !== n &&
                              '$id' !== n &&
                              (e[n] = t[n])
                        })(e, i)
                      : r.push(
                          ke(
                            'json.schema.invalidid',
                            "$ref '{0}' in '{1}' can not be resolved.",
                            o,
                            n.uri
                          )
                        )
                  },
                  c = function (e, t, o, i) {
                    s &&
                      !/^[A-Za-z][A-Za-z0-9+\-.+]*:\/\/.*/.test(t) &&
                      (t = s.resolveRelativePath(t, i.uri)),
                      (t = Ee(t))
                    var c = n.getOrAddSchemaHandle(t)
                    return c.getUnresolvedSchema().then(function (n) {
                      if ((i.dependencies.add(t), n.errors.length)) {
                        var s = o ? t + '#' + o : t
                        r.push(
                          ke(
                            'json.schema.problemloadingref',
                            "Problems loading reference '{0}': {1}",
                            s,
                            n.errors[0]
                          )
                        )
                      }
                      return a(e, n.schema, c, o), u(e, n.schema, c)
                    })
                  },
                  u = function (e, t, r) {
                    var o = []
                    return (
                      n.traverseNodes(e, function (e) {
                        for (var n = new Set(); e.$ref; ) {
                          var i = e.$ref,
                            s = i.split('#', 2)
                          if ((delete e.$ref, s[0].length > 0))
                            return void o.push(c(e, s[0], s[1], r))
                          if (!n.has(i)) {
                            var u = s[1]
                            a(e, t, r, u), n.add(i)
                          }
                        }
                      }),
                      n.promise.all(o)
                    )
                  },
                  l = function (e) {
                    var t = new Map()
                    return (
                      n.traverseNodes(e, function (e) {
                        var n = e.$id || e.id
                        if ('string' == typeof n && '#' === n.charAt(0)) {
                          var o = n.substring(1)
                          t.has(o)
                            ? r.push(
                                ke(
                                  'json.schema.duplicateid',
                                  "Duplicate id declaration: '{0}'",
                                  n
                                )
                              )
                            : t.set(o, e)
                        }
                      }),
                      t
                    )
                  }
                return u(o, o, t).then(function (e) {
                  return new _e(o, r)
                })
              }),
              (e.prototype.traverseNodes = function (e, t) {
                if (!e || 'object' != typeof e) return Promise.resolve(null)
                for (
                  var n = new Set(),
                    r = function () {
                      for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t]
                      for (var n = 0, r = e; n < r.length; n++) {
                        var o = r[n]
                        'object' == typeof o && s.push(o)
                      }
                    },
                    o = function () {
                      for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t]
                      for (var n = 0, r = e; n < r.length; n++) {
                        var o = r[n]
                        if ('object' == typeof o)
                          for (var i in o) {
                            var a = i,
                              c = o[a]
                            'object' == typeof c && s.push(c)
                          }
                      }
                    },
                    i = function () {
                      for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t]
                      for (var n = 0, r = e; n < r.length; n++) {
                        var o = r[n]
                        if (Array.isArray(o))
                          for (var i = 0, a = o; i < a.length; i++) {
                            var c = a[i]
                            'object' == typeof c && s.push(c)
                          }
                      }
                    },
                    s = [e],
                    a = s.pop();
                  a;

                )
                  n.has(a) ||
                    (n.add(a),
                    t(a),
                    r(
                      a.items,
                      a.additionalItems,
                      a.additionalProperties,
                      a.not,
                      a.contains,
                      a.propertyNames,
                      a.if,
                      a.then,
                      a.else
                    ),
                    o(
                      a.definitions,
                      a.properties,
                      a.patternProperties,
                      a.dependencies
                    ),
                    i(a.anyOf, a.allOf, a.oneOf, a.items)),
                    (a = s.pop())
              }),
              (e.prototype.getSchemaFromProperty = function (e, t) {
                var n, r
                if (
                  'object' ===
                  (null === (n = t.root) || void 0 === n ? void 0 : n.type)
                )
                  for (var o = 0, i = t.root.properties; o < i.length; o++) {
                    var s = i[o]
                    if (
                      '$schema' === s.keyNode.value &&
                      'string' ===
                        (null === (r = s.valueNode) || void 0 === r
                          ? void 0
                          : r.type)
                    ) {
                      var a = s.valueNode.value
                      return (
                        this.contextService &&
                          !/^\w[\w\d+.-]*:/.test(a) &&
                          (a = this.contextService.resolveRelativePath(a, e)),
                        a
                      )
                    }
                  }
              }),
              (e.prototype.getAssociatedSchemas = function (e) {
                for (
                  var t = Object.create(null),
                    n = [],
                    r = (function (e) {
                      try {
                        return Te.URI.parse(e)
                          .with({ fragment: null, query: null })
                          .toString(!0)
                      } catch (t) {
                        return e
                      }
                    })(e),
                    o = 0,
                    i = this.filePatternAssociations;
                  o < i.length;
                  o++
                ) {
                  var s = i[o]
                  if (s.matchesPattern(r))
                    for (var a = 0, c = s.getURIs(); a < c.length; a++) {
                      var u = c[a]
                      t[u] || (n.push(u), (t[u] = !0))
                    }
                }
                return n
              }),
              (e.prototype.getSchemaURIsForResource = function (e, t) {
                var n = t && this.getSchemaFromProperty(e, t)
                return n ? [n] : this.getAssociatedSchemas(e)
              }),
              (e.prototype.getSchemaForResource = function (e, t) {
                if (t) {
                  var n = this.getSchemaFromProperty(e, t)
                  if (n) {
                    var r = Ee(n)
                    return this.getOrAddSchemaHandle(r).getResolvedSchema()
                  }
                }
                if (
                  this.cachedSchemaForResource &&
                  this.cachedSchemaForResource.resource === e
                )
                  return this.cachedSchemaForResource.resolvedSchema
                var o = this.getAssociatedSchemas(e),
                  i =
                    o.length > 0
                      ? this.createCombinedSchema(e, o).getResolvedSchema()
                      : this.promise.resolve(void 0)
                return (
                  (this.cachedSchemaForResource = {
                    resource: e,
                    resolvedSchema: i,
                  }),
                  i
                )
              }),
              (e.prototype.createCombinedSchema = function (e, t) {
                if (1 === t.length) return this.getOrAddSchemaHandle(t[0])
                var n =
                    'schemaservice://combinedSchema/' + encodeURIComponent(e),
                  r = {
                    allOf: t.map(function (e) {
                      return { $ref: e }
                    }),
                  }
                return this.addSchemaHandle(n, r)
              }),
              (e.prototype.getMatchingSchemas = function (e, t, n) {
                if (n) {
                  var r =
                    n.id || 'schemaservice://untitled/matchingSchemas/' + Oe++
                  return this.addSchemaHandle(r, n)
                    .getResolvedSchema()
                    .then(function (e) {
                      return t
                        .getMatchingSchemas(e.schema)
                        .filter(function (e) {
                          return !e.inverted
                        })
                    })
                }
                return this.getSchemaForResource(e.uri, t).then(function (e) {
                  return e
                    ? t.getMatchingSchemas(e.schema).filter(function (e) {
                        return !e.inverted
                      })
                    : []
                })
              }),
              e
            )
          })(),
          Oe = 0
        function Ee(e) {
          try {
            return Te.URI.parse(e).toString(!0)
          } catch (t) {
            return e
          }
        }
        function qe(e) {
          try {
            var t = Te.URI.parse(e)
            if ('file' === t.scheme) return t.fsPath
          } catch (e) {}
          return e
        }
        function Ne(e, t) {
          var n = [],
            r = [],
            o = [],
            i = -1,
            s = l(e.getText(), !1),
            a = s.scan()
          function c(e) {
            n.push(e), r.push(o.length)
          }
          for (; 17 !== a; ) {
            switch (a) {
              case 1:
              case 3:
                var u = {
                  startLine: (h = e.positionAt(s.getTokenOffset()).line),
                  endLine: h,
                  kind: 1 === a ? 'object' : 'array',
                }
                o.push(u)
                break
              case 2:
              case 4:
                var d = 2 === a ? 'object' : 'array'
                if (o.length > 0 && o[o.length - 1].kind === d) {
                  u = o.pop()
                  var f = e.positionAt(s.getTokenOffset()).line
                  u &&
                    f > u.startLine + 1 &&
                    i !== u.startLine &&
                    ((u.endLine = f - 1), c(u), (i = u.startLine))
                }
                break
              case 13:
                var h = e.positionAt(s.getTokenOffset()).line,
                  p = e.positionAt(s.getTokenOffset() + s.getTokenLength()).line
                1 === s.getTokenError() && h + 1 < e.lineCount
                  ? s.setPosition(e.offsetAt(k.Position.create(h + 1, 0)))
                  : h < p &&
                    (c({
                      startLine: h,
                      endLine: p,
                      kind: k.FoldingRangeKind.Comment,
                    }),
                    (i = h))
                break
              case 12:
                var m = e
                  .getText()
                  .substr(s.getTokenOffset(), s.getTokenLength())
                  .match(/^\/\/\s*#(region\b)|(endregion\b)/)
                if (m)
                  if (((f = e.positionAt(s.getTokenOffset()).line), m[1]))
                    (u = {
                      startLine: f,
                      endLine: f,
                      kind: k.FoldingRangeKind.Region,
                    }),
                      o.push(u)
                  else {
                    for (
                      var g = o.length - 1;
                      g >= 0 && o[g].kind !== k.FoldingRangeKind.Region;

                    )
                      g--
                    g >= 0 &&
                      ((u = o[g]),
                      (o.length = g),
                      f > u.startLine &&
                        i !== u.startLine &&
                        ((u.endLine = f), c(u), (i = u.startLine)))
                  }
            }
            a = s.scan()
          }
          var y = t && t.rangeLimit
          if ('number' != typeof y || n.length <= y) return n
          t && t.onRangeLimitExceeded && t.onRangeLimitExceeded(e.uri)
          for (var v = [], b = 0, R = r; b < R.length; b++)
            (w = R[b]) < 30 && (v[w] = (v[w] || 0) + 1)
          var S = 0,
            T = 0
          for (g = 0; g < v.length; g++) {
            var x = v[g]
            if (x) {
              if (x + S > y) {
                T = g
                break
              }
              S += x
            }
          }
          var C = []
          for (g = 0; g < n.length; g++) {
            var w
            'number' == typeof (w = r[g]) &&
              (w < T || (w === T && S++ < y)) &&
              C.push(n[g])
          }
          return C
        }
        function je(e, t, n) {
          function r(t, n) {
            return k.Range.create(e.positionAt(t), e.positionAt(n))
          }
          var o = l(e.getText(), !0)
          function i(e, t) {
            return (
              o.setPosition(e),
              o.scan() === t ? o.getTokenOffset() + o.getTokenLength() : -1
            )
          }
          return t.map(function (t) {
            for (
              var o = e.offsetAt(t), s = n.getNodeFromOffset(o, !0), a = [];
              s;

            ) {
              switch (s.type) {
                case 'string':
                case 'object':
                case 'array':
                  var c = s.offset + 1,
                    u = s.offset + s.length - 1
                  c < u && o >= c && o <= u && a.push(r(c, u)),
                    a.push(r(s.offset, s.offset + s.length))
                  break
                case 'number':
                case 'boolean':
                case 'null':
                case 'property':
                  a.push(r(s.offset, s.offset + s.length))
              }
              if (
                'property' === s.type ||
                (s.parent && 'array' === s.parent.type)
              ) {
                var l = i(s.offset + s.length, 5)
                ;-1 !== l && a.push(r(s.offset, l))
              }
              s = s.parent
            }
            for (var d = void 0, f = a.length - 1; f >= 0; f--)
              d = k.SelectionRange.create(a[f], d)
            return d || (d = k.SelectionRange.create(k.Range.create(t, t))), d
          })
        }
        function Me(e, t) {
          var n = []
          return (
            t.visit(function (r) {
              var o
              if (
                'property' === r.type &&
                '$ref' === r.keyNode.value &&
                'string' ===
                  (null === (o = r.valueNode) || void 0 === o ? void 0 : o.type)
              ) {
                var i = r.valueNode.value,
                  s = (function (e, t) {
                    var n = (function (e) {
                      return '#' === e
                        ? []
                        : '#' !== e[0] || '/' !== e[1]
                        ? null
                        : e.substring(2).split(/\//).map(Ie)
                    })(t)
                    return n ? Fe(n, e.root) : null
                  })(t, i)
                if (s) {
                  var a = e.positionAt(s.offset)
                  n.push({
                    target: ''
                      .concat(e.uri, '#')
                      .concat(a.line + 1, ',')
                      .concat(a.character + 1),
                    range: Ae(e, r.valueNode),
                  })
                }
              }
              return !0
            }),
            Promise.resolve(n)
          )
        }
        function Ae(e, t) {
          return k.Range.create(
            e.positionAt(t.offset + 1),
            e.positionAt(t.offset + t.length - 1)
          )
        }
        function Fe(e, t) {
          if (!t) return null
          if (0 === e.length) return t
          var n = e.shift()
          if (t && 'object' === t.type) {
            var r = t.properties.find(function (e) {
              return e.keyNode.value === n
            })
            return r ? Fe(e, r.valueNode) : null
          }
          if (t && 'array' === t.type && n.match(/^(0|[1-9][0-9]*)$/)) {
            var o = Number.parseInt(n),
              i = t.items[o]
            return i ? Fe(e, i) : null
          }
          return null
        }
        function Ie(e) {
          return e.replace(/~1/g, '/').replace(/~0/g, '~')
        }
        function Le(e) {
          var t = e.promiseConstructor || Promise,
            n = new De(e.schemaRequestService, e.workspaceContext, t)
          n.setSchemaContributions(me)
          var o = new te(n, e.contributions, t, e.clientCapabilities),
            i = new ne(n, e.contributions, t),
            s = new fe(n),
            u = new ie(n, t)
          return {
            configure: function (e) {
              n.clearExternalSchemas(),
                e.schemas &&
                  e.schemas.forEach(function (e) {
                    n.registerExternalSchema(e.uri, e.fileMatch, e.schema)
                  }),
                u.configure(e)
            },
            resetSchema: function (e) {
              return n.onResourceChange(e)
            },
            doValidation: u.doValidation.bind(u),
            getLanguageStatus: u.getLanguageStatus.bind(u),
            parseJSONDocument: function (e) {
              return (function (e, t) {
                var n = [],
                  r = -1,
                  o = e.getText(),
                  i = l(o, !1),
                  s = t && t.collectComments ? [] : void 0
                function a() {
                  for (;;) {
                    var t = i.scan()
                    switch ((d(), t)) {
                      case 12:
                      case 13:
                        Array.isArray(s) &&
                          s.push(
                            k.Range.create(
                              e.positionAt(i.getTokenOffset()),
                              e.positionAt(
                                i.getTokenOffset() + i.getTokenLength()
                              )
                            )
                          )
                        break
                      case 15:
                      case 14:
                        break
                      default:
                        return t
                    }
                  }
                }
                function c(t, o, i, s, a) {
                  if (
                    (void 0 === a && (a = k.DiagnosticSeverity.Error),
                    0 === n.length || i !== r)
                  ) {
                    var c = k.Range.create(e.positionAt(i), e.positionAt(s))
                    n.push(k.Diagnostic.create(c, t, a, o, e.languageId)),
                      (r = i)
                  }
                }
                function u(e, t, n, r, s) {
                  void 0 === n && (n = void 0),
                    void 0 === r && (r = []),
                    void 0 === s && (s = [])
                  var u = i.getTokenOffset(),
                    l = i.getTokenOffset() + i.getTokenLength()
                  if (u === l && u > 0) {
                    for (u--; u > 0 && /\s/.test(o.charAt(u)); ) u--
                    l = u + 1
                  }
                  if ((c(e, t, u, l), n && f(n, !1), r.length + s.length > 0))
                    for (var d = i.getToken(); 17 !== d; ) {
                      if (-1 !== r.indexOf(d)) {
                        a()
                        break
                      }
                      if (-1 !== s.indexOf(d)) break
                      d = a()
                    }
                  return n
                }
                function d() {
                  switch (i.getTokenError()) {
                    case 4:
                      return (
                        u(
                          j(
                            'InvalidUnicode',
                            'Invalid unicode sequence in string.'
                          ),
                          T.InvalidUnicode
                        ),
                        !0
                      )
                    case 5:
                      return (
                        u(
                          j(
                            'InvalidEscapeCharacter',
                            'Invalid escape character in string.'
                          ),
                          T.InvalidEscapeCharacter
                        ),
                        !0
                      )
                    case 3:
                      return (
                        u(
                          j(
                            'UnexpectedEndOfNumber',
                            'Unexpected end of number.'
                          ),
                          T.UnexpectedEndOfNumber
                        ),
                        !0
                      )
                    case 1:
                      return (
                        u(
                          j(
                            'UnexpectedEndOfComment',
                            'Unexpected end of comment.'
                          ),
                          T.UnexpectedEndOfComment
                        ),
                        !0
                      )
                    case 2:
                      return (
                        u(
                          j(
                            'UnexpectedEndOfString',
                            'Unexpected end of string.'
                          ),
                          T.UnexpectedEndOfString
                        ),
                        !0
                      )
                    case 6:
                      return (
                        u(
                          j(
                            'InvalidCharacter',
                            'Invalid characters in string. Control characters must be escaped.'
                          ),
                          T.InvalidCharacter
                        ),
                        !0
                      )
                  }
                  return !1
                }
                function f(e, t) {
                  return (
                    (e.length =
                      i.getTokenOffset() + i.getTokenLength() - e.offset),
                    t && a(),
                    e
                  )
                }
                var h = new $(void 0, 0, 0)
                function p(t, n) {
                  var r = new V(t, i.getTokenOffset(), h),
                    o = m(r)
                  if (!o) {
                    if (16 !== i.getToken()) return
                    u(
                      j(
                        'DoubleQuotesExpected',
                        'Property keys must be doublequoted'
                      ),
                      T.Undefined
                    )
                    var s = new $(r, i.getTokenOffset(), i.getTokenLength())
                    ;(s.value = i.getTokenValue()), (o = s), a()
                  }
                  r.keyNode = o
                  var l = n[o.value]
                  if (
                    (l
                      ? (c(
                          j('DuplicateKeyWarning', 'Duplicate object key'),
                          T.DuplicateKey,
                          r.keyNode.offset,
                          r.keyNode.offset + r.keyNode.length,
                          k.DiagnosticSeverity.Warning
                        ),
                        'object' == typeof l &&
                          c(
                            j('DuplicateKeyWarning', 'Duplicate object key'),
                            T.DuplicateKey,
                            l.keyNode.offset,
                            l.keyNode.offset + l.keyNode.length,
                            k.DiagnosticSeverity.Warning
                          ),
                        (n[o.value] = !0))
                      : (n[o.value] = r),
                    6 === i.getToken())
                  )
                    (r.colonOffset = i.getTokenOffset()), a()
                  else if (
                    (u(j('ColonExpected', 'Colon expected'), T.ColonExpected),
                    10 === i.getToken() &&
                      e.positionAt(o.offset + o.length).line <
                        e.positionAt(i.getTokenOffset()).line)
                  )
                    return (r.length = o.length), r
                  var d = y(r)
                  return d
                    ? ((r.valueNode = d),
                      (r.length = d.offset + d.length - r.offset),
                      r)
                    : u(
                        j('ValueExpected', 'Value expected'),
                        T.ValueExpected,
                        r,
                        [],
                        [2, 5]
                      )
                }
                function m(e) {
                  if (10 === i.getToken()) {
                    var t = new $(e, i.getTokenOffset())
                    return (t.value = i.getTokenValue()), f(t, !0)
                  }
                }
                function y(e) {
                  return (
                    (function (e) {
                      if (3 === i.getToken()) {
                        var t = new L(e, i.getTokenOffset())
                        a()
                        for (
                          var n = !1;
                          4 !== i.getToken() && 17 !== i.getToken();

                        ) {
                          if (5 === i.getToken()) {
                            n ||
                              u(
                                j('ValueExpected', 'Value expected'),
                                T.ValueExpected
                              )
                            var r = i.getTokenOffset()
                            if ((a(), 4 === i.getToken())) {
                              n &&
                                c(
                                  j('TrailingComma', 'Trailing comma'),
                                  T.TrailingComma,
                                  r,
                                  r + 1
                                )
                              continue
                            }
                          } else
                            n &&
                              u(
                                j('ExpectedComma', 'Expected comma'),
                                T.CommaExpected
                              )
                          var o = y(t)
                          o
                            ? t.items.push(o)
                            : u(
                                j('PropertyExpected', 'Value expected'),
                                T.ValueExpected,
                                void 0,
                                [],
                                [4, 5]
                              ),
                            (n = !0)
                        }
                        return 4 !== i.getToken()
                          ? u(
                              j(
                                'ExpectedCloseBracket',
                                'Expected comma or closing bracket'
                              ),
                              T.CommaOrCloseBacketExpected,
                              t
                            )
                          : f(t, !0)
                      }
                    })(e) ||
                    (function (e) {
                      if (1 === i.getToken()) {
                        var t = new U(e, i.getTokenOffset()),
                          n = Object.create(null)
                        a()
                        for (
                          var r = !1;
                          2 !== i.getToken() && 17 !== i.getToken();

                        ) {
                          if (5 === i.getToken()) {
                            r ||
                              u(
                                j('PropertyExpected', 'Property expected'),
                                T.PropertyExpected
                              )
                            var o = i.getTokenOffset()
                            if ((a(), 2 === i.getToken())) {
                              r &&
                                c(
                                  j('TrailingComma', 'Trailing comma'),
                                  T.TrailingComma,
                                  o,
                                  o + 1
                                )
                              continue
                            }
                          } else
                            r &&
                              u(
                                j('ExpectedComma', 'Expected comma'),
                                T.CommaExpected
                              )
                          var s = p(t, n)
                          s
                            ? t.properties.push(s)
                            : u(
                                j('PropertyExpected', 'Property expected'),
                                T.PropertyExpected,
                                void 0,
                                [],
                                [2, 5]
                              ),
                            (r = !0)
                        }
                        return 2 !== i.getToken()
                          ? u(
                              j(
                                'ExpectedCloseBrace',
                                'Expected comma or closing brace'
                              ),
                              T.CommaOrCloseBraceExpected,
                              t
                            )
                          : f(t, !0)
                      }
                    })(e) ||
                    m(e) ||
                    (function (e) {
                      if (11 === i.getToken()) {
                        var t = new W(e, i.getTokenOffset())
                        if (0 === i.getTokenError()) {
                          var n = i.getTokenValue()
                          try {
                            var r = JSON.parse(n)
                            if (!g(r))
                              return u(
                                j(
                                  'InvalidNumberFormat',
                                  'Invalid number format.'
                                ),
                                T.Undefined,
                                t
                              )
                            t.value = r
                          } catch (e) {
                            return u(
                              j(
                                'InvalidNumberFormat',
                                'Invalid number format.'
                              ),
                              T.Undefined,
                              t
                            )
                          }
                          t.isInteger = -1 === n.indexOf('.')
                        }
                        return f(t, !0)
                      }
                    })(e) ||
                    (function (e) {
                      switch (i.getToken()) {
                        case 7:
                          return f(new F(e, i.getTokenOffset()), !0)
                        case 8:
                          return f(new I(e, !0, i.getTokenOffset()), !0)
                        case 9:
                          return f(new I(e, !1, i.getTokenOffset()), !0)
                        default:
                          return
                      }
                    })(e)
                  )
                }
                var v = void 0
                return (
                  17 !== a() &&
                    ((v = y(v))
                      ? 17 !== i.getToken() &&
                        u(
                          j('End of file expected', 'End of file expected.'),
                          T.Undefined
                        )
                      : u(
                          j(
                            'Invalid symbol',
                            'Expected a JSON object, array or literal.'
                          ),
                          T.Undefined
                        )),
                  new Z(v, n, s)
                )
              })(e, { collectComments: !0 })
            },
            newJSONDocument: function (e, t) {
              return (function (e, t) {
                return void 0 === t && (t = []), new Z(e, t, [])
              })(e, t)
            },
            getMatchingSchemas: n.getMatchingSchemas.bind(n),
            doResolve: o.doResolve.bind(o),
            doComplete: o.doComplete.bind(o),
            findDocumentSymbols: s.findDocumentSymbols.bind(s),
            findDocumentSymbols2: s.findDocumentSymbols2.bind(s),
            findDocumentColors: s.findDocumentColors.bind(s),
            getColorPresentations: s.getColorPresentations.bind(s),
            doHover: i.doHover.bind(i),
            getFoldingRanges: Ne,
            getSelectionRanges: je,
            findDefinition: function () {
              return Promise.resolve([])
            },
            findLinks: Me,
            format: function (e, t, n) {
              var o = void 0
              if (t) {
                var i = e.offsetAt(t.start)
                o = { offset: i, length: e.offsetAt(t.end) - i }
              }
              var s = {
                tabSize: n ? n.tabSize : 4,
                insertSpaces: !0 === (null == n ? void 0 : n.insertSpaces),
                insertFinalNewline:
                  !0 === (null == n ? void 0 : n.insertFinalNewline),
                eol: '\n',
              }
              return (function (e, t, n) {
                return (function (e, t, n) {
                  var o, i, s, u, l
                  if (t) {
                    for (
                      u = t.offset, l = u + t.length, s = u;
                      s > 0 && !c(e, s - 1);

                    )
                      s--
                    for (var d = l; d < e.length && !c(e, d); ) d++
                    ;(i = e.substring(s, d)),
                      (o = (function (e, t) {
                        for (
                          var n = 0, r = 0, o = t.tabSize || 4;
                          n < e.length;

                        ) {
                          var i = e.charAt(n)
                          if (' ' === i) r++
                          else {
                            if ('\t' !== i) break
                            r += o
                          }
                          n++
                        }
                        return Math.floor(r / o)
                      })(i, n))
                  } else (i = e), (o = 0), (s = 0), (u = 0), (l = e.length)
                  var f,
                    h = (function (e, t) {
                      for (var n = 0; n < t.length; n++) {
                        var r = t.charAt(n)
                        if ('\r' === r)
                          return n + 1 < t.length && '\n' === t.charAt(n + 1)
                            ? '\r\n'
                            : '\r'
                        if ('\n' === r) return '\n'
                      }
                      return (e && e.eol) || '\n'
                    })(n, e),
                    p = !1,
                    m = 0
                  f = n.insertSpaces ? a(' ', n.tabSize || 4) : '\t'
                  var g = r(i, !1),
                    y = !1
                  function v() {
                    return h + a(f, o + m)
                  }
                  function b() {
                    var e = g.scan()
                    for (p = !1; 15 === e || 14 === e; )
                      (p = p || 14 === e), (e = g.scan())
                    return (y = 16 === e || 0 !== g.getTokenError()), e
                  }
                  var R = []
                  function S(n, r, o) {
                    y ||
                      (t && !(r < l && o > u)) ||
                      e.substring(r, o) === n ||
                      R.push({ offset: r, length: o - r, content: n })
                  }
                  var T = b()
                  if (17 !== T) {
                    var x = g.getTokenOffset() + s
                    S(a(f, o), s, x)
                  }
                  for (; 17 !== T; ) {
                    for (
                      var k = g.getTokenOffset() + g.getTokenLength() + s,
                        C = b(),
                        w = '',
                        P = !1;
                      !p && (12 === C || 13 === C);

                    )
                      S(' ', k, g.getTokenOffset() + s),
                        (k = g.getTokenOffset() + g.getTokenLength() + s),
                        (w = (P = 12 === C) ? v() : ''),
                        (C = b())
                    if (2 === C) 1 !== T && (m--, (w = v()))
                    else if (4 === C) 3 !== T && (m--, (w = v()))
                    else {
                      switch (T) {
                        case 3:
                        case 1:
                          m++, (w = v())
                          break
                        case 5:
                        case 12:
                          w = v()
                          break
                        case 13:
                          p ? (w = v()) : P || (w = ' ')
                          break
                        case 6:
                          P || (w = ' ')
                          break
                        case 10:
                          if (6 === C) {
                            P || (w = '')
                            break
                          }
                        case 7:
                        case 8:
                        case 9:
                        case 11:
                        case 2:
                        case 4:
                          12 === C || 13 === C
                            ? P || (w = ' ')
                            : 5 !== C && 17 !== C && (y = !0)
                          break
                        case 16:
                          y = !0
                      }
                      !p || (12 !== C && 13 !== C) || (w = v())
                    }
                    17 === C && (w = n.insertFinalNewline ? h : ''),
                      S(w, k, g.getTokenOffset() + s),
                      (T = C)
                  }
                  return R
                })(e, t, n)
              })(e.getText(), o, s).map(function (t) {
                return k.TextEdit.replace(
                  k.Range.create(
                    e.positionAt(t.offset),
                    e.positionAt(t.offset + t.length)
                  ),
                  t.content
                )
              })
            },
          }
        }
      },
      3870: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.CancellationSenderStrategy =
            t.CancellationReceiverStrategy =
            t.ConnectionError =
            t.ConnectionErrors =
            t.LogTraceNotification =
            t.SetTraceNotification =
            t.TraceFormat =
            t.Trace =
            t.ProgressType =
            t.createMessageConnection =
            t.NullLogger =
            t.ConnectionOptions =
            t.ConnectionStrategy =
            t.WriteableStreamMessageWriter =
            t.AbstractMessageWriter =
            t.MessageWriter =
            t.ReadableStreamMessageReader =
            t.AbstractMessageReader =
            t.MessageReader =
            t.CancellationToken =
            t.CancellationTokenSource =
            t.Emitter =
            t.Event =
            t.Disposable =
            t.ParameterStructures =
            t.NotificationType9 =
            t.NotificationType8 =
            t.NotificationType7 =
            t.NotificationType6 =
            t.NotificationType5 =
            t.NotificationType4 =
            t.NotificationType3 =
            t.NotificationType2 =
            t.NotificationType1 =
            t.NotificationType0 =
            t.NotificationType =
            t.ErrorCodes =
            t.ResponseError =
            t.RequestType9 =
            t.RequestType8 =
            t.RequestType7 =
            t.RequestType6 =
            t.RequestType5 =
            t.RequestType4 =
            t.RequestType3 =
            t.RequestType2 =
            t.RequestType1 =
            t.RequestType0 =
            t.RequestType =
            t.RAL =
              void 0),
          (t.CancellationStrategy = void 0)
        const r = n(839)
        Object.defineProperty(t, 'RequestType', {
          enumerable: !0,
          get: function () {
            return r.RequestType
          },
        }),
          Object.defineProperty(t, 'RequestType0', {
            enumerable: !0,
            get: function () {
              return r.RequestType0
            },
          }),
          Object.defineProperty(t, 'RequestType1', {
            enumerable: !0,
            get: function () {
              return r.RequestType1
            },
          }),
          Object.defineProperty(t, 'RequestType2', {
            enumerable: !0,
            get: function () {
              return r.RequestType2
            },
          }),
          Object.defineProperty(t, 'RequestType3', {
            enumerable: !0,
            get: function () {
              return r.RequestType3
            },
          }),
          Object.defineProperty(t, 'RequestType4', {
            enumerable: !0,
            get: function () {
              return r.RequestType4
            },
          }),
          Object.defineProperty(t, 'RequestType5', {
            enumerable: !0,
            get: function () {
              return r.RequestType5
            },
          }),
          Object.defineProperty(t, 'RequestType6', {
            enumerable: !0,
            get: function () {
              return r.RequestType6
            },
          }),
          Object.defineProperty(t, 'RequestType7', {
            enumerable: !0,
            get: function () {
              return r.RequestType7
            },
          }),
          Object.defineProperty(t, 'RequestType8', {
            enumerable: !0,
            get: function () {
              return r.RequestType8
            },
          }),
          Object.defineProperty(t, 'RequestType9', {
            enumerable: !0,
            get: function () {
              return r.RequestType9
            },
          }),
          Object.defineProperty(t, 'ResponseError', {
            enumerable: !0,
            get: function () {
              return r.ResponseError
            },
          }),
          Object.defineProperty(t, 'ErrorCodes', {
            enumerable: !0,
            get: function () {
              return r.ErrorCodes
            },
          }),
          Object.defineProperty(t, 'NotificationType', {
            enumerable: !0,
            get: function () {
              return r.NotificationType
            },
          }),
          Object.defineProperty(t, 'NotificationType0', {
            enumerable: !0,
            get: function () {
              return r.NotificationType0
            },
          }),
          Object.defineProperty(t, 'NotificationType1', {
            enumerable: !0,
            get: function () {
              return r.NotificationType1
            },
          }),
          Object.defineProperty(t, 'NotificationType2', {
            enumerable: !0,
            get: function () {
              return r.NotificationType2
            },
          }),
          Object.defineProperty(t, 'NotificationType3', {
            enumerable: !0,
            get: function () {
              return r.NotificationType3
            },
          }),
          Object.defineProperty(t, 'NotificationType4', {
            enumerable: !0,
            get: function () {
              return r.NotificationType4
            },
          }),
          Object.defineProperty(t, 'NotificationType5', {
            enumerable: !0,
            get: function () {
              return r.NotificationType5
            },
          }),
          Object.defineProperty(t, 'NotificationType6', {
            enumerable: !0,
            get: function () {
              return r.NotificationType6
            },
          }),
          Object.defineProperty(t, 'NotificationType7', {
            enumerable: !0,
            get: function () {
              return r.NotificationType7
            },
          }),
          Object.defineProperty(t, 'NotificationType8', {
            enumerable: !0,
            get: function () {
              return r.NotificationType8
            },
          }),
          Object.defineProperty(t, 'NotificationType9', {
            enumerable: !0,
            get: function () {
              return r.NotificationType9
            },
          }),
          Object.defineProperty(t, 'ParameterStructures', {
            enumerable: !0,
            get: function () {
              return r.ParameterStructures
            },
          })
        const o = n(3911)
        Object.defineProperty(t, 'Disposable', {
          enumerable: !0,
          get: function () {
            return o.Disposable
          },
        })
        const i = n(7135)
        Object.defineProperty(t, 'Event', {
          enumerable: !0,
          get: function () {
            return i.Event
          },
        }),
          Object.defineProperty(t, 'Emitter', {
            enumerable: !0,
            get: function () {
              return i.Emitter
            },
          })
        const s = n(3881)
        Object.defineProperty(t, 'CancellationTokenSource', {
          enumerable: !0,
          get: function () {
            return s.CancellationTokenSource
          },
        }),
          Object.defineProperty(t, 'CancellationToken', {
            enumerable: !0,
            get: function () {
              return s.CancellationToken
            },
          })
        const a = n(6525)
        Object.defineProperty(t, 'MessageReader', {
          enumerable: !0,
          get: function () {
            return a.MessageReader
          },
        }),
          Object.defineProperty(t, 'AbstractMessageReader', {
            enumerable: !0,
            get: function () {
              return a.AbstractMessageReader
            },
          }),
          Object.defineProperty(t, 'ReadableStreamMessageReader', {
            enumerable: !0,
            get: function () {
              return a.ReadableStreamMessageReader
            },
          })
        const c = n(6654)
        Object.defineProperty(t, 'MessageWriter', {
          enumerable: !0,
          get: function () {
            return c.MessageWriter
          },
        }),
          Object.defineProperty(t, 'AbstractMessageWriter', {
            enumerable: !0,
            get: function () {
              return c.AbstractMessageWriter
            },
          }),
          Object.defineProperty(t, 'WriteableStreamMessageWriter', {
            enumerable: !0,
            get: function () {
              return c.WriteableStreamMessageWriter
            },
          })
        const u = n(1343)
        Object.defineProperty(t, 'ConnectionStrategy', {
          enumerable: !0,
          get: function () {
            return u.ConnectionStrategy
          },
        }),
          Object.defineProperty(t, 'ConnectionOptions', {
            enumerable: !0,
            get: function () {
              return u.ConnectionOptions
            },
          }),
          Object.defineProperty(t, 'NullLogger', {
            enumerable: !0,
            get: function () {
              return u.NullLogger
            },
          }),
          Object.defineProperty(t, 'createMessageConnection', {
            enumerable: !0,
            get: function () {
              return u.createMessageConnection
            },
          }),
          Object.defineProperty(t, 'ProgressType', {
            enumerable: !0,
            get: function () {
              return u.ProgressType
            },
          }),
          Object.defineProperty(t, 'Trace', {
            enumerable: !0,
            get: function () {
              return u.Trace
            },
          }),
          Object.defineProperty(t, 'TraceFormat', {
            enumerable: !0,
            get: function () {
              return u.TraceFormat
            },
          }),
          Object.defineProperty(t, 'SetTraceNotification', {
            enumerable: !0,
            get: function () {
              return u.SetTraceNotification
            },
          }),
          Object.defineProperty(t, 'LogTraceNotification', {
            enumerable: !0,
            get: function () {
              return u.LogTraceNotification
            },
          }),
          Object.defineProperty(t, 'ConnectionErrors', {
            enumerable: !0,
            get: function () {
              return u.ConnectionErrors
            },
          }),
          Object.defineProperty(t, 'ConnectionError', {
            enumerable: !0,
            get: function () {
              return u.ConnectionError
            },
          }),
          Object.defineProperty(t, 'CancellationReceiverStrategy', {
            enumerable: !0,
            get: function () {
              return u.CancellationReceiverStrategy
            },
          }),
          Object.defineProperty(t, 'CancellationSenderStrategy', {
            enumerable: !0,
            get: function () {
              return u.CancellationSenderStrategy
            },
          }),
          Object.defineProperty(t, 'CancellationStrategy', {
            enumerable: !0,
            get: function () {
              return u.CancellationStrategy
            },
          })
        const l = n(147)
        t.RAL = l.default
      },
      3881: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.CancellationTokenSource = t.CancellationToken = void 0)
        const r = n(147),
          o = n(7574),
          i = n(7135)
        var s
        !(function (e) {
          ;(e.None = Object.freeze({
            isCancellationRequested: !1,
            onCancellationRequested: i.Event.None,
          })),
            (e.Cancelled = Object.freeze({
              isCancellationRequested: !0,
              onCancellationRequested: i.Event.None,
            })),
            (e.is = function (t) {
              const n = t
              return (
                n &&
                (n === e.None ||
                  n === e.Cancelled ||
                  (o.boolean(n.isCancellationRequested) &&
                    !!n.onCancellationRequested))
              )
            })
        })((s = t.CancellationToken || (t.CancellationToken = {})))
        const a = Object.freeze(function (e, t) {
          const n = r.default().timer.setTimeout(e.bind(t), 0)
          return {
            dispose() {
              r.default().timer.clearTimeout(n)
            },
          }
        })
        class c {
          constructor() {
            this._isCancelled = !1
          }
          cancel() {
            this._isCancelled ||
              ((this._isCancelled = !0),
              this._emitter && (this._emitter.fire(void 0), this.dispose()))
          }
          get isCancellationRequested() {
            return this._isCancelled
          }
          get onCancellationRequested() {
            return this._isCancelled
              ? a
              : (this._emitter || (this._emitter = new i.Emitter()),
                this._emitter.event)
          }
          dispose() {
            this._emitter && (this._emitter.dispose(), (this._emitter = void 0))
          }
        }
        t.CancellationTokenSource = class {
          get token() {
            return this._token || (this._token = new c()), this._token
          }
          cancel() {
            this._token ? this._token.cancel() : (this._token = s.Cancelled)
          }
          dispose() {
            this._token
              ? this._token instanceof c && this._token.dispose()
              : (this._token = s.None)
          }
        }
      },
      1343: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.createMessageConnection =
            t.ConnectionOptions =
            t.CancellationStrategy =
            t.CancellationSenderStrategy =
            t.CancellationReceiverStrategy =
            t.ConnectionStrategy =
            t.ConnectionError =
            t.ConnectionErrors =
            t.LogTraceNotification =
            t.SetTraceNotification =
            t.TraceFormat =
            t.Trace =
            t.NullLogger =
            t.ProgressType =
              void 0)
        const r = n(147),
          o = n(7574),
          i = n(839),
          s = n(6184),
          a = n(7135),
          c = n(3881)
        var u, l, d, f, h, p, m, g, y, v, b, R, S
        !(function (e) {
          e.type = new i.NotificationType('$/cancelRequest')
        })(u || (u = {})),
          (function (e) {
            e.type = new i.NotificationType('$/progress')
          })(l || (l = {})),
          (t.ProgressType = class {
            constructor() {}
          }),
          (function (e) {
            e.is = function (e) {
              return o.func(e)
            }
          })(d || (d = {})),
          (t.NullLogger = Object.freeze({
            error: () => {},
            warn: () => {},
            info: () => {},
            log: () => {},
          })),
          (function (e) {
            ;(e[(e.Off = 0)] = 'Off'),
              (e[(e.Messages = 1)] = 'Messages'),
              (e[(e.Verbose = 2)] = 'Verbose')
          })((f = t.Trace || (t.Trace = {}))),
          (function (e) {
            ;(e.fromString = function (t) {
              if (!o.string(t)) return e.Off
              switch ((t = t.toLowerCase())) {
                case 'off':
                  return e.Off
                case 'messages':
                  return e.Messages
                case 'verbose':
                  return e.Verbose
                default:
                  return e.Off
              }
            }),
              (e.toString = function (t) {
                switch (t) {
                  case e.Off:
                    return 'off'
                  case e.Messages:
                    return 'messages'
                  case e.Verbose:
                    return 'verbose'
                  default:
                    return 'off'
                }
              })
          })((f = t.Trace || (t.Trace = {}))),
          (function (e) {
            ;(e.Text = 'text'), (e.JSON = 'json')
          })(t.TraceFormat || (t.TraceFormat = {})),
          (function (e) {
            e.fromString = function (t) {
              return 'json' === (t = t.toLowerCase()) ? e.JSON : e.Text
            }
          })((h = t.TraceFormat || (t.TraceFormat = {}))),
          (function (e) {
            e.type = new i.NotificationType('$/setTrace')
          })((p = t.SetTraceNotification || (t.SetTraceNotification = {}))),
          (function (e) {
            e.type = new i.NotificationType('$/logTrace')
          })((m = t.LogTraceNotification || (t.LogTraceNotification = {}))),
          (function (e) {
            ;(e[(e.Closed = 1)] = 'Closed'),
              (e[(e.Disposed = 2)] = 'Disposed'),
              (e[(e.AlreadyListening = 3)] = 'AlreadyListening')
          })((g = t.ConnectionErrors || (t.ConnectionErrors = {})))
        class T extends Error {
          constructor(e, t) {
            super(t), (this.code = e), Object.setPrototypeOf(this, T.prototype)
          }
        }
        ;(t.ConnectionError = T),
          (function (e) {
            e.is = function (e) {
              const t = e
              return t && o.func(t.cancelUndispatched)
            }
          })((y = t.ConnectionStrategy || (t.ConnectionStrategy = {}))),
          (function (e) {
            ;(e.Message = Object.freeze({
              createCancellationTokenSource: (e) =>
                new c.CancellationTokenSource(),
            })),
              (e.is = function (e) {
                const t = e
                return t && o.func(t.createCancellationTokenSource)
              })
          })(
            (v =
              t.CancellationReceiverStrategy ||
              (t.CancellationReceiverStrategy = {}))
          ),
          (function (e) {
            ;(e.Message = Object.freeze({
              sendCancellation(e, t) {
                e.sendNotification(u.type, { id: t })
              },
              cleanup(e) {},
            })),
              (e.is = function (e) {
                const t = e
                return t && o.func(t.sendCancellation) && o.func(t.cleanup)
              })
          })(
            (b =
              t.CancellationSenderStrategy ||
              (t.CancellationSenderStrategy = {}))
          ),
          (function (e) {
            ;(e.Message = Object.freeze({
              receiver: v.Message,
              sender: b.Message,
            })),
              (e.is = function (e) {
                const t = e
                return t && v.is(t.receiver) && b.is(t.sender)
              })
          })((R = t.CancellationStrategy || (t.CancellationStrategy = {}))),
          ((t.ConnectionOptions || (t.ConnectionOptions = {})).is = function (
            e
          ) {
            const t = e
            return (
              t && (R.is(t.cancellationStrategy) || y.is(t.connectionStrategy))
            )
          }),
          (function (e) {
            ;(e[(e.New = 1)] = 'New'),
              (e[(e.Listening = 2)] = 'Listening'),
              (e[(e.Closed = 3)] = 'Closed'),
              (e[(e.Disposed = 4)] = 'Disposed')
          })(S || (S = {})),
          (t.createMessageConnection = function (e, n, y, v) {
            const b = void 0 !== y ? y : t.NullLogger
            let x = 0,
              k = 0,
              C = 0
            const w = '2.0'
            let P
            const _ = Object.create(null)
            let D
            const O = Object.create(null),
              E = new Map()
            let q,
              N,
              j = new s.LinkedMap(),
              M = Object.create(null),
              A = Object.create(null),
              F = f.Off,
              I = h.Text,
              L = S.New
            const W = new a.Emitter(),
              $ = new a.Emitter(),
              V = new a.Emitter(),
              U = new a.Emitter(),
              H = new a.Emitter(),
              z =
                v && v.cancellationStrategy ? v.cancellationStrategy : R.Message
            function B(e) {
              if (null === e)
                throw new Error(
                  "Can't send requests with id null since the response can't be correlated."
                )
              return 'req-' + e.toString()
            }
            function K(e) {}
            function J() {
              return L === S.Listening
            }
            function G() {
              return L === S.Closed
            }
            function X() {
              return L === S.Disposed
            }
            function Z() {
              ;(L !== S.New && L !== S.Listening) ||
                ((L = S.Closed), $.fire(void 0))
            }
            function Y() {
              q ||
                0 === j.size ||
                (q = r.default().timer.setImmediate(() => {
                  ;(q = void 0),
                    (function () {
                      if (0 === j.size) return
                      const e = j.shift()
                      try {
                        i.isRequestMessage(e)
                          ? (function (e) {
                              if (X()) return
                              function t(t, r, o) {
                                const s = { jsonrpc: w, id: e.id }
                                t instanceof i.ResponseError
                                  ? (s.error = t.toJson())
                                  : (s.result = void 0 === t ? null : t),
                                  ee(s, r, o),
                                  n.write(s)
                              }
                              function r(t, r, o) {
                                const i = {
                                  jsonrpc: w,
                                  id: e.id,
                                  error: t.toJson(),
                                }
                                ee(i, r, o), n.write(i)
                              }
                              !(function (e) {
                                if (F !== f.Off && N)
                                  if (I === h.Text) {
                                    let t
                                    F === f.Verbose &&
                                      e.params &&
                                      (t = `Params: ${JSON.stringify(
                                        e.params,
                                        null,
                                        4
                                      )}\n\n`),
                                      N.log(
                                        `Received request '${e.method} - (${e.id})'.`,
                                        t
                                      )
                                  } else te('receive-request', e)
                              })(e)
                              const s = _[e.method]
                              let a, c
                              s && ((a = s.type), (c = s.handler))
                              const u = Date.now()
                              if (c || P) {
                                const s = String(e.id),
                                  l =
                                    z.receiver.createCancellationTokenSource(s)
                                A[s] = l
                                try {
                                  let d
                                  if (c)
                                    if (void 0 === e.params) {
                                      if (
                                        void 0 !== a &&
                                        0 !== a.numberOfParams
                                      )
                                        return void r(
                                          new i.ResponseError(
                                            i.ErrorCodes.InvalidParams,
                                            `Request ${e.method} defines ${a.numberOfParams} params but recevied none.`
                                          ),
                                          e.method,
                                          u
                                        )
                                      d = c(l.token)
                                    } else if (Array.isArray(e.params)) {
                                      if (
                                        void 0 !== a &&
                                        a.parameterStructures ===
                                          i.ParameterStructures.byName
                                      )
                                        return void r(
                                          new i.ResponseError(
                                            i.ErrorCodes.InvalidParams,
                                            `Request ${e.method} defines parameters by name but received parameters by position`
                                          ),
                                          e.method,
                                          u
                                        )
                                      d = c(...e.params, l.token)
                                    } else {
                                      if (
                                        void 0 !== a &&
                                        a.parameterStructures ===
                                          i.ParameterStructures.byPosition
                                      )
                                        return void r(
                                          new i.ResponseError(
                                            i.ErrorCodes.InvalidParams,
                                            `Request ${e.method} defines parameters by position but received parameters by name`
                                          ),
                                          e.method,
                                          u
                                        )
                                      d = c(e.params, l.token)
                                    }
                                  else P && (d = P(e.method, e.params, l.token))
                                  const f = d
                                  d
                                    ? f.then
                                      ? f.then(
                                          (n) => {
                                            delete A[s], t(n, e.method, u)
                                          },
                                          (t) => {
                                            delete A[s],
                                              t instanceof i.ResponseError
                                                ? r(t, e.method, u)
                                                : t && o.string(t.message)
                                                ? r(
                                                    new i.ResponseError(
                                                      i.ErrorCodes.InternalError,
                                                      `Request ${e.method} failed with message: ${t.message}`
                                                    ),
                                                    e.method,
                                                    u
                                                  )
                                                : r(
                                                    new i.ResponseError(
                                                      i.ErrorCodes.InternalError,
                                                      `Request ${e.method} failed unexpectedly without providing any details.`
                                                    ),
                                                    e.method,
                                                    u
                                                  )
                                          }
                                        )
                                      : (delete A[s], t(d, e.method, u))
                                    : (delete A[s],
                                      (function (t, r, o) {
                                        void 0 === t && (t = null)
                                        const i = {
                                          jsonrpc: w,
                                          id: e.id,
                                          result: t,
                                        }
                                        ee(i, r, o), n.write(i)
                                      })(d, e.method, u))
                                } catch (n) {
                                  delete A[s],
                                    n instanceof i.ResponseError
                                      ? t(n, e.method, u)
                                      : n && o.string(n.message)
                                      ? r(
                                          new i.ResponseError(
                                            i.ErrorCodes.InternalError,
                                            `Request ${e.method} failed with message: ${n.message}`
                                          ),
                                          e.method,
                                          u
                                        )
                                      : r(
                                          new i.ResponseError(
                                            i.ErrorCodes.InternalError,
                                            `Request ${e.method} failed unexpectedly without providing any details.`
                                          ),
                                          e.method,
                                          u
                                        )
                                }
                              } else
                                r(
                                  new i.ResponseError(
                                    i.ErrorCodes.MethodNotFound,
                                    `Unhandled method ${e.method}`
                                  ),
                                  e.method,
                                  u
                                )
                            })(e)
                          : i.isNotificationMessage(e)
                          ? (function (e) {
                              if (X()) return
                              let t, n
                              if (e.method === u.type.method)
                                n = (e) => {
                                  const t = e.id,
                                    n = A[String(t)]
                                  n && n.cancel()
                                }
                              else {
                                const r = O[e.method]
                                r && ((n = r.handler), (t = r.type))
                              }
                              if (n || D)
                                try {
                                  !(function (e) {
                                    if (
                                      F !== f.Off &&
                                      N &&
                                      e.method !== m.type.method
                                    )
                                      if (I === h.Text) {
                                        let t
                                        F === f.Verbose &&
                                          (t = e.params
                                            ? `Params: ${JSON.stringify(
                                                e.params,
                                                null,
                                                4
                                              )}\n\n`
                                            : 'No parameters provided.\n\n'),
                                          N.log(
                                            `Received notification '${e.method}'.`,
                                            t
                                          )
                                      } else te('receive-notification', e)
                                  })(e),
                                    n
                                      ? void 0 === e.params
                                        ? (void 0 !== t &&
                                            0 !== t.numberOfParams &&
                                            t.parameterStructures !==
                                              i.ParameterStructures.byName &&
                                            b.error(
                                              `Notification ${e.method} defines ${t.numberOfParams} params but recevied none.`
                                            ),
                                          n())
                                        : Array.isArray(e.params)
                                        ? (void 0 !== t &&
                                            (t.parameterStructures ===
                                              i.ParameterStructures.byName &&
                                              b.error(
                                                `Notification ${e.method} defines parameters by name but received parameters by position`
                                              ),
                                            t.numberOfParams !==
                                              e.params.length &&
                                              b.error(
                                                `Notification ${e.method} defines ${t.numberOfParams} params but received ${e.params.length} argumennts`
                                              )),
                                          n(...e.params))
                                        : (void 0 !== t &&
                                            t.parameterStructures ===
                                              i.ParameterStructures
                                                .byPosition &&
                                            b.error(
                                              `Notification ${e.method} defines parameters by position but received parameters by name`
                                            ),
                                          n(e.params))
                                      : D && D(e.method, e.params)
                                } catch (t) {
                                  t.message
                                    ? b.error(
                                        `Notification handler '${e.method}' failed with message: ${t.message}`
                                      )
                                    : b.error(
                                        `Notification handler '${e.method}' failed unexpectedly.`
                                      )
                                }
                              else V.fire(e)
                            })(e)
                          : i.isResponseMessage(e)
                          ? (function (e) {
                              if (!X())
                                if (null === e.id)
                                  e.error
                                    ? b.error(
                                        `Received response message without id: Error is: \n${JSON.stringify(
                                          e.error,
                                          void 0,
                                          4
                                        )}`
                                      )
                                    : b.error(
                                        'Received response message without id. No further error information provided.'
                                      )
                                else {
                                  const t = String(e.id),
                                    n = M[t]
                                  if (
                                    ((function (e, t) {
                                      if (F !== f.Off && N)
                                        if (I === h.Text) {
                                          let n
                                          if (
                                            (F === f.Verbose &&
                                              (e.error && e.error.data
                                                ? (n = `Error data: ${JSON.stringify(
                                                    e.error.data,
                                                    null,
                                                    4
                                                  )}\n\n`)
                                                : e.result
                                                ? (n = `Result: ${JSON.stringify(
                                                    e.result,
                                                    null,
                                                    4
                                                  )}\n\n`)
                                                : void 0 === e.error &&
                                                  (n =
                                                    'No result returned.\n\n')),
                                            t)
                                          ) {
                                            const r = e.error
                                              ? ` Request failed: ${e.error.message} (${e.error.code}).`
                                              : ''
                                            N.log(
                                              `Received response '${
                                                t.method
                                              } - (${e.id})' in ${
                                                Date.now() - t.timerStart
                                              }ms.${r}`,
                                              n
                                            )
                                          } else
                                            N.log(
                                              `Received response ${e.id} without active response promise.`,
                                              n
                                            )
                                        } else te('receive-response', e)
                                    })(e, n),
                                    n)
                                  ) {
                                    delete M[t]
                                    try {
                                      if (e.error) {
                                        const t = e.error
                                        n.reject(
                                          new i.ResponseError(
                                            t.code,
                                            t.message,
                                            t.data
                                          )
                                        )
                                      } else {
                                        if (void 0 === e.result)
                                          throw new Error(
                                            'Should never happen.'
                                          )
                                        n.resolve(e.result)
                                      }
                                    } catch (e) {
                                      e.message
                                        ? b.error(
                                            `Response handler '${n.method}' failed with message: ${e.message}`
                                          )
                                        : b.error(
                                            `Response handler '${n.method}' failed unexpectedly.`
                                          )
                                    }
                                  }
                                }
                            })(e)
                          : (function (e) {
                              if (!e)
                                return void b.error('Received empty message.')
                              b.error(
                                `Received message which is neither a response nor a notification message:\n${JSON.stringify(
                                  e,
                                  null,
                                  4
                                )}`
                              )
                              const t = e
                              if (o.string(t.id) || o.number(t.id)) {
                                const e = String(t.id),
                                  n = M[e]
                                n &&
                                  n.reject(
                                    new Error(
                                      'The received response has neither a result nor an error property.'
                                    )
                                  )
                              }
                            })(e)
                      } finally {
                        Y()
                      }
                    })()
                }))
            }
            e.onClose(Z),
              e.onError(function (e) {
                W.fire([e, void 0, void 0])
              }),
              n.onClose(Z),
              n.onError(function (e) {
                W.fire(e)
              })
            const Q = (e) => {
              try {
                if (i.isNotificationMessage(e) && e.method === u.type.method) {
                  const t = B(e.params.id),
                    r = j.get(t)
                  if (i.isRequestMessage(r)) {
                    const o = null == v ? void 0 : v.connectionStrategy,
                      i =
                        o && o.cancelUndispatched
                          ? o.cancelUndispatched(r, K)
                          : void 0
                    if (i && (void 0 !== i.error || void 0 !== i.result))
                      return (
                        j.delete(t),
                        (i.id = r.id),
                        ee(i, e.method, Date.now()),
                        void n.write(i)
                      )
                  }
                }
                !(function (e, t) {
                  var n
                  i.isRequestMessage(t)
                    ? e.set(B(t.id), t)
                    : i.isResponseMessage(t)
                    ? e.set(
                        null === (n = t.id)
                          ? 'res-unknown-' + (++C).toString()
                          : 'res-' + n.toString(),
                        t
                      )
                    : e.set('not-' + (++k).toString(), t)
                })(j, e)
              } finally {
                Y()
              }
            }
            function ee(e, t, n) {
              if (F !== f.Off && N)
                if (I === h.Text) {
                  let r
                  F === f.Verbose &&
                    (e.error && e.error.data
                      ? (r = `Error data: ${JSON.stringify(
                          e.error.data,
                          null,
                          4
                        )}\n\n`)
                      : e.result
                      ? (r = `Result: ${JSON.stringify(e.result, null, 4)}\n\n`)
                      : void 0 === e.error && (r = 'No result returned.\n\n')),
                    N.log(
                      `Sending response '${t} - (${
                        e.id
                      })'. Processing request took ${Date.now() - n}ms`,
                      r
                    )
                } else te('send-response', e)
            }
            function te(e, t) {
              if (!N || F === f.Off) return
              const n = {
                isLSPMessage: !0,
                type: e,
                message: t,
                timestamp: Date.now(),
              }
              N.log(n)
            }
            function ne() {
              if (G()) throw new T(g.Closed, 'Connection is closed.')
              if (X()) throw new T(g.Disposed, 'Connection is disposed.')
            }
            function re(e) {
              return void 0 === e ? null : e
            }
            function oe(e) {
              return null === e ? void 0 : e
            }
            function ie(e) {
              return null != e && !Array.isArray(e) && 'object' == typeof e
            }
            function se(e, t) {
              switch (e) {
                case i.ParameterStructures.auto:
                  return ie(t) ? oe(t) : [re(t)]
                case i.ParameterStructures.byName:
                  if (!ie(t))
                    throw new Error(
                      'Recevied parameters by name but param is not an object literal.'
                    )
                  return oe(t)
                case i.ParameterStructures.byPosition:
                  return [re(t)]
                default:
                  throw new Error(`Unknown parameter structure ${e.toString()}`)
              }
            }
            function ae(e, t) {
              let n
              const r = e.numberOfParams
              switch (r) {
                case 0:
                  n = void 0
                  break
                case 1:
                  n = se(e.parameterStructures, t[0])
                  break
                default:
                  n = []
                  for (let e = 0; e < t.length && e < r; e++) n.push(re(t[e]))
                  if (t.length < r)
                    for (let e = t.length; e < r; e++) n.push(null)
              }
              return n
            }
            const ce = {
              sendNotification: (e, ...t) => {
                let r, s
                if ((ne(), o.string(e))) {
                  r = e
                  const n = t[0]
                  let o = 0,
                    a = i.ParameterStructures.auto
                  i.ParameterStructures.is(n) && ((o = 1), (a = n))
                  let c = t.length
                  const u = c - o
                  switch (u) {
                    case 0:
                      s = void 0
                      break
                    case 1:
                      s = se(a, t[o])
                      break
                    default:
                      if (a === i.ParameterStructures.byName)
                        throw new Error(
                          `Recevied ${u} parameters for 'by Name' notification parameter structure.`
                        )
                      s = t.slice(o, c).map((e) => re(e))
                  }
                } else {
                  const n = t
                  ;(r = e.method), (s = ae(e, n))
                }
                const a = { jsonrpc: w, method: r, params: s }
                !(function (e) {
                  if (F !== f.Off && N)
                    if (I === h.Text) {
                      let t
                      F === f.Verbose &&
                        (t = e.params
                          ? `Params: ${JSON.stringify(e.params, null, 4)}\n\n`
                          : 'No parameters provided.\n\n'),
                        N.log(`Sending notification '${e.method}'.`, t)
                    } else te('send-notification', e)
                })(a),
                  n.write(a)
              },
              onNotification: (e, t) => {
                let n
                return (
                  ne(),
                  o.func(e)
                    ? (D = e)
                    : t &&
                      (o.string(e)
                        ? ((n = e), (O[e] = { type: void 0, handler: t }))
                        : ((n = e.method),
                          (O[e.method] = { type: e, handler: t }))),
                  {
                    dispose: () => {
                      void 0 !== n ? delete O[n] : (D = void 0)
                    },
                  }
                )
              },
              onProgress: (e, t, n) => {
                if (E.has(t))
                  throw new Error(
                    `Progress handler for token ${t} already registered`
                  )
                return (
                  E.set(t, n),
                  {
                    dispose: () => {
                      E.delete(t)
                    },
                  }
                )
              },
              sendProgress: (e, t, n) => {
                ce.sendNotification(l.type, { token: t, value: n })
              },
              onUnhandledProgress: U.event,
              sendRequest: (e, ...t) => {
                let r, s, a
                if (
                  (ne(),
                  (function () {
                    if (!J()) throw new Error('Call listen() first.')
                  })(),
                  o.string(e))
                ) {
                  r = e
                  const n = t[0],
                    o = t[t.length - 1]
                  let u = 0,
                    l = i.ParameterStructures.auto
                  i.ParameterStructures.is(n) && ((u = 1), (l = n))
                  let d = t.length
                  c.CancellationToken.is(o) && ((d -= 1), (a = o))
                  const f = d - u
                  switch (f) {
                    case 0:
                      s = void 0
                      break
                    case 1:
                      s = se(l, t[u])
                      break
                    default:
                      if (l === i.ParameterStructures.byName)
                        throw new Error(
                          `Recevied ${f} parameters for 'by Name' request parameter structure.`
                        )
                      s = t.slice(u, d).map((e) => re(e))
                  }
                } else {
                  const n = t
                  ;(r = e.method), (s = ae(e, n))
                  const o = e.numberOfParams
                  a = c.CancellationToken.is(n[o]) ? n[o] : void 0
                }
                const u = x++
                let l
                return (
                  a &&
                    (l = a.onCancellationRequested(() => {
                      z.sender.sendCancellation(ce, u)
                    })),
                  new Promise((e, t) => {
                    const o = { jsonrpc: w, id: u, method: r, params: s }
                    let a = {
                      method: r,
                      timerStart: Date.now(),
                      resolve: (t) => {
                        e(t), z.sender.cleanup(u), null == l || l.dispose()
                      },
                      reject: (e) => {
                        t(e), z.sender.cleanup(u), null == l || l.dispose()
                      },
                    }
                    !(function (e) {
                      if (F !== f.Off && N)
                        if (I === h.Text) {
                          let t
                          F === f.Verbose &&
                            e.params &&
                            (t = `Params: ${JSON.stringify(
                              e.params,
                              null,
                              4
                            )}\n\n`),
                            N.log(
                              `Sending request '${e.method} - (${e.id})'.`,
                              t
                            )
                        } else te('send-request', e)
                    })(o)
                    try {
                      n.write(o)
                    } catch (e) {
                      a.reject(
                        new i.ResponseError(
                          i.ErrorCodes.MessageWriteError,
                          e.message ? e.message : 'Unknown reason'
                        )
                      ),
                        (a = null)
                    }
                    a && (M[String(u)] = a)
                  })
                )
              },
              onRequest: (e, t) => {
                ne()
                let n = null
                return (
                  d.is(e)
                    ? ((n = void 0), (P = e))
                    : o.string(e)
                    ? ((n = null),
                      void 0 !== t &&
                        ((n = e), (_[e] = { handler: t, type: void 0 })))
                    : void 0 !== t &&
                      ((n = e.method), (_[e.method] = { type: e, handler: t })),
                  {
                    dispose: () => {
                      null !== n && (void 0 !== n ? delete _[n] : (P = void 0))
                    },
                  }
                )
              },
              trace: (e, t, n) => {
                let r = !1,
                  i = h.Text
                void 0 !== n &&
                  (o.boolean(n)
                    ? (r = n)
                    : ((r = n.sendNotification || !1),
                      (i = n.traceFormat || h.Text))),
                  (F = e),
                  (I = i),
                  (N = F === f.Off ? void 0 : t),
                  !r ||
                    G() ||
                    X() ||
                    ce.sendNotification(p.type, { value: f.toString(e) })
              },
              onError: W.event,
              onClose: $.event,
              onUnhandledNotification: V.event,
              onDispose: H.event,
              end: () => {
                n.end()
              },
              dispose: () => {
                if (X()) return
                ;(L = S.Disposed), H.fire(void 0)
                const t = new Error('Connection got disposed.')
                Object.keys(M).forEach((e) => {
                  M[e].reject(t)
                }),
                  (M = Object.create(null)),
                  (A = Object.create(null)),
                  (j = new s.LinkedMap()),
                  o.func(n.dispose) && n.dispose(),
                  o.func(e.dispose) && e.dispose()
              },
              listen: () => {
                ne(),
                  (function () {
                    if (J())
                      throw new T(
                        g.AlreadyListening,
                        'Connection is already listening'
                      )
                  })(),
                  (L = S.Listening),
                  e.listen(Q)
              },
              inspect: () => {
                r.default().console.log('inspect')
              },
            }
            return (
              ce.onNotification(m.type, (e) => {
                F !== f.Off &&
                  N &&
                  N.log(e.message, F === f.Verbose ? e.verbose : void 0)
              }),
              ce.onNotification(l.type, (e) => {
                const t = E.get(e.token)
                t ? t(e.value) : U.fire(e)
              }),
              ce
            )
          })
      },
      3911: (e, t) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Disposable = void 0),
          ((t.Disposable || (t.Disposable = {})).create = function (e) {
            return { dispose: e }
          })
      },
      7135: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Emitter = t.Event = void 0)
        const r = n(147)
        !(function (e) {
          const t = { dispose() {} }
          e.None = function () {
            return t
          }
        })(t.Event || (t.Event = {}))
        class o {
          add(e, t = null, n) {
            this._callbacks || ((this._callbacks = []), (this._contexts = [])),
              this._callbacks.push(e),
              this._contexts.push(t),
              Array.isArray(n) && n.push({ dispose: () => this.remove(e, t) })
          }
          remove(e, t = null) {
            if (!this._callbacks) return
            let n = !1
            for (let r = 0, o = this._callbacks.length; r < o; r++)
              if (this._callbacks[r] === e) {
                if (this._contexts[r] === t)
                  return (
                    this._callbacks.splice(r, 1),
                    void this._contexts.splice(r, 1)
                  )
                n = !0
              }
            if (n)
              throw new Error(
                'When adding a listener with a context, you should remove it with the same context'
              )
          }
          invoke(...e) {
            if (!this._callbacks) return []
            const t = [],
              n = this._callbacks.slice(0),
              o = this._contexts.slice(0)
            for (let i = 0, s = n.length; i < s; i++)
              try {
                t.push(n[i].apply(o[i], e))
              } catch (e) {
                r.default().console.error(e)
              }
            return t
          }
          isEmpty() {
            return !this._callbacks || 0 === this._callbacks.length
          }
          dispose() {
            ;(this._callbacks = void 0), (this._contexts = void 0)
          }
        }
        class i {
          constructor(e) {
            this._options = e
          }
          get event() {
            return (
              this._event ||
                (this._event = (e, t, n) => {
                  this._callbacks || (this._callbacks = new o()),
                    this._options &&
                      this._options.onFirstListenerAdd &&
                      this._callbacks.isEmpty() &&
                      this._options.onFirstListenerAdd(this),
                    this._callbacks.add(e, t)
                  const r = {
                    dispose: () => {
                      this._callbacks &&
                        (this._callbacks.remove(e, t),
                        (r.dispose = i._noop),
                        this._options &&
                          this._options.onLastListenerRemove &&
                          this._callbacks.isEmpty() &&
                          this._options.onLastListenerRemove(this))
                    },
                  }
                  return Array.isArray(n) && n.push(r), r
                }),
              this._event
            )
          }
          fire(e) {
            this._callbacks && this._callbacks.invoke.call(this._callbacks, e)
          }
          dispose() {
            this._callbacks &&
              (this._callbacks.dispose(), (this._callbacks = void 0))
          }
        }
        ;(t.Emitter = i), (i._noop = function () {})
      },
      7574: (e, t) => {
        'use strict'
        function n(e) {
          return 'string' == typeof e || e instanceof String
        }
        function r(e) {
          return Array.isArray(e)
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.stringArray =
            t.array =
            t.func =
            t.error =
            t.number =
            t.string =
            t.boolean =
              void 0),
          (t.boolean = function (e) {
            return !0 === e || !1 === e
          }),
          (t.string = n),
          (t.number = function (e) {
            return 'number' == typeof e || e instanceof Number
          }),
          (t.error = function (e) {
            return e instanceof Error
          }),
          (t.func = function (e) {
            return 'function' == typeof e
          }),
          (t.array = r),
          (t.stringArray = function (e) {
            return r(e) && e.every((e) => n(e))
          })
      },
      6184: (e, t) => {
        'use strict'
        var n
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.LRUCache = t.LinkedMap = t.Touch = void 0),
          (function (e) {
            ;(e.None = 0),
              (e.First = 1),
              (e.AsOld = e.First),
              (e.Last = 2),
              (e.AsNew = e.Last)
          })((n = t.Touch || (t.Touch = {})))
        class r {
          constructor() {
            ;(this[Symbol.toStringTag] = 'LinkedMap'),
              (this._map = new Map()),
              (this._head = void 0),
              (this._tail = void 0),
              (this._size = 0),
              (this._state = 0)
          }
          clear() {
            this._map.clear(),
              (this._head = void 0),
              (this._tail = void 0),
              (this._size = 0),
              this._state++
          }
          isEmpty() {
            return !this._head && !this._tail
          }
          get size() {
            return this._size
          }
          get first() {
            var e
            return null === (e = this._head) || void 0 === e ? void 0 : e.value
          }
          get last() {
            var e
            return null === (e = this._tail) || void 0 === e ? void 0 : e.value
          }
          has(e) {
            return this._map.has(e)
          }
          get(e, t = n.None) {
            const r = this._map.get(e)
            if (r) return t !== n.None && this.touch(r, t), r.value
          }
          set(e, t, r = n.None) {
            let o = this._map.get(e)
            if (o) (o.value = t), r !== n.None && this.touch(o, r)
            else {
              switch (
                ((o = { key: e, value: t, next: void 0, previous: void 0 }), r)
              ) {
                case n.None:
                  this.addItemLast(o)
                  break
                case n.First:
                  this.addItemFirst(o)
                  break
                case n.Last:
                default:
                  this.addItemLast(o)
              }
              this._map.set(e, o), this._size++
            }
            return this
          }
          delete(e) {
            return !!this.remove(e)
          }
          remove(e) {
            const t = this._map.get(e)
            if (t)
              return (
                this._map.delete(e), this.removeItem(t), this._size--, t.value
              )
          }
          shift() {
            if (!this._head && !this._tail) return
            if (!this._head || !this._tail) throw new Error('Invalid list')
            const e = this._head
            return (
              this._map.delete(e.key), this.removeItem(e), this._size--, e.value
            )
          }
          forEach(e, t) {
            const n = this._state
            let r = this._head
            for (; r; ) {
              if (
                (t ? e.bind(t)(r.value, r.key, this) : e(r.value, r.key, this),
                this._state !== n)
              )
                throw new Error('LinkedMap got modified during iteration.')
              r = r.next
            }
          }
          keys() {
            const e = this,
              t = this._state
            let n = this._head
            const r = {
              [Symbol.iterator]: () => r,
              next() {
                if (e._state !== t)
                  throw new Error('LinkedMap got modified during iteration.')
                if (n) {
                  const e = { value: n.key, done: !1 }
                  return (n = n.next), e
                }
                return { value: void 0, done: !0 }
              },
            }
            return r
          }
          values() {
            const e = this,
              t = this._state
            let n = this._head
            const r = {
              [Symbol.iterator]: () => r,
              next() {
                if (e._state !== t)
                  throw new Error('LinkedMap got modified during iteration.')
                if (n) {
                  const e = { value: n.value, done: !1 }
                  return (n = n.next), e
                }
                return { value: void 0, done: !0 }
              },
            }
            return r
          }
          entries() {
            const e = this,
              t = this._state
            let n = this._head
            const r = {
              [Symbol.iterator]: () => r,
              next() {
                if (e._state !== t)
                  throw new Error('LinkedMap got modified during iteration.')
                if (n) {
                  const e = { value: [n.key, n.value], done: !1 }
                  return (n = n.next), e
                }
                return { value: void 0, done: !0 }
              },
            }
            return r
          }
          [Symbol.iterator]() {
            return this.entries()
          }
          trimOld(e) {
            if (e >= this.size) return
            if (0 === e) return void this.clear()
            let t = this._head,
              n = this.size
            for (; t && n > e; ) this._map.delete(t.key), (t = t.next), n--
            ;(this._head = t),
              (this._size = n),
              t && (t.previous = void 0),
              this._state++
          }
          addItemFirst(e) {
            if (this._head || this._tail) {
              if (!this._head) throw new Error('Invalid list')
              ;(e.next = this._head), (this._head.previous = e)
            } else this._tail = e
            ;(this._head = e), this._state++
          }
          addItemLast(e) {
            if (this._head || this._tail) {
              if (!this._tail) throw new Error('Invalid list')
              ;(e.previous = this._tail), (this._tail.next = e)
            } else this._head = e
            ;(this._tail = e), this._state++
          }
          removeItem(e) {
            if (e === this._head && e === this._tail)
              (this._head = void 0), (this._tail = void 0)
            else if (e === this._head) {
              if (!e.next) throw new Error('Invalid list')
              ;(e.next.previous = void 0), (this._head = e.next)
            } else if (e === this._tail) {
              if (!e.previous) throw new Error('Invalid list')
              ;(e.previous.next = void 0), (this._tail = e.previous)
            } else {
              const t = e.next,
                n = e.previous
              if (!t || !n) throw new Error('Invalid list')
              ;(t.previous = n), (n.next = t)
            }
            ;(e.next = void 0), (e.previous = void 0), this._state++
          }
          touch(e, t) {
            if (!this._head || !this._tail) throw new Error('Invalid list')
            if (t === n.First || t === n.Last)
              if (t === n.First) {
                if (e === this._head) return
                const t = e.next,
                  n = e.previous
                e === this._tail
                  ? ((n.next = void 0), (this._tail = n))
                  : ((t.previous = n), (n.next = t)),
                  (e.previous = void 0),
                  (e.next = this._head),
                  (this._head.previous = e),
                  (this._head = e),
                  this._state++
              } else if (t === n.Last) {
                if (e === this._tail) return
                const t = e.next,
                  n = e.previous
                e === this._head
                  ? ((t.previous = void 0), (this._head = t))
                  : ((t.previous = n), (n.next = t)),
                  (e.next = void 0),
                  (e.previous = this._tail),
                  (this._tail.next = e),
                  (this._tail = e),
                  this._state++
              }
          }
          toJSON() {
            const e = []
            return (
              this.forEach((t, n) => {
                e.push([n, t])
              }),
              e
            )
          }
          fromJSON(e) {
            this.clear()
            for (const [t, n] of e) this.set(t, n)
          }
        }
        ;(t.LinkedMap = r),
          (t.LRUCache = class extends r {
            constructor(e, t = 1) {
              super(),
                (this._limit = e),
                (this._ratio = Math.min(Math.max(0, t), 1))
            }
            get limit() {
              return this._limit
            }
            set limit(e) {
              ;(this._limit = e), this.checkTrim()
            }
            get ratio() {
              return this._ratio
            }
            set ratio(e) {
              ;(this._ratio = Math.min(Math.max(0, e), 1)), this.checkTrim()
            }
            get(e, t = n.AsNew) {
              return super.get(e, t)
            }
            peek(e) {
              return super.get(e, n.None)
            }
            set(e, t) {
              return super.set(e, t, n.Last), this.checkTrim(), this
            }
            checkTrim() {
              this.size > this._limit &&
                this.trimOld(Math.round(this._limit * this._ratio))
            }
          })
      },
      5530: (e, t) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.AbstractMessageBuffer = void 0),
          (t.AbstractMessageBuffer = class {
            constructor(e = 'utf-8') {
              ;(this._encoding = e),
                (this._chunks = []),
                (this._totalLength = 0)
            }
            get encoding() {
              return this._encoding
            }
            append(e) {
              const t =
                'string' == typeof e ? this.fromString(e, this._encoding) : e
              this._chunks.push(t), (this._totalLength += t.byteLength)
            }
            tryReadHeaders() {
              if (0 === this._chunks.length) return
              let e = 0,
                t = 0,
                n = 0,
                r = 0
              e: for (; t < this._chunks.length; ) {
                const o = this._chunks[t]
                for (n = 0; n < o.length; ) {
                  switch (o[n]) {
                    case 13:
                      switch (e) {
                        case 0:
                          e = 1
                          break
                        case 2:
                          e = 3
                          break
                        default:
                          e = 0
                      }
                      break
                    case 10:
                      switch (e) {
                        case 1:
                          e = 2
                          break
                        case 3:
                          ;(e = 4), n++
                          break e
                        default:
                          e = 0
                      }
                      break
                    default:
                      e = 0
                  }
                  n++
                }
                ;(r += o.byteLength), t++
              }
              if (4 !== e) return
              const o = this._read(r + n),
                i = new Map(),
                s = this.toString(o, 'ascii').split('\r\n')
              if (s.length < 2) return i
              for (let e = 0; e < s.length - 2; e++) {
                const t = s[e],
                  n = t.indexOf(':')
                if (-1 === n)
                  throw new Error(
                    'Message header must separate key and value using :'
                  )
                const r = t.substr(0, n),
                  o = t.substr(n + 1).trim()
                i.set(r, o)
              }
              return i
            }
            tryReadBody(e) {
              if (!(this._totalLength < e)) return this._read(e)
            }
            get numberOfBytes() {
              return this._totalLength
            }
            _read(e) {
              if (0 === e) return this.emptyBuffer()
              if (e > this._totalLength)
                throw new Error('Cannot read so many bytes!')
              if (this._chunks[0].byteLength === e) {
                const t = this._chunks[0]
                return (
                  this._chunks.shift(),
                  (this._totalLength -= e),
                  this.asNative(t)
                )
              }
              if (this._chunks[0].byteLength > e) {
                const t = this._chunks[0],
                  n = this.asNative(t, e)
                return (
                  (this._chunks[0] = t.slice(e)), (this._totalLength -= e), n
                )
              }
              const t = this.allocNative(e)
              let n = 0
              for (; e > 0; ) {
                const r = this._chunks[0]
                if (r.byteLength > e) {
                  const o = r.slice(0, e)
                  t.set(o, n),
                    (n += e),
                    (this._chunks[0] = r.slice(e)),
                    (this._totalLength -= e),
                    (e -= e)
                } else
                  t.set(r, n),
                    (n += r.byteLength),
                    this._chunks.shift(),
                    (this._totalLength -= r.byteLength),
                    (e -= r.byteLength)
              }
              return t
            }
          })
      },
      6525: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ReadableStreamMessageReader =
            t.AbstractMessageReader =
            t.MessageReader =
              void 0)
        const r = n(147),
          o = n(7574),
          i = n(7135)
        var s
        ;(t.MessageReader || (t.MessageReader = {})).is = function (e) {
          let t = e
          return (
            t &&
            o.func(t.listen) &&
            o.func(t.dispose) &&
            o.func(t.onError) &&
            o.func(t.onClose) &&
            o.func(t.onPartialMessage)
          )
        }
        class a {
          constructor() {
            ;(this.errorEmitter = new i.Emitter()),
              (this.closeEmitter = new i.Emitter()),
              (this.partialMessageEmitter = new i.Emitter())
          }
          dispose() {
            this.errorEmitter.dispose(), this.closeEmitter.dispose()
          }
          get onError() {
            return this.errorEmitter.event
          }
          fireError(e) {
            this.errorEmitter.fire(this.asError(e))
          }
          get onClose() {
            return this.closeEmitter.event
          }
          fireClose() {
            this.closeEmitter.fire(void 0)
          }
          get onPartialMessage() {
            return this.partialMessageEmitter.event
          }
          firePartialMessage(e) {
            this.partialMessageEmitter.fire(e)
          }
          asError(e) {
            return e instanceof Error
              ? e
              : new Error(
                  `Reader received error. Reason: ${
                    o.string(e.message) ? e.message : 'unknown'
                  }`
                )
          }
        }
        ;(t.AbstractMessageReader = a),
          (function (e) {
            e.fromOptions = function (e) {
              var t
              let n, o
              const i = new Map()
              let s
              const a = new Map()
              if (void 0 === e || 'string' == typeof e)
                n = null != e ? e : 'utf-8'
              else {
                if (
                  ((n = null !== (t = e.charset) && void 0 !== t ? t : 'utf-8'),
                  void 0 !== e.contentDecoder &&
                    ((o = e.contentDecoder), i.set(o.name, o)),
                  void 0 !== e.contentDecoders)
                )
                  for (const t of e.contentDecoders) i.set(t.name, t)
                if (
                  (void 0 !== e.contentTypeDecoder &&
                    ((s = e.contentTypeDecoder), a.set(s.name, s)),
                  void 0 !== e.contentTypeDecoders)
                )
                  for (const t of e.contentTypeDecoders) a.set(t.name, t)
              }
              return (
                void 0 === s &&
                  ((s = r.default().applicationJson.decoder), a.set(s.name, s)),
                {
                  charset: n,
                  contentDecoder: o,
                  contentDecoders: i,
                  contentTypeDecoder: s,
                  contentTypeDecoders: a,
                }
              )
            }
          })(s || (s = {})),
          (t.ReadableStreamMessageReader = class extends a {
            constructor(e, t) {
              super(),
                (this.readable = e),
                (this.options = s.fromOptions(t)),
                (this.buffer = r
                  .default()
                  .messageBuffer.create(this.options.charset)),
                (this._partialMessageTimeout = 1e4),
                (this.nextMessageLength = -1),
                (this.messageToken = 0)
            }
            set partialMessageTimeout(e) {
              this._partialMessageTimeout = e
            }
            get partialMessageTimeout() {
              return this._partialMessageTimeout
            }
            listen(e) {
              ;(this.nextMessageLength = -1),
                (this.messageToken = 0),
                (this.partialMessageTimer = void 0),
                (this.callback = e)
              const t = this.readable.onData((e) => {
                this.onData(e)
              })
              return (
                this.readable.onError((e) => this.fireError(e)),
                this.readable.onClose(() => this.fireClose()),
                t
              )
            }
            onData(e) {
              for (this.buffer.append(e); ; ) {
                if (-1 === this.nextMessageLength) {
                  const e = this.buffer.tryReadHeaders()
                  if (!e) return
                  const t = e.get('Content-Length')
                  if (!t)
                    throw new Error(
                      'Header must provide a Content-Length property.'
                    )
                  const n = parseInt(t)
                  if (isNaN(n))
                    throw new Error('Content-Length value must be a number.')
                  this.nextMessageLength = n
                }
                const e = this.buffer.tryReadBody(this.nextMessageLength)
                if (void 0 === e) return void this.setPartialMessageTimer()
                let t
                this.clearPartialMessageTimer(),
                  (this.nextMessageLength = -1),
                  (t =
                    void 0 !== this.options.contentDecoder
                      ? this.options.contentDecoder.decode(e)
                      : Promise.resolve(e)),
                  t.then(
                    (e) => {
                      this.options.contentTypeDecoder
                        .decode(e, this.options)
                        .then(
                          (e) => {
                            this.callback(e)
                          },
                          (e) => {
                            this.fireError(e)
                          }
                        )
                    },
                    (e) => {
                      this.fireError(e)
                    }
                  )
              }
            }
            clearPartialMessageTimer() {
              this.partialMessageTimer &&
                (r.default().timer.clearTimeout(this.partialMessageTimer),
                (this.partialMessageTimer = void 0))
            }
            setPartialMessageTimer() {
              this.clearPartialMessageTimer(),
                this._partialMessageTimeout <= 0 ||
                  (this.partialMessageTimer = r.default().timer.setTimeout(
                    (e, t) => {
                      ;(this.partialMessageTimer = void 0),
                        e === this.messageToken &&
                          (this.firePartialMessage({
                            messageToken: e,
                            waitingTime: t,
                          }),
                          this.setPartialMessageTimer())
                    },
                    this._partialMessageTimeout,
                    this.messageToken,
                    this._partialMessageTimeout
                  ))
            }
          })
      },
      6654: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.WriteableStreamMessageWriter =
            t.AbstractMessageWriter =
            t.MessageWriter =
              void 0)
        const r = n(147),
          o = n(7574),
          i = n(142),
          s = n(7135)
        var a
        ;(t.MessageWriter || (t.MessageWriter = {})).is = function (e) {
          let t = e
          return (
            t &&
            o.func(t.dispose) &&
            o.func(t.onClose) &&
            o.func(t.onError) &&
            o.func(t.write)
          )
        }
        class c {
          constructor() {
            ;(this.errorEmitter = new s.Emitter()),
              (this.closeEmitter = new s.Emitter())
          }
          dispose() {
            this.errorEmitter.dispose(), this.closeEmitter.dispose()
          }
          get onError() {
            return this.errorEmitter.event
          }
          fireError(e, t, n) {
            this.errorEmitter.fire([this.asError(e), t, n])
          }
          get onClose() {
            return this.closeEmitter.event
          }
          fireClose() {
            this.closeEmitter.fire(void 0)
          }
          asError(e) {
            return e instanceof Error
              ? e
              : new Error(
                  `Writer received error. Reason: ${
                    o.string(e.message) ? e.message : 'unknown'
                  }`
                )
          }
        }
        ;(t.AbstractMessageWriter = c),
          (function (e) {
            e.fromOptions = function (e) {
              var t, n
              return void 0 === e || 'string' == typeof e
                ? {
                    charset: null != e ? e : 'utf-8',
                    contentTypeEncoder: r.default().applicationJson.encoder,
                  }
                : {
                    charset:
                      null !== (t = e.charset) && void 0 !== t ? t : 'utf-8',
                    contentEncoder: e.contentEncoder,
                    contentTypeEncoder:
                      null !== (n = e.contentTypeEncoder) && void 0 !== n
                        ? n
                        : r.default().applicationJson.encoder,
                  }
            }
          })(a || (a = {})),
          (t.WriteableStreamMessageWriter = class extends c {
            constructor(e, t) {
              super(),
                (this.writable = e),
                (this.options = a.fromOptions(t)),
                (this.errorCount = 0),
                (this.writeSemaphore = new i.Semaphore(1)),
                this.writable.onError((e) => this.fireError(e)),
                this.writable.onClose(() => this.fireClose())
            }
            async write(e) {
              return this.writeSemaphore.lock(async () =>
                this.options.contentTypeEncoder
                  .encode(e, this.options)
                  .then((e) =>
                    void 0 !== this.options.contentEncoder
                      ? this.options.contentEncoder.encode(e)
                      : e
                  )
                  .then(
                    (t) => {
                      const n = []
                      return (
                        n.push(
                          'Content-Length: ',
                          t.byteLength.toString(),
                          '\r\n'
                        ),
                        n.push('\r\n'),
                        this.doWrite(e, n, t)
                      )
                    },
                    (e) => {
                      throw (this.fireError(e), e)
                    }
                  )
              )
            }
            async doWrite(e, t, n) {
              try {
                return (
                  await this.writable.write(t.join(''), 'ascii'),
                  this.writable.write(n)
                )
              } catch (t) {
                return this.handleError(t, e), Promise.reject(t)
              }
            }
            handleError(e, t) {
              this.errorCount++, this.fireError(e, t, this.errorCount)
            }
            end() {
              this.writable.end()
            }
          })
      },
      839: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.isResponseMessage =
            t.isNotificationMessage =
            t.isRequestMessage =
            t.NotificationType9 =
            t.NotificationType8 =
            t.NotificationType7 =
            t.NotificationType6 =
            t.NotificationType5 =
            t.NotificationType4 =
            t.NotificationType3 =
            t.NotificationType2 =
            t.NotificationType1 =
            t.NotificationType0 =
            t.NotificationType =
            t.RequestType9 =
            t.RequestType8 =
            t.RequestType7 =
            t.RequestType6 =
            t.RequestType5 =
            t.RequestType4 =
            t.RequestType3 =
            t.RequestType2 =
            t.RequestType1 =
            t.RequestType =
            t.RequestType0 =
            t.AbstractMessageSignature =
            t.ParameterStructures =
            t.ResponseError =
            t.ErrorCodes =
              void 0)
        const r = n(7574)
        var o
        !(function (e) {
          ;(e.ParseError = -32700),
            (e.InvalidRequest = -32600),
            (e.MethodNotFound = -32601),
            (e.InvalidParams = -32602),
            (e.InternalError = -32603),
            (e.jsonrpcReservedErrorRangeStart = -32099),
            (e.serverErrorStart = e.jsonrpcReservedErrorRangeStart),
            (e.MessageWriteError = -32099),
            (e.MessageReadError = -32098),
            (e.ServerNotInitialized = -32002),
            (e.UnknownErrorCode = -32001),
            (e.jsonrpcReservedErrorRangeEnd = -32e3),
            (e.serverErrorEnd = e.jsonrpcReservedErrorRangeEnd)
        })((o = t.ErrorCodes || (t.ErrorCodes = {})))
        class i extends Error {
          constructor(e, t, n) {
            super(t),
              (this.code = r.number(e) ? e : o.UnknownErrorCode),
              (this.data = n),
              Object.setPrototypeOf(this, i.prototype)
          }
          toJson() {
            return { code: this.code, message: this.message, data: this.data }
          }
        }
        t.ResponseError = i
        class s {
          constructor(e) {
            this.kind = e
          }
          static is(e) {
            return e === s.auto || e === s.byName || e === s.byPosition
          }
          toString() {
            return this.kind
          }
        }
        ;(t.ParameterStructures = s),
          (s.auto = new s('auto')),
          (s.byPosition = new s('byPosition')),
          (s.byName = new s('byName'))
        class a {
          constructor(e, t) {
            ;(this.method = e), (this.numberOfParams = t)
          }
          get parameterStructures() {
            return s.auto
          }
        }
        ;(t.AbstractMessageSignature = a),
          (t.RequestType0 = class extends a {
            constructor(e) {
              super(e, 0)
            }
          }),
          (t.RequestType = class extends a {
            constructor(e, t = s.auto) {
              super(e, 1), (this._parameterStructures = t)
            }
            get parameterStructures() {
              return this._parameterStructures
            }
          }),
          (t.RequestType1 = class extends a {
            constructor(e, t = s.auto) {
              super(e, 1), (this._parameterStructures = t)
            }
            get parameterStructures() {
              return this._parameterStructures
            }
          }),
          (t.RequestType2 = class extends a {
            constructor(e) {
              super(e, 2)
            }
          }),
          (t.RequestType3 = class extends a {
            constructor(e) {
              super(e, 3)
            }
          }),
          (t.RequestType4 = class extends a {
            constructor(e) {
              super(e, 4)
            }
          }),
          (t.RequestType5 = class extends a {
            constructor(e) {
              super(e, 5)
            }
          }),
          (t.RequestType6 = class extends a {
            constructor(e) {
              super(e, 6)
            }
          }),
          (t.RequestType7 = class extends a {
            constructor(e) {
              super(e, 7)
            }
          }),
          (t.RequestType8 = class extends a {
            constructor(e) {
              super(e, 8)
            }
          }),
          (t.RequestType9 = class extends a {
            constructor(e) {
              super(e, 9)
            }
          }),
          (t.NotificationType = class extends a {
            constructor(e, t = s.auto) {
              super(e, 1), (this._parameterStructures = t)
            }
            get parameterStructures() {
              return this._parameterStructures
            }
          }),
          (t.NotificationType0 = class extends a {
            constructor(e) {
              super(e, 0)
            }
          }),
          (t.NotificationType1 = class extends a {
            constructor(e, t = s.auto) {
              super(e, 1), (this._parameterStructures = t)
            }
            get parameterStructures() {
              return this._parameterStructures
            }
          }),
          (t.NotificationType2 = class extends a {
            constructor(e) {
              super(e, 2)
            }
          }),
          (t.NotificationType3 = class extends a {
            constructor(e) {
              super(e, 3)
            }
          }),
          (t.NotificationType4 = class extends a {
            constructor(e) {
              super(e, 4)
            }
          }),
          (t.NotificationType5 = class extends a {
            constructor(e) {
              super(e, 5)
            }
          }),
          (t.NotificationType6 = class extends a {
            constructor(e) {
              super(e, 6)
            }
          }),
          (t.NotificationType7 = class extends a {
            constructor(e) {
              super(e, 7)
            }
          }),
          (t.NotificationType8 = class extends a {
            constructor(e) {
              super(e, 8)
            }
          }),
          (t.NotificationType9 = class extends a {
            constructor(e) {
              super(e, 9)
            }
          }),
          (t.isRequestMessage = function (e) {
            const t = e
            return t && r.string(t.method) && (r.string(t.id) || r.number(t.id))
          }),
          (t.isNotificationMessage = function (e) {
            const t = e
            return t && r.string(t.method) && void 0 === e.id
          }),
          (t.isResponseMessage = function (e) {
            const t = e
            return (
              t &&
              (void 0 !== t.result || !!t.error) &&
              (r.string(t.id) || r.number(t.id) || null === t.id)
            )
          })
      },
      147: (e, t) => {
        'use strict'
        let n
        function r() {
          if (void 0 === n)
            throw new Error('No runtime abstraction layer installed')
          return n
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (function (e) {
            e.install = function (e) {
              if (void 0 === e)
                throw new Error('No runtime abstraction layer provided')
              n = e
            }
          })(r || (r = {})),
          (t.default = r)
      },
      142: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Semaphore = void 0)
        const r = n(147)
        t.Semaphore = class {
          constructor(e = 1) {
            if (e <= 0) throw new Error('Capacity must be greater than 0')
            ;(this._capacity = e), (this._active = 0), (this._waiting = [])
          }
          lock(e) {
            return new Promise((t, n) => {
              this._waiting.push({ thunk: e, resolve: t, reject: n }),
                this.runNext()
            })
          }
          get active() {
            return this._active
          }
          runNext() {
            0 !== this._waiting.length &&
              this._active !== this._capacity &&
              r.default().timer.setImmediate(() => this.doRunNext())
          }
          doRunNext() {
            if (0 === this._waiting.length || this._active === this._capacity)
              return
            const e = this._waiting.shift()
            if ((this._active++, this._active > this._capacity))
              throw new Error('To many thunks active')
            try {
              const t = e.thunk()
              t instanceof Promise
                ? t.then(
                    (t) => {
                      this._active--, e.resolve(t), this.runNext()
                    },
                    (t) => {
                      this._active--, e.reject(t), this.runNext()
                    }
                  )
                : (this._active--, e.resolve(t), this.runNext())
            } catch (t) {
              this._active--, e.reject(t), this.runNext()
            }
          }
        }
      },
      4389: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    })
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                'default' === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  r(t, e, n)
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.createMessageConnection =
            t.createServerSocketTransport =
            t.createClientSocketTransport =
            t.createServerPipeTransport =
            t.createClientPipeTransport =
            t.generateRandomPipeName =
            t.StreamMessageWriter =
            t.StreamMessageReader =
            t.SocketMessageWriter =
            t.SocketMessageReader =
            t.IPCMessageWriter =
            t.IPCMessageReader =
              void 0)
        const i = n(3034)
        i.default.install()
        const s = n(3870),
          a = n(5622),
          c = n(2087),
          u = n(6417),
          l = n(1631)
        o(n(3870), t)
        class d extends s.AbstractMessageReader {
          constructor(e) {
            super(), (this.process = e)
            let t = this.process
            t.on('error', (e) => this.fireError(e)),
              t.on('close', () => this.fireClose())
          }
          listen(e) {
            return (
              this.process.on('message', e),
              s.Disposable.create(() => this.process.off('message', e))
            )
          }
        }
        t.IPCMessageReader = d
        class f extends s.AbstractMessageWriter {
          constructor(e) {
            super(), (this.process = e), (this.errorCount = 0)
            let t = this.process
            t.on('error', (e) => this.fireError(e)),
              t.on('close', () => this.fireClose)
          }
          write(e) {
            try {
              return (
                'function' == typeof this.process.send &&
                  this.process.send(e, void 0, void 0, (t) => {
                    t
                      ? (this.errorCount++, this.handleError(t, e))
                      : (this.errorCount = 0)
                  }),
                Promise.resolve()
              )
            } catch (t) {
              return this.handleError(t, e), Promise.reject(t)
            }
          }
          handleError(e, t) {
            this.errorCount++, this.fireError(e, t, this.errorCount)
          }
          end() {}
        }
        t.IPCMessageWriter = f
        class h extends s.ReadableStreamMessageReader {
          constructor(e, t = 'utf-8') {
            super(i.default().stream.asReadableStream(e), t)
          }
        }
        t.SocketMessageReader = h
        class p extends s.WriteableStreamMessageWriter {
          constructor(e, t) {
            super(i.default().stream.asWritableStream(e), t), (this.socket = e)
          }
          dispose() {
            super.dispose(), this.socket.destroy()
          }
        }
        t.SocketMessageWriter = p
        class m extends s.ReadableStreamMessageReader {
          constructor(e, t) {
            super(i.default().stream.asReadableStream(e), t)
          }
        }
        t.StreamMessageReader = m
        class g extends s.WriteableStreamMessageWriter {
          constructor(e, t) {
            super(i.default().stream.asWritableStream(e), t)
          }
        }
        t.StreamMessageWriter = g
        const y = process.env.XDG_RUNTIME_DIR,
          v = new Map([
            ['linux', 107],
            ['darwin', 103],
          ])
        ;(t.generateRandomPipeName = function () {
          const e = u.randomBytes(21).toString('hex')
          if ('win32' === process.platform)
            return `\\\\.\\pipe\\vscode-jsonrpc-${e}-sock`
          let t
          t = y
            ? a.join(y, `vscode-ipc-${e}.sock`)
            : a.join(c.tmpdir(), `vscode-${e}.sock`)
          const n = v.get(process.platform)
          return (
            void 0 !== n &&
              t.length >= n &&
              i
                .default()
                .console.warn(
                  `WARNING: IPC handle "${t}" is longer than ${n} characters.`
                ),
            t
          )
        }),
          (t.createClientPipeTransport = function (e, t = 'utf-8') {
            let n
            const r = new Promise((e, t) => {
              n = e
            })
            return new Promise((o, i) => {
              let s = l.createServer((e) => {
                s.close(), n([new h(e, t), new p(e, t)])
              })
              s.on('error', i),
                s.listen(e, () => {
                  s.removeListener('error', i), o({ onConnected: () => r })
                })
            })
          }),
          (t.createServerPipeTransport = function (e, t = 'utf-8') {
            const n = l.createConnection(e)
            return [new h(n, t), new p(n, t)]
          }),
          (t.createClientSocketTransport = function (e, t = 'utf-8') {
            let n
            const r = new Promise((e, t) => {
              n = e
            })
            return new Promise((o, i) => {
              const s = l.createServer((e) => {
                s.close(), n([new h(e, t), new p(e, t)])
              })
              s.on('error', i),
                s.listen(e, '127.0.0.1', () => {
                  s.removeListener('error', i), o({ onConnected: () => r })
                })
            })
          }),
          (t.createServerSocketTransport = function (e, t = 'utf-8') {
            const n = l.createConnection(e, '127.0.0.1')
            return [new h(n, t), new p(n, t)]
          }),
          (t.createMessageConnection = function (e, t, n, r) {
            n || (n = s.NullLogger)
            const o = (function (e) {
                const t = e
                return void 0 !== t.read && void 0 !== t.addListener
              })(e)
                ? new m(e)
                : e,
              i = (function (e) {
                const t = e
                return void 0 !== t.write && void 0 !== t.addListener
              })(t)
                ? new g(t)
                : t
            return (
              s.ConnectionStrategy.is(r) && (r = { connectionStrategy: r }),
              s.createMessageConnection(o, i, n, r)
            )
          })
      },
      3034: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        const r = n(147),
          o = n(1669),
          i = n(3911),
          s = n(5530)
        class a extends s.AbstractMessageBuffer {
          constructor(e = 'utf-8') {
            super(e)
          }
          emptyBuffer() {
            return a.emptyBuffer
          }
          fromString(e, t) {
            return Buffer.from(e, t)
          }
          toString(e, t) {
            return e instanceof Buffer
              ? e.toString(t)
              : new o.TextDecoder(t).decode(e)
          }
          asNative(e, t) {
            return void 0 === t
              ? e instanceof Buffer
                ? e
                : Buffer.from(e)
              : e instanceof Buffer
              ? e.slice(0, t)
              : Buffer.from(e, 0, t)
          }
          allocNative(e) {
            return Buffer.allocUnsafe(e)
          }
        }
        a.emptyBuffer = Buffer.allocUnsafe(0)
        class c {
          constructor(e) {
            this.stream = e
          }
          onClose(e) {
            return (
              this.stream.on('close', e),
              i.Disposable.create(() => this.stream.off('close', e))
            )
          }
          onError(e) {
            return (
              this.stream.on('error', e),
              i.Disposable.create(() => this.stream.off('error', e))
            )
          }
          onEnd(e) {
            return (
              this.stream.on('end', e),
              i.Disposable.create(() => this.stream.off('end', e))
            )
          }
          onData(e) {
            return (
              this.stream.on('data', e),
              i.Disposable.create(() => this.stream.off('data', e))
            )
          }
        }
        class u {
          constructor(e) {
            this.stream = e
          }
          onClose(e) {
            return (
              this.stream.on('close', e),
              i.Disposable.create(() => this.stream.off('close', e))
            )
          }
          onError(e) {
            return (
              this.stream.on('error', e),
              i.Disposable.create(() => this.stream.off('error', e))
            )
          }
          onEnd(e) {
            return (
              this.stream.on('end', e),
              i.Disposable.create(() => this.stream.off('end', e))
            )
          }
          write(e, t) {
            return new Promise((n, r) => {
              const o = (e) => {
                null == e ? n() : r(e)
              }
              'string' == typeof e
                ? this.stream.write(e, t, o)
                : this.stream.write(e, o)
            })
          }
          end() {
            this.stream.end()
          }
        }
        const l = Object.freeze({
          messageBuffer: Object.freeze({ create: (e) => new a(e) }),
          applicationJson: Object.freeze({
            encoder: Object.freeze({
              name: 'application/json',
              encode: (e, t) => {
                try {
                  return Promise.resolve(
                    Buffer.from(JSON.stringify(e, void 0, 0), t.charset)
                  )
                } catch (e) {
                  return Promise.reject(e)
                }
              },
            }),
            decoder: Object.freeze({
              name: 'application/json',
              decode: (e, t) => {
                try {
                  return e instanceof Buffer
                    ? Promise.resolve(JSON.parse(e.toString(t.charset)))
                    : Promise.resolve(
                        JSON.parse(new o.TextDecoder(t.charset).decode(e))
                      )
                } catch (e) {
                  return Promise.reject(e)
                }
              },
            }),
          }),
          stream: Object.freeze({
            asReadableStream: (e) => new c(e),
            asWritableStream: (e) => new u(e),
          }),
          console,
          timer: Object.freeze({
            setTimeout: (e, t, ...n) => setTimeout(e, t, ...n),
            clearTimeout(e) {
              clearTimeout(e)
            },
            setImmediate: (e, ...t) => setImmediate(e, ...t),
            clearImmediate(e) {
              clearImmediate(e)
            },
          }),
        })
        function d() {
          return l
        }
        !(function (e) {
          e.install = function () {
            r.default.install(l)
          }
        })(d || (d = {})),
          (t.default = d)
      },
      5028: (e, t, n) => {
        'use strict'
        e.exports = n(4389)
      },
      1661: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    })
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                'default' === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  r(t, e, n)
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.LSPErrorCodes = t.createProtocolConnection = void 0),
          o(n(4389), t),
          o(n(1674), t),
          o(n(6140), t),
          o(n(542), t)
        var i,
          s = n(3767)
        Object.defineProperty(t, 'createProtocolConnection', {
          enumerable: !0,
          get: function () {
            return s.createProtocolConnection
          },
        }),
          ((i =
            t.LSPErrorCodes ||
            (t.LSPErrorCodes = {})).lspReservedErrorRangeStart = -32899),
          (i.ContentModified = -32801),
          (i.RequestCancelled = -32800),
          (i.lspReservedErrorRangeEnd = -32800)
      },
      3767: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.createProtocolConnection = void 0)
        const r = n(4389)
        t.createProtocolConnection = function (e, t, n, o) {
          return (
            r.ConnectionStrategy.is(o) && (o = { connectionStrategy: o }),
            r.createMessageConnection(e, t, n, o)
          )
        }
      },
      6140: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ProtocolNotificationType =
            t.ProtocolNotificationType0 =
            t.ProtocolRequestType =
            t.ProtocolRequestType0 =
            t.RegistrationType =
              void 0)
        const r = n(4389)
        t.RegistrationType = class {
          constructor(e) {
            this.method = e
          }
        }
        class o extends r.RequestType0 {
          constructor(e) {
            super(e)
          }
        }
        t.ProtocolRequestType0 = o
        class i extends r.RequestType {
          constructor(e) {
            super(e, r.ParameterStructures.byName)
          }
        }
        t.ProtocolRequestType = i
        class s extends r.NotificationType0 {
          constructor(e) {
            super(e)
          }
        }
        t.ProtocolNotificationType0 = s
        class a extends r.NotificationType {
          constructor(e) {
            super(e, r.ParameterStructures.byName)
          }
        }
        t.ProtocolNotificationType = a
      },
      2918: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.CallHierarchyOutgoingCallsRequest =
            t.CallHierarchyIncomingCallsRequest =
            t.CallHierarchyPrepareRequest =
              void 0)
        const r = n(6140)
        var o, i, s
        ;((s =
          t.CallHierarchyPrepareRequest ||
          (t.CallHierarchyPrepareRequest = {})).method =
          'textDocument/prepareCallHierarchy'),
          (s.type = new r.ProtocolRequestType(s.method)),
          ((i =
            t.CallHierarchyIncomingCallsRequest ||
            (t.CallHierarchyIncomingCallsRequest = {})).method =
            'callHierarchy/incomingCalls'),
          (i.type = new r.ProtocolRequestType(i.method)),
          ((o =
            t.CallHierarchyOutgoingCallsRequest ||
            (t.CallHierarchyOutgoingCallsRequest = {})).method =
            'callHierarchy/outgoingCalls'),
          (o.type = new r.ProtocolRequestType(o.method))
      },
      3390: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ColorPresentationRequest = t.DocumentColorRequest = void 0)
        const r = n(6140)
        var o
        ;((o = t.DocumentColorRequest || (t.DocumentColorRequest = {})).method =
          'textDocument/documentColor'),
          (o.type = new r.ProtocolRequestType(o.method)),
          ((
            t.ColorPresentationRequest || (t.ColorPresentationRequest = {})
          ).type = new r.ProtocolRequestType('textDocument/colorPresentation'))
      },
      5934: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ConfigurationRequest = void 0)
        const r = n(6140)
        ;(t.ConfigurationRequest || (t.ConfigurationRequest = {})).type =
          new r.ProtocolRequestType('workspace/configuration')
      },
      764: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.DeclarationRequest = void 0)
        const r = n(6140)
        var o
        ;((o = t.DeclarationRequest || (t.DeclarationRequest = {})).method =
          'textDocument/declaration'),
          (o.type = new r.ProtocolRequestType(o.method))
      },
      7846: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.WillDeleteFilesRequest =
            t.DidDeleteFilesNotification =
            t.DidRenameFilesNotification =
            t.WillRenameFilesRequest =
            t.DidCreateFilesNotification =
            t.WillCreateFilesRequest =
            t.FileOperationPatternKind =
              void 0)
        const r = n(6140)
        var o, i, s, a, c, u, l
        ;((l =
          t.FileOperationPatternKind ||
          (t.FileOperationPatternKind = {})).file = 'file'),
          (l.folder = 'folder'),
          ((u =
            t.WillCreateFilesRequest ||
            (t.WillCreateFilesRequest = {})).method =
            'workspace/willCreateFiles'),
          (u.type = new r.ProtocolRequestType(u.method)),
          ((c =
            t.DidCreateFilesNotification ||
            (t.DidCreateFilesNotification = {})).method =
            'workspace/didCreateFiles'),
          (c.type = new r.ProtocolNotificationType(c.method)),
          ((a =
            t.WillRenameFilesRequest ||
            (t.WillRenameFilesRequest = {})).method =
            'workspace/willRenameFiles'),
          (a.type = new r.ProtocolRequestType(a.method)),
          ((s =
            t.DidRenameFilesNotification ||
            (t.DidRenameFilesNotification = {})).method =
            'workspace/didRenameFiles'),
          (s.type = new r.ProtocolNotificationType(s.method)),
          ((i =
            t.DidDeleteFilesNotification ||
            (t.DidDeleteFilesNotification = {})).method =
            'workspace/didDeleteFiles'),
          (i.type = new r.ProtocolNotificationType(i.method)),
          ((o =
            t.WillDeleteFilesRequest ||
            (t.WillDeleteFilesRequest = {})).method =
            'workspace/willDeleteFiles'),
          (o.type = new r.ProtocolRequestType(o.method))
      },
      3394: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.FoldingRangeRequest = t.FoldingRangeKind = void 0)
        const r = n(6140)
        var o, i
        ;((i = t.FoldingRangeKind || (t.FoldingRangeKind = {})).Comment =
          'comment'),
          (i.Imports = 'imports'),
          (i.Region = 'region'),
          ((o = t.FoldingRangeRequest || (t.FoldingRangeRequest = {})).method =
            'textDocument/foldingRange'),
          (o.type = new r.ProtocolRequestType(o.method))
      },
      2122: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ImplementationRequest = void 0)
        const r = n(6140)
        var o
        ;((o =
          t.ImplementationRequest || (t.ImplementationRequest = {})).method =
          'textDocument/implementation'),
          (o.type = new r.ProtocolRequestType(o.method))
      },
      542: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.DocumentLinkRequest =
            t.CodeLensRefreshRequest =
            t.CodeLensResolveRequest =
            t.CodeLensRequest =
            t.WorkspaceSymbolRequest =
            t.CodeActionResolveRequest =
            t.CodeActionRequest =
            t.DocumentSymbolRequest =
            t.DocumentHighlightRequest =
            t.ReferencesRequest =
            t.DefinitionRequest =
            t.SignatureHelpRequest =
            t.SignatureHelpTriggerKind =
            t.HoverRequest =
            t.CompletionResolveRequest =
            t.CompletionRequest =
            t.CompletionTriggerKind =
            t.PublishDiagnosticsNotification =
            t.WatchKind =
            t.FileChangeType =
            t.DidChangeWatchedFilesNotification =
            t.WillSaveTextDocumentWaitUntilRequest =
            t.WillSaveTextDocumentNotification =
            t.TextDocumentSaveReason =
            t.DidSaveTextDocumentNotification =
            t.DidCloseTextDocumentNotification =
            t.DidChangeTextDocumentNotification =
            t.TextDocumentContentChangeEvent =
            t.DidOpenTextDocumentNotification =
            t.TextDocumentSyncKind =
            t.TelemetryEventNotification =
            t.LogMessageNotification =
            t.ShowMessageRequest =
            t.ShowMessageNotification =
            t.MessageType =
            t.DidChangeConfigurationNotification =
            t.ExitNotification =
            t.ShutdownRequest =
            t.InitializedNotification =
            t.InitializeError =
            t.InitializeRequest =
            t.WorkDoneProgressOptions =
            t.TextDocumentRegistrationOptions =
            t.StaticRegistrationOptions =
            t.FailureHandlingKind =
            t.ResourceOperationKind =
            t.UnregistrationRequest =
            t.RegistrationRequest =
            t.DocumentSelector =
            t.DocumentFilter =
              void 0),
          (t.MonikerRequest =
            t.MonikerKind =
            t.UniquenessLevel =
            t.WillDeleteFilesRequest =
            t.DidDeleteFilesNotification =
            t.WillRenameFilesRequest =
            t.DidRenameFilesNotification =
            t.WillCreateFilesRequest =
            t.DidCreateFilesNotification =
            t.FileOperationPatternKind =
            t.LinkedEditingRangeRequest =
            t.ShowDocumentRequest =
            t.SemanticTokensRegistrationType =
            t.SemanticTokensRefreshRequest =
            t.SemanticTokensRangeRequest =
            t.SemanticTokensDeltaRequest =
            t.SemanticTokensRequest =
            t.TokenFormat =
            t.SemanticTokens =
            t.SemanticTokenModifiers =
            t.SemanticTokenTypes =
            t.CallHierarchyPrepareRequest =
            t.CallHierarchyOutgoingCallsRequest =
            t.CallHierarchyIncomingCallsRequest =
            t.WorkDoneProgressCancelNotification =
            t.WorkDoneProgressCreateRequest =
            t.WorkDoneProgress =
            t.SelectionRangeRequest =
            t.DeclarationRequest =
            t.FoldingRangeRequest =
            t.ColorPresentationRequest =
            t.DocumentColorRequest =
            t.ConfigurationRequest =
            t.DidChangeWorkspaceFoldersNotification =
            t.WorkspaceFoldersRequest =
            t.TypeDefinitionRequest =
            t.ImplementationRequest =
            t.ApplyWorkspaceEditRequest =
            t.ExecuteCommandRequest =
            t.PrepareRenameRequest =
            t.RenameRequest =
            t.PrepareSupportDefaultBehavior =
            t.DocumentOnTypeFormattingRequest =
            t.DocumentRangeFormattingRequest =
            t.DocumentFormattingRequest =
            t.DocumentLinkResolveRequest =
              void 0)
        const r = n(9533),
          o = n(6140),
          i = n(2122)
        Object.defineProperty(t, 'ImplementationRequest', {
          enumerable: !0,
          get: function () {
            return i.ImplementationRequest
          },
        })
        const s = n(1589)
        Object.defineProperty(t, 'TypeDefinitionRequest', {
          enumerable: !0,
          get: function () {
            return s.TypeDefinitionRequest
          },
        })
        const a = n(9795)
        Object.defineProperty(t, 'WorkspaceFoldersRequest', {
          enumerable: !0,
          get: function () {
            return a.WorkspaceFoldersRequest
          },
        }),
          Object.defineProperty(t, 'DidChangeWorkspaceFoldersNotification', {
            enumerable: !0,
            get: function () {
              return a.DidChangeWorkspaceFoldersNotification
            },
          })
        const c = n(5934)
        Object.defineProperty(t, 'ConfigurationRequest', {
          enumerable: !0,
          get: function () {
            return c.ConfigurationRequest
          },
        })
        const u = n(3390)
        Object.defineProperty(t, 'DocumentColorRequest', {
          enumerable: !0,
          get: function () {
            return u.DocumentColorRequest
          },
        }),
          Object.defineProperty(t, 'ColorPresentationRequest', {
            enumerable: !0,
            get: function () {
              return u.ColorPresentationRequest
            },
          })
        const l = n(3394)
        Object.defineProperty(t, 'FoldingRangeRequest', {
          enumerable: !0,
          get: function () {
            return l.FoldingRangeRequest
          },
        })
        const d = n(764)
        Object.defineProperty(t, 'DeclarationRequest', {
          enumerable: !0,
          get: function () {
            return d.DeclarationRequest
          },
        })
        const f = n(5206)
        Object.defineProperty(t, 'SelectionRangeRequest', {
          enumerable: !0,
          get: function () {
            return f.SelectionRangeRequest
          },
        })
        const h = n(1862)
        Object.defineProperty(t, 'WorkDoneProgress', {
          enumerable: !0,
          get: function () {
            return h.WorkDoneProgress
          },
        }),
          Object.defineProperty(t, 'WorkDoneProgressCreateRequest', {
            enumerable: !0,
            get: function () {
              return h.WorkDoneProgressCreateRequest
            },
          }),
          Object.defineProperty(t, 'WorkDoneProgressCancelNotification', {
            enumerable: !0,
            get: function () {
              return h.WorkDoneProgressCancelNotification
            },
          })
        const p = n(2918)
        Object.defineProperty(t, 'CallHierarchyIncomingCallsRequest', {
          enumerable: !0,
          get: function () {
            return p.CallHierarchyIncomingCallsRequest
          },
        }),
          Object.defineProperty(t, 'CallHierarchyOutgoingCallsRequest', {
            enumerable: !0,
            get: function () {
              return p.CallHierarchyOutgoingCallsRequest
            },
          }),
          Object.defineProperty(t, 'CallHierarchyPrepareRequest', {
            enumerable: !0,
            get: function () {
              return p.CallHierarchyPrepareRequest
            },
          })
        const m = n(9434)
        Object.defineProperty(t, 'SemanticTokenTypes', {
          enumerable: !0,
          get: function () {
            return m.SemanticTokenTypes
          },
        }),
          Object.defineProperty(t, 'SemanticTokenModifiers', {
            enumerable: !0,
            get: function () {
              return m.SemanticTokenModifiers
            },
          }),
          Object.defineProperty(t, 'SemanticTokens', {
            enumerable: !0,
            get: function () {
              return m.SemanticTokens
            },
          }),
          Object.defineProperty(t, 'TokenFormat', {
            enumerable: !0,
            get: function () {
              return m.TokenFormat
            },
          }),
          Object.defineProperty(t, 'SemanticTokensRequest', {
            enumerable: !0,
            get: function () {
              return m.SemanticTokensRequest
            },
          }),
          Object.defineProperty(t, 'SemanticTokensDeltaRequest', {
            enumerable: !0,
            get: function () {
              return m.SemanticTokensDeltaRequest
            },
          }),
          Object.defineProperty(t, 'SemanticTokensRangeRequest', {
            enumerable: !0,
            get: function () {
              return m.SemanticTokensRangeRequest
            },
          }),
          Object.defineProperty(t, 'SemanticTokensRefreshRequest', {
            enumerable: !0,
            get: function () {
              return m.SemanticTokensRefreshRequest
            },
          }),
          Object.defineProperty(t, 'SemanticTokensRegistrationType', {
            enumerable: !0,
            get: function () {
              return m.SemanticTokensRegistrationType
            },
          })
        const g = n(5726)
        Object.defineProperty(t, 'ShowDocumentRequest', {
          enumerable: !0,
          get: function () {
            return g.ShowDocumentRequest
          },
        })
        const y = n(6305)
        Object.defineProperty(t, 'LinkedEditingRangeRequest', {
          enumerable: !0,
          get: function () {
            return y.LinkedEditingRangeRequest
          },
        })
        const v = n(7846)
        Object.defineProperty(t, 'FileOperationPatternKind', {
          enumerable: !0,
          get: function () {
            return v.FileOperationPatternKind
          },
        }),
          Object.defineProperty(t, 'DidCreateFilesNotification', {
            enumerable: !0,
            get: function () {
              return v.DidCreateFilesNotification
            },
          }),
          Object.defineProperty(t, 'WillCreateFilesRequest', {
            enumerable: !0,
            get: function () {
              return v.WillCreateFilesRequest
            },
          }),
          Object.defineProperty(t, 'DidRenameFilesNotification', {
            enumerable: !0,
            get: function () {
              return v.DidRenameFilesNotification
            },
          }),
          Object.defineProperty(t, 'WillRenameFilesRequest', {
            enumerable: !0,
            get: function () {
              return v.WillRenameFilesRequest
            },
          }),
          Object.defineProperty(t, 'DidDeleteFilesNotification', {
            enumerable: !0,
            get: function () {
              return v.DidDeleteFilesNotification
            },
          }),
          Object.defineProperty(t, 'WillDeleteFilesRequest', {
            enumerable: !0,
            get: function () {
              return v.WillDeleteFilesRequest
            },
          })
        const b = n(3443)
        var R,
          S,
          T,
          x,
          k,
          C,
          w,
          P,
          _,
          D,
          O,
          E,
          q,
          N,
          j,
          M,
          A,
          F,
          I,
          L,
          W,
          $,
          V,
          U,
          H,
          z,
          B,
          K,
          J,
          G,
          X,
          Z,
          Y,
          Q,
          ee,
          te,
          ne,
          re,
          oe,
          ie
        Object.defineProperty(t, 'UniquenessLevel', {
          enumerable: !0,
          get: function () {
            return b.UniquenessLevel
          },
        }),
          Object.defineProperty(t, 'MonikerKind', {
            enumerable: !0,
            get: function () {
              return b.MonikerKind
            },
          }),
          Object.defineProperty(t, 'MonikerRequest', {
            enumerable: !0,
            get: function () {
              return b.MonikerRequest
            },
          }),
          (function (e) {
            e.is = function (e) {
              const t = e
              return (
                r.string(t.language) ||
                r.string(t.scheme) ||
                r.string(t.pattern)
              )
            }
          })((R = t.DocumentFilter || (t.DocumentFilter = {}))),
          (function (e) {
            e.is = function (e) {
              if (!Array.isArray(e)) return !1
              for (let t of e) if (!r.string(t) && !R.is(t)) return !1
              return !0
            }
          })((S = t.DocumentSelector || (t.DocumentSelector = {}))),
          ((t.RegistrationRequest || (t.RegistrationRequest = {})).type =
            new o.ProtocolRequestType('client/registerCapability')),
          ((t.UnregistrationRequest || (t.UnregistrationRequest = {})).type =
            new o.ProtocolRequestType('client/unregisterCapability')),
          ((ie =
            t.ResourceOperationKind || (t.ResourceOperationKind = {})).Create =
            'create'),
          (ie.Rename = 'rename'),
          (ie.Delete = 'delete'),
          ((oe = t.FailureHandlingKind || (t.FailureHandlingKind = {})).Abort =
            'abort'),
          (oe.Transactional = 'transactional'),
          (oe.TextOnlyTransactional = 'textOnlyTransactional'),
          (oe.Undo = 'undo'),
          ((
            t.StaticRegistrationOptions || (t.StaticRegistrationOptions = {})
          ).hasId = function (e) {
            const t = e
            return t && r.string(t.id) && t.id.length > 0
          }),
          ((
            t.TextDocumentRegistrationOptions ||
            (t.TextDocumentRegistrationOptions = {})
          ).is = function (e) {
            const t = e
            return (
              t && (null === t.documentSelector || S.is(t.documentSelector))
            )
          }),
          ((re =
            t.WorkDoneProgressOptions || (t.WorkDoneProgressOptions = {})).is =
            function (e) {
              const t = e
              return (
                r.objectLiteral(t) &&
                (void 0 === t.workDoneProgress || r.boolean(t.workDoneProgress))
              )
            }),
          (re.hasWorkDoneProgress = function (e) {
            const t = e
            return t && r.boolean(t.workDoneProgress)
          }),
          ((t.InitializeRequest || (t.InitializeRequest = {})).type =
            new o.ProtocolRequestType('initialize')),
          ((
            t.InitializeError || (t.InitializeError = {})
          ).unknownProtocolVersion = 1),
          ((
            t.InitializedNotification || (t.InitializedNotification = {})
          ).type = new o.ProtocolNotificationType('initialized')),
          ((t.ShutdownRequest || (t.ShutdownRequest = {})).type =
            new o.ProtocolRequestType0('shutdown')),
          ((t.ExitNotification || (t.ExitNotification = {})).type =
            new o.ProtocolNotificationType0('exit')),
          ((
            t.DidChangeConfigurationNotification ||
            (t.DidChangeConfigurationNotification = {})
          ).type = new o.ProtocolNotificationType(
            'workspace/didChangeConfiguration'
          )),
          ((ne = t.MessageType || (t.MessageType = {})).Error = 1),
          (ne.Warning = 2),
          (ne.Info = 3),
          (ne.Log = 4),
          ((
            t.ShowMessageNotification || (t.ShowMessageNotification = {})
          ).type = new o.ProtocolNotificationType('window/showMessage')),
          ((t.ShowMessageRequest || (t.ShowMessageRequest = {})).type =
            new o.ProtocolRequestType('window/showMessageRequest')),
          ((t.LogMessageNotification || (t.LogMessageNotification = {})).type =
            new o.ProtocolNotificationType('window/logMessage')),
          ((
            t.TelemetryEventNotification || (t.TelemetryEventNotification = {})
          ).type = new o.ProtocolNotificationType('telemetry/event')),
          ((te =
            t.TextDocumentSyncKind || (t.TextDocumentSyncKind = {})).None = 0),
          (te.Full = 1),
          (te.Incremental = 2),
          ((ee =
            t.DidOpenTextDocumentNotification ||
            (t.DidOpenTextDocumentNotification = {})).method =
            'textDocument/didOpen'),
          (ee.type = new o.ProtocolNotificationType(ee.method)),
          ((Q =
            t.TextDocumentContentChangeEvent ||
            (t.TextDocumentContentChangeEvent = {})).isIncremental = function (
            e
          ) {
            let t = e
            return (
              null != t &&
              'string' == typeof t.text &&
              void 0 !== t.range &&
              (void 0 === t.rangeLength || 'number' == typeof t.rangeLength)
            )
          }),
          (Q.isFull = function (e) {
            let t = e
            return (
              null != t &&
              'string' == typeof t.text &&
              void 0 === t.range &&
              void 0 === t.rangeLength
            )
          }),
          ((Y =
            t.DidChangeTextDocumentNotification ||
            (t.DidChangeTextDocumentNotification = {})).method =
            'textDocument/didChange'),
          (Y.type = new o.ProtocolNotificationType(Y.method)),
          ((Z =
            t.DidCloseTextDocumentNotification ||
            (t.DidCloseTextDocumentNotification = {})).method =
            'textDocument/didClose'),
          (Z.type = new o.ProtocolNotificationType(Z.method)),
          ((X =
            t.DidSaveTextDocumentNotification ||
            (t.DidSaveTextDocumentNotification = {})).method =
            'textDocument/didSave'),
          (X.type = new o.ProtocolNotificationType(X.method)),
          ((G =
            t.TextDocumentSaveReason ||
            (t.TextDocumentSaveReason = {})).Manual = 1),
          (G.AfterDelay = 2),
          (G.FocusOut = 3),
          ((J =
            t.WillSaveTextDocumentNotification ||
            (t.WillSaveTextDocumentNotification = {})).method =
            'textDocument/willSave'),
          (J.type = new o.ProtocolNotificationType(J.method)),
          ((K =
            t.WillSaveTextDocumentWaitUntilRequest ||
            (t.WillSaveTextDocumentWaitUntilRequest = {})).method =
            'textDocument/willSaveWaitUntil'),
          (K.type = new o.ProtocolRequestType(K.method)),
          ((
            t.DidChangeWatchedFilesNotification ||
            (t.DidChangeWatchedFilesNotification = {})
          ).type = new o.ProtocolNotificationType(
            'workspace/didChangeWatchedFiles'
          )),
          ((B = t.FileChangeType || (t.FileChangeType = {})).Created = 1),
          (B.Changed = 2),
          (B.Deleted = 3),
          ((z = t.WatchKind || (t.WatchKind = {})).Create = 1),
          (z.Change = 2),
          (z.Delete = 4),
          ((
            t.PublishDiagnosticsNotification ||
            (t.PublishDiagnosticsNotification = {})
          ).type = new o.ProtocolNotificationType(
            'textDocument/publishDiagnostics'
          )),
          ((H =
            t.CompletionTriggerKind ||
            (t.CompletionTriggerKind = {})).Invoked = 1),
          (H.TriggerCharacter = 2),
          (H.TriggerForIncompleteCompletions = 3),
          ((U = t.CompletionRequest || (t.CompletionRequest = {})).method =
            'textDocument/completion'),
          (U.type = new o.ProtocolRequestType(U.method)),
          ((V =
            t.CompletionResolveRequest ||
            (t.CompletionResolveRequest = {})).method =
            'completionItem/resolve'),
          (V.type = new o.ProtocolRequestType(V.method)),
          (($ = t.HoverRequest || (t.HoverRequest = {})).method =
            'textDocument/hover'),
          ($.type = new o.ProtocolRequestType($.method)),
          ((W =
            t.SignatureHelpTriggerKind ||
            (t.SignatureHelpTriggerKind = {})).Invoked = 1),
          (W.TriggerCharacter = 2),
          (W.ContentChange = 3),
          ((L =
            t.SignatureHelpRequest || (t.SignatureHelpRequest = {})).method =
            'textDocument/signatureHelp'),
          (L.type = new o.ProtocolRequestType(L.method)),
          ((I = t.DefinitionRequest || (t.DefinitionRequest = {})).method =
            'textDocument/definition'),
          (I.type = new o.ProtocolRequestType(I.method)),
          ((F = t.ReferencesRequest || (t.ReferencesRequest = {})).method =
            'textDocument/references'),
          (F.type = new o.ProtocolRequestType(F.method)),
          ((A =
            t.DocumentHighlightRequest ||
            (t.DocumentHighlightRequest = {})).method =
            'textDocument/documentHighlight'),
          (A.type = new o.ProtocolRequestType(A.method)),
          ((M =
            t.DocumentSymbolRequest || (t.DocumentSymbolRequest = {})).method =
            'textDocument/documentSymbol'),
          (M.type = new o.ProtocolRequestType(M.method)),
          ((j = t.CodeActionRequest || (t.CodeActionRequest = {})).method =
            'textDocument/codeAction'),
          (j.type = new o.ProtocolRequestType(j.method)),
          ((N =
            t.CodeActionResolveRequest ||
            (t.CodeActionResolveRequest = {})).method = 'codeAction/resolve'),
          (N.type = new o.ProtocolRequestType(N.method)),
          ((q =
            t.WorkspaceSymbolRequest ||
            (t.WorkspaceSymbolRequest = {})).method = 'workspace/symbol'),
          (q.type = new o.ProtocolRequestType(q.method)),
          ((E = t.CodeLensRequest || (t.CodeLensRequest = {})).method =
            'textDocument/codeLens'),
          (E.type = new o.ProtocolRequestType(E.method)),
          ((O =
            t.CodeLensResolveRequest ||
            (t.CodeLensResolveRequest = {})).method = 'codeLens/resolve'),
          (O.type = new o.ProtocolRequestType(O.method)),
          ((D =
            t.CodeLensRefreshRequest ||
            (t.CodeLensRefreshRequest = {})).method =
            'workspace/codeLens/refresh'),
          (D.type = new o.ProtocolRequestType0(D.method)),
          ((_ = t.DocumentLinkRequest || (t.DocumentLinkRequest = {})).method =
            'textDocument/documentLink'),
          (_.type = new o.ProtocolRequestType(_.method)),
          ((P =
            t.DocumentLinkResolveRequest ||
            (t.DocumentLinkResolveRequest = {})).method =
            'documentLink/resolve'),
          (P.type = new o.ProtocolRequestType(P.method)),
          ((w =
            t.DocumentFormattingRequest ||
            (t.DocumentFormattingRequest = {})).method =
            'textDocument/formatting'),
          (w.type = new o.ProtocolRequestType(w.method)),
          ((C =
            t.DocumentRangeFormattingRequest ||
            (t.DocumentRangeFormattingRequest = {})).method =
            'textDocument/rangeFormatting'),
          (C.type = new o.ProtocolRequestType(C.method)),
          ((k =
            t.DocumentOnTypeFormattingRequest ||
            (t.DocumentOnTypeFormattingRequest = {})).method =
            'textDocument/onTypeFormatting'),
          (k.type = new o.ProtocolRequestType(k.method)),
          ((
            t.PrepareSupportDefaultBehavior ||
            (t.PrepareSupportDefaultBehavior = {})
          ).Identifier = 1),
          ((x = t.RenameRequest || (t.RenameRequest = {})).method =
            'textDocument/rename'),
          (x.type = new o.ProtocolRequestType(x.method)),
          ((T =
            t.PrepareRenameRequest || (t.PrepareRenameRequest = {})).method =
            'textDocument/prepareRename'),
          (T.type = new o.ProtocolRequestType(T.method)),
          ((t.ExecuteCommandRequest || (t.ExecuteCommandRequest = {})).type =
            new o.ProtocolRequestType('workspace/executeCommand')),
          ((
            t.ApplyWorkspaceEditRequest || (t.ApplyWorkspaceEditRequest = {})
          ).type = new o.ProtocolRequestType('workspace/applyEdit'))
      },
      6305: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.LinkedEditingRangeRequest = void 0)
        const r = n(6140)
        var o
        ;((o =
          t.LinkedEditingRangeRequest ||
          (t.LinkedEditingRangeRequest = {})).method =
          'textDocument/linkedEditingRange'),
          (o.type = new r.ProtocolRequestType(o.method))
      },
      3443: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.MonikerRequest = t.MonikerKind = t.UniquenessLevel = void 0)
        const r = n(6140)
        var o, i, s
        ;((s = t.UniquenessLevel || (t.UniquenessLevel = {})).document =
          'document'),
          (s.project = 'project'),
          (s.group = 'group'),
          (s.scheme = 'scheme'),
          (s.global = 'global'),
          ((i = t.MonikerKind || (t.MonikerKind = {})).import = 'import'),
          (i.export = 'export'),
          (i.local = 'local'),
          ((o = t.MonikerRequest || (t.MonikerRequest = {})).method =
            'textDocument/moniker'),
          (o.type = new r.ProtocolRequestType(o.method))
      },
      1862: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.WorkDoneProgressCancelNotification =
            t.WorkDoneProgressCreateRequest =
            t.WorkDoneProgress =
              void 0)
        const r = n(4389),
          o = n(6140)
        var i
        ;((i = t.WorkDoneProgress || (t.WorkDoneProgress = {})).type =
          new r.ProgressType()),
          (i.is = function (e) {
            return e === i.type
          }),
          ((
            t.WorkDoneProgressCreateRequest ||
            (t.WorkDoneProgressCreateRequest = {})
          ).type = new o.ProtocolRequestType('window/workDoneProgress/create')),
          ((
            t.WorkDoneProgressCancelNotification ||
            (t.WorkDoneProgressCancelNotification = {})
          ).type = new o.ProtocolNotificationType(
            'window/workDoneProgress/cancel'
          ))
      },
      5206: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.SelectionRangeRequest = void 0)
        const r = n(6140)
        var o
        ;((o =
          t.SelectionRangeRequest || (t.SelectionRangeRequest = {})).method =
          'textDocument/selectionRange'),
          (o.type = new r.ProtocolRequestType(o.method))
      },
      9434: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.SemanticTokensRefreshRequest =
            t.SemanticTokensRangeRequest =
            t.SemanticTokensDeltaRequest =
            t.SemanticTokensRequest =
            t.SemanticTokensRegistrationType =
            t.TokenFormat =
            t.SemanticTokens =
            t.SemanticTokenModifiers =
            t.SemanticTokenTypes =
              void 0)
        const r = n(6140)
        var o, i, s, a, c, u, l
        ;((l = t.SemanticTokenTypes || (t.SemanticTokenTypes = {})).namespace =
          'namespace'),
          (l.type = 'type'),
          (l.class = 'class'),
          (l.enum = 'enum'),
          (l.interface = 'interface'),
          (l.struct = 'struct'),
          (l.typeParameter = 'typeParameter'),
          (l.parameter = 'parameter'),
          (l.variable = 'variable'),
          (l.property = 'property'),
          (l.enumMember = 'enumMember'),
          (l.event = 'event'),
          (l.function = 'function'),
          (l.method = 'method'),
          (l.macro = 'macro'),
          (l.keyword = 'keyword'),
          (l.modifier = 'modifier'),
          (l.comment = 'comment'),
          (l.string = 'string'),
          (l.number = 'number'),
          (l.regexp = 'regexp'),
          (l.operator = 'operator'),
          ((u =
            t.SemanticTokenModifiers ||
            (t.SemanticTokenModifiers = {})).declaration = 'declaration'),
          (u.definition = 'definition'),
          (u.readonly = 'readonly'),
          (u.static = 'static'),
          (u.deprecated = 'deprecated'),
          (u.abstract = 'abstract'),
          (u.async = 'async'),
          (u.modification = 'modification'),
          (u.documentation = 'documentation'),
          (u.defaultLibrary = 'defaultLibrary'),
          ((t.SemanticTokens || (t.SemanticTokens = {})).is = function (e) {
            const t = e
            return (
              void 0 !== t &&
              (void 0 === t.resultId || 'string' == typeof t.resultId) &&
              Array.isArray(t.data) &&
              (0 === t.data.length || 'number' == typeof t.data[0])
            )
          }),
          ((t.TokenFormat || (t.TokenFormat = {})).Relative = 'relative'),
          ((c =
            t.SemanticTokensRegistrationType ||
            (t.SemanticTokensRegistrationType = {})).method =
            'textDocument/semanticTokens'),
          (c.type = new r.RegistrationType(c.method)),
          ((a =
            t.SemanticTokensRequest || (t.SemanticTokensRequest = {})).method =
            'textDocument/semanticTokens/full'),
          (a.type = new r.ProtocolRequestType(a.method)),
          ((s =
            t.SemanticTokensDeltaRequest ||
            (t.SemanticTokensDeltaRequest = {})).method =
            'textDocument/semanticTokens/full/delta'),
          (s.type = new r.ProtocolRequestType(s.method)),
          ((i =
            t.SemanticTokensRangeRequest ||
            (t.SemanticTokensRangeRequest = {})).method =
            'textDocument/semanticTokens/range'),
          (i.type = new r.ProtocolRequestType(i.method)),
          ((o =
            t.SemanticTokensRefreshRequest ||
            (t.SemanticTokensRefreshRequest = {})).method =
            'workspace/semanticTokens/refresh'),
          (o.type = new r.ProtocolRequestType0(o.method))
      },
      5726: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ShowDocumentRequest = void 0)
        const r = n(6140)
        var o
        ;((o = t.ShowDocumentRequest || (t.ShowDocumentRequest = {})).method =
          'window/showDocument'),
          (o.type = new r.ProtocolRequestType(o.method))
      },
      1589: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.TypeDefinitionRequest = void 0)
        const r = n(6140)
        var o
        ;((o =
          t.TypeDefinitionRequest || (t.TypeDefinitionRequest = {})).method =
          'textDocument/typeDefinition'),
          (o.type = new r.ProtocolRequestType(o.method))
      },
      9795: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.DidChangeWorkspaceFoldersNotification = t.WorkspaceFoldersRequest =
            void 0)
        const r = n(6140)
        ;((t.WorkspaceFoldersRequest || (t.WorkspaceFoldersRequest = {})).type =
          new r.ProtocolRequestType0('workspace/workspaceFolders')),
          ((
            t.DidChangeWorkspaceFoldersNotification ||
            (t.DidChangeWorkspaceFoldersNotification = {})
          ).type = new r.ProtocolNotificationType(
            'workspace/didChangeWorkspaceFolders'
          ))
      },
      9533: (e, t) => {
        'use strict'
        function n(e) {
          return 'string' == typeof e || e instanceof String
        }
        function r(e) {
          return Array.isArray(e)
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.objectLiteral =
            t.typedArray =
            t.stringArray =
            t.array =
            t.func =
            t.error =
            t.number =
            t.string =
            t.boolean =
              void 0),
          (t.boolean = function (e) {
            return !0 === e || !1 === e
          }),
          (t.string = n),
          (t.number = function (e) {
            return 'number' == typeof e || e instanceof Number
          }),
          (t.error = function (e) {
            return e instanceof Error
          }),
          (t.func = function (e) {
            return 'function' == typeof e
          }),
          (t.array = r),
          (t.stringArray = function (e) {
            return r(e) && e.every((e) => n(e))
          }),
          (t.typedArray = function (e, t) {
            return Array.isArray(e) && e.every(t)
          }),
          (t.objectLiteral = function (e) {
            return null !== e && 'object' == typeof e
          })
      },
      273: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    })
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                'default' === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  r(t, e, n)
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.createProtocolConnection = void 0)
        const i = n(5028)
        o(n(5028), t),
          o(n(1661), t),
          (t.createProtocolConnection = function (e, t, n, r) {
            return i.createMessageConnection(e, t, n, r)
          })
      },
      6560: (e, t, n) => {
        'use strict'
        e.exports = n(273)
      },
      1674: (e, t, n) => {
        'use strict'
        var r,
          o,
          i,
          s,
          a,
          c,
          u,
          l,
          d,
          f,
          h,
          p,
          m,
          g,
          y,
          v,
          b,
          R,
          S,
          T,
          x,
          k,
          C,
          w,
          P,
          _
        n.r(t),
          n.d(t, {
            integer: () => r,
            uinteger: () => o,
            Position: () => i,
            Range: () => s,
            Location: () => a,
            LocationLink: () => c,
            Color: () => u,
            ColorInformation: () => l,
            ColorPresentation: () => d,
            FoldingRangeKind: () => f,
            FoldingRange: () => h,
            DiagnosticRelatedInformation: () => p,
            DiagnosticSeverity: () => m,
            DiagnosticTag: () => g,
            CodeDescription: () => y,
            Diagnostic: () => v,
            Command: () => b,
            TextEdit: () => R,
            ChangeAnnotation: () => S,
            ChangeAnnotationIdentifier: () => T,
            AnnotatedTextEdit: () => x,
            TextDocumentEdit: () => k,
            CreateFile: () => C,
            RenameFile: () => w,
            DeleteFile: () => P,
            WorkspaceEdit: () => _,
            WorkspaceChange: () => ae,
            TextDocumentIdentifier: () => D,
            VersionedTextDocumentIdentifier: () => O,
            OptionalVersionedTextDocumentIdentifier: () => E,
            TextDocumentItem: () => q,
            MarkupKind: () => N,
            MarkupContent: () => j,
            CompletionItemKind: () => M,
            InsertTextFormat: () => A,
            CompletionItemTag: () => F,
            InsertReplaceEdit: () => I,
            InsertTextMode: () => L,
            CompletionItem: () => W,
            CompletionList: () => $,
            MarkedString: () => V,
            Hover: () => U,
            ParameterInformation: () => H,
            SignatureInformation: () => z,
            DocumentHighlightKind: () => B,
            DocumentHighlight: () => K,
            SymbolKind: () => J,
            SymbolTag: () => G,
            SymbolInformation: () => X,
            DocumentSymbol: () => Z,
            CodeActionKind: () => Y,
            CodeActionContext: () => Q,
            CodeAction: () => ee,
            CodeLens: () => te,
            FormattingOptions: () => ne,
            DocumentLink: () => re,
            SelectionRange: () => oe,
            EOL: () => ue,
            TextDocument: () => ce,
          }),
          (function (e) {
            ;(e.MIN_VALUE = -2147483648), (e.MAX_VALUE = 2147483647)
          })(r || (r = {})),
          (function (e) {
            ;(e.MIN_VALUE = 0), (e.MAX_VALUE = 2147483647)
          })(o || (o = {})),
          (function (e) {
            ;(e.create = function (e, t) {
              return (
                e === Number.MAX_VALUE && (e = o.MAX_VALUE),
                t === Number.MAX_VALUE && (t = o.MAX_VALUE),
                { line: e, character: t }
              )
            }),
              (e.is = function (e) {
                var t = e
                return (
                  le.objectLiteral(t) &&
                  le.uinteger(t.line) &&
                  le.uinteger(t.character)
                )
              })
          })(i || (i = {})),
          (function (e) {
            ;(e.create = function (e, t, n, r) {
              if (
                le.uinteger(e) &&
                le.uinteger(t) &&
                le.uinteger(n) &&
                le.uinteger(r)
              )
                return { start: i.create(e, t), end: i.create(n, r) }
              if (i.is(e) && i.is(t)) return { start: e, end: t }
              throw new Error(
                'Range#create called with invalid arguments[' +
                  e +
                  ', ' +
                  t +
                  ', ' +
                  n +
                  ', ' +
                  r +
                  ']'
              )
            }),
              (e.is = function (e) {
                var t = e
                return le.objectLiteral(t) && i.is(t.start) && i.is(t.end)
              })
          })(s || (s = {})),
          (function (e) {
            ;(e.create = function (e, t) {
              return { uri: e, range: t }
            }),
              (e.is = function (e) {
                var t = e
                return (
                  le.defined(t) &&
                  s.is(t.range) &&
                  (le.string(t.uri) || le.undefined(t.uri))
                )
              })
          })(a || (a = {})),
          (function (e) {
            ;(e.create = function (e, t, n, r) {
              return {
                targetUri: e,
                targetRange: t,
                targetSelectionRange: n,
                originSelectionRange: r,
              }
            }),
              (e.is = function (e) {
                var t = e
                return (
                  le.defined(t) &&
                  s.is(t.targetRange) &&
                  le.string(t.targetUri) &&
                  (s.is(t.targetSelectionRange) ||
                    le.undefined(t.targetSelectionRange)) &&
                  (s.is(t.originSelectionRange) ||
                    le.undefined(t.originSelectionRange))
                )
              })
          })(c || (c = {})),
          (function (e) {
            ;(e.create = function (e, t, n, r) {
              return { red: e, green: t, blue: n, alpha: r }
            }),
              (e.is = function (e) {
                var t = e
                return (
                  le.numberRange(t.red, 0, 1) &&
                  le.numberRange(t.green, 0, 1) &&
                  le.numberRange(t.blue, 0, 1) &&
                  le.numberRange(t.alpha, 0, 1)
                )
              })
          })(u || (u = {})),
          (function (e) {
            ;(e.create = function (e, t) {
              return { range: e, color: t }
            }),
              (e.is = function (e) {
                var t = e
                return s.is(t.range) && u.is(t.color)
              })
          })(l || (l = {})),
          (function (e) {
            ;(e.create = function (e, t, n) {
              return { label: e, textEdit: t, additionalTextEdits: n }
            }),
              (e.is = function (e) {
                var t = e
                return (
                  le.string(t.label) &&
                  (le.undefined(t.textEdit) || R.is(t)) &&
                  (le.undefined(t.additionalTextEdits) ||
                    le.typedArray(t.additionalTextEdits, R.is))
                )
              })
          })(d || (d = {})),
          (function (e) {
            ;(e.Comment = 'comment'),
              (e.Imports = 'imports'),
              (e.Region = 'region')
          })(f || (f = {})),
          (function (e) {
            ;(e.create = function (e, t, n, r, o) {
              var i = { startLine: e, endLine: t }
              return (
                le.defined(n) && (i.startCharacter = n),
                le.defined(r) && (i.endCharacter = r),
                le.defined(o) && (i.kind = o),
                i
              )
            }),
              (e.is = function (e) {
                var t = e
                return (
                  le.uinteger(t.startLine) &&
                  le.uinteger(t.startLine) &&
                  (le.undefined(t.startCharacter) ||
                    le.uinteger(t.startCharacter)) &&
                  (le.undefined(t.endCharacter) ||
                    le.uinteger(t.endCharacter)) &&
                  (le.undefined(t.kind) || le.string(t.kind))
                )
              })
          })(h || (h = {})),
          (function (e) {
            ;(e.create = function (e, t) {
              return { location: e, message: t }
            }),
              (e.is = function (e) {
                var t = e
                return le.defined(t) && a.is(t.location) && le.string(t.message)
              })
          })(p || (p = {})),
          (function (e) {
            ;(e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4)
          })(m || (m = {})),
          (function (e) {
            ;(e.Unnecessary = 1), (e.Deprecated = 2)
          })(g || (g = {})),
          (function (e) {
            e.is = function (e) {
              var t = e
              return null != t && le.string(t.href)
            }
          })(y || (y = {})),
          (function (e) {
            ;(e.create = function (e, t, n, r, o, i) {
              var s = { range: e, message: t }
              return (
                le.defined(n) && (s.severity = n),
                le.defined(r) && (s.code = r),
                le.defined(o) && (s.source = o),
                le.defined(i) && (s.relatedInformation = i),
                s
              )
            }),
              (e.is = function (e) {
                var t,
                  n = e
                return (
                  le.defined(n) &&
                  s.is(n.range) &&
                  le.string(n.message) &&
                  (le.number(n.severity) || le.undefined(n.severity)) &&
                  (le.integer(n.code) ||
                    le.string(n.code) ||
                    le.undefined(n.code)) &&
                  (le.undefined(n.codeDescription) ||
                    le.string(
                      null === (t = n.codeDescription) || void 0 === t
                        ? void 0
                        : t.href
                    )) &&
                  (le.string(n.source) || le.undefined(n.source)) &&
                  (le.undefined(n.relatedInformation) ||
                    le.typedArray(n.relatedInformation, p.is))
                )
              })
          })(v || (v = {})),
          (function (e) {
            ;(e.create = function (e, t) {
              for (var n = [], r = 2; r < arguments.length; r++)
                n[r - 2] = arguments[r]
              var o = { title: e, command: t }
              return le.defined(n) && n.length > 0 && (o.arguments = n), o
            }),
              (e.is = function (e) {
                var t = e
                return (
                  le.defined(t) && le.string(t.title) && le.string(t.command)
                )
              })
          })(b || (b = {})),
          (function (e) {
            ;(e.replace = function (e, t) {
              return { range: e, newText: t }
            }),
              (e.insert = function (e, t) {
                return { range: { start: e, end: e }, newText: t }
              }),
              (e.del = function (e) {
                return { range: e, newText: '' }
              }),
              (e.is = function (e) {
                var t = e
                return (
                  le.objectLiteral(t) && le.string(t.newText) && s.is(t.range)
                )
              })
          })(R || (R = {})),
          (function (e) {
            ;(e.create = function (e, t, n) {
              var r = { label: e }
              return (
                void 0 !== t && (r.needsConfirmation = t),
                void 0 !== n && (r.description = n),
                r
              )
            }),
              (e.is = function (e) {
                var t = e
                return (
                  void 0 !== t &&
                  le.objectLiteral(t) &&
                  le.string(t.label) &&
                  (le.boolean(t.needsConfirmation) ||
                    void 0 === t.needsConfirmation) &&
                  (le.string(t.description) || void 0 === t.description)
                )
              })
          })(S || (S = {})),
          (function (e) {
            e.is = function (e) {
              return 'string' == typeof e
            }
          })(T || (T = {})),
          (function (e) {
            ;(e.replace = function (e, t, n) {
              return { range: e, newText: t, annotationId: n }
            }),
              (e.insert = function (e, t, n) {
                return {
                  range: { start: e, end: e },
                  newText: t,
                  annotationId: n,
                }
              }),
              (e.del = function (e, t) {
                return { range: e, newText: '', annotationId: t }
              }),
              (e.is = function (e) {
                var t = e
                return R.is(t) && (S.is(t.annotationId) || T.is(t.annotationId))
              })
          })(x || (x = {})),
          (function (e) {
            ;(e.create = function (e, t) {
              return { textDocument: e, edits: t }
            }),
              (e.is = function (e) {
                var t = e
                return (
                  le.defined(t) &&
                  E.is(t.textDocument) &&
                  Array.isArray(t.edits)
                )
              })
          })(k || (k = {})),
          (function (e) {
            ;(e.create = function (e, t, n) {
              var r = { kind: 'create', uri: e }
              return (
                void 0 === t ||
                  (void 0 === t.overwrite && void 0 === t.ignoreIfExists) ||
                  (r.options = t),
                void 0 !== n && (r.annotationId = n),
                r
              )
            }),
              (e.is = function (e) {
                var t = e
                return (
                  t &&
                  'create' === t.kind &&
                  le.string(t.uri) &&
                  (void 0 === t.options ||
                    ((void 0 === t.options.overwrite ||
                      le.boolean(t.options.overwrite)) &&
                      (void 0 === t.options.ignoreIfExists ||
                        le.boolean(t.options.ignoreIfExists)))) &&
                  (void 0 === t.annotationId || T.is(t.annotationId))
                )
              })
          })(C || (C = {})),
          (function (e) {
            ;(e.create = function (e, t, n, r) {
              var o = { kind: 'rename', oldUri: e, newUri: t }
              return (
                void 0 === n ||
                  (void 0 === n.overwrite && void 0 === n.ignoreIfExists) ||
                  (o.options = n),
                void 0 !== r && (o.annotationId = r),
                o
              )
            }),
              (e.is = function (e) {
                var t = e
                return (
                  t &&
                  'rename' === t.kind &&
                  le.string(t.oldUri) &&
                  le.string(t.newUri) &&
                  (void 0 === t.options ||
                    ((void 0 === t.options.overwrite ||
                      le.boolean(t.options.overwrite)) &&
                      (void 0 === t.options.ignoreIfExists ||
                        le.boolean(t.options.ignoreIfExists)))) &&
                  (void 0 === t.annotationId || T.is(t.annotationId))
                )
              })
          })(w || (w = {})),
          (function (e) {
            ;(e.create = function (e, t, n) {
              var r = { kind: 'delete', uri: e }
              return (
                void 0 === t ||
                  (void 0 === t.recursive && void 0 === t.ignoreIfNotExists) ||
                  (r.options = t),
                void 0 !== n && (r.annotationId = n),
                r
              )
            }),
              (e.is = function (e) {
                var t = e
                return (
                  t &&
                  'delete' === t.kind &&
                  le.string(t.uri) &&
                  (void 0 === t.options ||
                    ((void 0 === t.options.recursive ||
                      le.boolean(t.options.recursive)) &&
                      (void 0 === t.options.ignoreIfNotExists ||
                        le.boolean(t.options.ignoreIfNotExists)))) &&
                  (void 0 === t.annotationId || T.is(t.annotationId))
                )
              })
          })(P || (P = {})),
          (function (e) {
            e.is = function (e) {
              var t = e
              return (
                t &&
                (void 0 !== t.changes || void 0 !== t.documentChanges) &&
                (void 0 === t.documentChanges ||
                  t.documentChanges.every(function (e) {
                    return le.string(e.kind)
                      ? C.is(e) || w.is(e) || P.is(e)
                      : k.is(e)
                  }))
              )
            }
          })(_ || (_ = {}))
        var D,
          O,
          E,
          q,
          N,
          j,
          M,
          A,
          F,
          I,
          L,
          W,
          $,
          V,
          U,
          H,
          z,
          B,
          K,
          J,
          G,
          X,
          Z,
          Y,
          Q,
          ee,
          te,
          ne,
          re,
          oe,
          ie = (function () {
            function e(e, t) {
              ;(this.edits = e), (this.changeAnnotations = t)
            }
            return (
              (e.prototype.insert = function (e, t, n) {
                var r, o
                if (
                  (void 0 === n
                    ? (r = R.insert(e, t))
                    : T.is(n)
                    ? ((o = n), (r = x.insert(e, t, n)))
                    : (this.assertChangeAnnotations(this.changeAnnotations),
                      (o = this.changeAnnotations.manage(n)),
                      (r = x.insert(e, t, o))),
                  this.edits.push(r),
                  void 0 !== o)
                )
                  return o
              }),
              (e.prototype.replace = function (e, t, n) {
                var r, o
                if (
                  (void 0 === n
                    ? (r = R.replace(e, t))
                    : T.is(n)
                    ? ((o = n), (r = x.replace(e, t, n)))
                    : (this.assertChangeAnnotations(this.changeAnnotations),
                      (o = this.changeAnnotations.manage(n)),
                      (r = x.replace(e, t, o))),
                  this.edits.push(r),
                  void 0 !== o)
                )
                  return o
              }),
              (e.prototype.delete = function (e, t) {
                var n, r
                if (
                  (void 0 === t
                    ? (n = R.del(e))
                    : T.is(t)
                    ? ((r = t), (n = x.del(e, t)))
                    : (this.assertChangeAnnotations(this.changeAnnotations),
                      (r = this.changeAnnotations.manage(t)),
                      (n = x.del(e, r))),
                  this.edits.push(n),
                  void 0 !== r)
                )
                  return r
              }),
              (e.prototype.add = function (e) {
                this.edits.push(e)
              }),
              (e.prototype.all = function () {
                return this.edits
              }),
              (e.prototype.clear = function () {
                this.edits.splice(0, this.edits.length)
              }),
              (e.prototype.assertChangeAnnotations = function (e) {
                if (void 0 === e)
                  throw new Error(
                    'Text edit change is not configured to manage change annotations.'
                  )
              }),
              e
            )
          })(),
          se = (function () {
            function e(e) {
              ;(this._annotations = void 0 === e ? Object.create(null) : e),
                (this._counter = 0),
                (this._size = 0)
            }
            return (
              (e.prototype.all = function () {
                return this._annotations
              }),
              Object.defineProperty(e.prototype, 'size', {
                get: function () {
                  return this._size
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.manage = function (e, t) {
                var n
                if (
                  (T.is(e) ? (n = e) : ((n = this.nextId()), (t = e)),
                  void 0 !== this._annotations[n])
                )
                  throw new Error('Id ' + n + ' is already in use.')
                if (void 0 === t)
                  throw new Error('No annotation provided for id ' + n)
                return (this._annotations[n] = t), this._size++, n
              }),
              (e.prototype.nextId = function () {
                return this._counter++, this._counter.toString()
              }),
              e
            )
          })(),
          ae = (function () {
            function e(e) {
              var t = this
              ;(this._textEditChanges = Object.create(null)),
                void 0 !== e
                  ? ((this._workspaceEdit = e),
                    e.documentChanges
                      ? ((this._changeAnnotations = new se(
                          e.changeAnnotations
                        )),
                        (e.changeAnnotations = this._changeAnnotations.all()),
                        e.documentChanges.forEach(function (e) {
                          if (k.is(e)) {
                            var n = new ie(e.edits, t._changeAnnotations)
                            t._textEditChanges[e.textDocument.uri] = n
                          }
                        }))
                      : e.changes &&
                        Object.keys(e.changes).forEach(function (n) {
                          var r = new ie(e.changes[n])
                          t._textEditChanges[n] = r
                        }))
                  : (this._workspaceEdit = {})
            }
            return (
              Object.defineProperty(e.prototype, 'edit', {
                get: function () {
                  return (
                    this.initDocumentChanges(),
                    void 0 !== this._changeAnnotations &&
                      (0 === this._changeAnnotations.size
                        ? (this._workspaceEdit.changeAnnotations = void 0)
                        : (this._workspaceEdit.changeAnnotations =
                            this._changeAnnotations.all())),
                    this._workspaceEdit
                  )
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.getTextEditChange = function (e) {
                if (E.is(e)) {
                  if (
                    (this.initDocumentChanges(),
                    void 0 === this._workspaceEdit.documentChanges)
                  )
                    throw new Error(
                      'Workspace edit is not configured for document changes.'
                    )
                  var t = { uri: e.uri, version: e.version }
                  if (!(r = this._textEditChanges[t.uri])) {
                    var n = { textDocument: t, edits: (o = []) }
                    this._workspaceEdit.documentChanges.push(n),
                      (r = new ie(o, this._changeAnnotations)),
                      (this._textEditChanges[t.uri] = r)
                  }
                  return r
                }
                if (
                  (this.initChanges(), void 0 === this._workspaceEdit.changes)
                )
                  throw new Error(
                    'Workspace edit is not configured for normal text edit changes.'
                  )
                var r
                if (!(r = this._textEditChanges[e])) {
                  var o = []
                  ;(this._workspaceEdit.changes[e] = o),
                    (r = new ie(o)),
                    (this._textEditChanges[e] = r)
                }
                return r
              }),
              (e.prototype.initDocumentChanges = function () {
                void 0 === this._workspaceEdit.documentChanges &&
                  void 0 === this._workspaceEdit.changes &&
                  ((this._changeAnnotations = new se()),
                  (this._workspaceEdit.documentChanges = []),
                  (this._workspaceEdit.changeAnnotations =
                    this._changeAnnotations.all()))
              }),
              (e.prototype.initChanges = function () {
                void 0 === this._workspaceEdit.documentChanges &&
                  void 0 === this._workspaceEdit.changes &&
                  (this._workspaceEdit.changes = Object.create(null))
              }),
              (e.prototype.createFile = function (e, t, n) {
                if (
                  (this.initDocumentChanges(),
                  void 0 === this._workspaceEdit.documentChanges)
                )
                  throw new Error(
                    'Workspace edit is not configured for document changes.'
                  )
                var r, o, i
                if (
                  (S.is(t) || T.is(t) ? (r = t) : (n = t),
                  void 0 === r
                    ? (o = C.create(e, n))
                    : ((i = T.is(r) ? r : this._changeAnnotations.manage(r)),
                      (o = C.create(e, n, i))),
                  this._workspaceEdit.documentChanges.push(o),
                  void 0 !== i)
                )
                  return i
              }),
              (e.prototype.renameFile = function (e, t, n, r) {
                if (
                  (this.initDocumentChanges(),
                  void 0 === this._workspaceEdit.documentChanges)
                )
                  throw new Error(
                    'Workspace edit is not configured for document changes.'
                  )
                var o, i, s
                if (
                  (S.is(n) || T.is(n) ? (o = n) : (r = n),
                  void 0 === o
                    ? (i = w.create(e, t, r))
                    : ((s = T.is(o) ? o : this._changeAnnotations.manage(o)),
                      (i = w.create(e, t, r, s))),
                  this._workspaceEdit.documentChanges.push(i),
                  void 0 !== s)
                )
                  return s
              }),
              (e.prototype.deleteFile = function (e, t, n) {
                if (
                  (this.initDocumentChanges(),
                  void 0 === this._workspaceEdit.documentChanges)
                )
                  throw new Error(
                    'Workspace edit is not configured for document changes.'
                  )
                var r, o, i
                if (
                  (S.is(t) || T.is(t) ? (r = t) : (n = t),
                  void 0 === r
                    ? (o = P.create(e, n))
                    : ((i = T.is(r) ? r : this._changeAnnotations.manage(r)),
                      (o = P.create(e, n, i))),
                  this._workspaceEdit.documentChanges.push(o),
                  void 0 !== i)
                )
                  return i
              }),
              e
            )
          })()
        !(function (e) {
          ;(e.create = function (e) {
            return { uri: e }
          }),
            (e.is = function (e) {
              var t = e
              return le.defined(t) && le.string(t.uri)
            })
        })(D || (D = {})),
          (function (e) {
            ;(e.create = function (e, t) {
              return { uri: e, version: t }
            }),
              (e.is = function (e) {
                var t = e
                return (
                  le.defined(t) && le.string(t.uri) && le.integer(t.version)
                )
              })
          })(O || (O = {})),
          (function (e) {
            ;(e.create = function (e, t) {
              return { uri: e, version: t }
            }),
              (e.is = function (e) {
                var t = e
                return (
                  le.defined(t) &&
                  le.string(t.uri) &&
                  (null === t.version || le.integer(t.version))
                )
              })
          })(E || (E = {})),
          (function (e) {
            ;(e.create = function (e, t, n, r) {
              return { uri: e, languageId: t, version: n, text: r }
            }),
              (e.is = function (e) {
                var t = e
                return (
                  le.defined(t) &&
                  le.string(t.uri) &&
                  le.string(t.languageId) &&
                  le.integer(t.version) &&
                  le.string(t.text)
                )
              })
          })(q || (q = {})),
          (function (e) {
            ;(e.PlainText = 'plaintext'), (e.Markdown = 'markdown')
          })(N || (N = {})),
          (function (e) {
            e.is = function (t) {
              var n = t
              return n === e.PlainText || n === e.Markdown
            }
          })(N || (N = {})),
          (function (e) {
            e.is = function (e) {
              var t = e
              return le.objectLiteral(e) && N.is(t.kind) && le.string(t.value)
            }
          })(j || (j = {})),
          (function (e) {
            ;(e.Text = 1),
              (e.Method = 2),
              (e.Function = 3),
              (e.Constructor = 4),
              (e.Field = 5),
              (e.Variable = 6),
              (e.Class = 7),
              (e.Interface = 8),
              (e.Module = 9),
              (e.Property = 10),
              (e.Unit = 11),
              (e.Value = 12),
              (e.Enum = 13),
              (e.Keyword = 14),
              (e.Snippet = 15),
              (e.Color = 16),
              (e.File = 17),
              (e.Reference = 18),
              (e.Folder = 19),
              (e.EnumMember = 20),
              (e.Constant = 21),
              (e.Struct = 22),
              (e.Event = 23),
              (e.Operator = 24),
              (e.TypeParameter = 25)
          })(M || (M = {})),
          (function (e) {
            ;(e.PlainText = 1), (e.Snippet = 2)
          })(A || (A = {})),
          (function (e) {
            e.Deprecated = 1
          })(F || (F = {})),
          (function (e) {
            ;(e.create = function (e, t, n) {
              return { newText: e, insert: t, replace: n }
            }),
              (e.is = function (e) {
                var t = e
                return (
                  t && le.string(t.newText) && s.is(t.insert) && s.is(t.replace)
                )
              })
          })(I || (I = {})),
          (function (e) {
            ;(e.asIs = 1), (e.adjustIndentation = 2)
          })(L || (L = {})),
          (function (e) {
            e.create = function (e) {
              return { label: e }
            }
          })(W || (W = {})),
          (function (e) {
            e.create = function (e, t) {
              return { items: e || [], isIncomplete: !!t }
            }
          })($ || ($ = {})),
          (function (e) {
            ;(e.fromPlainText = function (e) {
              return e.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&')
            }),
              (e.is = function (e) {
                var t = e
                return (
                  le.string(t) ||
                  (le.objectLiteral(t) &&
                    le.string(t.language) &&
                    le.string(t.value))
                )
              })
          })(V || (V = {})),
          (function (e) {
            e.is = function (e) {
              var t = e
              return (
                !!t &&
                le.objectLiteral(t) &&
                (j.is(t.contents) ||
                  V.is(t.contents) ||
                  le.typedArray(t.contents, V.is)) &&
                (void 0 === e.range || s.is(e.range))
              )
            }
          })(U || (U = {})),
          (function (e) {
            e.create = function (e, t) {
              return t ? { label: e, documentation: t } : { label: e }
            }
          })(H || (H = {})),
          (function (e) {
            e.create = function (e, t) {
              for (var n = [], r = 2; r < arguments.length; r++)
                n[r - 2] = arguments[r]
              var o = { label: e }
              return (
                le.defined(t) && (o.documentation = t),
                le.defined(n) ? (o.parameters = n) : (o.parameters = []),
                o
              )
            }
          })(z || (z = {})),
          (function (e) {
            ;(e.Text = 1), (e.Read = 2), (e.Write = 3)
          })(B || (B = {})),
          (function (e) {
            e.create = function (e, t) {
              var n = { range: e }
              return le.number(t) && (n.kind = t), n
            }
          })(K || (K = {})),
          (function (e) {
            ;(e.File = 1),
              (e.Module = 2),
              (e.Namespace = 3),
              (e.Package = 4),
              (e.Class = 5),
              (e.Method = 6),
              (e.Property = 7),
              (e.Field = 8),
              (e.Constructor = 9),
              (e.Enum = 10),
              (e.Interface = 11),
              (e.Function = 12),
              (e.Variable = 13),
              (e.Constant = 14),
              (e.String = 15),
              (e.Number = 16),
              (e.Boolean = 17),
              (e.Array = 18),
              (e.Object = 19),
              (e.Key = 20),
              (e.Null = 21),
              (e.EnumMember = 22),
              (e.Struct = 23),
              (e.Event = 24),
              (e.Operator = 25),
              (e.TypeParameter = 26)
          })(J || (J = {})),
          (function (e) {
            e.Deprecated = 1
          })(G || (G = {})),
          (function (e) {
            e.create = function (e, t, n, r, o) {
              var i = { name: e, kind: t, location: { uri: r, range: n } }
              return o && (i.containerName = o), i
            }
          })(X || (X = {})),
          (function (e) {
            ;(e.create = function (e, t, n, r, o, i) {
              var s = {
                name: e,
                detail: t,
                kind: n,
                range: r,
                selectionRange: o,
              }
              return void 0 !== i && (s.children = i), s
            }),
              (e.is = function (e) {
                var t = e
                return (
                  t &&
                  le.string(t.name) &&
                  le.number(t.kind) &&
                  s.is(t.range) &&
                  s.is(t.selectionRange) &&
                  (void 0 === t.detail || le.string(t.detail)) &&
                  (void 0 === t.deprecated || le.boolean(t.deprecated)) &&
                  (void 0 === t.children || Array.isArray(t.children)) &&
                  (void 0 === t.tags || Array.isArray(t.tags))
                )
              })
          })(Z || (Z = {})),
          (function (e) {
            ;(e.Empty = ''),
              (e.QuickFix = 'quickfix'),
              (e.Refactor = 'refactor'),
              (e.RefactorExtract = 'refactor.extract'),
              (e.RefactorInline = 'refactor.inline'),
              (e.RefactorRewrite = 'refactor.rewrite'),
              (e.Source = 'source'),
              (e.SourceOrganizeImports = 'source.organizeImports'),
              (e.SourceFixAll = 'source.fixAll')
          })(Y || (Y = {})),
          (function (e) {
            ;(e.create = function (e, t) {
              var n = { diagnostics: e }
              return null != t && (n.only = t), n
            }),
              (e.is = function (e) {
                var t = e
                return (
                  le.defined(t) &&
                  le.typedArray(t.diagnostics, v.is) &&
                  (void 0 === t.only || le.typedArray(t.only, le.string))
                )
              })
          })(Q || (Q = {})),
          (function (e) {
            ;(e.create = function (e, t, n) {
              var r = { title: e },
                o = !0
              return (
                'string' == typeof t
                  ? ((o = !1), (r.kind = t))
                  : b.is(t)
                  ? (r.command = t)
                  : (r.edit = t),
                o && void 0 !== n && (r.kind = n),
                r
              )
            }),
              (e.is = function (e) {
                var t = e
                return (
                  t &&
                  le.string(t.title) &&
                  (void 0 === t.diagnostics ||
                    le.typedArray(t.diagnostics, v.is)) &&
                  (void 0 === t.kind || le.string(t.kind)) &&
                  (void 0 !== t.edit || void 0 !== t.command) &&
                  (void 0 === t.command || b.is(t.command)) &&
                  (void 0 === t.isPreferred || le.boolean(t.isPreferred)) &&
                  (void 0 === t.edit || _.is(t.edit))
                )
              })
          })(ee || (ee = {})),
          (function (e) {
            ;(e.create = function (e, t) {
              var n = { range: e }
              return le.defined(t) && (n.data = t), n
            }),
              (e.is = function (e) {
                var t = e
                return (
                  le.defined(t) &&
                  s.is(t.range) &&
                  (le.undefined(t.command) || b.is(t.command))
                )
              })
          })(te || (te = {})),
          (function (e) {
            ;(e.create = function (e, t) {
              return { tabSize: e, insertSpaces: t }
            }),
              (e.is = function (e) {
                var t = e
                return (
                  le.defined(t) &&
                  le.uinteger(t.tabSize) &&
                  le.boolean(t.insertSpaces)
                )
              })
          })(ne || (ne = {})),
          (function (e) {
            ;(e.create = function (e, t, n) {
              return { range: e, target: t, data: n }
            }),
              (e.is = function (e) {
                var t = e
                return (
                  le.defined(t) &&
                  s.is(t.range) &&
                  (le.undefined(t.target) || le.string(t.target))
                )
              })
          })(re || (re = {})),
          (function (e) {
            ;(e.create = function (e, t) {
              return { range: e, parent: t }
            }),
              (e.is = function (t) {
                var n = t
                return (
                  void 0 !== n &&
                  s.is(n.range) &&
                  (void 0 === n.parent || e.is(n.parent))
                )
              })
          })(oe || (oe = {}))
        var ce,
          ue = ['\n', '\r\n', '\r']
        !(function (e) {
          function t(e, n) {
            if (e.length <= 1) return e
            var r = (e.length / 2) | 0,
              o = e.slice(0, r),
              i = e.slice(r)
            t(o, n), t(i, n)
            for (var s = 0, a = 0, c = 0; s < o.length && a < i.length; ) {
              var u = n(o[s], i[a])
              e[c++] = u <= 0 ? o[s++] : i[a++]
            }
            for (; s < o.length; ) e[c++] = o[s++]
            for (; a < i.length; ) e[c++] = i[a++]
            return e
          }
          ;(e.create = function (e, t, n, r) {
            return new de(e, t, n, r)
          }),
            (e.is = function (e) {
              var t = e
              return !!(
                le.defined(t) &&
                le.string(t.uri) &&
                (le.undefined(t.languageId) || le.string(t.languageId)) &&
                le.uinteger(t.lineCount) &&
                le.func(t.getText) &&
                le.func(t.positionAt) &&
                le.func(t.offsetAt)
              )
            }),
            (e.applyEdits = function (e, n) {
              for (
                var r = e.getText(),
                  o = t(n, function (e, t) {
                    var n = e.range.start.line - t.range.start.line
                    return 0 === n
                      ? e.range.start.character - t.range.start.character
                      : n
                  }),
                  i = r.length,
                  s = o.length - 1;
                s >= 0;
                s--
              ) {
                var a = o[s],
                  c = e.offsetAt(a.range.start),
                  u = e.offsetAt(a.range.end)
                if (!(u <= i)) throw new Error('Overlapping edit')
                ;(r = r.substring(0, c) + a.newText + r.substring(u, r.length)),
                  (i = c)
              }
              return r
            })
        })(ce || (ce = {}))
        var le,
          de = (function () {
            function e(e, t, n, r) {
              ;(this._uri = e),
                (this._languageId = t),
                (this._version = n),
                (this._content = r),
                (this._lineOffsets = void 0)
            }
            return (
              Object.defineProperty(e.prototype, 'uri', {
                get: function () {
                  return this._uri
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'languageId', {
                get: function () {
                  return this._languageId
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'version', {
                get: function () {
                  return this._version
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.getText = function (e) {
                if (e) {
                  var t = this.offsetAt(e.start),
                    n = this.offsetAt(e.end)
                  return this._content.substring(t, n)
                }
                return this._content
              }),
              (e.prototype.update = function (e, t) {
                ;(this._content = e.text),
                  (this._version = t),
                  (this._lineOffsets = void 0)
              }),
              (e.prototype.getLineOffsets = function () {
                if (void 0 === this._lineOffsets) {
                  for (
                    var e = [], t = this._content, n = !0, r = 0;
                    r < t.length;
                    r++
                  ) {
                    n && (e.push(r), (n = !1))
                    var o = t.charAt(r)
                    ;(n = '\r' === o || '\n' === o),
                      '\r' === o &&
                        r + 1 < t.length &&
                        '\n' === t.charAt(r + 1) &&
                        r++
                  }
                  n && t.length > 0 && e.push(t.length), (this._lineOffsets = e)
                }
                return this._lineOffsets
              }),
              (e.prototype.positionAt = function (e) {
                e = Math.max(Math.min(e, this._content.length), 0)
                var t = this.getLineOffsets(),
                  n = 0,
                  r = t.length
                if (0 === r) return i.create(0, e)
                for (; n < r; ) {
                  var o = Math.floor((n + r) / 2)
                  t[o] > e ? (r = o) : (n = o + 1)
                }
                var s = n - 1
                return i.create(s, e - t[s])
              }),
              (e.prototype.offsetAt = function (e) {
                var t = this.getLineOffsets()
                if (e.line >= t.length) return this._content.length
                if (e.line < 0) return 0
                var n = t[e.line],
                  r =
                    e.line + 1 < t.length ? t[e.line + 1] : this._content.length
                return Math.max(Math.min(n + e.character, r), n)
              }),
              Object.defineProperty(e.prototype, 'lineCount', {
                get: function () {
                  return this.getLineOffsets().length
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            )
          })()
        !(function (e) {
          var t = Object.prototype.toString
          ;(e.defined = function (e) {
            return void 0 !== e
          }),
            (e.undefined = function (e) {
              return void 0 === e
            }),
            (e.boolean = function (e) {
              return !0 === e || !1 === e
            }),
            (e.string = function (e) {
              return '[object String]' === t.call(e)
            }),
            (e.number = function (e) {
              return '[object Number]' === t.call(e)
            }),
            (e.numberRange = function (e, n, r) {
              return '[object Number]' === t.call(e) && n <= e && e <= r
            }),
            (e.integer = function (e) {
              return (
                '[object Number]' === t.call(e) &&
                -2147483648 <= e &&
                e <= 2147483647
              )
            }),
            (e.uinteger = function (e) {
              return (
                '[object Number]' === t.call(e) && 0 <= e && e <= 2147483647
              )
            }),
            (e.func = function (e) {
              return '[object Function]' === t.call(e)
            }),
            (e.objectLiteral = function (e) {
              return null !== e && 'object' == typeof e
            }),
            (e.typedArray = function (e, t) {
              return Array.isArray(e) && e.every(t)
            })
        })(le || (le = {}))
      },
      6265: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    })
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                'default' === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  r(t, e, n)
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ProposedFeatures = t.SemanticTokensBuilder = void 0)
        const i = n(9817)
        Object.defineProperty(t, 'SemanticTokensBuilder', {
          enumerable: !0,
          get: function () {
            return i.SemanticTokensBuilder
          },
        }),
          o(n(273), t),
          o(n(9891), t),
          ((t.ProposedFeatures || (t.ProposedFeatures = {})).all = {
            __brand: 'features',
          })
      },
      7985: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.CallHierarchyFeature = void 0)
        const r = n(273)
        t.CallHierarchyFeature = (e) =>
          class extends e {
            get callHierarchy() {
              return {
                onPrepare: (e) => {
                  this.connection.onRequest(
                    r.CallHierarchyPrepareRequest.type,
                    (t, n) => e(t, n, this.attachWorkDoneProgress(t), void 0)
                  )
                },
                onIncomingCalls: (e) => {
                  const t = r.CallHierarchyIncomingCallsRequest.type
                  this.connection.onRequest(t, (n, r) =>
                    e(
                      n,
                      r,
                      this.attachWorkDoneProgress(n),
                      this.attachPartialResultProgress(t, n)
                    )
                  )
                },
                onOutgoingCalls: (e) => {
                  const t = r.CallHierarchyOutgoingCallsRequest.type
                  this.connection.onRequest(t, (n, r) =>
                    e(
                      n,
                      r,
                      this.attachWorkDoneProgress(n),
                      this.attachPartialResultProgress(t, n)
                    )
                  )
                },
              }
            }
          }
      },
      2507: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ConfigurationFeature = void 0)
        const r = n(273),
          o = n(289)
        t.ConfigurationFeature = (e) =>
          class extends e {
            getConfiguration(e) {
              return e
                ? o.string(e)
                  ? this._getConfiguration({ section: e })
                  : this._getConfiguration(e)
                : this._getConfiguration({})
            }
            _getConfiguration(e) {
              let t = { items: Array.isArray(e) ? e : [e] }
              return this.connection
                .sendRequest(r.ConfigurationRequest.type, t)
                .then((t) => (Array.isArray(e) ? t : t[0]))
            }
          }
      },
      828: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.FileOperationsFeature = void 0)
        const r = n(273)
        t.FileOperationsFeature = (e) =>
          class extends e {
            onDidCreateFiles(e) {
              this.connection.onNotification(
                r.DidCreateFilesNotification.type,
                (t) => {
                  e(t)
                }
              )
            }
            onDidRenameFiles(e) {
              this.connection.onNotification(
                r.DidRenameFilesNotification.type,
                (t) => {
                  e(t)
                }
              )
            }
            onDidDeleteFiles(e) {
              this.connection.onNotification(
                r.DidDeleteFilesNotification.type,
                (t) => {
                  e(t)
                }
              )
            }
            onWillCreateFiles(e) {
              return this.connection.onRequest(
                r.WillCreateFilesRequest.type,
                (t, n) => e(t, n)
              )
            }
            onWillRenameFiles(e) {
              return this.connection.onRequest(
                r.WillRenameFilesRequest.type,
                (t, n) => e(t, n)
              )
            }
            onWillDeleteFiles(e) {
              return this.connection.onRequest(
                r.WillDeleteFilesRequest.type,
                (t, n) => e(t, n)
              )
            }
          }
      },
      2776: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.LinkedEditingRangeFeature = void 0)
        const r = n(273)
        t.LinkedEditingRangeFeature = (e) =>
          class extends e {
            onLinkedEditingRange(e) {
              this.connection.onRequest(
                r.LinkedEditingRangeRequest.type,
                (t, n) => e(t, n, this.attachWorkDoneProgress(t), void 0)
              )
            }
          }
      },
      8120: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.MonikerFeature = void 0)
        const r = n(273)
        t.MonikerFeature = (e) =>
          class extends e {
            get moniker() {
              return {
                on: (e) => {
                  const t = r.MonikerRequest.type
                  this.connection.onRequest(t, (n, r) =>
                    e(
                      n,
                      r,
                      this.attachWorkDoneProgress(n),
                      this.attachPartialResultProgress(t, n)
                    )
                  )
                },
              }
            }
          }
      },
      2731: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.attachPartialResult =
            t.ProgressFeature =
            t.attachWorkDone =
              void 0)
        const r = n(273),
          o = n(7560)
        class i {
          constructor(e, t) {
            ;(this._connection = e),
              (this._token = t),
              i.Instances.set(this._token, this)
          }
          begin(e, t, n, o) {
            let i = {
              kind: 'begin',
              title: e,
              percentage: t,
              message: n,
              cancellable: o,
            }
            this._connection.sendProgress(
              r.WorkDoneProgress.type,
              this._token,
              i
            )
          }
          report(e, t) {
            let n = { kind: 'report' }
            'number' == typeof e
              ? ((n.percentage = e), void 0 !== t && (n.message = t))
              : (n.message = e),
              this._connection.sendProgress(
                r.WorkDoneProgress.type,
                this._token,
                n
              )
          }
          done() {
            i.Instances.delete(this._token),
              this._connection.sendProgress(
                r.WorkDoneProgress.type,
                this._token,
                { kind: 'end' }
              )
          }
        }
        i.Instances = new Map()
        class s extends i {
          constructor(e, t) {
            super(e, t), (this._source = new r.CancellationTokenSource())
          }
          get token() {
            return this._source.token
          }
          done() {
            this._source.dispose(), super.done()
          }
          cancel() {
            this._source.cancel()
          }
        }
        class a {
          constructor() {}
          begin() {}
          report() {}
          done() {}
        }
        class c extends a {
          constructor() {
            super(), (this._source = new r.CancellationTokenSource())
          }
          get token() {
            return this._source.token
          }
          done() {
            this._source.dispose()
          }
          cancel() {
            this._source.cancel()
          }
        }
        var u
        ;(t.attachWorkDone = function (e, t) {
          if (void 0 === t || void 0 === t.workDoneToken) return new a()
          const n = t.workDoneToken
          return delete t.workDoneToken, new i(e, n)
        }),
          (t.ProgressFeature = (e) =>
            class extends e {
              constructor() {
                super(), (this._progressSupported = !1)
              }
              initialize(e) {
                var t
                !0 ===
                  (null === (t = null == e ? void 0 : e.window) || void 0 === t
                    ? void 0
                    : t.workDoneProgress) &&
                  ((this._progressSupported = !0),
                  this.connection.onNotification(
                    r.WorkDoneProgressCancelNotification.type,
                    (e) => {
                      let t = i.Instances.get(e.token)
                      ;(t instanceof s || t instanceof c) && t.cancel()
                    }
                  ))
              }
              attachWorkDoneProgress(e) {
                return void 0 === e ? new a() : new i(this.connection, e)
              }
              createWorkDoneProgress() {
                if (this._progressSupported) {
                  const e = o.generateUuid()
                  return this.connection
                    .sendRequest(r.WorkDoneProgressCreateRequest.type, {
                      token: e,
                    })
                    .then(() => new s(this.connection, e))
                }
                return Promise.resolve(new c())
              }
            }),
          (function (e) {
            e.type = new r.ProgressType()
          })(u || (u = {}))
        class l {
          constructor(e, t) {
            ;(this._connection = e), (this._token = t)
          }
          report(e) {
            this._connection.sendProgress(u.type, this._token, e)
          }
        }
        t.attachPartialResult = function (e, t) {
          if (void 0 === t || void 0 === t.partialResultToken) return
          const n = t.partialResultToken
          return delete t.partialResultToken, new l(e, n)
        }
      },
      9817: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.SemanticTokensBuilder = t.SemanticTokensFeature = void 0)
        const r = n(273)
        ;(t.SemanticTokensFeature = (e) =>
          class extends e {
            get semanticTokens() {
              return {
                on: (e) => {
                  const t = r.SemanticTokensRequest.type
                  this.connection.onRequest(t, (n, r) =>
                    e(
                      n,
                      r,
                      this.attachWorkDoneProgress(n),
                      this.attachPartialResultProgress(t, n)
                    )
                  )
                },
                onDelta: (e) => {
                  const t = r.SemanticTokensDeltaRequest.type
                  this.connection.onRequest(t, (n, r) =>
                    e(
                      n,
                      r,
                      this.attachWorkDoneProgress(n),
                      this.attachPartialResultProgress(t, n)
                    )
                  )
                },
                onRange: (e) => {
                  const t = r.SemanticTokensRangeRequest.type
                  this.connection.onRequest(t, (n, r) =>
                    e(
                      n,
                      r,
                      this.attachWorkDoneProgress(n),
                      this.attachPartialResultProgress(t, n)
                    )
                  )
                },
              }
            }
          }),
          (t.SemanticTokensBuilder = class {
            constructor() {
              ;(this._prevData = void 0), this.initialize()
            }
            initialize() {
              ;(this._id = Date.now()),
                (this._prevLine = 0),
                (this._prevChar = 0),
                (this._data = []),
                (this._dataLen = 0)
            }
            push(e, t, n, r, o) {
              let i = e,
                s = t
              this._dataLen > 0 &&
                ((i -= this._prevLine), 0 === i && (s -= this._prevChar)),
                (this._data[this._dataLen++] = i),
                (this._data[this._dataLen++] = s),
                (this._data[this._dataLen++] = n),
                (this._data[this._dataLen++] = r),
                (this._data[this._dataLen++] = o),
                (this._prevLine = e),
                (this._prevChar = t)
            }
            get id() {
              return this._id.toString()
            }
            previousResult(e) {
              this.id === e && (this._prevData = this._data), this.initialize()
            }
            build() {
              return (
                (this._prevData = void 0),
                { resultId: this.id, data: this._data }
              )
            }
            canBuildEdits() {
              return void 0 !== this._prevData
            }
            buildEdits() {
              if (void 0 !== this._prevData) {
                const e = this._prevData.length,
                  t = this._data.length
                let n = 0
                for (; n < t && n < e && this._prevData[n] === this._data[n]; )
                  n++
                if (n < t && n < e) {
                  let r = 0
                  for (
                    ;
                    r < t &&
                    r < e &&
                    this._prevData[e - 1 - r] === this._data[t - 1 - r];

                  )
                    r++
                  const o = this._data.slice(n, t - r)
                  return {
                    resultId: this.id,
                    edits: [{ start: n, deleteCount: e - r - n, data: o }],
                  }
                }
                return n < t
                  ? {
                      resultId: this.id,
                      edits: [
                        { start: n, deleteCount: 0, data: this._data.slice(n) },
                      ],
                    }
                  : n < e
                  ? {
                      resultId: this.id,
                      edits: [{ start: n, deleteCount: e - n }],
                    }
                  : { resultId: this.id, edits: [] }
              }
              return this.build()
            }
          })
      },
      9891: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.createConnection =
            t.combineFeatures =
            t.combineLanguagesFeatures =
            t.combineWorkspaceFeatures =
            t.combineWindowFeatures =
            t.combineClientFeatures =
            t.combineTracerFeatures =
            t.combineTelemetryFeatures =
            t.combineConsoleFeatures =
            t._LanguagesImpl =
            t.BulkUnregistration =
            t.BulkRegistration =
            t.ErrorMessageTracker =
            t.TextDocuments =
              void 0)
        const r = n(273),
          o = n(289),
          i = n(7560),
          s = n(2731),
          a = n(2507),
          c = n(8634),
          u = n(7985),
          l = n(9817),
          d = n(5421),
          f = n(828),
          h = n(2776),
          p = n(8120)
        function m(e) {
          if (null !== e) return e
        }
        ;(t.TextDocuments = class {
          constructor(e) {
            ;(this._documents = Object.create(null)),
              (this._configuration = e),
              (this._onDidChangeContent = new r.Emitter()),
              (this._onDidOpen = new r.Emitter()),
              (this._onDidClose = new r.Emitter()),
              (this._onDidSave = new r.Emitter()),
              (this._onWillSave = new r.Emitter())
          }
          get onDidChangeContent() {
            return this._onDidChangeContent.event
          }
          get onDidOpen() {
            return this._onDidOpen.event
          }
          get onWillSave() {
            return this._onWillSave.event
          }
          onWillSaveWaitUntil(e) {
            this._willSaveWaitUntil = e
          }
          get onDidSave() {
            return this._onDidSave.event
          }
          get onDidClose() {
            return this._onDidClose.event
          }
          get(e) {
            return this._documents[e]
          }
          all() {
            return Object.keys(this._documents).map((e) => this._documents[e])
          }
          keys() {
            return Object.keys(this._documents)
          }
          listen(e) {
            ;(e.__textDocumentSync = r.TextDocumentSyncKind.Full),
              e.onDidOpenTextDocument((e) => {
                let t = e.textDocument,
                  n = this._configuration.create(
                    t.uri,
                    t.languageId,
                    t.version,
                    t.text
                  )
                this._documents[t.uri] = n
                let r = Object.freeze({ document: n })
                this._onDidOpen.fire(r), this._onDidChangeContent.fire(r)
              }),
              e.onDidChangeTextDocument((e) => {
                let t = e.textDocument,
                  n = e.contentChanges
                if (0 === n.length) return
                let r = this._documents[t.uri]
                const { version: o } = t
                if (null == o)
                  throw new Error(
                    `Received document change event for ${t.uri} without valid version identifier`
                  )
                ;(r = this._configuration.update(r, n, o)),
                  (this._documents[t.uri] = r),
                  this._onDidChangeContent.fire(Object.freeze({ document: r }))
              }),
              e.onDidCloseTextDocument((e) => {
                let t = this._documents[e.textDocument.uri]
                t &&
                  (delete this._documents[e.textDocument.uri],
                  this._onDidClose.fire(Object.freeze({ document: t })))
              }),
              e.onWillSaveTextDocument((e) => {
                let t = this._documents[e.textDocument.uri]
                t &&
                  this._onWillSave.fire(
                    Object.freeze({ document: t, reason: e.reason })
                  )
              }),
              e.onWillSaveTextDocumentWaitUntil((e, t) => {
                let n = this._documents[e.textDocument.uri]
                return n && this._willSaveWaitUntil
                  ? this._willSaveWaitUntil(
                      Object.freeze({ document: n, reason: e.reason }),
                      t
                    )
                  : []
              }),
              e.onDidSaveTextDocument((e) => {
                let t = this._documents[e.textDocument.uri]
                t && this._onDidSave.fire(Object.freeze({ document: t }))
              })
          }
        }),
          (t.ErrorMessageTracker = class {
            constructor() {
              this._messages = Object.create(null)
            }
            add(e) {
              let t = this._messages[e]
              t || (t = 0), t++, (this._messages[e] = t)
            }
            sendErrors(e) {
              Object.keys(this._messages).forEach((t) => {
                e.window.showErrorMessage(t)
              })
            }
          })
        class g {
          constructor() {}
          rawAttach(e) {
            this._rawConnection = e
          }
          attach(e) {
            this._connection = e
          }
          get connection() {
            if (!this._connection)
              throw new Error('Remote is not attached to a connection yet.')
            return this._connection
          }
          fillServerCapabilities(e) {}
          initialize(e) {}
          error(e) {
            this.send(r.MessageType.Error, e)
          }
          warn(e) {
            this.send(r.MessageType.Warning, e)
          }
          info(e) {
            this.send(r.MessageType.Info, e)
          }
          log(e) {
            this.send(r.MessageType.Log, e)
          }
          send(e, t) {
            this._rawConnection &&
              this._rawConnection.sendNotification(
                r.LogMessageNotification.type,
                { type: e, message: t }
              )
          }
        }
        const y = d.ShowDocumentFeature(
          s.ProgressFeature(
            class {
              constructor() {}
              attach(e) {
                this._connection = e
              }
              get connection() {
                if (!this._connection)
                  throw new Error('Remote is not attached to a connection yet.')
                return this._connection
              }
              initialize(e) {}
              fillServerCapabilities(e) {}
              showErrorMessage(e, ...t) {
                let n = { type: r.MessageType.Error, message: e, actions: t }
                return this.connection
                  .sendRequest(r.ShowMessageRequest.type, n)
                  .then(m)
              }
              showWarningMessage(e, ...t) {
                let n = { type: r.MessageType.Warning, message: e, actions: t }
                return this.connection
                  .sendRequest(r.ShowMessageRequest.type, n)
                  .then(m)
              }
              showInformationMessage(e, ...t) {
                let n = { type: r.MessageType.Info, message: e, actions: t }
                return this.connection
                  .sendRequest(r.ShowMessageRequest.type, n)
                  .then(m)
              }
            }
          )
        )
        ;(t.BulkRegistration || (t.BulkRegistration = {})).create =
          function () {
            return new v()
          }
        class v {
          constructor() {
            ;(this._registrations = []), (this._registered = new Set())
          }
          add(e, t) {
            const n = o.string(e) ? e : e.method
            if (this._registered.has(n))
              throw new Error(`${n} is already added to this registration`)
            const r = i.generateUuid()
            this._registrations.push({
              id: r,
              method: n,
              registerOptions: t || {},
            }),
              this._registered.add(n)
          }
          asRegistrationParams() {
            return { registrations: this._registrations }
          }
        }
        ;(t.BulkUnregistration || (t.BulkUnregistration = {})).create =
          function () {
            return new b(void 0, [])
          }
        class b {
          constructor(e, t) {
            ;(this._connection = e),
              (this._unregistrations = new Map()),
              t.forEach((e) => {
                this._unregistrations.set(e.method, e)
              })
          }
          get isAttached() {
            return !!this._connection
          }
          attach(e) {
            this._connection = e
          }
          add(e) {
            this._unregistrations.set(e.method, e)
          }
          dispose() {
            let e = []
            for (let t of this._unregistrations.values()) e.push(t)
            let t = { unregisterations: e }
            this._connection
              .sendRequest(r.UnregistrationRequest.type, t)
              .then(void 0, (e) => {
                this._connection.console.info('Bulk unregistration failed.')
              })
          }
          disposeSingle(e) {
            const t = o.string(e) ? e : e.method,
              n = this._unregistrations.get(t)
            if (!n) return !1
            let i = { unregisterations: [n] }
            return (
              this._connection
                .sendRequest(r.UnregistrationRequest.type, i)
                .then(
                  () => {
                    this._unregistrations.delete(t)
                  },
                  (e) => {
                    this._connection.console.info(
                      `Un-registering request handler for ${n.id} failed.`
                    )
                  }
                ),
              !0
            )
          }
        }
        class R {
          attach(e) {
            this._connection = e
          }
          get connection() {
            if (!this._connection)
              throw new Error('Remote is not attached to a connection yet.')
            return this._connection
          }
          initialize(e) {}
          fillServerCapabilities(e) {}
          register(e, t, n) {
            return e instanceof v
              ? this.registerMany(e)
              : e instanceof b
              ? this.registerSingle1(e, t, n)
              : this.registerSingle2(e, t)
          }
          registerSingle1(e, t, n) {
            const s = o.string(t) ? t : t.method,
              a = i.generateUuid()
            let c = {
              registrations: [{ id: a, method: s, registerOptions: n || {} }],
            }
            return (
              e.isAttached || e.attach(this.connection),
              this.connection.sendRequest(r.RegistrationRequest.type, c).then(
                (t) => (e.add({ id: a, method: s }), e),
                (e) => (
                  this.connection.console.info(
                    `Registering request handler for ${s} failed.`
                  ),
                  Promise.reject(e)
                )
              )
            )
          }
          registerSingle2(e, t) {
            const n = o.string(e) ? e : e.method,
              s = i.generateUuid()
            let a = {
              registrations: [{ id: s, method: n, registerOptions: t || {} }],
            }
            return this.connection
              .sendRequest(r.RegistrationRequest.type, a)
              .then(
                (e) =>
                  r.Disposable.create(() => {
                    this.unregisterSingle(s, n)
                  }),
                (e) => (
                  this.connection.console.info(
                    `Registering request handler for ${n} failed.`
                  ),
                  Promise.reject(e)
                )
              )
          }
          unregisterSingle(e, t) {
            let n = { unregisterations: [{ id: e, method: t }] }
            return this.connection
              .sendRequest(r.UnregistrationRequest.type, n)
              .then(void 0, (t) => {
                this.connection.console.info(
                  `Un-registering request handler for ${e} failed.`
                )
              })
          }
          registerMany(e) {
            let t = e.asRegistrationParams()
            return this.connection
              .sendRequest(r.RegistrationRequest.type, t)
              .then(
                () =>
                  new b(
                    this._connection,
                    t.registrations.map((e) => ({ id: e.id, method: e.method }))
                  ),
                (e) => (
                  this.connection.console.info('Bulk registration failed.'),
                  Promise.reject(e)
                )
              )
          }
        }
        const S = f.FileOperationsFeature(
          c.WorkspaceFoldersFeature(
            a.ConfigurationFeature(
              class {
                constructor() {}
                attach(e) {
                  this._connection = e
                }
                get connection() {
                  if (!this._connection)
                    throw new Error(
                      'Remote is not attached to a connection yet.'
                    )
                  return this._connection
                }
                initialize(e) {}
                fillServerCapabilities(e) {}
                applyEdit(e) {
                  let t = (n = e) && n.edit ? e : { edit: e }
                  var n
                  return this.connection.sendRequest(
                    r.ApplyWorkspaceEditRequest.type,
                    t
                  )
                }
              }
            )
          )
        )
        class T {
          constructor() {
            this._trace = r.Trace.Off
          }
          attach(e) {
            this._connection = e
          }
          get connection() {
            if (!this._connection)
              throw new Error('Remote is not attached to a connection yet.')
            return this._connection
          }
          initialize(e) {}
          fillServerCapabilities(e) {}
          set trace(e) {
            this._trace = e
          }
          log(e, t) {
            this._trace !== r.Trace.Off &&
              this.connection.sendNotification(r.LogTraceNotification.type, {
                message: e,
                verbose: this._trace === r.Trace.Verbose ? t : void 0,
              })
          }
        }
        class x {
          constructor() {}
          attach(e) {
            this._connection = e
          }
          get connection() {
            if (!this._connection)
              throw new Error('Remote is not attached to a connection yet.')
            return this._connection
          }
          initialize(e) {}
          fillServerCapabilities(e) {}
          logEvent(e) {
            this.connection.sendNotification(
              r.TelemetryEventNotification.type,
              e
            )
          }
        }
        class k {
          constructor() {}
          attach(e) {
            this._connection = e
          }
          get connection() {
            if (!this._connection)
              throw new Error('Remote is not attached to a connection yet.')
            return this._connection
          }
          initialize(e) {}
          fillServerCapabilities(e) {}
          attachWorkDoneProgress(e) {
            return s.attachWorkDone(this.connection, e)
          }
          attachPartialResultProgress(e, t) {
            return s.attachPartialResult(this.connection, t)
          }
        }
        t._LanguagesImpl = k
        const C = p.MonikerFeature(
          h.LinkedEditingRangeFeature(
            l.SemanticTokensFeature(u.CallHierarchyFeature(k))
          )
        )
        function w(e, t) {
          return function (n) {
            return t(e(n))
          }
        }
        function P(e, t) {
          return function (n) {
            return t(e(n))
          }
        }
        function _(e, t) {
          return function (n) {
            return t(e(n))
          }
        }
        function D(e, t) {
          return function (n) {
            return t(e(n))
          }
        }
        function O(e, t) {
          return function (n) {
            return t(e(n))
          }
        }
        function E(e, t) {
          return function (n) {
            return t(e(n))
          }
        }
        ;(t.combineConsoleFeatures = w),
          (t.combineTelemetryFeatures = P),
          (t.combineTracerFeatures = _),
          (t.combineClientFeatures = D),
          (t.combineWindowFeatures = O),
          (t.combineWorkspaceFeatures = E),
          (t.combineLanguagesFeatures = function (e, t) {
            return function (n) {
              return t(e(n))
            }
          }),
          (t.combineFeatures = function (e, t) {
            function n(e, t, n) {
              return e && t ? n(e, t) : e || t
            }
            return {
              __brand: 'features',
              console: n(e.console, t.console, w),
              tracer: n(e.tracer, t.tracer, _),
              telemetry: n(e.telemetry, t.telemetry, P),
              client: n(e.client, t.client, D),
              window: n(e.window, t.window, O),
              workspace: n(e.workspace, t.workspace, E),
            }
          }),
          (t.createConnection = function (e, t, n) {
            const i = n && n.console ? new (n.console(g))() : new g(),
              a = e(i)
            i.rawAttach(a)
            const c = n && n.tracer ? new (n.tracer(T))() : new T(),
              u = n && n.telemetry ? new (n.telemetry(x))() : new x(),
              l = n && n.client ? new (n.client(R))() : new R(),
              d = n && n.window ? new (n.window(y))() : new y(),
              f = n && n.workspace ? new (n.workspace(S))() : new S(),
              h = n && n.languages ? new (n.languages(C))() : new C(),
              p = [i, c, u, l, d, f, h]
            function m(e) {
              return e instanceof Promise
                ? e
                : o.thenable(e)
                ? new Promise((t, n) => {
                    e.then(
                      (e) => t(e),
                      (e) => n(e)
                    )
                  })
                : Promise.resolve(e)
            }
            let v,
              b,
              k,
              w = {
                listen: () => a.listen(),
                sendRequest: (e, ...t) =>
                  a.sendRequest(o.string(e) ? e : e.method, ...t),
                onRequest: (e, t) => a.onRequest(e, t),
                sendNotification: (e, t) => {
                  const n = o.string(e) ? e : e.method
                  1 === arguments.length
                    ? a.sendNotification(n)
                    : a.sendNotification(n, t)
                },
                onNotification: (e, t) => a.onNotification(e, t),
                onProgress: a.onProgress,
                sendProgress: a.sendProgress,
                onInitialize: (e) => (b = e),
                onInitialized: (e) =>
                  a.onNotification(r.InitializedNotification.type, e),
                onShutdown: (e) => (v = e),
                onExit: (e) => (k = e),
                get console() {
                  return i
                },
                get telemetry() {
                  return u
                },
                get tracer() {
                  return c
                },
                get client() {
                  return l
                },
                get window() {
                  return d
                },
                get workspace() {
                  return f
                },
                get languages() {
                  return h
                },
                onDidChangeConfiguration: (e) =>
                  a.onNotification(
                    r.DidChangeConfigurationNotification.type,
                    e
                  ),
                onDidChangeWatchedFiles: (e) =>
                  a.onNotification(r.DidChangeWatchedFilesNotification.type, e),
                __textDocumentSync: void 0,
                onDidOpenTextDocument: (e) =>
                  a.onNotification(r.DidOpenTextDocumentNotification.type, e),
                onDidChangeTextDocument: (e) =>
                  a.onNotification(r.DidChangeTextDocumentNotification.type, e),
                onDidCloseTextDocument: (e) =>
                  a.onNotification(r.DidCloseTextDocumentNotification.type, e),
                onWillSaveTextDocument: (e) =>
                  a.onNotification(r.WillSaveTextDocumentNotification.type, e),
                onWillSaveTextDocumentWaitUntil: (e) =>
                  a.onRequest(r.WillSaveTextDocumentWaitUntilRequest.type, e),
                onDidSaveTextDocument: (e) =>
                  a.onNotification(r.DidSaveTextDocumentNotification.type, e),
                sendDiagnostics: (e) =>
                  a.sendNotification(r.PublishDiagnosticsNotification.type, e),
                onHover: (e) =>
                  a.onRequest(r.HoverRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), void 0)
                  ),
                onCompletion: (e) =>
                  a.onRequest(r.CompletionRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), s.attachPartialResult(a, t))
                  ),
                onCompletionResolve: (e) =>
                  a.onRequest(r.CompletionResolveRequest.type, e),
                onSignatureHelp: (e) =>
                  a.onRequest(r.SignatureHelpRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), void 0)
                  ),
                onDeclaration: (e) =>
                  a.onRequest(r.DeclarationRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), s.attachPartialResult(a, t))
                  ),
                onDefinition: (e) =>
                  a.onRequest(r.DefinitionRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), s.attachPartialResult(a, t))
                  ),
                onTypeDefinition: (e) =>
                  a.onRequest(r.TypeDefinitionRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), s.attachPartialResult(a, t))
                  ),
                onImplementation: (e) =>
                  a.onRequest(r.ImplementationRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), s.attachPartialResult(a, t))
                  ),
                onReferences: (e) =>
                  a.onRequest(r.ReferencesRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), s.attachPartialResult(a, t))
                  ),
                onDocumentHighlight: (e) =>
                  a.onRequest(r.DocumentHighlightRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), s.attachPartialResult(a, t))
                  ),
                onDocumentSymbol: (e) =>
                  a.onRequest(r.DocumentSymbolRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), s.attachPartialResult(a, t))
                  ),
                onWorkspaceSymbol: (e) =>
                  a.onRequest(r.WorkspaceSymbolRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), s.attachPartialResult(a, t))
                  ),
                onCodeAction: (e) =>
                  a.onRequest(r.CodeActionRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), s.attachPartialResult(a, t))
                  ),
                onCodeActionResolve: (e) =>
                  a.onRequest(r.CodeActionResolveRequest.type, (t, n) =>
                    e(t, n)
                  ),
                onCodeLens: (e) =>
                  a.onRequest(r.CodeLensRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), s.attachPartialResult(a, t))
                  ),
                onCodeLensResolve: (e) =>
                  a.onRequest(r.CodeLensResolveRequest.type, (t, n) => e(t, n)),
                onDocumentFormatting: (e) =>
                  a.onRequest(r.DocumentFormattingRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), void 0)
                  ),
                onDocumentRangeFormatting: (e) =>
                  a.onRequest(r.DocumentRangeFormattingRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), void 0)
                  ),
                onDocumentOnTypeFormatting: (e) =>
                  a.onRequest(r.DocumentOnTypeFormattingRequest.type, (t, n) =>
                    e(t, n)
                  ),
                onRenameRequest: (e) =>
                  a.onRequest(r.RenameRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), void 0)
                  ),
                onPrepareRename: (e) =>
                  a.onRequest(r.PrepareRenameRequest.type, (t, n) => e(t, n)),
                onDocumentLinks: (e) =>
                  a.onRequest(r.DocumentLinkRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), s.attachPartialResult(a, t))
                  ),
                onDocumentLinkResolve: (e) =>
                  a.onRequest(r.DocumentLinkResolveRequest.type, (t, n) =>
                    e(t, n)
                  ),
                onDocumentColor: (e) =>
                  a.onRequest(r.DocumentColorRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), s.attachPartialResult(a, t))
                  ),
                onColorPresentation: (e) =>
                  a.onRequest(r.ColorPresentationRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), s.attachPartialResult(a, t))
                  ),
                onFoldingRanges: (e) =>
                  a.onRequest(r.FoldingRangeRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), s.attachPartialResult(a, t))
                  ),
                onSelectionRanges: (e) =>
                  a.onRequest(r.SelectionRangeRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), s.attachPartialResult(a, t))
                  ),
                onExecuteCommand: (e) =>
                  a.onRequest(r.ExecuteCommandRequest.type, (t, n) =>
                    e(t, n, s.attachWorkDone(a, t), void 0)
                  ),
                dispose: () => a.dispose(),
              }
            for (let e of p) e.attach(w)
            return (
              a.onRequest(r.InitializeRequest.type, (e) => {
                t.initialize(e),
                  o.string(e.trace) && (c.trace = r.Trace.fromString(e.trace))
                for (let t of p) t.initialize(e.capabilities)
                if (b)
                  return m(
                    b(
                      e,
                      new r.CancellationTokenSource().token,
                      s.attachWorkDone(a, e),
                      void 0
                    )
                  ).then((e) => {
                    if (e instanceof r.ResponseError) return e
                    let t = e
                    t || (t = { capabilities: {} })
                    let n = t.capabilities
                    n || ((n = {}), (t.capabilities = n)),
                      void 0 === n.textDocumentSync ||
                      null === n.textDocumentSync
                        ? (n.textDocumentSync = o.number(w.__textDocumentSync)
                            ? w.__textDocumentSync
                            : r.TextDocumentSyncKind.None)
                        : o.number(n.textDocumentSync) ||
                          o.number(n.textDocumentSync.change) ||
                          (n.textDocumentSync.change = o.number(
                            w.__textDocumentSync
                          )
                            ? w.__textDocumentSync
                            : r.TextDocumentSyncKind.None)
                    for (let e of p) e.fillServerCapabilities(n)
                    return t
                  })
                {
                  let e = {
                    capabilities: {
                      textDocumentSync: r.TextDocumentSyncKind.None,
                    },
                  }
                  for (let t of p) t.fillServerCapabilities(e.capabilities)
                  return e
                }
              }),
              a.onRequest(
                r.ShutdownRequest.type,
                () => (
                  (t.shutdownReceived = !0),
                  v ? v(new r.CancellationTokenSource().token) : void 0
                )
              ),
              a.onNotification(r.ExitNotification.type, () => {
                try {
                  k && k()
                } finally {
                  t.shutdownReceived ? t.exit(0) : t.exit(1)
                }
              }),
              a.onNotification(r.SetTraceNotification.type, (e) => {
                c.trace = r.Trace.fromString(e.value)
              }),
              w
            )
          })
      },
      5421: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ShowDocumentFeature = void 0)
        const r = n(273)
        t.ShowDocumentFeature = (e) =>
          class extends e {
            showDocument(e) {
              return this.connection.sendRequest(r.ShowDocumentRequest.type, e)
            }
          }
      },
      289: (e, t) => {
        'use strict'
        function n(e) {
          return 'string' == typeof e || e instanceof String
        }
        function r(e) {
          return 'function' == typeof e
        }
        function o(e) {
          return Array.isArray(e)
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.thenable =
            t.typedArray =
            t.stringArray =
            t.array =
            t.func =
            t.error =
            t.number =
            t.string =
            t.boolean =
              void 0),
          (t.boolean = function (e) {
            return !0 === e || !1 === e
          }),
          (t.string = n),
          (t.number = function (e) {
            return 'number' == typeof e || e instanceof Number
          }),
          (t.error = function (e) {
            return e instanceof Error
          }),
          (t.func = r),
          (t.array = o),
          (t.stringArray = function (e) {
            return o(e) && e.every((e) => n(e))
          }),
          (t.typedArray = function (e, t) {
            return Array.isArray(e) && e.every(t)
          }),
          (t.thenable = function (e) {
            return e && r(e.then)
          })
      },
      7560: (e, t) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.generateUuid = t.parse = t.isUUID = t.v4 = t.empty = void 0)
        class n {
          constructor(e) {
            this._value = e
          }
          asHex() {
            return this._value
          }
          equals(e) {
            return this.asHex() === e.asHex()
          }
        }
        class r extends n {
          constructor() {
            super(
              [
                r._randomHex(),
                r._randomHex(),
                r._randomHex(),
                r._randomHex(),
                r._randomHex(),
                r._randomHex(),
                r._randomHex(),
                r._randomHex(),
                '-',
                r._randomHex(),
                r._randomHex(),
                r._randomHex(),
                r._randomHex(),
                '-',
                '4',
                r._randomHex(),
                r._randomHex(),
                r._randomHex(),
                '-',
                r._oneOf(r._timeHighBits),
                r._randomHex(),
                r._randomHex(),
                r._randomHex(),
                '-',
                r._randomHex(),
                r._randomHex(),
                r._randomHex(),
                r._randomHex(),
                r._randomHex(),
                r._randomHex(),
                r._randomHex(),
                r._randomHex(),
                r._randomHex(),
                r._randomHex(),
                r._randomHex(),
                r._randomHex(),
              ].join('')
            )
          }
          static _oneOf(e) {
            return e[Math.floor(e.length * Math.random())]
          }
          static _randomHex() {
            return r._oneOf(r._chars)
          }
        }
        function o() {
          return new r()
        }
        ;(r._chars = [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '6',
          '7',
          '8',
          '9',
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
        ]),
          (r._timeHighBits = ['8', '9', 'a', 'b']),
          (t.empty = new n('00000000-0000-0000-0000-000000000000')),
          (t.v4 = o)
        const i =
          /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
        function s(e) {
          return i.test(e)
        }
        ;(t.isUUID = s),
          (t.parse = function (e) {
            if (!s(e)) throw new Error('invalid uuid')
            return new n(e)
          }),
          (t.generateUuid = function () {
            return o().asHex()
          })
      },
      8634: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.WorkspaceFoldersFeature = void 0)
        const r = n(273)
        t.WorkspaceFoldersFeature = (e) =>
          class extends e {
            initialize(e) {
              let t = e.workspace
              t &&
                t.workspaceFolders &&
                ((this._onDidChangeWorkspaceFolders = new r.Emitter()),
                this.connection.onNotification(
                  r.DidChangeWorkspaceFoldersNotification.type,
                  (e) => {
                    this._onDidChangeWorkspaceFolders.fire(e.event)
                  }
                ))
            }
            getWorkspaceFolders() {
              return this.connection.sendRequest(r.WorkspaceFoldersRequest.type)
            }
            get onDidChangeWorkspaceFolders() {
              if (!this._onDidChangeWorkspaceFolders)
                throw new Error(
                  "Client doesn't support sending workspace folder change events."
                )
              return (
                this._unregistration ||
                  (this._unregistration = this.connection.client.register(
                    r.DidChangeWorkspaceFoldersNotification.type
                  )),
                this._onDidChangeWorkspaceFolders.event
              )
            }
          }
      },
      7613: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.resolveModulePath =
            t.FileSystem =
            t.resolveGlobalYarnPath =
            t.resolveGlobalNodePath =
            t.resolve =
            t.uriToFilePath =
              void 0)
        const r = n(8835),
          o = n(5622),
          i = n(5747),
          s = n(3129)
        function a() {
          return 'win32' === process.platform
        }
        function c(e, t, n, r) {
          const a = [
            'var p = process;',
            "p.on('message',function(m){",
            "if(m.c==='e'){",
            'p.exit(0);',
            '}',
            "else if(m.c==='rs'){",
            'try{',
            'var r=require.resolve(m.a);',
            "p.send({c:'r',s:true,r:r});",
            '}',
            'catch(err){',
            "p.send({c:'r',s:false});",
            '}',
            '}',
            '});',
          ].join('')
          return new Promise((c, u) => {
            let l = process.env,
              d = Object.create(null)
            Object.keys(l).forEach((e) => (d[e] = l[e])),
              t &&
                i.existsSync(t) &&
                (d.NODE_PATH
                  ? (d.NODE_PATH = t + o.delimiter + d.NODE_PATH)
                  : (d.NODE_PATH = t),
                r && r(`NODE_PATH value is: ${d.NODE_PATH}`)),
              (d.ELECTRON_RUN_AS_NODE = '1')
            try {
              let t = s.fork('', [], { cwd: n, env: d, execArgv: ['-e', a] })
              if (void 0 === t.pid)
                return void u(
                  new Error(
                    `Starting process to resolve node module  ${e} failed`
                  )
                )
              t.on('error', (e) => {
                u(e)
              }),
                t.on('message', (n) => {
                  'r' === n.c &&
                    (t.send({ c: 'e' }),
                    n.s
                      ? c(n.r)
                      : u(new Error(`Failed to resolve module: ${e}`)))
                })
              let r = { c: 'rs', a: e }
              t.send(r)
            } catch (e) {
              u(e)
            }
          })
        }
        function u(e) {
          let t = 'npm'
          const n = Object.create(null)
          Object.keys(process.env).forEach((e) => (n[e] = process.env[e])),
            (n.NO_UPDATE_NOTIFIER = 'true')
          const r = { encoding: 'utf8', env: n }
          a() && ((t = 'npm.cmd'), (r.shell = !0))
          let i = () => {}
          try {
            process.on('SIGPIPE', i)
            let n = s.spawnSync(t, ['config', 'get', 'prefix'], r).stdout
            if (!n)
              return void (
                e && e("'npm config get prefix' didn't return a value.")
              )
            let c = n.trim()
            return (
              e && e(`'npm config get prefix' value is: ${c}`),
              c.length > 0
                ? a()
                  ? o.join(c, 'node_modules')
                  : o.join(c, 'lib', 'node_modules')
                : void 0
            )
          } catch (e) {
            return
          } finally {
            process.removeListener('SIGPIPE', i)
          }
        }
        var l
        ;(t.uriToFilePath = function (e) {
          let t = r.parse(e)
          if ('file:' !== t.protocol || !t.path) return
          let n = t.path.split('/')
          for (var i = 0, s = n.length; i < s; i++)
            n[i] = decodeURIComponent(n[i])
          if ('win32' === process.platform && n.length > 1) {
            let e = n[0],
              t = n[1]
            0 === e.length && t.length > 1 && ':' === t[1] && n.shift()
          }
          return o.normalize(n.join('/'))
        }),
          (t.resolve = c),
          (t.resolveGlobalNodePath = u),
          (t.resolveGlobalYarnPath = function (e) {
            let t = 'yarn',
              n = { encoding: 'utf8' }
            a() && ((t = 'yarn.cmd'), (n.shell = !0))
            let r = () => {}
            try {
              process.on('SIGPIPE', r)
              let i = s.spawnSync(t, ['global', 'dir', '--json'], n),
                a = i.stdout
              if (!a)
                return void (
                  e &&
                  (e("'yarn global dir' didn't return a value."),
                  i.stderr && e(i.stderr))
                )
              let c = a.trim().split(/\r?\n/)
              for (let e of c)
                try {
                  let t = JSON.parse(e)
                  if ('log' === t.type) return o.join(t.data, 'node_modules')
                } catch (e) {}
              return
            } catch (e) {
              return
            } finally {
              process.removeListener('SIGPIPE', r)
            }
          }),
          (function (e) {
            let t
            function n() {
              return (
                void 0 !== t ||
                  (t = !(
                    'win32' === process.platform ||
                    (i.existsSync(__filename.toUpperCase()) &&
                      i.existsSync(__filename.toLowerCase()))
                  )),
                t
              )
            }
            ;(e.isCaseSensitive = n),
              (e.isParent = function (e, t) {
                return n()
                  ? 0 === o.normalize(t).indexOf(o.normalize(e))
                  : 0 ===
                      o
                        .normalize(t)
                        .toLowerCase()
                        .indexOf(o.normalize(e).toLowerCase())
              })
          })((l = t.FileSystem || (t.FileSystem = {}))),
          (t.resolveModulePath = function (e, t, n, r) {
            return n
              ? (o.isAbsolute(n) || (n = o.join(e, n)),
                c(t, n, n, r)
                  .then((e) =>
                    l.isParent(n, e)
                      ? e
                      : Promise.reject(
                          new Error(
                            `Failed to load ${t} from node path location.`
                          )
                        )
                  )
                  .then(void 0, (n) => c(t, u(r), e, r)))
              : c(t, u(r), e, r)
          })
      },
      5809: function (e, t, n) {
        'use strict'
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    })
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n])
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                'default' === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  r(t, e, n)
            }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.createConnection = t.Files = void 0)
        const i = n(289),
          s = n(9891),
          a = n(7613),
          c = n(6560)
        var u
        o(n(6560), t),
          o(n(6265), t),
          ((u = t.Files || (t.Files = {})).uriToFilePath = a.uriToFilePath),
          (u.resolveGlobalNodePath = a.resolveGlobalNodePath),
          (u.resolveGlobalYarnPath = a.resolveGlobalYarnPath),
          (u.resolve = a.resolve),
          (u.resolveModulePath = a.resolveModulePath)
        let l,
          d = !1
        !(function () {
          const e = '--clientProcessId'
          function t(e) {
            try {
              let t = parseInt(e)
              isNaN(t) ||
                (l = setInterval(() => {
                  try {
                    process.kill(t, 0)
                  } catch (e) {
                    process.exit(d ? 0 : 1)
                  }
                }, 3e3))
            } catch (e) {}
          }
          for (let n = 2; n < process.argv.length; n++) {
            let r = process.argv[n]
            if (r === e && n + 1 < process.argv.length)
              return void t(process.argv[n + 1])
            {
              let n = r.split('=')
              n[0] === e && t(n[1])
            }
          }
        })()
        const f = {
          initialize: (e) => {
            const t = e.processId
            i.number(t) &&
              void 0 === l &&
              setInterval(() => {
                try {
                  process.kill(t, 0)
                } catch (e) {
                  process.exit(d ? 0 : 1)
                }
              }, 3e3)
          },
          get shutdownReceived() {
            return d
          },
          set shutdownReceived(e) {
            d = e
          },
          exit: (e) => {
            process.exit(e)
          },
        }
        t.createConnection = function (e, t, n, r) {
          let o, a, u, l
          return (
            void 0 !== e &&
              'features' === e.__brand &&
              ((o = e), (e = t), (t = n), (n = r)),
            c.ConnectionStrategy.is(e) || c.ConnectionOptions.is(e)
              ? (l = e)
              : ((a = e), (u = t), (l = n)),
            (function (e, t, n, r) {
              if (!e && !t && process.argv.length > 2) {
                let n,
                  r,
                  i = process.argv.slice(2)
                for (let s = 0; s < i.length; s++) {
                  let a = i[s]
                  if ('--node-ipc' === a) {
                    ;(e = new c.IPCMessageReader(process)),
                      (t = new c.IPCMessageWriter(process))
                    break
                  }
                  if ('--stdio' === a) {
                    ;(e = process.stdin), (t = process.stdout)
                    break
                  }
                  if ('--socket' === a) {
                    n = parseInt(i[s + 1])
                    break
                  }
                  if ('--pipe' === a) {
                    r = i[s + 1]
                    break
                  }
                  var o = a.split('=')
                  if ('--socket' === o[0]) {
                    n = parseInt(o[1])
                    break
                  }
                  if ('--pipe' === o[0]) {
                    r = o[1]
                    break
                  }
                }
                if (n) {
                  let r = c.createServerSocketTransport(n)
                  ;(e = r[0]), (t = r[1])
                } else if (r) {
                  let n = c.createServerPipeTransport(r)
                  ;(e = n[0]), (t = n[1])
                }
              }
              var a =
                "Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'"
              if (!e)
                throw new Error('Connection input stream is not set. ' + a)
              if (!t)
                throw new Error('Connection output stream is not set. ' + a)
              if (i.func(e.read) && i.func(e.on)) {
                let t = e
                t.on('end', () => {
                  process.exit(d ? 0 : 1)
                }),
                  t.on('close', () => {
                    process.exit(d ? 0 : 1)
                  })
              }
              return s.createConnection(
                (r) => c.createProtocolConnection(e, t, r, n),
                f,
                r
              )
            })(a, u, l, o)
          )
        }
      },
      8212: (e, t, n) => {
        'use strict'
        e.exports = n(5809)
      },
      800: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.config =
            t.loadMessageBundle =
            t.localize =
            t.format =
            t.setPseudo =
            t.isPseudo =
            t.isDefined =
            t.BundleFormat =
            t.MessageFormat =
              void 0)
        var r,
          o,
          i,
          s = n(1926)
        function a(e) {
          return void 0 !== e
        }
        function c(e, n) {
          return (
            t.isPseudo && (e = '［' + e.replace(/[aouei]/g, '$&$&') + '］'),
            0 === n.length
              ? e
              : e.replace(/\{(\d+)\}/g, function (e, t) {
                  var r = t[0],
                    o = n[r],
                    i = e
                  return (
                    'string' == typeof o
                      ? (i = o)
                      : ('number' != typeof o &&
                          'boolean' != typeof o &&
                          null != o) ||
                        (i = String(o)),
                    i
                  )
                })
          )
        }
        ;((i = t.MessageFormat || (t.MessageFormat = {})).file = 'file'),
          (i.bundle = 'bundle'),
          (i.both = 'both'),
          ((o = t.BundleFormat || (t.BundleFormat = {})).standalone =
            'standalone'),
          (o.languagePack = 'languagePack'),
          (function (e) {
            e.is = function (e) {
              var t = e
              return t && a(t.key) && a(t.comment)
            }
          })(r || (r = {})),
          (t.isDefined = a),
          (t.isPseudo = !1),
          (t.setPseudo = function (e) {
            t.isPseudo = e
          }),
          (t.format = c),
          (t.localize = function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
              n[r - 2] = arguments[r]
            return c(t, n)
          }),
          (t.loadMessageBundle = function (e) {
            return s.default().loadMessageBundle(e)
          }),
          (t.config = function (e) {
            return s.default().config(e)
          })
      },
      1926: (e, t) => {
        'use strict'
        var n
        function r() {
          if (void 0 === n)
            throw new Error('No runtime abstraction layer installed')
          return n
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (function (e) {
            e.install = function (e) {
              if (void 0 === e)
                throw new Error('No runtime abstraction layer provided')
              n = e
            }
          })(r || (r = {})),
          (t.default = r)
      },
      8472: (e, t, n) => {
        'use strict'
        t.LV = void 0
        var r,
          o,
          i = n(5622),
          s = n(5747),
          a = n(1926),
          c = n(800),
          u = (n(800), Object.prototype.toString)
        function l(e) {
          return '[object Number]' === u.call(e)
        }
        function d(e) {
          return '[object String]' === u.call(e)
        }
        function f(e) {
          return JSON.parse(s.readFileSync(e, 'utf8'))
        }
        function h(e) {
          return function (t, n) {
            for (var r = [], o = 2; o < arguments.length; o++)
              r[o - 2] = arguments[o]
            return l(t)
              ? t >= e.length
                ? void console.error(
                    'Broken localize call found. Index out of bounds. Stacktrace is\n: ' +
                      new Error('').stack
                  )
                : c.format(e[t], r)
              : d(n)
              ? (console.warn(
                  'Message ' + n + " didn't get externalized correctly."
                ),
                c.format(n, r))
              : void console.error(
                  'Broken localize call found. Stacktrace is\n: ' +
                    new Error('').stack
                )
          }
        }
        function p(e, t) {
          return (r[e] = t), t
        }
        function m(e) {
          try {
            return (function (e) {
              var t = f(i.join(e, 'nls.metadata.json')),
                n = Object.create(null)
              for (var r in t) {
                var o = t[r]
                n[r] = o.messages
              }
              return n
            })(e)
          } catch (e) {
            return void console.log(
              'Generating default bundle from meta data failed.',
              e
            )
          }
        }
        function g(e, t) {
          var n
          if (
            !0 === o.languagePackSupport &&
            void 0 !== o.cacheRoot &&
            void 0 !== o.languagePackId &&
            void 0 !== o.translationsConfigFile &&
            void 0 !== o.translationsConfig
          )
            try {
              n = (function (e, t) {
                var n,
                  r,
                  a,
                  c = i.join(o.cacheRoot, e.id + '-' + e.hash + '.json'),
                  u = !1,
                  l = !1
                try {
                  return (
                    (n = JSON.parse(
                      s.readFileSync(c, { encoding: 'utf8', flag: 'r' })
                    )),
                    (r = c),
                    (a = new Date()),
                    s.utimes(r, a, a, function () {}),
                    n
                  )
                } catch (e) {
                  if ('ENOENT' === e.code) l = !0
                  else {
                    if (!(e instanceof SyntaxError)) throw e
                    console.log(
                      'Syntax error parsing message bundle: ' + e.message + '.'
                    ),
                      s.unlink(c, function (e) {
                        e &&
                          console.error(
                            'Deleting corrupted bundle ' + c + ' failed.'
                          )
                      }),
                      (u = !0)
                  }
                }
                if (
                  !(n = (function (e, t) {
                    var n = o.translationsConfig[e.id]
                    if (n) {
                      var r = f(n).contents,
                        s = f(i.join(t, 'nls.metadata.json')),
                        a = Object.create(null)
                      for (var c in s) {
                        var u = s[c],
                          l = r[e.outDir + '/' + c]
                        if (l) {
                          for (var h = [], p = 0; p < u.keys.length; p++) {
                            var m = u.keys[p],
                              g = l[d(m) ? m : m.key]
                            void 0 === g && (g = u.messages[p]), h.push(g)
                          }
                          a[c] = h
                        } else a[c] = u.messages
                      }
                      return a
                    }
                  })(e, t)) ||
                  u
                )
                  return n
                if (l)
                  try {
                    s.writeFileSync(c, JSON.stringify(n), {
                      encoding: 'utf8',
                      flag: 'wx',
                    })
                  } catch (e) {
                    if ('EEXIST' === e.code) return n
                    throw e
                  }
                return n
              })(e, t)
            } catch (e) {
              console.log('Load or create bundle failed ', e)
            }
          if (!n) {
            if (o.languagePackSupport) return m(t)
            var r = (function (e) {
              for (var t = o.language; t; ) {
                var n = i.join(e, 'nls.bundle.' + t + '.json')
                if (s.existsSync(n)) return n
                var r = t.lastIndexOf('-')
                t = r > 0 ? t.substring(0, r) : void 0
              }
              if (
                void 0 === t &&
                ((n = i.join(e, 'nls.bundle.json')), s.existsSync(n))
              )
                return n
            })(t)
            if (r)
              try {
                return f(r)
              } catch (e) {
                console.log('Loading in the box message bundle failed.', e)
              }
            n = m(t)
          }
          return n
        }
        function y(e) {
          if (!e) return c.localize
          var t = i.extname(e)
          if (
            (t && (e = e.substr(0, e.length - t.length)),
            o.messageFormat === c.MessageFormat.both ||
              o.messageFormat === c.MessageFormat.bundle)
          ) {
            var n = (function (e) {
              for (
                var t, n = i.dirname(e);
                (t = i.join(n, 'nls.metadata.header.json')), !s.existsSync(t);

              ) {
                var r = i.dirname(n)
                if (r === n) {
                  t = void 0
                  break
                }
                n = r
              }
              return t
            })(e)
            if (n) {
              var a = i.dirname(n),
                u = r[a]
              if (void 0 === u)
                try {
                  var l = JSON.parse(s.readFileSync(n, 'utf8'))
                  try {
                    var d = g(l, a)
                    u = p(a, d ? { header: l, nlsBundle: d } : null)
                  } catch (e) {
                    console.error('Failed to load nls bundle', e),
                      (u = p(a, null))
                  }
                } catch (e) {
                  console.error('Failed to read header file', e),
                    (u = p(a, null))
                }
              if (u) {
                var m = e.substr(a.length + 1).replace(/\\/g, '/'),
                  y = u.nlsBundle[m]
                return void 0 === y
                  ? (console.error(
                      'Messages for file ' +
                        e +
                        ' not found. See console for details.'
                    ),
                    function () {
                      return 'Messages not found.'
                    })
                  : h(y)
              }
            }
          }
          if (
            o.messageFormat === c.MessageFormat.both ||
            o.messageFormat === c.MessageFormat.file
          )
            try {
              var v = f(
                (function (e) {
                  var t
                  if (o.cacheLanguageResolution && t) t = t
                  else {
                    if (c.isPseudo || !o.language) t = '.nls.json'
                    else
                      for (var n = o.language; n; ) {
                        var r = '.nls.' + n + '.json'
                        if (s.existsSync(e + r)) {
                          t = r
                          break
                        }
                        var i = n.lastIndexOf('-')
                        i > 0
                          ? (n = n.substring(0, i))
                          : ((t = '.nls.json'), (n = null))
                      }
                    o.cacheLanguageResolution && (t = t)
                  }
                  return e + t
                })(e)
              )
              return Array.isArray(v)
                ? h(v)
                : c.isDefined(v.messages) && c.isDefined(v.keys)
                ? h(v.messages)
                : (console.error(
                    "String bundle '" + e + "' uses an unsupported format."
                  ),
                  function () {
                    return 'File bundle has unsupported format. See console for details'
                  })
            } catch (e) {
              'ENOENT' !== e.code &&
                console.error('Failed to load single file bundle', e)
            }
          return (
            console.error('Failed to load message bundle for file ' + e),
            function () {
              return 'Failed to load message bundle. See console for details.'
            }
          )
        }
        !(function () {
          if (
            ((o = {
              locale: void 0,
              language: void 0,
              languagePackSupport: !1,
              cacheLanguageResolution: !0,
              messageFormat: c.MessageFormat.bundle,
            }),
            d(process.env.VSCODE_NLS_CONFIG))
          )
            try {
              var e = JSON.parse(process.env.VSCODE_NLS_CONFIG),
                t = void 0
              if (e.availableLanguages) {
                var n = e.availableLanguages['*']
                d(n) && (t = n)
              }
              if (
                (d(e.locale) && (o.locale = e.locale.toLowerCase()),
                void 0 === t
                  ? (o.language = o.locale)
                  : 'en' !== t && (o.language = t),
                (function (e) {
                  return !0 === e || !1 === e
                })(e._languagePackSupport) &&
                  (o.languagePackSupport = e._languagePackSupport),
                d(e._cacheRoot) && (o.cacheRoot = e._cacheRoot),
                d(e._languagePackId) && (o.languagePackId = e._languagePackId),
                d(e._translationsConfigFile))
              ) {
                o.translationsConfigFile = e._translationsConfigFile
                try {
                  o.translationsConfig = f(o.translationsConfigFile)
                } catch (t) {
                  if (e._corruptedFile) {
                    var a = i.dirname(e._corruptedFile)
                    s.exists(a, function (t) {
                      t &&
                        s.writeFile(
                          e._corruptedFile,
                          'corrupted',
                          'utf8',
                          function (e) {
                            console.error(e)
                          }
                        )
                    })
                  }
                }
              }
            } catch (e) {}
          c.setPseudo('pseudo' === o.locale), (r = Object.create(null))
        })(),
          (t.LV = y),
          a.default.install(
            Object.freeze({
              loadMessageBundle: y,
              config: function (e) {
                return (
                  e &&
                    (d(e.locale) &&
                      ((o.locale = e.locale.toLowerCase()),
                      (o.language = o.locale),
                      (r = Object.create(null))),
                    void 0 !== e.messageFormat &&
                      (o.messageFormat = e.messageFormat),
                    e.bundleFormat === c.BundleFormat.standalone &&
                      !0 === o.languagePackSupport &&
                      (o.languagePackSupport = !1)),
                  c.setPseudo('pseudo' === o.locale),
                  y
                )
              },
            })
          )
      },
      7373: (e, t, n) => {
        'use strict'
        var r
        n.r(t),
          n.d(t, { URI: () => o, Utils: () => i }),
          (r = (() => {
            var e = {
                470: (e) => {
                  function t(e) {
                    if ('string' != typeof e)
                      throw new TypeError(
                        'Path must be a string. Received ' + JSON.stringify(e)
                      )
                  }
                  function n(e, t) {
                    for (
                      var n, r = '', o = 0, i = -1, s = 0, a = 0;
                      a <= e.length;
                      ++a
                    ) {
                      if (a < e.length) n = e.charCodeAt(a)
                      else {
                        if (47 === n) break
                        n = 47
                      }
                      if (47 === n) {
                        if (i === a - 1 || 1 === s);
                        else if (i !== a - 1 && 2 === s) {
                          if (
                            r.length < 2 ||
                            2 !== o ||
                            46 !== r.charCodeAt(r.length - 1) ||
                            46 !== r.charCodeAt(r.length - 2)
                          )
                            if (r.length > 2) {
                              var c = r.lastIndexOf('/')
                              if (c !== r.length - 1) {
                                ;-1 === c
                                  ? ((r = ''), (o = 0))
                                  : (o =
                                      (r = r.slice(0, c)).length -
                                      1 -
                                      r.lastIndexOf('/')),
                                  (i = a),
                                  (s = 0)
                                continue
                              }
                            } else if (2 === r.length || 1 === r.length) {
                              ;(r = ''), (o = 0), (i = a), (s = 0)
                              continue
                            }
                          t &&
                            (r.length > 0 ? (r += '/..') : (r = '..'), (o = 2))
                        } else
                          r.length > 0
                            ? (r += '/' + e.slice(i + 1, a))
                            : (r = e.slice(i + 1, a)),
                            (o = a - i - 1)
                        ;(i = a), (s = 0)
                      } else 46 === n && -1 !== s ? ++s : (s = -1)
                    }
                    return r
                  }
                  var r = {
                    resolve: function () {
                      for (
                        var e, r = '', o = !1, i = arguments.length - 1;
                        i >= -1 && !o;
                        i--
                      ) {
                        var s
                        i >= 0
                          ? (s = arguments[i])
                          : (void 0 === e && (e = process.cwd()), (s = e)),
                          t(s),
                          0 !== s.length &&
                            ((r = s + '/' + r), (o = 47 === s.charCodeAt(0)))
                      }
                      return (
                        (r = n(r, !o)),
                        o
                          ? r.length > 0
                            ? '/' + r
                            : '/'
                          : r.length > 0
                          ? r
                          : '.'
                      )
                    },
                    normalize: function (e) {
                      if ((t(e), 0 === e.length)) return '.'
                      var r = 47 === e.charCodeAt(0),
                        o = 47 === e.charCodeAt(e.length - 1)
                      return (
                        0 !== (e = n(e, !r)).length || r || (e = '.'),
                        e.length > 0 && o && (e += '/'),
                        r ? '/' + e : e
                      )
                    },
                    isAbsolute: function (e) {
                      return t(e), e.length > 0 && 47 === e.charCodeAt(0)
                    },
                    join: function () {
                      if (0 === arguments.length) return '.'
                      for (var e, n = 0; n < arguments.length; ++n) {
                        var o = arguments[n]
                        t(o),
                          o.length > 0 &&
                            (void 0 === e ? (e = o) : (e += '/' + o))
                      }
                      return void 0 === e ? '.' : r.normalize(e)
                    },
                    relative: function (e, n) {
                      if ((t(e), t(n), e === n)) return ''
                      if ((e = r.resolve(e)) === (n = r.resolve(n))) return ''
                      for (
                        var o = 1;
                        o < e.length && 47 === e.charCodeAt(o);
                        ++o
                      );
                      for (
                        var i = e.length, s = i - o, a = 1;
                        a < n.length && 47 === n.charCodeAt(a);
                        ++a
                      );
                      for (
                        var c = n.length - a, u = s < c ? s : c, l = -1, d = 0;
                        d <= u;
                        ++d
                      ) {
                        if (d === u) {
                          if (c > u) {
                            if (47 === n.charCodeAt(a + d))
                              return n.slice(a + d + 1)
                            if (0 === d) return n.slice(a + d)
                          } else
                            s > u &&
                              (47 === e.charCodeAt(o + d)
                                ? (l = d)
                                : 0 === d && (l = 0))
                          break
                        }
                        var f = e.charCodeAt(o + d)
                        if (f !== n.charCodeAt(a + d)) break
                        47 === f && (l = d)
                      }
                      var h = ''
                      for (d = o + l + 1; d <= i; ++d)
                        (d !== i && 47 !== e.charCodeAt(d)) ||
                          (0 === h.length ? (h += '..') : (h += '/..'))
                      return h.length > 0
                        ? h + n.slice(a + l)
                        : ((a += l), 47 === n.charCodeAt(a) && ++a, n.slice(a))
                    },
                    _makeLong: function (e) {
                      return e
                    },
                    dirname: function (e) {
                      if ((t(e), 0 === e.length)) return '.'
                      for (
                        var n = e.charCodeAt(0),
                          r = 47 === n,
                          o = -1,
                          i = !0,
                          s = e.length - 1;
                        s >= 1;
                        --s
                      )
                        if (47 === (n = e.charCodeAt(s))) {
                          if (!i) {
                            o = s
                            break
                          }
                        } else i = !1
                      return -1 === o
                        ? r
                          ? '/'
                          : '.'
                        : r && 1 === o
                        ? '//'
                        : e.slice(0, o)
                    },
                    basename: function (e, n) {
                      if (void 0 !== n && 'string' != typeof n)
                        throw new TypeError('"ext" argument must be a string')
                      t(e)
                      var r,
                        o = 0,
                        i = -1,
                        s = !0
                      if (
                        void 0 !== n &&
                        n.length > 0 &&
                        n.length <= e.length
                      ) {
                        if (n.length === e.length && n === e) return ''
                        var a = n.length - 1,
                          c = -1
                        for (r = e.length - 1; r >= 0; --r) {
                          var u = e.charCodeAt(r)
                          if (47 === u) {
                            if (!s) {
                              o = r + 1
                              break
                            }
                          } else
                            -1 === c && ((s = !1), (c = r + 1)),
                              a >= 0 &&
                                (u === n.charCodeAt(a)
                                  ? -1 == --a && (i = r)
                                  : ((a = -1), (i = c)))
                        }
                        return (
                          o === i ? (i = c) : -1 === i && (i = e.length),
                          e.slice(o, i)
                        )
                      }
                      for (r = e.length - 1; r >= 0; --r)
                        if (47 === e.charCodeAt(r)) {
                          if (!s) {
                            o = r + 1
                            break
                          }
                        } else -1 === i && ((s = !1), (i = r + 1))
                      return -1 === i ? '' : e.slice(o, i)
                    },
                    extname: function (e) {
                      t(e)
                      for (
                        var n = -1,
                          r = 0,
                          o = -1,
                          i = !0,
                          s = 0,
                          a = e.length - 1;
                        a >= 0;
                        --a
                      ) {
                        var c = e.charCodeAt(a)
                        if (47 !== c)
                          -1 === o && ((i = !1), (o = a + 1)),
                            46 === c
                              ? -1 === n
                                ? (n = a)
                                : 1 !== s && (s = 1)
                              : -1 !== n && (s = -1)
                        else if (!i) {
                          r = a + 1
                          break
                        }
                      }
                      return -1 === n ||
                        -1 === o ||
                        0 === s ||
                        (1 === s && n === o - 1 && n === r + 1)
                        ? ''
                        : e.slice(n, o)
                    },
                    format: function (e) {
                      if (null === e || 'object' != typeof e)
                        throw new TypeError(
                          'The "pathObject" argument must be of type Object. Received type ' +
                            typeof e
                        )
                      return (function (e, t) {
                        var n = t.dir || t.root,
                          r = t.base || (t.name || '') + (t.ext || '')
                        return n ? (n === t.root ? n + r : n + '/' + r) : r
                      })(0, e)
                    },
                    parse: function (e) {
                      t(e)
                      var n = { root: '', dir: '', base: '', ext: '', name: '' }
                      if (0 === e.length) return n
                      var r,
                        o = e.charCodeAt(0),
                        i = 47 === o
                      i ? ((n.root = '/'), (r = 1)) : (r = 0)
                      for (
                        var s = -1,
                          a = 0,
                          c = -1,
                          u = !0,
                          l = e.length - 1,
                          d = 0;
                        l >= r;
                        --l
                      )
                        if (47 !== (o = e.charCodeAt(l)))
                          -1 === c && ((u = !1), (c = l + 1)),
                            46 === o
                              ? -1 === s
                                ? (s = l)
                                : 1 !== d && (d = 1)
                              : -1 !== s && (d = -1)
                        else if (!u) {
                          a = l + 1
                          break
                        }
                      return (
                        -1 === s ||
                        -1 === c ||
                        0 === d ||
                        (1 === d && s === c - 1 && s === a + 1)
                          ? -1 !== c &&
                            (n.base = n.name =
                              0 === a && i ? e.slice(1, c) : e.slice(a, c))
                          : (0 === a && i
                              ? ((n.name = e.slice(1, s)),
                                (n.base = e.slice(1, c)))
                              : ((n.name = e.slice(a, s)),
                                (n.base = e.slice(a, c))),
                            (n.ext = e.slice(s, c))),
                        a > 0
                          ? (n.dir = e.slice(0, a - 1))
                          : i && (n.dir = '/'),
                        n
                      )
                    },
                    sep: '/',
                    delimiter: ':',
                    win32: null,
                    posix: null,
                  }
                  ;(r.posix = r), (e.exports = r)
                },
                447: (e, t, n) => {
                  var r
                  if (
                    (n.r(t),
                    n.d(t, { URI: () => m, Utils: () => w }),
                    'object' == typeof process)
                  )
                    r = 'win32' === process.platform
                  else if ('object' == typeof navigator) {
                    var o = navigator.userAgent
                    r = o.indexOf('Windows') >= 0
                  }
                  var i,
                    s,
                    a =
                      ((i = function (e, t) {
                        return (i =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t
                            }) ||
                          function (e, t) {
                            for (var n in t)
                              Object.prototype.hasOwnProperty.call(t, n) &&
                                (e[n] = t[n])
                          })(e, t)
                      }),
                      function (e, t) {
                        if ('function' != typeof t && null !== t)
                          throw new TypeError(
                            'Class extends value ' +
                              String(t) +
                              ' is not a constructor or null'
                          )
                        function n() {
                          this.constructor = e
                        }
                        i(e, t),
                          (e.prototype =
                            null === t
                              ? Object.create(t)
                              : ((n.prototype = t.prototype), new n()))
                      }),
                    c = /^\w[\w\d+.-]*$/,
                    u = /^\//,
                    l = /^\/\//
                  function d(e, t) {
                    if (!e.scheme && t)
                      throw new Error(
                        '[UriError]: Scheme is missing: {scheme: "", authority: "'
                          .concat(e.authority, '", path: "')
                          .concat(e.path, '", query: "')
                          .concat(e.query, '", fragment: "')
                          .concat(e.fragment, '"}')
                      )
                    if (e.scheme && !c.test(e.scheme))
                      throw new Error(
                        '[UriError]: Scheme contains illegal characters.'
                      )
                    if (e.path)
                      if (e.authority) {
                        if (!u.test(e.path))
                          throw new Error(
                            '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
                          )
                      } else if (l.test(e.path))
                        throw new Error(
                          '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
                        )
                  }
                  var f = '',
                    h = '/',
                    p =
                      /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
                    m = (function () {
                      function e(e, t, n, r, o, i) {
                        void 0 === i && (i = !1),
                          'object' == typeof e
                            ? ((this.scheme = e.scheme || f),
                              (this.authority = e.authority || f),
                              (this.path = e.path || f),
                              (this.query = e.query || f),
                              (this.fragment = e.fragment || f))
                            : ((this.scheme = (function (e, t) {
                                return e || t ? e : 'file'
                              })(e, i)),
                              (this.authority = t || f),
                              (this.path = (function (e, t) {
                                switch (e) {
                                  case 'https':
                                  case 'http':
                                  case 'file':
                                    t ? t[0] !== h && (t = h + t) : (t = h)
                                }
                                return t
                              })(this.scheme, n || f)),
                              (this.query = r || f),
                              (this.fragment = o || f),
                              d(this, i))
                      }
                      return (
                        (e.isUri = function (t) {
                          return (
                            t instanceof e ||
                            (!!t &&
                              'string' == typeof t.authority &&
                              'string' == typeof t.fragment &&
                              'string' == typeof t.path &&
                              'string' == typeof t.query &&
                              'string' == typeof t.scheme &&
                              'string' == typeof t.fsPath &&
                              'function' == typeof t.with &&
                              'function' == typeof t.toString)
                          )
                        }),
                        Object.defineProperty(e.prototype, 'fsPath', {
                          get: function () {
                            return S(this, !1)
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        (e.prototype.with = function (e) {
                          if (!e) return this
                          var t = e.scheme,
                            n = e.authority,
                            r = e.path,
                            o = e.query,
                            i = e.fragment
                          return (
                            void 0 === t
                              ? (t = this.scheme)
                              : null === t && (t = f),
                            void 0 === n
                              ? (n = this.authority)
                              : null === n && (n = f),
                            void 0 === r
                              ? (r = this.path)
                              : null === r && (r = f),
                            void 0 === o
                              ? (o = this.query)
                              : null === o && (o = f),
                            void 0 === i
                              ? (i = this.fragment)
                              : null === i && (i = f),
                            t === this.scheme &&
                            n === this.authority &&
                            r === this.path &&
                            o === this.query &&
                            i === this.fragment
                              ? this
                              : new y(t, n, r, o, i)
                          )
                        }),
                        (e.parse = function (e, t) {
                          void 0 === t && (t = !1)
                          var n = p.exec(e)
                          return n
                            ? new y(
                                n[2] || f,
                                C(n[4] || f),
                                C(n[5] || f),
                                C(n[7] || f),
                                C(n[9] || f),
                                t
                              )
                            : new y(f, f, f, f, f)
                        }),
                        (e.file = function (e) {
                          var t = f
                          if (
                            (r && (e = e.replace(/\\/g, h)),
                            e[0] === h && e[1] === h)
                          ) {
                            var n = e.indexOf(h, 2)
                            ;-1 === n
                              ? ((t = e.substring(2)), (e = h))
                              : ((t = e.substring(2, n)),
                                (e = e.substring(n) || h))
                          }
                          return new y('file', t, e, f, f)
                        }),
                        (e.from = function (e) {
                          var t = new y(
                            e.scheme,
                            e.authority,
                            e.path,
                            e.query,
                            e.fragment
                          )
                          return d(t, !0), t
                        }),
                        (e.prototype.toString = function (e) {
                          return void 0 === e && (e = !1), T(this, e)
                        }),
                        (e.prototype.toJSON = function () {
                          return this
                        }),
                        (e.revive = function (t) {
                          if (t) {
                            if (t instanceof e) return t
                            var n = new y(t)
                            return (
                              (n._formatted = t.external),
                              (n._fsPath = t._sep === g ? t.fsPath : null),
                              n
                            )
                          }
                          return t
                        }),
                        e
                      )
                    })(),
                    g = r ? 1 : void 0,
                    y = (function (e) {
                      function t() {
                        var t = (null !== e && e.apply(this, arguments)) || this
                        return (t._formatted = null), (t._fsPath = null), t
                      }
                      return (
                        a(t, e),
                        Object.defineProperty(t.prototype, 'fsPath', {
                          get: function () {
                            return (
                              this._fsPath || (this._fsPath = S(this, !1)),
                              this._fsPath
                            )
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        (t.prototype.toString = function (e) {
                          return (
                            void 0 === e && (e = !1),
                            e
                              ? T(this, !0)
                              : (this._formatted ||
                                  (this._formatted = T(this, !1)),
                                this._formatted)
                          )
                        }),
                        (t.prototype.toJSON = function () {
                          var e = { $mid: 1 }
                          return (
                            this._fsPath &&
                              ((e.fsPath = this._fsPath), (e._sep = g)),
                            this._formatted && (e.external = this._formatted),
                            this.path && (e.path = this.path),
                            this.scheme && (e.scheme = this.scheme),
                            this.authority && (e.authority = this.authority),
                            this.query && (e.query = this.query),
                            this.fragment && (e.fragment = this.fragment),
                            e
                          )
                        }),
                        t
                      )
                    })(m),
                    v =
                      (((s = {})[58] = '%3A'),
                      (s[47] = '%2F'),
                      (s[63] = '%3F'),
                      (s[35] = '%23'),
                      (s[91] = '%5B'),
                      (s[93] = '%5D'),
                      (s[64] = '%40'),
                      (s[33] = '%21'),
                      (s[36] = '%24'),
                      (s[38] = '%26'),
                      (s[39] = '%27'),
                      (s[40] = '%28'),
                      (s[41] = '%29'),
                      (s[42] = '%2A'),
                      (s[43] = '%2B'),
                      (s[44] = '%2C'),
                      (s[59] = '%3B'),
                      (s[61] = '%3D'),
                      (s[32] = '%20'),
                      s)
                  function b(e, t) {
                    for (var n = void 0, r = -1, o = 0; o < e.length; o++) {
                      var i = e.charCodeAt(o)
                      if (
                        (i >= 97 && i <= 122) ||
                        (i >= 65 && i <= 90) ||
                        (i >= 48 && i <= 57) ||
                        45 === i ||
                        46 === i ||
                        95 === i ||
                        126 === i ||
                        (t && 47 === i)
                      )
                        -1 !== r &&
                          ((n += encodeURIComponent(e.substring(r, o))),
                          (r = -1)),
                          void 0 !== n && (n += e.charAt(o))
                      else {
                        void 0 === n && (n = e.substr(0, o))
                        var s = v[i]
                        void 0 !== s
                          ? (-1 !== r &&
                              ((n += encodeURIComponent(e.substring(r, o))),
                              (r = -1)),
                            (n += s))
                          : -1 === r && (r = o)
                      }
                    }
                    return (
                      -1 !== r && (n += encodeURIComponent(e.substring(r))),
                      void 0 !== n ? n : e
                    )
                  }
                  function R(e) {
                    for (var t = void 0, n = 0; n < e.length; n++) {
                      var r = e.charCodeAt(n)
                      35 === r || 63 === r
                        ? (void 0 === t && (t = e.substr(0, n)), (t += v[r]))
                        : void 0 !== t && (t += e[n])
                    }
                    return void 0 !== t ? t : e
                  }
                  function S(e, t) {
                    var n
                    return (
                      (n =
                        e.authority && e.path.length > 1 && 'file' === e.scheme
                          ? '//'.concat(e.authority).concat(e.path)
                          : 47 === e.path.charCodeAt(0) &&
                            ((e.path.charCodeAt(1) >= 65 &&
                              e.path.charCodeAt(1) <= 90) ||
                              (e.path.charCodeAt(1) >= 97 &&
                                e.path.charCodeAt(1) <= 122)) &&
                            58 === e.path.charCodeAt(2)
                          ? t
                            ? e.path.substr(1)
                            : e.path[1].toLowerCase() + e.path.substr(2)
                          : e.path),
                      r && (n = n.replace(/\//g, '\\')),
                      n
                    )
                  }
                  function T(e, t) {
                    var n = t ? R : b,
                      r = '',
                      o = e.scheme,
                      i = e.authority,
                      s = e.path,
                      a = e.query,
                      c = e.fragment
                    if (
                      (o && ((r += o), (r += ':')),
                      (i || 'file' === o) && ((r += h), (r += h)),
                      i)
                    ) {
                      var u = i.indexOf('@')
                      if (-1 !== u) {
                        var l = i.substr(0, u)
                        ;(i = i.substr(u + 1)),
                          -1 === (u = l.indexOf(':'))
                            ? (r += n(l, !1))
                            : ((r += n(l.substr(0, u), !1)),
                              (r += ':'),
                              (r += n(l.substr(u + 1), !1))),
                          (r += '@')
                      }
                      ;-1 === (u = (i = i.toLowerCase()).indexOf(':'))
                        ? (r += n(i, !1))
                        : ((r += n(i.substr(0, u), !1)), (r += i.substr(u)))
                    }
                    if (s) {
                      if (
                        s.length >= 3 &&
                        47 === s.charCodeAt(0) &&
                        58 === s.charCodeAt(2)
                      )
                        (d = s.charCodeAt(1)) >= 65 &&
                          d <= 90 &&
                          (s = '/'
                            .concat(String.fromCharCode(d + 32), ':')
                            .concat(s.substr(3)))
                      else if (s.length >= 2 && 58 === s.charCodeAt(1)) {
                        var d
                        ;(d = s.charCodeAt(0)) >= 65 &&
                          d <= 90 &&
                          (s = ''
                            .concat(String.fromCharCode(d + 32), ':')
                            .concat(s.substr(2)))
                      }
                      r += n(s, !0)
                    }
                    return (
                      a && ((r += '?'), (r += n(a, !1))),
                      c && ((r += '#'), (r += t ? c : b(c, !1))),
                      r
                    )
                  }
                  function x(e) {
                    try {
                      return decodeURIComponent(e)
                    } catch (t) {
                      return e.length > 3 ? e.substr(0, 3) + x(e.substr(3)) : e
                    }
                  }
                  var k = /(%[0-9A-Za-z][0-9A-Za-z])+/g
                  function C(e) {
                    return e.match(k)
                      ? e.replace(k, function (e) {
                          return x(e)
                        })
                      : e
                  }
                  var w,
                    P = n(470),
                    _ = function (e, t, n) {
                      if (n || 2 === arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++)
                          (!r && o in t) ||
                            (r || (r = Array.prototype.slice.call(t, 0, o)),
                            (r[o] = t[o]))
                      return e.concat(r || Array.prototype.slice.call(t))
                    },
                    D = P.posix || P
                  !(function (e) {
                    ;(e.joinPath = function (e) {
                      for (var t = [], n = 1; n < arguments.length; n++)
                        t[n - 1] = arguments[n]
                      return e.with({
                        path: D.join.apply(D, _([e.path], t, !1)),
                      })
                    }),
                      (e.resolvePath = function (e) {
                        for (var t = [], n = 1; n < arguments.length; n++)
                          t[n - 1] = arguments[n]
                        var r = e.path || '/'
                        return e.with({
                          path: D.resolve.apply(D, _([r], t, !1)),
                        })
                      }),
                      (e.dirname = function (e) {
                        var t = D.dirname(e.path)
                        return 1 === t.length && 46 === t.charCodeAt(0)
                          ? e
                          : e.with({ path: t })
                      }),
                      (e.basename = function (e) {
                        return D.basename(e.path)
                      }),
                      (e.extname = function (e) {
                        return D.extname(e.path)
                      })
                  })(w || (w = {}))
                },
              },
              t = {}
            function n(r) {
              if (t[r]) return t[r].exports
              var o = (t[r] = { exports: {} })
              return e[r](o, o.exports, n), o.exports
            }
            return (
              (n.d = (e, t) => {
                for (var r in t)
                  n.o(t, r) &&
                    !n.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
              }),
              (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
              (n.r = (e) => {
                'undefined' != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module',
                  }),
                  Object.defineProperty(e, '__esModule', { value: !0 })
              }),
              n(447)
            )
          })())
        const { URI: o, Utils: i } = r
      },
      1785: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.startServer = void 0)
        const r = n(5809),
          o = n(7090),
          i = n(7375),
          s = n(8571),
          a = n(7373)
        var c, u, l, d, f, h
        !(function (e) {
          e.type = new r.NotificationType('json/schemaAssociations')
        })(c || (c = {})),
          (function (e) {
            e.type = new r.RequestType('vscode/content')
          })(u || (u = {})),
          (function (e) {
            e.type = new r.NotificationType('json/schemaContent')
          })(l || (l = {})),
          (function (e) {
            e.type = new r.NotificationType('json/resultLimitReached')
          })(d || (d = {})),
          (function (e) {
            e.type = new r.RequestType('json/validate')
          })(f || (f = {})),
          (function (e) {
            e.type = new r.RequestType('json/languageStatus')
          })(h || (h = {}))
        const p = {
          resolveRelativePath: (e, t) => {
            const n = t.substring(0, t.lastIndexOf('/') + 1)
            return a.Utils.resolvePath(a.URI.parse(n), e).toString()
          },
        }
        function m(e) {
          return i.Range.create(
            i.Position.create(0, 0),
            e.positionAt(e.getText().length)
          )
        }
        t.startServer = function (e, t) {
          function n(n = ['https', 'http', 'file']) {
            const r = {}
            for (let e of n)
              'file' === e
                ? (r[e] = t.file)
                : ('http' !== e && 'https' !== e) || (r[e] = t.http)
            return (t) => {
              const n = t.substr(0, t.indexOf(':')),
                o = r[n]
              return o
                ? o.getContent(t)
                : e.sendRequest(u.type, t).then(
                    (e) => e,
                    (e) => Promise.reject(e.message)
                  )
            }
          }
          let g = (0, i.getLanguageService)({
            workspaceContext: p,
            contributions: [],
            clientCapabilities: i.ClientCapabilities.LATEST,
          })
          const y = new r.TextDocuments(i.TextDocument)
          y.listen(e)
          let v = !1,
            b = !1,
            R = !1,
            S = Number.MAX_VALUE,
            T = Number.MAX_VALUE,
            x = Number.MAX_VALUE,
            k = Number.MAX_VALUE
          e.onInitialize((e) => {
            const t = e.initializationOptions?.handledSchemaProtocols
            function o(t, n) {
              const r = t.split('.')
              let o = e.capabilities
              for (let e = 0; o && e < r.length; e++) {
                if (!o.hasOwnProperty(r[e])) return n
                o = o[r[e]]
              }
              return o
            }
            return (
              (g = (0, i.getLanguageService)({
                schemaRequestService: n(t),
                workspaceContext: p,
                contributions: [],
                clientCapabilities: e.capabilities,
              })),
              (v = o(
                'textDocument.completion.completionItem.snippetSupport',
                !1
              )),
              (b =
                o('textDocument.rangeFormatting.dynamicRegistration', !1) &&
                'boolean' != typeof e.initializationOptions?.provideFormatter),
              (S = o('textDocument.foldingRange.rangeLimit', Number.MAX_VALUE)),
              (R = o(
                'textDocument.documentSymbol.hierarchicalDocumentSymbolSupport',
                !1
              )),
              (k =
                e.initializationOptions?.customCapabilities?.rangeFormatting
                  ?.editLimit || Number.MAX_VALUE),
              {
                capabilities: {
                  textDocumentSync: r.TextDocumentSyncKind.Incremental,
                  completionProvider: v
                    ? { resolveProvider: !1, triggerCharacters: ['"', ':'] }
                    : void 0,
                  hoverProvider: !0,
                  documentSymbolProvider: !0,
                  documentRangeFormattingProvider:
                    !0 === e.initializationOptions?.provideFormatter,
                  documentFormattingProvider:
                    !0 === e.initializationOptions?.provideFormatter,
                  colorProvider: {},
                  foldingRangeProvider: !0,
                  selectionRangeProvider: !0,
                  documentLinkProvider: {},
                },
              }
            )
          })
          const C = (function () {
            const n = {},
              r = (t, r) => {
                const o = n[t]
                e.sendNotification(
                  d.type,
                  `${a.Utils.basename(
                    a.URI.parse(t)
                  )}: For performance reasons, ${Object.keys(o.features).join(
                    ' and '
                  )} have been limited to ${r} items.`
                ),
                  (o.timeout = void 0)
              }
            return {
              cancel(e) {
                const t = n[e]
                t && t.timeout && (t.timeout.dispose(), delete n[e])
              },
              onResultLimitExceeded: (e, o, i) => () => {
                let s = n[e]
                if (s) {
                  if (!s.timeout) return
                  ;(s.features[i] = i),
                    s.timeout.dispose(),
                    (s.timeout = t.timer.setTimeout(() => r(e, o), 2e3))
                } else
                  (s = { features: { [i]: i } }),
                    (s.timeout = t.timer.setTimeout(() => r(e, o), 2e3)),
                    (n[e] = s)
              },
            }
          })()
          let w,
            P,
            _ = null
          function D() {
            const e = { validate: !0, allowComments: !0, schemas: new Array() }
            if (P)
              if (Array.isArray(P)) Array.prototype.push.apply(e.schemas, P)
              else
                for (const t in P) {
                  const n = P[t]
                  Array.isArray(n) &&
                    n.forEach((n) => {
                      e.schemas.push({ uri: n, fileMatch: [t] })
                    })
                }
            w &&
              w.forEach((t, n) => {
                let r = t.url
                !r &&
                  t.schema &&
                  (r = t.schema.id || `vscode://schemas/custom/${n}`),
                  r &&
                    e.schemas.push({
                      uri: r,
                      fileMatch: t.fileMatch,
                      schema: t.schema,
                    })
              }),
              g.configure(e),
              y.all().forEach(q)
          }
          e.onDidChangeConfiguration((n) => {
            let o = n.settings
            if (
              (t.configureHttpRequests &&
                t.configureHttpRequests(
                  o.http && o.http.proxy,
                  o.http && o.http.proxyStrictSSL
                ),
              (w = o.json && o.json.schemas),
              D(),
              (T = Math.trunc(
                Math.max((o.json && o.json.resultLimit) || S, 0)
              )),
              (x = Math.trunc(
                Math.max((o.json && o.json.resultLimit) || Number.MAX_VALUE, 0)
              )),
              b)
            )
              if (o && o.json && o.json.format && o.json.format.enable) {
                if (!_) {
                  const t = [{ language: 'json' }, { language: 'jsonc' }]
                  _ = [
                    e.client.register(r.DocumentRangeFormattingRequest.type, {
                      documentSelector: t,
                    }),
                    e.client.register(r.DocumentFormattingRequest.type, {
                      documentSelector: t,
                    }),
                  ]
                }
              } else
                _ && (_.forEach((e) => e.then((e) => e.dispose())), (_ = null))
          }),
            e.onNotification(c.type, (e) => {
              ;(P = e), D()
            }),
            e.onNotification(l.type, (e) => {
              let t = !1
              if (Array.isArray(e))
                for (const n of e) g.resetSchema(n) && (t = !0)
              else t = g.resetSchema(e)
              if (t) for (const e of y.all()) q(e)
            }),
            e.onRequest(
              f.type,
              (e) =>
                new Promise((t) => {
                  const n = y.get(e)
                  n
                    ? (D(),
                      N(n, (e) => {
                        t(e)
                      }))
                    : t([])
                })
            ),
            e.onRequest(h.type, async (e) => {
              const t = y.get(e)
              if (t) {
                const e = M(t)
                return g.getLanguageStatus(t, e)
              }
              return { schemas: [] }
            }),
            y.onDidChangeContent((e) => {
              C.cancel(e.document.uri), q(e.document)
            }),
            y.onDidClose((t) => {
              C.cancel(t.document.uri),
                E(t.document),
                e.sendDiagnostics({ uri: t.document.uri, diagnostics: [] })
            })
          const O = {}
          function E(e) {
            const t = O[e.uri]
            t && (t.dispose(), delete O[e.uri])
          }
          function q(e) {
            E(e),
              (O[e.uri] = t.timer.setTimeout(() => {
                delete O[e.uri], N(e)
              }, 300))
          }
          function N(n, r) {
            const i = (t) => {
              e.sendDiagnostics({ uri: n.uri, diagnostics: t }), r && r(t)
            }
            if (0 === n.getText().length) return void i([])
            const s = M(n),
              a = n.version,
              c =
                'jsonc' === n.languageId
                  ? { comments: 'ignore', trailingCommas: 'warning' }
                  : { comments: 'error', trailingCommas: 'error' }
            g.doValidation(n, s, c).then(
              (e) => {
                t.timer.setImmediate(() => {
                  const t = y.get(n.uri)
                  t && t.version === a && i(e)
                })
              },
              (t) => {
                e.console.error(
                  (0, o.formatError)(`Error while validating ${n.uri}`, t)
                )
              }
            )
          }
          e.onDidChangeWatchedFiles((e) => {
            let t = !1
            e.changes.forEach((e) => {
              g.resetSchema(e.uri) && (t = !0)
            }),
              t && y.all().forEach(q)
          })
          const j = (0, s.getLanguageModelCache)(10, 60, (e) =>
            g.parseJSONDocument(e)
          )
          function M(e) {
            return j.get(e)
          }
          function A(e, t, n) {
            const o = y.get(e.uri)
            if (o) {
              const e = g.format(o, t ?? m(o), n)
              if (e.length > k) {
                const t = i.TextDocument.applyEdits(o, e)
                return [r.TextEdit.replace(m(o), t)]
              }
              return e
            }
            return []
          }
          y.onDidClose((e) => {
            j.onDocumentRemoved(e.document)
          }),
            e.onShutdown(() => {
              j.dispose()
            }),
            e.onCompletion((e, n) =>
              (0, o.runSafeAsync)(
                t,
                async () => {
                  const t = y.get(e.textDocument.uri)
                  if (t) {
                    const n = M(t)
                    return g.doComplete(t, e.position, n)
                  }
                  return null
                },
                null,
                `Error while computing completions for ${e.textDocument.uri}`,
                n
              )
            ),
            e.onHover((e, n) =>
              (0, o.runSafeAsync)(
                t,
                async () => {
                  const t = y.get(e.textDocument.uri)
                  if (t) {
                    const n = M(t)
                    return g.doHover(t, e.position, n)
                  }
                  return null
                },
                null,
                `Error while computing hover for ${e.textDocument.uri}`,
                n
              )
            ),
            e.onDocumentSymbol((e, n) =>
              (0, o.runSafe)(
                t,
                () => {
                  const t = y.get(e.textDocument.uri)
                  if (t) {
                    const e = M(t),
                      n = C.onResultLimitExceeded(t.uri, x, 'document symbols')
                    return R
                      ? g.findDocumentSymbols2(t, e, {
                          resultLimit: x,
                          onResultLimitExceeded: n,
                        })
                      : g.findDocumentSymbols(t, e, {
                          resultLimit: x,
                          onResultLimitExceeded: n,
                        })
                  }
                  return []
                },
                [],
                `Error while computing document symbols for ${e.textDocument.uri}`,
                n
              )
            ),
            e.onDocumentRangeFormatting((e, n) =>
              (0, o.runSafe)(
                t,
                () => A(e.textDocument, e.range, e.options),
                [],
                `Error while formatting range for ${e.textDocument.uri}`,
                n
              )
            ),
            e.onDocumentFormatting((e, n) =>
              (0, o.runSafe)(
                t,
                () => A(e.textDocument, void 0, e.options),
                [],
                `Error while formatting ${e.textDocument.uri}`,
                n
              )
            ),
            e.onDocumentColor((e, n) =>
              (0, o.runSafeAsync)(
                t,
                async () => {
                  const t = y.get(e.textDocument.uri)
                  if (t) {
                    const e = C.onResultLimitExceeded(
                        t.uri,
                        x,
                        'document colors'
                      ),
                      n = M(t)
                    return g.findDocumentColors(t, n, {
                      resultLimit: x,
                      onResultLimitExceeded: e,
                    })
                  }
                  return []
                },
                [],
                `Error while computing document colors for ${e.textDocument.uri}`,
                n
              )
            ),
            e.onColorPresentation((e, n) =>
              (0, o.runSafe)(
                t,
                () => {
                  const t = y.get(e.textDocument.uri)
                  if (t) {
                    const n = M(t)
                    return g.getColorPresentations(t, n, e.color, e.range)
                  }
                  return []
                },
                [],
                `Error while computing color presentations for ${e.textDocument.uri}`,
                n
              )
            ),
            e.onFoldingRanges((e, n) =>
              (0, o.runSafe)(
                t,
                () => {
                  const t = y.get(e.textDocument.uri)
                  if (t) {
                    const e = C.onResultLimitExceeded(
                      t.uri,
                      T,
                      'folding ranges'
                    )
                    return g.getFoldingRanges(t, {
                      rangeLimit: T,
                      onRangeLimitExceeded: e,
                    })
                  }
                  return null
                },
                null,
                `Error while computing folding ranges for ${e.textDocument.uri}`,
                n
              )
            ),
            e.onSelectionRanges((e, n) =>
              (0, o.runSafe)(
                t,
                () => {
                  const t = y.get(e.textDocument.uri)
                  if (t) {
                    const n = M(t)
                    return g.getSelectionRanges(t, e.positions, n)
                  }
                  return []
                },
                [],
                `Error while computing selection ranges for ${e.textDocument.uri}`,
                n
              )
            ),
            e.onDocumentLinks((e, n) =>
              (0, o.runSafeAsync)(
                t,
                async () => {
                  const t = y.get(e.textDocument.uri)
                  if (t) {
                    const e = M(t)
                    return g.findLinks(t, e)
                  }
                  return []
                },
                [],
                `Error while computing links for ${e.textDocument.uri}`,
                n
              )
            ),
            e.listen()
        }
      },
      8571: (e, t) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getLanguageModelCache = void 0),
          (t.getLanguageModelCache = function (e, t, n) {
            let r,
              o = {},
              i = 0
            return (
              t > 0 &&
                (r = setInterval(() => {
                  let e = Date.now() - 1e3 * t,
                    n = Object.keys(o)
                  for (let t of n) o[t].cTime < e && (delete o[t], i--)
                }, 1e3 * t)),
              {
                get(t) {
                  let r = t.version,
                    s = t.languageId,
                    a = o[t.uri]
                  if (a && a.version === r && a.languageId === s)
                    return (a.cTime = Date.now()), a.languageModel
                  let c = n(t)
                  if (
                    ((o[t.uri] = {
                      languageModel: c,
                      version: r,
                      languageId: s,
                      cTime: Date.now(),
                    }),
                    a || i++,
                    i === e)
                  ) {
                    let e = Number.MAX_VALUE,
                      t = null
                    for (let n in o) {
                      let r = o[n]
                      r.cTime < e && ((t = n), (e = r.cTime))
                    }
                    t && (delete o[t], i--)
                  }
                  return c
                },
                onDocumentRemoved(e) {
                  let t = e.uri
                  o[t] && (delete o[t], i--)
                },
                dispose() {
                  void 0 !== r &&
                    (clearInterval(r), (r = void 0), (o = {}), (i = 0))
                },
              }
            )
          })
      },
      7090: (e, t, n) => {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.runSafe = t.runSafeAsync = t.formatError = void 0)
        const r = n(5809)
        function o(e, t) {
          if (t instanceof Error) {
            let n = t
            return `${e}: ${n.message}\n${n.stack}`
          }
          return 'string' == typeof t
            ? `${e}: ${t}`
            : t
            ? `${e}: ${t.toString()}`
            : e
        }
        function i() {
          return (
            console.log('cancelled'),
            new r.ResponseError(
              r.LSPErrorCodes.RequestCancelled,
              'Request cancelled'
            )
          )
        }
        ;(t.formatError = o),
          (t.runSafeAsync = function (e, t, n, r, s) {
            return new Promise((a) => {
              e.timer.setImmediate(() => {
                if (!s.isCancellationRequested)
                  return t().then(
                    (e) => {
                      s.isCancellationRequested ? a(i()) : a(e)
                    },
                    (e) => {
                      console.error(o(r, e)), a(n)
                    }
                  )
                a(i())
              })
            })
          }),
          (t.runSafe = function (e, t, n, r, s) {
            return new Promise((a) => {
              e.timer.setImmediate(() => {
                if (s.isCancellationRequested) a(i())
                else
                  try {
                    let e = t()
                    if (s.isCancellationRequested) return void a(i())
                    a(e)
                  } catch (e) {
                    console.error(o(r, e)), a(n)
                  }
              })
            })
          })
      },
      2357: (e) => {
        'use strict'
        e.exports = require('assert')
      },
      3129: (e) => {
        'use strict'
        e.exports = require('child_process')
      },
      6417: (e) => {
        'use strict'
        e.exports = require('crypto')
      },
      8614: (e) => {
        'use strict'
        e.exports = require('events')
      },
      5747: (e) => {
        'use strict'
        e.exports = require('fs')
      },
      8605: (e) => {
        'use strict'
        e.exports = require('http')
      },
      7211: (e) => {
        'use strict'
        e.exports = require('https')
      },
      1631: (e) => {
        'use strict'
        e.exports = require('net')
      },
      2087: (e) => {
        'use strict'
        e.exports = require('os')
      },
      5622: (e) => {
        'use strict'
        e.exports = require('path')
      },
      4016: (e) => {
        'use strict'
        e.exports = require('tls')
      },
      8835: (e) => {
        'use strict'
        e.exports = require('url')
      },
      1669: (e) => {
        'use strict'
        e.exports = require('util')
      },
      8761: (e) => {
        'use strict'
        e.exports = require('zlib')
      },
    },
    t = {}
  function n(r) {
    var o = t[r]
    if (void 0 !== o) return o.exports
    var i = (t[r] = { exports: {} })
    return e[r].call(i.exports, i, i.exports, n), i.exports
  }
  ;(n.d = (e, t) => {
    for (var r in t)
      n.o(t, r) &&
        !n.o(e, r) &&
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
  }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    })
  var r = {}
  ;(() => {
    'use strict'
    var e = r
    Object.defineProperty(e, '__esModule', { value: !0 })
    const t = n(8212),
      o = n(7090),
      i = n(1785),
      s = n(2775),
      a = n(7373),
      c = n(5747),
      u = (0, t.createConnection)()
    ;(console.log = u.console.log.bind(u.console)),
      (console.error = u.console.error.bind(u.console)),
      process.on('unhandledRejection', (e) => {
        u.console.error((0, o.formatError)('Unhandled exception', e))
      })
    const l = {
      timer: {
        setImmediate(e, ...t) {
          const n = setImmediate(e, ...t)
          return { dispose: () => clearImmediate(n) }
        },
        setTimeout(e, t, ...n) {
          const r = setTimeout(e, t, ...n)
          return { dispose: () => clearTimeout(r) }
        },
      },
      file: {
        getContent: (e, t) =>
          new Promise((n, r) => {
            const o = a.URI.parse(e)
            c.readFile(o.fsPath, t, (e, t) => {
              if (e) return r(e)
              n(t.toString())
            })
          }),
      },
      http: {
        getContent: (e, t) =>
          (0, s.xhr)({
            url: e,
            followRedirects: 5,
            headers: { 'Accept-Encoding': 'gzip, deflate' },
          }).then(
            (e) => e.responseText,
            (e) =>
              Promise.reject(
                e.responseText ||
                  (0, s.getErrorStatusDescription)(e.status) ||
                  e.toString()
              )
          ),
      },
      configureHttpRequests: s.configure,
    }
    ;(0, i.startServer)(u, l)
  })()
  var o = exports
  for (var i in r) o[i] = r[i]
  r.__esModule && Object.defineProperty(o, '__esModule', { value: !0 })
})()
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8dfae7a5cd50421d10cd99cb873990460525a898/extensions/json-language-features/server/dist/node/jsonServerMain.js.map
