;(() => {
  'use strict'
  var e = {
      800: (e, t, i) => {
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
        var s,
          r,
          n,
          a = i(926)
        function o(e) {
          return void 0 !== e
        }
        function l(e, i) {
          return (
            t.isPseudo && (e = '［' + e.replace(/[aouei]/g, '$&$&') + '］'),
            0 === i.length
              ? e
              : e.replace(/\{(\d+)\}/g, function (e, t) {
                  var s = t[0],
                    r = i[s],
                    n = e
                  return (
                    'string' == typeof r
                      ? (n = r)
                      : ('number' != typeof r &&
                          'boolean' != typeof r &&
                          null != r) ||
                        (n = String(r)),
                    n
                  )
                })
          )
        }
        ;((n = t.MessageFormat || (t.MessageFormat = {})).file = 'file'),
          (n.bundle = 'bundle'),
          (n.both = 'both'),
          ((r = t.BundleFormat || (t.BundleFormat = {})).standalone =
            'standalone'),
          (r.languagePack = 'languagePack'),
          (function (e) {
            e.is = function (e) {
              var t = e
              return t && o(t.key) && o(t.comment)
            }
          })(s || (s = {})),
          (t.isDefined = o),
          (t.isPseudo = !1),
          (t.setPseudo = function (e) {
            t.isPseudo = e
          }),
          (t.format = l),
          (t.localize = function (e, t) {
            for (var i = [], s = 2; s < arguments.length; s++)
              i[s - 2] = arguments[s]
            return l(t, i)
          }),
          (t.loadMessageBundle = function (e) {
            return a.default().loadMessageBundle(e)
          }),
          (t.config = function (e) {
            return a.default().config(e)
          })
      },
      926: (e, t) => {
        var i
        function s() {
          if (void 0 === i)
            throw new Error('No runtime abstraction layer installed')
          return i
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (function (e) {
            e.install = function (e) {
              if (void 0 === e)
                throw new Error('No runtime abstraction layer provided')
              i = e
            }
          })(s || (s = {})),
          (t.default = s)
      },
      472: (e, t, i) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.config = t.loadMessageBundle = void 0)
        var s = i(622),
          r = i(747),
          n = i(926),
          a = i(800),
          o = i(800)
        Object.defineProperty(t, 'MessageFormat', {
          enumerable: !0,
          get: function () {
            return o.MessageFormat
          },
        }),
          Object.defineProperty(t, 'BundleFormat', {
            enumerable: !0,
            get: function () {
              return o.BundleFormat
            },
          })
        var l,
          u,
          c = Object.prototype.toString
        function d(e) {
          return '[object Number]' === c.call(e)
        }
        function h(e) {
          return '[object String]' === c.call(e)
        }
        function g(e) {
          return JSON.parse(r.readFileSync(e, 'utf8'))
        }
        function v(e) {
          return function (t, i) {
            for (var s = [], r = 2; r < arguments.length; r++)
              s[r - 2] = arguments[r]
            return d(t)
              ? t >= e.length
                ? void console.error(
                    'Broken localize call found. Index out of bounds. Stacktrace is\n: ' +
                      new Error('').stack
                  )
                : a.format(e[t], s)
              : h(i)
              ? (console.warn(
                  'Message ' + i + " didn't get externalized correctly."
                ),
                a.format(i, s))
              : void console.error(
                  'Broken localize call found. Stacktrace is\n: ' +
                    new Error('').stack
                )
          }
        }
        function m(e, t) {
          return (l[e] = t), t
        }
        function f(e) {
          try {
            return (function (e) {
              var t = g(s.join(e, 'nls.metadata.json')),
                i = Object.create(null)
              for (var r in t) {
                var n = t[r]
                i[r] = n.messages
              }
              return i
            })(e)
          } catch (e) {
            return void console.log(
              'Generating default bundle from meta data failed.',
              e
            )
          }
        }
        function p(e, t) {
          var i
          if (
            !0 === u.languagePackSupport &&
            void 0 !== u.cacheRoot &&
            void 0 !== u.languagePackId &&
            void 0 !== u.translationsConfigFile &&
            void 0 !== u.translationsConfig
          )
            try {
              i = (function (e, t) {
                var i,
                  n,
                  a,
                  o = s.join(u.cacheRoot, e.id + '-' + e.hash + '.json'),
                  l = !1,
                  c = !1
                try {
                  return (
                    (i = JSON.parse(
                      r.readFileSync(o, { encoding: 'utf8', flag: 'r' })
                    )),
                    (n = o),
                    (a = new Date()),
                    r.utimes(n, a, a, function () {}),
                    i
                  )
                } catch (e) {
                  if ('ENOENT' === e.code) c = !0
                  else {
                    if (!(e instanceof SyntaxError)) throw e
                    console.log(
                      'Syntax error parsing message bundle: ' + e.message + '.'
                    ),
                      r.unlink(o, function (e) {
                        e &&
                          console.error(
                            'Deleting corrupted bundle ' + o + ' failed.'
                          )
                      }),
                      (l = !0)
                  }
                }
                if (
                  !(i = (function (e, t) {
                    var i = u.translationsConfig[e.id]
                    if (i) {
                      var r = g(i).contents,
                        n = g(s.join(t, 'nls.metadata.json')),
                        a = Object.create(null)
                      for (var o in n) {
                        var l = n[o],
                          c = r[e.outDir + '/' + o]
                        if (c) {
                          for (var d = [], v = 0; v < l.keys.length; v++) {
                            var m = l.keys[v],
                              f = c[h(m) ? m : m.key]
                            void 0 === f && (f = l.messages[v]), d.push(f)
                          }
                          a[o] = d
                        } else a[o] = l.messages
                      }
                      return a
                    }
                  })(e, t)) ||
                  l
                )
                  return i
                if (c)
                  try {
                    r.writeFileSync(o, JSON.stringify(i), {
                      encoding: 'utf8',
                      flag: 'wx',
                    })
                  } catch (e) {
                    if ('EEXIST' === e.code) return i
                    throw e
                  }
                return i
              })(e, t)
            } catch (e) {
              console.log('Load or create bundle failed ', e)
            }
          if (!i) {
            if (u.languagePackSupport) return f(t)
            var n = (function (e) {
              for (var t = u.language; t; ) {
                var i = s.join(e, 'nls.bundle.' + t + '.json')
                if (r.existsSync(i)) return i
                var n = t.lastIndexOf('-')
                t = n > 0 ? t.substring(0, n) : void 0
              }
              if (
                void 0 === t &&
                ((i = s.join(e, 'nls.bundle.json')), r.existsSync(i))
              )
                return i
            })(t)
            if (n)
              try {
                return g(n)
              } catch (e) {
                console.log('Loading in the box message bundle failed.', e)
              }
            i = f(t)
          }
          return i
        }
        function w(e) {
          if (!e) return a.localize
          var t = s.extname(e)
          if (
            (t && (e = e.substr(0, e.length - t.length)),
            u.messageFormat === a.MessageFormat.both ||
              u.messageFormat === a.MessageFormat.bundle)
          ) {
            var i = (function (e) {
              for (
                var t, i = s.dirname(e);
                (t = s.join(i, 'nls.metadata.header.json')), !r.existsSync(t);

              ) {
                var n = s.dirname(i)
                if (n === i) {
                  t = void 0
                  break
                }
                i = n
              }
              return t
            })(e)
            if (i) {
              var n = s.dirname(i),
                o = l[n]
              if (void 0 === o)
                try {
                  var c = JSON.parse(r.readFileSync(i, 'utf8'))
                  try {
                    var d = p(c, n)
                    o = m(n, d ? { header: c, nlsBundle: d } : null)
                  } catch (e) {
                    console.error('Failed to load nls bundle', e),
                      (o = m(n, null))
                  }
                } catch (e) {
                  console.error('Failed to read header file', e),
                    (o = m(n, null))
                }
              if (o) {
                var h = e.substr(n.length + 1).replace(/\\/g, '/'),
                  f = o.nlsBundle[h]
                return void 0 === f
                  ? (console.error(
                      'Messages for file ' +
                        e +
                        ' not found. See console for details.'
                    ),
                    function () {
                      return 'Messages not found.'
                    })
                  : v(f)
              }
            }
          }
          if (
            u.messageFormat === a.MessageFormat.both ||
            u.messageFormat === a.MessageFormat.file
          )
            try {
              var w = g(
                (function (e) {
                  var t
                  if (u.cacheLanguageResolution && t) t = t
                  else {
                    if (a.isPseudo || !u.language) t = '.nls.json'
                    else
                      for (var i = u.language; i; ) {
                        var s = '.nls.' + i + '.json'
                        if (r.existsSync(e + s)) {
                          t = s
                          break
                        }
                        var n = i.lastIndexOf('-')
                        n > 0
                          ? (i = i.substring(0, n))
                          : ((t = '.nls.json'), (i = null))
                      }
                    u.cacheLanguageResolution && (t = t)
                  }
                  return e + t
                })(e)
              )
              return Array.isArray(w)
                ? v(w)
                : a.isDefined(w.messages) && a.isDefined(w.keys)
                ? v(w.messages)
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
        function S(e) {
          return (
            e &&
              (h(e.locale) &&
                ((u.locale = e.locale.toLowerCase()),
                (u.language = u.locale),
                (l = Object.create(null))),
              void 0 !== e.messageFormat && (u.messageFormat = e.messageFormat),
              e.bundleFormat === a.BundleFormat.standalone &&
                !0 === u.languagePackSupport &&
                (u.languagePackSupport = !1)),
            a.setPseudo('pseudo' === u.locale),
            w
          )
        }
        !(function () {
          if (
            ((u = {
              locale: void 0,
              language: void 0,
              languagePackSupport: !1,
              cacheLanguageResolution: !0,
              messageFormat: a.MessageFormat.bundle,
            }),
            h(process.env.VSCODE_NLS_CONFIG))
          )
            try {
              var e = JSON.parse(process.env.VSCODE_NLS_CONFIG),
                t = void 0
              if (e.availableLanguages) {
                var i = e.availableLanguages['*']
                h(i) && (t = i)
              }
              if (
                (h(e.locale) && (u.locale = e.locale.toLowerCase()),
                void 0 === t
                  ? (u.language = u.locale)
                  : 'en' !== t && (u.language = t),
                (function (e) {
                  return !0 === e || !1 === e
                })(e._languagePackSupport) &&
                  (u.languagePackSupport = e._languagePackSupport),
                h(e._cacheRoot) && (u.cacheRoot = e._cacheRoot),
                h(e._languagePackId) && (u.languagePackId = e._languagePackId),
                h(e._translationsConfigFile))
              ) {
                u.translationsConfigFile = e._translationsConfigFile
                try {
                  u.translationsConfig = g(u.translationsConfigFile)
                } catch (t) {
                  if (e._corruptedFile) {
                    var n = s.dirname(e._corruptedFile)
                    r.exists(n, function (t) {
                      t &&
                        r.writeFile(
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
          a.setPseudo('pseudo' === u.locale), (l = Object.create(null))
        })(),
          (t.loadMessageBundle = w),
          (t.config = S),
          n.default.install(Object.freeze({ loadMessageBundle: w, config: S }))
      },
      971: (e, t, i) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.BinarySizeStatusBarEntry = void 0)
        const s = i(549),
          r = i(472),
          n = i(979),
          a = r.loadMessageBundle(
            i(622).join(__dirname, 'binarySizeStatusBarEntry.ts')
          )
        class o {
          static formatSize(e) {
            return e < o.KB
              ? a(0, null, e)
              : e < o.MB
              ? a(1, null, (e / o.KB).toFixed(2))
              : e < o.GB
              ? a(2, null, (e / o.MB).toFixed(2))
              : e < o.TB
              ? a(3, null, (e / o.GB).toFixed(2))
              : a(4, null, (e / o.TB).toFixed(2))
          }
        }
        ;(o.KB = 1024),
          (o.MB = o.KB * o.KB),
          (o.GB = o.MB * o.KB),
          (o.TB = o.GB * o.KB)
        class l extends n.PreviewStatusBarEntry {
          constructor() {
            super(
              'status.imagePreview.binarySize',
              a(5, null),
              s.StatusBarAlignment.Right,
              100
            )
          }
          show(e, t) {
            'number' == typeof t
              ? super.showItem(e, o.formatSize(t))
              : this.hide(e)
          }
        }
        t.BinarySizeStatusBarEntry = l
      },
      363: (e, t) => {
        function i(e) {
          for (; e.length; ) {
            const t = e.pop()
            t && t.dispose()
          }
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.Disposable = t.disposeAll = void 0),
          (t.disposeAll = i),
          (t.Disposable = class {
            constructor() {
              ;(this._isDisposed = !1), (this._disposables = [])
            }
            dispose() {
              this._isDisposed ||
                ((this._isDisposed = !0), i(this._disposables))
            }
            _register(e) {
              return (
                this._isDisposed ? e.dispose() : this._disposables.push(e), e
              )
            }
            get isDisposed() {
              return this._isDisposed
            }
          })
      },
      979: (e, t, i) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.PreviewStatusBarEntry = void 0)
        const s = i(549),
          r = i(363)
        class n extends r.Disposable {
          constructor(e, t, i, r) {
            super(),
              (this.entry = this._register(
                s.window.createStatusBarItem(e, i, r)
              )),
              (this.entry.name = t)
          }
          showItem(e, t) {
            ;(this._showOwner = e), (this.entry.text = t), this.entry.show()
          }
          hide(e) {
            e === this._showOwner &&
              (this.entry.hide(), (this._showOwner = void 0))
          }
        }
        t.PreviewStatusBarEntry = n
      },
      123: (e, t, i) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.PreviewManager = void 0)
        const s = i(549),
          r = i(472),
          n = i(363),
          a = r.loadMessageBundle(i(622).join(__dirname, 'preview.ts'))
        class o {
          constructor(e, t, i, s) {
            ;(this.extensionRoot = e),
              (this.sizeStatusBarEntry = t),
              (this.binarySizeStatusBarEntry = i),
              (this.zoomStatusBarEntry = s),
              (this._previews = new Set())
          }
          async openCustomDocument(e) {
            return { uri: e, dispose: () => {} }
          }
          async resolveCustomEditor(e, t) {
            const i = new l(
              this.extensionRoot,
              e.uri,
              t,
              this.sizeStatusBarEntry,
              this.binarySizeStatusBarEntry,
              this.zoomStatusBarEntry
            )
            this._previews.add(i),
              this.setActivePreview(i),
              t.onDidDispose(() => {
                this._previews.delete(i)
              }),
              t.onDidChangeViewState(() => {
                t.active
                  ? this.setActivePreview(i)
                  : this._activePreview !== i ||
                    t.active ||
                    this.setActivePreview(void 0)
              })
          }
          get activePreview() {
            return this._activePreview
          }
          setActivePreview(e) {
            ;(this._activePreview = e), this.setPreviewActiveContext(!!e)
          }
          setPreviewActiveContext(e) {
            s.commands.executeCommand('setContext', 'imagePreviewFocus', e)
          }
        }
        ;(t.PreviewManager = o), (o.viewType = 'imagePreview.previewEditor')
        class l extends n.Disposable {
          constructor(e, t, i, r, n, a) {
            super(),
              (this.extensionRoot = e),
              (this.resource = t),
              (this.webviewEditor = i),
              (this.sizeStatusBarEntry = r),
              (this.binarySizeStatusBarEntry = n),
              (this.zoomStatusBarEntry = a),
              (this.id = `${Date.now()}-${Math.random().toString()}`),
              (this._previewState = 1),
              (this.emptyPngDataUri =
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAEElEQVR42gEFAPr/AP///wAI/AL+Sr4t6gAAAABJRU5ErkJggg==')
            const o = t.with({ path: t.path.replace(/\/[^\/]+?\.\w+$/, '/') })
            ;(i.webview.options = {
              enableScripts: !0,
              enableForms: !1,
              localResourceRoots: [o, e],
            }),
              this._register(
                i.webview.onDidReceiveMessage((e) => {
                  switch (e.type) {
                    case 'size':
                      ;(this._imageSize = e.value), this.update()
                      break
                    case 'zoom':
                      ;(this._imageZoom = e.value), this.update()
                      break
                    case 'reopen-as-text':
                      s.commands.executeCommand(
                        'vscode.openWith',
                        t,
                        'default',
                        i.viewColumn
                      )
                  }
                })
              ),
              this._register(
                a.onDidChangeScale((e) => {
                  2 === this._previewState &&
                    this.webviewEditor.webview.postMessage({
                      type: 'setScale',
                      scale: e.scale,
                    })
                })
              ),
              this._register(
                i.onDidChangeViewState(() => {
                  this.update(),
                    this.webviewEditor.webview.postMessage({
                      type: 'setActive',
                      value: this.webviewEditor.active,
                    })
                })
              ),
              this._register(
                i.onDidDispose(() => {
                  2 === this._previewState &&
                    (this.sizeStatusBarEntry.hide(this.id),
                    this.binarySizeStatusBarEntry.hide(this.id),
                    this.zoomStatusBarEntry.hide(this.id)),
                    (this._previewState = 0)
                })
              )
            const l = this._register(
              s.workspace.createFileSystemWatcher(new s.RelativePattern(t, '*'))
            )
            this._register(
              l.onDidChange((e) => {
                e.toString() === this.resource.toString() && this.render()
              })
            ),
              this._register(
                l.onDidDelete((e) => {
                  e.toString() === this.resource.toString() &&
                    this.webviewEditor.dispose()
                })
              ),
              s.workspace.fs.stat(t).then(({ size: e }) => {
                ;(this._imageBinarySize = e), this.update()
              }),
              this.render(),
              this.update(),
              this.webviewEditor.webview.postMessage({
                type: 'setActive',
                value: this.webviewEditor.active,
              })
          }
          zoomIn() {
            2 === this._previewState &&
              this.webviewEditor.webview.postMessage({ type: 'zoomIn' })
          }
          zoomOut() {
            2 === this._previewState &&
              this.webviewEditor.webview.postMessage({ type: 'zoomOut' })
          }
          async render() {
            0 !== this._previewState &&
              (this.webviewEditor.webview.html =
                await this.getWebviewContents())
          }
          update() {
            0 !== this._previewState &&
              (this.webviewEditor.active
                ? ((this._previewState = 2),
                  this.sizeStatusBarEntry.show(this.id, this._imageSize || ''),
                  this.binarySizeStatusBarEntry.show(
                    this.id,
                    this._imageBinarySize
                  ),
                  this.zoomStatusBarEntry.show(
                    this.id,
                    this._imageZoom || 'fit'
                  ))
                : (2 === this._previewState &&
                    (this.sizeStatusBarEntry.hide(this.id),
                    this.binarySizeStatusBarEntry.hide(this.id),
                    this.zoomStatusBarEntry.hide(this.id)),
                  (this._previewState = 1)))
          }
          async getWebviewContents() {
            const e = Date.now().toString(),
              t = {
                src: await this.getResourcePath(
                  this.webviewEditor,
                  this.resource,
                  e
                ),
              },
              i = (function () {
                let e = ''
                const t =
                  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
                for (let i = 0; i < 64; i++)
                  e += t.charAt(Math.floor(Math.random() * t.length))
                return e
              })(),
              s = this.webviewEditor.webview.cspSource
            return `<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t\x3c!-- Disable pinch zooming --\x3e\n\t<meta name="viewport"\n\t\tcontent="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">\n\t<title>Image Preview</title>\n\t<link rel="stylesheet" href="${u(
              this.extensionResource('/media/main.css')
            )}" type="text/css" media="screen" nonce="${i}">\n\t<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data: ${s}; script-src 'nonce-${i}'; style-src ${s} 'nonce-${i}';">\n\t<meta id="image-preview-" data-settings="${u(
              JSON.stringify(t)
            )}">\n</head>\n<body class="container image scale-to-fit loading">\n\t<div class="loading-indicator"></div>\n\t<div class="image-load-error">\n\t\t<p>${a(
              0,
              null
            )}</p>\n\t\t<a href="#" class="open-file-link">${a(
              1,
              null
            )}</a>\n\t</div>\n\t<script src="${u(
              this.extensionResource('/media/main.js')
            )}" nonce="${i}"><\/script>\n</body>\n</html>`
          }
          async getResourcePath(e, t, i) {
            return 'git' === t.scheme &&
              0 === (await s.workspace.fs.stat(t)).size
              ? this.emptyPngDataUri
              : t.query
              ? e.webview.asWebviewUri(t).toString()
              : e.webview
                  .asWebviewUri(t)
                  .with({ query: `version=${i}` })
                  .toString()
          }
          extensionResource(e) {
            return this.webviewEditor.webview.asWebviewUri(
              this.extensionRoot.with({ path: this.extensionRoot.path + e })
            )
          }
        }
        function u(e) {
          return e.toString().replace(/"/g, '&quot;')
        }
      },
      665: (e, t, i) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.SizeStatusBarEntry = void 0)
        const s = i(549),
          r = i(472),
          n = i(979),
          a = r.loadMessageBundle(
            i(622).join(__dirname, 'sizeStatusBarEntry.ts')
          )
        class o extends n.PreviewStatusBarEntry {
          constructor() {
            super(
              'status.imagePreview.size',
              a(0, null),
              s.StatusBarAlignment.Right,
              101
            )
          }
          show(e, t) {
            this.showItem(e, t)
          }
        }
        t.SizeStatusBarEntry = o
      },
      884: (e, t, i) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ZoomStatusBarEntry = void 0)
        const s = i(549),
          r = i(472),
          n = i(979),
          a = r.loadMessageBundle(
            i(622).join(__dirname, 'zoomStatusBarEntry.ts')
          ),
          o = '_imagePreview.selectZoomLevel'
        class l extends n.PreviewStatusBarEntry {
          constructor() {
            super(
              'status.imagePreview.zoom',
              a(0, null),
              s.StatusBarAlignment.Right,
              102
            ),
              (this._onDidChangeScale = this._register(new s.EventEmitter())),
              (this.onDidChangeScale = this._onDidChangeScale.event),
              this._register(
                s.commands.registerCommand(o, async () => {
                  const e = [10, 5, 2, 1, 0.5, 0.2, 'fit'].map((e) => ({
                      label: this.zoomLabel(e),
                      scale: e,
                    })),
                    t = await s.window.showQuickPick(e, {
                      placeHolder: a(1, null),
                    })
                  t && this._onDidChangeScale.fire({ scale: t.scale })
                })
              ),
              (this.entry.command = o)
          }
          show(e, t) {
            this.showItem(e, this.zoomLabel(t))
          }
          zoomLabel(e) {
            return 'fit' === e ? a(2, null) : `${Math.round(100 * e)}%`
          }
        }
        t.ZoomStatusBarEntry = l
      },
      747: (e) => {
        e.exports = require('fs')
      },
      622: (e) => {
        e.exports = require('path')
      },
      549: (e) => {
        e.exports = require('vscode')
      },
    },
    t = {}
  function i(s) {
    var r = t[s]
    if (void 0 !== r) return r.exports
    var n = (t[s] = { exports: {} })
    return e[s](n, n.exports, i), n.exports
  }
  var s = {}
  ;(() => {
    var e = s
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.activate = void 0)
    const t = i(549),
      r = i(971),
      n = i(123),
      a = i(665),
      o = i(884)
    e.activate = function (e) {
      const i = new a.SizeStatusBarEntry()
      e.subscriptions.push(i)
      const s = new r.BinarySizeStatusBarEntry()
      e.subscriptions.push(s)
      const l = new o.ZoomStatusBarEntry()
      e.subscriptions.push(l)
      const u = new n.PreviewManager(e.extensionUri, i, s, l)
      e.subscriptions.push(
        t.window.registerCustomEditorProvider(n.PreviewManager.viewType, u, {
          supportsMultipleEditorsPerDocument: !0,
        })
      ),
        e.subscriptions.push(
          t.commands.registerCommand('imagePreview.zoomIn', () => {
            u.activePreview?.zoomIn()
          })
        ),
        e.subscriptions.push(
          t.commands.registerCommand('imagePreview.zoomOut', () => {
            u.activePreview?.zoomOut()
          })
        )
    }
  })()
  var r = exports
  for (var n in s) r[n] = s[n]
  s.__esModule && Object.defineProperty(r, '__esModule', { value: !0 })
})()
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8dfae7a5cd50421d10cd99cb873990460525a898/extensions/image-preview/dist/extension.js.map
