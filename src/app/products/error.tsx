'use client';

export default function ErrorPage(props: {
  error: Error & { digest?: string };
  params: { locale: string };
}) {
  return (
    <html lang={props.params.locale}>
      <body>Error</body>
    </html>
  );
}
