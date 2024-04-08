import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_C4b2sq84.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/api/get-info-playlist.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/get-info-playlist\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"get-info-playlist.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/get-info-playlist.json.js","pathname":"/api/get-info-playlist.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DnFK6dK7.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.lXPFuLko.css"}],"routeData":{"route":"/playlist/[id]","isIndex":false,"type":"page","pattern":"^\\/playlist\\/([^/]+?)\\/?$","segments":[[{"content":"playlist","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/playlist/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DnFK6dK7.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.lXPFuLko.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/PC/Desktop/Dev/Spotify-clone/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/PC/Desktop/Dev/Spotify-clone/src/pages/playlist/[id].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/PC/Desktop/Dev/Spotify-clone/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/playlist/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/PC/Desktop/Dev/Spotify-clone/src/components/PlayListItemCard.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_Bhmh3tCj.mjs","/src/pages/api/get-info-playlist.json.js":"chunks/pages/get-info-playlist_B8GRQrNF.mjs","/src/pages/index.astro":"chunks/pages/index_7b74EV1s.mjs","\u0000@astrojs-manifest":"manifest_D0Vh1f4B.mjs","C:/Users/PC/Desktop/Dev/Spotify-clone/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DVP1R84v.mjs","\u0000@astro-page:src/pages/api/get-info-playlist.json@_@js":"chunks/get-info-playlist_CGJDn64f.mjs","\u0000@astro-page:src/pages/playlist/[id]@_@astro":"chunks/_id__mG6f52V1.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_CagvPvD3.mjs","@astrojs/svelte/client.js":"_astro/client.Cx1FBVJX.js","C:/Users/PC/Desktop/Dev/Spotify-clone/src/components/CardPlayButton":"_astro/CardPlayButton.CBImOWVa.js","@/components/Player.jsx":"_astro/Player.CmR7uznd.js","@astrojs/react/client.js":"_astro/client.BU_Jtjoc.js","@/components/CardPlayButton.jsx":"_astro/CardPlayButton.BCSbwdlq.js","/astro/hoisted.js?q=0":"_astro/hoisted.DnFK6dK7.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.lXPFuLko.css","/favicon.svg","/fonts/CircularStd-Black.woff2","/fonts/CircularStd-Bold.woff2","/fonts/CircularStd-Book.woff2","/fonts/CircularStd-Light.woff2","/fonts/CircularStd-Medium.woff2","/_astro/CardPlayButton.BCSbwdlq.js","/_astro/CardPlayButton.CBImOWVa.js","/_astro/client.BU_Jtjoc.js","/_astro/client.Cx1FBVJX.js","/_astro/hoisted.DnFK6dK7.js","/_astro/index.Iqf5X9Hs.js","/_astro/Player.B2ITviGC.js","/_astro/Player.CmR7uznd.js","/music/10/1.mp3","/music/10/10.mp3","/music/10/11.mp3","/music/10/12.mp3","/music/10/13.mp3","/music/10/14.mp3","/music/10/15.mp3","/music/10/16.mp3","/music/10/17.mp3","/music/10/18.mp3","/music/10/19.mp3","/music/10/2.mp3","/music/10/20.mp3","/music/10/3.mp3","/music/10/4.mp3","/music/10/5.mp3","/music/10/6.mp3","/music/10/7.mp3","/music/10/8.mp3","/music/10/9.mp3","/music/1/1.mp3","/music/1/10.mp3","/music/1/11.mp3","/music/1/12.mp3","/music/1/13.mp3","/music/1/14.mp3","/music/1/15.mp3","/music/1/16.mp3","/music/1/17.mp3","/music/1/18.mp3","/music/1/19.mp3","/music/1/2.mp3","/music/1/20.mp3","/music/1/3.mp3","/music/1/4.mp3","/music/1/5.mp3","/music/1/6.mp3","/music/1/7.mp3","/music/1/8.mp3","/music/1/9.mp3","/music/13/1.mp3","/music/13/10.mp3","/music/13/11.mp3","/music/13/12.mp3","/music/13/13.mp3","/music/13/14.mp3","/music/13/15.mp3","/music/13/16.mp3","/music/13/17.mp3","/music/13/18.mp3","/music/13/19.mp3","/music/13/2.mp3","/music/13/20.mp3","/music/13/3.mp3","/music/13/4.mp3","/music/13/5.mp3","/music/13/6.mp3","/music/13/7.mp3","/music/13/8.mp3","/music/13/9.mp3","/music/12/1.mp3","/music/12/10.mp3","/music/12/11.mp3","/music/12/12.mp3","/music/12/13.mp3","/music/12/14.mp3","/music/12/15.mp3","/music/12/16.mp3","/music/12/17.mp3","/music/12/18.mp3","/music/12/19.mp3","/music/12/2.mp3","/music/12/20.mp3","/music/12/3.mp3","/music/12/4.mp3","/music/12/5.mp3","/music/12/6.mp3","/music/12/7.mp3","/music/12/8.mp3","/music/12/9.mp3","/music/11/1.mp3","/music/11/10.mp3","/music/11/11.mp3","/music/11/12.mp3","/music/11/13.mp3","/music/11/14.mp3","/music/11/15.mp3","/music/11/16.mp3","/music/11/17.mp3","/music/11/18.mp3","/music/11/19.mp3","/music/11/2.mp3","/music/11/20.mp3","/music/11/3.mp3","/music/11/4.mp3","/music/11/5.mp3","/music/11/6.mp3","/music/11/7.mp3","/music/11/8.mp3","/music/11/9.mp3","/music/14/1.mp3","/music/14/10.mp3","/music/14/11.mp3","/music/14/12.mp3","/music/14/13.mp3","/music/14/14.mp3","/music/14/15.mp3","/music/14/16.mp3","/music/14/17.mp3","/music/14/18.mp3","/music/14/19.mp3","/music/14/2.mp3","/music/14/20.mp3","/music/14/3.mp3","/music/14/4.mp3","/music/14/5.mp3","/music/14/6.mp3","/music/14/7.mp3","/music/14/8.mp3","/music/14/9.mp3","/music/15/1.mp3","/music/15/10.mp3","/music/15/11.mp3","/music/15/12.mp3","/music/15/13.mp3","/music/15/14.mp3","/music/15/15.mp3","/music/15/16.mp3","/music/15/17.mp3","/music/15/18.mp3","/music/15/19.mp3","/music/15/2.mp3","/music/15/20.mp3","/music/15/3.mp3","/music/15/4.mp3","/music/15/5.mp3","/music/15/6.mp3","/music/15/7.mp3","/music/15/8.mp3","/music/15/9.mp3","/music/16/1.mp3","/music/16/10.mp3","/music/16/11.mp3","/music/16/12.mp3","/music/16/13.mp3","/music/16/14.mp3","/music/16/15.mp3","/music/16/16.mp3","/music/16/17.mp3","/music/16/18.mp3","/music/16/19.mp3","/music/16/2.mp3","/music/16/20.mp3","/music/16/3.mp3","/music/16/4.mp3","/music/16/5.mp3","/music/16/6.mp3","/music/16/7.mp3","/music/16/8.mp3","/music/16/9.mp3","/music/17/1.mp3","/music/17/10.mp3","/music/17/11.mp3","/music/17/12.mp3","/music/17/13.mp3","/music/17/14.mp3","/music/17/15.mp3","/music/17/16.mp3","/music/17/17.mp3","/music/17/18.mp3","/music/17/19.mp3","/music/17/2.mp3","/music/17/20.mp3","/music/17/3.mp3","/music/17/4.mp3","/music/17/5.mp3","/music/17/6.mp3","/music/17/7.mp3","/music/17/8.mp3","/music/17/9.mp3","/music/18/1.mp3","/music/18/10.mp3","/music/18/11.mp3","/music/18/12.mp3","/music/18/13.mp3","/music/18/14.mp3","/music/18/15.mp3","/music/18/16.mp3","/music/18/17.mp3","/music/18/18.mp3","/music/18/19.mp3","/music/18/2.mp3","/music/18/20.mp3","/music/18/3.mp3","/music/18/4.mp3","/music/18/5.mp3","/music/18/6.mp3","/music/18/7.mp3","/music/18/8.mp3","/music/18/9.mp3","/music/19/1.mp3","/music/19/10.mp3","/music/19/11.mp3","/music/19/12.mp3","/music/19/13.mp3","/music/19/14.mp3","/music/19/15.mp3","/music/19/16.mp3","/music/19/17.mp3","/music/19/18.mp3","/music/19/19.mp3","/music/19/2.mp3","/music/19/20.mp3","/music/19/3.mp3","/music/19/4.mp3","/music/19/5.mp3","/music/19/6.mp3","/music/19/7.mp3","/music/19/8.mp3","/music/19/9.mp3","/music/2/1.mp3","/music/2/10.mp3","/music/2/11.mp3","/music/2/12.mp3","/music/2/13.mp3","/music/2/14.mp3","/music/2/15.mp3","/music/2/16.mp3","/music/2/17.mp3","/music/2/18.mp3","/music/2/19.mp3","/music/2/2.mp3","/music/2/20.mp3","/music/2/3.mp3","/music/2/4.mp3","/music/2/5.mp3","/music/2/6.mp3","/music/2/7.mp3","/music/2/8.mp3","/music/2/9.mp3","/music/20/1.mp3","/music/20/10.mp3","/music/20/11.mp3","/music/20/12.mp3","/music/20/13.mp3","/music/20/14.mp3","/music/20/15.mp3","/music/20/16.mp3","/music/20/17.mp3","/music/20/18.mp3","/music/20/19.mp3","/music/20/2.mp3","/music/20/20.mp3","/music/20/3.mp3","/music/20/4.mp3","/music/20/5.mp3","/music/20/6.mp3","/music/20/7.mp3","/music/20/8.mp3","/music/20/9.mp3","/music/3/1.mp3","/music/3/10.mp3","/music/3/11.mp3","/music/3/12.mp3","/music/3/13.mp3","/music/3/14.mp3","/music/3/15.mp3","/music/3/16.mp3","/music/3/17.mp3","/music/3/18.mp3","/music/3/19.mp3","/music/3/2.mp3","/music/3/20.mp3","/music/3/3.mp3","/music/3/4.mp3","/music/3/5.mp3","/music/3/6.mp3","/music/3/7.mp3","/music/3/8.mp3","/music/3/9.mp3","/music/4/1.mp3","/music/4/10.mp3","/music/4/11.mp3","/music/4/12.mp3","/music/4/13.mp3","/music/4/14.mp3","/music/4/15.mp3","/music/4/16.mp3","/music/4/17.mp3","/music/4/18.mp3","/music/4/19.mp3","/music/4/2.mp3","/music/4/20.mp3","/music/4/3.mp3","/music/4/4.mp3","/music/4/5.mp3","/music/4/6.mp3","/music/4/7.mp3","/music/4/8.mp3","/music/4/9.mp3","/music/5/1.mp3","/music/5/10.mp3","/music/5/11.mp3","/music/5/12.mp3","/music/5/13.mp3","/music/5/14.mp3","/music/5/15.mp3","/music/5/16.mp3","/music/5/17.mp3","/music/5/18.mp3","/music/5/19.mp3","/music/5/2.mp3","/music/5/20.mp3","/music/5/3.mp3","/music/5/4.mp3","/music/5/5.mp3","/music/5/6.mp3","/music/5/7.mp3","/music/5/8.mp3","/music/5/9.mp3","/music/6/1.mp3","/music/6/10.mp3","/music/6/11.mp3","/music/6/12.mp3","/music/6/13.mp3","/music/6/14.mp3","/music/6/15.mp3","/music/6/16.mp3","/music/6/17.mp3","/music/6/18.mp3","/music/6/19.mp3","/music/6/2.mp3","/music/6/20.mp3","/music/6/3.mp3","/music/6/4.mp3","/music/6/5.mp3","/music/6/6.mp3","/music/6/7.mp3","/music/6/8.mp3","/music/6/9.mp3","/music/7/1.mp3","/music/7/10.mp3","/music/7/11.mp3","/music/7/12.mp3","/music/7/13.mp3","/music/7/14.mp3","/music/7/15.mp3","/music/7/16.mp3","/music/7/17.mp3","/music/7/18.mp3","/music/7/19.mp3","/music/7/2.mp3","/music/7/20.mp3","/music/7/3.mp3","/music/7/4.mp3","/music/7/5.mp3","/music/7/6.mp3","/music/7/7.mp3","/music/7/8.mp3","/music/7/9.mp3","/music/8/1.mp3","/music/8/10.mp3","/music/8/11.mp3","/music/8/12.mp3","/music/8/13.mp3","/music/8/14.mp3","/music/8/15.mp3","/music/8/16.mp3","/music/8/17.mp3","/music/8/18.mp3","/music/8/19.mp3","/music/8/2.mp3","/music/8/20.mp3","/music/8/3.mp3","/music/8/4.mp3","/music/8/5.mp3","/music/8/6.mp3","/music/8/7.mp3","/music/8/8.mp3","/music/8/9.mp3","/music/9/1.mp3","/music/9/10.mp3","/music/9/11.mp3","/music/9/12.mp3","/music/9/13.mp3","/music/9/14.mp3","/music/9/15.mp3","/music/9/16.mp3","/music/9/17.mp3","/music/9/18.mp3","/music/9/19.mp3","/music/9/2.mp3","/music/9/20.mp3","/music/9/3.mp3","/music/9/4.mp3","/music/9/5.mp3","/music/9/6.mp3","/music/9/7.mp3","/music/9/8.mp3","/music/9/9.mp3"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
