import PageShell from "../../components/page-shell";
import TypewriterText from "../../components/typewriter-text";
import ContactForm from "./ContactForm";

export default function ContactPage() {
	return (
		<PageShell>
			<section id="hero" className="relative flex flex-1 items-center justify-center px-6 py-24">
				<div className="mx-auto max-w-3xl text-center">
					<p className="text-sm uppercase tracking-[0.1em] text-accent-400">Get In Touch</p>
					<h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-4xl">
						<TypewriterText text="連絡はこちらから。" speed={65} />
					</h1>
					<p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-lg">
						プロジェクトのお誘い、共同研究のご相談、学習コミュニティでの輪講など、お気軽にご連絡ください。
					</p>
				</div>
			</section>

			<section className="relative border-t border-white/5 bg-slate-950/70 px-6 py-24">
				<div className="mx-auto flex w-full max-w-4xl flex-col gap-12">
					<div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30 backdrop-blur">
						<h2 className="text-xl font-semibold text-white">Contact Form</h2>
						<div className="mt-6">
							<ContactForm />
						</div>
					</div>
					<div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 shadow-xl shadow-black/30 backdrop-blur">
						<h2 className="text-lg font-semibold text-white">返信ポリシー</h2>
						<ul className="mt-3 list-disc space-y-2 pl-5">
							<li>平日は48時間以内の返信を目標にしています。</li>
							<li>研究・学業の状況によってはお時間をいただく場合があります。</li>
							<li>お急ぎの場合は件名に【至急】と明記いただけると助かります。</li>
						</ul>
					</div>
				</div>
			</section>
		</PageShell>
	);
}
