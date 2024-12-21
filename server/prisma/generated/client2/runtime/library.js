'use strict';
var ru = Object.create;
var Fr = Object.defineProperty;
var nu = Object.getOwnPropertyDescriptor;
var iu = Object.getOwnPropertyNames;
var ou = Object.getPrototypeOf,
  su = Object.prototype.hasOwnProperty;
var z = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  Bt = (e, t) => {
    for (var r in t) Fr(e, r, { get: t[r], enumerable: !0 });
  },
  bo = (e, t, r, n) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let i of iu(t))
        !su.call(e, i) &&
          i !== r &&
          Fr(e, i, {
            get: () => t[i],
            enumerable: !(n = nu(t, i)) || n.enumerable,
          });
    return e;
  };
var k = (e, t, r) => (
    (r = e != null ? ru(ou(e)) : {}),
    bo(
      t || !e || !e.__esModule
        ? Fr(r, 'default', { value: e, enumerable: !0 })
        : r,
      e,
    )
  ),
  au = (e) => bo(Fr({}, '__esModule', { value: !0 }), e);
var Uo = z((yf, ei) => {
  'use strict';
  var P = ei.exports;
  ei.exports.default = P;
  var D = '\x1B[',
    Ht = '\x1B]',
    mt = '\x07',
    Jr = ';',
    Bo = process.env.TERM_PROGRAM === 'Apple_Terminal';
  P.cursorTo = (e, t) => {
    if (typeof e != 'number')
      throw new TypeError('The `x` argument is required');
    return typeof t != 'number'
      ? D + (e + 1) + 'G'
      : D + (t + 1) + ';' + (e + 1) + 'H';
  };
  P.cursorMove = (e, t) => {
    if (typeof e != 'number')
      throw new TypeError('The `x` argument is required');
    let r = '';
    return (
      e < 0 ? (r += D + -e + 'D') : e > 0 && (r += D + e + 'C'),
      t < 0 ? (r += D + -t + 'A') : t > 0 && (r += D + t + 'B'),
      r
    );
  };
  P.cursorUp = (e = 1) => D + e + 'A';
  P.cursorDown = (e = 1) => D + e + 'B';
  P.cursorForward = (e = 1) => D + e + 'C';
  P.cursorBackward = (e = 1) => D + e + 'D';
  P.cursorLeft = D + 'G';
  P.cursorSavePosition = Bo ? '\x1B7' : D + 's';
  P.cursorRestorePosition = Bo ? '\x1B8' : D + 'u';
  P.cursorGetPosition = D + '6n';
  P.cursorNextLine = D + 'E';
  P.cursorPrevLine = D + 'F';
  P.cursorHide = D + '?25l';
  P.cursorShow = D + '?25h';
  P.eraseLines = (e) => {
    let t = '';
    for (let r = 0; r < e; r++)
      t += P.eraseLine + (r < e - 1 ? P.cursorUp() : '');
    return e && (t += P.cursorLeft), t;
  };
  P.eraseEndLine = D + 'K';
  P.eraseStartLine = D + '1K';
  P.eraseLine = D + '2K';
  P.eraseDown = D + 'J';
  P.eraseUp = D + '1J';
  P.eraseScreen = D + '2J';
  P.scrollUp = D + 'S';
  P.scrollDown = D + 'T';
  P.clearScreen = '\x1Bc';
  P.clearTerminal =
    process.platform === 'win32'
      ? `${P.eraseScreen}${D}0f`
      : `${P.eraseScreen}${D}3J${D}H`;
  P.beep = mt;
  P.link = (e, t) => [Ht, '8', Jr, Jr, t, mt, e, Ht, '8', Jr, Jr, mt].join('');
  P.image = (e, t = {}) => {
    let r = `${Ht}1337;File=inline=1`;
    return (
      t.width && (r += `;width=${t.width}`),
      t.height && (r += `;height=${t.height}`),
      t.preserveAspectRatio === !1 && (r += ';preserveAspectRatio=0'),
      r + ':' + e.toString('base64') + mt
    );
  };
  P.iTerm = {
    setCwd: (e = process.cwd()) => `${Ht}50;CurrentDir=${e}${mt}`,
    annotation: (e, t = {}) => {
      let r = `${Ht}1337;`,
        n = typeof t.x < 'u',
        i = typeof t.y < 'u';
      if ((n || i) && !(n && i && typeof t.length < 'u'))
        throw new Error(
          '`x`, `y` and `length` must be defined when `x` or `y` is defined',
        );
      return (
        (e = e.replace(/\|/g, '')),
        (r += t.isHidden ? 'AddHiddenAnnotation=' : 'AddAnnotation='),
        t.length > 0
          ? (r += (n ? [e, t.length, t.x, t.y] : [t.length, e]).join('|'))
          : (r += e),
        r + mt
      );
    },
  };
});
var ti = z((Ef, Qo) => {
  'use strict';
  Qo.exports = (e, t = process.argv) => {
    let r = e.startsWith('-') ? '' : e.length === 1 ? '-' : '--',
      n = t.indexOf(r + e),
      i = t.indexOf('--');
    return n !== -1 && (i === -1 || n < i);
  };
});
var Ho = z((bf, Jo) => {
  'use strict';
  var Ju = require('os'),
    Go = require('tty'),
    me = ti(),
    { env: G } = process,
    Je;
  me('no-color') || me('no-colors') || me('color=false') || me('color=never')
    ? (Je = 0)
    : (me('color') || me('colors') || me('color=true') || me('color=always')) &&
      (Je = 1);
  'FORCE_COLOR' in G &&
    (G.FORCE_COLOR === 'true'
      ? (Je = 1)
      : G.FORCE_COLOR === 'false'
        ? (Je = 0)
        : (Je =
            G.FORCE_COLOR.length === 0
              ? 1
              : Math.min(parseInt(G.FORCE_COLOR, 10), 3)));
  function ri(e) {
    return e === 0
      ? !1
      : { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 };
  }
  function ni(e, t) {
    if (Je === 0) return 0;
    if (me('color=16m') || me('color=full') || me('color=truecolor')) return 3;
    if (me('color=256')) return 2;
    if (e && !t && Je === void 0) return 0;
    let r = Je || 0;
    if (G.TERM === 'dumb') return r;
    if (process.platform === 'win32') {
      let n = Ju.release().split('.');
      return Number(n[0]) >= 10 && Number(n[2]) >= 10586
        ? Number(n[2]) >= 14931
          ? 3
          : 2
        : 1;
    }
    if ('CI' in G)
      return [
        'TRAVIS',
        'CIRCLECI',
        'APPVEYOR',
        'GITLAB_CI',
        'GITHUB_ACTIONS',
        'BUILDKITE',
      ].some((n) => n in G) || G.CI_NAME === 'codeship'
        ? 1
        : r;
    if ('TEAMCITY_VERSION' in G)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(G.TEAMCITY_VERSION) ? 1 : 0;
    if (G.COLORTERM === 'truecolor') return 3;
    if ('TERM_PROGRAM' in G) {
      let n = parseInt((G.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
      switch (G.TERM_PROGRAM) {
        case 'iTerm.app':
          return n >= 3 ? 3 : 2;
        case 'Apple_Terminal':
          return 2;
      }
    }
    return /-256(color)?$/i.test(G.TERM)
      ? 2
      : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
            G.TERM,
          ) || 'COLORTERM' in G
        ? 1
        : r;
  }
  function Hu(e) {
    let t = ni(e, e && e.isTTY);
    return ri(t);
  }
  Jo.exports = {
    supportsColor: Hu,
    stdout: ri(ni(!0, Go.isatty(1))),
    stderr: ri(ni(!0, Go.isatty(2))),
  };
});
var Yo = z((wf, Ko) => {
  'use strict';
  var Wu = Ho(),
    ft = ti();
  function Wo(e) {
    if (/^\d{3,4}$/.test(e)) {
      let r = /(\d{1,2})(\d{2})/.exec(e);
      return { major: 0, minor: parseInt(r[1], 10), patch: parseInt(r[2], 10) };
    }
    let t = (e || '').split('.').map((r) => parseInt(r, 10));
    return { major: t[0], minor: t[1], patch: t[2] };
  }
  function ii(e) {
    let { env: t } = process;
    if ('FORCE_HYPERLINK' in t)
      return !(
        t.FORCE_HYPERLINK.length > 0 && parseInt(t.FORCE_HYPERLINK, 10) === 0
      );
    if (
      ft('no-hyperlink') ||
      ft('no-hyperlinks') ||
      ft('hyperlink=false') ||
      ft('hyperlink=never')
    )
      return !1;
    if (ft('hyperlink=true') || ft('hyperlink=always') || 'NETLIFY' in t)
      return !0;
    if (
      !Wu.supportsColor(e) ||
      (e && !e.isTTY) ||
      process.platform === 'win32' ||
      'CI' in t ||
      'TEAMCITY_VERSION' in t
    )
      return !1;
    if ('TERM_PROGRAM' in t) {
      let r = Wo(t.TERM_PROGRAM_VERSION);
      switch (t.TERM_PROGRAM) {
        case 'iTerm.app':
          return r.major === 3 ? r.minor >= 1 : r.major > 3;
        case 'WezTerm':
          return r.major >= 20200620;
        case 'vscode':
          return r.major > 1 || (r.major === 1 && r.minor >= 72);
      }
    }
    if ('VTE_VERSION' in t) {
      if (t.VTE_VERSION === '0.50.0') return !1;
      let r = Wo(t.VTE_VERSION);
      return r.major > 0 || r.minor >= 50;
    }
    return !1;
  }
  Ko.exports = {
    supportsHyperlink: ii,
    stdout: ii(process.stdout),
    stderr: ii(process.stderr),
  };
});
var Zo = z((xf, Wt) => {
  'use strict';
  var Ku = Uo(),
    oi = Yo(),
    zo = (e, t, { target: r = 'stdout', ...n } = {}) =>
      oi[r]
        ? Ku.link(e, t)
        : n.fallback === !1
          ? e
          : typeof n.fallback == 'function'
            ? n.fallback(e, t)
            : `${e} (\u200B${t}\u200B)`;
  Wt.exports = (e, t, r = {}) => zo(e, t, r);
  Wt.exports.stderr = (e, t, r = {}) => zo(e, t, { target: 'stderr', ...r });
  Wt.exports.isSupported = oi.stdout;
  Wt.exports.stderr.isSupported = oi.stderr;
});
var ai = z((kf, Yu) => {
  Yu.exports = {
    name: '@prisma/engines-version',
    version: '6.1.0-21.11f085a2012c0f4778414c8db2651556ee0ef959',
    main: 'index.js',
    types: 'index.d.ts',
    license: 'Apache-2.0',
    author: 'Tim Suchanek <suchanek@prisma.io>',
    prisma: { enginesVersion: '11f085a2012c0f4778414c8db2651556ee0ef959' },
    repository: {
      type: 'git',
      url: 'https://github.com/prisma/engines-wrapper.git',
      directory: 'packages/engines-version',
    },
    devDependencies: { '@types/node': '18.19.67', typescript: '4.9.5' },
    files: ['index.js', 'index.d.ts'],
    scripts: { build: 'tsc -d' },
  };
});
var li = z((Hr) => {
  'use strict';
  Object.defineProperty(Hr, '__esModule', { value: !0 });
  Hr.enginesVersion = void 0;
  Hr.enginesVersion = ai().prisma.enginesVersion;
});
var rs = z((Yf, Xu) => {
  Xu.exports = {
    name: 'dotenv',
    version: '16.4.7',
    description: 'Loads environment variables from .env file',
    main: 'lib/main.js',
    types: 'lib/main.d.ts',
    exports: {
      '.': {
        types: './lib/main.d.ts',
        require: './lib/main.js',
        default: './lib/main.js',
      },
      './config': './config.js',
      './config.js': './config.js',
      './lib/env-options': './lib/env-options.js',
      './lib/env-options.js': './lib/env-options.js',
      './lib/cli-options': './lib/cli-options.js',
      './lib/cli-options.js': './lib/cli-options.js',
      './package.json': './package.json',
    },
    scripts: {
      'dts-check': 'tsc --project tests/types/tsconfig.json',
      lint: 'standard',
      pretest: 'npm run lint && npm run dts-check',
      test: 'tap run --allow-empty-coverage --disable-coverage --timeout=60000',
      'test:coverage':
        'tap run --show-full-coverage --timeout=60000 --coverage-report=lcov',
      prerelease: 'npm test',
      release: 'standard-version',
    },
    repository: { type: 'git', url: 'git://github.com/motdotla/dotenv.git' },
    funding: 'https://dotenvx.com',
    keywords: [
      'dotenv',
      'env',
      '.env',
      'environment',
      'variables',
      'config',
      'settings',
    ],
    readmeFilename: 'README.md',
    license: 'BSD-2-Clause',
    devDependencies: {
      '@types/node': '^18.11.3',
      decache: '^4.6.2',
      sinon: '^14.0.1',
      standard: '^17.0.0',
      'standard-version': '^9.5.0',
      tap: '^19.2.0',
      typescript: '^4.8.4',
    },
    engines: { node: '>=12' },
    browser: { fs: !1 },
  };
});
var ss = z((zf, Le) => {
  'use strict';
  var di = require('fs'),
    mi = require('path'),
    ec = require('os'),
    tc = require('crypto'),
    rc = rs(),
    fi = rc.version,
    nc =
      /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;
  function ic(e) {
    let t = {},
      r = e.toString();
    r = r.replace(
      /\r\n?/gm,
      `
`,
    );
    let n;
    for (; (n = nc.exec(r)) != null; ) {
      let i = n[1],
        o = n[2] || '';
      o = o.trim();
      let s = o[0];
      (o = o.replace(/^(['"`])([\s\S]*)\1$/gm, '$2')),
        s === '"' &&
          ((o = o.replace(
            /\\n/g,
            `
`,
          )),
          (o = o.replace(/\\r/g, '\r'))),
        (t[i] = o);
    }
    return t;
  }
  function oc(e) {
    let t = os(e),
      r = U.configDotenv({ path: t });
    if (!r.parsed) {
      let s = new Error(
        `MISSING_DATA: Cannot parse ${t} for an unknown reason`,
      );
      throw ((s.code = 'MISSING_DATA'), s);
    }
    let n = is(e).split(','),
      i = n.length,
      o;
    for (let s = 0; s < i; s++)
      try {
        let a = n[s].trim(),
          l = lc(r, a);
        o = U.decrypt(l.ciphertext, l.key);
        break;
      } catch (a) {
        if (s + 1 >= i) throw a;
      }
    return U.parse(o);
  }
  function sc(e) {
    console.log(`[dotenv@${fi}][INFO] ${e}`);
  }
  function ac(e) {
    console.log(`[dotenv@${fi}][WARN] ${e}`);
  }
  function Wr(e) {
    console.log(`[dotenv@${fi}][DEBUG] ${e}`);
  }
  function is(e) {
    return e && e.DOTENV_KEY && e.DOTENV_KEY.length > 0
      ? e.DOTENV_KEY
      : process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0
        ? process.env.DOTENV_KEY
        : '';
  }
  function lc(e, t) {
    let r;
    try {
      r = new URL(t);
    } catch (a) {
      if (a.code === 'ERR_INVALID_URL') {
        let l = new Error(
          'INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development',
        );
        throw ((l.code = 'INVALID_DOTENV_KEY'), l);
      }
      throw a;
    }
    let n = r.password;
    if (!n) {
      let a = new Error('INVALID_DOTENV_KEY: Missing key part');
      throw ((a.code = 'INVALID_DOTENV_KEY'), a);
    }
    let i = r.searchParams.get('environment');
    if (!i) {
      let a = new Error('INVALID_DOTENV_KEY: Missing environment part');
      throw ((a.code = 'INVALID_DOTENV_KEY'), a);
    }
    let o = `DOTENV_VAULT_${i.toUpperCase()}`,
      s = e.parsed[o];
    if (!s) {
      let a = new Error(
        `NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${o} in your .env.vault file.`,
      );
      throw ((a.code = 'NOT_FOUND_DOTENV_ENVIRONMENT'), a);
    }
    return { ciphertext: s, key: n };
  }
  function os(e) {
    let t = null;
    if (e && e.path && e.path.length > 0)
      if (Array.isArray(e.path))
        for (let r of e.path)
          di.existsSync(r) && (t = r.endsWith('.vault') ? r : `${r}.vault`);
      else t = e.path.endsWith('.vault') ? e.path : `${e.path}.vault`;
    else t = mi.resolve(process.cwd(), '.env.vault');
    return di.existsSync(t) ? t : null;
  }
  function ns(e) {
    return e[0] === '~' ? mi.join(ec.homedir(), e.slice(1)) : e;
  }
  function uc(e) {
    sc('Loading env from encrypted .env.vault');
    let t = U._parseVault(e),
      r = process.env;
    return (
      e && e.processEnv != null && (r = e.processEnv),
      U.populate(r, t, e),
      { parsed: t }
    );
  }
  function cc(e) {
    let t = mi.resolve(process.cwd(), '.env'),
      r = 'utf8',
      n = !!(e && e.debug);
    e && e.encoding
      ? (r = e.encoding)
      : n && Wr('No encoding is specified. UTF-8 is used by default');
    let i = [t];
    if (e && e.path)
      if (!Array.isArray(e.path)) i = [ns(e.path)];
      else {
        i = [];
        for (let l of e.path) i.push(ns(l));
      }
    let o,
      s = {};
    for (let l of i)
      try {
        let u = U.parse(di.readFileSync(l, { encoding: r }));
        U.populate(s, u, e);
      } catch (u) {
        n && Wr(`Failed to load ${l} ${u.message}`), (o = u);
      }
    let a = process.env;
    return (
      e && e.processEnv != null && (a = e.processEnv),
      U.populate(a, s, e),
      o ? { parsed: s, error: o } : { parsed: s }
    );
  }
  function pc(e) {
    if (is(e).length === 0) return U.configDotenv(e);
    let t = os(e);
    return t
      ? U._configVault(e)
      : (ac(
          `You set DOTENV_KEY but you are missing a .env.vault file at ${t}. Did you forget to build it?`,
        ),
        U.configDotenv(e));
  }
  function dc(e, t) {
    let r = Buffer.from(t.slice(-64), 'hex'),
      n = Buffer.from(e, 'base64'),
      i = n.subarray(0, 12),
      o = n.subarray(-16);
    n = n.subarray(12, -16);
    try {
      let s = tc.createDecipheriv('aes-256-gcm', r, i);
      return s.setAuthTag(o), `${s.update(n)}${s.final()}`;
    } catch (s) {
      let a = s instanceof RangeError,
        l = s.message === 'Invalid key length',
        u = s.message === 'Unsupported state or unable to authenticate data';
      if (a || l) {
        let c = new Error(
          'INVALID_DOTENV_KEY: It must be 64 characters long (or more)',
        );
        throw ((c.code = 'INVALID_DOTENV_KEY'), c);
      } else if (u) {
        let c = new Error('DECRYPTION_FAILED: Please check your DOTENV_KEY');
        throw ((c.code = 'DECRYPTION_FAILED'), c);
      } else throw s;
    }
  }
  function mc(e, t, r = {}) {
    let n = !!(r && r.debug),
      i = !!(r && r.override);
    if (typeof t != 'object') {
      let o = new Error(
        'OBJECT_REQUIRED: Please check the processEnv argument being passed to populate',
      );
      throw ((o.code = 'OBJECT_REQUIRED'), o);
    }
    for (let o of Object.keys(t))
      Object.prototype.hasOwnProperty.call(e, o)
        ? (i === !0 && (e[o] = t[o]),
          n &&
            Wr(
              i === !0
                ? `"${o}" is already defined and WAS overwritten`
                : `"${o}" is already defined and was NOT overwritten`,
            ))
        : (e[o] = t[o]);
  }
  var U = {
    configDotenv: cc,
    _configVault: uc,
    _parseVault: oc,
    config: pc,
    decrypt: dc,
    parse: ic,
    populate: mc,
  };
  Le.exports.configDotenv = U.configDotenv;
  Le.exports._configVault = U._configVault;
  Le.exports._parseVault = U._parseVault;
  Le.exports.config = U.config;
  Le.exports.decrypt = U.decrypt;
  Le.exports.parse = U.parse;
  Le.exports.populate = U.populate;
  Le.exports = U;
});
var ds = z((ig, ps) => {
  'use strict';
  ps.exports = (e) => {
    let t = e.match(/^[ \t]*(?=\S)/gm);
    return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
  };
});
var fs = z((og, ms) => {
  'use strict';
  var yc = ds();
  ms.exports = (e) => {
    let t = yc(e);
    if (t === 0) return e;
    let r = new RegExp(`^[ \\t]{${t}}`, 'gm');
    return e.replace(r, '');
  };
});
var Ei = z((pg, gs) => {
  'use strict';
  gs.exports = (e, t = 1, r) => {
    if (
      ((r = { indent: ' ', includeEmptyLines: !1, ...r }), typeof e != 'string')
    )
      throw new TypeError(
        `Expected \`input\` to be a \`string\`, got \`${typeof e}\``,
      );
    if (typeof t != 'number')
      throw new TypeError(
        `Expected \`count\` to be a \`number\`, got \`${typeof t}\``,
      );
    if (typeof r.indent != 'string')
      throw new TypeError(
        `Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``,
      );
    if (t === 0) return e;
    let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e.replace(n, r.indent.repeat(t));
  };
});
var bs = z((fg, Es) => {
  'use strict';
  Es.exports = ({ onlyFirst: e = !1 } = {}) => {
    let t = [
      '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
      '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
    ].join('|');
    return new RegExp(t, e ? void 0 : 'g');
  };
});
var vi = z((gg, ws) => {
  'use strict';
  var Rc = bs();
  ws.exports = (e) => (typeof e == 'string' ? e.replace(Rc(), '') : e);
});
var xs = z((Eg, zr) => {
  'use strict';
  zr.exports = (e = {}) => {
    let t;
    if (e.repoUrl) t = e.repoUrl;
    else if (e.user && e.repo) t = `https://github.com/${e.user}/${e.repo}`;
    else
      throw new Error(
        'You need to specify either the `repoUrl` option or both the `user` and `repo` options',
      );
    let r = new URL(`${t}/issues/new`),
      n = [
        'body',
        'title',
        'labels',
        'template',
        'milestone',
        'assignee',
        'projects',
      ];
    for (let i of n) {
      let o = e[i];
      if (o !== void 0) {
        if (i === 'labels' || i === 'projects') {
          if (!Array.isArray(o))
            throw new TypeError(`The \`${i}\` option should be an array`);
          o = o.join(',');
        }
        r.searchParams.set(i, o);
      }
    }
    return r.toString();
  };
  zr.exports.default = zr.exports;
});
var Di = z((Sh, Us) => {
  'use strict';
  Us.exports = (function () {
    function e(t, r, n, i, o) {
      return t < r || n < r ? (t > n ? n + 1 : t + 1) : i === o ? r : r + 1;
    }
    return function (t, r) {
      if (t === r) return 0;
      if (t.length > r.length) {
        var n = t;
        (t = r), (r = n);
      }
      for (
        var i = t.length, o = r.length;
        i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1);

      )
        i--, o--;
      for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
      if (((i -= s), (o -= s), i === 0 || o < 3)) return o;
      var a = 0,
        l,
        u,
        c,
        p,
        d,
        f,
        g,
        h,
        O,
        T,
        S,
        C,
        b = [];
      for (l = 0; l < i; l++) b.push(l + 1), b.push(t.charCodeAt(s + l));
      for (var fe = b.length - 1; a < o - 3; )
        for (
          O = r.charCodeAt(s + (u = a)),
            T = r.charCodeAt(s + (c = a + 1)),
            S = r.charCodeAt(s + (p = a + 2)),
            C = r.charCodeAt(s + (d = a + 3)),
            f = a += 4,
            l = 0;
          l < fe;
          l += 2
        )
          (g = b[l]),
            (h = b[l + 1]),
            (u = e(g, u, c, O, h)),
            (c = e(u, c, p, T, h)),
            (p = e(c, p, d, S, h)),
            (f = e(p, d, f, C, h)),
            (b[l] = f),
            (d = p),
            (p = c),
            (c = u),
            (u = g);
      for (; a < o; )
        for (O = r.charCodeAt(s + (u = a)), f = ++a, l = 0; l < fe; l += 2)
          (g = b[l]), (b[l] = f = e(g, u, f, O, b[l + 1])), (u = g);
      return f;
    };
  })();
});
var Bm = {};
Bt(Bm, {
  Debug: () => Gn,
  Decimal: () => ve,
  Extensions: () => jn,
  MetricsClient: () => Ot,
  PrismaClientInitializationError: () => R,
  PrismaClientKnownRequestError: () => X,
  PrismaClientRustPanicError: () => ue,
  PrismaClientUnknownRequestError: () => j,
  PrismaClientValidationError: () => ee,
  Public: () => Bn,
  Sql: () => se,
  defineDmmfProperty: () => fa,
  deserializeJsonResponse: () => bt,
  dmmfToRuntimeDataModel: () => ma,
  empty: () => Ea,
  getPrismaClient: () => Xl,
  getRuntime: () => In,
  join: () => ya,
  makeStrictEnum: () => eu,
  makeTypedQueryFactory: () => ga,
  objectEnumValues: () => yn,
  raw: () => Qi,
  serializeJsonQuery: () => Pn,
  skip: () => vn,
  sqltag: () => Gi,
  warnEnvConflicts: () => tu,
  warnOnce: () => tr,
});
module.exports = au(Bm);
var jn = {};
Bt(jn, { defineExtension: () => wo, getExtensionContext: () => xo });
function wo(e) {
  return typeof e == 'function' ? e : (t) => t.$extends(e);
}
function xo(e) {
  return e;
}
var Bn = {};
Bt(Bn, { validator: () => vo });
function vo(...e) {
  return (t) => t;
}
var Mr = {};
Bt(Mr, {
  $: () => So,
  bgBlack: () => yu,
  bgBlue: () => xu,
  bgCyan: () => Pu,
  bgGreen: () => bu,
  bgMagenta: () => vu,
  bgRed: () => Eu,
  bgWhite: () => Tu,
  bgYellow: () => wu,
  black: () => mu,
  blue: () => rt,
  bold: () => H,
  cyan: () => _e,
  dim: () => ke,
  gray: () => Ut,
  green: () => Ve,
  grey: () => hu,
  hidden: () => pu,
  inverse: () => cu,
  italic: () => uu,
  magenta: () => fu,
  red: () => pe,
  reset: () => lu,
  strikethrough: () => du,
  underline: () => Z,
  white: () => gu,
  yellow: () => De,
});
var Un,
  Po,
  To,
  Ro,
  Co = !0;
typeof process < 'u' &&
  (({
    FORCE_COLOR: Un,
    NODE_DISABLE_COLORS: Po,
    NO_COLOR: To,
    TERM: Ro,
  } = process.env || {}),
  (Co = process.stdout && process.stdout.isTTY));
var So = {
  enabled:
    !Po && To == null && Ro !== 'dumb' && ((Un != null && Un !== '0') || Co),
};
function M(e, t) {
  let r = new RegExp(`\\x1b\\[${t}m`, 'g'),
    n = `\x1B[${e}m`,
    i = `\x1B[${t}m`;
  return function (o) {
    return !So.enabled || o == null
      ? o
      : n + (~('' + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
  };
}
var lu = M(0, 0),
  H = M(1, 22),
  ke = M(2, 22),
  uu = M(3, 23),
  Z = M(4, 24),
  cu = M(7, 27),
  pu = M(8, 28),
  du = M(9, 29),
  mu = M(30, 39),
  pe = M(31, 39),
  Ve = M(32, 39),
  De = M(33, 39),
  rt = M(34, 39),
  fu = M(35, 39),
  _e = M(36, 39),
  gu = M(37, 39),
  Ut = M(90, 39),
  hu = M(90, 39),
  yu = M(40, 49),
  Eu = M(41, 49),
  bu = M(42, 49),
  wu = M(43, 49),
  xu = M(44, 49),
  vu = M(45, 49),
  Pu = M(46, 49),
  Tu = M(47, 49);
var Ru = 100,
  Ao = ['green', 'yellow', 'blue', 'magenta', 'cyan', 'red'],
  Qt = [],
  Io = Date.now(),
  Cu = 0,
  Qn = typeof process < 'u' ? process.env : {};
globalThis.DEBUG ??= Qn.DEBUG ?? '';
globalThis.DEBUG_COLORS ??= Qn.DEBUG_COLORS ? Qn.DEBUG_COLORS === 'true' : !0;
var Gt = {
  enable(e) {
    typeof e == 'string' && (globalThis.DEBUG = e);
  },
  disable() {
    let e = globalThis.DEBUG;
    return (globalThis.DEBUG = ''), e;
  },
  enabled(e) {
    let t = globalThis.DEBUG.split(',').map((i) =>
        i.replace(/[.+?^${}()|[\]\\]/g, '\\$&'),
      ),
      r = t.some((i) =>
        i === '' || i[0] === '-'
          ? !1
          : e.match(RegExp(i.split('*').join('.*') + '$')),
      ),
      n = t.some((i) =>
        i === '' || i[0] !== '-'
          ? !1
          : e.match(RegExp(i.slice(1).split('*').join('.*') + '$')),
      );
    return r && !n;
  },
  log: (...e) => {
    let [t, r, ...n] = e;
    (console.warn ?? console.log)(`${t} ${r}`, ...n);
  },
  formatters: {},
};
function Su(e) {
  let t = {
      color: Ao[Cu++ % Ao.length],
      enabled: Gt.enabled(e),
      namespace: e,
      log: Gt.log,
      extend: () => {},
    },
    r = (...n) => {
      let { enabled: i, namespace: o, color: s, log: a } = t;
      if (
        (n.length !== 0 && Qt.push([o, ...n]),
        Qt.length > Ru && Qt.shift(),
        Gt.enabled(o) || i)
      ) {
        let l = n.map((c) => (typeof c == 'string' ? c : Au(c))),
          u = `+${Date.now() - Io}ms`;
        (Io = Date.now()),
          globalThis.DEBUG_COLORS
            ? a(Mr[s](H(o)), ...l, Mr[s](u))
            : a(o, ...l, u);
      }
    };
  return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => (t[i] = o) });
}
var Gn = new Proxy(Su, { get: (e, t) => Gt[t], set: (e, t, r) => (Gt[t] = r) });
function Au(e, t = 2) {
  let r = new Set();
  return JSON.stringify(
    e,
    (n, i) => {
      if (typeof i == 'object' && i !== null) {
        if (r.has(i)) return '[Circular *]';
        r.add(i);
      } else if (typeof i == 'bigint') return i.toString();
      return i;
    },
    t,
  );
}
function Oo(e = 7500) {
  let t = Qt.map(
    ([r, ...n]) =>
      `${r} ${n.map((i) => (typeof i == 'string' ? i : JSON.stringify(i))).join(' ')}`,
  ).join(`
`);
  return t.length < e ? t : t.slice(-e);
}
function ko() {
  Qt.length = 0;
}
var L = Gn;
var Do = k(require('fs'));
function Jn() {
  let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
  if (!(e && Do.default.existsSync(e)) && process.arch === 'ia32')
    throw new Error(
      'The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)',
    );
}
var Hn = [
  'darwin',
  'darwin-arm64',
  'debian-openssl-1.0.x',
  'debian-openssl-1.1.x',
  'debian-openssl-3.0.x',
  'rhel-openssl-1.0.x',
  'rhel-openssl-1.1.x',
  'rhel-openssl-3.0.x',
  'linux-arm64-openssl-1.1.x',
  'linux-arm64-openssl-1.0.x',
  'linux-arm64-openssl-3.0.x',
  'linux-arm-openssl-1.1.x',
  'linux-arm-openssl-1.0.x',
  'linux-arm-openssl-3.0.x',
  'linux-musl',
  'linux-musl-openssl-3.0.x',
  'linux-musl-arm64-openssl-1.1.x',
  'linux-musl-arm64-openssl-3.0.x',
  'linux-nixos',
  'linux-static-x64',
  'linux-static-arm64',
  'windows',
  'freebsd11',
  'freebsd12',
  'freebsd13',
  'freebsd14',
  'freebsd15',
  'openbsd',
  'netbsd',
  'arm',
];
var $r = 'libquery_engine';
function qr(e, t) {
  let r = t === 'url';
  return e.includes('windows')
    ? r
      ? 'query_engine.dll.node'
      : `query_engine-${e}.dll.node`
    : e.includes('darwin')
      ? r
        ? `${$r}.dylib.node`
        : `${$r}-${e}.dylib.node`
      : r
        ? `${$r}.so.node`
        : `${$r}-${e}.so.node`;
}
var Fo = k(require('child_process')),
  Zn = k(require('fs/promises')),
  Qr = k(require('os'));
var Ne = Symbol.for('@ts-pattern/matcher'),
  Iu = Symbol.for('@ts-pattern/isVariadic'),
  jr = '@ts-pattern/anonymous-select-key',
  Wn = (e) => !!(e && typeof e == 'object'),
  Vr = (e) => e && !!e[Ne],
  we = (e, t, r) => {
    if (Vr(e)) {
      let n = e[Ne](),
        { matched: i, selections: o } = n.match(t);
      return i && o && Object.keys(o).forEach((s) => r(s, o[s])), i;
    }
    if (Wn(e)) {
      if (!Wn(t)) return !1;
      if (Array.isArray(e)) {
        if (!Array.isArray(t)) return !1;
        let n = [],
          i = [],
          o = [];
        for (let s of e.keys()) {
          let a = e[s];
          Vr(a) && a[Iu] ? o.push(a) : o.length ? i.push(a) : n.push(a);
        }
        if (o.length) {
          if (o.length > 1)
            throw new Error(
              'Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.',
            );
          if (t.length < n.length + i.length) return !1;
          let s = t.slice(0, n.length),
            a = i.length === 0 ? [] : t.slice(-i.length),
            l = t.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
          return (
            n.every((u, c) => we(u, s[c], r)) &&
            i.every((u, c) => we(u, a[c], r)) &&
            (o.length === 0 || we(o[0], l, r))
          );
        }
        return e.length === t.length && e.every((s, a) => we(s, t[a], r));
      }
      return Reflect.ownKeys(e).every((n) => {
        let i = e[n];
        return (
          (n in t || (Vr((o = i)) && o[Ne]().matcherType === 'optional')) &&
          we(i, t[n], r)
        );
        var o;
      });
    }
    return Object.is(t, e);
  },
  Ge = (e) => {
    var t, r, n;
    return Wn(e)
      ? Vr(e)
        ? (t =
            (r = (n = e[Ne]()).getSelectionKeys) == null
              ? void 0
              : r.call(n)) != null
          ? t
          : []
        : Array.isArray(e)
          ? Jt(e, Ge)
          : Jt(Object.values(e), Ge)
      : [];
  },
  Jt = (e, t) => e.reduce((r, n) => r.concat(t(n)), []);
function de(e) {
  return Object.assign(e, {
    optional: () => Ou(e),
    and: (t) => V(e, t),
    or: (t) => ku(e, t),
    select: (t) => (t === void 0 ? _o(e) : _o(t, e)),
  });
}
function Ou(e) {
  return de({
    [Ne]: () => ({
      match: (t) => {
        let r = {},
          n = (i, o) => {
            r[i] = o;
          };
        return t === void 0
          ? (Ge(e).forEach((i) => n(i, void 0)), { matched: !0, selections: r })
          : { matched: we(e, t, n), selections: r };
      },
      getSelectionKeys: () => Ge(e),
      matcherType: 'optional',
    }),
  });
}
function V(...e) {
  return de({
    [Ne]: () => ({
      match: (t) => {
        let r = {},
          n = (i, o) => {
            r[i] = o;
          };
        return { matched: e.every((i) => we(i, t, n)), selections: r };
      },
      getSelectionKeys: () => Jt(e, Ge),
      matcherType: 'and',
    }),
  });
}
function ku(...e) {
  return de({
    [Ne]: () => ({
      match: (t) => {
        let r = {},
          n = (i, o) => {
            r[i] = o;
          };
        return (
          Jt(e, Ge).forEach((i) => n(i, void 0)),
          { matched: e.some((i) => we(i, t, n)), selections: r }
        );
      },
      getSelectionKeys: () => Jt(e, Ge),
      matcherType: 'or',
    }),
  });
}
function I(e) {
  return { [Ne]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function _o(...e) {
  let t = typeof e[0] == 'string' ? e[0] : void 0,
    r = e.length === 2 ? e[1] : typeof e[0] == 'string' ? void 0 : e[0];
  return de({
    [Ne]: () => ({
      match: (n) => {
        let i = { [t ?? jr]: n };
        return {
          matched:
            r === void 0 ||
            we(r, n, (o, s) => {
              i[o] = s;
            }),
          selections: i,
        };
      },
      getSelectionKeys: () => [t ?? jr].concat(r === void 0 ? [] : Ge(r)),
    }),
  });
}
function Ee(e) {
  return typeof e == 'number';
}
function je(e) {
  return typeof e == 'string';
}
function Be(e) {
  return typeof e == 'bigint';
}
var tf = de(
  I(function (e) {
    return !0;
  }),
);
var Ue = (e) =>
    Object.assign(de(e), {
      startsWith: (t) => {
        return Ue(V(e, ((r = t), I((n) => je(n) && n.startsWith(r)))));
        var r;
      },
      endsWith: (t) => {
        return Ue(V(e, ((r = t), I((n) => je(n) && n.endsWith(r)))));
        var r;
      },
      minLength: (t) => Ue(V(e, ((r) => I((n) => je(n) && n.length >= r))(t))),
      length: (t) => Ue(V(e, ((r) => I((n) => je(n) && n.length === r))(t))),
      maxLength: (t) => Ue(V(e, ((r) => I((n) => je(n) && n.length <= r))(t))),
      includes: (t) => {
        return Ue(V(e, ((r = t), I((n) => je(n) && n.includes(r)))));
        var r;
      },
      regex: (t) => {
        return Ue(V(e, ((r = t), I((n) => je(n) && !!n.match(r)))));
        var r;
      },
    }),
  rf = Ue(I(je)),
  be = (e) =>
    Object.assign(de(e), {
      between: (t, r) =>
        be(V(e, ((n, i) => I((o) => Ee(o) && n <= o && i >= o))(t, r))),
      lt: (t) => be(V(e, ((r) => I((n) => Ee(n) && n < r))(t))),
      gt: (t) => be(V(e, ((r) => I((n) => Ee(n) && n > r))(t))),
      lte: (t) => be(V(e, ((r) => I((n) => Ee(n) && n <= r))(t))),
      gte: (t) => be(V(e, ((r) => I((n) => Ee(n) && n >= r))(t))),
      int: () =>
        be(
          V(
            e,
            I((t) => Ee(t) && Number.isInteger(t)),
          ),
        ),
      finite: () =>
        be(
          V(
            e,
            I((t) => Ee(t) && Number.isFinite(t)),
          ),
        ),
      positive: () =>
        be(
          V(
            e,
            I((t) => Ee(t) && t > 0),
          ),
        ),
      negative: () =>
        be(
          V(
            e,
            I((t) => Ee(t) && t < 0),
          ),
        ),
    }),
  nf = be(I(Ee)),
  Qe = (e) =>
    Object.assign(de(e), {
      between: (t, r) =>
        Qe(V(e, ((n, i) => I((o) => Be(o) && n <= o && i >= o))(t, r))),
      lt: (t) => Qe(V(e, ((r) => I((n) => Be(n) && n < r))(t))),
      gt: (t) => Qe(V(e, ((r) => I((n) => Be(n) && n > r))(t))),
      lte: (t) => Qe(V(e, ((r) => I((n) => Be(n) && n <= r))(t))),
      gte: (t) => Qe(V(e, ((r) => I((n) => Be(n) && n >= r))(t))),
      positive: () =>
        Qe(
          V(
            e,
            I((t) => Be(t) && t > 0),
          ),
        ),
      negative: () =>
        Qe(
          V(
            e,
            I((t) => Be(t) && t < 0),
          ),
        ),
    }),
  of = Qe(I(Be)),
  sf = de(
    I(function (e) {
      return typeof e == 'boolean';
    }),
  ),
  af = de(
    I(function (e) {
      return typeof e == 'symbol';
    }),
  ),
  lf = de(
    I(function (e) {
      return e == null;
    }),
  ),
  uf = de(
    I(function (e) {
      return e != null;
    }),
  );
var Kn = class extends Error {
    constructor(t) {
      let r;
      try {
        r = JSON.stringify(t);
      } catch {
        r = t;
      }
      super(`Pattern matching error: no pattern matches value ${r}`),
        (this.input = void 0),
        (this.input = t);
    }
  },
  Yn = { matched: !1, value: void 0 };
function dt(e) {
  return new zn(e, Yn);
}
var zn = class e {
  constructor(t, r) {
    (this.input = void 0),
      (this.state = void 0),
      (this.input = t),
      (this.state = r);
  }
  with(...t) {
    if (this.state.matched) return this;
    let r = t[t.length - 1],
      n = [t[0]],
      i;
    t.length === 3 && typeof t[1] == 'function'
      ? (i = t[1])
      : t.length > 2 && n.push(...t.slice(1, t.length - 1));
    let o = !1,
      s = {},
      a = (u, c) => {
        (o = !0), (s[u] = c);
      },
      l =
        !n.some((u) => we(u, this.input, a)) || (i && !i(this.input))
          ? Yn
          : {
              matched: !0,
              value: r(o ? (jr in s ? s[jr] : s) : this.input, this.input),
            };
    return new e(this.input, l);
  }
  when(t, r) {
    if (this.state.matched) return this;
    let n = !!t(this.input);
    return new e(
      this.input,
      n ? { matched: !0, value: r(this.input, this.input) } : Yn,
    );
  }
  otherwise(t) {
    return this.state.matched ? this.state.value : t(this.input);
  }
  exhaustive() {
    if (this.state.matched) return this.state.value;
    throw new Kn(this.input);
  }
  run() {
    return this.exhaustive();
  }
  returnType() {
    return this;
  }
};
var Mo = require('util');
var Du = { warn: De('prisma:warn') },
  _u = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
function Br(e, ...t) {
  _u.warn() && console.warn(`${Du.warn} ${e}`, ...t);
}
var Nu = (0, Mo.promisify)(Fo.default.exec),
  re = L('prisma:get-platform'),
  Lu = ['1.0.x', '1.1.x', '3.0.x'];
async function $o() {
  let e = Qr.default.platform(),
    t = process.arch;
  if (e === 'freebsd') {
    let s = await Gr('freebsd-version');
    if (s && s.trim().length > 0) {
      let l = /^(\d+)\.?/.exec(s);
      if (l)
        return { platform: 'freebsd', targetDistro: `freebsd${l[1]}`, arch: t };
    }
  }
  if (e !== 'linux') return { platform: e, arch: t };
  let r = await Mu(),
    n = await Gu(),
    i = qu({ arch: t, archFromUname: n, familyDistro: r.familyDistro }),
    { libssl: o } = await Vu(i);
  return { platform: 'linux', libssl: o, arch: t, archFromUname: n, ...r };
}
function Fu(e) {
  let t = /^ID="?([^"\n]*)"?$/im,
    r = /^ID_LIKE="?([^"\n]*)"?$/im,
    n = t.exec(e),
    i = (n && n[1] && n[1].toLowerCase()) || '',
    o = r.exec(e),
    s = (o && o[1] && o[1].toLowerCase()) || '',
    a = dt({ id: i, idLike: s })
      .with({ id: 'alpine' }, ({ id: l }) => ({
        targetDistro: 'musl',
        familyDistro: l,
        originalDistro: l,
      }))
      .with({ id: 'raspbian' }, ({ id: l }) => ({
        targetDistro: 'arm',
        familyDistro: 'debian',
        originalDistro: l,
      }))
      .with({ id: 'nixos' }, ({ id: l }) => ({
        targetDistro: 'nixos',
        originalDistro: l,
        familyDistro: 'nixos',
      }))
      .with({ id: 'debian' }, { id: 'ubuntu' }, ({ id: l }) => ({
        targetDistro: 'debian',
        familyDistro: 'debian',
        originalDistro: l,
      }))
      .with(
        { id: 'rhel' },
        { id: 'centos' },
        { id: 'fedora' },
        ({ id: l }) => ({
          targetDistro: 'rhel',
          familyDistro: 'rhel',
          originalDistro: l,
        }),
      )
      .when(
        ({ idLike: l }) => l.includes('debian') || l.includes('ubuntu'),
        ({ id: l }) => ({
          targetDistro: 'debian',
          familyDistro: 'debian',
          originalDistro: l,
        }),
      )
      .when(
        ({ idLike: l }) => i === 'arch' || l.includes('arch'),
        ({ id: l }) => ({
          targetDistro: 'debian',
          familyDistro: 'arch',
          originalDistro: l,
        }),
      )
      .when(
        ({ idLike: l }) =>
          l.includes('centos') ||
          l.includes('fedora') ||
          l.includes('rhel') ||
          l.includes('suse'),
        ({ id: l }) => ({
          targetDistro: 'rhel',
          familyDistro: 'rhel',
          originalDistro: l,
        }),
      )
      .otherwise(({ id: l }) => ({
        targetDistro: void 0,
        familyDistro: void 0,
        originalDistro: l,
      }));
  return (
    re(`Found distro info:
${JSON.stringify(a, null, 2)}`),
    a
  );
}
async function Mu() {
  let e = '/etc/os-release';
  try {
    let t = await Zn.default.readFile(e, { encoding: 'utf-8' });
    return Fu(t);
  } catch {
    return {
      targetDistro: void 0,
      familyDistro: void 0,
      originalDistro: void 0,
    };
  }
}
function $u(e) {
  let t = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
  if (t) {
    let r = `${t[1]}.x`;
    return qo(r);
  }
}
function No(e) {
  let t = /libssl\.so\.(\d)(\.\d)?/.exec(e);
  if (t) {
    let r = `${t[1]}${t[2] ?? '.0'}.x`;
    return qo(r);
  }
}
function qo(e) {
  let t = (() => {
    if (jo(e)) return e;
    let r = e.split('.');
    return (r[1] = '0'), r.join('.');
  })();
  if (Lu.includes(t)) return t;
}
function qu(e) {
  return dt(e)
    .with(
      { familyDistro: 'musl' },
      () => (
        re('Trying platform-specific paths for "alpine"'), ['/lib', '/usr/lib']
      ),
    )
    .with(
      { familyDistro: 'debian' },
      ({ archFromUname: t }) => (
        re('Trying platform-specific paths for "debian" (and "ubuntu")'),
        [`/usr/lib/${t}-linux-gnu`, `/lib/${t}-linux-gnu`]
      ),
    )
    .with(
      { familyDistro: 'rhel' },
      () => (
        re('Trying platform-specific paths for "rhel"'),
        ['/lib64', '/usr/lib64']
      ),
    )
    .otherwise(
      ({ familyDistro: t, arch: r, archFromUname: n }) => (
        re(`Don't know any platform-specific paths for "${t}" on ${r} (${n})`),
        []
      ),
    );
}
async function Vu(e) {
  let t = 'grep -v "libssl.so.0"',
    r = await Lo(e);
  if (r) {
    re(`Found libssl.so file using platform-specific paths: ${r}`);
    let o = No(r);
    if ((re(`The parsed libssl version is: ${o}`), o))
      return { libssl: o, strategy: 'libssl-specific-path' };
  }
  re('Falling back to "ldconfig" and other generic paths');
  let n = await Gr(
    `ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t}`,
  );
  if ((n || (n = await Lo(['/lib64', '/usr/lib64', '/lib', '/usr/lib'])), n)) {
    re(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
    let o = No(n);
    if ((re(`The parsed libssl version is: ${o}`), o))
      return { libssl: o, strategy: 'ldconfig' };
  }
  let i = await Gr('openssl version -v');
  if (i) {
    re(`Found openssl binary with version: ${i}`);
    let o = $u(i);
    if ((re(`The parsed openssl version is: ${o}`), o))
      return { libssl: o, strategy: 'openssl-binary' };
  }
  return re("Couldn't find any version of libssl or OpenSSL in the system"), {};
}
async function Lo(e) {
  for (let t of e) {
    let r = await ju(t);
    if (r) return r;
  }
}
async function ju(e) {
  try {
    return (await Zn.default.readdir(e)).find(
      (r) => r.startsWith('libssl.so.') && !r.startsWith('libssl.so.0'),
    );
  } catch (t) {
    if (t.code === 'ENOENT') return;
    throw t;
  }
}
async function nt() {
  let { binaryTarget: e } = await Vo();
  return e;
}
function Bu(e) {
  return e.binaryTarget !== void 0;
}
async function Xn() {
  let { memoized: e, ...t } = await Vo();
  return t;
}
var Ur = {};
async function Vo() {
  if (Bu(Ur)) return Promise.resolve({ ...Ur, memoized: !0 });
  let e = await $o(),
    t = Uu(e);
  return (Ur = { ...e, binaryTarget: t }), { ...Ur, memoized: !1 };
}
function Uu(e) {
  let {
    platform: t,
    arch: r,
    archFromUname: n,
    libssl: i,
    targetDistro: o,
    familyDistro: s,
    originalDistro: a,
  } = e;
  t === 'linux' &&
    !['x64', 'arm64'].includes(r) &&
    Br(
      `Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures (detected "${r}" instead). If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`,
    );
  let l = '1.1.x';
  if (t === 'linux' && i === void 0) {
    let c = dt({ familyDistro: s })
      .with(
        { familyDistro: 'debian' },
        () =>
          "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.",
      )
      .otherwise(
        () =>
          'Please manually install OpenSSL and try installing Prisma again.',
      );
    Br(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
  }
  let u = 'debian';
  if (
    (t === 'linux' &&
      o === void 0 &&
      re(`Distro is "${a}". Falling back to Prisma engines built for "${u}".`),
    t === 'darwin' && r === 'arm64')
  )
    return 'darwin-arm64';
  if (t === 'darwin') return 'darwin';
  if (t === 'win32') return 'windows';
  if (t === 'freebsd') return o;
  if (t === 'openbsd') return 'openbsd';
  if (t === 'netbsd') return 'netbsd';
  if (t === 'linux' && o === 'nixos') return 'linux-nixos';
  if (t === 'linux' && r === 'arm64')
    return `${o === 'musl' ? 'linux-musl-arm64' : 'linux-arm64'}-openssl-${i || l}`;
  if (t === 'linux' && r === 'arm') return `linux-arm-openssl-${i || l}`;
  if (t === 'linux' && o === 'musl') {
    let c = 'linux-musl';
    return !i || jo(i) ? c : `${c}-openssl-${i}`;
  }
  return t === 'linux' && o && i
    ? `${o}-openssl-${i}`
    : (t !== 'linux' &&
        Br(
          `Prisma detected unknown OS "${t}" and may not work as expected. Defaulting to "linux".`,
        ),
      i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
}
async function Qu(e) {
  try {
    return await e();
  } catch {
    return;
  }
}
function Gr(e) {
  return Qu(async () => {
    let t = await Nu(e);
    return re(`Command "${e}" successfully returned "${t.stdout}"`), t.stdout;
  });
}
async function Gu() {
  return typeof Qr.default.machine == 'function'
    ? Qr.default.machine()
    : (await Gr('uname -m'))?.trim();
}
function jo(e) {
  return e.startsWith('1.');
}
var Xo = k(Zo());
function si(e) {
  return (0, Xo.default)(e, e, { fallback: Z });
}
var zu = k(li());
var $ = k(require('path')),
  Zu = k(li()),
  jf = L('prisma:engines');
function es() {
  return $.default.join(__dirname, '../');
}
var Bf = 'libquery-engine';
$.default.join(__dirname, '../query-engine-darwin');
$.default.join(__dirname, '../query-engine-darwin-arm64');
$.default.join(__dirname, '../query-engine-debian-openssl-1.0.x');
$.default.join(__dirname, '../query-engine-debian-openssl-1.1.x');
$.default.join(__dirname, '../query-engine-debian-openssl-3.0.x');
$.default.join(__dirname, '../query-engine-linux-static-x64');
$.default.join(__dirname, '../query-engine-linux-static-arm64');
$.default.join(__dirname, '../query-engine-rhel-openssl-1.0.x');
$.default.join(__dirname, '../query-engine-rhel-openssl-1.1.x');
$.default.join(__dirname, '../query-engine-rhel-openssl-3.0.x');
$.default.join(__dirname, '../libquery_engine-darwin.dylib.node');
$.default.join(__dirname, '../libquery_engine-darwin-arm64.dylib.node');
$.default.join(__dirname, '../libquery_engine-debian-openssl-1.0.x.so.node');
$.default.join(__dirname, '../libquery_engine-debian-openssl-1.1.x.so.node');
$.default.join(__dirname, '../libquery_engine-debian-openssl-3.0.x.so.node');
$.default.join(
  __dirname,
  '../libquery_engine-linux-arm64-openssl-1.0.x.so.node',
);
$.default.join(
  __dirname,
  '../libquery_engine-linux-arm64-openssl-1.1.x.so.node',
);
$.default.join(
  __dirname,
  '../libquery_engine-linux-arm64-openssl-3.0.x.so.node',
);
$.default.join(__dirname, '../libquery_engine-linux-musl.so.node');
$.default.join(
  __dirname,
  '../libquery_engine-linux-musl-openssl-3.0.x.so.node',
);
$.default.join(__dirname, '../libquery_engine-rhel-openssl-1.0.x.so.node');
$.default.join(__dirname, '../libquery_engine-rhel-openssl-1.1.x.so.node');
$.default.join(__dirname, '../libquery_engine-rhel-openssl-3.0.x.so.node');
$.default.join(__dirname, '../query_engine-windows.dll.node');
var ui = k(require('fs')),
  ts = L('chmodPlusX');
function ci(e) {
  if (process.platform === 'win32') return;
  let t = ui.default.statSync(e),
    r = t.mode | 64 | 8 | 1;
  if (t.mode === r) {
    ts(`Execution permissions of ${e} are fine`);
    return;
  }
  let n = r.toString(8).slice(-3);
  ts(`Have to call chmodPlusX on ${e}`), ui.default.chmodSync(e, n);
}
function pi(e) {
  let t = e.e,
    r = (a) =>
      `Prisma cannot find the required \`${a}\` system library in your system`,
    n = t.message.includes('cannot open shared object file'),
    i = `Please refer to the documentation about Prisma's system requirements: ${si('https://pris.ly/d/system-requirements')}`,
    o = `Unable to require(\`${ke(e.id)}\`).`,
    s = dt({ message: t.message, code: t.code })
      .with({ code: 'ENOENT' }, () => 'File does not exist.')
      .when(
        ({ message: a }) => n && a.includes('libz'),
        () => `${r('libz')}. Please install it and try again.`,
      )
      .when(
        ({ message: a }) => n && a.includes('libgcc_s'),
        () => `${r('libgcc_s')}. Please install it and try again.`,
      )
      .when(
        ({ message: a }) => n && a.includes('libssl'),
        () => {
          let a = e.platformInfo.libssl
            ? `openssl-${e.platformInfo.libssl}`
            : 'openssl';
          return `${r('libssl')}. Please install ${a} and try again.`;
        },
      )
      .when(
        ({ message: a }) => a.includes('GLIBC'),
        () =>
          `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`,
      )
      .when(
        ({ message: a }) =>
          e.platformInfo.platform === 'linux' && a.includes('symbol not found'),
        () =>
          `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`,
      )
      .otherwise(
        () =>
          `The Prisma engines do not seem to be compatible with your system. ${i}`,
      );
  return `${o}
${s}

Details: ${t.message}`;
}
var hi = k(ss()),
  Kr = k(require('fs'));
var gt = k(require('path'));
function as(e) {
  let t = e.ignoreProcessEnv ? {} : process.env,
    r = (n) =>
      n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function (o, s) {
        let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
        if (!a) return o;
        let l = a[1],
          u,
          c;
        if (l === '\\') (c = a[0]), (u = c.replace('\\$', '$'));
        else {
          let p = a[2];
          (c = a[0].substring(l.length)),
            (u = Object.hasOwnProperty.call(t, p) ? t[p] : e.parsed[p] || ''),
            (u = r(u));
        }
        return o.replace(c, u);
      }, n) ?? n;
  for (let n in e.parsed) {
    let i = Object.hasOwnProperty.call(t, n) ? t[n] : e.parsed[n];
    e.parsed[n] = r(i);
  }
  for (let n in e.parsed) t[n] = e.parsed[n];
  return e;
}
var gi = L('prisma:tryLoadEnv');
function Kt(
  { rootEnvPath: e, schemaEnvPath: t },
  r = { conflictCheck: 'none' },
) {
  let n = ls(e);
  r.conflictCheck !== 'none' && fc(n, t, r.conflictCheck);
  let i = null;
  return (
    us(n?.path, t) || (i = ls(t)),
    !n && !i && gi('No Environment variables loaded'),
    i?.dotenvResult.error
      ? console.error(pe(H('Schema Env Error: ')) + i.dotenvResult.error)
      : {
          message: [n?.message, i?.message].filter(Boolean).join(`
`),
          parsed: { ...n?.dotenvResult?.parsed, ...i?.dotenvResult?.parsed },
        }
  );
}
function fc(e, t, r) {
  let n = e?.dotenvResult.parsed,
    i = !us(e?.path, t);
  if (n && t && i && Kr.default.existsSync(t)) {
    let o = hi.default.parse(Kr.default.readFileSync(t)),
      s = [];
    for (let a in o) n[a] === o[a] && s.push(a);
    if (s.length > 0) {
      let a = gt.default.relative(process.cwd(), e.path),
        l = gt.default.relative(process.cwd(), t);
      if (r === 'error') {
        let u = `There is a conflict between env var${s.length > 1 ? 's' : ''} in ${Z(a)} and ${Z(l)}
Conflicting env vars:
${s.map((c) => `  ${H(c)}`).join(`
`)}

We suggest to move the contents of ${Z(l)} to ${Z(a)} to consolidate your env vars.
`;
        throw new Error(u);
      } else if (r === 'warn') {
        let u = `Conflict for env var${s.length > 1 ? 's' : ''} ${s.map((c) => H(c)).join(', ')} in ${Z(a)} and ${Z(l)}
Env vars from ${Z(l)} overwrite the ones from ${Z(a)}
      `;
        console.warn(`${De('warn(prisma)')} ${u}`);
      }
    }
  }
}
function ls(e) {
  if (gc(e)) {
    gi(`Environment variables loaded from ${e}`);
    let t = hi.default.config({
      path: e,
      debug: process.env.DOTENV_CONFIG_DEBUG ? !0 : void 0,
    });
    return {
      dotenvResult: as(t),
      message: ke(
        `Environment variables loaded from ${gt.default.relative(process.cwd(), e)}`,
      ),
      path: e,
    };
  } else gi(`Environment variables not found at ${e}`);
  return null;
}
function us(e, t) {
  return e && t && gt.default.resolve(e) === gt.default.resolve(t);
}
function gc(e) {
  return !!(e && Kr.default.existsSync(e));
}
var cs = 'library';
function Yt(e) {
  let t = hc();
  return (
    t ||
    (e?.config.engineType === 'library'
      ? 'library'
      : e?.config.engineType === 'binary'
        ? 'binary'
        : cs)
  );
}
function hc() {
  let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
  return e === 'library' ? 'library' : e === 'binary' ? 'binary' : void 0;
}
var zt;
((t) => {
  let e;
  ((b) => (
    (b.findUnique = 'findUnique'),
    (b.findUniqueOrThrow = 'findUniqueOrThrow'),
    (b.findFirst = 'findFirst'),
    (b.findFirstOrThrow = 'findFirstOrThrow'),
    (b.findMany = 'findMany'),
    (b.create = 'create'),
    (b.createMany = 'createMany'),
    (b.createManyAndReturn = 'createManyAndReturn'),
    (b.update = 'update'),
    (b.updateMany = 'updateMany'),
    (b.upsert = 'upsert'),
    (b.delete = 'delete'),
    (b.deleteMany = 'deleteMany'),
    (b.groupBy = 'groupBy'),
    (b.count = 'count'),
    (b.aggregate = 'aggregate'),
    (b.findRaw = 'findRaw'),
    (b.aggregateRaw = 'aggregateRaw')
  ))((e = t.ModelAction ||= {}));
})((zt ||= {}));
var Zt = k(require('path'));
function yi(e) {
  return Zt.default.sep === Zt.default.posix.sep
    ? e
    : e.split(Zt.default.sep).join(Zt.default.posix.sep);
}
var hs = k(Ei());
function wi(e) {
  return String(new bi(e));
}
var bi = class {
  constructor(t) {
    this.config = t;
  }
  toString() {
    let { config: t } = this,
      r = t.provider.fromEnvVar
        ? `env("${t.provider.fromEnvVar}")`
        : t.provider.value,
      n = JSON.parse(
        JSON.stringify({ provider: r, binaryTargets: Ec(t.binaryTargets) }),
      );
    return `generator ${t.name} {
${(0, hs.default)(bc(n), 2)}
}`;
  }
};
function Ec(e) {
  let t;
  if (e.length > 0) {
    let r = e.find((n) => n.fromEnvVar !== null);
    r
      ? (t = `env("${r.fromEnvVar}")`)
      : (t = e.map((n) => (n.native ? 'native' : n.value)));
  } else t = void 0;
  return t;
}
function bc(e) {
  let t = Object.keys(e).reduce((r, n) => Math.max(r, n.length), 0);
  return Object.entries(e).map(([r, n]) => `${r.padEnd(t)} = ${wc(n)}`).join(`
`);
}
function wc(e) {
  return JSON.parse(
    JSON.stringify(e, (t, r) =>
      Array.isArray(r)
        ? `[${r.map((n) => JSON.stringify(n)).join(', ')}]`
        : JSON.stringify(r),
    ),
  );
}
var er = {};
Bt(er, {
  error: () => Pc,
  info: () => vc,
  log: () => xc,
  query: () => Tc,
  should: () => ys,
  tags: () => Xt,
  warn: () => xi,
});
var Xt = {
    error: pe('prisma:error'),
    warn: De('prisma:warn'),
    info: _e('prisma:info'),
    query: rt('prisma:query'),
  },
  ys = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
function xc(...e) {
  console.log(...e);
}
function xi(e, ...t) {
  ys.warn() && console.warn(`${Xt.warn} ${e}`, ...t);
}
function vc(e, ...t) {
  console.info(`${Xt.info} ${e}`, ...t);
}
function Pc(e, ...t) {
  console.error(`${Xt.error} ${e}`, ...t);
}
function Tc(e, ...t) {
  console.log(`${Xt.query} ${e}`, ...t);
}
function Yr(e, t) {
  if (!e)
    throw new Error(
      `${t}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`,
    );
}
function Fe(e, t) {
  throw new Error(t);
}
function Pi(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
var Ti = (e, t) => e.reduce((r, n) => ((r[t(n)] = n), r), {});
function ht(e, t) {
  let r = {};
  for (let n of Object.keys(e)) r[n] = t(e[n], n);
  return r;
}
function Ri(e, t) {
  if (e.length === 0) return;
  let r = e[0];
  for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
  return r;
}
function x(e, t) {
  Object.defineProperty(e, 'name', { value: t, configurable: !0 });
}
var vs = new Set(),
  tr = (e, t, ...r) => {
    vs.has(e) || (vs.add(e), xi(t, ...r));
  };
var R = class e extends Error {
  constructor(t, r, n) {
    super(t),
      (this.name = 'PrismaClientInitializationError'),
      (this.clientVersion = r),
      (this.errorCode = n),
      Error.captureStackTrace(e);
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientInitializationError';
  }
};
x(R, 'PrismaClientInitializationError');
var X = class extends Error {
  constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
    super(t),
      (this.name = 'PrismaClientKnownRequestError'),
      (this.code = r),
      (this.clientVersion = n),
      (this.meta = i),
      Object.defineProperty(this, 'batchRequestIdx', {
        value: o,
        enumerable: !1,
        writable: !0,
      });
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientKnownRequestError';
  }
};
x(X, 'PrismaClientKnownRequestError');
var ue = class extends Error {
  constructor(t, r) {
    super(t),
      (this.name = 'PrismaClientRustPanicError'),
      (this.clientVersion = r);
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientRustPanicError';
  }
};
x(ue, 'PrismaClientRustPanicError');
var j = class extends Error {
  constructor(t, { clientVersion: r, batchRequestIdx: n }) {
    super(t),
      (this.name = 'PrismaClientUnknownRequestError'),
      (this.clientVersion = r),
      Object.defineProperty(this, 'batchRequestIdx', {
        value: n,
        writable: !0,
        enumerable: !1,
      });
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientUnknownRequestError';
  }
};
x(j, 'PrismaClientUnknownRequestError');
var ee = class extends Error {
  constructor(r, { clientVersion: n }) {
    super(r);
    this.name = 'PrismaClientValidationError';
    this.clientVersion = n;
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientValidationError';
  }
};
x(ee, 'PrismaClientValidationError');
var yt = 9e15,
  Ye = 1e9,
  Ci = '0123456789abcdef',
  en =
    '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',
  tn =
    '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',
  Si = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -yt,
    maxE: yt,
    crypto: !1,
  },
  Cs,
  Me,
  w = !0,
  nn = '[DecimalError] ',
  Ke = nn + 'Invalid argument: ',
  Ss = nn + 'Precision limit exceeded',
  As = nn + 'crypto unavailable',
  Is = '[object Decimal]',
  te = Math.floor,
  Q = Math.pow,
  Cc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  Sc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  Ac = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  Os = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  he = 1e7,
  E = 7,
  Ic = 9007199254740991,
  Oc = en.length - 1,
  Ai = tn.length - 1,
  m = { toStringTag: Is };
m.absoluteValue = m.abs = function () {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), y(e);
};
m.ceil = function () {
  return y(new this.constructor(this), this.e + 1, 2);
};
m.clampedTo = m.clamp = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  if (((e = new i(e)), (t = new i(t)), !e.s || !t.s)) return new i(NaN);
  if (e.gt(t)) throw Error(Ke + t);
  return (r = n.cmp(e)), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
};
m.comparedTo = m.cmp = function (e) {
  var t,
    r,
    n,
    i,
    o = this,
    s = o.d,
    a = (e = new o.constructor(e)).d,
    l = o.s,
    u = e.s;
  if (!s || !a)
    return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ (l < 0) ? 1 : -1;
  if (!s[0] || !a[0]) return s[0] ? l : a[0] ? -u : 0;
  if (l !== u) return l;
  if (o.e !== e.e) return (o.e > e.e) ^ (l < 0) ? 1 : -1;
  for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (s[t] !== a[t]) return (s[t] > a[t]) ^ (l < 0) ? 1 : -1;
  return n === i ? 0 : (n > i) ^ (l < 0) ? 1 : -1;
};
m.cosine = m.cos = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.d
    ? r.d[0]
      ? ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + E),
        (n.rounding = 1),
        (r = kc(n, Ls(n, r))),
        (n.precision = e),
        (n.rounding = t),
        y(Me == 2 || Me == 3 ? r.neg() : r, e, t, !0))
      : new n(1)
    : new n(NaN);
};
m.cubeRoot = m.cbrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    c = this,
    p = c.constructor;
  if (!c.isFinite() || c.isZero()) return new p(c);
  for (
    w = !1,
      o = c.s * Q(c.s * c, 1 / 3),
      !o || Math.abs(o) == 1 / 0
        ? ((r = W(c.d)),
          (e = c.e),
          (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? '0' : '00'),
          (o = Q(r, 1 / 3)),
          (e = te((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
          o == 1 / 0
            ? (r = '5e' + e)
            : ((r = o.toExponential()),
              (r = r.slice(0, r.indexOf('e') + 1) + e)),
          (n = new p(r)),
          (n.s = c.s))
        : (n = new p(o.toString())),
      s = (e = p.precision) + 3;
    ;

  )
    if (
      ((a = n),
      (l = a.times(a).times(a)),
      (u = l.plus(c)),
      (n = F(u.plus(c).times(a), u.plus(l), s + 2, 1)),
      W(a.d).slice(0, s) === (r = W(n.d)).slice(0, s))
    )
      if (((r = r.slice(s - 3, s + 1)), r == '9999' || (!i && r == '4999'))) {
        if (!i && (y(a, e + 1, 0), a.times(a).times(a).eq(c))) {
          n = a;
          break;
        }
        (s += 4), (i = 1);
      } else {
        (!+r || (!+r.slice(1) && r.charAt(0) == '5')) &&
          (y(n, e + 1, 1), (t = !n.times(n).times(n).eq(c)));
        break;
      }
  return (w = !0), y(n, e, p.rounding, t);
};
m.decimalPlaces = m.dp = function () {
  var e,
    t = this.d,
    r = NaN;
  if (t) {
    if (((e = t.length - 1), (r = (e - te(this.e / E)) * E), (e = t[e]), e))
      for (; e % 10 == 0; e /= 10) r--;
    r < 0 && (r = 0);
  }
  return r;
};
m.dividedBy = m.div = function (e) {
  return F(this, new this.constructor(e));
};
m.dividedToIntegerBy = m.divToInt = function (e) {
  var t = this,
    r = t.constructor;
  return y(F(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
m.equals = m.eq = function (e) {
  return this.cmp(e) === 0;
};
m.floor = function () {
  return y(new this.constructor(this), this.e + 1, 3);
};
m.greaterThan = m.gt = function (e) {
  return this.cmp(e) > 0;
};
m.greaterThanOrEqualTo = m.gte = function (e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
m.hyperbolicCosine = m.cosh = function () {
  var e,
    t,
    r,
    n,
    i,
    o = this,
    s = o.constructor,
    a = new s(1);
  if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
  if (o.isZero()) return a;
  (r = s.precision),
    (n = s.rounding),
    (s.precision = r + Math.max(o.e, o.sd()) + 4),
    (s.rounding = 1),
    (i = o.d.length),
    i < 32
      ? ((e = Math.ceil(i / 3)), (t = (1 / sn(4, e)).toString()))
      : ((e = 16), (t = '2.3283064365386962890625e-10')),
    (o = Et(s, 1, o.times(t), new s(1), !0));
  for (var l, u = e, c = new s(8); u--; )
    (l = o.times(o)), (o = a.minus(l.times(c.minus(l.times(c)))));
  return y(o, (s.precision = r), (s.rounding = n), !0);
};
m.hyperbolicSine = m.sinh = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  if (!i.isFinite() || i.isZero()) return new o(i);
  if (
    ((t = o.precision),
    (r = o.rounding),
    (o.precision = t + Math.max(i.e, i.sd()) + 4),
    (o.rounding = 1),
    (n = i.d.length),
    n < 3)
  )
    i = Et(o, 2, i, i, !0);
  else {
    (e = 1.4 * Math.sqrt(n)),
      (e = e > 16 ? 16 : e | 0),
      (i = i.times(1 / sn(5, e))),
      (i = Et(o, 2, i, i, !0));
    for (var s, a = new o(5), l = new o(16), u = new o(20); e--; )
      (s = i.times(i)), (i = i.times(a.plus(s.times(l.times(s).plus(u)))));
  }
  return (o.precision = t), (o.rounding = r), y(i, t, r, !0);
};
m.hyperbolicTangent = m.tanh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 7),
        (n.rounding = 1),
        F(r.sinh(), r.cosh(), (n.precision = e), (n.rounding = t)))
    : new n(r.s);
};
m.inverseCosine = m.acos = function () {
  var e,
    t = this,
    r = t.constructor,
    n = t.abs().cmp(1),
    i = r.precision,
    o = r.rounding;
  return n !== -1
    ? n === 0
      ? t.isNeg()
        ? ge(r, i, o)
        : new r(0)
      : new r(NaN)
    : t.isZero()
      ? ge(r, i + 4, o).times(0.5)
      : ((r.precision = i + 6),
        (r.rounding = 1),
        (t = t.asin()),
        (e = ge(r, i + 4, o).times(0.5)),
        (r.precision = i),
        (r.rounding = o),
        e.minus(t));
};
m.inverseHyperbolicCosine = m.acosh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.lte(1)
    ? new n(r.eq(1) ? 0 : NaN)
    : r.isFinite()
      ? ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
        (n.rounding = 1),
        (w = !1),
        (r = r.times(r).minus(1).sqrt().plus(r)),
        (w = !0),
        (n.precision = e),
        (n.rounding = t),
        r.ln())
      : new n(r);
};
m.inverseHyperbolicSine = m.asinh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return !r.isFinite() || r.isZero()
    ? new n(r)
    : ((e = n.precision),
      (t = n.rounding),
      (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
      (n.rounding = 1),
      (w = !1),
      (r = r.times(r).plus(1).sqrt().plus(r)),
      (w = !0),
      (n.precision = e),
      (n.rounding = t),
      r.ln());
};
m.inverseHyperbolicTangent = m.atanh = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  return i.isFinite()
    ? i.e >= 0
      ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
      : ((e = o.precision),
        (t = o.rounding),
        (n = i.sd()),
        Math.max(n, e) < 2 * -i.e - 1
          ? y(new o(i), e, t, !0)
          : ((o.precision = r = n - i.e),
            (i = F(i.plus(1), new o(1).minus(i), r + e, 1)),
            (o.precision = e + 4),
            (o.rounding = 1),
            (i = i.ln()),
            (o.precision = e),
            (o.rounding = t),
            i.times(0.5)))
    : new o(NaN);
};
m.inverseSine = m.asin = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  return i.isZero()
    ? new o(i)
    : ((t = i.abs().cmp(1)),
      (r = o.precision),
      (n = o.rounding),
      t !== -1
        ? t === 0
          ? ((e = ge(o, r + 4, n).times(0.5)), (e.s = i.s), e)
          : new o(NaN)
        : ((o.precision = r + 6),
          (o.rounding = 1),
          (i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan()),
          (o.precision = r),
          (o.rounding = n),
          i.times(2)));
};
m.inverseTangent = m.atan = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u = this,
    c = u.constructor,
    p = c.precision,
    d = c.rounding;
  if (u.isFinite()) {
    if (u.isZero()) return new c(u);
    if (u.abs().eq(1) && p + 4 <= Ai)
      return (s = ge(c, p + 4, d).times(0.25)), (s.s = u.s), s;
  } else {
    if (!u.s) return new c(NaN);
    if (p + 4 <= Ai) return (s = ge(c, p + 4, d).times(0.5)), (s.s = u.s), s;
  }
  for (
    c.precision = a = p + 10,
      c.rounding = 1,
      r = Math.min(28, (a / E + 2) | 0),
      e = r;
    e;
    --e
  )
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (
    w = !1, t = Math.ceil(a / E), n = 1, l = u.times(u), s = new c(u), i = u;
    e !== -1;

  )
    if (
      ((i = i.times(l)),
      (o = s.minus(i.div((n += 2)))),
      (i = i.times(l)),
      (s = o.plus(i.div((n += 2)))),
      s.d[t] !== void 0)
    )
      for (e = t; s.d[e] === o.d[e] && e--; );
  return (
    r && (s = s.times(2 << (r - 1))),
    (w = !0),
    y(s, (c.precision = p), (c.rounding = d), !0)
  );
};
m.isFinite = function () {
  return !!this.d;
};
m.isInteger = m.isInt = function () {
  return !!this.d && te(this.e / E) > this.d.length - 2;
};
m.isNaN = function () {
  return !this.s;
};
m.isNegative = m.isNeg = function () {
  return this.s < 0;
};
m.isPositive = m.isPos = function () {
  return this.s > 0;
};
m.isZero = function () {
  return !!this.d && this.d[0] === 0;
};
m.lessThan = m.lt = function (e) {
  return this.cmp(e) < 0;
};
m.lessThanOrEqualTo = m.lte = function (e) {
  return this.cmp(e) < 1;
};
m.logarithm = m.log = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u = this,
    c = u.constructor,
    p = c.precision,
    d = c.rounding,
    f = 5;
  if (e == null) (e = new c(10)), (t = !0);
  else {
    if (((e = new c(e)), (r = e.d), e.s < 0 || !r || !r[0] || e.eq(1)))
      return new c(NaN);
    t = e.eq(10);
  }
  if (((r = u.d), u.s < 0 || !r || !r[0] || u.eq(1)))
    return new c(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (t)
    if (r.length > 1) o = !0;
    else {
      for (i = r[0]; i % 10 === 0; ) i /= 10;
      o = i !== 1;
    }
  if (
    ((w = !1),
    (a = p + f),
    (s = We(u, a)),
    (n = t ? rn(c, a + 10) : We(e, a)),
    (l = F(s, n, a, 1)),
    rr(l.d, (i = p), d))
  )
    do
      if (
        ((a += 10),
        (s = We(u, a)),
        (n = t ? rn(c, a + 10) : We(e, a)),
        (l = F(s, n, a, 1)),
        !o)
      ) {
        +W(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = y(l, p + 1, 0));
        break;
      }
    while (rr(l.d, (i += 10), d));
  return (w = !0), y(l, p, d);
};
m.minus = m.sub = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    c,
    p,
    d,
    f = this,
    g = f.constructor;
  if (((e = new g(e)), !f.d || !e.d))
    return (
      !f.s || !e.s
        ? (e = new g(NaN))
        : f.d
          ? (e.s = -e.s)
          : (e = new g(e.d || f.s !== e.s ? f : NaN)),
      e
    );
  if (f.s != e.s) return (e.s = -e.s), f.plus(e);
  if (
    ((u = f.d), (d = e.d), (a = g.precision), (l = g.rounding), !u[0] || !d[0])
  ) {
    if (d[0]) e.s = -e.s;
    else if (u[0]) e = new g(f);
    else return new g(l === 3 ? -0 : 0);
    return w ? y(e, a, l) : e;
  }
  if (((r = te(e.e / E)), (c = te(f.e / E)), (u = u.slice()), (o = c - r), o)) {
    for (
      p = o < 0,
        p
          ? ((t = u), (o = -o), (s = d.length))
          : ((t = d), (r = c), (s = u.length)),
        n = Math.max(Math.ceil(a / E), s) + 2,
        o > n && ((o = n), (t.length = 1)),
        t.reverse(),
        n = o;
      n--;

    )
      t.push(0);
    t.reverse();
  } else {
    for (n = u.length, s = d.length, p = n < s, p && (s = n), n = 0; n < s; n++)
      if (u[n] != d[n]) {
        p = u[n] < d[n];
        break;
      }
    o = 0;
  }
  for (
    p && ((t = u), (u = d), (d = t), (e.s = -e.s)),
      s = u.length,
      n = d.length - s;
    n > 0;
    --n
  )
    u[s++] = 0;
  for (n = d.length; n > o; ) {
    if (u[--n] < d[n]) {
      for (i = n; i && u[--i] === 0; ) u[i] = he - 1;
      --u[i], (u[n] += he);
    }
    u[n] -= d[n];
  }
  for (; u[--s] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --r;
  return u[0]
    ? ((e.d = u), (e.e = on(u, r)), w ? y(e, a, l) : e)
    : new g(l === 3 ? -0 : 0);
};
m.modulo = m.mod = function (e) {
  var t,
    r = this,
    n = r.constructor;
  return (
    (e = new n(e)),
    !r.d || !e.s || (e.d && !e.d[0])
      ? new n(NaN)
      : !e.d || (r.d && !r.d[0])
        ? y(new n(r), n.precision, n.rounding)
        : ((w = !1),
          n.modulo == 9
            ? ((t = F(r, e.abs(), 0, 3, 1)), (t.s *= e.s))
            : (t = F(r, e, 0, n.modulo, 1)),
          (t = t.times(e)),
          (w = !0),
          r.minus(t))
  );
};
m.naturalExponential = m.exp = function () {
  return Ii(this);
};
m.naturalLogarithm = m.ln = function () {
  return We(this);
};
m.negated = m.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s), y(e);
};
m.plus = m.add = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    c,
    p = this,
    d = p.constructor;
  if (((e = new d(e)), !p.d || !e.d))
    return (
      !p.s || !e.s
        ? (e = new d(NaN))
        : p.d || (e = new d(e.d || p.s === e.s ? p : NaN)),
      e
    );
  if (p.s != e.s) return (e.s = -e.s), p.minus(e);
  if (
    ((u = p.d), (c = e.d), (a = d.precision), (l = d.rounding), !u[0] || !c[0])
  )
    return c[0] || (e = new d(p)), w ? y(e, a, l) : e;
  if (((o = te(p.e / E)), (n = te(e.e / E)), (u = u.slice()), (i = o - n), i)) {
    for (
      i < 0
        ? ((r = u), (i = -i), (s = c.length))
        : ((r = c), (n = o), (s = u.length)),
        o = Math.ceil(a / E),
        s = o > s ? o + 1 : s + 1,
        i > s && ((i = s), (r.length = 1)),
        r.reverse();
      i--;

    )
      r.push(0);
    r.reverse();
  }
  for (
    s = u.length,
      i = c.length,
      s - i < 0 && ((i = s), (r = c), (c = u), (u = r)),
      t = 0;
    i;

  )
    (t = ((u[--i] = u[i] + c[i] + t) / he) | 0), (u[i] %= he);
  for (t && (u.unshift(t), ++n), s = u.length; u[--s] == 0; ) u.pop();
  return (e.d = u), (e.e = on(u, n)), w ? y(e, a, l) : e;
};
m.precision = m.sd = function (e) {
  var t,
    r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ke + e);
  return (
    r.d ? ((t = ks(r.d)), e && r.e + 1 > t && (t = r.e + 1)) : (t = NaN), t
  );
};
m.round = function () {
  var e = this,
    t = e.constructor;
  return y(new t(e), e.e + 1, t.rounding);
};
m.sine = m.sin = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + E),
        (n.rounding = 1),
        (r = _c(n, Ls(n, r))),
        (n.precision = e),
        (n.rounding = t),
        y(Me > 2 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
m.squareRoot = m.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s = this,
    a = s.d,
    l = s.e,
    u = s.s,
    c = s.constructor;
  if (u !== 1 || !a || !a[0])
    return new c(!u || (u < 0 && (!a || a[0])) ? NaN : a ? s : 1 / 0);
  for (
    w = !1,
      u = Math.sqrt(+s),
      u == 0 || u == 1 / 0
        ? ((t = W(a)),
          (t.length + l) % 2 == 0 && (t += '0'),
          (u = Math.sqrt(t)),
          (l = te((l + 1) / 2) - (l < 0 || l % 2)),
          u == 1 / 0
            ? (t = '5e' + l)
            : ((t = u.toExponential()),
              (t = t.slice(0, t.indexOf('e') + 1) + l)),
          (n = new c(t)))
        : (n = new c(u.toString())),
      r = (l = c.precision) + 3;
    ;

  )
    if (
      ((o = n),
      (n = o.plus(F(s, o, r + 2, 1)).times(0.5)),
      W(o.d).slice(0, r) === (t = W(n.d)).slice(0, r))
    )
      if (((t = t.slice(r - 3, r + 1)), t == '9999' || (!i && t == '4999'))) {
        if (!i && (y(o, l + 1, 0), o.times(o).eq(s))) {
          n = o;
          break;
        }
        (r += 4), (i = 1);
      } else {
        (!+t || (!+t.slice(1) && t.charAt(0) == '5')) &&
          (y(n, l + 1, 1), (e = !n.times(n).eq(s)));
        break;
      }
  return (w = !0), y(n, l, c.rounding, e);
};
m.tangent = m.tan = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 10),
        (n.rounding = 1),
        (r = r.sin()),
        (r.s = 1),
        (r = F(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
        (n.precision = e),
        (n.rounding = t),
        y(Me == 2 || Me == 4 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
m.times = m.mul = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    c = this,
    p = c.constructor,
    d = c.d,
    f = (e = new p(e)).d;
  if (((e.s *= c.s), !d || !d[0] || !f || !f[0]))
    return new p(
      !e.s || (d && !d[0] && !f) || (f && !f[0] && !d)
        ? NaN
        : !d || !f
          ? e.s / 0
          : e.s * 0,
    );
  for (
    r = te(c.e / E) + te(e.e / E),
      l = d.length,
      u = f.length,
      l < u && ((o = d), (d = f), (f = o), (s = l), (l = u), (u = s)),
      o = [],
      s = l + u,
      n = s;
    n--;

  )
    o.push(0);
  for (n = u; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      (a = o[i] + f[n] * d[i - n - 1] + t),
        (o[i--] = a % he | 0),
        (t = (a / he) | 0);
    o[i] = (o[i] + t) % he | 0;
  }
  for (; !o[--s]; ) o.pop();
  return (
    t ? ++r : o.shift(),
    (e.d = o),
    (e.e = on(o, r)),
    w ? y(e, p.precision, p.rounding) : e
  );
};
m.toBinary = function (e, t) {
  return ki(this, 2, e, t);
};
m.toDecimalPlaces = m.toDP = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (oe(e, 0, Ye),
        t === void 0 ? (t = n.rounding) : oe(t, 0, 8),
        y(r, e + r.e + 1, t))
  );
};
m.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = xe(n, !0))
      : (oe(e, 0, Ye),
        t === void 0 ? (t = i.rounding) : oe(t, 0, 8),
        (n = y(new i(n), e + 1, t)),
        (r = xe(n, !0, e + 1))),
    n.isNeg() && !n.isZero() ? '-' + r : r
  );
};
m.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    o = i.constructor;
  return (
    e === void 0
      ? (r = xe(i))
      : (oe(e, 0, Ye),
        t === void 0 ? (t = o.rounding) : oe(t, 0, 8),
        (n = y(new o(i), e + i.e + 1, t)),
        (r = xe(n, !1, e + n.e + 1))),
    i.isNeg() && !i.isZero() ? '-' + r : r
  );
};
m.toFraction = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    c,
    p,
    d,
    f = this,
    g = f.d,
    h = f.constructor;
  if (!g) return new h(f);
  if (
    ((u = r = new h(1)),
    (n = l = new h(0)),
    (t = new h(n)),
    (o = t.e = ks(g) - f.e - 1),
    (s = o % E),
    (t.d[0] = Q(10, s < 0 ? E + s : s)),
    e == null)
  )
    e = o > 0 ? t : u;
  else {
    if (((a = new h(e)), !a.isInt() || a.lt(u))) throw Error(Ke + a);
    e = a.gt(t) ? (o > 0 ? t : u) : a;
  }
  for (
    w = !1,
      a = new h(W(g)),
      c = h.precision,
      h.precision = o = g.length * E * 2;
    (p = F(a, t, 0, 1, 1)), (i = r.plus(p.times(n))), i.cmp(e) != 1;

  )
    (r = n),
      (n = i),
      (i = u),
      (u = l.plus(p.times(i))),
      (l = i),
      (i = t),
      (t = a.minus(p.times(i))),
      (a = i);
  return (
    (i = F(e.minus(r), n, 0, 1, 1)),
    (l = l.plus(i.times(u))),
    (r = r.plus(i.times(n))),
    (l.s = u.s = f.s),
    (d =
      F(u, n, o, 1)
        .minus(f)
        .abs()
        .cmp(F(l, r, o, 1).minus(f).abs()) < 1
        ? [u, n]
        : [l, r]),
    (h.precision = c),
    (w = !0),
    d
  );
};
m.toHexadecimal = m.toHex = function (e, t) {
  return ki(this, 16, e, t);
};
m.toNearest = function (e, t) {
  var r = this,
    n = r.constructor;
  if (((r = new n(r)), e == null)) {
    if (!r.d) return r;
    (e = new n(1)), (t = n.rounding);
  } else {
    if (((e = new n(e)), t === void 0 ? (t = n.rounding) : oe(t, 0, 8), !r.d))
      return e.s ? r : e;
    if (!e.d) return e.s && (e.s = r.s), e;
  }
  return (
    e.d[0]
      ? ((w = !1), (r = F(r, e, 0, t, 1).times(e)), (w = !0), y(r))
      : ((e.s = r.s), (r = e)),
    r
  );
};
m.toNumber = function () {
  return +this;
};
m.toOctal = function (e, t) {
  return ki(this, 8, e, t);
};
m.toPower = m.pow = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a = this,
    l = a.constructor,
    u = +(e = new l(e));
  if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new l(Q(+a, u));
  if (((a = new l(a)), a.eq(1))) return a;
  if (((n = l.precision), (o = l.rounding), e.eq(1))) return y(a, n, o);
  if (((t = te(e.e / E)), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Ic))
    return (i = Ds(l, a, r, n)), e.s < 0 ? new l(1).div(i) : y(i, n, o);
  if (((s = a.s), s < 0)) {
    if (t < e.d.length - 1) return new l(NaN);
    if ((e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1))
      return (a.s = s), a;
  }
  return (
    (r = Q(+a, u)),
    (t =
      r == 0 || !isFinite(r)
        ? te(u * (Math.log('0.' + W(a.d)) / Math.LN10 + a.e + 1))
        : new l(r + '').e),
    t > l.maxE + 1 || t < l.minE - 1
      ? new l(t > 0 ? s / 0 : 0)
      : ((w = !1),
        (l.rounding = a.s = 1),
        (r = Math.min(12, (t + '').length)),
        (i = Ii(e.times(We(a, n + r)), n)),
        i.d &&
          ((i = y(i, n + 5, 1)),
          rr(i.d, n, o) &&
            ((t = n + 10),
            (i = y(Ii(e.times(We(a, t + r)), t), t + 5, 1)),
            +W(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = y(i, n + 1, 0)))),
        (i.s = s),
        (w = !0),
        (l.rounding = o),
        y(i, n, o))
  );
};
m.toPrecision = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = xe(n, n.e <= i.toExpNeg || n.e >= i.toExpPos))
      : (oe(e, 1, Ye),
        t === void 0 ? (t = i.rounding) : oe(t, 0, 8),
        (n = y(new i(n), e, t)),
        (r = xe(n, e <= n.e || n.e <= i.toExpNeg, e))),
    n.isNeg() && !n.isZero() ? '-' + r : r
  );
};
m.toSignificantDigits = m.toSD = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (oe(e, 1, Ye), t === void 0 ? (t = n.rounding) : oe(t, 0, 8)),
    y(new n(r), e, t)
  );
};
m.toString = function () {
  var e = this,
    t = e.constructor,
    r = xe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? '-' + r : r;
};
m.truncated = m.trunc = function () {
  return y(new this.constructor(this), this.e + 1, 1);
};
m.valueOf = m.toJSON = function () {
  var e = this,
    t = e.constructor,
    r = xe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? '-' + r : r;
};
function W(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    o = '',
    s = e[0];
  if (i > 0) {
    for (o += s, t = 1; t < i; t++)
      (n = e[t] + ''), (r = E - n.length), r && (o += He(r)), (o += n);
    (s = e[t]), (n = s + ''), (r = E - n.length), r && (o += He(r));
  } else if (s === 0) return '0';
  for (; s % 10 === 0; ) s /= 10;
  return o + s;
}
function oe(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(Ke + e);
}
function rr(e, t, r, n) {
  var i, o, s, a;
  for (o = e[0]; o >= 10; o /= 10) --t;
  return (
    --t < 0 ? ((t += E), (i = 0)) : ((i = Math.ceil((t + 1) / E)), (t %= E)),
    (o = Q(10, E - t)),
    (a = e[i] % o | 0),
    n == null
      ? t < 3
        ? (t == 0 ? (a = (a / 100) | 0) : t == 1 && (a = (a / 10) | 0),
          (s =
            (r < 4 && a == 99999) ||
            (r > 3 && a == 49999) ||
            a == 5e4 ||
            a == 0))
        : (s =
            (((r < 4 && a + 1 == o) || (r > 3 && a + 1 == o / 2)) &&
              ((e[i + 1] / o / 100) | 0) == Q(10, t - 2) - 1) ||
            ((a == o / 2 || a == 0) && ((e[i + 1] / o / 100) | 0) == 0))
      : t < 4
        ? (t == 0
            ? (a = (a / 1e3) | 0)
            : t == 1
              ? (a = (a / 100) | 0)
              : t == 2 && (a = (a / 10) | 0),
          (s = ((n || r < 4) && a == 9999) || (!n && r > 3 && a == 4999)))
        : (s =
            (((n || r < 4) && a + 1 == o) || (!n && r > 3 && a + 1 == o / 2)) &&
            ((e[i + 1] / o / 1e3) | 0) == Q(10, t - 3) - 1),
    s
  );
}
function Xr(e, t, r) {
  for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
    for (o = i.length; o--; ) i[o] *= t;
    for (i[0] += Ci.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
      i[n] > r - 1 &&
        (i[n + 1] === void 0 && (i[n + 1] = 0),
        (i[n + 1] += (i[n] / r) | 0),
        (i[n] %= r));
  }
  return i.reverse();
}
function kc(e, t) {
  var r, n, i;
  if (t.isZero()) return t;
  (n = t.d.length),
    n < 32
      ? ((r = Math.ceil(n / 3)), (i = (1 / sn(4, r)).toString()))
      : ((r = 16), (i = '2.3283064365386962890625e-10')),
    (e.precision += r),
    (t = Et(e, 1, t.times(i), new e(1)));
  for (var o = r; o--; ) {
    var s = t.times(t);
    t = s.times(s).minus(s).times(8).plus(1);
  }
  return (e.precision -= r), t;
}
var F = (function () {
  function e(n, i, o) {
    var s,
      a = 0,
      l = n.length;
    for (n = n.slice(); l--; )
      (s = n[l] * i + a), (n[l] = s % o | 0), (a = (s / o) | 0);
    return a && n.unshift(a), n;
  }
  function t(n, i, o, s) {
    var a, l;
    if (o != s) l = o > s ? 1 : -1;
    else
      for (a = l = 0; a < o; a++)
        if (n[a] != i[a]) {
          l = n[a] > i[a] ? 1 : -1;
          break;
        }
    return l;
  }
  function r(n, i, o, s) {
    for (var a = 0; o--; )
      (n[o] -= a), (a = n[o] < i[o] ? 1 : 0), (n[o] = a * s + n[o] - i[o]);
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, i, o, s, a, l) {
    var u,
      c,
      p,
      d,
      f,
      g,
      h,
      O,
      T,
      S,
      C,
      b,
      fe,
      le,
      jt,
      B,
      ie,
      Oe,
      K,
      pt,
      Lr = n.constructor,
      Vn = n.s == i.s ? 1 : -1,
      Y = n.d,
      _ = i.d;
    if (!Y || !Y[0] || !_ || !_[0])
      return new Lr(
        !n.s || !i.s || (Y ? _ && Y[0] == _[0] : !_)
          ? NaN
          : (Y && Y[0] == 0) || !_
            ? Vn * 0
            : Vn / 0,
      );
    for (
      l
        ? ((f = 1), (c = n.e - i.e))
        : ((l = he), (f = E), (c = te(n.e / f) - te(i.e / f))),
        K = _.length,
        ie = Y.length,
        T = new Lr(Vn),
        S = T.d = [],
        p = 0;
      _[p] == (Y[p] || 0);
      p++
    );
    if (
      (_[p] > (Y[p] || 0) && c--,
      o == null
        ? ((le = o = Lr.precision), (s = Lr.rounding))
        : a
          ? (le = o + (n.e - i.e) + 1)
          : (le = o),
      le < 0)
    )
      S.push(1), (g = !0);
    else {
      if (((le = (le / f + 2) | 0), (p = 0), K == 1)) {
        for (d = 0, _ = _[0], le++; (p < ie || d) && le--; p++)
          (jt = d * l + (Y[p] || 0)), (S[p] = (jt / _) | 0), (d = jt % _ | 0);
        g = d || p < ie;
      } else {
        for (
          d = (l / (_[0] + 1)) | 0,
            d > 1 &&
              ((_ = e(_, d, l)),
              (Y = e(Y, d, l)),
              (K = _.length),
              (ie = Y.length)),
            B = K,
            C = Y.slice(0, K),
            b = C.length;
          b < K;

        )
          C[b++] = 0;
        (pt = _.slice()), pt.unshift(0), (Oe = _[0]), _[1] >= l / 2 && ++Oe;
        do
          (d = 0),
            (u = t(_, C, K, b)),
            u < 0
              ? ((fe = C[0]),
                K != b && (fe = fe * l + (C[1] || 0)),
                (d = (fe / Oe) | 0),
                d > 1
                  ? (d >= l && (d = l - 1),
                    (h = e(_, d, l)),
                    (O = h.length),
                    (b = C.length),
                    (u = t(h, C, O, b)),
                    u == 1 && (d--, r(h, K < O ? pt : _, O, l)))
                  : (d == 0 && (u = d = 1), (h = _.slice())),
                (O = h.length),
                O < b && h.unshift(0),
                r(C, h, b, l),
                u == -1 &&
                  ((b = C.length),
                  (u = t(_, C, K, b)),
                  u < 1 && (d++, r(C, K < b ? pt : _, b, l))),
                (b = C.length))
              : u === 0 && (d++, (C = [0])),
            (S[p++] = d),
            u && C[0] ? (C[b++] = Y[B] || 0) : ((C = [Y[B]]), (b = 1));
        while ((B++ < ie || C[0] !== void 0) && le--);
        g = C[0] !== void 0;
      }
      S[0] || S.shift();
    }
    if (f == 1) (T.e = c), (Cs = g);
    else {
      for (p = 1, d = S[0]; d >= 10; d /= 10) p++;
      (T.e = p + c * f - 1), y(T, a ? o + T.e + 1 : o, s, g);
    }
    return T;
  };
})();
function y(e, t, r, n) {
  var i,
    o,
    s,
    a,
    l,
    u,
    c,
    p,
    d,
    f = e.constructor;
  e: if (t != null) {
    if (((p = e.d), !p)) return e;
    for (i = 1, a = p[0]; a >= 10; a /= 10) i++;
    if (((o = t - i), o < 0))
      (o += E),
        (s = t),
        (c = p[(d = 0)]),
        (l = (c / Q(10, i - s - 1)) % 10 | 0);
    else if (((d = Math.ceil((o + 1) / E)), (a = p.length), d >= a))
      if (n) {
        for (; a++ <= d; ) p.push(0);
        (c = l = 0), (i = 1), (o %= E), (s = o - E + 1);
      } else break e;
    else {
      for (c = a = p[d], i = 1; a >= 10; a /= 10) i++;
      (o %= E),
        (s = o - E + i),
        (l = s < 0 ? 0 : (c / Q(10, i - s - 1)) % 10 | 0);
    }
    if (
      ((n =
        n ||
        t < 0 ||
        p[d + 1] !== void 0 ||
        (s < 0 ? c : c % Q(10, i - s - 1))),
      (u =
        r < 4
          ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : l > 5 ||
            (l == 5 &&
              (r == 4 ||
                n ||
                (r == 6 &&
                  (o > 0 ? (s > 0 ? c / Q(10, i - s) : 0) : p[d - 1]) % 10 &
                    1) ||
                r == (e.s < 0 ? 8 : 7)))),
      t < 1 || !p[0])
    )
      return (
        (p.length = 0),
        u
          ? ((t -= e.e + 1), (p[0] = Q(10, (E - (t % E)) % E)), (e.e = -t || 0))
          : (p[0] = e.e = 0),
        e
      );
    if (
      (o == 0
        ? ((p.length = d), (a = 1), d--)
        : ((p.length = d + 1),
          (a = Q(10, E - o)),
          (p[d] = s > 0 ? ((c / Q(10, i - s)) % Q(10, s) | 0) * a : 0)),
      u)
    )
      for (;;)
        if (d == 0) {
          for (o = 1, s = p[0]; s >= 10; s /= 10) o++;
          for (s = p[0] += a, a = 1; s >= 10; s /= 10) a++;
          o != a && (e.e++, p[0] == he && (p[0] = 1));
          break;
        } else {
          if (((p[d] += a), p[d] != he)) break;
          (p[d--] = 0), (a = 1);
        }
    for (o = p.length; p[--o] === 0; ) p.pop();
  }
  return (
    w &&
      (e.e > f.maxE
        ? ((e.d = null), (e.e = NaN))
        : e.e < f.minE && ((e.e = 0), (e.d = [0]))),
    e
  );
}
function xe(e, t, r) {
  if (!e.isFinite()) return Ns(e);
  var n,
    i = e.e,
    o = W(e.d),
    s = o.length;
  return (
    t
      ? (r && (n = r - s) > 0
          ? (o = o.charAt(0) + '.' + o.slice(1) + He(n))
          : s > 1 && (o = o.charAt(0) + '.' + o.slice(1)),
        (o = o + (e.e < 0 ? 'e' : 'e+') + e.e))
      : i < 0
        ? ((o = '0.' + He(-i - 1) + o), r && (n = r - s) > 0 && (o += He(n)))
        : i >= s
          ? ((o += He(i + 1 - s)),
            r && (n = r - i - 1) > 0 && (o = o + '.' + He(n)))
          : ((n = i + 1) < s && (o = o.slice(0, n) + '.' + o.slice(n)),
            r && (n = r - s) > 0 && (i + 1 === s && (o += '.'), (o += He(n)))),
    o
  );
}
function on(e, t) {
  var r = e[0];
  for (t *= E; r >= 10; r /= 10) t++;
  return t;
}
function rn(e, t, r) {
  if (t > Oc) throw ((w = !0), r && (e.precision = r), Error(Ss));
  return y(new e(en), t, 1, !0);
}
function ge(e, t, r) {
  if (t > Ai) throw Error(Ss);
  return y(new e(tn), t, r, !0);
}
function ks(e) {
  var t = e.length - 1,
    r = t * E + 1;
  if (((t = e[t]), t)) {
    for (; t % 10 == 0; t /= 10) r--;
    for (t = e[0]; t >= 10; t /= 10) r++;
  }
  return r;
}
function He(e) {
  for (var t = ''; e--; ) t += '0';
  return t;
}
function Ds(e, t, r, n) {
  var i,
    o = new e(1),
    s = Math.ceil(n / E + 4);
  for (w = !1; ; ) {
    if (
      (r % 2 && ((o = o.times(t)), Ts(o.d, s) && (i = !0)),
      (r = te(r / 2)),
      r === 0)
    ) {
      (r = o.d.length - 1), i && o.d[r] === 0 && ++o.d[r];
      break;
    }
    (t = t.times(t)), Ts(t.d, s);
  }
  return (w = !0), o;
}
function Ps(e) {
  return e.d[e.d.length - 1] & 1;
}
function _s(e, t, r) {
  for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
    if (((n = new e(t[o])), n.s)) i[r](n) && (i = n);
    else {
      i = n;
      break;
    }
  return i;
}
function Ii(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    l,
    u = 0,
    c = 0,
    p = 0,
    d = e.constructor,
    f = d.rounding,
    g = d.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new d(
      e.d
        ? e.d[0]
          ? e.s < 0
            ? 0
            : 1 / 0
          : 1
        : e.s
          ? e.s < 0
            ? 0
            : e
          : NaN,
    );
  for (
    t == null ? ((w = !1), (l = g)) : (l = t), a = new d(0.03125);
    e.e > -2;

  )
    (e = e.times(a)), (p += 5);
  for (
    n = ((Math.log(Q(2, p)) / Math.LN10) * 2 + 5) | 0,
      l += n,
      r = o = s = new d(1),
      d.precision = l;
    ;

  ) {
    if (
      ((o = y(o.times(e), l, 1)),
      (r = r.times(++c)),
      (a = s.plus(F(o, r, l, 1))),
      W(a.d).slice(0, l) === W(s.d).slice(0, l))
    ) {
      for (i = p; i--; ) s = y(s.times(s), l, 1);
      if (t == null)
        if (u < 3 && rr(s.d, l - n, f, u))
          (d.precision = l += 10), (r = o = a = new d(1)), (c = 0), u++;
        else return y(s, (d.precision = g), f, (w = !0));
      else return (d.precision = g), s;
    }
    s = a;
  }
}
function We(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    l,
    u,
    c,
    p,
    d,
    f = 1,
    g = 10,
    h = e,
    O = h.d,
    T = h.constructor,
    S = T.rounding,
    C = T.precision;
  if (h.s < 0 || !O || !O[0] || (!h.e && O[0] == 1 && O.length == 1))
    return new T(O && !O[0] ? -1 / 0 : h.s != 1 ? NaN : O ? 0 : h);
  if (
    (t == null ? ((w = !1), (c = C)) : (c = t),
    (T.precision = c += g),
    (r = W(O)),
    (n = r.charAt(0)),
    Math.abs((o = h.e)) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (h = h.times(e)), (r = W(h.d)), (n = r.charAt(0)), f++;
    (o = h.e),
      n > 1 ? ((h = new T('0.' + r)), o++) : (h = new T(n + '.' + r.slice(1)));
  } else
    return (
      (u = rn(T, c + 2, C).times(o + '')),
      (h = We(new T(n + '.' + r.slice(1)), c - g).plus(u)),
      (T.precision = C),
      t == null ? y(h, C, S, (w = !0)) : h
    );
  for (
    p = h,
      l = s = h = F(h.minus(1), h.plus(1), c, 1),
      d = y(h.times(h), c, 1),
      i = 3;
    ;

  ) {
    if (
      ((s = y(s.times(d), c, 1)),
      (u = l.plus(F(s, new T(i), c, 1))),
      W(u.d).slice(0, c) === W(l.d).slice(0, c))
    )
      if (
        ((l = l.times(2)),
        o !== 0 && (l = l.plus(rn(T, c + 2, C).times(o + ''))),
        (l = F(l, new T(f), c, 1)),
        t == null)
      )
        if (rr(l.d, c - g, S, a))
          (T.precision = c += g),
            (u = s = h = F(p.minus(1), p.plus(1), c, 1)),
            (d = y(h.times(h), c, 1)),
            (i = a = 1);
        else return y(l, (T.precision = C), S, (w = !0));
      else return (T.precision = C), l;
    (l = u), (i += 2);
  }
}
function Ns(e) {
  return String((e.s * e.s) / 0);
}
function Oi(e, t) {
  var r, n, i;
  for (
    (r = t.indexOf('.')) > -1 && (t = t.replace('.', '')),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;
    n++
  );
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
  if (((t = t.slice(n, i)), t)) {
    if (
      ((i -= n),
      (e.e = r = r - n - 1),
      (e.d = []),
      (n = (r + 1) % E),
      r < 0 && (n += E),
      n < i)
    ) {
      for (n && e.d.push(+t.slice(0, n)), i -= E; n < i; )
        e.d.push(+t.slice(n, (n += E)));
      (t = t.slice(n)), (n = E - t.length);
    } else n -= i;
    for (; n--; ) t += '0';
    e.d.push(+t),
      w &&
        (e.e > e.constructor.maxE
          ? ((e.d = null), (e.e = NaN))
          : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
  } else (e.e = 0), (e.d = [0]);
  return e;
}
function Dc(e, t) {
  var r, n, i, o, s, a, l, u, c;
  if (t.indexOf('_') > -1) {
    if (((t = t.replace(/(\d)_(?=\d)/g, '$1')), Os.test(t))) return Oi(e, t);
  } else if (t === 'Infinity' || t === 'NaN')
    return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
  if (Sc.test(t)) (r = 16), (t = t.toLowerCase());
  else if (Cc.test(t)) r = 2;
  else if (Ac.test(t)) r = 8;
  else throw Error(Ke + t);
  for (
    o = t.search(/p/i),
      o > 0
        ? ((l = +t.slice(o + 1)), (t = t.substring(2, o)))
        : (t = t.slice(2)),
      o = t.indexOf('.'),
      s = o >= 0,
      n = e.constructor,
      s &&
        ((t = t.replace('.', '')),
        (a = t.length),
        (o = a - o),
        (i = Ds(n, new n(r), o, o * 2))),
      u = Xr(t, r, he),
      c = u.length - 1,
      o = c;
    u[o] === 0;
    --o
  )
    u.pop();
  return o < 0
    ? new n(e.s * 0)
    : ((e.e = on(u, c)),
      (e.d = u),
      (w = !1),
      s && (e = F(e, i, a * 4)),
      l && (e = e.times(Math.abs(l) < 54 ? Q(2, l) : it.pow(2, l))),
      (w = !0),
      e);
}
function _c(e, t) {
  var r,
    n = t.d.length;
  if (n < 3) return t.isZero() ? t : Et(e, 2, t, t);
  (r = 1.4 * Math.sqrt(n)),
    (r = r > 16 ? 16 : r | 0),
    (t = t.times(1 / sn(5, r))),
    (t = Et(e, 2, t, t));
  for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
    (i = t.times(t)), (t = t.times(o.plus(i.times(s.times(i).minus(a)))));
  return t;
}
function Et(e, t, r, n, i) {
  var o,
    s,
    a,
    l,
    u = 1,
    c = e.precision,
    p = Math.ceil(c / E);
  for (w = !1, l = r.times(r), a = new e(n); ; ) {
    if (
      ((s = F(a.times(l), new e(t++ * t++), c, 1)),
      (a = i ? n.plus(s) : n.minus(s)),
      (n = F(s.times(l), new e(t++ * t++), c, 1)),
      (s = a.plus(n)),
      s.d[p] !== void 0)
    ) {
      for (o = p; s.d[o] === a.d[o] && o--; );
      if (o == -1) break;
    }
    (o = a), (a = n), (n = s), (s = o), u++;
  }
  return (w = !0), (s.d.length = p + 1), s;
}
function sn(e, t) {
  for (var r = e; --t; ) r *= e;
  return r;
}
function Ls(e, t) {
  var r,
    n = t.s < 0,
    i = ge(e, e.precision, 1),
    o = i.times(0.5);
  if (((t = t.abs()), t.lte(o))) return (Me = n ? 4 : 1), t;
  if (((r = t.divToInt(i)), r.isZero())) Me = n ? 3 : 2;
  else {
    if (((t = t.minus(r.times(i))), t.lte(o)))
      return (Me = Ps(r) ? (n ? 2 : 3) : n ? 4 : 1), t;
    Me = Ps(r) ? (n ? 1 : 4) : n ? 3 : 2;
  }
  return t.minus(i).abs();
}
function ki(e, t, r, n) {
  var i,
    o,
    s,
    a,
    l,
    u,
    c,
    p,
    d,
    f = e.constructor,
    g = r !== void 0;
  if (
    (g
      ? (oe(r, 1, Ye), n === void 0 ? (n = f.rounding) : oe(n, 0, 8))
      : ((r = f.precision), (n = f.rounding)),
    !e.isFinite())
  )
    c = Ns(e);
  else {
    for (
      c = xe(e),
        s = c.indexOf('.'),
        g
          ? ((i = 2), t == 16 ? (r = r * 4 - 3) : t == 8 && (r = r * 3 - 2))
          : (i = t),
        s >= 0 &&
          ((c = c.replace('.', '')),
          (d = new f(1)),
          (d.e = c.length - s),
          (d.d = Xr(xe(d), 10, i)),
          (d.e = d.d.length)),
        p = Xr(c, 10, i),
        o = l = p.length;
      p[--l] == 0;

    )
      p.pop();
    if (!p[0]) c = g ? '0p+0' : '0';
    else {
      if (
        (s < 0
          ? o--
          : ((e = new f(e)),
            (e.d = p),
            (e.e = o),
            (e = F(e, d, r, n, 0, i)),
            (p = e.d),
            (o = e.e),
            (u = Cs)),
        (s = p[r]),
        (a = i / 2),
        (u = u || p[r + 1] !== void 0),
        (u =
          n < 4
            ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2))
            : s > a ||
              (s === a &&
                (n === 4 ||
                  u ||
                  (n === 6 && p[r - 1] & 1) ||
                  n === (e.s < 0 ? 8 : 7)))),
        (p.length = r),
        u)
      )
        for (; ++p[--r] > i - 1; ) (p[r] = 0), r || (++o, p.unshift(1));
      for (l = p.length; !p[l - 1]; --l);
      for (s = 0, c = ''; s < l; s++) c += Ci.charAt(p[s]);
      if (g) {
        if (l > 1)
          if (t == 16 || t == 8) {
            for (s = t == 16 ? 4 : 3, --l; l % s; l++) c += '0';
            for (p = Xr(c, i, t), l = p.length; !p[l - 1]; --l);
            for (s = 1, c = '1.'; s < l; s++) c += Ci.charAt(p[s]);
          } else c = c.charAt(0) + '.' + c.slice(1);
        c = c + (o < 0 ? 'p' : 'p+') + o;
      } else if (o < 0) {
        for (; ++o; ) c = '0' + c;
        c = '0.' + c;
      } else if (++o > l) for (o -= l; o--; ) c += '0';
      else o < l && (c = c.slice(0, o) + '.' + c.slice(o));
    }
    c = (t == 16 ? '0x' : t == 2 ? '0b' : t == 8 ? '0o' : '') + c;
  }
  return e.s < 0 ? '-' + c : c;
}
function Ts(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function Nc(e) {
  return new this(e).abs();
}
function Lc(e) {
  return new this(e).acos();
}
function Fc(e) {
  return new this(e).acosh();
}
function Mc(e, t) {
  return new this(e).plus(t);
}
function $c(e) {
  return new this(e).asin();
}
function qc(e) {
  return new this(e).asinh();
}
function Vc(e) {
  return new this(e).atan();
}
function jc(e) {
  return new this(e).atanh();
}
function Bc(e, t) {
  (e = new this(e)), (t = new this(t));
  var r,
    n = this.precision,
    i = this.rounding,
    o = n + 4;
  return (
    !e.s || !t.s
      ? (r = new this(NaN))
      : !e.d && !t.d
        ? ((r = ge(this, o, 1).times(t.s > 0 ? 0.25 : 0.75)), (r.s = e.s))
        : !t.d || e.isZero()
          ? ((r = t.s < 0 ? ge(this, n, i) : new this(0)), (r.s = e.s))
          : !e.d || t.isZero()
            ? ((r = ge(this, o, 1).times(0.5)), (r.s = e.s))
            : t.s < 0
              ? ((this.precision = o),
                (this.rounding = 1),
                (r = this.atan(F(e, t, o, 1))),
                (t = ge(this, o, 1)),
                (this.precision = n),
                (this.rounding = i),
                (r = e.s < 0 ? r.minus(t) : r.plus(t)))
              : (r = this.atan(F(e, t, o, 1))),
    r
  );
}
function Uc(e) {
  return new this(e).cbrt();
}
function Qc(e) {
  return y((e = new this(e)), e.e + 1, 2);
}
function Gc(e, t, r) {
  return new this(e).clamp(t, r);
}
function Jc(e) {
  if (!e || typeof e != 'object') throw Error(nn + 'Object expected');
  var t,
    r,
    n,
    i = e.defaults === !0,
    o = [
      'precision',
      1,
      Ye,
      'rounding',
      0,
      8,
      'toExpNeg',
      -yt,
      0,
      'toExpPos',
      0,
      yt,
      'maxE',
      0,
      yt,
      'minE',
      -yt,
      0,
      'modulo',
      0,
      9,
    ];
  for (t = 0; t < o.length; t += 3)
    if (((r = o[t]), i && (this[r] = Si[r]), (n = e[r]) !== void 0))
      if (te(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n;
      else throw Error(Ke + r + ': ' + n);
  if (((r = 'crypto'), i && (this[r] = Si[r]), (n = e[r]) !== void 0))
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (
          typeof crypto < 'u' &&
          crypto &&
          (crypto.getRandomValues || crypto.randomBytes)
        )
          this[r] = !0;
        else throw Error(As);
      else this[r] = !1;
    else throw Error(Ke + r + ': ' + n);
  return this;
}
function Hc(e) {
  return new this(e).cos();
}
function Wc(e) {
  return new this(e).cosh();
}
function Fs(e) {
  var t, r, n;
  function i(o) {
    var s,
      a,
      l,
      u = this;
    if (!(u instanceof i)) return new i(o);
    if (((u.constructor = i), Rs(o))) {
      (u.s = o.s),
        w
          ? !o.d || o.e > i.maxE
            ? ((u.e = NaN), (u.d = null))
            : o.e < i.minE
              ? ((u.e = 0), (u.d = [0]))
              : ((u.e = o.e), (u.d = o.d.slice()))
          : ((u.e = o.e), (u.d = o.d ? o.d.slice() : o.d));
      return;
    }
    if (((l = typeof o), l === 'number')) {
      if (o === 0) {
        (u.s = 1 / o < 0 ? -1 : 1), (u.e = 0), (u.d = [0]);
        return;
      }
      if ((o < 0 ? ((o = -o), (u.s = -1)) : (u.s = 1), o === ~~o && o < 1e7)) {
        for (s = 0, a = o; a >= 10; a /= 10) s++;
        w
          ? s > i.maxE
            ? ((u.e = NaN), (u.d = null))
            : s < i.minE
              ? ((u.e = 0), (u.d = [0]))
              : ((u.e = s), (u.d = [o]))
          : ((u.e = s), (u.d = [o]));
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), (u.e = NaN), (u.d = null);
        return;
      }
      return Oi(u, o.toString());
    } else if (l !== 'string') throw Error(Ke + o);
    return (
      (a = o.charCodeAt(0)) === 45
        ? ((o = o.slice(1)), (u.s = -1))
        : (a === 43 && (o = o.slice(1)), (u.s = 1)),
      Os.test(o) ? Oi(u, o) : Dc(u, o)
    );
  }
  if (
    ((i.prototype = m),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.EUCLID = 9),
    (i.config = i.set = Jc),
    (i.clone = Fs),
    (i.isDecimal = Rs),
    (i.abs = Nc),
    (i.acos = Lc),
    (i.acosh = Fc),
    (i.add = Mc),
    (i.asin = $c),
    (i.asinh = qc),
    (i.atan = Vc),
    (i.atanh = jc),
    (i.atan2 = Bc),
    (i.cbrt = Uc),
    (i.ceil = Qc),
    (i.clamp = Gc),
    (i.cos = Hc),
    (i.cosh = Wc),
    (i.div = Kc),
    (i.exp = Yc),
    (i.floor = zc),
    (i.hypot = Zc),
    (i.ln = Xc),
    (i.log = ep),
    (i.log10 = rp),
    (i.log2 = tp),
    (i.max = np),
    (i.min = ip),
    (i.mod = op),
    (i.mul = sp),
    (i.pow = ap),
    (i.random = lp),
    (i.round = up),
    (i.sign = cp),
    (i.sin = pp),
    (i.sinh = dp),
    (i.sqrt = mp),
    (i.sub = fp),
    (i.sum = gp),
    (i.tan = hp),
    (i.tanh = yp),
    (i.trunc = Ep),
    e === void 0 && (e = {}),
    e && e.defaults !== !0)
  )
    for (
      n = [
        'precision',
        'rounding',
        'toExpNeg',
        'toExpPos',
        'maxE',
        'minE',
        'modulo',
        'crypto',
      ],
        t = 0;
      t < n.length;

    )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return i.config(e), i;
}
function Kc(e, t) {
  return new this(e).div(t);
}
function Yc(e) {
  return new this(e).exp();
}
function zc(e) {
  return y((e = new this(e)), e.e + 1, 3);
}
function Zc() {
  var e,
    t,
    r = new this(0);
  for (w = !1, e = 0; e < arguments.length; )
    if (((t = new this(arguments[e++])), t.d)) r.d && (r = r.plus(t.times(t)));
    else {
      if (t.s) return (w = !0), new this(1 / 0);
      r = t;
    }
  return (w = !0), r.sqrt();
}
function Rs(e) {
  return e instanceof it || (e && e.toStringTag === Is) || !1;
}
function Xc(e) {
  return new this(e).ln();
}
function ep(e, t) {
  return new this(e).log(t);
}
function tp(e) {
  return new this(e).log(2);
}
function rp(e) {
  return new this(e).log(10);
}
function np() {
  return _s(this, arguments, 'lt');
}
function ip() {
  return _s(this, arguments, 'gt');
}
function op(e, t) {
  return new this(e).mod(t);
}
function sp(e, t) {
  return new this(e).mul(t);
}
function ap(e, t) {
  return new this(e).pow(t);
}
function lp(e) {
  var t,
    r,
    n,
    i,
    o = 0,
    s = new this(1),
    a = [];
  if (
    (e === void 0 ? (e = this.precision) : oe(e, 1, Ye),
    (n = Math.ceil(e / E)),
    this.crypto)
  )
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
        (i = t[o]),
          i >= 429e7
            ? (t[o] = crypto.getRandomValues(new Uint32Array(1))[0])
            : (a[o++] = i % 1e7);
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes((n *= 4)); o < n; )
        (i =
          t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24)),
          i >= 214e7
            ? crypto.randomBytes(4).copy(t, o)
            : (a.push(i % 1e7), (o += 4));
      o = n / 4;
    } else throw Error(As);
  else for (; o < n; ) a[o++] = (Math.random() * 1e7) | 0;
  for (
    n = a[--o],
      e %= E,
      n && e && ((i = Q(10, E - e)), (a[o] = ((n / i) | 0) * i));
    a[o] === 0;
    o--
  )
    a.pop();
  if (o < 0) (r = 0), (a = [0]);
  else {
    for (r = -1; a[0] === 0; r -= E) a.shift();
    for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
    n < E && (r -= E - n);
  }
  return (s.e = r), (s.d = a), s;
}
function up(e) {
  return y((e = new this(e)), e.e + 1, this.rounding);
}
function cp(e) {
  return (e = new this(e)), e.d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function pp(e) {
  return new this(e).sin();
}
function dp(e) {
  return new this(e).sinh();
}
function mp(e) {
  return new this(e).sqrt();
}
function fp(e, t) {
  return new this(e).sub(t);
}
function gp() {
  var e = 0,
    t = arguments,
    r = new this(t[e]);
  for (w = !1; r.s && ++e < t.length; ) r = r.plus(t[e]);
  return (w = !0), y(r, this.precision, this.rounding);
}
function hp(e) {
  return new this(e).tan();
}
function yp(e) {
  return new this(e).tanh();
}
function Ep(e) {
  return y((e = new this(e)), e.e + 1, 1);
}
m[Symbol.for('nodejs.util.inspect.custom')] = m.toString;
m[Symbol.toStringTag] = 'Decimal';
var it = (m.constructor = Fs(Si));
en = new it(en);
tn = new it(tn);
var ve = it;
function bt(e) {
  return e === null
    ? e
    : Array.isArray(e)
      ? e.map(bt)
      : typeof e == 'object'
        ? bp(e)
          ? wp(e)
          : ht(e, bt)
        : e;
}
function bp(e) {
  return e !== null && typeof e == 'object' && typeof e.$type == 'string';
}
function wp({ $type: e, value: t }) {
  switch (e) {
    case 'BigInt':
      return BigInt(t);
    case 'Bytes': {
      let {
        buffer: r,
        byteOffset: n,
        byteLength: i,
      } = Buffer.from(t, 'base64');
      return new Uint8Array(r, n, i);
    }
    case 'DateTime':
      return new Date(t);
    case 'Decimal':
      return new ve(t);
    case 'Json':
      return JSON.parse(t);
    default:
      Fe(t, 'Unknown tagged value');
  }
}
function wt(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1);
}
function xt(e) {
  return (
    e instanceof Date || Object.prototype.toString.call(e) === '[object Date]'
  );
}
function an(e) {
  return e.toString() !== 'Invalid Date';
}
function vt(e) {
  return it.isDecimal(e)
    ? !0
    : e !== null &&
        typeof e == 'object' &&
        typeof e.s == 'number' &&
        typeof e.e == 'number' &&
        typeof e.toFixed == 'function' &&
        Array.isArray(e.d);
}
var Bs = k(Ei());
var js = k(require('fs'));
var Ms = {
  keyword: _e,
  entity: _e,
  value: (e) => H(rt(e)),
  punctuation: rt,
  directive: _e,
  function: _e,
  variable: (e) => H(rt(e)),
  string: (e) => H(Ve(e)),
  boolean: De,
  number: _e,
  comment: Ut,
};
var xp = (e) => e,
  ln = {},
  vp = 0,
  v = {
    manual: ln.Prism && ln.Prism.manual,
    disableWorkerMessageHandler:
      ln.Prism && ln.Prism.disableWorkerMessageHandler,
    util: {
      encode: function (e) {
        if (e instanceof ye) {
          let t = e;
          return new ye(t.type, v.util.encode(t.content), t.alias);
        } else
          return Array.isArray(e)
            ? e.map(v.util.encode)
            : e
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/\u00a0/g, ' ');
      },
      type: function (e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function (e) {
        return (
          e.__id || Object.defineProperty(e, '__id', { value: ++vp }), e.__id
        );
      },
      clone: function e(t, r) {
        let n,
          i,
          o = v.util.type(t);
        switch (((r = r || {}), o)) {
          case 'Object':
            if (((i = v.util.objId(t)), r[i])) return r[i];
            (n = {}), (r[i] = n);
            for (let s in t) t.hasOwnProperty(s) && (n[s] = e(t[s], r));
            return n;
          case 'Array':
            return (
              (i = v.util.objId(t)),
              r[i]
                ? r[i]
                : ((n = []),
                  (r[i] = n),
                  t.forEach(function (s, a) {
                    n[a] = e(s, r);
                  }),
                  n)
            );
          default:
            return t;
        }
      },
    },
    languages: {
      extend: function (e, t) {
        let r = v.util.clone(v.languages[e]);
        for (let n in t) r[n] = t[n];
        return r;
      },
      insertBefore: function (e, t, r, n) {
        n = n || v.languages;
        let i = n[e],
          o = {};
        for (let a in i)
          if (i.hasOwnProperty(a)) {
            if (a == t) for (let l in r) r.hasOwnProperty(l) && (o[l] = r[l]);
            r.hasOwnProperty(a) || (o[a] = i[a]);
          }
        let s = n[e];
        return (
          (n[e] = o),
          v.languages.DFS(v.languages, function (a, l) {
            l === s && a != e && (this[a] = o);
          }),
          o
        );
      },
      DFS: function e(t, r, n, i) {
        i = i || {};
        let o = v.util.objId;
        for (let s in t)
          if (t.hasOwnProperty(s)) {
            r.call(t, s, t[s], n || s);
            let a = t[s],
              l = v.util.type(a);
            l === 'Object' && !i[o(a)]
              ? ((i[o(a)] = !0), e(a, r, null, i))
              : l === 'Array' && !i[o(a)] && ((i[o(a)] = !0), e(a, r, s, i));
          }
      },
    },
    plugins: {},
    highlight: function (e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return (
        v.hooks.run('before-tokenize', n),
        (n.tokens = v.tokenize(n.code, n.grammar)),
        v.hooks.run('after-tokenize', n),
        ye.stringify(v.util.encode(n.tokens), n.language)
      );
    },
    matchGrammar: function (e, t, r, n, i, o, s) {
      for (let h in r) {
        if (!r.hasOwnProperty(h) || !r[h]) continue;
        if (h == s) return;
        let O = r[h];
        O = v.util.type(O) === 'Array' ? O : [O];
        for (let T = 0; T < O.length; ++T) {
          let S = O[T],
            C = S.inside,
            b = !!S.lookbehind,
            fe = !!S.greedy,
            le = 0,
            jt = S.alias;
          if (fe && !S.pattern.global) {
            let B = S.pattern.toString().match(/[imuy]*$/)[0];
            S.pattern = RegExp(S.pattern.source, B + 'g');
          }
          S = S.pattern || S;
          for (let B = n, ie = i; B < t.length; ie += t[B].length, ++B) {
            let Oe = t[B];
            if (t.length > e.length) return;
            if (Oe instanceof ye) continue;
            if (fe && B != t.length - 1) {
              S.lastIndex = ie;
              var p = S.exec(e);
              if (!p) break;
              var c = p.index + (b ? p[1].length : 0),
                d = p.index + p[0].length,
                a = B,
                l = ie;
              for (
                let _ = t.length;
                a < _ && (l < d || (!t[a].type && !t[a - 1].greedy));
                ++a
              )
                (l += t[a].length), c >= l && (++B, (ie = l));
              if (t[B] instanceof ye) continue;
              (u = a - B), (Oe = e.slice(ie, l)), (p.index -= ie);
            } else {
              S.lastIndex = 0;
              var p = S.exec(Oe),
                u = 1;
            }
            if (!p) {
              if (o) break;
              continue;
            }
            b && (le = p[1] ? p[1].length : 0);
            var c = p.index + le,
              p = p[0].slice(le),
              d = c + p.length,
              f = Oe.slice(0, c),
              g = Oe.slice(d);
            let K = [B, u];
            f && (++B, (ie += f.length), K.push(f));
            let pt = new ye(h, C ? v.tokenize(p, C) : p, jt, p, fe);
            if (
              (K.push(pt),
              g && K.push(g),
              Array.prototype.splice.apply(t, K),
              u != 1 && v.matchGrammar(e, t, r, B, ie, !0, h),
              o)
            )
              break;
          }
        }
      }
    },
    tokenize: function (e, t) {
      let r = [e],
        n = t.rest;
      if (n) {
        for (let i in n) t[i] = n[i];
        delete t.rest;
      }
      return v.matchGrammar(e, r, t, 0, 0, !1), r;
    },
    hooks: {
      all: {},
      add: function (e, t) {
        let r = v.hooks.all;
        (r[e] = r[e] || []), r[e].push(t);
      },
      run: function (e, t) {
        let r = v.hooks.all[e];
        if (!(!r || !r.length)) for (var n = 0, i; (i = r[n++]); ) i(t);
      },
    },
    Token: ye,
  };
