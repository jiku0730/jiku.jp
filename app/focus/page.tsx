import Link from "next/link";
import PageShell from "../../components/page-shell";
import TypewriterText from "../../components/typewriter-text";

type Capability = {
	title: string;
	description: string;
	stack: string[];
};

const capabilities: Capability[] = [
	{
		title: "低レイヤーの基礎力",
		description:
			"42Tokyoの課題を通じて、メモリ管理やプロセス、ファイルI/Oなどソフトウェアを支える仕組みを実装しながら理解しています。物理で鍛えた理論思考をコードの設計と検証に活かしています。",
		stack: ["C", "Shell", "Git", "Make"]
	},
	{
		title: "学習環境づくり",
		description:
			"ピアラーニングの文化に影響を受け、情報共有のためのドキュメント整備や自動化にも取り組んできました。チームで素早く学び合う仕組みを作ることに関心があります。",
		stack: ["GitHub Actions", "Notion", "Discord", "Figma"]
	}
];

export default function FocusPage() {
	return (
		<PageShell>
			<section id="hero" className="relative flex flex-1 items-center justify-center px-6 py-24">
				<div className="mx-auto max-w-3xl text-center">
					<p className="text-sm uppercase tracking-[0.1em] text-accent-400">Current Focus</p>
					<h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-4xl">
						<TypewriterText text="考える力と、作る力をつなぐ。" speed={65} />
					</h1>
					<p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-lg">
						理解を深めるために実装し、実装のためにまた学ぶ —— その往復を続けています。
					</p>
				</div>
			</section>

			<section className="relative border-t border-white/5 bg-slate-950/70 px-6 py-24">
				<div className="mx-auto w-full max-w-5xl space-y-12">
					<div className="flex flex-col gap-2 text-left">
						<p className="text-sm uppercase tracking-[0.05em] text-accent-400">Focus Areas</p>
						<p className="text-base leading-relaxed text-slate-200">
							現在注力している領域と、その背景にある考え方をまとめています。
						</p>
					</div>
					<div className="grid gap-6 md:grid-cols-2">
						{capabilities.map((item) => (
							<article
								key={item.title}
								className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl shadow-black/30 transition hover:border-accent-500/60"
							>
								<div>
									<h2 className="text-xl font-semibold text-white">{item.title}</h2>
									<p className="mt-3 text-sm leading-relaxed text-slate-200">{item.description}</p>
								</div>
								<ul className="mt-6 flex flex-wrap gap-2">
									{item.stack.map((tech) => (
										<li
											key={tech}
											className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-100"
										>
											{tech}
										</li>
									))}
								</ul>
							</article>
						))}
					</div>
					<div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 shadow-xl shadow-black/30 backdrop-blur">
						<h2 className="text-lg font-semibold text-white">Let&apos;s Collaborate</h2>
						<p className="mt-2 leading-relaxed">
							研究・プロダクト開発・学習イベントなど、気になるテーマがあればぜひ声をかけてください。共同で取り組めるアイデアをいつも探しています。
						</p>
						<Link
							href="/contact"
							className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-400 transition hover:text-accent-500"
						>
							コンタクトページへ
							<span aria-hidden>→</span>
						</Link>
					</div>
				</div>
			</section>
		</PageShell>
	);
}
