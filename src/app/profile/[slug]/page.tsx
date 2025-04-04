import PageProfile from "./PageProfile";

export default async function Page({
    params,
    }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    return <PageProfile slug={slug} />;
} 