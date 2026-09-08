import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { R as require_jsx_runtime, _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PROJECTS, c as t, l as useLanguage, n as JOBS, o as SKILL_GROUPS, r as LANGUAGES, t as CONTACT } from "./language-lEFiQQqS.mjs";
import { a as MapPin, c as ArrowUpRight, l as ArrowRight, o as Mail, r as Phone, s as Download } from "../_libs/lucide-react.mjs";
import { a as cn, i as SiteShell, n as CubeMark, r as CubeScene, t as Button } from "./site-shell-CXQsHaZ2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DvZyImyQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Section({ id, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("relative px-5 sm:px-8", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-6xl",
			children
		})
	});
}
function SectionHead({ kicker, title, lead }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-10 max-w-2xl sm:mb-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.22em] text-accent uppercase",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-3xl font-semibold tracking-[-0.03em] text-fg sm:text-4xl",
				children: title
			}),
			lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted",
				children: lead
			}) : null
		]
	});
}
function About() {
	const { c } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		className: "border-t border-line py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				kicker: c.about.kicker,
				title: c.about.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-5 text-base leading-relaxed text-muted",
				children: c.about.body.map((para) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: para }, para))
			})]
		})
	});
}
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function Contact() {
	const { c } = useLanguage();
	const [status, setStatus] = (0, import_react.useState)("idle");
	function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const name = String(data.get("name") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		const message = String(data.get("message") ?? "").trim();
		if (!name || !EMAIL_RE.test(email) || !message) {
			setStatus("err");
			return;
		}
		const subject = encodeURIComponent(`RMD26 — ${name}`);
		const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
		window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
		setStatus("ok");
		form.reset();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		className: "border-t border-line py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					kicker: c.contact.kicker,
					title: c.contact.title,
					lead: c.contact.lead
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-5 font-mono text-[11px] tracking-[0.18em] text-subtle uppercase",
					children: c.contact.or
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${CONTACT.email}`,
							className: "flex min-h-11 items-center gap-3 text-sm text-fg transition-colors duration-150 hover:text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-accent" }), CONTACT.email]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: CONTACT.phoneHref,
							className: "flex min-h-11 items-center gap-3 text-sm text-fg transition-colors duration-150 hover:text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-accent" }), CONTACT.phone]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex min-h-11 items-center gap-3 text-sm text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-accent" }), CONTACT.address]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "rounded-xl bg-surface p-6 hairline sm:p-8",
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] tracking-[0.16em] text-muted uppercase",
							children: c.contact.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "name",
							autoComplete: "name",
							required: true,
							className: "mt-2 h-11 w-full rounded-md bg-surface-2 px-3 text-sm text-fg outline-none ring-0 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_12%,transparent)] focus:shadow-[0_0_0_1px_var(--color-accent)]"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] tracking-[0.16em] text-muted uppercase",
							children: c.contact.email
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "email",
							type: "email",
							autoComplete: "email",
							required: true,
							className: "mt-2 h-11 w-full rounded-md bg-surface-2 px-3 text-sm text-fg outline-none shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_12%,transparent)] focus:shadow-[0_0_0_1px_var(--color-accent)]"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] tracking-[0.16em] text-muted uppercase",
							children: c.contact.message
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							required: true,
							rows: 5,
							className: "mt-2 w-full resize-y rounded-md bg-surface-2 px-3 py-3 text-sm text-fg outline-none shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_12%,transparent)] focus:shadow-[0_0_0_1px_var(--color-accent)]"
						})]
					}),
					status === "err" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-warn",
						children: c.contact.error
					}) : null,
					status === "ok" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-ok",
						children: c.contact.sent
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "mt-6 w-full sm:w-auto",
						children: c.contact.send
					})
				]
			})]
		})
	});
}
function Experience() {
	const { lang, c } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "experience",
		className: "border-t border-line py-20 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			kicker: c.experience.kicker,
			title: c.experience.title,
			lead: c.experience.lead
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "relative",
			children: JOBS.map((job, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid gap-2 border-t border-line py-6 sm:grid-cols-[9rem_1fr] sm:gap-8 sm:py-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-subtle tabular-nums",
						children: job.period
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold tracking-tight text-fg",
							children: t(job.role, lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: [job.org, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-subtle",
								children: [" · ", t(job.place, lang)]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
							children: t(job.note, lang)
						})
					] }),
					i === JOBS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "End of timeline"
					}) : null
				]
			}, `${job.org}-${job.period}`))
		})]
	});
}
function Hero() {
	const { c } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "blueprint-grid pointer-events-none absolute inset-0 opacity-70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,color-mix(in_oklab,var(--color-accent)_14%,transparent),transparent_55%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-rise font-mono text-[11px] tracking-[0.24em] text-accent uppercase",
						style: { animationDelay: "40ms" },
						children: c.hero.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "hero-rise mt-4 font-display text-5xl font-semibold tracking-[-0.04em] text-fg sm:text-6xl lg:text-7xl",
						style: { animationDelay: "90ms" },
						children: c.hero.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-rise mt-5 max-w-xl text-lg leading-snug text-fg/90 sm:text-xl",
						style: { animationDelay: "140ms" },
						children: c.hero.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-rise mt-4 max-w-xl text-base leading-relaxed text-muted",
						style: { animationDelay: "190ms" },
						children: c.hero.lead
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-rise mt-8 flex flex-wrap gap-3",
						style: { animationDelay: "240ms" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#work",
									children: [c.hero.ctaWork, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: CONTACT.cvHref,
									download: true,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), c.hero.ctaCv]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "link",
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									children: c.hero.ctaContact
								})
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-rise relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end",
					style: { animationDelay: "180ms" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/media/hero-cube.jpg",
						alt: "",
						className: "absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)] rounded-xl object-cover opacity-40",
						width: 1792,
						height: 1008
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CubeScene, { className: "relative z-10" })]
				})]
			})
		]
	});
}
function StatsBar() {
	const { c } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-y border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4",
			children: c.stats.map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: i > 0 ? "border-l border-line px-5 py-6 sm:px-8" : "px-5 py-6 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl font-semibold tracking-tight text-fg tabular-nums",
					children: stat.value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-mono text-[11px] tracking-[0.16em] text-muted uppercase",
					children: stat.label
				})]
			}, stat.label))
		})
	});
}
function Projects() {
	const { lang, c } = useLanguage();
	const featured = PROJECTS[0];
	const rest = PROJECTS.slice(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "work",
		className: "border-t border-line py-20 sm:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				kicker: c.work.kicker,
				title: c.work.title,
				lead: c.work.lead
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/work/$slug",
				params: { slug: featured.slug },
				className: "group grid overflow-hidden rounded-xl bg-surface hairline lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: featured.cover,
						alt: "",
						className: "h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]",
						width: 1792,
						height: 1008
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-8 p-6 sm:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-[11px] tracking-[0.18em] text-accent uppercase",
							children: [
								featured.year,
								" · ",
								featured.tags.join(" · ")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-3xl font-semibold tracking-tight text-fg",
							children: t(featured.title, lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: t(featured.kicker, lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-relaxed text-muted",
							children: t(featured.summary, lang)
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 text-sm text-fg",
						children: [c.work.open, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 grid gap-6 md:grid-cols-2",
				children: rest.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/work/$slug",
					params: { slug: project.slug },
					className: "group flex h-full flex-col overflow-hidden rounded-xl bg-surface hairline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-[16/9] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: project.cover,
							alt: "",
							className: "h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]",
							width: 1792,
							height: 1008
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[11px] tracking-[0.16em] text-accent uppercase",
								children: [
									project.year,
									" · ",
									project.tags[0]
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-xl font-semibold tracking-tight text-fg",
								children: t(project.title, lang)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 flex-1 text-sm leading-relaxed text-muted",
								children: t(project.summary, lang)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-5 inline-flex items-center gap-2 text-sm text-fg",
								children: [c.work.open, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
							})
						]
					})]
				}) }, project.slug))
			})
		]
	});
}
function skillLabel(item, lang) {
	return typeof item === "string" ? item : t(item, lang);
}
function Skills() {
	const { lang, c } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "border-t border-line py-20 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			kicker: c.skills.kicker,
			title: c.skills.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-2",
			children: [
				SKILL_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-surface p-6 hairline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold tracking-tight",
						children: t(group.title, lang)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-wrap gap-2",
						children: group.items.map((item) => {
							const label = skillLabel(item, lang);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-sm bg-surface-2 px-3 py-1.5 font-mono text-[11px] tracking-wide text-fg",
								children: label
							}, label);
						})
					})]
				}, group.title.en)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-surface p-6 hairline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold tracking-tight",
						children: c.skills.languages
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 divide-y divide-line",
						children: LANGUAGES.map((langItem) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-baseline justify-between py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-fg",
								children: t(langItem.name, lang)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs text-muted",
								children: [
									langItem.level,
									" · ",
									t(langItem.note, lang)
								]
							})]
						}, langItem.level + langItem.name.en))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-surface p-6 hairline",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold tracking-tight",
							children: c.skills.education
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-xl font-semibold tracking-tight",
							children: c.skills.school
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: c.skills.schoolNote
						})
					]
				})
			]
		})]
	});
}
function Thesis() {
	const { c } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "thesis",
		className: "border-t border-line py-20 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			kicker: c.thesis.kicker,
			title: c.thesis.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex w-full max-w-sm items-center justify-center rounded-xl bg-surface p-8 hairline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CubeMark, { className: "h-56 w-56" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg bg-surface p-6 hairline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.18em] text-accent uppercase",
							children: c.thesis.sphereTitle
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: c.thesis.sphereBody
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg bg-surface p-6 hairline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.18em] text-accent uppercase",
							children: c.thesis.cubeTitle
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: c.thesis.cubeBody
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-semibold tracking-tight text-fg sm:col-span-2 sm:text-3xl",
						children: c.thesis.closer
					})
				]
			})]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thesis, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
	] });
}
//#endregion
export { Home as component };
