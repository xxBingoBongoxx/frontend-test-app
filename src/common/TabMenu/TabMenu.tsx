import React from 'react';
import styles from './TabMenu.module.scss';

type TabPanelProps = {
  isSelected: boolean;
  children?: React.ReactNode;
};

type TabNavProps = {
  tabs: { label: string; count: number }[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

export const TabNav: React.FC<TabNavProps> = ({ tabs, selected, setSelected, children }) => {
  return (
    <div className={styles.tabMenu}>
      {tabs.map((tab) => {
        const active = tab.label === selected;
        if (active) {
          return (
            <div key={tab.label} className={styles.tabItem} onClick={() => setSelected(tab.label)}>
              <div className={styles.tabText}>{tab.label}</div>
              <div className={styles.tabCount}>{tab.count}</div>
            </div>
          );
        }
        return (
          <div key={tab.label} className={styles.tabItemDisabled} onClick={() => setSelected(tab.label)}>
            <div className={styles.tabTextDisabled}>{tab.label}</div>
            <div className={styles.tabCountDisabled}>{tab.count}</div>
          </div>
        );
      })}
    </div>
  );
};

export const TabPanel: React.FC<TabPanelProps> = ({ isSelected, children }) => {
  if (isSelected) {
    return <div className={styles.tabPanel}>{children}</div>;
  }
  return null;
};
