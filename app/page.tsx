import { notFound } from "next/navigation";
import type { Metadata } from "next/types";
import { getPages, getPagesSeoBySlug } from "@/api/pages";

import { mapPagesMetaData } from "@/lib/maps";
import Blocks from "@/components/blocks";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPagesSeoBySlug();
  const seo = data?.data[0]?.seo;

  const mappedMetaData = mapPagesMetaData(seo);

  return { ...mappedMetaData };
}

export default async function Home() {
  const data = await getPages();

  const pageData = data?.data?.[0];

  if (!pageData || !pageData?.blocks?.length) {
    notFound();
  }

  return (
    <main>
      <Blocks blocks={pageData?.blocks} />
    </main>
  );
}
