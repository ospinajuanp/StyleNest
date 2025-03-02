export default function Page({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <main>
            <div>{children}</div>
        </main>

    )
}