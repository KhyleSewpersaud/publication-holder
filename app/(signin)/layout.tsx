import Nav from "../components/Nav"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="flex justify-center items-center">
        {children}
      </section>
    )
  }