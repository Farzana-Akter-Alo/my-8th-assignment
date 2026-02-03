import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Install = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { card, showToast } = location.state || {};

  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    if (showToast && card) {
      toast.success(`${card.title} installed successfully!`);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [showToast, card, navigate, location.pathname]);

  useEffect(() => {
    const apps = [];
    for (let key in localStorage) {
      if (
        key.startsWith("installed_") &&
        localStorage.getItem(key) === "true"
      ) {
        const storedCard = JSON.parse(
          localStorage.getItem(`card_${key.replace("installed_", "")}`),
        );
        if (storedCard) apps.push(storedCard);
      }
    }
    setInstalledApps(apps);
  }, []);

  const handleUninstall = (id) => {
    localStorage.removeItem(`installed_${id}`);
    localStorage.removeItem(`card_${id}`);
    setInstalledApps(installedApps.filter((app) => app.id !== id));
    toast.info("App uninstalled!");
  };

  return (
    <div className="w-7xl mx-auto">
      <div className="mt-16 text-center mb-40">
        <h2 className="text-3xl font-bold">Your Installed Apps</h2>
        <p className="pt-4 text-sm opacity-70">
          Explore all installed apps developed by us
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h3>
          {installedApps.length} App{installedApps.length !== 1 && "s"} Found
        </h3>
        <select className="select">
          <option disabled>Sort by size</option>
          <option>High</option>
          <option>Low</option>
        </select>
      </div>

      <div className="flex flex-col gap-4 bg-white mb-10">
        {installedApps.length === 0 ? (
          <p className="text-center text-gray-500 py-5">
            No apps installed yet
          </p>
        ) : (
          installedApps.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between p-4 rounded-md shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-16 h-16 object-cover rounded-sm"
                />
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold">{app.title}</h4>
                  <p className="text-sm text-gray-500">{app.companyName}</p>
                  <div className="flex gap-4 mt-1 text-sm">
                    <p>
                      {" "}
                      <span className="font-medium">{app.size}MB</span>
                    </p>
                    <p>
                      {" "}
                      <span className="font-medium text-green-500">
                        {app.downloads}
                      </span>
                    </p>
                    <p>
                      {" "}
                      <span className="font-medium text-orange-500">
                        {app.ratingAvg}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-green-500 text-white px-4 py-2 rounded-sm hover:bg-green-400"
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Install;
