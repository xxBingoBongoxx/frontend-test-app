import React from 'react';
import styles from './TabMenu.module.scss';

type TabProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

type TabItemProps = {
  label: string;
  count: number;
  disabled?: boolean;
};

type TabPanelProps = {
  index: number;
  children?: React.ReactNode;
};

export const Tabs: React.FC<TabProps> = ({ children, onClick }) => {
  return (
    <div className={styles.tabMenu} onClick={onClick}>
      {children}
    </div>
  );
};

export const Tab: React.FC<TabItemProps> = ({ label, count, disabled }) => {
  if (disabled) {
    return (
      <div className={styles.tabItemDisabled}>
        <div className={styles.tabTextDisabled}>{label}</div>
        <div className={styles.tabCountDisabled}>{count}</div>
      </div>
    );
  }
  return (
    <>
      <div className={styles.tabItem}>
        <div className={styles.tabText}>{label}</div>
        <div className={styles.tabCount}>{count}</div>
      </div>
    </>
  );
};

export const TabPanel: React.FC<TabPanelProps> = ({ index, children }) => {
  return <div className={styles.tabPanel}>{children}</div>;
};