v.languages.clike = {
  comment: [
    { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  'class-name': {
    pattern:
      /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /[.\\]/ },
  },
  keyword:
    /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/,
};
v.languages.javascript = v.languages.extend('clike', {
  'class-name': [
    v.languages.clike['class-name'],
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
      lookbehind: !0,
    },
  ],
  keyword: [
    { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
    {
      pattern:
        /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0,
    },
  ],
  number:
    /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  function:
    /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator:
    /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
});
v.languages.javascript['class-name'][0].pattern =
  /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
v.languages.insertBefore('javascript', 'keyword', {
  regex: {
    pattern:
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: !0,
    greedy: !0,
  },
  'function-variable': {
    pattern:
      /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: 'function',
  },
  parameter: [
    {
      pattern:
        /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
      lookbehind: !0,
      inside: v.languages.javascript,
    },
    {
      pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
      inside: v.languages.javascript,
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: v.languages.javascript,
    },
    {
      pattern:
        /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: v.languages.javascript,
    },
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
});
v.languages.markup && v.languages.markup.tag.addInlined('script', 'javascript');
v.languages.js = v.languages.javascript;
v.languages.typescript = v.languages.extend('javascript', {
  keyword:
    /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
  builtin:
    /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
});
v.languages.ts = v.languages.typescript;
function ye(e, t, r, n, i) {
  (this.type = e),
    (this.content = t),
    (this.alias = r),
    (this.length = (n || '').length | 0),
    (this.greedy = !!i);
}
ye.stringify = function (e, t) {
  return typeof e == 'string'
    ? e
    : Array.isArray(e)
      ? e
          .map(function (r) {
            return ye.stringify(r, t);
          })
          .join('')
      : Pp(e.type)(e.content);
};
function Pp(e) {
  return Ms[e] || xp;
}
function $s(e) {
  return Tp(e, v.languages.javascript);
}
function Tp(e, t) {
  return v
    .tokenize(e, t)
    .map((n) => ye.stringify(n))
    .join('');
}
var qs = k(fs());
function Vs(e) {
  return (0, qs.default)(e);
}
var un = class e {
  static read(t) {
    let r;
    try {
      r = js.default.readFileSync(t, 'utf-8');
    } catch {
      return null;
    }
    return e.fromContent(r);
  }
  static fromContent(t) {
    let r = t.split(/\r?\n/);
    return new e(1, r);
  }
  constructor(t, r) {
    (this.firstLineNumber = t), (this.lines = r);
  }
  get lastLineNumber() {
    return this.firstLineNumber + this.lines.length - 1;
  }
  mapLineAt(t, r) {
    if (
      t < this.firstLineNumber ||
      t > this.lines.length + this.firstLineNumber
    )
      return this;
    let n = t - this.firstLineNumber,
      i = [...this.lines];
    return (i[n] = r(i[n])), new e(this.firstLineNumber, i);
  }
  mapLines(t) {
    return new e(
      this.firstLineNumber,
      this.lines.map((r, n) => t(r, this.firstLineNumber + n)),
    );
  }
  lineAt(t) {
    return this.lines[t - this.firstLineNumber];
  }
  prependSymbolAt(t, r) {
    return this.mapLines((n, i) => (i === t ? `${r} ${n}` : `  ${n}`));
  }
  slice(t, r) {
    let n = this.lines.slice(t - 1, r).join(`
`);
    return new e(
      t,
      Vs(n).split(`
`),
    );
  }
  highlight() {
    let t = $s(this.toString());
    return new e(
      this.firstLineNumber,
      t.split(`
`),
    );
  }
  toString() {
    return this.lines.join(`
`);
  }
};
var Rp = {
    red: pe,
    gray: Ut,
    dim: ke,
    bold: H,
    underline: Z,
    highlightSource: (e) => e.highlight(),
  },
  Cp = {
    red: (e) => e,
    gray: (e) => e,
    dim: (e) => e,
    bold: (e) => e,
    underline: (e) => e,
    highlightSource: (e) => e,
  };
function Sp({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
  return {
    functionName: `prisma.${t}()`,
    message: e,
    isPanic: r ?? !1,
    callArguments: n,
  };
}
function Ap(
  { callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i },
  o,
) {
  let s = Sp({ message: t, originalMethod: r, isPanic: n, callArguments: i });
  if (!e || typeof window < 'u' || process.env.NODE_ENV === 'production')
    return s;
  let a = e.getLocation();
  if (!a || !a.lineNumber || !a.columnNumber) return s;
  let l = Math.max(1, a.lineNumber - 3),
    u = un.read(a.fileName)?.slice(l, a.lineNumber),
    c = u?.lineAt(a.lineNumber);
  if (u && c) {
    let p = Op(c),
      d = Ip(c);
    if (!d) return s;
    (s.functionName = `${d.code})`),
      (s.location = a),
      n ||
        (u = u.mapLineAt(a.lineNumber, (g) => g.slice(0, d.openingBraceIndex))),
      (u = o.highlightSource(u));
    let f = String(u.lastLineNumber).length;
    if (
      ((s.contextLines = u
        .mapLines((g, h) => o.gray(String(h).padStart(f)) + ' ' + g)
        .mapLines((g) => o.dim(g))
        .prependSymbolAt(a.lineNumber, o.bold(o.red('\u2192')))),
      i)
    ) {
      let g = p + f + 1;
      (g += 2), (s.callArguments = (0, Bs.default)(i, g).slice(g));
    }
  }
  return s;
}
function Ip(e) {
  let t = Object.keys(zt.ModelAction).join('|'),
    n = new RegExp(String.raw`\.(${t})\(`).exec(e);
  if (n) {
    let i = n.index + n[0].length,
      o = e.lastIndexOf(' ', n.index) + 1;
    return { code: e.slice(o, i), openingBraceIndex: i };
  }
  return null;
}
function Op(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    if (e.charAt(r) !== ' ') return t;
    t++;
  }
  return t;
}
function kp(
  {
    functionName: e,
    location: t,
    message: r,
    isPanic: n,
    contextLines: i,
    callArguments: o,
  },
  s,
) {
  let a = [''],
    l = t ? ' in' : ':';
  if (
    (n
      ? (a.push(
          s.red(
            `Oops, an unknown error occurred! This is ${s.bold('on us')}, you did nothing wrong.`,
          ),
        ),
        a.push(
          s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`),
        ))
      : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)),
    t && a.push(s.underline(Dp(t))),
    i)
  ) {
    a.push('');
    let u = [i.toString()];
    o && (u.push(o), u.push(s.dim(')'))), a.push(u.join('')), o && a.push('');
  } else a.push(''), o && a.push(o), a.push('');
  return (
    a.push(r),
    a.join(`
`)
  );
}
function Dp(e) {
  let t = [e.fileName];
  return (
    e.lineNumber && t.push(String(e.lineNumber)),
    e.columnNumber && t.push(String(e.columnNumber)),
    t.join(':')
  );
}
function cn(e) {
  let t = e.showColors ? Rp : Cp,
    r;
  return (r = Ap(e, t)), kp(r, t);
}
var Ks = k(Di());
function Js(e, t, r) {
  let n = Hs(e),
    i = _p(n),
    o = Lp(i);
  o ? pn(o, t, r) : t.addErrorMessage(() => 'Unknown error');
}
function Hs(e) {
  return e.errors.flatMap((t) => (t.kind === 'Union' ? Hs(t) : [t]));
}
function _p(e) {
  let t = new Map(),
    r = [];
  for (let n of e) {
    if (n.kind !== 'InvalidArgumentType') {
      r.push(n);
      continue;
    }
    let i = `${n.selectionPath.join('.')}:${n.argumentPath.join('.')}`,
      o = t.get(i);
    o
      ? t.set(i, {
          ...n,
          argument: {
            ...n.argument,
            typeNames: Np(o.argument.typeNames, n.argument.typeNames),
          },
        })
      : t.set(i, n);
  }
  return r.push(...t.values()), r;
}
function Np(e, t) {
  return [...new Set(e.concat(t))];
}
function Lp(e) {
  return Ri(e, (t, r) => {
    let n = Qs(t),
      i = Qs(r);
    return n !== i ? n - i : Gs(t) - Gs(r);
  });
}
function Qs(e) {
  let t = 0;
  return (
    Array.isArray(e.selectionPath) && (t += e.selectionPath.length),
    Array.isArray(e.argumentPath) && (t += e.argumentPath.length),
    t
  );
}
function Gs(e) {
  switch (e.kind) {
    case 'InvalidArgumentValue':
    case 'ValueTooLarge':
      return 20;
    case 'InvalidArgumentType':
      return 10;
    case 'RequiredArgumentMissing':
      return -10;
    default:
      return 0;
  }
}
var ce = class {
  constructor(t, r) {
    this.name = t;
    this.value = r;
    this.isRequired = !1;
  }
  makeRequired() {
    return (this.isRequired = !0), this;
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.addMarginSymbol(r(this.isRequired ? '+' : '?')),
      t.write(r(this.name)),
      this.isRequired || t.write(r('?')),
      t.write(r(': ')),
      typeof this.value == 'string'
        ? t.write(r(this.value))
        : t.write(this.value);
  }
};
var Pt = class {
  constructor(t = 0, r) {
    this.context = r;
    this.lines = [];
    this.currentLine = '';
    this.currentIndent = 0;
    this.currentIndent = t;
  }
  write(t) {
    return typeof t == 'string' ? (this.currentLine += t) : t.write(this), this;
  }
  writeJoined(t, r, n = (i, o) => o.write(i)) {
    let i = r.length - 1;
    for (let o = 0; o < r.length; o++) n(r[o], this), o !== i && this.write(t);
    return this;
  }
  writeLine(t) {
    return this.write(t).newLine();
  }
  newLine() {
    this.lines.push(this.indentedCurrentLine()),
      (this.currentLine = ''),
      (this.marginSymbol = void 0);
    let t = this.afterNextNewLineCallback;
    return (this.afterNextNewLineCallback = void 0), t?.(), this;
  }
  withIndent(t) {
    return this.indent(), t(this), this.unindent(), this;
  }
  afterNextNewline(t) {
    return (this.afterNextNewLineCallback = t), this;
  }
  indent() {
    return this.currentIndent++, this;
  }
  unindent() {
    return this.currentIndent > 0 && this.currentIndent--, this;
  }
  addMarginSymbol(t) {
    return (this.marginSymbol = t), this;
  }
  toString() {
    return this.lines.concat(this.indentedCurrentLine()).join(`
`);
  }
  getCurrentLineLength() {
    return this.currentLine.length;
  }
  indentedCurrentLine() {
    let t = this.currentLine.padStart(
      this.currentLine.length + 2 * this.currentIndent,
    );
    return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
  }
};
var dn = class {
  constructor(t) {
    this.value = t;
  }
  write(t) {
    t.write(this.value);
  }
  markAsError() {
    this.value.markAsError();
  }
};
var mn = (e) => e,
  fn = { bold: mn, red: mn, green: mn, dim: mn, enabled: !1 },
  Ws = { bold: H, red: pe, green: Ve, dim: ke, enabled: !0 },
  Tt = {
    write(e) {
      e.writeLine(',');
    },
  };
var Pe = class {
  constructor(t) {
    this.contents = t;
    this.isUnderlined = !1;
    this.color = (t) => t;
  }
  underline() {
    return (this.isUnderlined = !0), this;
  }
  setColor(t) {
    return (this.color = t), this;
  }
  write(t) {
    let r = t.getCurrentLineLength();
    t.write(this.color(this.contents)),
      this.isUnderlined &&
        t.afterNextNewline(() => {
          t.write(' '.repeat(r)).writeLine(
            this.color('~'.repeat(this.contents.length)),
          );
        });
  }
};
var ze = class {
  constructor() {
    this.hasError = !1;
  }
  markAsError() {
    return (this.hasError = !0), this;
  }
};
var Rt = class extends ze {
  constructor() {
    super(...arguments);
    this.items = [];
  }
  addItem(r) {
    return this.items.push(new dn(r)), this;
  }
  getField(r) {
    return this.items[r];
  }
  getPrintWidth() {
    return this.items.length === 0
      ? 2
      : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
  }
  write(r) {
    if (this.items.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithItems(r);
  }
  writeEmpty(r) {
    let n = new Pe('[]');
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithItems(r) {
    let { colors: n } = r.context;
    r
      .writeLine('[')
      .withIndent(() => r.writeJoined(Tt, this.items).newLine())
      .write(']'),
      this.hasError &&
        r.afterNextNewline(() => {
          r.writeLine(n.red('~'.repeat(this.getPrintWidth())));
        });
  }
  asObject() {}
};
var Ct = class e extends ze {
  constructor() {
    super(...arguments);
    this.fields = {};
    this.suggestions = [];
  }
  addField(r) {
    this.fields[r.name] = r;
  }
  addSuggestion(r) {
    this.suggestions.push(r);
  }
  getField(r) {
    return this.fields[r];
  }
  getDeepField(r) {
    let [n, ...i] = r,
      o = this.getField(n);
    if (!o) return;
    let s = o;
    for (let a of i) {
      let l;
      if (
        (s.value instanceof e
          ? (l = s.value.getField(a))
          : s.value instanceof Rt && (l = s.value.getField(Number(a))),
        !l)
      )
        return;
      s = l;
    }
    return s;
  }
  getDeepFieldValue(r) {
    return r.length === 0 ? this : this.getDeepField(r)?.value;
  }
  hasField(r) {
    return !!this.getField(r);
  }
  removeAllFields() {
    this.fields = {};
  }
  removeField(r) {
    delete this.fields[r];
  }
  getFields() {
    return this.fields;
  }
  isEmpty() {
    return Object.keys(this.fields).length === 0;
  }
  getFieldValue(r) {
    return this.getField(r)?.value;
  }
  getDeepSubSelectionValue(r) {
    let n = this;
    for (let i of r) {
      if (!(n instanceof e)) return;
      let o = n.getSubSelectionValue(i);
      if (!o) return;
      n = o;
    }
    return n;
  }
  getDeepSelectionParent(r) {
    let n = this.getSelectionParent();
    if (!n) return;
    let i = n;
    for (let o of r) {
      let s = i.value.getFieldValue(o);
      if (!s || !(s instanceof e)) return;
      let a = s.getSelectionParent();
      if (!a) return;
      i = a;
    }
    return i;
  }
  getSelectionParent() {
    let r = this.getField('select')?.value.asObject();
    if (r) return { kind: 'select', value: r };
    let n = this.getField('include')?.value.asObject();
    if (n) return { kind: 'include', value: n };
  }
  getSubSelectionValue(r) {
    return this.getSelectionParent()?.value.fields[r].value;
  }
  getPrintWidth() {
    let r = Object.values(this.fields);
    return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
  }
  write(r) {
    let n = Object.values(this.fields);
    if (n.length === 0 && this.suggestions.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithContents(r, n);
  }
  asObject() {
    return this;
  }
  writeEmpty(r) {
    let n = new Pe('{}');
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithContents(r, n) {
    r.writeLine('{').withIndent(() => {
      r.writeJoined(Tt, [...n, ...this.suggestions]).newLine();
    }),
      r.write('}'),
      this.hasError &&
        r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red('~'.repeat(this.getPrintWidth())));
        });
  }
};
var J = class extends ze {
  constructor(r) {
    super();
    this.text = r;
  }
  getPrintWidth() {
    return this.text.length;
  }
  write(r) {
    let n = new Pe(this.text);
    this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
  }
  asObject() {}
};
var nr = class {
  constructor() {
    this.fields = [];
  }
  addField(t, r) {
    return (
      this.fields.push({
        write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o('+')));
        },
      }),
      this
    );
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.writeLine(r('{'))
      .withIndent(() => {
        t.writeJoined(Tt, this.fields).newLine();
      })
      .write(r('}'))
      .addMarginSymbol(r('+'));
  }
};
function pn(e, t, r) {
  switch (e.kind) {
    case 'MutuallyExclusiveFields':
      Mp(e, t);
      break;
    case 'IncludeOnScalar':
      $p(e, t);
      break;
    case 'EmptySelection':
      qp(e, t, r);
      break;
    case 'UnknownSelectionField':
      Up(e, t);
      break;
    case 'InvalidSelectionValue':
      Qp(e, t);
      break;
    case 'UnknownArgument':
      Gp(e, t);
      break;
    case 'UnknownInputField':
      Jp(e, t);
      break;
    case 'RequiredArgumentMissing':
      Hp(e, t);
      break;
    case 'InvalidArgumentType':
      Wp(e, t);
      break;
    case 'InvalidArgumentValue':
      Kp(e, t);
      break;
    case 'ValueTooLarge':
      Yp(e, t);
      break;
    case 'SomeFieldsMissing':
      zp(e, t);
      break;
    case 'TooManyFieldsGiven':
      Zp(e, t);
      break;
    case 'Union':
      Js(e, t, r);
      break;
    default:
      throw new Error('not implemented: ' + e.kind);
  }
}
function Mp(e, t) {
  let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  r &&
    (r.getField(e.firstField)?.markAsError(),
    r.getField(e.secondField)?.markAsError()),
    t.addErrorMessage(
      (n) =>
        `Please ${n.bold('either')} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red('not both')} at the same time.`,
    );
}
function $p(e, t) {
  let [r, n] = ir(e.selectionPath),
    i = e.outputType,
    o = t.arguments.getDeepSelectionParent(r)?.value;
  if (o && (o.getField(n)?.markAsError(), i))
    for (let s of i.fields)
      s.isRelation && o.addSuggestion(new ce(s.name, 'true'));
  t.addErrorMessage((s) => {
    let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold('include')} statement`;
    return (
      i ? (a += ` on model ${s.bold(i.name)}. ${or(s)}`) : (a += '.'),
      (a += `
Note that ${s.bold('include')} statements only accept relation fields.`),
      a
    );
  });
}
function qp(e, t, r) {
  let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  if (n) {
    let i = n.getField('omit')?.value.asObject();
    if (i) {
      Vp(e, t, i);
      return;
    }
    if (n.hasField('select')) {
      jp(e, t);
      return;
    }
  }
  if (r?.[wt(e.outputType.name)]) {
    Bp(e, t);
    return;
  }
  t.addErrorMessage(
    () => `Unknown field at "${e.selectionPath.join('.')} selection"`,
  );
}
function Vp(e, t, r) {
  r.removeAllFields();
  for (let n of e.outputType.fields) r.addSuggestion(new ce(n.name, 'false'));
  t.addErrorMessage(
    (n) =>
      `The ${n.red('omit')} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`,
  );
}
function jp(e, t) {
  let r = e.outputType,
    n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value,
    i = n?.isEmpty() ?? !1;
  n && (n.removeAllFields(), Zs(n, r)),
    t.addErrorMessage((o) =>
      i
        ? `The ${o.red('`select`')} statement for type ${o.bold(r.name)} must not be empty. ${or(o)}`
        : `The ${o.red('`select`')} statement for type ${o.bold(r.name)} needs ${o.bold('at least one truthy value')}.`,
    );
}
function Bp(e, t) {
  let r = new nr();
  for (let i of e.outputType.fields)
    i.isRelation || r.addField(i.name, 'false');
  let n = new ce('omit', r).makeRequired();
  if (e.selectionPath.length === 0) t.arguments.addSuggestion(n);
  else {
    let [i, o] = ir(e.selectionPath),
      a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
    if (a) {
      let l = a?.value.asObject() ?? new Ct();
      l.addSuggestion(n), (a.value = l);
    }
  }
  t.addErrorMessage(
    (i) =>
      `The global ${i.red('omit')} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`,
  );
}
function Up(e, t) {
  let r = Xs(e.selectionPath, t);
  if (r.parentKind !== 'unknown') {
    r.field.markAsError();
    let n = r.parent;
    switch (r.parentKind) {
      case 'select':
        Zs(n, e.outputType);
        break;
      case 'include':
        Xp(n, e.outputType);
        break;
      case 'omit':
        ed(n, e.outputType);
        break;
    }
  }
  t.addErrorMessage((n) => {
    let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
    return (
      r.parentKind !== 'unknown' &&
        i.push(`for ${n.bold(r.parentKind)} statement`),
      i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`),
      i.push(or(n)),
      i.join(' ')
    );
  });
}
function Qp(e, t) {
  let r = Xs(e.selectionPath, t);
  r.parentKind !== 'unknown' && r.field.value.markAsError(),
    t.addErrorMessage(
      (n) =>
        `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`,
    );
}
function Gp(e, t) {
  let r = e.argumentPath[0],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  n && (n.getField(r)?.markAsError(), td(n, e.arguments)),
    t.addErrorMessage((i) =>
      Ys(
        i,
        r,
        e.arguments.map((o) => o.name),
      ),
    );
}
function Jp(e, t) {
  let [r, n] = ir(e.argumentPath),
    i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  if (i) {
    i.getDeepField(e.argumentPath)?.markAsError();
    let o = i.getDeepFieldValue(r)?.asObject();
    o && ea(o, e.inputType);
  }
  t.addErrorMessage((o) =>
    Ys(
      o,
      n,
      e.inputType.fields.map((s) => s.name),
    ),
  );
}
function Ys(e, t, r) {
  let n = [`Unknown argument \`${e.red(t)}\`.`],
    i = nd(t, r);
  return (
    i && n.push(`Did you mean \`${e.green(i)}\`?`),
    r.length > 0 && n.push(or(e)),
    n.join(' ')
  );
}
function Hp(e, t) {
  let r;
  t.addErrorMessage((l) =>
    r?.value instanceof J && r.value.text === 'null'
      ? `Argument \`${l.green(o)}\` must not be ${l.red('null')}.`
      : `Argument \`${l.green(o)}\` is missing.`,
  );
  let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  if (!n) return;
  let [i, o] = ir(e.argumentPath),
    s = new nr(),
    a = n.getDeepFieldValue(i)?.asObject();
  if (a)
    if (
      ((r = a.getField(o)),
      r && a.removeField(o),
      e.inputTypes.length === 1 && e.inputTypes[0].kind === 'object')
    ) {
      for (let l of e.inputTypes[0].fields)
        s.addField(l.name, l.typeNames.join(' | '));
      a.addSuggestion(new ce(o, s).makeRequired());
    } else {
      let l = e.inputTypes.map(zs).join(' | ');
      a.addSuggestion(new ce(o, l).makeRequired());
    }
}
function zs(e) {
  return e.kind === 'list' ? `${zs(e.elementType)}[]` : e.name;
}
function Wp(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  n && n.getDeepFieldValue(e.argumentPath)?.markAsError(),
    t.addErrorMessage((i) => {
      let o = gn(
        'or',
        e.argument.typeNames.map((s) => i.green(s)),
      );
      return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
    });
}
function Kp(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  n && n.getDeepFieldValue(e.argumentPath)?.markAsError(),
    t.addErrorMessage((i) => {
      let o = [`Invalid value for argument \`${i.bold(r)}\``];
      if (
        (e.underlyingError && o.push(`: ${e.underlyingError}`),
        o.push('.'),
        e.argument.typeNames.length > 0)
      ) {
        let s = gn(
          'or',
          e.argument.typeNames.map((a) => i.green(a)),
        );
        o.push(` Expected ${s}.`);
      }
      return o.join('');
    });
}
function Yp(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(),
    i;
  if (n) {
    let s = n.getDeepField(e.argumentPath)?.value;
    s?.markAsError(), s instanceof J && (i = s.text);
  }
  t.addErrorMessage((o) => {
    let s = ['Unable to fit value'];
    return (
      i && s.push(o.red(i)),
      s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``),
      s.join(' ')
    );
  });
}
function zp(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  if (n) {
    let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
    i && ea(i, e.inputType);
  }
  t.addErrorMessage((i) => {
    let o = [
      `Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`,
    ];
    return (
      e.constraints.minFieldCount === 1
        ? e.constraints.requiredFields
          ? o.push(
              `${i.green('at least one of')} ${gn(
                'or',
                e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``),
              )} arguments.`,
            )
          : o.push(`${i.green('at least one')} argument.`)
        : o.push(
            `${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`,
          ),
      o.push(or(i)),
      o.join(' ')
    );
  });
}
function Zp(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(),
    i = [];
  if (n) {
    let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
    o && (o.markAsError(), (i = Object.keys(o.getFields())));
  }
  t.addErrorMessage((o) => {
    let s = [
      `Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`,
    ];
    return (
      e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1
        ? s.push(`${o.green('exactly one')} argument,`)
        : e.constraints.maxFieldCount == 1
          ? s.push(`${o.green('at most one')} argument,`)
          : s.push(
              `${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`,
            ),
      s.push(
        `but you provided ${gn(
          'and',
          i.map((a) => o.red(a)),
        )}. Please choose`,
      ),
      e.constraints.maxFieldCount === 1
        ? s.push('one.')
        : s.push(`${e.constraints.maxFieldCount}.`),
      s.join(' ')
    );
  });
}
function Zs(e, t) {
  for (let r of t.fields)
    e.hasField(r.name) || e.addSuggestion(new ce(r.name, 'true'));
}
function Xp(e, t) {
  for (let r of t.fields)
    r.isRelation &&
      !e.hasField(r.name) &&
      e.addSuggestion(new ce(r.name, 'true'));
}
function ed(e, t) {
  for (let r of t.fields)
    !e.hasField(r.name) &&
      !r.isRelation &&
      e.addSuggestion(new ce(r.name, 'true'));
}
function td(e, t) {
  for (let r of t)
    e.hasField(r.name) ||
      e.addSuggestion(new ce(r.name, r.typeNames.join(' | ')));
}
function Xs(e, t) {
  let [r, n] = ir(e),
    i = t.arguments.getDeepSubSelectionValue(r)?.asObject();
  if (!i) return { parentKind: 'unknown', fieldName: n };
  let o = i.getFieldValue('select')?.asObject(),
    s = i.getFieldValue('include')?.asObject(),
    a = i.getFieldValue('omit')?.asObject(),
    l = o?.getField(n);
  return o && l
    ? { parentKind: 'select', parent: o, field: l, fieldName: n }
    : ((l = s?.getField(n)),
      s && l
        ? { parentKind: 'include', field: l, parent: s, fieldName: n }
        : ((l = a?.getField(n)),
          a && l
            ? { parentKind: 'omit', field: l, parent: a, fieldName: n }
            : { parentKind: 'unknown', fieldName: n }));
}
function ea(e, t) {
  if (t.kind === 'object')
    for (let r of t.fields)
      e.hasField(r.name) ||
        e.addSuggestion(new ce(r.name, r.typeNames.join(' | ')));
}
function ir(e) {
  let t = [...e],
    r = t.pop();
  if (!r) throw new Error('unexpected empty path');
  return [t, r];
}
function or({ green: e, enabled: t }) {
  return (
    'Available options are ' +
    (t ? `listed in ${e('green')}` : 'marked with ?') +
    '.'
  );
}
function gn(e, t) {
  if (t.length === 1) return t[0];
  let r = [...t],
    n = r.pop();
  return `${r.join(', ')} ${e} ${n}`;
}
var rd = 3;
function nd(e, t) {
  let r = 1 / 0,
    n;
  for (let i of t) {
    let o = (0, Ks.default)(e, i);
    o > rd || (o < r && ((r = o), (n = i)));
  }
  return n;
}
function ta(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1);
}
var sr = class {
  constructor(t, r, n, i, o) {
    (this.modelName = t),
      (this.name = r),
      (this.typeName = n),
      (this.isList = i),
      (this.isEnum = o);
  }
  _toGraphQLInputType() {
    let t = this.isList ? 'List' : '',
      r = this.isEnum ? 'Enum' : '';
    return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
  }
};
function St(e) {
  return e instanceof sr;
}
var hn = Symbol(),
  _i = new WeakMap(),
  $e = class {
    constructor(t) {
      t === hn
        ? _i.set(this, `Prisma.${this._getName()}`)
        : _i.set(
            this,
            `new Prisma.${this._getNamespace()}.${this._getName()}()`,
          );
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return _i.get(this);
    }
  },
  ar = class extends $e {
    _getNamespace() {
      return 'NullTypes';
    }
  },
  lr = class extends ar {};
Ni(lr, 'DbNull');
var ur = class extends ar {};
Ni(ur, 'JsonNull');
var cr = class extends ar {};
Ni(cr, 'AnyNull');
var yn = {
  classes: { DbNull: lr, JsonNull: ur, AnyNull: cr },
  instances: { DbNull: new lr(hn), JsonNull: new ur(hn), AnyNull: new cr(hn) },
};
function Ni(e, t) {
  Object.defineProperty(e, 'name', { value: t, configurable: !0 });
}
var ra = ': ',
  En = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.hasError = !1;
    }
    markAsError() {
      this.hasError = !0;
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + ra.length;
    }
    write(t) {
      let r = new Pe(this.name);
      this.hasError && r.underline().setColor(t.context.colors.red),
        t.write(r).write(ra).write(this.value);
    }
  };
var Li = class {
  constructor(t) {
    this.errorMessages = [];
    this.arguments = t;
  }
  write(t) {
    t.write(this.arguments);
  }
  addErrorMessage(t) {
    this.errorMessages.push(t);
  }
  renderAllMessages(t) {
    return this.errorMessages.map((r) => r(t)).join(`
`);
  }
};
function At(e) {
  return new Li(na(e));
}
function na(e) {
  let t = new Ct();
  for (let [r, n] of Object.entries(e)) {
    let i = new En(r, ia(n));
    t.addField(i);
  }
  return t;
}
function ia(e) {
  if (typeof e == 'string') return new J(JSON.stringify(e));
  if (typeof e == 'number' || typeof e == 'boolean') return new J(String(e));
  if (typeof e == 'bigint') return new J(`${e}n`);
  if (e === null) return new J('null');
  if (e === void 0) return new J('undefined');
  if (vt(e)) return new J(`new Prisma.Decimal("${e.toFixed()}")`);
  if (e instanceof Uint8Array)
    return Buffer.isBuffer(e)
      ? new J(`Buffer.alloc(${e.byteLength})`)
      : new J(`new Uint8Array(${e.byteLength})`);
  if (e instanceof Date) {
    let t = an(e) ? e.toISOString() : 'Invalid Date';
    return new J(`new Date("${t}")`);
  }
  return e instanceof $e
    ? new J(`Prisma.${e._getName()}`)
    : St(e)
      ? new J(`prisma.${ta(e.modelName)}.$fields.${e.name}`)
      : Array.isArray(e)
        ? id(e)
        : typeof e == 'object'
          ? na(e)
          : new J(Object.prototype.toString.call(e));
}
function id(e) {
  let t = new Rt();
  for (let r of e) t.addItem(ia(r));
  return t;
}
function bn(e, t) {
  let r = t === 'pretty' ? Ws : fn,
    n = e.renderAllMessages(r),
    i = new Pt(0, { colors: r }).write(e).toString();
  return { message: n, args: i };
}
function wn({
  args: e,
  errors: t,
  errorFormat: r,
  callsite: n,
  originalMethod: i,
  clientVersion: o,
  globalOmit: s,
}) {
  let a = At(e);
  for (let p of t) pn(p, a, s);
  let { message: l, args: u } = bn(a, r),
    c = cn({
      message: l,
      callsite: n,
      originalMethod: i,
      showColors: r === 'pretty',
      callArguments: u,
    });
  throw new ee(c, { clientVersion: o });
}
var Te = class {
  constructor() {
    this._map = new Map();
  }
  get(t) {
    return this._map.get(t)?.value;
  }
  set(t, r) {
    this._map.set(t, { value: r });
  }
  getOrCreate(t, r) {
    let n = this._map.get(t);
    if (n) return n.value;
    let i = r();
    return this.set(t, i), i;
  }
};
function pr(e) {
  let t;
  return {
    get() {
      return t || (t = { value: e() }), t.value;
    },
  };
}
function Re(e) {
  return e.replace(/^./, (t) => t.toLowerCase());
}
function sa(e, t, r) {
  let n = Re(r);
  return !t.result || !(t.result.$allModels || t.result[n])
    ? e
    : od({
        ...e,
        ...oa(t.name, e, t.result.$allModels),
        ...oa(t.name, e, t.result[n]),
      });
}
function od(e) {
  let t = new Te(),
    r = (n, i) =>
      t.getOrCreate(n, () =>
        i.has(n)
          ? [n]
          : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]),
      );
  return ht(e, (n) => ({ ...n, needs: r(n.name, new Set()) }));
}
function oa(e, t, r) {
  return r
    ? ht(r, ({ needs: n, compute: i }, o) => ({
        name: o,
        needs: n ? Object.keys(n).filter((s) => n[s]) : [],
        compute: sd(t, o, i),
      }))
    : {};
}
function sd(e, t, r) {
  let n = e?.[t]?.compute;
  return n ? (i) => r({ ...i, [t]: n(i) }) : r;
}
function aa(e, t) {
  if (!t) return e;
  let r = { ...e };
  for (let n of Object.values(t))
    if (e[n.name]) for (let i of n.needs) r[i] = !0;
  return r;
}
function la(e, t) {
  if (!t) return e;
  let r = { ...e };
  for (let n of Object.values(t))
    if (!e[n.name]) for (let i of n.needs) delete r[i];
  return r;
}
var xn = class {
    constructor(t, r) {
      this.extension = t;
      this.previous = r;
      this.computedFieldsCache = new Te();
      this.modelExtensionsCache = new Te();
      this.queryCallbacksCache = new Te();
      this.clientExtensions = pr(() =>
        this.extension.client
          ? {
              ...this.previous?.getAllClientExtensions(),
              ...this.extension.client,
            }
          : this.previous?.getAllClientExtensions(),
      );
      this.batchCallbacks = pr(() => {
        let t = this.previous?.getAllBatchQueryCallbacks() ?? [],
          r = this.extension.query?.$__internalBatch;
        return r ? t.concat(r) : t;
      });
    }
    getAllComputedFields(t) {
      return this.computedFieldsCache.getOrCreate(t, () =>
        sa(this.previous?.getAllComputedFields(t), this.extension, t),
      );
    }
    getAllClientExtensions() {
      return this.clientExtensions.get();
    }
    getAllModelExtensions(t) {
      return this.modelExtensionsCache.getOrCreate(t, () => {
        let r = Re(t);
        return !this.extension.model ||
          !(this.extension.model[r] || this.extension.model.$allModels)
          ? this.previous?.getAllModelExtensions(t)
          : {
              ...this.previous?.getAllModelExtensions(t),
              ...this.extension.model.$allModels,
              ...this.extension.model[r],
            };
      });
    }
    getAllQueryCallbacks(t, r) {
      return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
        let n = this.previous?.getAllQueryCallbacks(t, r) ?? [],
          i = [],
          o = this.extension.query;
        return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations)
          ? n
          : (o[t] !== void 0 &&
              (o[t][r] !== void 0 && i.push(o[t][r]),
              o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)),
            t !== '$none' &&
              o.$allModels !== void 0 &&
              (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]),
              o.$allModels.$allOperations !== void 0 &&
                i.push(o.$allModels.$allOperations)),
            o[r] !== void 0 && i.push(o[r]),
            o.$allOperations !== void 0 && i.push(o.$allOperations),
            n.concat(i));
      });
    }
    getAllBatchQueryCallbacks() {
      return this.batchCallbacks.get();
    }
  },
  It = class e {
    constructor(t) {
      this.head = t;
    }
    static empty() {
      return new e();
    }
    static single(t) {
      return new e(new xn(t));
    }
    isEmpty() {
      return this.head === void 0;
    }
    append(t) {
      return new e(new xn(t, this.head));
    }
    getAllComputedFields(t) {
      return this.head?.getAllComputedFields(t);
    }
    getAllClientExtensions() {
      return this.head?.getAllClientExtensions();
    }
    getAllModelExtensions(t) {
      return this.head?.getAllModelExtensions(t);
    }
    getAllQueryCallbacks(t, r) {
      return this.head?.getAllQueryCallbacks(t, r) ?? [];
    }
    getAllBatchQueryCallbacks() {
      return this.head?.getAllBatchQueryCallbacks() ?? [];
    }
  };
