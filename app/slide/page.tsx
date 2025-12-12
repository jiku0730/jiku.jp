import Link from "next/link";
import type { Route } from "next";
import PageShell from "../../components/page-shell";
import TypewriterText from "../../components/typewriter-text";
import { slideDecks } from "./slides";

export default function SlidePage() {
	return (
		<PageShell>
			<section id="hero" className="relative flex flex-1 items-center justify-center px-6 py-24">
				<div className="mx-auto max-w-3xl text-center">
					<p className="text-sm uppercase tracking-[0.1em] text-accent-400">Slide Library</p>
					<h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-4xl">
						<TypewriterText text="学びをスライドに凝縮しています。" speed={70} />
					</h1>
					<p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-lg">
						調べた知見や勉強会の資料をまとめ、いつでも参照できるように公開しています。
					</p>
				</div>
			</section>

			<section className="relative border-t border-white/5 bg-slate-950/70 px-6 py-24">
				<div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12">
					<div className="flex flex-col gap-2 text-left">
						<p className="text-sm uppercase tracking-[0.05em] text-accent-400">Available Decks</p>
						<p className="text-base leading-relaxed text-slate-200">
							各スライドは個別ページで確認できます。
						</p>
					</div>
					<div className="grid gap-6 md:grid-cols-2">
						{slideDecks.map((deck) => {
							const href = `/slide/${deck.slug}` as Route;

							return (
								<article
									key={deck.slug}
									className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl shadow-black/30 transition hover:border-accent-500/60"
								>
									<div>
										<p className="text-xs uppercase tracking-wider text-accent-400">{deck.heroLabel}</p>
										<h2 className="mt-2 text-xl font-semibold text-white">{deck.title}</h2>
										<p className="mt-3 text-sm leading-relaxed text-slate-200">{deck.excerpt}</p>
									</div>
									<Link
										href={href}
										className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-400 transition hover:text-accent-500"
									>
										スライドを見る
										<span aria-hidden>→</span>
									</Link>
								</article>
							);
						})}
					</div>
				</div>
			</section>
		</PageShell>
	);
}
