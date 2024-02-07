

const Features = () => {
  const [activeTab, setActiveTab] = useState("community");

  const tabs = [
    { name: "community", label: "Community" },
    { name: "events", label: "Events" },
    { name: "hackathons", label: "Hackathons" },
    { name: "merchandise", label: "Merchandise" },
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
  
  )
}

export default Features