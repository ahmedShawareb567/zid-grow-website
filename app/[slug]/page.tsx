import { notFound } from "next/navigation";
import type { Metadata } from "next/types";
import { getPages, getPagesSeoBySlug } from "@/api/pages";

import { mapPagesMetaData } from "@/lib/maps";
import Blocks from "@/components/blocks";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const data = await getPagesSeoBySlug(slug);
  const seo = data?.data[0]?.seo;

  const mappedMetaData = mapPagesMetaData(seo);

  return { ...mappedMetaData };
}

export default async function Slug({ params }: Props) {
  const { slug } = await params;

  const data = await getPages(slug);
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
