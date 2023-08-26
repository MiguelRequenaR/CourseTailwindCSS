import Sidebar from "../components/SideBar"; // Componente de barra lateral
import ContentDashboard from "../components/ContentDashboard"; // Componente de contenido principal

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ContentDashboard />
    </div>
  );
};

export default Dashboard;
