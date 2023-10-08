import '@ui/shared/ui/styles/global.scss';

export const metadata = {
  title: 'Petfinder - оголошення про зниклик тваринок',
  description:
    'Petfinder - це база оголошень про зниклих тваринок. Ми допоможемо вам знайти вашого улюбленця.'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
