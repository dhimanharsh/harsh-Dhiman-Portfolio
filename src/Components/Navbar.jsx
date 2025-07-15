import { useRef, useState, useEffect } from "react";

// Your original tabs
const allTabs = [
  { id: "about", name: "About" },
  { id: "tools", name: "Tools" },
  { id: "projects", name: "Projects" },
  { id: "contact", name: "Contact" },
];

export const SlidingTabBar = () => {
  const tabsRef = useRef([]);
  const sectionRefs = useRef({});
  const [activeTabIndex, setActiveTabIndex] = useState(null);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTabIndex === null) return;
    const currentTab = tabsRef.current[activeTabIndex];
    if (currentTab) {
      setTabUnderlineLeft(currentTab.offsetLeft);
      setTabUnderlineWidth(currentTab.clientWidth);
    }
  }, [activeTabIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;

      allTabs.forEach((tab, index) => {
        const section = document.getElementById(tab.id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveTabIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (index, id) => {
    setActiveTabIndex(index);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flew-row relative top-9 mx-auto flex h-15 rounded-3xl border border-black/40 bg-neutral-1200 px-2 backdrop-blur-sm w-fit">
      <span
        className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-2 transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-3xl bg-gray-200/30" />
      </span>

      {allTabs.map((tab, index) => {
        const isActive = activeTabIndex === index;
        return (
          <button
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`${
              isActive ? "" : "hover:text-neutral-300"
            } my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white`}
            onClick={() => handleClick(index, tab.id)}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
};
