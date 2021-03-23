import React from 'react';
import Header from '../../common/Header';
import styles from './FAQ.module.scss';
import { TabNav, TabPanel } from '../../common/TabMenu';
import { ReactComponent as HelpIcon } from '../../assets/icons/Help.svg';

type InfoBlockProps = {
  title: string;
  text: string;
};

const InfoBlock: React.FC<InfoBlockProps> = ({ title, text }) => (
  <div className={styles.info__container}>
    <div className={styles.info__icon}>
      <HelpIcon />
    </div>
    <div className={styles.info__title}>{title}</div>
    <div className={styles.info__text}>{text}</div>
  </div>
);

const InfoBlockWrapperIssues: React.FC = () => {
  return (
    <>
      <InfoBlock
        title="What moderation means?"
        text="If you don’t have a social profile, make sure that your profile section is filled out with your best work. 
        Not having a social profile will limit your campaign offers, but it’s still possible to get projects on Insense 
        without an active social presence.
        If you don’t have a social profile, make sure that your."
      />
      <InfoBlock
        title="How to register and start working with the app?"
        text="If you don’t have a social profile, make sure that your profile section is filled out with your best work.
        Not having a social profile will limit your campaign offers, but it’s still possible to get projects on Insense
        without an active social presence.
        If you don’t have a social profile, make sure that your."
      />
      <InfoBlock
        title="Will receive offers from brands?"
        text="If you don’t have a social profile, make sure that your profile section is filled out with your best work.
        Not having a social profile will limit your campaign offers, but it’s still possible to get projects on Insense
        without an active social presence.
        If you don’t have a social profile, make sure that your."
      />
    </>
  );
};

const InfoBlockWrapperSteps: React.FC = () => {
  return (
    <>
      <InfoBlock
        title="What moderation means?"
        text="is ideal for Instagram or YouTube creators. If you do not have an account on these platforms, you are still
         welcome to join Insense - the main thing we’re after is the ability to create high quality content. is ideal for
         Instagram or YouTube creators. If you do not have an accountnt."
      />
      <InfoBlock
        title="How to register and start working with the app?"
        text="is ideal for Instagram or YouTube creators. If you do not have an account on these platforms, you are still
         welcome to join Insense - the main thing we’re after is the ability to create high quality content. is ideal for
         Instagram or YouTube creators. If you do not have an accountnt."
      />
      <InfoBlock
        title="Who can become an Insense user?"
        text="is ideal for Instagram or YouTube creators. If you do not have an account on these platforms, you are still
         welcome to join Insense - the main thing we’re after is the ability to create high quality content. is ideal for
         Instagram or YouTube creators. If you do not have an accountnt."
      />
    </>
  );
};
const InfoBlockWrapperPayment: React.FC = () => {
  return (
    <>
      <InfoBlock
        title="How can I be sure that I will be paid?"
        text="All brands working on Insense have pre-paid for creator content. When a brand approves you for working on
         a campaign, the agreed-upon payment amount is immediately frozen on the brand’s account. As soon as you 
         complete your project with the brand, your payment "
      />
      <InfoBlock
        title="What’s the payment process?"
        text="All brands working on Insense have pre-paid for creator content. When a brand approves you for working on
         a campaign, the agreed-upon payment amount is immediately frozen on the brand’s account. As soon as you
         complete your project with the brand, your payment "
      />
      <InfoBlock
        title="Is my income at Insense being taxed?"
        text="All brands working on Insense have pre-paid for creator content. When a brand approves you for working on
         a campaign, the agreed-upon payment amount is immediately frozen on the brand’s account. As soon as you
         complete your project with the brand, your payment "
      />
    </>
  );
};

const FAQ: React.FC = () => {
  const [selected, setSelected] = React.useState<string>('Authorization Issues');

  const tabs = [
    { label: 'Authorization Issues', count: 0 },
    { label: 'The first steps', count: 0 },
    { label: 'Payment', count: 0 },
  ];

  return (
    <>
      <Header />
      <div className={styles.content}>
        <div className={styles.title}>FAQ</div>
        <TabNav tabs={tabs} selected={selected} setSelected={setSelected} />
        <TabPanel isSelected={selected === tabs[0].label}>
          <InfoBlockWrapperIssues />
        </TabPanel>
        <TabPanel isSelected={selected === tabs[1].label}>
          <InfoBlockWrapperSteps />
        </TabPanel>
        <TabPanel isSelected={selected === tabs[2].label}>
          <InfoBlockWrapperPayment />
        </TabPanel>
      </div>
    </>
  );
};

export default FAQ;
