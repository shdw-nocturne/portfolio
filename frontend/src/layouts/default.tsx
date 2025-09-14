import { Link } from "@heroui/link";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
        }}
      />
      {/* <Navbar /> */}

      <main className="container mx-auto max-w-5xl px-6 flex-grow pt-10 space-y-8 relative z-10">
        {children}
      </main>

      <footer className="w-full flex items-center justify-center py-3 relative z-10">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://guthib.com/"
          title="heroui.com homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">Jaycon Madrid</p>
        </Link>
      </footer>
    </div>
  );
}
