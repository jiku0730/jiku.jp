import PageShell from "../../components/page-shell";

const slideEmbedUrl =
	process.env.NEXT_PUBLIC_GOOGLE_SLIDE_URL ??
	"https://docs.google.com/presentation/d/e/YOUR_EMBED_ID/embed?start=false&loop=false&delayms=3000";

const isPlaceholder = slideEmbedUrl.includes("YOUR_EMBED_ID");

export default function SlidePage() {
	return (
		<PageShell>
			<section className="relative flex flex-1 flex-col px-6 py-24">
				<div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12">
					<div className="space-y-5">
						<h1 className="text-4xl font-semibold text-white">Slide</h1>
						<p className="text-base leading-relaxed text-slate-200">
							文字コードの基礎を整理したGoogleスライドを掲載しています。符号化方式の違いや歴史的な背景をざっと振り返りながら、普段の開発で意識しておきたいポイントをまとめました。
						</p>
					</div>
					<div className="flex flex-1 flex-col gap-6">
						<div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-xl shadow-black/30 backdrop-blur">
							{isPlaceholder ? (
								<div className="flex h-[60vh] items-center justify-center rounded-2xl border border-dashed border-slate-500/50 bg-slate-900/80 px-6 text-center text-sm text-slate-300">
									<p>
										Googleスライドの埋め込みURLが未設定です。共有設定から「埋め込みリンク」を取得し、
										<code className="mx-1 rounded bg-slate-800 px-1 py-0.5">NEXT_PUBLIC_GOOGLE_SLIDE_URL</code>
										として環境変数に登録するか、
										<code className="mx-1 rounded bg-slate-800 px-1 py-0.5">app/slide/page.tsx</code>
										のURLを差し替えてください。
									</p>
								</div>
							) : (
								<iframe
									title="Character Encoding Slide"
									src={slideEmbedUrl}
									allow="autoplay; fullscreen"
									className="h-[65vh] w-full rounded-2xl border-0"
									loading="lazy"
									allowFullScreen
								/>
							)}
						</div>
					</div>
				</div>
			</section>
		</PageShell>
	);
}
