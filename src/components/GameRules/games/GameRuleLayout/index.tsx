import React from "react";
import styles from "./styles.module.css";

type Props = {
  tagline: string;
  children?: React.ReactNode
}

const GameRuleLayout: React.FC<Props> = ({tagline, children}) => (
  <div className={styles.layout}>
    <div className={styles.tagline}>{tagline}</div>
    <div>
      {children}
    </div>
  </div>
);

export default GameRuleLayout;

type RuleSectionProps = {
  title?: NonNullable<React.ReactNode>;
  children: NonNullable<React.ReactNode>;
}

export const RuleSection: React.FC<RuleSectionProps> = ({title, children}) => (
  <div className={styles.layout}>
    {title && <div className={styles.ruleSectionTitle}>{title}</div>}
    <div className={styles.ruleSectionContent}>{children}</div>
  </div>
);

type BasicRuleListProps = {
  rules: string[]
}

export const BasicRuleList: React.FC<BasicRuleListProps> = ({rules}) => (
  <ol className={styles.ruleList}>
    {rules.map((inst, i) => (
      <li key={i}>{inst}</li>
    ))}
  </ol>
);