var ua = Symbol(),
  dr = class {
    constructor(t) {
      if (t !== ua)
        throw new Error('Skip instance can not be constructed directly');
    }
    ifUndefined(t) {
      return t === void 0 ? vn : t;
    }
  },
  vn = new dr(ua);
function Ce(e) {
  return e instanceof dr;
}
var ad = {
    findUnique: 'findUnique',
    findUniqueOrThrow: 'findUniqueOrThrow',
    findFirst: 'findFirst',
    findFirstOrThrow: 'findFirstOrThrow',
    findMany: 'findMany',
    count: 'aggregate',
    create: 'createOne',
    createMany: 'createMany',
    createManyAndReturn: 'createManyAndReturn',
    update: 'updateOne',
    updateMany: 'updateMany',
    upsert: 'upsertOne',
    delete: 'deleteOne',
    deleteMany: 'deleteMany',
    executeRaw: 'executeRaw',
    queryRaw: 'queryRaw',
    aggregate: 'aggregate',
    groupBy: 'groupBy',
    runCommandRaw: 'runCommandRaw',
    findRaw: 'findRaw',
    aggregateRaw: 'aggregateRaw',
  },
  ca = 'explicitly `undefined` values are not allowed';
function Pn({
  modelName: e,
  action: t,
  args: r,
  runtimeDataModel: n,
  extensions: i = It.empty(),
  callsite: o,
  clientMethod: s,
  errorFormat: a,
  clientVersion: l,
  previewFeatures: u,
  globalOmit: c,
}) {
  let p = new Fi({
    runtimeDataModel: n,
    modelName: e,
    action: t,
    rootArgs: r,
    callsite: o,
    extensions: i,
    selectionPath: [],
    argumentPath: [],
    originalMethod: s,
    errorFormat: a,
    clientVersion: l,
    previewFeatures: u,
    globalOmit: c,
  });
  return { modelName: e, action: ad[t], query: mr(r, p) };
}
function mr({ select: e, include: t, ...r } = {}, n) {
  let i;
  return (
    n.isPreviewFeatureOn('omitApi') && ((i = r.omit), delete r.omit),
    { arguments: da(r, n), selection: ld(e, t, i, n) }
  );
}
function ld(e, t, r, n) {
  return e
    ? (t
        ? n.throwValidationError({
            kind: 'MutuallyExclusiveFields',
            firstField: 'include',
            secondField: 'select',
            selectionPath: n.getSelectionPath(),
          })
        : r &&
          n.isPreviewFeatureOn('omitApi') &&
          n.throwValidationError({
            kind: 'MutuallyExclusiveFields',
            firstField: 'omit',
            secondField: 'select',
            selectionPath: n.getSelectionPath(),
          }),
      dd(e, n))
    : ud(n, t, r);
}
function ud(e, t, r) {
  let n = {};
  return (
    e.modelOrType &&
      !e.isRawAction() &&
      ((n.$composites = !0), (n.$scalars = !0)),
    t && cd(n, t, e),
    e.isPreviewFeatureOn('omitApi') && pd(n, r, e),
    n
  );
}
function cd(e, t, r) {
  for (let [n, i] of Object.entries(t)) {
    if (Ce(i)) continue;
    let o = r.nestSelection(n);
    if ((Mi(i, o), i === !1 || i === void 0)) {
      e[n] = !1;
      continue;
    }
    let s = r.findField(n);
    if (
      (s &&
        s.kind !== 'object' &&
        r.throwValidationError({
          kind: 'IncludeOnScalar',
          selectionPath: r.getSelectionPath().concat(n),
          outputType: r.getOutputTypeDescription(),
        }),
      s)
    ) {
      e[n] = mr(i === !0 ? {} : i, o);
      continue;
    }
    if (i === !0) {
      e[n] = !0;
      continue;
    }
    e[n] = mr(i, o);
  }
}
function pd(e, t, r) {
  let n = r.getComputedFields(),
    i = { ...r.getGlobalOmit(), ...t },
    o = la(i, n);
  for (let [s, a] of Object.entries(o)) {
    if (Ce(a)) continue;
    Mi(a, r.nestSelection(s));
    let l = r.findField(s);
    (n?.[s] && !l) || (e[s] = !a);
  }
}
function dd(e, t) {
  let r = {},
    n = t.getComputedFields(),
    i = aa(e, n);
  for (let [o, s] of Object.entries(i)) {
    if (Ce(s)) continue;
    let a = t.nestSelection(o);
    Mi(s, a);
    let l = t.findField(o);
    if (!(n?.[o] && !l)) {
      if (s === !1 || s === void 0 || Ce(s)) {
        r[o] = !1;
        continue;
      }
      if (s === !0) {
        l?.kind === 'object' ? (r[o] = mr({}, a)) : (r[o] = !0);
        continue;
      }
      r[o] = mr(s, a);
    }
  }
  return r;
}
function pa(e, t) {
  if (e === null) return null;
  if (typeof e == 'string' || typeof e == 'number' || typeof e == 'boolean')
    return e;
  if (typeof e == 'bigint') return { $type: 'BigInt', value: String(e) };
  if (xt(e)) {
    if (an(e)) return { $type: 'DateTime', value: e.toISOString() };
    t.throwValidationError({
      kind: 'InvalidArgumentValue',
      selectionPath: t.getSelectionPath(),
      argumentPath: t.getArgumentPath(),
      argument: { name: t.getArgumentName(), typeNames: ['Date'] },
      underlyingError: 'Provided Date object is invalid',
    });
  }
  if (St(e))
    return {
      $type: 'FieldRef',
      value: { _ref: e.name, _container: e.modelName },
    };
  if (Array.isArray(e)) return md(e, t);
  if (ArrayBuffer.isView(e)) {
    let { buffer: r, byteOffset: n, byteLength: i } = e;
    return { $type: 'Bytes', value: Buffer.from(r, n, i).toString('base64') };
  }
  if (fd(e)) return e.values;
  if (vt(e)) return { $type: 'Decimal', value: e.toFixed() };
  if (e instanceof $e) {
    if (e !== yn.instances[e._getName()])
      throw new Error('Invalid ObjectEnumValue');
    return { $type: 'Enum', value: e._getName() };
  }
  if (gd(e)) return e.toJSON();
  if (typeof e == 'object') return da(e, t);
  t.throwValidationError({
    kind: 'InvalidArgumentValue',
    selectionPath: t.getSelectionPath(),
    argumentPath: t.getArgumentPath(),
    argument: { name: t.getArgumentName(), typeNames: [] },
    underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it`,
  });
}
function da(e, t) {
  if (e.$type) return { $type: 'Raw', value: e };
  let r = {};
  for (let n in e) {
    let i = e[n],
      o = t.nestArgument(n);
    Ce(i) ||
      (i !== void 0
        ? (r[n] = pa(i, o))
        : t.isPreviewFeatureOn('strictUndefinedChecks') &&
          t.throwValidationError({
            kind: 'InvalidArgumentValue',
            argumentPath: o.getArgumentPath(),
            selectionPath: t.getSelectionPath(),
            argument: { name: t.getArgumentName(), typeNames: [] },
            underlyingError: ca,
          }));
  }
  return r;
}
function md(e, t) {
  let r = [];
  for (let n = 0; n < e.length; n++) {
    let i = t.nestArgument(String(n)),
      o = e[n];
    if (o === void 0 || Ce(o)) {
      let s = o === void 0 ? 'undefined' : 'Prisma.skip';
      t.throwValidationError({
        kind: 'InvalidArgumentValue',
        selectionPath: i.getSelectionPath(),
        argumentPath: i.getArgumentPath(),
        argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] },
        underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values`,
      });
    }
    r.push(pa(o, i));
  }
  return r;
}
function fd(e) {
  return typeof e == 'object' && e !== null && e.__prismaRawParameters__ === !0;
}
function gd(e) {
  return typeof e == 'object' && e !== null && typeof e.toJSON == 'function';
}
function Mi(e, t) {
  e === void 0 &&
    t.isPreviewFeatureOn('strictUndefinedChecks') &&
    t.throwValidationError({
      kind: 'InvalidSelectionValue',
      selectionPath: t.getSelectionPath(),
      underlyingError: ca,
    });
}
var Fi = class e {
  constructor(t) {
    this.params = t;
    this.params.modelName &&
      (this.modelOrType =
        this.params.runtimeDataModel.models[this.params.modelName] ??
        this.params.runtimeDataModel.types[this.params.modelName]);
  }
  throwValidationError(t) {
    wn({
      errors: [t],
      originalMethod: this.params.originalMethod,
      args: this.params.rootArgs ?? {},
      callsite: this.params.callsite,
      errorFormat: this.params.errorFormat,
      clientVersion: this.params.clientVersion,
      globalOmit: this.params.globalOmit,
    });
  }
  getSelectionPath() {
    return this.params.selectionPath;
  }
  getArgumentPath() {
    return this.params.argumentPath;
  }
  getArgumentName() {
    return this.params.argumentPath[this.params.argumentPath.length - 1];
  }
  getOutputTypeDescription() {
    if (!(!this.params.modelName || !this.modelOrType))
      return {
        name: this.params.modelName,
        fields: this.modelOrType.fields.map((t) => ({
          name: t.name,
          typeName: 'boolean',
          isRelation: t.kind === 'object',
        })),
      };
  }
  isRawAction() {
    return [
      'executeRaw',
      'queryRaw',
      'runCommandRaw',
      'findRaw',
      'aggregateRaw',
    ].includes(this.params.action);
  }
  isPreviewFeatureOn(t) {
    return this.params.previewFeatures.includes(t);
  }
  getComputedFields() {
    if (this.params.modelName)
      return this.params.extensions.getAllComputedFields(this.params.modelName);
  }
  findField(t) {
    return this.modelOrType?.fields.find((r) => r.name === t);
  }
  nestSelection(t) {
    let r = this.findField(t),
      n = r?.kind === 'object' ? r.type : void 0;
    return new e({
      ...this.params,
      modelName: n,
      selectionPath: this.params.selectionPath.concat(t),
    });
  }
  getGlobalOmit() {
    return this.params.modelName && this.shouldApplyGlobalOmit()
      ? (this.params.globalOmit?.[wt(this.params.modelName)] ?? {})
      : {};
  }
  shouldApplyGlobalOmit() {
    switch (this.params.action) {
      case 'findFirst':
      case 'findFirstOrThrow':
      case 'findUniqueOrThrow':
      case 'findMany':
      case 'upsert':
      case 'findUnique':
      case 'createManyAndReturn':
      case 'create':
      case 'update':
      case 'delete':
        return !0;
      case 'executeRaw':
      case 'aggregateRaw':
      case 'runCommandRaw':
      case 'findRaw':
      case 'createMany':
      case 'deleteMany':
      case 'groupBy':
      case 'updateMany':
      case 'count':
      case 'aggregate':
      case 'queryRaw':
        return !1;
      default:
        Fe(this.params.action, 'Unknown action');
    }
  }
  nestArgument(t) {
    return new e({
      ...this.params,
      argumentPath: this.params.argumentPath.concat(t),
    });
  }
};
var Ot = class {
  constructor(t) {
    this._engine = t;
  }
  prometheus(t) {
    return this._engine.metrics({ format: 'prometheus', ...t });
  }
  json(t) {
    return this._engine.metrics({ format: 'json', ...t });
  }
};
function ma(e) {
  return { models: $i(e.models), enums: $i(e.enums), types: $i(e.types) };
}
function $i(e) {
  let t = {};
  for (let { name: r, ...n } of e) t[r] = n;
  return t;
}
function fa(e, t) {
  let r = pr(() => hd(t));
  Object.defineProperty(e, 'dmmf', { get: () => r.get() });
}
function hd(e) {
  return {
    datamodel: { models: qi(e.models), enums: qi(e.enums), types: qi(e.types) },
  };
}
function qi(e) {
  return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
}
var Vi = new WeakMap(),
  Tn = '$$PrismaTypedSql',
  ji = class {
    constructor(t, r) {
      Vi.set(this, { sql: t, values: r }),
        Object.defineProperty(this, Tn, { value: Tn });
    }
    get sql() {
      return Vi.get(this).sql;
    }
    get values() {
      return Vi.get(this).values;
    }
  };
