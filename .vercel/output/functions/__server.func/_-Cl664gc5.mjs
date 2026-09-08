import { R as require_jsx_runtime, _ as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { l as useLanguage } from "./_ssr/language-lEFiQQqS.mjs";
import { i as SiteShell, t as Button } from "./_ssr/site-shell-CXQsHaZ2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_-Cl664gc5.js
var import_jsx_runtime = require_jsx_runtime();
function NotFoundPage() {
	const { c } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-[60vh] flex-col items-center justify-center px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.22em] text-accent uppercase",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-3xl font-semibold tracking-tight",
				children: c.notFound.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-sm text-sm text-muted",
				children: c.notFound.body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: c.notFound.home
				})
			})
		]
	}) });
}
//#endregion
export { NotFoundPage as component };
