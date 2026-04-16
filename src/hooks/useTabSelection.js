import { useState } from "react";

/**
 * @description Handle tab selection state
 * @param {string} tabValue - value set to the selected tab topic
 * @returns selectedTab and setSelectedTab (value and setter function)
 */
export function useTabSelection(tabValue = "Components") {
  const [selectedTab, setSelectedTab] = useState(tabValue);

  return {
    selectedTab,
    setSelectedTab,
  };
}
