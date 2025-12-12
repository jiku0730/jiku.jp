export type SlideDeck = {
	slug: string;
	title: string;
	heroLabel: string;
	heroHeadline: string;
	heroSummary: string;
	excerpt: string;
	embedEnvKey?: string;
	embedFallback: string;
};

export const slideDecks: SlideDeck[] = [
	{
		slug: "character-encoding",
		title: "文字コード入門スライド",
		heroLabel: "Slide Deck",
		heroHeadline: "文字コードの旅をスライドで解説します。",
		heroSummary:
			"符号化方式の進化や実務で気を付けたいポイントをまとめたスライドを、いつでも参照できるよう公開しています。",
		excerpt:
			"UTF-8 と Shift_JIS の違いから歴史的背景まで、開発現場で遭遇しやすい注意点を凝縮しました。",
		embedEnvKey: "NEXT_PUBLIC_GOOGLE_SLIDE_URL",
		embedFallback:
			"https://docs.google.com/presentation/d/e/YOUR_EMBED_ID/embed?start=false&loop=false&delayms=3000"
	}
];

export function resolveEmbedUrl(deck: SlideDeck): { url: string | undefined; isPlaceholder: boolean } {
	const envUrl = deck.embedEnvKey ? process.env[deck.embedEnvKey] : undefined;
	const cleanedEnv = envUrl?.trim();
	const usingFallback = !cleanedEnv;
	const url = usingFallback ? deck.embedFallback : cleanedEnv;
	const isPlaceholder = !url || url.includes("YOUR_EMBED_ID");
	return { url, isPlaceholder };
}
