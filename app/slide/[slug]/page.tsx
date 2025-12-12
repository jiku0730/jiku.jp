import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "../../../components/page-shell";
import TypewriterText from "../../../components/typewriter-text";
import { resolveEmbedUrl, slideDecks } from "../slides";

type SlideDetailPageProps = {
	params: {
		slug: string;
	};
};

export function generateStaticParams() {
	return slideDecks.map((deck) => ({ slug: deck.slug }));
}

export default function SlideDetailPage({ params }: SlideDetailPageProps) {
	const deck = slideDecks.find((item) => item.slug === params.slug);

	if (!deck) {
		notFound();
	}

	const { url, isPlaceholder } = resolveEmbedUrl(deck);

	return (
		<PageShell>
			<section id="hero" className="relative flex flex-1 items-center justify-center px-6 py-24">
				<div className="mx-auto max-w-3xl text-center">
					<p className="text-sm uppercase tracking-[0.1em] text-accent-400">{deck.heroLabel}</p>
					<h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-4xl">
						<TypewriterText text={deck.heroHeadline} speed={70} />
					</h1>
					<p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-lg">{deck.heroSummary}</p>
				</div>
			</section>

			<section className="relative border-t border-white/5 bg-slate-950/70 px-6 py-24">
				<div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
					<div className="flex flex-col gap-3">
						<p className="text-sm uppercase tracking-[0.2em] text-accent-400">Slide</p>
						<p className="text-base leading-relaxed text-slate-200">{deck.excerpt}</p>
					</div>
					<div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-xl shadow-black/30 backdrop-blur">
						{!url || isPlaceholder ? (
							<div className="flex h-[60vh] items-center justify-center rounded-2xl border border-dashed border-slate-500/50 bg-slate-900/80 px-6 text-center text-sm text-slate-300">
								<p>
									Googleスライドの埋め込みURLが未設定です。
									{deck.embedEnvKey ? (
										<span>
											環境変数
											<code className="mx-1 rounded bg-slate-800 px-1 py-0.5">{deck.embedEnvKey}</code>
											を設定するか、
											<code className="mx-1 rounded bg-slate-800 px-1 py-0.5">app/slide/slides.ts</code>
											のURLを差し替えてください。
										</span>
									) : null}
								</p>
							</div>
						) : (
							<iframe
								title={deck.title}
								src={url}
								allow="autoplay; fullscreen"
								className="h-[65vh] w-full rounded-2xl border-0"
								loading="lazy"
								allowFullScreen
							/>
						)}
					</div>
					<div className="flex items-center justify-between">
						<Link
							href="/slide"
							className="inline-flex items-center gap-2 text-sm font-semibold text-accent-400 transition hover:text-accent-500"
						>
							一覧へ戻る
							<span aria-hidden>→</span>
						</Link>
					</div>
				</div>
			</section>
		</PageShell>
	);
}
