import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function About() {
  return (
    <div className="p-6">
      <Header />
      <h1 className="text-2xl font-bold mb-6">About Page</h1>
      <div className="space-y-4 py-1 px-5">
        <Button label="Small Rounded" size="small" shape="rounded-sm" />
        <Button label="Medium Rounded" size="medium" shape="rounded-md" />
        <Button label="Large Rounded" size="large" shape="rounded-full" />
      </div>
    </div>
  );
}
