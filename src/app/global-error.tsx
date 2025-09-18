'use client';

export default function GlobalError(props: {
  error: Error & { digest?: string };
  params: { locale: string };
}) {
  var abc = 123;
  return (
    <html lang={props.params.locale}>
      <body>
        <div className="flex-shrink-0 px-8 py-8">Global Error</div>
      </body>
    </html>
  );
}
