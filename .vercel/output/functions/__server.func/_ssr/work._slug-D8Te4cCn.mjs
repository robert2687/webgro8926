import { R as require_jsx_runtime, _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as t, l as useLanguage } from "./language-lEFiQQqS.mjs";
import { u as ArrowLeft } from "../_libs/lucide-react.mjs";
import { i as SiteShell, t as Button } from "./site-shell-CXQsHaZ2.mjs";
import { n as Route } from "./router-DD6j5e3O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-D8Te4cCn.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectPage() {
	const { project } = Route.useLoaderData();
	const { lang, c } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "px-5 pb-20 sm:px-8 sm:pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "link",
						size: "sm",
						className: "px-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							hash: "work",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), c.project.back]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 font-mono text-[11px] tracking-[0.18em] text-accent uppercase",
						children: [
							project.year,
							" · ",
							project.tags.join(" · ")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-3xl font-display text-4xl font-semibold tracking-[-0.03em] text-fg sm:text-5xl",
						children: t(project.title, lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-lg leading-relaxed text-muted",
						children: t(project.kicker, lang)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-10 max-w-6xl overflow-hidden rounded-xl hairline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.cover,
					alt: "",
					className: "aspect-[16/8] w-full object-cover",
					width: 1792,
					height: 1008
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-12 grid max-w-6xl gap-10 lg:grid-cols-[1fr_18rem] lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-semibold tracking-tight",
						children: c.project.overview
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted",
						children: t(project.summary, lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-4",
						children: t(project.body, lang).map((para) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base leading-relaxed text-muted",
							children: para
						}, para))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-surface p-5 hairline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.16em] text-subtle uppercase",
							children: c.project.stack
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-wrap gap-2",
							children: project.stack.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-sm bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-fg",
								children: item
							}, item))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "rounded-xl bg-surface p-5 hairline",
						children: project.metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between border-t border-line py-2 first:border-t-0 first:pt-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-sm text-muted",
								children: t(m.label, lang)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-mono text-sm text-fg tabular-nums",
								children: m.value
							})]
						}, m.value))
					})]
				})]
			})
		]
	}) });
}
//#endregion
export { ProjectPage as component };