function ga(e) {
  return (...t) => new ji(e, t);
}
function ha(e) {
  return e != null && e[Tn] === Tn;
}
function fr(e) {
  return {
    ok: !1,
    error: e,
    map() {
      return fr(e);
    },
    flatMap() {
      return fr(e);
    },
  };
}
var Bi = class {
    constructor() {
      this.registeredErrors = [];
    }
    consumeError(t) {
      return this.registeredErrors[t];
    }
    registerNewError(t) {
      let r = 0;
      for (; this.registeredErrors[r] !== void 0; ) r++;
      return (this.registeredErrors[r] = { error: t }), r;
    }
  },
  Ui = (e) => {
    let t = new Bi(),
      r = Se(t, e.transactionContext.bind(e)),
      n = {
        adapterName: e.adapterName,
        errorRegistry: t,
        queryRaw: Se(t, e.queryRaw.bind(e)),
        executeRaw: Se(t, e.executeRaw.bind(e)),
        provider: e.provider,
        transactionContext: async (...i) =>
          (await r(...i)).map((s) => yd(t, s)),
      };
    return (
      e.getConnectionInfo &&
        (n.getConnectionInfo = bd(t, e.getConnectionInfo.bind(e))),
      n
    );
  },
  yd = (e, t) => {
    let r = Se(e, t.startTransaction.bind(t));
    return {
      adapterName: t.adapterName,
      provider: t.provider,
      queryRaw: Se(e, t.queryRaw.bind(t)),
      executeRaw: Se(e, t.executeRaw.bind(t)),
      startTransaction: async (...n) => (await r(...n)).map((o) => Ed(e, o)),
    };
  },
  Ed = (e, t) => ({
    adapterName: t.adapterName,
    provider: t.provider,
    options: t.options,
    queryRaw: Se(e, t.queryRaw.bind(t)),
    executeRaw: Se(e, t.executeRaw.bind(t)),
    commit: Se(e, t.commit.bind(t)),
    rollback: Se(e, t.rollback.bind(t)),
  });
