import DashboardWrapper from 'components/DashboardWrapper/DashboardWrapper';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-200 flex flex-col">
      <main className="flex-1 overflow-auto">
        <DashboardWrapper />
      </main>
    </div>
  );
}
