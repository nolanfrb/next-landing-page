type MarketingLayoutProps = {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
};

export default function MarketingLayout({
  header,
  children,
  footer,
}: Readonly<MarketingLayoutProps>) {
  console.log('MarketingLayout component rendered');
  return (
    <>
      <header>{header}</header>
      <div className="">{children}</div>
      {footer}
    </>
  );
}
