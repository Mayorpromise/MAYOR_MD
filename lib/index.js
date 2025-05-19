(function (a7, a8) {
  const a9 = a7();
  while (true) {
    try {
      const aa = parseInt(a6(1536, 0x7db)) / 1 * (parseInt(a5(653, "[A*X")) / 2) + parseInt(a5(3423, "uSA^")) / 3 * (parseInt(a6(780, 0x1cf)) / 4) + parseInt(a6(1581, 0x6da)) / 5 * (parseInt(a5(1114, "tO)5")) / 6) + parseInt(a6(1948, 0x46)) / 7 * (-parseInt(a5(1376, "NM!4")) / 8) + -parseInt(a5(1047, "@GuB")) / 9 * (parseInt(a5(2378, "hSmr")) / 10) + -parseInt(a5(999, "]Ba3")) / 11 + parseInt(a5(1642, "F]#]")) / 12;
      if (aa === a8) {
        break;
      } else {
        a9.push(a9.shift());
      }
    } catch (ab) {
      a9.push(a9.shift());
    }
  }
})(a4, 223806);
const bd = function () {
  let a8 = true;
  return function (a9, aa) {
    const ad = a8 ? function () {
      if (aa) {
        const ah = aa.apply(a9, arguments);
        aa = null;
        return ah;
      }
    } : function () {};
    a8 = false;
    return ad;
  };
}();
function gG(a7, a8) {
  return a5(a8 + 0xb6, a7);
}
function gI(a7, a8) {
  return a5(a8 + 0x1bf, a7);
}
const bf = bd(this, function () {
  return bf.toString().search("(((.+)+)+)+$").toString().constructor(bf).search("(((.+)+)+)+$");
});
bf();
const bg = function () {
  let aa = true;
  return function (ab, ac) {
    const af = aa ? function () {
      if (ac) {
        const ag = ac.apply(ab, arguments);
        ac = null;
        return ag;
      }
    } : function () {};
    aa = false;
    return af;
  };
}();
const bh = bg(this, function () {
  const a8 = function () {
    let ac;
    try {
      ac = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (af) {
      ac = window;
    }
    return ac;
  };
  const a9 = a8();
  const aa = a9.console = a9.console || {};
  const ab = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let ac = 0; ac < ab.length; ac++) {
    const ad = bg.constructor.prototype.bind(bg);
    const af = ab[ac];
    const ag = aa[af] || ad;
    ad.__proto__ = bg.bind(bg);
    ad.toString = ag.toString.bind(ag);
    aa[af] = ad;
  }
});
bh();
const bi = require("browser-id3-writer");
const {
  delay: bj,
  isJidGroup: bk,
  isJidUser: bl,
  getBinaryNodeChild: bm,
  getBinaryNodeChildren: bn
} = require("baileys");
const {
  default: bo
} = require("axios");
const bp = require("child_process");
const bq = require("pino-pretty");
const bs = require("os");
const bu = require("path");
const bv = require("simple-git");
const bw = require("pino");
const bx = require("fs");
const by = require("moment");
const bz = require("form-data");
const bA = a7 => a7.replace(/\^/g, '').replace(/\*\*/g, "*");
function a5(a, b) {
  const c = a4();
  a5 = function (d, e) {
    d = d - 253;
    let f = c[d];
    if (a5.CEjpPt === undefined) {
      var g = function (l) {
        let n = '';
        let o = '';
        let p = n + g;
        let q = 0;
        let r;
        let s;
        for (let t = 0; s = l.charAt(t++); ~s && (r = q % 4 ? r * 64 + s : s, q++ % 4) ? n += p.charCodeAt(t + 10) - 10 !== 0 ? String.fromCharCode(255 & r >> (-2 * q & 6)) : q : 0) {
          s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(s);
        }
        let u = 0;
        for (let v = n.length; u < v; u++) {
          o += "%" + ("00" + n.charCodeAt(u).toString(16)).slice(-2);
        }
        return decodeURIComponent(o);
      };
      const k = function (l, m) {
        let n = [];
        let o = 0;
        let p;
        let q = '';
        l = g(l);
        let r;
        for (r = 0; r < 256; r++) {
          n[r] = r;
        }
        for (r = 0; r < 256; r++) {
          o = (o + n[r] + m.charCodeAt(r % m.length)) % 256;
          p = n[r];
          n[r] = n[o];
          n[o] = p;
        }
        r = 0;
        o = 0;
        for (let t = 0; t < l.length; t++) {
          r = (r + 1) % 256;
          o = (o + n[r]) % 256;
          p = n[r];
          n[r] = n[o];
          n[o] = p;
          q += String.fromCharCode(l.charCodeAt(t) ^ n[(n[r] + n[o]) % 256]);
        }
        return q;
      };
      a5.jElUbi = k;
      a = arguments;
      a5.CEjpPt = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      if (a5.icVdhY === undefined) {
        const l = function (m) {
          this.eZwXsH = m;
          this.qxEOyk = [1, 0, 0];
          this.eqMiwO = function () {
            return "newState";
          };
          this.toaPea = "\\w+ *\\(\\) *{\\w+ *";
          this.sPQNaV = "['|\"].+['|\"];? *}";
        };
        l.prototype.vccFsS = function () {
          const m = new RegExp(this.toaPea + this.sPQNaV);
          const n = m.test(this.eqMiwO.toString()) ? --this.qxEOyk[1] : --this.qxEOyk[0];
          return this.dAdxaZ(n);
        };
        l.prototype.dAdxaZ = function (m) {
          if (!Boolean(~m)) {
            return m;
          }
          return this.KTPPcc(this.eZwXsH);
        };
        l.prototype.KTPPcc = function (m) {
          let n = 0;
          for (let o = this.qxEOyk.length; n < o; n++) {
            this.qxEOyk.push(Math.round(Math.random()));
            o = this.qxEOyk.length;
          }
          return m(this.qxEOyk[0]);
        };
        new l(a5).vccFsS();
        a5.icVdhY = true;
      }
      f = a5.jElUbi(f, e);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return a5(a, b);
}
exports.sleep = async (a7 = 1) => await bj(a7);
const bB = require("../config");
exports.getDate = () => {
  const a8 = require("moment-timezone");
  const a9 = bB.TIMEZONE || process.env.TZ || "UTC";
  const aa = a8.tz(new Date(), a9);
  return [aa.toDate(), aa.format("hh:mm A")];
};
function gF(a7, a8) {
  return a5(a7 + 0x23f, a8);
}
const bC = {
  colorize: true,
  levelFirst: true,
  translateTime: "SYS:HH:MM:ss dd-mm-yy",
  ignore: "pid,hostname"
};
const bD = bq(bC);
const bE = process.env.BOT_LANG || "en";
const bF = bu.join(__dirname, "..", "lang", "en.json");
const bG = bu.join(__dirname, "..", "lang", bE + ".json");
const bH = {};
function gM(a7, a8) {
  return a6(a8 + 0x107, a7);
}
bH.level = "trace";
exports.logger = bw.pino(bH, bD);
if (!(bG === bF || bx.existsSync(bG))) {
  exports.logger.warn("'" + bE + "' language not supported yet, switching to default language.");
}
const bI = bx.existsSync(bG) ? bG : bF;
exports.lang = require(bI);
const bJ = require("./config");
const {
  getMention: bK,
  enableMention: bL,
  getMessage: bM,
  setMessage: bN,
  deleteMessage: bO,
  mentionMessage: bP,
  deleteCreds: bQ,
  deleteKeys: bR,
  setPlugin: bS,
  getPlugin: bT,
  delPlugin: bU,
  setPdm: bV,
  setWarn: bW,
  setMute: bX,
  getMute: bY,
  deleteWarn: bZ,
  getFilter: c0,
  setFilter: c1,
  deleteFilter: c2,
  setLydia: c3,
  getAntiLink: c4,
  setAntiLink: c5,
  getMsg: c6,
  getSpam: c7,
  setSpam: c8,
  setWord: c9,
  getWord: ca,
  getGids: cb,
  getFake: cc,
  getDeletedMessage: cd,
  getTMessage: cf,
  setTMessage: cg,
  getBudget: ch,
  setBudget: ci,
  delBudget: cj,
  delScheduleMessage: ck,
  getScheduleMessage: cl,
  zushi: cm,
  yami: cn,
  ope: co,
  logia: cp,
  getTruecaller: cq,
  setTruecaller: cs,
  delTruecaller: cu,
  setGroupMention: cv,
  getGroupMention: cw
} = require("./db/");
const cx = require("./backup");
const {
  getScheduleStatus: cy,
  delScheduleStatus: cz
} = require("./db/mute");
const cA = a7 => a7.replace(/\s/g, '');
const {
  getName: cB,
  resetMsgs: cC,
  getMsgs: cD,
  getContact: cE,
  setContact: cF,
  delContact: cG
} = require("./db/store");
exports.zushi = cm;
exports.yami = cn;
exports.ope = co;
exports.logia = cp;
exports.getTruecaller = cq;
exports.backupFilesToDrive = cx.backup;
exports.validateUserCode = cx.validateUserCode;
exports.initiateUserToken = cx.initiateUserToken;
bB.logger = exports.logger;
exports.sortObject = a7 => {
  const a9 = Object.keys(a7).sort();
  const aa = {};
  a9.forEach(ab => {
    aa[ab] = a7[ab];
  });
  return aa;
};
const {
  parsedJid: cI,
  getUrl: cJ,
  waWebVersion: cK,
  genButtonMessage: cL,
  yts: cM,
  video: cN,
  forwardOrBroadCast: cO,
  ctt: cP,
  addSpace: cQ,
  textToStylist: cR,
  stylishTextGen: cS,
  formatTime: cT,
  clearFiles: cU,
  isUrl: cV,
  rmComma: cW,
  enableAntiFake: cX,
  antiList: cY,
  parseGistUrls: cZ,
  pluginsList: d0,
  getQuote: d1,
  secondsToHms: d2,
  genHydratedButtons: d3,
  genListMessage: d4,
  trt: d5,
  getFloor: d6,
  levanter: d7,
  store: d8,
  song: d9
} = require("./utils");
const da = a8 => {
  const ab = new RegExp("filename[^;=\\n]*=(([\"']).*?\\2|[^;\\n]*)").exec(a8);
  return null != ab && ab[1] ? ab[1].replace(/['"]/g, '') : a8;
};
exports.takeScreenshot = async (a8, a9) => {
  if (!a8.startsWith("http")) {
    a8 = "https://" + a8;
  }
  let ab = "https://levanter.onrender.com/ss?url=" + encodeURIComponent(a8);
  if (a9) {
    ab += "&full=true";
  }
  try {
    const ac = {
      responseType: "arraybuffer"
    };
    return (await bo.get(ab, ac)).data;
  } catch (af) {
    throw new Error("an error occured");
  }
};
exports.secondsToHms = d2;
exports.getQuote = d1;
exports.isUrl = cV;
exports.levanter = d7;
exports.fetch = (...a7) => import("node-fetch").then(({
  default: a8
}) => a8(...a7));
const {
  nameFromUrl: db,
  getBuffer: dc,
  getJson: dd,
  download: df
} = require("./fetch");
exports.download = df;
const dg = require("./mute");
const dh = require("./events");
const {
  stopInstance: di,
  restartInstance: dj
} = require("./pm2");
const {
  removeBg: dk
} = require("./rmbg");
const {
  iChecker: dl
} = require("./test/test");
const dm = {};
exports.bing = async a8 => {
  const aa = process.env.PASSWORD_U;
  try {
    const ac = {
      q: a8,
      i: aa
    };
    const ad = (await bo.post("https://levanter.onrender.com/bing", ac)).data;
    return ad.result.replace(/\^/g, '').replace(/\*\*/g, "*");
  } catch (af) {
    if (af.response) {
      throw new Error(af.response.data);
    }
    throw new Error(af.message);
  }
};
const ds = a8 => {
  const ab = new RegExp("https://open.spotify.com/(playlist|track)/([a-zA-Z0-9]+)?");
  const ac = a8.match(ab);
  return !(!ac || !ac[2]) && ac[1];
};
exports.IsSpotify = a7 => ds(a7);
function gH(a7, a8) {
  return a6(a7 - 0x2b7, a8);
}
const du = {
  number: '',
  otp: '',
  login: false
};
function gL(a7, a8) {
  return a6(a8 + 0x140, a7);
}
du.id = '';
du.token = '';
const dx = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
exports.dowloadTrack = async a8 => {
  try {
    const aa = {
      responseType: "arraybuffer"
    };
    const ab = await bo.get("https://right-annmaria-lev-8a3a4814.koyeb.app/spotify/download/?url=" + a8, aa);
    return {
      "title": da(ab.headers["content-disposition"]) || (a8.startsWith("http") ? "track.mp3" : a8 + ".mp3"),
      "buffer": ab.data
    };
  } catch (ad) {
    throw new Error("failed to download spotify track");
  }
};
exports.getSpotifyPlaylist = async a7 => {
  try {
    return (await bo.get("https://right-annmaria-lev-8a3a4814.koyeb.app/spotify/playlist/?url=" + a7)).data.result;
  } catch (aa) {
    throw new Error("failed to fetch spotify playlist");
  }
};
exports.parseSchedule = a8 => {
  const ab = /[\w-]+@(s\.whatsapp\.net|g\.us)/g;
  const ac = a8.match(ab) || [];
  const ad = a8.replace(ab, '').trim().replace(/^,|,$/g, '').trim();
  const af = ad.match(/^([0-9*\/-]+)/);
  const ag = af ? af[0].trim() : null;
  return {
    "jids": ac,
    "time": ag,
    "once": ag ? ad.slice(ad.indexOf(ag) + ag.length)?.["replace"](/^[, ]+/, '')["trim"]() : null
  };
};
const {
  addExif: dy,
  getFfmpegBuffer: dz,
  cropsticker: dA,
  sticker: dB,
  audioCut: dC,
  avm: dD,
  videoHeightWidth: dE,
  videoTrim: dF,
  mergeVideo: dG,
  blackVideo: dH,
  cropVideo: dI,
  SpeachToText: dJ,
  videoToGif: dK,
  circleSticker: dL
} = require("./fFmpeg");
const {
  aliveMessage: dM,
  getUptime: dN,
  uptimeQuoteReplace: dO
} = require("./alive");
const {
  setCmd: dP,
  getCmd: dQ,
  delCmd: dR,
  phonesList: dS
} = require("./cmd");
const {
  participateInVote: dT,
  newVote: dU
} = require("./vote");
const {
  greetingsPreview: dV,
  genGreetings: dW,
  enableGreetings: dX,
  clearGreetings: dY
} = require("./greetings");
const {
  getImgUrl: dZ,
  buttonMessage: e0,
  toPdf: e1,
  getCommon: e2,
  getGPTResponse: e3,
  getDallEResponse: e4
} = require("./misc");
const e5 = {};
const e6 = require("pdfkit");
const {
  setVar: e7,
  getVars: e8,
  delVar: e9,
  upKoyeb: ea,
  updateRender: eb
} = require("./vars");
const {
  fontType: ec
} = require("./fancy");
const {
  ticTacToe: ed,
  isGameActive: ef,
  deleteTicTacToe: eg
} = require("./tictactoe");
const {
  setCmdState: eh
} = require("./db/cmd");
const {
  textMaker: ei
} = require("./textmaker");
const {
  genThumbnail: ej,
  extractVideoThumb: ek
} = require("./constant");
exports.setBudget = ci;
exports.delBudget = cj;
function gK(a7, a8) {
  return a6(a7 - 0x55, a8);
}
function a4() {
  const rY = ["yMy+", "i8kfoa", "AxiL", "uv9b", "BNvT", "cmoCtW", "eSooaa", "C3rZ", "l3r1", "vmkLxq", "ESkbja", "WPq/W5G", "q8onhq", "Dgvv", "ECoFWQW", "DgvU", "W6iQbW", "x19W", "W4BcKHK", "WP7dJLK", "lerf", "Aezt", "iNjL", "qwzo", "WP0ouG", "CI5J", "qSojgq", "BNnd", "lI9M", "jJC/", "e8oDhW", "DKz5", "v8oFWRe", "WQFcICoN", "WQldIZS", "WQpcM8oI", "W4NdUIu", "W4hdIY8", "lY9H", "tM92", "qSkxEW", "WOq7ca", "tfbh", "B8kJmq", "dCoxW6W", "qMLf", "wNDs", "b8kYW6y", "veny", "CMvU", "WPhdO3i", "W5xdSee", "W5FdVHG", "ra/cKG", "igzP", "A2Hh", "W57dVZ4", "WPi5W58", "imoKiq", "WR0QW78", "zgvS", "B3rP", "WPmljq", "fq0E", "e8k/dq", "W7iUW7O", "DCkpqW", "WOOuW5O", "cConxG", "B25Z", "A2LL", "W5ldQaO", "qgDP", "qMHZ", "uMmFWQFcJSkZgYfYW5tdKW", "W6y5W5a", "ceJcRW", "txhdTa", "W5hdOmo+", "W47cKCoB", "uKvo", "W5WcW4e", "W7ZdLqG", "BhnW", "ltHI", "z2LK", "FX3dTq", "ctRcUW", "W6GsW60", "WP8bjq", "bdJdKG", "WQNdLSo/", "ihrO", "zNxcJSo8W6tcT8oMWRnuvLJcSG", "h8oBEa", "ue9t", "y2f0", "Dg90", "WONdVmoI", "vv9b", "x0fq", "WRpcH8oQ", "WRBcIYW", "lGa8", "bSkNdq", "AMno", "hJTn", "g8kDkW", "kmkLcW", "AwnL", "Bg9Y", "W4PDW7W", "kYKR", "DhnL", "WO0uwq", "v1Pr", "BgXH", "f8kNea", "WOuDca", "W4K+W7W", "sgvS", "aCoDW4K", "DND4", "B3b0", "yw1L", "WQRdIv0", "twf5", "WRtcHSot", "kfXK", "sMfU", "rmowW70", "DgLU", "WQSAtG", "zMvY", "amk6W6u", "fa8e", "DgfU", "mJhdKa", "wK95", "WO3cRu8", "ieHL", "xW3cGG", "WRldTCoU", "W4eFW7m", "yxbP", "x3VdQW", "xJS9", "WP01eW", "Ag0N", "W5xdUGK", "qunp", "h8ongW", "tSoOdG", "W7PQW40", "W4RdIJG", "W7ZdQY8", "EtjT", "WRGaaq", "W6CcW4W", "nSoIha", "sw1N", "we1J", "W7zwxW", "W50dWR4", "E8kyoq", "Dgvn", "WR8CWQm", "smkYrG", "zKXZ", "W5eEeG", "fc7dKG", "Cvrc", "fSkeW6m", "WRFcJLK", "tfb5", "fmkvpa", "DMvn", "WPuSbG", "Benn", "rujF", "q8kBWRy", "WQ9XW6e", "WRrkWOa", "dSoqwq", "Aw1W", "DcbI", "qmofWRO", "WPe4cG", "wCk2oW", "WOFdPxG", "wK9I", "C0DS", "jmoKha", "WPxcUmoP", "W4VdOrW", "vfbf", "W7StW50", "kcpcOa", "WQ3dPxW", "uhry", "uCo4Ba", "W7GgW44", "twDv", "t2S/", "z2vt", "zwnH", "WQuGrG", "kIOp", "mCojBW", "sCoSdG", "CgvY", "ftrn", "mYtdKa", "qLjb", "DLbx", "W5a9dq", "WOK8WP8", "y2q9", "igv4", "tCo3hq", "W5hcQqa", "WRGtrq", "xmkvWRy", "WQmZWR4", "AwzP", "yM90", "zmo6sW", "AeLA", "fSkjdW", "W6CtW58", "Bw9U", "Dgf0", "swnJ", "W5GqbG", "DwfN", "sNjG", "xCkWWOi", "ufzU", "W7acW4e", "quzl", "rCoxWRG", "AfnO", "lMPZ", "z2H0", "WOK0Da", "zfrY", "yK1r", "WPuIaG", "WRddLue", "rNDW", "qHJcLa", "wSoGtq", "W5VdLYe", "W7KiW5S", "dLtcRW", "veLn", "W4hcSGW", "nmoLwa", "dSofaq", "Dgvg", "vgfN", "aCkAW6G", "uMvT", "W54wW7e", "mX4f", "D8kbFq", "zwLN", "uNDY", "W4xdTGS", "sK9n", "gqpdTa", "ESoKWOy", "mtqU", "WQuJWQS", "DgfR", "vmoBWRa", "hu/cSW", "mSkekG", "x8ozWRy", "gmozW50", "WOldPCo4", "jstdMG", "E0fL", "BMrL", "W7H/WQy", "W4zwW5S", "WRm4bG", "zMu8", "WOOejq", "zw1V", "zMf1", "jSo/aq", "u0f3", "AxnO", "igrV", "W6FcIG0", "BJtdTW", "WO4/ia", "zxrH", "C2vZ", "WOadWQe", "B3iO", "WQ0ArW", "tNvT", "dmoMmW", "p8oDW4O", "W4WFW7K", "tuzP", "WRlcKKa", "yxbW", "gCoswG", "t0Tv", "WPuXW4i", "W48JW4u", "gHG5", "Aw5N", "Axnv", "tuX1", "ruvH", "x1rf", "r8krWRa", "W5ZdMs0", "EuT6", "BMfP", "WRetWQu", "zmk1qG", "WQK0xW", "uv9t", "WOuGWQS", "tSk5xW", "BwvW", "ChvS", "k8oldW", "W5VdVti", "BhHM", "W7hcVSkP", "lcbV", "WPu6oW", "Dxrl", "EunV", "bY/cPG", "W5ZdJcm", "BgfZ", "mN7cIq", "W7FcL8kJ", "D8kMWRS", "C2q1", "stFdIa", "q0zN", "WRpdIsO", "wCk1cq", "dvtcQq", "WQuvsG", "W5xdSa8", "wgnO", "x8kYqa", "txnd", "r1jp", "lY9Y", "qSosya", "fbia", "v8o/aq", "zY9J", "WPnrW50", "AwXL", "EePc", "thLK", "tSoUhW", "W7RdO8o9", "fmowsW", "gSk/eq", "q29U", "iatcQq", "nSoKbG", "zcbJ", "EaddSG", "iCkrgW", "gSk4bq", "lI9Y", "WRpdNd8", "Eg5o", "WO4erW", "zNjV", "WPlcHNu", "te5Q", "BgLJ", "DhvZ", "sevs", "zfjY", "fZpcHG", "wCozWRG", "Axnb", "WOeEW4C", "DhrZ", "AfrL", "Dgzi", "WRdcGKW", "c8kNDG", "WRNcIvK", "CvjL", "g8ocWQ0", "BxaZ", "WO0bjW", "W7hcRCkQ", "WOldPue", "mdeX", "yLPm", "W6muW4G", "WOKqua", "v8kMAa", "WQiIWQm", "W4RdOq8", "dL7cOW", "B1fP", "B21T", "zxjP", "W5lcLG0", "ihnL", "WQldUCoW", "WP07fq", "zxnZ", "W7ZdQaW", "Awj4", "mSo8Ba", "DxuI", "WRpdPmoS", "WRpdLYy", "BvyZ", "W4tcIX0", "W4ldQmoK", "r0vn", "yI9J", "qNfl", "mSk1W6e", "W7ldRXK", "W5HEWQi", "DgnO", "uCoOha", "sNjW", "q0fs", "hmoyvG", "ywrd", "jSoUwa", "u8kUsW", "fmk1fW", "iCkMcW", "xZlcPG", "nmozW5a", "WRdcPei", "eCkqjW", "nJqU", "wCkYaq", "WP4Cpq", "W7DtW54", "vfHj", "u1vg", "wxVdTq", "WOVdOwa", "fColcG", "AXpdRW", "W5ioW4e", "ywn0", "Ag9U", "W7iVW6u", "ksiM", "bbeP", "WRGWW7K", "veyT", "zxjY", "wSolW70", "vhj1", "fszl", "qmoeWRO", "ze9Y", "icHM", "WOBdSae", "ChjV", "AwnH", "v1uW", "aXm4", "cqfS", "WQJdPmoQ", "W5FcJCkp", "W7CgW4a", "jLNcVW", "WOqXgW", "tmo5dG", "odpcLa", "W4eJW7W", "igLZ", "WRxcJSo4", "WPxcSL4rWPJdR8kwWQmH", "AxDT", "sCoyAq", "wg5Y", "BwjN", "lujV", "WOVdUMe", "W4ddJc8", "qSosEG", "W4eAaG", "W5xdQmo9", "WP8nlq", "suv1", "e8kNda", "WRaDxW", "WRFdIJ0", "qXZcGa", "pSkJaW", "WPKrma", "W5ysW40", "CxvY", "WRtdIsy", "W5igtW", "rh/dOG", "WPtcOCo4", "u0rt", "DmktpW", "mmkZbW", "WQuKWQS", "p1RcUa", "Ce9K", "nJldMq", "W4ldOmo/", "vJvI", "EfjA", "qwrW", "bY3dMq", "uXZcIW", "eZpdLW", "jrWo", "kcGO", "wmkPwW", "C3vI", "DMfU", "zKnU", "W6FdTsO", "BMXY", "t2zt", "W4BdPSo+", "W4ddLJ4", "jcddMW", "W4uMW6m", "oIddJG", "tMBdSG", "sg54", "WQ9VW7S", "nSoBW6W", "WOiqwq", "BMDZ", "uCohW6a", "p8okW4C", "hK7cQq", "W6T8W6a", "s8kPsW", "tNddPW", "W5KEeW", "qMPf", "pCkMW6C", "zunV", "WOJdReW", "dsRdRq", "wSoeWQS", "C2f0", "WOeDza", "Dc5O", "y3P4", "caqP", "aLpcJW", "y2XL", "rSkBWR8", "BMv0", "W6DQW4O", "DMfS", "ChfY", "hmo7na", "W4ddPqC", "WOvlk8o7W5FdK8k3nG", "WRlcVSoX", "u2nu", "xW3cHG", "y8oyW48", "WR4SFa", "uvzI", "CvnR", "W47dOqO", "W4iNW6C", "o8kfnW", "W4VdHWy", "imotW4O", "bXGz", "C291", "hHeX", "h8k1mq", "BgfJ", "ExOW", "z2L0", "u2vW", "WOyfW4W", "hSoBBW", "W4FcQvG", "CLLU", "shFdSG", "osxdMq", "zxnW", "W4hdOrO", "WPKhpq", "WOpdUhO", "s2Lg", "oxFcQq", "WOGbpq", "ymoGW5O", "mCoSaa", "W4mEeW", "qxvK", "fCkTfG", "yxjP", "cHtcOG", "rmovyG", "WRVdOxa", "dd9Q", "W53dNtO", "c3RdOG", "tSkcWRq", "A3uU", "uSofWP0", "rmoQlG", "vhnm", "W5tdOr0", "u2LN", "v8omW7O", "zw1L", "AgvH", "C2vJ", "WQWYWPS", "y2HL", "ic0T", "y29V", "xrJcLa", "WOeCrq", "fbVcUa", "DgvQ", "CgKU", "amkMqG", "WOVdPgy", "zxrL", "Axn0", "W7/dLZO", "wCosW7O", "wKT0", "i8oqW4e", "W5ddU8o/", "W5ulba", "W4pcKbS", "v1rO", "BgW9", "CgLU", "a8oVW4i", "B0Lh", "C3rH", "yMXH", "gSoNkG", "yxnL", "pZW9", "W4ZcPSkK", "fmkchW", "W70dW4G", "B3jP", "Bhjz", "se3dVW", "re5j", "jqRdUG", "zxiU", "WQKHqG", "B2rL", "uLLu", "DwDP", "sgvH", "W4RdTsW", "WQVdHcW", "ALHO", "W5BdUIu", "WQFcJCo/", "x8ogWQ4", "sqFcQW", "nrbG", "d8kaaa", "swHu", "DCoMW6W", "W7JcP8kW", "tMZdTa", "u8o9cq", "BePx", "W4FdNsS", "WOhdKJK", "xvexwM4gqCoh", "Cmkumq", "WOWDtW", "wvju", "W6aFW6C", "WRC0WQ4", "oKJdTq", "W6X3W7W", "aCopEG", "mZzpvNbcshC", "eW4m", "WPyqrG", "qmotta", "daGj", "tM93", "WR8Yma", "jYNdKW", "Ehrh", "hCoquq", "uKvt", "aaao", "vMfY", "oNnZ", "obCO", "zgf5", "zw1I", "fCk8W6q", "W7KgW5K", "r8otWQW", "fLFcVG", "W6ycW50", "rezu", "WOhdPv0", "WRmMiW", "fmoTW4y", "Bwf0", "Ar3dQq", "WRe1WR4", "fCkLaa", "WOGfxG", "W6FdSmoG", "sSkMFq", "C3yz", "ww1U", "BIb0", "gmoCtq", "EmotWQW", "ari+", "Aw5J", "CgfN", "WRJcJmoU", "WP/cKSof", "zxrb", "lxrP", "lwDP", "b0xdNG", "gmkmW6e", "W5OleW", "yX7cJW", "rXJdTq", "x2ZdRW", "W7KtnW", "C2L6", "W7T9W6O", "W5mhW44", "uGVcSq", "dLP0", "C3jP", "ECoPW5S", "nCk8W6u", "WRicEG", "x0Tf", "eCo4vG", "Bg9N", "WQldKsO", "WRldV8oQ", "WRFdIIe", "uhjL", "lI93", "WPmGcG", "W70uW7S", "vM90", "tur9", "crKm", "qNvK", "m8orpW", "z1LS", "WPSSW4K", "CMnO", "WOW2W4m", "C2fN", "WPiuxG", "WQNdHci", "Aw9n", "zguG", "A2TP", "y2nV", "cCkIcW", "WRmKWQm", "zvrV", "WO3cKv4", "f8kHfW", "y2HH", "vSohyG", "DgfN", "Aw5R", "W7rMW6O", "BMvo", "CgHV", "WPveqW", "fcb2", "g8olwW", "WQGtW4K", "W64+W7S", "W7qJW6C", "k8oTkG", "W5iAeW", "s8kBWQy", "mmo7fa", "smoaxW", "W57dTt0", "WOyyrG", "W7L/WQy", "fvNcSG", "emoRjG", "jmoQaa", "W5W8da", "W5RdPSo3", "n8oCta", "W4jGW7O", "fSkGW7K", "WQxcGKW", "Aw5d", "WR0Saq", "tLfK", "ueft", "cCoUW7y", "qNv5", "W67dTau", "Ar7dRG", "Bvfx", "WO4/W5G", "w8kBWRO", "BwLZ", "bSoGdq", "W4RcJCoq", "W6hdVbW", "W6uqfG", "zw1K", "lMhcJW", "weTj", "W6ddISo+", "W5NdVJK", "FMaJ", "ivZcTa", "i8o5gW", "W4VdPr4", "DLDK", "W4RcPxC", "hc/cSW", "vqxcJG", "hCoEAq", "xv10", "W4JdSqm", "C29Y", "b8oFuG", "WO8pdq", "cmkwWQS", "uhzR", "p8oiWOq", "WOmHbG", "kSoPta", "nCoiFG", "W6ldGmoe", "kmodzG", "WOC6dW", "WRpdV8o9", "zhfS", "zuTx", "DhvY", "A2G/", "Bb3dTq", "wfDg", "WPucW4W", "mmotW4O", "xfSR", "WOVcRSoO", "WQuXWQ0", "C2jd", "C3fx", "Awz5", "WQ7cGL0", "y8oGW70", "W5OsW4C", "WO4Fqq", "W58wW6m", "WRv0cG", "uCkRbq", "Dw5J", "fCoNnq", "WQJcGLu", "BmoHW6O", "W5iqeW", "wCotWQK", "DMLK", "lw1T", "WRldUSoD", "WQddKsC", "W6KUW64", "zw1P", "smkluG", "gZ7cQG", "zxik", "CNn0", "v1fg", "jSkRdW", "imoDW4m", "WQKytW", "mctdIa", "WQ/cK18", "fCklfq", "qe11", "q1HL", "WRtcM8kR", "qmo6ufxdS00uWRBcGCkotq", "AdhdTa", "BwfR", "cmonhW", "oKtcQSopW658lsrqWP0p", "W5ZdOmo0", "jSoUfq", "DCkfwG", "kdG/", "W44bW7u", "wxHS", "b8kHW6m", "WQuscW", "Chzv", "D29Y", "rmoRcq", "W65QW6a", "WPqtW70", "yMv3", "WPi7wq", "DxjS", "WRy6zW", "EhHT", "WRVcK0u", "WQpcJCoQ", "WOOAcG", "WQjwqG", "WPK1gW", "WRdcIf8", "ywnR", "B1Lr", "W4RdOqO", "xatcIq", "W7evW58", "CSkczW", "DSkfCa", "WQ4twq", "WRlcQ8oo", "v8osAG", "ns41", "W5xdOSo1", "W5ldVCo4", "WPixW48", "C8opDa", "fbiz", "WPpcHfK", "t8kwjG", "ugHw", "tgzu", "W4e2cG", "WQZdGd0", "k8oTna", "W5rhWP0JwqCEW6KEW59Vpq", "D3CU", "WQi1WRi", "EmoLWPG", "A8oTfa", "CMvT", "f1RcQq", "sevt", "b8odAW", "kCk6W6u", "WQO5cW", "ufmG", "W6XXW6y", "g8kQbW", "BuvU", "W4hdOrW", "txff", "jmoJhq", "teLt", "WRGKWQ8", "W5pdSmk9", "eXee", "tuX2", "tCoFWQa", "zH7dTa", "f8oFAq", "WRiDW6q", "WR3cJCoT", "WO4fwa", "rhPK", "eSk3bG", "WO3cO0m", "ASktmq", "A0rX", "hL7cTW", "EvRdMq", "pCk6ma", "amk8cW", "zmo5gq", "ec/cTG", "fcbd", "vevm", "zgfS", "WRldMKy", "eSokAW", "W7RdTs8", "ySo1hG", "f8owsq", "C29U", "WPeGbG", "Dd1v", "W4VdLHG", "B1Hc", "v8ooW6C", "tCo6xW", "jCozW5a", "umohFq", "CNnL", "AKP4", "WOVdQGe", "zty0", "B3vS", "ruDs", "z2LU", "ugX1", "W7VcRmkL", "w147", "b8kwWRKsvGddMLldPcb8", "WRxdGd8", "BwfY", "sv9l", "rNVdTq", "WPpdJtO", "WRtcNmog", "DhnH", "aY7dPa", "D2Lx", "WPyuW5q", "z2vU", "W4ZcP8kQ", "zgvY", "WR/cNCoM", "qxtcOq", "yKvQ", "DMiY", "WQpcQ8oK", "vCo7eG", "W5Ctba", "d8oTnq", "B3rW", "W7CiW4m", "W6/dUIW", "zxr5", "WOG3W4O", "W6GUW6y", "q0XY", "r01t", "WQ7cGL4", "r1zd", "DxiG", "zNKG", "p3vY", "zblcJa", "W5mAdW", "m8kOha", "FbpdQW", "W6ziW5G", "BgLb", "hSoysW", "x8k2eq", "y3jL", "W4FdVqW", "mmoUhG", "ksTU", "bGW5", "W4ZdO1y", "BguG", "fKJcQW", "rSkzWRq", "q8krWQC", "BCkvmG", "W6nxW4q", "C2fW", "igfU", "WQOuW4C", "mxnM", "WO3cKmkf", "y29p", "cJrA", "q29T", "wK/cTa", "xveF", "WQ3dUxq", "WOGuwa", "yxrL", "qNjV", "A8knmG", "W5aelG", "W6SLWQC", "DSkIwG", "ywnu", "C2vY", "v2nb", "A1bg", "WO47W58", "yqBdQq", "W6qlW4W", "CMff", "u8oXW60", "ihjL", "y3jV", "hWq6", "W6CIW7W", "dSoCtq", "f8oBBW", "y2G1", "BY1W", "W4RdPq0", "c8k3W68", "aXpdNW", "WOWnpq", "tSohjq", "gSoNmG", "W6ddTG8", "W4JdIIu", "WQlcHmoU", "tK54", "W4hdSay", "x2LK", "W7RdJYi", "ywXS", "WOWqbW", "wgRdSW", "uXZcIG", "BmoMWO4", "zYb0", "e03cVG", "DxrL", "gmkEgG", "WRS5WRK", "ocar", "s2HT", "WQVdIIG", "sCofwG", "rCo5fG", "ywXo", "xCkSW6e", "WP7dPL4", "W5/dUCoX", "rvKG", "WOCuxG", "twfw", "WQxdHmoX", "DMfN", "aYlcTG", "hv7cTG", "DgfI", "s8klcSoEkSoUW5hcJ0ucW5G", "DMv0", "iCk+fG", "wCk4sG", "WOWUWOi", "WOpcHqi", "ms44", "mCoLeW", "sNjI", "BNiL", "umovWQS", "yw5N", "B21L", "z3vz", "xmkrWRu", "ANnV", "DhjP", "u2nO", "W7xdSIm", "F8kyWQq", "vfBcQW", "fCkqlq", "zmoFWQW", "C2vq", "r1v2", "qCkvWRW", "WPddIxO", "y2LN", "cColuq", "Aw1L", "mI/dNq", "zez5", "tMfT", "W4iEWR8", "AwfM", "W4aiW4O", "Aw50", "zLDd", "uCo3fa", "WQKfFW", "runb", "W5WgW7u", "CgXH", "yxvK", "Dw50", "zg9T", "C210", "jY7dJW", "nmksW4C", "aCoWWRa", "W7xcP8k4", "c8o/vq", "y3PO", "W5VcKCkv", "y29U", "Cxf5", "qCoeWRy", "osddIa", "oXldSW", "cSkKbq", "qCk5WRq", "WQOpba", "umkHwW", "WQZcJKm", "BNnO", "WQxdGd0", "ksSK", "fbGv", "W7KcW54", "Aw1H", "ihnW", "w8kiW6S", "BSkKWPG", "DgLH", "eSoEFW", "pSotW5i", "lColhW", "k1WU", "C3LZ", "oYtdKG", "AMLK", "uv9n", "zu93", "yqtcLW", "rCk1WQe", "fSowwa", "dWSi", "A3DX", "teXf", "yvD4", "whPn", "CNvL", "WRldTCoQ", "jmouW4u", "WPmCoW", "Aw9U", "u3bH", "Dhj0", "gu/cRG", "A2v5", "W4GbW7K", "W4NdVJS", "rhm0", "ACo/sG", "W7NdJru", "Fr/dMa", "WO4Eka", "WPmdW4W", "bcldLa", "C3m/", "WQy/WQq", "cflcVG", "WQJdIga", "CdnS", "WQtdTCo4", "CSkvEW", "uMPc", "rh41", "WPWXdq", "hLRcRW", "WQ/dO0e", "W7POW58", "lwfZ", "W5FcLGC", "W5quW4y", "u2n2", "h8kPsW", "WPqXdW", "B3rL", "W795W7u", "rwfJ", "WOGfW4a", "WOJcRxVcM8k+rXWpWPq", "CgvU", "WOSuWOK", "wXVdTG", "zgLH", "WQ4Frq", "omkEhW", "W7KgW4m", "AfDI", "W6u2W4i", "bmohjW", "a8ktiW", "W5i3fW", "nCo5gq", "rMvI", "CMvX", "aaq+", "qu1f", "zxyT", "fSokDW", "WPCcW50", "WQKyxq", "BMfT", "mCoFhq", "W4GCW4q", "W5tdOq8", "g8oDwW", "WOayW4C", "Bvbh", "Ahrx", "igjL", "zxjZ", "dCkJaq", "CNjH", "qqqU", "W5VdLXK", "ihrV", "x8kVya", "WPGxta", "WO3cRNG", "lYHW", "W7edW5G", "vuX4", "WRhcJL4", "W7ldQmoK", "sw5s", "uSowW5q", "ASkjpW", "WOedW4y", "uKrO", "icHb", "WP3dMNK", "qCoGW68", "mmoQbG", "iefn", "BH7dTW", "Bmkfia", "CCkmjG", "WOyTjW", "sKf9", "cSkXaW", "W5NdVmoK", "dtbn", "W5Suba", "vmoXhG", "iSoAwG", "zCoIhG", "B3nj", "f8kDgW", "Aw5O", "W5tdOr4", "hmolua", "nSoeW40", "y29T", "W60cW4W", "qSkpW6O", "W6KYWR8", "AgvP", "xbJcIq", "B20V", "jmkRbW", "quD/", "tM1f", "xK11", "qCkaWQm", "CSkfpG", "Dw1c", "aSo5W7i", "ksNcSW", "z3jL", "WPZcLam", "W5HXW6y", "DgLJ", "nSkcW6y", "BNmV", "AwDU", "a8koiq", "CM1H", "qWNcLq", "WRddPxa", "wHtcGW", "zLPX", "WPe4dW", "W79TW6e", "Dxnu", "AbFdRW", "vmkwwW", "twvZ", "Dg9t", "y2HP", "yxrP", "zwfY", "WOOmlq", "A8ktnq", "W4ldGGC", "craf", "xfvS", "qLnj", "AwqG", "W5pdPmo5", "zKz6", "yxHP", "W7L9W6y", "svL3", "uSk0sG", "gttdKq", "smkrWOC", "mtiZ", "fSkGW4C", "wuJdQW", "vgXq", "zcbp", "lY9U", "WQGtrW", "zcbT", "zxrn", "WPFdQHW", "Dg9R", "uvrQ", "gYNcUW", "yw4G", "BhvK", "BwvB", "eSk1fG", "bSojyG", "W4NcLG0", "eCkuxa", "WOuKWQS", "DhLW", "W6fSW7m", "rmobyW", "u3rP", "W4DOW4a", "rmoByG", "zYbh", "bCk9pa", "vq/dIq", "WOCuwa", "xXddIa", "fLtcVa", "mti1nZfgquHQExu", "WRtdJce", "WOpdVN0", "q0Pi", "WRpdQ2C", "W7ldPq0", "uColW6a", "uYXi", "wSkPsa", "rvnk", "wSohW7G", "WPBdO3i", "FCkXWP8", "rg5d", "yxjY", "whVdPW", "BwfW", "aJpdKa", "W7P1W7a", "B3zL", "WQetwa", "W4NcIh8", "vCo9ca", "gmkGdW", "nSooW48", "WRhdPuu", "Cg9S", "sCowBq", "CgfY", "Bhb3", "e8oxvW", "BgvY", "mgrr", "ASomW5m", "nCoVfG", "p8oLnW", "shLK", "xGH+", "W4VcMcO", "rSo9fa", "wbve", "xc5C", "W6ldPqi", "yxLS", "r2j0", "mtmWu0HusenK", "Dw5S", "DxbK", "B2jP", "nrPL", "W4hdKwm", "vCkUra", "W4i+W6q", "ywXT", "p8oMWRm", "WPmQW4u", "aCoiEG", "ELDv", "vg9R", "EwXN", "wSohW4m", "sevb", "vKrm", "W4/dQH0", "W4ysmG", "WPBdUCoI", "W4NdKcu", "WQKybq", "WQ8etG", "WOa1ba", "b8kRfG", "wg3dPW", "wmoqW6S", "WQqgnG", "EXFdQq", "CMvK", "u8o7W4S", "B3iG", "WO47W5W", "rhRdOW", "WQ7dIcO", "ChvZ", "CSkjpG", "uSolW7O", "WPygla", "uLfY", "W4fYW4a", "Dxn0", "gSk5ea", "D2nN", "W6n3W7u", "y2PN", "W6OUW7W", "xLXI", "pdJcHG", "Bw9T", "WOqZEq", "WQ8xsa", "zNjL", "aHqd", "cConta", "W4ddQWa", "W5mIW7W", "BIbP", "CNHV", "W5pdRZ8", "W6xdNCk/WPFcKCk8W5/cQMqtWRrFDa", "nc7dKq", "WRqoW4m", "qhmU", "kqq+", "b8ktja", "uxvV", "DwvY", "qmkaW7e", "W5WweG", "d8k5aq", "yZi0", "Bgv5", "WPaNW4O", "WQW1WP4", "hXe8", "WPy3W4G", "amk3eG", "W4CeW4u", "revN", "jSoUaq", "W6JcIIm", "jstdJa", "qc/cTW", "faqD", "gaOo", "aH1u", "E8kyja", "fCoDtq", "dCoUdW", "BxbS", "B25L", "AgfZ", "C2v0", "rg41", "vNbt", "uCoxWQS", "emkJjq", "W7qKW7S", "F8knaW", "kX0V", "d8k1fG", "dmoIoW", "WRGtwq", "C2DZ", "aXe0", "fq8i", "W4ZcJCku", "BgXP", "z2v0", "m8o3fW", "sCoEya", "WOZcR3u", "jdRcOa", "B3jL", "rblcJa", "wxVdQG", "Dgv5", "W4hdVGC", "WQ89W4q", "zwXg", "DMv5", "Defm", "W5FdHW8", "z2uU", "ECkYxq", "aIDa", "iYtdJW", "DfrV", "W48wW6i", "WQlcJCoB", "WO7dSCoZ", "uCohW7O", "lvXK", "Aw5L", "mSopW48", "zwPA", "W4NdTHO", "jCoSBa", "umovW4e", "WOPfjq", "zxiG", "WQlcHsW", "WRdcHKm", "e8kReG", "sfbN", "WOq9da", "xbhcGG", "W5akdq", "o8ozW4a", "W70jW4O", "FbFdTW", "h8kmpq", "uMfU", "WR3cIuK", "zsbN", "W4hcUqa", "WO/cKaS", "fSoUDa", "W4GLW6O", "bSkXW54", "hmoyeW", "WRRcIf8", "WPKnoG", "Bffl", "W60VW6K", "cZbk", "Dfn4", "ruTL", "whFdQa", "zgf0", "CComWRS", "yMfJ", "W5pdVCor", "aCkJaa", "B3nP", "W6GlW7K", "B0rY", "y1bh", "wmoFWQW", "aJTk", "W7xcUIu", "WQtdJs4", "tvfW", "Dgvt", "WPVdSIu", "WOiXfq", "yMXL", "s09z", "c8oTna", "WPBdPCo/", "ENzY", "qSkzW7e", "r1fI", "x3VdTq", "Bwv6", "WOVcKHK", "jbes", "W4RdN8k0", "WO87W40", "e8k8bW", "W7yQW40", "jMLK", "WPBdPx4", "A8kPwW", "c8oTnW", "AxrO", "vZLH", "igrL", "WRdcHmoI", "w8kgWRG", "WOqfqG", "W67dVdS", "WPmSW5G", "A3vW", "FrFdTG", "rNbv", "WRm+WQ4", "jmoiW7W", "qWRcQG", "W4NdVJK", "uSoVWRm", "WOqgzG", "A295", "tCkzpG", "zw5J", "cmoCuG", "r3jL", "y2HV", "y1n5", "wWddRG", "W7WgW5K", "Aw5Z", "zxH0", "W4lcLs4", "kCoxEG", "DhrL", "WPpdGcm", "zezP", "BwfZ", "fY47", "qa7dNq", "W5aqda", "sJddHa", "qCkzWP0", "Awf6", "WRuXWQy", "BXtcGW", "t3L1", "AgG6", "w8kyoq", "W5xdPSo+", "vunl", "DsbY", "W4fLuZ/cI1rJWRzT", "WOJdKCom", "aWD2", "W6P8W5m", "ndu0mtuYmgnYvevADG", "u8omW6O", "wuDA", "Ahr0", "WO0MyG", "WO87W7G", "mSk8aW", "wePO", "WRSXWQq", "pCk1pG", "W6u5W4K", "ruLZ", "eGZdOW", "WQ8FxW", "l2vW", "amoKoa", "Bwf4", "W4ddLH0", "WP4/tW", "y3L2", "Bevs", "W4BcJqG", "Es5W", "zerH", "W6S5W6e", "WOxdVNW", "W4FcJqy", "W5xdVIi", "D0jM", "sg5O", "tSoShW", "W4SMW70", "W6e4W4u", "ASkGWPW", "j8otW48", "A8kTvW", "l2X5", "EunH", "WQ4UW6i", "W5ytaa", "W7JdSXS", "W43dQbS", "WPuWW4S", "jYbS", "WQBdIsy", "xCkrmG", "W7yydG", "W5VdNmoB", "hCoTnq", "ywXP", "B249", "WOqEW4C", "vSoEWP4", "C8oyW4S", "BhvN", "W6KPW60", "W6NcJMy", "yKDS", "WRdcKCoi", "r1bu", "WOJcIgm", "thVdTa", "wSodW60", "l2XL", "WPNcMSoG", "W4tcQJ4", "aCoFAa", "ESo9WOO", "WQyxla", "DMfu", "W6S+W7O", "W4NdSqa", "emkYW6C", "jSo5eW", "emoMmW", "WPm1fW", "zw50", "BenV", "CM91", "kSoMCq", "WQicwq", "rMvZ", "W6/dIW4", "Aw5P", "zdnH", "WRi/W4e", "CMvZ", "WPqCdG", "W4ddLIK", "Dg9f", "yw5p", "wuXT", "W4RcLaW", "WRxcUCoV", "W7RdQaC", "Cmkbpq", "pCowCa", "zMrM", "kcfE", "kZm2", "WPmQWOW", "EgHu", "rIRcRW", "zgfZ", "W6/cIGu", "W707W4S", "DgfS", "WQ52WQa", "ndqYmtLZqLLIuxK", "imovW54", "mmoKbq", "BMvZ", "y2TL", "W6BcJaO", "C29S", "u3LU", "z0fQ", "l2DP", "BgvU", "WQOtgW", "B19F", "WQuqWPW", "rNDb", "qxjp", "t3bL", "b8opAa", "ASkgpW", "Bvvl", "W6f+W5q", "ltLD", "WQZcIKy", "ru1j", "ywrK", "W44CW6u", "cY/cUG", "D3ft", "CNji", "WR4twa", "WQStrq", "WRpcIqi", "zfrV", "hCodvG", "W4ldPSoG", "WPeMaa", "zwjw", "drqE", "x3hdGG", "E8kynq", "WP01dq", "WRNcHui", "WOFdQmor", "WR4tsa", "weXj", "cCk0bq", "W4/dQGu", "rKvW", "CK9s", "hWtdRG", "qxvN", "x8kBWR8", "WQJcLuq", "zxrP", "C8kbia", "pSozW5C", "WOpdO3e", "mSkNdG", "WQqZWQi", "vv3cIq", "tmo9cq", "rNjH", "sg1Z", "CMvW", "qSohW7y", "W6mUW7W", "W4ufoq", "h1xcRq", "rMzT", "t2LX", "ls4Q", "mmoDW4G", "BwqU", "h1JcRW", "Cffv", "FWFdMG", "DxnL", "CMvY", "zMLS", "qGFdRW", "WQ8xrG", "AxrS", "WOOcrq", "p8oDW4C", "n8oIbG", "kCoAvW", "ocZcKW", "ywnL", "lMnV", "sNH4", "Chm6", "WOSqW4C", "qSonW7W", "W5ZdTqm", "emkzoW", "ufvn", "vu50", "amkRgG", "bmk7eq", "DwqH", "WRpdJcW", "y2L0", "WOxdLW8", "smk5xW", "FCkbja", "D8oqma", "EwXP", "W4pcIGC", "DwzM", "W6CKW6y", "u1Lt", "WRpdSrS", "zgL0", "W5KiW4m", "yNzw", "zdmT", "WOebwG", "W5xdVYC", "yhaC", "u3rH", "W6CsW50", "WQW7W5G", "WPeWdG", "DMvY", "qw50", "Dgvs", "nCoIba", "wwz2", "ww1K", "W4ldVmoJ", "B21v", "C3Hw", "F3T4", "tuTL", "taeY", "ySoFWQS", "x8ogW7O", "fCo+vG", "B2T1", "BMjV", "gSkzWRm", "WRtdKty", "Ew5J", "gmofW6C", "W4xdVCoX", "WRFcLIm", "l3nW", "W4tdQSo4", "hmoTW7u", "WONdR2y", "WOmAba", "WPaFFW", "CMLe", "W7ldRmo8", "iCoTeW", "qmoyWQS", "ufbF", "W5eroq", "lmozka", "AZxdRW", "pSoEW4e", "W5VdJ8kh", "BM93", "WOitWOC", "W4z8qW", "WRSela", "rwfY", "W6KUW7S", "oKHi", "WRFcJCo5", "B3bH", "WQexxW", "AfxdIW", "WR4dtG", "C2LT", "WOi9dG", "W5hdVmoj", "WQWFxq", "hSk1ea", "bmkqiq", "WO8fqW", "BwfU", "vbZcKW", "rvPp", "lSoHmW", "mSoYwG", "q0L1", "W7SmW4G", "WOGZEq", "BMf0", "BMDp", "WOqqxG", "ECkfja", "W6ecW54", "y2fJ", "zhrO", "i8ouW4S", "WQFdTCoQ", "iCkrW40", "Beze", "aWa+", "Amo2gq", "WQStxW", "C2Hd", "W7NdVIO", "bmkijW", "Dxbn", "cCoTkq", "CI9T", "DgvZ", "bmkMdq", "W4VcKmkt", "dmo5jW", "zxjV", "WO8uW40", "wCkYtG", "ihLV", "W4mKW6y", "CMvH", "Dhjj", "r3jV", "WQZcKfC", "WQyema", "WOxcMHe", "W6CAdW", "rmofAG", "ySopFa", "WOnCW7q", "ExbL", "WPBdR2u", "DwX0", "WPKerW", "vvDY", "W7/dH8oM", "fCoNia", "W4JcMHO", "WR8Ira", "rMfw", "zuH6", "zufK", "cJxcSW", "Eu9U", "hCoTbG", "fZPa", "DgG/", "h8onxa", "DhX0", "lY9S", "AxjL", "xmowFa", "DgvT", "txH4", "mtq3ndjMverysuO", "C2vo", "E8oXda", "qSodW60", "rgf0", "W7X5W7u", "CgLW", "yr3dVW", "W4WqW7G", "WRqtW4i", "mZy0odmZv3HzAunV", "b8oskG", "W74aWPu", "fbWo", "WRGzEa", "W7uasq", "CCoZWO0", "BM90", "Bw92", "W6eMW6O", "W77dJmoc", "gvpcUG", "WQddIWC", "tLLu", "dW/dLG", "ytq4", "W7HpW4O", "WRpdGwq", "ve1L", "zezc", "fmkAdG", "hc/cVq", "reDq", "ANvZ", "kfSI", "WRtdNCo/", "a8ovDq", "W5yIW6W", "WPLIqW", "BwLT", "B21o", "AgvY", "WRVcGLK", "yMfZ", "cSo8lG", "WO4FW4e", "WRddUmoX", "l2nO", "a8k8W6q", "DgfJ", "WQm3cW", "WPqdxW", "hSkXW6q", "D2HH", "B2nJ", "pmoKaa", "W5NdPmk/", "c8okiG", "Awry", "W5FdNWC", "EXhdSW", "ww9W", "W5/dI3a", "fSkRea", "ENvZ", "WRebjG", "W4/dJZi", "WR4Dpa", "werU", "igzL", "yxnR", "WQZcG0S", "CfzP", "zMfP", "twPQ", "eCk6bW", "mSksW4a", "EKv2", "yJi5", "qK9u", "dGKi", "WQOpcW", "W5uBbq", "uurZ", "W5aAeW", "b8kHW78", "lIO/", "WR42WQu", "xxFdOG", "yxv0", "W5Clfq", "BSkHWOK", "WRdcMSoi", "yLu+", "vxjS", "Amo9mG", "eatcIa", "W4VcMH4", "W68HW5e", "qSodzG", "Bxb0", "mdG0", "BM9K", "s8osFq", "ueLF", "emkPhq", "tMzX", "W5hcJqG", "BgrF", "AGRdUa", "CKnV", "pmoCDW", "nmoWjq", "amoFW4W", "C3rU", "tSoUqa", "FaBdQq", "BgL2", "bCotzW", "WRpdGcS", "W5NdSIu", "aZbC", "WPtcICoO", "whzu", "zw9u", "cJxdSG", "ugrT", "WPm3da", "t3fv", "tK1V", "ywDL", "W4FdVHK", "lI90", "iCozW4i", "W73dTYq", "yNvM", "twvU", "eCkzpa", "sNnV", "CuXX", "f8oDW5a", "C3vW", "t25p", "W5JcJCkt", "xmorW6e", "W4ewW4q", "W4xdQmo3", "swrc", "jHldLW", "oSk5ka", "h8k2W5K", "CgvN", "W4hdLse", "mCopiW", "qMOM", "rMLS", "DMvU", "yxLI", "C2LN", "b8kDpa", "qSonW7O", "gSoEoW", "BhPx", "ASkfiG", "W5/cM8kd", "Dgu6", "x8kbWQi", "WOpdR2e", "r8otWQS", "WOK+WQS", "j8ozW5W", "tbyT", "BgvM", "WOG7ma", "W5pdVIi", "W57dQcC", "F3C1", "d1lcVW", "WR4PWQlcKSkTW68sfXi", "dCkBcW", "CgXL", "W77dH8oK", "cdlcVa", "AvjK", "WOauW50", "brmB", "umofya", "W4xdRmoe", "b8kHfW", "Dhj1", "x1bm", "W4RdRqa", "WO0bjq", "cM/cTa", "BmkfiW", "WQJcIh4", "ywLS", "yaldUG", "WRxdGc4", "W6z2W6e", "ECk4tG", "uSoXfa", "Axnu", "wCorhG", "eCkvlW", "ww3dOW", "W6X0W7C", "e8k2hG", "wSkHrG", "zwDV", "yw1W", "WOezqG", "WOSWW4a", "WRGyua", "v2fY", "WOqgoG", "lY93", "jSklqW", "eSkilq", "uf9o", "tSkLxa", "BNnS", "WOKSW54", "WR8/AW", "BunO", "z2vW", "B2TL", "bYpcGW", "eCotDq", "FbFdQq", "CSkjiW", "ndjn", "W6hdTWC", "WO4AoG", "WOGRW54", "hSoaW6nLBCo+BmkLdCkiymk9", "hrhdIa", "EsaZ", "hSkrkq", "gZ7cOa", "DgH1", "W6ifwW", "bthdRW", "tfvc", "y2fY", "WQPLWQC", "WPtdO3S", "CNrZ", "aGfb", "W4FdGSoH", "rCofW6u", "Aw5M", "WQNdUxi", "vgnW", "CCkoFW", "WQaAtG", "W795W6a", "vvzy", "uSkYsG", "WR7cICoV", "vezp", "Dw5R", "dmk9bG", "WOhdVhq", "wvbr", "W4dcNaG", "WPuuW5O", "ht7cOG", "gCk8W6m", "WPuxta", "WOVdUNa", "AKv5", "gbtcTG", "WP41dG", "W7qCW6u", "W6ycW4G", "qH7cJW", "fmoFBW", "mmk4aa", "DNbZ", "W4VdPrW", "pX/cLa", "hGa8", "ow4t", "WRKKWRO", "o8o7eW", "A3Lf", "f17cQa", "wJno", "tM55", "vNL0", "C3bS", "W4pdJs0", "sxX+", "WRxdSCoS", "bmkDlW", "d8k3dW", "W5RdV2q", "gaW2", "cb7dJa", "z2Hp", "lI5S", "WRe5WQq", "Esbg", "fSkeW4m", "AuXP", "WQddGdS", "hd7cGG", "cqj/", "WPddS2u", "DhuJ", "AMqI", "rmo2gq", "W4NdRZG", "WOCnjW", "sxVdTa", "x0Xb", "vgH1", "AxzL", "F8kena", "zg9U", "nSk5mG", "WRpdLI4", "rLzJ", "y291", "ENv4", "vg9L", "xmk9WRK", "fmoCsW", "DgvY", "hSkspa", "BKDg", "DwvJ", "fu/cVG", "D2zq", "hSo/Dq", "gmoDea", "wM1p", "qvje", "xrFdTG", "driB", "B3bW", "fuNcQa", "fH/cLa", "WPiuwG", "ALDg", "Dfrk", "C8oOoa", "CMLM", "pCoOeW", "AHhdUG", "WOWnja", "l3DP", "wxr2", "D8knnq", "W7WcW4K", "rgvJ", "B250", "W4ddKs4", "W4bCcG", "WRH4W6m", "WRdcI1W", "Cg9Z", "m3jK", "WPSajG", "BLzV", "wCowW6S", "Aw1O", "ExrZ", "Dw1I", "zu9W", "W6y8gq", "jHeS", "C2vU", "W43cMGa", "yCoFWRW", "zgvb", "a8kzma", "W4BcTCkm", "CMvL", "h1xcUG", "hSkqW7a", "DcbV", "WQldIZK", "qCodzG", "y0C4", "WR8JWP8", "BhzJ", "W4ZdMt4", "hYNcVq", "fCoFWRe", "W7BdMYa", "BwvZ", "jSogbG", "WR8roq", "hCkpWQy", "x8kBWQi", "W7XOW74", "sKzw", "W6hdUIu", "Dwq8", "sN3dSG", "j10P", "qmodAW", "B0rb", "wmooW6e", "jCkzoW", "sefs", "z3PP", "CM9P", "WQKgrW", "C3rY", "e3FcSG", "WQOAqq", "WQJcGL8", "zvzL", "FrFdQa", "amkGaq", "dJFcNa", "lNrY", "urNcIG", "DgLV", "DSohDW", "zw5K", "vfHs", "cc7cSW", "BIbJ", "WQewrW", "W5/cLSke", "svPW", "w8o5ta", "zw52", "CM93", "zY8Q", "DeLK", "WPtdONO", "CMfJ", "C3vT", "rwVdQW", "W7qQW7O", "wCoXiG", "eXGb", "Agf0", "hCoTka", "CMfT", "m8kVmG", "W6eWWRS", "u8oBlq", "rSkAWRi", "wuO/", "vvH0", "iCozW5C", "zxrJ", "W7hcM8o7", "FbFdRW", "CM1t", "tgTp", "Bs90", "DNbQ", "yI9Z", "zHBcUW", "W7utWOi", "hSoBDq", "Aw52", "fdai", "BNrY", "rwDc", "DxrM", "ff/cLa", "W7GoW44", "eJLA", "W58wW6a", "W5alcq", "WO3dJh0", "W47dPr0", "Aw4V", "ECo/yW", "aYlcTa", "lI9W", "BgLK", "W5S7W4G", "B2nb", "xmoyWRG", "WRdcJmoM", "qvbj", "z3rO", "zxjH", "vgLT", "wvnu", "tCoyya", "C3rd", "WRyqwa", "C2LU", "r01s", "WQ7cV2K", "bSouBW", "WQ/dSSo3", "W7KKW4u", "CI5V", "CNLW", "vK1f", "ugXH", "imo5eW", "twLY", "WQFdUmoQ", "ltGX", "eCkKea", "W6FcIG8", "kbmf", "WQJcJuq", "WOGEra", "BNrH", "AColW6O", "C0XP", "wgvy", "WPiuW4O", "D8osW7W", "deP+", "W7CQW68", "wLfM", "W73cIYS", "gu/cQa", "zMXV", "y2fT", "WOW/W4S", "W4CIW6W", "W4ZcJbK", "B25J", "jmo5fq", "gCkVda", "ig51", "W4xcS8k/", "Bef1", "WO4SW40", "W7a5W6e", "W70jW44", "y2Tw", "CM8Y", "W4/cMfe", "WOqXeq", "rgRdOW", "ihtcSG", "xbJcQG", "W4ageq", "aSoEvW", "g1xcRW", "sSodAW", "WRKIW6O", "pmo/bG", "zxb0", "W4GbW74", "W6pdN8or", "xmoyWRS", "tKni", "pLZcRa", "zte2", "WPmWW4O", "rNVdQa", "amooEG", "vmkwxG", "WQtdHcm", "wCo8ka", "W47cIHK", "pHjk", "Bgv2", "C29J", "W658W78", "g8oFFW", "dCktWR4", "W6u/W60", "WOJdO3S", "hmo4W6e", "rmoGnq", "vCkKtG", "yxr0", "vg1Z", "W5BdLaK", "vCo9aG", "BCkfiG", "mJjT", "WOG/W4a", "xg5D", "W4WDW6q", "DJz1", "WOhdUwy", "W7/dMSoe", "zhnT", "veLu", "W4/dQWa", "p8kGnG", "WP4FW4O", "D2fY", "fCoyWRa", "atZcKq", "fbGE", "W5ldQtG", "ls1L", "Dcbw", "BMXV", "WPG1CW", "fmkioW", "emk8W6q", "e8kRfG", "vuvr", "BwvK", "jZCl", "aXaZ", "rMfR", "lI9N", "yMfP", "C0v0", "uCkwWRi", "sKvZ", "h1RcQa", "WOazW50", "AxnJ", "ywnO", "imoUaa", "CgK6", "AY1J", "qSoKW6G", "WRWgbq", "Bu9c", "Dgvm", "uCoRqa", "s0nV", "yxLc", "yxjR", "w3hdQa", "ywjJ", "vu91", "l3zL", "AtRcGW", "WRGrjW", "fsbu", "WQ7cGL8", "CKvl", "vSosEG", "sLvP", "W6hdOXi", "C3bV", "lI92", "hmoCsW", "hGaU", "WP4lW4S", "fSkikq", "W5CEaG", "C8kWDq", "zxzH", "W4hcMHS", "vLbt", "wKnQ", "uxzZ", "AwnR", "BNn0", "W5/cLCke", "WORdUha", "omosDG", "W4hdRaC", "Dg9U", "W67cV8oQ", "WR7cNmoU", "sCkvWRi", "tu1n", "E30U", "W4VdTYO", "cH/cVq", "y2vZ", "zgrY", "cComtW", "WRpdP8o3", "W60klG", "W4VdQhe", "WOKxsa", "qmoNwG", "b8oFyW", "DhrW", "WP0SW6O", "adbC", "zu51", "WQJcNL0", "FgJcGW", "WQlcJCo/", "BIFdJa", "W4JdUIW", "WR3cLuy", "q21K", "tJ7cVa", "W4VdVcC", "y2vU", "zcSP", "WQNdKt0", "EerV", "EwfY", "z0Dd", "Dgv4", "lqGt", "W5BcR8kW", "kNFcMG", "l3yX", "uCofzW", "tMRdOW", "WOKeWO8", "uMvH", "fSo+lG", "q2vN", "ztaW", "zgvK", "qvrl", "WOldHcW", "W6GUW5W", "Cwf5", "fK7cVW", "ihbH", "W5RdOmo+", "mCkZjG", "W4VdMt4", "BgvK", "CNLN", "W5usdG", "W5SkW5G", "cZra", "ctlcVa", "h8oNnq", "WPiQW54", "WPuTW60", "WPaxW7K", "W4pdTX0", "sePe", "WQqKWRK", "hSoNka", "AMTS", "qML3", "zwrX", "hSktjG", "ChjN", "WPtdLSkZ", "zMv0", "D2LK", "zfn0", "h33cQq", "WQRdV8o3", "E8kUjq", "revs", "vMvY", "uMvZ", "wern", "BNrL", "aGeV", "zmohW6m", "bSkNW6W", "WQJcIey", "W6aiW50", "txa0", "zxHL", "WRhdTCoq", "CKrt", "wCkSfq", "W6/dO8o7", "fmkBW44", "W44hW7K", "v29Y", "tmkffa", "xCkrWQi", "WQBdV2e", "u0jf", "W6j3W7y", "BxD4", "h8k2W7W", "rCkHqG", "yNL1", "C2vH", "CMLN", "nXxcUa", "zMLU", "jCohaW", "CMfU", "W5JcSSkW", "acfg", "twfY", "WQ/cGLK", "Dxb0", "v0fp", "j8ouW4e", "Cg90", "WP8gra", "emkJiW", "ueXb", "zsbJ", "DhDP", "BNjL", "iCozW5q", "Dgvu", "gqa+", "n8ozW4G", "ELjS", "WRldUCo7", "W7C0W6C", "BqZdSq", "y29S", "frKi", "WQJcIem", "zvDP", "dmk+ca", "W4OwW6q", "W5lcUHa", "fColwG", "BMb8", "DKrd", "W4BdLYq", "WR3cGCoL", "q2f0", "zwr1", "fCkXhq", "DgLM", "aIDh", "l3nL", "W6GTW5e", "W4tcJXK", "W5NcI8kp", "vKL1", "WOuFsq", "gCoCpa", "omolW50", "W58hW6m", "lI9J", "wrNcHG", "WPOBwW", "DLbL", "rMTW", "D3Pi", "W63dJW4", "DKLe", "C2vh", "yxjh", "WR0yW4y", "eZP9", "cdHG", "AM9P", "cZao", "DejV", "W4qaW5i", "fmoMka", "WRmKWQ8", "W4VdLYC", "bSknmq", "tSkaWRq", "cmoDvG", "g0/cVG", "C8klEG", "WOxdUMu", "bSkRdW", "ru1F", "DgHL", "m8oCjq", "DfnP", "WR3cJCoL", "qmoqWRK", "wtddQq", "na8y", "W5/cJmob", "veDP", "pxlcLq", "DxjU", "W6tdJmoE", "lI9L", "BMv1", "v3jP", "B2LK", "smowFa", "vefj", "EhL2", "WOi4Fa", "kdlcTG", "orNcHG", "WPKSW54", "uCkRfG", "hSkzuq", "vgfJ", "aqaU", "W6JcR8kK", "tuTO", "whjv", "W4/dVJG", "x13cNG", "WRhcGL4", "cmkHhq", "BgLZ", "vhrS", "pSkupW", "wgDM", "W6i4W4u", "shf4", "CSooWQ0", "cf7cQW", "FSotW7y", "smkHta", "WQBdO2i", "qCowEG", "WQhdVmo3", "WPlcJCoS", "yMLU", "Bgvt", "CgX1", "amoFAq", "tmoAWRy", "w35J", "rLT+", "WQNdR2y", "Dwn0", "lI9K", "AfvQ", "WOywW4W", "Cg9U", "pCkrkq", "AMGI", "a8kDkW", "BMDx", "cZPj", "ww9p", "W7ZdHCoJ", "Bgf0", "crKL", "yw50", "W5NdRCo1", "mtaZ", "W5NdQ8o1", "WOBdVq0", "ywHy", "E8oaiW", "CCkwnq", "cSoqwW", "DxjY", "z3Ho", "A0r0", "BIb3", "cComxq", "W6y+W7W", "bSoGaq", "W5/dUSoK", "ChrP", "y3rZ", "fLlcTq", "DxjL", "BuPH", "WRfWWR4", "z2vY", "BwjL", "iYddNq", "tSkeWQe", "yI5J", "WQhdJce", "zgvV", "W4JcMJi", "WPi/W5G", "WOuVdW", "W6GQW6y", "ANjV", "tKfn", "Dfru", "qw1V", "x8k5aa", "v2L0", "zgaJ", "pWy1", "AwDO", "ErVdVW", "W6W/W7W", "WOiFW58", "yMvY", "BgLU", "lCk4aq", "qmoelG", "W5JdKs4", "ic0G", "seHl", "qKLo", "WPq0uG", "bdrn", "Bs1K", "rfXL", "kSovsG", "Dc1H", "eSkOjW", "rLPK", "jXmp", "vfPM", "ywjS", "W5aoW4q", "g1xcUa", "yw1V", "vgfZ", "h1xcQa", "r8osFa", "B3qT", "C2XL", "wKXd", "t2rk", "x1XW", "CNDU", "WOGjkG", "rmohW70", "eSo5sW", "WQq/WRG", "WO4ctW", "WPe7W58", "C3nH", "WPSmeq", "W5/cJ8ko", "r2ff", "s1P4", "wCkjja", "s05j", "DhfT", "F07dTG", "WQldIc4", "ndu2", "i8kNnG", "jXFdLq", "W4lcMH0", "u3vT", "Axnw", "W54sW6y", "W67cV8oO", "u3r5", "BweZ", "WQmeoq", "D1r6", "zg93", "DgGX", "D2jw", "kbGb", "FSk2wG", "DtlcPq", "sw9P", "rSkMka", "zxn0", "qSoeW6e", "cJXD", "W5BdSJG", "eSoiwa", "ySopW4i", "A2KV", "oLzd", "ignV", "C3bH", "jdhdKa", "yxn0", "CgXJ", "CuTX", "mdXA", "WR8wqW", "ywrT", "zM9Y", "W4ddRmoI", "DhjH", "xbtcLG", "mtDI", "WQyFtW", "yKLZ", "rhzL", "W6CtW54", "AgvK", "WQKYW7e", "WQ3dTCoT", "EwrU", "b8knW7K", "z25i", "W5NdQ8oc", "jmkVbq", "CMvM", "drGE", "W45ErW", "aJTA", "hSk2W7K", "D2vI", "WO46W6m", "W5ldRqa", "W6qEbG", "W4erfq", "sw1H", "aCoqpW", "drWE", "WOxdSYK", "W5Gtba", "aJ7cOq", "yvvx", "uMnq", "q29K", "t8o8ca", "WQJdJcS", "rNFdTq", "C2vt", "hmk9W5a", "m2tcKa", "b8k6ea", "CNfY", "xdNdIq", "W7pcNHS", "W4rhka", "CI8X", "imk8fW", "gvtcTG", "AgLZ", "ihrY", "kSkdW48", "yxjZ", "WOqurG", "r3nP", "vgHL", "aCohjG", "z8ossq", "Bg9H", "wfPK", "dSkIdq", "zg1P", "sNvq", "B1fN", "W7hdSI8", "W4BcNGq", "uNbA", "bSkwjG", "zM9U", "auRcHq", "rxHW", "WPuuW4q", "pSoiW6K", "gSojwG", "c37cGW", "W5xdTsy"];
  a4 = function () {
    return rY;
  };
  return a4();
}
const {
  photoEditor: el
} = require("./editors");
const {
  img: em
} = require("./img");
exports.isValidDate = a7 => by(a7, "D MMMM YYYY").isValid();
function gJ(a7, a8) {
  return a6(a7 + 0x252, a8);
}
const {
  instagram: eo,
  facebook: ep,
  story: eq,
  tiktok: eu,
  twitter: ev,
  y2mate: ew,
  pinterest: ex,
  webpToMp4: ey,
  mediafire: ez,
  apkMirror: eA,
  reddit: eB
} = require("./ss/");
const {
  lydia: eC,
  chatBot: eD
} = require("./lydia");
exports.bot = dh.addCommand;
exports.chainCmd = async (a7, a8, a9) => {
  if (dh.cammands[a7]) {
    await dh.cammands[a7]["function"](a8, a9);
  }
};
const eE = a8 => {
  const ab = [...a8.matchAll(/on:\s*['"]([^'"]+)['"],\s*[^}]*type:\s*['"]([^'"]+)['"]/g)];
  return ab.length > 0 ? ab.map((ac, ad) => ({
    "on": ac[1],
    "type": ac[2]
  })) : [];
};
exports.removePlugin = (a7, a8) => {
  const aa = bu.join(__dirname, "../eplugins/" + a8 + a7 + ".js");
  const ab = bx.readFileSync(aa, {
    "encoding": "utf-8"
  });
  const ac = d0(ab);
  const ad = eE(ab);
  for (const af of ac) delete bJ[a8].cammands[af];
  for (const ag of ad) delete bJ[a8].cammands['' + ag.on + ag.type];
  delete require.cache[require.resolve(aa)];
  bx.unlinkSync(aa);
};
exports.installPlugin = (a7, a8) => {
  bJ.plc = a8;
  bJ.pt = a7.includes("/eplugin");
  require(a7);
  bJ.plc = null;
  bJ.pt = null;
};
exports.addTask = dg.addTask;
exports.getGPTResponse = e3;
exports.getDallEResponse = e4;
const eG = dl();
const eH = Buffer.from("Z3NrX0NNWHpRTXRwSVlSODNIRDhxWmsxV0dkeWIzRllzWjEydFBYN0xhTFpRMlVNUTVmSW9aWU0=", "base64").toString("utf-8");
class eI extends e6 {
  constructor(a7) {
    super(a7);
  }
  ["create"](a7) {
    let a9 = this.page.margins.left;
    let aa = this.y;
    const ab = a7.headers.length;
    const ac = this.page.width - this.page.margins.left - this.page.margins.right;
    const ad = aj => {
      let am = 0;
      aj.forEach(an => {
        const ao = {
          width: af,
          align: "justify"
        };
        const ap = this.heightOfString(an, ao);
        am = Math.max(am, ap);
      });
      return am + 5;
    };
    let af = ac / ab - 15;
    const ag = this.page.height - this.page.margins.bottom;
    let ah = 0;
    this.on("pageAdded", () => {
      aa = this.page.margins.top;
      ah = 0;
    });
    this.font("Helvetica-Bold");
    if (aa + 3 * ad(a7.headers) > ag) {
      this.addPage();
    }
    aa = 100;
    a7.headers.forEach((aj, ak) => {
      const am = 0 == ak ? 80 : 1 == ak ? 135 : 2 == ak ? 280 : 450;
      const an = {
        width: af,
        align: "justify"
      };
      this.text(aj, am, aa, an);
    });
    ah = Math.max(aa + ad(a7.headers), ah);
    this.moveTo(a9, ah - 2.5).lineTo(a9 + ac, ah - 2.5).lineWidth(1.5).stroke();
    a7.rows.forEach((aj, ak) => {
      let am = ad(aj);
      const an = {
        space: 0.5
      };
      if (aa + 3 * am < ag) {
        aa = ah + 5;
      } else {
        this.addPage();
      }
      this.font("Helvetica").fontSize(11);
      aj.forEach((ao, ap) => {
        const aq = ao.length > 20 ? 20 : 25 - 3 * ao.length;
        const au = 0 == ap ? 80 : 1 == ap ? 120 : 2 == ap ? 210 : 450 + aq;
        af = 2 == ap ? 220 : af;
        am = ad(aj);
        let av = "black";
        if (3 == ap && ao.startsWith("+")) {
          av = "green";
          ao = ao.replace("+", '');
        } else if (3 == ap && ao.startsWith("-")) {
          av = "red";
          ao = ao.replace("-", '');
        }
        this.fillColor(av);
        this.text(ao, au, aa, {
          "width": af,
          "align": "justify"
        });
      });
      ah = Math.max(aa + am, ah);
      this.moveTo(a9, ah - 2.5).lineTo(a9 + ac, ah - 2.5).lineWidth(1).dash(1, an).opacity(0.1).stroke().opacity(1);
    });
    this.x = a9;
    this.moveDown();
    return this;
  }
}
const eJ = eG == "aWxvdmV5b3Vzb29vb29vbWF0Y2hidXRpZG9udGtub3d3aHlpbGlrZWxvdmV3YW50dQ==";
const eK = (a7 = '') => a7.replace(/@s\.whatsapp\.net|@lid/g, '').replace(/[()\@\+\-\.a-zA-Z ]/g, '');
function a6(a, b) {
  const c = a4();
  a6 = function (d, e) {
    d = d - 253;
    let f = c[d];
    if (a6.QUFZwd === undefined) {
      var g = function (l) {
        let n = '';
        let o = '';
        let p = n + g;
        let q = 0;
        let r;
        let s;
        for (let t = 0; s = l.charAt(t++); ~s && (r = q % 4 ? r * 64 + s : s, q++ % 4) ? n += p.charCodeAt(t + 10) - 10 !== 0 ? String.fromCharCode(255 & r >> (-2 * q & 6)) : q : 0) {
          s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(s);
        }
        let u = 0;
        for (let v = n.length; u < v; u++) {
          o += "%" + ("00" + n.charCodeAt(u).toString(16)).slice(-2);
        }
        return decodeURIComponent(o);
      };
      a6.LtasRL = g;
      a = arguments;
      a6.QUFZwd = true;
    }
    const h = c[0];
    const i = d + h;
    const j = a[i];
    if (!j) {
      const k = function (l) {
        this.QkXdxO = l;
        this.dOupPh = [1, 0, 0];
        this.zaaifJ = function () {
          return "newState";
        };
        this.legXKT = "\\w+ *\\(\\) *{\\w+ *";
        this.OihUai = "['|\"].+['|\"];? *}";
      };
      k.prototype.jxWduo = function () {
        const l = new RegExp(this.legXKT + this.OihUai);
        const m = l.test(this.zaaifJ.toString()) ? --this.dOupPh[1] : --this.dOupPh[0];
        return this.ACJkfS(m);
      };
      k.prototype.ACJkfS = function (l) {
        if (!Boolean(~l)) {
          return l;
        }
        return this.PagCMV(this.QkXdxO);
      };
      k.prototype.PagCMV = function (l) {
        let m = 0;
        for (let n = this.dOupPh.length; m < n; m++) {
          this.dOupPh.push(Math.round(Math.random()));
          n = this.dOupPh.length;
        }
        return l(this.dOupPh[0]);
      };
      new k(a6).jxWduo();
      f = a6.LtasRL(f);
      a[i] = f;
    } else {
      f = j;
    }
    return f;
  };
  return a6(a, b);
}
function gN(a7, a8) {
  return a5(a7 + 0xb, a8);
}
if (eJ) {
  exports.isAdmin = async (a7, a8) => {
    const aa = a7.find(ab => ab.lid ? ab.lid === a8 || ab.phoneNumber === a8 : ab.id === a8);
    if (!aa) {
      throw new Error(eK(a8) + " does not exist in the group");
    }
    return "admin" === aa.admin || "superadmin" === aa.admin;
  };
  exports.getImgUrl = dZ;
  exports.buttonMessage = e0;
  exports.PDF = e1;
  exports.getCommon = e2;
  exports.textMaker = ei;
  exports.genGreetings = dW;
  exports.enableGreetings = dX;
  exports.greetingsPreview = dV;
  exports.clearGreetings = dY;
  exports.setVar = e7;
  exports.getVars = e8;
  exports.delVar = e9;
  const eO = a8 => {
    if ("string" != typeof a8) {
      return null;
    }
    return a8.replace(/[\+\s\-\(\)]/g, '') + "@s.whatsapp.net";
  };
  exports.numToJid = eO;
  const eP = a7 => {
    const a9 = a7.toString();
    const aa = [];
    a9.split("END:VCARD").forEach(ab => {
      if (!ab.trim()) {
        return;
      }
      const af = {};
      ab.split(/\r?\n/).forEach(ag => {
        if (ag.startsWith("FN")) {
          af.name = ag.substring(3);
        } else {
          if (ag.startsWith("TEL")) {
            const ah = ag.replace(/\D/g, '');
            if (/^\d+$/.test(ah)) {
              af.phone = ah;
            }
          }
        }
      });
      if (af.name && af.phone) {
        af.jid = eO(af.phone);
        aa.push(af);
      }
    });
    return aa;
  };
  const eQ = async (a7, a8, a9, aa) => {
    const ac = await a9({
      "tag": "iq",
      "attrs": {
        "to": "@s.whatsapp.net",
        "type": "get",
        "xmlns": "usync"
      },
      "content": [{
        "tag": "usync",
        "attrs": {
          "sid": aa,
          "mode": "query",
          "last": "true",
          "index": "0",
          "context": "interactive"
        },
        "content": [{
          "tag": "query",
          "attrs": {},
          "content": [a8]
        }, {
          "tag": "list",
          "attrs": {},
          "content": a7
        }]
      }]
    });
    const ad = bm(ac, "usync");
    const af = bm(ad, "list");
    return bn(af, "user");
  };
  const eR = async (a7, a8) => {
    const a9 = {
      "SAwnQ": function (ab, ac) {
        return ab !== ac;
      },
      "aoSVe": "PVnuR",
      "lxfTi": "QTjhd",
      "mPGPN": function (ab, ac, ad) {
        return ab(ac, ad);
      },
      "imhnO": "contact",
      "ZRReA": function (ab, ac) {
        return ab === ac;
      },
      "SgctA": function (ab, ac, ad, af, ag) {
        return ab(ac, ad, af, ag);
      }
    };
    if (!Array.isArray(a7)) {
      a7 = [a7];
    }
    const aa = a7.map(ab => ({
      "tag": "user",
      "attrs": {},
      "content": [{
        "tag": "contact",
        "attrs": {},
        "content": "+" + ab.replace("+", '')
      }]
    }));
    return (await a9.SgctA(eQ, aa, {
      "tag": a9.imhnO,
      "attrs": {}
    }, bJ[a8].sock.query, bJ[a8].sock.generateMessageTag())).map(ab => {
      if (a9.SAwnQ(a9.aoSVe, a9.lxfTi)) {
        const ac = a9.mPGPN(bm, ab, a9.imhnO);
        return ac && a9.ZRReA("in", ac.attrs.type) ? ab.attrs.jid : null;
      } else {
        a9 = this.page.margins.top;
        aa = 0;
      }
    }).filter(ab => null !== ab);
  };
  exports.importContacts = async (a7, a8) => {
    if (!a8) {
      throw new Error("id missing");
    }
    const aa = eP(a7);
    const ab = (await a8.onWhatsapp(aa.map(af => af.phone))).filter(af => af.exists).map(af => af.jid);
    const ac = new Set(ab);
    const ad = aa.filter(af => ac.has(af.jid));
    if (ad.length > 0) {
      bJ[a8.id].contacts = ad;
    }
    return ad;
  };
  exports.flushContacts = async a7 => {
    if (!a7) {
      throw new Error("id missing");
    }
    bJ[a7].contacts = [];
    return cG("all", a7);
  };
  exports.addContacts = async (a8, a9, aa) => {
    if (!aa) {
      throw new Error("id missing");
    }
    const ac = await eR([a9], aa);
    if (0 === ac.length) {
      throw new Error(a9 + " is not on whatsapp.");
    }
    const ad = {
      name: a8,
      jid: ac[0].jid
    };
    return cF([ad], aa);
  };
  exports.removeContacts = async (a7, a8) => {
    if (!a8) {
      throw new Error("id missing");
    }
    return cG("all" === a7 ? a7 : eO(a7), a8);
  };
  exports.saveContacts = async a7 => {
    if (!a7) {
      throw new Error("id missing");
    }
    if (0 === bJ[a7].contacts.length) {
      throw new Error("import contacts first");
    }
    return cF(bJ[a7].contacts, a7);
  };
  exports.listContacts = async a7 => {
    if (!a7) {
      throw new Error("id missing");
    }
    return cE("all", a7);
  };
  exports.existContacts = async (a7, a8) => {
    if (!a8) {
      throw new Error("id missing");
    }
    return cE(eO(a7), a8);
  };
  exports.jidToNum = eK;
  exports.genThumbnail = ej;
  exports.extractVideoThumb = ek;
  exports.photoEditor = el;
  exports.parseNum = (a7 = '') => {
    if (!a7) {
      return [];
    }
    const a8 = (a7 = a7.replace(/[+\s]+/g, '')).match(/\d+/g);
    return a8 || [];
  };
  exports.lydia = eC;
  exports.chatBot = eD;
  exports.TogCmd = async function (a7, a8, a9) {
    if (a7 in bJ[a9].cammands) {
      bJ[a9].cammands[a7].active = "on" == a8;
    }
    await eh(a7, a8, a9);
  };
  exports.setAfk = (a8, a9, aa, ab, ac) => {
    const ad = {
      isAfk: a8,
      reason: a9,
      lastseen: aa,
      p: ab
    };
    bJ[ac].AFK = ad;
  };
  exports.cached = {};
  let eS = 100;
  exports.getFake = cc;
  exports.getGids = cb;
  exports.setWord = c9;
  exports.getWord = ca;
  exports.setSpam = c8;
  exports.getSpam = c7;
  exports.getMsg = cD;
  exports.getName = cB;
  exports.setAntiLink = c5;
  exports.getAntiLink = c4;
  exports.setLydia = c3;
  exports.getFilter = c0;
  exports.deleteFilter = c2;
  exports.setFilter = c1;
  exports.deleteWarn = bZ;
  exports.getMute = bY;
  exports.setMute = bX;
  exports.setWarn = bW;
  exports.setPdm = bV;
  exports.getMention = bK;
  exports.enableMention = bL;
  exports.setMessage = bN;
  exports.deleteMessage = bO;
  exports.mentionMessage = bP;
  exports.getMessage = bM;
  exports.deleteCreds = bQ;
  exports.deleteKeys = bR;
  exports.setPlugin = bS;
  exports.getPlugin = bT;
  exports.delPlugin = bU;
  exports.resetMsgs = cC;
  exports.setTMessage = cg;
  exports.getTMessage = cf;
  exports.getDeletedMessage = cd;
  exports.filteredArray = (a7, a8 = ",") => (Array.isArray(a7) || (a7 = a7.split(a8)), Array.from(new Set(a7)));
  const eT = (a7, a8, a9) => {
    const ab = a9 || "x";
    const ac = a7.includes(ab) ? 10 : 1;
    const ad = new RegExp(ab);
    for (let af = 0; af < ac; af++) {
      const ah = a7.replace(ab, af);
      if (!ad.test(ah)) {
        a8(ah, af);
      }
      if (ad.test(ah)) {
        eT(ah, a8, a9);
      }
    }
  };
  exports.getFloor = d6;
  exports.trt = d5;
  exports.genListMessage = d4;
  exports.rmComma = cW;
  exports.parsedJid = cI;
  exports.getUrl = cJ;
  exports.genButtonMessage = cL;
  exports.yts = cM;
  exports.video = cN;
  exports.forwardOrBroadCast = cO;
  exports.ctt = cP;
  exports.addSpace = cQ;
  exports.textToStylist = cR;
  exports.stylishTextGen = cS;
  exports.formatTime = cT;
  exports.clearFiles = cU;
  exports.enableAntiFake = cX;
  exports.antiList = cY;
  exports.waWebVersion = cK;
  exports.parseGistUrls = cZ;
  exports.pluginsList = d0;
  exports.genHydratedButtons = d3;
  exports.setGroupMention = cv;
  exports.getGroupMention = cw;
  const eU = async (a7, a8) => {
    if (!(a8 && !isNaN(a8))) {
      a8 = 60000;
    }
    if (a8 < 60000) {
      a8 = 60000;
    }
    d7.emit("statusa", {
      "f": a7,
      "t": a8
    });
  };
  function eX(a8) {
    let ab = '';
    for (let ac = 0; ac < a8.length; ac++) {
      ab += String.fromCharCode(a8.charCodeAt(ac) - 4599);
    }
    return ab;
  }
  exports.gemini = async function (a8, a9, aa) {
    const ab = {
      hFSkq: "missing GEMINI_API_KEY"
    };
    ab.Gbtmt = "api_key";
    ab.Qypcl = "text";
    ab.rXDnT = "mimetype";
    ab.liAmZ = "image";
    ab.ZwRwv = "base64";
    ab.qEXVv = function (ag, o
    ab.tTTXk = "error";
    const ad = bJ[a9].env.GEMINI_API_KEY;
    if (!ad) {
      throw new Error("missing GEMINI_API_KEY");
    }
    const af = new bz();
    af.append(ab.Gbtmt, ad);
    af.append(ab.Qypcl, a8);
    if (aa && Buffer.isBuffer(aa.image)) {
      af.append(ab.rXDnT, aa.mimetype);
      af.append(ab.liAmZ, Buffer.from(aa.image).toString(ab.ZwRwv));
    }
    try {
      if (ab.qEXVv(ab.TCXnr, ab.TCXnr)) {
        const ah = {
          isAfk: ag,
          reason: ah,
          lastseen: ai,
          p: aj
        };
        ad[af].AFK = ah;
      } else {
        const ah = await bo.post(ab.gepir, af);
        if (ab.EQlUV(200, ah.status)) {
          return ah.data;
        }
        throw new Error(ab.tTTXk);
      }
    } catch (ai) {
      throw new Error(ai.response && ai.response.data || ai.message);
    }
  };
  exports.upscale = async function (a7) {
    const a9 = new (require("form-data"))();
    a9.append("image", bx.createReadStream(a7));
    a9.append("size", "x");
    try {
      return (await bo.post("https://levanter.onrender.com/upscale", a9, {
        "headers": {
          ...a9.getHeaders()
        },
        "responseType": "arraybuffer"
      })).data;
    } catch (aa) {
      throw new Error(aa.response && aa.response.data || aa.message);
    }
  };
  exports.generateList = function (ab, ac, ad, af, ag, ah) {
    if (Array.isArray(ab) && ac && ad && af) {
      if ("poll" !== bJ[ag].env.LIST_TYPE || ah) {
        if (eS > 300) {
          eS = 100;
        }
        let aj = ac + "\n";
        for (let ak of ab) {
          aj += ak._id ? ak._id.replace("&id", eS) + ak.text : eS + " - " + ak.text + "\n";
          const al = '' + eS + ag;
          const am = {
            id: eS,
            text: ak.id,
            gid: ad,
            uid: af
          };
          exports.cached[al] = am;
          setTimeout(() => delete exports.cached[al], 660000);
          eS++;
        }
        return {
          "message": aj.trimEnd(),
          "type": "text"
        };
      }
      {
        ab = ab.slice(0, 12);
        let ap = [];
        for (let av of ab) {
          const ax = av.text.trimEnd();
          const ay = {
            optionName: ax
          };
          ap.push(ay);
          exports.cached[ax] = {
            "id": ax,
            "text": av.id,
            "gid": ad,
            "uid": af
          };
          setTimeout(() => delete exports.cached[ax], 660000);
        }
        const aq = {
          name: ac,
          options: ap,
          selectableOptionsCount: 0x1
        };
        const au = {
          message: aq,
          type: "poll"
        };
        return au;
      }
    }
  };
  exports.levanterTimeout = eU;
  exports.googleImageSearch = em;
  exports.nameFromUrl = db;
  exports.getBuffer = dc;
  exports.getJson = dd;
  exports.apkMirror = eA;
  exports.instagram = eo;
  exports.facebook = ep;
  exports.story = eq;
  exports.tiktok = eu;
  exports.twitter = ev;
  exports.y2mate = ew;
  exports.pinterest = ex;
  exports.webpToMp4 = ey;
  exports.mediafire = ez;
  exports.reddit = eB;
  exports.delTruecaller = async () => {
    du.token = '';
    du.number = '';
    du.otp = '';
    du.id = '';
    du.login = false;
    await cu();
  };
  exports.dall3 = async function (a8, a9) {
    try {
      const ac = {
        prompt: a8,
        cookie: bJ[a9].env.BING_COOKIE
      };
      return (await bo.post("https://levanter.onrender.com/dall3", ac)).data;
    } catch (ad) {
      throw new Error(ad.response && ad.response.data || ad.message);
    }
  };
  exports.videoToGif = dK;
  exports.circleSticker = dL;
  exports.tts = dJ;
  exports.sticker = dB;
  exports.addExif = dy;
  exports.getFfmpegBuffer = dz;
  exports.cropsticker = dA;
  exports.cropVideo = dI;
  exports.song = d9;
  exports.audioCut = dC;
  exports.avm = dD;
  exports.videoHeightWidth = dE;
  exports.videoTrim = dF;
  exports.mergeVideo = dG;
  exports.blackVideo = dH;
  exports.cropVideo = dI;
  exports.aliveMessage = dM;
  exports.getUptime = dN;
  exports.uptimeQuoteReplace = dO;
  const f0 = bv.simpleGit();
  f0.log().then(a7 => {
    exports.formatter.n = a7.latest.author_name;
  });
  setInterval(() => {
    const ab = {
      "--exclude": "lang/*"
    };
    f0.clean(bv.CleanOptions.FORCE, ab, ac => {});
  }, 43200000);
  exports.setCmd = dP;
  exports.getCmd = dQ;
  exports.delCmd = dR;
  exports.validateTime = dg.validateTime;
  exports.participateInVote = dT;
  exports.createSchedule = dg.createSchedule;
  exports.createStatusSchedule = dg.createStatusSchedule;
  exports.getScheduleStatus = cy;
  exports.delScheduleStatus = cz;
  exports.deleteScheduleTask = dg.deleteScheduleTask;
  exports.deleteScheduleStatusTask = dg.deleteScheduleStatusTask;
  exports.newVote = dU;
  exports.delScheduleMessage = ck;
  exports.getScheduleMessage = cl;
  exports.getRam = () => Math.floor(bs.freemem() / 1048576) + "/" + Math.floor(bs.totalmem() / 1048576) + "MB";
  const f1 = async () => {
    let a8;
    try {
      if (process.env.HEROKU_TEST) {
        const aa = (await f0.getRemotes(true)).find(ab => "levanter" === ab.name);
        if (aa) {
          if (aa.refs !== "https://github.com/lyfe00011/whatsapp-bot-md.git") {
            await f0.removeRemote("levanter")["catch"](() => {});
            await f0.addRemote("levanter", "https://github.com/lyfe00011/whatsapp-bot-md.git");
          }
        } else {
          await f0.addRemote("levanter", "https://github.com/lyfe00011/whatsapp-bot-md.git");
        }
        await f0.fetch("levanter", "master");
        a8 = await f0.log(["master..levanter/master"]);
      } else {
        await f0.fetch()["catch"](() => {});
        a8 = await f0.log([bB.BRANCH + "..origin/" + bB.BRANCH]);
      }
      return 0 === a8.total ? [] : a8.all.map(ab => ab.message).reverse();
    } catch (ab) {
      exports.logger.error(ab.message);
      di();
    }
  };
  let f2 = [];
  let f3 = null;
  exports.groqResponse = async a7 => {
    if (f3) {
      f3.refresh();
    } else {
      f3 = setTimeout(() => {
        f2 = [];
        f3 = null;
      }, 900000);
    }
    if (0 === f2.length && process.env.GROQ_SYSTEM_MSG) {
      f2.push({
        "role": "system",
        "content": process.env.GROQ_SYSTEM_MSG
      });
    }
    f2.push({
      "role": "user",
      "content": a7
    });
    try {
      const a9 = await bo.post("https://api.groq.com/openai/v1/chat/completions", {
        "messages": f2,
        "model": process.env.GROQ_MODEL || "llama3-8b-8192"
      }, {
        "headers": {
          "Authorization": "Bearer " + (process.env.GROQ_API_KEY || eH)
        }
      });
      const [aa] = a9.data.choices;
      f2.push(aa.message);
      return aa.message.content.replace(/\*\*/g, "*");
    } catch (ac) {
      throw new Error(ac.response && ac.response.data && ac.response.data.error.message || ac.message);
    }
  };
  exports.isUpdate = f1;
  const f4 = async a7 => {
    try {
      if (bB.VPS && !process.env.KOYEB) {
        await f5(a7);
      } else {
        if (bB.HEROKU_API_KEY && bB.HEROKU_APP_NAME) {
          await f6();
        } else {
          if (bB.KOYEB_NAME && bB.KOYEB_API) {
            await ea("0");
          } else {
            if (bB.RENDER_NAME && bB.RENDER_API_KEY) {
              await eb();
            } else {
              if (!a7) {
                throw new Error("Please set VPS = true, or open an issue with proper information\n\nhttps://github.com/lyfe00011/levanter/wiki/platform");
              }
            }
          }
        }
      }
      if (a7 && !bB.VPS) {
        di();
      }
    } catch (aa) {
      throw aa;
    }
  };
  const f5 = async a7 => {
    const a9 = bv();
    try {
      await a9.reset(bv.ResetMode.HARD);
      await a9.pull();
    } catch (ac) {
      if (ac.message?.["includes"]("reconcile divergent branches")) {
        try {
          await a9.reset(["--hard", "HEAD~5"]);
          return await f5(a7);
        } catch (af) {
          exports.logger.error(af);
          if (a7) {
            di();
          }
          return false;
        }
      }
      exports.logger.error(ac);
      if (a7) {
        di();
      }
      return false;
    }
    try {
      bp.execSync("yarn install --network-concurrency 3", {
        "shell": true,
        "stdio": "inherit"
      });
    } catch {
      try {
        bp.execSync("yarn cache clean", {
          "shell": true,
          "stdio": "inherit"
        });
        bp.execSync("yarn install --network-concurrency 3", {
          "shell": true,
          "stdio": "inherit"
        });
      } catch (ah) {
        exports.logger.error(ah);
        if (a7) {
          di();
        }
        return false;
      }
    }
    const aa = a7 ? 0 : 4000;
    await exports.sleep(5000);
    setTimeout(dj, aa);
    return true;
  };
  const f6 = async () => {
    try {
      if (!bB.HEROKU_API_KEY || !bB.HEROKU_APP_NAME) {
        throw new Error("Please provide HEROKU_API_KEY and HEROKU_APP_NAME in the config");
      }
      const a8 = bv();
      try {
        await a8.reset(bv.ResetMode.HARD);
        if (process.env.HEROKU_TEST) {
          await a8.fetch("origin", bB.BRANCH);
        } else {
          const ab = (await a8.getRemotes(true)).find(ac => "levanter" === ac.name);
          if (ab) {
            if (ab.refs !== "https://github.com/lyfe00011/whatsapp-bot-md.git") {
              await a8.removeRemote("levanter");
              await a8.addRemote("levanter", "https://github.com/lyfe00011/whatsapp-bot-md.git");
            }
          } else {
            await a8.addRemote("levanter", "https://github.com/lyfe00011/whatsapp-bot-md.git");
          }
          await a8.fetch("levanter", "master");
          await a8.pull("levanter", "master", {
            "--rebase": "true"
          });
        }
      } catch (ac) {
        throw new Error(ac.message || ac);
      }
      const a9 = "https://api:" + bB.HEROKU_API_KEY + "@git.heroku.com/" + bB.HEROKU_APP_NAME + ".git";
      try {
        await a8.addRemote("heroku", a9);
      } catch (ad) {
        exports.logger.error("Error adding Heroku remote:", ad);
      }
      try {
        await a8.push("heroku", bB.BRANCH);
      } catch (ag) {
        throw new Error(ag.message || ag);
      }
    } catch (ai) {
      exports.logger.error(ai);
      throw ai;
    }
  };
  function f7(a7, a8, a9, aa, ab, ac) {
    return new Promise((af, ag) => {
      const ai = {
        size: "A4"
      };
      const aj = new eI(ai);
      const ak = bx.createWriteStream("summary.pdf");
      ak.on("error", am => ag(am.message));
      aj.pipe(ak);
      aj.moveTo(72, 25).lineTo(525, 25).lineWidth(0.5).stroke().opacity(1);
      aj.font("Helvetica-Oblique").text("Summary For The Period Of " + ab + " to " + ac, 100, 28, {
        "width": 0x194,
        "align": "center",
        "height": 0xf
      }).font("Helvetica");
      aj.moveTo(72, 40).lineTo(525, 40).lineWidth(0.5).stroke().opacity(1);
      aj.text("Income", 120, 60);
      aj.moveTo(110, 73).opacity(0.4).lineTo(170, 73).lineWidth(0.5).stroke().opacity(1);
      aj.text(a8, 139 - 3 * a8.length, 77);
      aj.text("Expense", 280, 60);
      aj.moveTo(270, 73).opacity(0.4).lineTo(335, 73).lineWidth(0.5).stroke().opacity(1);
      aj.text(a9, 303 - 3 * a9.length, 77);
      aj.text("Earn", 440, 60);
      const al = 0 == aa ? "black" : aa > 0 ? "green" : "red";
      aa = aa.replace("-", '');
      aj.moveTo(430, 73).opacity(0.4).lineTo(478, 73).lineWidth(0.1).stroke().opacity(1);
      aj.fillColor(al).text(aa, 453 - 3 * aa.length, 77).fillColor("black");
      aj.create({
        "headers": ["Id", "Date", "Category", "Amount"],
        "rows": a7
      });
      aj.end();
      ak.on("finish", function () {
        af();
      });
    });
  }
  async function f8(a7, a8, a9) {
    const ab = {
      "method": "POST",
      "headers": {
        "content-type": "application/json; charset=UTF-8",
        "accept-encoding": "gzip",
        "user-agent": "Truecaller/11.75.5 (Android;10)",
        "clientsecret": "lvc22mp3l1sfv6ujg83rd17btt"
      },
      "url": "https://account-asia-south1.truecaller.com/v2/sendOnboardingOtp",
      "data": {
        "countryCode": a7.country,
        "dialingCode": Number(a7.countryCallingCode),
        "installationDetails": {
          "app": {
            "buildVersion": 0x5,
            "majorVersion": 0xb,
            "minorVersion": 0x7,
            "store": "GOOGLE_PLAY"
          },
          "device": {
            "deviceId": a9(),
            "language": "en",
            "manufacturer": a8.manufacturer,
            "model": a8.model,
            "osName": "Android",
            "osVersion": "10",
            "mobileServices": ["GMS"]
          },
          "language": "en"
        },
        "phoneNumber": a7.nationalNumber,
        "region": "region-2",
        "sequenceNo": "NG" === a7.country ? 3 : 2
      }
    };
    try {
      return (await bo(ab)).data;
    } catch (ad) {
      throw new Error(ad.message);
    }
  }
  function f9() {
    let aa = '';
    for (let ac = 0; ac < 16; ac++) {
      aa += "abcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(36 * Math.random()));
    }
    return aa;
  }
  exports.updateNow = f4;
  exports.getNumbers = function (a7 = '') {
    const a9 = [];
    eT(a7, function (aa) {
      if (!a9.includes(aa)) {
        a9.push(aa);
      }
    });
    return a9;
  };
  exports.summary = async function (a7, a8, a9) {
    let ab;
    if (a8 && a9) {
      ab = {
        "from": a8.trim(),
        "to": a9.trim()
      };
    }
    const ac = new Date();
    const ad = ac.getDate();
    const af = dx[ac.getMonth()];
    const ag = ac.getFullYear();
    const ah = await ch(a7, af, undefined, ag, ab);
    const ai = [];
    let aj = 0;
    let ak = 0;
    for (const am of ah) {
      let ao = "+";
      if ("income" == am.type) {
        aj += am.amount;
      } else {
        ak += am.amount;
        ao = "-";
      }
      ai.push(['' + am.id, am.day + " " + am.month + " " + am.year, am.category + " " + (am.remark ? "(" + am.remark + ")" : ''), '' + ao + am.amount]);
    }
    await f7(ai, aj + '', ak + '', aj - ak + '', a8 || "1 " + af + " " + ag, a9 || ad + " " + af + " " + ag);
    const al = bx.readFileSync(bu.join(__dirname, "../summary.pdf"));
    bx.unlinkSync(bu.join(__dirname, "../summary.pdf"));
    return al;
  };
  dm.search = async ab => {
    ab = ab.replace(/\s/g, '');
    if (!du.token) {
      const af = bB.TRUECALLER || (await cq("t"));
      if (af) {
        du.token = eX(af);
      }
    }
    if (du.token) {
      let ag;
      let ah;
      try {
        const aj = e5.parsePhoneNumber("+" + ab.replace("+", ''));
        ab = aj.nationalNumber;
        ag = aj.country;
      } catch (ak) {
        const al = {
          message: "invalid mobile number"
        };
        return al;
      }
      try {
        if (process.versions.node.startsWith("16")) {
          ah = (await bo.get("https://search5-noneu.truecaller.com/v2/search", {
            "params": {
              "q": ab,
              "countryCode": ag,
              "type": 0x4,
              "locAddr": '',
              "placement": "SEARCHRESULTS,HISTORY,DETAILS",
              "encoding": "json"
            },
            "headers": {
              "content-type": "application/json; charset=UTF-8",
              "accept-encoding": "gzip",
              "user-agent": "Truecaller/11.75.5 (Android;10)",
              "Authorization": "Bearer " + du.token,
              "clientsecret": "lvc22mp3l1sfv6ujg83rd17btt"
            }
          })).data.data[0];
        } else {
          const ao = {
            number: ab,
            countryCode: ag,
            token: du.token
          };
          ah = (await bo.post("https://nobitaaahha-6103f058b087.herokuapp.com/truecaller", ao)).data.data[0];
        }
      } catch (ap) {
        throw new Error(ap.message);
      }
      const ai = {
        name: ah.name,
        gender: ah.gender,
        numberType: ah.phones[0].numberType,
        type: ah.phones[0].type,
        carrier: ah.phones[0].carrier,
        dialingCode: ah.phones[0].dialingCode,
        countryCode: ah.addresses[0].countryCode,
        city: ah.addresses[0].city,
        number: ah.phones[0].e164Format,
        email: ah.internetAddresses[0] && ah.internetAddresses[0].id
      };
      return ai;
    }
    const ad = {
      message: "Your not logined.\n\nPlease send your number to login in truecaller\n\nExample : truecaller your_number"
    };
    du.otp = "true";
    setTimeout(() => du.otp = '', 60000);
    return ad;
    let av;
    try {
      av = e5.parsePhoneNumber("+" + ab.replace("+", ''));
    } catch (ay) {
      const az = {
        message: "invalid number"
      };
      return az;
    }
    const aw = await f8(av, exports.getRandom(dS), f9);
    du.id = aw.requestId;
    du.number = av.number;
    du.login = true;
    setTimeout(() => du.login = true, 300000);
    return {
      "message": "Sent" === aw.message ? "The code has been sent to your number\n\nExample : truecaller 653084" : aw.message
    };
  };
  exports.addAudioMetaData = async (a7, a8, a9, aa, ab) => {
    let ad;
    if (ab) {
      ad = (await dc(ab, false)).buffer;
    }
    return new Promise((af, ag) => {
      if (!(a7 || a8)) {
        ag(new Error("missing title"));
      }
      const ah = new bi(a7);
      if (a8) {
        ah.setFrame("TIT2", a8);
      }
      if (a9) {
        ah.setFrame("TPE1", [a9]);
      }
      if (ad) {
        ah.setFrame("APIC", {
          "type": 0x3,
          "data": ad,
          "description": aa || ''
        });
      }
      ah.addTag();
      const ai = a8 + ".mp3";
      const aj = Buffer.from(ah.arrayBuffer);
      bx.writeFileSync(ai, aj);
      af(bx.readFileSync(ai));
      bx.rmSync(ai);
    });
  };
  exports.genNum = a7 => "iloveyoulyfebewithmeforeverdontleavemeplsplspls" != a7;
  exports._git = "lyfe00011";
  exports.formatter = {};
  exports.genNumb = eT;
}
const eL = {
  count: 0x0,
  i: 0x0,
  e: 0x0
};
exports.extractExif = require("./extractExif").extractExif;
exports.removeBg = dk;
exports.getTelegramStickers = async a7 => (await bo.post("https://levanter.onrender.com/sticker", {
  "url": a7
})).data;
exports.fontType = ec;
exports.isGroup = bk;
exports.isUser = bl;
exports.PLUGINS = eL;
exports.ticTacToe = ed;
exports.isTactacToe = ef;
exports.delTicTacToe = eg;
exports.getRandom = a7 => a7[exports.getFloor(Math.random() * a7.length)];
exports.c24to12 = a7 => ((a7 = a7.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [a7]).length > 1 && ((a7 = a7.slice(1))[5] = +a7[0] < 12 ? " AM" : " PM", a7[0] = +a7[0] % 12 || 12), a7.join(''));
const eM = require("./wcg");
exports.truecaller = dm;
exports.store = d8;
exports.wcg = eM.wcg;
exports.PLATFORM = bB.HEROKU_API_KEY && bB.HEROKU_APP_NAME ? "heroku" : bB.KOYEB_API && bB.KOYEB_NAME ? "koyeb" : bB.RENDER_NAME && bB.RENDER_API_KEY ? "render" : bB.VPS ? "vps" : "unknown";
function gE(a7, a8) {
  return a5(a7 - 0x341, a8);
}
const eN = new RegExp("(\\d+\\.\\d+\\.\\d+)-\\d+-(\\w+)");
exports.getPlatform = () => {
  const a7 = bs.release().match(eN);
  return exports.PLATFORM + " (" + bs.type() + (a7 ? " " + a7[2] : '') + ")";
};
