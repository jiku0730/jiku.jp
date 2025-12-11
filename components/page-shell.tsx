import type { ComponentProps, ReactNode } from "react";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

type PageShellProps = {
	children: ReactNode;
	headerProps?: ComponentProps<typeof SiteHeader>;
	hideFooter?: boolean;
};

export default function PageShell({ children, headerProps, hideFooter = false }: PageShellProps) {
	return (
		<main className="relative flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute -left-32 top-24 h-64 w-64 rounded-full bg-accent-500/40 blur-3xl" />
				<div className="absolute bottom-12 right-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
			</div>

			<SiteHeader {...headerProps} />

			{children}

			{!hideFooter && <SiteFooter />}
		</main>
	);
}
