import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function StarterPlaceholder() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md rounded-lg border border-marine-teal/30 bg-marine-navy-light/50 p-8 shadow-xl backdrop-blur-sm">
        <h1 className="text-2xl font-bold tracking-wide text-white">{t('brand.name')}</h1>
        <p className="mt-2 text-sm text-marine-teal-light">{t('brand.tagline')}</p>
        <div className="mt-6 rounded border border-marine-teal/20 bg-marine-navy/80 p-3 text-xs text-gray-300">
          <p className="font-semibold text-marine-teal-light">{t('status.title')}</p>
          <p className="mt-1">{t('status.ready')}</p>
        </div>
      </div>
    </main>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<StarterPlaceholder />} />
    </Routes>
  );
}
