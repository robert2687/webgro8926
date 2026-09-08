import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { R as require_jsx_runtime, _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as useLanguage, t as CONTACT } from "./language-lEFiQQqS.mjs";
import { i as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-CXQsHaZ2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function CubeMark({ className, animated = false, title = "RMD26 cube" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 120 120",
		className: cn("text-accent", className),
		role: "img",
		"aria-label": title,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
			id: "sphereFill",
			cx: "38%",
			cy: "32%",
			r: "70%",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "#3a4658"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "55%",
					stopColor: "#141820"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "#05070b"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
			id: "edge",
			x1: "0",
			y1: "0",
			x2: "1",
			y2: "1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
				offset: "0%",
				stopColor: "currentColor",
				stopOpacity: "0.95"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
				offset: "100%",
				stopColor: "currentColor",
				stopOpacity: "0.45"
			})]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			className: animated ? "origin-center" : void 0,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "60",
					cy: "64",
					rx: "22",
					ry: "22",
					fill: "url(#sphereFill)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "60",
					cy: "64",
					rx: "22",
					ry: "22",
					fill: "none",
					stroke: "currentColor",
					strokeOpacity: "0.25",
					strokeWidth: "0.8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M60 18 L102 42 L102 86 L60 110 L18 86 L18 42 Z",
					fill: "none",
					stroke: "url(#edge)",
					strokeWidth: "1.6",
					strokeLinejoin: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M60 18 L60 62 L18 86",
					fill: "none",
					stroke: "currentColor",
					strokeOpacity: "0.55",
					strokeWidth: "1.1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M60 62 L102 86",
					fill: "none",
					stroke: "currentColor",
					strokeOpacity: "0.4",
					strokeWidth: "1.1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M18 42 L60 62 L102 42",
					fill: "none",
					stroke: "currentColor",
					strokeOpacity: "0.7",
					strokeWidth: "1.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "60",
					cy: "18",
					r: "1.8",
					fill: "currentColor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "102",
					cy: "42",
					r: "1.6",
					fill: "currentColor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "18",
					cy: "42",
					r: "1.6",
					fill: "currentColor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "60",
					cy: "110",
					r: "1.6",
					fill: "currentColor"
				})
			]
		})]
	});
}
function CubeScene({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative aspect-square w-full max-w-md", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-[8%] rounded-full border border-line" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-[18%] rounded-full border border-line" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cube-spin absolute inset-0 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CubeMark, {
					className: "h-[78%] w-[78%]",
					animated: true
				})
			})
		]
	});
}
function SiteFooter() {
	const { c } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-line px-5 py-10 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "inline-flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CubeMark, { className: "size-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-sm font-semibold tracking-[0.18em]",
					children: "RMD26"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-sm text-sm leading-relaxed text-muted",
				children: c.footer.thesisLine
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-mono text-xs text-subtle",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					CONTACT.name,
					". ",
					c.footer.rights
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1",
					children: CONTACT.address
				})]
			})]
		})
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium tracking-tight outline-none select-none whitespace-nowrap transition-[background-color,color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-fg text-accent-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_20%,transparent)] hover:bg-accent",
			ghost: "bg-transparent text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_16%,transparent)] hover:bg-surface-2",
			link: "bg-transparent text-muted hover:text-fg px-0"
		},
		size: {
			md: "h-11 rounded-md px-4 text-sm min-w-11",
			sm: "h-9 rounded-sm px-3 text-xs min-w-9",
			lg: "h-12 rounded-md px-5 text-sm min-w-12"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var LINKS = [
	{
		href: "/#work",
		key: "work"
	},
	{
		href: "/#thesis",
		key: "thesis"
	},
	{
		href: "/#experience",
		key: "experience"
	},
	{
		href: "/#about",
		key: "about"
	},
	{
		href: "/#contact",
		key: "contact"
	}
];
function SiteHeader() {
	const { lang, setLang, c } = useLanguage();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-200", scrolled ? "border-line bg-bg/85 backdrop-blur-md" : "border-transparent bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5 text-fg",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CubeMark, { className: "size-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm font-semibold tracking-[0.18em]",
						children: "RMD26"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					"aria-label": "Primary",
					children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm text-muted transition-colors duration-150 hover:text-fg",
						children: c.nav[link.key]
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangToggle, {
						lang,
						setLang
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "sm",
						className: "lg:hidden",
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			id: "mobile-nav",
			className: "border-t border-line bg-bg px-5 py-4 lg:hidden",
			"aria-label": "Mobile",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col",
				children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					className: "flex min-h-11 items-center text-base text-fg",
					onClick: () => setOpen(false),
					children: c.nav[link.key]
				}) }, link.href))
			})
		}) : null]
	});
}
function LangToggle({ lang, setLang }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-9 items-center rounded-sm p-0.5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_14%,transparent)]",
		role: "group",
		"aria-label": "Language",
		children: ["en", "sk"].map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setLang(code),
			className: cn("h-8 min-w-9 rounded-[6px] px-2 font-mono text-[11px] tracking-wider uppercase transition-[background-color,color] duration-150", lang === code ? "bg-fg text-accent-fg" : "text-muted hover:text-fg"),
			"aria-pressed": lang === code,
			children: code
		}, code))
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { cn as a, SiteShell as i, CubeMark as n, CubeScene as r, Button as t };
