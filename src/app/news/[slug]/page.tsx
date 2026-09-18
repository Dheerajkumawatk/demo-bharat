import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { newsItems, site } from "@/data/site";

export function generateStaticParams() {
  return newsItems.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  return { title: item ? `${item.title} | ${site.name}` : site.name };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) notFound();

  const others = newsItems.filter((n) => n.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="bg-gradient-to-b from-cream to-white">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Link href="/news" className="inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-dark">
            <ArrowLeft className="h-4 w-4" />
            सभी समाचार पर वापस जाएं
          </Link>

          <p className="mt-6 flex items-center gap-1.5 text-sm font-medium text-ink/50">
            <Calendar className="h-4 w-4" />
            {item.date}
          </p>
          <h1 className="mt-2 text-2xl font-extrabold leading-snug text-navy sm:text-3xl lg:text-4xl">
            {item.title}
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 pb-14 sm:px-6 lg:px-8">
          <PlaceholderImage icon="landmark" seed={item.slug} className="aspect-video w-full rounded-2xl" />
          <p className="mt-8 text-base leading-relaxed text-ink/75 sm:text-lg">{item.body}</p>
        </div>
      </section>

      {others.length > 0 && (
        <section className="bg-cream">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-xl font-bold text-navy sm:text-2xl">अन्य समाचार</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {others.map((n) => (
                <Link
                  key={n.slug}
                  href={`/news/${n.slug}`}
                  className="group overflow-hidden rounded-2xl bg-white ring-1 ring-navy/10 transition-shadow hover:shadow-lg"
                >
                  <PlaceholderImage icon="landmark" seed={n.slug} className="aspect-[16/10] w-full" />
                  <div className="p-4">
                    <h3 className="line-clamp-2 text-sm font-bold leading-snug text-navy group-hover:text-saffron-dark">
                      {n.title}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-saffron-dark">
                      विस्तार से पढ़ें
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
