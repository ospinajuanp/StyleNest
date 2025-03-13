import PageProfile from "./PageProfile";

export default function Page({ params }: { params: { slug: string } }) {
    
    // by placing in the code the format that mateo wants

    const { slug } = params;
    return <PageProfile slug={slug} />;
}