function Se(e, t) {
  return async (...r) => {
    try {
      return await t(...r);
    } catch (n) {
      let i = e.registerNewError(n);
      return fr({ kind: 'GenericJs', id: i });
    }
  };
}
function bd(e, t) {
  return (...r) => {
    try {
      return t(...r);
    } catch (n) {
      let i = e.registerNewError(n);
      return fr({ kind: 'GenericJs', id: i });
    }
  };
}
var Kl = k(ai());
var Yl = require('async_hooks'),
  zl = require('events'),
  Zl = k(require('fs')),
  Nr = k(require('path'));
var se = class e {
  constructor(t, r) {
    if (t.length - 1 !== r.length)
      throw t.length === 0
        ? new TypeError('Expected at least 1 string')
        : new TypeError(
            `Expected ${t.length} strings to have ${t.length - 1} values`,
          );
    let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
    (this.values = new Array(n)),
      (this.strings = new Array(n + 1)),
      (this.strings[0] = t[0]);
    let i = 0,
      o = 0;
    for (; i < r.length; ) {
      let s = r[i++],
        a = t[i];
      if (s instanceof e) {
        this.strings[o] += s.strings[0];
        let l = 0;
        for (; l < s.values.length; )
          (this.values[o++] = s.values[l++]), (this.strings[o] = s.strings[l]);
        this.strings[o] += a;
      } else (this.values[o++] = s), (this.strings[o] = a);
    }
  }
  get sql() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `?${this.strings[r++]}`;
    return n;
  }
  get statement() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `:${r}${this.strings[r++]}`;
    return n;
  }
  get text() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `$${r}${this.strings[r++]}`;
    return n;
  }
  inspect() {
    return {
      sql: this.sql,
      statement: this.statement,
      text: this.text,
      values: this.values,
    };
  }
};
function ya(e, t = ',', r = '', n = '') {
  if (e.length === 0)
    throw new TypeError(
      'Expected `join([])` to be called with an array of multiple elements, but got an empty array',
    );
  return new se([r, ...Array(e.length - 1).fill(t), n], e);
}
function Qi(e) {
  return new se([e], []);
}
var Ea = Qi('');
function Gi(e, ...t) {
  return new se(e, t);
}
function gr(e) {
  return {
    getKeys() {
      return Object.keys(e);
    },
    getPropertyValue(t) {
      return e[t];
    },
  };
}
function ne(e, t) {
  return {
    getKeys() {
      return [e];
    },
    getPropertyValue() {
      return t();
    },
  };
}
function ot(e) {
  let t = new Te();
  return {
    getKeys() {
      return e.getKeys();
    },
    getPropertyValue(r) {
      return t.getOrCreate(r, () => e.getPropertyValue(r));
    },
    getPropertyDescriptor(r) {
      return e.getPropertyDescriptor?.(r);
    },
  };
}
var Rn = { enumerable: !0, configurable: !0, writable: !0 };
function Cn(e) {
  let t = new Set(e);
  return {
    getOwnPropertyDescriptor: () => Rn,
    has: (r, n) => t.has(n),
    set: (r, n, i) => t.add(n) && Reflect.set(r, n, i),
    ownKeys: () => [...t],
  };
}
var ba = Symbol.for('nodejs.util.inspect.custom');
function Ae(e, t) {
  let r = wd(t),
    n = new Set(),
    i = new Proxy(e, {
      get(o, s) {
        if (n.has(s)) return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      },
      has(o, s) {
        if (n.has(s)) return !0;
        let a = r.get(s);
        return a ? (a.has?.(s) ?? !0) : Reflect.has(o, s);
      },
      ownKeys(o) {
        let s = wa(Reflect.ownKeys(o), r),
          a = wa(Array.from(r.keys()), r);
        return [...new Set([...s, ...a, ...n])];
      },
      set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === !1
          ? !1
          : (n.add(s), Reflect.set(o, s, a));
      },
      getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let l = r.get(s);
        return l
          ? l.getPropertyDescriptor
            ? { ...Rn, ...l?.getPropertyDescriptor(s) }
            : Rn
          : a;
      },
      defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      },
    });
  return (
    (i[ba] = function () {
      let o = { ...this };
      return delete o[ba], o;
    }),
    i
  );
}
function wd(e) {
  let t = new Map();
  for (let r of e) {
    let n = r.getKeys();
    for (let i of n) t.set(i, r);
  }
  return t;
}
function wa(e, t) {
  return e.filter((r) => t.get(r)?.has?.(r) ?? !0);
}
function kt(e) {
  return {
    getKeys() {
      return e;
    },
    has() {
      return !1;
    },
    getPropertyValue() {},
  };
}
function Dt(e, t) {
  return {
    batch: e,
    transaction:
      t?.kind === 'batch'
        ? { isolationLevel: t.options.isolationLevel }
        : void 0,
  };
}
function xa(e) {
  if (e === void 0) return '';
  let t = At(e);
  return new Pt(0, { colors: fn }).write(t).toString();
}
var xd = 'P2037';
function _t({ error: e, user_facing_error: t }, r, n) {
  return t.error_code
    ? new X(vd(t, n), {
        code: t.error_code,
        clientVersion: r,
        meta: t.meta,
        batchRequestIdx: t.batch_request_idx,
      })
    : new j(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
}
function vd(e, t) {
  let r = e.message;
  return (
    (t === 'postgresql' || t === 'postgres' || t === 'mysql') &&
      e.error_code === xd &&
      (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`),
    r
  );
}
var hr = '<unknown>';
function va(e) {
  var t = e.split(`
`);
  return t.reduce(function (r, n) {
    var i = Rd(n) || Sd(n) || Od(n) || Nd(n) || Dd(n);
    return i && r.push(i), r;
  }, []);
}
var Pd =
    /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  Td = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function Rd(e) {
  var t = Pd.exec(e);
  if (!t) return null;
  var r = t[2] && t[2].indexOf('native') === 0,
    n = t[2] && t[2].indexOf('eval') === 0,
    i = Td.exec(t[2]);
  return (
    n && i != null && ((t[2] = i[1]), (t[3] = i[2]), (t[4] = i[3])),
    {
      file: r ? null : t[2],
      methodName: t[1] || hr,
      arguments: r ? [t[2]] : [],
      lineNumber: t[3] ? +t[3] : null,
      column: t[4] ? +t[4] : null,
    }
  );
}
var Cd =
  /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function Sd(e) {
  var t = Cd.exec(e);
  return t
    ? {
        file: t[2],
        methodName: t[1] || hr,
        arguments: [],
        lineNumber: +t[3],
        column: t[4] ? +t[4] : null,
      }
    : null;
}
var Ad =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
  Id = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function Od(e) {
  var t = Ad.exec(e);
  if (!t) return null;
  var r = t[3] && t[3].indexOf(' > eval') > -1,
    n = Id.exec(t[3]);
  return (
    r && n != null && ((t[3] = n[1]), (t[4] = n[2]), (t[5] = null)),
    {
      file: t[3],
      methodName: t[1] || hr,
      arguments: t[2] ? t[2].split(',') : [],
      lineNumber: t[4] ? +t[4] : null,
      column: t[5] ? +t[5] : null,
    }
  );
}
var kd = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function Dd(e) {
  var t = kd.exec(e);
  return t
    ? {
        file: t[3],
        methodName: t[1] || hr,
        arguments: [],
        lineNumber: +t[4],
        column: t[5] ? +t[5] : null,
      }
    : null;
}
var _d =
  /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function Nd(e) {
  var t = _d.exec(e);
  return t
    ? {
        file: t[2],
        methodName: t[1] || hr,
        arguments: [],
        lineNumber: +t[3],
        column: t[4] ? +t[4] : null,
      }
    : null;
}
var Ji = class {
    getLocation() {
      return null;
    }
  },
  Hi = class {
    constructor() {
      this._error = new Error();
    }
    getLocation() {
      let t = this._error.stack;
      if (!t) return null;
      let n = va(t).find((i) => {
        if (!i.file) return !1;
        let o = yi(i.file);
        return (
          o !== '<anonymous>' &&
          !o.includes('@prisma') &&
          !o.includes('/packages/client/src/runtime/') &&
          !o.endsWith('/runtime/binary.js') &&
          !o.endsWith('/runtime/library.js') &&
          !o.endsWith('/runtime/edge.js') &&
          !o.endsWith('/runtime/edge-esm.js') &&
          !o.startsWith('internal/') &&
          !i.methodName.includes('new ') &&
          !i.methodName.includes('getCallSite') &&
          !i.methodName.includes('Proxy.') &&
          i.methodName.split('.').length < 4
        );
      });
      return !n || !n.file
        ? null
        : {
            fileName: n.file,
            lineNumber: n.lineNumber,
            columnNumber: n.column,
          };
    }
  };
function Ze(e) {
  return e === 'minimal'
    ? typeof $EnabledCallSite == 'function' && e !== 'minimal'
      ? new $EnabledCallSite()
      : new Ji()
    : new Hi();
}
var Pa = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function Nt(e = {}) {
  let t = Fd(e);
  return Object.entries(t).reduce(
    (n, [i, o]) => (
      Pa[i] !== void 0 ? (n.select[i] = { select: o }) : (n[i] = o), n
    ),
    { select: {} },
  );
}
function Fd(e = {}) {
  return typeof e._count == 'boolean'
    ? { ...e, _count: { _all: e._count } }
    : e;
}
function Sn(e = {}) {
  return (t) => (typeof e._count == 'boolean' && (t._count = t._count._all), t);
}
function Ta(e, t) {
  let r = Sn(e);
  return t({ action: 'aggregate', unpacker: r, argsMapper: Nt })(e);
}
function Md(e = {}) {
  let { select: t, ...r } = e;
  return typeof t == 'object'
    ? Nt({ ...r, _count: t })
    : Nt({ ...r, _count: { _all: !0 } });
}
function $d(e = {}) {
  return typeof e.select == 'object'
    ? (t) => Sn(e)(t)._count
    : (t) => Sn(e)(t)._count._all;
}
function Ra(e, t) {
  return t({ action: 'count', unpacker: $d(e), argsMapper: Md })(e);
}
function qd(e = {}) {
  let t = Nt(e);
  if (Array.isArray(t.by))
    for (let r of t.by) typeof r == 'string' && (t.select[r] = !0);
  else typeof t.by == 'string' && (t.select[t.by] = !0);
  return t;
}
function Vd(e = {}) {
  return (t) => (
    typeof e?._count == 'boolean' &&
      t.forEach((r) => {
        r._count = r._count._all;
      }),
    t
  );
}
function Ca(e, t) {
  return t({ action: 'groupBy', unpacker: Vd(e), argsMapper: qd })(e);
}
function Sa(e, t, r) {
  if (t === 'aggregate') return (n) => Ta(n, r);
  if (t === 'count') return (n) => Ra(n, r);
  if (t === 'groupBy') return (n) => Ca(n, r);
}
function Aa(e, t) {
  let r = t.fields.filter((i) => !i.relationName),
    n = Ti(r, (i) => i.name);
  return new Proxy(
    {},
    {
      get(i, o) {
        if (o in i || typeof o == 'symbol') return i[o];
        let s = n[o];
        if (s) return new sr(e, o, s.type, s.isList, s.kind === 'enum');
      },
      ...Cn(Object.keys(n)),
    },
  );
}
var Ia = (e) => (Array.isArray(e) ? e : e.split('.')),
  Wi = (e, t) => Ia(t).reduce((r, n) => r && r[n], e),
  Oa = (e, t, r) =>
    Ia(t).reduceRight(
      (n, i, o, s) => Object.assign({}, Wi(e, s.slice(0, o)), { [i]: n }),
      r,
    );
function jd(e, t) {
  return e === void 0 || t === void 0 ? [] : [...t, 'select', e];
}
function Bd(e, t, r) {
  return t === void 0 ? (e ?? {}) : Oa(t, r, e || !0);
}
function Ki(e, t, r, n, i, o) {
  let a = e._runtimeDataModel.models[t].fields.reduce(
    (l, u) => ({ ...l, [u.name]: u }),
    {},
  );
  return (l) => {
    let u = Ze(e._errorFormat),
      c = jd(n, i),
      p = Bd(l, o, c),
      d = r({ dataPath: c, callsite: u })(p),
      f = Ud(e, t);
    return new Proxy(d, {
      get(g, h) {
        if (!f.includes(h)) return g[h];
        let T = [a[h].type, r, h],
          S = [c, p];
        return Ki(e, ...T, ...S);
      },
      ...Cn([...f, ...Object.getOwnPropertyNames(d)]),
    });
  };
}
function Ud(e, t) {
  return e._runtimeDataModel.models[t].fields
    .filter((r) => r.kind === 'object')
    .map((r) => r.name);
}
var Qd = [
    'findUnique',
    'findUniqueOrThrow',
    'findFirst',
    'findFirstOrThrow',
    'create',
    'update',
    'upsert',
    'delete',
  ],
  Gd = ['aggregate', 'count', 'groupBy'];
function Yi(e, t) {
  let r = e._extensions.getAllModelExtensions(t) ?? {},
    n = [
      Jd(e, t),
      Wd(e, t),
      gr(r),
      ne('name', () => t),
      ne('$name', () => t),
      ne('$parent', () => e._appliedParent),
    ];
  return Ae({}, n);
}
function Jd(e, t) {
  let r = Re(t),
    n = Object.keys(zt.ModelAction).concat('count');
  return {
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = i,
        s = (a) => (l) => {
          let u = Ze(e._errorFormat);
          return e._createPrismaPromise((c) => {
            let p = {
              args: l,
              dataPath: [],
              action: o,
              model: t,
              clientMethod: `${r}.${i}`,
              jsModelName: r,
              transaction: c,
              callsite: u,
            };
            return e._request({ ...p, ...a });
          });
        };
      return Qd.includes(o) ? Ki(e, t, s) : Hd(i) ? Sa(e, i, s) : s({});
    },
  };
}
function Hd(e) {
  return Gd.includes(e);
}
function Wd(e, t) {
  return ot(
    ne('fields', () => {
      let r = e._runtimeDataModel.models[t];
      return Aa(t, r);
    }),
  );
}
function ka(e) {
  return e.replace(/^./, (t) => t.toUpperCase());
}
var zi = Symbol();
function yr(e) {
  let t = [Kd(e), ne(zi, () => e), ne('$parent', () => e._appliedParent)],
    r = e._extensions.getAllClientExtensions();
  return r && t.push(gr(r)), Ae(e, t);
}
function Kd(e) {
  let t = Object.keys(e._runtimeDataModel.models),
    r = t.map(Re),
    n = [...new Set(t.concat(r))];
  return ot({
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = ka(i);
      if (e._runtimeDataModel.models[o] !== void 0) return Yi(e, o);
      if (e._runtimeDataModel.models[i] !== void 0) return Yi(e, i);
    },
    getPropertyDescriptor(i) {
      if (!r.includes(i)) return { enumerable: !1 };
    },
  });
}
function Da(e) {
  return e[zi] ? e[zi] : e;
}
function _a(e) {
  if (typeof e == 'function') return e(this);
  if (e.client?.__AccelerateEngine) {
    let r = e.client.__AccelerateEngine;
    this._originalClient._engine = new r(
      this._originalClient._accelerateEngineConfig,
    );
  }
  let t = Object.create(this._originalClient, {
    _extensions: { value: this._extensions.append(e) },
    _appliedParent: { value: this, configurable: !0 },
    $use: { value: void 0 },
    $on: { value: void 0 },
  });
  return yr(t);
}
function Na({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
  let o = i.getAllComputedFields(t);
  if (!o) return e;
  let s = [],
    a = [];
  for (let l of Object.values(o)) {
    if (n) {
      if (n[l.name]) continue;
      let u = l.needs.filter((c) => n[c]);
      u.length > 0 && a.push(kt(u));
    } else if (r) {
      if (!r[l.name]) continue;
      let u = l.needs.filter((c) => !r[c]);
      u.length > 0 && a.push(kt(u));
    }
    Yd(e, l.needs) && s.push(zd(l, Ae(e, s)));
  }
  return s.length > 0 || a.length > 0 ? Ae(e, [...s, ...a]) : e;
}
function Yd(e, t) {
  return t.every((r) => Pi(e, r));
}
function zd(e, t) {
  return ot(ne(e.name, () => e.compute(t)));
}
function An({
  visitor: e,
  result: t,
  args: r,
  runtimeDataModel: n,
  modelName: i,
}) {
  if (Array.isArray(t)) {
    for (let s = 0; s < t.length; s++)
      t[s] = An({
        result: t[s],
        args: r,
        modelName: i,
        runtimeDataModel: n,
        visitor: e,
      });
    return t;
  }
  let o = e(t, i, r) ?? t;
  return (
    r.include &&
      La({
        includeOrSelect: r.include,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    r.select &&
      La({
        includeOrSelect: r.select,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    o
  );
}
function La({
  includeOrSelect: e,
  result: t,
  parentModelName: r,
  runtimeDataModel: n,
  visitor: i,
}) {
  for (let [o, s] of Object.entries(e)) {
    if (!s || t[o] == null || Ce(s)) continue;
    let l = n.models[r].fields.find((c) => c.name === o);
    if (!l || l.kind !== 'object' || !l.relationName) continue;
    let u = typeof s == 'object' ? s : {};
    t[o] = An({
      visitor: i,
      result: t[o],
      args: u,
      modelName: l.type,
      runtimeDataModel: n,
    });
  }
}
function Fa({
  result: e,
  modelName: t,
  args: r,
  extensions: n,
  runtimeDataModel: i,
  globalOmit: o,
}) {
  return n.isEmpty() || e == null || typeof e != 'object' || !i.models[t]
    ? e
    : An({
        result: e,
        args: r ?? {},
        modelName: t,
        runtimeDataModel: i,
        visitor: (a, l, u) => {
          let c = Re(l);
          return Na({
            result: a,
            modelName: c,
            select: u.select,
            omit: u.select ? void 0 : { ...o?.[c], ...u.omit },
            extensions: n,
          });
        },
      });
}
function Ma(e) {
  if (e instanceof se) return Zd(e);
  if (Array.isArray(e)) {
    let r = [e[0]];
    for (let n = 1; n < e.length; n++) r[n] = Er(e[n]);
    return r;
  }
  let t = {};
  for (let r in e) t[r] = Er(e[r]);
  return t;
}
function Zd(e) {
  return new se(e.strings, e.values);
}
function Er(e) {
  if (typeof e != 'object' || e == null || e instanceof $e || St(e)) return e;
  if (vt(e)) return new ve(e.toFixed());
  if (xt(e)) return new Date(+e);
  if (ArrayBuffer.isView(e)) return e.slice(0);
  if (Array.isArray(e)) {
    let t = e.length,
      r;
    for (r = Array(t); t--; ) r[t] = Er(e[t]);
    return r;
  }
  if (typeof e == 'object') {
    let t = {};
    for (let r in e)
      r === '__proto__'
        ? Object.defineProperty(t, r, {
            value: Er(e[r]),
            configurable: !0,
            enumerable: !0,
            writable: !0,
          })
        : (t[r] = Er(e[r]));
    return t;
  }
  Fe(e, 'Unknown value');
}
function qa(e, t, r, n = 0) {
  return e._createPrismaPromise((i) => {
    let o = t.customDataProxyFetch;
    return (
      'transaction' in t &&
        i !== void 0 &&
        (t.transaction?.kind === 'batch' && t.transaction.lock.then(),
        (t.transaction = i)),
      n === r.length
        ? e._executeRequest(t)
        : r[n]({
            model: t.model,
            operation: t.model ? t.action : t.clientMethod,
            args: Ma(t.args ?? {}),
            __internalParams: t,
            query: (s, a = t) => {
              let l = a.customDataProxyFetch;
              return (
                (a.customDataProxyFetch = Ua(o, l)),
                (a.args = s),
                qa(e, a, r, n + 1)
              );
            },
          })
    );
  });
}
function Va(e, t) {
  let { jsModelName: r, action: n, clientMethod: i } = t,
    o = r ? n : i;
  if (e._extensions.isEmpty()) return e._executeRequest(t);
  let s = e._extensions.getAllQueryCallbacks(r ?? '$none', o);
  return qa(e, t, s);
}
function ja(e) {
  return (t) => {
    let r = { requests: t },
      n = t[0].extensions.getAllBatchQueryCallbacks();
    return n.length ? Ba(r, n, 0, e) : e(r);
  };
}
function Ba(e, t, r, n) {
  if (r === t.length) return n(e);
  let i = e.customDataProxyFetch,
    o = e.requests[0].transaction;
  return t[r]({
    args: {
      queries: e.requests.map((s) => ({
        model: s.modelName,
        operation: s.action,
        args: s.args,
      })),
      transaction: o
        ? { isolationLevel: o.kind === 'batch' ? o.isolationLevel : void 0 }
        : void 0,
    },
    __internalParams: e,
    query(s, a = e) {
      let l = a.customDataProxyFetch;
      return (a.customDataProxyFetch = Ua(i, l)), Ba(a, t, r + 1, n);
    },
  });
}
var $a = (e) => e;
function Ua(e = $a, t = $a) {
  return (r) => e(t(r));
}
var Qa = L('prisma:client'),
  Ga = { Vercel: 'vercel', 'Netlify CI': 'netlify' };
function Ja({ postinstall: e, ciName: t, clientVersion: r }) {
  if (
    (Qa('checkPlatformCaching:postinstall', e),
    Qa('checkPlatformCaching:ciName', t),
    e === !0 && t && t in Ga)
  ) {
    let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${Ga[t]}-build`;
    throw (console.error(n), new R(n, r));
  }
}
function Ha(e, t) {
  return e
    ? e.datasources
      ? e.datasources
      : e.datasourceUrl
        ? { [t[0]]: { url: e.datasourceUrl } }
        : {}
    : {};
}
var Xd = 'Cloudflare-Workers',
  em = 'node';
function Wa() {
  return typeof Netlify == 'object'
    ? 'netlify'
    : typeof EdgeRuntime == 'string'
      ? 'edge-light'
      : globalThis.navigator?.userAgent === Xd
        ? 'workerd'
        : globalThis.Deno
          ? 'deno'
          : globalThis.__lagon__
            ? 'lagon'
            : globalThis.process?.release?.name === em
              ? 'node'
              : globalThis.Bun
                ? 'bun'
                : globalThis.fastly
                  ? 'fastly'
                  : 'unknown';
}
var tm = {
  node: 'Node.js',
  workerd: 'Cloudflare Workers',
  deno: 'Deno and Deno Deploy',
  netlify: 'Netlify Edge Functions',
  'edge-light':
    'Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)',
};
function In() {
  let e = Wa();
  return {
    id: e,
    prettyName: tm[e] || e,
    isEdge: ['workerd', 'deno', 'netlify', 'edge-light'].includes(e),
  };
}
var Xa = k(require('fs')),
  br = k(require('path'));
function On(e) {
  let { runtimeBinaryTarget: t } = e;
  return `Add "${t}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${rm(e)}`;
}
function rm(e) {
  let { generator: t, generatorBinaryTargets: r, runtimeBinaryTarget: n } = e,
    i = { fromEnvVar: null, value: n },
    o = [...r, i];
  return wi({ ...t, binaryTargets: o });
}
function Xe(e) {
  let { runtimeBinaryTarget: t } = e;
  return `Prisma Client could not locate the Query Engine for runtime "${t}".`;
}
function et(e) {
  let { searchedLocations: t } = e;
  return `The following locations have been searched:
${[...new Set(t)].map((i) => `  ${i}`).join(`
`)}`;
}
function Ka(e) {
  let { runtimeBinaryTarget: t } = e;
  return `${Xe(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t}".
${On(e)}

${et(e)}`;
}
function kn(e) {
  return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
}
function Dn(e) {
  let { errorStack: t } = e;
  return t?.match(/\/\.next|\/next@|\/next\//)
    ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.`
    : '';
}
function Ya(e) {
  let { queryEngineName: t } = e;
  return `${Xe(e)}${Dn(e)}

This is likely caused by a bundler that has not copied "${t}" next to the resulting bundle.
Ensure that "${t}" has been copied next to the bundle or in "${e.expectedLocation}".

${kn('engine-not-found-bundler-investigation')}

${et(e)}`;
}
function za(e) {
  let { runtimeBinaryTarget: t, generatorBinaryTargets: r } = e,
    n = r.find((i) => i.native);
  return `${Xe(e)}

This happened because Prisma Client was generated for "${n?.value ?? 'unknown'}", but the actual deployment required "${t}".
${On(e)}

${et(e)}`;
}
function Za(e) {
  let { queryEngineName: t } = e;
  return `${Xe(e)}${Dn(e)}

This is likely caused by tooling that has not copied "${t}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t}" has been copied to "${e.expectedLocation}".

${kn('engine-not-found-tooling-investigation')}

${et(e)}`;
}
var nm = L('prisma:client:engines:resolveEnginePath'),
  im = () => new RegExp('runtime[\\\\/]library\\.m?js$');
async function el(e, t) {
  let r =
    {
      binary: process.env.PRISMA_QUERY_ENGINE_BINARY,
      library: process.env.PRISMA_QUERY_ENGINE_LIBRARY,
    }[e] ?? t.prismaPath;
  if (r !== void 0) return r;
  let { enginePath: n, searchedLocations: i } = await om(e, t);
  if (
    (nm('enginePath', n), n !== void 0 && e === 'binary' && ci(n), n !== void 0)
  )
    return (t.prismaPath = n);
  let o = await nt(),
    s = t.generator?.binaryTargets ?? [],
    a = s.some((d) => d.native),
    l = !s.some((d) => d.value === o),
    u = __filename.match(im()) === null,
    c = {
      searchedLocations: i,
      generatorBinaryTargets: s,
      generator: t.generator,
      runtimeBinaryTarget: o,
      queryEngineName: tl(e, o),
      expectedLocation: br.default.relative(process.cwd(), t.dirname),
      errorStack: new Error().stack,
    },
    p;
  throw (
    (a && l ? (p = za(c)) : l ? (p = Ka(c)) : u ? (p = Ya(c)) : (p = Za(c)),
    new R(p, t.clientVersion))
  );
}
async function om(engineType, config) {
  let binaryTarget = await nt(),
    searchedLocations = [],
    dirname = eval('__dirname'),
    searchLocations = [
      config.dirname,
      br.default.resolve(dirname, '..'),
      config.generator?.output?.value ?? dirname,
      br.default.resolve(dirname, '../../../.prisma/client'),
      '/tmp/prisma-engines',
      config.cwd,
    ];
  __filename.includes('resolveEnginePath') && searchLocations.push(es());
  for (let e of searchLocations) {
    let t = tl(engineType, binaryTarget),
      r = br.default.join(e, t);
    if ((searchedLocations.push(e), Xa.default.existsSync(r)))
      return { enginePath: r, searchedLocations };
  }
  return { enginePath: void 0, searchedLocations };
}
function tl(e, t) {
  return e === 'library'
    ? qr(t, 'fs')
    : `query-engine-${t}${t === 'windows' ? '.exe' : ''}`;
}
var Zi = k(vi());
function rl(e) {
  return e
    ? e
        .replace(/".*"/g, '"X"')
        .replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`)
    : '';
}
function nl(e) {
  return e
    .split(
      `
`,
    )
    .map((t) =>
      t
        .replace(
          /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/,
          '',
        )
        .replace(/\+\d+\s*ms$/, ''),
    ).join(`
`);
}
var il = k(xs());
function ol({
  title: e,
  user: t = 'prisma',
  repo: r = 'prisma',
  template: n = 'bug_report.yml',
  body: i,
}) {
  return (0, il.default)({ user: t, repo: r, template: n, title: e, body: i });
}
function sl({
  version: e,
  binaryTarget: t,
  title: r,
  description: n,
  engineVersion: i,
  database: o,
  query: s,
}) {
  let a = Oo(6e3 - (s?.length ?? 0)),
    l = nl((0, Zi.default)(a)),
    u = n
      ? `# Description
\`\`\`
${n}
\`\`\``
      : '',
    c = (0,
    Zi.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? rl(s) : ''}
\`\`\`
`),
    p = ol({ title: r, body: c });
  return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${Z(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
}
function Lt({
  inlineDatasources: e,
  overrideDatasources: t,
  env: r,
  clientVersion: n,
}) {
  let i,
    o = Object.keys(e)[0],
    s = e[o]?.url,
    a = t[o]?.url;
  if (
    (o === void 0
      ? (i = void 0)
      : a
        ? (i = a)
        : s?.value
          ? (i = s.value)
          : s?.fromEnvVar && (i = r[s.fromEnvVar]),
    s?.fromEnvVar !== void 0 && i === void 0)
  )
    throw new R(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
  if (i === void 0)
    throw new R(
      'error: Missing URL environment variable, value, or override.',
      n,
    );
  return i;
}
var _n = class extends Error {
  constructor(t, r) {
    super(t), (this.clientVersion = r.clientVersion), (this.cause = r.cause);
  }
  get [Symbol.toStringTag]() {
    return this.name;
  }
};
var ae = class extends _n {
  constructor(t, r) {
    super(t, r), (this.isRetryable = r.isRetryable ?? !0);
  }
};
function A(e, t) {
  return { ...e, isRetryable: t };
}
var Ft = class extends ae {
  constructor(r) {
    super('This request must be retried', A(r, !0));
    this.name = 'ForcedRetryError';
    this.code = 'P5001';
  }
};
x(Ft, 'ForcedRetryError');
var st = class extends ae {
  constructor(r, n) {
    super(r, A(n, !1));
    this.name = 'InvalidDatasourceError';
    this.code = 'P6001';
  }
};
x(st, 'InvalidDatasourceError');
var at = class extends ae {
  constructor(r, n) {
    super(r, A(n, !1));
    this.name = 'NotImplementedYetError';
    this.code = 'P5004';
  }
};
x(at, 'NotImplementedYetError');
var q = class extends ae {
  constructor(t, r) {
    super(t, r), (this.response = r.response);
    let n = this.response.headers.get('prisma-request-id');
    if (n) {
      let i = `(The request id was: ${n})`;
      this.message = this.message + ' ' + i;
    }
  }
};
var lt = class extends q {
  constructor(r) {
    super('Schema needs to be uploaded', A(r, !0));
    this.name = 'SchemaMissingError';
    this.code = 'P5005';
  }
};
x(lt, 'SchemaMissingError');
var Xi = 'This request could not be understood by the server',
  wr = class extends q {
    constructor(r, n, i) {
      super(n || Xi, A(r, !1));
      this.name = 'BadRequestError';
      this.code = 'P5000';
      i && (this.code = i);
    }
  };
x(wr, 'BadRequestError');
var xr = class extends q {
  constructor(r, n) {
    super('Engine not started: healthcheck timeout', A(r, !0));
    this.name = 'HealthcheckTimeoutError';
    this.code = 'P5013';
    this.logs = n;
  }
};
x(xr, 'HealthcheckTimeoutError');
var vr = class extends q {
  constructor(r, n, i) {
    super(n, A(r, !0));
    this.name = 'EngineStartupError';
    this.code = 'P5014';
    this.logs = i;
  }
};
x(vr, 'EngineStartupError');
var Pr = class extends q {
  constructor(r) {
    super('Engine version is not supported', A(r, !1));
    this.name = 'EngineVersionNotSupportedError';
    this.code = 'P5012';
  }
};
x(Pr, 'EngineVersionNotSupportedError');
var eo = 'Request timed out',
  Tr = class extends q {
    constructor(r, n = eo) {
      super(n, A(r, !1));
      this.name = 'GatewayTimeoutError';
      this.code = 'P5009';
    }
  };
x(Tr, 'GatewayTimeoutError');
var sm = 'Interactive transaction error',
  Rr = class extends q {
    constructor(r, n = sm) {
      super(n, A(r, !1));
      this.name = 'InteractiveTransactionError';
      this.code = 'P5015';
    }
  };
x(Rr, 'InteractiveTransactionError');
var am = 'Request parameters are invalid',
  Cr = class extends q {
    constructor(r, n = am) {
      super(n, A(r, !1));
      this.name = 'InvalidRequestError';
      this.code = 'P5011';
    }
  };
x(Cr, 'InvalidRequestError');
var to = 'Requested resource does not exist',
  Sr = class extends q {
    constructor(r, n = to) {
      super(n, A(r, !1));
      this.name = 'NotFoundError';
      this.code = 'P5003';
    }
  };
x(Sr, 'NotFoundError');
var ro = 'Unknown server error',
  Mt = class extends q {
    constructor(r, n, i) {
      super(n || ro, A(r, !0));
      this.name = 'ServerError';
      this.code = 'P5006';
      this.logs = i;
    }
  };
x(Mt, 'ServerError');
var no = 'Unauthorized, check your connection string',
  Ar = class extends q {
    constructor(r, n = no) {
      super(n, A(r, !1));
      this.name = 'UnauthorizedError';
      this.code = 'P5007';
    }
  };
x(Ar, 'UnauthorizedError');
var io = 'Usage exceeded, retry again later',
  Ir = class extends q {
    constructor(r, n = io) {
      super(n, A(r, !0));
      this.name = 'UsageExceededError';
      this.code = 'P5008';
    }
  };
x(Ir, 'UsageExceededError');
async function lm(e) {
  let t;
  try {
    t = await e.text();
  } catch {
    return { type: 'EmptyError' };
  }
  try {
    let r = JSON.parse(t);
    if (typeof r == 'string')
      switch (r) {
        case 'InternalDataProxyError':
          return { type: 'DataProxyError', body: r };
        default:
          return { type: 'UnknownTextError', body: r };
      }
    if (typeof r == 'object' && r !== null) {
      if ('is_panic' in r && 'message' in r && 'error_code' in r)
        return { type: 'QueryEngineError', body: r };
      if (
        'EngineNotStarted' in r ||
        'InteractiveTransactionMisrouted' in r ||
        'InvalidRequestError' in r
      ) {
        let n = Object.values(r)[0].reason;
        return typeof n == 'string' &&
          !['SchemaMissing', 'EngineVersionNotSupported'].includes(n)
          ? { type: 'UnknownJsonError', body: r }
          : { type: 'DataProxyError', body: r };
      }
    }
    return { type: 'UnknownJsonError', body: r };
  } catch {
    return t === ''
      ? { type: 'EmptyError' }
      : { type: 'UnknownTextError', body: t };
  }
}
async function Or(e, t) {
  if (e.ok) return;
  let r = { clientVersion: t, response: e },
    n = await lm(e);
  if (n.type === 'QueryEngineError')
    throw new X(n.body.message, { code: n.body.error_code, clientVersion: t });
  if (n.type === 'DataProxyError') {
    if (n.body === 'InternalDataProxyError')
      throw new Mt(r, 'Internal Data Proxy error');
    if ('EngineNotStarted' in n.body) {
      if (n.body.EngineNotStarted.reason === 'SchemaMissing') return new lt(r);
      if (n.body.EngineNotStarted.reason === 'EngineVersionNotSupported')
        throw new Pr(r);
      if ('EngineStartupError' in n.body.EngineNotStarted.reason) {
        let { msg: i, logs: o } =
          n.body.EngineNotStarted.reason.EngineStartupError;
        throw new vr(r, i, o);
      }
      if ('KnownEngineStartupError' in n.body.EngineNotStarted.reason) {
        let { msg: i, error_code: o } =
          n.body.EngineNotStarted.reason.KnownEngineStartupError;
        throw new R(i, t, o);
      }
      if ('HealthcheckTimeout' in n.body.EngineNotStarted.reason) {
        let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
        throw new xr(r, i);
      }
    }
    if ('InteractiveTransactionMisrouted' in n.body) {
      let i = {
        IDParseError: 'Could not parse interactive transaction ID',
        NoQueryEngineFoundError:
          'Could not find Query Engine for the specified host and transaction ID',
        TransactionStartError: 'Could not start interactive transaction',
      };
      throw new Rr(r, i[n.body.InteractiveTransactionMisrouted.reason]);
    }
    if ('InvalidRequestError' in n.body)
      throw new Cr(r, n.body.InvalidRequestError.reason);
  }
  if (e.status === 401 || e.status === 403) throw new Ar(r, $t(no, n));
  if (e.status === 404) return new Sr(r, $t(to, n));
  if (e.status === 429) throw new Ir(r, $t(io, n));
  if (e.status === 504) throw new Tr(r, $t(eo, n));
  if (e.status >= 500) throw new Mt(r, $t(ro, n));
  if (e.status >= 400) throw new wr(r, $t(Xi, n));
}
function $t(e, t) {
  return t.type === 'EmptyError' ? e : `${e}: ${JSON.stringify(t)}`;
}
function al(e) {
  let t = Math.pow(2, e) * 50,
    r = Math.ceil(Math.random() * t) - Math.ceil(t / 2),
    n = t + r;
  return new Promise((i) => setTimeout(() => i(n), n));
}
var qe = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function ll(e) {
  let t = new TextEncoder().encode(e),
    r = '',
    n = t.byteLength,
    i = n % 3,
    o = n - i,
    s,
    a,
    l,
    u,
    c;
  for (let p = 0; p < o; p = p + 3)
    (c = (t[p] << 16) | (t[p + 1] << 8) | t[p + 2]),
      (s = (c & 16515072) >> 18),
      (a = (c & 258048) >> 12),
      (l = (c & 4032) >> 6),
      (u = c & 63),
      (r += qe[s] + qe[a] + qe[l] + qe[u]);
  return (
    i == 1
      ? ((c = t[o]),
        (s = (c & 252) >> 2),
        (a = (c & 3) << 4),
        (r += qe[s] + qe[a] + '=='))
      : i == 2 &&
        ((c = (t[o] << 8) | t[o + 1]),
        (s = (c & 64512) >> 10),
        (a = (c & 1008) >> 4),
        (l = (c & 15) << 2),
        (r += qe[s] + qe[a] + qe[l] + '=')),
    r
  );
}
function ul(e) {
  if (
    !!e.generator?.previewFeatures.some((r) =>
      r.toLowerCase().includes('metrics'),
    )
  )
    throw new R(
      'The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate',
      e.clientVersion,
    );
}
function um(e) {
  return e[0] * 1e3 + e[1] / 1e6;
}
function oo(e) {
  return new Date(um(e));
}
var cl = {
  '@prisma/debug': 'workspace:*',
  '@prisma/engines-version':
    '6.1.0-21.11f085a2012c0f4778414c8db2651556ee0ef959',
  '@prisma/fetch-engine': 'workspace:*',
  '@prisma/get-platform': 'workspace:*',
};
var kr = class extends ae {
  constructor(r, n) {
    super(
      `Cannot fetch data from service:
${r}`,
      A(n, !0),
    );
    this.name = 'RequestError';
    this.code = 'P5010';
  }
};
x(kr, 'RequestError');
async function ut(e, t, r = (n) => n) {
  let { clientVersion: n, ...i } = t,
    o = r(fetch);
  try {
    return await o(e, i);
  } catch (s) {
    let a = s.message ?? 'Unknown error';
    throw new kr(a, { clientVersion: n, cause: s });
  }
}
var pm = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/,
  pl = L('prisma:client:dataproxyEngine');
async function dm(e, t) {
  let r = cl['@prisma/engines-version'],
    n = t.clientVersion ?? 'unknown';
  if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
    return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
  if (e.includes('accelerate') && n !== '0.0.0' && n !== 'in-memory') return n;
  let [i, o] = n?.split('-') ?? [];
  if (o === void 0 && pm.test(i)) return i;
  if (o !== void 0 || n === '0.0.0' || n === 'in-memory') {
    if (e.startsWith('localhost') || e.startsWith('127.0.0.1')) return '0.0.0';
    let [s] = r.split('-') ?? [],
      [a, l, u] = s.split('.'),
      c = mm(`<=${a}.${l}.${u}`),
      p = await ut(c, { clientVersion: n });
    if (!p.ok)
      throw new Error(
        `Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${(await p.text()) || '<empty body>'}`,
      );
    let d = await p.text();
    pl('length of body fetched from unpkg.com', d.length);
    let f;
    try {
      f = JSON.parse(d);
    } catch (g) {
      throw (
        (console.error('JSON.parse error: body fetched from unpkg.com: ', d), g)
      );
    }
    return f.version;
  }
  throw new at(
    'Only `major.minor.patch` versions are supported by Accelerate.',
    { clientVersion: n },
  );
}
async function dl(e, t) {
  let r = await dm(e, t);
  return pl('version', r), r;
}
function mm(e) {
  return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
}
var ml = 3,
  Nn = L('prisma:client:dataproxyEngine'),
  so = class {
    constructor({
      apiKey: t,
      tracingHelper: r,
      logLevel: n,
      logQueries: i,
      engineHash: o,
    }) {
      (this.apiKey = t),
        (this.tracingHelper = r),
        (this.logLevel = n),
        (this.logQueries = i),
        (this.engineHash = o);
    }
    build({ traceparent: t, interactiveTransaction: r } = {}) {
      let n = {
        Authorization: `Bearer ${this.apiKey}`,
        'Prisma-Engine-Hash': this.engineHash,
      };
      this.tracingHelper.isEnabled() &&
        (n.traceparent = t ?? this.tracingHelper.getTraceParent()),
        r && (n['X-transaction-id'] = r.id);
      let i = this.buildCaptureSettings();
      return i.length > 0 && (n['X-capture-telemetry'] = i.join(', ')), n;
    }
    buildCaptureSettings() {
      let t = [];
      return (
        this.tracingHelper.isEnabled() && t.push('tracing'),
        this.logLevel && t.push(this.logLevel),
        this.logQueries && t.push('query'),
        t
      );
    }
  },
  Dr = class {
    constructor(t) {
      this.name = 'DataProxyEngine';
      ul(t),
        (this.config = t),
        (this.env = { ...t.env, ...(typeof process < 'u' ? process.env : {}) }),
        (this.inlineSchema = ll(t.inlineSchema)),
        (this.inlineDatasources = t.inlineDatasources),
        (this.inlineSchemaHash = t.inlineSchemaHash),
        (this.clientVersion = t.clientVersion),
        (this.engineHash = t.engineVersion),
        (this.logEmitter = t.logEmitter),
        (this.tracingHelper = t.tracingHelper);
    }
    apiKey() {
      return this.headerBuilder.apiKey;
    }
    version() {
      return this.engineHash;
    }
    async start() {
      this.startPromise !== void 0 && (await this.startPromise),
        (this.startPromise = (async () => {
          let [t, r] = this.extractHostAndApiKey();
          (this.host = t),
            (this.headerBuilder = new so({
              apiKey: r,
              tracingHelper: this.tracingHelper,
              logLevel: this.config.logLevel,
              logQueries: this.config.logQueries,
              engineHash: this.engineHash,
            })),
            (this.remoteClientVersion = await dl(t, this.config)),
            Nn('host', this.host);
        })()),
        await this.startPromise;
    }
    async stop() {}
    propagateResponseExtensions(t) {
      t?.logs?.length &&
        t.logs.forEach((r) => {
          switch (r.level) {
            case 'debug':
            case 'trace':
              Nn(r);
              break;
            case 'error':
            case 'warn':
            case 'info': {
              this.logEmitter.emit(r.level, {
                timestamp: oo(r.timestamp),
                message: r.attributes.message ?? '',
                target: r.target,
              });
              break;
            }
            case 'query': {
              this.logEmitter.emit('query', {
                query: r.attributes.query ?? '',
                timestamp: oo(r.timestamp),
                duration: r.attributes.duration_ms ?? 0,
                params: r.attributes.params ?? '',
                target: r.target,
              });
              break;
            }
            default:
              r.level;
          }
        }),
        t?.traces?.length && this.tracingHelper.dispatchEngineSpans(t.traces);
    }
    onBeforeExit() {
      throw new Error(
        '"beforeExit" hook is not applicable to the remote query engine',
      );
    }
    async url(t) {
      return (
        await this.start(),
        `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`
      );
    }
    async uploadSchema() {
      let t = { name: 'schemaUpload', internal: !0 };
      return this.tracingHelper.runInChildSpan(t, async () => {
        let r = await ut(await this.url('schema'), {
          method: 'PUT',
          headers: this.headerBuilder.build(),
          body: this.inlineSchema,
          clientVersion: this.clientVersion,
        });
        r.ok || Nn('schema response status', r.status);
        let n = await Or(r, this.clientVersion);
        if (n)
          throw (
            (this.logEmitter.emit('warn', {
              message: `Error while uploading schema: ${n.message}`,
              timestamp: new Date(),
              target: '',
            }),
            n)
          );
        this.logEmitter.emit('info', {
          message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`,
          timestamp: new Date(),
          target: '',
        });
      });
    }
    request(
      t,
      { traceparent: r, interactiveTransaction: n, customDataProxyFetch: i },
    ) {
      return this.requestInternal({
        body: t,
        traceparent: r,
        interactiveTransaction: n,
        customDataProxyFetch: i,
      });
    }
    async requestBatch(
      t,
      { traceparent: r, transaction: n, customDataProxyFetch: i },
    ) {
      let o = n?.kind === 'itx' ? n.options : void 0,
        s = Dt(t, n);
      return (
        await this.requestInternal({
          body: s,
          customDataProxyFetch: i,
          interactiveTransaction: o,
          traceparent: r,
        })
      ).map(
        (l) => (
          l.extensions && this.propagateResponseExtensions(l.extensions),
          'errors' in l ? this.convertProtocolErrorsToClientError(l.errors) : l
        ),
      );
    }
    requestInternal({
      body: t,
      traceparent: r,
      customDataProxyFetch: n,
      interactiveTransaction: i,
    }) {
      return this.withRetry({
        actionGerund: 'querying',
        callback: async ({ logHttpCall: o }) => {
          let s = i
            ? `${i.payload.endpoint}/graphql`
            : await this.url('graphql');
          o(s);
          let a = await ut(
            s,
            {
              method: 'POST',
              headers: this.headerBuilder.build({
                traceparent: r,
                interactiveTransaction: i,
              }),
              body: JSON.stringify(t),
              clientVersion: this.clientVersion,
            },
            n,
          );
          a.ok || Nn('graphql response status', a.status),
            await this.handleError(await Or(a, this.clientVersion));
          let l = await a.json();
          if (
            (l.extensions && this.propagateResponseExtensions(l.extensions),
            'errors' in l)
          )
            throw this.convertProtocolErrorsToClientError(l.errors);
          return 'batchResult' in l ? l.batchResult : l;
        },
      });
    }
    async transaction(t, r, n) {
      let i = {
        start: 'starting',
        commit: 'committing',
        rollback: 'rolling back',
      };
      return this.withRetry({
        actionGerund: `${i[t]} transaction`,
        callback: async ({ logHttpCall: o }) => {
          if (t === 'start') {
            let s = JSON.stringify({
                max_wait: n.maxWait,
                timeout: n.timeout,
                isolation_level: n.isolationLevel,
              }),
              a = await this.url('transaction/start');
            o(a);
            let l = await ut(a, {
              method: 'POST',
              headers: this.headerBuilder.build({ traceparent: r.traceparent }),
              body: s,
              clientVersion: this.clientVersion,
            });
            await this.handleError(await Or(l, this.clientVersion));
            let u = await l.json(),
              { extensions: c } = u;
            c && this.propagateResponseExtensions(c);
            let p = u.id,
              d = u['data-proxy'].endpoint;
            return { id: p, payload: { endpoint: d } };
          } else {
            let s = `${n.payload.endpoint}/${t}`;
            o(s);
            let a = await ut(s, {
              method: 'POST',
              headers: this.headerBuilder.build({ traceparent: r.traceparent }),
              clientVersion: this.clientVersion,
            });
            await this.handleError(await Or(a, this.clientVersion));
            let l = await a.json(),
              { extensions: u } = l;
            u && this.propagateResponseExtensions(u);
            return;
          }
        },
      });
    }
    extractHostAndApiKey() {
      let t = { clientVersion: this.clientVersion },
        r = Object.keys(this.inlineDatasources)[0],
        n = Lt({
          inlineDatasources: this.inlineDatasources,
          overrideDatasources: this.config.overrideDatasources,
          clientVersion: this.clientVersion,
          env: this.env,
        }),
        i;
      try {
        i = new URL(n);
      } catch {
        throw new st(
          `Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``,
          t,
        );
      }
      let { protocol: o, host: s, searchParams: a } = i;
      if (o !== 'prisma:' && o !== 'prisma+postgres:')
        throw new st(
          `Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``,
          t,
        );
      let l = a.get('api_key');
      if (l === null || l.length < 1)
        throw new st(
          `Error validating datasource \`${r}\`: the URL must contain a valid API key`,
          t,
        );
      return [s, l];
    }
    metrics() {
      throw new at('Metrics are not yet supported for Accelerate', {
        clientVersion: this.clientVersion,
      });
    }
    async withRetry(t) {
      for (let r = 0; ; r++) {
        let n = (i) => {
          this.logEmitter.emit('info', {
            message: `Calling ${i} (n=${r})`,
            timestamp: new Date(),
            target: '',
          });
        };
        try {
          return await t.callback({ logHttpCall: n });
        } catch (i) {
          if (!(i instanceof ae) || !i.isRetryable) throw i;
          if (r >= ml) throw i instanceof Ft ? i.cause : i;
          this.logEmitter.emit('warn', {
            message: `Attempt ${r + 1}/${ml} failed for ${t.actionGerund}: ${i.message ?? '(unknown)'}`,
            timestamp: new Date(),
            target: '',
          });
          let o = await al(r);
          this.logEmitter.emit('warn', {
            message: `Retrying after ${o}ms`,
            timestamp: new Date(),
            target: '',
          });
        }
      }
    }
    async handleError(t) {
      if (t instanceof lt)
        throw (
          (await this.uploadSchema(),
          new Ft({ clientVersion: this.clientVersion, cause: t }))
        );
      if (t) throw t;
    }
    convertProtocolErrorsToClientError(t) {
      return t.length === 1
        ? _t(t[0], this.config.clientVersion, this.config.activeProvider)
        : new j(JSON.stringify(t), {
            clientVersion: this.config.clientVersion,
          });
    }
    applyPendingMigrations() {
      throw new Error('Method not implemented.');
    }
  };
function fl(e) {
  if (e?.kind === 'itx') return e.options.id;
}
var lo = k(require('os')),
  gl = k(require('path'));
var ao = Symbol('PrismaLibraryEngineCache');
function fm() {
  let e = globalThis;
  return e[ao] === void 0 && (e[ao] = {}), e[ao];
}
function gm(e) {
  let t = fm();
  if (t[e] !== void 0) return t[e];
  let r = gl.default.toNamespacedPath(e),
    n = { exports: {} },
    i = 0;
  return (
    process.platform !== 'win32' &&
      (i =
        lo.default.constants.dlopen.RTLD_LAZY |
        lo.default.constants.dlopen.RTLD_DEEPBIND),
    process.dlopen(n, r, i),
    (t[e] = n.exports),
    n.exports
  );
}
var hl = {
  async loadLibrary(e) {
    let t = await Xn(),
      r = await el('library', e);
    try {
      return e.tracingHelper.runInChildSpan(
        { name: 'loadLibrary', internal: !0 },
        () => gm(r),
      );
    } catch (n) {
      let i = pi({ e: n, platformInfo: t, id: r });
      throw new R(i, e.clientVersion);
    }
  },
};
var uo,
  yl = {
    async loadLibrary(e) {
      let { clientVersion: t, adapter: r, engineWasm: n } = e;
      if (r === void 0)
        throw new R(
          `The \`adapter\` option for \`PrismaClient\` is required in this context (${In().prettyName})`,
          t,
        );
      if (n === void 0)
        throw new R('WASM engine was unexpectedly `undefined`', t);
      uo === void 0 &&
        (uo = (async () => {
          let o = n.getRuntime(),
            s = await n.getQueryEngineWasmModule();
          if (s == null)
            throw new R(
              'The loaded wasm module was unexpectedly `undefined` or `null` once loaded',
              t,
            );
          let a = { './query_engine_bg.js': o },
            l = new WebAssembly.Instance(s, a);
          return o.__wbg_set_wasm(l.exports), o.QueryEngine;
        })());
      let i = await uo;
      return {
        debugPanic() {
          return Promise.reject('{}');
        },
        dmmf() {
          return Promise.resolve('{}');
        },
        version() {
          return { commit: 'unknown', version: 'unknown' };
        },
        QueryEngine: i,
      };
    },
  };
var hm = 'P2036',
  Ie = L('prisma:client:libraryEngine');
function ym(e) {
  return e.item_type === 'query' && 'query' in e;
}
function Em(e) {
  return 'level' in e ? e.level === 'error' && e.message === 'PANIC' : !1;
}
var El = [...Hn, 'native'],
  bm = 0xffffffffffffffffn,
  co = 1n;
function wm() {
  let e = co++;
  return co > bm && (co = 1n), e;
}
var _r = class {
  constructor(t, r) {
    this.name = 'LibraryEngine';
    (this.libraryLoader = r ?? hl),
      t.engineWasm !== void 0 && (this.libraryLoader = r ?? yl),
      (this.config = t),
      (this.libraryStarted = !1),
      (this.logQueries = t.logQueries ?? !1),
      (this.logLevel = t.logLevel ?? 'error'),
      (this.logEmitter = t.logEmitter),
      (this.datamodel = t.inlineSchema),
      (this.tracingHelper = t.tracingHelper),
      t.enableDebugLogs && (this.logLevel = 'debug');
    let n = Object.keys(t.overrideDatasources)[0],
      i = t.overrideDatasources[n]?.url;
    n !== void 0 && i !== void 0 && (this.datasourceOverrides = { [n]: i }),
      (this.libraryInstantiationPromise = this.instantiateLibrary());
  }
  wrapEngine(t) {
    return {
      applyPendingMigrations: t.applyPendingMigrations?.bind(t),
      commitTransaction: this.withRequestId(t.commitTransaction.bind(t)),
      connect: this.withRequestId(t.connect.bind(t)),
      disconnect: this.withRequestId(t.disconnect.bind(t)),
      metrics: t.metrics?.bind(t),
      query: this.withRequestId(t.query.bind(t)),
      rollbackTransaction: this.withRequestId(t.rollbackTransaction.bind(t)),
      sdlSchema: t.sdlSchema?.bind(t),
      startTransaction: this.withRequestId(t.startTransaction.bind(t)),
      trace: t.trace.bind(t),
    };
  }
  withRequestId(t) {
    return async (...r) => {
      let n = wm().toString();
      try {
        return await t(...r, n);
      } finally {
        if (this.tracingHelper.isEnabled()) {
          let i = await this.engine?.trace(n);
          if (i) {
            let o = JSON.parse(i);
            this.tracingHelper.dispatchEngineSpans(o.spans);
          }
        }
      }
    };
  }
  async applyPendingMigrations() {
    throw new Error(
      'Cannot call this method from this type of engine instance',
    );
  }
  async transaction(t, r, n) {
    await this.start();
    let i = JSON.stringify(r),
      o;
    if (t === 'start') {
      let a = JSON.stringify({
        max_wait: n.maxWait,
        timeout: n.timeout,
        isolation_level: n.isolationLevel,
      });
      o = await this.engine?.startTransaction(a, i);
    } else
      t === 'commit'
        ? (o = await this.engine?.commitTransaction(n.id, i))
        : t === 'rollback' &&
          (o = await this.engine?.rollbackTransaction(n.id, i));
    let s = this.parseEngineResponse(o);
    if (xm(s)) {
      let a = this.getExternalAdapterError(s);
      throw a
        ? a.error
        : new X(s.message, {
            code: s.error_code,
            clientVersion: this.config.clientVersion,
            meta: s.meta,
          });
    }
    return s;
  }
  async instantiateLibrary() {
    if ((Ie('internalSetup'), this.libraryInstantiationPromise))
      return this.libraryInstantiationPromise;
    Jn(),
      (this.binaryTarget = await this.getCurrentBinaryTarget()),
      await this.tracingHelper.runInChildSpan('load_engine', () =>
        this.loadEngine(),
      ),
      this.version();
  }
  async getCurrentBinaryTarget() {
    {
      if (this.binaryTarget) return this.binaryTarget;
      let t = await this.tracingHelper.runInChildSpan('detect_platform', () =>
        nt(),
      );
      if (!El.includes(t))
        throw new R(
          `Unknown ${pe('PRISMA_QUERY_ENGINE_LIBRARY')} ${pe(H(t))}. Possible binaryTargets: ${Ve(El.join(', '))} or a path to the query engine library.
You may have to run ${Ve('prisma generate')} for your changes to take effect.`,
          this.config.clientVersion,
        );
      return t;
    }
  }
  parseEngineResponse(t) {
    if (!t)
      throw new j('Response from the Engine was empty', {
        clientVersion: this.config.clientVersion,
      });
    try {
      return JSON.parse(t);
    } catch {
      throw new j('Unable to JSON.parse response from engine', {
        clientVersion: this.config.clientVersion,
      });
    }
  }
  async loadEngine() {
    if (!this.engine) {
      this.QueryEngineConstructor ||
        ((this.library = await this.libraryLoader.loadLibrary(this.config)),
        (this.QueryEngineConstructor = this.library.QueryEngine));
      try {
        let t = new WeakRef(this),
          { adapter: r } = this.config;
        r && Ie('Using driver adapter: %O', r),
          (this.engine = this.wrapEngine(
            new this.QueryEngineConstructor(
              {
                datamodel: this.datamodel,
                env: process.env,
                logQueries: this.config.logQueries ?? !1,
                ignoreEnvVarErrors: !0,
                datasourceOverrides: this.datasourceOverrides ?? {},
                logLevel: this.logLevel,
                configDir: this.config.cwd,
                engineProtocol: 'json',
                enableTracing: this.tracingHelper.isEnabled(),
              },
              (n) => {
                t.deref()?.logger(n);
              },
              r,
            ),
          ));
      } catch (t) {
        let r = t,
          n = this.parseInitError(r.message);
        throw typeof n == 'string'
          ? r
          : new R(n.message, this.config.clientVersion, n.error_code);
      }
    }
  }
  logger(t) {
    let r = this.parseEngineResponse(t);
    r &&
      ((r.level = r?.level.toLowerCase() ?? 'unknown'),
      ym(r)
        ? this.logEmitter.emit('query', {
            timestamp: new Date(),
            query: r.query,
            params: r.params,
            duration: Number(r.duration_ms),
            target: r.module_path,
          })
        : Em(r)
          ? (this.loggerRustPanic = new ue(
              po(
                this,
                `${r.message}: ${r.reason} in ${r.file}:${r.line}:${r.column}`,
              ),
              this.config.clientVersion,
            ))
          : this.logEmitter.emit(r.level, {
              timestamp: new Date(),
              message: r.message,
              target: r.module_path,
            }));
  }
  parseInitError(t) {
    try {
      return JSON.parse(t);
    } catch {}
    return t;
  }
  parseRequestError(t) {
    try {
      return JSON.parse(t);
    } catch {}
    return t;
  }
  onBeforeExit() {
    throw new Error(
      '"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.',
    );
  }
  async start() {
    if (
      (await this.libraryInstantiationPromise,
      await this.libraryStoppingPromise,
      this.libraryStartingPromise)
    )
      return (
        Ie(
          `library already starting, this.libraryStarted: ${this.libraryStarted}`,
        ),
        this.libraryStartingPromise
      );
    if (this.libraryStarted) return;
    let t = async () => {
      Ie('library starting');
      try {
        let r = { traceparent: this.tracingHelper.getTraceParent() };
        await this.engine?.connect(JSON.stringify(r)),
          (this.libraryStarted = !0),
          Ie('library started');
      } catch (r) {
        let n = this.parseInitError(r.message);
        throw typeof n == 'string'
          ? r
          : new R(n.message, this.config.clientVersion, n.error_code);
      } finally {
        this.libraryStartingPromise = void 0;
      }
    };
    return (
      (this.libraryStartingPromise = this.tracingHelper.runInChildSpan(
        'connect',
        t,
      )),
      this.libraryStartingPromise
    );
  }
  async stop() {
    if (
      (await this.libraryStartingPromise,
      await this.executingQueryPromise,
      this.libraryStoppingPromise)
    )
      return Ie('library is already stopping'), this.libraryStoppingPromise;
    if (!this.libraryStarted) return;
    let t = async () => {
      await new Promise((n) => setTimeout(n, 5)), Ie('library stopping');
      let r = { traceparent: this.tracingHelper.getTraceParent() };
      await this.engine?.disconnect(JSON.stringify(r)),
        (this.libraryStarted = !1),
        (this.libraryStoppingPromise = void 0),
        Ie('library stopped');
    };
    return (
      (this.libraryStoppingPromise = this.tracingHelper.runInChildSpan(
        'disconnect',
        t,
      )),
      this.libraryStoppingPromise
    );
  }
  version() {
    return (
      (this.versionInfo = this.library?.version()),
      this.versionInfo?.version ?? 'unknown'
    );
  }
  debugPanic(t) {
    return this.library?.debugPanic(t);
  }
  async request(t, { traceparent: r, interactiveTransaction: n }) {
    Ie(`sending request, this.libraryStarted: ${this.libraryStarted}`);
    let i = JSON.stringify({ traceparent: r }),
      o = JSON.stringify(t);
    try {
      await this.start(),
        (this.executingQueryPromise = this.engine?.query(o, i, n?.id)),
        (this.lastQuery = o);
      let s = this.parseEngineResponse(await this.executingQueryPromise);
      if (s.errors)
        throw s.errors.length === 1
          ? this.buildQueryError(s.errors[0])
          : new j(JSON.stringify(s.errors), {
              clientVersion: this.config.clientVersion,
            });
      if (this.loggerRustPanic) throw this.loggerRustPanic;
      return { data: s };
    } catch (s) {
      if (s instanceof R) throw s;
      if (s.code === 'GenericFailure' && s.message?.startsWith('PANIC:'))
        throw new ue(po(this, s.message), this.config.clientVersion);
      let a = this.parseRequestError(s.message);
      throw typeof a == 'string'
        ? s
        : new j(
            `${a.message}
${a.backtrace}`,
            { clientVersion: this.config.clientVersion },
          );
    }
  }
  async requestBatch(t, { transaction: r, traceparent: n }) {
    Ie('requestBatch');
    let i = Dt(t, r);
    await this.start(),
      (this.lastQuery = JSON.stringify(i)),
      (this.executingQueryPromise = this.engine.query(
        this.lastQuery,
        JSON.stringify({ traceparent: n }),
        fl(r),
      ));
    let o = await this.executingQueryPromise,
      s = this.parseEngineResponse(o);
    if (s.errors)
      throw s.errors.length === 1
        ? this.buildQueryError(s.errors[0])
        : new j(JSON.stringify(s.errors), {
            clientVersion: this.config.clientVersion,
          });
    let { batchResult: a, errors: l } = s;
    if (Array.isArray(a))
      return a.map((u) =>
        u.errors && u.errors.length > 0
          ? (this.loggerRustPanic ?? this.buildQueryError(u.errors[0]))
          : { data: u },
      );
    throw l && l.length === 1
      ? new Error(l[0].error)
      : new Error(JSON.stringify(s));
  }
  buildQueryError(t) {
    if (t.user_facing_error.is_panic)
      return new ue(
        po(this, t.user_facing_error.message),
        this.config.clientVersion,
      );
    let r = this.getExternalAdapterError(t.user_facing_error);
    return r
      ? r.error
      : _t(t, this.config.clientVersion, this.config.activeProvider);
  }
  getExternalAdapterError(t) {
    if (t.error_code === hm && this.config.adapter) {
      let r = t.meta?.id;
      Yr(
        typeof r == 'number',
        'Malformed external JS error received from the engine',
      );
      let n = this.config.adapter.errorRegistry.consumeError(r);
      return Yr(n, 'External error with reported id was not registered'), n;
    }
  }
  async metrics(t) {
    await this.start();
    let r = await this.engine.metrics(JSON.stringify(t));
    return t.format === 'prometheus' ? r : this.parseEngineResponse(r);
  }
};
function xm(e) {
  return typeof e == 'object' && e !== null && e.error_code !== void 0;
}
function po(e, t) {
  return sl({
    binaryTarget: e.binaryTarget,
    title: t,
    version: e.config.clientVersion,
    engineVersion: e.versionInfo?.commit,
    database: e.config.activeProvider,
    query: e.lastQuery,
  });
}
function bl({ copyEngine: e = !0 }, t) {
  let r;
  try {
    r = Lt({
      inlineDatasources: t.inlineDatasources,
      overrideDatasources: t.overrideDatasources,
      env: { ...t.env, ...process.env },
      clientVersion: t.clientVersion,
    });
  } catch {}
  let n = !!(r?.startsWith('prisma://') || r?.startsWith('prisma+postgres://'));
  e &&
    n &&
    tr(
      'recommend--no-engine',
      'In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)',
    );
  let i = Yt(t.generator),
    o = n || !e,
    s = !!t.adapter,
    a = i === 'library',
    l = i === 'binary';
  if ((o && s) || (s && !1)) {
    let u;
    throw (
      (e
        ? r?.startsWith('prisma://')
          ? (u = [
              'Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.',
              'Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor.',
            ])
          : (u = [
              'Prisma Client was configured to use both the `adapter` and Accelerate, please chose one.',
            ])
        : (u = [
            'Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.',
            'Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter.',
          ]),
      new ee(
        u.join(`
`),
        { clientVersion: t.clientVersion },
      ))
    );
  }
  if (o) return new Dr(t);
  if (a) return new _r(t);
  throw new ee('Invalid client engine type, please use `library` or `binary`', {
    clientVersion: t.clientVersion,
  });
}
function Ln({ generator: e }) {
  return e?.previewFeatures ?? [];
}
var wl = (e) => ({ command: e });
var xl = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
function qt(e) {
  try {
    return vl(e, 'fast');
  } catch {
    return vl(e, 'slow');
  }
}
function vl(e, t) {
  return JSON.stringify(e.map((r) => Tl(r, t)));
}
function Tl(e, t) {
  if (Array.isArray(e)) return e.map((r) => Tl(r, t));
  if (typeof e == 'bigint')
    return { prisma__type: 'bigint', prisma__value: e.toString() };
  if (xt(e)) return { prisma__type: 'date', prisma__value: e.toJSON() };
  if (ve.isDecimal(e))
    return { prisma__type: 'decimal', prisma__value: e.toJSON() };
  if (Buffer.isBuffer(e))
    return { prisma__type: 'bytes', prisma__value: e.toString('base64') };
  if (vm(e))
    return {
      prisma__type: 'bytes',
      prisma__value: Buffer.from(e).toString('base64'),
    };
  if (ArrayBuffer.isView(e)) {
    let { buffer: r, byteOffset: n, byteLength: i } = e;
    return {
      prisma__type: 'bytes',
      prisma__value: Buffer.from(r, n, i).toString('base64'),
    };
  }
  return typeof e == 'object' && t === 'slow' ? Rl(e) : e;
}
function vm(e) {
  return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
    ? !0
    : typeof e == 'object' && e !== null
      ? e[Symbol.toStringTag] === 'ArrayBuffer' ||
        e[Symbol.toStringTag] === 'SharedArrayBuffer'
      : !1;
}
function Rl(e) {
  if (typeof e != 'object' || e === null) return e;
  if (typeof e.toJSON == 'function') return e.toJSON();
  if (Array.isArray(e)) return e.map(Pl);
  let t = {};
  for (let r of Object.keys(e)) t[r] = Pl(e[r]);
  return t;
}
function Pl(e) {
  return typeof e == 'bigint' ? e.toString() : Rl(e);
}
var Pm = ['$connect', '$disconnect', '$on', '$transaction', '$use', '$extends'],
  Cl = Pm;
var Tm = /^(\s*alter\s)/i,
  Sl = L('prisma:client');
function mo(e, t, r, n) {
  if (
    !(e !== 'postgresql' && e !== 'cockroachdb') &&
    r.length > 0 &&
    Tm.exec(t)
  )
    throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var fo =
    ({ clientMethod: e, activeProvider: t }) =>
    (r) => {
      let n = '',
        i;
      if (ha(r))
        (n = r.sql),
          (i = { values: qt(r.values), __prismaRawParameters__: !0 });
      else if (Array.isArray(r)) {
        let [o, ...s] = r;
        (n = o), (i = { values: qt(s || []), __prismaRawParameters__: !0 });
      } else
        switch (t) {
          case 'sqlite':
          case 'mysql': {
            (n = r.sql),
              (i = { values: qt(r.values), __prismaRawParameters__: !0 });
            break;
          }
          case 'cockroachdb':
          case 'postgresql':
          case 'postgres': {
            (n = r.text),
              (i = { values: qt(r.values), __prismaRawParameters__: !0 });
            break;
          }
          case 'sqlserver': {
            (n = xl(r)),
              (i = { values: qt(r.values), __prismaRawParameters__: !0 });
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return (
        i?.values
          ? Sl(`prisma.${e}(${n}, ${i.values})`)
          : Sl(`prisma.${e}(${n})`),
        { query: n, parameters: i }
      );
    },
  Al = {
    requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    },
    middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new se(t, r);
    },
  },
  Il = {
    requestArgsToMiddlewareArgs(e) {
      return [e];
    },
    middlewareArgsToRequestArgs(e) {
      return e[0];
    },
  };
function go(e) {
  return function (r) {
    let n,
      i = (o = e) => {
        try {
          return o === void 0 || o?.kind === 'itx'
            ? (n ??= Ol(r(o)))
            : Ol(r(o));
        } catch (s) {
          return Promise.reject(s);
        }
      };
    return {
      then(o, s) {
        return i().then(o, s);
      },
      catch(o) {
        return i().catch(o);
      },
      finally(o) {
        return i().finally(o);
      },
      requestTransaction(o) {
        let s = i(o);
        return s.requestTransaction ? s.requestTransaction(o) : s;
      },
      [Symbol.toStringTag]: 'PrismaPromise',
    };
  };
}
function Ol(e) {
  return typeof e.then == 'function' ? e : Promise.resolve(e);
}
var Rm = {
    isEnabled() {
      return !1;
    },
    getTraceParent() {
      return '00-10-10-00';
    },
    dispatchEngineSpans() {},
    getActiveContext() {},
    runInChildSpan(e, t) {
      return t();
    },
  },
  ho = class {
    isEnabled() {
      return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(t) {
      return this.getGlobalTracingHelper().getTraceParent(t);
    }
    dispatchEngineSpans(t) {
      return this.getGlobalTracingHelper().dispatchEngineSpans(t);
    }
    getActiveContext() {
      return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(t, r) {
      return this.getGlobalTracingHelper().runInChildSpan(t, r);
    }
    getGlobalTracingHelper() {
      return globalThis.PRISMA_INSTRUMENTATION?.helper ?? Rm;
    }
  };
function kl() {
  return new ho();
}
function Dl(e, t = () => {}) {
  let r,
    n = new Promise((i) => (r = i));
  return {
    then(i) {
      return --e === 0 && r(t()), i?.(n);
    },
  };
}
function _l(e) {
  return typeof e == 'string'
    ? e
    : e.reduce(
        (t, r) => {
          let n = typeof r == 'string' ? r : r.level;
          return n === 'query'
            ? t
            : t && (r === 'info' || t === 'info')
              ? 'info'
              : n;
        },
        void 0,
      );
}
var Fn = class {
  constructor() {
    this._middlewares = [];
  }
  use(t) {
    this._middlewares.push(t);
  }
  get(t) {
    return this._middlewares[t];
  }
  has(t) {
    return !!this._middlewares[t];
  }
  length() {
    return this._middlewares.length;
  }
};
var Fl = k(vi());
function Mn(e) {
  return typeof e.batchRequestIdx == 'number';
}
function Nl(e) {
  if (e.action !== 'findUnique' && e.action !== 'findUniqueOrThrow') return;
  let t = [];
  return (
    e.modelName && t.push(e.modelName),
    e.query.arguments && t.push(yo(e.query.arguments)),
    t.push(yo(e.query.selection)),
    t.join('')
  );
}
function yo(e) {
  return `(${Object.keys(e)
    .sort()
    .map((r) => {
      let n = e[r];
      return typeof n == 'object' && n !== null ? `(${r} ${yo(n)})` : r;
    })
    .join(' ')})`;
}
var Cm = {
  aggregate: !1,
  aggregateRaw: !1,
  createMany: !0,
  createManyAndReturn: !0,
  createOne: !0,
  deleteMany: !0,
  deleteOne: !0,
  executeRaw: !0,
  findFirst: !1,
  findFirstOrThrow: !1,
  findMany: !1,
  findRaw: !1,
  findUnique: !1,
  findUniqueOrThrow: !1,
  groupBy: !1,
  queryRaw: !1,
  runCommandRaw: !0,
  updateMany: !0,
  updateOne: !0,
  upsertOne: !0,
};
function Eo(e) {
  return Cm[e];
}
var $n = class {
  constructor(t) {
    this.options = t;
    this.tickActive = !1;
    this.batches = {};
  }
  request(t) {
    let r = this.options.batchBy(t);
    return r
      ? (this.batches[r] ||
          ((this.batches[r] = []),
          this.tickActive ||
            ((this.tickActive = !0),
            process.nextTick(() => {
              this.dispatchBatches(), (this.tickActive = !1);
            }))),
        new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        }))
      : this.options.singleLoader(t);
  }
  dispatchBatches() {
    for (let t in this.batches) {
      let r = this.batches[t];
      delete this.batches[t],
        r.length === 1
          ? this.options
              .singleLoader(r[0].request)
              .then((n) => {
                n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
              })
              .catch((n) => {
                r[0].reject(n);
              })
          : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)),
            this.options
              .batchLoader(r.map((n) => n.request))
              .then((n) => {
                if (n instanceof Error)
                  for (let i = 0; i < r.length; i++) r[i].reject(n);
                else
                  for (let i = 0; i < r.length; i++) {
                    let o = n[i];
                    o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
                  }
              })
              .catch((n) => {
                for (let i = 0; i < r.length; i++) r[i].reject(n);
              }));
    }
  }
  get [Symbol.toStringTag]() {
    return 'DataLoader';
  }
};
function ct(e, t) {
  if (t === null) return t;
  switch (e) {
    case 'bigint':
      return BigInt(t);
    case 'bytes': {
      let {
        buffer: r,
        byteOffset: n,
        byteLength: i,
      } = Buffer.from(t, 'base64');
      return new Uint8Array(r, n, i);
    }
    case 'decimal':
      return new ve(t);
    case 'datetime':
    case 'date':
      return new Date(t);
    case 'time':
      return new Date(`1970-01-01T${t}Z`);
    case 'bigint-array':
      return t.map((r) => ct('bigint', r));
    case 'bytes-array':
      return t.map((r) => ct('bytes', r));
    case 'decimal-array':
      return t.map((r) => ct('decimal', r));
    case 'datetime-array':
      return t.map((r) => ct('datetime', r));
    case 'date-array':
      return t.map((r) => ct('date', r));
    case 'time-array':
      return t.map((r) => ct('time', r));
    default:
      return t;
  }
}
function Ll(e) {
  let t = [],
    r = Sm(e);
  for (let n = 0; n < e.rows.length; n++) {
    let i = e.rows[n],
      o = { ...r };
    for (let s = 0; s < i.length; s++) o[e.columns[s]] = ct(e.types[s], i[s]);
    t.push(o);
  }
  return t;
}
function Sm(e) {
  let t = {};
  for (let r = 0; r < e.columns.length; r++) t[e.columns[r]] = null;
  return t;
}
var Am = L('prisma:client:request_handler'),
  qn = class {
    constructor(t, r) {
      (this.logEmitter = r),
        (this.client = t),
        (this.dataloader = new $n({
          batchLoader: ja(async ({ requests: n, customDataProxyFetch: i }) => {
            let { transaction: o, otelParentCtx: s } = n[0],
              a = n.map((p) => p.protocolQuery),
              l = this.client._tracingHelper.getTraceParent(s),
              u = n.some((p) => Eo(p.protocolQuery.action));
            return (
              await this.client._engine.requestBatch(a, {
                traceparent: l,
                transaction: Im(o),
                containsWrite: u,
                customDataProxyFetch: i,
              })
            ).map((p, d) => {
              if (p instanceof Error) return p;
              try {
                return this.mapQueryEngineResult(n[d], p);
              } catch (f) {
                return f;
              }
            });
          }),
          singleLoader: async (n) => {
            let i = n.transaction?.kind === 'itx' ? Ml(n.transaction) : void 0,
              o = await this.client._engine.request(n.protocolQuery, {
                traceparent: this.client._tracingHelper.getTraceParent(),
                interactiveTransaction: i,
                isWrite: Eo(n.protocolQuery.action),
                customDataProxyFetch: n.customDataProxyFetch,
              });
            return this.mapQueryEngineResult(n, o);
          },
          batchBy: (n) =>
            n.transaction?.id
              ? `transaction-${n.transaction.id}`
              : Nl(n.protocolQuery),
          batchOrder(n, i) {
            return n.transaction?.kind === 'batch' &&
              i.transaction?.kind === 'batch'
              ? n.transaction.index - i.transaction.index
              : 0;
          },
        }));
    }
    async request(t) {
      try {
        return await this.dataloader.request(t);
      } catch (r) {
        let {
          clientMethod: n,
          callsite: i,
          transaction: o,
          args: s,
          modelName: a,
        } = t;
        this.handleAndLogRequestError({
          error: r,
          clientMethod: n,
          callsite: i,
          transaction: o,
          args: s,
          modelName: a,
          globalOmit: t.globalOmit,
        });
      }
    }
    mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
      let i = n?.data,
        o = this.unpack(i, t, r);
      return process.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o;
    }
    handleAndLogRequestError(t) {
      try {
        this.handleRequestError(t);
      } catch (r) {
        throw (
          (this.logEmitter &&
            this.logEmitter.emit('error', {
              message: r.message,
              target: t.clientMethod,
              timestamp: new Date(),
            }),
          r)
        );
      }
    }
    handleRequestError({
      error: t,
      clientMethod: r,
      callsite: n,
      transaction: i,
      args: o,
      modelName: s,
      globalOmit: a,
    }) {
      if ((Am(t), Om(t, i))) throw t;
      if (t instanceof X && km(t)) {
        let u = $l(t.meta);
        wn({
          args: o,
          errors: [u],
          callsite: n,
          errorFormat: this.client._errorFormat,
          originalMethod: r,
          clientVersion: this.client._clientVersion,
          globalOmit: a,
        });
      }
      let l = t.message;
      if (
        (n &&
          (l = cn({
            callsite: n,
            originalMethod: r,
            isPanic: t.isPanic,
            showColors: this.client._errorFormat === 'pretty',
            message: l,
          })),
        (l = this.sanitizeMessage(l)),
        t.code)
      ) {
        let u = s ? { modelName: s, ...t.meta } : t.meta;
        throw new X(l, {
          code: t.code,
          clientVersion: this.client._clientVersion,
          meta: u,
          batchRequestIdx: t.batchRequestIdx,
        });
      } else {
        if (t.isPanic) throw new ue(l, this.client._clientVersion);
        if (t instanceof j)
          throw new j(l, {
            clientVersion: this.client._clientVersion,
            batchRequestIdx: t.batchRequestIdx,
          });
        if (t instanceof R) throw new R(l, this.client._clientVersion);
        if (t instanceof ue) throw new ue(l, this.client._clientVersion);
      }
      throw ((t.clientVersion = this.client._clientVersion), t);
    }
    sanitizeMessage(t) {
      return this.client._errorFormat && this.client._errorFormat !== 'pretty'
        ? (0, Fl.default)(t)
        : t;
    }
    unpack(t, r, n) {
      if (!t || (t.data && (t = t.data), !t)) return t;
      let i = Object.keys(t)[0],
        o = Object.values(t)[0],
        s = r.filter((u) => u !== 'select' && u !== 'include'),
        a = Wi(o, s),
        l = i === 'queryRaw' ? Ll(a) : bt(a);
      return n ? n(l) : l;
    }
    get [Symbol.toStringTag]() {
      return 'RequestHandler';
    }
  };
function Im(e) {
  if (e) {
    if (e.kind === 'batch')
      return { kind: 'batch', options: { isolationLevel: e.isolationLevel } };
    if (e.kind === 'itx') return { kind: 'itx', options: Ml(e) };
    Fe(e, 'Unknown transaction kind');
  }
}
function Ml(e) {
  return { id: e.id, payload: e.payload };
}
function Om(e, t) {
  return Mn(e) && t?.kind === 'batch' && e.batchRequestIdx !== t.index;
}
function km(e) {
  return e.code === 'P2009' || e.code === 'P2012';
}
function $l(e) {
  if (e.kind === 'Union') return { kind: 'Union', errors: e.errors.map($l) };
  if (Array.isArray(e.selectionPath)) {
    let [, ...t] = e.selectionPath;
    return { ...e, selectionPath: t };
  }
  return e;
}
var ql = '6.1.0';
var Vl = ql;
var Gl = k(Di());
var N = class extends Error {
  constructor(t) {
    super(
      t +
        `
Read more at https://pris.ly/d/client-constructor`,
    ),
      (this.name = 'PrismaClientConstructorValidationError');
  }
  get [Symbol.toStringTag]() {
    return 'PrismaClientConstructorValidationError';
  }
};
x(N, 'PrismaClientConstructorValidationError');
var jl = [
    'datasources',
    'datasourceUrl',
    'errorFormat',
    'adapter',
    'log',
    'transactionOptions',
    'omit',
    '__internal',
  ],
  Bl = ['pretty', 'colorless', 'minimal'],
  Ul = ['info', 'query', 'warn', 'error'],
  _m = {
    datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != 'object' || Array.isArray(e))
          throw new N(
            `Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`,
          );
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = Vt(r, t) || ` Available datasources: ${t.join(', ')}`;
            throw new N(
              `Unknown datasource ${r} provided to PrismaClient constructor.${i}`,
            );
          }
          if (typeof n != 'object' || Array.isArray(n))
            throw new N(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == 'object')
            for (let [i, o] of Object.entries(n)) {
              if (i !== 'url')
                throw new N(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != 'string')
                throw new N(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    },
    adapter: (e, t) => {
      if (e === null) return;
      if (e === void 0)
        throw new N(
          '"adapter" property must not be undefined, use null to conditionally disable driver adapters.',
        );
      if (!Ln(t).includes('driverAdapters'))
        throw new N(
          '"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.',
        );
      if (Yt() === 'binary')
        throw new N(
          'Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.',
        );
    },
    datasourceUrl: (e) => {
      if (typeof e < 'u' && typeof e != 'string')
        throw new N(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    },
    errorFormat: (e) => {
      if (e) {
        if (typeof e != 'string')
          throw new N(
            `Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`,
          );
        if (!Bl.includes(e)) {
          let t = Vt(e, Bl);
          throw new N(
            `Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`,
          );
        }
      }
    },
    log: (e) => {
      if (!e) return;
      if (!Array.isArray(e))
        throw new N(
          `Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`,
        );
      function t(r) {
        if (typeof r == 'string' && !Ul.includes(r)) {
          let n = Vt(r, Ul);
          throw new N(
            `Invalid log level "${r}" provided to PrismaClient constructor.${n}`,
          );
        }
      }
      for (let r of e) {
        t(r);
        let n = {
          level: t,
          emit: (i) => {
            let o = ['stdout', 'event'];
            if (!o.includes(i)) {
              let s = Vt(i, o);
              throw new N(
                `Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`,
              );
            }
          },
        };
        if (r && typeof r == 'object')
          for (let [i, o] of Object.entries(r))
            if (n[i]) n[i](o);
            else
              throw new N(
                `Invalid property ${i} for "log" provided to PrismaClient constructor`,
              );
      }
    },
    transactionOptions: (e) => {
      if (!e) return;
      let t = e.maxWait;
      if (t != null && t <= 0)
        throw new N(
          `Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`,
        );
      let r = e.timeout;
      if (r != null && r <= 0)
        throw new N(
          `Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`,
        );
    },
    omit: (e, t) => {
      if (typeof e != 'object')
        throw new N('"omit" option is expected to be an object.');
      if (e === null) throw new N('"omit" option can not be `null`');
      let r = [];
      for (let [n, i] of Object.entries(e)) {
        let o = Lm(n, t.runtimeDataModel);
        if (!o) {
          r.push({ kind: 'UnknownModel', modelKey: n });
          continue;
        }
        for (let [s, a] of Object.entries(i)) {
          let l = o.fields.find((u) => u.name === s);
          if (!l) {
            r.push({ kind: 'UnknownField', modelKey: n, fieldName: s });
            continue;
          }
          if (l.relationName) {
            r.push({ kind: 'RelationInOmit', modelKey: n, fieldName: s });
            continue;
          }
          typeof a != 'boolean' &&
            r.push({ kind: 'InvalidFieldValue', modelKey: n, fieldName: s });
        }
      }
      if (r.length > 0) throw new N(Fm(e, r));
    },
    __internal: (e) => {
      if (!e) return;
      let t = ['debug', 'engine', 'configOverride'];
      if (typeof e != 'object')
        throw new N(
          `Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`,
        );
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = Vt(r, t);
          throw new N(
            `Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`,
          );
        }
    },
  };
function Jl(e, t) {
  for (let [r, n] of Object.entries(e)) {
    if (!jl.includes(r)) {
      let i = Vt(r, jl);
      throw new N(
        `Unknown property ${r} provided to PrismaClient constructor.${i}`,
      );
    }
    _m[r](n, t);
  }
  if (e.datasourceUrl && e.datasources)
    throw new N(
      'Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them',
    );
}
function Vt(e, t) {
  if (t.length === 0 || typeof e != 'string') return '';
  let r = Nm(e, t);
  return r ? ` Did you mean "${r}"?` : '';
}
function Nm(e, t) {
  if (t.length === 0) return null;
  let r = t.map((i) => ({ value: i, distance: (0, Gl.default)(e, i) }));
  r.sort((i, o) => (i.distance < o.distance ? -1 : 1));
  let n = r[0];
  return n.distance < 3 ? n.value : null;
}
function Lm(e, t) {
  return Ql(t.models, e) ?? Ql(t.types, e);
}
function Ql(e, t) {
  let r = Object.keys(e).find((n) => wt(n) === t);
  if (r) return e[r];
}
function Fm(e, t) {
  let r = At(e);
  for (let o of t)
    switch (o.kind) {
      case 'UnknownModel':
        r.arguments.getField(o.modelKey)?.markAsError(),
          r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
        break;
      case 'UnknownField':
        r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(),
          r.addErrorMessage(
            () =>
              `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`,
          );
        break;
      case 'RelationInOmit':
        r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(),
          r.addErrorMessage(
            () =>
              'Relations are already excluded by default and can not be specified in "omit".',
          );
        break;
      case 'InvalidFieldValue':
        r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(),
          r.addErrorMessage(() => 'Omit field option value must be a boolean.');
        break;
    }
  let { message: n, args: i } = bn(r, 'colorless');
  return `Error validating "omit" option:

${i}

${n}`;
}
function Hl(e) {
  return e.length === 0
    ? Promise.resolve([])
    : new Promise((t, r) => {
        let n = new Array(e.length),
          i = null,
          o = !1,
          s = 0,
          a = () => {
            o || (s++, s === e.length && ((o = !0), i ? r(i) : t(n)));
          },
          l = (u) => {
            o || ((o = !0), r(u));
          };
        for (let u = 0; u < e.length; u++)
          e[u].then(
            (c) => {
              (n[u] = c), a();
            },
            (c) => {
              if (!Mn(c)) {
                l(c);
                return;
              }
              c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
            },
          );
      });
}
var tt = L('prisma:client');
typeof globalThis == 'object' && (globalThis.NODE_CLIENT = !0);
var Mm = {
    requestArgsToMiddlewareArgs: (e) => e,
    middlewareArgsToRequestArgs: (e) => e,
  },
  $m = Symbol.for('prisma.client.transaction.id'),
  qm = {
    id: 0,
    nextId() {
      return ++this.id;
    },
  };
function Xl(e) {
  class t {
    constructor(n) {
      this._originalClient = this;
      this._middlewares = new Fn();
      this._createPrismaPromise = go();
      this.$extends = _a;
      (e = n?.__internal?.configOverride?.(e) ?? e), Ja(e), n && Jl(n, e);
      let i = new zl.EventEmitter().on('error', () => {});
      (this._extensions = It.empty()),
        (this._previewFeatures = Ln(e)),
        (this._clientVersion = e.clientVersion ?? Vl),
        (this._activeProvider = e.activeProvider),
        (this._globalOmit = n?.omit),
        (this._tracingHelper = kl());
      let o = {
          rootEnvPath:
            e.relativeEnvPaths.rootEnvPath &&
            Nr.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath),
          schemaEnvPath:
            e.relativeEnvPaths.schemaEnvPath &&
            Nr.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath),
        },
        s;
      if (n?.adapter) {
        s = Ui(n.adapter);
        let l =
          e.activeProvider === 'postgresql' ? 'postgres' : e.activeProvider;
        if (s.provider !== l)
          throw new R(
            `The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`,
            this._clientVersion,
          );
        if (n.datasources || n.datasourceUrl !== void 0)
          throw new R(
            'Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.',
            this._clientVersion,
          );
      }
      let a =
        (!s && Kt(o, { conflictCheck: 'none' })) || e.injectableEdgeEnv?.();
      try {
        let l = n ?? {},
          u = l.__internal ?? {},
          c = u.debug === !0;
        c && L.enable('prisma:client');
        let p = Nr.default.resolve(e.dirname, e.relativePath);
        Zl.default.existsSync(p) || (p = e.dirname),
          tt('dirname', e.dirname),
          tt('relativePath', e.relativePath),
          tt('cwd', p);
        let d = u.engine || {};
        if (
          (l.errorFormat
            ? (this._errorFormat = l.errorFormat)
            : process.env.NODE_ENV === 'production'
              ? (this._errorFormat = 'minimal')
              : process.env.NO_COLOR
                ? (this._errorFormat = 'colorless')
                : (this._errorFormat = 'colorless'),
          (this._runtimeDataModel = e.runtimeDataModel),
          (this._engineConfig = {
            cwd: p,
            dirname: e.dirname,
            enableDebugLogs: c,
            allowTriggerPanic: d.allowTriggerPanic,
            datamodelPath: Nr.default.join(
              e.dirname,
              e.filename ?? 'schema.prisma',
            ),
            prismaPath: d.binaryPath ?? void 0,
            engineEndpoint: d.endpoint,
            generator: e.generator,
            showColors: this._errorFormat === 'pretty',
            logLevel: l.log && _l(l.log),
            logQueries:
              l.log &&
              !!(typeof l.log == 'string'
                ? l.log === 'query'
                : l.log.find((f) =>
                    typeof f == 'string' ? f === 'query' : f.level === 'query',
                  )),
            env: a?.parsed ?? {},
            flags: [],
            engineWasm: e.engineWasm,
            clientVersion: e.clientVersion,
            engineVersion: e.engineVersion,
            previewFeatures: this._previewFeatures,
            activeProvider: e.activeProvider,
            inlineSchema: e.inlineSchema,
            overrideDatasources: Ha(l, e.datasourceNames),
            inlineDatasources: e.inlineDatasources,
            inlineSchemaHash: e.inlineSchemaHash,
            tracingHelper: this._tracingHelper,
            transactionOptions: {
              maxWait: l.transactionOptions?.maxWait ?? 2e3,
              timeout: l.transactionOptions?.timeout ?? 5e3,
              isolationLevel: l.transactionOptions?.isolationLevel,
            },
            logEmitter: i,
            isBundled: e.isBundled,
            adapter: s,
          }),
          (this._accelerateEngineConfig = {
            ...this._engineConfig,
            accelerateUtils: {
              resolveDatasourceUrl: Lt,
              getBatchRequestPayload: Dt,
              prismaGraphQLToJSError: _t,
              PrismaClientUnknownRequestError: j,
              PrismaClientInitializationError: R,
              PrismaClientKnownRequestError: X,
              debug: L('prisma:client:accelerateEngine'),
              engineVersion: Kl.version,
              clientVersion: e.clientVersion,
            },
          }),
          tt('clientVersion', e.clientVersion),
          (this._engine = bl(e, this._engineConfig)),
          (this._requestHandler = new qn(this, i)),
          l.log)
        )
          for (let f of l.log) {
            let g =
              typeof f == 'string' ? f : f.emit === 'stdout' ? f.level : null;
            g &&
              this.$on(g, (h) => {
                er.log(`${er.tags[g] ?? ''}`, h.message || h.query);
              });
          }
        this._metrics = new Ot(this._engine);
      } catch (l) {
        throw ((l.clientVersion = this._clientVersion), l);
      }
      return (this._appliedParent = yr(this));
    }
    get [Symbol.toStringTag]() {
      return 'PrismaClient';
    }
    $use(n) {
      this._middlewares.use(n);
    }
    $on(n, i) {
      n === 'beforeExit'
        ? this._engine.onBeforeExit(i)
        : n && this._engineConfig.logEmitter.on(n, i);
    }
    $connect() {
      try {
        return this._engine.start();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      }
    }
    async $disconnect() {
      try {
        await this._engine.stop();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      } finally {
        ko();
      }
    }
    $executeRawInternal(n, i, o, s) {
      let a = this._activeProvider;
      return this._request({
        action: 'executeRaw',
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: fo({ clientMethod: i, activeProvider: a }),
        callsite: Ze(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      });
    }
    $executeRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          let [s, a] = Wl(n, i);
          return (
            mo(
              this._activeProvider,
              s.text,
              s.values,
              Array.isArray(n)
                ? 'prisma.$executeRaw`<SQL>`'
                : 'prisma.$executeRaw(sql`<SQL>`)',
            ),
            this.$executeRawInternal(o, '$executeRaw', s, a)
          );
        }
        throw new ee(
          "`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",
          { clientVersion: this._clientVersion },
        );
      });
    }
    $executeRawUnsafe(n, ...i) {
      return this._createPrismaPromise(
        (o) => (
          mo(
            this._activeProvider,
            n,
            i,
            'prisma.$executeRawUnsafe(<SQL>, [...values])',
          ),
          this.$executeRawInternal(o, '$executeRawUnsafe', [n, ...i])
        ),
      );
    }
    $runCommandRaw(n) {
      if (e.activeProvider !== 'mongodb')
        throw new ee(
          `The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
          { clientVersion: this._clientVersion },
        );
      return this._createPrismaPromise((i) =>
        this._request({
          args: n,
          clientMethod: '$runCommandRaw',
          dataPath: [],
          action: 'runCommandRaw',
          argsMapper: wl,
          callsite: Ze(this._errorFormat),
          transaction: i,
        }),
      );
    }
    async $queryRawInternal(n, i, o, s) {
      let a = this._activeProvider;
      return this._request({
        action: 'queryRaw',
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: fo({ clientMethod: i, activeProvider: a }),
        callsite: Ze(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      });
    }
    $queryRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0)
          return this.$queryRawInternal(o, '$queryRaw', ...Wl(n, i));
        throw new ee(
          "`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",
          { clientVersion: this._clientVersion },
        );
      });
    }
    $queryRawTyped(n) {
      return this._createPrismaPromise((i) => {
        if (!this._hasPreviewFlag('typedSql'))
          throw new ee(
            '`typedSql` preview feature must be enabled in order to access $queryRawTyped API',
            { clientVersion: this._clientVersion },
          );
        return this.$queryRawInternal(i, '$queryRawTyped', n);
      });
    }
    $queryRawUnsafe(n, ...i) {
      return this._createPrismaPromise((o) =>
        this.$queryRawInternal(o, '$queryRawUnsafe', [n, ...i]),
      );
    }
    _transactionWithArray({ promises: n, options: i }) {
      let o = qm.nextId(),
        s = Dl(n.length),
        a = n.map((l, u) => {
          if (l?.[Symbol.toStringTag] !== 'PrismaPromise')
            throw new Error(
              'All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.',
            );
          let c =
              i?.isolationLevel ??
              this._engineConfig.transactionOptions.isolationLevel,
            p = { kind: 'batch', id: o, index: u, isolationLevel: c, lock: s };
          return l.requestTransaction?.(p) ?? l;
        });
      return Hl(a);
    }
    async _transactionWithCallback({ callback: n, options: i }) {
      let o = { traceparent: this._tracingHelper.getTraceParent() },
        s = {
          maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait,
          timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout,
          isolationLevel:
            i?.isolationLevel ??
            this._engineConfig.transactionOptions.isolationLevel,
        },
        a = await this._engine.transaction('start', o, s),
        l;
      try {
        let u = { kind: 'itx', ...a };
        (l = await n(this._createItxClient(u))),
          await this._engine.transaction('commit', o, a);
      } catch (u) {
        throw (
          (await this._engine.transaction('rollback', o, a).catch(() => {}), u)
        );
      }
      return l;
    }
    _createItxClient(n) {
      return yr(
        Ae(Da(this), [
          ne('_appliedParent', () => this._appliedParent._createItxClient(n)),
          ne('_createPrismaPromise', () => go(n)),
          ne($m, () => n.id),
          kt(Cl),
        ]),
      );
    }
    $transaction(n, i) {
      let o;
      typeof n == 'function'
        ? this._engineConfig.adapter?.adapterName === '@prisma/adapter-d1'
          ? (o = () => {
              throw new Error(
                'Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.',
              );
            })
          : (o = () =>
              this._transactionWithCallback({ callback: n, options: i }))
        : (o = () => this._transactionWithArray({ promises: n, options: i }));
      let s = { name: 'transaction', attributes: { method: '$transaction' } };
      return this._tracingHelper.runInChildSpan(s, o);
    }
    _request(n) {
      n.otelParentCtx = this._tracingHelper.getActiveContext();
      let i = n.middlewareArgsMapper ?? Mm,
        o = {
          args: i.requestArgsToMiddlewareArgs(n.args),
          dataPath: n.dataPath,
          runInTransaction: !!n.transaction,
          action: n.action,
          model: n.model,
        },
        s = {
          middleware: {
            name: 'middleware',
            middleware: !0,
            attributes: { method: '$use' },
            active: !1,
          },
          operation: {
            name: 'operation',
            attributes: {
              method: o.action,
              model: o.model,
              name: o.model ? `${o.model}.${o.action}` : o.action,
            },
          },
        },
        a = -1,
        l = async (u) => {
          let c = this._middlewares.get(++a);
          if (c)
            return this._tracingHelper.runInChildSpan(s.middleware, (O) =>
              c(u, (T) => (O?.end(), l(T))),
            );
          let { runInTransaction: p, args: d, ...f } = u,
            g = { ...n, ...f };
          d && (g.args = i.middlewareArgsToRequestArgs(d)),
            n.transaction !== void 0 && p === !1 && delete g.transaction;
          let h = await Va(this, g);
          return g.model
            ? Fa({
                result: h,
                modelName: g.model,
                args: g.args,
                extensions: this._extensions,
                runtimeDataModel: this._runtimeDataModel,
                globalOmit: this._globalOmit,
              })
            : h;
        };
      return this._tracingHelper.runInChildSpan(s.operation, () =>
        new Yl.AsyncResource('prisma-client-request').runInAsyncScope(() =>
          l(o),
        ),
      );
    }
    async _executeRequest({
      args: n,
      clientMethod: i,
      dataPath: o,
      callsite: s,
      action: a,
      model: l,
      argsMapper: u,
      transaction: c,
      unpacker: p,
      otelParentCtx: d,
      customDataProxyFetch: f,
    }) {
      try {
        n = u ? u(n) : n;
        let g = { name: 'serialize' },
          h = this._tracingHelper.runInChildSpan(g, () =>
            Pn({
              modelName: l,
              runtimeDataModel: this._runtimeDataModel,
              action: a,
              args: n,
              clientMethod: i,
              callsite: s,
              extensions: this._extensions,
              errorFormat: this._errorFormat,
              clientVersion: this._clientVersion,
              previewFeatures: this._previewFeatures,
              globalOmit: this._globalOmit,
            }),
          );
        return (
          L.enabled('prisma:client') &&
            (tt('Prisma Client call:'),
            tt(`prisma.${i}(${xa(n)})`),
            tt('Generated request:'),
            tt(
              JSON.stringify(h, null, 2) +
                `
`,
            )),
          c?.kind === 'batch' && (await c.lock),
          this._requestHandler.request({
            protocolQuery: h,
            modelName: l,
            action: a,
            clientMethod: i,
            dataPath: o,
            callsite: s,
            args: n,
            extensions: this._extensions,
            transaction: c,
            unpacker: p,
            otelParentCtx: d,
            otelChildCtx: this._tracingHelper.getActiveContext(),
            globalOmit: this._globalOmit,
            customDataProxyFetch: f,
          })
        );
      } catch (g) {
        throw ((g.clientVersion = this._clientVersion), g);
      }
    }
    get $metrics() {
      if (!this._hasPreviewFlag('metrics'))
        throw new ee(
          '`metrics` preview feature must be enabled in order to access metrics API',
          { clientVersion: this._clientVersion },
        );
      return this._metrics;
    }
    _hasPreviewFlag(n) {
      return !!this._engineConfig.previewFeatures?.includes(n);
    }
    $applyPendingMigrations() {
      return this._engine.applyPendingMigrations();
    }
  }
  return t;
}
function Wl(e, t) {
  return Vm(e) ? [new se(e, t), Al] : [e, Il];
}
function Vm(e) {
  return Array.isArray(e) && Array.isArray(e.raw);
}
var jm = new Set([
  'toJSON',
  '$$typeof',
  'asymmetricMatch',
  Symbol.iterator,
  Symbol.toStringTag,
  Symbol.isConcatSpreadable,
  Symbol.toPrimitive,
]);
function eu(e) {
  return new Proxy(e, {
    get(t, r) {
      if (r in t) return t[r];
      if (!jm.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
    },
  });
}
function tu(e) {
  Kt(e, { conflictCheck: 'warn' });
}
0 &&
  (module.exports = {
    Debug,
    Decimal,
    Extensions,
    MetricsClient,
    PrismaClientInitializationError,
    PrismaClientKnownRequestError,
    PrismaClientRustPanicError,
    PrismaClientUnknownRequestError,
    PrismaClientValidationError,
    Public,
    Sql,
    defineDmmfProperty,
    deserializeJsonResponse,
    dmmfToRuntimeDataModel,
    empty,
    getPrismaClient,
    getRuntime,
    join,
    makeStrictEnum,
    makeTypedQueryFactory,
    objectEnumValues,
    raw,
    serializeJsonQuery,
    skip,
    sqltag,
    warnEnvConflicts,
    warnOnce,
  });
/*! Bundled license information:

decimal.js/decimal.mjs:
  (*!
   *  decimal.js v10.4.3
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   *)
*/
//# sourceMappingURL=library.js.map
